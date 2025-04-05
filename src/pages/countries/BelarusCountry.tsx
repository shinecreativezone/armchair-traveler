import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BelarusCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Belarus",
    slug: "belarus",
    continent: "Europe",
    capital: "Minsk",
    languageOfficial: "Belarusian, Russian",
    languagesSpoken: ["Belarusian", "Russian"],
    currency: "Belarusian Ruble (BYN)",
    population: 9442862,
    area: 207600,
    timeZones: ["GMT+3"],
    callingCode: "+375",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Belarus is an Eastern European country with a rich cultural heritage and complex history. Known for its Stalinist architecture, grand fortifications, and primeval forests, Belarus offers visitors a glimpse into a region that has preserved many of its Soviet-era characteristics while developing its own distinct national identity.",
    whyVisit: "Belarus offers travelers a unique opportunity to experience a lesser-visited part of Europe with distinctive Slavic culture and preserved Soviet heritage. The country boasts impressive fortresses like Mir and Nesvizh Castles (both UNESCO World Heritage Sites), pristine natural landscapes including Belovezhskaya Pushcha National Park (home to European bison), and elegant cities with grand boulevards, particularly the capital Minsk with its imposing Stalinist architecture. Visitors will be impressed by the country's cleanliness, well-maintained public spaces, and efficient public transportation. Belarus is also known for its vibrant folk traditions, with numerous festivals celebrating traditional music, dance, and crafts throughout the year. For travelers seeking an authentic experience away from typical tourist crowds, Belarus provides an intriguing destination with a fascinating blend of history, culture, and natural beauty.",
    bestTimeToVisit: {
      text: "The best time to visit Belarus is during the late spring to early autumn (May to September) when temperatures are pleasant, ranging from 15-25°C (59-77°F), and the countryside is lush and green.",
      months: ["May", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Warm and pleasant from June to August with temperatures typically ranging from 17-25°C (63-77°F), occasionally rising to 30°C (86°F). Summer brings longer daylight hours and occasional thunderstorms.",
      winter: "Cold and snowy from December to February with temperatures ranging from -8 to 0°C (18-32°F), sometimes dropping to -20°C (-4°F) or lower. Snow cover typically lasts for several months.",
      spring: "Variable and often muddy as snow melts from March to May. Temperatures gradually rise from 0-15°C (32-59°F) with occasional frost in early spring and increasing rainfall.",
      fall: "Cool and often rainy from September to November with temperatures falling from 15°C to near freezing. The countryside displays beautiful autumn colors in October before the winter sets in."
    },
    majorCities: [
      {
        name: "Minsk",
        description: "The capital and largest city, known for its imposing Stalinist architecture and wide boulevards. Key attractions include Independence Square, the Island of Tears monument, Victory Square with its iconic obelisk, the revitalized Oktyabrskaya Street art district, and the Museum of the Great Patriotic War."
      },
      {
        name: "Brest",
        description: "A western city known for the Brest Fortress, a major WWII memorial complex commemorating the 1941 defense against Nazi forces. The city also features a unique street lamp lighting ceremony, a charming pedestrian street (Sovetskaya), and the nearby Belovezhskaya Pushcha National Park."
      },
      {
        name: "Grodno",
        description: "A northwestern city with well-preserved medieval architecture showing Polish and Lithuanian influences. Highlights include the Old and New Castles, the baroque Farny Church, historic synagogues, and numerous preserved 18th-century buildings reflecting the city's multicultural past."
      },
      {
        name: "Gomel",
        description: "Belarus's second-largest city featuring the beautiful Rumyantsev-Paskevich Palace surrounded by an extensive park. The city also offers the Peter and Paul Cathedral, numerous Soviet monuments, and several museums highlighting the region's history and culture."
      },
      {
        name: "Vitebsk",
        description: "A northeastern cultural hub known as the birthplace of Marc Chagall with a museum dedicated to the artist. The city hosts the famous annual Slavianski Bazaar arts festival and features the impressive Assumption Cathedral, Town Hall, and Governor's Palace among its architectural highlights."
      }
    ],
    famousFor: [
      "Mir Castle and Nesvizh Castle - UNESCO World Heritage Sites",
      "Belovezhskaya Pushcha National Park - Europe's oldest forest and home to European bison",
      "Soviet architecture and memorials, particularly in Minsk",
      "The annual Slavianski Bazaar cultural festival in Vitebsk",
      "Traditional folk culture with distinctive crafts, music, and cuisine"
    ],
    topAttractions: [
      {
        name: "Mir Castle Complex",
        description: "This UNESCO World Heritage Site is a stunning example of Gothic, Baroque, and Renaissance architecture. Built in the 16th century, the castle features distinctive towers, a courtyard, and a surrounding lake. Visitors can explore the restored interiors with period furniture, armor displays, and exhibitions on the castle's history under various noble families.",
        imageUrl: "https://images.unsplash.com/photo-1595242000522-1c9b7bd689e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Belovezhskaya Pushcha National Park",
        description: "One of Europe's last and largest remaining parts of the primeval forest that once stretched across the European Plain. This UNESCO World Heritage Site is home to hundreds of European bison (zubr), the continent's heaviest land animal once nearly extinct. The park offers nature trails, a nature museum, and the estate of Belarusian Father Frost (Ded Moroz).",
        imageUrl: "https://images.unsplash.com/photo-1472060651845-c080a84f3cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Brest Fortress",
        description: "A 19th-century Russian fortress that became a symbol of Soviet resistance during the Nazi invasion in 1941. Now a major memorial complex, it features dramatic sculptures including the enormous 'Thirst' and 'Courage' monuments, preserved ruins, a museum, and the daily playing of Soviet war songs through loudspeakers.",
        imageUrl: "https://images.unsplash.com/photo-1638109932381-c38c96c3e50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80"
      },
      {
        name: "Nesvizh Castle",
        description: "A UNESCO-listed residential castle of the Radziwill family, one of the most powerful families in the Grand Duchy of Lithuania. The palace complex features beautiful baroque architecture, lavish halls, portrait galleries, and extensive gardens with lakes and parkland. The nearby Corpus Christi Church contains the Radziwill family mausoleum.",
        imageUrl: "https://images.unsplash.com/photo-1578301978069-45264acf340a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80"
      },
      {
        name: "Independence Avenue, Minsk",
        description: "The main thoroughfare of Belarus's capital showcases impressive Stalinist architecture built after WWII destroyed much of the city. The grand boulevard features monumental buildings, Soviet decorative elements, wide sidewalks, and immaculately maintained public spaces. Key landmarks include Government House, GUM department store, and the imposing KGB Headquarters.",
        imageUrl: "https://images.unsplash.com/photo-1612715076253-18ab349babb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      }
    ],
    localCuisine: {
      description: "Belarusian cuisine is hearty and filling, based on local ingredients like potatoes, beets, pork, mushrooms, and berries. The cooking traditions reflect the country's agricultural heritage and long winters, with preservation techniques like fermentation and smoking featuring prominently. Meals typically begin with a soup, followed by a substantial main course, often accompanied by vodka or kvas (a fermented bread drink).",
      famousDishes: [
        "Draniki - Potato pancakes typically served with sour cream or pork cracklings, considered a national dish",
        "Machanka - Thick and hearty pork stew often served as a sauce for pancakes or dumplings",
        "Kalduny - Dumplings similar to pierogi, filled with meat, mushrooms or cheese and served with sour cream",
        "Borsch - Beet soup with cabbage, potatoes, and meat, often served with a dollop of sour cream",
        "Kletski - Belarusian gnocchi-like dumplings often served in soup or with bacon and onions"
      ]
    },
    culturalCustoms: [
      "Hospitality - Belarusians take great pride in welcoming guests; refusing food or drink offers may be considered impolite",
      "Toasting - When drinking socially, expect toasts before drinking, with the first often dedicated to the gathering occasion",
      "Gift-giving - When visiting a Belarusian home, bringing a small gift such as sweets, flowers, or a bottle of good quality alcohol is customary",
      "Folk Traditions - Annual festivals celebrate ancient pagan and Christian traditions, with distinctive costumes, music, and rituals",
      "Bath Houses - The banya (traditional steam bath) remains an important social and health ritual in Belarusian culture"
    ],
    travelTips: [
      "Most visitors require a visa, though there is a limited visa-free entry program for certain nationalities arriving via Minsk National Airport",
      "The Belarusian ruble was redenominated in 2016; be sure to use current currency and not old notes",
      "Credit cards are widely accepted in cities, but having cash is recommended for smaller towns and villages",
      "Public transportation is reliable and inexpensive, with the Minsk metro being particularly efficient",
      "While many young people in cities speak some English, Russian is much more useful outside tourist areas",
      "Photography of government buildings, military installations, and border areas is restricted"
    ],
    safetyInfo: "Belarus is generally considered safe for travelers with low rates of violent crime and theft. The most common concerns are pickpocketing in crowded areas and occasional taxi scams. Political demonstrations should be avoided as they can lead to confrontations with authorities. Road conditions vary, with highways generally good but rural roads sometimes lacking proper maintenance. Emergency medical care is adequate in major cities but may be limited in rural areas. Visitors should be aware of the government's strict regulations and enforcement, as penalties for breaking laws can be severe. Health risks are minimal, though tick-borne encephalitis can be a concern in forest areas during summer months.",
    sustainableTourism: "Belarus has established several protected national parks and nature reserves to safeguard its unique ecosystems, particularly the ancient Belovezhskaya Pushcha forest. The country has also undertaken initiatives to develop eco-tourism, with nature trails, birdwatching opportunities, and rural homestays available in many regions. The government has implemented environmental protection laws and reforestation programs to preserve the country's natural heritage. Visitors can contribute by respecting protected natural areas, supporting local businesses and craftspeople, and participating in guided tours that emphasize environmental education. Rural agro-tourism is growing, offering travelers the chance to experience traditional farming methods and sustainable living practices.",
    visaRequirements: "Most foreign nationals require a visa to enter Belarus, though there is a 30-day visa-free regime for citizens of approximately 80 countries arriving and departing through Minsk National Airport. Those eligible for visa-free entry must have valid medical insurance and sufficient funds for their stay. For those requiring visas, applications can be submitted through Belarusian diplomatic missions or online through the Belarus e-visa system. Requirements typically include a valid passport, photos, proof of accommodation, travel insurance, and an invitation in some cases. The visa application process usually takes 5-7 working days. All visitors must register their address within 10 days of arrival, though most hotels handle this automatically for guests.",
    budget: {
      budget: "30-60 BYN ($12-24 USD) per day for budget accommodations in hostels, eating at cafeterias, and using public transportation",
      midRange: "60-150 BYN ($24-60 USD) per day for mid-range hotels, restaurant dining, and some cultural activities",
      luxury: "150+ BYN ($60+ USD) per day for luxury hotels, fine dining, and premium experiences"
    },
    transportationOptions: [
      "Metro - Available in Minsk, modern, efficient, and very inexpensive (0.80 BYN per ride regardless of distance)",
      "Buses and trolleybuses - Extensive networks in cities with tickets costing approximately 0.65-0.80 BYN",
      "Trains - Comfortable and affordable connections between major cities, with both express and regional options",
      "Taxis - Official services are reasonably priced, with apps like Yandex Taxi providing convenient booking",
      "Car rental - Available in major cities but less common; international driving permit recommended"
    ],
    neighboringCountries: [
      "Russia (to the east and northeast)",
      "Ukraine (to the south)",
      "Poland (to the west)",
      "Lithuania (to the northwest)",
      "Latvia (to the north)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Eastern Europe", "Historical Sites", "Soviet Heritage", "Castles & Fortresses", "Nature Parks",
    "Off the Beaten Path", "Cultural Experience", "Forests", "Architecture", "Folk Traditions"
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

export default BelarusCountry; 