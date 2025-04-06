import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const FranceCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "France",
    slug: "france",
    continent: "Europe",
    capital: "Paris",
    languageOfficial: "French",
    languagesSpoken: ["French", "Occitan", "Breton", "Alsatian", "Corsican", "Catalan", "Basque"],
    currency: "Euro (EUR)",
    population: 67750000,
    area: 551695,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+33",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2015/11/06/15/13/flag-1028137_1280.jpg",
    description: "France, located in Western Europe, is one of the world's most visited countries, renowned for its exquisite cuisine, rich cultural heritage, and iconic landmarks. From the romantic allure of Paris to the sun-drenched beaches of the Riviera, the snow-capped Alps, and the pastoral landscapes of Provence, France offers remarkable geographical diversity. Its contributions to art, literature, philosophy, fashion, and gastronomy have shaped global culture, while its historical significance as a political and economic power continues to influence international affairs.",
    whyVisit: "France captivates visitors with a perfect blend of history, culture, and sensory pleasures. Art enthusiasts can marvel at masterpieces in the Louvre and impressionist works in Musée d'Orsay, while architecture lovers can admire Gothic cathedrals, Renaissance châteaux, and modernist landmarks. Culinary travelers will delight in regional specialties, world-class wines, and the ritual of café culture. Beyond Paris, each region offers distinct experiences: from the lavender fields of Provence and the vineyards of Bordeaux to the alpine resorts of Chamonix and the prehistoric caves of Dordogne. With its emphasis on the art of living well ('l'art de vivre'), France invites visitors to slow down and savor life's pleasures.",
    bestTimeToVisit: {
      text: "The best time to visit France is during the shoulder seasons of spring (April to June) and fall (September to October) when the weather is pleasant, tourist crowds are smaller, and prices are lower than peak summer. Summer (July-August) brings vibrant festivals and beach weather but also crowds and higher prices, while winter (November-March) offers Christmas markets, skiing in the Alps, and fewer tourists in major cities.",
      months: ["April", "May", "June", "September", "October"]
    },
    weatherInfo: {
      summer: "Summers in France are generally warm and sunny with average temperatures between 20-30°C (68-86°F), though conditions vary by region. The Mediterranean coast experiences hot, dry weather often exceeding 30°C (86°F), while the Atlantic coast tends to be milder. Paris and central regions can be quite warm with occasional heat waves pushing temperatures above 35°C (95°F). August sees many locals vacationing, with some businesses in cities closing temporarily.",
      winter: "Winter temperatures typically range from 0-8°C (32-46°F) in most of the country, with colder conditions in mountainous areas and milder weather along the Mediterranean. Paris and northern regions can be chilly, damp, and gray, though rarely severely cold. The Alps and Pyrenees receive significant snowfall, creating ideal conditions for winter sports from December through March. Southern regions like Provence and the Côte d'Azur enjoy milder winters with some sunny days.",
      spring: "Spring brings gradually warming temperatures (10-20°C/50-68°F) and blooming landscapes across France. Early spring can still be cool and somewhat unpredictable, but by May, conditions are generally pleasant nationwide. This season sees colorful flower displays in gardens like Giverny and Luxembourg, budding vineyards in wine regions, and increasingly longer daylight hours. Occasional rainfall helps maintain the lush countryside that France is famous for.",
      fall: "Autumn in France features cooling temperatures (10-18°C/50-64°F), falling leaves in parks and forests, and harvest activities in rural areas. This season offers spectacular foliage in regions like Alsace and the Loire Valley, quieter tourist sites, and special seasonal menus featuring mushrooms, game, and new wine. The Mediterranean coast can remain pleasantly warm through October, while northern regions begin to cool significantly by November."
    },
    majorCities: [
      {
        name: "Paris",
        description: "The iconic French capital combines timeless elegance with contemporary energy. Home to world-famous landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, Paris enchants visitors with its distinctive arrondissements (districts), each with unique character. The city's wide boulevards, Seine River promenades, charming cafés, and exceptional museums create an atmosphere that has inspired artists, writers, and romantics for centuries. Beyond the major attractions, Paris rewards exploration of its less-visited neighborhoods where local Parisian life unfolds."
      },
      {
        name: "Lyon",
        description: "France's third-largest city is widely considered its gastronomic capital, famous for traditional bouchons (restaurants) serving Lyonnaise specialties. Located at the confluence of the Rhône and Saône rivers, Lyon boasts a UNESCO-listed historic center with Renaissance architecture, hidden passageways (traboules), and ancient Roman ruins. The city combines rich culinary and silk-weaving traditions with a vibrant contemporary scene featuring innovative restaurants, cultural festivals, and a burgeoning tech industry."
      },
      {
        name: "Marseille",
        description: "France's oldest city and primary Mediterranean port blends ancient history with multicultural vibrancy. Founded by Greek sailors 2,600 years ago, Marseille offers the atmospheric Old Port area, stunning calanques (rocky coastal inlets), and the hilltop Notre-Dame de la Garde basilica with panoramic city views. The city's diverse population creates a unique atmosphere distinct from northern France, with North African influences evident in local markets and cuisine. Recent urban renewal projects have added modern museums and cultural spaces to this historic maritime city."
      },
      {
        name: "Bordeaux",
        description: "The capital of southwest France's wine region combines 18th-century architectural elegance with a lively student population and culinary excellence. Its UNESCO-listed city center features uniform honey-colored stone buildings along the Garonne River, including the magnificent Place de la Bourse with its reflecting pool. Beyond wine tourism at surrounding vineyards, Bordeaux offers excellent museums, a revitalized riverfront area, and a vibrant food scene showcasing regional specialties like canelés (caramelized pastries) and entrecôte à la bordelaise (steak in wine sauce)."
      },
      {
        name: "Nice",
        description: "The jewel of the French Riviera captures Mediterranean living at its finest with its magnificent Promenade des Anglais seafront walkway, vibrant markets, and distinctive Niçoise cuisine. The city's Italian influences (it only became part of France in 1860) are evident in its architecture, dialect, and culinary traditions. Visitors can explore the atmospheric lanes of Vieux Nice (Old Town), enjoy panoramic views from Castle Hill, or relax on the famous pebbly beaches. Nice also serves as an excellent base for exploring glamorous coastal towns like Cannes, Antibes, and Monaco."
      }
    ],
    famousFor: [
      "Eiffel Tower - Iconic iron lattice tower in Paris and global symbol of France",
      "Cuisine & Wine - World-renowned gastronomy and wine-making traditions",
      "Art & Museums - Home to countless masterpieces and prestigious institutions like the Louvre",
      "Fashion - Global center for haute couture and luxury brands",
      "Châteaux - Magnificent historic castles, particularly in the Loire Valley"
    ],
    topAttractions: [
      {
        name: "Eiffel Tower",
        description: "This wrought-iron lattice tower on the Champ de Mars in Paris has become the global icon of France. Completed in 1889 for the World's Fair, the structure initially faced criticism but now stands as one of the world's most recognizable landmarks. Visitors can ascend to three different levels, with the top offering panoramic views extending 70 kilometers on clear days. The tower is particularly magical at night when its 20,000 bulbs create a sparkling light show every hour.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Palace of Versailles",
        description: "The former royal residence located just outside Paris epitomizes the grandeur of the French monarchy. Built by Louis XIV, the 'Sun King,' this UNESCO World Heritage site features the opulent palace with the famous Hall of Mirrors, where the Treaty of Versailles was signed ending World War I. The estate includes meticulously manicured formal gardens designed by André Le Nôtre, the Grand and Petit Trianon palaces, and Marie Antoinette's rustic hamlet. The palace's 2,300 rooms display remarkable craftsmanship and historical artifacts.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Mont Saint-Michel",
        description: "This medieval abbey perched on a rocky tidal island off the Normandy coast creates one of France's most spectacular sights. Connected to the mainland by a causeway, the UNESCO-listed Mont Saint-Michel appears to rise mystically from the sea during high tide. The abbey itself represents a masterpiece of medieval architecture, with spiraling streets below filled with shops and restaurants. Visiting at different tide levels offers completely different perspectives of this remarkable site that has served as both a fortress and a spiritual center over its thousand-year history.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Louvre Museum",
        description: "Housed in a former royal palace in central Paris, the Louvre is the world's most-visited museum and home to thousands of works of art spanning human civilization. While many visitors come to see Leonardo da Vinci's Mona Lisa, the collection includes countless other masterpieces like the Venus de Milo, Winged Victory of Samothrace, Liberty Leading the People, and treasures from ancient Egypt, Greece, and Rome. The museum's striking glass pyramid entrance, designed by I.M. Pei, has become an iconic landmark in its own right, symbolizing the blend of historical and contemporary that characterizes Paris.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "French Riviera (Côte d'Azur)",
        description: "The Mediterranean coastline stretching from Cassis to the Italian border represents the epitome of glamorous seaside living. Names like Saint-Tropez, Cannes, and Monaco evoke images of luxury yachts, film festivals, and celebrity sightings, but the region also offers authentic fishing villages, ancient towns, and secluded beaches. Visitors can explore the artistic heritage of towns like Antibes and Saint-Paul-de-Vence, hike along stunning coastal paths, or simply enjoy the region's perfect combination of sophisticated cuisine, crystalline waters, and abundant sunshine that has attracted travelers for centuries.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "French cuisine is renowned worldwide for its sophistication, regional diversity, and influence on global culinary traditions. Based on simple ingredients transformed through complex techniques, French cooking emphasizes fresh, quality products and precise preparation. Each region boasts distinctive specialties reflecting local produce, with variations from the butter-rich dishes of Normandy to the olive oil-based Mediterranean cuisine of Provence. Meals are treated as important social experiences rather than mere sustenance, with food and wine pairing considered an art form. Traditional bistros, Michelin-starred restaurants, and local markets all offer different ways to experience this celebrated culinary heritage.",
      famousDishes: [
        "Coq au Vin - Chicken slow-cooked with wine, mushrooms, bacon, onions, and garlic",
        "Boeuf Bourguignon - Beef stew braised in red wine with carrots, onions, and herbs",
        "Croissants & Pain au Chocolat - Flaky, buttery pastries central to French breakfast tradition",
        "Ratatouille - Provençal vegetable stew featuring eggplant, zucchini, peppers, and tomatoes",
        "Crème Brûlée - Rich custard topped with a layer of caramelized sugar"
      ]
    },
    culturalCustoms: [
      "Greeting Etiquette - The 'faire la bise' (cheek kisses) is common among friends, while handshakes are used in formal settings",
      "Mealtimes - Lunch and dinner are often lengthy affairs with multiple courses, and proper table manners are important",
      "Language Courtesy - Beginning interactions with 'Bonjour' and basic French phrases is appreciated, even if you then continue in English",
      "Dress Code - The French tend to dress well in public; casual attire is acceptable for tourists but should be neat and presentable",
      "Punctuality - While punctuality is valued for business, arriving 10-15 minutes late to social gatherings is common practice"
    ],
    travelTips: [
      "Learn basic French phrases - Starting conversations with 'Bonjour' and making an effort with the language is highly appreciated",
      "Follow dining etiquette - Keep hands visible on the table, not in your lap, and don't expect ice in drinks",
      "Shop at local markets - Experience authentic French life and products at weekly farmers' markets",
      "Validate transport tickets - Always validate metro and train tickets in machines before boarding to avoid fines",
      "Be aware of closures - Many shops close on Sundays and for lunch hours between 12-2pm, especially in smaller towns",
      "Plan ahead for major attractions - Book tickets online for popular sites like the Eiffel Tower and Versailles to avoid long lines"
    ],
    safetyInfo: "France is generally a safe country for travelers, though normal precautions should be taken, particularly in major tourist areas and cities where pickpocketing and scams can occur. Paris, while mostly safe, requires awareness in certain areas, especially on public transportation and around major attractions where tourists are targeted for petty theft. Emergency services are excellent, with the European emergency number 112 connecting to police, medical, and fire services. Healthcare is among the world's best, though travel insurance is recommended for non-EU visitors. Occasional protests and strikes can disrupt transportation but rarely pose risks to visitors if avoided. Natural disasters are uncommon, though southern regions may experience flooding or forest fires in summer.",
    sustainableTourism: "France has implemented numerous sustainable tourism initiatives, including an eco-label for environmentally friendly accommodations ('Clef Verte') and protected natural areas comprising nearly 30% of the country's territory. Many cities offer excellent public transportation and bike-sharing programs that reduce the need for cars. Travelers can contribute to sustainable practices by choosing local products and seasonal foods, visiting during shoulder seasons to reduce overcrowding in popular destinations, respecting protected natural areas, and considering train travel between cities instead of flying or driving. France's extensive rail network, including high-speed TGV trains, provides an environmentally friendly way to explore the country while enjoying scenic views.",
    visaRequirements: "Citizens of the European Union, United States, Canada, Australia, and many other countries can enter France for up to 90 days without a visa. As part of the Schengen Area, France shares its border control policies with 26 other European countries, and time spent in any Schengen country counts toward the 90-day limit. Visitors from non-exempt countries must apply for a Schengen visa through the French embassy or consulate in their home country. All visitors should have a passport valid for at least three months beyond their planned departure date, proof of accommodation, sufficient funds, and return tickets. Requirements can change, so checking the official French government website before travel is recommended.",
    budget: {
      budget: "50-100 EUR per day for hostel accommodation, public transportation, budget restaurants, and free/discounted attractions",
      midRange: "100-200 EUR per day for mid-range hotels, some taxis, good restaurants, and paid attractions",
      luxury: "200+ EUR per day for luxury hotels, private transportation, fine dining, and exclusive experiences"
    },
    transportationOptions: [
      "TGV (High-Speed Trains) - Fast connections between major cities, with speeds up to 320 km/h",
      "Regional Trains - Comprehensive network reaching smaller towns and rural areas",
      "Metro Systems - Excellent underground networks in Paris, Lyon, Marseille, and other cities",
      "Buses - Intercity coaches and local services connecting areas not reached by train",
      "Car Rental - Ideal for exploring countryside regions like Provence and Normandy",
      "Bicycles - Many cities offer bike-sharing programs and dedicated cycling paths"
    ],
    neighboringCountries: [
      "Spain", "Andorra", "Monaco", "Italy", "Switzerland", "Germany", "Luxembourg", "Belgium"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cuisine", "Art", "Architecture", "Wine Regions", "Fashion",
    "Museums", "Castles", "Coastal", "Historical", "Romance"
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

export default FranceCountry; 