import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const DenmarkCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Denmark",
    slug: "denmark",
    continent: "Europe",
    capital: "Copenhagen",
    languageOfficial: "Danish",
    languagesSpoken: ["Danish", "English", "German", "Swedish", "Norwegian"],
    currency: "Danish Krone (DKK)",
    population: 5831000,
    area: 42933,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+45",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/16/12/43/flag-35845_1280.png",
    description: "Denmark, a Nordic country in Northern Europe, is renowned for its high quality of life, innovative design, and progressive social policies. Consisting of the Jutland Peninsula and numerous islands, this small nation combines historic charm with modern efficiency. Denmark is known for its bicycle culture, hygge (a concept of coziness and contentment), and as the birthplace of LEGO and fairy tale author Hans Christian Andersen.",
    whyVisit: "Denmark offers visitors a perfect blend of historic sites, cutting-edge design, and natural beauty. Copenhagen dazzles with its colorful harbor, world-class museums, and innovative culinary scene, while charming towns like Aarhus and Odense provide glimpses into the country's rich history. Nature lovers can explore pristine beaches, lush forests, and gentle rolling landscapes. The Danish emphasis on work-life balance has created a culture that values quality experiences, making it an ideal destination for travelers seeking authenticity, style, and relaxation in a country consistently ranked among the world's happiest.",
    bestTimeToVisit: {
      text: "The best time to visit Denmark is from May to August when the weather is mild to warm, daylight hours are long (up to 17 hours in midsummer), and outdoor activities and festivals abound. Late spring (May-June) offers pleasant temperatures and blooming landscapes without peak summer crowds. Fall (September-October) brings beautiful autumn colors and fewer tourists, while winter (November-February) is dark and cold but offers charming Christmas markets and hygge experiences in cozy settings.",
      months: ["May", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Danish summers (June-August) are mild and pleasant rather than hot, with average temperatures ranging from 15-20°C (59-68°F), occasionally reaching 25°C (77°F) during warm spells. The season brings long daylight hours, with twilight extending nearly to midnight around the summer solstice. While often sunny, summer weather can be changeable with occasional rain showers. This is the peak tourist season, with locals and visitors alike enjoying outdoor dining, swimming at beaches, and exploring the countryside.",
      winter: "Winters (December-February) are cold and dark, with average temperatures ranging from 0-4°C (32-39°F), occasionally dropping below freezing. Daylight is limited to about 7-8 hours in December and January. Snow is possible but typically doesn't remain for extended periods in coastal areas, while rain and gray skies are common. This season showcases the Danish concept of hygge, with candlelit cafés, Christmas markets, and indoor coziness. Visitors should pack warm, waterproof clothing and be prepared for occasional wind that can make temperatures feel colder.",
      spring: "Spring (March-May) sees gradually warming temperatures from 5-15°C (41-59°F) and increasingly longer days. Early spring can still be quite cool and sometimes wet, but by May, conditions become quite pleasant with blooming flowers throughout parks and gardens. This shoulder season offers good value with fewer tourists than summer while still providing comfortable conditions for exploration. Spring brings renewed energy to the country as outdoor cafés begin setting up and cultural events increase.",
      fall: "Fall (September-November) brings cooling temperatures from 8-15°C (46-59°F) and shorter days. Early autumn can still be quite pleasant, while November tends toward winter conditions. This season features beautiful foliage in parks and forests, particularly in October, as well as harvest festivals and cultural events. Museums and historical sites remain open but with fewer crowds than summer. Fall brings a return to hygge culture as Danes begin spending more time in cozy indoor settings. Visitors should pack layers for variable conditions and be prepared for occasional rain."
    },
    majorCities: [
      {
        name: "Copenhagen",
        description: "Denmark's capital is a perfect blend of historic charm and forward-thinking design. Famous for its colorful Nyhavn waterfront, world-class museums like the National Museum and Glyptotek, and the iconic Little Mermaid statue, Copenhagen also boasts cutting-edge architecture, innovative restaurants, and the Tivoli Gardens amusement park. The city's excellent public transportation, extensive bicycle lanes, and pedestrian-friendly streets make exploring a pleasure."
      },
      {
        name: "Aarhus",
        description: "Denmark's second-largest city combines a youthful university atmosphere with historic charm. The Old Town (Den Gamle By) open-air museum showcases Danish life through the centuries, while ARoS Art Museum with its rainbow panorama walkway represents the city's modern cultural scene. The revitalized harbor area features striking architecture including the Iceberg residential complex and Dokk1 library."
      },
      {
        name: "Odense",
        description: "Located on the island of Funen, Odense is famous as the birthplace of fairy tale author Hans Christian Andersen. The city honors its famous son with museums, sculptures, and annual festivals. Beyond Andersen attractions, Odense offers charming cobblestone streets, half-timbered houses, beautiful gardens, and Denmark's excellent bicycle infrastructure. As Denmark's third-largest city, it combines historic atmosphere with modern amenities and a thriving university scene."
      },
      {
        name: "Aalborg",
        description: "This northern Jutland city has transformed from an industrial center to a vibrant cultural hub. The revitalized waterfront showcases contemporary architecture including the Utzon Center (designed by Sydney Opera House architect Jørn Utzon) and the Musikkens Hus concert hall. Aalborg's historic center features the 16th-century Jens Bang's House, Budolfi Cathedral, and a lively atmosphere thanks to its large student population. The city serves as a gateway to northern Denmark's dramatic landscapes, including the meeting of two seas at Grenen."
      },
      {
        name: "Roskilde",
        description: "This ancient city just west of Copenhagen served as Denmark's capital in Viking times and early Middle Ages. Its magnificent UNESCO-listed cathedral contains the tombs of 39 Danish monarchs. Roskilde is also known for the Viking Ship Museum displaying preserved 11th-century vessels and the annual Roskilde Festival, Scandinavia's largest music event. The historic center features well-preserved medieval streets and buildings, while fjord views add to the city's scenic appeal."
      }
    ],
    famousFor: [
      "Danish Design - Functional, minimalist style seen in furniture, architecture, and everyday objects",
      "Hygge - The Danish concept of coziness and contentment",
      "Vikings - Rich Norse heritage with museums and historical sites",
      "Hans Christian Andersen - World-famous fairy tale author born in Odense",
      "LEGO - The iconic building block toy originated in Denmark"
    ],
    topAttractions: [
      {
        name: "Tivoli Gardens",
        description: "One of the world's oldest amusement parks, located in central Copenhagen. This enchanting attraction combines beautiful gardens, historic architecture, and thrilling rides. At night, thousands of lights create a magical atmosphere, while summer brings outdoor concerts and winter transforms the gardens into a festive Christmas market.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Nyhavn",
        description: "Copenhagen's iconic 17th-century waterfront lined with brightly colored townhouses, restaurants, and bars. This picturesque canal was once a busy commercial port but now serves as one of the city's most popular gathering spots. Several houses along the canal were home to fairy tale author Hans Christian Andersen, and historic wooden ships add to the maritime atmosphere.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Kronborg Castle",
        description: "This UNESCO World Heritage site in Helsingør (Elsinore) is known worldwide as the setting for Shakespeare's Hamlet. The impressive Renaissance fortress guards the narrow strait between Denmark and Sweden, featuring grand halls, a vast banquet room, extensive dungeons, and ramparts with panoramic views. Built in the 1420s and expanded in the 16th century, Kronborg has played a crucial role in Danish history as both a royal residence and strategic military fortress.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "The Little Mermaid",
        description: "This modest yet iconic bronze statue in Copenhagen harbor has become a symbol of Denmark. Created by Edvard Eriksen in 1913 and inspired by Hans Christian Andersen's fairy tale, the sculpture depicts a mermaid becoming human for love. Though smaller than many visitors expect (just 1.25 meters tall), the statue represents Denmark's maritime heritage and connection to Andersen's literary legacy. Despite having been vandalized several times throughout its history, the Little Mermaid remains Denmark's most photographed attraction.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "ARoS Aarhus Art Museum",
        description: "One of Scandinavia's largest art museums features a stunning rooftop installation called 'Your Rainbow Panorama' by Olafur Eliasson - a 150-meter circular walkway with glass in every color of the spectrum offering spectacular views of Aarhus through different colored filters. The museum's impressive collection spans from the Golden Age of Danish Painting to contemporary installations, including the dramatic 'Boy' sculpture by Australian artist Ron Mueck. The building itself represents modern Danish architecture at its finest.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Danish cuisine combines traditional Nordic flavors with modern innovations. Based on the country's agricultural and maritime resources, traditional dishes feature pork, fish, potatoes, and rye bread, while New Nordic cuisine elevates local ingredients through innovative techniques. The concept of 'hygge' extends to food culture, with an emphasis on convivial, comfortable dining experiences that bring people together.",
      famousDishes: [
        "Smørrebrød - Open-faced sandwiches on dense rye bread with artfully arranged toppings like herring, egg, shrimp, or beef tartare",
        "Frikadeller - Pan-fried meatballs typically made from pork and veal, served with potatoes and gravy",
        "Flæskesteg - Crispy pork roast with crackling, typically served during Christmas",
        "Wienerbrød - Danish pastries with multilayered dough, butter, and sweet fillings",
        "Stegt flæsk med persillesovs - Crispy fried pork with parsley sauce, considered the national dish"
      ]
    },
    culturalCustoms: [
      "Hygge - The Danish concept of coziness and contentment, often involving candles, comfortable settings, good food, and good company",
      "Janteloven - The cultural norm discouraging individualism in favor of collective well-being and modesty",
      "Cycling Culture - Bicycles are a primary mode of transportation, with extensive dedicated infrastructure",
      "Work-Life Balance - Danes prioritize personal time and family, with typically shorter working hours",
      "Trust and Honesty - Danish society operates on high levels of social trust, with unmanned fruit stands and honor-system payments"
    ],
    travelTips: [
      "Embrace cycling - Rent a bike to explore like a local, especially in Copenhagen and other cities",
      "Pack for changeable weather - Bring layers and rain gear even in summer, as conditions can shift quickly",
      "Budget accordingly - Denmark is expensive, but free attractions and picnics can help manage costs",
      "Learn about hygge - Experience this uniquely Danish concept by enjoying cozy cafés and candlelit evenings",
      "Use public transportation - The efficient, reliable system connects most parts of the country",
      "Consider the Copenhagen Card - If visiting multiple attractions in the capital, this pass can offer good value"
    ],
    safetyInfo: "Denmark consistently ranks as one of the safest countries in the world for travelers, with low crime rates, political stability, and excellent healthcare. Copenhagen and other cities are generally safe at all hours, though standard precautions against pickpocketing are advised in tourist areas and on public transportation. The country's infrastructure is exemplary, with clean drinking water, high food safety standards, and reliable emergency services. Natural disasters are rare, though coastal areas may experience strong winds during autumn and winter storms. The European emergency number 112 connects to police, medical, and fire services throughout Denmark. Danish police (politi) are professional, approachable, and often speak excellent English.",
    sustainableTourism: "Denmark is a global leader in sustainability, with extensive investments in renewable energy (particularly wind power), cycling infrastructure, and green urban planning. Copenhagen aims to be the world's first carbon-neutral capital by 2025. Travelers can participate in sustainable tourism by using the country's excellent public transportation and cycling networks, staying in eco-certified accommodations (look for the Green Key label), supporting organic restaurants (marked 'Økologisk'), and respecting natural areas. Many Danish hotels and attractions have implemented significant sustainability measures, including energy conservation, waste reduction, and local sourcing. The country's compact size makes it possible to explore extensively while maintaining a relatively low carbon footprint.",
    visaRequirements: "Denmark is part of the Schengen Area, allowing citizens from the European Union and many other countries (including the United States, Canada, Australia, and New Zealand) to enter without a visa for stays up to 90 days within a 180-day period. Visitors from other countries must apply for a Schengen visa through Danish diplomatic missions before travel. All visitors should have a passport valid for at least three months beyond their planned departure date, proof of sufficient funds, travel insurance, and documentation of accommodation and return travel arrangements. As requirements may change, checking the official Danish Immigration Service website before planning travel is recommended.",
    budget: {
      budget: "800-1200 DKK ($115-175 USD) per day for hostel accommodation, budget meals, and public transportation",
      midRange: "1200-2000 DKK ($175-300 USD) per day for mid-range hotels, restaurant dining, and paid attractions",
      luxury: "2000+ DKK ($300+ USD) per day for luxury accommodations, fine dining, and premium experiences"
    },
    transportationOptions: [
      "Trains - Efficient rail network connecting major cities and towns, operated by DSB",
      "Metro - Copenhagen's automated subway system, clean and frequent, running 24/7",
      "Buses - Comprehensive network reaching areas not served by rail",
      "Bicycles - Extensive cycling infrastructure with dedicated lanes and rental options",
      "Ferries - Services connecting the numerous Danish islands",
      "Car Rental - Good road conditions, though not necessary in cities with excellent public transportation"
    ],
    neighboringCountries: [
      "Germany (land border to the south)", "Sweden (connected by the Øresund Bridge)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Design", "Architecture", "Urban Culture", "Castles", "Coastal",
    "Museums", "Cycling", "Food Scene", "Historical", "Hygge"
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

export default DenmarkCountry; 