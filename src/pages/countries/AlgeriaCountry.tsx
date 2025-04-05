
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AlgeriaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Algeria",
    slug: "algeria",
    continent: "Africa",
    capital: "Algiers",
    languageOfficial: "Arabic, Berber",
    languagesSpoken: ["Arabic", "Berber", "French", "Tamazight"],
    currency: "Algerian Dinar (DZD)",
    population: 43800000,
    area: 2381741,
    timeZones: ["GMT+1"],
    callingCode: "+213",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1631368231457-193a3cf7cf86?q=80&w=1000",
    description: "Algeria, officially the People's Democratic Republic of Algeria, is the largest country in Africa by land area, situated in North Africa. With a Mediterranean coastline and vast Saharan desert interior, Algeria features diverse landscapes from coastal beaches to high mountain ranges and sand dunes. Its rich history spans Berber civilization, Phoenician and Roman rule, Arab conquest, Ottoman control, and French colonization before gaining independence in 1962.",
    whyVisit: "Algeria offers a blend of Mediterranean charm, Saharan adventure, and rich cultural heritage that remains largely unexplored by mass tourism. Visitors can explore well-preserved Roman ruins, wander through ancient kasbahs, trek across breathtaking desert landscapes, and experience authentic North African culture in bustling medinas. The country's relative lack of commercialization provides a more genuine cultural experience compared to some neighboring destinations.",
    bestTimeToVisit: {
      text: "Spring (March to May) and autumn (September to November) offer the most pleasant temperatures for exploring both coastal areas and the desert. Summer is suitable for the northern highlands but very hot in the desert.",
      months: ["March", "April", "May", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Hot and dry along the coast (25-35°C/77-95°F), extremely hot in the Sahara (over 40°C/104°F).",
      winter: "Mild on the coast (8-16°C/46-61°F), cold in the mountains with snow, and cool nights in the desert.",
      spring: "Pleasant temperatures (15-25°C/59-77°F) with occasional rainfall, ideal for exploring most regions.",
      fall: "Similar to spring, with temperatures gradually cooling and generally dry conditions."
    },
    majorCities: [
      {
        name: "Algiers",
        description: "The capital and largest city featuring the historic Casbah (UNESCO site), French colonial architecture, and the striking Monument of Martyrs overlooking the Bay of Algiers."
      },
      {
        name: "Oran",
        description: "A major port city with Spanish and French influence, known for its vibrant music scene as the birthplace of Rai music, and the impressive Fort Santa Cruz offering panoramic views."
      },
      {
        name: "Constantine",
        description: "Known as 'City of Bridges', dramatically situated on a plateau with deep gorges and historic suspension bridges, featuring Ottoman palaces and ancient Roman ruins."
      },
      {
        name: "Tlemcen",
        description: "An ancient city near the Moroccan border with significant Islamic heritage, including the Great Mosque, ancient medina, and the ruins of Mansourah."
      },
      {
        name: "Ghardaïa",
        description: "The main city of the M'zab Valley (UNESCO site), known for its distinctive pentapolis of fortified villages with unique Mozabite architecture and culture."
      }
    ],
    famousFor: [
      "Sahara Desert - The world's largest hot desert with spectacular dunes at Tassili n'Ajjer and Grand Erg Oriental",
      "Roman Ruins - Well-preserved ancient sites including Timgad, Djémila, and Tipaza (all UNESCO sites)",
      "Casbah of Algiers - A UNESCO World Heritage site with a labyrinth of narrow streets and traditional houses",
      "Hoggar Mountains - Dramatic volcanic mountains and rock formations in the Sahara",
      "M'zab Valley - UNESCO-listed collection of five fortified villages with unique architecture"
    ],
    topAttractions: [
      {
        name: "Tassili n'Ajjer",
        description: "A UNESCO World Heritage site in the Sahara featuring prehistoric rock art galleries with thousands of paintings and engravings dating back 6,000-12,000 years, as well as remarkable geological formations.",
        imageUrl: "https://images.unsplash.com/photo-1574091443765-18b2981001f9?q=80&w=1000"
      },
      {
        name: "Timgad",
        description: "An exceptionally well-preserved Roman colonial town founded in 100 CE, featuring a grid street plan, triumphal arch, library, and theater in an impressive state of preservation.",
        imageUrl: "https://images.unsplash.com/photo-1580834341580-8c17a3a350f4?q=80&w=1000"
      },
      {
        name: "Casbah of Algiers",
        description: "The historic heart of Algiers with its maze-like streets, Ottoman palaces, and traditional houses cascading down the hillside to the Mediterranean, recognized as a UNESCO World Heritage site.",
        imageUrl: "https://images.unsplash.com/photo-1612908658119-04eb17530bd1?q=80&w=1000"
      },
      {
        name: "Djémila",
        description: "A UNESCO-listed Roman ruins site set amid stunning mountains, featuring some of North Africa's best-preserved Berber-Roman architecture including temples, basilicas, and intricate mosaics.",
        imageUrl: "https://images.unsplash.com/photo-1629113059829-dd5848e702e9?q=80&w=1000"
      },
      {
        name: "Assekrem",
        description: "Located in the Hoggar Mountains, this high plateau offers stunning panoramic views of the Sahara Desert, especially at sunrise and sunset, with an accessible hermitage once used by Charles de Foucauld.",
        imageUrl: "https://images.unsplash.com/photo-1550060448-2d3b836d7fcc?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Algerian cuisine blends Berber, Arabic, Turkish, and French influences, featuring flavorful dishes rich in vegetables, grains, meat, and aromatic spices. Meals are typically communal affairs, with bread being a staple accompaniment to most dishes.",
      famousDishes: [
        "Couscous - The national dish consisting of semolina grains steamed over a stew of meat and vegetables",
        "Chorba - A hearty soup with lamb, vegetables, and herb-infused broth, especially popular during Ramadan",
        "Rechta - A special-occasion noodle dish with chicken or lamb, chickpeas and a white sauce",
        "Berkoukes - Handmade pasta pearls served with a meat and vegetable stew",
        "Makroud - Sweet diamond-shaped pastries filled with dates and soaked in honey"
      ]
    },
    culturalCustoms: [
      "Hospitality - Algerians take great pride in welcoming guests and often insist on treating visitors",
      "Tea ritual - The preparation and serving of mint tea is a social custom and sign of hospitality",
      "Greetings - Handshakes are common, though men should wait for women to extend their hand first",
      "Religious customs - Respect for Islamic traditions including modest dress and observance of Ramadan",
      "Family importance - Family ties are extremely important, and extended family gatherings are central to social life"
    ],
    travelTips: [
      "Apply for a visa well in advance as the process can be lengthy",
      "Check current safety advisories as some regions have travel restrictions",
      "Learn basic French or Arabic phrases as English is not widely spoken outside major tourist areas",
      "Women travelers should dress modestly, covering shoulders and knees",
      "Photography of government buildings and military installations is prohibited",
      "Arrange travel with local guides when exploring remote areas like the Sahara"
    ],
    safetyInfo: "While major cities and tourist sites are generally safe for visitors, some regions (particularly border areas and parts of the Sahara) have security concerns. Always check your government's latest travel advisories before planning your trip and consider traveling with organized tours in less-visited areas.",
    sustainableTourism: "Algeria's tourism industry is still developing, presenting an opportunity to establish sustainable practices from the start. Support locally-owned accommodations and guides, respect cultural norms including modest dress, and be mindful of water conservation, especially in desert regions. When visiting fragile desert ecosystems or archaeological sites, stay on designated paths to prevent erosion.",
    visaRequirements: "Most visitors need a visa to enter Algeria, which must be obtained in advance from an Algerian consulate or embassy. The application typically requires an invitation letter or hotel reservation, proof of funds, onward/return travel tickets, and may involve an interview. Processing times vary, so apply well in advance of planned travel.",
    budget: {
      budget: "400-800 DZD ($3-6 USD) per day for basic accommodation, local transportation and simple meals",
      midRange: "800-3000 DZD ($6-22 USD) per day for better hotels and restaurants",
      luxury: "3000+ DZD ($22+ USD) per day for top accommodations and dining"
    },
    transportationOptions: [
      "Domestic flights between major cities",
      "Trains connecting coastal cities from Annaba to Oran",
      "Buses and collective taxis (louage) for intercity travel",
      "Taxis for getting around within cities",
      "Car rentals with driver recommended over self-driving"
    ],
    neighboringCountries: [
      "Tunisia", "Libya", "Niger", "Mali", "Mauritania", "Morocco"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Desert", "Roman Ruins", "History", "UNESCO Sites", "Mediterranean",
    "Ancient Civilizations", "Architecture", "Sahara", "Mountains", "Off the Beaten Path"
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
                  <p className="text-sm text-amber-600">{countryData.safetyInfo}</p>
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

export default AlgeriaCountry;
