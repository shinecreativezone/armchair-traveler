import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import LazyGetYourGuideWidget from "@/components/LazyGetYourGuideWidget";

const SpainCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Spain",
    slug: "spain",
    continent: "Europe",
    capital: "Madrid",
    languageOfficial: "Spanish",
    languagesSpoken: ["Spanish", "Catalan", "Galician", "Basque", "Valencian", "Aranese"],
    currency: "Euro (EUR)",
    population: 47350000,
    area: 505990,
    timeZones: ["UTC+1 (CET), UTC+2 (CEST)"],
    callingCode: "+34",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2015/11/12/16/23/flag-1040564_1280.png",
    description: "Spain, positioned at the crossroads of the Atlantic and the Mediterranean, offers a compelling blend of historical richness, cultural vibrancy, and natural beauty. The country's diverse regions showcase distinct traditions, languages, and cuisines, from the green hills of Galicia to the sun-drenched beaches of Andalusia. With its remarkable architectural heritage spanning Roman ruins, Islamic palaces, medieval cathedrals, and modernist masterpieces, Spain provides visitors with an unparalleled journey through European history while embracing contemporary innovation and a celebrated lifestyle centered around food, art, and communal celebration.",
    whyVisit: "Spain captivates visitors with its exceptional variety of experiences: sun-soaked Mediterranean beaches, snow-capped Pyrenees mountains, and verdant northern coastlines. Its cultural wealth encompasses world-class museums housing masterpieces by Picasso, Dalí, and Goya, alongside UNESCO-protected historical districts in cities like Toledo and Córdoba. The country's passionate approach to life manifests in vibrant festivals, flamenco performances, and a renowned culinary scene featuring tapas, paella, and exceptional wines. With welcoming locals, excellent infrastructure, and a pleasant climate year-round in many regions, Spain offers an accessible yet authentic European experience that rewards exploration beyond its most famous destinations.",
    bestTimeToVisit: {
      text: "The ideal time to visit Spain varies by region due to the country's diverse climates. Spring (April-June) and fall (September-October) offer pleasant temperatures and fewer crowds nationwide. Summer (June-August) is perfect for northern regions and beach destinations but can be uncomfortably hot in central and southern Spain, where temperatures regularly exceed 40°C (104°F). Winter brings skiing opportunities in the Pyrenees and Sierra Nevada, while coastal areas like Andalusia and the Canary Islands maintain mild temperatures year-round. Major festivals like Semana Santa (Easter), San Fermín in Pamplona (July), and La Tomatina (August) draw significant crowds and require advance planning.",
      months: ["April", "May", "June", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Spanish summers vary dramatically by region. The Mediterranean coast and Balearic Islands enjoy hot, dry conditions with temperatures averaging 26-30°C (79-86°F), ideal for beach holidays. Central Spain, including Madrid, experiences intense heat with temperatures regularly exceeding 35°C (95°F) and minimal rainfall. Northern coastal regions like Galicia and Asturias maintain milder temperatures around 20-25°C (68-77°F) with occasional rainfall. The Canary Islands remain pleasantly warm year-round at 24-28°C (75-82°F). High season brings crowds to coastal areas, and many businesses in major cities close in August as locals vacation elsewhere.",
      winter: "Winter in Spain presents significant regional variations. The Mediterranean coast and southern regions enjoy mild conditions with daytime temperatures of 12-18°C (54-64°F) and limited rainfall. The Canary Islands maintain pleasant temperatures around 20°C (68°F) even in winter months. Central Spain experiences cold, dry winters with Madrid temperatures typically ranging from 0-10°C (32-50°F). Northern Spain sees considerable rainfall and temperatures between 5-14°C (41-57°F). The Pyrenees, Sierra Nevada, and other mountain ranges offer excellent skiing conditions from December through March, with snow-capped peaks providing a striking contrast to the country's sunny coastal areas.",
      spring: "Spring brings Spain to life with blossoming landscapes and comfortable temperatures ranging from 15-25°C (59-77°F) across most regions. This shoulder season offers ideal conditions for city exploration and outdoor activities, with fewer tourists than summer months. Northern Spain sees decreasing rainfall as the season progresses, while central and southern regions warm quickly by late April. Semana Santa (Holy Week) processions draw significant crowds to cities like Seville and Málaga, requiring advance bookings. Spring showcases Spain's natural beauty, from almond blossoms in February to wildflower displays in rural areas, making it perfect for photography and hiking in national parks.",
      fall: "Fall in Spain offers pleasant temperatures ranging from 15-25°C (59-77°F), gradually cooling as the season progresses. This shoulder season combines comfortable conditions with diminishing tourist crowds, making it excellent for exploring cities and cultural sites. Mediterranean coastal areas remain warm enough for swimming well into October, while inland regions showcase beautiful autumn foliage, particularly in northern forests and mountain areas. Harvest season brings wine festivals to regions like La Rioja and Catalonia, alongside mushroom foraging in northern woodlands. Fall also features less rainfall than spring in many regions, though the northern Atlantic coast can experience increased precipitation, especially in late autumn."
    },
    majorCities: [
      {
        name: "Madrid",
        description: "Spain's dynamic capital combines stately elegance with energetic urban culture. World-class art museums form the 'Golden Triangle' (Prado, Reina Sofía, and Thyssen-Bornemisza), showcasing masterpieces from Velázquez to Picasso. The city's grand boulevards, lively plazas, and majestic Royal Palace reflect its imperial history, while neighborhoods like Malasaña and Lavapiés pulse with contemporary creativity. Madrid's renowned culinary scene spans traditional taverns serving tapas to innovative Michelin-starred restaurants, and its legendary nightlife—where evenings often begin after midnight—exemplifies the city's passionate approach to life."
      },
      {
        name: "Barcelona",
        description: "Barcelona captivates visitors with its unique blend of Mediterranean charm, cutting-edge design, and architectural wonders. Gaudí's otherworldly creations, including the still-unfinished Sagrada Família and whimsical Park Güell, define the cityscape alongside medieval Gothic Quarter alleyways and modernist landmarks. The city embraces its waterfront location with beaches, promenades, and exceptional seafood cuisine. Barcelona's distinct Catalan identity manifests in its language, traditions, and fierce civic pride, while its reputation for design innovation extends from fashion to cuisine. This walkable city rewards exploration with hidden plazas, world-class museums, and vibrant markets like La Boqueria."
      },
      {
        name: "Seville",
        description: "Seville embodies the romantic essence of southern Spain with its intoxicating blend of Moorish architecture, flamenco passion, and orange blossom-scented streets. The city's historic center showcases the world's largest Gothic cathedral, the ornate Real Alcázar palace, and the Giralda tower—monuments to its importance during Spain's Golden Age. Atmospheric neighborhoods like Santa Cruz charm visitors with winding lanes and flower-draped balconies, while the modern Metropol Parasol provides contemporary contrast. Seville's cultural calendar peaks during the emotional Semana Santa processions and vibrant Feria de Abril festival, though its tapas bars and flamenco venues offer authentic experiences year-round."
      },
      {
        name: "Valencia",
        description: "Valencia skillfully balances tradition and innovation as Spain's third-largest city. The futuristic City of Arts and Sciences complex, designed by native architect Santiago Calatrava, contrasts with the winding streets of the Barrio del Carmen and the UNESCO-listed Silk Exchange. Valencia's cultural contributions include paella, which originated in the surrounding rice fields of Albufera Natural Park, and Las Fallas festival, where massive satirical sculptures are created and ceremoniously burned. The city's transformation of the diverted Turia riverbed into a lush park demonstrates its forward-thinking approach, while its Mediterranean beaches and excellent climate allow for outdoor enjoyment throughout the year."
      },
      {
        name: "Granada",
        description: "Granada's dramatic setting beneath the Sierra Nevada mountains provides the perfect backdrop for the Alhambra, Spain's most visited monument and a masterpiece of Islamic architecture. This hilltop palace complex, with its intricate geometric patterns, reflective pools, and verdant gardens, represents the pinnacle of Moorish civilization in Spain. Below, the whitewashed Albaicín neighborhood offers maze-like streets and breathtaking Alhambra views from its mirador viewpoints. The city's significant Muslim history manifests in hammam bathhouses and tea shops alongside Catholic cathedrals and monasteries, while its university population ensures a vibrant tapas and nightlife scene, where food is often served free with drinks in many establishments."
      }
    ],
    famousFor: [
      "Sagrada Família - Antoni Gaudí's unfinished masterpiece in Barcelona",
      "Flamenco - Passionate traditional dance and music from Andalusia",
      "Tapas Culture - Small plates served in bars throughout the country",
      "La Tomatina - Annual tomato-throwing festival in Buñol",
      "Running of the Bulls - Controversial festival held annually in Pamplona"
    ],
    topAttractions: [
      {
        name: "Alhambra",
        description: "This breathtaking palace and fortress complex in Granada represents the pinnacle of Moorish architecture in Spain. Built primarily between the 13th and 14th centuries during the final Islamic dynasty on the Iberian Peninsula, the Alhambra combines military functionality with extraordinary artistic beauty. Its highlights include the intricate muqarnas (honeycomb) ceilings of the Palace of the Lions, the tranquil Court of the Myrtles with its reflective pool, and the Generalife summer palace with terraced gardens. The complex exemplifies Islamic principles of architecture where mathematical patterns, calligraphy, water features, and gardens create an earthly paradise reflecting divine harmony.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sagrada Família",
        description: "Antoni Gaudí's unfinished masterpiece has become Barcelona's defining landmark and Spain's most visited monument. Construction began in 1882 and continues today, with anticipated completion by 2026—the centenary of Gaudí's death. This extraordinary basilica reflects the architect's naturalistic approach, with tree-like columns, spiral staircases inspired by seashells, and facades depicting biblical scenes in expressionistic style. The interior creates a transcendent forest-like space where colored light filters through stained glass in mesmerizing patterns. Despite being incomplete, the church was consecrated by Pope Benedict XVI in 2010 and represents a unique fusion of Gothic traditions with modernist innovation.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Plaza Mayor (Madrid)",
        description: "This harmonious rectangular square in the heart of Madrid exemplifies Spanish Baroque urban planning at its finest. Completed in 1619 under Philip III (whose equestrian statue occupies the center), the plaza features symmetrical four-story buildings with 237 balconies facing inward, all painted the distinctive Habsburgian red. Throughout its history, the square has hosted royal ceremonies, bullfights, public executions, and markets. Today, it serves as a gathering place for Madrileños and visitors alike, with traditional restaurants under its arcades, street performers, and seasonal events including a Christmas market. The plaza remains an essential expression of Spanish urban life and imperial heritage.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "El Prado Museum",
        description: "Madrid's premier art museum houses one of the world's finest collections of European art from the 12th to early 20th centuries. Established in 1819, the Prado showcases the royal collections developed by Habsburg and Bourbon monarchs, with particular strength in Spanish, Italian, and Flemish schools. The museum features unparalleled collections of works by Spanish masters including Velázquez (whose 'Las Meninas' is considered the museum's centerpiece), Goya, and El Greco, alongside European masterpieces by Bosch, Titian, Rubens, and many others. The elegant neoclassical building, designed by Juan de Villanueva, underwent a significant expansion in 2007, further enhancing its status as an essential destination for art lovers.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Mezquita of Córdoba",
        description: "This architectural marvel illustrates Spain's complex religious history through its unique hybrid structure. Originally built as a Visigothic church, it was converted into one of the world's largest mosques during Muslim rule (8th-13th centuries), only to have a Catholic cathedral inserted into its center after the Christian reconquest. The mosque portion features a mesmerizing forest of over 850 red and white striped arches among jasper, marble, and granite columns. This extraordinary space leads to an ornate baroque cathedral rising unexpectedly from its midst. The building exemplifies the cultural layering fundamental to Spanish identity, where different civilizations have built upon rather than entirely replaced their predecessors.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Spanish cuisine celebrates regional diversity, high-quality ingredients, and sociable dining. Mediterranean influences dominate, with olive oil, garlic, tomatoes, and peppers featuring prominently. Each region maintains distinctive specialties: seafood dominates northern coastal areas, rice dishes in Valencia, hearty stews in central Spain, and Moorish-influenced cuisine in Andalusia. The tapas tradition—small plates shared among friends—exemplifies Spain's convivial approach to dining, where meals are unhurried social occasions rather than merely nutritional necessity. Recent decades have seen Spanish gastronomy gain global recognition, with avant-garde chefs applying innovative techniques to traditional ingredients while maintaining respect for culinary heritage.",
      famousDishes: [
        "Paella - Saffron-infused rice dish traditionally made with rabbit, chicken, and vegetables (Valencia)",
        "Jamón Ibérico - Premium cured ham from acorn-fed Iberian pigs, aged for years",
        "Tortilla Española - Thick potato and onion omelette served warm or room temperature",
        "Gazpacho - Cold tomato soup with cucumber, pepper, and garlic, popular in summer",
        "Churros con Chocolate - Fried dough pastries served with thick hot chocolate for dipping"
      ]
    },
    culturalCustoms: [
      "Late Dining - Dinner typically starts around 9-10pm, with restaurants rarely busy before this time",
      "Siesta - Afternoon break tradition, though increasingly limited to smaller towns rather than cities",
      "Physical Greetings - Two kisses on the cheeks (starting with the left) for friends, family and sometimes new acquaintances",
      "Sobremesa - The practice of lingering at the table after meals to continue conversation",
      "Passion for Festivals - Nearly every town has its own annual celebration with distinct traditions"
    ],
    travelTips: [
      "Adjust your schedule - Embrace later lunches (2-4pm) and dinners (9-11pm) to align with local rhythms",
      "Learn basic Spanish phrases - While tourist areas often have English speakers, efforts to speak Spanish are appreciated",
      "Be aware of regional differences - Spain's autonomous communities have distinct cultures, sometimes with different languages",
      "Validate public transport tickets - Many systems require stamping tickets before boarding to avoid fines",
      "Expect limited Sunday opening hours - Many shops close, though this is changing in tourist areas",
      "Budget for quality over quantity - Especially with food and cultural experiences, spending a bit more often yields authentically memorable experiences"
    ],
    safetyInfo: "Spain ranks among Europe's safer destinations for travelers, with relatively low rates of violent crime. The most common safety concerns involve petty theft and pickpocketing in tourist areas of major cities, particularly Barcelona and Madrid. Visitors should remain vigilant in crowded places, on public transportation, and at popular attractions. Tourist police (with English-speaking officers) are available in major destinations. The country maintains excellent healthcare facilities, with pharmacies widely available for minor concerns. Natural hazards are minimal, though summer forest fires can affect rural areas during dry periods. Spain's emergency number is 112, with operators typically able to assist in multiple languages.",
    sustainableTourism: "Spain has increasingly prioritized sustainable tourism to address over-tourism challenges in popular destinations like Barcelona and the Balearic Islands. Initiatives include promoting shoulder season travel, developing eco-tourism in lesser-visited regions like Extremadura and Asturias, and implementing visitor caps at sensitive sites such as the Alhambra. Many accommodations have adopted eco-certification programs, while historic Paradores hotels repurpose heritage buildings into lodging. Spain's extensive train network, including high-speed AVE services, provides environmentally friendly transportation between major destinations. Visitors can contribute to sustainability by exploring beyond overcrowded hotspots, supporting locally-owned businesses, respecting natural areas, and participating in community-based tourism initiatives that preserve traditional ways of life.",
    visaRequirements: "Spain is part of the Schengen Area, allowing citizens from the European Union, United States, Canada, Australia, New Zealand, Japan, and many other developed nations to enter without a visa for stays up to 90 days within a 180-day period. Visitors from other countries must obtain a Schengen visa before arrival, applying through Spanish diplomatic missions in their home country. All visitors should carry a passport valid for at least three months beyond their departure date. Since January 2021, non-EU visitors must register through the ETIAS system before traveling to Spain, though this is a pre-travel authorization rather than a visa. For stays exceeding 90 days, various residence permits are available depending on the purpose of the extended visit.",
    budget: {
      budget: "40-70 EUR per day for hostel accommodation, public transportation, self-catering and occasional inexpensive restaurants",
      midRange: "70-150 EUR per day for mid-range hotels, regular restaurant dining, and paid attractions",
      luxury: "150+ EUR per day for luxury accommodation, fine dining, and premium experiences"
    },
    transportationOptions: [
      "AVE High-Speed Trains - Connect major cities at speeds up to 310 km/h, with punctuality guarantees",
      "Regional Trains (RENFE) - More affordable services covering smaller destinations",
      "ALSA Buses - Extensive network reaching locations not served by rail, often at lower prices",
      "Metro Systems - Efficient subway networks in Madrid, Barcelona, Valencia, Bilbao, and Seville",
      "Car Rental - Provides flexibility for exploring rural areas, though unnecessary in major cities",
      "Domestic Flights - Connect distant regions quickly, particularly useful for reaching islands"
    ],
    neighboringCountries: [
      "Portugal", "France", "Andorra", "Morocco (via ferry)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beaches", "Architecture", "Food & Wine", "History", "Art Museums", 
    "Islands", "Moorish Heritage", "Festivals", "Urban Exploration", "Nature"
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

export default SpainCountry; 