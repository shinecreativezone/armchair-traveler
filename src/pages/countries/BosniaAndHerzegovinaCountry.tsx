import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BosniaAndHerzegovinaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bosnia and Herzegovina",
    slug: "bosnia-and-herzegovina",
    continent: "Europe",
    capital: "Sarajevo",
    languageOfficial: "Bosnian, Croatian, Serbian",
    languagesSpoken: ["Bosnian", "Croatian", "Serbian"],
    currency: "Convertible Mark (BAM)",
    population: 3301000,
    area: 51197,
    timeZones: ["GMT+1 (CET)", "GMT+2 (CEST) - Summer"],
    callingCode: "+387",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1561891241-d4bd00a666c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Bosnia and Herzegovina is a heart-shaped country in the Balkan peninsula of Southeastern Europe. Known for its medieval villages, mountain landscapes, and a mix of Ottoman and Austro-Hungarian historical influences, it has become a tourist destination that blends natural beauty with rich cultural heritage and complex history.",
    whyVisit: "Bosnia and Herzegovina offers a compelling blend of stunning natural landscapes, fascinating history, and authentic cultural experiences that set it apart as a distinctly rewarding destination. Travelers are drawn to its dramatic mountains, emerald rivers, and medieval towns where different cultural influences—Ottoman, Austro-Hungarian, Yugoslav, and modern European—create a unique atmosphere unlike anywhere else in Europe. The country's tumultuous recent past has shaped a resilient population known for exceptional hospitality, while budget-friendly prices make even luxury experiences accessible. In cities like Sarajevo, visitors can explore streets where East literally meets West, with minarets and church spires defining a skyline that tells stories of coexistence across centuries. Beyond urban centers, pristine forests, spectacular waterfalls, and rugged mountains provide terrain for hiking, rafting, and winter sports without the crowds of more popular European destinations. Perhaps most compelling are the genuine interactions with locals eager to share their perspectives, creating travel memories centered on human connection rather than mere sightseeing.",
    bestTimeToVisit: {
      text: "The best time to visit Bosnia and Herzegovina is during late spring (May-June) or early autumn (September-October) when temperatures are pleasant, ranging from 15-25°C (59-77°F), with minimal rainfall and fewer tourists. Summer (July-August) offers warmest temperatures but with higher tourist numbers, while winter (December-February) provides excellent skiing conditions in mountain resorts.",
      months: ["May", "June", "September", "October", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summers (June to August) are warm to hot with temperatures ranging from 25-30°C (77-86°F) in lowland areas and slightly cooler in mountain regions. While generally sunny, afternoon thunderstorms can occur, particularly in mountainous areas.",
      winter: "Winters (December to February) are cold with average temperatures ranging from -5°C to 5°C (23-41°F) in lowlands and considerably colder in mountain areas. Snowfall is common throughout the country, providing excellent conditions for winter sports in resorts like Jahorina and Bjelašnica.",
      spring: "Spring (March to May) sees gradually warming temperatures from 5-20°C (41-68°F) with occasional rainfall and blooming wildflowers. Mountain areas may still have snow until April, while lowlands become increasingly green and lush.",
      fall: "Fall (September to November) offers mild temperatures cooling from 20°C to 5°C (68-41°F) as the season progresses. This period brings beautiful autumn foliage, especially in forest areas, with decreasing rainfall until November when precipitation increases."
    },
    majorCities: [
      {
        name: "Sarajevo",
        description: "The capital and largest city, Sarajevo is often called the 'Jerusalem of Europe' for its religious diversity. The historic center features Ottoman-era bazaars, Austro-Hungarian architecture, and landmarks from the 1984 Winter Olympics. Visitors can see the spot where Archduke Franz Ferdinand was assassinated, triggering World War I, explore the Tunnel of Hope from the 1990s siege, and enjoy a vibrant café culture where East meets West."
      },
      {
        name: "Mostar",
        description: "Famous for its iconic 16th-century Ottoman bridge, Stari Most, spanning the emerald Neretva River. The UNESCO-listed Old Town features Turkish houses, bazaars, and mosques alongside newer parts rebuilt after the 1990s conflict. Visitors come to watch traditional bridge diving, explore narrow cobblestone streets with craft shops, and experience a city where Bosniak and Croat cultures coexist in close proximity."
      },
      {
        name: "Banja Luka",
        description: "The second-largest city and de facto capital of Republika Srpska entity, featuring wide boulevards, green parks, and the Vrbas River running through its center. Highlights include the restored Ferhadija Mosque, the Orthodox Cathedral of Christ the Saviour, and the medieval Kastel fortress. Known for its laid-back atmosphere, café culture, and as a gateway to rafting adventures on the Vrbas River."
      },
      {
        name: "Tuzla",
        description: "A northeastern industrial city known for its unique salt lakes and multicultural history. The city center has been beautifully restored with Ottoman, Austro-Hungarian, and socialist-era architecture. Its salt square features the only salt lakes in Europe, attracting visitors during summer months, while the Pannonian Lakes recreation complex offers a distinctive urban beach experience."
      },
      {
        name: "Trebinje",
        description: "A charming southern city near the Croatian and Montenegrin borders with a Mediterranean climate and atmosphere. Located in the Trebišnjica River valley, it features a well-preserved old town with Ottoman architecture, platane tree squares, and excellent local wines. Its proximity to both the mountains and the Adriatic coast makes it a strategic base for exploring the wider region."
      }
    ],
    famousFor: [
      "Stari Most (Old Bridge) in Mostar - UNESCO World Heritage site and symbol of reconciliation",
      "Sarajevo's Baščaršija - Ottoman-era bazaar with traditional crafts and cuisine",
      "Pristine rivers ideal for rafting, particularly the Una, Neretva, and Tara",
      "Religious diversity with mosques, Orthodox churches, Catholic churches, and synagogues standing side by side",
      "Unique Bosnian coffee culture with distinctive preparation and serving rituals"
    ],
    topAttractions: [
      {
        name: "Stari Most (Old Bridge), Mostar",
        description: "This iconic 16th-century Ottoman bridge spans the emerald waters of the Neretva River and stands as a powerful symbol of reconciliation after being destroyed in the 1990s conflict and meticulously reconstructed. The UNESCO-listed structure features a distinctive hump-backed silhouette made of local limestone. Visitors can watch traditional divers plunge 24 meters into the cold river below—a tradition going back over 400 years—explore historical exhibits in the towers at each end of the bridge, and wander through the surrounding Ottoman-style old town with its cobblestone streets, bazaars, and mosques.",
        imageUrl: "https://images.unsplash.com/photo-1580835268949-de44d97b6559?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Sarajevo's Baščaršija",
        description: "The historic Ottoman heart of Sarajevo dates back to the 15th century and functions as both a living museum and vibrant commercial center. This pedestrianized network of narrow streets and small squares features the iconic Sebilj wooden fountain, coppersmith workshops where traditional coffee sets are still handcrafted, and numerous specialty shops selling handmade carpets, filigree jewelry, and wooden crafts. Visitors can explore historic caravanserais transformed into restaurants, numerous mosques including the 16th-century Gazi Husrev-beg Mosque complex, and experience the authentic atmosphere of traditional coffeehouses where Bosnian coffee is served in distinctive džezvas (copper pots) with rahat lokum (Turkish delight).",
        imageUrl: "https://images.unsplash.com/photo-1603175745625-76b9160d3414?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Kravice Waterfalls",
        description: "This spectacular natural landmark on the Trebižat River features a broad, 25-meter high cascading waterfall system that stretches 120 meters across, creating a semicircular amphitheater of falls surrounded by lush Mediterranean vegetation. Crystal-clear turquoise pools form at the base of the falls, providing ideal swimming spots during summer months. Visitors can swim beneath the cascades, rent small boats to explore the wider water system, relax at nearby picnic areas, or hike trails offering panoramic viewpoints of the falls. The site remains relatively undeveloped compared to similar European attractions, preserving its natural beauty and tranquility.",
        imageUrl: "https://images.unsplash.com/photo-1565760450214-d7d64740ee57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Tunnel of Hope Museum, Sarajevo",
        description: "This powerful historical site preserves a section of the secret tunnel that served as a lifeline during the 1992-1995 Siege of Sarajevo—the longest capital city siege in modern warfare. The 800-meter tunnel, dug beneath the airport runway, provided the only connection between besieged Sarajevo and free Bosnian territory. Today, visitors can walk through a preserved 25-meter section of the original tunnel, view documentary footage and artifacts in the attached museum, and gain profound insights into civilian survival during the conflict through personal stories and exhibits. The house that concealed the tunnel entrance remains largely as it was during the war, complete with war damage, creating an immersive historical experience.",
        imageUrl: "https://images.unsplash.com/photo-1563177078-4001d0b29995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Višegrad Bridge (Mehmed Paša Sokolović Bridge)",
        description: "This UNESCO-listed masterpiece of Ottoman architecture spans the emerald-green Drina River in eastern Bosnia. Completed in 1577 by the renowned Ottoman architect Mimar Sinan, the stone bridge features 11 wide arches and extends 179 meters in length. Made famous in Ivo Andrić's Nobel Prize-winning novel \"The Bridge on the Drina,\" it represents centuries of cultural exchange between East and West. Visitors can walk the entire length of the bridge, observe its perfect proportions from viewing points along the river, explore the small museum detailing its construction and historical significance, and visit nearby Andrićgrad, a cultural complex built by filmmaker Emir Kusturica that celebrates the region's heritage.",
        imageUrl: "https://images.unsplash.com/photo-1663276017834-e43a633ef7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      }
    ],
    localCuisine: {
      description: "Bosnian cuisine reflects the country's position at the crossroads of Mediterranean, Middle Eastern, and Eastern European culinary traditions. Meat dishes—particularly grilled and spit-roasted preparations—feature prominently alongside dairy products, seasonal vegetables, and hearty stews. Ottoman influences are evident in dishes like dolma (stuffed vegetables) and baklava, while Austro-Hungarian legacies appear in schnitzel-like preparations and pastries. Meals typically begin with meze (small plates) and feature bread with nearly every course. Food preparation often involves slow-cooking methods that develop rich flavors, with an emphasis on quality ingredients rather than complex techniques. Traditional dining establishments range from aščinicas serving slow-cooked dishes to ćevabdžinicas specializing in grilled meats, with most meals accompanied by domestic wines or rakija fruit brandy.",
      famousDishes: [
        "Ćevapi - Small, hand-rolled minced meat sausages grilled and typically served with somun flatbread, chopped onions, and kajmak (dairy spread)",
        "Bosanski lonac - Traditional meat and vegetable stew slow-cooked in ceramic pots over open fire",
        "Burek - Flaky pastry filled with minced meat (true burek) or cheese, spinach, or potatoes (other variations called pita)",
        "Klepe - Bosnian dumplings similar to ravioli, typically filled with minced meat and served with garlic yogurt sauce",
        "Baklava - Sweet layered pastry soaked in syrup, often prepared with walnuts for special occasions and religious holidays"
      ]
    },
    culturalCustoms: [
      "Removing shoes when entering someone's home is customary, especially in more traditional or rural households",
      "Coffee drinking is a social ritual involving specific preparation, serving methods, and unhurried conversation",
      "Greeting friends and family with kisses on alternating cheeks (typically three times) is common practice",
      "Hospitality is highly valued, with hosts often insisting guests eat and drink more than they might want",
      "Religious holidays from Islamic, Orthodox, and Catholic traditions are respected across communities"
    ],
    travelTips: [
      "Be sensitive when discussing the 1990s conflict, as personal experiences and perspectives vary widely",
      "While major tourist areas are safe, some remote rural areas still contain unexploded landmines - stick to marked paths",
      "The country operates with two entities (Federation of BiH and Republika Srpska) with some administrative differences",
      "Cash is preferred in many places, particularly outside major cities, so carry sufficient Convertible Marks (BAM)",
      "Public transportation between major cities is reliable but can be infrequent - check schedules in advance",
      "Tipping around 10% is customary in restaurants and for taxi services in urban areas"
    ],
    safetyInfo: "Bosnia and Herzegovina is generally a safe destination for travelers with low rates of crime against tourists. The biggest safety concern relates to landmines in certain rural and remote mountain areas, a legacy of the 1990s conflict. While tourist areas and hiking trails are safe, visitors should stick to marked paths, heed warning signs, and never venture into abandoned buildings in remote areas. Road conditions vary significantly, with excellent highways connecting major cities but narrow, winding roads in mountainous regions requiring cautious driving. Political demonstrations occasionally occur in urban centers but rarely affect tourists. Healthcare facilities are good in major cities but may be limited in rural areas, so comprehensive travel insurance is recommended. Most locals are extraordinarily helpful to tourists in need of assistance.",
    sustainableTourism: "Bosnia and Herzegovina has growing sustainable tourism initiatives focused on preserving its natural environment and supporting local communities. The country's national parks, including Una, Sutjeska, and Kozara, operate with conservation mandates and offer eco-friendly activities like hiking and wildlife observation. Community-based tourism is developing in rural areas, particularly around Lukomir (Bosnia's highest village) and the Via Dinarica trail network, where homestays provide authentic experiences while channeling tourism revenue directly to local families. Several rafting camps along the Una and Neretva rivers have adopted sustainable practices, while eco-lodges in regions like Blidinje Nature Park demonstrate energy-efficient building techniques. Visitors can support sustainability by choosing locally-owned accommodations, hiring local guides, purchasing directly from artisans, and participating in community-based tourism activities that preserve traditional skills and lifestyles.",
    visaRequirements: "Most visitors from EU countries, the United States, Canada, Australia, New Zealand, and many other nations can enter Bosnia and Herzegovina visa-free for up to 90 days within a 180-day period. Visitors must have a passport valid for at least three months beyond their planned departure date. Those requiring visas should apply at Bosnian embassies or consulates well in advance of travel. All visitors must register their stay with local police within 24 hours of arrival, though this is typically handled automatically by hotels and registered accommodations. For longer stays, temporary residence permits must be arranged through the Service for Foreigners' Affairs. Border crossings by land from neighboring countries (Croatia, Serbia, Montenegro) are straightforward but can experience seasonal delays during summer months.",
    budget: {
      budget: "€30-50 ($35-55) per day for hostel dormitory or budget private accommodation, eating at local eateries, using public transportation, and enjoying free or low-cost attractions",
      midRange: "€50-100 ($55-110) per day for comfortable hotels, restaurant dining, occasional guided tours, and entrance fees to major attractions",
      luxury: "€100+ ($110+) per day for high-end hotels, fine dining experiences, private tours, and specialized activities"
    },
    transportationOptions: [
      "Intercity buses - Extensive network connecting major cities and towns with frequent departures but variable comfort levels",
      "Trains - Limited rail service primarily connecting Sarajevo with Mostar and a few other destinations",
      "Taxis - Affordable in urban areas; always ensure the meter is running or negotiate fare in advance",
      "Car rental - Provides greatest flexibility for exploring rural areas; major international agencies available in larger cities",
      "Local buses - Comprehensive networks within cities, though schedules and routes may not be well-documented online"
    ],
    neighboringCountries: [
      "Croatia (to the north and southwest)",
      "Serbia (to the east)",
      "Montenegro (to the southeast)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Balkan Culture", "Historical Sites", "Ottoman Architecture", "Mountain Scenery", "River Rafting",
    "Religious Heritage", "Coffee Culture", "Affordable Travel", "European History", "Undiscovered Gems"
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

export default BosniaAndHerzegovinaCountry; 