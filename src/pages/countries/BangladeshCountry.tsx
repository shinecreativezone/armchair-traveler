import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BangladeshCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bangladesh",
    slug: "bangladesh",
    continent: "Asia",
    capital: "Dhaka",
    languageOfficial: "Bengali",
    languagesSpoken: ["Bengali", "English"],
    currency: "Bangladeshi Taka (BDT)",
    population: 164689383,
    area: 147570,
    timeZones: ["GMT+6"],
    callingCode: "+880",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Bangladesh, officially the People's Republic of Bangladesh, is a densely populated country in South Asia bordered by India and Myanmar. Despite facing challenges like natural disasters and poverty, Bangladesh has made remarkable strides in economic growth and human development in recent decades.",
    whyVisit: "Bangladesh offers an authentic cultural experience away from well-trodden tourist paths. The country is known for its warm hospitality, with locals often inviting visitors into their homes for a meal or tea. Nature lovers will find diverse ecosystems, from the world's largest mangrove forest (the Sundarbans) to rolling tea plantations in Sylhet and pristine beaches in Cox's Bazar. History enthusiasts can explore ancient Buddhist ruins, ornate mosques, and colonial-era buildings. The vibrant capital Dhaka presents a sensory feast with its colorful rickshaws, bustling markets, and aromatic street food. As tourism is still developing, visitors can experience a South Asian country that maintains its authentic character without the commercial trappings found in more popular destinations.",
    bestTimeToVisit: {
      text: "The best time to visit Bangladesh is during the cool, dry season from November to February when temperatures range from 15-25°C (59-77°F) and rainfall is minimal.",
      months: ["November", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Hot and humid from March to May with temperatures ranging from 30-40°C (86-104°F). The pre-monsoon period often features thunderstorms known as Kalbaishakhi (Nor'westers).",
      winter: "Mild and dry from November to February with temperatures ranging from 15-25°C (59-77°F), making it the most comfortable time to visit Bangladesh.",
      spring: "Brief but pleasant in February to early March before the heat intensifies, with temperatures around 20-30°C (68-86°F).",
      fall: "October to November is still warm but becoming drier as the monsoon season ends, with temperatures gradually dropping from 25-32°C (77-90°F)."
    },
    majorCities: [
      {
        name: "Dhaka",
        description: "The bustling capital and largest city, blending modern high-rises with historical sites. Key attractions include Lalbagh Fort, Ahsan Manzil (Pink Palace), Dhaka University campus, vibrant markets like New Market and Shankharia Bazaar, and the National Parliament House designed by famous architect Louis Kahn."
      },
      {
        name: "Chittagong",
        description: "The second-largest city and main seaport, known for its hills and natural beauty. Attractions include Foy's Lake, Patenga Beach, the Ethnological Museum, and World War II cemetery, with the picturesque Kaptai Lake and Rangamati Hill District nearby."
      },
      {
        name: "Sylhet",
        description: "Known for its lush tea gardens and natural beauty in the northeast. Famous for the shrine of Hazrat Shah Jalal, Ratargul Swamp Forest (the only freshwater swamp forest in Bangladesh), and numerous tea estates that offer tours."
      },
      {
        name: "Rajshahi",
        description: "Known as the 'Silk City' in the northwest, famous for silk production and mango orchards. Attractions include Varendra Research Museum (the oldest museum in Bangladesh), Puthia Temple Complex, and the serene University of Rajshahi campus."
      },
      {
        name: "Khulna",
        description: "The gateway to the Sundarbans mangrove forest in southwest Bangladesh. The city itself features the Shait Gumbad Mosque and Khan Jahan Ali's Tomb, while serving as the launching point for Sundarbans tours to spot Bengal tigers and diverse wildlife."
      }
    ],
    famousFor: [
      "The Sundarbans - World's largest mangrove forest and UNESCO World Heritage Site",
      "Cox's Bazar - World's longest natural sandy beach (120 km)",
      "Royal Bengal Tigers - The national animal found in the Sundarbans",
      "Muslin fabric - Historically famous ultra-fine cotton textile",
      "Delicious Bengali cuisine featuring fish, rice, and mustard"
    ],
    topAttractions: [
      {
        name: "Sundarbans National Park",
        description: "This UNESCO World Heritage Site is the world's largest mangrove forest, home to the famous Royal Bengal Tigers, spotted deer, crocodiles, and hundreds of bird species. Visitors can explore the labyrinthine waterways by boat safaris, where they might spot wildlife while experiencing this unique ecosystem.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Cox's Bazar Beach",
        description: "The world's longest natural sandy beach stretches an unbroken 120 kilometers along the Bay of Bengal. The beach town offers various activities like surfing and beach sports, while the sunrises and sunsets over the ocean provide spectacular views. Nearby attractions include Himchari National Park and Inani Beach.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Somapura Mahavihara",
        description: "Located in Paharpur, this UNESCO World Heritage Site is one of the largest Buddhist monasteries south of the Himalayas. Dating back to the 8th century, the vast complex features a central temple with intricate terracotta plaques depicting Buddhist stories, surrounded by 177 monks' cells.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Srimangal Tea Gardens",
        description: "Known as the 'Tea Capital of Bangladesh,' this area in Sylhet division features rolling hills covered with lush green tea bushes. Visitors can tour tea estates, watch the tea-making process, and sample the famous seven-layer tea, a local specialty. The region also offers nature attractions like Lawachara National Park.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Ahsan Manzil (Pink Palace)",
        description: "This striking pink palace in Dhaka was the official residence of the Nawab family of Dhaka. Now a museum, it showcases the opulent lifestyle of the Nawabs with period furniture, photographs, and artifacts. The palace's architecture blends British and Mughal styles, featuring a grand dome visible from miles away.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Bangladeshi cuisine centers around rice and fish, earning it the nickname 'the land of fish and rice.' The food is known for its aromatic spices, distinctive mustard oil flavors, and the skillful balancing of heat with more subtle tastes. Meals typically include rice, dal (lentils), and at least one vegetable and fish dish, often accompanied by various pickles and chutneys.",
      famousDishes: [
        "Ilish Mach - Hilsa fish cooked in mustard sauce, considered the national dish",
        "Panta Bhat - Fermented rice soaked in water, typically eaten for breakfast with fried fish and green chilies",
        "Kacchi Biryani - A celebratory dish of goat meat slow-cooked with aromatic rice, originating from Old Dhaka",
        "Shorshe Maach - Fish cooked in a distinctive mustard sauce that's tangy and spicy",
        "Pitha - Rice-based sweet or savory cakes prepared especially during winter festivals"
      ]
    },
    culturalCustoms: [
      "Hospitality - Offering tea and snacks to guests is essential; refusing such offers may be considered impolite",
      "Adda - The Bengali tradition of informal intellectual conversation, often over tea in public places",
      "Respect for Elders - Touching the feet of elders as a sign of respect is common in traditional settings",
      "Traditional Clothing - Sarees for women and punjabis with pajamas for men, especially during festivals and formal occasions",
      "Pohela Boishakh - Bengali New Year celebration with colorful processions, cultural performances, and special meals"
    ],
    travelTips: [
      "Dress modestly, especially in rural areas and religious sites (covering shoulders and knees)",
      "Learn a few basic Bengali phrases, as English is not widely spoken outside major cities and tourist areas",
      "Traffic in Dhaka is extremely congested; allow extra time for travel within the city",
      "Rickshaws and CNGs (auto-rickshaws) are the most convenient modes of transportation for short distances",
      "Carry a water purifier or buy bottled water, and be cautious about street food hygiene",
      "Monsoon season (June-September) can cause flooding and transportation disruptions"
    ],
    safetyInfo: "Bangladesh is generally safe for tourists, though petty crime can occur in crowded areas and public transportation. Political demonstrations occasionally take place, particularly in Dhaka, and should be avoided. Natural disasters like flooding during monsoon season and cyclones in coastal areas are potential hazards. The government has improved security in tourist areas following past incidents, but visitors should remain vigilant, especially after dark. Healthcare facilities are limited outside major cities, so comprehensive travel insurance including evacuation coverage is recommended.",
    sustainableTourism: "Bangladesh faces significant environmental challenges including air pollution in urban areas, plastic waste, and the impacts of climate change on the Sundarbans and coastal regions. Responsible tourism initiatives are emerging, with some tour operators focusing on eco-friendly Sundarbans visits that support conservation efforts and local communities. Visitors can contribute by choosing operators with environmental credentials, avoiding single-use plastics, respecting wildlife habitats (particularly in the Sundarbans), and supporting handicraft industries that preserve traditional skills while providing sustainable livelihoods for local artisans.",
    visaRequirements: "Most visitors to Bangladesh require a visa, which can be obtained from Bangladeshi diplomatic missions abroad or through the e-visa system for eligible countries. Tourist visas typically allow stays of 30-90 days. Some nationalities may be eligible for visa-on-arrival at major airports, but this should be confirmed before travel. Requirements typically include a passport valid for at least six months, return ticket proof, and sufficient funds for the stay. The visa application process usually takes 5-7 working days.",
    budget: {
      budget: "1,500-3,000 BDT ($15-30 USD) per day for basic accommodations, local transportation, and street food or simple restaurants",
      midRange: "3,000-7,000 BDT ($30-70 USD) per day for mid-range hotels, comfortable transportation options, and better restaurants",
      luxury: "7,000+ BDT ($70+ USD) per day for luxury accommodations, private transportation, and fine dining experiences"
    },
    transportationOptions: [
      "Rickshaws - Ideal for short distances in cities and towns, with fares negotiable before the ride",
      "CNGs (Auto-rickshaws) - Three-wheeled vehicles that are faster than cycle rickshaws and good for medium distances",
      "Buses - Extensive network connecting all major cities, ranging from basic to air-conditioned services",
      "Trains - Comfortable option for long-distance travel with several classes available",
      "Water transportation - Ferries and launches connecting riverside towns and coastal areas"
    ],
    neighboringCountries: [
      "India (surrounds Bangladesh on three sides)",
      "Myanmar (shares a border in the southeast)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cultural Heritage", "Historical Sites", "Natural Wonders", "Wildlife", "Beaches",
    "Rural Landscapes", "Off the Beaten Path", "Budget Friendly", "Authentic Experiences", "Culinary Traditions"
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

export default BangladeshCountry; 