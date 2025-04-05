import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { destinations as allDestinations, Destination } from "@/data/destinations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar, AlertTriangle, Currency, Plane, Utensils, Gift, Book, Music, Film, Home } from "lucide-react";
import { toast } from "sonner";

// Mock data for destination details
type DestinationDetails = {
  capital?: string;
  language?: string;
  currency?: string;
  bestTimeToVisit?: string[];
  whereToStay?: { name: string; priceRange: string; description: string }[];
  majorSights?: { name: string; description: string }[];
  festivals?: { name: string; month: string; description: string }[];
  cuisine?: { dish: string; description: string }[];
  doAndDont?: { do: string[]; dont: string[] };
  books?: string[];
  films?: string[];
  music?: string[];
  souvenirs?: string[];
};

// This would typically come from an API or database
const getDestinationDetails = (slug: string): DestinationDetails | null => {
  // Retrieve destination data from our curated destination database
  // This implementation uses a static map for efficient lookup
  
  const destinationMap: Record<string, DestinationDetails> = {
    'paris': {
      capital: "Paris is the capital of France",
      language: "French",
      currency: "Euro (€)",
      bestTimeToVisit: ["April to June", "September to November"],
      whereToStay: [
        { name: "Le Marais", priceRange: "$$$", description: "Historic district with trendy shops and cafés" },
        { name: "Montmartre", priceRange: "$$", description: "Artistic neighborhood with stunning city views" },
        { name: "Latin Quarter", priceRange: "$$", description: "Student-friendly area with lively ambiance" }
      ],
      majorSights: [
        { name: "Eiffel Tower", description: "Iconic 19th-century tower with panoramic city views" },
        { name: "Louvre Museum", description: "World's largest art museum and historic monument" },
        { name: "Notre-Dame Cathedral", description: "Medieval Catholic cathedral known for its Gothic architecture" }
      ],
      festivals: [
        { name: "Fête de la Musique", month: "June", description: "Citywide music festival celebrating the summer solstice" },
        { name: "Bastille Day", month: "July", description: "National holiday with parades and fireworks" }
      ],
      cuisine: [
        { dish: "Croissants", description: "Buttery, flaky pastry typically eaten for breakfast" },
        { dish: "Coq au Vin", description: "Chicken braised with wine, lardons, mushrooms, and garlic" }
      ],
      doAndDont: {
        do: ["Greet with 'Bonjour'", "Try to speak a bit of French", "Use table manners"],
        dont: ["Rush meals", "Be overly loud in public", "Take photos in museums without permission"]
      },
      books: ["A Moveable Feast by Ernest Hemingway", "Les Misérables by Victor Hugo"],
      films: ["Amélie", "Midnight in Paris", "Ratatouille"],
      music: ["Edith Piaf", "Serge Gainsbourg", "Daft Punk"],
      souvenirs: ["Eiffel Tower miniatures", "French perfume", "Macarons"]
    },
    'kyoto': {
      capital: "Kyoto was the former capital of Japan",
      language: "Japanese",
      currency: "Japanese Yen (¥)",
      bestTimeToVisit: ["March to May (cherry blossoms)", "October to November (autumn colors)"],
      whereToStay: [
        { name: "Gion", priceRange: "$$$", description: "Historic geisha district with traditional architecture" },
        { name: "Arashiyama", priceRange: "$$", description: "Scenic district with bamboo groves and temples" }
      ],
      majorSights: [
        { name: "Fushimi Inari Shrine", description: "Famous for its thousands of vermilion torii gates" },
        { name: "Kinkaku-ji (Golden Pavilion)", description: "Zen Buddhist temple covered in gold leaf" }
      ],
      festivals: [
        { name: "Gion Matsuri", month: "July", description: "One of Japan's most famous festivals with parades and floats" }
      ],
      cuisine: [
        { dish: "Kaiseki", description: "Traditional multi-course Japanese dinner" },
        { dish: "Yudofu", description: "Tofu hot pot, a Kyoto specialty" }
      ],
      doAndDont: {
        do: ["Remove shoes before entering temples and homes", "Bow when greeting someone"],
        dont: ["Tip at restaurants", "Eat while walking", "Be loud on public transportation"]
      },
      books: ["Memoirs of a Geisha by Arthur Golden", "The Old Capital by Yasunari Kawabata"],
      films: ["Lost in Translation", "The Last Samurai"],
      music: ["Traditional shakuhachi flute music", "Koto (Japanese harp)"],
      souvenirs: ["Yukata (casual kimono)", "Japanese fans", "Green tea"]
    },
    'machu-picchu': {
      capital: "Machu Picchu is located in Peru, whose capital is Lima",
      language: "Spanish, Quechua",
      currency: "Peruvian Sol (S/)",
      bestTimeToVisit: ["May to September (dry season)"],
      whereToStay: [
        { name: "Aguas Calientes", priceRange: "$$", description: "The closest town to Machu Picchu" },
        { name: "Cusco", priceRange: "$-$$$", description: "Historic city and gateway to Machu Picchu" }
      ],
      majorSights: [
        { name: "The Citadel", description: "Main archaeological site with impressive stone structures" },
        { name: "Huayna Picchu", description: "Mountain peak offering stunning views of Machu Picchu" }
      ],
      festivals: [
        { name: "Inti Raymi", month: "June", description: "Festival of the Sun, an important Inca celebration" }
      ],
      cuisine: [
        { dish: "Ceviche", description: "Fresh raw fish marinated in citrus juices" },
        { dish: "Lomo Saltado", description: "Stir-fry combining Peruvian and Chinese influences" }
      ],
      doAndDont: {
        do: ["Acclimate to the altitude gradually", "Stay hydrated"],
        dont: ["Touch or climb on the ruins", "Remove archaeological items", "Feed wild animals"]
      },
      books: ["Turn Right at Machu Picchu by Mark Adams", "The Last Days of the Incas by Kim MacQuarrie"],
      films: ["The Motorcycle Diaries", "Secret of the Incas"],
      music: ["Traditional Andean music with panpipes and charango"],
      souvenirs: ["Alpaca textiles", "Peruvian chocolate", "Handcrafted jewelry"]
    }
  };
  
  return destinationMap[slug] || null;
};

