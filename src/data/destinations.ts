import { v4 as uuidv4 } from 'uuid';

export type OnsiteDuration = 'half-day' | 'full-day' | '2-3 days' | '4-7 days' | '8+ days';

export type Destination = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  region: string;
  country: string;
  continent: string;
  featured?: boolean;
  tags: {
    activities: string[];
    climate: string[];
    riskLevel: string;
    accessibility: string[];
    duration: string[]; // Add duration property to fix type errors
  };
  onsiteDuration?: OnsiteDuration;
};

export type Country = {
  name: string;
  slug: string;
  continent: string;
  capital: string;
  languageOfficial: string;
  languagesSpoken: string[];
  currency: string;
  population: number;
  area: number;
  timeZones: string[];
  callingCode: string;
  drivingSide: 'left' | 'right';
  flagImageUrl: string;
  description: string;
  whyVisit: string;
  bestTimeToVisit: {
    text: string;
    months: string[];
  };
  weatherInfo: {
    summer: string;
    winter: string;
    spring: string;
    fall: string;
  };
  majorCities: {
    name: string;
    description: string;
  }[];
  famousFor: string[];
  topAttractions: {
    name: string;
    description: string;
    imageUrl: string;
  }[];
  localCuisine: {
    description: string;
    famousDishes: string[];
  };
  culturalCustoms: string[];
  travelTips: string[];
  safetyInfo: string;
  sustainableTourism: string;
  visaRequirements: string;
  budget: {
    budget: string;
    midRange: string;
    luxury: string;
  };
  transportationOptions: string[];
  neighboringCountries: string[];
};

export const countryList = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
  'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
  'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
  'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
  'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)',
  'Democratic Republic of the Congo (Congo-Kinshasa)', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador',
  'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland',
  'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
  'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
  'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
  'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar',
  'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea',
  'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
  'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga',
  'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
  'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

// Only define these once, removing duplicate declarations
export const activityTypes = [
  'Adventure', 'Beach', 'Cultural', 'Culinary', 'Eco-tourism',
  'Family', 'Festival', 'Historical', 'Luxury', 'Nightlife',
  'Relaxation', 'Religious', 'Shopping', 'Sports', 'Urban',
  'Wellness', 'Wildlife', 'Winter Sports',
  'Foodie', 'Culture', 'Nature', 'History', 'Photography',
  'Hiking', 'Diving', 'Winter Sports', 'Architecture'
];

export const climateTypes = [
  'Tropical', 'Desert', 'Mediterranean', 'Humid Continental',
  'Oceanic', 'Alpine', 'Subarctic', 'Polar', 'Temperate',
  'Continental', 'Humid', 'Arid', 'Monsoon'
];

export const continentsList = [
  'Africa', 'Antarctica', 'Asia', 'Europe',
  'North America', 'Oceania', 'South America'
];

export const durationOptions = [
  'Day Trip', 'Weekend', '3-5 Days', '1 Week',
  '2 Weeks', '1 Month', '1+ Month',
  'Weekend', '3-5 days', '1 Week', '2 Weeks', '1 Month+'
];

export const onsiteDurationOptions: OnsiteDuration[] = [
  'half-day',
  'full-day',
  '2-3 days',
  '4-7 days',
  '8+ days'
];

export const accessibilityOptions = [
  'Wheelchair Friendly', 'Family Friendly', 'Pet Friendly',
  'Public Transport', 'Easy Walking', 'Remote Location',
  'Good Public Transport', 'Some Stairs', 'Many Stairs',
  'Rough Terrain', 'Altitude Challenges', 'Remote Location'
];

