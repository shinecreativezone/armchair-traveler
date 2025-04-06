import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ChinaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "China",
    slug: "china",
    continent: "Asia",
    capital: "Beijing",
    languageOfficial: "Standard Chinese (Mandarin)",
    languagesSpoken: ["Mandarin", "Cantonese", "Wu", "Min", "Xiang", "Gan", "Hakka"],
    currency: "Chinese Yuan Renminbi (CNY)",
    population: 1412000000,
    area: 9596961,
    timeZones: ["UTC+8 (CST)"],
    callingCode: "+86",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/13/14/15/china-162389_1280.png",
    description: "China, the world's most populous nation and one of its oldest continuous civilizations, presents an extraordinary tapestry of ancient heritage and futuristic innovation. With a recorded history spanning over 5,000 years, the country encompasses vast geographical diversity—from the Himalayan peaks and Gobi Desert to tropical forests and bustling megacities. Unified under successive dynasties yet culturally diverse across its regions, China's profound philosophical traditions, architectural marvels, artistic achievements, and culinary sophistication have influenced global culture for millennia. Today, as an economic powerhouse undergoing rapid modernization, China offers visitors an unparalleled opportunity to witness both carefully preserved traditions and ambitious visions of the future.",
    whyVisit: "China rewards travelers with experiences spanning an exceptional range of history, culture, and landscapes. Its UNESCO World Heritage sites include not only the iconic Great Wall and Forbidden City but also lesser-known archaeological treasures, sacred mountains, and traditional villages. Urban explorers can contrast Shanghai's futuristic skyline with Beijing's imperial grandeur or discover uniquely preserved historic centers in cities like Pingyao and Lijiang. Nature enthusiasts will find dramatic landscapes from the karst formations of Guilin to the rainbow mountains of Zhangye Danxia. China's diverse regional cuisines offer culinary adventures beyond familiar favorites, while its high-speed rail network makes this vast country remarkably navigable. Whether experiencing traditional tea ceremonies, joining morning tai chi sessions in city parks, or exploring remote minority villages, China offers endless cultural immersion opportunities.",
    bestTimeToVisit: {
      text: "The optimal time to visit China depends on the regions you plan to explore in this vast and climatically diverse country. Spring (April-May) and autumn (September-October) generally offer the most pleasant conditions nationwide, with moderate temperatures and less rainfall than summer. These shoulder seasons are ideal for visiting major attractions like Beijing, Xi'an, and Shanghai with smaller crowds than during peak domestic tourism periods. Summer (June-August) brings heat and humidity to much of the country but offers the best conditions for visiting Tibet, Xinjiang, and other western regions. Winter (November-March) brings cold temperatures to northern China but features fewer tourists and dramatic snow scenes at destinations like Harbin's Ice Festival and mountain areas. China's major national holidays, particularly Chinese New Year (January/February) and National Day (first week of October), bring massive domestic tourism and are generally best avoided unless experiencing these celebrations is a priority.",
      months: ["April", "May", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Summer (June-August) in China varies dramatically by region. Southern provinces like Guangdong and Yunnan experience high humidity with temperatures typically ranging from 25-35°C (77-95°F) and frequent rainfall, creating lush landscapes but occasionally challenging conditions for exploration. Central regions including Shanghai and the Yangtze River basin can reach 35-40°C (95-104°F) with high humidity, creating the infamous 'sauna effect' in cities. Northern areas including Beijing experience hot, occasionally humid conditions but with somewhat drier air. Western regions like Xinjiang feature extremely hot but dry desert conditions, while the Tibetan Plateau enjoys its most accessible weather with moderate temperatures. Summer corresponds with the university holiday period, making this China's peak domestic tourism season with higher prices and crowds at major attractions.",
      winter: "Winter (December-February) transforms China's northern regions, with Beijing temperatures typically ranging from -10°C to 4°C (14-39°F) under frequently clear blue skies. The northeast experiences severe cold, with Harbin regularly dropping below -20°C (-4°F), creating perfect conditions for its world-famous Ice Festival. Central China, including Shanghai, maintains milder but damp conditions ranging from 0-10°C (32-50°F), with minimal snowfall but frequent overcast skies. Southern regions like Guangdong and Hainan Island offer the mildest winter conditions (15-20°C/59-68°F), making them popular winter escapes for domestic tourists. Western mountain regions become largely inaccessible due to snow, while the Tibetan Plateau experiences extreme cold and limited tourism. Winter presents excellent values for international visitors to major cities, with significantly reduced crowds at major attractions.",
      spring: "Spring (March-May) brings dramatic seasonal transitions across China. Southern regions reawaken earliest, with temperatures in Guangdong and Yunnan reaching comfortable levels (20-25°C/68-77°F) by March, accompanied by blooming landscapes. Central China, including Shanghai and Suzhou, experiences its most photogenic season as classical gardens burst with blossoms, particularly during April when temperatures settle in the pleasant 15-22°C (59-72°F) range. Northern China thaws gradually, with Beijing typically enjoying comfortable conditions by late April or May when temperatures range from 20-25°C (68-77°F). Spring rain patterns vary by region but generally increase throughout the season, sometimes affecting visibility at scenic areas. This shoulder season offers a good balance of comfortable temperatures and manageable crowd levels before the summer domestic tourism peak.",
      fall: "Fall (September-November) represents China's most universally pleasant season. Northern regions, including Beijing, feature clear blue skies, declining humidity, and comfortable temperatures ranging from 15-25°C (59-77°F) in September and October before the winter chill arrives in November. Central China experiences a gradual cooling, with Shanghai temperatures transitioning from summer warmth in September to crisp autumn conditions by November. The season brings particularly stunning landscapes to mountain areas like Huangshan and Jiuzhaigou, where fall foliage creates spectacular scenery. Western regions including Xinjiang remain accessible with mild daytime temperatures but increasingly cold nights. This period after the summer tourism peak but before winter cold offers perhaps the best overall combination of good weather, manageable crowds, and visual beauty across most of China's diverse regions."
    },
    majorCities: [
      {
        name: "Beijing",
        description: "China's political and cultural heart juxtaposes imperial grandeur with ambitious modernity. Six UNESCO World Heritage sites, including the Forbidden City, Temple of Heaven, and nearby Great Wall sections, showcase the city's historical significance as the imperial capital through multiple dynasties. The capital's distinct urban plan features concentric ring roads expanding outward from the central axis of ancient ceremonial buildings. Beyond monumental landmarks, the city reveals its character through hutong neighborhoods (traditional alleyways), vibrant night markets, and parks where locals practice tai chi at dawn. Modern Beijing makes architectural statements through structures like the Bird's Nest Olympic Stadium and CCTV Tower while maintaining ancient Chinese urban planning principles emphasizing symmetry and orientation. The city's distinctive cuisine, headlined by Peking duck, offers its own cultural education."
      },
      {
        name: "Shanghai",
        description: "China's largest city epitomizes the country's rapid transformation and global ambitions. The futuristic Pudong skyline, dominated by the Oriental Pearl Tower and Shanghai Tower, creates an iconic vista when viewed across the Huangpu River from the historic Bund promenade. This waterfront boulevard, lined with European-style buildings from Shanghai's early 20th-century international settlement era, symbolizes the city's unique position between East and West. Beyond these postcard images, Shanghai reveals its character through the preserved shikumen houses of the French Concession, the ancient gardens of nearby water towns, vibrant contemporary art districts, and a food scene ranging from street-side soup dumplings to world-class fine dining. The city's commercial energy, cosmopolitan outlook, and efficient infrastructure including the world's largest metro system make it China's most internationally accessible metropolis."
      },
      {
        name: "Xi'an",
        description: "This ancient capital, marking the eastern terminus of the Silk Road, connects visitors to China's formative imperial era. Most famous for the Terracotta Army—thousands of life-sized warrior figures buried with Emperor Qin Shi Huang in 210 BCE—Xi'an offers much more historical depth than this single spectacular site. The world's most complete ancient city wall encircles a center where the Tang Dynasty's grid layout remains visible in today's streets. The Muslim Quarter, established by Silk Road traders over a millennium ago, maintains distinctive cultural and culinary traditions, while the city's numerous museums display treasures from the Zhou, Qin, Han, and Tang dynasties that established the foundations of Chinese civilization. Though thoroughly modernized beyond its historic core, Xi'an retains a distinctly different atmosphere from China's coastal cities, providing deeper connections to the country's ancient roots."
      },
      {
        name: "Chengdu",
        description: "The capital of Sichuan province combines a famously relaxed lifestyle with rich cultural traditions and unparalleled cuisine. Most internationally known for the Chengdu Research Base of Giant Panda Breeding, where visitors can observe China's national treasure in a conservation setting, the city offers numerous other distinctive experiences. Ancient tea houses where locals pass hours playing mahjong exemplify the city's laid-back pace, while the reconstructed Jinli Ancient Street showcases traditional architecture and artisans. The city's world-renowned food culture, centered around the distinctive numbing spiciness of Sichuan peppercorns, draws culinary enthusiasts from throughout China and beyond. Chengdu also serves as a gateway to western China's natural and cultural diversity, including sacred Mount Emei, the Jiuzhaigou Nature Reserve, and Tibetan plateau regions. Recent years have seen substantial modernization, though the city maintains its reputation for prioritizing quality of life."
      },
      {
        name: "Hong Kong",
        description: "This Special Administrative Region offers a uniquely intense urban experience combining Chinese traditions with international influences from its British colonial period. The city's iconic skyline, best viewed from Victoria Harbor during the nightly Symphony of Lights display, showcases one of the world's most dramatic concentrations of skyscrapers set against mountain backdrops. Beyond this postcard image, Hong Kong reveals its character through distinct neighborhoods ranging from the traditional medicine shops of Sheung Wan to the luxury boutiques of Central and the chaotic neon streetscapes of Mong Kok. Despite extreme urban density, the territory includes surprising natural areas—peaceful beaches, hiking trails, and outlying islands lie just minutes from urban centers. Food represents another highlight, from world-class restaurants to humble dai pai dong street stalls. While operating under a different administrative system than mainland China, Hong Kong provides visitors a fascinating introduction to Chinese culture with added layers of international accessibility."
      }
    ],
    famousFor: [
      "Great Wall - Ancient defensive structure spanning over 13,000 miles across northern China",
      "Terracotta Army - Life-sized clay soldiers buried with Emperor Qin Shi Huang in 210 BCE",
      "Giant Pandas - Conservation centers in Sichuan province protecting China's beloved national animal",
      "Chinese Cuisine - Diverse regional cooking traditions from fiery Sichuan to delicate Cantonese",
      "Tea Culture - Ancient traditions surrounding cultivation and ceremonial preparation of tea"
    ],
    topAttractions: [
      {
        name: "Great Wall of China",
        description: "This monumental defensive structure, stretching approximately 13,170 miles across China's historic northern borders, represents both an engineering marvel and a powerful symbol of Chinese civilization. Construction began in the 7th century BCE and continued for over 2,000 years through multiple dynasties, with the best-preserved sections dating from the Ming era (1368-1644). While popular restored sections like Badaling and Mutianyu near Beijing offer accessibility and facilities, less-visited segments such as Jinshanling and Simatai provide more atmospheric experiences with fewer crowds. The wall's strategic importance diminished after the Qing Dynasty's expansion, but its cultural significance continued to grow. Beyond its imposing watchtowers and undulating pathways across mountain ridges, the Great Wall embodies Chinese persistence and the enormous human cost of imperial ambitions.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Forbidden City",
        description: "The world's largest palace complex served as the imperial residence and political center of China for nearly 500 years, housing 24 emperors from the Ming and Qing dynasties. Completed in 1420, this massive compound encompasses 980 buildings across 180 acres, surrounded by a 52-meter wide moat and 10-meter high walls. The design follows strict feng shui principles and traditional Chinese architectural hierarchy, with yellow-tiled roofs and red walls symbolizing imperial authority. Beyond its imposing halls used for ceremonies and governance, the complex includes private quarters, gardens, libraries, and workshops where court life unfolded. Now operating as the Palace Museum, the Forbidden City houses over 1.8 million artifacts from the imperial collections. Despite receiving over 14 million visitors annually, its vast scale allows glimpses of tranquility, particularly in the innermost courtyards and gardens.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Terracotta Army",
        description: "This extraordinary archaeological site features thousands of life-sized clay soldiers buried near the mausoleum of Emperor Qin Shi Huang, who unified China in 221 BCE, establishing the nation's imperial system. Discovered accidentally by farmers in 1974, the underground army includes warriors, chariots, and horses arranged in precise military formation to protect the emperor in the afterlife. Each soldier features unique facial features and details, from hairstyles to armor, reflecting remarkable artistic achievement. The site, divided into three major excavation pits housed under protective structures, continues yielding new discoveries. Beyond the warriors themselves, the broader mausoleum complex contains additional pits with bronze chariots, stables, officials, acrobats, and musicians. The site provides profound insights into the First Emperor's unprecedented power and ambition, which established foundations for Chinese civilization that endured for two millennia.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Li River and Guilin Karst Mountains",
        description: "This spectacular landscape in Guangxi province features thousands of distinctive limestone karst formations rising dramatically from flat floodplains, creating scenery that has inspired Chinese artists for centuries. The 83-kilometer stretch of the Li River between Guilin and Yangshuo offers the region's most iconic views, traditionally experienced via bamboo raft or passenger boat journeys. The area's unique topography developed over 200 million years as rainfall dissolved the region's limestone bedrock, creating both the distinctive above-ground peaks and extensive underground cave systems adorned with stalactites and stalagmites. Beyond natural beauty, the region showcases traditional rural life in southern China through riverside villages, terraced rice fields, and cormorant fishing demonstrations. While increasingly developed for tourism, particularly around Yangshuo, the area's scale ensures that tranquil experiences remain accessible in less-visited sections.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Chengdu Research Base of Giant Panda Breeding",
        description: "This world-renowned conservation center provides visitors the opportunity to observe China's beloved national symbol in a natural setting. Established in 1987 with six rescued giant pandas, the facility now houses over 100 pandas across 92 acres of bamboo forest habitat designed to resemble their natural environment. Beyond serving as a popular tourist attraction, the center conducts serious research and breeding programs that have significantly contributed to increasing the wild panda population from fewer than 1,000 to nearly 1,900 individuals. The base features multiple viewing areas where visitors can observe pandas at different life stages, from playful cubs to mature adults, particularly active during morning feeding times. Educational exhibits explain challenges facing wild pandas and conservation efforts, while the facility also protects and breeds red pandas and other endangered species. The center exemplifies China's growing commitment to wildlife conservation and sustainable tourism.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Chinese cuisine encompasses eight major culinary traditions developed across diverse regions with distinct ingredients, techniques, and flavor principles. Rather than a single national cuisine, China offers multiple sophisticated regional cooking systems evolved over thousands of years. Northern cuisines tend toward wheat-based staples, pronounced garlic and onion flavors, and preservation techniques suited to colder climates. Southern traditions favor rice, fresh seafood, and more delicate seasonings. Western regions incorporate more lamb, yogurt, and spices reflecting Central Asian influences, while eastern coastal cuisines emphasize fresh seafood and more subtle flavors. Common elements across regions include balancing flavors according to traditional Chinese medicine concepts, emphasizing fresh ingredients, precise cutting techniques, and cooking methods that developed to conserve fuel. Contemporary Chinese dining reflects both strong regional traditions and modern innovations.",
      famousDishes: [
        "Peking Duck - Imperial Beijing specialty of roast duck with thin, crisp skin served with pancakes and condiments",
        "Dim Sum - Cantonese tradition of small, often steamed plates including dumplings, buns, and rice noodle rolls",
        "Mapo Tofu - Sichuan dish combining soft tofu with minced meat in spicy bean and chili sauce with numbing peppercorns",
        "Xiaolongbao - Soup dumplings from Shanghai with thin wrappers containing both meat filling and hot broth",
        "Hand-Pulled Noodles (Lamian) - Northwestern specialty where dough is stretched and folded repeatedly to create chewy noodles"
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
      "Download essential apps - WeChat, Baidu Maps, and translation tools before arrival, as many Western apps don't function in China",
      "Carry cash - While mobile payments dominate in cities, they typically require Chinese bank accounts; foreign cards aren't widely accepted",
      "Plan for internet restrictions - Major international sites and apps are blocked; consider a legal VPN solution arranged before arrival",
      "Learn basic Mandarin phrases - English proficiency varies widely outside major tourist areas and international hotels",
      "Be prepared for different etiquette - Regarding personal space, queuing, and noise levels in public places",
      "Secure visa requirements early - Most foreigners need visas obtained in advance through Chinese embassies or consulates"
    ],
    safetyInfo: "China ranks among the world's safer destinations for travelers, with violent crime against foreigners extremely rare. The most significant safety concerns involve traffic safety, as pedestrians often lack right-of-way, and road regulations may differ from Western norms. Petty theft occasionally occurs in crowded tourist areas, though comprehensive surveillance systems and police presence have reduced such incidents in recent years. Food and water safety have improved dramatically in established tourism regions, though travelers with sensitive stomachs should still exercise caution with street food and drink bottled water. Air pollution represents a health consideration in major cities, particularly during winter months. The public health system provides adequate care in major cities, though language barriers may pose challenges. Political sensitivities can affect travel in certain regions, particularly western provinces, where special permits may be required.",
    sustainableTourism: "China's approach to tourism development continues evolving, with increasing emphasis on environmental sustainability balancing earlier focus on infrastructure development. National initiatives promoting \"ecological civilization\" have accelerated environmental protection efforts around major natural attractions like Jiuzhaigou Nature Reserve and Zhangjiajie, with entrance quotas, improved waste management, and restoration programs. The government has implemented strict environmental regulations at UNESCO sites and scenic areas, sometimes closing attractions temporarily for ecological recovery. Traditional villages increasingly benefit from cultural preservation initiatives that maintain authentic architecture while improving living standards for residents. Travelers can support sustainability by visiting during off-peak periods, respecting daily visitor quotas at natural sites, choosing certified eco-friendly accommodations where available, and engaging with genuine cultural experiences that benefit local communities rather than commercialized performances. China's extensive high-speed rail network offers a lower-carbon alternative to domestic flights.",
    visaRequirements: "Most foreign nationals require a visa to enter mainland China, with limited exceptions for transit passengers and visitors to certain free trade zones like Hainan Island. Standard tourist (L) visas typically allow stays of 30 to 90 days and require application through Chinese embassies or consulates before travel. The application process requires a passport valid for at least six months with blank visa pages, a completed application form, recent passport photos, proof of onward travel, and sometimes hotel reservations or invitation letters. Processing times and documentation requirements vary by embassy but typically take 4-7 working days. Multiple-entry visas with validity up to 10 years are available for citizens of some countries, including the United States. Hong Kong and Macau operate separate immigration policies, allowing visa-free entry for many nationalities. Regulations change periodically, so consulting the nearest Chinese embassy website for current requirements is essential.",
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
      "Public Buses - Comprehensive coverage within cities but can be challenging for non-Chinese speakers"
    ],
    neighboringCountries: [
      "Afghanistan", "Bhutan", "India", "Kazakhstan", "Kyrgyzstan", "Laos", "Mongolia", "Myanmar", "Nepal", "North Korea", "Pakistan", "Russia", "Tajikistan", "Vietnam"
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

export default ChinaCountry; 