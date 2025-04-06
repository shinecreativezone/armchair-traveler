import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CentralAfricanRepublicCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Central African Republic",
    slug: "central-african-republic",
    continent: "Africa",
    capital: "Bangui",
    languageOfficial: "French, Sango",
    languagesSpoken: ["French", "Sango", "Gbaya", "Banda", "Mbum", "Aka", "Ngbandi"],
    currency: "Central African CFA franc (XAF)",
    population: 5457000,
    area: 622984,
    timeZones: ["UTC+1 (WAT)"],
    callingCode: "+236",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/10/23/03/central-african-republic-26828_1280.png",
    description: "The Central African Republic (CAR) is a landlocked nation situated at the geographical heart of Africa, where the continent's northern and southern ecosystems converge. Despite its remarkable natural wealth—dense tropical forests, expansive savannas, and significant mineral deposits—the country has faced profound political instability since gaining independence from France in 1960. CAR encompasses extraordinary biodiversity, including forest elephants, lowland gorillas, and one of Africa's most pristine remaining wilderness areas in the northeast. The nation's diverse population includes over 80 ethnic groups, each with distinct cultural traditions, though ongoing humanitarian challenges and limited infrastructure have kept the country largely isolated from international tourism. For the intrepid traveler, CAR offers authentic encounters with traditional cultures, wildlife viewing in uncrowded settings, and landscapes that remain among the least explored on the continent.",
    whyVisit: "The Central African Republic appeals to travelers seeking genuine, off-the-beaten-path experiences far from conventional tourism circuits. The country's remarkable biodiversity includes Dzanga-Sangha Special Reserve, where visitors can observe forest elephants at Dzanga Bai clearing and potentially encounter lowland gorillas through established habituation programs. The capital Bangui, situated on the Ubangi River, offers insights into the nation's complex history and cultural diversity. Archaeological sites highlight the region's significant prehistory, while traditional villages maintain centuries-old practices. Though travel logistics are challenging and security considerations essential, CAR rewards visitors with experiences untouched by mass tourism—pristine ecosystems, authentic cultural exchanges, and the sense of discovery that has largely disappeared from more frequently visited destinations. Responsible tourism also provides crucial economic opportunities for communities in one of the world's least developed nations.",
    bestTimeToVisit: {
      text: "The most favorable time to visit the Central African Republic is during the dry season from November through February, when roads are more navigable and wildlife viewing is enhanced as animals congregate around diminishing water sources. Temperatures during this period typically range from 24-35°C (75-95°F), with lower humidity making outdoor activities more comfortable. The transition months of March-April and October can offer reasonable conditions with fewer visitors, though some afternoon showers should be expected. The primary rainy season from May through September brings regular precipitation, higher humidity, and potential transportation challenges as dirt roads become muddy or impassable, particularly in remote areas. However, this period transforms the landscape with lush greenery and can provide excellent photographic opportunities. For wildlife enthusiasts, the late dry season (January-February) offers optimal conditions in parks like Dzanga-Sangha, while cultural festivals often coincide with harvest periods in December and January.",
      months: ["November", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "The summer months of June through August constitute the heart of the Central African Republic's rainy season, particularly in the country's southern regions, which experience a more equatorial climate pattern. This period brings regular rainfall, with precipitation typically occurring in intense afternoon thunderstorms rather than daylong drizzles. Despite being the rainy season, days often begin with sunshine before clouds build. Temperatures range from 22-30°C (72-86°F), with high humidity levels making it feel warmer. The abundant rainfall transforms the landscape into vibrant greenery, with rivers and waterfalls reaching their peak flow. The northern regions experience slightly less rainfall than the south during this period. These conditions create challenging travel circumstances, particularly in rural areas where unpaved roads can become difficult to navigate, sometimes requiring 4WD vehicles. However, the lush vegetation and flowing waterways create spectacular scenery, and birdlife becomes especially active during these months.",
      winter: "The winter period from December through February represents the height of the dry season and generally offers the most comfortable travel conditions throughout the Central African Republic. Days are typically characterized by clear skies and abundant sunshine, with daytime temperatures ranging from 30-35°C (86-95°F) and nighttime temperatures dropping to a more comfortable 18-24°C (64-75°F), particularly in northern regions. Humidity levels decrease significantly compared to the rainy season, creating more pleasant conditions for outdoor activities. The Harmattan wind occasionally affects northern areas, bringing dusty conditions and hazy skies. As the dry season progresses, the landscape gradually transforms from green to golden-brown, especially in savanna regions, and water sources diminish, concentrating wildlife around permanent rivers and water holes. This season provides optimal wildlife viewing opportunities, particularly in protected areas like Dzanga-Sangha, where forest clearings (bais) attract numerous forest elephants and other wildlife.",
      spring: "Spring months (March-May) represent a transition period in the Central African Republic, with March typically maintaining dry season characteristics before the gradual onset of rains in April and May. Early spring features warm temperatures ranging from 25-38°C (77-100°F) with increasing humidity as the season progresses. By late April, afternoon thunderstorms become more frequent, especially in southern regions, bringing relief from the heat but increasing atmospheric moisture. This transitional period creates dynamic landscapes as dormant vegetation responds to the initial rains with fresh growth and flowering. Wildlife behavior shifts during this time as animals adjust to changing water availability. For travelers, early spring (March) offers good conditions similar to the dry season but with fewer visitors, while late spring requires more flexibility as weather patterns become less predictable. The increasing moisture during May can make remote roads challenging, though major routes generally remain passable as the heavy rains have not yet set in fully.",
      fall: "The fall months (September-November) mark another transitional period in the Central African Republic's climate, as the rainy season gradually gives way to drier conditions. September still experiences regular rainfall, particularly in southern regions, with high humidity and temperatures averaging 23-32°C (73-90°F). By October, precipitation begins decreasing noticeably, with rain events becoming less frequent and intense, especially in northern areas. November typically introduces the dry season proper, with significantly reduced rainfall, falling humidity, and slightly cooler overnight temperatures. This period features vibrant landscapes following the rainy season's abundance, with lush vegetation and full rivers gradually beginning to recede. Birdlife remains particularly active during these months, including both resident species and migratory birds arriving from the Palearctic. For travelers, late fall (November) offers increasingly favorable conditions as roads dry out and wildlife begins concentrating around permanent water sources, while still benefiting from the landscape's post-rainy season verdancy."
    },
    majorCities: [
      {
        name: "Bangui",
        description: "The capital and largest city of the Central African Republic sits on the northern banks of the Ubangi River, marking the border with the Democratic Republic of Congo. This riverside position has historically made Bangui an important trading hub, though the city retains a distinctly provincial character compared to other African capitals. Key landmarks include Notre-Dame Cathedral with its distinctive red brick architecture, the presidential palace, and the central market where traders sell everything from traditional crafts to tropical produce. The Boganda National Museum houses the country's most significant collection of cultural artifacts and historical exhibits. Despite infrastructure challenges, Bangui offers visitors essential services, including the country's only international airport, government offices for permits, and accommodation options ranging from basic guesthouses to the few international-standard hotels in the country. The city's layout reveals its colonial past, with broad avenues near administrative districts contrasting with vibrant residential neighborhoods where daily life unfolds with remarkable resilience despite ongoing challenges."
      },
      {
        name: "Berbérati",
        description: "Berbérati stands as the country's second-largest urban center, located in the southwest near the Cameroonian border. The city functions as a regional commercial hub for the surrounding agricultural areas, particularly for coffee and tobacco cultivation. Founded as a colonial outpost, Berbérati retains architectural elements from the French period alongside more modern structures and traditional housing. The city hosts important regional administrative offices and one of the country's larger markets, where goods from neighboring Cameroon mix with local products. A modest cathedral serves the significant Christian population, while the surrounding area features several artisanal mining operations, primarily for diamonds. Though facilities remain basic, Berbérati offers essential services for travelers moving between CAR and Cameroon, including modest guesthouses, fuel stations, and healthcare facilities. The surrounding region includes areas of transitional forest-savanna mosaic ecosystems that support diverse wildlife and traditional agriculture."
      },
      {
        name: "Bouar",
        description: "Located in the western region of the country along the main route to Cameroon, Bouar serves as a strategic transportation node and administrative center. The city is distinguished by its relatively high elevation (1,020 meters/3,350 feet), which creates a slightly cooler microclimate than much of the country. Historically significant as a colonial administrative post, Bouar contains some preserved buildings from this era. The surrounding area is known for mysterious megalithic structures called Tazunu, stone formations created by ancient inhabitants whose exact purpose remains debated by archaeologists. These stones, some arranged in circular patterns, represent one of the country's most significant archaeological treasures. The city hosts a regional market drawing traders from surrounding areas and neighboring countries. The cooler climate supports different agricultural patterns than lowland regions, including more temperate crops. For travelers, Bouar typically serves as a transit point rather than a destination itself, though the nearby megalithic sites attract those with archaeological interests."
      },
      {
        name: "Bambari",
        description: "Positioned near the geographical center of the country on the Ouaka River, Bambari functions as the primary urban center for the central regions. The city's location has made it historically significant as a meeting point between different ethnic groups, particularly the Banda and riverine peoples. This cultural convergence is reflected in the diverse products found in its markets, where traders sell goods ranging from agricultural products to artisanal crafts. The surrounding region features a transition zone between forest and savanna ecosystems, supporting both agricultural activities and livestock herding. Several traditional chiefs maintain compounds in or near the city, where aspects of pre-colonial governance structures continue alongside modern administrative systems. The Ouaka River provides both transportation and sustenance, with fishing as an important economic activity. Limited infrastructure includes basic government offices, minimal healthcare facilities, and simple accommodation options primarily serving NGO workers and the occasional traveler. Despite its modest size, Bambari plays a crucial role in regional commerce and administration for central CAR."
      },
      {
        name: "Bria",
        description: "Situated in the eastern part of the country, Bria has gained prominence due to the diamond mining activities in the surrounding area. The city serves as a center for both official diamond trading and, unfortunately, illicit traffic in conflict minerals. This economic driver has created a more dynamic urban environment than found in many secondary CAR cities, though development remains limited. Bria's marketplace reflects its position as a mining center, with traders offering both basic necessities and more specialized goods serving the mining sector. The surrounding landscape features a mixture of savanna and forest habitats transitioning toward the more densely forested regions to the south. Various ethnic groups converge in the area, creating a culturally diverse population. Infrastructure remains rudimentary, with limited electricity usually provided by private generators rather than a municipal grid. Several UN and humanitarian organizations maintain bases in Bria due to its regional importance and the complex security dynamics. For travelers, access to Bria typically requires special arrangements and security assessments, as conditions can change rapidly."
      }
    ],
    famousFor: [
      "Dzanga-Sangha Special Reserve - Protected area with forest elephants and lowland gorillas",
      "Bayanga - Gateway to wildlife viewing and Ba'Aka indigenous culture",
      "Bangui Rapids - Natural feature on the Ubangi River near the capital",
      "Bouar Megaliths - Ancient stone structures dating back to the megalithic period",
      "Traditional Ba'Aka Music - UNESCO-recognized polyphonic singing and complex rhythms"
    ],
    topAttractions: [
      {
        name: "Dzanga-Sangha Special Reserve",
        description: "Located in the southwestern corner of the country, this protected area represents one of Central Africa's most significant conservation zones and the country's premier wildlife destination. Covering approximately 4,500 square kilometers of dense lowland rainforest, the reserve forms part of the broader Sangha Trinational complex, a UNESCO World Heritage site shared with neighboring Cameroon and Republic of Congo. The reserve's centerpiece is Dzanga Bai, a natural forest clearing where dozens of forest elephants gather daily to consume mineral-rich soil and water, creating one of Africa's most remarkable wildlife spectacles. The area also supports habituated groups of western lowland gorillas, which can be tracked with local guides in one of the continent's least-visited gorilla experiences. Additionally, the reserve protects significant populations of forest buffalo, bongo antelope, and over 100 mammal species alongside exceptional birdlife. The indigenous Ba'Aka people work as trackers and guides, sharing their extraordinary forest knowledge with visitors. Though challenging to reach, Dzanga-Sangha offers wildlife encounters in a pristine setting largely unchanged for millennia.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Manovo-Gounda St. Floris National Park",
        description: "This extensive wilderness area in the northeastern region encompasses 17,400 square kilometers, making it the largest protected area in the Central African Republic and one of the most significant in the entire Sahel region. The park features a remarkable transition zone where Sudanian savanna ecosystems meet Congo Basin influences, creating diverse habitats including woodlands, seasonal wetlands, and gallery forests along watercourses. This ecological diversity once supported exceptional wildlife populations, including elephants, leopards, cheetahs, and numerous antelope species. The Bamingui and Manovo rivers flow through the park, creating essential wildlife corridors and sustaining life during the dry season. Though designated as a UNESCO World Heritage Site in 1988, subsequent political instability has severely impacted conservation efforts, placing the site on the endangered list. Despite these challenges, the park's remote location has preserved significant wilderness values, and limited management operations continue with international support. Access remains extremely restricted, typically requiring special permissions and arrangements with conservation authorities.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Bouar Megaliths",
        description: "These mysterious stone structures near the western city of Bouar represent the Central African Republic's most significant archaeological site and one of Central Africa's most important prehistoric monuments. Dating between the 5th and 17th centuries, these carefully arranged stone formations include approximately 70 sites spread across the region. The megaliths vary in configuration, with some arranged in circular patterns resembling ceremonial spaces, while others appear as individual standing stones or cairns. Many stones feature intentional shaping or primitive carving, indicating sophisticated prehistoric craftsmanship. Archaeologists believe these structures served ceremonial or funerary purposes for advanced prehistoric societies, though their exact function and the civilization that created them remain partially shrouded in mystery. The largest concentration is found at Ndakovo, featuring multiple well-preserved stone arrangements. Unlike many global megalithic sites, the Bouar structures remain relatively unstudied and rarely visited by tourists, offering a genuine archaeological discovery experience. Local guides can provide access to the primary sites, which continue to hold cultural significance for surrounding communities.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Bangui and the Ubangi River",
        description: "The capital city's most distinctive natural feature is its position along the Ubangi River, which forms a natural border with the Democratic Republic of Congo and provides a lifeline for transportation and commerce. The riverside area offers the city's most scenic views, particularly at sunset when traditional pirogues (wooden canoes) and larger vessels ply the waters against the backdrop of distant hills. The Rapids (Sango) near the city create dramatic water formations, especially during high-water periods, and gives the national language its name. The Avenue of Martyrs and Republic Square represent the city's civic center, where important government buildings and monuments commemorate the nation's complex path to independence. K-Cinq (Kilometer Five) district serves as a commercial hub with markets, restaurants, and more contemporary urban atmosphere. For visitors, Bangui provides essential context for understanding the country's historical development, contemporary challenges, and remarkable cultural resilience. The central market offers opportunities to purchase traditional crafts, textiles, and artwork, while the riverside bars and restaurants provide relaxed settings to experience local daily life.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Ba'Aka Cultural Experiences",
        description: "The indigenous Ba'Aka people (sometimes called Bayaka or BaAka) maintain traditional forest-based lifeways within and around the Dzanga-Sangha Reserve, offering visitors rare insights into one of Africa's oldest cultural traditions. These semi-nomadic hunter-gatherers possess extraordinary knowledge of forest ecology, traditional medicine, and sustainable resource use developed over thousands of years of forest adaptation. Cultural programs organized through the reserve allow respectful interaction with Ba'Aka communities, where visitors can learn about traditional honey collection, medicinal plant identification, net hunting techniques, and shelter construction using only forest materials. Most remarkable is the opportunity to experience Ba'Aka musical traditions, recognized by UNESCO as an Intangible Cultural Heritage of Humanity. Their polyphonic singing features complex overlapping rhythms and harmonies, often accompanied by distinctive water drumming where performers create percussion by striking river water. These cultural exchanges provide crucial economic alternatives for Ba'Aka communities facing significant pressures on their traditional territories and practices, helping support cultural preservation through sustainable tourism.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Central African Republic cuisine reflects the nation's position at the crossroads of culinary traditions from Central, East, and West Africa, adapted to locally available ingredients and traditional preparation methods. Staple foods show regional variation, with cassava (manioc) dominating in forest areas, while sorghum and millet are more common in northern regions. Most meals center around a starchy base accompanied by sauces made from local vegetables, occasional meat or fish, and distinctive spice combinations. Wild foods remain important dietary components, particularly in rural areas where hunting and gathering traditions continue. French colonial influence appears primarily in urban cooking, where baguettes and certain preparation techniques reflect historical connections. Food often serves important social and ceremonial functions beyond basic nutrition, with communal meals reinforcing community bonds. Despite limited infrastructure, markets in major towns offer remarkable diversity of fresh ingredients, reflecting the country's varied ecosystems.",
      famousDishes: [
        "Gozo - Porridge-like dish made from cassava or corn flour, forming a staple carbohydrate base",
        "Kanda ti Nyma - Spicy meat stew typically prepared with tomatoes, onions, and local chilies",
        "Poulet à la Moambe - Chicken cooked in palm butter sauce with tomatoes and spices",
        "Foutou - Pounded root vegetables (typically cassava) formed into a dense, elastic dough",
        "Kpem - Wild forest game meat prepared with bitter herbs and spices (particularly in rural areas)"
      ]
    },
    culturalCustoms: [
      "Greeting Rituals - Handshakes and inquiries about family wellbeing are essential before discussing business",
      "Traditional Healing - Many communities maintain traditional medicine practices alongside modern healthcare when available",
      "Storytelling Traditions - Oral history transmission through evening storytelling sessions in villages",
      "Elder Respect - Significant deference shown to community elders who often hold decision-making authority",
      "Gift Exchange - Bringing small gifts when visiting homes is customary, particularly food items or practical goods"
    ],
    travelTips: [
      "Arrange all permits and travel documentation well in advance through official channels",
      "Hire experienced local guides with updated security information for all travel outside Bangui",
      "Carry sufficient cash (Euros or CFA francs) as ATMs are extremely limited and unreliable",
      "Pack comprehensive medical supplies including antimalarials and broad-spectrum antibiotics",
      "Register with your embassy in Bangui upon arrival if possible",
      "Confirm current security situations through multiple sources before traveling between regions"
    ],
    safetyInfo: "The Central African Republic presents significant security challenges requiring careful consideration and thorough preparation before travel. The security situation remains fluid, with conditions varying considerably between regions and changing rapidly. Most foreign governments maintain travel advisories recommending against non-essential travel to much of the country, with some areas considered entirely off-limits. Travelers should register with their embassies, maintain regular communication with reliable local contacts, and stay informed about developing situations. Protected areas like Dzanga-Sangha typically maintain better security conditions through conservation partnerships and ranger presence, though even these require updated assessment before visits. Health risks include malaria, typhoid, yellow fever, and limited medical facilities—comprehensive travel insurance including evacuation coverage is essential, as serious medical issues require transport to neighboring countries. Despite these challenges, with proper preparation, professional guidance, and realistic expectations, certain areas can be visited, particularly the southwestern regions near Bayanga.",
    sustainableTourism: "Sustainable tourism represents a crucial development opportunity for the Central African Republic, though the sector remains in early stages of development. The Dzanga-Sangha Protected Areas complex offers the country's most established sustainable tourism model, where visitor fees directly support conservation activities, anti-poaching efforts, and community development projects. These initiatives provide economic alternatives for communities who might otherwise depend on unsustainable resource extraction. Cultural tourism focusing on indigenous Ba'Aka traditions has been carefully developed to ensure community benefits while respecting cultural integrity and traditional rights. Community-owned accommodations and guide services help ensure tourism revenue reaches local populations rather than external operators. For travelers, sustainable practices include respecting wildlife viewing guidelines, minimizing waste (particularly plastics, which have limited disposal options), patronizing locally-owned businesses, and approaching cultural interactions with appropriate sensitivity. The country's nascent tourism infrastructure means visitors have significant responsibility for ensuring their presence contributes positively to conservation and community wellbeing.",
    visaRequirements: "All visitors to the Central African Republic require a valid visa, which must be obtained in advance from a CAR diplomatic mission—visas on arrival are not reliably available. Application requirements typically include a passport valid for at least six months beyond the planned departure date, a formal letter of invitation from a registered organization in CAR, proof of accommodation arrangements, return/onward travel documentation, and in some cases, additional supporting materials such as bank statements. The visa application process can be lengthy, sometimes requiring several weeks, and procedures may vary between different embassies or consulates. Some nationalities face additional restrictions or scrutiny. Yellow fever vaccination certification is mandatory for all travelers. Upon arrival, visitors must register with immigration authorities in Bangui within 72 hours. For extended stays, temporary residence permits may be required. Due to the complex administrative procedures and changing requirements, working with experienced local partners or specialized travel agencies familiar with current regulations is highly recommended.",
    budget: {
      budget: "75-120 USD per day for basic accommodations, simple meals, and essential local transportation",
      midRange: "120-250 USD per day for better accommodations in Bangui, guided experiences, and reliable transportation",
      luxury: "250+ USD per day for the best available accommodations, organized tours with experienced guides, and specialized transport arrangements"
    },
    transportationOptions: [
      "Air Travel - Limited international flights to Bangui M'Poko Airport, primarily from African hub cities",
      "River Transport - Traditional boats and larger vessels operate on the Ubangi River with irregular schedules",
      "4x4 Vehicles - Essential for travel outside major towns, particularly during the rainy season",
      "Shared Taxis - Connect major towns with unpredictable schedules and varying comfort levels",
      "Motorcycle Taxis - Common within towns and villages for short distances",
      "Walking - The primary transportation mode in many rural communities and within smaller towns"
    ],
    neighboringCountries: [
      "Cameroon", "Chad", "Sudan", "South Sudan", "Democratic Republic of the Congo", "Republic of the Congo"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Wildlife", "Indigenous Cultures", "Rainforests", "Off the Beaten Path", "Adventure Travel", 
    "Conservation", "Archaeological Sites", "River Landscapes", "Cultural Heritage", "Wilderness"
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

export default CentralAfricanRepublicCountry; 