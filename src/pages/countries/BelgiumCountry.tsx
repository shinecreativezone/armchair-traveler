import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BelgiumCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Belgium",
    slug: "belgium",
    continent: "Europe",
    capital: "Brussels",
    languageOfficial: "Dutch, French, German",
    languagesSpoken: ["Dutch (Flemish)", "French", "German", "English"],
    currency: "Euro (€)",
    population: 11589623,
    area: 30528,
    timeZones: ["GMT+1"],
    callingCode: "+32",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1525894929916-e54840198a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    description: "Belgium is a small yet diverse Western European country known for its medieval towns, Renaissance architecture, and as the headquarters of the European Union and NATO. Despite its compact size, Belgium offers a rich cultural tapestry with distinct linguistic regions, world-renowned cuisine, and a complex history that has shaped modern Europe.",
    whyVisit: "Belgium offers travelers an enticing blend of historical depth and modern European culture in a compact, accessible package. The country's medieval cities like Bruges and Ghent seem frozen in time with their cobblestone streets and Gothic architecture, while Brussels balances historic grandeur with its role as the administrative capital of the EU. Food enthusiasts are drawn to Belgium for its culinary contributions - from world-famous chocolates and waffles to over 1,500 varieties of beer and the original french fries with mayonnaise. Art lovers can explore the legacy of Flemish masters like Rubens and Van Eyck in world-class museums, while history buffs can visit poignant WWI and WWII sites. Belgium's central location and excellent rail network make it perfect for both a dedicated visit or as part of a broader European itinerary, with its small size allowing visitors to experience diverse regions - from the Dutch-speaking Flanders to French-speaking Wallonia - all within easy reach.",
    bestTimeToVisit: {
      text: "The best time to visit Belgium is from May to September when temperatures are mild, ranging from 15-25°C (59-77°F), and outdoor cafés and festivals are in full swing.",
      months: ["May", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Warm but rarely hot from June to August with temperatures typically ranging from 18-25°C (64-77°F). Rainfall is distributed throughout the year, so summer showers are common.",
      winter: "Cold and damp from December to February with temperatures ranging from 0-7°C (32-45°F). Snowfall is possible but generally doesn't last long, especially in coastal areas.",
      spring: "Mild and increasingly beautiful as flowers bloom from March to May. Temperatures range from 8-18°C (46-64°F) with occasional rain showers.",
      fall: "Gradually cooling from September to November with beautiful foliage. Temperatures fall from around 18°C (64°F) in September to 7°C (45°F) in November with increasing rainfall."
    },
    majorCities: [
      {
        name: "Brussels",
        description: "The capital and largest city, serving as the administrative center of the European Union. Known for its Grand Place (a UNESCO World Heritage Site), the iconic Atomium structure, Manneken Pis statue, numerous museums, Art Nouveau architecture, and vibrant cultural scene."
      },
      {
        name: "Antwerp",
        description: "Belgium's second-largest city and Europe's second-largest port. Famous for its diamond district handling 80% of the world's rough diamonds, the historic city center with the Cathedral of Our Lady, Rubens House museum, vibrant fashion scene, and the striking Museum aan de Stroom (MAS)."
      },
      {
        name: "Bruges",
        description: "A perfectly preserved medieval city and UNESCO World Heritage site nicknamed 'Venice of the North' for its canal system. Highlights include the Markt (central square), Belfry Tower, Groeningemuseum with Flemish primitives, and picture-perfect streets that draw millions of visitors annually."
      },
      {
        name: "Ghent",
        description: "A historic university city with a vibrant cultural scene that balances tourism and authentic local life. Notable for St. Bavo's Cathedral housing the Van Eyck brothers' masterpiece 'The Adoration of the Mystic Lamb,' the medieval Gravensteen Castle, and scenic canal-side guildhalls."
      },
      {
        name: "Liège",
        description: "The principal city of Wallonia with both industrial heritage and cultural significance. Features the impressive Liège-Guillemins railway station designed by Santiago Calatrava, the 374-step Montagne de Bueren staircase, Sunday La Batte market (Europe's oldest and largest), and the revitalized quayside area."
      }
    ],
    famousFor: [
      "Chocolate - Home to world-renowned chocolatiers and over 2,000 chocolate shops",
      "Beer - Producing over 1,500 different varieties with unique brewing traditions",
      "Waffles - Both Brussels-style rectangular and Liège-style round varieties",
      "Fries (Frietjes/Frites) - Claimed as a Belgian, not French, invention",
      "Comics - Birthplace of The Smurfs, Tintin, and a strong comic art tradition"
    ],
    topAttractions: [
      {
        name: "Grand Place (Brussels)",
        description: "This UNESCO World Heritage central square is considered one of the most beautiful in Europe, surrounded by opulent guild houses, the Brussels City Museum, and the Gothic Town Hall. The square is particularly spectacular during the biennial Flower Carpet event and the winter light show that transforms the buildings with colorful projections.",
        imageUrl: "https://images.unsplash.com/photo-1605112793658-33acd1ad6ae9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Historic Centre of Bruges",
        description: "This entire medieval city center is a UNESCO World Heritage site, featuring a network of canals, cobblestone streets, and well-preserved Gothic buildings. Highlights include the Markt with its colorful guild houses, the Belfry offering panoramic views, the Burg square with the Basilica of the Holy Blood, and scenic canal boat tours to see the city from the water.",
        imageUrl: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Atomium (Brussels)",
        description: "Built for the 1958 Brussels World Expo, this iconic 102-meter tall structure represents an iron crystal magnified 165 billion times. Visitors can explore the nine interconnected spheres containing exhibition spaces, with the top sphere offering a panoramic restaurant and views across Brussels. The surrounding park includes Mini-Europe, a miniature park featuring models of European monuments.",
        imageUrl: "https://images.unsplash.com/photo-1569868385904-4dba664e997c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1511&q=80"
      },
      {
        name: "Cathedral of Saint Bavo (Ghent)",
        description: "This Gothic cathedral houses the Ghent Altarpiece (The Adoration of the Mystic Lamb), a masterpiece by the Van Eyck brothers considered one of the most important works in European art history. The cathedral itself features impressive architecture, including the Baroque high altar, a Romanesque crypt, and a collection of significant paintings and religious artifacts.",
        imageUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Battlefields of Flanders",
        description: "The Flanders region contains numerous WWI sites commemorating one of history's most devastating conflicts. Key locations include the In Flanders Fields Museum in Ypres, the Menin Gate Memorial where the Last Post is played nightly, Tyne Cot Cemetery (the largest Commonwealth war cemetery), and preserved trenches at sites like Hill 60 and Sanctuary Wood, offering profound insights into the Great War.",
        imageUrl: "https://images.unsplash.com/photo-1559149247-c57c650e0928?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      }
    ],
    localCuisine: {
      description: "Belgian cuisine combines Germanic heartiness with French refinement and is considered among Europe's finest. While internationally known for chocolate, waffles, and beer, traditional Belgian gastronomy extends much further with regional specialties across Flanders and Wallonia. Meals often begin with small servings of beer to complement the food, and dining is typically a leisurely social affair with multiple courses.",
      famousDishes: [
        "Moules-frites - Mussels steamed in white wine or beer, served with crispy fries and mayonnaise",
        "Carbonade Flamande - Flemish beef stew slow-cooked in beer with mustard and served with bread or fries",
        "Waterzooi - Creamy soup/stew from Ghent with chicken or fish, vegetables, and herbs",
        "Stoemp - Mashed potatoes mixed with vegetables like carrots, leeks, or spinach, often served with sausage or bacon",
        "Liège Meatballs (Boulets à la Liégeoise) - Large meatballs served with a sweet-sour sauce made from Sirop de Liège (apple and pear syrup)"
      ]
    },
    culturalCustoms: [
      "Greeting - Three kisses on alternating cheeks is common among friends in Wallonia, while Flemish regions typically use one or two kisses",
      "Language Sensitivity - Be aware of the linguistic divide; address people in the local language of the region (Dutch in Flanders, French in Wallonia) when possible",
      "Chocolate Appreciation - Artisanal chocolates are taken seriously; visiting a chocolatier involves a tasting ritual rather than casual shopping",
      "Beer Culture - Each Belgian beer has its own specific glass designed to enhance its particular characteristics and serving it incorrectly is considered improper",
      "Punctuality - Being on time is highly valued in Belgian culture, especially in Flanders; arriving 5-10 minutes early for social appointments is appreciated"
    ],
    travelTips: [
      "Public transportation is excellent, with a dense rail network connecting all major cities; consider a rail pass if planning multiple journeys",
      "While many Belgians speak excellent English, learning a few basic phrases in Dutch or French depending on the region is appreciated",
      "Shops typically close early (around 6 PM) and most are closed on Sundays except in tourist areas",
      "Tipping is not expected as service is included in bills, but rounding up or leaving small change is common for good service",
      "Cycling infrastructure is extensive, particularly in Flanders; renting a bike can be an excellent way to explore cities and countryside",
      "Weather can change quickly, so pack layers and always carry a lightweight rain jacket or umbrella"
    ],
    safetyInfo: "Belgium is generally very safe for travelers, with low crime rates in most areas. The main concerns in large cities and tourist spots are pickpocketing and occasional bag snatching, so standard precautions apply. Brussels has some neighborhoods that are best avoided after dark, particularly around the North Station (Gare du Nord) and parts of Molenbeek. Following the terrorist attacks in 2016, security has been strengthened at major transportation hubs and public gatherings. Be aware that railway strikes can occasionally disrupt travel plans. The country has excellent healthcare facilities, though travel insurance is still recommended. Traffic can be congested in cities, and pedestrians should be cautious as cyclists have right of way in many areas.",
    sustainableTourism: "Belgium has made significant progress in sustainable tourism initiatives, particularly in areas of public transportation and urban planning. Many cities have car-free zones, extensive cycling networks, and efficient public transit systems that visitors are encouraged to use. Brussels has implemented Green Key certification for eco-friendly accommodations, while Bruges has restricted tour buses in the historic center to reduce congestion. Belgium's small size makes it ideal for low-carbon tourism, as travelers can experience diverse regions without extensive transportation. Visitors can contribute by choosing locally-owned accommodations, eating at restaurants that source regional ingredients, participating in walking or cycling tours rather than motorized options, and visiting some of Belgium's numerous nature reserves and national parks that protect the country's biodiversity.",
    visaRequirements: "Belgium is part of the Schengen Area, so visitors from many countries including the United States, Canada, Australia, and Japan can enter for up to 90 days within a 180-day period without a visa. European Union citizens can travel with just a national ID card. Other nationalities generally require a Schengen visa, which must be obtained before travel through a Belgian embassy or consulate. Applications typically need to include proof of sufficient funds, travel insurance, accommodation details, and a return ticket. The UK is no longer part of the EU, so British citizens should check current requirements. As of 2023, the ETIAS (European Travel Information and Authorization System) is expected to be implemented, requiring pre-authorization for visa-exempt travelers.",
    budget: {
      budget: "€60-100 ($65-110 USD) per day for budget accommodations in hostels, eating at casual restaurants or frites stands, and using public transportation",
      midRange: "€100-200 ($110-220 USD) per day for mid-range hotels, dining at better restaurants, and visiting major attractions",
      luxury: "€200+ ($220+ USD) per day for luxury hotels, fine dining at Michelin-starred restaurants, and premium experiences"
    },
    transportationOptions: [
      "Trains - Extensive and efficient network connecting all major cities, with frequent service and reasonable prices",
      "Trams and Metros - Available in Brussels, Antwerp, Ghent, and Charleroi, providing convenient inner-city transportation",
      "Buses - Connect smaller towns and villages not served by rail, with comprehensive coverage",
      "Bicycles - Excellent cycling infrastructure with rental systems in most cities and long-distance cycling routes throughout the country",
      "Taxis and ride-sharing - Available in all cities but relatively expensive compared to public transportation"
    ],
    neighboringCountries: [
      "Netherlands (to the north)",
      "Germany (to the east)",
      "Luxembourg (to the southeast)",
      "France (to the south and southwest)",
      "United Kingdom (across the North Sea)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "European Cities", "Medieval Architecture", "Gastronomy", "Beer Tourism", "Art & Museums",
    "Chocolate", "UNESCO Sites", "Battlefields", "Cycling", "Cultural Heritage"
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

export default BelgiumCountry; 