import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Globe, MapPin, Utensils, CameraIcon, Music, BookOpen, Plane, ShoppingBag, AlertCircle } from "lucide-react";
import { countriesList } from "@/data/destinations";

type TabKey = "overview" | "stay" | "sights" | "food" | "culture" | "planning" | "tips";

// Function to determine a country's continent
const getCountryContinent = (country: string): string => {
  // This is a simplified mapping of countries to continents
  // In a production app, this would reference a complete database
  const continentMap: Record<string, string> = {
    // Africa
    'Algeria': 'Africa', 'Angola': 'Africa', 'Egypt': 'Africa', 'Kenya': 'Africa', 
    'Morocco': 'Africa', 'Nigeria': 'Africa', 'South Africa': 'Africa',
    
    // Asia
    'Armenia': 'Asia', 'Bahrain': 'Asia', 'China': 'Asia', 'India': 'Asia', 
    'Japan': 'Asia', 'South Korea': 'Asia', 'Thailand': 'Asia', 'Vietnam': 'Asia',
    
    // Europe
    'France': 'Europe', 'Germany': 'Europe', 'Italy': 'Europe', 'Spain': 'Europe', 
    'United Kingdom': 'Europe', 'Greece': 'Europe', 'Switzerland': 'Europe',
    
    // North America
    'Canada': 'North America', 'Mexico': 'North America', 'United States': 'North America',
    
    // South America
    'Argentina': 'South America', 'Brazil': 'South America', 'Peru': 'South America',
    
    // Oceania
    'Australia': 'Oceania', 'New Zealand': 'Oceania'
  };
  
  return continentMap[country] || 'Unknown';
};

// Function to determine a country's popularity status
const getCountryPopularity = (country: string): string => {
  // This could be based on visit statistics, trending data, or editorial decisions
  const popularDestinations = [
    'France', 'Spain', 'United States', 'China', 'Italy', 'Turkey', 'Mexico', 
    'Thailand', 'Germany', 'United Kingdom', 'Japan', 'Austria', 'Greece'
  ];
  
  const emergingDestinations = [
    'Vietnam', 'Portugal', 'Armenia', 'Georgia', 'Colombia', 'Slovenia', 'Uzbekistan'
  ];
  
  if (popularDestinations.includes(country)) {
    return 'Popular Destination';
  } else if (emergingDestinations.includes(country)) {
    return 'Emerging Destination';
  } else {
    return 'Hidden Gem';
  }
};

