import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BurundiCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Burundi",
    slug: "burundi",
    continent: "Africa",
    capital: "Gitega (political), Bujumbura (economic)",
    languageOfficial: "Kirundi, French, English",
    languagesSpoken: ["Kirundi", "French", "English", "Swahili"],
    currency: "Burundian Franc (BIF)",
    population: 12574571,
    area: 27834,
    timeZones: ["GMT+2 (CAT)"],
    callingCode: "+257",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Burundi is a small landlocked country in East Africa's Great Lakes region, characterized by rolling hills, verdant landscapes, and the shores of Lake Tanganyika. Despite being one of Africa's smallest nations, it features remarkable cultural diversity, with traditions of drumming and dance recognized by UNESCO. Though facing economic challenges, Burundi offers visitors a genuine African experience with warm hospitality, scenic beauty, and distinctive cultural heritage.",
    whyVisit: "Burundi offers travelers an authentic, unfiltered African experience increasingly rare in more tourism-developed nations. While lacking the infrastructure and fame of neighboring countries, this small nation compensates with remarkable scenic beauty, featuring dramatic mountain landscapes, pristine beaches along Lake Tanganyika (the world's second-deepest lake), and protected nature reserves sheltering diverse wildlife. Cultural enthusiasts will discover UNESCO-recognized drumming traditions that represent the spiritual heartbeat of the nation, alongside vibrant dance performances and traditional crafts maintained through generations. For history-focused visitors, the country provides insights into pre-colonial kingdoms, the colonial period, and post-independence challenges that have shaped modern Burundi. The warm hospitality of Burundians creates meaningful personal connections despite language differences, while adventurous travelers can enjoy hiking through terraced hillsides, boat excursions on Lake Tanganyika, and birdwatching in forest reserves. Perhaps most compelling, visiting Burundi allows engagement with communities working to build sustainable tourism as a path toward development and reconciliation following periods of conflict. While requiring flexibility and patience due to developing infrastructure, Burundi rewards travelers with experiences free from commercial tourism trappings and opportunities to contribute positively to local communities demonstrating remarkable resilience.",
    bestTimeToVisit: {
      text: "The best time to visit Burundi is during the long dry season from June to August when rainfall is minimal and temperatures are pleasant (20-28°C/68-82°F). This period offers optimal conditions for wildlife viewing, hiking, and cultural experiences. The short dry season (December-January) also provides good weather. Avoid the heavy rainy seasons (February-May and September-November) when unpaved roads can become difficult to navigate.",
      months: ["June", "July", "August", "December", "January"]
    },
    weatherInfo: {
      summer: "Summer (December to February) brings variable conditions as it spans both dry and wet periods. December and January constitute the short dry season with temperatures ranging from 20-30°C (68-86°F), low humidity, and minimal rainfall, making it the second-best time to visit Burundi. However, February marks the beginning of the long rainy season, with increasing precipitation and occasional thunderstorms, particularly in the afternoons. The western lowlands around Lake Tanganyika experience warmer temperatures than the central highlands, where evenings can feel cool enough to require light jackets. This period coincides with summer holidays in Western countries, though tourist facilities remain uncrowded year-round.",
      winter: "Winter (June to August) represents Burundi's primary dry season and offers the most pleasant weather for visitors. Daytime temperatures typically range from 20-28°C (68-82°F) with cooler conditions in the highlands and warmer weather in the lowlands near Lake Tanganyika. Rainfall is minimal, humidity remains moderate, and skies stay predominantly clear, creating ideal conditions for wildlife viewing, hiking, and outdoor activities. Nighttime temperatures in higher elevation areas can drop to 10-15°C (50-59°F), requiring warmer clothing after sunset. This period coincides with the best road conditions as unpaved routes remain easily navigable without the complications of mud and washouts that characterize rainy seasons.",
      spring: "Spring (September to November) encompasses Burundi's short rainy season. September starts relatively dry before rainfall gradually intensifies through October and November. Temperatures remain warm, generally ranging from 22-29°C (72-84°F), with increasing humidity that can make daytime conditions feel warmer than the actual temperature. Afternoon thunderstorms become common, especially in the central highlands, though mornings often feature clear skies. The landscape transforms during this period, with vegetation turning increasingly lush and green, agricultural activities intensifying, and migratory birds arriving. While not ideal for extended hiking expeditions due to unpredictable weather, this season offers excellent photographic opportunities with dramatic cloud formations and vibrant landscapes.",
      fall: "Fall (March to May) brings Burundi's long rainy season, characterized by the heaviest annual precipitation. Daily rainfall becomes common, particularly in the afternoons and evenings, with March and April typically receiving the most intense downpours. Temperatures remain fairly consistent at 20-27°C (68-81°F), though the high humidity can create uncomfortable conditions, especially in lowland areas. The extensive rainfall creates challenges for transportation as unpaved roads—which constitute the majority of Burundi's road network—can become muddy, slippery, or occasionally impassable. However, this season transforms the landscape into its most verdant state, with waterfalls reaching peak flow, agricultural terraces appearing particularly picturesque, and various flowering plants blooming across the countryside."
    },
    majorCities: [
      {
        name: "Bujumbura",
        description: "Burundi's largest city and economic center sits on the northeastern shore of Lake Tanganyika, offering a blend of urban atmosphere and natural beauty. Once the capital (until 2018), the city features tree-lined boulevards reflecting French colonial influence, the lively central market where vendors sell everything from fresh produce to handicrafts, and the Living Museum showcasing traditional housing and cultural artifacts. Bujumbura's vibrant restaurant scene offers opportunities to sample both local and international cuisine, particularly fresh fish from Lake Tanganyika. Nearby attractions include Livingstone-Stanley Monument marking where the famous explorers met in 1871, Rusizi National Park with its hippos and birds, and several beaches along the lake including Saga Beach where locals and visitors enjoy swimming and weekend relaxation."
      },
      {
        name: "Gitega",
        description: "Burundi's political capital since 2018, located in the central highlands, serves as the seat of government and royal heritage. The National Museum houses the country's best collection of historical artifacts, including items from the ancient kingdom of Burundi and the colonial period. Adjacent to the museum stands the traditional royal residence, reconstructed to represent the architectural style used by Burundian monarchs before colonization. The city's central market offers authentic local crafts including distinctive Burundian baskets, wooden carvings, and textiles. Gitega's elevation provides a cooler climate than Bujumbura, with surrounding hills offering hiking opportunities and views of terraced agriculture that characterizes the region. The city hosts various government buildings including the newly established parliament complex."
      },
      {
        name: "Ngozi",
        description: "Located in northern Burundi, Ngozi functions as a provincial capital and the country's third-largest urban center. The city is known for its role as the heart of Burundi's coffee industry, with numerous processing facilities and the headquarters of several coffee cooperatives. Visitors can arrange tours of nearby coffee plantations to learn about cultivation and processing techniques for Burundi's primary export. The Cathedral of St. Joseph represents an impressive religious landmark combining European architectural elements with local adaptations. Ngozi's lively market serves as a commercial hub for the northern region, while the surrounding countryside features scenic hillsides covered with coffee plantations, subsistence farms, and occasional patches of remaining forest. The University of Ngozi attracts students from throughout the country, contributing to the city's relatively cosmopolitan atmosphere."
      },
      {
        name: "Rumonge",
        description: "This port city on Lake Tanganyika serves as a crucial fishing center and transportation hub for Burundi's western region. The fishing harbor offers fascinating glimpses into traditional fishing methods as boats depart at dusk with kerosene lamps (called karimba) used to attract fish during night fishing expeditions. Rumonge is known for its fish markets where multiple species from Lake Tanganyika are sold, including the prized mukeke (a type of perch) considered Burundi's national dish when prepared with local spices. The city's palm oil production represents another economic cornerstone, with artisanal processing facilities found throughout the surrounding area. Nearby thermal springs at Mugara attract visitors seeking their reputed therapeutic properties. Rumonge's location makes it a gateway for boat excursions on Lake Tanganyika to observe both the remarkable aquatic life and the scenic shoreline."
      },
      {
        name: "Muyinga",
        description: "This northeastern provincial capital serves as an important agricultural center and gateway to Kibira National Park. The city's weekly market attracts farmers from throughout the region selling beans, maize, sweet potatoes, and other crops grown on surrounding hillsides. Muyinga hosts several cooperatives producing traditional crafts, particularly baskets woven using techniques passed through generations. The cultural significance of the region stems from its historical connection to the Burundian monarchy, with several royal drum sanctuaries maintained in nearby communities. The city's location near the Tanzanian border creates a blend of cultural influences reflected in local cuisine and traditions. From Muyinga, visitors can arrange guided excursions to the northern reaches of Kibira National Park with its montane rainforest ecosystem, offering opportunities for primatology, birdwatching, and experiencing one of Burundi's most important ecological resources."
      }
    ],
    famousFor: [
      "Royal Drummers of Burundi - traditional drumming recognized as UNESCO Intangible Cultural Heritage",
      "Beautiful beaches along Lake Tanganyika, one of Africa's Great Lakes",
      "Terraced hillsides creating picturesque agricultural landscapes throughout the country",
      "Excellent coffee production, particularly high-quality arabica beans grown at high elevations",
      "Rusizi National Park with hippos, crocodiles, and diverse birdlife near Bujumbura"
    ],
    topAttractions: [
      {
        name: "Lake Tanganyika",
        description: "This massive freshwater lake forms Burundi's western border, creating spectacular coastlines with sandy beaches, clear waters, and mountain backdrops. As the world's second-deepest lake (reaching depths over 1,400 meters) and second-largest by volume, Tanganyika contains approximately 17% of Earth's available freshwater and supports extraordinary aquatic biodiversity with over 350 fish species—most famously diverse cichlids that have evolved in remarkable isolation. The Burundian shoreline features several beach areas where visitors can swim in safety, including Saga Beach and Karera Beach near Bujumbura, offering white sand, palm trees, and refreshingly clean water. Boat excursions provide opportunities to experience traditional fishing practices, visit small fishing villages accessible only by water, and potentially spot hippos, crocodiles, and aquatic birds along undeveloped shorelines. For underwater enthusiasts, snorkeling reveals colorful cichlids in shallow areas, while deeper waters attract serious divers exploring unique freshwater ecosystems. Beyond recreation, the lake provides crucial transportation routes connecting Burundi with neighboring Tanzania and the Democratic Republic of Congo through regular ferry services and small boat networks. Lakeside communities maintain distinctive cultural traditions adapted to this aquatic environment, including boat-building techniques, fishing methods, and culinary practices centered around freshwater species.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Kibira National Park",
        description: "Stretching along Burundi's northwestern boundary with Rwanda, this montane rainforest represents the country's largest protected area and most important primary forest ecosystem. Covering approximately 400 square kilometers at elevations ranging from 1,600 to 2,666 meters, Kibira preserves crucial watershed functions for both Burundi and the broader Nile Basin, generating rainfall and regulating water flow to surrounding agricultural regions. The forest harbors extraordinary biodiversity, including approximately 644 plant species, 98 mammal species such as chimpanzees, black and white colobus monkeys, baboons, and forest hogs, plus over 200 bird species including many Albertine Rift endemics prized by birdwatchers. For visitors, the park offers hiking trails of varying difficulty, from relatively accessible paths near the Teza and Rwegura entrances to challenging multi-day treks requiring experienced guides. Magnificent viewpoints reveal the forest canopy extending across ridgelines and valleys, while guided walks focus on identifying medicinal plants, tracking primates, or spotting rare birds. The park's periphery includes tea plantations whose bright green geometric patterns create striking visual contrast with the natural forest. Beyond ecological significance, Kibira holds cultural importance as a former royal hunting preserve and spiritual site where certain traditional ceremonies were conducted, reflecting the deep connection between Burundian cultural heritage and natural environments.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Source of the Nile at Karera Falls",
        description: "While the ultimate source of the White Nile remains contested between Burundi and Rwanda, the pyramid-shaped stone monument at Karera marks what Burundians consider the southernmost source of the world's longest river. Located in Rutovu commune approximately 115km from Bujumbura, this symbolic site represents one tributary beginning the massive river system that flows northward through Lake Victoria and ultimately to the Mediterranean Sea. Surrounding the monument, the Karera Falls system creates a spectacular natural attraction featuring four separate cascades descending through lush vegetation on the slopes of Mount Kikizi. Visitors can follow well-maintained paths between viewpoints overlooking each waterfall, with the most impressive being approximately 80 meters high. The area includes interpretive signs explaining the hydrological significance of this watershed and its connection to the broader Nile Basin that sustains hundreds of millions of people across East and North Africa. Local guides enhance the experience by sharing both scientific information and traditional stories associated with these waters, including legends about the monarchs who once conducted ceremonies here. The microclimate created by the falls supports distinctive plant communities, providing opportunities for botanical interest and bird watching, while the surrounding landscape offers panoramic views across Burundi's southern highlands.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Gishora Drum Sanctuary",
        description: "Located near Gitega, this cultural heritage site preserves Burundi's most sacred drumming tradition, recognized by UNESCO as Intangible Cultural Heritage of Humanity. The sanctuary consists of traditional thatched structures housing historic royal drums, including the sacred Ruciteme and Murimirwa drums that historically announced royal ceremonies and were considered embodiments of royal power rather than mere musical instruments. These ceremonial drums, carved from massive tree trunks and covered with cow hides, represent centuries of cultural continuity and symbolize Burundian identity. Visitors witness spectacular performances by the drum ensembles, where drummers not only create complex polyrhythms but execute synchronized movements, leaps, and dance elements that complement the thunderous percussion. These performances historically accompanied only the most significant royal events and were governed by strict protocols regarding who could perform, when, and under what circumstances. The site includes a small museum displaying artifacts related to traditional governance systems, colonial-era disruptions, and the evolution of drumming traditions through Burundi's complex history. Beyond entertainment value, visits provide deeper understanding of how drumming practices embody historical knowledge, social hierarchies, and spiritual beliefs that connected Burundian monarchs to divine authority and agricultural cycles. Guides explain drumming's continued relevance in contemporary Burundian society, where modern performances balance traditional elements with creative innovations.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Rusizi National Park",
        description: "Situated at the northern end of Lake Tanganyika where the Rusizi River creates an expansive delta system, this accessible protected area offers excellent wildlife viewing just 15 kilometers from Bujumbura. The park's varied habitats include riverine forests, marshlands, open water channels, and savanna areas supporting diverse wildlife despite its relatively small size. The primary attraction for most visitors is the hippo population residing in the river channels, visible from boat tours or strategic viewpoints along the shore. Nile crocodiles, some reaching impressive sizes, bask along mudflats and riverbanks throughout the park. Birdlife proves exceptional with over 300 species recorded, including African fish eagles, various herons and egrets, colorful kingfishers, and migratory species visiting seasonally from Europe and Asia. The delta's combination of permanent water and diverse vegetation creates crucial wildlife habitat in an otherwise densely populated region. Guided tours typically combine boat excursions exploring channels with land-based safari components using established tracks suitable for conventional vehicles. The park serves important ecological functions beyond tourism, helping purify water entering Lake Tanganyika, controlling flooding, and maintaining fishery breeding grounds that support local livelihoods. Conservation challenges include encroachment from the expanding Bujumbura urban area, invasive species like water hyacinth, and potential pollution from upstream agricultural activities—issues that guides openly discuss when explaining management efforts to protect this vital ecosystem.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Burundian cuisine features simple yet flavorful dishes based on locally grown ingredients, with beans, sweet potatoes, cassava, plantains, and corn serving as staples. Meals typically include a starch component accompanied by vegetable or occasionally meat-based sauces. Rice appears more commonly in urban areas, while rural regions rely heavily on ubugali (cassava or corn paste with dough-like consistency) as the main carbohydrate. Lake Tanganyika provides fresh fish, particularly the prized mukeke (Tanganyika perch) often grilled or fried with minimal seasoning to preserve its delicate flavor. Meat consumption remains limited for most Burundians due to cost, though goat and beef feature prominently during celebrations. Tropical fruits grow abundantly, including bananas, papayas, avocados, and pineapples, often consumed as snacks rather than formal desserts. Traditional cooking techniques primarily involve boiling, steaming, and grilling, with limited use of frying due to the expense of cooking oil. Urban restaurants increasingly offer international options, while rural areas maintain more traditional preparations. Despite economic challenges, Burundian hospitality dictates generous food sharing, with meals often served communally from central dishes.",
      famousDishes: [
        "Mukeke - Freshwater fish from Lake Tanganyika, typically grilled or fried and considered Burundi's national dish",
        "Ubugali - A stiff porridge made from cassava flour or corn flour, eaten by hand and used to scoop up sauces",
        "Ibiharage - Red kidney bean stew often flavored with onions, tomatoes and palm oil",
        "Isombe - Cassava leaves pounded into a paste and slow-cooked with onions, eggplant and occasional meat",
        "Ikiyage - Marinated beef skewers grilled over charcoal, similar to brochettes found throughout East Africa"
      ]
    },
    culturalCustoms: [
      "Greetings are important and often lengthy, involving handshakes and inquiries about family members' wellbeing",
      "Elders receive special respect; younger people traditionally offer their seat and serve elders first during meals",
      "Direct eye contact should be limited, especially when speaking with authority figures or elders",
      "Pointing with the finger is considered rude; instead, use your whole hand with palm facing upward",
      "When offered food or drink as a guest, politely accepting is expected even if you consume only a small amount"
    ],
    travelTips: [
      "Obtain cash in Bujumbura as ATMs are scarce outside the capital and credit cards rarely accepted",
      "Photography requires sensitivity; always ask permission before photographing people or government buildings",
      "Pack light, breathable clothing appropriate for warm weather but include a light jacket for cooler evenings in highland areas",
      "Carry a basic medical kit including antimalarial medication, as healthcare facilities have limited resources",
      "Learn basic French or Kirundi phrases as English is not widely spoken outside tourism contexts",
      "Check current travel advisories and security situations before planning trips to rural areas"
    ],
    safetyInfo: "Burundi's security situation has stabilized in recent years but remains unpredictable in certain regions. Most governments advise exercising increased caution throughout the country, with specific warnings against travel to areas along the border with the Democratic Republic of Congo where armed groups operate. Political tensions can spark demonstrations, particularly in Bujumbura; visitors should avoid all protests and large gatherings. Urban crime exists primarily as opportunistic theft targeting valuables; minimize risk by avoiding displays of wealth, using hotel safes, and being cautious with electronics in public. Infrastructure challenges include poor road conditions, limited street lighting, and inconsistent emergency services outside major cities, necessitating careful planning for transportation, especially after dark. Health considerations include malaria risk throughout the country (prophylaxis essential), limited medical facilities requiring evacuation insurance for serious emergencies, and waterborne diseases requiring water purification precautions. Despite these challenges, most visitors who exercise appropriate caution and respect local guidance report positive experiences. The greatest safety factor involves connecting with reputable local guides or established tour companies who understand current conditions in specific regions and can provide appropriate advice regarding changing situations.",
    sustainableTourism: "Burundi's tourism sector remains developing, making responsible practices particularly important for establishing positive patterns as visitor numbers grow. The country faces significant environmental challenges including deforestation, soil erosion, and biodiversity loss, making support for conservation initiatives crucial. National parks and reserves, including Kibira and Rusizi, operate with limited resources; visitors can contribute through entrance fees, hiring local guides, and adhering strictly to regulations regarding wildlife interaction and waste management. Community-based tourism initiatives have emerged around cultural experiences like traditional drumming, dance performances, and handicraft production, creating economic alternatives to environmentally damaging activities when visitors engage these services directly through local organizations rather than outside intermediaries. Sustainable accommodation options remain limited but include several ecolodges and guesthouses implementing water conservation, waste reduction, and local sourcing practices, particularly around Lake Tanganyika and near Bujumbura. Travelers can enhance sustainability by selecting locally-owned businesses whenever possible, respecting cultural sensitivities regarding photography and appropriate dress, minimizing plastic waste in a country with limited disposal infrastructure, learning basic Kirundi phrases to enhance cultural exchange, and maintaining realistic expectations regarding developing infrastructure while appreciating authentic experiences that benefit host communities.",
    visaRequirements: "Most foreign visitors require visas to enter Burundi. East African Community citizens (Kenya, Tanzania, Uganda, Rwanda) may enter visa-free, while most other nationalities must obtain visas in advance through Burundian embassies or consulates. Requirements typically include a passport valid for at least six months beyond the intended departure date, completed application forms, passport-sized photos, proof of sufficient funds, onward/return travel documentation, and payment of visa fees (approximately $90 USD for single-entry tourist visas). Processing times vary from several days to several weeks depending on the issuing location. E-visa services have been announced but implementation remains inconsistent; confirm current procedures before traveling. Upon arrival, visitors must register with immigration authorities within one week; most hotels assist with this process. Yellow fever vaccination certificates are required for all travelers. For journalists, photographers, or researchers, special permits may be necessary beyond standard tourist visas. Land border crossings with Rwanda and Tanzania operate with varying efficiency; carrying printed documentation of visa approval is recommended. For extended stays beyond the typical 30-day tourist visa, extensions may be arranged through the immigration office in Bujumbura, though the process requires patience and potentially multiple visits.",
    budget: {
      budget: "$30-50 (60,000-100,000 BIF) per day for basic guesthouses, local transportation, and simple meals from markets or local restaurants",
      midRange: "$80-150 (160,000-300,000 BIF) per day for comfortable hotels with amenities, private transportation, restaurant dining, and guided excursions",
      luxury: "$200+ (400,000+ BIF) per day for the best available accommodations, private vehicles with drivers, customized tours, and premium dining options"
    },
    transportationOptions: [
      "Shared taxis (taxi-voiture) connect major towns with departures when vehicles fill with passengers",
      "Motorcycle taxis (taxi-moto) provide affordable transportation within towns and for shorter distances",
      "Private car hire with drivers offers the most comfortable and reliable option for exploring the country",
      "Boat services operate on Lake Tanganyika, connecting lakeside communities and offering scenic excursions",
      "Limited public buses serve major routes but operate on irregular schedules with varying comfort levels"
    ],
    neighboringCountries: [
      "Rwanda (to the north)",
      "Tanzania (to the east and south)",
      "Democratic Republic of the Congo (to the west)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cultural Experience", "Off the Beaten Path", "Natural Beauty", "UNESCO Heritage", "Lake Activities",
    "Wildlife Viewing", "Authentic Cuisine", "Traditional Music", "Hiking", "Budget Travel"
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

export default BurundiCountry; 