import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ArgentinaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Argentina",
    slug: "argentina",
    continent: "South America",
    capital: "Buenos Aires",
    languageOfficial: "Spanish",
    languagesSpoken: ["Spanish", "Italian", "German", "Guaraní", "Quechua"],
    currency: "Argentine Peso (ARS)",
    population: 45376763,
    area: 2780400,
    timeZones: ["GMT-3"],
    callingCode: "+54",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2017/01/31/14/43/flag-2024732_1280.png",
    description: "Argentina is a vast South American country with terrain encompassing the Andes mountains, glacial lakes, and Pampas grassland. The eighth-largest country in the world, it boasts a rich cultural heritage shaped by indigenous peoples, Spanish colonization, and waves of European immigration. From the subtropical north to the subpolar south, Argentina offers extraordinary geographic diversity paired with a passionate national character.",
    whyVisit: "Argentina offers travelers an extraordinary blend of cultural richness and natural wonders. The country is home to passionate tango dancers and world-class beef, vibrant Buenos Aires with its European architecture, and the untamed wilderness of Patagonia with its glaciers and mountains. Wine enthusiasts can explore Mendoza's vineyards, while adventure seekers can witness the thundering Iguazú Falls. With its diverse landscapes ranging from subtropical forests to subpolar regions, friendly locals, and incredible cuisine, Argentina provides unforgettable experiences for every type of traveler.",
    bestTimeToVisit: {
      text: "The best time to visit Argentina depends on the region, but generally the shoulder seasons of spring (September to November) and fall (March to May) offer pleasant temperatures and fewer crowds. Summer (December to February) is ideal for Patagonia but can be very hot in the north.",
      months: ["March", "April", "May", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Summer (December to February) brings hot and humid conditions to the north, with temperatures regularly exceeding 30°C (86°F). Buenos Aires is warm and often humid (25-35°C/77-95°F), while Patagonia experiences mild, windy conditions (15-25°C/59-77°F).",
      winter: "Winter (June to August) sees mild temperatures in the north (15-25°C/59-77°F), cool and occasionally rainy conditions in Buenos Aires (8-15°C/46-59°F), and cold, snowy weather in Patagonia and the Andes (-5 to 5°C/23-41°F), making it ideal for skiing.",
      spring: "Spring (September to November) offers moderate temperatures throughout the country, blooming jacaranda trees in Buenos Aires, and the awakening of wildlife in Patagonia. It's an excellent time for wine tours in Mendoza.",
      fall: "Fall (March to May) brings spectacular foliage to the Lake District and wine regions, comfortable temperatures across most of the country, and fewer tourists in popular destinations like Patagonia and Iguazú Falls."
    },
    majorCities: [
      {
        name: "Buenos Aires",
        description: "The cosmopolitan capital combines European grandeur with Latin American passion. Known for its wide boulevards like the famous 9 de Julio Avenue, elegant neighborhoods like Recoleta with its renowned cemetery, the colorful artists' quarter of La Boca, and a vibrant nightlife centered around tango clubs called milongas."
      },
      {
        name: "Córdoba",
        description: "Argentina's second-largest city, located in the geographical center of the country. Home to the country's oldest university and a wealth of colonial architecture, Córdoba balances historic charm with a youthful energy from its large student population. The surrounding sierras offer beautiful landscapes and weekend retreats."
      },
      {
        name: "Mendoza",
        description: "The heart of Argentina's wine country, nestled at the foot of the Andes. Famous for its Malbec wines, tree-lined streets, and sophisticated culinary scene. A gateway for mountaineering expeditions to Aconcagua, the highest peak in the Americas, and a center for adventure sports."
      },
      {
        name: "Rosario",
        description: "A vibrant port city on the Paraná River and the birthplace of revolutionary Che Guevara and football legend Lionel Messi. Known for its impressive riverfront, the Monumento a la Bandera (Flag Monument), and a thriving cultural scene with numerous theaters, museums, and music venues."
      },
      {
        name: "Ushuaia",
        description: "The world's southernmost city, dramatically situated on the Beagle Channel with snow-capped mountains as a backdrop. Serves as the gateway to Antarctica, offers access to Tierra del Fuego National Park, and features unique attractions like the End of the World Train and Maritime Museum."
      }
    ],
    famousFor: [
      "Tango - The passionate dance and music born in Buenos Aires' working-class neighborhoods",
      "Beef and Asado - World-renowned beef and traditional barbecue cooking methods",
      "Malbec Wine - Exceptional wines, particularly from the Mendoza region",
      "Iguazú Falls - One of the world's most spectacular waterfall systems",
      "Patagonia - Dramatic landscapes of mountains, glaciers, and wilderness"
    ],
    topAttractions: [
      {
        name: "Iguazú Falls",
        description: "A breathtaking system of 275 waterfalls on the Argentina-Brazil border. The Devil's Throat is the most impressive section, where water plunges 82 meters. The surrounding subtropical rainforest houses diverse wildlife including toucans, coatis, and butterflies.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Perito Moreno Glacier",
        description: "One of the few advancing glaciers in the world, located in Los Glaciares National Park. The 250 km² ice formation rises 74 meters above Lago Argentino and periodically creates spectacular ice collapses as it advances. Walkways allow visitors to view the glacier from different perspectives.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Recoleta Cemetery",
        description: "Located in Buenos Aires' upscale Recoleta neighborhood, this extraordinary cemetery contains elaborate mausoleums of Argentina's notable figures. Most famous is Eva Perón's tomb, but the cemetery also impresses with its Art Deco, Art Nouveau, and Neo-Gothic architectural styles.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Quebrada de Humahuaca",
        description: "A UNESCO World Heritage Site in northwest Argentina featuring a spectacular mountain valley with multicolored rock formations including the famous Hill of Seven Colors. The valley has been a crucial trade route for 10,000 years and contains pre-Hispanic settlements and colonial churches.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Tierra del Fuego National Park",
        description: "Argentina's only coastal national park, located at the southern tip of the continent. Features dramatic scenery with mountains meeting the sea, subpolar forests, peat bogs, and diverse wildlife. The park is crossed by the historic End of the World Train and offers stunning hiking trails.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Argentine cuisine is meat-centric and heavily influenced by European immigrants, particularly Italian and Spanish. The country's fertile plains produce world-renowned beef, while its various regions offer distinctive specialties. Family gatherings often center around asado (barbecue), accompanied by robust red wines from Mendoza and other regions. Beyond meat, Italian-inspired pastas and pizzas are ubiquitous, while sweet-toothed locals enjoy dulce de leche in numerous desserts.",
      famousDishes: [
        "Asado - Traditional barbecue featuring various cuts of beef, sausages, and organ meats, cooked on a parrilla (grill) or open fire",
        "Empanadas - Savory pastries filled with beef, chicken, ham and cheese, or vegetable mixtures, with regional variations throughout the country",
        "Milanesa - Breaded and fried meat cutlet, similar to Austrian schnitzel, often served with mashed potatoes or in a sandwich",
        "Locro - Hearty stew made with corn, beans, and meat, traditionally served during national holidays",
        "Dulce de Leche - Sweet caramelized milk spread used in desserts like alfajores (cookie sandwiches) and panqueques (crepes)"
      ]
    },
    culturalCustoms: [
      "Mate Ritual - Sharing mate (a caffeine-rich infused drink) is a social custom with specific etiquette; the same gourd and straw are passed around a group",
      "Greetings - Argentines typically greet with one kiss on the cheek, even upon meeting someone for the first time",
      "Late Dining - Dinner is usually eaten very late by international standards, often starting at 9 PM or later, especially in Buenos Aires",
      "Football Passion - Soccer is more than a sport, it's a national obsession; River Plate vs. Boca Juniors is one of the world's most intense rivalries",
      "Respect for Personal Appearance - Argentines generally dress well and take pride in their appearance, even for casual occasions"
    ],
    travelTips: [
      "Carry cash - While credit cards are widely accepted in cities, smaller towns and establishments may only accept cash",
      "Learn basic Spanish - While many in tourism speak English, knowing some Spanish will greatly enhance your experience",
      "Understand the blue dollar - The unofficial exchange rate can sometimes offer better value than official channels",
      "Be prepared for siesta - In many provinces, businesses close for a few hours in the afternoon",
      "Book domestic flights in advance - Flights between regions can fill quickly, especially during high season",
      "Pack for various climates - If traveling to multiple regions, be prepared for significant temperature differences"
    ],
    safetyInfo: "Argentina is generally safe for tourists, though standard precautions should be taken, especially in major cities like Buenos Aires where pickpocketing and bag-snatching can occur in tourist areas and public transport. Demonstrations are common but usually peaceful; nevertheless, it's best to avoid them. Economic volatility can occasionally lead to temporary shortages or restrictions on banking services. The country has good healthcare facilities in urban areas, though travel insurance is recommended. Natural hazards include occasional flooding in the north and volcanic activity along the Chilean border.",
    sustainableTourism: "Argentina is developing its sustainable tourism initiatives, with numerous national parks implementing conservation programs and responsible tourism guidelines. Visitors can contribute by choosing eco-friendly accommodations, respecting wildlife viewing distances (particularly in Patagonia and marine environments), supporting community-based tourism in indigenous areas, and minimizing plastic use. Certified tour operators following responsible practices are increasingly available, particularly in fragile ecosystems like Iguazú and Patagonia. Sustainable wine tourism is also growing in regions like Mendoza, with many vineyards adopting organic and biodynamic practices.",
    visaRequirements: "Citizens of the US, Canada, Australia, the UK, and most EU countries do not need visas for tourist stays of up to 90 days. Visitors must have a passport valid for at least six months beyond their stay. Some nationalities need to pay a reciprocity fee before arrival, though this requirement changes periodically. No specific vaccinations are required, though yellow fever vaccination is recommended for travelers visiting Iguazú Falls and other northern regions. Always check the latest requirements with the Argentine embassy or consulate before traveling.",
    budget: {
      budget: "2,500-5,000 ARS ($25-50 USD) per day for hostel accommodation, public transportation, and affordable meals",
      midRange: "5,000-10,000 ARS ($50-100 USD) per day for mid-range hotels, some taxis, and restaurant dining",
      luxury: "10,000+ ARS ($100+ USD) per day for luxury accommodations, private transfers, and fine dining"
    },
    transportationOptions: [
      "Domestic Flights - Necessary for covering long distances in this vast country",
      "Long-distance Buses - Comfortable and extensive network with various service classes",
      "Local Buses (Colectivos) - Affordable public transportation within cities",
      "Subways - Available in Buenos Aires, efficient for avoiding traffic",
      "Taxis and Remises - Widely available in cities; remises are pre-arranged taxi services with fixed rates",
      "Car Rentals - Good option for exploring wine regions or parts of Patagonia"
    ],
    neighboringCountries: [
      "Chile", "Uruguay", "Paraguay", "Brazil", "Bolivia"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Tango", "Wine Regions", "Patagonia", "Andes Mountains", "Gauchos",
    "Wildlife", "National Parks", "Gastronomy", "Glaciers", "Waterfalls"
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

export default ArgentinaCountry; 