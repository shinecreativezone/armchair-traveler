
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AndorraCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Andorra",
    slug: "andorra",
    continent: "Europe",
    capital: "Andorra la Vella",
    languageOfficial: "Catalan",
    languagesSpoken: ["Catalan", "Spanish", "French", "Portuguese"],
    currency: "Euro (EUR)",
    population: 77543,
    area: 468,
    timeZones: ["GMT+1 (CET)", "GMT+2 (CEST) in summer"],
    callingCode: "+376",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2015/11/06/15/13/flag-1028137_1280.jpg",
    description: "Andorra is a tiny, independent principality nestled between France and Spain in the Pyrenees mountains. Despite being one of Europe's smallest states, Andorra offers dramatic mountain scenery, excellent skiing, duty-free shopping, and a unique cultural blend of Catalan, French, and Spanish influences.",
    whyVisit: "Andorra attracts visitors with its world-class ski resorts, stunning mountain landscapes, duty-free shopping, and Romanesque architecture. The country offers excellent hiking and mountain biking opportunities during summer, while winter transforms it into a snow sports paradise. With its relaxed atmosphere, welcoming locals, and combination of natural beauty and cultural heritage, Andorra makes an appealing destination year-round.",
    bestTimeToVisit: {
      text: "December to April is perfect for winter sports enthusiasts, while June to September offers ideal conditions for hiking, mountain biking, and outdoor activities in pleasant temperatures.",
      months: ["December", "January", "February", "March", "April", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Warm and pleasant with average temperatures of 18-27°C (64-81°F), cooler in higher elevations.",
      winter: "Cold and snowy with temperatures ranging from -2 to 5°C (28-41°F) in the valleys and colder in the mountains.",
      spring: "Mild with temperatures between 10-20°C (50-68°F), though spring can arrive late in the mountains with possible snow through May.",
      fall: "Cool and crisp, with temperatures between 8-18°C (46-64°F) and beautiful fall foliage in the valleys and mountains."
    },
    majorCities: [
      {
        name: "Andorra la Vella",
        description: "The capital and largest city, known for its duty-free shopping, the historic Barri Antic (Old Quarter), and as one of the highest capitals in Europe at 1,023 meters (3,356 feet) above sea level."
      },
      {
        name: "Escaldes-Engordany",
        description: "Adjacent to the capital, famous for its thermal waters, spa facilities, and modern shopping centers including the large Caldea thermal spa complex."
      },
      {
        name: "La Massana",
        description: "A picturesque town serving as a gateway to the Vallnord ski area and offering excellent mountain biking trails in summer, with the Comapedrosa Natural Park nearby."
      },
      {
        name: "Encamp",
        description: "Located in a valley with access to the Grandvalira ski area via the Funicamp gondola, featuring the National Automobile Museum and traditional Pyrenean architecture."
      },
      {
        name: "Canillo",
        description: "A charming mountain village with the iconic Sanctuary of Our Lady of Meritxell (Andorra's patron saint), ice palace, and access to extensive skiing."
      }
    ],
    famousFor: [
      "Skiing and Winter Sports - Home to Grandvalira and Vallnord, two major ski areas in the Pyrenees",
      "Tax-free Shopping - A shopping haven with significantly lower taxes than neighboring countries",
      "Romanesque Churches - Numerous well-preserved medieval churches and chapels",
      "Mountain Landscape - Dramatic Pyrenean scenery with peaks, valleys, and alpine meadows",
      "Wellness Tourism - Thermal spas utilizing natural hot springs, particularly in Escaldes-Engordany"
    ],
    topAttractions: [
      {
        name: "Caldea Thermal Spa",
        description: "Europe's largest thermal spa complex, featuring an iconic glass pyramid design and offering a wide range of thermal waters and treatments in a spectacular mountain setting.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Vallnord Ski Resort",
        description: "A major ski area comprising several sectors including Pal, Arinsal, and Arcalis, offering varied terrain for all skiing abilities and excellent snowboarding facilities.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Casa de la Vall",
        description: "A 16th-century stone mansion that served as Andorra's parliamentary house from 1702 to 2011, offering guided tours of its assembly halls, courts, and historic rooms.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Madriu-Perafita-Claror Valley",
        description: "A UNESCO World Heritage site covering 9% of Andorra's territory, featuring pristine glacial landscapes, traditional stone farmhouses, and excellent hiking trails.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sanctuary of Our Lady of Meritxell",
        description: "A modern basilica rebuilt after a fire destroyed the original Romanesque chapel, dedicated to Andorra's patron saint and combining traditional and innovative architectural elements.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Andorran cuisine reflects its mountain location and combines Catalan, French, and Spanish influences. Hearty dishes featuring meat, particularly pork, lamb, and game, are common alongside mountain trout, mushrooms, and vegetables. Meals are often slow and social affairs with multiple courses.",
      famousDishes: [
        "Escudella - A hearty meat and vegetable stew often containing chicken, sausage, meatballs, and pasta",
        "Trinxat - A dish of fried cabbage, potatoes, and bacon similar to bubble and squeak",
        "Truites de Carreroles - Wild mushroom omelette typically made with local forest mushrooms",
        "Cunillo - Rabbit cooked with tomatoes, white wine, and herbs",
        "Crema Andorrana - A dessert similar to crème brûlée with a caramelized sugar top"
      ]
    },
    culturalCustoms: [
      "Greeting customs - Two or three kisses on the cheeks when meeting friends (following the Catalan tradition)",
      "Festivals - Many traditional Catalan and religious festivals throughout the year, particularly village festivals (festes majors)",
      "Meal times - Late lunches (1-3pm) and dinners (8-10pm) following Spanish customs",
      "Shopping hours - Many shops close for a long lunch break from approximately 1-4pm",
      "Winter sports - A central part of Andorran culture and lifestyle, with locals often skiing regularly during the season"
    ],
    travelTips: [
      "Public transportation is limited, so consider renting a car or using the bus system that connects major towns",
      "The official language is Catalan, but Spanish, French, and often English are widely spoken in tourist areas",
      "Currency is the Euro, and credit cards are widely accepted, though it's good to carry some cash for small purchases",
      "Cross-border trips require passports, even though there are typically no formal border controls",
      "Winter driving can be challenging; snow tires or chains are often required during winter months",
      "Altitude can affect visitors; stay hydrated and take it easy for the first day if arriving from sea level"
    ],
    safetyInfo: "Andorra is considered very safe for travelers with extremely low crime rates. The most common concerns are related to mountain safety, including skiing accidents in winter and hiking mishaps in summer. Emergency services are excellent, but mountain rescue can be expensive, so appropriate travel insurance is recommended.",
    sustainableTourism: "Andorra is increasingly focusing on sustainable tourism practices to protect its natural mountain environment. The country has established protected areas like the Madriu-Perafita-Claror Valley UNESCO site. Visitors can contribute by staying on marked trails, properly disposing of waste, using public transportation when possible, and respecting the natural and cultural heritage.",
    visaRequirements: "Andorra is not part of the European Union or Schengen Area, but as it can only be accessed through France or Spain, visitors effectively need to meet Schengen entry requirements. Most travelers from North America, Australia, and many other countries can enter without a visa for tourism stays of up to 90 days. No passport stamps are issued for Andorra itself.",
    budget: {
      budget: "€60-100 per day for basic accommodation, simple meals, and public transportation",
      midRange: "€100-200 per day for good hotels, restaurant dining, and some activities",
      luxury: "€200+ per day for high-end hotels, fine dining, and premium activities/shopping"
    },
    transportationOptions: [
      "Bus services between major towns and to Barcelona (Spain) and Toulouse (France)",
      "Rental cars (available in major towns and from neighboring airports)",
      "Taxis (relatively expensive but convenient)",
      "Cable cars and gondolas (connecting valley towns to mountain areas)",
      "Walking (many areas in towns are pedestrianized)"
    ],
    neighboringCountries: [
      "France", "Spain"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Mountains", "Skiing", "Winter Sports", "Shopping", "Hiking",
    "Small Country", "Pyrenees", "Adventure", "Architecture", "Thermal Spas"
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
              <div className="mt-6">
                <div data-gyg-widget="auto" data-gyg-partner-id="DHU8TI0"></div>
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

export default AndorraCountry;
