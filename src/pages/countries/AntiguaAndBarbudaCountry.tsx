
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AntiguaAndBarbudaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Antigua and Barbuda",
    slug: "antigua-and-barbuda",
    continent: "North America",
    capital: "St. John's",
    languageOfficial: "English",
    languagesSpoken: ["English", "Antiguan Creole"],
    currency: "Eastern Caribbean Dollar (XCD)",
    population: 97929,
    area: 440,
    timeZones: ["GMT-4"],
    callingCode: "+1-268",
    drivingSide: "left" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1590080669911-3e3d1466177a?q=80&w=1000",
    description: "Antigua and Barbuda is a twin-island nation in the Eastern Caribbean, known for its stunning beaches, crystal-clear waters, and rich naval history. Antigua boasts 365 beaches—'one for each day of the year'—while the smaller, less-developed Barbuda offers pink sand beaches and a large frigate bird sanctuary. The country gained independence from Britain in 1981 but maintains strong British influences alongside its vibrant Caribbean culture.",
    whyVisit: "Antigua and Barbuda offers pristine Caribbean beaches without the crowds of more commercialized islands. History enthusiasts can explore Nelson's Dockyard, the only remaining Georgian dockyard in the world. Sailing enthusiasts flock to the annual Antigua Sailing Week, while nature lovers can experience the remarkable frigate bird sanctuary in Barbuda. With excellent snorkeling, diving, and a relaxed island atmosphere, it's perfect for travelers seeking authentic Caribbean charm with exceptional natural beauty.",
    bestTimeToVisit: {
      text: "The best time to visit is from December to April during the dry season when temperatures are pleasant and rainfall is minimal. This coincides with the peak tourist season when sailing and other outdoor activities are ideal.",
      months: ["December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Hot and humid (May to November) with temperatures averaging 29-31°C (84-88°F). This period coincides with the rainy and hurricane season.",
      winter: "Warm and dry (December to April) with temperatures between 24-28°C (75-82°F) and low humidity, making it the most comfortable time to visit.",
      spring: "Warm temperatures around 26-29°C (79-84°F) with gradually increasing humidity and occasional showers toward late spring.",
      fall: "Hot and humid with temperatures around 28-30°C (82-86°F). Fall is the height of hurricane season (September-October)."
    },
    majorCities: [
      {
        name: "St. John's",
        description: "The colorful capital city combines colonial architecture with Caribbean vibrancy. Key attractions include the St. John's Cathedral with its distinctive twin Baroque towers, the bustling Saturday morning market, and Heritage Quay for duty-free shopping."
      },
      {
        name: "English Harbour",
        description: "A historic district centered around Nelson's Dockyard National Park, where 18th and 19th-century buildings have been restored in the only continuously operating Georgian dockyard in the world. It's a major yachting center and historical attraction."
      },
      {
        name: "Codrington",
        description: "The main settlement on Barbuda, this small village was severely damaged during Hurricane Irma in 2017 and is being rebuilt. It's the gateway to Barbuda's stunning beaches and the frigate bird sanctuary."
      },
      {
        name: "All Saints",
        description: "A village in central Antigua known for its pottery traditions. Visitors can watch local artisans create traditional ceramics using techniques passed down through generations."
      },
      {
        name: "Falmouth",
        description: "A historic harbor town adjacent to English Harbour that comes alive during sailing events. It features the restored Clarence House and offers stunning views over the harbor."
      }
    ],
    famousFor: [
      "Beaches - 365 beaches on Antigua, including the pink sand beaches of Barbuda",
      "Nelson's Dockyard - UNESCO World Heritage site and the only remaining Georgian dockyard in the world",
      "Antigua Sailing Week - One of the world's premier sailing regattas held annually",
      "Frigate Bird Sanctuary - One of the largest in the Western Hemisphere, located in Barbuda",
      "Cricket - A national passion with many famous players including Sir Vivian Richards"
    ],
    topAttractions: [
      {
        name: "Nelson's Dockyard",
        description: "A UNESCO World Heritage site featuring perfectly restored colonial-era buildings where Admiral Horatio Nelson was stationed in the 1780s. Now a working dockyard filled with yachts, shops, hotels, and restaurants.",
        imageUrl: "https://images.unsplash.com/photo-1605482431749-80dd4d1a0a43?q=80&w=1000"
      },
      {
        name: "Shirley Heights",
        description: "A restored military lookout and gun battery with panoramic views over English Harbour. Famous for its Sunday sunset parties featuring barbecue, rum punch, and live steel drum and reggae music.",
        imageUrl: "https://images.unsplash.com/photo-1605482798845-fd1332035a53?q=80&w=1000"
      },
      {
        name: "17 Mile Beach (Barbuda)",
        description: "An uninterrupted stretch of pristine pink-tinged sand on Barbuda's western coast. Its remote nature ensures it's rarely crowded, offering a truly secluded Caribbean beach experience.",
        imageUrl: "https://images.unsplash.com/photo-1617972882562-5ad7f9e8ae9b?q=80&w=1000"
      },
      {
        name: "Devil's Bridge",
        description: "A natural limestone arch formed by Atlantic waves crashing against the coastline over thousands of years. Located at Indian Town National Park, it offers dramatic water spouts as waves crash beneath the bridge.",
        imageUrl: "https://images.unsplash.com/photo-1602142750792-62bc054d4ab2?q=80&w=1000"
      },
      {
        name: "Frigate Bird Sanctuary",
        description: "Located in Barbuda's Codrington Lagoon, this protected area hosts over 5,000 frigate birds—the largest colony in the Western Hemisphere. Accessible only by boat, visitors can witness these remarkable birds with their distinctive red throats during mating season.",
        imageUrl: "https://images.unsplash.com/photo-1555519266-69c1c73d5273?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Antiguan cuisine blends British, African, and indigenous influences, featuring fresh seafood, tropical fruits, and local spices. Many dishes incorporate locally grown produce from the fertile volcanic soil. The national dish, fungie (pronounced 'foon-jee') and pepper pot, reflects the islands' culinary heritage.",
      famousDishes: [
        "Fungie and Pepper Pot - Cornmeal cooked to a polenta-like consistency served with a spicy vegetable and meat stew",
        "Ducana - Sweet potato dumplings wrapped in banana leaves",
        "Antigua Black Pineapple - Known as the world's sweetest pineapple, often eaten fresh or in desserts",
        "Conch - Served in fritters, chowders, or curries",
        "Rum-based drinks - Including the 'Antigua Smile' cocktail made with local Cavalier rum"
      ]
    },
    culturalCustoms: [
      "Greeting customs - Antiguans are warm and friendly; a simple 'good morning/afternoon/evening' is appreciated when entering shops or encountering locals",
      "Cricket passion - The national sport with an almost religious following; discussing cricket is a great way to connect with locals",
      "Music and dance - Calypso and soca music are integral to the culture, especially during Carnival celebrations (late July to early August)",
      "Religious traditions - Sunday is observed as a day of worship and family time; many businesses close",
      "Modest dress - When not at the beach, modest attire is appreciated, particularly when visiting churches or in town"
    ],
    travelTips: [
      "Transportation between Antigua and Barbuda requires a small plane or ferry; plan accordingly",
      "US dollars are widely accepted, though you may receive change in Eastern Caribbean dollars",
      "Tap water is safe to drink in most places on Antigua but bottled water is recommended on Barbuda",
      "Bring strong sun protection as the Caribbean sun is intense, even on cloudy days",
      "Tipping is customary (10-15% for services) though some resorts include service charges",
      "Driving is on the left side of the road, and rental cars require a temporary local permit"
    ],
    safetyInfo: "Antigua and Barbuda is generally safe for tourists with relatively low crime rates. Most visits are trouble-free, though standard precautions should be taken to protect valuables, especially at beaches. The most significant risks are natural hazards including hurricane season (June to November) and strong currents at certain beaches. Always check local warnings before swimming and stay updated on weather forecasts during hurricane season.",
    sustainableTourism: "The country is increasingly focusing on sustainable tourism to preserve its natural beauty. Visitors can contribute by choosing eco-friendly accommodations, respecting marine life while snorkeling or diving, avoiding single-use plastics, and supporting conservation efforts like the Environmental Awareness Group. Barbuda, in particular, is rebuilding with sustainability in mind after Hurricane Irma, and responsible tourism can help this recovery while protecting the island's unique ecosystem.",
    visaRequirements: "Most visitors including those from the US, Canada, UK, and EU countries don't require visas for stays up to 6 months. You'll need a valid passport, proof of accommodation, return ticket, and sufficient funds. All visitors must clear immigration upon arrival where they may be asked about the length and purpose of stay. Always check the latest requirements before traveling as regulations can change.",
    budget: {
      budget: "150-250 USD per day for basic accommodations, local meals, and public transportation",
      midRange: "250-450 USD per day for nice resorts, restaurant dining, and some activities",
      luxury: "450+ USD per day for luxury resorts, fine dining, and exclusive experiences"
    },
    transportationOptions: [
      "Taxis - Widely available but unmetered; agree on price before departing",
      "Rental cars - Good for exploring at your own pace (temporary local permit required)",
      "Public buses - Affordable but with limited routes and schedules",
      "Water taxis and ferries - For travel between islands and to certain beaches",
      "Private boat charters - Available for day trips and island hopping"
    ],
    neighboringCountries: [
      "Saint Kitts and Nevis", "Montserrat (UK)", "Saint Barthélemy (France)", "Guadeloupe (France)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beaches", "Sailing", "History", "Luxury", "Island",
    "Caribbean", "Diving", "Colonial Heritage", "Wildlife", "Romance"
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
                        <h4 className="font-bold">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cities">
                <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {countryData.majorCities.map((city) => (
                    <Card key={city.name}>
                      <CardContent className="p-4">
                        <h4 className="font-bold">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cuisine">
                <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                <p className="mb-4">{countryData.localCuisine.description}</p>
                <h4 className="font-semibold mt-2">Popular Dishes:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {countryData.localCuisine.famousDishes.map((dish) => (
                    <li key={dish}>{dish}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="customs">
                <h3 className="text-xl font-semibold mb-2">Cultural Customs</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {countryData.culturalCustoms.map((custom) => (
                    <li key={custom}>{custom}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Travel Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Capital</h4>
                    <p>{countryData.capital}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Languages</h4>
                    <p>Official: {countryData.languageOfficial}</p>
                    <p className="text-sm text-muted-foreground">
                      Also spoken: {countryData.languagesSpoken.join(', ')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Currency</h4>
                    <p>{countryData.currency}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Population</h4>
                    <p>{countryData.population.toLocaleString()}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Area</h4>
                    <p>{countryData.area.toLocaleString()} km²</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Time Zone</h4>
                    <p>{countryData.timeZones.join(', ')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Calling Code</h4>
                    <p>{countryData.callingCode}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Driving Side</h4>
                    <p>{countryData.drivingSide.charAt(0).toUpperCase() + countryData.drivingSide.slice(1)}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Best Time to Visit</h4>
                  <p className="mb-2">{countryData.bestTimeToVisit.text}</p>
                  <div className="flex flex-wrap gap-1">
                    {countryData.bestTimeToVisit.months.map((month) => (
                      <Badge key={month} variant="secondary">{month}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Weather</h4>
                  <div className="text-sm">
                    <p className="mt-1"><span className="font-medium">Summer:</span> {countryData.weatherInfo.summer}</p>
                    <p className="mt-1"><span className="font-medium">Winter:</span> {countryData.weatherInfo.winter}</p>
                    <p className="mt-1"><span className="font-medium">Spring:</span> {countryData.weatherInfo.spring}</p>
                    <p className="mt-1"><span className="font-medium">Fall:</span> {countryData.weatherInfo.fall}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Travel Budget (Daily)</h4>
                  <div className="text-sm">
                    <p className="mt-1"><span className="font-medium">Budget:</span> {countryData.budget.budget}</p>
                    <p className="mt-1"><span className="font-medium">Mid-Range:</span> {countryData.budget.midRange}</p>
                    <p className="mt-1"><span className="font-medium">Luxury:</span> {countryData.budget.luxury}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Visa Information</h4>
                  <p className="text-sm">{countryData.visaRequirements}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Safety Information</h4>
                  <p className="text-sm text-green-600">{countryData.safetyInfo}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Neighboring Countries</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {countryData.neighboringCountries.map((country) => (
                      <Link to={`/country/${country.toLowerCase().replace(/\s+/g, '-')}`} key={country}>
                        <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                          {country}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Travel Tips</h3>
                <ul className="space-y-2">
                  {countryData.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sustainable Tourism</h3>
                <p>{countryData.sustainableTourism}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AntiguaAndBarbudaCountry;
