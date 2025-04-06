import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AustriaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Austria",
    slug: "austria",
    continent: "Europe",
    capital: "Vienna",
    languageOfficial: "German",
    languagesSpoken: ["German", "Bavarian", "Austrian Sign Language", "English"],
    currency: "Euro (EUR)",
    population: 8978929,
    area: 83871,
    timeZones: ["GMT+1 (CET)", "GMT+2 (CEST) - Summer"],
    callingCode: "+43",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2015/11/06/15/13/flag-1028137_1280.jpg",
    description: "Austria, officially the Republic of Austria, is a landlocked country in the southern part of Central Europe. Located in the Eastern Alps, it consists of nine federated states, including the capital Vienna. A country of striking natural beauty, rich cultural heritage, and remarkable historical significance, Austria combines Alpine landscapes with imperial grandeur.",
    whyVisit: "Austria offers an enchanting blend of natural splendor and cultural richness that appeals to almost every type of traveler. The majestic Eastern Alps provide a playground for outdoor enthusiasts, with world-class skiing in winter and spectacular hiking trails during summer months. Music lovers pilgrimage to Vienna, the classical music capital of the world, where the legacies of Mozart, Beethoven, and Strauss still resonate through concert halls housed in ornate baroque and art nouveau buildings. The country's imperial history has left an indelible mark on its cities, with magnificent palaces, grand boulevards, and opulent coffee houses where time seems to stand still. Austrian cuisine delights with its hearty Alpine fare, delicate pastries, and excellent wines from picturesque vineyard regions. The seamless blend of tradition and modernity is evident in its thriving contemporary art scene, innovative design districts, and cutting-edge architecture that complements historical landmarks. From the sophisticated urbanity of Vienna to the baroque splendor of Salzburg and the pristine alpine lakes of Salzkammergut, Austria packs an astonishing variety of experiences into a relatively compact space, making it an ideal destination for travelers seeking depth, beauty, and authentic European charm.",
    bestTimeToVisit: {
      text: "The best time to visit Austria depends on intended activities: for alpine skiing, visit between December and March; for hiking and outdoor exploration, May through September offer pleasant temperatures (20-25°C/68-77°F) and lush landscapes; for city experiences and cultural events, April-June and September-October provide comfortable weather and fewer tourists.",
      months: ["May", "June", "September", "October", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summer (June to August) brings warm temperatures ranging from 20-30°C (68-86°F), with occasional thunderstorms. Alpine regions remain cooler, around 15-25°C (59-77°F), offering relief from the heat. This is peak tourist season, especially in lakes regions.",
      winter: "Winter (December to February) is cold with temperatures ranging from -5 to 5°C (23-41°F) in cities, and significantly colder in the mountains, often below freezing. Snowfall is common throughout the country, transforming alpine regions into premier winter sports destinations.",
      spring: "Spring (March to May) sees gradually warming temperatures from 5-20°C (41-68°F) with blooming flowers and occasional rainfall. Alpine areas may still have snow into April, creating a beautiful contrast with emerging greenery in valleys.",
      fall: "Fall (September to November) offers mild temperatures cooling from 20°C to 5°C (68-41°F) as the season progresses. Forests display vibrant autumn colors, and wine regions celebrate harvest. Tourist crowds thin out, making it ideal for cultural exploration."
    },
    majorCities: [
      {
        name: "Vienna",
        description: "The capital and largest city, Vienna blends imperial grandeur with vibrant contemporary culture. Home to opulent palaces such as Schönbrunn and Hofburg, world-class museums along the Ringstrasse, historic coffee houses, and the Vienna State Opera. The city's musical heritage, linked to Mozart, Beethoven, and Strauss, continues through its renowned philharmonic orchestra and choir boys. Modern Vienna features innovative architecture, a thriving design scene, and expansive green spaces like the Prater park with its iconic Ferris wheel."
      },
      {
        name: "Salzburg",
        description: "Mozart's birthplace is characterized by its perfectly preserved baroque architecture and dramatic Alpine backdrop. The UNESCO-listed Old Town features the imposing Hohensalzburg Fortress overlooking narrow streets lined with medieval and baroque buildings. Music permeates the city, from the famous Salzburg Festival to locations featured in 'The Sound of Music.' Salzburg combines cultural refinement with proximity to stunning natural landscapes of the Salzkammergut lake district."
      },
      {
        name: "Innsbruck",
        description: "The capital of Tyrol province sits in the heart of the Alps, offering a unique combination of urban amenities and immediate access to mountain adventure. Known for its Imperial and Golden Roof landmarks, scenic old town, and Olympic history, having hosted the Winter Games twice. The Nordkette cable car takes visitors from the city center to 2,000m elevation in minutes, showcasing Innsbruck's remarkable position between urban life and alpine wilderness."
      },
      {
        name: "Graz",
        description: "Austria's second-largest city features one of Europe's best-preserved medieval old towns, a UNESCO World Heritage site. Dominated by the Schlossberg hill and clock tower, Graz blends Renaissance and baroque architecture with bold contemporary designs like the floating Murinsel platform and the futuristic Kunsthaus (Art Museum). Known as a university town with a young atmosphere, vibrant culinary scene emphasizing Styrian regional specialties, and relaxed Mediterranean-influenced ambiance."
      },
      {
        name: "Linz",
        description: "This industrial city on the Danube has transformed into a hub for technology and contemporary arts. The Ars Electronica Center explores the intersection of art, technology, and society, while the striking Lentos Art Museum houses impressive modern art collections. Linz's Old Town features baroque architecture around the main square, with the towering Linz Cathedral and hilltop Pöstlingberg pilgrimage church offering panoramic views. The city balances industrial heritage with forward-thinking cultural initiatives."
      }
    ],
    famousFor: [
      "Alpine skiing and mountain landscapes in the Eastern Alps",
      "Classical music heritage of Mozart, Beethoven, Strauss, and the Vienna Philharmonic",
      "Imperial architecture including palaces, castles, and baroque churches",
      "Traditional coffee house culture with pastries like Sachertorte and Apfelstrudel",
      "The Sound of Music filming locations and Salzburg's musical heritage"
    ],
    topAttractions: [
      {
        name: "Schönbrunn Palace",
        description: "This UNESCO World Heritage site served as the imperial summer residence for the Habsburg monarchs. The 1,441-room baroque palace is surrounded by meticulously landscaped gardens featuring fountains, sculptures, the world's oldest zoo, and the Gloriette viewpoint. Inside, the palace's state rooms showcase opulent rococo design with crystal chandeliers, frescoed ceilings, and gilded ornamentation. Guided tours reveal the daily lives and political machinations of Emperor Franz Joseph, Empress Elisabeth (Sisi), and other royal residents who shaped European history.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Hallstatt Village and Lake",
        description: "This impossibly picturesque village nestled between mountains and a crystal-clear lake epitomizes Alpine beauty. The UNESCO-listed settlement features colorful 16th-century houses built on a narrow shore, with the world's oldest salt mine located above in the mountains. Visitors can explore prehistoric artifacts at the Hallstatt Museum, take boat trips on Lake Hallstatt, or admire panoramic views from the \"Five Fingers\" viewing platform. The nearby Dachstein Ice Cave and Mammoth Cave offer additional natural wonders, making this region a microcosm of Austria's alpine splendor.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Belvedere Palace",
        description: "This baroque palace complex consists of two magnificent buildings—Upper and Lower Belvedere—connected by formal French gardens. Built as a summer residence for Prince Eugene of Savoy in the early 18th century, it now houses one of Austria's most important art collections. The Upper Belvedere showcases masterpieces including Gustav Klimt's \"The Kiss\" and works by Egon Schiele and Oskar Kokoschka, providing insight into Vienna's revolutionary art movements. The palace architecture itself, with its ornate interiors and reflective pools, represents Austrian baroque at its finest.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Grossglockner High Alpine Road",
        description: "This engineering marvel is Austria's highest paved mountain pass road, winding through the heart of Hohe Tauern National Park. The 48-kilometer scenic route features 36 hairpin turns, climbing to an altitude of 2,504 meters and offering unparalleled views of Alpine landscapes, including Austria's highest peak, the Grossglockner (3,798m). Wildlife viewing opportunities include marmots, ibex, and golden eagles, while the Pasterze Glacier visitor center explains the region's fragile alpine ecosystem. Open only from May to October, the road represents both natural splendor and human ingenuity.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Hofburg Imperial Palace",
        description: "The sprawling former principal imperial palace in Vienna's center served as the Habsburg dynasty's power base for over 600 years. This vast complex encompasses the Imperial Apartments, Sisi Museum, Spanish Riding School with its Lipizzaner stallions, Austrian National Library with its magnificent State Hall, and Imperial Treasury housing the crown jewels. The architectural styles span Gothic to Rococo to Neoclassical, reflecting centuries of additions. Today, it serves as the official residence of Austria's president while offering visitors a deep immersion into the country's imperial legacy.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Austrian cuisine reflects its imperial history and Alpine geography, blending influences from throughout the former Habsburg Empire. Hearty meat dishes, dumplings, and freshwater fish feature prominently alongside internationally renowned pastries and desserts. Regional variations abound, from the wine-influenced cuisine of Lower Austria to the Italian-influenced dishes of Carinthia. Traditional restaurants called 'Gasthäuser' or 'Wirtshäuser' serve authentic fare, while Vienna's historic coffee houses offer a unique cultural experience with their marble tables, newspaper racks, and unhurried atmosphere.",
      famousDishes: [
        "Wiener Schnitzel - Thin veal cutlet breaded and fried to golden perfection, traditionally served with potato salad and lingonberry jam",
        "Sachertorte - Rich chocolate cake with apricot jam filling and dark chocolate glaze, created at the Hotel Sacher and subject of famous legal battles",
        "Tafelspitz - Boiled beef in broth served with apple-horseradish sauce, chive sauce, and rösti potatoes, Emperor Franz Joseph's favorite dish",
        "Kaiserschmarrn - Shredded, caramelized pancake served with fruit compotes, named after Emperor Franz Joseph who adored this 'emperor's mess'",
        "Tiroler Gröstl - Hearty pan-fried dish of potatoes, onions, and bacon topped with a fried egg, popular in alpine regions after a day of skiing"
      ]
    },
    culturalCustoms: [
      "Greeting with 'Grüß Gott' (Greet God) is common in Austria, especially in more rural and alpine regions",
      "Coffee house culture includes long, leisurely visits, reading newspapers provided on wooden holders, and specific vocabulary for different coffee preparations",
      "Punctuality is highly valued; arriving on time or slightly early is expected for both social and business engagements",
      "Handshaking is customary when meeting and departing, with eye contact considered important for respectful interaction",
      "The traditional greeting 'Mahlzeit' (literally 'mealtime') is used to wish someone a good meal, even among colleagues around lunchtime"
    ],
    travelTips: [
      "Most shops close on Sundays and holidays; plan grocery shopping and souvenirs accordingly",
      "Tipping is customary but not excessive - typically rounding up the bill or adding 5-10% in restaurants",
      "Tap water is excellent quality throughout Austria and safe to drink - mountains provide natural filtration",
      "Purchase the Vienna Pass or Salzburg Card when exploring these cities to save on attractions and transportation",
      "In alpine regions, weather can change rapidly; pack layers even in summer and respect mountain safety warnings",
      "Train travel is an excellent way to see the country, with the ÖBB offering scenic routes and efficient service"
    ],
    safetyInfo: "Austria ranks among the safest countries in the world, with low crime rates and stable political conditions. However, normal precautions regarding personal belongings should be taken, especially in crowded tourist areas and Christmas markets in major cities where pickpocketing can occur. The greatest risks typically involve outdoor activities, particularly alpine sports. Skiers and hikers should observe safety guidelines, stay on marked trails, check weather forecasts, and respect avalanche warnings in winter. The mountain rescue service (Bergrettung) may charge substantial fees for evacuations, so comprehensive travel insurance covering mountain rescue is highly recommended. Tap water is safe to drink throughout the country, and healthcare standards are excellent, though travelers should have adequate medical insurance as treatment can be expensive for non-EU citizens without proper coverage.",
    sustainableTourism: "Austria has positioned itself as a leader in sustainable tourism, with an emphasis on maintaining natural environments and cultural heritage. Approximately 23% of all agricultural land is used for organic farming, and many accommodations have committed to eco-friendly practices. The country's excellent public transportation network reduces the need for car travel, with electric-powered trains connecting even remote alpine villages. Visitors can participate in this commitment through choosing certified eco-hotels (look for the Austrian Ecolabel), supporting local businesses, respecting marked trails in natural areas, using regional products, and considering \"soft mobility\" options such as cycling and hiking. The Austrian National Tourist Office promotes sustainable tourism initiatives including car-free alpine resorts and farm-stay programs that maintain traditional agricultural practices. Many ski resorts have implemented comprehensive environmental management systems to minimize impact while maintaining world-class facilities.",
    visaRequirements: "Austria is a member of the European Union and the Schengen Area. Visitors from EU/EEA countries and Switzerland can enter with just a valid national ID card for stays of any length. Citizens of the United States, Canada, Australia, New Zealand, Japan, and many other countries can enter visa-free for tourism purposes for up to 90 days within a 180-day period with a passport valid for at least three months beyond their planned departure date. Travelers from other countries should check specific requirements with the Austrian embassy or consulate in their home country. Those planning to work, study, or stay longer than 90 days must apply for the appropriate visa or residence permit before arrival. As regulations may change, it's advisable to verify requirements before travel.",
    budget: {
      budget: "€60-100 ($65-110) per day for budget accommodations in hostels or pensions, self-catering or eating at budget restaurants, and using public transportation",
      midRange: "€100-200 ($110-220) per day for mid-range hotels or guesthouses, regular restaurant meals, and occasional guided activities or cultural events",
      luxury: "€200+ ($220+) per day for luxury hotels, fine dining experiences, private tours, and premium cultural performances or skiing access"
    },
    transportationOptions: [
      "Trains - The national railway (ÖBB) provides comprehensive, punctual service throughout the country with scenic routes through alpine regions",
      "Buses - Both urban networks and PostBus services to rural areas complement the rail system, reaching places trains don't serve",
      "Trams - Vienna, Graz, Linz, and Innsbruck have extensive tram networks, often the most convenient way to explore city centers",
      "Bikes - Extensive cycling infrastructure with dedicated paths in cities and long-distance routes along rivers and through countryside",
      "Boats - Services on lakes in the Salzkammergut and along the Danube offer both transportation and sightseeing opportunities"
    ],
    neighboringCountries: [
      "Germany (to the north)",
      "Czech Republic (to the northeast)",
      "Slovakia (to the east)",
      "Hungary (to the southeast)",
      "Slovenia (to the south)",
      "Italy (to the southwest)",
      "Switzerland (to the west)",
      "Liechtenstein (to the west)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Alpine Scenery", "Classical Music", "Historical Architecture", "Winter Sports", "Coffee Culture",
    "Imperial History", "Hiking", "Lakes", "Castles & Palaces", "Classical Arts"
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

export default AustriaCountry; 