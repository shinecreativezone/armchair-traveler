
export type Collection = {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  destinationIds: string[];
};

export const collections: Collection[] = [
  {
    id: '1',
    title: 'Hidden Ruins',
    slug: 'hidden-ruins',
    description: 'Discover ancient structures away from the typical tourist crowds.',
    imageUrl: 'https://images.unsplash.com/photo-1626548307930-deac221f09d8?q=80&w=1000',
    destinationIds: ['2']
  },
  {
    id: '2',
    title: 'Lost Cities',
    slug: 'lost-cities',
    description: 'Step back in time with these forgotten metropolises from civilizations past.',
    imageUrl: 'https://images.unsplash.com/photo-1590114083523-d22816d42759?q=80&w=1000',
    destinationIds: ['2']
  },
  {
    id: '3',
    title: 'Weird Weather Wonders',
    slug: 'weird-weather-wonders',
    description: 'From multi-colored lakes to bizarre cloud formations, explore nature\'s strangest climate phenomena.',
    imageUrl: 'https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=1000',
    destinationIds: ['5']
  },
  {
    id: '4',
    title: 'Cultural Capitals',
    slug: 'cultural-capitals',
    description: 'Immerse yourself in these hubs of art, history, and tradition.',
    imageUrl: 'https://images.unsplash.com/photo-1558383817-b31a2c14768d?q=80&w=1000',
    destinationIds: ['1', '3']
  },
  {
    id: '5',
    title: 'Island Paradises',
    slug: 'island-paradises',
    description: 'Escape to these idyllic destinations surrounded by pristine waters.',
    imageUrl: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1000',
    destinationIds: ['4']
  }
];
