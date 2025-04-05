import { v4 as uuidv4 } from 'uuid';

export interface Festival {
  id: string;
  name: string;
  country: string;
  city: string;
  description: string;
  date: string; // Can be "February", "Late March - Early April", etc.
  category: "music" | "cultural" | "religious" | "food" | "art";
  imageUrl: string;
  popularity: "high" | "medium" | "low";
}

export const festivals: Festival[] = [
  {
    id: uuidv4(),
    name: "Carnival of Rio de Janeiro",
    country: "Brazil",
    city: "Rio de Janeiro",
    description: "The world's largest carnival celebration featuring samba dancing, elaborate costumes, and parades.",
    date: "February/March (before Lent)",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Oktoberfest",
    country: "Germany",
    city: "Munich",
    description: "The world's largest beer festival and travelling funfair with traditional Bavarian food and culture.",
    date: "Late September - Early October",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1605493725784-56d8d6d597e8?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Holi",
    country: "India",
    city: "Nationwide",
    description: "The Hindu festival of colors celebrating the arrival of spring and the triumph of good over evil.",
    date: "March (full moon day of Phalguna)",
    category: "religious",
    imageUrl: "https://images.unsplash.com/photo-1615884241434-ed775ba1393b?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Songkran",
    country: "Thailand",
    city: "Nationwide",
    description: "The Thai New Year festival known for its massive water fights and traditional ceremonies.",
    date: "April 13-15",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1628066589309-cea2d04e4d11?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "La Tomatina",
    country: "Spain",
    city: "Buñol",
    description: "A festival where participants throw tomatoes at each other in the world's biggest food fight.",
    date: "Last Wednesday of August",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1530032612540-95ce2f7fd312?q=80&w=1000",
    popularity: "medium",
  },
  {
    id: uuidv4(),
    name: "Coachella",
    country: "United States",
    city: "Indio, California",
    description: "One of the world's most famous music and arts festivals featuring major artists and art installations.",
    date: "April (two weekends)",
    category: "music",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Día de los Muertos",
    country: "Mexico",
    city: "Nationwide",
    description: "Day of the Dead celebration honoring deceased loved ones with altars, food, and colorful decorations.",
    date: "November 1-2",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1509027384104-63ea539730c4?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Glastonbury Festival",
    country: "United Kingdom",
    city: "Pilton, Somerset",
    description: "One of the world's most famous performing arts festivals covering music, dance, comedy, theater, and more.",
    date: "Late June",
    category: "music",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Cherry Blossom Festival",
    country: "Japan",
    city: "Nationwide",
    description: "Celebration of spring and cherry blossoms with picnics, viewing parties, and traditional performances.",
    date: "March-April",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Burning Man",
    country: "United States",
    city: "Black Rock Desert, Nevada",
    description: "Experimental community event focused on art, self-expression, and self-reliance in a temporary city.",
    date: "Late August - Early September",
    category: "art",
    imageUrl: "https://images.unsplash.com/photo-1583070231902-0ce8ebdc2b24?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Diwali",
    country: "India",
    city: "Nationwide",
    description: "Festival of lights celebrating the victory of light over darkness with lamps, fireworks, and sweets.",
    date: "October-November",
    category: "religious",
    imageUrl: "https://images.unsplash.com/photo-1604423018099-87cf0c6e2f31?q=80&w=1000",
    popularity: "high",
  },
  {
    id: uuidv4(),
    name: "Mardi Gras",
    country: "United States",
    city: "New Orleans, Louisiana",
    description: "Carnival celebration known for parades, masquerades, and colorful beads before the fasting of Lent.",
    date: "February-March (before Lent)",
    category: "cultural",
    imageUrl: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?q=80&w=1000",
    popularity: "high",
  },
];

// Helper function to get festivals by country
export const getFestivalsByCountry = (countryName: string): Festival[] => {
  return festivals.filter(festival => festival.country.toLowerCase() === countryName.toLowerCase());
};

// Helper function to get festivals by category
export const getFestivalsByCategory = (category: Festival['category']): Festival[] => {
  return festivals.filter(festival => festival.category === category);
};

// Helper function to get most popular festivals
export const getPopularFestivals = (): Festival[] => {
  return festivals.filter(festival => festival.popularity === "high");
}; 