import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BeninCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Benin",
    slug: "benin",
    continent: "Africa",
    capital: "Porto-Novo",
    languageOfficial: "French",
    languagesSpoken: ["French", "Fon", "Yoruba", "Bariba", "Dendi"],
    currency: "West African CFA Franc (XOF)",
    population: 12123200,
    area: 114763,
    timeZones: ["GMT+1"],
    callingCode: "+229",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2016/01/29/17/49/banner-1168019_1280.jpg",
    description: "Benin, formerly known as Dahomey, is a West African nation bordered by Togo, Nigeria, Burkina Faso, and Niger. With a rich cultural heritage as the birthplace of Vodun (voodoo), vibrant traditions, and a complex history that includes the infamous slave trade route, Benin offers travelers an authentic glimpse into African history and contemporary life.",
    whyVisit: "Benin offers a fascinating blend of history, culture, and natural beauty that remains relatively untouched by mass tourism. The country's most compelling draw is its profound historical significance as the birthplace of Vodun (voodoo) religion, which continues to influence daily life and celebrations. Ouidah's Sacred Forest and the Python Temple provide insight into these spiritual traditions, while the Route des Esclaves (Slave Route) and Door of No Return memorial offer powerful reflections on the transatlantic slave trade. In northern Benin, Pendjari National Park presents one of West Africa's best wildlife viewing opportunities, with elephants, lions, and numerous other species. The remarkable stilt village of Ganvié, built entirely over Lake Nokoué, showcases human adaptation and unique living traditions. Architecture enthusiasts will appreciate the Royal Palaces of Abomey (a UNESCO World Heritage site), while the vibrant markets and friendly locals throughout the country provide cultural immersion without the crowds found in more popular African destinations.",
    bestTimeToVisit: {
      text: "The best time to visit Benin is during the dry season from November to March when temperatures range from 23-32°C (73-90°F) with minimal rainfall, making travel and outdoor activities more comfortable.",
      months: ["November", "December", "January", "February", "March"]
    },
    weatherInfo: {
      summer: "Hot and very humid from April to October with temperatures ranging from 25-35°C (77-95°F). This coincides with the rainy season, with the heaviest rainfall typically occurring between June and September in the south.",
      winter: "Warm and dry from November to March with temperatures averaging 23-32°C (73-90°F). The harmattan, a dry and dusty wind from the Sahara, can affect northern regions between December and February, creating hazy conditions.",
      spring: "March to April is transitional with increasing temperatures and humidity, occasional rainfall, and temperatures ranging from 24-34°C (75-93°F).",
      fall: "October to November is another transitional period as the rainy season ends, with gradually decreasing humidity and temperatures ranging from 24-33°C (75-91°F)."
    },
    majorCities: [
      {
        name: "Cotonou",
        description: "The economic capital and largest city, though not the official capital. This vibrant port city serves as Benin's commercial and cultural hub with attractions including the Grand Marché de Dantokpa (one of West Africa's largest markets), the Fondation Zinsou (contemporary art museum), and Notre Dame Cathedral."
      },
      {
        name: "Porto-Novo",
        description: "The official capital city, featuring a blend of colonial and traditional architecture. Key attractions include the Ethnographic Museum, the Da Silva Museum showcasing Afro-Brazilian heritage, the Royal Palace, and the Grand Mosque converted from a church, reflecting the city's religious diversity."
      },
      {
        name: "Abomey",
        description: "The historical capital of the powerful Dahomey Kingdom, home to the UNESCO-listed Royal Palaces. The city's rich history is preserved in the Historical Museum of Abomey housed within the palace complex, displaying artifacts and telling the story of the once-powerful kingdom."
      },
      {
        name: "Ouidah",
        description: "A coastal city with deep historical significance in the transatlantic slave trade and as a center of Vodun religion. Visitors can follow the Route des Esclaves (Slave Route), visit the Door of No Return monument, explore the Sacred Forest, and see the Temple of Pythons."
      },
      {
        name: "Parakou",
        description: "The largest city in northern Benin and an important transport hub. Known for its large central mosque, vibrant markets, and as a gateway to explore the northern regions. The city offers insight into the cultures of northern ethnic groups like the Bariba and Dendi peoples."
      }
    ],
    famousFor: [
      "Birthplace of Vodun (voodoo) religion with active temples and festivals",
      "Royal Palaces of Abomey - UNESCO World Heritage site",
      "Ganvié - the largest lake village in Africa built entirely on stilts",
      "Historical significance in the transatlantic slave trade",
      "Pendjari National Park - one of West Africa's best wildlife reserves"
    ],
    topAttractions: [
      {
        name: "Royal Palaces of Abomey",
        description: "This UNESCO World Heritage site consists of twelve royal palaces built by different kings of the powerful Dahomey Kingdom between 1625 and 1900. Spread across 40 hectares, the complex features impressive earthen walls, bas-reliefs depicting battle scenes, and symbolic imagery. Today, the site functions as a historical museum displaying royal artifacts, thrones, and weapons, offering insight into the kingdom that once dominated the region.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Ganvié Stilt Village",
        description: "Often called the 'Venice of Africa,' this remarkable village built entirely on stilts over Lake Nokoué is home to over 20,000 Tofinu people. Created in the 16th-17th centuries as a refuge from slave traders, the inhabitants have developed a unique way of life centered around the water. Visitors travel by pirogue (dugout canoe) to see the stilt houses, floating market, and daily activities conducted entirely by boat.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Door of No Return",
        description: "Located on Ouidah's beach, this poignant monument marks the final point where enslaved Africans were forced onto ships bound for the Americas. Part of the Route des Esclaves (Slave Route), a 4 km path lined with sculptures and memorials, it commemorates the estimated one million people trafficked from this coast. The annual Vodun festival on January 10th includes ceremonies at this site to honor ancestors.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Pendjari National Park",
        description: "Part of the larger W-Arly-Pendjari complex spanning three countries, this biodiverse park covers 2,755 square kilometers and represents one of the last intact ecosystems in West Africa. Visitors can spot elephants, lions, cheetahs, hippos, various antelope species, and over 300 bird species. The park's dramatic landscapes include waterfalls, plains, and the Atakora Mountains, with the best wildlife viewing during the dry season when animals gather around water sources.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sacred Forest and Python Temple of Ouidah",
        description: "These two related sites offer insight into Vodun spiritual traditions. The Sacred Forest houses numerous vodun deities represented by sculptures and is still used for ceremonies and initiations. Nearby, the Temple of Pythons contains dozens of living royal pythons considered sacred in Vodun belief. Visitors can handle the docile snakes, which are regularly released into the community and returned by devotees, symbolizing the harmony between humans and these revered creatures.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Beninese cuisine combines West African staples with influences from the country's French colonial past and returning Afro-Brazilian communities. Based on starches like corn, millet, and yams paired with various sauces, the food can be quite spicy, reflecting the tropical climate. Seafood features prominently along the coastal areas, while bush meat and freshwater fish are popular inland.",
      famousDishes: [
        "Kuli-Kuli - Spicy fried peanut snacks often eaten with gari (cassava flour) or as an accompaniment to drinks",
        "Akara - Black-eyed pea fritters seasoned with onions and spices, popular for breakfast or as a street food",
        "Wagasi - A soft cheese from northern Benin, similar to cottage cheese, often fried and served with spicy sauce",
        "Sauce d'arachide - A rich peanut-based sauce served over rice or with meat and fish",
        "Calalu - A stew made with jute leaves, palm oil, and often fish or crab, sometimes called the national dish"
      ]
    },
    culturalCustoms: [
      "Vodun Ceremonies - Spiritual practices involving trance states, offerings, and elaborate ceremonies honoring various deities",
      "La Gelede - UNESCO-recognized masked performances honoring the power of female ancestors and spirits",
      "Handshaking - A traditional greeting that can be elaborate with specific sequences depending on the region",
      "Zangbeto - Guardian night spirits represented by straw masks that whirl and perform to ward off evil",
      "Respect for Elders - Demonstrated through specific greetings, giving up seats, and seeking advice from community elders"
    ],
    travelTips: [
      "French is the official language; learning basic French phrases is highly recommended",
      "Photographing government buildings, military installations, or bridges is prohibited",
      "Always ask permission before photographing people, especially during religious ceremonies",
      "Comfortable, loose-fitting cotton clothing is best for the humid climate",
      "When visiting religious sites, modest dress is required (covering shoulders, knees, and sometimes head)",
      "During the harmattan season (December-February), pack eye drops and moisturizer for the dry, dusty conditions"
    ],
    safetyInfo: "Benin is generally considered one of the more stable and safe countries in West Africa. Crime rates are relatively low, though petty theft and scams targeting tourists can occur, particularly in urban areas and markets. Road safety is a concern as conditions vary widely and night driving should be avoided. Health risks include malaria, which is endemic throughout the country, necessitating appropriate prophylaxis and mosquito protection measures. Yellow fever vaccination is required for entry. Medical facilities are limited outside of Cotonou, so comprehensive travel insurance including evacuation coverage is strongly recommended. Political demonstrations occasionally occur in urban centers and should be avoided. Border areas with Burkina Faso should be approached with caution due to regional security concerns.",
    sustainableTourism: "Benin faces environmental challenges including deforestation, coastal erosion, and wildlife conservation issues. The government has established initiatives like the Pendjari National Park's management partnership with African Parks to preserve biodiversity. Travelers can support these efforts by choosing locally-owned accommodations, hiring local guides, and patronizing community-based tourism initiatives, particularly around Ganvié lake village and the Route des Pêches. The NGO Eco-Benin promotes sustainable tourism through its network of community ecolodges, especially in the Atakora Mountains and along Lake Nokoué. When visiting cultural sites like sacred forests or Vodun temples, respecting local customs and making appropriate donations helps preserve these traditions. Water conservation is important, particularly in northern regions where access can be limited.",
    visaRequirements: "Most visitors to Benin require a visa, which can be obtained through e-Visa application online or at Beninese embassies and consulates. The e-Visa system allows for relatively quick processing (usually within 48 hours) with options for single or multiple entry. Required documents typically include a passport valid for at least six months beyond the planned stay, return/onward ticket, and proof of accommodation. Visa fees vary depending on duration and type. Citizens of ECOWAS (Economic Community of West African States) countries are exempt from visa requirements. A yellow fever vaccination certificate is mandatory for all travelers. Visas are typically issued for 30-90 days, with extensions possible through the immigration service in Cotonou.",
    budget: {
      budget: "15,000-30,000 XOF ($25-50 USD) per day for budget accommodations in simple hotels or guesthouses, street food or local restaurants, and public transportation",
      midRange: "30,000-60,000 XOF ($50-100 USD) per day for mid-range hotels with air conditioning, restaurant dining, and occasional guided tours",
      luxury: "60,000+ XOF ($100+ USD) per day for the best available hotels, private transportation, and guided experiences"
    },
    transportationOptions: [
      "Bush taxis (shared taxis) - The most common form of intercity transport, departing when full",
      "Zemidjan (zem) - Motorcycle taxis for short distances within cities and towns",
      "Taxis - Available in larger cities, usually without meters so negotiate fares before departing",
      "Buses - Some routes are served by larger buses, particularly between major cities",
      "Boat taxis - Used to reach lake communities like Ganvié or for travel along the coast"
    ],
    neighboringCountries: [
      "Togo (to the west)",
      "Nigeria (to the east)",
      "Niger (to the north)",
      "Burkina Faso (to the northwest)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cultural Heritage", "Historical Sites", "Wildlife", "Off the Beaten Path", "Traditional Crafts",
    "African History", "Sacred Sites", "Lake Villages", "Religious Traditions", "Slave Trade History"
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

export default BeninCountry; 