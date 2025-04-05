import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BarbadosCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Barbados",
    slug: "barbados",
    continent: "North America",
    capital: "Bridgetown",
    languageOfficial: "English",
    languagesSpoken: ["English", "Bajan Creole"],
    currency: "Barbadian Dollar (BBD)",
    population: 287375,
    area: 430,
    timeZones: ["GMT-4"],
    callingCode: "+1-246",
    drivingSide: "left" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1635527677717-9feaa46588e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description: "Barbados is an eastern Caribbean island and an independent British Commonwealth nation. Known as the 'Little England' of the Caribbean, it blends British traditions with West African roots, creating a distinctive Bajan culture known for its hospitality and vibrant lifestyle.",
    whyVisit: "Barbados offers a perfect blend of Caribbean relaxation and British refinement, making it unique among its island neighbors. The island is renowned for its pristine beaches, with the western 'Platinum Coast' featuring calm turquoise waters and the eastern Atlantic coast offering dramatic landscapes and world-class surfing at Soup Bowl. Beyond beaches, visitors can explore well-preserved colonial architecture in Bridgetown (a UNESCO World Heritage site), tour historic sugar plantations, and visit the iconic St. Nicholas Abbey. The island's mature tourism infrastructure ensures comfort without sacrificing authenticity, while the friendly Bajan people, delicious rum traditions, and vibrant festivals like Crop Over provide cultural depth. With year-round sunshine, a strong culinary scene, and excellent public transportation, Barbados is both accessible and rewarding for travelers.",
    bestTimeToVisit: {
      text: "The best time to visit Barbados is during the dry season from December to April when temperatures average 26-29°C (79-84°F) with minimal rainfall, making it ideal for beach activities.",
      months: ["December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Warm and humid from May to November with temperatures averaging 26-30°C (79-86°F). This period coincides with the Caribbean hurricane season, though Barbados is rarely directly hit.",
      winter: "Warm and dry from December to April with temperatures averaging 26-29°C (79-84°F), lower humidity, and cool evening breezes, making it the peak tourist season.",
      spring: "April to May offers warm temperatures around 27-29°C (81-84°F) with moderate humidity and rainfall gradually increasing as the wet season approaches.",
      fall: "September to November is the height of hurricane season with increased rainfall and humidity, though temperatures remain warm at 26-30°C (79-86°F)."
    },
    majorCities: [
      {
        name: "Bridgetown",
        description: "The capital and largest city, featuring UNESCO-listed colonial architecture, duty-free shopping, and historic sites. Key attractions include the Parliament Buildings, National Heroes Square, Cheapside Market, and the Garrison Savannah historic area."
      },
      {
        name: "Holetown",
        description: "The site of the first British settlement in 1627, now a popular tourist area on the west coast. Known for luxury hotels, upscale shopping at Limegrove Lifestyle Centre, fine dining restaurants, and the annual Holetown Festival commemorating the first landing."
      },
      {
        name: "Speightstown",
        description: "The second-largest town, offering a more authentic Bajan experience with less tourist development. Features include the Arlington House Museum, local fish markets, colorful colonial architecture, and nearby beaches like Heywoods."
      },
      {
        name: "Oistins",
        description: "A major fishing community famous for its Friday night fish fry, where visitors can enjoy fresh seafood alongside locals. The town also features a busy fish market and is near popular Miami and Dover beaches."
      },
      {
        name: "Bathsheba",
        description: "A scenic village on the rugged east coast known for its dramatic Atlantic coastline and 'Soup Bowl' surf break. Popular with photographers and surfers, it offers a stark contrast to the calm west coast beaches."
      }
    ],
    famousFor: [
      "Pristine white sand beaches and crystal-clear turquoise waters",
      "Mount Gay Rum - the world's oldest commercial rum distillery",
      "Crop Over Festival - a vibrant celebration of the end of the sugar cane season",
      "World-class surfing at Soup Bowl in Bathsheba",
      "Being the birthplace of global superstar Rihanna"
    ],
    topAttractions: [
      {
        name: "Harrison's Cave",
        description: "This crystallized limestone cavern features flowing streams, deep pools, towering columns, and dramatic formations. Visitors tour the cave system on electric trams, stopping at highlights like the Great Hall chamber (15 meters high) and witnessing the cascading waters of the White Flow waterfall.",
        imageUrl: "https://images.unsplash.com/photo-1594398096321-a369420060d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Hunte's Gardens",
        description: "Created by horticulturist Anthony Hunte in a collapsed cave gully, these lush, multi-level gardens showcase an incredible variety of tropical plants in a surprisingly compact space. Classical music plays throughout the gardens, and visitors can enjoy refreshments on the veranda of Mr. Hunte's house built into the cliff face.",
        imageUrl: "https://images.unsplash.com/photo-1597075359616-989849ffd433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
      },
      {
        name: "St. Nicholas Abbey",
        description: "One of only three genuine Jacobean mansions in the Western Hemisphere, built in 1658. This historic plantation house features Dutch gables and offers rum production tours, tastings, and a chance to see a steam mill in operation during crop season. The property includes beautiful gardens and a Cherry Tree Hill viewpoint.",
        imageUrl: "https://images.unsplash.com/photo-1605547079314-d3a76e7d8c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Carlisle Bay",
        description: "A crescent-shaped bay near Bridgetown with calm, crystal-clear waters ideal for swimming and water sports. The bay is home to several shipwrecks that create an artificial reef system, making it a popular snorkeling and scuba diving location to observe marine life including sea turtles.",
        imageUrl: "https://images.unsplash.com/photo-1590523278191-025be417be10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
      },
      {
        name: "Animal Flower Cave",
        description: "Located at the northernmost point of Barbados, this sea cave gets its name from the sea anemones found in its pools. Visitors can swim in the natural rock pools with views of the ocean through the cave openings. The cliff-top restaurant offers panoramic views of the Caribbean Sea and Atlantic Ocean meeting.",
        imageUrl: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
      }
    ],
    localCuisine: {
      description: "Bajan cuisine blends African, Indian, British, and Creole influences, featuring fresh seafood, tropical fruits, and distinctive spices. The national dish is Cou-Cou and Flying Fish, though recent conservation efforts have made flying fish less common. Most meals are served with rice, macaroni pie, or breadfruit, and hot sauce is a common condiment at every table.",
      famousDishes: [
        "Cou-Cou and Flying Fish - Cornmeal and okra mixture served with stewed flying fish in a tomato-based sauce",
        "Pudding and Souse - Pickled pork with sweet potato pudding, a traditional Saturday lunch",
        "Fish Cakes - Deep-fried balls of salted cod, herbs, and spices, often served with 'bakes' (fried dough)",
        "Macaroni Pie - A Bajan version of mac and cheese, firmer and more savory than American versions",
        "Cutters - Salt bread sandwiches filled with Bajan ham, cheese, or fish, best enjoyed with a Banks beer or rum punch"
      ]
    },
    culturalCustoms: [
      "Greetings - Bajans are friendly but formal; a handshake and direct eye contact show respect",
      "Crop Over Festival - The major cultural event running from May to August, culminating in the Grand Kadooment parade",
      "Cricket - The national passion, with Kensington Oval hosting international matches to enthusiastic local support",
      "Rum Shop Culture - Local rum shops serve as community gathering places for liming (socializing), dominoes, and discussing politics",
      "Religious Observance - Sundays are still widely observed as a day of rest and church attendance in this predominantly Christian nation"
    ],
    travelTips: [
      "The Barbadian dollar (BBD) is fixed at a 2:1 exchange rate with the US dollar, and US currency is widely accepted",
      "Tipping is expected at 10-15% in restaurants unless a service charge is already included",
      "Public transportation via the blue government buses or yellow minibuses is inexpensive and covers most of the island",
      "Barbados has one of the highest standards of living in the Caribbean, making it relatively safe but also more expensive",
      "Beach attire is for beaches only; cover up when leaving the beach and dress modestly when visiting churches",
      "The UV index is extremely high; use strong sunscreen even on cloudy days"
    ],
    safetyInfo: "Barbados is considered one of the safer Caribbean destinations with low crime rates, though petty theft can occur in tourist areas. Visitors should take standard precautions like securing valuables and avoiding isolated areas after dark, particularly on beaches. The island has excellent healthcare facilities by regional standards, including the Queen Elizabeth Hospital in Bridgetown, though travel insurance is still recommended. Natural hazards include strong rip currents on some beaches (especially the east coast), and the hurricane season from June to November, though Barbados's easterly position means it is less frequently affected than other Caribbean islands.",
    sustainableTourism: "Barbados faces environmental challenges including coral reef degradation, coastal erosion, and waste management. The government has implemented a ban on single-use plastics and established marine protected areas to preserve the island's fragile ecosystems. The Barbados Sea Turtle Project monitors endangered hawksbill turtles that nest on the island's beaches, offering guided turtle watches during nesting season. Visitors can contribute by choosing eco-certified accommodations, conserving water (a precious resource on the island), avoiding reef-damaging sunscreens, and participating in beach clean-ups organized by the Barbados Blue Green Initiative.",
    visaRequirements: "Citizens of the United States, Canada, United Kingdom, and European Union do not need visas for stays up to 90 days. A valid passport, return ticket, and proof of accommodation are required. Some nationalities do require visas, which must be obtained before travel through a Barbadian embassy or high commission. All visitors receive an immigration stamp upon arrival indicating the length of stay approved, which can be extended through the Barbados Immigration Department if necessary.",
    budget: {
      budget: "BBD 200-300 ($100-150 USD) per day for budget accommodations, local transportation, and eating at casual restaurants or food stalls",
      midRange: "BBD 300-600 ($150-300 USD) per day for mid-range hotels, rental car, and dining at better restaurants",
      luxury: "BBD 600+ ($300+ USD) per day for luxury resorts, fine dining, and premium activities like private boat charters"
    },
    transportationOptions: [
      "Taxis - Widely available but unmetered; agree on the fare before departure or ask for the driver to use the rate sheet",
      "Rental cars - Available to visitors with valid licenses who purchase a Barbados permit (BBD $10) from the rental agency",
      "Public buses - Government buses (blue) and privately operated minibuses (yellow with blue stripe) or ZR vans (white with maroon stripe) all charge BBD $3.50 per trip",
      "Water taxis - Operating along the west coast, connecting beaches and hotels with popular destinations",
      "Island tours - Many companies offer guided island tours in air-conditioned vans or open-air safari-style vehicles"
    ],
    neighboringCountries: [
      "Saint Lucia (to the northwest)",
      "Saint Vincent and the Grenadines (to the west)",
      "Trinidad and Tobago (to the southwest)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beach Destination", "Luxury Travel", "Colonial History", "Rum Tourism", "Water Sports",
    "Surfing", "Festivals", "Caribbean Culture", "Culinary Tourism", "Island Paradise"
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
                        <h4 className="font-semibold text-lg mb-1">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cities" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {countryData.majorCities.map((city) => (
                    <Card key={city.name}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-1">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cuisine" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                <p className="mb-4">{countryData.localCuisine.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Famous Dishes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {countryData.localCuisine.famousDishes.map((dish) => (
                      <li key={dish} className="text-muted-foreground">{dish}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="customs" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Cultural Customs</h3>
                <ul className="list-disc pl-5 space-y-3">
                  {countryData.culturalCustoms.map((custom) => (
                    <li key={custom} className="text-muted-foreground">{custom}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3">
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital</span>
                    <span className="font-medium">{countryData.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Continent</span>
                    <span className="font-medium">{countryData.continent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population</span>
                    <span className="font-medium">{countryData.population.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area</span>
                    <span className="font-medium">{countryData.area.toLocaleString()} km²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Currency</span>
                    <span className="font-medium">{countryData.currency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="font-medium">{countryData.languagesSpoken.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zones</span>
                    <span className="font-medium">{countryData.timeZones.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Driving Side</span>
                    <span className="font-medium capitalize">{countryData.drivingSide}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Best Time to Visit</h3>
                <p className="mb-2 text-sm text-muted-foreground">{countryData.bestTimeToVisit.text}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {countryData.bestTimeToVisit.months.map((month) => (
                    <Badge key={month} variant="secondary">{month}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Weather Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Summer</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.summer}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Winter</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.winter}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Spring</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.spring}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Fall</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.fall}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Travel Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {countryData.travelTips.map((tip) => (
                    <li key={tip} className="text-sm text-muted-foreground">{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Budget Guidance</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Budget</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Mid-Range</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.midRange}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Luxury</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.luxury}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Safety Information</h3>
                <p className="text-sm text-muted-foreground">{countryData.safetyInfo}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BarbadosCountry; 