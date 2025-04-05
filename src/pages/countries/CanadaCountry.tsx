import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CanadaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Canada",
    slug: "canada",
    continent: "North America",
    capital: "Ottawa",
    languageOfficial: "English and French",
    languagesSpoken: ["English", "French", "Indigenous languages", "Mandarin", "Cantonese", "Punjabi", "Spanish", "Italian", "German"],
    currency: "Canadian Dollar (CAD)",
    population: 38250000,
    area: 9984670,
    timeZones: ["UTC-8 to UTC-3.5"],
    callingCode: "+1",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1569700946559-15e8d75cf0f1?q=80&w=1000",
    description: "Canada, the second-largest country in the world by total area, spans from the Atlantic to the Pacific and northward into the Arctic Ocean. Known for its vast wilderness, multicultural cities, and welcoming atmosphere, Canada offers a diverse landscape of mountains, forests, prairies, and coastlines. With a commitment to social welfare, healthcare, and education, Canada consistently ranks among the world's most livable countries. Its society is characterized by diversity, tolerance, and a strong emphasis on maintaining a balance between individual rights and collective responsibilities.",
    whyVisit: "Canada offers travelers an abundance of natural wonders, from the spectacular Rocky Mountains to the pristine lakes of the Muskoka region and the dramatic coastlines of Newfoundland. Its vibrant cities like Toronto, Vancouver, and Montreal blend cosmopolitan sophistication with old-world charm, providing world-class dining, arts, and culture. Adventure seekers can explore ancient forests, witness the Northern Lights, or encounter diverse wildlife including bears, moose, and whales. Indigenous tourism experiences offer insights into the rich cultures of First Nations, Inuit, and Métis peoples. With safe cities, excellent infrastructure, and four distinct seasons offering different experiences, Canada provides an ideal destination for all types of travelers.",
    bestTimeToVisit: {
      text: "The best time to visit Canada depends on your interests. For summer activities and hiking, visit from June to September when temperatures are pleasant (20-30°C/68-86°F). Winter sports enthusiasts should come from December to March for ideal skiing and snowboarding conditions. Fall (September to October) offers spectacular foliage, particularly in eastern provinces, while spring (April to May) brings blooming landscapes and fewer tourists. Each season presents unique opportunities to experience Canada's diverse attractions.",
      months: ["June", "July", "August", "September", "October"]
    },
    weatherInfo: {
      summer: "Canadian summers (June to August) vary by region, with average temperatures of 20-30°C (68-86°F) in most populated areas. The Pacific coast tends to be mild and occasionally rainy, while central provinces experience warm, sunny days that can occasionally rise above 30°C (86°F). Eastern Canada combines warmth and humidity, particularly in July and August. Northern territories enjoy long daylight hours with surprisingly warm temperatures sometimes reaching the mid-20s°C (70s°F).",
      winter: "Winters (December to March) are generally cold across Canada, though intensity varies significantly by region. Coastal British Columbia experiences mild winters with temperatures rarely dropping below freezing and more rain than snow. The Prairie provinces and interior can be extremely cold, with temperatures often falling below -20°C (-4°F) and occasional drops to -40°C (-40°F). Eastern Canada experiences cold, snowy winters, while the Atlantic provinces face harsh conditions with frequent storms. Northern regions experience extreme cold and near-continuous darkness during mid-winter.",
      spring: "Spring (April to May) brings gradual warming and the awakening of nature, though conditions vary widely. Pacific regions bloom early, sometimes by March, while central and eastern provinces may see snow into April. Temperature fluctuations are common, with days ranging from 5-20°C (41-68°F). This shoulder season brings fewer tourists and beautiful flowering landscapes, particularly in May when most of the country experiences pleasant conditions.",
      fall: "Fall (September to October) is arguably Canada's most scenic season, especially in eastern provinces where forests transform into spectacular displays of red, orange, and gold. Temperatures gradually cool from summer highs to 5-15°C (41-59°F) in most regions. The season brings clear, crisp days ideal for outdoor activities, though by November, northern and central regions may experience first snowfalls. Fall also offers excellent wildlife viewing opportunities as animals prepare for winter."
    },
    majorCities: [
      {
        name: "Toronto",
        description: "Canada's largest city is a dynamic metropolis known for its diverse neighborhoods, world-class dining, and landmark CN Tower. As the country's financial and cultural hub, Toronto offers attractions like the Royal Ontario Museum, Art Gallery of Ontario, and vibrant markets including St. Lawrence and Kensington. The city's multicultural character is reflected in distinct areas like Chinatown, Little Italy, and Greektown, where visitors can experience global cuisines and traditions. With excellent transit, waterfront developments, and nearby attractions like Niagara Falls, Toronto provides an ideal introduction to urban Canada."
      },
      {
        name: "Vancouver",
        description: "Consistently ranked among the world's most livable cities, Vancouver offers a stunning setting between mountains and ocean. This Pacific coast gem combines outdoor adventure with cosmopolitan amenities, featuring attractions like Stanley Park's massive urban forest, the historic Gastown district, and Granville Island's public market. The city serves as a gateway to outdoor experiences including skiing at Whistler, hiking on the North Shore Mountains, and whale watching in the surrounding waters. Vancouver's diverse population has created a spectacular food scene, particularly notable for its Asian cuisine and farm-to-table restaurants."
      },
      {
        name: "Montreal",
        description: "Montreal's distinct European character sets it apart from other North American cities. The heart of French-Canadian culture blends old-world charm with modern vitality, featuring the cobblestone streets of Old Montreal, the magnificent Notre-Dame Basilica, and the bohemian Plateau Mont-Royal neighborhood. Famous for its year-round festivals including Jazz Fest and Just for Laughs, Montreal offers vibrant nightlife, world-class dining, and an impressive arts scene. The city's bilingual character creates a unique cultural atmosphere, with French heritage evident in its architecture, cuisine, and daily life."
      },
      {
        name: "Quebec City",
        description: "The cradle of French civilization in North America, Quebec City enchants visitors with its preserved 17th and 18th-century architecture. Its walled Old Town, a UNESCO World Heritage site, features narrow cobblestone streets, historic battlefields, and the iconic Château Frontenac hotel towering above the St. Lawrence River. The city maintains strong connections to its French roots through language, cuisine, and traditions, offering an authentic European experience within North America. Beyond its historic charm, Quebec City provides access to outdoor activities including skiing at nearby Mont-Sainte-Anne and natural wonders like Montmorency Falls."
      },
      {
        name: "Calgary",
        description: "Gateway to the Rocky Mountains, Calgary combines western heritage with modern urban amenities. Known for hosting the annual Calgary Stampede rodeo festival, the city proudly displays its ranching history alongside a contemporary downtown of gleaming skyscrapers. Visitors can explore the unique architecture of the Peace Bridge, enjoy panoramic views from the Calgary Tower, or experience interactive exhibits at Studio Bell, home of the National Music Centre. As a hub for outdoor adventure, Calgary offers easy access to Banff National Park and Lake Louise, making it an ideal base for exploring Canada's most iconic mountain landscapes."
      }
    ],
    famousFor: [
      "Rocky Mountains - Breathtaking mountain range with world-class skiing and hiking",
      "Niagara Falls - Powerful waterfall shared with the United States",
      "Northern Lights - Aurora Borealis viewing, particularly in northern regions",
      "Maple syrup - Producing 80% of the world's pure maple syrup",
      "Multicultural cities - Diverse urban centers known for safety and quality of life"
    ],
    topAttractions: [
      {
        name: "Banff National Park",
        description: "Canada's first national park offers some of North America's most spectacular mountain scenery. Located in the heart of the Rocky Mountains, Banff features turquoise glacial lakes including the iconic Lake Louise and Moraine Lake, towering peaks, abundant wildlife, and the charming townsite of Banff. Visitors can enjoy hiking, skiing, hot springs, and scenic drives along the Icefields Parkway, widely considered one of the world's most beautiful highways. The park's combination of accessibility and wilderness makes it Canada's most visited natural attraction.",
        imageUrl: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000"
      },
      {
        name: "Niagara Falls",
        description: "The massive horseshoe-shaped waterfall on the Canada-US border is one of the world's most famous natural wonders. The Canadian side offers the most impressive views of all three falls (Horseshoe, American, and Bridal Veil), with 90% of the Niagara River flowing over the Canadian Horseshoe Falls. Beyond the breathtaking cascades, visitors can experience boat tours that venture close to the thundering waters, explore tunnels behind the falls, or enjoy the lively Clifton Hill entertainment district and numerous wineries in the surrounding Niagara region.",
        imageUrl: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1000"
      },
      {
        name: "Old Quebec City",
        description: "The only fortified city north of Mexico, Old Quebec's remarkable preservation transports visitors back to New France. This UNESCO World Heritage site features 17th and 18th-century architecture, including the imposing Citadelle fortress, centuries-old churches, and the landmark Château Frontenac hotel. Visitors can walk along the 4.6 km of preserved ramparts, explore the charming Petit-Champlain district with its artisan shops, or dine in restaurants serving traditional Québécois cuisine. The district's European atmosphere and historical significance make it unlike anywhere else in North America.",
        imageUrl: "https://images.unsplash.com/photo-1519181258491-889c2b001485?q=80&w=1000"
      },
      {
        name: "Northern Lights in Yukon",
        description: "The Yukon Territory offers some of the world's best viewing of the Aurora Borealis, with its northern location, minimal light pollution, and clear winter skies. From August to April, visitors can witness the spectacular natural light show as it dances across the night sky in shades of green, pink, and purple. The area around Whitehorse provides comfortable accommodations and guided aurora viewing experiences, while more remote locations offer pristine wilderness settings for this magical phenomenon. The combination of the Northern Lights with snow-covered landscapes creates an unforgettable Arctic experience.",
        imageUrl: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?q=80&w=1000"
      },
      {
        name: "Polar Bears in Churchill",
        description: "The small northern town of Churchill, Manitoba, is known as the 'Polar Bear Capital of the World,' offering unparalleled opportunities to observe these magnificent creatures in their natural habitat. Each fall, hundreds of polar bears gather along Hudson Bay, waiting for the water to freeze so they can hunt seals. Specialized tundra vehicles take visitors safely into the bears' territory, providing close encounters with the world's largest land predators. Beyond bears, Churchill also offers beluga whale watching in summer and exceptional Northern Lights viewing in winter, making it a prime destination for wildlife enthusiasts.",
        imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1000"
      }
    ],
    localCuisine: {
      description: "Canadian cuisine reflects the country's diverse cultural influences and abundant natural resources. While often overlooked, traditional Canadian food goes beyond the stereotypical maple syrup and poutine to include regional specialties from coast to coast. Indigenous culinary traditions featuring game meats, foraged plants, and preservation techniques form the foundation, complemented by French influences in Quebec, British traditions across the country, and contributions from waves of immigrants. Modern Canadian cuisine emphasizes local, seasonal ingredients with a focus on sustainability, particularly showcasing the country's excellent seafood, game, and produce.",
      famousDishes: [
        "Poutine - French fries topped with cheese curds and smothered in gravy, originating in Quebec but now popular nationwide",
        "Butter Tarts - Sweet pastry tarts filled with a butter, sugar, and egg mixture, sometimes including raisins or nuts",
        "Montreal-style Bagels - Hand-formed, wood-fired bagels with a sweeter taste than their New York counterparts",
        "Tourtière - Savory meat pie traditionally served during the holidays in Quebec",
        "Nanaimo Bars - No-bake dessert bars with a chocolate ganache top, custard middle, and coconut-graham cracker base"
      ]
    },
    culturalCustoms: [
      "Politeness - Canadians are known for frequent apologies and maintaining courteous public behavior",
      "Multicultural Respect - Cultural diversity is actively celebrated, with respect for different traditions expected",
      "Tipping - Similar to the US, 15-20% tipping is customary for restaurants and services",
      "Shoes Off Indoors - Removing footwear when entering private homes is common practice",
      "Hockey Culture - The national winter sport holds special cultural significance beyond just being a game"
    ],
    travelTips: [
      "Prepare for seasonal extremes - Pack appropriate clothing, especially for winter visits",
      "Plan for distances - Canada's vastness means significant travel time between major destinations",
      "Tax is not included - Displayed prices usually don't include sales tax (which varies by province)",
      "Learn basic French phrases when visiting Quebec - While English is widely understood, efforts to speak French are appreciated",
      "Wildlife awareness - Maintain safe distances from all wild animals and follow park guidelines",
      "Carry travel insurance - Healthcare is excellent but can be expensive for non-residents"
    ],
    safetyInfo: "Canada ranks among the world's safest countries for travelers, with low crime rates, stable politics, and excellent healthcare. Major cities are generally safe even at night, though standard urban precautions are advised. The greatest safety concerns involve nature and weather – preparation is essential for wilderness activities, and winter driving requires experience and appropriate vehicles. Visitors should be aware of wildlife safety protocols in parks and remote areas, particularly regarding bears. Natural disasters are uncommon, though forest fires can affect western regions in summer. The country's efficient emergency services, clean drinking water, and strict food safety standards contribute to its reputation as a secure destination.",
    sustainableTourism: "Canada's commitment to conservation is reflected in its extensive network of protected areas, including 48 national parks and numerous provincial parks that preserve diverse ecosystems. Sustainable tourism initiatives are growing across the country, with certification programs for eco-friendly accommodations and tour operators. Indigenous tourism experiences offer sustainable alternatives that honor traditional relationships with the land while providing economic opportunities for First Nations communities. Visitors can contribute by choosing certified operators, respecting wildlife viewing guidelines, staying on designated trails, practicing 'leave no trace' principles, and supporting local businesses and conservation efforts. Canada's vast wilderness areas face challenges from climate change, making responsible tourism increasingly important.",
    visaRequirements: "Many visitors to Canada, including citizens of the United States, United Kingdom, Australia, and European Union countries, require an Electronic Travel Authorization (eTA) rather than a traditional visa for stays of up to six months. The eTA costs CAD $7 and can be applied for online, typically with quick approval. Citizens of other countries may need to apply for a Temporary Resident Visa through Canadian consulates or visa application centers. All visitors must have a valid passport, proof of sufficient funds for their stay, and return travel arrangements. Requirements can change, so checking the official Government of Canada website before planning travel is essential.",
    budget: {
      budget: "100-150 CAD ($75-110 USD) per day for hostels, public transportation, and budget meals",
      midRange: "150-300 CAD ($110-220 USD) per day for mid-range hotels, rental cars, and restaurant dining",
      luxury: "300+ CAD ($220+ USD) per day for luxury accommodations, guided tours, and fine dining"
    },
    transportationOptions: [
      "Air Travel - Essential for covering Canada's vast distances, with extensive domestic networks",
      "VIA Rail - Passenger rail service connecting major cities, including the scenic cross-country route",
      "Car Rental - Offers the most flexibility for exploring, especially in remote areas and national parks",
      "Intercity Buses - Budget-friendly options connecting cities and many smaller communities",
      "Ferries - Important links to coastal islands, particularly in British Columbia and Atlantic Canada",
      "Public Transit - Excellent in major cities, including subways in Toronto and Montreal"
    ],
    neighboringCountries: [
      "United States (shares the world's longest undefended border)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Nature", "Mountains", "Wildlife", "Indigenous Culture", "Winter Sports",
    "Urban Exploration", "Outdoor Adventure", "Cultural Heritage", "Wilderness", "Coastal"
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

export default CanadaCountry; 