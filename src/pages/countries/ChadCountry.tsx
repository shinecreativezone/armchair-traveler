import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ChadCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Chad",
    slug: "chad",
    continent: "Africa",
    capital: "N'Djamena",
    languageOfficial: "French, Arabic",
    languagesSpoken: ["French", "Arabic", "Sara", "Kanembu", "Bornu", "Maba", "Masalit", "Tama"],
    currency: "Central African CFA franc (XAF)",
    population: 16400000,
    area: 1284000,
    timeZones: ["UTC+1 (WAT)"],
    callingCode: "+235",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/13/14/15/chad-162281_1280.png",
    description: "Chad, officially the Republic of Chad, occupies a strategic position at the crossroads of North and Central Africa, where Saharan, Sahelian, and Sudanian ecological zones converge to create extraordinary landscape diversity. This landlocked nation—the fifth largest in Africa—encompasses everything from the Sahara Desert's sweeping dunes in the north to the fertile savannas and wetlands of the south. Named after ancient Lake Chad, once Africa's largest lake but now dramatically reduced, the country bears the complex imprint of numerous civilizations that traversed this region over millennia. Chad's geographic and cultural position has historically made it a nexus where North African Arabic-Islamic influences meet sub-Saharan African traditions, creating a fascinating mosaic of over 200 distinct ethnic groups. Despite considerable natural resources and a rich cultural heritage, Chad remains one of Africa's least-visited nations, offering adventurous travelers glimpses of landscapes and lifestyles largely unchanged for centuries.",
    whyVisit: "Chad appeals to travelers seeking authentic experiences far from conventional tourism circuits. The country's most remarkable feature is its extraordinary landscape diversity, from the otherworldly rock formations of the Ennedi Massif—a UNESCO World Heritage site often compared to a natural sculpture gallery—to the wildlife-rich wetlands of Zakouma National Park, one of Africa's most remarkable conservation success stories. Cultural attractions include the traditional sultanates around Lake Chad, where centuries-old traditions continue alongside distinctive architectural styles. The capital N'Djamena offers insights into the country's complex colonial and post-colonial history through its markets, museums, and vibrant street life. For adventure travelers, Chad provides unfiltered experiences in environments ranging from star-filled Saharan nights to encounters with desert-adapted wildlife. Though logistical challenges and security considerations require careful planning, Chad rewards intrepid visitors with extraordinary natural beauty and cultural authenticity increasingly rare in more accessible destinations.",
    bestTimeToVisit: {
      text: "The optimal time to visit Chad largely depends on which regions you plan to explore in this geographically diverse country. For the southern regions, including N'Djamena and Zakouma National Park, the dry season from November through February offers the most comfortable conditions, with temperatures typically ranging from 15-35°C (59-95°F) and minimal rainfall. This period also provides the best wildlife viewing opportunities as animals concentrate around dwindling water sources. The central Sahel zone is most accessible during the same months, though temperatures can fluctuate dramatically between hot days and surprisingly cold nights. Northern desert regions, including the Ennedi Plateau and Tibesti Mountains, are best visited between October and February, when daytime temperatures typically range from 25-30°C (77-86°F) rather than the extreme heat of summer months. The rainy season (May-October) makes many roads impassable, particularly in the south, though it transforms landscapes with temporary greenery and flowing wadis (seasonal rivers). For cultural events, January features several traditional festivals in the Lake Chad region.",
      months: ["November", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summer in Chad (June-September) brings distinct conditions to the country's different regions. The southern zones experience their rainy season during these months, with heavy precipitation that can transform dry landscapes into lush, temporary wetlands and render many dirt roads impassable. Daytime temperatures in the south typically range from 25-33°C (77-91°F) with high humidity making it feel warmer. Central regions receive less rainfall but still experience occasional storms that can arrive suddenly with impressive intensity. The northern desert areas remain extremely hot during summer, with daytime temperatures regularly exceeding 40°C (104°F) and sometimes reaching 45-50°C (113-122°F) in the Saharan regions, making travel challenging without specialized preparation. Throughout the country, summer brings dramatic skyscapes—particularly in the Sahel transition zone, where massive thunderclouds build in the afternoons, creating spectacular lightning displays visible across vast distances. While logistically challenging, summer offers unique photography opportunities as temporary lakes form in otherwise arid landscapes.",
      winter: "Winter (December-February) represents the most comfortable season for travel throughout most of Chad. The southern regions experience warm, dry conditions with daytime temperatures typically ranging from 30-35°C (86-95°F) and pleasantly cool nights around 15-20°C (59-68°F). This dry period makes wildlife viewing optimal in Zakouma National Park as animals congregate around remaining water sources. Central Chad experiences wider daily temperature ranges, with warm days and notably cooler nights that can drop below 10°C (50°F). The northern desert regions undergo dramatic temperature fluctuations during winter months—while daytime conditions remain warm around 25-30°C (77-86°F), nighttime temperatures can plunge to near freezing, requiring warm clothing for overnight stays. This season often brings the Harmattan wind, carrying fine Saharan dust that can create hazy conditions but also spectacular sunset photography opportunities. Winter's clear skies offer exceptional stargazing throughout the country, particularly in the dark-sky environments of the northern deserts, where astronomical viewing conditions rank among the best in the world.",
      spring: "Spring (March-May) represents a transitional period in Chad, with conditions gradually shifting from the pleasant winter to the more challenging summer patterns. In southern regions, March remains relatively dry and comfortable, while April brings increasing humidity and isolated thunderstorms that intensify through May as the rainy season approaches. Temperatures in the south climb steadily, often reaching 35-40°C (95-104°F) by late spring. Central areas experience similar warming trends but remain drier longer than the south, with the rainy season typically arriving later. The northern regions become increasingly difficult for travel as spring progresses, with April and May bringing intense heat as daytime temperatures regularly exceed 40-45°C (104-113°F) in desert areas. Spring also marks the height of the Harmattan wind season, when dust-laden air from the Sahara can significantly reduce visibility and create challenging breathing conditions in some areas. Despite these challenges, spring offers opportunities to witness the dramatic transformation of landscapes as the first rains bring explosive vegetation growth to previously parched terrain.",
      fall: "Fall (October-November) presents another transition period in Chad's annual climate cycle, as the rainy season gradually recedes from north to south. October often brings the final rains to the southern regions, with gradually decreasing precipitation and humidity. As water levels begin dropping, fall offers excellent birdwatching opportunities, particularly in wetland areas where both resident species and Palearctic migrants can be observed in significant numbers. Temperatures remain warm throughout the country, ranging from 30-38°C (86-100°F) in the south to slightly cooler conditions in higher elevation areas. The northern desert regions become increasingly accessible as extreme summer heat diminishes, making this an excellent time to explore the Ennedi Plateau and other remote northern attractions. Throughout the country, landscapes retain some greenery from the rainy season while skies clear, creating excellent conditions for photography. Additionally, many rural communities celebrate harvest festivals during this period, providing opportunities to experience traditional cultural practices rarely witnessed by outside visitors."
    },
    majorCities: [
      {
        name: "N'Djamena",
        description: "Chad's capital and largest city sits at the confluence of the Chari and Logone rivers, directly across from Cameroon. This strategic location has long made it an important trade center, though much of the current city reflects French colonial influences and post-independence development. Key landmarks include the Grand Marché (Central Market), where traders from throughout the region sell everything from handcrafted leather goods to intricate silver jewelry, and the Chad National Museum, housing important archaeological and ethnographic collections. The city's architecture creates an intriguing visual contrast between colonial-era buildings, modern government structures, and traditional influences seen in the Grand Mosque with its distinctive minaret. N'Djamena serves as the country's administrative and commercial center, with the best infrastructure in Chad, including international hotels, restaurants serving both local and international cuisine, and essential services for travelers planning journeys to more remote regions. Despite modernization efforts, the city retains a frontier atmosphere where traditional lifestyles continue alongside contemporary urban patterns."
      },
      {
        name: "Abéché",
        description: "Located in eastern Chad near the Sudanese border, Abéché stands as the country's fourth-largest city and a historical crossroads where trans-Saharan trade routes converged. Founded in the 16th century as the capital of the Ouaddaï Empire, the city retains significant heritage from its imperial past, particularly in the Sultan's Palace and the distinctive mud-brick Great Mosque. Abéché's old town features narrow winding streets lined with traditional Sahelian architecture, while the newer districts reflect French colonial influences and more contemporary development. The city hosts one of Chad's most important markets, drawing merchants and nomadic peoples from surrounding regions and across borders with Sudan. Abéché maintains its historical role as an educational center, home to an important university and traditional Islamic schools. Though infrastructure remains limited compared to the capital, the city serves as an essential gateway for journeys to eastern Chad's significant historical sites and natural attractions, including the Ouaddaï highlands and seasonal lakes that appear during the rainy season."
      },
      {
        name: "Moundou",
        description: "Chad's second-largest city anchors the country's southern agricultural heartland along the Logone River, serving as the nation's commercial and industrial center. Unlike the more Islamic-influenced northern cities, Moundou reflects the cultural patterns of southern Chad's predominantly Christian and animist populations. The city owes much of its development to cotton production, hosting the country's primary cotton processing facilities and related industries. Moundou's vibrant central market showcases the agricultural abundance of the surrounding region, with fresh produce, handmade textiles, and distinctive woodcarvings from nearby villages. The Logone River provides both transportation and sustenance, with fishing remaining an important activity despite industrial development. The city serves as an essential transportation hub, connecting Chad's productive southern regions with both the capital and neighboring Cameroon. For travelers, Moundou offers insights into contemporary Chadian economic development alongside access to southern Chad's cultural traditions, particularly the elaborate mask ceremonies and harvest festivals celebrated by various ethnic groups in surrounding rural communities."
      },
      {
        name: "Sarh",
        description: "Formerly known as Fort Archambault during the colonial period, Sarh sits along the Chari River in Chad's southern agricultural zone. As the country's third-largest urban center, the city balances its administrative functions with its role as a processing center for the region's agricultural production, particularly sugarcane from surrounding plantations. Sarh's riverside location creates a more verdant atmosphere than found in most Chadian cities, with tree-lined avenues and seasonal flooding that supports diverse ecosystems in the surrounding areas. The city maintains a distinctive character reflecting both its colonial heritage in administrative buildings and churches, and the cultural traditions of the Sara people who predominate in this region. The central market offers locally produced crafts, including distinctive basketry and textiles. For visitors, Sarh provides a gateway to some of Chad's most biologically diverse areas, including gallery forests along the Chari River that support significant wildlife populations. The city's relatively pleasant climate compared to northern regions makes it a comfortable base for exploring southern Chad's cultural and natural attractions."
      },
      {
        name: "Faya-Largeau",
        description: "This remote oasis city stands as Chad's primary urban center in the Saharan north, situated in the Borkou region approximately 800 kilometers from the capital. Historically significant as a key stop on trans-Saharan trade routes, Faya-Largeau developed around natural springs that create a startling contrast between lush date palm groves and the surrounding desert landscapes. The city's architecture reflects adaptation to extreme desert conditions, with many structures built from local materials that provide natural insulation against temperature extremes. Despite its isolation, Faya-Largeau serves crucial administrative functions for northern Chad and provides essential services for the semi-nomadic populations that inhabit the surrounding regions. The local market features distinctive Saharan handicrafts, particularly leatherwork and silver jewelry created by Tubu and Teda artisans. For adventurous travelers, the city serves as the primary gateway to northern Chad's most spectacular natural attractions, including the Ennedi Plateau with its rock formations and ancient rock art, and the more distant Tibesti Mountains. While facilities remain basic, Faya-Largeau offers the last reliable supplies and services before venturing into some of Africa's most remote landscapes."
      }
    ],
    famousFor: [
      "Ennedi Massif - UNESCO-listed desert plateau with spectacular rock formations and ancient rock art",
      "Lake Chad - Once among Africa's largest lakes, now dramatically shrunk but still ecologically significant",
      "Zakouma National Park - Remarkable conservation success story protecting significant elephant populations",
      "Tibesti Mountains - Remote volcanic mountain range with otherworldly landscapes",
      "Traditional Sultanates - Historic kingdoms with distinctive cultural and architectural traditions"
    ],
    topAttractions: [
      {
        name: "Ennedi Massif",
        description: "This extraordinary sandstone plateau in northeastern Chad represents one of the Sahara's most impressive geological wonders and a UNESCO World Heritage site of remarkable cultural and natural significance. Wind and water erosion have sculpted the sandstone into a natural gallery of arches, pillars, and mushroom-shaped formations that create otherworldly landscapes often compared to science fiction settings. The most famous formation, the Aloba Arch, rises over 120 meters high, making it one of the world's most spectacular natural arches. Beyond its geological significance, Ennedi preserves thousands of rock art paintings and engravings dating from 7,000 BCE to 1,500 CE, documenting the dramatic environmental transformation from savanna to desert and the changing human adaptations to this shifting landscape. The massif's sheltered valleys create microhabitats that support surprising biodiversity, including relict populations of desert-adapted crocodiles surviving in isolated permanent pools. Despite its remoteness requiring serious expedition planning, Ennedi rewards visitors with pristine night skies, unparalleled photographic opportunities, and profound silence interrupted only by the occasional whisper of desert winds through ancient stone labyrinths.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Zakouma National Park",
        description: "Covering approximately 3,000 square kilometers in southeastern Chad, Zakouma stands as one of Africa's most remarkable conservation success stories. Following devastating poaching in the early 2000s that reduced elephant populations from thousands to hundreds, intensive protection efforts have allowed wildlife to rebound dramatically. Today, the park protects one of Central Africa's most important elephant populations, with large herds that can number several hundred individuals during the dry season. Beyond elephants, Zakouma supports extraordinary biodiversity including lions, leopards, cheetahs, giraffes, and massive buffalo herds, alongside some of Africa's largest remaining Kordofan giraffe populations. Birdlife is equally spectacular, with over 370 species recorded, including massive seasonal congregations of black-crowned cranes and quelea. The landscape transitions seasonally from dusty savanna during the dry months to verdant wetlands during the rainy season when large portions of the park become inaccessible. Unlike more developed safari destinations, Zakouma offers genuine wilderness experiences with excellent wildlife viewing but limited infrastructure, though the park's main lodge and seasonal camps provide surprisingly comfortable accommodation. Strict entrance policies and safari planning requirements ensure low visitor impact while supporting critical conservation efforts.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Tibesti Mountains",
        description: "Rising dramatically from the Sahara in Chad's far northwest, the Tibesti Mountains represent one of Africa's most isolated and spectacular landscapes. This volcanic massif covers approximately 100,000 square kilometers, with Emi Koussi—at 3,445 meters—standing as the Sahara's highest peak and Chad's tallest mountain. The range features numerous dramatic geological formations, including calderas, fumaroles, and extraordinary lava flows that create multicolored expanses visible for miles. The Trou au Natron, a massive crater with walls rising 1,000 meters above a salt-encrusted floor, ranks among the continent's most remarkable geological features. The mountains create a climatic island effect that supports unique biodiversity, with plant species found nowhere else and wildlife including desert-adapted gazelles and Barbary sheep. Human presence extends back millennia, evidenced by significant rock art sites depicting both wildlife and human activities. Today, the Toubou people maintain traditional semi-nomadic lifestyles in this challenging environment. Accessing Tibesti requires serious expedition planning, typically involving weeks-long journeys with specialized vehicles, guides, and permits. Despite these challenges, the mountains offer adventurous travelers one of Earth's most remote and visually stunning landscapes.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Lakes of Ounianga",
        description: "This remarkable series of lakes in northern Chad's hyperarid Ennedi region constitutes a UNESCO World Heritage site and one of the Sahara's most surprising features. The system comprises 18 interconnected lakes in two groups (Ounianga Kebir and Ounianga Serir), representing the world's largest known permanent freshwater lakes in a desert setting. Their existence in a region receiving less than 2mm annual rainfall depends on ancient groundwater from the Nubian Sandstone Aquifer System, a massive fossil water source underlying much of northeastern Africa. The lakes display striking visual contrasts, with hypersaline waters appearing in vivid blues and greens, often separated from freshwater bodies by narrow sand dunes and reed barriers. Floating vegetation mats create moving islands that shift with the winds across some lakes. Traditional date palm gardens surround portions of the shorelines, supporting small settlements of the Teda people who have developed specialized agricultural practices adapted to this unique environment. The contrast between verdant shorelines and the surrounding desert creates spectacular photographic opportunities. Despite difficult access requiring specialized desert vehicles and guides, visitor numbers have gradually increased as the site became better known following its UNESCO inscription in 2012.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Lake Chad",
        description: "This iconic body of water, which gives the country its name, presents one of the world's most dramatic examples of environmental transformation. Once Africa's fourth-largest lake covering over 25,000 square kilometers in the 1960s, Lake Chad has shrunk by approximately 90% due to climate change, irrigation demands, and altered rainfall patterns. Despite this reduction, the lake remains ecologically significant and culturally essential to the region's inhabitants. The Chadian portion features a complex mosaic of open water, marshlands, and seasonal floodplains that support remarkable biodiversity, including over 120 fish species and significant populations of migratory birds. Traditional fishing communities, particularly the Buduma people who use distinctive papyrus reed boats and floating islands, maintain centuries-old practices adapted to the lake's changing conditions. Historical sultanates around the lakeshore, including Kanem-Bornu, once controlled important trans-Saharan trade routes, and their architectural and cultural legacies remain visible in lakeside settlements. For visitors, boat trips from N'Djamena or Bol provide opportunities to witness both the ecological challenges facing the lake and the remarkable resilience of communities adapting to changing conditions in this critically important ecosystem.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Chadian cuisine reflects the country's position at the crossroads of North African, Sahelian, and Central African culinary traditions, with distinct regional variations corresponding to different ecological zones. Northern regions feature Arab-influenced dishes utilizing dates, milk products from pastoral livestock, and wheat-based breads and couscous. Central and southern areas rely more heavily on sorghum, millet, and corn as dietary staples, typically prepared as porridges or formed into dough-like bases (boule) that accompany stews and sauces. Throughout the country, meals often incorporate wild foods gathered from native landscapes, particularly during seasonal availability. Fish features prominently in cuisine around Lake Chad and major rivers, while meat consumption varies significantly between pastoral northern communities and agrarian southern populations. Meals typically consist of a starchy base accompanied by sauces incorporating vegetables, occasional meat, and distinctive regional spice combinations. While urban restaurants increasingly offer international options, traditional food preparation—often communal and time-intensive—remains central to cultural identity throughout Chad.",
      famousDishes: [
        "La Boule - Thick polenta-like paste made from millet, sorghum or corn flour, forming the staple starch",
        "Daraba - Okra stew with meat, vegetables, and peanut or sesame paste",
        "Jarret de Boeuf - Slow-cooked beef shank with vegetables and spices (French colonial influence)",
        "Kisser - Thin fermented pancake-like bread similar to Ethiopian injera",
        "Maafe - Meat and vegetable stew in tomato and peanut sauce, popular throughout West/Central Africa"
      ]
    },
    culturalCustoms: [
      "Greeting Rituals - Extended handshakes and personal inquiries are essential before discussing business matters",
      "Tea Ceremony - Elaborate multi-stage tea preparation and drinking, particularly in northern regions",
      "Communal Eating - Shared meals eaten with right hand from a common plate in traditional settings",
      "Religious Observances - Respect for prayer times and modest dress in predominantly Muslim regions",
      "Traditional Healing - Many communities maintain traditional medicine practices alongside modern healthcare"
    ],
    travelTips: [
      "Secure necessary permits well in advance, especially for northern regions and protected areas",
      "Hire reputable local guides with updated security information for travel outside major cities",
      "Carry sufficient cash in Euros or CFA francs, as ATMs are extremely limited and often unreliable",
      "Pack comprehensive medical supplies including antimalarials, water purification, and broad-spectrum antibiotics",
      "Register with your embassy upon arrival in N'Djamena if possible",
      "Prepare for extreme temperature fluctuations, particularly in desert regions where days can be scorching but nights cold"
    ],
    safetyInfo: "Chad presents significant security challenges requiring careful preparation before travel. The security situation varies considerably between regions, with conditions capable of changing rapidly. Most foreign governments advise against travel to areas bordering Libya, Sudan, the Central African Republic, and certain northern and eastern regions. The Lake Chad basin presents particular security concerns due to extremist group activity. Travelers should register with their embassies, maintain regular communication with reliable local contacts, and stay informed about developing situations. Essential precautions include traveling with experienced local guides, utilizing appropriate vehicles for difficult terrain, and maintaining comprehensive emergency communication equipment. Health risks include malaria, waterborne diseases, and limited medical facilities—comprehensive travel insurance including evacuation coverage is essential. Despite these challenges, with proper preparation, professional guidance, and realistic expectations, many parts of Chad can be visited safely, particularly the central regions including N'Djamena and the southern national parks.",
    sustainableTourism: "Sustainable tourism in Chad remains in early developmental stages but represents an important opportunity for conservation and community benefits in one of Africa's least-visited nations. The Zakouma National Park model demonstrates the potential, with tourism revenues directly supporting conservation activities and anti-poaching efforts while providing employment alternatives for surrounding communities. Similarly, emerging community-based tourism initiatives around the Ennedi Massif attempt to balance preservation of fragile desert ecosystems and ancient rock art with economic opportunities for local Toubou and Teda communities. For travelers, sustainable practices include minimizing environmental impacts in sensitive desert ecosystems where damage can persist for decades, respecting cultural sensitivities particularly around photography of people and traditional practices, and ensuring that tourism expenditures benefit local communities rather than external operators. Water conservation represents a particular concern, with visitors encouraged to minimize usage in regions facing severe water scarcity. Though challenging logistically, responsible tourism provides crucial economic alternatives in remote regions where few other development opportunities exist.",
    visaRequirements: "All visitors to Chad require a valid visa, which must be obtained in advance from a Chadian diplomatic mission. The application process typically requires a passport valid for at least six months beyond the intended stay, completed application forms, passport photos, proof of accommodation arrangements, and in some cases, a letter of invitation from a recognized organization within Chad or a tour operator. Processing times vary significantly between embassies, sometimes requiring several weeks, and procedures may change without notice. Upon arrival, travelers must register with local authorities within 72 hours, typically at immigration offices in N'Djamena. Visitors planning to travel beyond the capital require additional permits for certain regions, particularly northern and eastern areas. These internal travel authorizations can be time-consuming to obtain and may require sponsorship from recognized local organizations. Yellow fever vaccination certification is mandatory for all travelers. Due to the complex administrative procedures and changing requirements, working with experienced local partners or specialized travel agencies familiar with current protocols is highly recommended for successful visa and permit applications.",
    budget: {
      budget: "70-120 USD per day for basic accommodations, simple meals, and essential local transportation",
      midRange: "120-250 USD per day for better accommodations in major cities, organized day trips, and reliable transportation",
      luxury: "250+ USD per day for the best available accommodations, organized expeditions with experienced guides, specialized desert vehicles, and comprehensive support services"
    },
    transportationOptions: [
      "Air Travel - Limited international flights to N'Djamena International Airport, primarily from Paris and regional African hubs",
      "4x4 Vehicles - Essential for travel outside major cities, particularly during rainy season and in desert regions",
      "Shared Taxis - Connect major towns with unpredictable schedules and varying comfort levels",
      "Boat Services - Seasonal options on Lake Chad and major rivers, schedules dependent on water levels",
      "Motorcycle Taxis - Common within cities and towns for short distances",
      "Bush Taxis - Multi-passenger vehicles connecting regional centers, typically departing when full rather than on fixed schedules"
    ],
    neighboringCountries: [
      "Libya", "Sudan", "Central African Republic", "Cameroon", "Nigeria", "Niger"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Desert Landscapes", "Rock Art", "Wildlife Safari", "Indigenous Cultures", "Adventure Travel", 
    "UNESCO Sites", "Oases", "Off the Beaten Path", "Lake Ecosystems", "Ancient Civilizations"
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

export default ChadCountry; 