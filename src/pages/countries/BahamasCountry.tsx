import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BahamasCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "The Bahamas",
    slug: "bahamas",
    continent: "North America",
    capital: "Nassau",
    languageOfficial: "English",
    languagesSpoken: ["English", "Bahamian Creole"],
    currency: "Bahamian Dollar (BSD)",
    population: 393248,
    area: 13878,
    timeZones: ["GMT-5"],
    callingCode: "+1-242",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "The Bahamas is an archipelago of over 700 islands and 2,000 cays in the Atlantic Ocean, renowned for its crystal-clear waters, pristine beaches, and vibrant coral reefs. As a former British colony, it combines Caribbean and British influences in its culture and traditions.",
    whyVisit: "The Bahamas offers a paradise-like experience with some of the clearest waters in the world and extraordinary marine life. The archipelago caters to a wide range of interests, from luxury resorts on Nassau and Paradise Island to secluded getaways on the Out Islands. Visitors can swim with pigs at Big Major Cay, explore the world's deepest blue hole at Dean's Blue Hole, or dive among colorful coral reefs teeming with sea life. The islands are also rich in history, from pirate legends to colonial architecture. With each island offering its own unique character and attractions, the Bahamas provides an opportunity to experience multiple 'flavors' of Caribbean bliss in one country.",
    bestTimeToVisit: {
      text: "The best time to visit The Bahamas is from December to April when temperatures are warm but not too hot, ranging from 21-27°C (70-80°F) with minimal rainfall.",
      months: ["December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Hot and humid with temperatures ranging from 27-32°C (80-90°F) from May to October. This is also hurricane season, with the highest risk being from August to October.",
      winter: "Warm and pleasant with temperatures from 21-27°C (70-80°F) from December to April, making it the peak tourist season with perfect beach weather.",
      spring: "Warm with temperatures from 23-29°C (73-84°F) in April and May. This shoulder season offers good weather and fewer crowds before the rainy season begins.",
      fall: "Warm but with a high risk of hurricanes from August to October. Temperatures range from 25-30°C (77-86°F), and this is considered the low season for tourism."
    },
    majorCities: [
      {
        name: "Nassau",
        description: "The capital city located on New Providence Island, offering a mix of modern resorts and colonial charm. Key attractions include the colorful Bay Street, Pirates of Nassau Museum, and the historic Queen's Staircase carved from limestone."
      },
      {
        name: "Freeport",
        description: "The second-largest city located on Grand Bahama Island. Known for its beautiful beaches, shopping districts, and the Lucayan National Park with one of the world's longest underwater cave systems."
      },
      {
        name: "Marsh Harbour",
        description: "The largest town on Abaco Island and a major boating center. Serves as a gateway to the beautiful cays of Abaco, including the charming Hope Town with its candy-striped lighthouse."
      },
      {
        name: "George Town",
        description: "The capital of Exuma, known for its proximity to the famous swimming pigs of Big Major Cay and the stunning blue waters of the Exuma Cays."
      },
      {
        name: "Dunmore Town",
        description: "A historic settlement on Harbour Island, famous for its pink sand beaches and New England-style architecture with colorful cottages lining the streets."
      }
    ],
    famousFor: [
      "Pink sand beaches on Harbour Island",
      "Swimming pigs at Big Major Cay in the Exumas",
      "Lucayan National Park with one of the world's largest underwater cave systems",
      "Atlantis Paradise Island resort with aquariums and water attractions",
      "Junkanoo carnival celebrations with colorful costumes and music"
    ],
    topAttractions: [
      {
        name: "Exuma Cays",
        description: "A chain of 365 islands and cays offering some of the most beautiful waters in the world. Famous for the swimming pigs at Big Major Cay, nurse sharks at Compass Cay, and the natural phenomenon of the Thunderball Grotto featured in James Bond films.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Pink Sands Beach",
        description: "Located on Harbour Island, this three-mile stretch of pink-hued sand derives its color from crushed red shells of foraminifera. The calm, turquoise waters make it perfect for swimming, and the beach is lined with palm trees providing natural shade.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Atlantis Paradise Island",
        description: "A massive resort complex featuring water attractions, marine habitats with over 50,000 sea creatures, casino gaming, luxury shopping, and the iconic pink Royal Towers. The Aquaventure water park includes thrilling slides and a lazy river.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Dean's Blue Hole",
        description: "Located on Long Island, this is the world's second-deepest known blue hole, plunging to a depth of 202 meters (663 feet). The clear waters and dramatic underwater formations make it a premier destination for free divers and snorkelers.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Lucayan National Park",
        description: "On Grand Bahama Island, this park protects one of the world's longest underwater cave systems. Visitors can explore Gold Rock Beach, mangrove swamps via boardwalks, and limestone caves filled with stalactites and stalagmites.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Bahamian cuisine reflects the islands' rich cultural heritage, drawing from African, British, and Caribbean influences. Seafood naturally dominates the menu, with conch (pronounced 'konk') being the national food, prepared in various ways from raw salads to deep-fried fritters.",
      famousDishes: [
        "Conch Fritters - Deep-fried batter containing chopped conch meat and spices, served with dipping sauce",
        "Cracked Conch - Tenderized conch meat, breaded and deep-fried until golden brown",
        "Bahamian Rock Lobster - Local spiny lobster often served grilled with butter and lime",
        "Johnnycakes - A slightly sweet bread similar to cornbread, traditionally served as a side dish",
        "Guava Duff - A traditional dessert consisting of guava-filled dough that's rolled, boiled and served with a sweet rum sauce"
      ]
    },
    culturalCustoms: [
      "Junkanoo - A vibrant street parade with music, dance, and colorful costumes held on Boxing Day and New Year's Day",
      "Rake and Scrape Music - Traditional Bahamian folk music played with a saw, goatskin drum, and accordion",
      "Bahamian Storytelling - Oral tradition that keeps alive folk tales, many featuring the character of B'Booky, the Bahamian version of Anansi the spider",
      "Bush Medicine - Traditional herbal remedies using local plants that continue to be used alongside modern medicine",
      "Straw Work - Handicrafts made from dried palm fronds, creating baskets, hats, bags, and dolls in a tradition dating back generations"
    ],
    travelTips: [
      "U.S. dollars are accepted everywhere at a 1:1 exchange rate with the Bahamian dollar",
      "Island hopping via ferry or small aircraft is the best way to experience multiple islands",
      "Many businesses add a 15% service charge automatically, so check before adding additional tip",
      "Bring reef-safe sunscreen to protect the coral reefs while snorkeling or diving",
      "The local time is observed strictly - known as 'Bahamas Time' or 'Island Time' - so expect a relaxed pace",
      "A passport is required for entry, but U.S. citizens can also use a passport card for sea travel"
    ],
    safetyInfo: "The Bahamas is generally safe for tourists, especially in resort areas, though standard precautions should be taken in Nassau and Freeport where petty crime can occur. Hurricane season (June to November) can disrupt travel plans, so purchasing travel insurance is advisable. Water safety is important - be aware of rip currents when swimming and always heed local warnings. The country has good medical facilities on the main islands, but options are limited on smaller islands, and medical evacuation insurance is recommended for visits to remote areas.",
    sustainableTourism: "The Bahamas is making efforts to protect its fragile marine ecosystems through initiatives like the Bahamas Protected Areas Fund and coral reef restoration projects. Visitors can contribute by choosing eco-certified tour operators, avoiding purchasing items made from endangered species (like conch shells or coral), using reef-safe sunscreen, and participating in beach clean-ups. Some resorts have implemented sustainability programs focusing on energy conservation, waste reduction, and local sourcing, which travelers can support through their accommodation choices.",
    visaRequirements: "Citizens of the United States, Canada, the United Kingdom, and most European Union countries do not need a visa for stays up to 90 days. A valid passport, proof of sufficient funds, and a return or onward ticket are required. For other nationalities, visa requirements vary, and it's advisable to check with the nearest Bahamian embassy or consulate before travel. Some visitors may need to apply for a visa in advance through the Bahamas Department of Immigration.",
    budget: {
      budget: "BSD 100-200 ($100-200 USD) per day for budget accommodations on less touristy islands, eating at local restaurants, and using public transportation",
      midRange: "BSD 200-400 ($200-400 USD) per day for mid-range hotels, restaurant dining, and some guided activities",
      luxury: "BSD 400+ ($400+ USD) per day for luxury resorts, fine dining, and premium experiences like private island tours"
    },
    transportationOptions: [
      "Taxis - Available on major islands but can be expensive; agree on fare before departure",
      "Rental cars - Available on larger islands; remember they drive on the left side of the road",
      "Water taxis and ferries - Common for island hopping and getting to offshore cays",
      "Jitneys (local buses) - Inexpensive option on New Providence and Grand Bahama",
      "Domestic flights - Bahamas Air and smaller airlines offer connections between islands"
    ],
    neighboringCountries: [
      "United States (to the north and west)",
      "Cuba (to the west)",
      "Turks and Caicos Islands (to the southeast)",
      "Dominican Republic (to the south)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beach Destination", "Island Hopping", "Water Sports", "Luxury Resorts", "Family Friendly",
    "Coral Reefs", "Marine Wildlife", "Fishing", "Boating", "Snorkeling & Diving"
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

export default BahamasCountry; 