const DestinationPage = () => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  const navigate = useNavigate();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [details, setDetails] = useState<DestinationDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (destinationSlug) {
      const found = allDestinations.find(d => d.slug === destinationSlug);
      
      if (found) {
        setDestination(found);
        // In a real application, this would be an API call
        const fetchedDetails = getDestinationDetails(destinationSlug);
        setDetails(fetchedDetails || {});
      } else {
        toast.error(`Destination "${destinationSlug}" not found`);
        navigate('/recommender');
      }
    }
    setLoading(false);
  }, [destinationSlug, navigate]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-travel-blue"></div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!destination) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
            <p className="mb-8">We couldn't find the destination you're looking for.</p>
            <Button onClick={() => navigate('/recommender')}>
              Back to Recommender
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src={destination.imageUrl} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
          </div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
            <div className="flex items-center text-white mb-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{destination.country} / {destination.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {destination.tags.activities.map((tag, i) => (
                <Link 
                  key={i} 
                  to={`/recommender?activities=${encodeURIComponent(tag)}`}
                  className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <p className="text-white/90 text-lg max-w-3xl">{destination.description}</p>
          </div>
        </section>

        {/* Main content */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main column */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="flex items-center gap-2 text-2xl font-bold text-heading mb-4">
                  <Calendar className="h-6 w-6 text-travel-terracotta" />
                  When to Visit
                </h2>
                <p>{details?.bestTimeToVisit?.join(", ") || "All year round, but weather varies by season."}</p>

                <h2 className="flex items-center gap-2 text-2xl font-bold text-heading mt-8 mb-4">
                  <Home className="h-6 w-6 text-travel-terracotta" />
                  Where to Stay
                </h2>
                {details?.whereToStay ? (
                  <ul className="space-y-4">
                    {details.whereToStay.map((place, i) => (
                      <li key={i} className="border-b border-gray-100 pb-4">
                        <div className="flex justify-between">
                          <h3 className="font-bold">{place.name}</h3>
                          <span className="text-travel-terracotta">{place.priceRange}</span>
                        </div>
                        <p>{place.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Accommodation options vary widely from budget hostels to luxury hotels.</p>
                )}

                <h2 className="flex items-center gap-2 text-2xl font-bold text-heading mt-8 mb-4">
                  <Plane className="h-6 w-6 text-travel-terracotta" />
                  Major Attractions
                </h2>
                {details?.majorSights ? (
                  <ul className="space-y-4">
                    {details.majorSights.map((sight, i) => (
                      <li key={i} className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold">{sight.name}</h3>
                        <p>{sight.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Explore the natural beauty and cultural landmarks of this destination.</p>
                )}

                <h2 className="flex items-center gap-2 text-2xl font-bold text-heading mt-8 mb-4">
                  <Utensils className="h-6 w-6 text-travel-terracotta" />
                  Food & Cuisine
                </h2>
                {details?.cuisine ? (
                  <ul className="space-y-4">
                    {details.cuisine.map((item, i) => (
                      <li key={i} className="border-b border-gray-100 pb-4">
                        <h3 className="font-bold">{item.dish}</h3>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Sample local delicacies and international cuisine available throughout the destination.</p>
                )}

                <h2 className="flex items-center gap-2 text-2xl font-bold text-heading mt-8 mb-4">
                  <Book className="h-6 w-6 text-travel-terracotta" />
                  Books, Films & Music
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold mb-2">Books</h3>
                    <ul className="list-disc pl-5">
                      {details?.books ? 
                        details.books.map((book, i) => <li key={i}>{book}</li>) : 
                        <li>Travel guides available for this destination</li>
                      }
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Films</h3>
                    <ul className="list-disc pl-5">
                      {details?.films ? 
                        details.films.map((film, i) => <li key={i}>{film}</li>) : 
                        <li>Various documentaries showcase this region</li>
                      }
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Music</h3>
                    <ul className="list-disc pl-5">
                      {details?.music ? 
                        details.music.map((item, i) => <li key={i}>{item}</li>) : 
                        <li>Traditional and contemporary music</li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Essential Info Card */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-bold text-xl mb-4 text-heading">Essential Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-travel-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Capital</p>
                        <p className="text-gray-600">{details?.capital || destination.country}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Currency className="h-5 w-5 text-travel-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Currency</p>
                        <p className="text-gray-600">{details?.currency || "Local currency"}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-travel-blue flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Risk Level</p>
                        <p className="text-gray-600">{destination.tags.riskLevel}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Do's and Don'ts */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-bold text-xl mb-4 text-heading">Do's and Don'ts</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-green-600 mb-2">Do</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {details?.doAndDont?.do ? 
                          details.doAndDont.do.map((item, i) => <li key={i}>{item}</li>) : 
                          <>
                            <li>Research local customs</li>
                            <li>Learn basic local phrases</li>
                            <li>Respect local traditions</li>
                          </>
                        }
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium text-red-600 mb-2">Don't</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {details?.doAndDont?.dont ? 
                          details.doAndDont.dont.map((item, i) => <li key={i}>{item}</li>) : 
                          <>
                            <li>Disrespect local customs</li>
                            <li>Take photos without permission</li>
                            <li>Litter or damage natural sites</li>
                          </>
                        }
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Souvenirs */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-bold text-xl mb-4 text-heading flex items-center gap-2">
                    <Gift className="h-5 w-5 text-travel-terracotta" />
                    Souvenirs to Buy
                  </h3>
                  
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {details?.souvenirs ? 
                      details.souvenirs.map((item, i) => <li key={i}>{item}</li>) : 
                      <>
                        <li>Local handicrafts</li>
                        <li>Traditional artwork</li>
                        <li>Local delicacies</li>
                      </>
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DestinationPage;
