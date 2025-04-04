
import { useState, useEffect } from "react";
import { 
  destinations as allDestinations, 
  activityTypes, 
  climateTypes, 
  continentsList, 
  durationOptions, 
  accessibilityOptions, 
  riskLevels 
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
import { Search, X, Filter } from "lucide-react";
import DestinationCard from "./DestinationCard";
import { useSearchParams } from "react-router-dom";

const DestinationRecommender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>(initialFilterOptions);
  const [sortBy, setSortBy] = useState("popular");
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);
  const [searchQuery, setSearchQuery] = useState("");

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
    results = sortDestinations(results, sortBy);
    setFilteredDestinations(results);

    // Update URL search params
    const newSearchParams = new URLSearchParams();
    if (filters.search) newSearchParams.set("search", filters.search);
    if (sortBy !== "popular") newSearchParams.set("sort", sortBy);
    setSearchParams(newSearchParams);
  }, [filters, sortBy, setSearchParams]);

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
  };

  const hasActiveFilters = () => {
    return Object.entries(filters).some(([key, value]) => {
      if (key === 'search') return Boolean(value);
      return (value as string[]).length > 0;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold text-heading">Find Your Perfect Destination</h2>
        
        {hasActiveFilters() && (
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            Clear Filters
          </Button>
        )}
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

          {/* Duration Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <span className="truncate">
                  {filters.duration.length > 0 
                    ? `Duration (${filters.duration.length})` 
                    : "Duration"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Trip Duration</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {durationOptions.map(duration => (
                <DropdownMenuCheckboxItem
                  key={duration}
                  checked={filters.duration.includes(duration)}
                  onCheckedChange={() => toggleFilter('duration', duration)}
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
            <DestinationCard key={destination.id} destination={destination} />
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
