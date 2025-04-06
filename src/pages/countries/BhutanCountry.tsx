import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BhutanCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bhutan",
    slug: "bhutan",
    continent: "Asia",
    capital: "Thimphu",
    languageOfficial: "Dzongkha",
    languagesSpoken: ["Dzongkha", "English", "Nepali", "Tshangla", "Sarchhop"],
    currency: "Bhutanese Ngultrum (BTN)",
    population: 771612,
    area: 38394,
    timeZones: ["GMT+6"],
    callingCode: "+975",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/16/12/43/flag-35845_1280.png",
    description: "Bhutan, officially the Kingdom of Bhutan, is a landlocked country in the Eastern Himalayas between China and India. Known as 'Druk Yul' (Land of the Thunder Dragon), this Buddhist kingdom is renowned for measuring national happiness through its Gross National Happiness index rather than GDP and for its commitment to conservation and sustainable tourism.",
    whyVisit: "Bhutan offers an exceptional opportunity to experience a country that has prioritized cultural preservation, environmental conservation, and the pursuit of happiness over material development. Nestled in the Eastern Himalayas, this last remaining Buddhist kingdom features breathtaking mountain landscapes, ornate monasteries perched on cliff edges, and vibrant festivals where ancient mask dances bring mythology to life. Visitors can trek through pristine forests that cover over 70% of the country, encountering rare wildlife like the endangered black-necked crane or the elusive snow leopard. Bhutan's enlightened tourism policy of 'high value, low impact' means fewer crowds and more authentic experiences. The country's unique philosophical approach to development, measured through Gross National Happiness rather than GDP, has created a society where traditional values coexist harmoniously with necessary modernization. This mindful balance makes Bhutan not just a destination but a transformative experience that challenges Western notions of progress and success.",
    bestTimeToVisit: {
      text: "The best time to visit Bhutan is during spring (March to May) when flowering rhododendrons cover hillsides, and autumn (September to November) when skies are clear with spectacular mountain views and comfortable temperatures of 15-25°C (59-77°F).",
      months: ["March", "April", "May", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "June to August brings the monsoon season with heavy rainfall, lush green landscapes, and temperatures of 15-30°C (59-86°F) depending on altitude. This is low season with fewer tourists but challenging for trekking due to rain and leeches.",
      winter: "December to February offers clear, sunny days but cold temperatures ranging from -5 to 15°C (23-59°F) depending on elevation. Higher passes may be closed due to snow, but lower valleys remain accessible with fewer tourists.",
      spring: "March to May features pleasant temperatures of 10-25°C (50-77°F) with spectacular rhododendron and wildflower blooms across hillsides. This is prime time for festivals and trekking before monsoon arrives.",
      fall: "September to November is considered the ideal season with clear mountain views, comfortable temperatures of 10-23°C (50-73°F), vivid autumn colors, and important festivals like Thimphu Tshechu. This is peak tourist season."
    },
    majorCities: [
      {
        name: "Thimphu",
        description: "The capital and largest city, nestled in a valley at 2,320 meters (7,610 feet) elevation. Unlike most capitals, it has no traffic lights, with police directing traffic from decorated booths. Key attractions include Buddha Dordenma (a massive Buddha statue), Tashichho Dzong (fortress housing government offices), the National Memorial Chorten, and the Folk Heritage Museum showcasing traditional Bhutanese life."
      },
      {
        name: "Paro",
        description: "Home to Bhutan's only international airport, this charming valley town features traditional architecture and the country's most iconic landmark, Tiger's Nest Monastery. The Paro Dzong and National Museum (housed in an ancient watchtower) offer insights into Bhutanese history and Buddhist traditions, while the fertile valley floor is covered with rice paddies and apple orchards."
      },
      {
        name: "Punakha",
        description: "The former capital located in a subtropical valley where rhododendrons and magnolias bloom. The majestic Punakha Dzong, built at the confluence of two rivers, is considered Bhutan's most beautiful fortress-monastery. The area is known for its pleasant climate, Chimi Lhakhang (the fertility temple), and dramatic suspension bridges adorned with prayer flags."
      },
      {
        name: "Bumthang",
        description: "Referred to as Bhutan's spiritual heartland, this district comprises four main valleys filled with ancient temples and sacred sites. Jambay Lhakhang and Kurjey Lhakhang are among Bhutan's oldest temples, while the region is also known for its distinctive textiles, Swiss-influenced cheese production, and Red Panda beer from Bhutan's first microbrewery."
      },
      {
        name: "Phobjikha Valley",
        description: "A wide glacial valley renowned as the winter home of endangered black-necked cranes that migrate from Tibet. This remote, bowl-shaped valley offers outstanding natural beauty with marshy wetlands surrounded by forested mountains. The 17th-century Gangtey Monastery overlooks the valley, and the community is committed to ecotourism and conservation."
      }
    ],
    famousFor: [
      "Tiger's Nest Monastery (Paro Taktsang) - an iconic temple complex clinging to a cliff",
      "Gross National Happiness philosophy prioritizing wellbeing over economic growth",
      "Strict environmental conservation with over 70% forest cover and carbon-negative status",
      "Vibrant Buddhist festivals (Tshechus) featuring masked dances and sacred rituals",
      "Unique traditional architecture with elaborately decorated fortresses (dzongs)"
    ],
    topAttractions: [
      {
        name: "Paro Taktsang (Tiger's Nest Monastery)",
        description: "Perched dramatically on a cliff 900 meters (3,000 feet) above the valley floor, this sacred Buddhist site is Bhutan's most recognized landmark. Legend claims that Guru Rinpoche flew here on a tigress to meditate in the 8th century, bringing Buddhism to Bhutan. The challenging 2-3 hour hike rewards visitors with magnificent views and access to a complex of white buildings with golden roofs housing temples, meditation caves, and religious art.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Punakha Dzong",
        description: "Often described as the most beautiful fortress in Bhutan, this massive structure sits at the confluence of the Pho (male) and Mo (female) Rivers. Built in 1637, it serves as the winter residence for Bhutan's monastic body. The dzong showcases masterful craftsmanship with its towering whitewashed walls, intricate woodwork, and golden roofs. Inside, visitors find ornate courtyards, elaborate murals depicting Buddhist teachings, and the preserved remains of Zhabdrung Ngawang Namgyal, Bhutan's founder.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Dochula Pass",
        description: "Located on the road between Thimphu and Punakha at 3,100 meters (10,200 feet), this mountain pass offers breathtaking panoramic views of the Himalayan range on clear days. The site features 108 memorial chortens (stupas) known as Druk Wangyal Chortens, built in honor of Bhutanese soldiers who died fighting Indian insurgents in 2003. A nearby temple contains striking religious paintings and a meditation center. The rhododendron forests surrounding the pass burst with color during spring.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Trongsa Dzong",
        description: "This massive fortress, often called 'the dragon on the mountain ridge,' is strategically positioned above the Mangde River gorge, commanding the east-west route through central Bhutan. Built in 1644, it was the ancestral home of Bhutan's monarchy, and all kings must serve as Trongsa governors before ascending the throne. The dzong's complex maze of courtyards, passages, and temples illustrates Bhutanese architectural ingenuity, while offering historical insights through its museum housed in the watchtower (Ta Dzong).",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Gangtey Valley (Phobjikha)",
        description: "This broad glacial valley at approximately 3,000 meters (9,840 feet) is one of Bhutan's most scenic landscapes and an important wildlife preserve. From late October to mid-February, it hosts around 500 endangered black-necked cranes that migrate from Tibet. The 17th-century Gangtey Monastery overlooks the valley, offering stunning views of the wetlands below. Nature trails wind through potato fields, pine forests, and farming villages, providing intimate glimpses of rural Bhutanese life.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Bhutanese cuisine is characterized by its bold flavors, heavy use of chili peppers and cheese, and hearty, warming dishes suited to the mountain climate. Rice (red and white varieties) forms the staple, accompanied by vegetables, meat, and liberal amounts of chili. Most meals are served with ezay, a chili sauce made with cheese and various spices. Due to Buddhist influence, vegetarian options are widely available, though traditionally meat is included in special occasions and festival dishes.",
      famousDishes: [
        "Ema Datshi - The national dish consisting of chili peppers and local cheese in a stew-like preparation, often served with red rice",
        "Phaksha Paa - Pork cooked with spicy red chilies, ginger, and mountain vegetables",
        "Jasha Maru - Spicy minced chicken dish with tomatoes, onions, chilies, and ginger",
        "Hoentay - Buckwheat dumplings filled with turnip greens, cheese, and spinach, popular in Haa Valley",
        "Suja (Butter Tea) - Traditional beverage made from tea leaves, yak butter, and salt, churned to create a soup-like consistency"
      ]
    },
    culturalCustoms: [
      "Driglam Namzha - Traditional etiquette guiding behavior, dress, and architectural aesthetics, including wearing the national dress (gho for men, kira for women)",
      "Prayer Flags - Colorful rectangular cloth flags erected on hillsides and passes to spread blessings and prayers with the wind",
      "Tshechu Festivals - Annual religious celebrations featuring masked dances (cham) that depict stories from Bhutanese Buddhism and mythology",
      "Archery - The national sport played with traditional bamboo bows or modern equipment, accompanied by singing, dancing, and friendly taunting",
      "Phallus Symbols - Paintings and carvings of phalluses seen on buildings throughout Bhutan, believed to ward off evil spirits, originating from the Divine Madman's teachings"
    ],
    travelTips: [
      "All tourists (except Indian, Bangladeshi, and Maldivian nationals) must book through a licensed Bhutanese tour operator and pay the daily Sustainable Development Fee",
      "Photography inside dzongs and temples is often restricted, always ask for permission before taking pictures",
      "Pack layers as temperatures can vary dramatically between day and night, and between different elevations",
      "Respect Buddhist customs by walking clockwise around religious monuments and removing shoes before entering temples",
      "Altitude sickness can be an issue; acclimatize gradually and consider preventative medication if trekking in high altitudes",
      "Tobacco products are heavily restricted; importing without declaring incurs hefty fines"
    ],
    safetyInfo: "Bhutan is considered one of the safest countries in Asia for travelers, with very low crime rates and political stability. The greatest risks are natural hazards like altitude sickness in higher regions, landslides during monsoon season (June-August), and occasional earthquakes due to its Himalayan location. Healthcare facilities are limited outside major towns; comprehensive travel insurance including emergency evacuation coverage is essential. Road travel can be challenging due to winding mountain roads and ongoing infrastructure development. Visitors should respect local customs, particularly around religious sites where modest dress is required. Food and water safety standards are generally good in tourist facilities, though precautions against water-borne illnesses are advisable in remote areas.",
    sustainableTourism: "Bhutan pioneered the concept of sustainable tourism with its 'high value, low impact' policy, now implemented through the Sustainable Development Fee that all international visitors must pay. The country is carbon negative, with over 70% forest cover and a constitutional mandate that forests must cover at least 60% of the land. All tourism must be conducted through licensed Bhutanese tour operators who follow strict environmental guidelines. The country has banned plastic bags and is working toward becoming the world's first fully organic nation. Travelers can support these efforts by respecting natural areas, properly disposing of waste, supporting community-based tourism initiatives, and purchasing locally made handicrafts. Recent tourism reforms aim to elevate visitor experiences while ensuring benefits flow to local communities and help preserve Bhutan's unique cultural heritage.",
    visaRequirements: "All visitors (except nationals of India, Bangladesh, and Maldives) require a visa to enter Bhutan. Visas must be arranged in advance through a licensed Bhutanese tour operator or international partner as part of a package that includes the Sustainable Development Fee, accommodation, transportation, and a guide. Visitors need a passport valid for at least six months beyond the intended stay. Visa applications are processed online by the tour operator and pre-approved before travel. The actual visa is stamped in the passport upon arrival at the port of entry. Visa fees are typically included in the tourism package. Indian nationals can obtain an entry permit at the border with valid identification but must still register with immigration authorities.",
    budget: {
      budget: "The mandatory Sustainable Development Fee of $200 USD per person per day (reduced to $100 during low season) covers basic accommodation, meals, transport, and guide. Additional costs include international flights and personal expenses.",
      midRange: "Additional $50-100 USD per day for upgrades to better hotels, specialty meals not included in standard packages, and cultural experiences beyond the basic itinerary.",
      luxury: "$400+ USD per day (plus the Sustainable Development Fee) for luxury resorts like Amankora or Six Senses, private guides, exclusive experiences, and helicopter transfers between destinations."
    },
    transportationOptions: [
      "Druk Air and Bhutan Airlines - The only airlines serving Bhutan with international flights to Paro from limited destinations",
      "Private tour vehicles - All tourists travel within Bhutan via vehicles arranged by their tour operator",
      "Domestic flights - Limited service between Paro, Bumthang, Gelephu, and Yongphula",
      "Trekking - Many areas are accessible only by foot with required guides and support staff",
      "Domestic buses - Used primarily by locals, offering an authentic but basic experience (generally not part of tourist packages)"
    ],
    neighboringCountries: [
      "India (borders to the south, east, and west)",
      "China (borders to the north)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Buddhist Culture", "Himalayan Landscapes", "Mountain Trekking", "Cultural Heritage", "Festivals",
    "Spiritual Journey", "Traditional Architecture", "Sustainable Tourism", "Wildlife", "Photography"
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

export default BhutanCountry; 