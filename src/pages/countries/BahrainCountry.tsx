import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BahrainCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bahrain",
    slug: "bahrain",
    continent: "Asia",
    capital: "Manama",
    languageOfficial: "Arabic",
    languagesSpoken: ["Arabic", "English", "Persian", "Urdu"],
    currency: "Bahraini Dinar (BHD)",
    population: 1701583,
    area: 765,
    timeZones: ["GMT+3"],
    callingCode: "+973",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2016/01/29/17/49/banner-1168019_1280.jpg",
    description: "Bahrain, officially the Kingdom of Bahrain, is a small island nation in the Persian Gulf. Despite its small size, Bahrain offers an intriguing mix of ancient history and modern development. As one of the first Gulf states to discover oil, it has transformed into a financial hub while preserving its rich cultural heritage.",
    whyVisit: "Bahrain offers a unique blend of Arabian heritage and modern comfort that sets it apart from its larger neighbors. Despite its small size, the country packs in diverse experiences from ancient archaeological sites to ultra-modern architecture. Visitors can explore 5,000-year-old ruins at Qal'at al-Bahrain, experience the fascinating Tree of Life surviving in the desert, and enjoy the vibrant souks of Manama. For those interested in modern attractions, the Bahrain International Circuit hosts Formula 1 races, while excellent museums like the Bahrain National Museum provide cultural insights.",
    bestTimeToVisit: {
      text: "The best time to visit Bahrain is during the mild winter months from November to April when temperatures are pleasant and range from 15-25°C (59-77°F).",
      months: ["November", "December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Extremely hot with temperatures regularly exceeding 40°C (104°F) from May to October. High humidity makes outdoor activities uncomfortable during daytime.",
      winter: "Mild and pleasant with temperatures ranging from 15-25°C (59-77°F) from November to April, making it the ideal time to visit Bahrain.",
      spring: "Brief but pleasant in March and April with temperatures ranging from 20-30°C (68-86°F) before the summer heat intensifies.",
      fall: "October and November see temperatures gradually dropping from summer highs, ranging from 25-35°C (77-95°F)."
    },
    majorCities: [
      {
        name: "Manama",
        description: "The capital and largest city, blending modern skyscrapers with traditional souks. Key attractions include Bahrain World Trade Center, Bab Al Bahrain, and the vibrant Manama Souq known for gold, spices, and traditional crafts."
      },
      {
        name: "Riffa",
        description: "The second-largest city, divided into East and West Riffa. Known for Riffa Fort, the Royal Golf Club designed by Colin Montgomerie, and traditional architecture that offers glimpses into Bahrain's past."
      },
      {
        name: "Muharraq",
        description: "The former capital with rich cultural heritage evident in its traditional architecture and pearling history. Home to Bahrain International Airport, Sheikh Isa bin Ali House, and the UNESCO-listed Pearling Path."
      },
      {
        name: "Hamad Town",
        description: "A planned residential city named after the late Emir Sheikh Hamad bin Isa Al Khalifa. Features orderly neighborhoods, modern amenities, and is near the popular Bahrain National Museum."
      },
      {
        name: "Isa Town",
        description: "Known for its traditional Thursday/Saturday market selling everything from fabrics to electronics. Home to the University of Bahrain and the Bahrain National Stadium."
      }
    ],
    famousFor: [
      "Formula 1 Bahrain Grand Prix - First F1 race in the Middle East",
      "Qal'at al-Bahrain (Bahrain Fort) - UNESCO World Heritage Site",
      "Pearl diving heritage - Once the center of the world's pearl trade",
      "Tree of Life - Mysterious 400-year-old tree surviving in the desert",
      "Al-Fateh Grand Mosque - One of the largest mosques in the world"
    ],
    topAttractions: [
      {
        name: "Qal'at al-Bahrain (Bahrain Fort)",
        description: "This UNESCO World Heritage site reveals 4,000 years of continuous human presence, from the ancient Dilmun civilization to the Portuguese period. The impressive fort structure and surrounding archaeological site offer stunning views over the sea.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Al-Fateh Grand Mosque",
        description: "One of the largest mosques in the world, capable of accommodating over 7,000 worshippers. This impressive structure features a huge fiberglass dome, Italian marble, and Austrian chandeliers. Guided tours welcome non-Muslim visitors.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Tree of Life",
        description: "This 400-year-old mesquite tree has become a symbol of Bahrain, mysteriously thriving in the harsh desert with no visible water source. Standing 32 feet tall, it attracts visitors curious about its survival and spiritual significance.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Bahrain National Museum",
        description: "The country's largest and oldest public museum showcases the rich cultural heritage of Bahrain through archaeological artifacts, traditional handicrafts, and exhibits on the nation's customs and traditions spanning 6,000 years.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Bahrain International Circuit",
        description: "Home to the Formula 1 Bahrain Grand Prix, this state-of-the-art motorsport facility offers track experiences, karting, and tours. The circuit's innovative design and desert setting make it unique among Formula 1 venues.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Bahraini cuisine reflects its island heritage with a delicious mix of Arabic, Persian, and Indian influences. Seafood naturally features prominently, with hammour (grouper) being particularly popular in many dishes. The cuisine is characterized by the use of aromatic spices, rice dishes, and slow-cooked meats.",
      famousDishes: [
        "Machboos - Bahrain's national dish consisting of fragrant rice cooked with meat (usually chicken, fish, or lamb) and a blend of spices similar to Indian biryani",
        "Muhammar - Sweet rice dish prepared with sugar, dates, and spices, typically served with fish",
        "Ghoozi - Whole roasted lamb or sheep served over a bed of rice, nuts, and eggs",
        "Balaleet - Sweet vermicelli noodles topped with a savory omelet, commonly eaten for breakfast",
        "Halwa - A traditional sweet gelatinous dessert made with saffron, cardamom, and nuts"
      ]
    },
    culturalCustoms: [
      "Greeting Etiquette - Men typically greet each other with a handshake, while women may greet with a kiss on the cheek. Between genders, wait for the Bahraini woman to extend her hand first",
      "Majlis Culture - The traditional gathering spaces where Bahrainis socialize and discuss community matters. If invited to one, it's an honor and opportunity to experience local hospitality",
      "Coffee Ritual - The serving of Arabic coffee (gahwa) is an important cultural tradition. It's polite to accept at least one cup when offered",
      "Ramadan Observance - During the holy month, respect fasting hours by refraining from eating, drinking, or smoking in public during daylight hours",
      "Photography - Always ask permission before photographing local people, especially women. Avoid photographing government buildings and military installations"
    ],
    travelTips: [
      "Dress modestly in public places (covering shoulders and knees), especially when visiting religious sites",
      "Taxis are the main form of public transportation, though ride-sharing apps like Uber and Careem are also available",
      "Renting a car is convenient as Bahrain is small and easy to navigate, with good road infrastructure",
      "Many nationalities can obtain visas on arrival or apply for e-visas before travel",
      "The Bahraini Dinar is one of the highest-valued currencies in the world, so check exchange rates carefully",
      "English is widely spoken in tourist areas, hotels, and restaurants"
    ],
    safetyInfo: "Bahrain is generally safe for tourists with low crime rates. The main concerns are road safety, as driving can be aggressive, and the extreme summer heat that requires proper hydration and sun protection. Political demonstrations occasionally occur, so it's advisable to avoid large gatherings. Healthcare facilities are excellent, particularly in private hospitals, though medical costs can be high, making travel insurance advisable.",
    sustainableTourism: "Bahrain is investing in sustainable tourism initiatives, including coral reef restoration projects, desert conservation efforts, and the development of eco-friendly tour options. Visitors can contribute by choosing operators with environmental policies, conserving water (a precious resource in this desert nation), and respecting marine ecosystems when participating in water activities. Supporting local artisans in traditional markets rather than purchasing mass-produced souvenirs also promotes sustainable cultural preservation.",
    visaRequirements: "Many nationalities can obtain a visa on arrival or an e-visa before travel to Bahrain. The on-arrival visa is typically valid for two weeks with the possibility of extension. Travelers from some countries need to apply in advance through a Bahraini embassy or consulate. The Bahrain government offers an online visa application system that simplifies the process. Always check the latest requirements as visa policies occasionally change.",
    budget: {
      budget: "25-50 BHD ($65-130 USD) per day for basic accommodations, local transportation, and affordable meals",
      midRange: "50-100 BHD ($130-265 USD) per day for better hotels, restaurant dining, and some activities",
      luxury: "100+ BHD ($265+ USD) per day for luxury hotels, fine dining, and premium experiences"
    },
    transportationOptions: [
      "Taxis - Available throughout the country with regulated fares",
      "Ride-sharing apps - Uber and Careem operate in Bahrain",
      "Rental cars - Good option for exploring, with well-maintained roads and signage in both Arabic and English",
      "Public buses - Limited network operated by Bahrain Public Transport Company",
      "Private drivers - Available for hire through hotels and travel agencies"
    ],
    neighboringCountries: [
      "Saudi Arabia (connected by the King Fahd Causeway)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Island Nation", "Middle East", "Historical Sites", "Ancient Civilization", "Modern Architecture",
    "Desert Landscapes", "Formula 1", "Islamic Culture", "Pearl Diving", "Shopping"
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{countryData.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{countryData.description}</p>
            
            <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
              <img 
                src={countryData.flagImageUrl} 
                alt={`${countryData.name} scenery`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-2xl font-bold">{countryData.name}</h2>
                <p className="text-white/90">{countryData.continent}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Visit {countryData.name}</h2>
              <p className="mb-4">{countryData.whyVisit}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <Link to={`/recommender?tags=${encodeURIComponent(tag)}`} key={tag}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
              {/* GetYourGuide Widget */}
              <LazyGetYourGuideWidget />

            </div>
            
            <Tabs defaultValue="attractions" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="attractions">Top Attractions</TabsTrigger>
                <TabsTrigger value="cities">Major Cities</TabsTrigger>
                <TabsTrigger value="cuisine">Local Cuisine</TabsTrigger>
                <TabsTrigger value="customs">Cultural Customs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="attractions" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Must-See Attractions</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {countryData.topAttractions.map((attraction) => (
                    <Card key={attraction.name} className="overflow-hidden">
                      <div className="h-[200px] relative">
                        <img 
                          src={attraction.imageUrl} 
                          alt={attraction.name}
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cities" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {countryData.majorCities.map((city) => (
                    <Card key={city.name}>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cuisine" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                <p className="mb-4">{countryData.localCuisine.description}</p>
                <div>
                  <h4 className="font-bold mb-2">Famous Dishes</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {countryData.localCuisine.famousDishes.map((dish) => (
                      <li key={dish}>{dish}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="customs" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Cultural Customs</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {countryData.culturalCustoms.map((custom) => (
                    <li key={custom}>{custom}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Travel Planning</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                  <p className="mb-2">{countryData.bestTimeToVisit.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {countryData.bestTimeToVisit.months.map((month) => (
                      <Badge key={month} variant="secondary">{month}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transportation Options</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {countryData.transportationOptions.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budget Expectations</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold">Budget: </span>
                      <span>{countryData.budget.budget}</span>
                    </div>
                    <div>
                      <span className="font-bold">Mid-Range: </span>
                      <span>{countryData.budget.midRange}</span>
                    </div>
                    <div>
                      <span className="font-bold">Luxury: </span>
                      <span>{countryData.budget.luxury}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Requirements</h3>
                  <p>{countryData.visaRequirements}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Travel Tips & Safety</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Travel Tips</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {countryData.travelTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety Information</h3>
                  <p>{countryData.safetyInfo}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                <p>{countryData.sustainableTourism}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Summer</h3>
                    <p>{countryData.weatherInfo.summer}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Winter</h3>
                    <p>{countryData.weatherInfo.winter}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Spring</h3>
                    <p>{countryData.weatherInfo.spring}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Fall</h3>
                    <p>{countryData.weatherInfo.fall}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Quick Facts</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Capital</p>
                  <p>{countryData.capital}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Official Language</p>
                  <p>{countryData.languageOfficial}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Currency</p>
                  <p>{countryData.currency}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Population</p>
                  <p>{countryData.population.toLocaleString()}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Area</p>
                  <p>{countryData.area.toLocaleString()} km²</p>
                </div>
                
                <div>
                  <p className="font-semibold">Time Zone</p>
                  <p>{countryData.timeZones.join(', ')}</p>
                </div>
                
                <div>
                  <p className="font-semibold">International Dialing Code</p>
                  <p>{countryData.callingCode}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Driving Side</p>
                  <p>{countryData.drivingSide.charAt(0).toUpperCase() + countryData.drivingSide.slice(1)}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Neighboring Countries</p>
                  <p>{countryData.neighboringCountries.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Famous For</h3>
              
              <ul className="list-disc pl-5 space-y-1">
                {countryData.famousFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Languages Spoken</h3>
              
              <div className="flex flex-wrap gap-2">
                {countryData.languagesSpoken.map((language) => (
                  <Badge key={language}>{language}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BahrainCountry;
