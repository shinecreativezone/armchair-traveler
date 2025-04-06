import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CaboVerdeCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Cabo Verde",
    slug: "cabo-verde",
    continent: "Africa",
    capital: "Praia",
    languageOfficial: "Portuguese",
    languagesSpoken: ["Portuguese", "Cabo Verdean Creole (Kriolu)"],
    currency: "Cabo Verdean Escudo (CVE)",
    population: 556857,
    area: 4033,
    timeZones: ["GMT-1 (CVT)"],
    callingCode: "+238",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Cabo Verde is an archipelago of ten volcanic islands in the Atlantic Ocean, located 570 kilometers off Africa's west coast. Known for its Creole Portuguese-African culture, striking mountainous landscapes, and stunning beaches, this island nation harmoniously blends African, Portuguese, and Brazilian influences in its music, cuisine, and traditions. Despite its small size, Cabo Verde offers diverse experiences from desert-like flatlands to lush mountain valleys, all surrounded by crystal-clear waters.",
    whyVisit: "Cabo Verde offers visitors a unique blend of African, European, and Brazilian influences that create a culturally rich atmosphere unlike anywhere else in Africa. The archipelago's dramatic volcanic landscapes span from black sand beaches beneath towering peaks to vast salt flats and expansive golden dunes, providing exceptional diversity within a relatively small geographical area. Visitors enjoy perfect year-round temperatures averaging 25-30°C (77-86°F) with minimal rainfall, creating ideal conditions for beach relaxation, water sports, and hiking adventures throughout the islands. World-class wind conditions, particularly on Sal and Boa Vista, attract kitesurfing and windsurfing enthusiasts internationally, while pristine waters offer exceptional diving and whale watching opportunities, including encounters with nesting loggerhead turtles. Musically inclined travelers appreciate Cabo Verde as the birthplace of morna—a haunting, bluesy style made internationally famous by singer Cesária Évora—alongside other distinctive genres performed nightly in local taverns. The nation's peaceful political climate, relative prosperity, and well-developed tourism infrastructure make it one of Africa's safest and most accessible destinations, while the genuinely warm hospitality of Cabo Verdeans creates an atmosphere where visitors feel welcomed rather than merely tolerated. Each island maintains its own distinct character, creating multiple experiences within a single destination conveniently accessible via short flights or ferry connections.",
    bestTimeToVisit: {
      text: "Cabo Verde enjoys a pleasant climate year-round with temperatures ranging from an average low of 20°C (68°F) to highs around 29°C (84°F). The islands are generally dry with minimal rainfall, particularly from November to July. August to October sees occasional rainfall, though usually in short bursts. For water sports enthusiasts, the windiest period from November to March offers ideal conditions for kitesurfing and windsurfing. Cultural festivals are most vibrant during February (Carnival) and August-September (various municipal festivals).",
      months: ["November", "December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Summer (June to September) brings warm temperatures ranging from 24-29°C (75-84°F) across the islands. The eastern islands of Sal, Boa Vista, and Maio experience slightly higher temperatures and more arid conditions, while western islands like Santo Antão and São Nicolau benefit from slightly cooler temperatures due to higher elevations and occasional cloud cover. Humidity levels remain moderate thanks to consistent northeast trade winds, making the heat comfortable even at peak temperatures. August and September occasionally see brief rain showers, particularly on the mountainous islands, though these rarely disrupt activities and often provide welcome relief from the heat. Ocean temperatures reach their warmest at 26-27°C (79-81°F), ideal for swimming and water sports.",
      winter: "Winter (December to March) represents the coolest season, though temperatures remain pleasant at 19-25°C (66-77°F) throughout the archipelago. This period coincides with the strongest and most consistent winds, particularly on the eastern islands, creating world-class conditions for kitesurfing and windsurfing that attract enthusiasts globally. Evenings can feel cool enough to require a light sweater, especially in mountainous areas where temperatures can occasionally drop to 15°C (59°F). Rainfall is extremely rare during these months, with clear skies predominating. Ocean temperatures cool slightly to 22-24°C (72-75°F) but remain comfortable for swimming. This season experiences occasional dust haze blown from the Sahara Desert (known as 'bruma seca' or dry mist), which can temporarily reduce visibility and create spectacular sunsets.",
      spring: "Spring (April to May) offers some of Cabo Verde's most pleasant weather conditions. Temperatures gradually warm to 22-27°C (72-81°F) while winds diminish from their winter peak, creating comfortable conditions for exploration and outdoor activities. The landscape appears at its driest before the potential summer rains, with striking volcanic scenery particularly evident. This shoulder season sees fewer tourists than the winter months, translating to quieter beaches and accommodations. Ocean temperatures begin warming to 23-25°C (73-77°F). The reduced wind during this period makes it ideal for visitors interested in hiking the mountainous islands like Santo Antão and Fogo, where trails become more accessible and panoramic views reach their clearest without winter's occasional dust haze or summer's potential cloud cover.",
      fall: "Fall (October to November) represents a transitional period as Cabo Verde moves from its marginally wetter months back toward the dry season. Temperatures remain warm at 24-28°C (75-82°F) while humidity gradually decreases. October may experience occasional brief showers, particularly on the western islands, though these become increasingly rare by November. Wind conditions begin strengthening again, especially on the eastern islands, marking the beginning of the prime season for wind sports. The potential rainfall during early fall creates a brief period of relative greenery on the mountainous islands before the dry season fully establishes. This period sees some of the year's most spectacular sunsets, particularly when moisture in the air combines with dust particles from seasonal Saharan winds. Tourist numbers begin increasing toward November as visitors from European winter seek Cabo Verde's reliable sunshine."
    },
    majorCities: [
      {
        name: "Praia",
        description: "Cabo Verde's capital and largest city sits on Santiago Island, blending African and Portuguese influences in its architecture and atmosphere. The historic center, Plateau (Platô), occupies a flat-topped volcanic elevation featuring colonial buildings, government offices, and the Presidential Palace around the main square. The vibrant Sucupira Market offers everything from fresh produce to crafts and fabric, while the Ethnographic Museum provides insights into the nation's complex cultural heritage. Modern sections of the city contrast with traditional neighborhoods where music spills from small bars and restaurants serving authentic Cabo Verdean cuisine. The nearby beaches of Quebra Canela and Prainha provide urban shoreline access, while the UNESCO World Heritage Site of Cidade Velha—the first European colonial settlement in the tropics—lies just 15 kilometers away, featuring the impressive Fortaleza Real de São Filipe overlooking restored colonial structures."
      },
      {
        name: "Mindelo",
        description: "Widely considered Cabo Verde's cultural capital, this port city on São Vicente Island features colorful colonial architecture around a natural harbor framed by volcanic peaks. The city's cosmopolitan history as an important British coal refueling station created a uniquely outward-looking culture that produced many of the nation's most famous musicians. Centro Cultural do Mindelo showcases this musical heritage, while the vibrant nightlife offers authentic opportunities to experience live morna and coladeira performances. The historic Mercado Municipal, housed in an 1874 iron structure, buzzes with vendors selling local goods, while nearby Torre de Belém (a replica of Lisbon's famous tower) offers harbor views. Mindelo hosts Cabo Verde's most famous Carnival each February, a Brazilian-influenced celebration featuring elaborate costumes and pulsating music. The magnificent beach at Laginha sits within walking distance of the city center, while the dramatic coastal scenery of Baía das Gatas lies just a short drive away."
      },
      {
        name: "Santa Maria",
        description: "This vibrant beach town on Sal Island has transformed from a small salt-trading port into Cabo Verde's premier tourist destination while maintaining its authentic island charm. The pedestrian-friendly town center features colorful buildings housing restaurants, bars, and shops along cobblestone streets, with the converted salt warehouse now serving as a craft market. The town's main attraction is its magnificent 8-kilometer beach of fine white sand meeting turquoise waters perfect for swimming and water sports. Santa Maria Pier creates a hub of activity where fishermen bring their daily catch each afternoon, attracting locals and visitors alike. The town serves as the center of Cabo Verde's water sports scene, with numerous kitesurfing and windsurfing schools taking advantage of consistent trade winds. Despite tourism development, Santa Maria retains a relaxed atmosphere where visitors can enjoy live music in unpretentious bars and sample fresh seafood at beachfront restaurants while watching the sunset over the Atlantic."
      },
      {
        name: "Espargos",
        description: "The administrative center of Sal Island developed around the international airport that serves as the main entry point for most visitors to Cabo Verde. Located in the island's interior, the town sits atop the highest point of the otherwise flat island, offering panoramic views extending to both coasts. Unlike beach resorts, Espargos provides glimpses of authentic everyday Cabo Verdean life with its local markets, community squares, and restaurants serving traditional cuisine rather than tourist fare. The town's commercial center features banks, government offices, and the island's largest supermarkets, making it a practical stop for visitors staying elsewhere on Sal. While lacking specific tourist attractions, Espargos offers a cultural counterpoint to Santa Maria's resort atmosphere, with opportunities to interact with locals and experience genuine island hospitality in small neighborhood restaurants and bars where tourist prices rarely apply."
      },
      {
        name: "Assomada",
        description: "Located in Santiago Island's fertile interior highlands, this market town serves as the commercial hub for the agricultural region. The town center features the impressive Igreja Nossa Senhora de Fátima church alongside colonial-era buildings and bustling commercial streets. Assomada's true highlight is its massive market, Mercado de Assomada, held Wednesday and Saturday mornings when farmers from surrounding villages bring fresh produce, livestock, and handicrafts, creating a vibrant display of rural Cabo Verdean life rarely experienced in coastal tourist areas. The high-altitude location (approximately 550 meters) creates a slightly cooler climate than coastal regions, while the surrounding green valleys offer striking contrast to the arid landscapes found on other islands. The nearby Rabelados community, historically religious dissidents who maintained isolated settlements, now welcomes visitors interested in their distinctive art and traditions. Assomada provides an excellent base for exploring Santiago's interior attractions, including the imposing Serra Malagueta mountains and botanical garden."
      }
    ],
    famousFor: [
      "Pristine beaches with perfect conditions for kitesurfing and windsurfing",
      "Morna music tradition made famous internationally by singer Cesária Évora",
      "Dramatic volcanic landscapes including Mount Fogo, an active volcano rising 2,829 meters",
      "Diverse marine life with opportunities to swim with turtles and spot humpback whales",
      "Unique Creole culture blending Portuguese colonial influences with African traditions"
    ],
    topAttractions: [
      {
        name: "Mount Fogo and Chã das Caldeiras",
        description: "Rising dramatically from the Atlantic Ocean, Fogo Island is dominated by this still-active volcano whose perfect cone shape reaches 2,829 meters (9,281 feet). The volcano last erupted in 2014-2015, covering the caldera villages in lava while dramatically altering the landscape. Visitors can hike to the summit with local guides, a challenging 3-4 hour ascent rewarded with breathtaking views across the archipelago and into the crater. The massive caldera (Chã das Caldeiras) surrounding the cone spans 9 kilometers in diameter and houses resilient communities who have repeatedly rebuilt after eruptions. These villages produce Cabo Verde's best wines from grapes grown in rich volcanic soil at elevations around 1,700 meters, creating distinctive vintages available for tasting at small family-operated wineries. The stark black lava fields contrast dramatically with the volcano's slopes and the traditional buildings constructed from volcanic rock, creating an otherworldly landscape unlike anywhere else in Cabo Verde. Despite destructive eruptions, the caldera's inhabitants maintain a deep connection to this precarious environment, having developed unique cultural adaptations including specialized agriculture techniques and architectural styles specifically evolved for this volcanic setting.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Santo Antão Hiking Trails",
        description: "Cabo Verde's most mountainous island offers the archipelago's premier hiking destination, with dramatic landscapes transitioning from arid moonscape to lush tropical valleys within short distances. The island's northeastern region features the spectacular Paul Valley (Ribeira do Paul), where terraced agricultural plots cling to steep mountainsides above which towering peaks disappear into clouds. The legendary coastal path from Cruzinha to Ponta do Sol hugs vertiginous cliff faces hundreds of meters above the crashing Atlantic, offering one of Africa's most spectacular coastal hikes. Throughout the island, cobblestone paths originally built for moving agricultural products between isolated villages now serve as exceptional hiking routes connecting disparate microclimates and ecosystems. In the arid western regions, deep ribeiras (valleys) cut through barren landscapes creating striking geological formations, while the cloud-catching eastern mountains support lush vegetation including sugarcane, papaya, mango, and banana cultivation on improbably steep terraces. Guides from local communities enhance experiences by sharing knowledge of endemic plants, agricultural practices, and traditional building techniques including irrigation systems dating from colonial times. The island's limited tourism development means hikers frequently encounter only local farmers and spectacular views, experiencing an authentic rural lifestyle largely unchanged for generations.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Santa Maria Beach",
        description: "This magnificent 8-kilometer stretch of pristine white sand on Sal Island represents Cabo Verde's most famous beach destination, combining natural beauty with excellent infrastructure. The crystal-clear turquoise waters maintain comfortable swimming temperatures year-round while offering exceptional visibility for snorkeling along rocky sections where tropical fish abound. The beach's consistent trade winds create world-class conditions for kitesurfing and windsurfing, particularly from November through March when international enthusiasts gather to take advantage of perfect conditions, with numerous schools offering instruction for all levels. The gradual slope into the Atlantic creates safe swimming conditions, while the broad expanse of sand ensures space for relaxation even during peak season. The town of Santa Maria directly borders the beach, offering immediate access to restaurants, bars, and accommodations without detracting from the natural setting. Small fishing boats pulled up on shore each afternoon become the center of impromptu markets where the day's catch is sold directly to locals and visitors. The western end features more developed areas with beach clubs and water sports centers, while the eastern stretches offer more tranquility and open space. Magnificent sunsets transform the evening sky, followed by beachfront dining options ranging from casual barefoot establishments to refined restaurants specializing in fresh Atlantic seafood.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Cidade Velha Historic Centre",
        description: "This UNESCO World Heritage Site on Santiago Island preserves the first European colonial settlement in the tropics, established in 1462 as Ribeira Grande before later becoming known as Cidade Velha (Old City). The settlement played a pivotal role in the Atlantic slave trade, serving as a crucial stopover for ships between Africa, Europe, and the Americas. The remarkably preserved historic center features Rua Banana, the oldest colonial street in Africa with its traditional stone houses, and the striking pillory (Pelourinho) erected in the main square in 1520 where enslaved people were publicly punished. The impressive Fortaleza Real de São Filipe crowns the hillside above the settlement, offering both historical insight into the defensive systems and panoramic views of the town and coastline. The restored Nossa Senhora do Rosário church, built in 1495, represents the oldest colonial church in the tropics, combining Gothic and Romanesque elements with later Mannerist additions. The ruins of the imposing cathedral, begun in 1555 but never completed, stand as silent testimony to the settlement's former importance. Beyond architectural elements, the site holds profound historical significance as the birthplace of Creole culture through the mixing of European and African peoples, languages, and traditions—a process that would later influence societies throughout the Atlantic world. Local guides provide essential context for understanding both the site's historical importance and its connection to contemporary Cabo Verdean identity.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Pedra de Lume Salt Crater",
        description: "This extraordinary natural and historical site on Sal Island features a volcanic crater filled with salt pans more saline than the Dead Sea. Accessed through a tunnel cut into the crater wall, visitors descend into an otherworldly landscape where multicolored salt flats stretch across the crater floor surrounded by the steep slopes of the extinct volcano. The salt pans, operated since the 18th century when they served as a crucial salt source for Portuguese colonies, display striking color variations from white to pink and rusty orange depending on mineral content and evaporation levels. The extremely high salt concentration (approximately 26%) allows effortless floating in designated swimming areas, creating a unique experience where visitors can read books or newspapers while naturally buoyant in the therapeutic waters. Historic buildings including the former salt factory, storage facilities, and transportation infrastructure remain visible throughout the site, providing insights into the island's economic history before tourism. The crater rim offers spectacular views across both the interior salt pans and the contrasting deep blue Atlantic on the opposite side. The dramatic entrance through the narrow tunnel adds to the sense of discovery, revealing the hidden interior world that gave Sal Island its name (sal meaning salt in Portuguese). Many visitors combine the unique floating experience with applying the mineral-rich mud to their skin, believed to offer therapeutic benefits for various skin conditions.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Cabo Verdean cuisine reflects the archipelago's unique position at the crossroads of African, Portuguese, and Brazilian culinary traditions, with distinct variations between islands. Seafood features prominently, particularly tuna, wahoo, octopus, and lobster, often prepared simply grilled or in rich stews. The national dish cachupa—a slow-cooked stew combining corn, beans, and vegetables with fish or meat—appears throughout the islands in variations ranging from the humble cachupa pobre (poor man's cachupa) to the more elaborate cachupa rica featuring multiple meats. Fresh tropical fruits including papaya, mango, and bananas grow on the more verdant islands, while goat cheese production thrives in the drier eastern islands. Portuguese influence appears in dishes like pastels (fried pastries filled with fish or seafood) and queijo de cabra (goat cheese) often served with the traditional pepper sauce called pimentinha. Limited agricultural land means most ingredients have profound cultural significance, with nothing wasted in traditional preparations. Meals typically unfold at a leisurely pace, particularly the sacred Sunday lunch that brings together extended families. International restaurants have emerged in tourist areas, though the most authentic experiences come from small family-run establishments serving daily specials based on available ingredients.",
      famousDishes: [
        "Cachupa - A hearty slow-cooked stew made with corn, beans, vegetables and either fish or meat, considered the national dish",
        "Lagostada - Spiny lobster prepared with garlic, herbs, white wine and served with local vegetables",
        "Buzio - Sea snails simmered in a flavorful broth with onions, garlic, bay leaves and white wine",
        "Caldo de Peixe - Rich fish soup typically prepared with grouper or tuna and thickened with vegetables",
        "Bafin - Goat meat marinated in wine vinegar, garlic and herbs then slow-cooked until tender"
      ]
    },
    culturalCustoms: [
      "Morabeza - a uniquely Cabo Verdean concept describing warm hospitality and genuine kindness toward others",
      "Music and dancing are integral to social life; don't be surprised to be invited to join improvised performances",
      "Greetings are important; shake hands with everyone present when entering a room, even in casual settings",
      "When invited to a home, bringing a small gift (particularly something hard to find locally) is greatly appreciated",
      "Sunday is dedicated to family gatherings; expect reduced services and closed businesses outside tourist areas"
    ],
    travelTips: [
      "Carry cash in local currency as ATMs can be scarce on smaller islands and many businesses don't accept cards",
      "Pack a converter adaptor as Cabo Verde uses European-style two-pin plugs with 220V electricity",
      "Apply strong sun protection even on cloudy days - the UV index remains extremely high year-round",
      "Learn basic Portuguese or Kriolu phrases as English proficiency varies significantly outside tourist centers",
      "Island-hopping requires planning; domestic flights can fill quickly and ferry schedules change seasonally",
      "Bring seasickness remedies if planning ferry trips as waters between islands can be rough"
    ],
    safetyInfo: "Cabo Verde ranks among Africa's safest destinations with very low violent crime rates, stable governance, and minimal health risks. The most common safety concerns involve petty theft in busy market areas and tourist zones, particularly in Praia and Mindelo; minimize risk by avoiding flashy jewelry, using hotel safes, and maintaining awareness in crowded areas. Water safety deserves attention as some beaches have strong currents; swim in designated areas and heed local advice about conditions. Road safety varies significantly between islands—salt flats on Sal and Boa Vista can disorient drivers, while Santo Antão's mountain roads feature sharp dropoffs requiring cautious driving. Health risks remain limited with no endemic tropical diseases requiring preventative medication, though the lack of extensive medical facilities on smaller islands makes comprehensive travel insurance essential for coverage including evacuation to the mainland if necessary. Natural hazards primarily involve strong ocean currents, sunburn risk due to intense UV radiation year-round, and occasional dust storms blown from the Sahara (harmattan) that can temporarily affect those with respiratory conditions. Overall, standard precautions suffice for enjoying a worry-free experience—many visitors highlight security as one of Cabo Verde's most appealing aspects.",
    sustainableTourism: "Cabo Verde has implemented a Tourism Development Tax (TSA) of €2 per person per night, with proceeds funding environmental initiatives, infrastructure improvements, and vocational training for local communities. This innovative approach directly connects tourism revenue with sustainability efforts on an archipelago facing significant environmental challenges including water scarcity, coastal erosion, and marine pollution. Conservation focuses particularly on marine ecosystems, with protected areas established around key turtle nesting beaches and whale breeding grounds. Visitors can support these efforts by selecting accommodations with sustainable certifications like Biosphere or Green Key, participating in guided tours operated by local companies rather than foreign-owned operators who export profits, avoiding single-use plastics on islands with limited waste management capacity, respecting guidelines during turtle nesting season (June-October), and conserving water given the country's severe freshwater limitations. Community-based tourism initiatives have developed on less-visited islands, particularly Santo Antão and Santiago, where homestays and local guides create economic alternatives to fishing and subsistence agriculture while preserving traditional lifestyles. The government's \"One Tourist, One Tree\" program invites visitors to contribute directly to reforestation efforts addressing centuries of environmental degradation, while several tour operators implement carbon offset programs for domestic flights between islands.",
    visaRequirements: "Most nationalities can enter Cabo Verde without a visa for stays up to 30 days through the EASE (Electronic Airport Security Entry) program. Travelers must register online at least five days before arrival, paying a €34 fee that covers airport security tax and provides streamlined immigration procedures. Requirements include a passport valid for at least six months beyond the planned departure date, proof of accommodation for the entire stay, proof of sufficient funds, and onward/return tickets. Upon completion, travelers receive a pre-authorization document to present upon arrival. For stays exceeding 30 days, visas must be obtained from Cabo Verdean embassies or consulates before travel. Entry requirements include a yellow fever vaccination certificate for travelers arriving from countries where yellow fever is endemic. Though not required, travel insurance with medical coverage is strongly recommended given limited healthcare facilities on smaller islands. Visitors planning to work, volunteer, or engage in research require special visas arranged in advance. For island-hopping, domestic flights and ferry services connect the islands, though schedules vary seasonally and advance booking is recommended during high season (November-April) and festival periods.",
    budget: {
      budget: "€30-50 (3,300-5,500 CVE) per day for dormitory or basic guesthouse accommodation, local restaurants serving Cabo Verdean dishes, public transportation, and minimal paid attractions",
      midRange: "€70-120 (7,700-13,200 CVE) per day for mid-range hotels, restaurant dining with occasional seafood specialties, organized excursions, domestic flights between islands, and water sports rentals",
      luxury: "€150+ (16,500+ CVE) per day for beachfront resorts or boutique hotels, fine dining, private guided tours, premium water sports lessons, spa treatments, and charter boat excursions"
    },
    transportationOptions: [
      "TACV (Cabo Verde Airlines) and Bestfly operate domestic flights connecting the major islands",
      "Regular ferry services link many islands, though schedules can be inconsistent and seas occasionally rough",
      "Aluguer (shared minivans) provide affordable transportation on larger islands, operating on flexible schedules",
      "Taxis are readily available in major towns with fixed rates between popular destinations",
      "Car rentals offer the most flexibility for exploring larger islands, with 4WD recommended for off-road areas"
    ],
    neighboringCountries: [
      "Cabo Verde is an island nation with no land borders",
      "Nearest mainland countries are Senegal (570 km) and Mauritania (700 km) in West Africa"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beach Vacation", "Island Experience", "Water Sports", "Hiking", "Musical Culture",
    "Volcanic Landscapes", "Cultural Experience", "Portuguese Colonial Heritage", "Sustainable Tourism", "Gastronomy"
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

export default CaboVerdeCountry; 