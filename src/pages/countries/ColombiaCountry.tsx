import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ColombiaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Colombia",
    slug: "colombia",
    continent: "South America",
    capital: "Bogotá",
    languageOfficial: "Spanish",
    languagesSpoken: ["Spanish"],
    currency: "Colombian Peso (COP)",
    population: 50882891,
    area: 1141748,
    timeZones: ["UTC-5 (EST)"],
    callingCode: "+57",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/13/14/15/china-162389_1280.png",
    description: "Colombia, a country located in the northwest of South America, is known for its diverse landscapes, rich culture, and vibrant cities. It is home to the world's highest peak outside of Asia, the snow-capped summit of Pico Cristóbal Colón, and the Amazon rainforest, which is home to a vast array of plant and animal species. Colombia is also known for its coffee production, with the country being one of the largest exporters of coffee in the world. The country has a rich history, with influences from indigenous cultures, European colonization, and African slavery. Today, Colombia is a multicultural society with a vibrant music scene, delicious cuisine, and a growing tech industry.",
    whyVisit: "Colombia offers a unique blend of natural beauty, cultural heritage, and adventure. Visitors can explore the lush Amazon rainforest, visit colonial towns, enjoy the vibrant city life, and experience the country's rich history. Colombia's diverse landscapes, from the Andes mountains to the Caribbean coast, provide endless opportunities for exploration and discovery.",
    bestTimeToVisit: {
      text: "The best time to visit Colombia depends on the region you're interested in. The dry season (December to April) is generally recommended for visiting the Caribbean coast and the coffee region, while the green season (May to November) is ideal for the Amazon rainforest and the Andean regions. The dry season is also a great time to visit the cities, as it's less crowded and the weather is more pleasant.",
      months: ["December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Summer temperatures in Colombia can range from 20°C to 35°C (68°F to 95°F) depending on the region. The dry season (December to April) is generally cooler in the highlands and warmer in the lowlands. The rainy season (May to November) brings heavy rainfall to the Caribbean coast and the Amazon rainforest.",
      winter: "Winter temperatures in Colombia can range from 10°C to 25°C (50°F to 77°F) depending on the region. The dry season (December to April) is cooler in the highlands and warmer in the lowlands. The rainy season (May to November) brings cooler temperatures to the highlands and warmer temperatures to the lowlands.",
      spring: "Spring temperatures in Colombia can range from 15°C to 30°C (59°F to 86°F) depending on the region. The dry season (December to April) is cooler in the highlands and warmer in the lowlands. The rainy season (May to November) brings cooler temperatures to the highlands and warmer temperatures to the lowlands.",
      fall: "Fall temperatures in Colombia can range from 10°C to 30°C (50°F to 86°F) depending on the region. The dry season (December to April) is cooler in the highlands and warmer in the lowlands. The rainy season (May to November) brings cooler temperatures to the highlands and warmer temperatures to the lowlands."
    },
    majorCities: [
      {
        name: "Bogotá",
        description: "Colombia's capital city, Bogotá, is a bustling metropolis with a rich history and culture. It's known for its colonial architecture, vibrant markets, and coffee culture. The city is home to several UNESCO World Heritage sites, including the historic center and the Gold Museum."
      },
      {
        name: "Medellín",
        description: "Medellín is Colombia's second-largest city and known for its vibrant culture, coffee production, and the famous cable car system that connects the city's upper and lower parts."
      },
      {
        name: "Cartagena",
        description: "Cartagena is a beautiful colonial city on the Caribbean coast. It's known for its well-preserved walled city, colorful buildings, and vibrant nightlife."
      },
      {
        name: "Cali",
        description: "Cali is Colombia's third-largest city and known for its salsa music, vibrant nightlife, and the famous flower parade during the Holy Week celebrations."
      },
      {
        name: "Barranquilla",
        description: "Barranquilla is Colombia's largest city on the Caribbean coast and known for its carnival celebrations, particularly the Barranquilla Carnival."
      }
    ],
    famousFor: [
      "Colombian Coffee - World-renowned coffee production",
      "The Andes - The world's highest mountain range outside of Asia",
      "The Amazon Rainforest - Home to a vast array of plant and animal species",
      "The Caribbean Coast - Beautiful beaches and vibrant cities",
      "The Coffee Triangle - Region known for its coffee production"
    ],
    topAttractions: [
      {
        name: "The Andes",
        description: "The Andes is Colombia's highest mountain range, stretching over 2,000 miles across the country. It's home to several peaks, including Pico Cristóbal Colón, the world's highest peak outside of Asia.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "The Amazon Rainforest",
        description: "The Amazon Rainforest covers over 60% of Colombia's territory and is home to a vast array of plant and animal species. It's a UNESCO World Heritage site and a paradise for nature lovers.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "The Coffee Triangle",
        description: "The Coffee Triangle is a region in Colombia known for its coffee production. It's home to some of the world's best coffee plantations and a must-visit for coffee lovers.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "The Caribbean Coast",
        description: "The Caribbean Coast is Colombia's easternmost region, known for its beautiful beaches and vibrant cities. It's a paradise for beach lovers and a must-visit for its colonial cities like Cartagena and Barranquilla.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "The Coffee Region",
        description: "The Coffee Region is a region in Colombia known for its coffee production. It's home to some of the world's best coffee plantations and a must-visit for coffee lovers.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Colombian cuisine is a blend of indigenous, African, and Caribbean influences. It's known for its delicious flavors, fresh ingredients, and diverse regional specialties. Some popular dishes include arepas, bandeja paisa, and empanadas.",
      famousDishes: [
        "Arepas - Cornmeal cakes filled with various ingredients",
        "Bandeja Paisa - A traditional dish made with rice, beans, meat, and vegetables",
        "Empanadas - Pastry filled with various ingredients",
        "Ceviche - Seafood marinated in lime juice",
        "Changua - A traditional drink made from corn and sugar"
      ]
    },
    culturalCustoms: [
      "Face (Mianzi) - The importance of preserving dignity and social standing for yourself and others in all interactions",
      "Gift-Giving Ritual - Presenting and receiving gifts with both hands, often initially declining gifts out of modesty",
      "Respect for Elders - Deferential behavior toward older family members and seniors in social settings",
      "Business Card Exchange - Formal two-handed presentation and receiving of cards, treated with respect",
      "Group Harmony - Preference for collective well-being over individual expression in many social contexts"
    ],
    travelTips: [
      "Download essential apps - WeChat, Baidu Maps, and translation tools before arrival, as many Western apps don't function in Colombia",
      "Carry cash - While mobile payments dominate in cities, they typically require Colombian bank accounts; foreign cards aren't widely accepted",
      "Plan for internet restrictions - Major international sites and apps are blocked; consider a legal VPN solution arranged before arrival",
      "Learn basic Spanish phrases - English proficiency varies widely outside major tourist areas and international hotels",
      "Be prepared for different etiquette - Regarding personal space, queuing, and noise levels in public places",
      "Secure visa requirements early - Most foreigners need visas obtained in advance through Colombian embassies or consulates"
    ],
    safetyInfo: "Colombia ranks among the world's safer destinations for travelers, with violent crime against foreigners extremely rare. The most significant safety concerns involve traffic safety, as pedestrians often lack right-of-way, and road regulations may differ from Western norms. Petty theft occasionally occurs in crowded tourist areas, though comprehensive surveillance systems and police presence have reduced such incidents in recent years. Food and water safety have improved dramatically in established tourism regions, though travelers with sensitive stomachs should still exercise caution with street food and drink bottled water. Air pollution represents a health consideration in major cities, particularly during winter months. The public health system provides adequate care in major cities, though language barriers may pose challenges. Political sensitivities can affect travel in certain regions, particularly western provinces, where special permits may be required.",
    sustainableTourism: "Colombia's approach to tourism development continues evolving, with increasing emphasis on environmental sustainability balancing earlier focus on infrastructure development. National initiatives promoting \"ecological civilization\" have accelerated environmental protection efforts around major natural attractions like the Amazon rainforest and coffee regions, with entrance quotas, improved waste management, and restoration programs. The government has implemented strict environmental regulations at UNESCO sites and scenic areas, sometimes closing attractions temporarily for ecological recovery. Traditional villages increasingly benefit from cultural preservation initiatives that maintain authentic architecture while improving living standards for residents. Travelers can support sustainability by visiting during off-peak periods, respecting daily visitor quotas at natural sites, choosing certified eco-friendly accommodations where available, and engaging with genuine cultural experiences that benefit local communities rather than commercialized performances. Colombia's extensive high-speed rail network offers a lower-carbon alternative to domestic flights.",
    visaRequirements: "Most foreign nationals require a visa to enter Colombia, with limited exceptions for transit passengers and visitors to certain free trade zones like Hainan Island. Standard tourist (L) visas typically allow stays of 30 to 90 days and require application through Colombian embassies or consulates before travel. The application process requires a passport valid for at least six months with blank visa pages, a completed application form, recent passport photos, proof of onward travel, and sometimes hotel reservations or invitation letters. Processing times and documentation requirements vary by embassy but typically take 4-7 working days. Multiple-entry visas with validity up to 10 years are available for citizens of some countries, including the United States. Hong Kong and Macau operate separate immigration policies, allowing visa-free entry for many nationalities. Regulations change periodically, so consulting the nearest Colombian embassy website for current requirements is essential.",
    budget: {
      budget: "25-50 USD per day for hostel or budget hotel accommodation, local transportation, inexpensive restaurants, and modestly priced attractions",
      midRange: "50-150 USD per day for mid-range hotels, occasional taxis, sit-down restaurant meals, and paid attractions",
      luxury: "150+ USD per day for international-standard hotels, private transportation, fine dining, and premium experiences"
    },
    transportationOptions: [
      "High-Speed Rail - World's largest network connecting major cities at speeds up to 350 km/h",
      "Subway Systems - Extensive, modern, and affordable networks in over 40 cities",
      "Didi (Chinese Uber) - Convenient ride-hailing service available in most cities (requires Chinese app)",
      "Regular Trains - Economical option for reaching destinations not served by high-speed rail",
      "Domestic Flights - Extensive network serving even remote areas, though often subject to delays",
      "Public Buses - Comprehensive coverage within cities but can be challenging for non-Spanish speakers"
    ],
    neighboringCountries: [
      "Brazil", "Peru", "Venezuela", "Ecuador", "Panama", "Guyana", "Suriname", "Bolivia", "Chile", "Argentina"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Ancient Civilizations", "Cultural Heritage", "Megacities", "Mountains", "Cuisine", 
    "Architecture", "UNESCO Sites", "Buddhist Temples", "Nature Reserves", "Imperial History"
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
                <TabsTrigger value="planning">Plan Your Trip</TabsTrigger>
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
              
              <TabsContent value="planning" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                  <p className="mb-2">{countryData.bestTimeToVisit.text}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {countryData.bestTimeToVisit.months.map((month) => (
                      <Badge key={month} variant="secondary">{month}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seasonal Weather</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">Summer</h4>
                        <p className="text-sm text-muted-foreground">{countryData.weatherInfo.summer}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">Winter</h4>
                        <p className="text-sm text-muted-foreground">{countryData.weatherInfo.winter}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">Spring</h4>
                        <p className="text-sm text-muted-foreground">{countryData.weatherInfo.spring}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-1">Fall</h4>
                        <p className="text-sm text-muted-foreground">{countryData.weatherInfo.fall}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
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
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                  <p>{countryData.sustainableTourism}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Requirements</h3>
                  <p>{countryData.visaRequirements}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budget Expectations</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Budget:</span> {countryData.budget.budget}</p>
                    <p><span className="font-medium">Mid-Range:</span> {countryData.budget.midRange}</p>
                    <p><span className="font-medium">Luxury:</span> {countryData.budget.luxury}</p>
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
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Neighboring Countries</h3>
                  <div className="flex flex-wrap gap-2">
                    {countryData.neighboringCountries.map((country) => (
                      <Badge key={country} variant="outline">{country}</Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
                  <p>{countryData.timeZones}</p>
                </div>
                
                <div>
                  <p className="font-semibold">International Dialing Code</p>
                  <p>{countryData.callingCode}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Driving Side</p>
                  <p>{countryData.drivingSide.charAt(0).toUpperCase() + countryData.drivingSide.slice(1)}</p>
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

export default ColombiaCountry; 