export const riskLevels = [
  'Safe', 'Low Risk', 'Moderate', 'Adventure', 'High Risk'
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    slug: 'paris',
    country: 'France',
    region: 'Western Europe',
    continent: 'Europe',
    description: 'The City of Light beckons with iconic landmarks, world-class cuisine, and timeless romance.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000',
    tags: {
      activities: ['Culture', 'Cuisine', 'History', 'Art'],
      climate: ['Temperate', 'Best in Spring', 'Fall'],
      duration: ['3-5 days', 'Weekend'],
      accessibility: ['Wheelchair Friendly', 'Public Transport'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days',
    featured: true
  },
  {
    id: '2',
    name: 'Machu Picchu',
    slug: 'machu-picchu',
    country: 'Peru',
    region: 'South America',
    continent: 'South America',
    description: 'Ancient Incan citadel set high in the Andes Mountains, offering spectacular views and mysterious ruins.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000',
    tags: {
      activities: ['Adventure', 'Hiking', 'History', 'Nature'],
      climate: ['Dry Season', 'Cool Mornings', 'Warm Days'],
      duration: ['1-2 days', 'Part of longer trip'],
      accessibility: ['Challenging Terrain', 'Altitude'],
      riskLevel: 'Moderate'
    },
    onsiteDuration: '2-3 days',
    featured: true
  },
  {
    id: '3',
    name: 'Kyoto',
    slug: 'kyoto',
    country: 'Japan',
    region: 'East Asia',
    continent: 'Asia',
    description: 'Cultural heart of Japan with over 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000',
    tags: {
      activities: ['Culture', 'History', 'Temples', 'Gardens'],
      climate: ['Four Seasons', 'Cherry Blossoms in Spring', 'Fall Colors'],
      duration: ['3-5 days', 'Week-long'],
      accessibility: ['Good Public Transport', 'Some Hills'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days',
    featured: true
  },
  {
    id: '4',
    name: 'Santorini',
    slug: 'santorini',
    country: 'Greece',
    region: 'Mediterranean',
    continent: 'Europe',
    description: 'Stunning island known for its white-washed buildings, blue domes, and spectacular sunsets over the caldera.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000',
    tags: {
      activities: ['Relaxation', 'Beaches', 'Cuisine', 'Sunsets'],
      climate: ['Mediterranean', 'Hot Summers', 'Mild Winters'],
      duration: ['3-5 days', 'Weekend'],
      accessibility: ['Many Stairs', 'Hilly Terrain'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '2-3 days',
    featured: true
  },
  {
    id: '5',
    name: 'Serengeti National Park',
    slug: 'serengeti',
    country: 'Tanzania',
    region: 'East Africa',
    continent: 'Africa',
    description: 'Home to the spectacular annual wildebeest migration and an incredible concentration of wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000',
    tags: {
      activities: ['Safari', 'Wildlife', 'Photography', 'Nature'],
      climate: ['Dry Season', 'Wet Season', 'Hot Days', 'Cool Nights'],
      duration: ['3-7 days', 'Week-long'],
      accessibility: ['Rough Terrain', 'Remote'],
      riskLevel: 'Moderate'
    },
    onsiteDuration: '4-7 days',
    featured: true
  },
  {
    id: '6',
    name: 'Tokyo',
    slug: 'tokyo',
    country: 'Japan',
    region: 'East Asia',
    continent: 'Asia',
    description: 'A dazzling mix of the ultramodern and traditional, from neon-lit skyscrapers to historic temples.',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000',
    tags: {
      activities: ['Technology', 'Shopping', 'Culture', 'Cuisine'],
      climate: ['Four Seasons', 'Cherry Blossoms in Spring', 'Humid Summers'],
      duration: ['5-7 days', 'Week-long'],
      accessibility: ['Excellent Public Transport', 'Wheelchair Accessible'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days'
  },
  {
    id: '7',
    name: 'New York City',
    slug: 'new-york',
    country: 'United States',
    region: 'North America',
    continent: 'North America',
    description: 'The Big Apple offers world-class museums, diverse neighborhoods, iconic landmarks, and vibrant nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000',
    tags: {
      activities: ['Urban Exploration', 'Museums', 'Shopping', 'Theater'],
      climate: ['Four Seasons', 'Hot Summers', 'Cold Winters'],
      duration: ['4-7 days', 'Week-long'],
      accessibility: ['Public Transport', 'Wheelchair Accessible'],
      riskLevel: 'Low Risk'
    },
    onsiteDuration: '4-7 days',
    featured: true
  },
  {
    id: '8',
    name: 'Rome',
    slug: 'rome',
    country: 'Italy',
    region: 'Southern Europe',
    continent: 'Europe',
    description: 'The Eternal City captivates with ancient ruins, artistic masterpieces, and la dolce vita lifestyle.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000',
    tags: {
      activities: ['History', 'Art', 'Cuisine', 'Architecture'],
      climate: ['Mediterranean', 'Hot Summers', 'Mild Winters'],
      duration: ['3-5 days', 'Week-long'],
      accessibility: ['Walking City', 'Some Cobblestones'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days'
  },
  {
    id: '9',
    name: 'Bangkok',
    slug: 'bangkok',
    country: 'Thailand',
    region: 'Southeast Asia',
    continent: 'Asia',
    description: 'Thailand\'s vibrant capital offers ornate shrines, bustling markets, exciting nightlife, and delicious street food.',
    imageUrl: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000',
    tags: {
      activities: ['Temples', 'Markets', 'Cuisine', 'Nightlife'],
      climate: ['Tropical', 'Hot', 'Monsoon Season'],
      duration: ['3-5 days', 'Week-long'],
      accessibility: ['Challenging Traffic', 'Limited Accessibility'],
      riskLevel: 'Low Risk'
    },
    onsiteDuration: '2-3 days'
  },
  {
    id: '10',
    name: 'London',
    slug: 'london',
    country: 'United Kingdom',
    region: 'Western Europe',
    continent: 'Europe',
    description: 'A dynamic global city blending history, culture, and innovation with iconic landmarks and diverse neighborhoods.',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000',
    tags: {
      activities: ['History', 'Museums', 'Theater', 'Shopping'],
      climate: ['Temperate', 'Rainy', 'Mild'],
      duration: ['4-7 days', 'Week-long'],
      accessibility: ['Good Public Transport', 'Wheelchair Accessible'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days',
    featured: true
  },
  {
    id: '11',
    name: 'Prague',
    slug: 'prague',
    country: 'Czech Republic',
    region: 'Central Europe',
    continent: 'Europe',
    description: 'Known as the "City of a Hundred Spires," Prague is famous for its medieval architecture, vibrant culture, and beer.',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1000',
    tags: {
      activities: ['Architecture', 'History', 'Beer Culture', 'Music'],
      climate: ['Four Seasons', 'Cold Winters', 'Mild Summers'],
      duration: ['3-4 days', 'Weekend'],
      accessibility: ['Cobblestone Streets', 'Public Transport'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '2-3 days'
  },
  {
    id: '12',
    name: 'Marrakesh',
    slug: 'marrakesh',
    country: 'Morocco',
    region: 'North Africa',
    continent: 'Africa',
    description: 'A vibrant former imperial city with a maze-like medina, lively souks, gardens, and ornate mosques and palaces.',
    imageUrl: 'https://images.unsplash.com/photo-1597212720158-62732474e109?q=80&w=1000',
    tags: {
      activities: ['Markets', 'History', 'Architecture', 'Shopping'],
      climate: ['Hot Summers', 'Mild Winters', 'Desert Climate'],
      duration: ['3-5 days', 'Weekend'],
      accessibility: ['Narrow Streets', 'Crowded Areas'],
      riskLevel: 'Low Risk'
    },
    onsiteDuration: '2-3 days'
  },
  {
    id: '13',
    name: 'San Francisco',
    slug: 'san-francisco',
    country: 'United States',
    region: 'North America',
    continent: 'North America',
    description: 'Iconic city known for its rolling hills, picturesque bay, colorful Victorian homes, and iconic Golden Gate Bridge.',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000',
    tags: {
      activities: ['Urban Exploration', 'Food', 'Coastal Views', 'Technology'],
      climate: ['Mild', 'Foggy', 'Year-round Cool'],
      duration: ['3-5 days', 'Week-long'],
      accessibility: ['Hilly Terrain', 'Public Transit'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days'
  },
  {
    id: '14',
    name: 'Lisbon',
    slug: 'lisbon',
    country: 'Portugal',
    region: 'Southern Europe',
    continent: 'Europe',
    description: 'Portugal\'s hilly, coastal capital known for its pastel buildings, historic trams, and fado music.',
    imageUrl: 'https://images.unsplash.com/photo-1588373172259-e762cd739eb6?q=80&w=1000',
    tags: {
      activities: ['History', 'Food', 'Nightlife', 'Architecture'],
      climate: ['Mediterranean', 'Sunny', 'Mild Winters'],
      duration: ['3-5 days', 'Weekend'],
      accessibility: ['Hilly Terrain', 'Some Cobblestones'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '2-3 days'
  },
  {
    id: '15',
    name: 'Bhutan',
    slug: 'bhutan',
    country: 'Bhutan',
    region: 'South Asia',
    continent: 'Asia',
    description: 'The "Land of the Thunder Dragon" offers breathtaking mountain scenery, rich Buddhist culture, and unique architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1565073624497-7024c26895e1?q=80&w=1000',
    tags: {
      activities: ['Trekking', 'Buddhism', 'Cultural Immersion', 'Photography'],
      climate: ['Alpine', 'Seasonal Variations', 'Best in Spring/Fall'],
      duration: ['7-14 days', 'Week-long'],
      accessibility: ['Remote', 'Mountainous', 'Altitude'],
      riskLevel: 'Low Risk'
    },
    onsiteDuration: '8+ days'
  },
  {
    id: '16',
    name: 'Vietnam',
    slug: 'vietnam',
    country: 'Vietnam',
    region: 'Southeast Asia',
    continent: 'Asia',
    description: 'A captivating country with stunning landscapes, vibrant cities, rich history, and delicious cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000',
    tags: {
      activities: ['Culture', 'Food', 'Adventure', 'Beaches'],
      climate: ['Tropical', 'Monsoon', 'Regional Variations'],
      duration: ['10-14 days', 'Multi-week'],
      accessibility: ['Varied Infrastructure', 'Some Challenges'],
      riskLevel: 'Low Risk'
    },
    onsiteDuration: '8+ days'
  },
  {
    id: '17',
    name: 'Iceland',
    slug: 'iceland',
    country: 'Iceland',
    region: 'Northern Europe',
    continent: 'Europe',
    description: 'Land of fire and ice featuring dramatic landscapes with volcanoes, geysers, hot springs, and massive glaciers.',
    imageUrl: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=1000',
    tags: {
      activities: ['Nature', 'Adventure', 'Hot Springs', 'Northern Lights'],
      climate: ['Arctic', 'Cool Summer', 'Cold Winter', 'Unpredictable'],
      duration: ['5-10 days', 'Road Trip'],
      accessibility: ['Remote Areas', 'Weather Challenges'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '4-7 days'
  },
  {
    id: '18',
    name: 'Dubai',
    slug: 'dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    continent: 'Asia',
    description: 'Ultramodern city known for luxury shopping, cutting-edge architecture, and vibrant nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000',
    tags: {
      activities: ['Architecture', 'Shopping', 'Luxury', 'Desert Adventures'],
      climate: ['Hot Desert', 'Very Hot Summer', 'Mild Winter'],
      duration: ['3-5 days', 'Stopover'],
      accessibility: ['Modern Infrastructure', 'Wheelchair Friendly'],
      riskLevel: 'Safe'
    },
    onsiteDuration: '2-3 days'
  },
  {
    id: '19',
    name: 'Kenya',
    slug: 'kenya',
    country: 'Kenya',
    region: 'East Africa',
    continent: 'Africa',
    description: 'Safari destination known for its diverse wildlife, stunning landscapes, and rich Maasai culture.',
    imageUrl: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?q=80&w=1000',
    tags: {
      activities: ['Safari', 'Wildlife', 'Tribal Culture', 'Nature'],
      climate: ['Equatorial', 'Dry & Wet Seasons'],
      duration: ['7-14 days', 'Safari Circuit'],
      accessibility: ['Remote Areas', 'Safari Vehicles'],
      riskLevel: 'Moderate'
    },
    onsiteDuration: '8+ days'
  },
  {
    id: '20',
    name: 'Antarctica',
    slug: 'antarctica',
    country: 'Antarctica',
    region: 'Antarctica',
    continent: 'Antarctica',
    description: 'The ultimate wilderness adventure to the Earth\'s southernmost continent, home to spectacular ice formations and unique wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1564509869710-78831401df44?q=80&w=1000',
    tags: {
      activities: ['Expedition', 'Wildlife', 'Photography', 'Adventure'],
      climate: ['Polar', 'Extreme Cold', 'Summer Access Only'],
      duration: ['10-21 days', 'Expedition'],
      accessibility: ['Extreme Environment', 'Ship Access Only'],
      riskLevel: 'Adventure'
    },
    onsiteDuration: '8+ days'
  },
  {
    id: uuidv4(),
    name: "Bandar Seri Begawan",
    slug: "bandar-seri-begawan",
    country: "Brunei",
    region: "Southeast Asia",
    continent: "Asia",
    description: "The capital of Brunei offering a glimpse into Islamic culture with its stunning Omar Ali Saifuddien Mosque and water villages.",
    imageUrl: "https://images.unsplash.com/photo-1607512060958-862f3a1efdb2?q=80&w=1000",
    tags: {
      activities: ["Cultural", "Historical", "Architectural"],
      climate: ["Tropical", "Humid"],
      duration: ["2-4 days"],
      accessibility: ["Moderate", "Public Transport"],
      riskLevel: "Safe"
    },
    onsiteDuration: "2-3 days"
  },
  {
    id: uuidv4(),
    name: "Ancient Plovdiv",
    slug: "ancient-plovdiv",
    country: "Bulgaria",
    region: "Eastern Europe",
    continent: "Europe",
    description: "One of Europe's oldest continuously inhabited cities with remarkable ancient Roman ruins and a charming Old Town.",
    imageUrl: "https://images.unsplash.com/photo-1520860560195-0f14c411476e?q=80&w=1000",
    tags: {
      activities: ["Historical", "Cultural", "Architecture"],
      climate: ["Continental", "Mild"],
      duration: ["2-3 days"],
      accessibility: ["Wheelchair Friendly", "Public Transport"],
      riskLevel: "Safe"
    },
    onsiteDuration: "2-3 days"
  },
  {
    id: uuidv4(),
    name: "Tiébélé Painted Houses",
    slug: "tiebele-painted-houses",
    country: "Burkina Faso",
    region: "Western Africa",
    continent: "Africa",
    description: "A village known for its elaborately painted houses of the Kassena people featuring geometric patterns and symbolic designs.",
    imageUrl: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1000",
    tags: {
      activities: ["Cultural", "Photography", "Eco-tourism"],
      climate: ["Hot", "Arid"],
      duration: ["1-2 days"],
      accessibility: ["Remote Location", "Guided Tours"],
      riskLevel: "Moderate"
    },
    onsiteDuration: "full-day"
  },
  {
    id: uuidv4(),
    name: "Lake Tanganyika",
    slug: "lake-tanganyika-burundi",
    country: "Burundi",
    region: "Eastern Africa",
    continent: "Africa",
    description: "The second-oldest freshwater lake in the world with beautiful beaches and opportunities for swimming and water sports.",
    imageUrl: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1000",
    tags: {
      activities: ["Nature", "Swimming", "Beach"],
      climate: ["Tropical", "Pleasant"],
      duration: ["2-3 days"],
      accessibility: ["Moderate"],
      riskLevel: "Moderate"
    },
    onsiteDuration: "2-3 days"
  },
  {
    id: uuidv4(),
    name: "Fogo Volcano",
    slug: "fogo-volcano",
    country: "Cabo Verde",
    region: "Western Africa",
    continent: "Africa",
    description: "An active volcano with a caldera nearly 9 km wide offering spectacular hiking opportunities and unique landscapes.",
    imageUrl: "https://images.unsplash.com/photo-1566156206616-d97f1cdc7122?q=80&w=1000",
    tags: {
      activities: ["Adventure", "Hiking", "Nature"],
      climate: ["Dry", "Mild"],
      duration: ["1-2 days"],
      accessibility: ["Challenging Terrain"],
      riskLevel: "Adventure"
    },
    onsiteDuration: "full-day"
  },
  {
    id: uuidv4(),
    name: "Angkor Wat",
    slug: "angkor-wat",
    country: "Cambodia",
    region: "Southeast Asia",
    continent: "Asia",
    description: "The world's largest religious monument, a stunning temple complex from the Khmer Empire that's a UNESCO World Heritage site.",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000",
    tags: {
      activities: ["Historical", "Cultural", "UNESCO"],
      climate: ["Tropical", "Warm"],
      duration: ["2-3 days"],
      accessibility: ["Moderate", "Some Stairs"],
      riskLevel: "Safe"
    },
    onsiteDuration: "2-3 days",
    featured: true
  }
];

export const countriesList = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic',
  'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the',
  'Costa Rica', 'Côte d\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
  'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
  'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
  'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
  'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
  'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
  'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
  'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
  'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
  'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
  'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Sudan, South', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
  'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
  'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];
