import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CroatiaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Croatia",
    slug: "croatia",
    continent: "Europe",
    capital: "Zagreb",
    languageOfficial: "Croatian",
    languagesSpoken: ["Croatian", "Serbian", "Italian", "Hungarian", "Czech", "Slovak"],
    currency: "Euro (EUR)",
    population: 3880000,
    area: 56594,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+385",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/10/23/03/croatia-26877_1280.png",
    description: "Croatia offers a remarkable blend of Mediterranean charm and Slavic heritage along its stunning Adriatic coastline and mountainous interior. This crescent-shaped country—independent since 1991 following the dissolution of Yugoslavia—combines over 1,200 islands, pristine beaches, and crystalline waters with well-preserved medieval towns, Roman ruins, and distinctive limestone karst landscapes. From the ancient walled city of Dubrovnik and the Roman palace complex in Split to the cascading waterfalls of Plitvice Lakes and the rolling vineyards of Istria, Croatia showcases both extraordinary natural beauty and thousands of years of complex cultural history shaped by its position at the crossroads of Central Europe, the Balkans, and the Mediterranean world.",
    whyVisit: "Croatia rewards visitors with an exceptional variety of experiences within a relatively compact territory. Coastal destinations offer a unique alternative to more crowded Mediterranean hotspots, combining crystal-clear waters with remarkable historic towns where everyday life unfolds amid ancient Roman remains and Venetian-era stone buildings. Gastronomes will appreciate the distinctive regional cuisines that blend Adriatic seafood with Central European, Italian, and Balkan influences, complemented by increasingly acclaimed local wines. Nature enthusiasts can explore eight national parks protecting diverse ecosystems from karst mountains to island archipelagos. With excellent infrastructure, strong English proficiency among locals, and a tourism industry that expertly balances authenticity with visitor comfort, Croatia provides a perfect introduction to the richness of the Western Balkans region.",
    bestTimeToVisit: {
      text: "The optimal time to visit Croatia largely depends on your interests and which regions you plan to explore. The coastal areas, including Dalmatia and Istria, enjoy a typical Mediterranean climate with peak tourist season running from June through August, when warm temperatures (averaging 26-30°C/79-86°F) create ideal swimming conditions but also bring larger crowds and higher prices. The shoulder seasons of May and September offer excellent compromises with pleasant weather, warmer sea temperatures than spring, and significantly fewer visitors. Inland regions, including Zagreb and Slavonia, experience more continental weather patterns with broader temperature ranges. For urban exploration, spring (April-May) and fall (September-October) provide the most comfortable conditions. Winter visits focus primarily on Zagreb, which hosts a charming Christmas market, and the skiing areas in the mountainous regions, while the coast becomes very quiet with reduced services but peaceful beauty.",
      months: ["May", "June", "September", "October"]
    },
    weatherInfo: {
      summer: "Summer (June-August) brings hot, sunny conditions to Croatia's Adriatic coast with temperatures typically ranging from 26-32°C (79-90°F), abundant sunshine, and minimal rainfall. The clear, calm waters reach their warmest temperatures in July and August, making this the prime season for swimming and water sports despite being the most crowded and expensive period. Interior regions, including Zagreb, experience warm continental summer conditions with temperatures averaging 22-28°C (72-82°F) but higher humidity and occasional thunderstorms. The islands enjoy the most reliable summer weather, often with refreshing afternoon maestral (westerly) winds providing relief from heat. This peak season sees Croatia's coastal towns fully animated with festivals, outdoor dining, and extended business hours, though popular destinations like Dubrovnik and Hvar can become extremely crowded, particularly when cruise ships arrive.",
      winter: "Winter (December-February) transforms Croatia into distinct climate zones. The Adriatic coast experiences mild Mediterranean winters with daytime temperatures typically ranging from 8-13°C (46-55°F), though the cold bura wind can occasionally bring brief freezing periods and temperature drops. While many coastal businesses close for the season, cities like Split and Dubrovnik maintain a quiet authentic charm with primarily local populations. Inland areas, including Zagreb, experience true continental winter conditions with temperatures often falling below freezing, occasional snow, and considerably shorter daylight hours. The capital compensates with a festive atmosphere, particularly during its award-winning Advent season. Mountain regions like Gorski Kotar receive substantial snowfall, supporting winter sports. This off-season period offers significantly lower accommodation prices and opportunities to experience Croatian daily life without tourist crowds.",
      spring: "Spring (March-May) brings a gradual reawakening to Croatia as winter retreats and temperatures steadily rise. Coastal areas see increasing sunshine with temperatures climbing from 14-18°C (57-64°F) in March to a pleasant 20-25°C (68-77°F) by May, though the Adriatic remains too cool for comfortable swimming until late spring. This season showcases spectacular wildflowers, particularly across inland meadows and Plitvice Lakes National Park, where waterfalls reach maximum flow from snowmelt. Easter celebrations provide cultural insight throughout the country, while coastal towns gradually reopen tourist facilities. Spring offers excellent conditions for activities like hiking, cycling, and sightseeing without summer crowds, though visitors should expect occasional rainfall, particularly in April. This shoulder season combines good value with comfortable temperatures and natural beauty, making it ideal for active exploration.",
      fall: "Fall (September-November) represents perhaps Croatia's most balanced season. September retains much of summer's warmth, with coastal temperatures averaging 22-26°C (72-79°F) and sea temperatures remaining comfortable for swimming, yet with noticeably fewer crowds after the school holidays end. October brings brilliant fall colors to continental regions and cooler temperatures ideal for hiking and city exploration. Coastal areas gradually wind down through November as some businesses close for winter, though major cities maintain services year-round. This season features harvest festivals in wine regions like Istria and Slavonia, while truffle hunting reaches its peak in the Istrian forests. Rainfall increases as fall progresses, particularly in November, but creates atmospheric conditions for photography and relaxed cultural experiences. Fall combines reasonable prices with pleasant conditions and harvest bounty, making it especially appealing for culinary-focused travel."
    },
    majorCities: [
      {
        name: "Zagreb",
        description: "Croatia's capital and largest city offers a Central European charm distinct from the country's more visited coastal destinations. The historic Upper Town (Gornji Grad) features cobblestone streets, colorful Austro-Hungarian architecture, the Gothic Zagreb Cathedral, and the quirky Museum of Broken Relationships, while the Lower Town (Donji Grad) showcases elegant 19th-century buildings, inviting parks, and numerous museums. Unlike many European capitals, Zagreb maintains an authentic local character with bustling markets, distinctive café culture encouraging lingering over coffee, and vibrant street life throughout the year. The city particularly comes alive during its Advent season, regularly voted Europe's best Christmas market. With excellent dining, thriving arts, and significantly lower prices than coastal destinations, Zagreb rewards visitors with genuine urban experiences beyond the typical Croatian postcard images."
      },
      {
        name: "Split",
        description: "This vibrant coastal city grew outward from the remarkable Diocletian's Palace, a UNESCO-listed Roman complex where over 3,000 people still live and work within ancient walls. Unlike more museum-like historic centers, Split's old town functions as a living city where laundry hangs alongside 1,700-year-old Roman columns and bustling cafés occupy ancient peristyles. The stylish Riva waterfront promenade, where locals participate in the daily ritual of špica (seeing and being seen), leads to Marjan Hill's hiking trails and beaches. Split balances its remarkable heritage with a distinctly Mediterranean pace and contemporary energy from its large student population. As Dalmatia's largest city and transportation hub, Split provides an excellent base for exploring central Dalmatian islands via frequent ferry connections. Despite rapidly growing tourism, the city maintains authentic daily rhythms beyond the summer high season."
      },
      {
        name: "Dubrovnik",
        description: "The 'Pearl of the Adriatic' features one of the world's most perfectly preserved medieval walled cities, rising dramatically from limestone cliffs above crystal-clear waters. This UNESCO World Heritage site encompasses intact 16th-century defensive walls circling a pedestrian-only old town of baroque churches, aristocratic palazzi, and intimate squares connected by steep stepped alleyways. While internationally renowned (and increasingly visited due to Game of Thrones filming locations), Dubrovnik offers remarkable historical immersion and cultural sophistication. The Stradun, its marble main street, hosts elegant architecture and people-watching opportunities, while the walls provide spectacular city and sea views. Though extremely crowded during summer months, particularly when cruise ships dock, the city reveals more authentic experiences during mornings, evenings, and shoulder seasons. Beyond the old town, the surrounding Lapad Peninsula offers beaches, hiking trails, and accommodation alternatives with city views."
      },
      {
        name: "Rijeka",
        description: "Croatia's principal seaport and third-largest city presents a grittier, more industrial character than typical tourist destinations, blending working port functions with surprising cultural depth. The city's history as part of the Austro-Hungarian Empire, Italy, and Yugoslavia created an architectural mixture from baroque to brutalist, with distinctly multicultural influences. Named a European Capital of Culture in 2020, Rijeka offers notable museums, a vibrant alternative music scene, and the country's most exuberant carnival celebrations. The attractive Korzo pedestrian promenade serves as the city's living room, while nearby Trsat Castle provides panoramic views of the Kvarner Bay. With fewer international visitors than coastal resorts, Rijeka offers authentic urban experiences and access to the diverse Kvarner region, including islands like Krk and Cres. Its relative affordability and student population contribute to a lively atmosphere throughout the year."
      },
      {
        name: "Zadar",
        description: "This historic coastal city successfully balances significant Roman and Venetian heritage with award-winning contemporary urban design, creating one of Croatia's most livable and interesting urban environments. The compact peninsula-situated old town features ancient Roman ruins alongside medieval churches with distinctive red-tiled roofs, all connected by polished stone streets that have been walked for millennia. What distinguishes Zadar is its innovative integration of modern installations with historic settings—most notably the Sea Organ, which creates haunting music from wave action, and the Sun Salutation, a light display powered by solar panels. These installations have transformed the city's waterfront into a public space that fascinates both visitors and residents. With fewer overseas tourists than Dubrovnik or Split but excellent ferry connections to nearby islands and national parks, Zadar offers authentic experiences with easier access and lower prices than southern Dalmatian destinations."
      }
    ],
    famousFor: [
      "Dubrovnik Old Town - Perfectly preserved medieval walled city on the Adriatic",
      "Plitvice Lakes National Park - Cascading lakes and waterfalls connected by wooden walkways",
      "Historic Split - Roman emperor Diocletian's palace transformed into a living city",
      "Dalmatian Islands - Over 1,000 islands with unique character, from Hvar's nightlife to Vis's secluded beaches",
      "Istrian Gastronomy - Truffles, olive oil, and wines from the heart-shaped northern peninsula"
    ],
    topAttractions: [
      {
        name: "Plitvice Lakes National Park",
        description: "Croatia's most visited inland destination showcases a remarkable karst landscape where 16 lakes cascade into each other through travertine barriers, creating hundreds of waterfalls within lush forest. Designated as a UNESCO World Heritage site since 1979, the park encompasses 296.85 square kilometers of protected wilderness where wooden boardwalks allow visitors to walk directly over crystalline waters teeming with trout and alongside waterfalls ranging from delicate curtains to thundering cascades. The lakes display an otherworldly azure color resulting from mineral content and specialized microorganisms, with hues shifting from emerald to deep blue depending on mineral deposits and sunlight. Beyond the lake system, the park protects extensive beech and pine forests harboring bears, wolves, and numerous bird species. Though extraordinarily popular during summer months, the park's seasonal transformations—from spring's maximum water flow to winter's frozen waterfalls—reward year-round visits.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Diocletian's Palace",
        description: "This extraordinary Roman imperial complex in Split represents one of the ancient world's most impressive architectural achievements still in daily use. Built between 295-305 CE as Emperor Diocletian's retirement residence, the massive structure combines elements of a luxury villa, military fortress, and typical Roman city within its 38,000-square-meter rectangular plan. Unlike most ancient sites, Diocletian's Palace remains the living heart of Split, where approximately 3,000 people reside and work within walls that have been continuously inhabited for 1,700 years. The palace's substructures (basements), remarkably preserved Jupiter's Temple, and grand Peristyle square showcase original Roman elements, while the medieval transformations—particularly the Cathedral of Saint Domnius created within Diocletian's mausoleum—demonstrate the site's extraordinary historical layering. Rather than experiencing the complex as a conventional archaeological site, visitors can explore vibrant streets, markets, restaurants, and shops operating within ancient walls, offering unique insight into adaptive reuse of heritage structures.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Dubrovnik City Walls",
        description: "These massive defensive fortifications encircling Dubrovnik's old town represent the most complete and impressive medieval wall system in Europe, extending 1,940 meters and reaching heights up to 25 meters. Constructed primarily between the 12th and 17th centuries, the walls include five fortresses, 17 towers, and multiple bastions designed to protect the wealthy maritime republic from various threats. Walking the complete circuit—which takes approximately two hours—offers spectacular views over the city's distinctive orange rooftops, the shimmering Adriatic, and nearby Lokrum Island. The walls incorporate Fort Lovrijenac, an impressive detached fortress on a 37-meter cliff, connected to the main system by a drawbridge. Beyond their defensive purpose, the walls represent Dubrovnik's remarkable historical achievement as an independent city-state that maintained freedom through diplomatic skill and strategic defenses. Though extremely popular during summer months, early morning or late afternoon visits provide quieter experiences with dramatic lighting for photography.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Hvar Town",
        description: "This glamorous harbor town on Croatia's sunniest island combines spectacular natural settings with Venetian architectural elegance, creating one of the Adriatic's most appealing destinations. The harmonious main square (St. Stephen's Square), the largest in Dalmatia, opens directly to the harbor and features the Renaissance-era Cathedral of St. Stephen alongside other historic buildings. Rising above the town, the Fortica (Spanish Fortress) offers panoramic views over the town and Pakleni Islands, an archipelago of wooded islets with secluded beaches accessible by taxi boat. Hvar's reputation for nightlife and luxury attracts celebrities and yachting crowds during summer, though the surrounding countryside offers contrasting experiences including abandoned stone villages, lavender fields, and ancient agricultural patterns dating from Greek colonization. The island's interior provides excellent hiking, cycling, and wine tasting opportunities, with distinctive local varieties including Bogdanuša and Prč growing in UNESCO-protected vineyard plains that have maintained continuous cultivation for 2,400 years.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Rovinj",
        description: "This former Venetian island-town on Istria's western coast presents one of Croatia's most romantic urban landscapes, with densely packed pastel-colored houses rising directly from the sea toward the landmark St. Euphemia Church tower. Originally built on an island that was later connected to the mainland, Rovinj maintains an insular charm with narrow cobblestone streets too tight for vehicles, intimate squares, and picturesque fishing harbor. The town's strong Italian heritage remains evident in the bilingual signage, distinctive Venetian architectural elements, and culinary influences. Beyond the old town, the protected Zlatni Rt (Golden Cape) forest park offers Mediterranean pine woods, swimming areas, and walking paths along the indented coastline. Rovinj serves as an excellent base for exploring Istria's interior, known for hilltop medieval towns, truffle-hunting forests, and vineyard-covered valleys. The town balances tourism development with authentic local life, particularly evident in the daily fish market and working artists' studios throughout the historic center.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Croatian cuisine reflects the country's position at the historical crossroads of Mediterranean, Central European, and Balkan culinary influences, with distinct regional traditions. Coastal areas feature Italian-influenced seafood preparations using simple grilling methods with olive oil, garlic, and Mediterranean herbs to highlight the exceptional quality of Adriatic fish and shellfish. The Istrian peninsula is renowned for truffles, wild asparagus, award-winning olive oils, and prosciutto similar to nearby Italian regions. Interior regions maintain Central European traditions with hearty meat dishes, stews, and freshwater fish preparations. Eastern Slavonia showcases spicier Balkan influences with paprika-laden stews and grilled meats. Throughout the country, meals typically begin with aperitifs—often homemade rakija (fruit brandy)—and usually involve multiple courses served at a leisurely pace, reflecting the country's relaxed attitude toward dining as a social experience rather than mere nourishment.",
      famousDishes: [
        "Peka - Meat or seafood with vegetables slow-cooked under a bell-shaped dome covered with hot coals",
        "Črni Rižot - Black risotto colored with cuttlefish ink, containing various seafood",
        "Pašticada - Marinated beef slow-cooked with prunes, vegetables and wine, served with gnocchi",
        "Strukli - Baked or boiled pastry filled with cottage cheese, popular in Zagreb and northern regions",
        "Brudet - Fisherman's stew cooked with multiple types of fish, similar to Italian brodetto or French bouillabaisse"
      ]
    },
    culturalCustoms: [
      "Coffee Culture - Coffee drinking is a leisurely social activity often lasting hours, never rushed",
      "Pomalo - Dalmatian philosophy meaning 'take it easy' or 'slowly', reflecting relaxed coastal attitude",
      "Greeting Customs - Close friends typically exchange three alternating cheek kisses",
      "Shoes Removal - Many Croatian homes observe the custom of removing shoes upon entering",
      "Rakija Offering - Homemade fruit brandy often offered as a welcome drink, declining can be impolite"
    ],
    travelTips: [
      "Book accommodation early for July-August - Coastal destinations fill quickly during peak season",
      "Carry cash outside major cities - Credit card acceptance varies in smaller locations",
      "Consider shoulder seasons - May-June and September offer excellent weather with fewer crowds",
      "Respect covered clothing guidelines - When visiting churches, shoulders and knees should be covered",
      "Use catamaran services - High-speed boat connections between coastal cities often save time over buses",
      "Try local wines - Indigenous varieties like Plavac Mali and Malvazija offer unique tasting experiences"
    ],
    safetyInfo: "Croatia ranks among Europe's safest countries for travelers, with low rates of violent crime and generally excellent public safety. The primary concerns involve petty theft in crowded tourist areas, particularly in high season, and occasional pickpocketing on public transportation. Areas near the borders with Bosnia and Serbia still contain some landmine fields from the 1990s conflicts, though these are clearly marked and far from tourist destinations. Visitors should exercise caution when swimming, as some beaches have strong currents, and beach rescue services are not universal. The Adriatic's crystalline waters can create depth perception challenges for inexperienced swimmers. The country's healthcare system provides good quality care, with many medical professionals speaking English, though comprehensive travel insurance is recommended. The European emergency number 112 connects to assistance throughout the country.",
    sustainableTourism: "Croatia has increasingly focused on sustainable tourism development to address challenges from rapidly growing visitor numbers, particularly in UNESCO sites like Dubrovnik and Plitvice Lakes. Both destinations have implemented visitor management systems including daily capacity limits. The country has established numerous protected areas, with national parks covering approximately 9% of Croatian territory and maintaining strict conservation measures. Sustainable travel initiatives include Blue Flag certification for numerous beaches, recognition of eco-friendly accommodations, and promotion of agritourism in rural areas to distribute tourism benefits beyond coastal hotspots. The government has invested significantly in cycling infrastructure, creating extensive route networks particularly in Istria and along the Danube. Travelers can support sustainability by visiting outside peak season, exploring less-visited regions like Slavonia, choosing locally-owned accommodations, and participating in activities that preserve traditional practices such as olive oil production, fishing, and small-scale agriculture.",
    visaRequirements: "Croatia became the newest member of both the European Union's Schengen Zone and Eurozone on January 1, 2023, simplifying travel procedures. Citizens of EU countries, the United States, Canada, Australia, and many other nations can enter Croatia without a visa for stays up to 90 days within a 180-day period. Visitors must have a passport valid for at least three months beyond their planned departure date and may need to show proof of sufficient funds and accommodation. Non-EU nationals should ensure their passports are stamped upon entry to document their stay duration accurately. Those wishing to stay longer than 90 days must apply for temporary residence permits at Croatian embassies before arrival or, in some cases, at police stations within Croatia. Requirements change periodically, so verifying current regulations through official sources before travel is recommended.",
    budget: {
      budget: "30-60 EUR per day for hostel accommodations, public transportation, self-catering, and budget restaurants",
      midRange: "60-150 EUR per day for mid-range hotels, private transportation, restaurant dining, and paid attractions",
      luxury: "150+ EUR per day for luxury accommodations, premium experiences, fine dining, and private tours"
    },
    transportationOptions: [
      "Bus Network - Extensive services connecting most towns and cities with modern, comfortable coaches",
      "Ferry System - Critical connections along the coast and to islands, with both car ferries and faster catamarans",
      "Rental Cars - Excellent road infrastructure makes driving straightforward, though summer traffic on coastal roads can be heavy",
      "Domestic Flights - Limited but useful services connecting Zagreb with Split, Dubrovnik, and other coastal cities",
      "Uber/Bolt - Available in major cities and some tourist areas, often more affordable than traditional taxis",
      "Bicycles - Increasingly developed cycling infrastructure, particularly in Istria and along dedicated EuroVelo routes"
    ],
    neighboringCountries: [
      "Slovenia", "Hungary", "Serbia", "Bosnia and Herzegovina", "Montenegro", "Italy (maritime border)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Islands", "Historic Cities", "Beaches", "National Parks", "UNESCO Sites", 
    "Mediterranean Cuisine", "Sailing", "Roman Ruins", "Waterfalls", "Wine Regions"
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

export default CroatiaCountry; 