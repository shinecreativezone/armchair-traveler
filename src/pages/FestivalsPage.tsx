import { useState } from "react";
import { festivals, Festival } from "@/data/festivals";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Array of months for the slider labels and filtering
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// List of continents for filtering
const CONTINENTS = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

// Helper function to determine festival continent based on country
const getContinent = (country: string): string => {
  const europeCountries = ["Germany", "France", "Spain", "Italy", "United Kingdom", "Belgium", "Bulgaria"];
  const asiaCountries = ["India", "Japan", "Thailand", "China"];
  const africaCountries = ["Egypt", "Morocco", "South Africa"];
  const northAmericaCountries = ["United States", "Canada", "Mexico"];
  const southAmericaCountries = ["Brazil", "Argentina", "Peru"];
  const oceaniaCountries = ["Australia", "New Zealand"];
  
  if (europeCountries.includes(country)) return "Europe";
  if (asiaCountries.includes(country)) return "Asia";
  if (africaCountries.includes(country)) return "Africa";
  if (northAmericaCountries.includes(country)) return "North America";
  if (southAmericaCountries.includes(country)) return "South America";
  if (oceaniaCountries.includes(country)) return "Oceania";
  
  // Default continent based on country name for those not in our lists
  if (country === "Brazil") return "South America";
  
  return "Other";
};

export default function FestivalsPage() {
  // State for filters
  const [monthRange, setMonthRange] = useState<[number, number]>([0, 2]); // Default: Jan to Mar
  const [selectedContinents, setSelectedContinents] = useState<string[]>([...CONTINENTS]); // All continents selected by default
  
  // Handle continent selection/deselection
  const toggleContinent = (continent: string) => {
    setSelectedContinents(prev => 
      prev.includes(continent) 
        ? prev.filter(c => c !== continent) 
        : [...prev, continent]
    );
  };
  
  // Filter festivals based on selected filters
  const filteredFestivals = festivals.filter(festival => {
    // Continent filter
    const festivalContinent = getContinent(festival.country);
    const passesContinentFilter = selectedContinents.length === 0 || selectedContinents.includes(festivalContinent);
    
    // Month filter - simplify this logic
    let matchesMonthRange = false;
    const startMonth = monthRange[0];
    const endMonth = monthRange[1];
    
    // Test against each month in the date string
    for (const month of MONTHS) {
      if (festival.date.toLowerCase().includes(month.toLowerCase())) {
        const monthIndex = MONTHS.indexOf(month);
        
        // If start > end, we're looking at a wrap-around range (e.g., Nov-Feb)
        if (startMonth > endMonth) {
          if (monthIndex >= startMonth || monthIndex <= endMonth) {
            matchesMonthRange = true;
            break;
          }
        } else {
          // Regular range (e.g., Mar-Jul)
          if (monthIndex >= startMonth && monthIndex <= endMonth) {
            matchesMonthRange = true;
            break;
          }
        }
      }
    }
    
    return passesContinentFilter && matchesMonthRange;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">World Festivals</h1>
          <p className="text-center text-muted-foreground max-w-2xl">
            Discover the most famous and vibrant festivals from around the world.
          </p>
        </div>

        <div className="space-y-8">
          {/* Filters */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Filter Festivals</h2>
            
            {/* Continent Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Continents</h3>
                <button 
                  onClick={() => selectedContinents.length === CONTINENTS.length 
                    ? setSelectedContinents([]) 
                    : setSelectedContinents([...CONTINENTS])
                  }
                  className="text-xs text-travel-blue hover:underline"
                >
                  {selectedContinents.length === CONTINENTS.length ? "Clear All" : "Select All"}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {CONTINENTS.map((continent) => (
                  <div key={continent} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`continent-${continent}`} 
                      checked={selectedContinents.includes(continent)}
                      onCheckedChange={() => toggleContinent(continent)}
                    />
                    <Label htmlFor={`continent-${continent}`}>{continent}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Simple Month Range Selector */}
            <div>
              <div className="flex justify-between mb-3">
                <h3 className="text-sm font-medium">Month Range: {MONTHS[monthRange[0]]} - {MONTHS[monthRange[1]]}</h3>
              </div>
              
              <div className="px-2 pt-4 pb-2">
                <Slider
                  value={monthRange}
                  min={0}
                  max={11}
                  step={1}
                  minStepsBetweenThumbs={1}
                  onValueChange={(values: number[]) => setMonthRange([values[0], values[1]])}
                  className="mb-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  {MONTHS.map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredFestivals.length} {filteredFestivals.length === 1 ? 'Festival' : 'Festivals'} Found
            </h2>
          </div>

          {/* Festival Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredFestivals.map((festival) => (
              <Link 
                to={`/festival/${festival.id}`} 
                key={festival.id}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-md transition-all border-2 hover:border-travel-blue">
                  <div className="relative h-48">
                    <img 
                      src={festival.imageUrl} 
                      alt={festival.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getCategoryColor(festival.category)} text-white`}>
                        {festival.category}
                      </Badge>
                    </div>
                    <Badge className="absolute top-2 left-2 bg-travel-blue text-white">
                      {getContinent(festival.country)}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-xl group-hover:text-travel-blue transition-colors">
                      {festival.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPinIcon className="h-3 w-3" />
                      {festival.city}, {festival.country}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm">
                      {festival.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {festival.date}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredFestivals.length === 0 && (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <p className="text-muted-foreground">No festivals found matching your filters.</p>
              <button 
                onClick={() => {
                  setMonthRange([0, 2]);
                  setSelectedContinents([...CONTINENTS]);
                }}
                className="mt-4 text-travel-blue hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function getCategoryColor(category: Festival["category"]) {
  switch (category) {
    case "music":
      return "bg-purple-500";
    case "cultural":
      return "bg-blue-500";
    case "religious":
      return "bg-amber-500";
    case "food":
      return "bg-green-500";
    case "art":
      return "bg-pink-500";
    default:
      return "bg-gray-500";
  }
} 