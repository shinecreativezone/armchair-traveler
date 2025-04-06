import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const GermanyCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Germany",
    slug: "germany",
    continent: "Europe",
    capital: "Berlin",
    languageOfficial: "German",
    languagesSpoken: ["German", "Turkish", "Russian", "Polish", "Frisian", "Sorbian", "Danish"],
    currency: "Euro (EUR)",
    population: 83240000,
    area: 357022,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+49",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2016/01/29/17/49/banner-1168019_1280.jpg",
    description: "Germany, situated in the heart of Europe, is a country of diverse landscapes, from the mountains of Bavaria to the coastal plains of the north. As Europe's largest economy and most populous nation, it combines cutting-edge innovation with rich historical heritage. Known for its precision engineering, cultural contributions, and influential role in European politics, Germany has emerged from a tumultuous 20th century to become a global leader in renewable energy, technological advancement, and social welfare.",
    whyVisit: "Germany offers visitors an appealing blend of cultural depth, natural beauty, and modern efficiency. History enthusiasts can explore everything from medieval castles and baroque palaces to poignant World War II memorials. The country's artistic legacy is evident in world-class museums, concert halls, and the homes of renowned composers and thinkers. Nature lovers can discover the Black Forest, Alpine lakes, and pristine Baltic beaches, while urban explorers will appreciate the distinct character of cities like Berlin, Munich, and Hamburg. Add to this the famous German hospitality, excellent public transportation, regional culinary specialties, and celebrated beer culture, and you have a destination that rewards repeat visits across different regions and seasons.",
    bestTimeToVisit: {
      text: "The best time to visit Germany is from May to September when the weather is pleasantly warm, outdoor beer gardens are open, and festivals are in full swing. Late September to early October brings Oktoberfest in Munich, while December is magical for Christmas markets. Spring (April-May) offers fewer crowds and beautiful blooming landscapes. Winter (November-March) can be cold and gray in northern regions but provides excellent skiing in the Alps and fewer tourists at major attractions.",
      months: ["May", "June", "July", "August", "September", "December"]
    },
    weatherInfo: {
      summer: "German summers (June-August) are generally mild and pleasant with average temperatures between 18-25°C (64-77°F). Occasional heat waves can push temperatures above 30°C (86°F), particularly in the south and east. Northern coastal regions tend to be breezier and slightly cooler. Summer is the rainiest season in southern and central Germany, often with short afternoon thunderstorms rather than all-day precipitation. This is peak tourist season with the longest daylight hours, making it ideal for outdoor activities and exploration.",
      winter: "Winters (December-February) vary significantly across Germany. Northern and eastern regions experience cold, damp conditions with temperatures typically ranging from -5°C to 4°C (23-39°F) and limited sunshine. Alpine regions in the south receive substantial snowfall, creating ideal conditions for winter sports, with temperatures often dropping below freezing. Central Germany falls between these extremes. Major cities rarely see extreme cold but can be overcast and gray, with daylight hours notably shorter. Christmas markets bring warmth and festivity to this season.",
      spring: "Spring (March-May) sees Germany gradually warming with temperatures ranging from 8-18°C (46-64°F) and nature coming to life. Early spring can still be chilly with occasional frost, but by May most regions enjoy pleasant conditions. Cherry and apple blossoms transform landscapes, particularly in southern regions like Baden-Württemberg. Spring showers are common but typically brief, and the shoulder season brings fewer tourists and lower accommodation prices while still offering comfortable exploring conditions.",
      fall: "Fall (September-November) brings cooling temperatures ranging from 8-18°C (46-64°F) and spectacular foliage, especially in forested regions like the Black Forest and Bavarian Alps. Early fall remains relatively warm with harvest festivals throughout the country, including the famous Oktoberfest. By November, conditions become notably cooler and grayer, with first frost appearing in many regions. Fall offers excellent value for travelers with fewer crowds at major attractions, comfortable temperatures for city exploration, and beautiful natural scenery."
    },
    majorCities: [
      {
        name: "Berlin",
        description: "Germany's dynamic capital is a city constantly reinventing itself while honoring its complex past. Known for its cutting-edge art scene, unparalleled nightlife, and remarkable history, Berlin combines grand boulevards and neoclassical architecture with gritty industrial spaces repurposed as cultural venues. Visitors can trace the city's divided history at the Berlin Wall Memorial and Checkpoint Charlie, explore world-class museums on Museum Island, and experience the distinctive character of neighborhoods from upscale Charlottenburg to trendy Kreuzberg."
      },
      {
        name: "Munich",
        description: "The capital of Bavaria exudes traditional German charm with its historic architecture, beer halls, and nearby Alpine scenery. Home to the world-famous Oktoberfest, Munich balances its beer-loving reputation with sophisticated cultural offerings including the Deutsches Museum (the world's largest science museum) and multiple art collections. The central Marienplatz with its ornate Rathaus-Glockenspiel, expansive English Garden, and distinctive Bavarian cuisine give Munich a character quite different from northern German cities."
      },
      {
        name: "Hamburg",
        description: "Germany's second-largest city and major port features more bridges than Venice and Amsterdam combined, sprawling across islands and canals of the Elbe River. Hamburg's maritime heritage is evident in its historic warehouse district (now the UNESCO-listed Speicherstadt) and bustling harbor. The city offers sophisticated shopping along the Jungfernstieg promenade, vibrant nightlife in the St. Pauli district, and impressive cultural venues including the striking Elbphilharmonie concert hall. Hamburg's cosmopolitan atmosphere reflects its centuries of importance as a trading hub."
      },
      {
        name: "Cologne",
        description: "Dominated by its magnificent Gothic cathedral with the world's largest church façade, Cologne blends 2,000 years of history with Rhineland conviviality. The city's skyline has been defined by the twin spires of the Kölner Dom since their completion in 1880, but Cologne offers much more, including excellent museums, the picturesque Old Town, and distinctive local beer (Kölsch) served in traditional brewhouses. The annual Carnival celebration here ranks among Germany's most exuberant festivals, transforming the city into a center of merrymaking."
      },
      {
        name: "Frankfurt",
        description: "Often misunderstood as merely a financial center and transport hub, Frankfurt offers an intriguing mix of skyscrapers (earning it the nickname 'Mainhattan') and historic charm. The reconstructed Römerberg square with its half-timbered buildings provides a contrast to the modern banking district, while excellent museums line the Main River in the Museumsufer district. As Germany's most international city, Frankfurt boasts outstanding dining options, from traditional apple wine taverns to sophisticated global cuisine, reflecting its role as a crossroads of European culture and commerce."
      }
    ],
    famousFor: [
      "Oktoberfest - World's largest beer festival held annually in Munich",
      "Neuschwanstein Castle - Fairy-tale castle that inspired Disney",
      "Automotive Engineering - Birthplace of Mercedes-Benz, BMW, and Porsche",
      "Christmas Markets - Traditional winter markets with festive foods and handcrafts",
      "Berlin Wall - Historic barrier that divided East and West Berlin from 1961 to 1989"
    ],
    topAttractions: [
      {
        name: "Neuschwanstein Castle",
        description: "This 19th-century Romanesque Revival palace in Bavaria has become an iconic symbol of Germany. Built by King Ludwig II as an idealized vision of a medieval knight's castle, it later inspired Walt Disney's Sleeping Beauty Castle. Perched dramatically on a rugged hill above the village of Hohenschwangau, its fairy-tale towers and ornate interiors attract over 1.4 million visitors annually. The castle's lavish rooms feature Byzantine, Romanesque, and Gothic influences, with murals depicting scenes from Wagner's operas, reflecting Ludwig's admiration for the composer.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Brandenburg Gate",
        description: "This 18th-century neoclassical monument in Berlin has witnessed crucial moments in German history and now symbolizes unity and peace. Originally built as a city gate marking the start of the road to Brandenburg an der Havel, it later served as a potent symbol during the Cold War when the Berlin Wall isolated it in the no-man's land between East and West. After Germany's reunification, the restored gate became a national symbol of unity. The structure features twelve Doric columns forming five passageways and is topped by the Quadriga sculpture depicting the goddess of victory.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Cologne Cathedral",
        description: "This masterpiece of Gothic architecture took over 600 years to complete and stands as Germany's most visited landmark. The UNESCO World Heritage site features the largest facade of any church in the world, soaring twin spires reaching 157 meters, and remarkable medieval stained glass. Construction began in 1248 but wasn't completed until 1880, following the original medieval plans. The cathedral houses important religious treasures, including the gilded Shrine of the Three Kings, believed to contain the remains of the Biblical Magi, making it an important pilgrimage site.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Romantic Road",
        description: "This 350-kilometer scenic route through southern Germany connects charming medieval towns and fairy-tale castles through Bavaria and Baden-Württemberg. Created in the 1950s to revive tourism, the route follows an ancient trade path, featuring perfectly preserved walled towns like Rothenburg ob der Tauber, historic Würzburg with its magnificent Residence Palace, and the Alpine splendor around Füssen. Though designed as a tourist attraction, the Romantic Road genuinely showcases Germany's picturesque countryside, cultural richness, and historical depth.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Museum Island",
        description: "This UNESCO-listed complex in the heart of Berlin houses five world-class museums built between 1830 and 1930 on a small island in the Spree River. The ensemble includes the Pergamon Museum with its monumental Middle Eastern antiquities, the Neues Museum housing the famous bust of Nefertiti, the Altes Museum's classical antiquities, the National Gallery's 19th-century art, and the Bode Museum's sculpture collections. Recently renovated with the addition of the underground Archaeological Promenade connecting the buildings, Museum Island represents one of the world's most ambitious cultural projects.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "German cuisine varies significantly by region, reflecting the country's federal history and diverse geography. Hearty, robust dishes traditionally feature meat (especially pork), potatoes, and cabbage, though each region has distinctive specialties from Bavaria's wheat beer and pretzels to Hamburg's seafood. Contemporary German food culture increasingly incorporates international influences while maintaining strong traditions. Meals are often social affairs, with dinner being the main family meal and restaurants ranging from rustic beer halls to Michelin-starred establishments.",
      famousDishes: [
        "Bratwurst - Various grilled sausages served with mustard, often in a bread roll",
        "Schnitzel - Thinly pounded, breaded and fried meat cutlet, typically served with potatoes and lemon",
        "Sauerkraut - Fermented cabbage, usually served as a side dish with meat",
        "Black Forest Cake (Schwarzwälder Kirschtorte) - Chocolate sponge cake with cherries, cream, and kirsch liqueur",
        "Pretzel (Brezel) - Baked bread formed into a knot shape, with a dark, shiny crust and soft interior"
      ]
    },
    culturalCustoms: [
      "Punctuality - Being on time is highly valued in both business and social contexts",
      "Direct Communication - Germans tend to be straightforward and value clear, honest communication",
      "Recycling Culture - Environmental consciousness is strong, with elaborate waste separation systems",
      "Bread Appreciation - With over 300 varieties, bread holds cultural significance beyond basic food",
      "Formality - Using proper titles (Herr/Frau) and the formal 'Sie' instead of informal 'du' until invited otherwise"
    ],
    travelTips: [
      "Learn basic German phrases - While many Germans speak English, attempting some German is appreciated",
      "Carry cash - Many establishments, especially smaller businesses, don't accept credit cards",
      "Understand the transportation system - Familiarize yourself with the efficient public transit network and validate tickets before boarding",
      "Respect Sunday closures - Most retail shops close on Sundays, though restaurants and some tourist attractions remain open",
      "Follow recycling rules - Germany takes waste separation seriously, with different bins for various types of waste",
      "Budget for city tourist taxes - Many cities charge a small per-night fee for accommodations"
    ],
    safetyInfo: "Germany ranks among the safest countries in Europe for travelers, with low rates of violent crime and excellent emergency services. Major cities maintain good safety records even in evening hours, though standard urban precautions against pickpocketing are advised in crowded tourist areas and public transportation. The country's infrastructure is exceptionally well-maintained, with clean drinking water and high food safety standards. The police (Polizei) are professional, trustworthy, and often speak English. The European emergency number 112 connects to emergency services throughout the country. While demonstrations occasionally occur in larger cities, they are typically peaceful and well-regulated.",
    sustainableTourism: "Germany has positioned itself as a leader in sustainable tourism, with comprehensive initiatives including the 'Green Destinations' certification and extensive promotion of eco-friendly accommodation options. The country's excellent public transportation system, including high-speed trains, regional services, and efficient urban networks, significantly reduces the environmental impact of travel. Numerous national parks and biosphere reserves protect diverse ecosystems from the Wadden Sea to the Bavarian Forest. Visitors can participate in sustainability efforts by using public transport, staying in certified green accommodations, supporting local businesses, and exploring Germany's extensive network of hiking and cycling trails. The country's commitment to renewable energy is evident in wind farms and solar installations throughout the landscape.",
    visaRequirements: "Germany is part of the Schengen Area, allowing citizens from the European Union and many developed nations (including the United States, Canada, Australia, and Japan) to enter without a visa for stays up to 90 days within a 180-day period. Visitors from other countries must apply for a Schengen visa through German diplomatic missions before travel. All visitors should have a passport valid for at least three months beyond their planned departure date, proof of sufficient funds, travel insurance covering at least €30,000 in emergency medical expenses, and documentation of accommodation and return travel arrangements. Requirements may change, so verifying current regulations on the official German Foreign Office website before travel is recommended.",
    budget: {
      budget: "50-80 EUR per day for hostel accommodation, public transportation, budget meals, and free/discounted attractions",
      midRange: "80-200 EUR per day for mid-range hotels, restaurant dining, and paid attractions",
      luxury: "200+ EUR per day for luxury accommodation, fine dining, and premium experiences"
    },
    transportationOptions: [
      "ICE (Intercity Express) - High-speed trains connecting major cities at speeds up to 300 km/h",
      "Regional Trains - Comprehensive network serving smaller towns and rural areas",
      "U-Bahn and S-Bahn - Efficient urban subway and commuter rail systems in major cities",
      "Buses - Extensive local service in cities and intercity connections to areas not served by rail",
      "Bicycle Rental - Excellent cycling infrastructure with dedicated paths in many cities and regions",
      "Car Rental - Well-maintained highways (Autobahn) network, though not necessary in urban areas"
    ],
    neighboringCountries: [
      "Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Castles", "History", "Beer Culture", "Architecture", "Christmas Markets",
    "Mountains", "Museums", "Urban Exploration", "Classical Music", "Outdoor Activities"
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

export default GermanyCountry; 