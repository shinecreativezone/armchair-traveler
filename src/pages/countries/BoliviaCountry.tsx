import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BoliviaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bolivia",
    slug: "bolivia",
    continent: "South America",
    capital: "Sucre (constitutional), La Paz (administrative)",
    languageOfficial: "Spanish, Quechua, Aymara, Guarani",
    languagesSpoken: ["Spanish", "Quechua", "Aymara", "Guarani", "Other indigenous languages"],
    currency: "Boliviano (BOB)",
    population: 11673021,
    area: 1098581,
    timeZones: ["GMT-4 (BOT - Bolivia Time)"],
    callingCode: "+591",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1534891652460-5624a32d1d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Bolivia, officially the Plurinational State of Bolivia, is a landlocked country located in western-central South America. With its diverse geography spanning Andean mountains, high altitude plateaus, and Amazonian rainforests, Bolivia is known for its extraordinary natural beauty, rich indigenous cultures, and complex history. It is one of the most biodiverse countries in the world and has the highest percentage of indigenous population in South America.",
    whyVisit: "Bolivia offers an authentic South American experience that combines breathtaking natural wonders with profound cultural heritage. The country's dramatically diverse landscapes range from the surreal salt flats of Salar de Uyuni—the world's largest salt flat that transforms into a perfect mirror during the rainy season—to the towering peaks of the Andes Mountains, the otherworldly Moon Valley near La Paz, and the lush Amazon Basin teeming with wildlife. Culturally, Bolivia stands out for its strong indigenous identity, with traditional ways of life still thriving alongside modern developments. Visitors can explore colorful markets where ancestral trading practices continue, witness vibrant festivals blending pre-Columbian traditions with Catholic influences, and experience the unique cosmology of Andean peoples. The country's colonial history is preserved in the UNESCO-listed architecture of cities like Sucre and Potosí, while the modern cable car system of La Paz offers a contemporary contrast. For adventure seekers, opportunities abound—from trekking ancient Inca trails to cycling down the famous Death Road or exploring the mysterious waters of Lake Titicaca. All this comes with significantly lower costs than neighboring countries, making Bolivia an unparalleled value for travelers seeking authentic experiences off the beaten path.",
    bestTimeToVisit: {
      text: "The best time to visit Bolivia is during the dry season (May to October) when clear skies enhance views of salt flats and mountains. May-June offer pleasant temperatures (10-22°C/50-72°F), fewer crowds than July-August (peak tourist season), and ideal conditions for exploring highlands and lowlands alike.",
      months: ["May", "June", "July", "August", "September", "October"]
    },
    weatherInfo: {
      summer: "Summer (December to March) coincides with the rainy season. The highlands experience afternoon thunderstorms but remain warm during the day (15-20°C/59-68°F) and cool at night. Lowland areas become very hot and humid (25-35°C/77-95°F) with frequent heavy rainfall that may cause transportation disruptions and make some rural areas inaccessible.",
      winter: "Winter (May to August) brings dry, clear conditions throughout most of Bolivia. In the highlands, days are pleasantly sunny (15-20°C/59-68°F) but nights can be extremely cold, often dropping below freezing, especially in June and July. The lowlands experience occasional cold fronts called 'surazos' that can temporarily drop temperatures to 10-15°C/50-59°F.",
      spring: "Spring (September to November) sees gradually warming temperatures and increasing humidity. The highlands enjoy sunny days (15-22°C/59-72°F) and milder nights than winter. This shoulder season offers good weather conditions before the rains begin, with wildflowers starting to bloom in the countryside and fewer tourists than peak season.",
      fall: "Fall (April to May) marks the transition from wet to dry season. Rainfall decreases gradually while the landscapes remain lush and green. The highlands experience stable daytime temperatures (15-20°C/59-68°F) with increasingly cold nights. This period offers good photography opportunities with clear morning skies and occasional dramatic clouds in the afternoons."
    },
    majorCities: [
      {
        name: "La Paz",
        description: "The administrative capital and largest city, dramatically situated in a deep canyon beneath the towering Mount Illimani at elevations ranging from 3,100 to 4,100 meters. This breathtaking city features unique urban cable car transportation system (Mi Teleférico), colorful indigenous markets including the famous Witches' Market, and the striking modern architecture of the Bolivian Space Agency building. The contrasting neighborhoods range from the wealthy southern Zona Sur to historic colonial architecture in the city center. Nearby attractions include the mysterious ancient site of Tiwanaku and the surreal landscape of Moon Valley with its eroded clay formations."
      },
      {
        name: "Santa Cruz de la Sierra",
        description: "Bolivia's most populous and fastest-growing city, located in the eastern lowlands with a distinctly different atmosphere from the Andean highlands. This economic powerhouse features a modern city center with concentric ring roads, tropical climate, and strong cultural influences from both indigenous and European traditions. The central plaza with its 16th-century cathedral serves as the heart of the city, surrounded by museums, restaurants serving eastern Bolivian cuisine, and vibrant nightlife districts. The surrounding region offers access to Jesuit Missions, Amboró National Park, and the beginning of Amazon Basin explorations."
      },
      {
        name: "Sucre",
        description: "The constitutional capital and a UNESCO World Heritage site known for its well-preserved Spanish colonial architecture with uniform white-washed buildings that earn it the nickname 'La Ciudad Blanca' (The White City). This charming city at a moderate altitude of 2,800 meters combines historical significance as Bolivia's birthplace of independence with a pleasant climate and student atmosphere from its prestigious universities. Attractions include the House of Liberty museum, the Metropolitan Cathedral, numerous colonial churches and monasteries, and dinosaur footprints preserved at Cal Orck'o. The surrounding countryside features traditional villages where ancient weaving techniques continue."
      },
      {
        name: "Cochabamba",
        description: "Known as 'The Garden City' due to its spring-like climate year-round and agricultural importance, situated in a fertile valley at 2,500 meters elevation. The city is famed for its exceptional food culture, earning it recognition as Bolivia's gastronomic capital with specialties like silpancho and chicha (corn beer). Overlooking the city is Cristo de la Concordia, one of the world's largest Christ statues, while the central Prado boulevard and 400-year-old La Cancha market showcase the blend of modern urban life with traditional commerce. The surrounding valley contains pre-Incan archaeological sites and rural communities maintaining ancestral farming practices."
      },
      {
        name: "Potosí",
        description: "Once one of the world's richest cities due to its silver mines, this UNESCO-listed high-altitude mining city (4,090 meters) represents both Bolivia's colonial wealth and its history of exploitation. The city's ornate baroque churches, elaborate colonial architecture, and the historic Casa de la Moneda (Royal Mint) stand as testimony to its past importance in the Spanish Empire. The infamous Cerro Rico mountain continues to be mined using techniques that have changed little over centuries, with controversial mine tours available. The city's high-altitude location creates a stark, dramatic setting that reflects its challenging history and the resilience of its inhabitants."
      }
    ],
    famousFor: [
      "Salar de Uyuni - World's largest salt flat and natural mirror during rainy season",
      "Lake Titicaca - Highest navigable lake in the world with floating islands",
      "Indigenous cultures - Strong preservation of pre-Columbian traditions and languages",
      "Death Road (Yungas Road) - Once the world's most dangerous road, now a famous cycling route",
      "Diverse ecosystems - From Andean highlands to Amazon rainforest within a single country"
    ],
    topAttractions: [
      {
        name: "Salar de Uyuni",
        description: "The world's largest salt flat spans 10,582 square kilometers of blindingly white crystalline salt hexagons. During the rainy season (December-April), a thin layer of water transforms the surface into the world's largest mirror, creating surreal reflections of the sky. The flats contain extraordinary geological features including Incahuasi Island—a cactus-covered outcrop with ancient coral formations revealing the area's prehistoric origins as a lake. Scattered across this otherworldly landscape are primitive salt hotels, salt extraction operations worked by local communities, and colorful mineral-rich lakes where rare flamingo species feed. At night, the absolute flatness and high altitude create unparalleled stargazing opportunities, with the Milky Way reflected perfectly in the wet season.",
        imageUrl: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80"
      },
      {
        name: "Lake Titicaca",
        description: "Straddling the border between Bolivia and Peru at 3,812 meters above sea level, Lake Titicaca is the highest navigable lake in the world and considered the birthplace of the Inca civilization. The Bolivian side features the tranquil town of Copacabana with its 16th-century shrine, magnificent sunsets, and access to the sacred Isla del Sol (Island of the Sun), where Andean creation myths locate the emergence of the sun god. The island contains important Inca ruins including the Chincana labyrinth complex and the Sacred Rock. Traditional communities along the shores and on islands maintain ancient agricultural practices on pre-Incan terraced fields, while the deep blue waters and surrounding snow-capped mountains create a landscape of breathtaking beauty and spiritual significance.",
        imageUrl: "https://images.unsplash.com/photo-1569874256647-c04b62810e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
      },
      {
        name: "Madidi National Park",
        description: "One of the world's most biodiverse protected areas, spanning an extraordinary elevation range from 180 to 5,500 meters and encompassing numerous ecosystems from Amazonian rainforest to Andean highlands. This vast wilderness covering 18,958 square kilometers is home to over 1,000 bird species (11% of all known bird species globally), 272 mammal species including jaguars and pink river dolphins, and thousands of plant species, many still undocumented. Indigenous communities manage ecotourism initiatives offering authentic jungle expeditions with opportunities to stay in sustainable lodges, observe wildlife from canopy towers, participate in nocturnal animal spotting, and learn about forest medicine from native guides whose ancestral knowledge spans generations. The park represents Bolivia's commitment to conservation while balancing indigenous land rights and development needs.",
        imageUrl: "https://images.unsplash.com/photo-1599719611293-c096597dd944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Tiwanaku",
        description: "This UNESCO World Heritage archaeological site contains the mysterious remains of a pre-Incan civilization that dominated the region between 300-1000 CE, predating the Inca Empire by several centuries. Located near Lake Titicaca at 3,850 meters elevation, the site features monumental stone structures built with engineering precision that still puzzles archaeologists today. The complex includes the iconic Sun Gate (Puerta del Sol) carved from a single stone block, the semi-subterranean temple with unique stone heads embedded in the walls, and massive monoliths including the 7.3-meter tall Bennett Monolith. The on-site museums house remarkable artifacts including ceramics, textiles, and metal objects that reveal the sophisticated artistic and technological achievements of this enigmatic civilization whose influence spread throughout the southern Andes.",
        imageUrl: "https://images.unsplash.com/photo-1591671916072-b31a4f749100?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
      },
      {
        name: "Valle de la Luna (Moon Valley)",
        description: "Located just 10 kilometers from La Paz, this surreal landscape resembles a miniature badlands where centuries of erosion have shaped bizarre formations from clay and sandstone. The maze of pinnacles, canyons, and stalagmite-like spires creates an otherworldly atmosphere that earned the valley its lunar nickname. Distinct minerals in the soil produce various color striations from beige to purple, enhanced by changing light throughout the day. Marked trails wind through the formations, offering multiple viewpoints of the ever-changing perspectives, while the contrasting cacti and desert plants add an element of life to the barren terrain. The valley provides a striking reminder of geological forces at work and offers easily accessible adventure from the capital city, with panoramic views of La Paz and the surrounding mountains on clear days.",
        imageUrl: "https://images.unsplash.com/photo-1572053675669-36a017d77e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
      }
    ],
    localCuisine: {
      description: "Bolivian cuisine reflects the country's topographical and cultural diversity, with distinct regional variations between highland and lowland traditions. Staple ingredients include potatoes (with over 200 varieties cultivated in the Andes), quinoa, corn, beans, and various native tubers. Meat dishes feature beef, pork, chicken, and in the highlands, llama and alpaca. Meals are typically hearty and designed to provide energy for high-altitude living or agricultural work. Street food culture is vibrant throughout Bolivia, with markets and food stalls offering quick, flavorful options. Many traditional dishes have deep indigenous roots, often incorporating pre-Columbian cooking techniques like earth ovens (huatias) or preservation methods for potatoes (chuño) developed during Incan times.",
      famousDishes: [
        "Salteñas - Savory pastries similar to empanadas but with a sweet, slightly crispy crust containing a juicy stew-like filling of meat, potatoes, peas, and olives",
        "Silpancho - A Cochabamba specialty featuring a thin, pounded beef cutlet served over rice and potatoes, topped with a fried egg and fresh salsa",
        "Sajta de Pollo - Spicy chicken stew with yellow chili peppers (ají amarillo), served with chuño (freeze-dried potatoes) and corn",
        "Chairo - Traditional Andean soup made with multiple varieties of potatoes, chunos, vegetables, herbs and charque (dried meat), especially popular in La Paz",
        "Anticuchos - Grilled beef heart skewers marinated in spices and served with boiled potatoes and a spicy peanut sauce, commonly sold by street vendors"
      ]
    },
    culturalCustoms: [
      "Coca Leaf Customs - Chewing coca leaves or drinking coca tea is a significant cultural tradition in the Andes, used to combat altitude sickness and for social bonding",
      "Ch'alla Ceremonies - Blessing rituals for new possessions, buildings, or ventures that involve sprinkling alcohol on the ground as an offering to Pachamama (Mother Earth)",
      "Reciprocity (Ayni) - The indigenous concept of mutual assistance where help given must be returned in equal measure, forming the basis of community cooperation",
      "Traditional Markets - Weekly markets are not just for commerce but serve as important social gatherings where news is exchanged and community bonds are strengthened",
      "Carnival of Oruro - A UNESCO-recognized religious festival blending indigenous and Catholic elements, featuring elaborate devil masks and costumes in a symbolic battle between good and evil"
    ],
    travelTips: [
      "Acclimatize properly to high altitude by spending 2-3 days taking it easy upon arrival before attempting strenuous activities or traveling to even higher elevations",
      "Carry multiple forms of payment as ATMs can be unreliable outside major cities, and many places only accept cash",
      "Road blockades from political protests are common and can cause significant travel disruptions; stay informed about current events and have flexible plans",
      "Pack for multiple climates as temperatures can vary dramatically between day and night in the highlands, and between different regions of the country",
      "Learning basic Spanish phrases is highly valuable as English is not widely spoken outside tourist areas and major hotels",
      "Respect photography etiquette particularly with indigenous people, always asking permission first and being prepared to pay a small fee if requested"
    ],
    safetyInfo: "Bolivia is generally safe for tourists, though standard precautions should be observed, particularly in urban areas like La Paz and Santa Cruz where pickpocketing and bag snatching can occur in crowded markets and on public transportation. Express kidnappings, where victims are briefly held while forced to withdraw money from ATMs, have been reported in larger cities, so using registered taxis or ride-sharing apps is advisable, especially at night. Political demonstrations and road blockades are common and can turn volatile; tourists should avoid protest areas and allow extra time for travel in case of transportation disruptions. Health risks include altitude sickness in highland regions, which can be serious; visitors should acclimatize gradually and consider preventative medication. In lowland areas, insect-borne diseases including dengue fever and yellow fever are present; appropriate vaccinations and preventative measures are recommended. Medical facilities are limited outside major cities, and comprehensive travel insurance including emergency evacuation coverage is essential. The legal system treats drug offenses very severely, with long pre-trial detentions common, so avoid any involvement with illegal substances.",
    sustainableTourism: "Bolivia's approach to sustainable tourism emphasizes community-based initiatives that benefit indigenous populations while preserving cultural heritage and protecting diverse ecosystems. The country has established numerous protected areas covering approximately 20% of its territory, including biosphere reserves and national parks. Visitors can support these conservation efforts by choosing tours operated by indigenous communities, such as the Chalalan Ecolodge in Madidi National Park, which is entirely managed by the local Quechua-Tacana people. Responsible operators contribute to conservation projects, employ local guides, and practice low-impact tourism. Cultural sustainability is equally important; travelers should participate respectfully in traditional ceremonies if invited, purchase handicrafts directly from artisans, and learn about cultural contexts before visiting sacred sites. Water conservation is critical, particularly in arid Andean regions where resources are scarce. Growing environmental challenges include plastic pollution, deforestation in Amazonian regions, and the impact of climate change on glacial landscapes. By selecting accommodations with environmental certifications, using public transportation or shared vehicles where possible, and following leave-no-trace principles, visitors can minimize their ecological footprint while supporting Bolivia's developing sustainable tourism sector.",
    visaRequirements: "Visa requirements for Bolivia vary by nationality. Citizens of most Western European countries, most Latin American nations, and several Asian countries including Japan and South Korea can enter Bolivia for tourism without a visa for stays up to 90 days. United States citizens must obtain a tourist visa, which can be acquired upon arrival at international airports or at Bolivian consulates before travel. Requirements include a passport valid for at least six months beyond the planned stay, a completed application form, a passport-sized photo, proof of hotel reservations or a letter of invitation, proof of sufficient funds, a yellow fever vaccination certificate for certain regions, and a visa fee (approximately $160 USD for US citizens, valid for multiple entries over 10 years). The visa process at borders can be time-consuming and inconsistent, so obtaining one in advance is recommended. Australian, Canadian, and UK citizens currently enjoy visa-free entry but should verify current requirements before travel as regulations change frequently. Overstaying a visa can result in significant fines. For those planning to stay longer than 90 days or for non-tourism purposes, different visa categories apply and should be arranged before arrival.",
    budget: {
      budget: "Bs 150-300 ($22-44 USD) per day for budget accommodations in hostels or basic hotels, eating at local markets or simple restaurants, and using public transportation",
      midRange: "Bs 300-600 ($44-87 USD) per day for mid-range hotels, dining at good restaurants, domestic flights between cities, and guided tours to major attractions",
      luxury: "Bs 600+ ($87+ USD) per day for boutique or luxury hotels, fine dining experiences, private guides and drivers, and premium tours including aerial views of Salar de Uyuni"
    },
    transportationOptions: [
      "Micros & Trufis - Small buses and shared taxis that operate on fixed routes within cities, identifiable by route numbers displayed on windshields",
      "Buses - Long-distance buses connect major cities with varying quality from basic to 'full cama' services with fully reclining seats for overnight journeys",
      "Domestic Flights - Essential for covering long distances efficiently, with regular services between major cities operated primarily by Boliviana de Aviación",
      "Trains - Limited but scenic routes including the Expreso del Sur between Oruro and Villazón (Argentinian border) and connections to eastern Bolivia",
      "4x4 Tours - Necessary for accessing remote attractions like Salt Flats, Eduardo Avaroa Reserve, and rural communities, usually arranged through tour operators"
    ],
    neighboringCountries: [
      "Brazil (to the north and east)",
      "Paraguay (to the southeast)",
      "Argentina (to the south)",
      "Chile (to the southwest)",
      "Peru (to the northwest)"
    ]
  };
  
  // Tags for recommender system
  const tags = [
    "Natural Wonders", "Indigenous Culture", "High Altitude", "Adventure Travel", "Andean Landscapes",
    "Salt Flats", "Colonial Architecture", "Biodiversity", "Off the Beaten Path", "Budget Travel"
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

export default BoliviaCountry; 