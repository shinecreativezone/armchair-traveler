
import { Destination } from "@/data/destinations";

export type FilterOptions = {
  activities: string[];
  climate: string[];
  region: string[];
  continent: string[];
  duration: string[];
  accessibility: string[];
  riskLevel: string[];
  search: string;
};

export const initialFilterOptions: FilterOptions = {
  activities: [],
  climate: [],
  region: [],
  continent: [],
  duration: [],
  accessibility: [],
  riskLevel: [],
  search: ''
};

export const filterDestinations = (
  destinations: Destination[],
  filters: FilterOptions
): Destination[] => {
  return destinations.filter(destination => {
    // Search filter
    if (
      filters.search &&
      !destination.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !destination.country.toLowerCase().includes(filters.search.toLowerCase()) &&
      !destination.region.toLowerCase().includes(filters.search.toLowerCase()) &&
      !destination.continent.toLowerCase().includes(filters.search.toLowerCase()) &&
      !destination.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Activities filter
    if (
      filters.activities.length > 0 &&
      !filters.activities.some(activity => 
        destination.tags.activities.includes(activity)
      )
    ) {
      return false;
    }

    // Climate filter
    if (
      filters.climate.length > 0 &&
      !filters.climate.some(climate => 
        destination.tags.climate.includes(climate)
      )
    ) {
      return false;
    }

    // Region filter
    if (
      filters.region.length > 0 &&
      !filters.region.includes(destination.region)
    ) {
      return false;
    }

    // Continent filter
    if (
      filters.continent.length > 0 &&
      !filters.continent.includes(destination.continent)
    ) {
      return false;
    }

    // Duration filter
    if (
      filters.duration.length > 0 &&
      !filters.duration.some(duration => 
        destination.tags.duration.includes(duration)
      )
    ) {
      return false;
    }

    // Accessibility filter
    if (
      filters.accessibility.length > 0 &&
      !filters.accessibility.some(accessibility => 
        destination.tags.accessibility.includes(accessibility)
      )
    ) {
      return false;
    }

    // Risk level filter
    if (
      filters.riskLevel.length > 0 &&
      !filters.riskLevel.includes(destination.tags.riskLevel)
    ) {
      return false;
    }

    return true;
  });
};

export const sortDestinations = (
  destinations: Destination[],
  sortBy: string
): Destination[] => {
  switch (sortBy) {
    case 'popular':
      // In a real app, this would be based on view counts or ratings
      return [...destinations].sort((a, b) => (a.featured ? -1 : 1));
    case 'recent':
      // In a real app, this would be based on when destinations were added
      return [...destinations].sort((a, b) => a.id.localeCompare(b.id));
    case 'az':
      return [...destinations].sort((a, b) => a.name.localeCompare(b.name));
    case 'za':
      return [...destinations].sort((a, b) => b.name.localeCompare(a.name));
    default:
      return destinations;
  }
};
