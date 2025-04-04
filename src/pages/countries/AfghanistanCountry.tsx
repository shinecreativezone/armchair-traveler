
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AfghanistanCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Afghanistan",
    slug: "afghanistan",
    continent: "Asia",
    capital: "Kabul",
    languageOfficial: "Pashto, Dari",
    languagesSpoken: ["Pashto", "Dari", "Uzbek", "Turkmen", "Balochi"],
    currency: "Afghani (AFN)",
    population: 38928346,
    area: 652230,
    timeZones: ["GMT+4:30"],
    callingCode: "+93",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1567602753427-5baa728c0e3e?q=80&w=1000",
    description: "Afghanistan is a landlocked country located at the crossroads of Central and South Asia. Known for its rugged mountain landscapes and deep valleys, the country has a rich history spanning over 2,500 years with influences from various empires including Persian, Greek, and Mongol. Its strategic location along the Silk Road connected it to cultures across Asia and Europe.",
    whyVisit: "Afghanistan offers dramatic landscapes of the Hindu Kush mountains, ancient historical sites including Buddhist relics, and resilient cultural traditions. While security concerns have limited tourism in recent decades, the country's hospitality traditions, unique cuisine, and untouched natural beauty continue to intrigue adventurous travelers.",
    bestTimeToVisit: {
      text: "The best time to visit Afghanistan is during spring (April to June) and autumn (September to November) when the weather is mild and pleasant in most regions.",
      months: ["April", "May", "June", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Hot and dry with temperatures often exceeding 35°C (95°F) in lowland areas, while mountainous regions remain cooler.",
      winter: "Extremely cold in the mountains with heavy snowfall. Temperatures can drop below -20°C (-4°F) at higher elevations.",
      spring: "Mild and pleasant with blooming vegetation across the country. Temperatures range from 15-25°C (59-77°F).",
      fall: "Cool and dry with temperatures gradually decreasing. Ranges from 10-20°C (50-68°F)."
    },
    majorCities: [
      {
        name: "Kabul",
        description: "The capital and largest city, nestled in a valley surrounded by the Hindu Kush mountains. Known for its historic gardens, bustling bazaars, and the restored Darul Aman Palace."
      },
      {
        name: "Herat",
        description: "An ancient city with Persian-influenced architecture, famous for its impressive Friday Mosque (Masjid-i-Jami), citadel, and traditional crafts like glassmaking and miniature painting."
      },
      {
        name: "Mazar-i-Sharif",
        description: "Known for the stunning blue-tiled shrine of Hazrat Ali and as a center of Afghanistan's Nowruz (Persian New Year) celebrations."
      },
      {
        name: "Kandahar",
        description: "A historic city in the south that served as the capital of the Durrani Empire, known for its pomegranates and distinctive embroidery work."
      },
      {
        name: "Bamyan",
        description: "Famous for the empty niches of the giant Buddha statues and the surrounding Band-e-Amir National Park with its spectacular blue lakes."
      }
    ],
    famousFor: [
      "Band-e-Amir National Park - Afghanistan's first national park featuring a series of six deep blue lakes",
      "Bamiyan Valley - UNESCO World Heritage site where giant Buddha statues once stood",
      "Afghan carpets - Intricate handwoven rugs considered among the finest in the world",
      "The Minaret of Jam - A UNESCO World Heritage site and one of the few well-preserved monuments from the medieval Islamic period",
      "Wakhan Corridor - A narrow strip of territory in northeastern Afghanistan with breathtaking mountain scenery"
    ],
    topAttractions: [
      {
        name: "Band-e-Amir Lakes",
        description: "A series of six deep blue lakes separated by natural dams of travertine in the Hindu Kush mountains, forming Afghanistan's first national park.",
        imageUrl: "https://images.unsplash.com/photo-1566094210657-c435876d90bc?q=80&w=1000"
      },
      {
        name: "Bamiyan Valley",
        description: "A historic valley that once contained two monumental Buddha statues carved into the cliff face (destroyed in 2001). The surrounding caves feature ancient Buddhist paintings.",
        imageUrl: "https://images.unsplash.com/photo-1527367817777-67d467b9b36d?q=80&w=1000"
      },
      {
        name: "Minaret of Jam",
        description: "A 65-meter tall minaret built in the 12th century, intricately decorated with elaborate brickwork and blue tile inscriptions of Quranic verses.",
        imageUrl: "https://images.unsplash.com/photo-1597588582897-cf63484999b0?q=80&w=1000"
      },
      {
        name: "Gardens of Babur",
        description: "A historic park in Kabul that houses the tomb of Mughal emperor Babur, featuring terraced gardens, a caravanserai, and a marble mosque.",
        imageUrl: "https://images.unsplash.com/photo-1516649170053-0c0bbc65144a?q=80&w=1000"
      },
      {
        name: "Friday Mosque of Herat",
        description: "One of Afghanistan's oldest mosques, featuring stunning tilework, mosaics, and intricate architectural details spanning many centuries of additions and renovations.",
        imageUrl: "https://images.unsplash.com/photo-1535153147657-5f39ab985736?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Afghan cuisine reflects the country's crossroads position with influences from Persian, Central Asian, and South Asian cooking traditions. Meals typically center around rice dishes, featuring locally grown ingredients, fresh and dried fruits, nuts, and yogurt.",
      famousDishes: [
        "Kabuli Pulao - A fragrant rice dish with lamb, carrots, raisins and nuts",
        "Mantu - Steamed dumplings filled with onion-seasoned ground meat",
        "Ashak - Leek-filled dumplings topped with meat sauce and garlic-mint yogurt",
        "Chainaki - A slow-cooked lamb stew traditionally served in a teapot",
        "Bolani - Flatbread stuffed with vegetable fillings like potato or leek"
      ]
    },
    culturalCustoms: [
      "Hospitality (Melmastia) - Offering guests the best food and accommodation regardless of personal resources",
      "Respecting elders - Standing when older people enter the room and seeking their advice",
      "Tea culture - Serving and enjoying multiple cups of green tea throughout the day",
      "Gender separation - In traditional settings, men and women socialize separately",
      "Modest dress - Both men and women typically wear loose-fitting clothes that cover most of the body"
    ],
    travelTips: [
      "Respect local customs regarding modest dress, particularly for women",
      "Learn basic greetings in Dari or Pashto which are highly appreciated",
      "Be prepared for security checkpoints when traveling between regions",
      "Carry cash as credit cards are rarely accepted outside major hotels in Kabul",
      "Arrange travel with local guides who understand current security conditions",
      "Obtain necessary permits for visiting certain regions"
    ],
    safetyInfo: "Afghanistan currently faces significant security challenges. Many countries advise against all travel to Afghanistan due to conflict, terrorism and kidnapping risks. Always check your government's latest travel advisories and seek expert security advice before considering travel.",
    sustainableTourism: "Tourism infrastructure in Afghanistan is limited, but when conditions allow for visits, supporting community-based tourism initiatives helps direct economic benefits to local communities. Using local guides and staying in locally-owned guesthouses when possible contributes to sustainable development.",
    visaRequirements: "Most foreign nationals require a visa to enter Afghanistan. Applications typically require a letter of invitation, hotel reservations, and sometimes security clearance. The visa application process can be lengthy, so apply well in advance of intended travel.",
    budget: {
      budget: "Basic accommodations, local transport and meals: $20-40 USD per day",
      midRange: "Mid-range hotels and dining: $50-100 USD per day",
      luxury: "High-end accommodations and services: $150+ USD per day (limited availability)"
    },
    transportationOptions: [
      "Domestic flights between major cities (limited reliability)",
      "Private vehicles with drivers (recommended for most travel)",
      "Shared taxis between cities",
      "Local buses (limited comfort and safety)"
    ],
    neighboringCountries: [
      "Pakistan", "Iran", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Mountains", "History", "Ancient Sites", "Adventure", "Cultural Heritage",
    "Silk Road", "Traditional Crafts", "Carpets", "Buddhist Heritage", "Islamic Architecture"
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
                  <p className="text-sm text-orange-600">{countryData.safetyInfo}</p>
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

export default AfghanistanCountry;
