import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CameroonCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Cameroon",
    slug: "cameroon",
    continent: "Africa",
    capital: "Yaoundé",
    languageOfficial: "French and English",
    languagesSpoken: ["French", "English", "Fulfulde", "Ewondo", "Duala", "Bamileke", "Bamum", "Bassa", "Kanuri"],
    currency: "Central African CFA franc (XAF)",
    population: 27200000,
    area: 475442,
    timeZones: ["UTC+1 (WAT)"],
    callingCode: "+237",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/20/cameroon-149674_1280.png",
    description: "Cameroon, often referred to as 'Africa in miniature,' offers remarkable geographical and cultural diversity in a single country. From dense rainforests and pristine beaches to arid savannas and volcanic mountains, its landscapes encompass nearly all of Africa's major ecosystems. Home to over 250 ethnic groups speaking nearly 300 languages and dialects, Cameroon's rich cultural tapestry is complemented by its linguistic duality as both an English and French-speaking nation. This blend of natural beauty, cultural richness, and colonial legacy creates a unique destination at the crossroads of West and Central Africa.",
    whyVisit: "Cameroon rewards adventurous travelers with experiences difficult to find elsewhere in Africa. Wildlife enthusiasts can encounter forest elephants, gorillas, and an extraordinary array of birds across diverse ecosystems. Cultural travelers will appreciate the country's living traditions, from the elaborate architecture of the northern sultanates to the vibrant festivals of the grassland kingdoms. Its two distinct Anglophone and Francophone regions offer different colonial influences and cultural expressions. With relatively less tourism development than many African destinations, Cameroon provides authentic experiences, whether trekking up active Mount Cameroon, exploring the remote Mandara Mountains, or discovering the pristine beaches of Limbe and Kribi.",
    bestTimeToVisit: {
      text: "The best time to visit Cameroon depends on your regional focus. The dry season from November to February offers the most comfortable conditions throughout the country, with clearer views for mountain climbing and better wildlife viewing. Northern regions are most accessible during this period, when roads are passable and temperatures, though hot, are not extreme. The southern forests can be visited year-round, though heavy rains from May to October can make travel challenging. For beach destinations like Kribi and Limbe, the transition seasons of October-November and March-April provide a good balance of sunshine and fewer crowds.",
      months: ["November", "December", "January", "February", "March", "April"]
    },
    weatherInfo: {
      summer: "Summer months (June-August) in Cameroon bring heavy rainfall to the southern and western regions, including the capital Yaoundé and the economic center Douala, with precipitation often exceeding 300mm per month. Temperatures in these regions remain warm, typically ranging from 22-30°C (72-86°F) with high humidity making it feel hotter. The northern regions experience their rainy season during this period as well, though with less intense precipitation than the south. The Adamawa Plateau enjoys more moderate conditions due to its elevation. This period is considered low season for tourism, with lush green landscapes but challenging travel conditions on unpaved roads.",
      winter: "Winter months (December-February) constitute the dry season across Cameroon and offer the most comfortable travel conditions. Southern regions experience warm temperatures ranging from 23-32°C (73-90°F) with minimal rainfall and lower humidity. The northern regions, including the far north and Maroua, feature hot daytime temperatures of 32-35°C (90-95°F) but pleasantly cool evenings around 15-20°C (59-68°F). This period brings the Harmattan, a dry wind carrying Saharan dust that can create hazy conditions but also spectacular sunsets. Water levels in rivers and lakes drop, concentrating wildlife around remaining water sources and making this the optimal season for safaris and wildlife viewing.",
      spring: "Spring (March-May) marks a transition period in Cameroon, with increasing rainfall and humidity across the southern regions as the rainy season approaches. Temperatures remain high, averaging 24-32°C (75-90°F) in most areas. The southwest experiences the earliest onset of heavy rains, usually by April, while the western highlands and Yaoundé see increasing but not yet constant precipitation. The northern regions remain predominantly dry until May, with temperatures reaching their annual peak in March and April (often exceeding 40°C/104°F in the far north). This season offers good conditions for visiting the northern regions before roads become impassable, while the south still maintains moderate rain patterns suitable for forest exploration.",
      fall: "Fall (September-November) represents another transitional period, with decreasing rainfall in the south and the end of the rainy season in the north. By late October, drier conditions begin prevailing across most of the country. Southern regions, including Douala and the coastal areas, still experience occasional heavy showers in September and early October, with temperatures ranging from 23-30°C (73-86°F). The western highlands enjoy cooling temperatures and decreasing precipitation, creating pleasant conditions for exploration. In the north, the landscape transforms as the rains end, with vegetation gradually yellowing but wildlife becoming increasingly visible around water sources. This period, particularly November, marks the beginning of the optimal tourist season country-wide."
    },
    majorCities: [
      {
        name: "Yaoundé",
        description: "Cameroon's political capital, situated among seven hills, offers a cooler climate and more relaxed atmosphere than its commercial counterpart Douala. The city blends colonial architecture with modern government buildings and features several notable museums, including the National Museum in the former presidential palace. Yaoundé's grid layout, unusual for African capitals, makes it relatively navigable, while its elevation provides refreshing temperatures. Cultural highlights include the Notre Dame Cathedral, the Central Market's vibrant trading atmosphere, and numerous restaurants serving diverse Cameroonian cuisines. As the seat of government, Yaoundé provides insight into the country's political life while serving as a convenient base for exploring the southern regions."
      },
      {
        name: "Douala",
        description: "As Cameroon's largest city and economic powerhouse, Douala presents a vibrant if chaotic introduction to the country. This major port city on the Wouri estuary serves as the commercial gateway to Cameroon and several neighboring countries. Its tropical climate, bustling markets (particularly Marché Central), and nightlife districts like Bonanjo offer an energetic urban experience. While not rich in conventional tourist attractions, Douala compensates with authentic cultural immersion, particularly in its art scene centered around Doual'art and numerous galleries. The city's colonial German and French heritage remains visible in scattered architecture, though rapid development continues transforming the urban landscape. Most international visitors use Douala as their entry point before exploring Cameroon's diverse regions."
      },
      {
        name: "Limbe",
        description: "This picturesque coastal city, nestled between the Atlantic Ocean and Mount Cameroon, offers a unique combination of black sand beaches, botanical gardens, and wildlife conservation centers. Founded as Victoria by British missionaries, Limbe retains aspects of its colonial heritage alongside its natural attractions. The Limbe Wildlife Centre provides sanctuary for rescued primates including gorillas, chimpanzees, and drill monkeys, while the adjacent botanical garden, established in 1892, showcases indigenous and exotic plant species. The city's beaches, though not ideal for swimming due to strong currents, provide dramatic volcanic landscapes and fresh seafood restaurants. Limbe's annual cultural festival celebrates the region's maritime traditions and diverse ethnic influences."
      },
      {
        name: "Bamenda",
        description: "The largest city in Cameroon's Anglophone region serves as the capital of the Northwest Region and gateway to the scenic Western Highlands. Spread across several hills, Bamenda features distinct commercial and administrative districts connected by steep roads. The city's main market offers an introduction to traditional crafts of the grassfields kingdoms, including intricate beadwork, brass figurines, and textiles. Bamenda's predominantly English-speaking character provides visitors a different cultural experience from Francophone regions. The surrounding highlands feature traditional chiefdoms, spectacular scenery, and the nearby Menchum Falls. Political tensions have affected tourism in recent years, so travelers should check current conditions before visiting this culturally rich region."
      },
      {
        name: "Kribi",
        description: "This beach resort town offers Cameroon's most accessible and pleasant coastal experience, with golden sand beaches lined with coconut palms and clear waters suitable for swimming. Unlike Limbe's volcanic coastline, Kribi provides traditional tropical beach scenery alongside excellent seafood restaurants specializing in fresh catches prepared with traditional spices. The nearby Lobé Falls, where a river plunges directly into the ocean, represents one of Central Africa's most photogenic natural attractions. Kribi serves as a gateway to visiting Pygmy communities in the adjacent rainforest and coastal boat trips to Campo Ma'an National Park. Ongoing port development has transformed parts of the area, but Kribi remains Cameroon's premier beach destination, popular with both international visitors and Cameroonian weekenders from Douala and Yaoundé."
      }
    ],
    famousFor: [
      "Mount Cameroon - Active volcano and West Africa's highest peak",
      "Pygmy Communities - Indigenous forest dwellers maintaining traditional lifestyles",
      "Cameroon National Football Team - 'Indomitable Lions' with strong World Cup history",
      "Waza National Park - Savanna wildlife viewing in the northern region",
      "Chefferies (Chiefdoms) - Traditional kingdoms with elaborate palaces and cultural ceremonies"
    ],
    topAttractions: [
      {
        name: "Mount Cameroon",
        description: "West Africa's highest peak (4,040m) and one of Africa's most active volcanoes offers adventurous trekkers a challenging climb through multiple ecosystems. Beginning in tropical forest near the town of Buea, the ascent passes through montane forest, savanna grassland, and finally volcanic rock to reach the summit. The standard route takes 2-3 days, with overnight stays in basic huts or camps. The mountain's frequent cloud cover often parts to reveal spectacular views extending to the Atlantic Ocean. Recent eruptions in 1999 and 2012 have modified the landscape but haven't deterred climbers. The mountain holds cultural significance for local Bakweri people, who call it 'Fako' or 'Mountain of Thunder' and consider it the abode of their gods.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Waza National Park",
        description: "Cameroon's most accessible and best-known wildlife reserve occupies over 1,700 square kilometers of Sudano-Sahelian savanna in the far north region. Despite conservation challenges, Waza remains home to significant populations of elephants, giraffes, lions, cheetahs, and numerous antelope species. The park's flat terrain and open landscapes facilitate wildlife viewing, particularly during the dry season (November-April) when animals concentrate around remaining water sources. The park's bird life is equally impressive, with over 370 recorded species including ostrich, Arabian bustard, and seasonal migrants from Europe. Accommodation is available at the park's lodge or nearby Maroua town. Waza represents the savanna ecosystem that constitutes one of Cameroon's major geographical zones.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Lobé Waterfalls",
        description: "This unique natural phenomenon near Kribi features multiple cascades of the Lobé River plunging directly into the Atlantic Ocean—one of the few places in the world where substantial falls meet the sea. The series of rapids and smaller falls creates a visually stunning landscape where freshwater and saltwater ecosystems converge. Visitors can view the falls from various vantage points, swim in the calmer pools formed between cascades, or take boat tours that navigate behind certain waterfall sections. The surrounding area features traditional fishing villages where visitors can observe Batanga cultural practices and sample freshly caught seafood. The falls area also hosts occasional traditional ceremonies, particularly during dry season when water levels are lower.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Dja Faunal Reserve",
        description: "This UNESCO World Heritage Site preserves one of Africa's largest and best-protected rainforests, encompassing over 5,000 square kilometers of pristine wilderness in southeastern Cameroon. The reserve's biodiversity includes 107 mammal species, most notably forest elephants, western lowland gorillas, chimpanzees, and numerous monkey species. Nearly surrounded by the Dja River, which forms a natural boundary, the reserve has remained largely isolated from human encroachment. Visiting requires preparation and typically involves guided multi-day treks with basic camping. The reserve offers genuine wilderness experiences for committed nature enthusiasts and supports scientific research on endangered species. Adjacent buffer zones feature Baka pygmy communities maintaining traditional forest-based lifestyles that have adapted to conservation requirements.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sultanate of Foumban",
        description: "The cultural capital of the Bamum people offers Cameroon's richest historical experience, centered around the Sultan's Palace (now also serving as a museum) dating from 1917. The palace complex houses royal treasures including beaded ceremonial masks, bronze pipes, and elaborately carved thrones. Foumban gained international recognition for developing a unique indigenous writing system, examples of which are preserved in the palace museum. The city maintains traditional bronze casting and woodcarving techniques, with numerous artisan workshops welcoming visitors. The weekly market attracts traders and artisans from throughout the region. The current sultan continues traditional leadership roles alongside modern governance structures, with major ceremonies occasionally open to respectful visitors, particularly during the biennial Nguon Festival celebrating Bamum heritage.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Cameroonian cuisine represents a flavorful crossroads of West and Central African culinary traditions, varying significantly across the country's diverse regions. Staple foods include cassava, plantains, yams, rice, and maize, typically accompanied by vegetable-rich soups and stews. Protein sources range from beef and chicken to bushmeat in rural areas and abundant fish along the coast. Cameroonians generally appreciate spicy food, with pèpè (hot chili) and ginger featuring prominently. French influences appear in baguettes and pastries, particularly in urban areas, while the Anglophone regions maintain distinct culinary traditions with Nigerian influences. Meals are typically communal affairs, with special emphasis on hospitality toward guests.",
      famousDishes: [
        "Ndolé - Stewed bitter leaves with ground peanuts, meat or fish, and served with plantains or rice",
        "Eru - Finely chopped forest greens cooked with waterleaf, palm oil, and smoked fish or meat",
        "Poulet DG (Directeur Général) - Fried chicken with plantains, vegetables and spices in a tomato sauce",
        "Koki - Steamed bean pudding wrapped in banana leaves, often served with bobolo (fermented cassava stick)",
        "Soya - Spicy grilled meat skewers marinated in a peanut-spice blend, popular as street food"
      ]
    },
    culturalCustoms: [
      "Greetings Ritual - Extended handshakes and personal inquiries about family are considered essential courtesy",
      "Gift Giving - Visitors to homes traditionally bring small gifts, often food items or drinks",
      "Respect for Elders - Standing when older people enter a room and using honorific titles shows proper respect",
      "Traditional Chieftaincies - Many areas maintain parallel traditional leadership structures alongside government",
      "Cameroon Time - Social functions typically start later than scheduled, with different expectations of punctuality than Western cultures"
    ],
    travelTips: [
      "Carry cash - Credit cards are accepted only in upscale establishments in major cities",
      "Dress modestly - Particularly in northern Muslim regions and rural areas",
      "Learn basic French or English - Depending on which region you're visiting, as few people speak both",
      "Obtain permits - Needed for photography in some areas and for visiting certain natural attractions",
      "Negotiate prices - Expected at markets and for taxi services, but remain respectful",
      "Respect traditional authorities - When visiting villages, greet the chief or local officials first"
    ],
    safetyInfo: "Cameroon offers relatively stable conditions in most tourist areas, though travelers should remain vigilant regarding petty crime, particularly in urban centers and crowded markets. The Anglophone regions (Northwest and Southwest) have experienced unrest and periodic violence since 2016, with travel to these areas currently not recommended by most foreign governments. The Far North region bordering Nigeria and Chad also presents security challenges, though tourist sites like Waza National Park may be accessible with proper preparation. Road safety represents a significant concern, with poor maintenance, limited lighting, and unpredictable driving practices. During rainy seasons, many rural roads become impassable. Healthcare facilities in major cities provide adequate care for minor issues, but serious conditions may require evacuation to Europe or South Africa.",
    sustainableTourism: "Cameroon's developing tourism sector increasingly emphasizes sustainability, with community-based ecotourism initiatives emerging around protected areas like Lobéké National Park and Mount Cameroon. The Campo Ma'an Tourism Initiative involves local communities in preserving rainforest while generating alternative income to poaching and logging. Several accommodations, particularly in western regions, now operate with reduced environmental footprints, using solar power and responsible waste management. Travelers can support these efforts by choosing operators that employ local guides, respecting wildlife viewing guidelines (particularly with primates), avoiding products made from endangered species, and participating in community tourism that provides direct economic benefits to rural areas. Conservation organizations like the Limbe Wildlife Centre welcome visitor support for rehabilitation of trafficked wildlife.",
    visaRequirements: "Most foreign nationals require a visa to enter Cameroon, which must be obtained in advance from a Cameroonian embassy or consulate. The application typically requires a passport valid for at least six months beyond the planned departure date, proof of accommodation, return ticket, yellow fever vaccination certificate, and the appropriate fee. Processing times vary significantly by location, so applying several weeks before travel is advisable. E-visas are not currently available. Some business travelers may qualify for visa-on-arrival under specific circumstances, but this requires pre-approval. Visitors should register with local authorities within 48 hours of arrival if staying outside major hotels. Visa extensions are possible through the Délégation Générale à la Sûreté Nationale in major cities, though the process can be time-consuming.",
    budget: {
      budget: "30-60 USD per day for basic accommodations, local transportation, and meals at small restaurants or street food",
      midRange: "60-150 USD per day for comfortable hotels, occasional taxis or car rental, and dining at better restaurants",
      luxury: "150+ USD per day for top hotels in major cities, private transportation, guided excursions, and fine dining"
    },
    transportationOptions: [
      "Shared Taxis - Primary intercity transport, usually depart when full rather than on fixed schedules",
      "Bush Taxis/Minibuses - Connect smaller towns and villages, often crowded but inexpensive",
      "Urban Taxis - Available in major cities, usually painted yellow and typically shared unless negotiated otherwise",
      "Car Rental - Available in major cities, but expensive and road conditions can be challenging",
      "Motorcycle Taxis - Common for short distances within towns and cities",
      "Domestic Flights - Camair-Co offers limited connections between major cities"
    ],
    neighboringCountries: [
      "Nigeria", "Chad", "Central African Republic", "Republic of the Congo", "Gabon", "Equatorial Guinea"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Adventure", "Wildlife", "Cultural Heritage", "Beaches", "Rainforest", 
    "Mountains", "Indigenous Cultures", "Ecotourism", "Traditional Kingdoms", "Hiking"
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

export default CameroonCountry; 