
import { useState, useEffect } from "react";
import { 
  destinations as allDestinations, 
  activityTypes, 
  climateTypes, 
  continentsList, 
  durationOptions, 
  accessibilityOptions, 
  riskLevels,
  onsiteDurationOptions,
  OnsiteDuration 
} from "@/data/destinations";
import { FilterOptions, initialFilterOptions, filterDestinations, sortDestinations } from "@/utils/filterUtils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Search, X, Filter, MapPin } from "lucide-react";
import DestinationCard from "./DestinationCard";
import { useSearchParams } from "react-router-dom";

// Major cities with estimated travel times between them (simplified for demo)
const TRAVEL_TIMES: Record<string, Record<string, number>> = {
  'New York': {
    'London': 7, // hours
    'Paris': 8,
    'Tokyo': 14,
    'Sydney': 22,
    'Cairo': 12,
    'Rio': 10,
    'Bangkok': 20,
  },
  'London': {
    'New York': 7,
    'Paris': 1,
    'Tokyo': 12,
    'Sydney': 22,
    'Cairo': 5,
    'Rio': 12,
    'Bangkok': 12,
  },
  'Tokyo': {
    'New York': 14,
    'London': 12,
    'Paris': 12,
    'Sydney': 10,
    'Cairo': 14,
    'Rio': 24,
    'Bangkok': 6,
  },
  'Bangkok': {
    'New York': 20,
    'London': 12,
    'Paris': 12,
    'Tokyo': 6,
    'Sydney': 9,
    'Cairo': 10,
    'Rio': 24,
  },
  'Cairo': {
    'New York': 12,
    'London': 5,
    'Paris': 4,
    'Tokyo': 14,
    'Sydney': 18,
    'Rio': 14,
    'Bangkok': 10,
  },
  'Sydney': {
    'New York': 22,
    'London': 22,
    'Paris': 22,
    'Tokyo': 10,
    'Cairo': 18,
    'Rio': 18,
    'Bangkok': 9,
  },
  'Rio': {
    'New York': 10,
    'London': 12,
    'Paris': 11,
    'Tokyo': 24,
    'Sydney': 18,
    'Cairo': 14,
    'Bangkok': 24,
  }
};

const availableDepartureCities = Object.keys(TRAVEL_TIMES);

// Convert onsite duration to hours for calculations
const onsiteDurationToHours: Record<OnsiteDuration, number> = {
  'half-day': 6,
  'full-day': 12,
  '2-3 days': 60,
  '4-7 days': 144,
  '8+ days': 240
};

// Calculate appropriate trip label based on travel time and onsite duration
const getTripLabel = (departureCity: string, destinationRegion: string, onsiteDuration: OnsiteDuration | undefined): string => {
  if (!onsiteDuration) return "Duration varies";
  
  // Simplistic mapping of regions to nearest major city
  const getClosestHub = (region: string): string => {
    const regionToHub: Record<string, string> = {
      'Western Europe': 'London',
      'Eastern Europe': 'London',
      'Mediterranean': 'Cairo',
      'North America': 'New York',
      'South America': 'Rio',
      'East Asia': 'Tokyo',
      'Southeast Asia': 'Bangkok',
      'South Asia': 'Bangkok',
      'Middle East': 'Cairo',
      'Africa': 'Cairo',
      'Oceania': 'Sydney',
    };
    
    return regionToHub[region] || 'London'; // Default to London if not found
  };
  
  const destinationHub = getClosestHub(destinationRegion);
  
  // Get approximate travel time
  const travelTimeOneWay = TRAVEL_TIMES[departureCity]?.[destinationHub] || 
                         TRAVEL_TIMES[destinationHub]?.[departureCity] || 
                         12; // Default to 12 hours if not found
  
  const totalTravelTime = travelTimeOneWay * 2; // Round trip
  const onsiteTime = onsiteDurationToHours[onsiteDuration];
  const totalTripTime = totalTravelTime + onsiteTime;
  
  // Determine appropriate label
  if (totalTripTime <= 36) {
    return `Weekend Trip from ${departureCity}`;
  } else if (totalTripTime <= 72) {
    return `Long Weekend from ${departureCity}`;
  } else if (totalTripTime <= 168) {
    return `1-Week Trip from ${departureCity}`;
  } else if (totalTripTime <= 336) {
    return `2-Week Trip from ${departureCity}`;
  } else {
    return `Extended Trip from ${departureCity}`;
  }
};

