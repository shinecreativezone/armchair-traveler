
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BahrainCountry = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[50vh] rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1547158291-06774526756c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Bahrain skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-2">
                  <img 
                    src="https://flagcdn.com/w80/bh.png" 
                    alt="Flag of Bahrain" 
                    className="w-10 h-6 object-cover rounded shadow-sm"
                  />
                  <h1 className="text-4xl font-bold text-white">Bahrain</h1>
                </div>
                <p className="text-white/90 text-lg">Kingdom of Bahrain - مملكة البحرين</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">About Bahrain</h2>
                <p className="mb-4">
                  Bahrain, officially the Kingdom of Bahrain, is a small island nation in the Persian Gulf. Despite its small size, Bahrain offers an intriguing mix of ancient history and modern development. As one of the first Gulf states to discover oil, it has transformed into a financial hub while preserving its rich cultural heritage.
                </p>
                <p className="mb-4">
                  The archipelago consists of Bahrain Island and about 30 smaller islands. Its strategic location has made it a crossroads of trade and cultural exchange for thousands of years, from the ancient Dilmun civilization to today's cosmopolitan society where traditional souks exist alongside gleaming skyscrapers.
                </p>
                <p>
                  Modern Bahrain balances Islamic traditions with progressive policies, creating one of the more liberal societies in the Gulf region. The country is known for its friendly locals, expatriate community, and as home to the Formula 1 Bahrain Grand Prix.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Visit Bahrain</h2>
                <p className="mb-4">
                  Bahrain offers a unique blend of Arabian heritage and modern comfort that sets it apart from its larger neighbors. Despite its small size, the country packs in diverse experiences from ancient archaeological sites to ultra-modern architecture.
                </p>
                <p className="mb-4">
                  Visitors can explore 5,000-year-old ruins at Qal'at al-Bahrain, experience the fascinating Tree of Life surviving in the desert, and enjoy the vibrant souks of Manama. For those interested in modern attractions, the Bahrain International Circuit hosts Formula 1 races, while excellent museums like the Bahrain National Museum provide cultural insights.
                </p>
                <p>
                  Unlike some neighboring countries, Bahrain's more relaxed atmosphere allows visitors to experience authentic Gulf culture while enjoying modern amenities. With excellent dining, luxury resorts, and pearl diving opportunities, it offers something for every type of traveler.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Top Attractions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1548604308-9a2215103738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                      alt="Bahrain Fort" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">Qal'at al-Bahrain (Bahrain Fort)</h3>
                      <p className="text-sm text-gray-600">
                        This UNESCO World Heritage site reveals 4,000 years of continuous human presence, from the ancient Dilmun civilization to the Portuguese period. The impressive fort structure and surrounding archaeological site offer stunning views over the sea.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1604260733112-e5ceb2730eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Al Fateh Grand Mosque" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">Al-Fateh Grand Mosque</h3>
                      <p className="text-sm text-gray-600">
                        One of the largest mosques in the world, capable of accommodating over 7,000 worshippers. This impressive structure features a huge fiberglass dome, Italian marble, and Austrian chandeliers. Guided tours welcome non-Muslim visitors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Tree of Life" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">Tree of Life</h3>
                      <p className="text-sm text-gray-600">
                        This 400-year-old mesquite tree has become a symbol of Bahrain, mysteriously thriving in the harsh desert with no visible water source. Standing 32 feet tall, it attracts visitors curious about its survival and spiritual significance.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1578895101408-1a5490642f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                      alt="Bahrain National Museum" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">Bahrain National Museum</h3>
                      <p className="text-sm text-gray-600">
                        The country's largest and oldest public museum showcases the rich cultural heritage of Bahrain through archaeological artifacts, traditional handicrafts, and exhibits on the nation's customs and traditions spanning 6,000 years.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Local Cuisine</h2>
                <p className="mb-4">
                  Bahraini cuisine reflects its island heritage with a delicious mix of Arabic, Persian, and Indian influences. Seafood naturally features prominently, with hammour (grouper) being particularly popular in many dishes.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Famous Dishes</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><span className="font-medium">Machboos</span> - Bahrain's national dish consisting of fragrant rice cooked with meat (usually chicken, fish, or lamb) and a blend of spices similar to Indian biryani.</li>
                  <li><span className="font-medium">Muhammar</span> - Sweet rice dish prepared with sugar, dates, and spices, typically served with fish.</li>
                  <li><span className="font-medium">Ghoozi</span> - Whole roasted lamb or sheep served over a bed of rice, nuts, and eggs.</li>
                  <li><span className="font-medium">Balaleet</span> - Sweet vermicelli noodles topped with a savory omelet, commonly eaten for breakfast.</li>
                  <li><span className="font-medium">Halwa</span> - A traditional sweet gelatinous dessert made with saffron, cardamom, and nuts.</li>
                </ul>
                
                <p>
                  Don't miss trying Arabic coffee (gahwa) served with dates, which is an important element of Bahraini hospitality. The country also has a thriving international food scene, particularly in Manama, where you can find everything from high-end restaurants to street food.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Travel Tips</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Respect Local Customs</h3>
                    <p className="text-gray-700">
                      While more liberal than some of its neighbors, Bahrain is still a Muslim country where local customs should be respected. Dress modestly in public places (covering shoulders and knees), especially when visiting religious sites.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Weather Considerations</h3>
                    <p className="text-gray-700">
                      Bahrain has extremely hot summers (May to October) with temperatures regularly exceeding 40°C (104°F). The best time to visit is during the mild winter months (November to April) when temperatures are pleasant.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Transportation</h3>
                    <p className="text-gray-700">
                      Taxis are the main form of public transportation, though ride-sharing apps like Uber and Careem are also available. Renting a car is convenient as Bahrain is small and easy to navigate, with good road infrastructure.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visa Information</h3>
                    <p className="text-gray-700">
                      Many nationalities can obtain visas on arrival or apply for e-visas before travel. Check the latest requirements as policies occasionally change.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cultural Customs</h2>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <span className="font-medium">Greeting Etiquette</span> - Men typically greet each other with a handshake, while women may greet with a kiss on the cheek. Between genders, wait for the Bahraini woman to extend her hand first.
                  </li>
                  <li>
                    <span className="font-medium">Majlis Culture</span> - The traditional gathering spaces where Bahrainis socialize and discuss community matters. If invited to one, it's an honor and opportunity to experience local hospitality.
                  </li>
                  <li>
                    <span className="font-medium">Coffee Ritual</span> - The serving of Arabic coffee (gahwa) is an important cultural tradition. It's polite to accept at least one cup when offered.
                  </li>
                  <li>
                    <span className="font-medium">Ramadan Observance</span> - During the holy month, respect fasting hours by refraining from eating, drinking, or smoking in public during daylight hours.
                  </li>
                  <li>
                    <span className="font-medium">Photography</span> - Always ask permission before photographing local people, especially women. Avoid photographing government buildings and military installations.
                  </li>
                </ul>
              </section>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Quick Facts</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Capital</p>
                    <p>Manama</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Official Language</p>
                    <p>Arabic</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Currency</p>
                    <p>Bahraini Dinar (BHD)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Population</p>
                    <p>1.7 million</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Time Zone</p>
                    <p>GMT+3</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">International Dialing Code</p>
                    <p>+973</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Driving Side</p>
                    <p>Right</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Best Time to Visit</h3>
                
                <p className="mb-4">The ideal time to visit Bahrain is from November to March, when the weather is pleasant with temperatures between 15°C to 28°C (59°F to 82°F).</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-24">January</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">February</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">March</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">April</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">May</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">June</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">July</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">August</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">September</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">October</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">November</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-24">December</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Budget Planning</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-travel-blue">Budget</h4>
                    <p className="text-sm">
                      70-100 BHD per day (~$185-265 USD)<br />
                      Affordable hotels, street food and casual restaurants, public transportation
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-travel-blue">Mid-Range</h4>
                    <p className="text-sm">
                      100-250 BHD per day (~$265-665 USD)<br />
                      Good hotels, nice restaurants, some guided tours, taxis
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-travel-blue">Luxury</h4>
                    <p className="text-sm">
                      250+ BHD per day (~$665+ USD)<br />
                      Luxury resorts, fine dining, private tours, car rentals
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Related Destinations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1518634745298-87e042240f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Dubai" 
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">Dubai</h4>
                      <p className="text-xs text-gray-600">
                        Ultra-modern city with luxury shopping and futuristic architecture
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Doha" 
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">Doha</h4>
                      <p className="text-xs text-gray-600">
                        Qatar's capital with modern skyline and cultural attractions
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534320141392-8434d062a3a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                      alt="Abu Dhabi" 
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div>
                      <h4 className="font-semibold">Abu Dhabi</h4>
                      <p className="text-xs text-gray-600">
                        UAE capital with stunning mosques and cultural experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="my-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore More Destinations</h2>
            
            <div className="flex gap-4 overflow-x-auto pb-4">
              <Link to="/recommender" className="block min-w-[200px] bg-travel-blue hover:bg-travel-blue-dark text-white font-bold py-3 px-4 rounded text-center">
                Destination Recommender
              </Link>
              
              <Link to="/countries" className="block min-w-[180px] bg-white border border-travel-blue hover:bg-gray-50 text-travel-blue font-bold py-3 px-4 rounded text-center">
                All Countries
              </Link>
              
              <Link to="/country/uae" className="block min-w-[150px] bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded text-center">
                United Arab Emirates
              </Link>
              
              <Link to="/country/qatar" className="block min-w-[100px] bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded text-center">
                Qatar
              </Link>
              
              <Link to="/country/kuwait" className="block min-w-[100px] bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded text-center">
                Kuwait
              </Link>
              
              <Link to="/country/oman" className="block min-w-[100px] bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded text-center">
                Oman
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BahrainCountry;
