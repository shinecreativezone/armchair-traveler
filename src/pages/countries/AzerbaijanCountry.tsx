import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AzerbaijanCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Azerbaijan",
    slug: "azerbaijan",
    continent: "Asia/Europe",
    capital: "Baku",
    languageOfficial: "Azerbaijani",
    languagesSpoken: ["Azerbaijani", "Russian", "Armenian", "Talysh", "Lezgian"],
    currency: "Azerbaijani Manat (AZN)",
    population: 10139177,
    area: 86600,
    timeZones: ["GMT+4"],
    callingCode: "+994",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/16/12/43/flag-35845_1280.png",
    description: "Azerbaijan, officially the Republic of Azerbaijan, is a country located at the boundary of Eastern Europe and Western Asia. It is a part of the Caucasus region, situated at the crossroads of Eastern Europe and Western Asia. Known as the 'Land of Fire,' Azerbaijan combines ancient cultural heritage with rapidly modernizing cities, stunning landscapes, and rich oil resources.",
    whyVisit: "Azerbaijan offers a fascinating blend of ancient traditions and forward-looking modernity that's still relatively undiscovered by mass tourism. The capital Baku presents a striking juxtaposition of ultramodern architecture—exemplified by the iconic Flame Towers and Heydar Aliyev Center—alongside the UNESCO-listed medieval Old City with its narrow streets and ancient structures. Beyond the capital, travelers can explore mysterious fire phenomena that have earned the country its 'Land of Fire' moniker, including Yanar Dag (Burning Mountain) where natural gas seeps create perpetual flames, and the ancient Zoroastrian fire temple Ateshgah. The country's diverse landscapes range from the lush Caucasus Mountains—perfect for hiking and nature exploration—to the shores of the Caspian Sea with beaches that remain largely untouched by international visitors. Cultural enthusiasts will appreciate the rich tapestry of traditions, distinctive cuisine that blends Central Asian, Middle Eastern, and Eastern European influences, and the remarkable hospitality of Azerbaijani people. With improving tourism infrastructure but still fewer crowds than many other destinations, Azerbaijan offers authentic experiences and the excitement of exploring a destination that remains off the beaten path for most Western travelers.",
    bestTimeToVisit: {
      text: "The best time to visit Azerbaijan is during spring (April to June) and autumn (September to October) when temperatures are mild (15-25°C/59-77°F), landscapes are vibrant, and the climate is most comfortable for exploring both cities and rural areas.",
      months: ["April", "May", "June", "September", "October"]
    },
    weatherInfo: {
      summer: "Summers (June to August) are hot and humid in Baku and the coastal areas with temperatures reaching 30-35°C (86-95°F), while mountain regions remain more moderate at 20-25°C (68-77°F). The highest inland areas can be pleasantly cool even in summer.",
      winter: "Winters (December to February) vary significantly by region, with Baku experiencing mild winters (2-10°C/36-50°F) and occasional light snow. However, mountain regions become quite cold with heavy snowfall, making them suitable for winter sports, with temperatures often below freezing.",
      spring: "Spring (March to May) sees gradually warming temperatures from 10-22°C (50-72°F) with occasional rainfall. This season brings lush landscapes as mountains and valleys become covered with wildflowers, making it ideal for nature photography and hiking.",
      fall: "Autumn (September to November) offers pleasant temperatures cooling from 25°C to 10°C (77-50°F) as the season progresses. The countryside displays beautiful fall colors, particularly in the mountain regions, and harvests make it an excellent time for culinary experiences."
    },
    majorCities: [
      {
        name: "Baku",
        description: "The capital and largest city, combining UNESCO-listed medieval architecture in Icherisheher (Old City) with ultra-modern developments like the Flame Towers and Heydar Aliyev Center. Located on the Caspian Sea, Baku features a beautiful seaside boulevard, numerous museums including the Azerbaijan Carpet Museum and National Art Museum, upscale shopping districts, and vibrant nightlife. The city's rapid development fueled by oil wealth has transformed it into a showcase of contemporary architecture while preserving its historical core."
      },
      {
        name: "Ganja",
        description: "Azerbaijan's second-largest city with a history dating back 2,500 years. Notable for its distinct architectural style, Ganja features the 17th-century Shah Abbas Mosque, the Javad Khan Street with traditional houses, and the striking blue-tiled Imamzadeh Mausoleum. Surrounded by natural attractions including Lake Goygol created by a medieval earthquake, the city serves as a gateway to western Azerbaijan and offers insights into Azerbaijani culture away from the capital's international influences."
      },
      {
        name: "Sheki",
        description: "A picturesque historic city nestled in the forested foothills of the Greater Caucasus Mountains. Once a key stop on the Silk Road, Sheki is renowned for its UNESCO-listed Khan's Palace with intricate decorations and colorful shebeke (stained glass windows), traditional caravanserais where merchants once stayed, and craft workshops producing halva (sweet confection), textiles, and pottery. The surrounding countryside features alpine scenery and small villages preserving traditional lifestyles."
      },
      {
        name: "Sumqayit",
        description: "A major industrial center that has evolved into Azerbaijan's third-largest city. Located on the Caspian coast north of Baku, Sumqayit has undergone significant modernization with new parks, cultural centers, and a revitalized seaside promenade. The city offers an interesting contrast to more touristic destinations, providing insights into contemporary urban life in Azerbaijan and the country's industrial development."
      },
      {
        name: "Nakhchivan City",
        description: "The capital of the Nakhchivan Autonomous Republic, an exclave separated from the rest of Azerbaijan by Armenian territory. This ancient city features distinctive architecture including the cylindrical Momine Khatun Mausoleum from the 12th century, the cave-like Khan's House, and various historic mosques. The surrounding region is known for its mountain scenery, salt caves with therapeutic properties, and unique cultural traditions that have developed somewhat independently due to its geographical isolation."
      }
    ],
    famousFor: [
      "Flame Towers - The iconic trio of skyscrapers symbolizing Azerbaijan's association with fire",
      "Mud volcanoes - Azerbaijan has the highest concentration in the world, with over 400 of the world's 800 mud volcanoes",
      "Carpet weaving tradition - A UNESCO-recognized cultural heritage with distinctive regional patterns",
      "Natural gas fires - Including Yanar Dag (Burning Mountain) where earth continuously burns from natural gas seepage",
      "Caspian Sea caviar - Once a major producer of the world's finest caviar from Caspian sturgeon"
    ],
    topAttractions: [
      {
        name: "Icherisheher (Old City)",
        description: "This UNESCO World Heritage site in Baku comprises a medieval walled city dating back to the 12th century. Narrow cobblestone streets wind past ancient sandstone buildings housing workshops, cafes, and residences. Key landmarks include the iconic Maiden Tower with its mysterious origins and stunning city views, the ornate Palace of the Shirvanshahs complex showcasing Azerbaijani architecture, and numerous historic hamams (bathhouses), mosques, and caravanserais. The contrast between this preserved medieval district and the ultra-modern skyline surrounding it creates a fascinating visual juxtaposition.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Gobustan National Park",
        description: "Located about 60km south of Baku, this UNESCO-listed archaeological preserve contains more than 6,000 rock engravings dating back 40,000 years. These petroglyphs depict prehistoric life including hunting scenes, rituals, and wildlife, offering remarkable insights into human civilization during the Mesolithic period. The park also features strange musical stones that produce different notes when struck and impressive mud volcanoes that bubble and occasionally erupt with cold mud due to subterranean gas pressure. The landscape itself is dramatically barren, creating an otherworldly atmosphere for exploring these ancient human traces.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Heydar Aliyev Center",
        description: "Designed by renowned architect Zaha Hadid, this architectural masterpiece has become a symbol of modern Baku with its flowing, curved lines and absence of sharp angles. The building's innovative design represents a break from the rigid Soviet architecture of the past. Housing exhibition spaces, a conference hall, and a museum, the center hosts cultural events while showcasing Azerbaijan's contemporary ambitions. The interior is equally impressive with soaring ceilings and fluid spaces, while the surrounding plaza features artistic installations and landscaped grounds that make it a popular gathering place for both tourists and locals.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sheki Khan's Palace",
        description: "This exquisite summer palace in Sheki was built in 1762 without using a single nail. Its most remarkable feature is the shebeke - intricate stained glass windows created by fitting thousands of colored glass pieces into wooden latticework without nails or glue. The palace interior showcases elaborate frescoes depicting hunting scenes, battles, and floral patterns, with each room displaying a different artistic style. Set within a walled garden with cherry trees and surrounded by mulberry groves that once supported Sheki's silk industry, the UNESCO-listed palace exemplifies the artistic heights of Azerbaijan's architectural heritage.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Yanar Dag (Burning Mountain)",
        description: "This natural phenomenon features a hillside that has been continuously burning for centuries, fed by natural gas seeping through the porous sandstone. The flames, which reach up to 3 meters in height, are particularly impressive at night or during winter when they contrast with darkness or snow. Unlike many other fire sites in Azerbaijan that have been extinguished, Yanar Dag has burned without interruption, giving visitors a glimpse into why ancient Zoroastrians considered the region sacred and why Azerbaijan is known as the 'Land of Fire.' The site now includes a small tearoom where visitors can contemplate the eternal flames over traditional Azerbaijani tea served from samovars.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Azerbaijani cuisine represents a flavorful fusion of influences from Turkish, Iranian, Middle Eastern, and Central Asian culinary traditions, adapted to local ingredients and preferences. Lamb, sturgeon, and various herbs feature prominently, while cooking methods often emphasize slow preparation to develop complex flavors. Meals typically begin with appetizers and salads before moving to substantial main courses, accompanied by fresh bread. Tea drinking is an elaborate cultural ritual, served in special pear-shaped glasses with thyme, mint, or other herbs, and usually accompanied by jam, dried fruits and various sweets.",
      famousDishes: [
        "Plov - The national dish featuring saffron-infused rice with various toppings such as lamb, dried fruits, and chestnuts, with distinct regional variations",
        "Dolma - Grape leaves or vegetables (bell peppers, tomatoes, eggplants) stuffed with spiced meat and rice mixture, often served with yogurt sauce",
        "Kebabs (Kabab) - Skewered and grilled meats, especially lamb, prepared with various marinades and typically served with sumac, fresh herbs, and flatbread",
        "Qutab - Thin stuffed pancakes with fillings of meat, pumpkin, cheese, or herbs, folded into half-moons and quickly cooked on a saj (convex griddle)",
        "Dushbara - Tiny lamb-filled dumplings served in a broth flavored with mint, sumac, and garlic, showcasing the patience required in Azerbaijani cooking"
      ]
    },
    culturalCustoms: [
      "Tea Culture - Offering tea is an essential hospitality gesture; refusing it can be considered impolite. It's served in special pear-shaped glasses called armudu",
      "Carpet Appreciation - Handwoven carpets are treasured artworks with different regions having distinct patterns; many homes display them on walls rather than floors",
      "Novruz Celebrations - The most important holiday marking spring equinox includes jumping over bonfires, special pastries, and family gatherings",
      "Respect for Elders - Standing when older people enter a room and giving them the most honored positions at the table reflects the high status of elders",
      "Traditional Music - Mugham, a complex improvisational musical form recognized by UNESCO, carries deep cultural significance and emotional expression"
    ],
    travelTips: [
      "E-visa system makes obtaining tourist visas relatively simple through the official ASAN Visa system",
      "While Baku is very modern, conservative dress (especially for women) is recommended when visiting rural areas or religious sites",
      "Taxis rarely use meters; agree on a price before starting your journey or use apps like Bolt or Uber",
      "Bargaining is expected in bazaars and with taxi drivers, but not in established stores",
      "Learn basic Azerbaijani phrases; while younger people in Baku may speak English, Russian is more widely understood as a second language throughout the country",
      "Tap water in Baku is generally safe, but bottled water is recommended elsewhere and for sensitive stomachs"
    ],
    safetyInfo: "Azerbaijan is generally a safe country to visit with low rates of violent crime and theft. The capital Baku is particularly secure with visible police presence and well-lit streets. However, standard precautions regarding belongings should be taken, especially in crowded areas and public transportation. The most significant safety concern relates to the border region with Armenia due to the ongoing Nagorno-Karabakh conflict. Visitors should completely avoid this region, which includes not only the disputed territories but also adjacent areas. Travel to the exclave of Nakhchivan requires careful planning as it cannot be accessed directly from the rest of Azerbaijan by land. Public demonstrations occur occasionally and should be avoided as they can escalate quickly. Health risks are minimal, though medical facilities outside major cities may be limited, and comprehensive travel insurance is recommended. Road conditions vary significantly, with excellent highways near Baku but potentially hazardous mountain roads elsewhere.",
    sustainableTourism: "Azerbaijan is gradually developing sustainable tourism initiatives, though its economy remains heavily dependent on oil and gas production. The government has established several national parks and protected areas, including Shirvan National Park (protecting the endangered Caucasian gazelle) and Göygöl National Park (preserving mountain lake ecosystems). Visitors can support conservation efforts by choosing eco-friendly tour operators that work with local communities and respect environmental guidelines. Community-based tourism is emerging in rural regions, particularly around Lahic, Sheki, and the Caucasus mountains, where staying in family-run guesthouses directly benefits local economies while providing authentic cultural experiences. The ABAD (Simplified Support to Family Business) program supports artisans and small-scale tourism entrepreneurs. Water conservation is encouraged as Azerbaijan faces significant water management challenges, especially in arid regions. While traveling in sensitive natural areas, visitors should adhere to established paths, practice carry-in/carry-out waste management, and consider carbon offset programs to mitigate long-distance travel emissions.",
    visaRequirements: "Most foreign nationals require a visa to enter Azerbaijan, though the country has implemented a simplified electronic visa (e-Visa) system for citizens of most countries. Applications can be submitted through the official ASAN Visa portal (evisa.gov.az), typically requiring a passport valid for at least six months beyond the planned stay, accommodation details, and return travel information. Standard tourist e-Visas are usually processed within 3 business days and grant a 30-day stay. Citizens of several CIS countries, including Russia, Ukraine, and Kazakhstan, can enter visa-free for specified periods. It's important to note that entry will be refused to travelers with evidence of travel to the disputed Nagorno-Karabakh region via Armenia in their passport. Those planning to visit Azerbaijan's exclave of Nakhchivan should research specific entry requirements, as different rules may apply. Visa regulations can change, so it's advisable to check with the nearest Azerbaijani diplomatic mission before planning travel.",
    budget: {
      budget: "40-70 AZN ($25-40 USD) per day for budget accommodations in hostels or guesthouses, eating at simple restaurants or cafes, and using public transportation",
      midRange: "70-150 AZN ($40-90 USD) per day for mid-range hotels, dining at good restaurants, occasional guided tours, and using taxis",
      luxury: "150+ AZN ($90+ USD) per day for luxury hotels, fine dining experiences, private guides, and chauffeured transportation"
    },
    transportationOptions: [
      "Baku Metro - Clean, efficient, and inexpensive subway system covering major areas of the capital city",
      "Buses - Extensive network throughout the country, ranging from modern vehicles in Baku to more basic transport between towns",
      "Marshrutkas (Minibuses) - Popular for both urban and intercity travel, departing when full rather than on fixed schedules",
      "Trains - Limited but improving rail network connecting major cities, including overnight services to distant destinations",
      "Domestic flights - Services between Baku and Nakhchivan, Ganja, and some other regional centers"
    ],
    neighboringCountries: [
      "Russia (to the north)",
      "Georgia (to the northwest)",
      "Armenia (to the west - border currently closed)",
      "Iran (to the south)",
      "Turkey (shares small border with Nakhchivan exclave)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cultural Heritage", "Architecture", "Ancient History", "Caspian Sea", "Mountain Landscapes",
    "Off the Beaten Path", "Natural Phenomena", "Silk Road", "Caucasus Region", "Traditional Crafts"
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

export default AzerbaijanCountry; 