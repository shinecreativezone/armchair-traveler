import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ArmeniaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Armenia",
    slug: "armenia",
    continent: "Asia",
    capital: "Yerevan",
    languageOfficial: "Armenian",
    languagesSpoken: ["Armenian", "Russian", "Kurdish", "Assyrian"],
    currency: "Armenian Dram (AMD)",
    population: 2963000,
    area: 29743,
    timeZones: ["GMT+4"],
    callingCode: "+374",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1589229489458-7ffb68c425cf?q=80&w=1000",
    description: "Armenia is a mountainous, landlocked country located at the crossroads of Western Asia and Eastern Europe. One of the oldest Christian nations in the world, Armenia has a rich cultural heritage that spans over 3,000 years. Its dramatic landscapes include soaring mountains, ancient monasteries perched on cliffsides, pristine forests, and mineral-rich hot springs that have drawn visitors since antiquity.",
    whyVisit: "Armenia offers travelers an authentic and off-the-beaten-path experience with its striking monastery complexes, spectacular mountain vistas, and one of the world's oldest continuous wine traditions. The country's capital, Yerevan, combines ancient history with Soviet-era architecture and modern amenities, while the warm hospitality of Armenians creates unforgettable cultural exchanges. Visitors can explore UNESCO World Heritage sites, hike through dramatic gorges, enjoy mineral hot springs, and experience a culinary tradition that reflects Armenia's position at the crossroads of East and West.",
    bestTimeToVisit: {
      text: "The best time to visit Armenia is during late spring (May-June) and early autumn (September-October) when the weather is mild and ideal for sightseeing and outdoor activities. Summer can be hot in Yerevan but pleasant in the mountains, while winter offers skiing opportunities but can make some remote areas difficult to access.",
      months: ["May", "June", "September", "October"]
    },
    weatherInfo: {
      summer: "Hot and dry in Yerevan and lowlands (reaching 30-35°C/86-95°F), while mountainous regions remain cooler and more comfortable. Summer thunderstorms are common in the mountains.",
      winter: "Cold and snowy, especially in highlands where temperatures drop well below freezing (-10 to -15°C/14 to 5°F). Yerevan experiences milder winters but still with freezing temperatures and occasional snow.",
      spring: "Mild with abundant wildflowers in the countryside, though spring comes late to mountain areas. Temperatures range from 10-25°C (50-77°F) with occasional rainfall.",
      fall: "Crisp and sunny with spectacular autumn colors in the forests. Temperatures gradually cool from 25°C to 5°C (77°F to 41°F) from September through November."
    },
    majorCities: [
      {
        name: "Yerevan",
        description: "The capital and largest city, featuring a unique pink-hued architecture from volcanic tuff stone. Known for its vibrant café culture, Republic Square with its musical fountains, the Cascade complex with modern art, and stunning views of Mount Ararat. Founded in 782 BCE, Yerevan is one of the world's oldest continuously inhabited cities."
      },
      {
        name: "Gyumri",
        description: "Armenia's second-largest city with distinctive 19th-century architecture and significant cultural heritage. Despite being devastated by a 1988 earthquake, Gyumri has preserved its historical character and artisan traditions, particularly in blacksmithing, ceramics, and textiles."
      },
      {
        name: "Vanadzor",
        description: "The third-largest city situated in the picturesque Lori Province, surrounded by forested mountains. Known for its Soviet industrial heritage now transitioning to tourism, arts, and as a gateway to northern Armenia's monasteries and natural attractions."
      },
      {
        name: "Dilijan",
        description: "Often called 'Armenia's Switzerland' due to its lush forested mountains and alpine architecture. This resort town is famous for its sanatoriums, mineral water springs, and as an artists' retreat with numerous studios and galleries."
      },
      {
        name: "Jermuk",
        description: "A renowned spa town high in the mountains famous for its healing hot springs and mineral water. Featuring a scenic waterfall in the town center, Soviet-era sanatoriums, modern resort facilities, and surrounded by hiking trails."
      }
    ],
    famousFor: [
      "Ancient Monasteries - Including Geghard, Khor Virap, and Tatev with their stunning mountain locations",
      "Mount Ararat - Biblical mountain visible from Yerevan but located in Turkey",
      "Lavash Bread - Thin traditional flatbread recognized by UNESCO as cultural heritage",
      "Brandy (Cognac) Production - Particularly the renowned Ararat brand",
      "Chess - A national passion where chess education is mandatory in schools"
    ],
    topAttractions: [
      {
        name: "Monastery of Geghard",
        description: "A UNESCO World Heritage Site partially carved into the adjacent mountain, featuring remarkable rock-cut churches and tombs from the 4th to 13th centuries. Known for its spectacular acoustics and spiritual atmosphere.",
        imageUrl: "https://images.unsplash.com/photo-1563499797412-8b7248ce6a72?q=80&w=1000"
      },
      {
        name: "Khor Virap Monastery",
        description: "A pilgrimage site with the most iconic view in Armenia—the monastery with Mount Ararat as backdrop. Historically significant as the place where Saint Gregory the Illuminator was imprisoned before converting Armenia to Christianity.",
        imageUrl: "https://images.unsplash.com/photo-1605396591139-6dfd75d6b1a2?q=80&w=1000"
      },
      {
        name: "Temple of Garni",
        description: "The only standing Greco-Roman colonnaded building in Armenia, built in the 1st century CE. This pagan temple dedicated to the sun god Mihr survived Christianization and offers excellent views of the Azat River Gorge.",
        imageUrl: "https://images.unsplash.com/photo-1580207683252-e265d8221b1c?q=80&w=1000"
      },
      {
        name: "Tatev Monastery",
        description: "A 9th-century monastery complex perched on the edge of a deep gorge, accessible via the 'Wings of Tatev'—the world's longest non-stop double-track cable car. Once a major medieval university and spiritual center.",
        imageUrl: "https://images.unsplash.com/photo-1539089875484-ac9fbb6fb199?q=80&w=1000"
      },
      {
        name: "Lake Sevan",
        description: "A vast high-altitude freshwater lake covering 5% of Armenia's territory, surrounded by mountains. Features the picturesque Sevanavank Monastery on a peninsula, beaches, water sports, and is a popular summer retreat.",
        imageUrl: "https://images.unsplash.com/photo-1590068232592-23ad4fea9cd9?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Armenian cuisine is one of the oldest in the world, featuring fresh, locally-sourced ingredients with an emphasis on grilled meats, seasonal vegetables, flavorful herbs, and slow-cooked stews. Heavily influenced by its geography at the crossroads of Europe and Asia, Armenian food combines techniques and flavors from the Mediterranean, Middle East, and the Caucasus while maintaining its unique identity through specific cooking methods and ingredient combinations.",
      famousDishes: [
        "Khorovats - Barbecued meat (usually pork or lamb) marinated with herbs and spices",
        "Dolma - Grape or cabbage leaves stuffed with spiced meat and rice mixture",
        "Ghapama - Pumpkin stuffed with rice, dried fruits, nuts, and honey, traditionally served at Armenian Christmas",
        "Harissa - A thick porridge made from korkot (cracked wheat) and fatty chicken, cooked slowly for hours",
        "Khash - A traditional winter soup made from cow's feet and herbs, typically eaten at breakfast with lots of garlic"
      ]
    },
    culturalCustoms: [
      "Hospitality - Armenians take great pride in welcoming guests, often insisting visitors eat and drink beyond satiety as a sign of respect",
      "Toasting - Elaborate toasts are a crucial part of Armenian dining, with each toast often telling a story or expressing a wish",
      "Chess Culture - The game is embedded in daily life, with chess education compulsory in schools and many public parks featuring permanent chess tables",
      "Traditional Music - The duduk (apricot wood flute) is considered the national instrument, producing a hauntingly beautiful sound central to Armenian cultural identity",
      "Religious Observance - As the first Christian nation (301 CE), religious traditions remain important with many Armenians visiting monasteries on significant days"
    ],
    travelTips: [
      "Learn a few phrases in Armenian - locals greatly appreciate even basic attempts at their language",
      "Carry cash - while cards are accepted in Yerevan, many rural areas and small businesses operate cash-only",
      "Dress modestly when visiting monasteries - shoulders and knees should be covered",
      "Try public transportation - shared vans called marshrutkas connect most towns and are an affordable way to travel",
      "Be prepared for spontaneous hospitality - you may be invited to homes or offered food and drinks by strangers",
      "Purchase a local SIM card for reliable internet access throughout the country"
    ],
    safetyInfo: "Armenia is generally very safe for travelers with low crime rates and friendly locals often willing to help tourists. The biggest concerns are occasional political tensions with neighboring Azerbaijan (particularly in border regions) and sometimes poor road conditions in remote areas. Yerevan and major tourist sites are well-policed and visitors report feeling quite secure. Standard precautions like watching belongings in crowded places are sufficient. The country has a reliable healthcare system in major cities, though travel insurance is recommended.",
    sustainableTourism: "Armenia is developing its ecotourism offerings with several initiatives focused on preserving its pristine natural environments while supporting local communities. Travelers can contribute by staying in family-run guesthouses, participating in community-based tourism projects, hiking established trails to minimize erosion, and supporting local conservation efforts for Lake Sevan and forest preservation. Several NGOs offer opportunities to engage in sustainable tourism, including bird watching tours, organic farm stays, and cultural heritage preservation activities.",
    visaRequirements: "Citizens of the EU, US, UK, Canada, Japan, and many other countries can enter Armenia visa-free for up to 180 days per year. For those requiring a visa, an e-visa system is available online with processing typically taking 2-3 business days. Visitors should ensure their passport is valid for at least six months beyond their planned departure date. No specific vaccinations are required for entry, though standard travel immunizations are recommended.",
    budget: {
      budget: "15,000-25,000 AMD ($40-65 USD) per day for hostel accommodation, public transportation, and eating at local cafes",
      midRange: "25,000-50,000 AMD ($65-130 USD) per day for 3-star hotels, occasional taxis, and better restaurants",
      luxury: "50,000+ AMD ($130+ USD) per day for 4-5 star hotels, private drivers, and fine dining"
    },
    transportationOptions: [
      "Metro - Clean and efficient in Yerevan but limited network",
      "Taxis - Affordable by Western standards; use apps like GG or Yandex in Yerevan for reliable service",
      "Marshrutkas - Shared minivans that serve as the main intercity transport; inexpensive but can be crowded",
      "Rental cars - Available in major cities; international driver's license required",
      "Tours - Organized day trips to major attractions available from tour companies in Yerevan"
    ],
    neighboringCountries: [
      "Georgia", "Iran", "Turkey", "Azerbaijan"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Ancient Churches", "Mountain Landscapes", "Wine Heritage", "Historical Sites",
    "Cultural Experience", "UNESCO Heritage", "Hiking", "Religious Tourism", "Caucasus Region", "Gastronomy"
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
            </Tabs>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Travel Planning</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                  <p className="mb-2">{countryData.bestTimeToVisit.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {countryData.bestTimeToVisit.months.map((month) => (
                      <Badge key={month} variant="secondary">{month}</Badge>
                    ))}
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Budget Expectations</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-bold">Budget: </span>
                      <span>{countryData.budget.budget}</span>
                    </div>
                    <div>
                      <span className="font-bold">Mid-Range: </span>
                      <span>{countryData.budget.midRange}</span>
                    </div>
                    <div>
                      <span className="font-bold">Luxury: </span>
                      <span>{countryData.budget.luxury}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visa Requirements</h3>
                  <p>{countryData.visaRequirements}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Travel Tips & Safety</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                <p>{countryData.sustainableTourism}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Summer</h3>
                    <p>{countryData.weatherInfo.summer}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Winter</h3>
                    <p>{countryData.weatherInfo.winter}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Spring</h3>
                    <p>{countryData.weatherInfo.spring}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Fall</h3>
                    <p>{countryData.weatherInfo.fall}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
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
                  <p>{countryData.timeZones.join(', ')}</p>
                </div>
                
                <div>
                  <p className="font-semibold">International Dialing Code</p>
                  <p>{countryData.callingCode}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Driving Side</p>
                  <p>{countryData.drivingSide.charAt(0).toUpperCase() + countryData.drivingSide.slice(1)}</p>
                </div>
                
                <div>
                  <p className="font-semibold">Neighboring Countries</p>
                  <p>{countryData.neighboringCountries.join(', ')}</p>
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

export default ArmeniaCountry; 