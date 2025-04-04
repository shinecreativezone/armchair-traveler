
export type Destination = {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  continent: string;
  description: string;
  imageUrl: string;
  tags: {
    activities: string[];
    climate: string[];
    duration: string[];
    accessibility: string[];
    riskLevel: string;
  };
  featured?: boolean;
};

// Sample data for some destinations
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
    featured: true
  }
];

export const countriesList = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
  'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the',
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

export const continentsList = [
  'Africa',
  'Antarctica',
  'Asia',
  'Europe',
  'North America',
  'Oceania',
  'South America'
];

export const activityTypes = [
  'Adventure',
  'Luxury',
  'Foodie',
  'Culture',
  'Beach',
  'Nature',
  'History',
  'Wildlife',
  'Photography',
  'Shopping',
  'Relaxation',
  'Hiking',
  'Diving',
  'Winter Sports',
  'Architecture'
];

export const climateTypes = [
  'Tropical',
  'Desert',
  'Mediterranean',
  'Temperate',
  'Continental',
  'Polar',
  'Alpine',
  'Humid',
  'Arid',
  'Oceanic',
  'Monsoon'
];

export const durationOptions = [
  'Day Trip',
  'Weekend',
  '3-5 days',
  '1 Week',
  '2 Weeks',
  '1 Month+'
];

export const accessibilityOptions = [
  'Wheelchair Friendly',
  'Good Public Transport',
  'Some Stairs',
  'Many Stairs',
  'Rough Terrain',
  'Altitude Challenges',
  'Remote Location'
];

export const riskLevels = [
  'Safe',
  'Low Risk',
  'Moderate',
  'Adventure',
  'High Risk'
];