const DestinationRecommender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>(initialFilterOptions);
  const [sortBy, setSortBy] = useState("popular");
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);
  const [searchQuery, setSearchQuery] = useState("");
  const [departureCity, setDepartureCity] = useState("New York");
  const [selectedDurationFilters, setSelectedDurationFilters] = useState<string[]>([]);
  
  // Initialize from URL params if they exist
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setFilters(prev => ({ ...prev, search: searchFromUrl }));
    }
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let results = filterDestinations(allDestinations, filters);
    
    // Additional filtering for smart duration
    if (selectedDurationFilters.length > 0) {
      results = results.filter(destination => {
        if (!destination.onsiteDuration) return false;
        
        const tripLabel = getTripLabel(departureCity, destination.region, destination.onsiteDuration);
        return selectedDurationFilters.some(filter => tripLabel.includes(filter));
      });
    }
    
    results = sortDestinations(results, sortBy);
    setFilteredDestinations(results);

    // Update URL search params
    const newSearchParams = new URLSearchParams();
    if (filters.search) newSearchParams.set("search", filters.search);
    if (sortBy !== "popular") newSearchParams.set("sort", sortBy);
    if (departureCity !== "New York") newSearchParams.set("from", departureCity);
    setSearchParams(newSearchParams);
  }, [filters, sortBy, departureCity, selectedDurationFilters, setSearchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({ ...prev, search: searchQuery }));
  };

  const toggleFilter = (category: keyof FilterOptions, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter(item => item !== value)
          : [...current, value]
      };
    });
  };

  const clearFilters = () => {
    setFilters(initialFilterOptions);
    setSearchQuery("");
    setSelectedDurationFilters([]);
  };

  const hasActiveFilters = () => {
    return Object.entries(filters).some(([key, value]) => {
      if (key === 'search') return Boolean(value);
      return (value as string[]).length > 0;
    }) || selectedDurationFilters.length > 0;
  };

  const toggleDurationFilter = (value: string) => {
    setSelectedDurationFilters(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  return (
    <div className="container mx-auto px-4 py-0">
      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1500&auto=format&fit=crop"
            alt="Destination Recommender"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-heading">Find Your Perfect Destination</h1>
          <p className="max-w-2xl mx-auto text-lg text-white">
            Let us recommend the perfect virtual travel experience based on your preferences,
            travel style, and location.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search destinations..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-travel-blue" />
            <span className="font-medium">I'm traveling from:</span>
          </div>
          <Select value={departureCity} onValueChange={setDepartureCity}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {availableDepartureCities.map(city => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Activity Type Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.activities.length > 0 
                    ? `Activities (${filters.activities.length})` 
                    : "Activities"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Activity Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {activityTypes.map(activity => (
                <DropdownMenuCheckboxItem
                  key={activity}
                  checked={filters.activities.includes(activity)}
                  onCheckedChange={() => toggleFilter('activities', activity)}
                >
                  {activity}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Climate Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.climate.length > 0 
                    ? `Climate (${filters.climate.length})` 
                    : "Climate"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Climate Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {climateTypes.map(climate => (
                <DropdownMenuCheckboxItem
                  key={climate}
                  checked={filters.climate.includes(climate)}
                  onCheckedChange={() => toggleFilter('climate', climate)}
                >
                  {climate}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Continent Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.continent.length > 0 
                    ? `Continent (${filters.continent.length})` 
                    : "Continent"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Continents</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {continentsList.map(continent => (
                <DropdownMenuCheckboxItem
                  key={continent}
                  checked={filters.continent.includes(continent)}
                  onCheckedChange={() => toggleFilter('continent', continent)}
                >
                  {continent}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Smart Duration Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {selectedDurationFilters.length > 0 
                    ? `Trip Length (${selectedDurationFilters.length})` 
                    : "Trip Length"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Trip Duration from {departureCity}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["Weekend Trip", "Long Weekend", "1-Week Trip", "2-Week Trip", "Extended Trip"].map(duration => (
                <DropdownMenuCheckboxItem
                  key={duration}
                  checked={selectedDurationFilters.includes(duration)}
                  onCheckedChange={() => toggleDurationFilter(duration)}
                >
                  {duration}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Accessibility Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.accessibility.length > 0 
                    ? `Accessibility (${filters.accessibility.length})` 
                    : "Accessibility"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Accessibility Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {accessibilityOptions.map(option => (
                <DropdownMenuCheckboxItem
                  key={option}
                  checked={filters.accessibility.includes(option)}
                  onCheckedChange={() => toggleFilter('accessibility', option)}
                >
                  {option}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Risk Level Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.riskLevel.length > 0 
                    ? `Risk Level (${filters.riskLevel.length})` 
                    : "Risk Level"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Risk Levels</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {riskLevels.map(level => (
                <DropdownMenuCheckboxItem
                  key={level}
                  checked={filters.riskLevel.includes(level)}
                  onCheckedChange={() => toggleFilter('riskLevel', level)}
                >
                  {level}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-600">
            {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
                <SelectItem value="az">A-Z</SelectItem>
                <SelectItem value="za">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map(destination => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              tripLabel={getTripLabel(departureCity, destination.region, destination.onsiteDuration)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg border">
          <Filter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-xl font-bold mb-2">No destinations found</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Try adjusting your filters or search criteria to find the perfect destination for your virtual journey.
          </p>
          <Button onClick={clearFilters} className="mt-4">
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default DestinationRecommender;
