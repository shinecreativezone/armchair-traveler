
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AlbaniaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Albania",
    slug: "albania",
    continent: "Europe",
    capital: "Tirana",
    languageOfficial: "Albanian",
    languagesSpoken: ["Albanian", "Greek", "Macedonian", "Aromanian", "Romani"],
    currency: "Albanian Lek (ALL)",
    population: 2877800,
    area: 28748,
    timeZones: ["GMT+1 (CET)", "GMT+2 (CEST) in summer"],
    callingCode: "+355",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1601145949372-5f4e7d4de37f?q=80&w=1000",
    description: "Albania is a small country in Southeastern Europe with a long Adriatic and Ionian coastline. Despite its compact size, Albania offers rugged mountain landscapes, pristine beaches, ancient archaeological sites, and a unique culture that reflects its complex history of isolation and various influences.",
    whyVisit: "Albania combines Mediterranean charm with Balkan character at a fraction of the price of its neighbors. Visitors will discover untouched beaches along the Albanian Riviera, UNESCO World Heritage sites, impressive mountain ranges, and warm hospitality from locals eager to share their previously isolated country.",
    bestTimeToVisit: {
      text: "The best time to visit Albania is from May to September when the weather is warm and sunny, perfect for enjoying both the beaches and mountains.",
      months: ["May", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Hot and dry along the coast with temperatures between 25-35°C (77-95°F), while mountain areas remain cooler.",
      winter: "Mild and rainy on the coast (5-10°C/41-50°F) and cold with snowfall in the mountains (often below freezing).",
      spring: "Mild with occasional rain, temperatures ranging from 15-25°C (59-77°F) and blooming landscapes.",
      fall: "Cooling temperatures (15-25°C/59-77°F) with occasional rain showers and beautiful fall colors in mountain regions."
    },
    majorCities: [
      {
        name: "Tirana",
        description: "The colorful capital city features a blend of Ottoman, Italian, and Soviet architecture, vibrant street art, trendy cafés, and fascinating museums that document Albania's complex history."
      },
      {
        name: "Berat",
        description: "Known as the 'City of a Thousand Windows' for its distinctive Ottoman architecture, this UNESCO World Heritage site features well-preserved white houses cascading down the hillside."
      },
      {
        name: "Gjirokastër",
        description: "A UNESCO-protected museum city with impressive stone houses, a magnificent castle, and cobblestone streets that preserve Ottoman-era architecture."
      },
      {
        name: "Shkodër",
        description: "One of Albania's oldest cities, featuring the impressive Rozafa Castle, proximity to Lake Shkodër, and serving as a gateway to the Albanian Alps."
      },
      {
        name: "Saranda",
        description: "A popular coastal resort town on the Albanian Riviera with beautiful beaches, proximity to ancient ruins at Butrint, and ferry connections to Corfu, Greece."
      }
    ],
    famousFor: [
      "Albanian Riviera - Pristine Mediterranean beaches with crystal-clear waters",
      "Accursed Mountains (Albanian Alps) - Dramatic mountain scenery perfect for hiking",
      "Butrint National Park - Ancient Greek and Roman ruins in a UNESCO World Heritage site",
      "Bunkers - Over 170,000 concrete bunkers built during the Communist period dot the landscape",
      "Raki - Traditional fruit brandy often made from grapes or plums"
    ],
    topAttractions: [
      {
        name: "Butrint Ancient City",
        description: "A UNESCO World Heritage Site featuring well-preserved Greek, Roman, Byzantine, and Venetian ruins in a beautiful setting overlooking the Ionian Sea.",
        imageUrl: "https://images.unsplash.com/photo-1566838318049-b6541c4bfc31?q=80&w=1000"
      },
      {
        name: "Berat Old Town",
        description: "The 'City of a Thousand Windows' with its cascading white Ottoman houses, Byzantine churches, and 13th-century castle offering panoramic views.",
        imageUrl: "https://images.unsplash.com/photo-1639847089433-240267108376?q=80&w=1000"
      },
      {
        name: "Blue Eye (Syri i Kaltër)",
        description: "A natural spring where crystal clear water bubbles from a stunning blue pool that's more than 50 meters deep, creating a mesmerizing natural phenomenon.",
        imageUrl: "https://images.unsplash.com/photo-1590579241454-7b870f859f9e?q=80&w=1000"
      },
      {
        name: "Theth National Park",
        description: "A remote mountain village and valley in the Albanian Alps with stunning hiking trails, traditional stone houses, and the iconic Theth Church and Lock-in Tower.",
        imageUrl: "https://images.unsplash.com/photo-1582470628398-3cc1da1d2142?q=80&w=1000"
      },
      {
        name: "Kruja Castle and Skanderbeg Museum",
        description: "A hilltop castle and national complex dedicated to Albania's national hero who resisted Ottoman rule, along with a picturesque old bazaar selling traditional crafts.",
        imageUrl: "https://images.unsplash.com/photo-1571661286290-41deac88a6b6?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Albanian cuisine reflects Mediterranean and Balkan influences, with an emphasis on fresh seasonal ingredients, olive oil, and grilled meats. Regional variations exist between coastal and mountain areas, with seafood prevalent along the coast and more meat and dairy in highland regions.",
      famousDishes: [
        "Tavë kosi - Baked lamb with yogurt sauce",
        "Byrek - Flaky pastry filled with cheese, spinach, or meat",
        "Fërgese - Peppers, tomatoes and cottage cheese dish",
        "Qofte - Grilled meatballs often served with yogurt",
        "Baklava - Sweet layered pastry with nuts and honey"
      ]
    },
    culturalCustoms: [
      "Hospitality - Albanians take pride in welcoming guests and may insist on treating visitors",
      "Besa - Traditional code of honor emphasizing keeping one's word and helping others",
      "Coffee culture - Taking time to enjoy Turkish-style coffee while socializing",
      "Nodding customs - Unlike many countries, nodding up and down means 'no' while shaking side to side means 'yes'",
      "Traditional dance - Folk dances remain an important part of cultural celebrations"
    ],
    travelTips: [
      "Learn basic Albanian phrases as English is not widely spoken in rural areas",
      "Carry cash as credit cards aren't accepted in many places outside major cities",
      "Roads can be challenging with potholes and unpredictable drivers - drive cautiously",
      "Public transportation exists but can be unpredictable - consider renting a car",
      "The Albanian Riviera gets very crowded in July and August - visit in shoulder season if possible",
      "Tap water is generally safe in cities but bottled water is recommended in rural areas"
    ],
    safetyInfo: "Albania is generally safe for tourists with low crime rates. Exercise normal precautions as you would elsewhere. The biggest risks are related to road safety due to poor road conditions in some areas and aggressive driving habits. Remote mountain areas may have limited emergency services.",
    sustainableTourism: "Albania's tourism industry is developing rapidly. Support sustainable growth by staying in locally-owned guesthouses, hiring local guides, respecting protected areas, and participating in community-based tourism initiatives. The country has several eco-tourism projects in mountain regions that help preserve traditional ways of life.",
    visaRequirements: "Many visitors including EU citizens, US, UK, and Canadian citizens can enter Albania without a visa for stays up to 90 days within a 180-day period. Always check current requirements before traveling as regulations may change.",
    budget: {
      budget: "Budget travelers can get by on $25-40 USD per day including hostel accommodation, public transportation and modest meals",
      midRange: "Mid-range travelers should budget $40-80 USD daily for decent hotels and restaurants",
      luxury: "Luxury travelers will spend $100+ USD daily for top accommodations and dining"
    },
    transportationOptions: [
      "Buses and minivans (furgons) connect cities and towns",
      "Rental cars provide flexibility but require confidence on challenging roads",
      "Taxis are affordable within cities",
      "Limited train service between few cities",
      "Ferry services along the coast and to Corfu (Greece)"
    ],
    neighboringCountries: [
      "Montenegro", "Kosovo", "North Macedonia", "Greece"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Mediterranean", "Beaches", "Mountains", "History", "UNESCO Sites",
    "Budget-friendly", "Hiking", "Ancient Ruins", "Ottoman Architecture", "Off the Beaten Path"
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

export default AlbaniaCountry;
