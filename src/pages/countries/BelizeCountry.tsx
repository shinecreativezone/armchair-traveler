import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BelizeCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Belize",
    slug: "belize",
    continent: "North America",
    capital: "Belmopan",
    languageOfficial: "English",
    languagesSpoken: ["English", "Spanish", "Kriol", "Maya", "Garifuna"],
    currency: "Belize Dollar (BZD)",
    population: 397628,
    area: 22966,
    timeZones: ["GMT-6"],
    callingCode: "+501",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2017/01/31/14/43/flag-2024732_1280.png",
    description: "Belize is a small nation on the eastern coast of Central America, bordered by Mexico, Guatemala, and the Caribbean Sea. Known for its remarkable biodiversity, ancient Mayan ruins, and the world's second-largest barrier reef, this tropical paradise offers adventure and natural beauty at every turn.",
    whyVisit: "Belize offers an exceptional blend of natural wonders and cultural experiences in a compact, English-speaking country. Its barrier reef system, a UNESCO World Heritage site, provides world-class diving and snorkeling opportunities with vibrant coral formations, the famous Great Blue Hole, and abundant marine life including whale sharks. The lush interior rainforests house ancient Mayan archaeological sites like Caracol and Xunantunich, where visitors can climb pyramids with far fewer crowds than at similar sites in neighboring countries. Adventure seekers can explore extensive cave systems, zip-line through jungle canopies, or tube through subterranean rivers. The cultural diversity—with influences from Maya, Garifuna, Creole, and Mennonite communities—creates a rich tapestry of traditions, music, and cuisine. With English as the official language, a stable political climate, and an emphasis on eco-tourism, Belize remains one of Central America's most accessible yet authentic destinations.",
    bestTimeToVisit: {
      text: "The best time to visit Belize is during the dry season from late November to mid-April, when temperatures average 24-29°C (75-84°F) with low humidity and minimal rainfall.",
      months: ["December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Hot and humid from May to October with temperatures ranging from 27-32°C (81-90°F). This period coincides with the rainy season, with the most precipitation falling in June, August, and September.",
      winter: "Warm and dry from November to April with temperatures averaging 24-29°C (75-84°F). December to February can experience occasional 'northers' (cold fronts) that bring cooler temperatures and rain for a few days.",
      spring: "April to May represents a transition period with rising temperatures and humidity. Late spring begins to see increasing rainfall, especially in southern Belize.",
      fall: "September to November marks the peak of hurricane season, with high humidity and significant rainfall. October typically sees weather improvements as the country transitions to the dry season."
    },
    majorCities: [
      {
        name: "Belize City",
        description: "The largest urban area and commercial hub, though no longer the capital. This historic port city serves as the main gateway for tourists, featuring colonial architecture, the Museum of Belize, and the historic St. John's Cathedral. It's also the departure point for boats to the cayes."
      },
      {
        name: "Belmopan",
        description: "The capital city, built inland after Hurricane Hattie devastated Belize City in 1961. A small, planned city housing government buildings and embassies, with the distinctive National Assembly building modeled after a Mayan temple. Nearby attractions include the Blue Hole National Park."
      },
      {
        name: "San Pedro",
        description: "The main town on Ambergris Caye, Belize's largest island. A vibrant tourist destination with sandy streets, colorful buildings, beachfront restaurants and bars, and easy access to the Belize Barrier Reef for diving and snorkeling adventures."
      },
      {
        name: "San Ignacio",
        description: "The cultural heart of the Cayo District in western Belize, serving as a base for jungle adventures and Maya ruins exploration. The town features a vibrant market, the Cahal Pech archaeological site, and is close to popular attractions like ATM Cave and Xunantunich."
      },
      {
        name: "Placencia",
        description: "A peninsula in southern Belize known for its 16 miles of beautiful beaches. This laid-back village offers a pedestrian-only Sidewalk lined with shops and restaurants, access to marine activities, and proximity to jaguar reserves and rainforest tours."
      }
    ],
    famousFor: [
      "Great Blue Hole - a massive underwater sinkhole and world-class diving site",
      "Belize Barrier Reef - the second-largest coral reef system in the world",
      "Ancient Maya ruins including Caracol, Xunantunich, and Lamanai",
      "Diverse wildlife and extensive protected natural areas",
      "Unique cultural mix of Creole, Maya, Garifuna, and other influences"
    ],
    topAttractions: [
      {
        name: "Great Blue Hole",
        description: "This perfectly circular marine sinkhole measures 300 meters (984 feet) across and 124 meters (407 feet) deep. Made famous by Jacques Cousteau, who declared it one of the top ten scuba diving sites in the world, it features limestone formations, stalactites, and diverse marine life. The sapphire blue color contrasting with the surrounding turquoise waters creates a mesmerizing sight from above.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Xunantunich",
        description: "This impressive Maya archaeological site features 'El Castillo,' a pyramid standing 130 feet tall with intricate frieze decorations. Visitors can climb to the top for panoramic views of the Mopan River Valley and into neighboring Guatemala. The site, meaning 'Stone Woman' in Maya, is accessed by a hand-cranked ferry crossing the Mopan River.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Actun Tunichil Muknal (ATM) Cave",
        description: "This sacred Maya cave contains ceremonial chambers with well-preserved pottery, artifacts, and skeletal remains, including the famous 'Crystal Maiden.' The adventure begins with jungle hiking and river crossings, followed by swimming into the cave entrance and climbing through dramatic chambers with stalactites and stalagmites.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Caye Caulker",
        description: "This small limestone coral island embodies the 'Go Slow' philosophy with its car-free sandy streets, colorful buildings, and relaxed atmosphere. The Split, a narrow channel dividing the island, serves as a popular swimming spot. Visitors enjoy snorkeling at the nearby Hol Chan Marine Reserve and Shark Ray Alley, kayaking, or simply hammock lounging.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Cockscomb Basin Wildlife Sanctuary",
        description: "This world's first jaguar preserve spans 150 square miles of tropical forest, protecting an impressive diversity of wildlife. While jaguars are rarely spotted, visitors explore waterfall-dotted hiking trails, swim in natural pools, and potentially see other cats, tapirs, monkeys, and over 300 bird species. Victoria Peak, Belize's second-highest mountain, is accessible through a challenging multi-day trek.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Belizean cuisine reflects the country's cultural diversity, blending influences from Maya, Creole, Garifuna, Mestizo, East Indian, and Chinese traditions. Seafood features prominently on the coast, while rice and beans—often cooked in coconut milk—form the foundation of many meals. Street food is popular, with humble establishments often serving the most authentic and flavorful dishes.",
      famousDishes: [
        "Rice and Beans - A staple dish cooked with coconut milk, often served with stewed chicken, fish, or pork",
        "Fry Jacks - Deep-fried dough pockets typically eaten for breakfast with refried beans, eggs, or cheese",
        "Ceviche - Raw fish or seafood marinated in lime juice with onions, tomatoes, and cilantro",
        "Stew Chicken - Chicken slow-cooked with recado rojo (achiote paste), creating a reddish color and distinctive flavor",
        "Gibnut - A large rodent (also called 'royal rat') considered a delicacy and even served to Queen Elizabeth II during her visit"
      ]
    },
    culturalCustoms: [
      "Belizean Time - A relaxed approach to schedules and punctuality, often summarized by the phrase 'any time is Belize time'",
      "Garifuna Settlement Day - November 19th celebrations commemorating the arrival of the Garifuna people, featuring drumming, dancing, and traditional food",
      "September Celebrations - Independence Day (September 21) and St. George's Caye Day (September 10) marked with parades, street parties, and concerts",
      "Kriol Prapa - The informal greeting and conversation style of Kriol-speaking Belizeans, often involving playful banter and storytelling",
      "Respectful Dress - While casual attire is acceptable in tourist areas, modest clothing is appreciated when visiting villages, especially during religious events"
    ],
    travelTips: [
      "U.S. dollars are widely accepted at a fixed 2:1 exchange rate with the Belize dollar",
      "Bring insect repellent and lightweight, breathable clothing for jungle excursions",
      "Tap water is generally not safe to drink; stick to bottled or purified water",
      "Boat transportation is essential for accessing the cayes; check schedules as the last water taxis often leave by mid-afternoon",
      "Most roads outside major highways are unpaved; consider 4WD vehicles for exploring inland",
      "Respect marine protected areas by not touching coral and using reef-safe sunscreen"
    ],
    safetyInfo: "Belize is generally safe for tourists in main destinations, though standard precautions should be taken, especially in Belize City where crime rates are higher. Avoid isolated areas after dark and use licensed taxis at night. The greatest risks typically involve water activities and jungle adventures, so choose reputable operators with proper safety equipment. Medical facilities are basic outside major towns, with serious conditions requiring evacuation to Mexico or the United States. Comprehensive travel insurance is essential. Natural hazards include hurricanes during the season (June to November) and strong currents when swimming near reef cuts or around cayes.",
    sustainableTourism: "Belize has established itself as a leader in conservation, with nearly 40% of its territory under some form of protection. The country banned bottom trawling, offshore oil drilling, and single-use plastics to protect its barrier reef. Visitors can support these efforts by choosing eco-certified accommodations and tour operators that follow sustainable practices. The Toledo Ecotourism Association and similar community-based initiatives offer authentic experiences while ensuring tourism benefits reach local populations. When snorkeling or diving, maintain distance from coral and marine life, and consider participating in reef clean-up activities organized by marine conservation NGOs.",
    visaRequirements: "Citizens of the United States, Canada, European Union countries, and many Commonwealth nations do not need a visa for stays up to 30 days. A passport valid for at least three months beyond the intended stay, proof of sufficient funds, and an onward/return ticket are required. Visitors can apply for extensions through the Immigration Department in Belmopan or district offices. A departure tax is typically included in airline tickets but must be paid separately when departing by land borders. Some nationalities require visas, which must be obtained before arrival through Belizean embassies or consulates.",
    budget: {
      budget: "BZD 100-200 ($50-100 USD) per day for budget accommodations in hostels or guesthouses, street food or local restaurants, and public transportation",
      midRange: "BZD 200-400 ($100-200 USD) per day for mid-range hotels, restaurant dining, and guided tours and activities",
      luxury: "BZD 400+ ($200+ USD) per day for luxury resorts, fine dining, private tours, and exclusive experiences such as private boat charters"
    },
    transportationOptions: [
      "Water taxis - Regular services connect mainland Belize to the popular cayes (islands)",
      "Domestic flights - Maya Island Air and Tropic Air operate frequent flights between destinations",
      "Buses - Inexpensive public buses connect most towns, though schedules can be limited",
      "Rental cars - Available in major towns, but road conditions vary considerably",
      "Shuttle services - Private and shared shuttles operated by hotels and tour companies"
    ],
    neighboringCountries: [
      "Mexico (to the north)",
      "Guatemala (to the west and south)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Adventure Travel", "Diving & Snorkeling", "Mayan Ruins", "Ecotourism", "Wildlife",
    "Beaches", "Rainforest", "Caves", "Cultural Diversity", "Marine Life"
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

export default BelizeCountry; 