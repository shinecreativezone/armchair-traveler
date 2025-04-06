import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BrazilCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Brazil",
    slug: "brazil",
    continent: "South America",
    capital: "Brasília",
    languageOfficial: "Portuguese",
    languagesSpoken: ["Portuguese", "Spanish", "German", "Italian", "Japanese", "Indigenous languages"],
    currency: "Brazilian Real (BRL)",
    population: 214300000,
    area: 8515767,
    timeZones: ["GMT-5 to GMT-2"],
    callingCode: "+55",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2013/07/12/15/32/flag-150112_1280.png",
    description: "Brazil, the largest country in South America, occupies nearly half the continent and borders every South American nation except Chile and Ecuador. With its vast territory spanning tropical rainforests, wetlands, mountains, and thousands of kilometers of coastline, Brazil offers incredible geographic diversity. It's a place of vibrant cultural fusion where Indigenous, African, European, and Asian influences have created one of the world's most dynamic societies, known for its music, festivals, cuisine, and warmth of its people.",
    whyVisit: "Brazil offers travelers an unmatched combination of natural wonders, cultural vibrancy, and warm hospitality. From the mighty Amazon rainforest—home to the greatest biodiversity on Earth—to the thundering Iguaçu Falls and pristine beaches stretching along 7,500km of coastline, nature lovers will be captivated by Brazil's landscapes. Urban explorers can experience the pulsating energy of Rio de Janeiro, São Paulo's world-class cultural scene, and Salvador's colorful Afro-Brazilian heritage. Add to this the country's infectious music, delicious cuisine, iconic Carnival celebrations, and the famous Brazilian joie de vivre, and you have a destination that stimulates all the senses.",
    bestTimeToVisit: {
      text: "The best time to visit Brazil depends on the region and what you want to experience. For most of the country, including Rio de Janeiro and the Northeast coast, May to September offers pleasant temperatures and less rainfall. The Amazon experiences less rain from July to November, though it's hot year-round. The Pantanal wildlife is best viewed during the dry season from April to September.",
      months: ["May", "June", "July", "August", "September"]
    },
    weatherInfo: {
      summer: "Summer (December to February) brings high temperatures across most of Brazil, with averages of 30-40°C (86-104°F) in most regions. This is also the wet season for much of the country, with frequent afternoon thunderstorms. Coastal areas are hot and humid, while Rio and São Paulo can experience intense heat waves.",
      winter: "Winter (June to August) offers mild temperatures in the south and southeast (15-25°C/59-77°F), while the northeast coast remains warm at 25-30°C (77-86°F). Southern Brazil can be quite cool with occasional frost. This is the dry season for most regions, with clear skies and lower humidity making it comfortable for exploring.",
      spring: "Spring (September to November) sees gradually warming temperatures and increasing humidity. The Amazon and Pantanal begin transitioning to their wet seasons, while southern Brazil experiences variable weather with occasional rainfall and temperatures ranging from 18-28°C (64-82°F).",
      fall: "Fall (March to May) is characterized by decreasing rainfall in most regions as the wet season ends. Temperatures remain warm throughout most of the country (20-30°C/68-86°F), with pleasant conditions and fewer tourists. This is an excellent time to visit the Amazon before the dry season intensifies."
    },
    majorCities: [
      {
        name: "Rio de Janeiro",
        description: "Known as the 'Marvelous City,' Rio is famous for its stunning setting between mountains and sea, featuring iconic landmarks like Christ the Redeemer statue, Sugarloaf Mountain, and the vibrant Copacabana and Ipanema beaches. The city pulses with samba rhythms, hosts the world's most famous Carnival, and offers a unique blend of urban excitement and natural beauty."
      },
      {
        name: "São Paulo",
        description: "Brazil's largest city and financial center is a cosmopolitan metropolis known for its world-class restaurants, vibrant cultural scene, and diverse neighborhoods. Home to prestigious museums like MASP (São Paulo Museum of Art), impressive architecture, and the largest Japanese community outside Japan, São Paulo offers sophisticated urban experiences and fantastic shopping."
      },
      {
        name: "Salvador",
        description: "The heart of Afro-Brazilian culture, Salvador enchants visitors with its colorful colonial architecture in the historic Pelourinho district, a UNESCO World Heritage site. Known for its energetic music scene, religious syncretism blending Catholic and African traditions, capoeira martial arts, and distinctive cuisine, Salvador provides an immersive cultural experience unlike anywhere else in Brazil."
      },
      {
        name: "Brasília",
        description: "The planned capital city, inaugurated in 1960, is a UNESCO World Heritage site renowned for its modernist architecture designed by Oscar Niemeyer. With its airplane-shaped urban plan, futuristic buildings like the Cathedral of Brasília and National Congress, and carefully designed residential and administrative sectors, the city showcases a unique vision of urban planning."
      },
      {
        name: "Manaus",
        description: "The gateway to the Amazon rainforest, Manaus rose to prominence during the rubber boom of the late 19th century. The city features the opulent Amazon Theatre (Teatro Amazonas), the Meeting of the Waters where the Rio Negro and Amazon rivers flow side by side without mixing, and serves as the departure point for jungle expeditions and river cruises."
      }
    ],
    famousFor: [
      "Amazon Rainforest - World's largest tropical rainforest with unparalleled biodiversity",
      "Carnival - Spectacular annual festival with parades, samba, and colorful costumes",
      "Football (Soccer) - Five-time World Cup champions with a passionate football culture",
      "Beaches - 7,500 kilometers of coastline featuring iconic beaches like Copacabana and Ipanema",
      "Christ the Redeemer - Iconic 30-meter statue overlooking Rio de Janeiro"
    ],
    topAttractions: [
      {
        name: "Amazon Rainforest",
        description: "The world's largest tropical rainforest covers about 60% of Brazil and houses over 40,000 plant species, 1,300 bird species, and countless mammals, insects, and amphibians. Visitors can explore this incredible ecosystem through river cruises, jungle lodges, and guided tours from gateway cities like Manaus, experiencing indigenous communities, spotting pink river dolphins, and discovering the rich biodiversity.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Iguaçu Falls",
        description: "One of the world's most spectacular waterfall systems, consisting of 275 falls along 2.7 kilometers of the Iguaçu River. The Brazilian side offers panoramic views of these thundering cascades surrounded by rainforest, with the massive 'Devil's Throat' being particularly awe-inspiring. The surrounding national park is home to diverse wildlife including coatis, toucans, and butterflies.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Christ the Redeemer & Sugarloaf Mountain",
        description: "Rio's iconic 30-meter Art Deco statue of Jesus Christ stands atop Corcovado Mountain, offering breathtaking panoramic views of the city. Nearby, the granite peak of Sugarloaf Mountain can be reached by cable car, providing another spectacular vantage point. Together, these landmarks showcase Rio's extraordinary setting between mountains, forests, and sea.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Pantanal Wetlands",
        description: "The world's largest tropical wetland area offers Brazil's best wildlife viewing opportunities. Unlike the dense Amazon, the open landscapes of the Pantanal make it easier to spot animals like jaguars, capybaras, giant anteaters, and hundreds of bird species. Visitors can explore by boat, horseback, or safari vehicle, with the dry season (April to September) offering optimal wildlife viewing.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Historic Salvador",
        description: "The colorful colonial center of Salvador (Pelourinho) features cobblestone streets, pastel-colored buildings, ornate churches, and lively squares. As Brazil's first capital and a major port for the slave trade, Salvador showcases the rich Afro-Brazilian culture through music, dance, cuisine, and religious practices. Don't miss the São Francisco Church with its spectacular gold-covered interior.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Brazilian cuisine varies greatly by region, reflecting the country's size and cultural diversity. Rich in flavors and influences from Indigenous, African, Portuguese, and other immigrant culinary traditions, Brazilian food is characterized by the use of tropical fruits, cassava, beans, rice, and various meats. Meals are often social affairs, with barbecue (churrasco) being particularly popular for gatherings. Street food culture is vibrant throughout the country, offering affordable and delicious quick bites.",
      famousDishes: [
        "Feijoada - A hearty black bean stew with various cuts of pork, typically served with rice, collard greens, farofa (toasted cassava flour), and orange slices",
        "Churrasco - Brazilian barbecue featuring various cuts of meat slowly roasted on skewers and carved tableside at specialized restaurants called churrascarias",
        "Moqueca - Fragrant seafood stew cooked with coconut milk, palm oil, tomatoes, onions, and cilantro, typically served with rice",
        "Pão de Queijo - Cheese bread made with cassava flour and cheese, resulting in small, puffy rolls with a crispy exterior and chewy interior",
        "Açaí Bowl - Frozen and mashed açaí berry pulp topped with granola, banana slices, and other fruits, popular as a healthy energy-boosting snack"
      ]
    },
    culturalCustoms: [
      "Beijinho - The greeting kiss on each cheek (number varies by region) is common among friends and even when meeting someone for the first time",
      "Brazilian Time - Punctuality is flexible, with social gatherings often starting 30 minutes to an hour later than the stated time",
      "Jeitinho Brasileiro - The Brazilian way of navigating challenges through improvisation, creativity, and personal relationships",
      "Football Passion - More than just a sport, football (soccer) is a cultural institution that unites the nation, especially during World Cup tournaments",
      "Music and Dance - Various musical styles like samba, bossa nova, and forró are integral to Brazilian identity, with impromptu dance gatherings common"
    ],
    travelTips: [
      "Learn basic Portuguese phrases - While English is spoken in tourist areas, knowing a few words goes a long way",
      "Be vigilant in urban areas - Keep valuables secure and be aware of your surroundings, especially in major cities",
      "Use registered taxis or ride-sharing apps for transportation in cities",
      "Carry cash for smaller establishments - Credit cards are widely accepted in cities but may not be in rural areas",
      "Stay hydrated and use sun protection - The tropical climate can be intense, especially during summer months",
      "Validate your return ticket and ensure your passport is valid for at least six months beyond your stay"
    ],
    safetyInfo: "Brazil has security challenges in urban areas, with pickpocketing and theft being concerns in tourist destinations. Visitors should exercise caution, especially in major cities like Rio de Janeiro and São Paulo, by avoiding isolated areas, not displaying valuable items, and using official taxis or ride-sharing services. Favelas (informal settlements) should only be visited with reputable guided tours. Rural and natural areas are generally safer, though standard wilderness precautions apply in the Amazon and other remote regions. Always check current travel advisories before visiting, as security conditions can vary.",
    sustainableTourism: "Brazil faces significant environmental challenges, particularly regarding Amazon deforestation and biodiversity loss. Sustainable tourism initiatives are growing, with eco-lodges, community-based tourism, and conservation-focused tours available throughout the country. Travelers can contribute by choosing operators certified for environmental and social responsibility, respecting indigenous territories, avoiding products made from endangered species, and supporting local conservation projects. When visiting fragile ecosystems like the Amazon and Pantanal, select low-impact tours that employ local guides and contribute to community development and conservation efforts.",
    visaRequirements: "Citizens of many countries, including the United States, Canada, Australia, and most European nations, do not need a visa for tourist stays of up to 90 days. Travelers must have a passport valid for at least six months beyond their stay and proof of onward travel. All visitors must complete an immigration card upon arrival, which must be retained until departure. For current requirements, check with the Brazilian consulate in your country before traveling, as regulations can change. Some nationalities still require tourist visas obtained in advance.",
    budget: {
      budget: "150-300 BRL ($30-60 USD) per day for hostels, public transportation, and inexpensive meals",
      midRange: "300-600 BRL ($60-120 USD) per day for mid-range hotels, occasional tours, and restaurant dining",
      luxury: "600+ BRL ($120+ USD) per day for upscale accommodations, private tours, and fine dining"
    },
    transportationOptions: [
      "Domestic Flights - Essential for covering long distances, with extensive networks connecting major cities",
      "Buses - Comprehensive intercity bus system with various comfort levels from basic to luxury coaches",
      "Taxis and Ride-sharing - Widely available in cities, with apps like Uber operating in most urban areas",
      "Metro Systems - Available in major cities like São Paulo and Rio de Janeiro",
      "Rental Cars - Good option for exploring specific regions, though not recommended for newcomers in large cities",
      "Boats and Ferries - Essential for exploring the Amazon region and reaching coastal islands"
    ],
    neighboringCountries: [
      "Argentina", "Bolivia", "Colombia", "French Guiana (France)", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Rainforest", "Beaches", "Wildlife", "Cultural Heritage", "Carnival",
    "Adventure", "Ecotourism", "Cuisine", "Music", "Indigenous Culture"
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

export default BrazilCountry; 