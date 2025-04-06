import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BotswanaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Botswana",
    slug: "botswana",
    continent: "Africa",
    capital: "Gaborone",
    languageOfficial: "English",
    languagesSpoken: ["English", "Setswana", "Kalanga", "Sekgalagadi"],
    currency: "Botswana Pula (BWP)",
    population: 2352000,
    area: 581730,
    timeZones: ["GMT+2 (CAT)"],
    callingCode: "+267",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Botswana is a landlocked country in Southern Africa, known for its dramatic landscapes, abundant wildlife, and stable democracy. Home to the vast Kalahari Desert, the magnificent Okavango Delta, and some of Africa's most spectacular safari destinations, Botswana offers exceptional wildlife viewing in a pristine natural environment.",
    whyVisit: "Botswana offers a unique safari experience distinguished by its commitment to sustainable, low-impact tourism and extraordinary wildlife encounters. Unlike more developed safari destinations, Botswana's conservation-focused approach limits visitor numbers in protected areas, ensuring intimate wildlife encounters without the crowds. The Okavango Delta—a UNESCO World Heritage site and one of Africa's last remaining untouched wilderness areas—presents a magical landscape where water transforms desert into an intricate maze of channels, islands, and floodplains teeming with diverse wildlife. Botswana's political stability, investment in tourism infrastructure, and English-speaking population make it accessible yet authentic. Visitors can witness the world's largest elephant population in Chobe National Park, track endangered wild dogs in Moremi Game Reserve, experience cultural interactions with the San Bushmen who have adapted to the Kalahari Desert for thousands of years, and observe rare species like sitatunga and puku antelope in their natural habitats. From luxury tented camps to mokoro (dugout canoe) excursions and mobile safari adventures, Botswana delivers profound wilderness experiences while maintaining its commitment to conservation, making it an ideal destination for conscientious travelers seeking meaningful connections with Africa's wild places.",
    bestTimeToVisit: {
      text: "The best time to visit Botswana is during the dry season (May-October) when wildlife congregates around water sources, making game viewing exceptional. Temperatures are mild (20-30°C/68-86°F) and the risk of malaria is lowest. The wet season (November-April) offers lush landscapes, birdwatching, and lower prices, but some areas become inaccessible due to flooding.",
      months: ["May", "June", "July", "August", "September", "October"]
    },
    weatherInfo: {
      summer: "Summer (November to March) brings hot temperatures ranging from 30-40°C (86-104°F) with high humidity. Afternoon thunderstorms are common, transforming the landscape to vibrant green. This is the wet season when some dirt roads become impassable, but birdwatching is exceptional with migratory species present.",
      winter: "Winter (May to August) offers warm, sunny days with temperatures between 20-25°C (68-77°F) and cold nights that can drop to 0°C (32°F) or below, especially in desert areas. This dry season provides the best wildlife viewing as animals concentrate around dwindling water sources. Mornings and evenings require warm clothing for safari activities.",
      spring: "Spring (September to October) is the hottest and driest period with temperatures often exceeding a scorching 40°C (104°F). Water sources are at their lowest, creating excellent wildlife viewing conditions as animals gather at remaining waterholes. Dust and dry conditions characterize the landscape before the rains arrive.",
      fall: "Fall (April) is a transitional period as the rains diminish and temperatures become milder, ranging from 15-30°C (59-86°F). The landscape remains green from the wet season but begins to dry out. Wildlife viewing improves as vegetation thins, and the Okavango Delta's floodwaters start rising from rainfall in Angola."
    },
    majorCities: [
      {
        name: "Gaborone",
        description: "The capital and largest city, Gaborone is a modern urban center with a relaxed atmosphere. Key attractions include the National Museum and Art Gallery showcasing Botswana's cultural heritage, the imposing Main Mall with its government buildings and shopping, and the Gaborone Game Reserve where visitors can spot wildlife within city limits. The city serves as both the commercial hub of the country and a gateway to natural attractions in southern Botswana."
      },
      {
        name: "Francistown",
        description: "Botswana's second-largest city, located in the northeast, has its roots in the 19th-century gold rush. Today, it serves as an important mining and transportation center. Visitors can explore the Supa Ngwao Museum featuring local history and traditional crafts, the ruins of the Monarch Mine representing the area's gold mining heritage, and nearby Tachila Nature Reserve offering wildlife viewing opportunities without traveling to more distant parks."
      },
      {
        name: "Maun",
        description: "Known as the gateway to the Okavango Delta, this frontier town blends traditional village life with tourism infrastructure. Once a dusty outpost, Maun now serves as the jumping-off point for safaris into northern Botswana's wildlife areas. The town features the Nhabe Museum showcasing local art and history, the picturesque Thamalakane River, and numerous safari operators and lodges preparing visitors for wilderness adventures."
      },
      {
        name: "Kasane",
        description: "This small town on the Chobe River serves as the northern entrance to Chobe National Park, famous for its massive elephant population. The town's strategic location where four countries nearly meet (Botswana, Zambia, Zimbabwe, and Namibia) makes it an important tourism hub. Visitors use Kasane as a base for boat safaris on the Chobe River, game drives in the national park, and day trips to Victoria Falls in neighboring Zimbabwe."
      },
      {
        name: "Lobatse",
        description: "One of Botswana's oldest towns, Lobatse has historical significance as the site of pre-independence political developments. Today, it's known for the Botswana Meat Commission headquarters, reflecting the country's important cattle industry. Attractions include the Lobatse Clay Works, the historic colonial courthouse where key legal cases were tried during the pre-independence era, and nearby hiking trails in the surrounding hills and caves."
      }
    ],
    famousFor: [
      "Okavango Delta - the world's largest inland delta and a UNESCO World Heritage site",
      "Exceptional wildlife safaris with high elephant concentrations in Chobe National Park",
      "Sustainable tourism model with high-quality, low-impact safari experiences",
      "San Bushmen culture and ancient rock art in the Kalahari Desert",
      "Political stability and successful wildlife conservation practices"
    ],
    topAttractions: [
      {
        name: "Okavango Delta",
        description: "This UNESCO World Heritage site is one of Africa's most extraordinary ecosystems—a 15,000 square kilometer inland delta where the Okavango River fans out across the Kalahari sands, creating a maze of channels, islands, and floodplains. This miracle of nature supports incredible biodiversity: large populations of elephant, buffalo, giraffe, zebra, and various antelope species, along with predators including lion, leopard, and endangered wild dog. Visitors can explore this watery wilderness via mokoro (traditional dugout canoe) poles by local guides through papyrus-lined channels, stay at intimate tented camps on private concessions, take guided walking safaris on islands, or observe wildlife from motorized boats. The delta's seasonal flooding (peaking June-August) creates constantly changing landscapes and wildlife distributions.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Chobe National Park",
        description: "Botswana's first national park is home to approximately 120,000 elephants—the highest concentration in Africa—along with enormous buffalo herds and abundant predators. The park's lifeline is the Chobe River, where afternoon boat cruises provide unforgettable close encounters with elephants swimming across channels, hippos, crocodiles, and numerous water birds. The Savuti Channel area in the southwest features open savannah famous for lion prides that have adapted to hunting elephants, while the Linyanti Marshes in the northwest offer exclusive wildlife viewing in secluded wetlands. Game drives throughout the park reveal diverse habitats supporting over 450 bird species and classic African mammals including giraffes, zebras, kudu, and impala, with excellent predator sightings.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Moremi Game Reserve",
        description: "Occupying the eastern third of the Okavango Delta, this reserve combines permanent water systems with seasonal floodplains and dry peninsulas, creating diverse habitats supporting extraordinary wildlife density and diversity. Chief's Island, the largest landmass within the reserve, is renowned for big cat sightings, particularly leopards, while the Khwai River area features dense concentrations of animals and birds along its fertile floodplains. Unlike other Botswana wilderness areas, Moremi allows self-drive safaris on its network of sand tracks, though many visitors opt for guided experiences from luxury lodges or mobile tented camps. The reserve is one of Africa's best locations for spotting the endangered African wild dog, alongside all major predators and herbivores, making it an essential component of any comprehensive Botswana safari.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Central Kalahari Game Reserve",
        description: "The second-largest game reserve in the world covers 52,800 square kilometers of the central Kalahari Desert, offering a completely different safari experience from Botswana's water-rich northern parks. This vast wilderness of undulating sand dunes, ancient riverbeds, and scattered pan depressions transforms dramatically between seasons—from the stark aridity of winter to surprising abundance after summer rains. Deception Valley, an ancient riverbed, attracts large herbivore herds during the green season (December-April), followed by predators including the famous black-maned Kalahari lions. The reserve is also the ancestral home of the San Bushmen, whose traditional knowledge allowed them to thrive in this challenging environment for thousands of years. Visitors can experience game drives revealing desert-adapted wildlife, guided walks learning about San survival techniques, and incredibly remote camps offering unparalleled wilderness immersion under star-filled skies.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Makgadikgadi Pans",
        description: "This surreal landscape of vast salt flats—the remains of an ancient super-lake that once covered much of northern Botswana—offers one of Africa's most distinctive environments. During the dry season, the pans transform into an otherworldly moonscape where quad biking across the crusty surface creates the illusion of infinite space. After summer rains, shallow water attracts thousands of flamingos and other water birds, along with Africa's second-largest zebra and wildebeest migration. Scattered palm islands, particularly Kubu Island with its ancient baobabs and archaeological sites, provide stark visual contrast to the white expanses. Visitors can experience traditional bush walks with San guides, observe habituated meerkats at close range, witness the zebra migration (December-April), stay at unique camps ranging from luxury lodges to fly camps on the pans themselves, and encounter desert specialists like brown hyena and aardvark.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Botswana's cuisine reflects its cattle-herding traditions, with beef featuring prominently in many dishes. Traditional meals are based around sorghum and maize, often prepared as porridges or polenta-like staples. Game meat appears in rural areas, while modern urban restaurants increasingly blend traditional ingredients with international techniques. Food in Botswana tends to be simply prepared, focusing on the quality of ingredients rather than complex spicing. Meals are often communal affairs, with foods served in a central dish from which everyone partakes. In villages, traditional open-fire cooking remains common, while cities offer everything from street food to upscale international restaurants. Safari lodges typically provide high-quality fusion cuisine that incorporates local elements while catering to international palates.",
      famousDishes: [
        "Seswaa - Botswana's national dish consisting of heavily salted, slow-cooked beef pounded until tender and typically served with pap (maize porridge)",
        "Bogobe - Sorghum porridge that forms the staple of many meals, sometimes fermented into the sour ting variation",
        "Morogo - Wild spinach or other indigenous greens cooked with onions and tomatoes",
        "Mopane worms - Protein-rich caterpillars (actually emperor moth larvae) dried or fried and eaten as snacks or stews",
        "Vetkoek - Deep-fried dough bread often filled with spiced minced meat, a popular street food"
      ]
    },
    culturalCustoms: [
      "Greetings are important and often lengthy, with handshakes and inquiries about family being customary before business discussions",
      "The practice of 'botho' (ubuntu) emphasizes community harmony, respect for elders, and helping others",
      "When receiving items, it's polite to accept with both hands or with the right hand while touching the right wrist with the left hand",
      "Removing shoes before entering someone's home is customary in many households",
      "Traditional healing practices and ancestor consultation remain important in rural communities alongside modern medicine"
    ],
    travelTips: [
      "Book accommodation and safari activities well in advance (6-12 months) as the best camps have limited capacity",
      "Prepare for significant temperature drops at night, even in summer, by packing layers for early morning and evening game drives",
      "Carry cash as ATMs are scarce outside major towns and many smaller establishments don't accept credit cards",
      "Purchase comprehensive travel insurance including medical evacuation coverage, as wilderness areas are remote",
      "Respect wildlife by maintaining safe distances and following guide instructions during all safari activities",
      "Tipping guides and camp staff (approximately 10% of daily rates) is customary and appreciated"
    ],
    safetyInfo: "Botswana ranks among Africa's safest countries with low crime rates, stable governance, and minimal civil unrest. The primary safety concerns involve wildlife encounters, which are managed through professional guiding and clear safety protocols at safari camps. Visitors should always follow guide instructions and never approach wild animals. Traffic accidents pose a risk on rural roads, especially at night when wildlife crossings are common—night driving outside cities is not recommended. Health risks include malaria in northern regions (preventative medication is advised), heat-related conditions during hot months, and waterborne illnesses. Urban areas have basic medical facilities, but wilderness regions are remote, making comprehensive travel insurance with evacuation coverage essential. Visitors should maintain normal precautions regarding personal belongings in cities, though violent crime against tourists is rare. Overall, Botswana's strong commitment to tourism means visitors generally experience a well-organized, secure environment.",
    sustainableTourism: "Botswana pioneered Africa's high-value, low-impact tourism model, emphasizing quality experiences over visitor volume to minimize environmental impact while maximizing economic benefits. The government strictly limits bed numbers in protected areas and mandates environmentally sensitive camp designs. Most safari operators implement comprehensive sustainability practices including solar power, water conservation systems, waste reduction, and biodiversity monitoring. Community-based natural resource management programs give local communities stakes in conservation through partnerships with safari companies, creating employment and channeling tourism revenue to rural development. When selecting accommodations, look for eco-certification through organizations like Botswana Tourism Organization's Eco-Certification System. Travelers can further support sustainability by choosing locally-owned businesses, respecting cultural norms, avoiding single-use plastics, staying on designated tracks during game drives, and supporting legitimate community tourism initiatives that provide direct benefits to local populations.",
    visaRequirements: "Visitors from most Western countries including the United States, Canada, United Kingdom, European Union nations, Australia, and New Zealand can enter Botswana visa-free for stays up to 90 days. Travelers must have a passport valid for at least six months beyond their planned departure date with at least two blank pages. Those requiring visas should apply at Botswana diplomatic missions or through designated visa processing services before travel; limited visa-on-arrival facilities exist at major entry points but are not guaranteed. All visitors must show proof of sufficient funds for their stay and onward/return tickets. Those traveling with children under 18 must carry their full birth certificates with details of both parents. For visitors planning to bring specialized equipment like professional cameras or drones, permits may be required from relevant government departments. Border crossings from neighboring countries are generally straightforward but can involve lengthy queues during peak periods.",
    budget: {
      budget: "$100-150 (BWP 1,200-1,800) per day for camping in public campsites, self-drive safaris in national parks, basic accommodations in towns, and simple meals",
      midRange: "$250-400 (BWP 3,000-5,000) per day for mid-range lodges, guided safari activities, comfortable accommodations with meals in towns, and some domestic flights",
      luxury: "$800-2,000+ (BWP 10,000-25,000+) per day for luxury safari camps with all-inclusive packages, premium wildlife experiences, professional guides, and charter flights between destinations"
    },
    transportationOptions: [
      "Small aircraft charter flights - Essential for accessing remote safari areas and maximizing safari time",
      "4x4 vehicle rentals - Necessary for self-drive safaris as many roads are deep sand tracks",
      "Guided safari tours - Range from budget mobile camping to luxurious lodge-based experiences",
      "Public buses - Connect major towns but don't access wildlife areas and offer basic comfort",
      "Boat transfers - Used in the Okavango Delta and along the Chobe River"
    ],
    neighboringCountries: [
      "South Africa (to the south)",
      "Namibia (to the west and north)",
      "Zambia (to the north)",
      "Zimbabwe (to the northeast)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Wildlife Safari", "Natural Wonders", "Luxury Travel", "Desert Landscapes", "Wilderness Experience",
    "Photography", "Indigenous Culture", "Birdwatching", "Adventure Travel", "Conservation"
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

export default BotswanaCountry; 