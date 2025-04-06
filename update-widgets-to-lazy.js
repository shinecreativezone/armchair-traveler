import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

      // Skip if file doesn't have the widget
      if (!data.includes('data-gyg-widget="auto"')) {
        console.log(`${file} doesn't have widget, skipping`);
        skippedCount++;
        return;
      }

      // Add import for LazyGetYourGuideWidget if not already present
      let updatedData = data;
      if (!data.includes('import LazyGetYourGuideWidget')) {
        // Find last import line
        const importRegex = /import.*from.*;\n/g;
        let lastImportMatch;
        let match;
        
        while ((match = importRegex.exec(data)) !== null) {
          lastImportMatch = match;
        }
        
        if (lastImportMatch) {
          const insertPos = lastImportMatch.index + lastImportMatch[0].length;
          updatedData = data.slice(0, insertPos) + 
            'import LazyGetYourGuideWidget from "@/components/LazyGetYourGuideWidget";\n' + 
            data.slice(insertPos);
        }
      }

      // Replace direct widget with LazyGetYourGuideWidget
      const widgetRegex = /{\s*\/\*\s*GetYourGuide Widget\s*\*\/\s*}\s*<div[^>]*>\s*<div[^>]*data-gyg-widget="auto"[^>]*><\/div>\s*<\/div>/g;
      updatedData = updatedData.replace(widgetRegex, '{/* GetYourGuide Widget */}\n              <LazyGetYourGuideWidget />');
      
      // Check if any changes were made
      if (updatedData === data) {
        console.log(`No changes needed for ${file}`);
        skippedCount++;
        return;
      }

      // Write updated file
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing ${file}:`, err);
          errorCount++;
          return;
        }
        
        updatedCount++;
        console.log(`Updated ${file} to use LazyGetYourGuideWidget`);
      });
    });
  });

  // Also update the Experience and Festival pages
  const otherPaths = [
    path.join(__dirname, 'src', 'pages', 'ExperiencePage.tsx'),
    path.join(__dirname, 'src', 'pages', 'FestivalDetail.tsx')
  ];

  otherPaths.forEach(filePath => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file:`, err);
        errorCount++;
        return;
      }

      // Skip if file doesn't have the widget
      if (!data.includes('data-gyg-widget="auto"')) {
        console.log(`${path.basename(filePath)} doesn't have widget, skipping`);
        skippedCount++;
        return;
      }

      // Add import for LazyGetYourGuideWidget if not already present
      let updatedData = data;
      if (!data.includes('import LazyGetYourGuideWidget')) {
        // Find last import line
        const importRegex = /import.*from.*;\n/g;
        let lastImportMatch;
        let match;
        
        while ((match = importRegex.exec(data)) !== null) {
          lastImportMatch = match;
        }
        
        if (lastImportMatch) {
          const insertPos = lastImportMatch.index + lastImportMatch[0].length;
          updatedData = data.slice(0, insertPos) + 
            'import LazyGetYourGuideWidget from "@/components/LazyGetYourGuideWidget";\n' + 
            data.slice(insertPos);
        }
      }

      // Replace direct widget with LazyGetYourGuideWidget
      const widgetRegex = /{\s*\/\*\s*GetYourGuide Widget\s*\*\/\s*}\s*<div[^>]*>\s*<div[^>]*data-gyg-widget="auto"[^>]*><\/div>\s*<\/div>/g;
      updatedData = updatedData.replace(widgetRegex, '{/* GetYourGuide Widget */}\n      <LazyGetYourGuideWidget />');
      
      // Check if any changes were made
      if (updatedData === data) {
        console.log(`No changes needed for ${path.basename(filePath)}`);
        skippedCount++;
        return;
      }

      // Write updated file
      fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing ${path.basename(filePath)}:`, err);
          errorCount++;
          return;
        }
        
        updatedCount++;
        console.log(`Updated ${path.basename(filePath)} to use LazyGetYourGuideWidget`);
      });
    });
  });

  // Report summary
  setTimeout(() => {
    console.log(`\nCompleted: Updated ${updatedCount} files to use LazyGetYourGuideWidget`);
    console.log(`Skipped: ${skippedCount} files`);
    console.log(`Errors: ${errorCount} files`);
  }, 3000);
}); 