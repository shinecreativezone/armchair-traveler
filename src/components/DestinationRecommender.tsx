
import { useState, useEffect } from "react";
import { 
  destinations as allDestinations, 
  activityTypes, 
  climateTypes, 
  continentsList, 
  accessibilityOptions, 
  riskLevels,
  onsiteDurationOptions,
  OnsiteDuration,
  countryList
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

// Comprehensive travel times database between major regions
// This represents average flight times in hours between global regions
const TRAVEL_TIMES_BY_REGION: Record<string, Record<string, number>> = {
  'North America': {
    'North America': 3,
    'South America': 8,
    'Western Europe': 9,
    'Eastern Europe': 11,
    'Northern Africa': 12,
    'Sub-Saharan Africa': 16,
    'Middle East': 13,
    'South Asia': 17,
    'East Asia': 14,
    'Southeast Asia': 18,
    'Oceania': 18,
    'Caribbean': 4,
    'Central America': 5,
    'Central Asia': 15
  },
  'South America': {
    'North America': 8,
    'South America': 3,
    'Western Europe': 12,
    'Eastern Europe': 15,
    'Northern Africa': 12,
    'Sub-Saharan Africa': 10,
    'Middle East': 16,
    'South Asia': 20,
    'East Asia': 22,
    'Southeast Asia': 24,
    'Oceania': 15,
    'Caribbean': 6,
    'Central America': 6,
    'Central Asia': 20
  },
  'Western Europe': {
    'North America': 9,
    'South America': 12,
    'Western Europe': 2,
    'Eastern Europe': 3,
    'Northern Africa': 4,
    'Sub-Saharan Africa': 8,
    'Middle East': 5,
    'South Asia': 9,
    'East Asia': 12,
    'Southeast Asia': 12,
    'Oceania': 22,
    'Caribbean': 10,
    'Central America': 11,
    'Central Asia': 7
  },
  'Eastern Europe': {
    'North America': 11,
    'South America': 15,
    'Western Europe': 3,
    'Eastern Europe': 2,
    'Northern Africa': 5,
    'Sub-Saharan Africa': 10,
    'Middle East': 4,
    'South Asia': 8,
    'East Asia': 10,
    'Southeast Asia': 11,
    'Oceania': 20,
    'Caribbean': 12,
    'Central America': 14,
    'Central Asia': 5
  },
  'Northern Africa': {
    'North America': 12,
    'South America': 12,
    'Western Europe': 4,
    'Eastern Europe': 5,
    'Northern Africa': 2,
    'Sub-Saharan Africa': 6,
    'Middle East': 3,
    'South Asia': 8,
    'East Asia': 12,
    'Southeast Asia': 12,
    'Oceania': 18,
    'Caribbean': 14,
    'Central America': 14,
    'Central Asia': 8
  },
  'Sub-Saharan Africa': {
    'North America': 16,
    'South America': 10,
    'Western Europe': 8,
    'Eastern Europe': 10,
    'Northern Africa': 6,
    'Sub-Saharan Africa': 3,
    'Middle East': 7,
    'South Asia': 9,
    'East Asia': 14,
    'Southeast Asia': 12,
    'Oceania': 15,
    'Caribbean': 16,
    'Central America': 16,
    'Central Asia': 13
  },
  'Middle East': {
    'North America': 13,
    'South America': 16,
    'Western Europe': 5,
    'Eastern Europe': 4,
    'Northern Africa': 3,
    'Sub-Saharan Africa': 7,
    'Middle East': 2,
    'South Asia': 5,
    'East Asia': 9,
    'Southeast Asia': 10,
    'Oceania': 16,
    'Caribbean': 16,
    'Central America': 17,
    'Central Asia': 4
  },
  'South Asia': {
    'North America': 17,
    'South America': 20,
    'Western Europe': 9,
    'Eastern Europe': 8,
    'Northern Africa': 8,
    'Sub-Saharan Africa': 9,
    'Middle East': 5,
    'South Asia': 2,
    'East Asia': 6,
    'Southeast Asia': 5,
    'Oceania': 12,
    'Caribbean': 20,
    'Central America': 19,
    'Central Asia': 5
  },
  'East Asia': {
    'North America': 14,
    'South America': 22,
    'Western Europe': 12,
    'Eastern Europe': 10,
    'Northern Africa': 12,
    'Sub-Saharan Africa': 14,
    'Middle East': 9,
    'South Asia': 6,
    'East Asia': 2,
    'Southeast Asia': 4,
    'Oceania': 10,
    'Caribbean': 20,
    'Central America': 18,
    'Central Asia': 7
  },
  'Southeast Asia': {
    'North America': 18,
    'South America': 24,
    'Western Europe': 12,
    'Eastern Europe': 11,
    'Northern Africa': 12,
    'Sub-Saharan Africa': 12,
    'Middle East': 10,
    'South Asia': 5,
    'East Asia': 4,
    'Southeast Asia': 2,
    'Oceania': 8,
    'Caribbean': 22,
    'Central America': 20,
    'Central Asia': 9
  },
  'Oceania': {
    'North America': 18,
    'South America': 15,
    'Western Europe': 22,
    'Eastern Europe': 20,
    'Northern Africa': 18,
    'Sub-Saharan Africa': 15,
    'Middle East': 16,
    'South Asia': 12,
    'East Asia': 10,
    'Southeast Asia': 8,
    'Oceania': 3,
    'Caribbean': 22,
    'Central America': 19,
    'Central Asia': 16
  },
  'Caribbean': {
    'North America': 4,
    'South America': 6,
    'Western Europe': 10,
    'Eastern Europe': 12,
    'Northern Africa': 14,
    'Sub-Saharan Africa': 16,
    'Middle East': 16,
    'South Asia': 20,
    'East Asia': 20,
    'Southeast Asia': 22,
    'Oceania': 22,
    'Caribbean': 1,
    'Central America': 3,
    'Central Asia': 18
  },
  'Central America': {
    'North America': 5,
    'South America': 6,
    'Western Europe': 11,
    'Eastern Europe': 14,
    'Northern Africa': 14,
    'Sub-Saharan Africa': 16,
    'Middle East': 17,
    'South Asia': 19,
    'East Asia': 18,
    'Southeast Asia': 20,
    'Oceania': 19,
    'Caribbean': 3,
    'Central America': 2,
    'Central Asia': 19
  },
  'Central Asia': {
    'North America': 15,
    'South America': 20,
    'Western Europe': 7,
    'Eastern Europe': 5,
    'Northern Africa': 8,
    'Sub-Saharan Africa': 13,
    'Middle East': 4,
    'South Asia': 5,
    'East Asia': 7,
    'Southeast Asia': 9,
    'Oceania': 16,
    'Caribbean': 18,
    'Central America': 19,
    'Central Asia': 2
  }
};

// Country to region mapping
const COUNTRY_TO_REGION: Record<string, string> = {
  'United States': 'North America',
  'Canada': 'North America',
  'Mexico': 'North America',
  'Brazil': 'South America',
  'Argentina': 'South America',
  'Chile': 'South America',
  'Peru': 'South America',
  'Colombia': 'South America',
  'United Kingdom': 'Western Europe',
  'France': 'Western Europe',
  'Germany': 'Western Europe',
  'Italy': 'Western Europe',
  'Spain': 'Western Europe',
  'Portugal': 'Western Europe',
  'Netherlands': 'Western Europe',
  'Belgium': 'Western Europe',
  'Switzerland': 'Western Europe',
  'Austria': 'Western Europe',
  'Greece': 'Western Europe',
  'Sweden': 'Western Europe',
  'Norway': 'Western Europe',
  'Denmark': 'Western Europe',
  'Finland': 'Western Europe',
  'Ireland': 'Western Europe',
  'Poland': 'Eastern Europe',
  'Ukraine': 'Eastern Europe',
  'Romania': 'Eastern Europe',
  'Czech Republic': 'Eastern Europe',
  'Hungary': 'Eastern Europe',
  'Bulgaria': 'Eastern Europe',
  'Croatia': 'Eastern Europe',
  'Serbia': 'Eastern Europe',
  'Russia': 'Eastern Europe',
  'Egypt': 'Northern Africa',
  'Morocco': 'Northern Africa',
  'Tunisia': 'Northern Africa',
  'Algeria': 'Northern Africa',
  'Libya': 'Northern Africa',
  'South Africa': 'Sub-Saharan Africa',
  'Kenya': 'Sub-Saharan Africa',
  'Nigeria': 'Sub-Saharan Africa',
  'Ghana': 'Sub-Saharan Africa',
  'Ethiopia': 'Sub-Saharan Africa',
  'Tanzania': 'Sub-Saharan Africa',
  'Uganda': 'Sub-Saharan Africa',
  'Saudi Arabia': 'Middle East',
  'United Arab Emirates': 'Middle East',
  'Israel': 'Middle East',
  'Turkey': 'Middle East',
  'Iran': 'Middle East',
  'Iraq': 'Middle East',
  'Qatar': 'Middle East',
  'Lebanon': 'Middle East',
  'Jordan': 'Middle East',
  'Kuwait': 'Middle East',
  'Bahrain': 'Middle East',
  'Oman': 'Middle East',
  'India': 'South Asia',
  'Pakistan': 'South Asia',
  'Bangladesh': 'South Asia',
  'Sri Lanka': 'South Asia',
  'Nepal': 'South Asia',
  'China': 'East Asia',
  'Japan': 'East Asia',
  'South Korea': 'East Asia',
  'North Korea': 'East Asia',
  'Taiwan': 'East Asia',
  'Mongolia': 'East Asia',
  'Thailand': 'Southeast Asia',
  'Vietnam': 'Southeast Asia',
  'Indonesia': 'Southeast Asia',
  'Malaysia': 'Southeast Asia',
  'Philippines': 'Southeast Asia',
  'Singapore': 'Southeast Asia',
  'Myanmar': 'Southeast Asia',
  'Cambodia': 'Southeast Asia',
  'Laos': 'Southeast Asia',
  'Australia': 'Oceania',
  'New Zealand': 'Oceania',
  'Fiji': 'Oceania',
  'Papua New Guinea': 'Oceania',
  'Jamaica': 'Caribbean',
  'Cuba': 'Caribbean',
  'Dominican Republic': 'Caribbean',
  'Puerto Rico': 'Caribbean',
  'Bahamas': 'Caribbean',
  'Trinidad and Tobago': 'Caribbean',
  'Haiti': 'Caribbean',
  'Guatemala': 'Central America',
  'Costa Rica': 'Central America',
  'Panama': 'Central America',
  'Honduras': 'Central America',
  'El Salvador': 'Central America',
  'Nicaragua': 'Central America',
  'Belize': 'Central America',
  'Kazakhstan': 'Central Asia',
  'Uzbekistan': 'Central Asia',
  'Turkmenistan': 'Central Asia',
  'Kyrgyzstan': 'Central Asia',
  'Tajikistan': 'Central Asia',
  'Azerbaijan': 'Central Asia',
  'Armenia': 'Central Asia',
  'Georgia': 'Central Asia'
};

// For countries not explicitly listed, assign a default region based on continent
const getRegionForCountry = (country: string): string => {
  if (COUNTRY_TO_REGION[country]) {
    return COUNTRY_TO_REGION[country];
  }
  
  // Default mappings based on country name patterns
  if (country.includes('Island') || country.includes('Pacific')) {
    return 'Oceania';
  }
  
  return 'Western Europe'; // Default fallback
};

// Convert onsite duration to hours for calculations
const onsiteDurationToHours: Record<OnsiteDuration, number> = {
  'half-day': 6,
  'full-day': 12,
  '2-3 days': 60,
  '4-7 days': 144,
  '8+ days': 240
};

// Calculate appropriate trip label based on travel time and onsite duration
const getTripLabel = (departureCountry: string, destinationRegion: string, onsiteDuration: OnsiteDuration | undefined): string => {
  if (!onsiteDuration) return "Duration varies";
  
  // Get region of departure country
  const departureRegion = getRegionForCountry(departureCountry);
  
  // Get approximate travel time between regions
  const travelTimeOneWay = TRAVEL_TIMES_BY_REGION[departureRegion]?.[destinationRegion] || 
                          (TRAVEL_TIMES_BY_REGION[destinationRegion]?.[departureRegion] || 12); // Default to 12 hours if not found
  
  const totalTravelTime = travelTimeOneWay * 2; // Round trip
  const onsiteTime = onsiteDurationToHours[onsiteDuration];
  const totalTripTime = totalTravelTime + onsiteTime;
  
  // Determine appropriate label
  if (totalTripTime <= 36) {
    return `Weekend Trip from ${departureCountry}`;
  } else if (totalTripTime <= 72) {
    return `Long Weekend from ${departureCountry}`;
  } else if (totalTripTime <= 168) {
    return `1-Week Trip from ${departureCountry}`;
  } else if (totalTripTime <= 336) {
    return `2-Week Trip from ${departureCountry}`;
  } else {
    return `Extended Trip from ${departureCountry}`;
  }
};

const DestinationRecommender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>(initialFilterOptions);
  const [sortBy, setSortBy] = useState("popular");
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);
  const [searchQuery, setSearchQuery] = useState("");
  const [departureCountry, setDepartureCountry] = useState("United States");
  const [selectedDurationFilters, setSelectedDurationFilters] = useState<string[]>([]);
  
  // Initialize from URL params if they exist
  useEffect(() => {
    const searchFromUrl = searchParams.get("search");
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      setFilters(prev => ({ ...prev, search: searchFromUrl }));
    }
    
    const fromCountry = searchParams.get("from");
    if (fromCountry && countryList.includes(fromCountry)) {
      setDepartureCountry(fromCountry);
    }
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let results = filterDestinations(allDestinations, filters);
    
    // Additional filtering for smart duration
    if (selectedDurationFilters.length > 0) {
      results = results.filter(destination => {
        if (!destination.onsiteDuration) return false;
        
        const tripLabel = getTripLabel(departureCountry, destination.region, destination.onsiteDuration);
        return selectedDurationFilters.some(filter => tripLabel.includes(filter));
      });
    }
    
    results = sortDestinations(results, sortBy);
    setFilteredDestinations(results);

    // Update URL search params
    const newSearchParams = new URLSearchParams();
    if (filters.search) newSearchParams.set("search", filters.search);
    if (sortBy !== "popular") newSearchParams.set("sort", sortBy);
    if (departureCountry !== "United States") newSearchParams.set("from", departureCountry);
    setSearchParams(newSearchParams);
  }, [filters, sortBy, departureCountry, selectedDurationFilters, setSearchParams]);

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
          <Select value={departureCountry} onValueChange={setDepartureCountry}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {countryList.map(country => (
                <SelectItem key={country} value={country}>{country}</SelectItem>
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
              <DropdownMenuLabel>Trip Duration from {departureCountry}</DropdownMenuLabel>
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
              tripLabel={getTripLabel(departureCountry, destination.region, destination.onsiteDuration)}
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
