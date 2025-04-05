import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BulgariaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Bulgaria",
    slug: "bulgaria",
    continent: "Europe",
    capital: "Sofia",
    languageOfficial: "Bulgarian",
    languagesSpoken: ["Bulgarian", "Turkish", "Roma"],
    currency: "Bulgarian Lev (BGN)",
    population: 6948445,
    area: 110879,
    timeZones: ["GMT+2 (EET)", "GMT+3 (EEST) Summer"],
    callingCode: "+359",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    description: "Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, rivers including the Danube, and a mountainous interior. A cultural melting pot with Greek, Slavic, Ottoman, and Persian influences, it has a rich heritage of traditional dance, music, costumes, and crafts. Bulgaria's long history spans from ancient civilizations to medieval kingdoms, Ottoman rule, and communism before becoming a democracy.",
    whyVisit: "Bulgaria offers travelers an incredible value proposition where Western European charm meets Eastern European prices, with a diversity of experiences packed into a compact geography. Within a single day, visitors can journey from golden Black Sea beaches through ancient forests to snow-capped mountain peaks. The country boasts an astounding historical legacy spanning 8,000 years—from Thracian tombs and Roman amphitheaters to Byzantine churches and Ottoman mosques—often without the crowds that plague more famous European destinations. Bulgaria's wine tradition dates back to the Thracians (older than France's), producing excellent yet affordable varieties from unique indigenous grapes. The country embraces wellness tourism with over 600 mineral springs, ancient Roman bath complexes, and modern spa resorts offering therapeutic treatments at a fraction of Western prices. Bulgarian cuisine delights with its fresh, farm-to-table approach featuring yogurt (with its unique bacterial strain), feta-like sirene cheese, and slow-cooked stews, while the people's legendary hospitality makes visitors feel immediately welcome. For adventurers, Bulgaria offers epic hiking along well-maintained mountain trails, emerging ski resorts with excellent conditions at budget prices, and pristine nature including Europe's largest bear and wolf populations.",
    bestTimeToVisit: {
      text: "Bulgaria's climate varies by region. May-June and September are ideal overall, offering pleasant temperatures (20-25°C/68-77°F) and fewer tourists. The Black Sea coast is best from June to September with warm waters and sunshine. For skiing, visit mountain resorts from December to March. July-August brings the warmest weather but also crowds at coastal resorts and higher prices.",
      months: ["May", "June", "September", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summer (June-August) brings hot, sunny weather with temperatures averaging 26-30°C (79-86°F) across most of Bulgaria, occasionally reaching up to 40°C (104°F) in inland regions. The Black Sea coast enjoys a more moderate maritime climate with refreshing sea breezes, while mountain areas remain pleasantly cool, typically 5-10°C (9-18°F) lower than lowland temperatures. Rainfall is generally minimal except for occasional afternoon thunderstorms in mountainous regions. This is peak tourist season, especially on the coast, with lively atmosphere but also higher prices and more crowded attractions.",
      winter: "Winter (December-February) is cold across Bulgaria with significant regional variations. Lowland areas including Sofia experience average temperatures between -4 and 4°C (25-39°F) with regular snowfall. Coastal regions remain milder with temperatures rarely dropping below freezing, though strong winds can make it feel colder. Mountain areas transform into winter sports destinations with reliable snow cover, temperatures frequently below -10°C (14°F), and excellent skiing conditions, particularly in Bansko, Borovets, and Pamporovo resorts. Central heating is universal in accommodation, but visitors should pack warm clothing as outdoor temperatures can be quite bitter, especially with the wind chill factor.",
      spring: "Spring (March-May) offers gradually warming temperatures and blooming landscapes across Bulgaria. March starts chilly with occasional snowfall, particularly in mountainous regions, while April brings significant warming with temperatures reaching 15-20°C (59-68°F) by month's end. May is particularly delightful with warm days averaging 20-25°C (68-77°F), wildflower-covered mountains, and green valleys. Spring sees fewer tourists than summer, while cultural festivals celebrating traditional Bulgarian spring customs abound, particularly around Orthodox Easter. This shoulder season provides excellent value with lower accommodation prices, comfortable hiking conditions, and the opportunity to experience attractions without crowds.",
      fall: "Fall (September-November) presents one of Bulgaria's most pleasant seasons, especially September when temperatures remain warm at 20-25°C (68-77°F) while summer crowds dissipate. The Black Sea retains its summer warmth, making swimming possible well into October. Forests across the country transform with spectacular fall foliage, particularly in mountain regions like the Rhodopes and Rila. This season coincides with grape and agricultural harvests, bringing wine festivals and local food celebrations throughout the country. Weather becomes increasingly variable by late October and November, with cooler temperatures averaging 5-15°C (41-59°F) and increased rainfall, though this creates atmospheric conditions perfect for exploring historical sites and museums without tourist crowds."
    },
    majorCities: [
      {
        name: "Sofia",
        description: "Bulgaria's capital combines ancient history with vibrant modernity. Nestled beneath Vitosha Mountain, the city features Roman ruins including the 4th-century St. George Rotunda, Ottoman-era Banya Bashi Mosque, and the neo-Byzantine Alexander Nevsky Cathedral with its stunning gold domes. The city's yellow brick roads lead to numerous museums, the National Palace of Culture, and pedestrianized Vitosha Boulevard lined with shops and cafes. Sofia's restaurant scene showcases innovative Bulgarian cuisine, while its thermal springs feed historic public baths. The city serves as an excellent base for day trips to nearby Rila Monastery and Vitosha's hiking trails."
      },
      {
        name: "Plovdiv",
        description: "One of Europe's oldest continuously inhabited cities and 2019 European Capital of Culture, Plovdiv is built around seven hills. Its immaculately preserved Old Town features colorful National Revival architecture with overhanging upper stories and hidden courtyards. The ancient Roman Theater still hosts performances against a spectacular mountain backdrop, while the Kapana (Trap) district has transformed from craftsmen's quarter to creative neighborhood filled with art galleries, design shops, and innovative restaurants. Plovdiv's pedestrian-friendly center creates a relaxed atmosphere perfect for exploring its multiple archaeological layers, from Thracian settlements through Roman, Byzantine, and Ottoman influences."
      },
      {
        name: "Varna",
        description: "Bulgaria's third-largest city and maritime capital combines Black Sea beaches with cultural attractions. The seafront promenade connects golden sand beaches with the Sea Garden park, a vast green space housing the Naval Museum, Aquarium, and open-air theater. Downtown Varna features the impressive Orthodox Cathedral and Roman Thermae (bath complex), among the largest Roman remains in Bulgaria. The Archaeological Museum displays the world's oldest gold treasure (4600-4200 BCE), while the modern shopping district offers pedestrianized streets with boutiques and cafes. Varna serves as the gateway to nearby resorts like Golden Sands and St. Constantine and Helena, combining beach tourism with authentic urban Bulgarian experiences."
      },
      {
        name: "Burgas",
        description: "This laid-back coastal city serves as gateway to southern Black Sea resorts while offering its own attractions. Four lakes surround Burgas, providing unique ecosystems where flamingos and other migratory birds can be observed. The Sea Garden parallels the beach, offering peaceful walks, open-air exhibitions, and the summer Sand Festival featuring impressive sand sculptures. The renovated downtown area centers around the pedestrianized Aleksandrovska Street with its shops, restaurants, and the excellent Ethnographic Museum. Unlike the resort towns, Burgas maintains an authentic Bulgarian atmosphere year-round while providing easy access to popular vacation spots like Sunny Beach, Sozopol, and Nessebar."
      },
      {
        name: "Veliko Tarnovo",
        description: "The medieval capital of the Second Bulgarian Empire (1185-1396) offers dramatic architecture cascading down steep hillsides above the winding Yantra River. Dominating the city, the restored Tsarevets Fortress complex housed medieval Bulgarian emperors and patriarchs, now illuminated nightly in a spectacular sound and light show. The old town's cobblestone streets reveal National Revival architecture housing museums, craftsmen's workshops, and panoramic restaurants. Nearby Arbanasi village features stone-built merchants' houses and richly decorated churches with remarkable frescoes. Veliko Tarnovo's strategic location makes it ideal for exploring central Bulgaria's monasteries, villages, and natural attractions."
      }
    ],
    famousFor: [
      "Rose oil production - providing approximately 85% of the world's rose oil",
      "Ancient Thracian treasures and archaeological sites dating back thousands of years",
      "Black Sea resorts with golden sand beaches and affordable summer vacations",
      "Skiing and winter sports in mountain resorts like Bansko and Borovets",
      "Rila Monastery - the largest Eastern Orthodox monastery in Bulgaria and a UNESCO World Heritage site"
    ],
    topAttractions: [
      {
        name: "Rila Monastery",
        description: "Founded in the 10th century by St. John of Rila, this UNESCO World Heritage site represents the spiritual and architectural pinnacle of Bulgarian Orthodox tradition. Nestled dramatically at 1,147 meters among the conifer forests of Rila Mountain, the monastery's current form dates primarily from the 19th-century National Revival period. Its fortress-like exterior walls enclose a magnificent courtyard where striped archways and bright frescoes create a striking contrast against mountain backdrops. The monastery's crown jewel is the main church with its vivid biblical scenes painted by the finest Bulgarian artists of the period, including masterworks by Zahari Zograf. The complex houses Bulgaria's richest historical museum, featuring Rafail's Cross—a wooden crucifix with 104 microscopic scenes and 650 miniature figures carved using only a magnifying glass. The monastery continues functioning as an active religious center where visitors can observe Orthodox traditions, while its remote mountain setting offers hiking opportunities to St. Ivan's cave where the monastery's founder lived as a hermit.",
        imageUrl: "https://images.unsplash.com/photo-1583137263589-8e75cc0692ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Ancient City of Nessebar",
        description: "This atmospheric UNESCO World Heritage site occupies a rocky peninsula jutting into the Black Sea, connected to the mainland by a narrow isthmus. Originally a Thracian settlement that became a Greek colony in the 6th century BCE, Nessebar preserves layers of history from Hellenistic, Roman, Byzantine, Bulgarian, and Ottoman periods. The compact old town features narrow cobblestone streets winding between more than 40 beautifully preserved churches spanning 800 years of architectural evolution. Most iconic is the Church of St. Stephen with its stunning 16th-century frescoes covering every interior surface. Equally impressive are the wooden National Revival houses with stone ground floors and overhanging upper stories decorated with intricate wooden carvings. Archaeological remains include sections of the ancient Hellenic acropolis, Roman and medieval fortifications, and Byzantine thermal baths. Despite being a major tourist destination, Nessebar maintains its authentic atmosphere, especially in the off-season when visitors can explore the peninsula's 3,000 years of continuous human settlement against the dramatic backdrop of the Black Sea.",
        imageUrl: "https://images.unsplash.com/photo-1563407844952-ae65e5a6cf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Plovdiv Old Town",
        description: "One of Europe's oldest continuously inhabited urban areas, Plovdiv's Old Town crowns three of the city's seven hills with an extraordinary architectural ensemble. The cobblestone streets wind past Roman ruins, Ottoman mosques, and the jewel of the district—magnificently preserved Bulgarian National Revival houses from the 18th and 19th centuries. These distinctive buildings feature colorful facades, elaborate wooden ceilings, hidden interior courtyards, and overhanging upper floors supported by intricately carved wooden beams. Many now house museums like the Ethnographic Museum and the Hindliyan House, preserving period furniture and domestic arrangements. The quarter's crown jewel is the Ancient Roman Theatre, built in the 1st century CE with 7,000 seats and still hosting performances against the backdrop of the Rhodope Mountains. Kapana (The Trap), an adjacent neighborhood of narrow streets once home to craftsmen, has transformed into a creative district filled with art galleries, design shops, craft beer bars, and innovative restaurants, especially vibrant since Plovdiv's designation as 2019 European Capital of Culture. Together, these historic districts offer a living museum spanning centuries of Bulgarian and European history.",
        imageUrl: "https://images.unsplash.com/photo-1617120279904-0df6a0ae78ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Belogradchik Rocks and Fortress",
        description: "Rising dramatically from the forested landscape of northwestern Bulgaria, these extraordinary rock formations stretch for 30 kilometers, reaching heights up to 200 meters. Created over 230 million years ago from red sandstone and conglomerate rock, erosion has sculpted them into fantastic shapes that inspired legends—many formations bear names like The Madonna, The Monks, The Schoolgirl, and The Bear, reflecting their distinctive silhouettes. Integrated perfectly within this natural phenomenon stands Belogradchik Fortress (Kaleto), whose ancient foundations date to Roman times with significant medieval Bulgarian and Ottoman expansions. The fortress walls ingeniously incorporate the massive rock formations as natural defensive barriers, creating an impregnable stronghold until the advent of modern artillery. From the fortress ramparts, visitors enjoy spectacular panoramas across the surrounding Balkan Mountains and valleys. Beyond the main formation, adventure seekers can explore nearby Magura Cave with its prehistoric paintings and Baba Vida Fortress in Vidin. The site offers a unique combination of geological wonder, architectural heritage, and cultural significance, particularly magical at sunset when the rocks glow crimson.",
        imageUrl: "https://images.unsplash.com/photo-1590127672262-2c4565344a35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Seven Rila Lakes",
        description: "This spectacular glacial lake formation in the northwestern Rila Mountains comprises one of Bulgaria's most stunning natural landmarks. Situated between 2,100 and 2,500 meters above sea level, each lake carries a descriptive name reflecting its characteristics: The Tear, The Eye, The Kidney, The Twin, The Trefoil, The Fish Lake, and The Lower Lake. They connect via cascading streams and waterfalls, forming a magnificent sequence descending through the mountain landscape. A chairlift from Panichishte resort provides easier access to the lakes, though many hikers prefer the traditional trail offering progressive views of the expanding panorama. The most breathtaking vantage point comes at the highest viewing platform above The Tear, where all seven lakes become visible simultaneously against the backdrop of surrounding peaks. The lakes' appearance transforms dramatically through the seasons—crystal blue in summer surrounded by alpine meadows filled with wild flowers, mystically shrouded in clouds during spring and fall, and frozen under deep snow in winter months. The area holds spiritual significance as a gathering place for followers of the Bulgarian spiritual teacher Peter Deunov, who perform their paneurhythmy ritual dance near the lakes each August.",
        imageUrl: "https://images.unsplash.com/photo-1538380940530-ba59cc273d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      }
    ],
    localCuisine: {
      description: "Bulgarian cuisine reflects the nation's agricultural abundance with an emphasis on fresh, seasonal ingredients and slow-food traditions predating the concept by centuries. Dairy products feature prominently, especially yogurt containing the unique Lactobacillus bulgaricus bacteria and various white brined cheeses like sirene. Grilled meats, particularly kufte (spiced meatballs) and kebapche (ground meat rolls), appear on most menus alongside rich stews slow-cooked in traditional earthenware pots. Vegetable dishes shine in summer and fall, from the iconic shopska salad with tomatoes, cucumbers, peppers, and crumbled white cheese to complex spreads like lyutenitsa made from roasted peppers and tomatoes. Breads and pastries hold cultural significance, with ritual breads for holidays and daily staples like banitsa (cheese-filled filo pastry). Meals typically begin with rakia (fruit brandy) and salads, followed by hot appetizers, main dishes, and desserts featuring local honey, nuts, and seasonal fruits. Regional variations exist throughout the country, with more fish dishes along the Black Sea coast, Turkish influences in southern regions, and hearty mountain fare in alpine areas.",
      famousDishes: [
        "Shopska Salata - Diced tomatoes, cucumbers, peppers, and onions topped with grated white sirene cheese",
        "Banitsa - Layered filo pastry filled with whisked eggs and sirene cheese, sometimes incorporating spinach or pumpkin",
        "Kavarma - Slow-cooked meat stew with vegetables and spices, traditionally prepared and served in individual clay pots",
        "Tarator - Cold soup made from yogurt, cucumbers, dill, garlic, and walnuts, perfect for hot summer days",
        "Meshana Skara - Mixed grill platter featuring kebapche (grilled minced meat rolls), kyufte (spiced meatballs), and various cuts of pork and chicken"
      ]
    },
    culturalCustoms: [
      "Bulgarians nod their heads to indicate 'no' and shake their heads for 'yes'—the opposite of Western customs",
      "When entering a home, always remove your shoes; hosts often provide slippers for guests",
      "Traditional Bulgarian hospitality dictates offering food and drink to any visitor; refusing is considered impolite",
      "Martenitsa—red and white woven ornaments—are exchanged on March 1st and worn until seeing the first stork or blossoming tree of spring",
      "Name days (the day of the saint after whom a person is named) are celebrated as importantly as birthdays in Bulgarian culture"
    ],
    travelTips: [
      "Bulgaria uses the Cyrillic alphabet; learning to recognize basic letters helps tremendously with navigation",
      "Public transportation is extensive but English signage is limited; download offline maps and translation apps",
      "Taxis can be problematic in tourist areas; use reputable companies with meters or pre-negotiated fares",
      "When hiking in mountain areas, register your route with mountain rescue and check weather conditions carefully",
      "Tap water is generally safe to drink in most areas, but bottled water is recommended in some rural regions",
      "Keep small change handy for public restrooms which often charge a small fee for use"
    ],
    safetyInfo: "Bulgaria ranks as one of the safer European destinations with low rates of violent crime against tourists. Petty theft occurs primarily in crowded tourist areas, transportation hubs, and resort areas along the Black Sea—standard precautions like secure money belts and awareness of surroundings are sufficient protection. Taxi scams targeting tourists remain the most common problem, particularly at airports and bus/train stations; use official taxi stands, reputable companies with working meters, or pre-arrange transportation through accommodation. Mountain safety deserves special attention as Bulgarian mountain rescue services may take longer to reach remote areas; hikers should register routes with park authorities, carry appropriate equipment, and check weather forecasts carefully as conditions can change rapidly. Road safety presents greater risks, with Bulgaria having one of Europe's higher traffic accident rates—defensive driving is essential, particularly on rural roads where horse carts still operate alongside vehicles. Political demonstrations occasionally occur in Sofia but rarely affect tourists and remain generally peaceful. The healthcare system provides adequate emergency care in major cities, though facilities in rural areas may be basic; comprehensive travel insurance including evacuation coverage is recommended.",
    sustainableTourism: "Bulgaria offers strong potential for sustainable tourism with extensive protected areas covering a third of its territory, including three national parks and numerous nature reserves. Ecotourism infrastructure continues developing, particularly through rural guesthouses adopting sustainable practices and supporting local economies. The country's agritourism sector allows visitors to participate in traditional farming activities and culinary workshops using organic, locally-grown ingredients. When selecting accommodations, look for properties with certification from the Bulgarian Association for Alternative Tourism or eco-labels like Green Key. Travelers can support sustainability by choosing locally-owned guesthouses over international chains, participating in guided activities led by local experts, respecting trail markers and protected area regulations when hiking, visiting during shoulder seasons to reduce overtourism at popular coastal resorts, purchasing directly from artisans preserving traditional crafts, and selecting restaurants serving locally-sourced Bulgarian cuisine. Community-based tourism initiatives in villages throughout the Rhodope, Balkan, and Rila mountains provide authentic cultural experiences while directing tourism revenue to rural communities working to preserve traditional lifestyles and prevent depopulation.",
    visaRequirements: "Bulgaria is an EU member but not yet part of the Schengen Area. Citizens of EU countries, the United States, Canada, Australia, New Zealand, Japan, and many other nations can enter visa-free for up to 90 days within any 180-day period. Visitors need a passport valid for at least three months beyond their planned departure date. While officially requiring proof of sufficient funds (50 euros per day) and accommodation arrangements, these are rarely checked for tourists from Western countries. Those requiring visas should apply at Bulgarian diplomatic missions well in advance. Border controls remain in place at all entry points, with potential delays during summer months at land crossings with Greece, Turkey, and Romania. Starting in 2024, travelers from visa-exempt countries will need to register through the European Travel Information and Authorization System (ETIAS) before arrival. Non-EU visitors must register with local police within 48 hours of arrival, though hotels automatically handle this process for guests. For longer stays, residence permits must be obtained through the Bulgarian Migration Directorate before the 90-day limit expires.",
    budget: {
      budget: "$30-60 (50-100 BGN) per day for hostel accommodation, public transportation, street food and casual meals, and basic paid attractions",
      midRange: "$60-120 (100-200 BGN) per day for mid-range hotels, restaurant meals, paid attractions, and occasional taxis or car rental",
      luxury: "$200+ (350+ BGN) per day for boutique hotels or resorts, upscale dining, private guides, spa treatments, and premium experiences"
    },
    transportationOptions: [
      "Extensive bus network connecting cities and towns with frequent departures and affordable fares",
      "Railway system linking major cities with slower but scenic routes through mountain regions",
      "Car rentals available at airports and major cities, offering flexibility for exploring rural areas",
      "Domestic flights between Sofia and coastal cities like Varna and Burgas, saving time during summer",
      "Public transportation in cities including metros in Sofia, trams, buses, and trolleybuses with inexpensive fares"
    ],
    neighboringCountries: [
      "Romania (to the north)",
      "Serbia (to the northwest)",
      "North Macedonia (to the west)",
      "Greece (to the south)",
      "Turkey (to the southeast)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Historical Sites", "Beach Vacation", "Mountain Hiking", "Cultural Experience", "UNESCO Heritage",
    "Winter Sports", "Thermal Springs", "Budget Travel", "Ancient Ruins", "European Architecture"
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

export default BulgariaCountry; 