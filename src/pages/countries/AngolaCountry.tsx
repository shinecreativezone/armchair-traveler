
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AngolaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Angola",
    slug: "angola",
    continent: "Africa",
    capital: "Luanda",
    languageOfficial: "Portuguese",
    languagesSpoken: ["Portuguese", "Umbundu", "Kimbundu", "Kikongo", "Chokwe"],
    currency: "Kwanza (AOA)",
    population: 32870000,
    area: 1246700,
    timeZones: ["GMT+1 (WAT)"],
    callingCode: "+244",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Angola, officially the Republic of Angola, is a country on the western Atlantic coast of Southern Africa. It is the seventh-largest country in Africa, bordered by Namibia to the south, the Democratic Republic of the Congo to the north, Zambia to the east, and the Atlantic Ocean to the west. Angola has a rich cultural heritage, diverse landscapes ranging from Atlantic beaches to highlands and savanna, and abundant natural resources including oil and diamonds.",
    whyVisit: "Angola offers an authentic African experience away from mainstream tourism routes. The country features stunning natural attractions including pristine beaches along its 1,600 km coastline, dramatic highlands, diverse wildlife, and the magnificent Kalandula Falls—one of Africa's largest waterfalls. Cultural travelers will appreciate Angola's vibrant music scene, particularly semba (which influenced Brazilian samba), traditional crafts, and colonial Portuguese architecture. History enthusiasts can explore the country's complex past from ancient kingdoms to the struggle for independence.",
    bestTimeToVisit: {
      text: "The best time to visit Angola is during the dry season from May to October when wildlife viewing is optimal and road travel is easier. The coastal regions have milder temperatures year-round.",
      months: ["May", "June", "July", "August", "September", "October"]
    },
    weatherInfo: {
      summer: "Hot and humid on the coast (November to April), with temperatures around 27-30°C (81-86°F). Inland areas are also hot but less humid.",
      winter: "The dry season (May to October) brings cooler temperatures ranging from 18-25°C (64-77°F) with virtually no rainfall in many regions.",
      spring: "October-November brings increasing temperatures and occasional rainfall as the country transitions to the wet season.",
      fall: "April-May sees decreasing rainfall and more moderate temperatures as Angola transitions to the dry season."
    },
    majorCities: [
      {
        name: "Luanda",
        description: "The capital and largest city, featuring a mix of colonial Portuguese architecture and modern skyscrapers along its bay. Highlights include Agostinho Neto Mausoleum, the Iron Palace, and the scenic Ilha do Cabo peninsula with beaches and seafood restaurants."
      },
      {
        name: "Lubango",
        description: "A picturesque city in the highlands known for its pleasant climate, Christ the King statue (similar to Rio's), and nearby Serra da Leba mountain pass with its spectacular winding road and viewpoints."
      },
      {
        name: "Benguela",
        description: "A coastal city with beautiful beaches, colonial architecture, and the starting point of the historic Benguela Railway. Its relaxed atmosphere and seaside charm make it popular with domestic tourists."
      },
      {
        name: "Huambo",
        description: "The second-largest city located in the central highlands, featuring wide avenues, the Nossa Senhora da Conceição Cathedral, and serving as a hub for exploring the central region."
      },
      {
        name: "Namibe",
        description: "A coastal desert city with unique architecture, the stunning Namib Desert meeting the Atlantic Ocean, and access to Iona National Park—Angola's largest protected area."
      }
    ],
    famousFor: [
      "Kalandula Falls - One of Africa's largest waterfalls at 105 meters high and 400 meters wide",
      "Kissama (Quiçama) National Park - Wildlife reserve being restocked after the civil war",
      "Tunda Vala Gorge - Spectacular viewpoint with a massive cliff drop in Lubango",
      "Luanda Bay - Curved waterfront promenade in the capital city",
      "Semba Music - Traditional Angolan music that influenced Brazilian samba"
    ],
    topAttractions: [
      {
        name: "Kalandula Falls",
        description: "One of Africa's largest waterfalls, created by the Lucala River plunging 105 meters across a width of about 400 meters. The horseshoe-shaped falls are particularly impressive during the rainy season.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Kissama (Quiçama) National Park",
        description: "Angola's most accessible national park, located just south of Luanda. The park is part of a wildlife conservation effort to restore populations affected by the civil war, featuring elephants, antelope, and diverse bird species.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Miradouro da Lua (Moon Viewpoint)",
        description: "A striking lunar-like landscape created by erosion along the road south of Luanda, featuring multi-colored rock formations that change hues throughout the day and are particularly beautiful at sunset.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Tunda Vala Gorge",
        description: "A dramatic escarpment near Lubango with a 1,000-meter drop offering breathtaking views of the plains below. The site has become a symbol of the Huíla province and is popular for photography and picnics.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Ilha do Cabo (Cape Island)",
        description: "A narrow, 5-km long peninsula in Luanda featuring beautiful beaches, seafood restaurants, bars, and clubs. This popular strip offers views of the Luanda skyline across the bay and is the social heart of the capital.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Angolan cuisine combines Portuguese influences with traditional African ingredients and cooking methods. Seafood is prominent along the coast, while inland dishes feature more meat, beans, and staples like cassava and maize. Stews and dishes cooked slowly with palm oil, vegetables, and spices are common throughout the country.",
      famousDishes: [
        "Moamba de Galinha - Chicken stewed with palm oil, vegetables, and dendém (red palm oil sauce)",
        "Calulu - Fish or meat stew with vegetables, okra, and sweet potato leaves",
        "Mufete - Grilled fish served with beans, cassava, plantains, and palm oil sauce",
        "Funje - Cassava flour porridge similar to polenta, served as a side dish",
        "Cocada Amarela - Yellow coconut pudding dessert with sugar, eggs, and cinnamon"
      ]
    },
    culturalCustoms: [
      "Greetings - Handshakes are common, though may be lighter than Western handshakes. Close friends may embrace",
      "Respect for elders - Age is highly respected in Angolan culture, with elders given priority in conversations and seating",
      "Time perception - 'Angola time' tends to be more relaxed, with punctuality less strictly observed than in Western cultures",
      "Family importance - Family bonds are extremely strong, with extended family playing important roles in daily life",
      "Music and dance - Central to Angolan culture, with styles like semba, kizomba, and kuduro integral to social gatherings"
    ],
    travelTips: [
      "Visa requirements are strict - apply well in advance and ensure all documentation is complete",
      "Portuguese language skills are very helpful as English is not widely spoken outside major hotels",
      "Carry cash as credit cards are not accepted in many places, though ATMs are available in larger cities",
      "Road conditions can be challenging - consider hiring a driver for long-distance travel",
      "Photography of government buildings, airports, and military installations is prohibited",
      "Yellow fever vaccination is required for entry into Angola"
    ],
    safetyInfo: "Angola has become increasingly stable since the end of the civil war in 2002. Major cities and tourist areas are generally safe for visitors, though standard precautions against petty crime are advised. Some rural areas may have unexploded landmines from the conflict period, so stick to established paths and tour with local guides. The biggest concerns for most travelers are road safety and health risks including malaria, which is endemic throughout the country.",
    sustainableTourism: "Angola's tourism industry is still developing, making it an opportunity to establish sustainable practices. Choose tour operators committed to environmental conservation and community support. Respect wildlife by maintaining appropriate distances and never purchasing products made from endangered species. Support local artisans by buying traditional crafts directly from makers, and be conscious of water usage as many regions face water scarcity issues.",
    visaRequirements: "All visitors to Angola require a visa, which must be obtained in advance. The application process involves submitting a passport valid for at least six months, a completed application form, a letter of invitation or hotel reservation, proof of funds, a yellow fever vaccination certificate, and passport photos. Processing can take several weeks, so apply well in advance of planned travel.",
    budget: {
      budget: "15,000-30,000 AOA ($30-60 USD) per day for basic accommodations and local meals",
      midRange: "30,000-60,000 AOA ($60-120 USD) per day for better hotels and restaurants",
      luxury: "60,000+ AOA ($120+ USD) per day for top-end accommodations and dining"
    },
    transportationOptions: [
      "Domestic flights connect major cities through TAAG Angolan Airlines",
      "Taxis in cities (negotiate price before entering)",
      "Private car hire with driver (recommended for tourists)",
      "Limited train service on rehabilitated railway lines",
      "Shared minibuses (candongueiros) for budget local transportation"
    ],
    neighboringCountries: [
      "Democratic Republic of the Congo", "Zambia", "Namibia"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Waterfalls", "Wildlife", "Beaches", "Portuguese History", "Cultural Experience",
    "Off the Beaten Path", "National Parks", "Natural Landscapes", "African Culture", "Emerging Destination"
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
                        <h4 className="font-bold">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cities">
                <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {countryData.majorCities.map((city) => (
                    <Card key={city.name}>
                      <CardContent className="p-4">
                        <h4 className="font-bold">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cuisine">
                <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                <p className="mb-4">{countryData.localCuisine.description}</p>
                <h4 className="font-semibold mt-2">Popular Dishes:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {countryData.localCuisine.famousDishes.map((dish) => (
                    <li key={dish}>{dish}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="customs">
                <h3 className="text-xl font-semibold mb-2">Cultural Customs</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {countryData.culturalCustoms.map((custom) => (
                    <li key={custom}>{custom}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Travel Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Capital</h4>
                    <p>{countryData.capital}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Languages</h4>
                    <p>Official: {countryData.languageOfficial}</p>
                    <p className="text-sm text-muted-foreground">
                      Also spoken: {countryData.languagesSpoken.join(', ')}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Currency</h4>
                    <p>{countryData.currency}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Population</h4>
                    <p>{countryData.population.toLocaleString()}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Area</h4>
                    <p>{countryData.area.toLocaleString()} km²</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Time Zone</h4>
                    <p>{countryData.timeZones.join(', ')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Calling Code</h4>
                    <p>{countryData.callingCode}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Driving Side</h4>
                    <p>{countryData.drivingSide.charAt(0).toUpperCase() + countryData.drivingSide.slice(1)}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Best Time to Visit</h4>
                  <p className="mb-2">{countryData.bestTimeToVisit.text}</p>
                  <div className="flex flex-wrap gap-1">
                    {countryData.bestTimeToVisit.months.map((month) => (
                      <Badge key={month} variant="secondary">{month}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Weather</h4>
                  <div className="text-sm">
                    <p className="mt-1"><span className="font-medium">Summer:</span> {countryData.weatherInfo.summer}</p>
                    <p className="mt-1"><span className="font-medium">Winter:</span> {countryData.weatherInfo.winter}</p>
                    <p className="mt-1"><span className="font-medium">Spring:</span> {countryData.weatherInfo.spring}</p>
                    <p className="mt-1"><span className="font-medium">Fall:</span> {countryData.weatherInfo.fall}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Travel Budget (Daily)</h4>
                  <div className="text-sm">
                    <p className="mt-1"><span className="font-medium">Budget:</span> {countryData.budget.budget}</p>
                    <p className="mt-1"><span className="font-medium">Mid-Range:</span> {countryData.budget.midRange}</p>
                    <p className="mt-1"><span className="font-medium">Luxury:</span> {countryData.budget.luxury}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Visa Information</h4>
                  <p className="text-sm">{countryData.visaRequirements}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Safety Information</h4>
                  <p className="text-sm text-amber-600">{countryData.safetyInfo}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold">Neighboring Countries</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {countryData.neighboringCountries.map((country) => (
                      <Link to={`/country/${country.toLowerCase().replace(/\s+/g, '-')}`} key={country}>
                        <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                          {country}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Travel Tips</h3>
                <ul className="space-y-2">
                  {countryData.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sustainable Tourism</h3>
                <p>{countryData.sustainableTourism}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AngolaCountry;
