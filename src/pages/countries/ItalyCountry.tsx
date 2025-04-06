import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ItalyCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Italy",
    slug: "italy",
    continent: "Europe",
    capital: "Rome",
    languageOfficial: "Italian",
    languagesSpoken: ["Italian", "German (South Tyrol)", "French (Aosta Valley)", "Slovene", "Sardinian", "Sicilian"],
    currency: "Euro (EUR)",
    population: 60360000,
    area: 301340,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+39",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/10/23/04/italy-26989_1280.png",
    description: "Italy, a boot-shaped peninsula extending into the Mediterranean Sea, combines extraordinary natural beauty with an unparalleled artistic and cultural heritage. As the heart of the Roman Empire and later the Renaissance, Italy has influenced Western civilization for millennia through its art, architecture, cuisine, and culture. From Alpine mountains in the north to Mediterranean beaches in the south, the country offers remarkable geographical diversity complemented by world-class historical treasures in cities like Rome, Florence, and Venice.",
    whyVisit: "Italy offers an unmatched concentration of artistic masterpieces, historical sites, and natural beauty within a relatively compact and easily navigable country. Art enthusiasts can experience works by Leonardo da Vinci, Michelangelo, and Botticelli in their original settings, while history buffs explore everything from Ancient Roman ruins to Renaissance palaces. The country's renowned cuisine varies distinctly by region, offering culinary journeys from the seafood of Sicily to the risottos of Lombardy. Italy's diverse landscapes satisfy nature lovers with Alpine peaks, Mediterranean coastlines, rolling Tuscan hills, and volcanic formations.",
    bestTimeToVisit: {
      text: "The best times to visit Italy are during the shoulder seasons of spring (April-May) and fall (September-October) when temperatures are pleasant, crowds are smaller than summer, and attractions remain open with shorter lines. These periods also offer festivals and seasonal foods like spring asparagus and autumn truffles. Summer (June-August) brings hot temperatures and peak tourism, especially in cities and coastal areas, though it's ideal for beach holidays and Alpine hiking.",
      months: ["April", "May", "September", "October"]
    },
    weatherInfo: {
      summer: "Italian summers (June-August) vary significantly by region but are generally hot and dry, especially in southern areas. Rome and Florence regularly experience temperatures between 28-35°C (82-95°F), occasionally exceeding 38°C (100°F) during heatwaves. Coastal areas benefit from sea breezes that moderate the heat, while northern cities like Milan can be humid and occasionally stormy. The Alpine regions maintain pleasant temperatures around 20-25°C (68-77°F), ideal for hiking.",
      winter: "Winter (December-February) presents diverse conditions across Italy. Northern regions experience cold temperatures ranging from -5 to 8°C (23-46°F), with snow common in Alpine areas, creating excellent conditions for skiing. Central Italy, including Rome, has milder winters with temperatures typically between 5-13°C (41-55°F) and occasional rainfall. Southern Italy and Sicily enjoy the mildest winter conditions with temperatures rarely falling below 10°C (50°F) during daytime, though evenings can be cool.",
      spring: "Spring (March-May) brings Italy to life with warming temperatures, blooming landscapes, and gradually increasing daylight hours. Early spring can still be changeable with some rainfall, but by April most regions enjoy pleasant conditions perfect for exploring cities and countryside. Northern Italy warms to 15-20°C (59-68°F), central regions like Tuscany experience 18-24°C (64-75°F), while southern areas often reach 20-25°C (68-77°F) by May.",
      fall: "Fall (September-November) offers one of Italy's most rewarding travel periods, combining comfortable temperatures with harvest-season culinary experiences. Early autumn maintains summer warmth with reduced humidity, while late fall brings cooler conditions and occasional rainfall, particularly in northern regions. September temperatures remain pleasant throughout the country (20-27°C/68-81°F), gradually cooling by November. This season brings spectacular foliage to mountainous areas and wine regions, coinciding with grape and olive harvests."
    },
    majorCities: [
      {
        name: "Rome",
        description: "Italy's capital spans over 2,700 years of history, layering ancient ruins, Renaissance masterpieces, and modern urban energy into one magnificent whole. The Eternal City juxtaposes the monumental Colosseum and Roman Forum with Vatican treasures including Michelangelo's Sistine Chapel and St. Peter's Basilica. Beyond these iconic landmarks, Rome reveals its character through neighborhoods like bohemian Trastevere and elegant Centro Storico, where narrow streets open suddenly onto magnificent baroque squares."
      },
      {
        name: "Florence",
        description: "The birthplace of the Renaissance, Florence offers an incomparable concentration of artistic and architectural treasures within a remarkably compact historical center. The magnificent Duomo with Brunelleschi's terracotta dome dominates the skyline, while the Uffizi Gallery houses masterpieces by Botticelli, Leonardo, and Michelangelo. Beyond these highlights, Florence maintains a human scale that encourages exploration across the Arno River to the artisan workshops of the Oltrarno district."
      },
      {
        name: "Venice",
        description: "Built impossibly on water and seemingly unchanged for centuries, Venice creates an otherworldly atmosphere unlike any other Italian city. The car-free environment forces a slower pace as visitors navigate a labyrinth of canals, bridges, and narrow calli (streets) where getting temporarily lost becomes part of the experience. Beyond iconic St. Mark's Square with its basilica and campanile, Venice reveals its authentic character in quieter sestieri (districts) like Cannaregio and Dorsoduro."
      },
      {
        name: "Milan",
        description: "Italy's finance and fashion capital presents a more contemporary, cosmopolitan face than other major Italian cities, though its history stretches back to Roman times. Milan's Gothic Duomo, crowned with 135 spires and thousands of statues, provides a dramatic centerpiece to an elegant city that balances business efficiency with artistic excellence. Leonardo da Vinci's 'Last Supper' represents just one masterpiece in a city rich with cultural institutions from historic La Scala opera house to cutting-edge design museums."
      },
      {
        name: "Naples",
        description: "Passionate, chaotic, and unapologetically authentic, Naples provides the gateway to southern Italy's distinctive culture while offering spectacular views across its bay to Mount Vesuvius. The city embraces visitors with intense street life, extraordinary cuisine (including the world's best pizza), and remarkable cultural treasures often overshadowed by its reputation for grittiness. The National Archaeological Museum houses exceptional artifacts from nearby Pompeii and Herculaneum."
      }
    ],
    famousFor: [
      "Renaissance Art - Birthplace of the Renaissance with masterpieces by Leonardo da Vinci, Michelangelo, and Botticelli",
      "Ancient Roman History - Extraordinary preserved sites including the Colosseum, Roman Forum, and Pompeii",
      "Cuisine - World-renowned food culture with distinct regional specialties from pasta to pizza",
      "Fashion and Design - Global leader in style, with Milan hosting influential fashion weeks",
      "Stunning Landscapes - Diverse natural beauty from Tuscan countryside to Amalfi Coast and Alpine lakes"
    ],
    topAttractions: [
      {
        name: "Colosseum",
        description: "This iconic ancient amphitheater in Rome stands as the largest ever built during the Roman Empire and remains a defining symbol of Imperial Rome's engineering prowess. Completed in 80 CE under Emperor Titus, the Colosseum could accommodate up to 80,000 spectators for gladiatorial contests, mock sea battles, animal hunts, executions, and mythological dramas. Despite suffering damage from earthquakes and stone-robbing over centuries, the structure's impressive exterior and complex interior architecture continue to demonstrate ancient Rome's engineering sophistication.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Venice Canals",
        description: "Venice's extraordinary network of waterways serves as the city's main transportation arteries and creates its unique maritime atmosphere. The Grand Canal forms Venice's primary thoroughfare, snaking through the city in an S-shape lined with palaces showcasing various architectural styles from Byzantine to Renaissance. Beyond this central waterway, smaller canals penetrate every part of the city, crossed by approximately 400 bridges including the iconic Rialto and Bridge of Sighs.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Florence Cathedral (Duomo)",
        description: "Officially named Santa Maria del Fiore, Florence's magnificent cathedral represents one of the world's most significant architectural achievements. Its most distinctive feature—Brunelleschi's terracotta dome—was an engineering marvel when completed in 1436, solving the challenge of spanning the 45-meter wide space without flying buttresses through an innovative double-shell design. The cathedral's exterior showcases intricate patterns of white Carrara, green Prato, and red Siena marble in geometric designs typical of Tuscan Romanesque style.",
        imageUrl: "https://cdn.pixabay.com/photo/2017/03/15/21/51/florence-2147625_1280.jpg"
      },
      {
        name: "Amalfi Coast",
        description: "This 50-kilometer stretch of coastline south of Naples offers some of the Mediterranean's most dramatic scenery, with vertiginous cliffs plunging into azure waters and picturesque villages seemingly defying gravity on steep hillsides. The UNESCO-listed landscape features winding coastal roads connecting iconic towns including Positano, with its pastel-colored buildings cascading down to a pebbly beach; Amalfi, once a powerful maritime republic; and sophisticated Ravello, perched high above the sea with spectacular villa gardens.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Vatican Museums and Sistine Chapel",
        description: "Housing one of the world's most significant art collections within the Vatican City State, these museums showcase masterpieces accumulated by popes over centuries alongside extraordinary architectural spaces. The collection spans Ancient Egyptian, Etruscan, Greek, and Roman antiquities, early Christian artifacts, Renaissance masterpieces, and contemporary religious art. While containing countless important works, the museums culminate in Michelangelo's Sistine Chapel ceiling frescoes and monumental Last Judgment wall painting, representing pinnacle achievements of Renaissance art.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Italian cuisine represents one of the world's most beloved and influential culinary traditions, characterized by regional diversity, seasonal ingredients, and an emphasis on quality over complexity. Rather than existing as a monolithic national cuisine, authentic Italian food varies dramatically between regions—from Alpine influences in the north to Arabic-influenced dishes in Sicily. This regional specificity reflects historical development, local agriculture, and cultural exchange over centuries.",
      famousDishes: [
        "Pizza Napoletana - Thin-crust pizza from Naples with minimal toppings, traditionally Margherita (tomato, mozzarella, basil) or Marinara (tomato, garlic, oregano)",
        "Pasta Carbonara - Roman specialty combining eggs, pecorino cheese, guanciale (cured pork jowl), and black pepper",
        "Risotto alla Milanese - Creamy saffron-infused rice dish from Lombardy, traditionally made with bone marrow and beef broth",
        "Bistecca alla Fiorentina - Thick-cut T-bone steak, typically from Chianina cattle, grilled rare over wood coals in Tuscan tradition",
        "Tiramisu - Beloved dessert of coffee-soaked ladyfinger biscuits layered with mascarpone cream and cocoa powder"
      ]
    },
    culturalCustoms: [
      "La Passeggiata - Evening social stroll where Italians dress smartly to see and be seen before dinner",
      "Riposo - Midday break when many businesses close, traditionally for lunch and rest (similar to siesta)",
      "Coffee Culture - Specific customs around coffee consumption, including standing at bars and never ordering cappuccino after meals",
      "Family-Centered Gatherings - Sunday lunches and holidays centered around extended family meals",
      "Animated Communication - Expressive conversations with gestures, varying volume, and passionate delivery"
    ],
    travelTips: [
      "Learn basic Italian phrases - While tourist areas often have English speakers, efforts with simple Italian are appreciated",
      "Validate transportation tickets - Many trains and buses require ticket validation before boarding to avoid fines",
      "Respect dress codes - Conservative attire (covered shoulders/knees) required when visiting religious sites",
      "Adjust to Italian mealtimes - Lunch typically 1-3pm and dinner rarely before 8pm, with many restaurants closed between meals",
      "Be aware of tourist pricing - Restaurants charging 'coperto' (cover charge) should disclose this on menus",
      "Plan for limited Sunday/Monday hours - Many attractions, shops and restaurants close one or both of these days"
    ],
    safetyInfo: "Italy generally offers a safe environment for travelers, with violent crime rates lower than many other popular tourist destinations. The primary safety concern involves opportunistic theft, particularly in crowded tourist areas, train stations, and public transportation in major cities. Pickpocketing and bag-snatching occur most frequently in Rome, Florence, and Naples, with scooter-based purse-snatching representing a specific risk in southern cities. Tourists should maintain awareness in these environments, use hotel safes for valuables, and consider money belts or under-clothing storage for important documents and excess cash.",
    sustainableTourism: "Italy faces significant challenges balancing tourism's economic benefits with preservation of cultural and natural resources. Overtourism impacts popular destinations like Venice, Florence, and the Cinque Terre, prompting various management strategies including visitor limits, reservation systems for major attractions, and differential pricing favoring advance planning. Venice has implemented day-visitor fees during peak periods, while Cinque Terre caps daily hiking trail access. Alternative destinations receiving increasing promotion include lesser-known historic cities and rural areas offering agriturismo experiences on working farms.",
    visaRequirements: "Italy is part of the Schengen Area, allowing citizens from the European Union and many developed nations (including the United States, Canada, Australia, and Japan) to enter without a visa for stays up to 90 days within a 180-day period. Visitors from other countries must apply for a Schengen visa through Italian diplomatic missions before travel. All visitors must possess a passport valid for at least three months beyond their planned departure date from the Schengen Area. Non-EU visitors currently need to register basic information through the ETIAS system before arrival, though this is a pre-travel authorization rather than a visa.",
    budget: {
      budget: "40-80 EUR per day for hostel/budget hotel accommodation, public transportation, sandwich/pizza meals, and select paid attractions",
      midRange: "80-200 EUR per day for mid-range hotels, regular restaurant dining, intercity trains, and major attractions",
      luxury: "200+ EUR per day for luxury accommodation, fine dining, private transportation, and premium experiences"
    },
    transportationOptions: [
      "High-Speed Trains - Frecciarossa and Italo services connecting major cities at speeds up to 300 km/h",
      "Regional Trains - Comprehensive network serving smaller towns and rural areas at lower prices",
      "Buses - Intercity coaches supplementing train routes and providing rural connections",
      "Metro Systems - Underground networks in Rome, Milan, Naples, and Turin for efficient urban transportation",
      "Ferries - Extensive maritime connections to islands and coastal cities with options from hydrofoils to overnight ships",
      "Car Rental - Offers flexibility for exploring countryside and remote areas, though unnecessary and often problematic in cities"
    ],
    neighboringCountries: [
      "France", "Switzerland", "Austria", "Slovenia", "San Marino", "Vatican City"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Art & Architecture", "History", "Cuisine", "Mediterranean Beaches", "Fashion",
    "Renaissance", "Roman Ruins", "Wine Regions", "Island Hopping", "Scenic Drives"
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

export default ItalyCountry;
