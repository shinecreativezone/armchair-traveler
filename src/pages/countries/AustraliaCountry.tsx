import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AustraliaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Australia",
    slug: "australia",
    continent: "Oceania",
    capital: "Canberra",
    languageOfficial: "English",
    languagesSpoken: ["English", "Mandarin", "Arabic", "Cantonese", "Vietnamese"],
    currency: "Australian Dollar (AUD)",
    population: 25690000,
    area: 7692024,
    timeZones: ["GMT+8 to GMT+10:30"],
    callingCode: "+61",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2016/01/29/17/49/banner-1168019_1280.jpg",
    description: "Australia is the world's sixth-largest country by total area and the largest in Oceania. With a diverse landscape spanning from arid outback to lush rainforests and iconic coastal regions, Australia offers extraordinary natural beauty and unique wildlife found nowhere else on Earth. Home to one of the world's oldest continuous cultures in indigenous Australians, as well as diverse communities from global migration, Australia blends ancient heritage with modern cosmopolitan cities.",
    whyVisit: "Australia offers travelers an unparalleled combination of natural wonders, pristine beaches, unique wildlife, and vibrant cities. From the iconic Sydney Opera House to the otherworldly landscapes of Uluru and the Great Barrier Reef—the world's largest coral reef system—Australia's diverse attractions cater to adventurers, nature lovers, and cultural enthusiasts alike. Visitors can experience Aboriginal cultural heritage dating back at least 65,000 years, explore world-class wine regions, encounter kangaroos and koalas in their natural habitats, and enjoy the laid-back yet sophisticated atmosphere of cities like Melbourne, Sydney, and Perth.",
    bestTimeToVisit: {
      text: "The best time to visit Australia depends on the region, as the continent spans multiple climate zones. Spring (September to November) and autumn (March to May) offer pleasant temperatures across most of the country. Summer (December to February) is ideal for beach activities but can be extremely hot in the Outback, while winter (June to August) is perfect for visiting the tropical north and skiing in the mountains.",
      months: ["March", "April", "May", "September", "October", "November"]
    },
    weatherInfo: {
      summer: "Summer (December to February) brings hot conditions across most of Australia. Southern cities like Sydney and Melbourne experience temperatures of 25-35°C (77-95°F), while the Outback can reach well over 40°C (104°F). Northern tropical regions have high humidity and rainfall during this monsoon season.",
      winter: "Winter (June to August) varies dramatically across the continent. Southern states experience cool temperatures from 5-15°C (41-59°F), with snow in alpine regions. Northern areas remain warm with temperatures of 20-30°C (68-86°F) and low humidity, making it an ideal time to visit tropical regions.",
      spring: "Spring (September to November) offers mild temperatures throughout much of Australia, with wildflowers blooming in Western Australia and gradually warming conditions. Southern cities enjoy temperatures from 15-25°C (59-77°F), while the north remains warm at 25-32°C (77-90°F).",
      fall: "Autumn (March to May) is characterized by cooling temperatures and changing foliage in temperate regions. It's also grape harvest season in wine regions. Southern cities experience pleasant conditions from 15-25°C (59-77°F), while the tropical north transitions from wet to dry season."
    },
    majorCities: [
      {
        name: "Sydney",
        description: "Australia's largest city, renowned for its iconic Opera House, Harbour Bridge, and stunning beaches including Bondi and Manly. Sydney blends urban sophistication with coastal lifestyle, offering world-class dining, cultural venues, and beautiful harbor views, all within easy reach of national parks and the Blue Mountains."
      },
      {
        name: "Melbourne",
        description: "A cultural powerhouse known for its vibrant arts scene, laneway cafes, and Victorian architecture. Consistently ranked among the world's most livable cities, Melbourne is famous for its street art, diverse food scene influenced by waves of immigration, sporting events like the Australian Open, and distinctive neighborhoods each with their own character."
      },
      {
        name: "Brisbane",
        description: "The capital of Queensland offers a subtropical climate and outdoor lifestyle centered around the Brisbane River. The city combines urban attractions like the South Bank cultural precinct with easy access to the Gold Coast and Sunshine Coast beaches, as well as serving as a gateway to the Great Barrier Reef."
      },
      {
        name: "Perth",
        description: "One of the world's most isolated major cities, Perth offers pristine beaches, Kings Park (one of the world's largest urban parks), and a relaxed lifestyle. Located on the Swan River with access to Margaret River wine region and stunning Rottnest Island, it combines metropolitan amenities with natural attractions."
      },
      {
        name: "Adelaide",
        description: "Known as the 'City of Churches,' Adelaide features elegant colonial architecture, parklands, and a thriving festival scene. Surrounded by the Barossa and Clare Valley wine regions, the city offers cultural institutions, a distinctive food scene, and is known for its planned layout and Mediterranean climate."
      }
    ],
    famousFor: [
      "Great Barrier Reef - World's largest coral reef system stretching over 2,300 kilometers",
      "Sydney Opera House - Iconic architectural masterpiece and UNESCO World Heritage site",
      "Uluru (Ayers Rock) - Sacred monolithic sandstone formation in the heart of the Outback",
      "Unique Wildlife - Home to kangaroos, koalas, platypuses, and other endemic species",
      "Aboriginal Culture - One of the world's oldest continuous living cultures dating back at least 65,000 years"
    ],
    topAttractions: [
      {
        name: "Great Barrier Reef",
        description: "The world's largest coral reef system comprising over 2,900 individual reefs and 900 islands stretching for 2,300 kilometers. This UNESCO World Heritage site offers unparalleled marine biodiversity with over 1,500 fish species, 400 coral types, and opportunities for snorkeling, diving, and glass-bottom boat tours.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Uluru-Kata Tjuta National Park",
        description: "Home to the iconic 348-meter-high sandstone monolith Uluru and the 36 red rock domes of Kata Tjuta (The Olgas). This UNESCO World Heritage site holds profound spiritual significance for indigenous Australians, with spectacular color changes at sunrise and sunset, and opportunities to learn about Aboriginal culture and ancient rock art.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sydney Opera House",
        description: "A masterpiece of 20th-century architecture, this performing arts center features distinctive sail-shaped shells that have made it Australia's most recognizable building. Located at Sydney Harbour, it hosts over 1,500 performances annually across its multiple venues, and offers tours of its unique design and engineering.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Twelve Apostles",
        description: "Magnificent limestone stacks rising dramatically from the Southern Ocean along Victoria's Great Ocean Road. Formed by erosion over millions of years, these towering formations (now numbering fewer than twelve) are best viewed at sunrise or sunset when the changing light creates spectacular visual effects.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Daintree Rainforest",
        description: "The world's oldest tropical rainforest, estimated to be over 180 million years old, located in Queensland. This UNESCO World Heritage site features extraordinary biodiversity with ancient plant species, unique wildlife including cassowaries and tree-kangaroos, pristine beaches where rainforest meets reef, and opportunities to experience indigenous culture.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Australian cuisine combines fresh, high-quality ingredients with diverse international influences, particularly from Europe and Asia. Modern Australian food ('Mod Oz') features innovative fusion dishes using native ingredients like bush tomatoes, wattleseed, and finger limes alongside seafood, lamb, and beef. A strong café culture exists throughout Australia, with exceptional coffee being a point of national pride. Regional food experiences vary from tropical fruits in Queensland to seafood in Tasmania and world-class wines in South Australia.",
      famousDishes: [
        "Meat Pie - A savory pastry filled with minced meat, gravy, and sometimes mushrooms or cheese, often enjoyed at sporting events",
        "Barramundi - A native fish prized for its sweet, buttery flavor, typically grilled or pan-fried with local herbs",
        "Lamington - Sponge cake cubes coated in chocolate and rolled in desiccated coconut, sometimes filled with jam or cream",
        "Pavlova - A meringue-based dessert with a crisp crust and soft interior, topped with whipped cream and fresh fruit",
        "Vegemite on Toast - A breakfast staple featuring a savory, concentrated yeast spread known for its distinctive umami flavor"
      ]
    },
    culturalCustoms: [
      "Casual Social Style - Australians are generally informal and value egalitarianism, often using first names even in professional settings",
      "Beach Culture - Beaches are central to Australian identity, with specific etiquette around swimming between the flags for safety",
      "BBQ Gatherings - The 'barbie' is a social institution, often held in public parks with shared food and BYO (bring your own) drinks",
      "Sport Enthusiasm - Cricket, Australian Rules Football, rugby, and swimming are major parts of national culture and identity",
      "Indigenous Recognition - Acknowledgment of Country or Welcome to Country ceremonies are increasingly common at events, recognizing traditional owners of the land"
    ],
    travelTips: [
      "Apply for an Electronic Travel Authority (ETA) or appropriate visa well before travel",
      "Remember that seasons are opposite to the Northern Hemisphere - Christmas occurs in summer",
      "Take sun protection seriously - Australia has high UV levels and skin cancer rates",
      "Respect wildlife and never feed or approach animals in the wild",
      "Be aware of distance between destinations - Australia is similar in size to the continental United States",
      "Tipping is not mandatory but appreciated for exceptional service (10-15%)"
    ],
    safetyInfo: "Australia is generally very safe for travelers, with low crime rates in most areas and excellent healthcare facilities. The main safety concerns are natural - strong ocean currents at beaches (always swim between the flags), intense sun (use high SPF sunscreen, hat, and sunglasses), and wildlife (follow all warning signs). Remote areas require preparation with adequate water, supplies, and communication devices. Australia has strict biosecurity laws, so declare all food, plant material, and animal products upon arrival. Bushfires can affect travel during summer months in southern regions, so monitor alerts during fire season.",
    sustainableTourism: "Australia has numerous eco-certified tourism operations focused on minimal environmental impact and cultural sensitivity. Visitors can contribute to sustainability by choosing accommodations and tours with environmental certifications, respecting Aboriginal cultural protocols when visiting sacred sites, avoiding single-use plastics (particularly important near marine environments), conserving water especially in drought-prone areas, and supporting conservation efforts through wildlife sanctuaries and national parks. Many tour operators contribute portions of proceeds to conservation efforts, particularly around the Great Barrier Reef and koala habitat preservation.",
    visaRequirements: "Most visitors to Australia require either an Electronic Travel Authority (ETA) or eVisitor visa, which can be applied for online before travel. These are generally available to tourists from most developed nations for stays up to 3 months. Travelers from other countries may need to apply for a Visitor Visa (subclass 600). Working Holiday visas are available for eligible travelers aged 18-30 (or 35 for some countries). All visas must be obtained before arrival, as visas are not issued on arrival. A valid passport with at least six months validity beyond the planned departure date is required.",
    budget: {
      budget: "100-150 AUD ($65-100 USD) per day for hostel accommodation, public transportation, and budget meals",
      midRange: "250-400 AUD ($165-265 USD) per day for mid-range hotels, occasional tours, and restaurant dining",
      luxury: "500+ AUD ($330+ USD) per day for luxury accommodations, exclusive experiences, and fine dining"
    },
    transportationOptions: [
      "Domestic Flights - Essential for covering long distances between major cities",
      "Rental Cars - Ideal for regional exploration, particularly along coastal routes and the Outback (4WD recommended for remote areas)",
      "Public Transit - Efficient in major cities with trains, trams, buses, and ferries",
      "Long-distance Coaches - Budget-friendly options connecting cities and towns",
      "Train Journeys - Scenic routes including The Ghan (Adelaide to Darwin) and Indian Pacific (Sydney to Perth)",
      "Campervans - Popular for extended road trips with flexibility to stay in camping grounds"
    ],
    neighboringCountries: [
      "New Zealand", "Papua New Guinea", "Indonesia", "East Timor"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Beach", "Wildlife", "Natural Wonders", "Aboriginal Culture", "Outback",
    "Island Exploration", "Wine Regions", "Surfing", "Diving", "Road Trips"
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

export default AustraliaCountry; 