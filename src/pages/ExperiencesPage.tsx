import { useState } from "react";
import { experiences, Experience } from "@/data/experiences";
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

// List of continents for filtering
const CONTINENTS = ["Africa", "Asia", "Europe", "North America", "South America", "Oceania"];

// List of experience categories
const CATEGORIES = ["nature", "cultural", "adventure", "urban", "resort", "culinary", "historical"];

// Helper function to determine continent based on country
const getContinent = (country: string): string => {
  const europeCountries = ["Germany", "France", "Spain", "Italy", "United Kingdom", "Greece", "Norway", "Belgium", "Bulgaria"];
  const asiaCountries = ["India", "Japan", "Thailand", "China", "Cambodia", "Jordan"];
  const africaCountries = ["Egypt", "Morocco", "South Africa", "Tanzania"];
  const northAmericaCountries = ["United States", "Canada", "Mexico"];
  const southAmericaCountries = ["Brazil", "Argentina", "Peru", "Chile"];
  const oceaniaCountries = ["Australia", "New Zealand"];
  
  if (europeCountries.includes(country)) return "Europe";
  if (asiaCountries.includes(country)) return "Asia";
  if (africaCountries.includes(country)) return "Africa";
  if (northAmericaCountries.includes(country)) return "North America";
  if (southAmericaCountries.includes(country)) return "South America";
  if (oceaniaCountries.includes(country)) return "Oceania";
  
  return "Other";
};

export default function ExperiencesPage() {
  // State for filters
  const [selectedContinents, setSelectedContinents] = useState<string[]>([...CONTINENTS]); // All continents selected by default
  const [selectedCategories, setSelectedCategories] = useState<string[]>([...CATEGORIES]); // All categories selected by default
  const [searchQuery, setSearchQuery] = useState("");
  
  // Handle continent selection/deselection
  const toggleContinent = (continent: string) => {
    setSelectedContinents(prev => 
      prev.includes(continent) 
        ? prev.filter(c => c !== continent) 
        : [...prev, continent]
    );
  };
  
  // Handle category selection/deselection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  // Filter experiences based on selected filters
  const filteredExperiences = experiences.filter(experience => {
    // Continent filter
    const experienceContinent = getContinent(experience.country);
    const passesContinentFilter = selectedContinents.length === 0 || selectedContinents.includes(experienceContinent);
    
    // Category filter
    const passesCategoryFilter = selectedCategories.length === 0 || selectedCategories.includes(experience.category);
    
    // Search filter
    const matchesSearch = searchQuery === "" || 
      experience.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      experience.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return passesContinentFilter && passesCategoryFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">Travel Experiences</h1>
          <p className="text-center text-muted-foreground max-w-2xl">
            Discover unforgettable travel experiences and adventures from around the world.
          </p>
        </div>

        <div className="space-y-8">
          {/* Filters */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Filter Experiences</h2>
            
            {/* Search */}
            <div className="mb-6">
              <Label htmlFor="search-experiences" className="text-sm font-medium mb-2 block">Search</Label>
              <input
                id="search-experiences"
                type="text"
                placeholder="Search by name, country, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            
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
            
            {/* Category Filter */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Categories</h3>
                <button 
                  onClick={() => selectedCategories.length === CATEGORIES.length 
                    ? setSelectedCategories([]) 
                    : setSelectedCategories([...CATEGORIES])
                  }
                  className="text-xs text-travel-blue hover:underline"
                >
                  {selectedCategories.length === CATEGORIES.length ? "Clear All" : "Select All"}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
                {CATEGORIES.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="capitalize">{category}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredExperiences.length} {filteredExperiences.length === 1 ? 'Experience' : 'Experiences'} Found
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <Link 
                to={`/experience/${experience.id}`} 
                key={experience.id}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:shadow-md transition-all border-2 hover:border-travel-blue">
                  <div className="relative h-48">
                    <img 
                      src={experience.imageUrl} 
                      alt={experience.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getCategoryColor(experience.category)} text-white capitalize`}>
                        {experience.category}
                      </Badge>
                    </div>
                    <Badge className="absolute top-2 left-2 bg-travel-blue text-white">
                      {getContinent(experience.country)}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-xl group-hover:text-travel-blue transition-colors">
                      {experience.name}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPinIcon className="h-3 w-3" />
                      {experience.city}, {experience.country}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm">
                      {experience.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      Best time: {experience.bestTime}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredExperiences.length === 0 && (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <p className="text-muted-foreground">No experiences found matching your filters.</p>
              <button 
                onClick={() => {
                  setSelectedContinents([...CONTINENTS]);
                  setSelectedCategories([...CATEGORIES]);
                  setSearchQuery("");
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

function getCategoryColor(category: Experience["category"]) {
  switch (category) {
    case "nature":
      return "bg-green-500";
    case "cultural":
      return "bg-blue-500";
    case "adventure":
      return "bg-red-500";
    case "urban":
      return "bg-purple-500";
    case "resort":
      return "bg-cyan-500";
    case "culinary":
      return "bg-amber-500";
    case "historical":
      return "bg-gray-500";
    default:
      return "bg-travel-blue";
  }
} 