const CountryPage = () => {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const [selectedTab, setSelectedTab] = useState<TabKey>("overview");
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (countrySlug) {
      const formattedSlug = countrySlug.replace(/-/g, ' ');
      const matchedCountry = countriesList.find(c => 
        c.toLowerCase() === formattedSlug.toLowerCase()
      );
      
      if (matchedCountry) {
        setCountry(matchedCountry);
      } else {
        setCountry(formattedSlug.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '));
      }
      
      setLoading(false);
    }
  }, [countrySlug]);
  
  if (loading) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-12 bg-gray-200 rounded"></div>
            <div className="h-80 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (!country) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
            <p className="mb-8 text-gray-600">We couldn't find information for the requested country.</p>
            <Button asChild>
              <a href="/countries">Return to Countries List</a>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img
              src={`https://source.unsplash.com/1600x900/?${country},landscape,travel`}
              alt={`${country} landscape`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-end">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{country}</h1>
                <div className="flex items-center text-travel-sand-light">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>{getCountryContinent(country)}</span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <span className="bg-travel-terracotta px-3 py-1 rounded-full text-white text-sm font-medium">
                  {getCountryPopularity(country)}
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className="border-b sticky top-0 bg-white z-20">
          <div className="container mx-auto">
            <Tabs 
              defaultValue="overview" 
              onValueChange={(value) => setSelectedTab(value as TabKey)}
              className="w-full"
            >
              <div className="overflow-x-auto">
                <TabsList className="h-16">
                  <TabsTrigger value="overview" className="text-base">Overview</TabsTrigger>
                  <TabsTrigger value="stay" className="text-base">Where to Stay</TabsTrigger>
                  <TabsTrigger value="sights" className="text-base">Major Sights</TabsTrigger>
                  <TabsTrigger value="food" className="text-base">Food & Drink</TabsTrigger>
                  <TabsTrigger value="culture" className="text-base">Culture</TabsTrigger>
                  <TabsTrigger value="planning" className="text-base">Trip Planning</TabsTrigger>
                  <TabsTrigger value="tips" className="text-base">Tips & Advice</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Overview Content */}
              <TabsContent value="overview" className="py-8">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-3xl font-bold mb-6 text-heading">About {country}</h2>
                      
                      <p className="text-lg mb-6">
                        Welcome to {country}, a destination of unparalleled beauty and cultural richness. 
                        From its stunning landscapes to its vibrant cities, {country} offers travelers 
                        an unforgettable experience filled with adventure, relaxation, and discovery.
                      </p>
                      
                      <p className="text-lg mb-6">
                        With a history spanning thousands of years, {country} has developed a unique 
                        cultural identity that is reflected in its architecture, cuisine, traditions, 
                        and way of life. Visitors can immerse themselves in this rich heritage while 
                        enjoying the warmth and hospitality of the local people.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},culture`} 
                          alt={`${country} culture`} 
                          className="rounded-lg"
                        />
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},city`} 
                          alt={`${country} city life`} 
                          className="rounded-lg"
                        />
                      </div>
                      
                      <p className="text-lg">
                        Whether you're seeking adventure in the great outdoors, relaxation on pristine 
                        beaches, or cultural exploration in bustling urban centers, {country} has something 
                        for every type of traveler. Dive into our detailed guide to discover all that 
                        this amazing destination has to offer.
                      </p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Quick Facts</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-2 text-travel-blue mt-1" />
                            <div>
                              <span className="font-medium">Capital:</span> {country} City
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Globe className="h-5 w-5 mr-2 text-travel-blue mt-1" />
                            <div>
                              <span className="font-medium">Language:</span> {country}ese
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Calendar className="h-5 w-5 mr-2 text-travel-blue mt-1" />
                            <div>
                              <span className="font-medium">Best Time to Visit:</span> April to October
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Plane className="h-5 w-5 mr-2 text-travel-blue mt-1" />
                            <div>
                              <span className="font-medium">Major Airports:</span> {country} International Airport
                            </div>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 mr-2 text-travel-blue mt-1" />
                            <div>
                              <span className="font-medium">Visa Requirements:</span> Varies by nationality
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-travel-blue p-6 rounded-lg text-white">
                        <h3 className="font-bold text-xl mb-4">Weather</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Spring</span>
                            <span>15-25°C</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Summer</span>
                            <span>25-35°C</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Autumn</span>
                            <span>15-25°C</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Winter</span>
                            <span>5-15°C</span>
                          </div>
                          <div className="h-4"></div>
                          <p className="text-sm">
                            Best months to visit: May, June, September, and October for pleasant weather and fewer crowds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Accommodation Content */}
              <TabsContent value="stay" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Where to Stay in {country}</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">Accommodation Options</h3>
                      
                      <div className="space-y-8 mb-8">
                        <div className="border-b pb-8">
                          <h4 className="text-xl font-semibold mb-2">Luxury Hotels</h4>
                          <p className="mb-4">
                            {country} boasts world-class luxury hotels that offer exceptional service and amenities. 
                            From international chains to boutique properties, these establishments provide 
                            unparalleled comfort and elegance.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">The Grand {country} Hotel</h5>
                              <p className="text-sm text-gray-600">$$$$ | Central District</p>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">{country} Luxury Resort & Spa</h5>
                              <p className="text-sm text-gray-600">$$$$ | Coastal Area</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-b pb-8">
                          <h4 className="text-xl font-semibold mb-2">Mid-Range Options</h4>
                          <p className="mb-4">
                            Comfortable and affordable, mid-range accommodations in {country} offer good value 
                            for money with clean rooms and essential amenities.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">{country} City Hotel</h5>
                              <p className="text-sm text-gray-600">$$ | Downtown</p>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">Central Inn</h5>
                              <p className="text-sm text-gray-600">$$ | Historic District</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-semibold mb-2">Budget-Friendly Stays</h4>
                          <p className="mb-4">
                            Travelers on a budget can find numerous hostels, guesthouses, and budget hotels 
                            throughout {country} that provide basic but comfortable accommodations.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">{country} Backpackers Hostel</h5>
                              <p className="text-sm text-gray-600">$ | University District</p>
                            </div>
                            <div className="bg-white shadow rounded-lg p-4">
                              <h5 className="font-medium">Traveler's Rest Guesthouse</h5>
                              <p className="text-sm text-gray-600">$ | Suburb Area</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Best Areas to Stay</h3>
                        <ul className="space-y-4">
                          <li>
                            <h4 className="font-medium">City Center</h4>
                            <p className="text-sm text-gray-600">
                              Perfect for first-time visitors who want to be close to major attractions.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Historic District</h4>
                            <p className="text-sm text-gray-600">
                              Charming area with traditional architecture and cultural sites.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Coastal Region</h4>
                            <p className="text-sm text-gray-600">
                              Ideal for beach lovers and those seeking relaxation.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Mountains</h4>
                            <p className="text-sm text-gray-600">
                              Perfect for nature enthusiasts and adventure seekers.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-travel-blue p-6 rounded-lg text-white">
                        <h3 className="font-bold text-xl mb-4">Booking Tips</h3>
                        <ul className="space-y-3 list-disc pl-5">
                          <li>Book accommodations 2-3 months in advance during peak season</li>
                          <li>Ask about hidden fees like resort charges or city taxes</li>
                          <li>Consider location and proximity to public transportation</li>
                          <li>Check cancellation policies before booking</li>
                          <li>Look for package deals that include breakfast or local tours</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Major Sights Content */}
              <TabsContent value="sights" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Major Sights in {country}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},landmark`} 
                        alt="Famous landmark" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{country} National Monument</h3>
                        <p className="text-gray-600 mb-4">
                          An iconic symbol of {country}'s heritage, this historic monument attracts 
                          thousands of visitors each year with its impressive architecture and cultural significance.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Central District</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},museum`} 
                        alt="National museum" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{country} National Museum</h3>
                        <p className="text-gray-600 mb-4">
                          Housing an impressive collection of artifacts that span thousands of years, 
                          this museum offers insights into the rich cultural history of {country}.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Museum Quarter</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},nature`} 
                        alt="Natural landscape" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{country} National Park</h3>
                        <p className="text-gray-600 mb-4">
                          A breathtaking natural reserve featuring diverse landscapes, from mountains 
                          to forests, and home to unique flora and fauna.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Northern Region</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},beach`} 
                        alt="Beach" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Golden Beach</h3>
                        <p className="text-gray-600 mb-4">
                          Stretching for miles along the coastline, this pristine beach offers 
                          crystal-clear waters and soft golden sand, perfect for relaxation.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Coastal Region</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},temple`} 
                        alt="Ancient temple" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Ancient Temple Complex</h3>
                        <p className="text-gray-600 mb-4">
                          Dating back several centuries, this temple complex showcases remarkable 
                          architectural styles and religious significance.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Western Province</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={`https://source.unsplash.com/800x600/?${country},market`} 
                        alt="Traditional market" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Traditional Market</h3>
                        <p className="text-gray-600 mb-4">
                          Immerse yourself in the vibrant atmosphere of this historic market, 
                          where locals sell fresh produce, handicrafts, and traditional goods.
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Old Town</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Food & Drink Content */}
              <TabsContent value="food" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Food & Drink in {country}</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">Traditional Cuisine</h3>
                      
                      <p className="mb-6">
                        {country}'s cuisine is a vibrant tapestry of flavors, influenced by its history, 
                        geography, and cultural exchanges. The local food scene offers everything from 
                        street food delights to sophisticated fine dining experiences.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},food`} 
                          alt={`${country} cuisine`} 
                          className="rounded-lg"
                        />
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},restaurant`} 
                          alt={`${country} restaurant`} 
                          className="rounded-lg"
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Must-Try Dishes</h3>
                      
                      <div className="space-y-6 mb-8">
                        <div className="flex items-start">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <Utensils className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{country} National Dish</h4>
                            <p className="text-gray-600">
                              A flavorful blend of local ingredients, herbs, and spices that represents 
                              the essence of traditional {country} cuisine.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <Utensils className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Regional Specialty</h4>
                            <p className="text-gray-600">
                              This dish varies across regions but is universally loved for its unique 
                              preparation method and distinctive taste.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <Utensils className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Traditional Dessert</h4>
                            <p className="text-gray-600">
                              Sweet and satisfying, this beloved dessert is often served during 
                              celebrations and family gatherings.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Popular Restaurants</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold">Traditional Kitchen</h4>
                          <p className="text-sm text-gray-600 mb-2">Authentic local cuisine in a cozy setting</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Central District</span>
                            <span className="mx-2">•</span>
                            <span>$$ - $$$</span>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold">Modern Fusion</h4>
                          <p className="text-sm text-gray-600 mb-2">Contemporary twist on classic recipes</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Riverside Area</span>
                            <span className="mx-2">•</span>
                            <span>$$$ - $$$$</span>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h4 className="font-semibold">Street Food Corner</h4>
                          <p className="text-sm text-gray-600 mb-2">Affordable local delicacies</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>Market District</span>
                            <span className="mx-2">•</span>
                            <span>$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Local Beverages</h3>
                        <ul className="space-y-4">
                          <li>
                            <h4 className="font-medium">{country} Traditional Tea</h4>
                            <p className="text-sm text-gray-600">
                              A fragrant blend of local herbs and spices, typically served throughout the day.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Regional Wine</h4>
                            <p className="text-sm text-gray-600">
                              Produced from local vineyards, these wines pair perfectly with {country} cuisine.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Traditional Spirit</h4>
                            <p className="text-sm text-gray-600">
                              A strong alcoholic beverage often consumed during celebrations and special occasions.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Fruit Juice</h4>
                            <p className="text-sm text-gray-600">
                              Refreshing drinks made from tropical fruits grown in the region.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-travel-blue p-6 rounded-lg text-white">
                        <h3 className="font-bold text-xl mb-4">Dining Etiquette</h3>
                        <ul className="space-y-3 list-disc pl-5">
                          <li>It's customary to remove shoes before entering certain restaurants</li>
                          <li>Tipping practices vary - typically 10% in upscale establishments</li>
                          <li>Try to finish all food on your plate as a sign of appreciation</li>
                          <li>Some restaurants may require reservations, especially during peak tourist season</li>
                          <li>It's polite to use the provided hand washing facilities before meals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Culture Content */}
              <TabsContent value="culture" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Culture of {country}</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <p className="text-lg mb-8">
                        {country}'s culture is a rich tapestry woven from centuries of history, traditions, 
                        artistic expressions, and social customs. From vibrant festivals to literary classics, 
                        the cultural heritage of this nation offers travelers deep insights into its identity.
                      </p>
                      
                      <h3 className="text-2xl font-bold mb-4">Arts & Literature</h3>
                      
                      <div className="mb-8">
                        <div className="flex items-start mb-6">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <BookOpen className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Famous Literature</h4>
                            <p className="text-gray-600 mb-2">
                              {country} has produced renowned authors who have contributed significantly to world literature.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>"The Great {country} Novel" by Author Name</li>
                              <li>"Tales from the East" by Author Name</li>
                              <li>"Modern Perspectives" by Author Name</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start mb-6">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <Music className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Traditional Music</h4>
                            <p className="text-gray-600 mb-2">
                              The musical heritage of {country} features unique instruments and melodic styles.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>Classical {country} compositions</li>
                              <li>Folk songs from rural regions</li>
                              <li>Contemporary fusion with traditional elements</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="bg-travel-sand-light/30 rounded-full p-2 mr-4 mt-1">
                            <CameraIcon className="h-5 w-5 text-travel-blue" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">Cinema & Visual Arts</h4>
                            <p className="text-gray-600 mb-2">
                              {country}'s film industry and visual arts scene showcase its cultural diversity.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>"The Heritage" - award-winning film about {country}'s history</li>
                              <li>Traditional painting styles unique to the region</li>
                              <li>Contemporary art galleries in major cities</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Festivals & Celebrations</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={`https://source.unsplash.com/800x600/?festival,celebration`} 
                            alt="Festival celebration" 
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold">New Year Festival</h4>
                            <p className="text-sm text-gray-600">
                              A vibrant celebration marking the beginning of the new year with 
                              colorful parades, traditional dances, and festive feasts.
                            </p>
                            <p className="text-sm text-travel-blue mt-2">January/February</p>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={`https://source.unsplash.com/800x600/?lantern,festival`} 
                            alt="Lantern festival" 
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold">Harvest Festival</h4>
                            <p className="text-sm text-gray-600">
                              Annual celebration of the harvest season featuring traditional 
                              music, dance performances, and special cuisine.
                            </p>
                            <p className="text-sm text-travel-blue mt-2">September/October</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Cultural Experiences</h3>
                        <ul className="space-y-4">
                          <li>
                            <h4 className="font-medium">Traditional Dance Performance</h4>
                            <p className="text-sm text-gray-600">
                              Watch skilled performers bring ancient stories to life through movement and music.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Craft Workshops</h4>
                            <p className="text-sm text-gray-600">
                              Learn traditional crafts like pottery, weaving, or calligraphy from local artisans.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Cultural Heritage Sites</h4>
                            <p className="text-sm text-gray-600">
                              Visit UNESCO-protected locations that showcase the country's rich history.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Religious Ceremonies</h4>
                            <p className="text-sm text-gray-600">
                              Observe or participate in ceremonies at temples, churches, or mosques.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},traditional`} 
                          alt="Traditional costume" 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="font-bold text-xl mb-2">Traditional Attire</h3>
                          <p className="text-gray-600">
                            {country}'s traditional clothing reflects its cultural heritage, featuring 
                            distinctive designs, vibrant colors, and intricate embroidery that vary 
                            by region and social context. These garments are often worn during special 
                            occasions and cultural celebrations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Trip Planning Content */}
              <TabsContent value="planning" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Trip Planning for {country}</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">When to Visit</h3>
                      
                      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h4 className="font-semibold text-lg mb-4">Seasonal Guide</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium">Spring (March - May)</h5>
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                Recommended
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Mild temperatures and blooming landscapes make spring an ideal time to visit. 
                              Perfect for outdoor activities and exploring the countryside.
                            </p>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium">Summer (June - August)</h5>
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                Peak Season
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              The busiest time with warm weather, longer days, and numerous festivals. 
                              Expect higher prices and more crowds at popular attractions.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium">Autumn (September - November)</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Cooler temperatures and beautiful fall colors. A good time for cultural 
                              experiences and visiting wine regions during harvest.
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium">Winter (December - February)</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Cold temperatures but fewer tourists. Ideal for winter sports in mountainous 
                              regions and experiencing local holiday traditions.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Getting Around</h3>
                      
                      <div className="space-y-6 mb-8">
                        <div className="bg-white rounded-lg shadow-md p-5">
                          <h4 className="font-semibold mb-2">Public Transportation</h4>
                          <p className="text-sm text-gray-600">
                            {country} has an efficient public transportation system in major cities, 
                            including buses, trams, and metros. Consider purchasing a travel card for 
                            unlimited rides during your stay.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-5">
                          <h4 className="font-semibold mb-2">Car Rental</h4>
                          <p className="text-sm text-gray-600">
                            Renting a car gives you flexibility, especially for exploring rural areas. 
                            International driving permits are required for visitors from most countries.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-5">
                          <h4 className="font-semibold mb-2">Taxis & Ride-Sharing</h4>
                          <p className="text-sm text-gray-600">
                            Taxis are readily available in urban areas. Popular ride-sharing apps also 
                            operate in major cities, providing a convenient option for getting around.
                          </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-5">
                          <h4 className="font-semibold mb-2">Trains</h4>
                          <p className="text-sm text-gray-600">
                            The train network connects major cities and offers scenic routes. High-speed 
                            trains are available on popular routes, and advanced booking is recommended.
                          </p>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Sample Itineraries</h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                          <h4 className="font-semibold">3-Day City Break</h4>
                          <ul className="mt-2 space-y-2">
                            <li className="border-b pb-2">
                              <span className="font-medium">Day 1:</span> Explore the capital city's historic center
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Day 2:</span> Visit museums and cultural sites
                            </li>
                            <li>
                              <span className="font-medium">Day 3:</span> Experience local cuisine and shopping
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                          <h4 className="font-semibold">1-Week Comprehensive Tour</h4>
                          <ul className="mt-2 space-y-2">
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 1-2:</span> Capital city exploration
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 3-4:</span> Coastal region and beaches
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 5-6:</span> Rural villages and natural landscapes
                            </li>
                            <li>
                              <span className="font-medium">Day 7:</span> Return to capital for shopping and relaxation
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                          <h4 className="font-semibold">2-Week In-Depth Journey</h4>
                          <ul className="mt-2 space-y-2">
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 1-3:</span> Capital city and surroundings
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 4-6:</span> Northern region exploration
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 7-9:</span> Beach retreat on the coast
                            </li>
                            <li className="border-b pb-2">
                              <span className="font-medium">Days 10-12:</span> Mountain adventures
                            </li>
                            <li>
                              <span className="font-medium">Days 13-14:</span> Cultural immersion in historic town
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Travel Essentials</h3>
                        <ul className="space-y-4">
                          <li>
                            <h4 className="font-medium">Visa Requirements</h4>
                            <p className="text-sm text-gray-600">
                              Check visa requirements well in advance. Some nationalities may need to apply several weeks before travel.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Health Precautions</h4>
                            <p className="text-sm text-gray-600">
                              Consult with a travel health specialist about necessary vaccinations and health precautions.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Currency</h4>
                            <p className="text-sm text-gray-600">
                              The local currency is {country} Dollar. ATMs are widely available in urban areas but may be limited in rural regions.
                            </p>
                          </li>
                          <li>
                            <h4 className="font-medium">Electricity</h4>
                            <p className="text-sm text-gray-600">
                              The standard voltage is 220V with Type C and F plugs. Travelers from some countries may need adapters.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-travel-blue p-6 rounded-lg text-white mb-6">
                        <h3 className="font-bold text-xl mb-4">Budget Planning</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">Budget Travel</h4>
                            <p className="text-sm opacity-90">$30-50 per day</p>
                            <ul className="text-xs opacity-80 list-disc pl-5 mt-1">
                              <li>Hostels and guesthouses</li>
                              <li>Street food and markets</li>
                              <li>Public transportation</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium">Mid-Range</h4>
                            <p className="text-sm opacity-90">$100-150 per day</p>
                            <ul className="text-xs opacity-80 list-disc pl-5 mt-1">
                              <li>3-star hotels</li>
                              <li>Good restaurants</li>
                              <li>Some guided tours</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium">Luxury</h4>
                            <p className="text-sm opacity-90">$250+ per day</p>
                            <ul className="text-xs opacity-80 list-disc pl-5 mt-1">
                              <li>4-5 star hotels</li>
                              <li>Fine dining</li>
                              <li>Private tours and experiences</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                          src={`https://source.unsplash.com/800x600/?${country},map`} 
                          alt="Travel map" 
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="font-bold text-xl mb-2">Travel Apps & Resources</h3>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                            <li>Official Tourism Website: visit{country}.com</li>
                            <li>Local Transport App: {country}Transit</li>
                            <li>Language Translation: {country}Speak</li>
                            <li>Emergency Contact: 911 or 112</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Tips & Advice Content */}
              <TabsContent value="tips" className="py-8">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-heading">Tips & Advice for Visiting {country}</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Cultural Etiquette</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-lg">Greetings & Social Interactions</h4>
                            <p className="text-gray-600 mt-1 mb-2">
                              Understanding how to greet locals and navigate social situations will enhance your experience.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>The traditional greeting involves a slight bow with hands pressed together</li>
                              <li>Removing shoes is customary before entering homes and some establishments</li>
                              <li>Avoid public displays of affection, which may be considered inappropriate</li>
                              <li>Ask permission before taking photos of local people</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Dress Code</h4>
                            <p className="text-gray-600 mt-1 mb-2">
                              Dressing appropriately shows respect for local customs and traditions.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Modest clothing is appreciated, especially when visiting religious sites</li>
                              <li>Cover shoulders and knees in temples and traditional areas</li>
                              <li>Beachwear should be limited to beach areas only</li>
                              <li>Light, breathable fabrics are recommended for the climate</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Religious Customs</h4>
                            <p className="text-gray-600 mt-1 mb-2">
                              Respect for religious practices is essential when visiting sacred sites.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Remove hats and sunglasses when entering places of worship</li>
                              <li>Speak quietly and avoid disruptive behavior</li>
                              <li>Some sites prohibit photography or have specific areas where it's allowed</li>
                              <li>Follow local customs regarding offerings or participation in ceremonies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-2xl font-bold mb-4">Safety Information</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-lg">General Safety</h4>
                            <p className="text-gray-600 mt-1 mb-2">
                              {country} is generally a safe destination, but it's always wise to take common precautions.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Keep valuables secure and be vigilant in crowded tourist areas</li>
                              <li>Use official taxis or reputable ride-sharing services</li>
                              <li>Have digital and physical copies of important documents</li>
                              <li>Register with your embassy if staying for an extended period</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Health Considerations</h4>
                            <p className="text-gray-600 mt-1 mb-2">
                              Taking health precautions will help ensure an enjoyable trip.
                            </p>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Drink bottled or purified water</li>
                              <li>Use insect repellent in rural and tropical areas</li>
                              <li>Carry basic medications and a first aid kit</li>
                              <li>Have comprehensive travel insurance that covers medical emergencies</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Emergency Contacts</h4>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="bg-gray-50 p-3 rounded">
                                <p className="font-medium">Police</p>
                                <p className="text-sm">110</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <p className="font-medium">Ambulance</p>
                                <p className="text-sm">120</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <p className="font-medium">Fire</p>
                                <p className="text-sm">119</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded">
                                <p className="font-medium">Tourist Police</p>
                                <p className="text-sm">1155</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-2xl font-bold mb-4">What to Pack</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-lg">Essentials</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                              <li>Passport and travel documents</li>
                              <li>Travel insurance information</li>
                              <li>Local currency and credit cards</li>
                              <li>Phone and charger</li>
                              <li>Travel adapter</li>
                              <li>Medications</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Clothing</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                              <li>Lightweight, breathable clothes</li>
                              <li>Modest attire for temples</li>
                              <li>Comfortable walking shoes</li>
                              <li>Rain jacket or umbrella</li>
                              <li>Swimwear (if applicable)</li>
                              <li>Light sweater or jacket for evenings</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">Other Items</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                              <li>Sunscreen and hat</li>
                              <li>Insect repellent</li>
                              <li>Hand sanitizer</li>
                              <li>Water bottle</li>
                              <li>Camera</li>
                              <li>Day bag or backpack</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-travel-sand-light/30 p-6 rounded-lg mb-6">
                        <h3 className="font-bold text-xl mb-4">Do's and Don'ts</h3>
                        
                        <div className="mb-4">
                          <h4 className="font-medium text-green-700">Do's</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Learn a few basic phrases in the local language</li>
                            <li>Remove shoes when entering homes and temples</li>
                            <li>Try local cuisine and specialties</li>
                            <li>Bargain politely in markets (where appropriate)</li>
                            <li>Ask permission before taking photos of people</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-red-700">Don'ts</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Point with your feet or touch people's heads</li>
                            <li>Show disrespect at religious sites</li>
                            <li>Engage in public displays of affection</li>
                            <li>Discuss sensitive political topics</li>
                            <li>Drink tap water unless advised it's safe</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                        <div className="p-6">
                          <h3 className="font-bold text-xl mb-3">Souvenir Shopping</h3>
                          <p className="text-gray-600 mb-4">
                            Take home a piece of {country}'s culture with these authentic souvenirs.
                          </p>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                            <li>
                              <span className="font-medium">Traditional Handicrafts</span>: 
                              Handmade items showcasing local artisanship
                            </li>
                            <li>
                              <span className="font-medium">Textiles</span>: 
                              Beautiful fabrics with regional patterns
                            </li>
                            <li>
                              <span className="font-medium">Spices and Tea</span>: 
                              Local flavors to enjoy at home
                            </li>
                            <li>
                              <span className="font-medium">Artwork</span>: 
                              Paintings or sculptures representing the culture
                            </li>
                            <li>
                              <span className="font-medium">Jewelry</span>: 
                              Pieces made with traditional techniques
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-travel-blue p-6 rounded-lg text-white">
                        <div className="flex items-center mb-4">
                          <ShoppingBag className="h-6 w-6 mr-3" />
                          <h3 className="font-bold text-xl">Useful Phrases</h3>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="font-medium">Hello</p>
                            <p className="text-sm opacity-90 italic">Sa-wat-dee</p>
                          </div>
                          <div>
                            <p className="font-medium">Thank you</p>
                            <p className="text-sm opacity-90 italic">Khob-khun</p>
                          </div>
                          <div>
                            <p className="font-medium">Yes/No</p>
                            <p className="text-sm opacity-90 italic">Chai/Mai-chai</p>
                          </div>
                          <div>
                            <p className="font-medium">Excuse me</p>
                            <p className="text-sm opacity-90 italic">Kor-tot</p>
                          </div>
                          <div>
                            <p className="font-medium">How much?</p>
                            <p className="text-sm opacity-90 italic">Tao-rai</p>
                          </div>
                          <div>
                            <p className="font-medium">I don't understand</p>
                            <p className="text-sm opacity-90 italic">Mai-kao-jai</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CountryPage;
