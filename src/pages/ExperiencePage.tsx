import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { experiences, Experience } from "@/data/experiences";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPinIcon, CalendarIcon, Clock, Users, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperiencePage() {
  const { experienceId } = useParams<{ experienceId: string }>();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedExperiences, setRelatedExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    setLoading(true);
    
    // Find the experience with the matching ID
    const foundExperience = experiences.find(exp => exp.id === experienceId);
    setExperience(foundExperience || null);
    
    // If found, get related experiences (same country or category)
    if (foundExperience) {
      const related = experiences
        .filter(exp => 
          exp.id !== foundExperience.id && 
          (exp.country === foundExperience.country || 
           exp.category === foundExperience.category)
        )
        .slice(0, 3); // Get up to 3 related experiences
      
      setRelatedExperiences(related);
    }
    
    setLoading(false);
  }, [experienceId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Experience Not Found</h2>
          <p className="mb-6">The experience you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/experiences">Back to All Experiences</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Helper function to get category color
  const getCategoryColor = (category: Experience["category"]) => {
    switch (category) {
      case "nature":
        return "bg-green-500";
      case "cultural":
        return "bg-blue-500";
      case "adventure":
        return "bg-red-500";
      case "urban":
        return "bg-purple-500";
      case "resort":
        return "bg-cyan-500";
      case "culinary":
        return "bg-amber-500";
      case "historical":
        return "bg-gray-500";
      default:
        return "bg-travel-blue";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div 
          className="relative h-64 md:h-96 bg-cover bg-center" 
          style={{ backgroundImage: `url(${experience.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{experience.name}</h1>
              <p className="text-lg md:text-xl flex items-center justify-center gap-2">
                <MapPinIcon className="h-5 w-5" />
                {experience.city}, {experience.country}
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Experience Details */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={`${getCategoryColor(experience.category)} text-white capitalize`}>
                      {experience.category}
                    </Badge>
                    <Badge variant="outline" className="text-travel-blue">
                      {experience.popularity === "high" ? "Popular" : experience.popularity === "medium" ? "Trending" : "Hidden Gem"}
                    </Badge>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">About this Experience</h2>
                  <p className="mb-4">{experience.description}</p>
                  <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum arcu vitae augue pulvinar, at commodo purus feugiat. In hac habitasse platea dictumst. Vivamus a tincidunt quam. Integer lacinia, felis vel dignissim condimentum, libero urna interdum odio, sit amet fringilla nulla nulla vitae velit.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CalendarIcon className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Best Time to Visit</h3>
                        <p>{experience.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Recommended Duration</h3>
                        <p>2-3 Days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Good For</h3>
                        <p>Solo travelers, Couples, Families</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Highlight</h3>
                        <p>Unique cultural immersion</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* What to Expect */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                  <div className="space-y-4">
                    <p>Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                    <p>Curabitur blandit tempus porttitor. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Experience the local culture and traditions</li>
                      <li>Interact with friendly locals</li>
                      <li>Discover hidden spots not found in typical guidebooks</li>
                      <li>Taste authentic local cuisine</li>
                      <li>Create unforgettable memories</li>
                    </ul>
                    
                    {/* GetYourGuide Widget */}
                    <div className="mt-6">
                      <div data-gyg-widget="auto" data-gyg-partner-id="DHU8TI0"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Practical Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Practical Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Getting There</h3>
                      <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Accommodation</h3>
                      <p>Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Local Transport</h3>
                      <p>Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Essential Tips</h3>
                      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              {/* Quick Facts */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Language</h3>
                        <p className="text-sm text-muted-foreground">Local language and English in tourist areas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Currency</h3>
                        <p className="text-sm text-muted-foreground">Local currency (credit cards widely accepted)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Weather</h3>
                        <p className="text-sm text-muted-foreground">Varies by season, check before visiting</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 text-travel-blue mt-0.5" />
                      <div>
                        <h3 className="font-semibold">Difficulty Level</h3>
                        <p className="text-sm text-muted-foreground">Medium - suitable for most travelers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Safety & Considerations */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Safety & Considerations</h2>
                  <p className="mb-3">Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Always check local advisories before traveling</li>
                    <li>Respect local customs and traditions</li>
                    <li>Consider purchasing travel insurance</li>
                    <li>Stay hydrated and use sun protection</li>
                    <li>Keep valuables secure at all times</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Related Experiences */}
              {relatedExperiences.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
                    <div className="space-y-4">
                      {relatedExperiences.map(related => (
                        <a 
                          key={related.id} 
                          href={`/experience/${related.id}`} 
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-20 flex-shrink-0">
                              <img 
                                src={related.imageUrl} 
                                alt={related.name} 
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold group-hover:text-travel-blue transition-colors">
                                {related.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {related.city}, {related.country}
                              </p>
                              <Badge 
                                className={`${getCategoryColor(related.category)} text-white capitalize mt-1 text-xs`}
                              >
                                {related.category}
                              </Badge>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 