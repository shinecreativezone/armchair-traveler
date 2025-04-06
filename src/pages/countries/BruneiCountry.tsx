import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BruneiCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Brunei",
    slug: "brunei",
    continent: "Asia",
    capital: "Bandar Seri Begawan",
    languageOfficial: "Malay",
    languagesSpoken: ["Malay", "English", "Chinese dialects", "Indigenous languages"],
    currency: "Brunei Dollar (BND)",
    population: 437479,
    area: 5765,
    timeZones: ["GMT+8 (Brunei Time)"],
    callingCode: "+673",
    drivingSide: "left" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2015/11/06/15/13/flag-1028137_1280.jpg",
    description: "Brunei is a small, oil-rich sultanate on the island of Borneo in Southeast Asia. Known for its pristine rainforests, opulent Islamic architecture, and wealthy, conservative society, Brunei offers visitors a glimpse into a unique blend of traditional Malay culture and modern Islamic values under the world's longest-reigning current monarch.",
    whyVisit: "Brunei presents travelers with a fascinating glimpse into a prosperous Islamic monarchy where centuries-old traditions blend seamlessly with oil-funded modernization. Unlike its more developed Southeast Asian neighbors, Brunei remains refreshingly authentic with pristine rainforests covering 70% of its territory, offering rare wildlife encounters without the crowds. The country's strict Islamic governance has preserved its cultural identity and created a remarkably safe, clean environment where gold-domed mosques and water villages contrast with modern infrastructure. Visitors can explore one of the world's largest residential palaces, witness traditional water village life virtually unchanged for centuries, and experience some of Borneo's most accessible primary rainforest. The absence of alcohol and nightlife creates a family-friendly destination focused on natural beauty, cultural heritage, and culinary exploration. With excellent infrastructure, widespread English fluency, and relatively few tourists, Brunei rewards travelers seeking alternative Southeast Asian experiences with meaningful cultural exchanges and natural wonders without the commercialization found elsewhere in the region.",
    bestTimeToVisit: {
      text: "The best time to visit Brunei is during the dry season from February to April when rainfall is minimal and temperatures average 30°C (86°F). This period offers optimal conditions for rainforest trekking and outdoor activities. The secondary dry season from June to August is also pleasant, though slightly rainier. Avoid the monsoon season (October to January) when heavy downpours can disrupt outdoor plans.",
      months: ["February", "March", "April", "June", "July", "August"]
    },
    weatherInfo: {
      summer: "Summer (June to August) brings typically hot and humid conditions with temperatures around 28-33°C (82-91°F). While technically part of the wet season, these months see moderate rainfall compared to the year's end. Humidity remains high (around 75-80%), making early morning or evening the most comfortable times for outdoor activities. Brief afternoon showers are common but generally don't last long enough to disrupt plans significantly.",
      winter: "Winter (December to February) in Brunei is characterized by the northeast monsoon, particularly in December and January. Temperatures remain warm at 24-32°C (75-90°F), but rainfall increases significantly, especially in December. February marks the beginning of the dry season with decreasing precipitation. Despite being the 'winter' months, temperatures never drop to cold levels, maintaining the tropical climate year-round.",
      spring: "Spring (March to May) represents the primary dry season and the best time to visit Brunei. Temperatures range from 25-33°C (77-91°F) with lower humidity and minimal rainfall, especially in March and April. Clear skies prevail, offering optimal conditions for rainforest exploration and outdoor activities. However, UV levels are extremely high, making sun protection essential for visitors.",
      fall: "Fall (September to November) marks the transition into the wet season. September starts relatively moderate, while October and November see gradually increasing rainfall and humidity. Temperatures remain consistent at 25-32°C (77-90°F) throughout. This period features fewer tourists, but outdoor activities may be interrupted by afternoon thunderstorms that become more frequent and intense toward November."
    },
    majorCities: [
      {
        name: "Bandar Seri Begawan",
        description: "Brunei's capital and largest city combines Islamic grandeur with traditional water villages. Key landmarks include the magnificent Omar Ali Saifuddien Mosque with its marble minarets and artificial lagoon, the world's largest water village Kampong Ayer where 13,000 residents live in stilt houses, and the Royal Regalia Museum displaying the Sultan's lavish coronation artifacts. The city also features pristine Tasek Lama Recreational Park offering jungle hiking minutes from downtown, and Jame'Asr Hassanil Bolkiah Mosque—the country's largest with 29 golden domes representing Brunei's rulers."
      },
      {
        name: "Kuala Belait",
        description: "Brunei's second-largest city and center of the petroleum industry sits near the Malaysian border. The city features the Oil and Gas Discovery Centre providing interactive exhibits about the industry that transformed Brunei, Silver Jubilee Park with its observation tower offering panoramic views of South China Sea beaches, and nearby Anduki Recreational Area with its sandhills. Kuala Belait offers a more relaxed atmosphere than the capital and serves as gateway to natural attractions like Luagan Lalak Lake and Teraja Waterfalls."
      },
      {
        name: "Seria",
        description: "Located between Kuala Belait and Tutong, Seria is the heart of Brunei's onshore oil production. The Billionth Barrel Monument commemorates this industry milestone achieved in 1991, while Seria Energy Lab provides educational insights into petroleum science and Brunei's energy history. The town's highlight is Seria Oil Field with its distinctive nodding donkey oil pumps visible throughout the landscape. Nearby Anduki Wetlands offer excellent birdwatching opportunities with boardwalks through mangrove ecosystems adjacent to petroleum facilities."
      },
      {
        name: "Tutong",
        description: "The main town of Brunei's central district blends traditional Malay culture with Chinese and indigenous influences. Attractions include Tasek Merimbun—Brunei's largest natural lake and an ASEAN Heritage Site surrounded by peat swamp forest, the Seri Kenangan Beach with its distinctive black sand, and nearby Bukit Ladan Forest Recreation Park offering jungle treks to waterfalls. The town provides excellent opportunities to experience authentic local life through its vibrant Tutong Market and craftspeople producing traditional woven products."
      },
      {
        name: "Temburong",
        description: "While technically a district rather than a city, Bangar town serves as the administrative center of Temburong—Brunei's eastern exclave separated from the rest by Malaysia's Limbang district. The area is known for Ulu Temburong National Park, which protects pristine primary rainforest accessible via longboat rides through mangrove channels. The district offers Brunei's most authentic nature experiences including the renowned canopy walkway providing views over unbroken jungle canopy, and encounters with indigenous Iban communities maintaining traditional lifestyles."
      }
    ],
    famousFor: [
      "Sultan Omar Ali Saifuddien Mosque - one of Southeast Asia's most magnificent Islamic structures",
      "Kampong Ayer - the world's largest water village with 13,000 residents living in stilt houses",
      "Istana Nurul Iman - the world's largest residential palace and home to the Sultan",
      "Ulu Temburong National Park - pristine primary rainforest with canopy walkway",
      "Oil wealth and high standard of living with no income tax and free education and healthcare"
    ],
    topAttractions: [
      {
        name: "Sultan Omar Ali Saifuddien Mosque",
        description: "This architectural masterpiece represents the heart of Brunei's Islamic identity and stands as one of Southeast Asia's most magnificent mosques. Completed in 1958, the mosque features a gleaming golden dome, white marble exterior, and Italian marble floors complemented by English chandeliers and Arabian carpets. Surrounded by an artificial lagoon that enhances its beauty through mirror-like reflections, the mosque also features a ceremonial stone boat in the lagoon—a replica of a 16th-century royal barge. Rising 52 meters, the main minaret blends Mughal and Italian architectural influences while incorporating geometric Islamic patterns. The interior accommodates 3,000 worshippers with spaces divided for men and women according to Islamic tradition. At night, carefully designed lighting transforms the mosque into an ethereal landmark visible throughout the capital. While non-Muslims cannot enter during prayer times, visitors are welcome outside these hours if modestly dressed, offering a glimpse into Brunei's religious devotion and architectural achievement.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Kampong Ayer",
        description: "Known as the 'Venice of the East,' Kampong Ayer is the world's largest water village where approximately 13,000 people maintain a traditional lifestyle in houses built on stilts over the Brunei River. This network of 42 interconnected villages stretches for 8 kilometers and has existed for over 1,000 years, representing the historical heart of Brunei's civilization before land reclamation expanded the modern capital. The settlement features fully functioning infrastructure including schools, mosques, police stations, and fire departments—all built over water and connected by a network of wooden walkways and water taxi services. Traditional wooden homes painted in vibrant colors stand alongside modern structures with satellite dishes and air conditioning, demonstrating how residents blend traditional living with contemporary comforts. Visitors can explore the village via water taxi tours or wander the walkways, visit the cultural and tourism gallery showcasing traditional crafts, observe local boatbuilders practicing ancient techniques, and even arrange homestays with local families for an immersive experience of this unique community that has maintained its identity despite rapid modernization elsewhere in Brunei.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Ulu Temburong National Park",
        description: "Often called the 'Green Jewel of Brunei,' this pristine national park protects 50,000 hectares of untouched primary rainforest in Brunei's eastern Temburong District. Accessible only by boat and completely separated from the main part of Brunei by Malaysia's Limbang region, the park offers Borneo's most accessible virgin rainforest experience. The journey itself is part of the adventure—travelers take longboat rides through winding rivers lined with nipah palms and mangroves before hiking to the park's centerpiece: a 50-meter-high canopy walkway providing breathtaking views over unbroken jungle stretching to distant mountains. The park boasts extraordinary biodiversity including 400 butterfly species, numerous primates including rare proboscis monkeys and gibbons, and over 400 tree species within a single hectare. Visitors can experience refreshing waterfalls with natural pools perfect for swimming, guided night walks revealing nocturnal creatures, and scientific research facilities where international botanists study one of Earth's oldest rainforest ecosystems. As it requires advanced arrangements and can only accommodate limited numbers daily, Ulu Temburong offers an uncrowded, authentic wilderness experience increasingly rare in Southeast Asia.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Jame'Asr Hassanil Bolkiah Mosque",
        description: "Built to commemorate the 25th anniversary of the current Sultan's reign, this magnificent mosque is Brunei's largest and among the most impressive in Southeast Asia. Completed in 1994, the structure features 29 golden domes representing Brunei's rulers and four towering minarets rising 58 meters above meticulously landscaped gardens. The mosque accommodates 5,000 worshippers inside spaces adorned with Italian marble, hand-crafted mosaics, and intricate calligraphy, while exterior walls incorporate geometric patterns symbolizing Islamic mathematical traditions. Twenty-nine domes covered in 24-carat gold leaf create a stunning visual display especially at sunset when they glow brilliantly against the darkening sky. Surrounding the mosque, carefully designed gardens feature fountains, reflecting pools, and ceremonial walkways used during royal religious events. At night, sophisticated lighting transforms the structure into a luminous landmark visible throughout the city. The mosque welcomes non-Muslim visitors outside prayer times, providing traditional attire for those not dressed appropriately, offering a glimpse into both Brunei's religious devotion and its oil-funded architectural achievements.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Royal Regalia Museum",
        description: "Housed in a distinctive domed building in central Bandar Seri Begawan, this museum showcases the extraordinary wealth and royal traditions of Brunei's monarchy. The centerpiece is a detailed recreation of the Sultan's 1968 coronation, complete with the original golden chariot that carried him through the streets, ceremonial regalia, and jewel-encrusted crowns. Another gallery displays extravagant gifts presented to the Sultan by world leaders and dignitaries, ranging from solid gold models of petroleum platforms to intricate crystal works and ceremonial weapons, offering insight into international diplomatic relations. The Constitutional History Gallery documents Brunei's evolution from British protectorate to independent sultanate through historical photographs, documents, and interactive displays. A special collection showcases the current Sultan's life through personal items, photographs from state occasions, and displays of royal ceremonial attire featuring gold thread embroidery and precious stones. The museum provides complimentary guided tours in English, and visitors must remove shoes before entering the main galleries, where photography is prohibited to protect the valuable collections that represent Brunei's royal heritage and modern identity as a wealthy Islamic monarchy.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Bruneian cuisine reflects the nation's multicultural heritage with Malay foundations enriched by Chinese, Indian, and indigenous influences. Rice serves as the staple, typically accompanied by richly spiced meat or fish dishes. Seafood features prominently due to Brunei's coastal location, often prepared with local herbs and spices including turmeric, lemongrass, galangal, and tamarind. As a devoutly Muslim country, all food is halal, with pork absent and alcohol prohibited. Traditional cooking methods emphasize slow cooking, grilling over charcoal, and wrapping ingredients in banana leaves to enhance flavor. Street food and night markets offer affordable authentic experiences, while high-end restaurants blend traditional flavors with contemporary presentation. During Ramadan, special dishes appear for breaking the fast, and communal dining experiences become more prominent. Royal Bruneian cuisine—a refined version of local dishes once reserved for the palace—can now be experienced in select restaurants, featuring elaborate presentations and premium ingredients.",
      famousDishes: [
        "Ambuyat - Brunei's national dish consisting of a starchy ball made from sago palm served with cacah (spicy sour dipping sauce) and eaten using a two-pronged bamboo fork called chandas",
        "Nasi Katok - A simple but popular meal of fried chicken, spicy sambal sauce, and rice wrapped in brown paper, available throughout the country at very affordable prices",
        "Kelupis - Glutinous rice cooked with coconut milk, wrapped in nyirik leaves in a distinctive triangular shape, and typically served with grilled fish or meat",
        "Rendang - Slow-cooked beef or buffalo in coconut milk and spices until the liquid evaporates, leaving intensely flavored, tender meat",
        "Kuih Cincin - A circular, flower-shaped deep-fried pastry made from rice flour, coconut, and brown sugar with a crunchy exterior and chewy interior"
      ]
    },
    culturalCustoms: [
      "As a devout Islamic country, modest dress is expected—clothing should cover shoulders to knees, especially when visiting religious sites",
      "Remove shoes before entering mosques, homes, and some businesses where indicated",
      "Public displays of affection between couples are inappropriate and should be avoided",
      "The left hand is considered unclean; always use the right hand for eating, passing objects, or gesturing",
      "Bruneians use titles and honorifics when addressing others; using someone's first name without a title can be considered disrespectful"
    ],
    travelTips: [
      "Brunei has extremely strict anti-drug laws including the death penalty; avoid carrying any medications without proper prescriptions",
      "Alcohol is prohibited throughout the country, though non-Muslims can bring limited quantities for personal consumption",
      "Taxis have fixed fares rather than meters; agree on prices before starting your journey",
      "Carry water and sun protection when exploring outdoors as the humid tropical climate can cause rapid dehydration",
      "Brunei is extremely safe with virtually no violent crime, but be aware that even minor infractions of religious or cultural norms can result in fines",
      "The Brunei Dollar is pegged to the Singapore Dollar, and both currencies are accepted interchangeably throughout the country"
    ],
    safetyInfo: "Brunei ranks among the safest countries in Asia with negligible violent crime, making it ideal for solo travelers and families. The capital experiences virtually no street crime, and visitors can walk safely even at night. Traffic accidents pose the greatest risk to tourists, especially on rural roads where wildlife crossings are common. Penalties for drug offenses are extremely severe, including the death penalty for trafficking. As a strict Islamic country, public behavior is regulated—modest dress is required, public displays of affection are inappropriate, and criticism of the monarchy or Islam should be avoided entirely. Religious restrictions intensified with the 2019 Sharia penal code implementation, though these laws primarily affect Bruneian citizens rather than visitors. LGBT travelers should exercise discretion as same-sex relationships are illegal. Health risks are minimal with excellent medical facilities, clean drinking water in urban areas, and low incidence of tropical diseases compared to neighboring countries. Natural hazards include intense heat, occasional flooding during monsoon season, and wildlife encounters in national parks. Emergency services are efficient with English-speaking operators available by calling 991 for medical emergencies or 993 for police.",
    sustainableTourism: "Brunei's approach to tourism emphasizes environmental preservation and cultural authenticity over mass development. The country has protected 70% of its rainforest, creating a sustainable ecotourism model focused on conservation. Ulu Temburong National Park represents this commitment, allowing only limited daily visitors to minimize impact on pristine primary rainforest. The government's 'Brunei Darussalam Tourism Masterplan' prioritizes responsible tourism development that balances economic benefits with environmental protection and cultural integrity. Many tour operators are locally owned, ensuring tourism revenue benefits communities. When selecting accommodations and tours, look for businesses certified by Brunei Tourism for sustainable practices. Travelers can support sustainability by choosing guided experiences with qualified local guides, respecting cultural sensitivities including modest dress and behavior, avoiding single-use plastics which are still common in Brunei, selecting seafood meals from sustainable sources, and learning about local conservation challenges through visits to educational centers like the Sungai Liang Forestry Centre. Visitors interested in cultural sustainability should explore authentic craft producers in Kampong Ayer and rural districts where traditional techniques are being preserved.",
    visaRequirements: "Visitors from many countries including the United States, Canada, European Union nations, Australia, New Zealand, Japan, and most Southeast Asian nations receive visa-free entry for stays up to 90 days. Travelers need a passport valid for six months beyond their planned departure date with at least one blank page. Those requiring visas should apply at Bruneian diplomatic missions before travel; e-visa services are also available online. All visitors must show proof of onward/return travel and sufficient funds for their stay. Entry by land from Malaysia requires completing immigration formalities at border checkpoints, where visitors' passports are stamped. Those entering by ferry from Limbang (Malaysia) to Bangar (Temburong District) must go through similar procedures. Visitors planning extended stays for work or study need specialized visas arranged before arrival. Upon entry, visitors receive an immigration card to be retained until departure. Those wishing to visit the exclusive Jerudong Park royal grounds or attend palace events during the annual three-day Hari Raya open house need special permission arranged through hotels or tour operators.",
    budget: {
      budget: "$30-60 (BND 40-80) per day for dormitory accommodation or budget hotels, street food and local transportation",
      midRange: "$100-200 (BND 130-270) per day for mid-range hotels, restaurant meals, organized day tours, and taxi transportation",
      luxury: "$250+ (BND 340+) per day for luxury hotels, fine dining, private guides, exclusive experiences, and car rentals"
    },
    transportationOptions: [
      "Taxis with fixed rates (no meters) are available in major towns, with higher prices for inter-city travel",
      "Public buses run limited routes in the capital area for very low fares but have reduced service on Fridays and holidays",
      "Water taxis are essential for visiting Kampong Ayer water village and some remote areas",
      "Car rentals require an International Driving Permit and offer the most flexibility for exploring beyond major centers",
      "App-based ride services like Dart (Brunei's local version of Uber) operate in urban areas"
    ],
    neighboringCountries: [
      "Malaysia (surrounds Brunei on land borders, with Malaysian state of Sarawak dividing Brunei into two parts)",
      "Indonesia (shares maritime boundary)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Islamic Architecture", "Natural Wonders", "Cultural Experience", "Rainforest", "Wildlife Viewing",
    "Photography", "Heritage Sites", "Luxury Travel", "Ecotourism", "Unique Cuisine"
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

export default BruneiCountry; 