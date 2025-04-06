import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ChileCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Chile",
    slug: "chile",
    continent: "South America",
    capital: "Santiago",
    languageOfficial: "Spanish",
    languagesSpoken: ["Spanish", "Mapudungun", "Aymara", "Quechua", "Rapa Nui"],
    currency: "Chilean Peso (CLP)",
    population: 19400000,
    area: 756102,
    timeZones: ["UTC-4 (CLT), UTC-6 (EAST)"],
    callingCode: "+56",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/13/14/15/chile-162255_1280.png",
    description: "Chile, stretching over 4,300 kilometers (2,670 miles) along South America's western edge, presents one of the world's most extraordinary geographic profiles. This slender nation, never more than 240 kilometers wide at any point, encompasses a remarkable diversity of landscapes—from the world's driest desert in the north to massive glacial fields in the south, with a fertile Mediterranean heartland and the imposing Andes Mountains forming a natural border to the east. Beyond its natural wonders, Chile has emerged as one of Latin America's most stable and prosperous nations, balancing a rich indigenous heritage with European influences and contemporary cosmopolitan development. This unique combination of natural beauty, cultural diversity, and modern infrastructure makes Chile an increasingly popular destination for travelers seeking both adventure and comfort.",
    whyVisit: "Chile rewards visitors with extraordinary natural diversity within a relatively accessible and well-developed travel environment. Adventure travelers can explore the otherworldly landscapes of the Atacama Desert, hike among the soaring peaks of Patagonia's Torres del Paine, or witness marine wildlife along the country's extensive Pacific coastline. Cultural enthusiasts will appreciate Santiago's dynamic arts scene, the distinctive architecture of port city Valparaíso, and opportunities to engage with living indigenous traditions. Culinary travelers can sample world-class wines from the Central Valley, fresh seafood from Chile's 4,000-kilometer coastline, and distinctive regional specialties. With excellent transportation infrastructure, a range of accommodation options in most tourist regions, and a reputation for safety compared to many Latin American destinations, Chile offers an outstanding combination of exotic experiences and travel comfort.",
    bestTimeToVisit: {
      text: "Chile's extreme length creates distinct climate zones that influence the optimal visiting times for different regions. December through February (summer) offers the most reliable weather for visiting Patagonia and the Lake District in the south, when temperatures are milder and daylight hours extended. The central region, including Santiago and the wine country, enjoys a pleasant Mediterranean climate, making spring (September-November) and fall (March-May) particularly appealing with mild temperatures and fewer tourists. The northern Atacama Desert can be visited year-round due to its extremely dry climate, though temperature variations between day and night can be extreme. Easter Island has its best weather from December to March but receives visitors throughout the year. Skiing in the Andes is excellent from June to August, providing a counterpoint to the Northern Hemisphere's summer season.",
      months: ["November", "December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Summer (December-February) in Chile varies dramatically by region. Central Chile, including Santiago and the wine valleys, experiences warm, dry conditions with temperatures typically ranging from 25-35°C (77-95°F), creating perfect conditions for beach visits and vineyard tours. Northern Chile, including the Atacama Desert, sees hot daytime temperatures exceeding 30°C (86°F) but cool nights around 15°C (59°F). This season offers Patagonia's best weather, with temperatures between 10-20°C (50-68°F) and extended daylight hours, making it the prime hiking season despite occasional strong winds. Easter Island enjoys warm temperatures around 23-28°C (73-82°F) with higher humidity. Summer constitutes Chile's high tourism season, especially in Patagonia where advance reservations for accommodation and trekking permits are essential.",
      winter: "Winter (June-August) transforms Chile's diverse regions in contrasting ways. The central zone experiences mild, rainy conditions with temperatures in Santiago ranging from 3-15°C (37-59°F), while coastal areas remain slightly warmer. This season brings prime skiing conditions to multiple Andean resorts near Santiago and throughout the Lake District. Southern Chile, including Patagonia, experiences cold conditions with temperatures often falling below freezing, heavy snowfall limiting accessibility to many trails, and significantly reduced tourism services. The northern Atacama remains dry with pleasant daytime temperatures around 20°C (68°F) but nights that can approach freezing. Winter offers significantly lower visitor numbers in most regions except ski destinations, creating opportunities for solitude and lower prices, though some remote facilities close entirely.",
      spring: "Spring (September-November) heralds Chile's reawakening with gradually warming temperatures and blooming landscapes. The central region becomes particularly appealing as temperatures settle in the comfortable 15-25°C (59-77°F) range, countryside explodes with wildflowers, and wine valleys turn vividly green. This shoulder season offers excellent value before summer crowds arrive. Northern Chile maintains consistent desert conditions, while Patagonia gradually becomes more accessible as snow melts and temperatures increase, though trail conditions can remain muddy and weather unpredictable. The Chilean Independence Day celebrations in mid-September bring festivals throughout the country, particularly in the central region. Spring generally offers good value, increasing accessibility to southern regions, and comfortable conditions for exploring central Chile's cultural and viticultural attractions.",
      fall: "Fall (March-May) provides some of Chile's most pleasant travel conditions. Central Chile enjoys temperatures gradually cooling from summer peaks to the comfortable 10-20°C (50-68°F) range, with clear skies predominating and autumn colors enhancing the wine valleys. This harvest season creates exciting winery visits with grape harvesting and processing. Patagonia displays spectacular fall foliage through April, with gradually decreasing temperatures and diminishing crowds making it an excellent time for photography and wildlife viewing before many facilities close for winter. The northern Atacama continues offering stable conditions. Easter Island sees gradually decreasing humidity and temperatures. Fall represents an excellent combination of reasonable weather, reduced crowds, harvest festivals in wine regions, and vibrant autumn landscapes, particularly in the Lake District and Patagonia."
    },
    majorCities: [
      {
        name: "Santiago",
        description: "Chile's capital and largest city nestles in a valley surrounded by the snow-capped Andes, creating a dramatic backdrop for this sophisticated metropolis of 7 million. The city balances colonial architecture and historic neighborhoods with gleaming modern skyscrapers, particularly in the Las Condes business district. Cultural highlights include the acclaimed Pre-Columbian Art Museum, La Moneda Presidential Palace, and the panoramic views from San Cristóbal Hill. Santiago's culinary scene has blossomed in recent years, with innovative restaurants, vibrant food markets like Mercado Central, and proximity to several prestigious wine regions. Despite occasional air pollution issues typical of cities situated in valleys, Santiago offers an excellent introduction to Chilean culture, sophisticated infrastructure, and convenient access to both Pacific beaches and Andean ski resorts within 1-2 hours' drive."
      },
      {
        name: "Valparaíso",
        description: "This colorful UNESCO World Heritage port city sprawls across dozens of steep hillsides overlooking the Pacific Ocean, creating a bohemian labyrinth of cobblestone alleys, striking street art, and historic funiculars. Once South America's most important Pacific port before the Panama Canal's opening, Valparaíso combines fading maritime grandeur with vibrant artistic renaissance. The city divides into the flat Plan district with its banking and business focus, and the more characterful Cerros (hills) with their distinctive personalities, brightly painted houses, and panoramic viewpoints. Pablo Neruda's quirky La Sebastiana house-museum offers insight into Chile's beloved poet, while the city's thriving street art culture produces ever-changing murals. Just 120km from Santiago, Valparaíso provides a striking architectural and cultural counterpoint to the capital's more ordered environment, embodying a creative, slightly chaotic spirit that has long attracted artists, writers, and musicians."
      },
      {
        name: "Concepción",
        description: "Chile's second-largest urban area serves as the capital of the Bío Bío Region and the commercial and cultural heart of southern Chile. Founded in 1550, the city has been repeatedly rebuilt after earthquakes and tsunamis, resulting in primarily modern architecture. Today, Concepción thrives as a university city with a vibrant cultural scene, particularly in music, with the rock en español movement having deep roots here. The nearby coast offers excellent beaches, while the confluence of the Bío Bío and Andalién rivers creates scenic urban waterways. The city provides a less touristy glimpse into contemporary Chilean life than Santiago or Valparaíso, with authentic seafood restaurants, regional museums highlighting indigenous Mapuche heritage, and access to the less-visited Lakes District and Araucanía region. Concepción offers visitors the opportunity to experience a working Chilean city where tourism doesn't dominate the local economy."
      },
      {
        name: "Antofagasta",
        description: "This major port city in northern Chile serves as the gateway to the Atacama Desert and the mining heart of the country's copper industry. Set between the Pacific Ocean and stark coastal mountains, Antofagasta combines prosperous modernism from mining wealth with historic elements from its boom period during the nitrate era. The city features Chile's tallest building outside Santiago (the Torre Empresarial), a restored English-built clock tower reminiscent of Big Ben, and La Portada—a dramatic natural stone arch just offshore. The remarkably arid climate creates constant mild temperatures around 15-25°C (59-77°F) year-round, though the ocean remains surprisingly cold due to the Humboldt Current. Most travelers use Antofagasta as a jumping-off point for desert adventures rather than a destination itself, though the city's unusual blend of wealth, isolation, and stark natural surroundings creates a distinctive atmosphere unlike other Chilean urban centers."
      },
      {
        name: "Punta Arenas",
        description: "Chile's southernmost major city stands on the Strait of Magellan as a former trading powerhouse that once ranked among South America's wealthiest cities during the pre-Panama Canal shipping era. This remote city of colorful metal-sided houses, European architecture, and sculptural cypress trees bent from the constant Patagonian wind serves as the gateway to southern Patagonia. Once a vital coaling station for ships rounding Cape Horn, today Punta Arenas connects visitors to multiple natural attractions: the penguin colony at Magdalena Island, Torres del Paine National Park, and expedition cruises to Antarctica. The city's fascinating history emerges in its ornate European mansions built by wool barons and shipping magnates, cemeteries with elaborate mausoleums, and museums documenting indigenous peoples and Antarctic exploration. Despite its isolated location, Punta Arenas offers surprisingly sophisticated cultural offerings and excellent seafood dining in a setting that feels genuinely distinct from central Chile."
      }
    ],
    famousFor: [
      "Torres del Paine - Iconic granite peaks and glacial lakes in Patagonia",
      "Atacama Desert - World's driest desert with otherworldly landscapes",
      "Easter Island (Rapa Nui) - Remote Pacific island with mysterious moai statues",
      "Chilean Wine - World-class vineyards specializing in Carmenere and Cabernet Sauvignon",
      "Chiloé Island - Distinctive wooden churches and unique folklore traditions"
    ],
    topAttractions: [
      {
        name: "Torres del Paine National Park",
        description: "This iconic Patagonian wilderness showcases some of South America's most dramatic landscapes, centered around the distinctive granite peaks that give the park its name. Covering over 181,000 hectares, the UNESCO Biosphere Reserve features an extraordinary concentration of natural wonders: turquoise lakes, massive glaciers, emerald forests, roaring waterfalls, and golden pampas grasslands where guanacos graze freely. The park's crown jewels, the three granite towers, rise vertically over 2,000 meters, creating one of the continent's most recognizable vistas. Popular multi-day treks include the W Circuit and more challenging O Circuit, while day trips allow visitors to experience key viewpoints. Wildlife includes Andean condors, South American pumas, and huemul deer. Despite growing popularity necessitating advance reservations during peak summer season, the park's vastness still permits solitude amidst breathtaking alpine scenery.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Atacama Desert",
        description: "The world's driest non-polar desert creates an otherworldly landscape of salt flats, geysers, colorful mineral-laden mountains, and high-altitude lakes in northern Chile. This 105,000-square-kilometer expanse receives less than 1mm of rainfall annually in some sectors, creating Mars-like terrain that NASA has used to test instruments destined for the red planet. Key attractions include the Valle de la Luna (Moon Valley) with its dramatic sunset colors, El Tatio geyser field where thermal fountains erupt at dawn, and the startlingly blue Miscanti and Miñiques lagoons situated at over 4,000 meters elevation. The desert's exceptional atmospheric clarity has attracted the world's most advanced astronomical observatories, with several offering visitor programs. The charming oasis town of San Pedro de Atacama serves as the primary base for exploring this surreal region, where extraordinary geological features stand starkly against some of Earth's clearest skies.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Easter Island (Rapa Nui)",
        description: "This remote volcanic island 3,700 kilometers from mainland Chile preserves one of humanity's most intriguing archaeological mysteries. Famous for its monolithic moai statues—nearly 900 stone figures averaging 4 meters tall and weighing 14 tons—the island represents the most isolated inhabited territory on Earth. These remarkable sculptures were carved by the Rapa Nui civilization between the 13th and 16th centuries, then transported miles to ceremonial platforms (ahu) primarily along the coastline, representing a remarkable feat of engineering whose exact methods remain debated. Beyond the iconic statues, the island features volcanic craters, ceremonial villages, rock art, and beautiful beaches. Now home to around 7,700 residents and designated a UNESCO World Heritage site, Rapa Nui balances tourism with cultural preservation efforts, maintaining Polynesian traditions that developed in extraordinary isolation and survived ecological collapse that decimated the original civilization before European contact.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Chilean Wine Valleys",
        description: "Chile's fertile central region produces some of the world's most acclaimed wines, with distinct valleys offering different terroirs and visitor experiences within easy reach of Santiago. The Maipo Valley, closest to the capital, specializes in outstanding Cabernet Sauvignon, while the cooler coastal Casablanca Valley has gained renown for exceptional white wines and Pinot Noir. Further south, Colchagua Valley produces robust reds in a picturesque setting with excellent tourist infrastructure, including wine trains and numerous tasting rooms. The country's signature grape, Carmenère, disappeared from European vineyards but was rediscovered in Chile in 1994, becoming a symbol of Chilean viticulture. Wine tourism has developed rapidly, with many vineyards offering architecture as impressive as their vintages, from ultramodern wineries to colonial haciendas. The Mediterranean climate, dramatic mountain backdrops, and historic estates combine to make these valleys appealing even to visitors who aren't wine enthusiasts.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Chiloé Island",
        description: "This mist-shrouded archipelago in northern Patagonia maintains distinctive cultural traditions developed during centuries of isolation from mainland Chile. Most famous for its wooden churches—16 of which are UNESCO World Heritage sites—Chiloé features unique architectural style using native timber entirely, with characteristic shingled exteriors and boat-building techniques adapted to architecture. The archipelago maintains rich mythology featuring witches, ghost ships, and forest goblins that blend indigenous Huilliche beliefs with colonial Spanish influences. Distinctive cuisine centers around curanto, a seafood and meat feast cooked in earth ovens, while colorful palafitos (houses on stilts) line waterfront areas in towns like Castro and Ancud. The island's windswept landscapes feature dense temperate rainforests, rugged Pacific coastlines, and extensive wetlands important for migratory birds. Despite increasing connections to mainland Chile, including a planned bridge, Chiloé maintains a tangibly different character and pace of life than the rest of the country.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Chilean cuisine combines indigenous traditions with Spanish colonial influences and contributions from European immigrants, adapted to the country's remarkably diverse geography and exceptional agricultural and marine resources. Seafood features prominently along the 4,000-kilometer coastline, with congrio (conger eel), centolla (king crab), and mariscos (shellfish) served in numerous preparations. The fertile Central Valley produces abundant fruits and vegetables, while the Andean regions maintain indigenous cooking traditions using potatoes, corn, and quinoa. Meals typically begin with bread served with pebre (Chilean salsa) or chancho en piedra (spicy tomato sauce), followed by hearty main courses. While not generally spicy by Latin American standards, Chilean cuisine emphasizes fresh ingredients and straightforward preparations that highlight natural flavors, complemented by the country's excellent wines.",
      famousDishes: [
        "Empanadas de Pino - Baked pastries filled with seasoned beef, onions, olives, hard-boiled eggs, and raisins",
        "Curanto - Seafood, meat, and potato feast traditionally cooked in an earth oven, originating from Chiloé Island",
        "Pastel de Choclo - Corn and meat casserole combining ground beef, chicken, olives, and hard-boiled eggs topped with sweetened corn paste",
        "Completo - Chilean-style hot dog loaded with avocado, mayonnaise, tomato, and sauerkraut",
        "Asado - Traditional barbecue featuring various cuts of beef, pork, and lamb with Chilean seasoning"
      ]
    },
    culturalCustoms: [
      "Greetings - Women typically greet with a single kiss on the right cheek, while men use handshakes",
      "Once - Mid-morning or afternoon light meal with coffee/tea and pastries, an important social tradition",
      "Personal Space - Chileans generally stand closer in conversation than North Americans or Northern Europeans",
      "Gift Giving - Bringing wine, pastries, or chocolates when invited to a home is appreciated",
      "Punctuality - Social functions typically start 15-30 minutes later than the stated time"
    ],
    travelTips: [
      "Consider internal flights for long distances - Chile's extreme length makes flying time-efficient",
      "Pack for multiple climates - Temperature variations between regions can be dramatic",
      "Learn basic Spanish phrases - English proficiency varies and decreases outside tourist areas",
      "Bring cash for remote areas - Credit card acceptance is limited in smaller towns and rural regions",
      "Use sunscreen year-round - UV radiation is intense, particularly in the north and at high altitudes",
      "Budget for the reciprocity fee - Some nationalities must pay an entry fee matching what Chileans pay to visit those countries"
    ],
    safetyInfo: "Chile ranks among Latin America's safest countries for travelers, with lower crime rates than many of its neighbors and good standards of public safety. The primary concerns involve petty theft and pickpocketing in crowded tourist areas, particularly in Santiago and Valparaíso, though violent crime against tourists remains rare. Natural hazards include occasional earthquakes, as Chile sits along the Pacific Ring of Fire, though building codes are stringent and the country maintains excellent earthquake preparedness. The tap water is generally safe to drink in urban areas, and the healthcare system provides high-quality care in major cities, with many medical professionals speaking English. Demonstrations occasionally occur in Santiago and other urban centers, typically around the Plaza Italia area; while usually peaceful, travelers should avoid protest areas as a precaution. The emergency number for police is 133, medical emergencies 131, and firefighters 132.",
    sustainableTourism: "Chile has increasingly emphasized sustainable tourism development, with approximately 20% of its territory under some form of environmental protection. The CONAF (National Forest Corporation) manages the country's extensive national park system, implementing visitor management programs to balance access with conservation, particularly in heavily visited areas like Torres del Paine. The government has set ambitious renewable energy targets, with significant investment in solar power in the northern deserts and wind energy in Patagonia. Many lodges and tour operators, particularly in Patagonia and the Atacama, have adopted sustainable practices including grey water recycling, solar power, and locally-sourced food. The Route of Parks initiative in Patagonia, connecting 17 national parks across 2,800 kilometers, emphasizes conservation alongside sustainable development for local communities. Travelers can support these efforts by selecting environmentally certified accommodations, respecting trail closures and wildlife guidelines, and participating in initiatives like reforestation projects in areas affected by wildfires.",
    visaRequirements: "Most visitors from North America, Western Europe, Australia, and many South American countries can enter Chile without a visa for stays up to 90 days for tourism purposes. Upon arrival, travelers receive a Tourist Card (Tarjeta de Turismo) that should be retained until departure. Some nationalities may be required to pay a reciprocity fee matching what Chilean citizens pay when visiting those countries; this fee is typically collected at the airport upon arrival. Passports must be valid for at least six months beyond the planned departure date. Those wishing to stay longer than 90 days must apply for a visa at a Chilean consulate before travel or apply for an extension through the Department of Immigration within Chile. Working holiday visas are available for citizens of certain countries between ages 18-30 or 35, allowing both tourism and limited employment for up to 12 months.",
    budget: {
      budget: "30-60 USD per day for hostel dormitories or budget guesthouses, public transportation, and meals from markets or simple restaurants",
      midRange: "60-150 USD per day for mid-range hotels, occasional private transportation, and dining at moderate restaurants",
      luxury: "150+ USD per day for high-end accommodations, private guides, premium transportation, and fine dining"
    },
    transportationOptions: [
      "Domestic Flights - Essential for covering Chile's extreme length efficiently, with frequent connections between major cities",
      "Buses - Extensive network with excellent quality on main routes, ranging from basic to premium services with fully reclining seats",
      "Metro - Santiago's clean, efficient subway system serves most areas of interest in the capital",
      "Rental Cars - Good option for exploring wine country, Lake District, or areas outside major cities",
      "Ferries - Important connections in southern Chile, particularly around Chiloé and the fjords",
      "Shared Taxis (Colectivos) - Follow fixed routes with multiple passengers, common in cities and between nearby towns"
    ],
    neighboringCountries: [
      "Argentina", "Bolivia", "Peru"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Mountains", "Deserts", "Wine Tourism", "Hiking", "Astronomy", 
    "Indigenous Culture", "Adventure", "UNESCO Sites", "Wildlife", "Remote Islands"
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

export default ChileCountry; 