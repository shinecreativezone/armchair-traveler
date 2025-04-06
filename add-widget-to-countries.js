import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WIDGET_CODE = `              {/* GetYourGuide Widget */}
              <div className="mt-6">
                <div data-gyg-widget="auto" data-gyg-partner-id="DHU8TI0"></div>
              </div>
`;

const countriesDir = path.join(__dirname, 'src', 'pages', 'countries');

// Read all country files
fs.readdir(countriesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for country files
  const countryFiles = files.filter(file => file.endsWith('Country.tsx'));
  console.log(`Found ${countryFiles.length} country files`);
  
  let updatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // Process each country file
  countryFiles.forEach(file => {
    const filePath = path.join(countriesDir, file);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading ${file}:`, err);
        errorCount++;
        return;
      }

      // Skip if widget already exists
      if (data.includes('data-gyg-widget="auto"')) {
        console.log(`${file} already has widget, skipping`);
        skippedCount++;
        return;
      }

      // Find position to insert widget - look for tags section followed by Tabs
      // Using a more flexible approach with regex
      const tagsPattern = /<div[^>]*className="flex flex-wrap gap-2 mt-3"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<Tabs/;
      const match = data.match(tagsPattern);
      
      if (!match) {
        console.log(`Could not find exact insertion point in ${file}, trying alternative`);
        
        // Try alternative insertion point - before the first Tabs section
        const tabsIndex = data.indexOf('<Tabs defaultValue="attractions"');
        
        if (tabsIndex === -1) {
          console.log(`Could not find Tabs in ${file}, skipping`);
          skippedCount++;
          return;
        }
        
        // Find the element before Tabs (usually some div)
        const prevElementEnd = data.lastIndexOf('</div>', tabsIndex);
        if (prevElementEnd === -1) {
          console.log(`Could not find element before Tabs in ${file}, skipping`);
          skippedCount++;
          return;
        }
        
        // Insert the widget after the previous element
        const updatedData = data.slice(0, prevElementEnd + 6) + '\n' + WIDGET_CODE + data.slice(prevElementEnd + 6);
        
        // Write updated file
        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing ${file}:`, err);
            errorCount++;
            return;
          }
          
          updatedCount++;
          console.log(`Added widget to ${file} (alternative method)`);
        });
        
        return;
      }
      
      // Regular insertion point found, insert after the tags section
      const matchIndex = match.index;
      const insertPos = data.indexOf('</div>', matchIndex) + 6;
      
      // Insert the widget
      const updatedData = data.slice(0, insertPos) + '\n' + WIDGET_CODE + data.slice(insertPos);
      
      // Write updated file
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing ${file}:`, err);
          errorCount++;
          return;
        }
        
        updatedCount++;
        console.log(`Added widget to ${file} (standard method)`);
      });
    });
  });

  // Report summary
  setTimeout(() => {
    console.log(`\nCompleted: Added widget to ${updatedCount} files`);
    console.log(`Skipped: ${skippedCount} files`);
    console.log(`Errors: ${errorCount} files`);
  }, 3000);
});