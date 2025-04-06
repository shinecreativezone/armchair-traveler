import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const EgyptCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Egypt",
    slug: "egypt",
    continent: "Africa/Asia",
    capital: "Cairo",
    languageOfficial: "Arabic",
    languagesSpoken: ["Arabic", "English", "French", "Nubian languages", "Bedouin Arabic"],
    currency: "Egyptian Pound (EGP)",
    population: 104200000,
    area: 1001450,
    timeZones: ["UTC+2 (Eastern European Time)"],
    callingCode: "+20",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2016/01/29/17/49/banner-1168019_1280.jpg",
    description: "Egypt, one of the world's oldest civilizations, straddles northeast Africa and the southwest corner of Asia via the Sinai Peninsula. With a history spanning over 5,000 years, this transcontinental nation is home to the iconic Nile River, ancient pyramids, and a rich cultural heritage that has fascinated the world for millennia. Modern Egypt combines its pharaonic past with Islamic traditions and contemporary challenges, creating a unique and complex society at the crossroads of African, Mediterranean, and Middle Eastern cultures.",
    whyVisit: "Egypt offers travelers an unparalleled journey through time, from the magnificent pyramids of Giza and the enigmatic Sphinx to the treasures of Tutankhamun and the temples of Luxor. The Nile River provides a serene backdrop for exploring ancient wonders, while the vibrant chaos of Cairo showcases contemporary Egyptian life. Beyond historical sites, visitors can experience world-class diving in the Red Sea, desert adventures in the Sahara, and the distinct cultures of Nubian villages and Bedouin communities. With its combination of archaeological marvels, natural beauty, and warm hospitality, Egypt presents a travel experience that has captivated explorers for centuries.",
    majorCities: [
      {
        name: "Cairo",
        description: "Egypt's sprawling capital is a vibrant metropolis where ancient history meets modern urban life. Home to over 20 million people in its greater area, Cairo features the nearby Giza pyramids, the Egyptian Museum with its priceless antiquities, the medieval Islamic district with its ornate mosques and bazaars, and the Nile Corniche. The city's sensory intensity—with its bustling markets, honking traffic, and mingling scents of spices and street food—offers an authentic immersion into Egyptian daily life."
      },
      {
        name: "Alexandria",
        description: "Founded by Alexander the Great in 331 BCE, this Mediterranean coastal city was once home to the ancient world's greatest library and the legendary Pharos lighthouse. Modern Alexandria retains its cosmopolitan character with European-influenced architecture, beautiful beaches, and cultural institutions like the ultra-modern Bibliotheca Alexandrina. The city's seafood restaurants, café culture, and relaxed atmosphere provide a distinct contrast to Cairo, while Greco-Roman ruins and catacombs offer glimpses into its multilayered past."
      }
    ],
    famousFor: [
      "Pyramids of Giza - Ancient wonders and the only surviving structures of the Seven Wonders of the Ancient World",
      "Nile River - World's longest river and the lifeblood of Egyptian civilization",
      "Ancient Egyptian civilization - One of the world's oldest and most influential cultures",
      "Temples and tombs - Magnificent structures like Karnak, Luxor, and the Valley of the Kings",
      "Red Sea coral reefs - World-class diving and snorkeling destinations"
    ],
    topAttractions: [
      {
        name: "Pyramids of Giza & the Sphinx",
        description: "These iconic monuments stand on the outskirts of Cairo as enduring symbols of ancient Egyptian power and engineering prowess. The Great Pyramid of Khufu (Cheops), built around 2560 BCE, is the only surviving structure from the Seven Wonders of the Ancient World. Alongside it stand the pyramids of Khafre and Menkaure, while the enigmatic Great Sphinx keeps watch nearby. Visitors can enter select pyramids, ride camels around the complex, and witness the nightly sound and light show illuminating these ancient wonders.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Luxor Temple & Karnak Complex",
        description: "Often described as the world's greatest open-air museum, Luxor contains some of Egypt's most magnificent ancient temples. The massive Karnak Complex, built over centuries by different pharaohs, features enormous columns, obelisks, and intricate hieroglyphics. Luxor Temple, particularly beautiful when illuminated at night, connects to Karnak via the Avenue of Sphinxes. On the West Bank, the Valley of the Kings contains 63 royal tombs, including that of Tutankhamun, while the mortuary temple of Queen Hatshepsut showcases remarkable architectural innovation.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Egyptian cuisine reflects the country's crossroads position between Africa, the Mediterranean, and the Middle East, with a culinary tradition stretching back thousands of years. Based on abundant vegetables, legumes, and bread, Egyptian food is hearty, flavorful, and typically less spicy than other Middle Eastern cuisines. Meals are social affairs, often shared from communal dishes, with lunch traditionally being the main meal of the day. Street food culture is vibrant, particularly in Cairo, offering affordable and authentic local flavors.",
      famousDishes: [
        "Koshari - Egypt's national dish combining rice, lentils, macaroni, chickpeas, and tomato sauce topped with crispy onions",
        "Ful Medames - Slow-cooked fava beans seasoned with olive oil, lemon juice, and spices, typically eaten for breakfast",
        "Molokhia - A distinctive green soup made from jute leaves, typically served with chicken or rabbit and rice",
        "Ta'ameya - The Egyptian version of falafel, made from fava beans rather than chickpeas",
        "Om Ali - A sweet bread pudding with nuts, coconut, and raisins, considered Egypt's national dessert"
      ]
    },
    culturalCustoms: [
      "Hospitality - Offering tea, coffee, or food to guests is considered essential, and refusing can be impolite",
      "Conservative Dress - Modest clothing is appreciated, particularly for women and when visiting religious sites",
      "Religious Observance - During Ramadan, eating, drinking, and smoking in public during daylight hours should be avoided",
      "Greetings - Handshakes are common, though men should wait for women to extend their hand first",
      "Bargaining - Negotiating prices is expected in markets and with taxis, but should be conducted with good humor"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Ancient Ruins", "Desert", "River Cruise", "Archaeological", "Islamic Culture",
    "Beaches", "Diving", "Museums", "Historical", "Architecture"
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

export default EgyptCountry; 