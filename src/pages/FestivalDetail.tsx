import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { festivals, Festival } from "@/data/festivals";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Globe, Users, ArrowLeft, Share2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function FestivalDetail() {
  const { festivalId } = useParams();
  const navigate = useNavigate();
  const [festival, setFestival] = useState<Festival | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedFestivals, setRelatedFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      const foundFestival = festivals.find(f => f.id === festivalId);
      
      if (foundFestival) {
        setFestival(foundFestival);
        
        // Find related festivals (same category or country)
        const related = festivals
          .filter(f => 
            f.id !== festivalId && 
            (f.category === foundFestival.category || f.country === foundFestival.country)
          )
          .slice(0, 3);
        
        setRelatedFestivals(related);
      }
      
      setLoading(false);
    }, 500);
  }, [festivalId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: festival?.name || "Check out this festival!",
        text: festival?.description || "I found this amazing festival!",
        url: window.location.href,
      })
      .catch(() => {
        // Fallback if sharing fails
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 container py-8">
          <div className="space-y-8">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  if (!festival) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 container py-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Festival Not Found</h1>
            <p>Sorry, we couldn't find the festival you're looking for.</p>
            <Button onClick={() => navigate('/festivals')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Festivals
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="space-y-8">
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button variant="ghost" onClick={() => navigate('/festivals')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Festivals
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          
          {/* Festival Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-4xl font-bold">{festival.name}</h1>
              <Badge className={`${getCategoryColor(festival.category)} text-white`}>
                {festival.category}
              </Badge>
              {festival.popularity === "high" && (
                <Badge variant="outline" className="bg-travel-terracotta text-white">
                  Popular
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {festival.date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {festival.city}, {festival.country}
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                {getContinent(festival.country)}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {festival.popularity === "high" ? "Massive crowds" : 
                  festival.popularity === "medium" ? "Moderate attendance" : "Intimate gathering"}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Image and Description */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden h-96 bg-card border">
                <img 
                  src={festival.imageUrl} 
                  alt={festival.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">About the Festival</h2>
                <p className="text-gray-700">{festival.description}</p>
                <p className="text-gray-700">
                  This vibrant celebration brings together locals and visitors from around the world to experience
                  the unique cultural heritage and traditions of {festival.country}. The festival features colorful
                  displays, traditional music and dance performances, culinary delights, and a welcoming atmosphere.
                </p>
                <p className="text-gray-700">
                  Whether you're a seasoned festival-goer or experiencing it for the first time, the {festival.name} offers
                  an unforgettable journey into the heart of {festival.country}'s cultural identity.
                </p>
              </div>
            </div>
            
            {/* Right Column - Details and Related */}
            <div className="space-y-6">
              {/* Festival Details */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h2 className="text-xl font-semibold">Festival Details</h2>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Best time to visit</h3>
                      <p>{festival.date}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p>{festival.city}, {festival.country}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                      <p className="capitalize">{festival.category} Festival</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Popularity</h3>
                      <p>
                        {festival.popularity === "high" ? "Very Popular" : 
                         festival.popularity === "medium" ? "Moderately Popular" : 
                         "Lesser Known"}
                      </p>
                    </div>
                  </div>
                  
                  {festival.country && (
                    <Button 
                      className="w-full" 
                      variant="outline"
                      asChild
                    >
                      <Link to={`/country/${festival.country.toLowerCase().replace(/\s+/g, '-')}`}>
                        Visit {festival.country} Guide
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
              
              {/* Related Festivals */}
              {relatedFestivals.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Related Festivals</h2>
                  <div className="space-y-3">
                    {relatedFestivals.map(related => (
                      <Link key={related.id} to={`/festival/${related.id}`}>
                        <div className="flex gap-3 border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                          <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                            <img 
                              src={related.imageUrl}
                              alt={related.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium hover:text-travel-blue transition-colors">{related.name}</h3>
                            <p className="text-xs text-muted-foreground">{related.country}</p>
                            <p className="text-xs">{related.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function getCategoryColor(category: Festival["category"]) {
  switch (category) {
    case "music":
      return "bg-purple-500";
    case "cultural":
      return "bg-blue-500";
    case "religious":
      return "bg-amber-500";
    case "food":
      return "bg-green-500";
    case "art":
      return "bg-pink-500";
    default:
      return "bg-gray-500";
  }
}

// Helper function to determine festival continent based on country
function getContinent(country: string): string {
  const europeCountries = ["Germany", "France", "Spain", "Italy", "United Kingdom", "Belgium", "Bulgaria"];
  const asiaCountries = ["India", "Japan", "Thailand", "China"];
  const africaCountries = ["Egypt", "Morocco", "South Africa"];
  const northAmericaCountries = ["United States", "Canada", "Mexico"];
  const southAmericaCountries = ["Brazil", "Argentina", "Peru"];
  const oceaniaCountries = ["Australia", "New Zealand"];
  
  if (europeCountries.includes(country)) return "Europe";
  if (asiaCountries.includes(country)) return "Asia";
  if (africaCountries.includes(country)) return "Africa";
  if (northAmericaCountries.includes(country)) return "North America";
  if (southAmericaCountries.includes(country)) return "South America";
  if (oceaniaCountries.includes(country)) return "Oceania";
  
  // Default handling
  if (country === "Brazil") return "South America";
  
  return "Other";
} 