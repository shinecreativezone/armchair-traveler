import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, MapPinIcon, HeartIcon, MessageSquareIcon } from "lucide-react";

// Sample travel stories data
const travelStories = [
  {
    id: "1",
    title: "Lost in the Streets of Marrakech",
    excerpt: "My unexpected adventure through the winding alleys of Morocco's most vibrant city...",
    imageUrl: "https://images.unsplash.com/photo-1539020140153-e8c8d11aef6a?q=80&w=1000",
    country: "Morocco",
    city: "Marrakech",
    date: "March 15, 2025",
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    likes: 234,
    comments: 42,
    tags: ["adventure", "culture", "food"]
  },
  {
    id: "2",
    title: "Cherry Blossoms and Temples: Spring in Kyoto",
    excerpt: "How I experienced the magic of sakura season in Japan's ancient capital...",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
    country: "Japan",
    city: "Kyoto",
    date: "April 8, 2025",
    author: {
      name: "Maya Tanaka",
      avatar: "https://i.pravatar.cc/150?u=maya"
    },
    likes: 376,
    comments: 53,
    tags: ["nature", "culture", "photography"]
  },
  {
    id: "3",
    title: "Sailing the Greek Islands: A Week in the Aegean",
    excerpt: "Island hopping, crystal waters, and unforgettable sunsets in the Cyclades...",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000",
    country: "Greece",
    city: "Cyclades Islands",
    date: "June 22, 2025",
    author: {
      name: "Carlos Mendez",
      avatar: "https://i.pravatar.cc/150?u=carlos"
    },
    likes: 189,
    comments: 27,
    tags: ["sailing", "beaches", "island life"]
  },
  {
    id: "4",
    title: "Trekking to the Edge of the World in Patagonia",
    excerpt: "My journey through wind-swept mountains and vast wilderness in South America...",
    imageUrl: "https://images.unsplash.com/photo-1508185917355-e84d88bf6bfe?q=80&w=1000",
    country: "Chile",
    city: "Torres del Paine",
    date: "January 12, 2025",
    author: {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?u=emma"
    },
    likes: 421,
    comments: 68,
    tags: ["hiking", "nature", "adventure"]
  }
];

export default function StoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter stories based on search
  const filteredStories = travelStories.filter(story => 
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">Travel Stories</h1>
          <p className="text-center text-muted-foreground max-w-2xl">
            Explore personal experiences and adventures from travelers around the world
          </p>
        </div>

        <div className="space-y-8">
          {/* Search */}
          <div className="max-w-3xl mx-auto">
            <Input
              placeholder="Search stories by title, location, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          {/* Stories */}
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredStories.map(story => (
              <Card key={story.id} className="overflow-hidden">
                <div className="sm:flex">
                  <div className="sm:w-1/3 h-52 sm:h-auto">
                    <img 
                      src={story.imageUrl} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-travel-blue">
                        {story.country}
                      </Badge>
                      {story.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">{story.title}</h2>
                    <p className="text-gray-600 mb-4">{story.excerpt}</p>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPinIcon className="h-4 w-4" />
                        {story.city}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4" />
                        {story.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={story.author.avatar} alt={story.author.name} />
                          <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{story.author.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <HeartIcon className="h-4 w-4" />
                          {story.likes}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <MessageSquareIcon className="h-4 w-4" />
                          {story.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border-t p-3 text-center">
                  <Button variant="ghost" className="text-travel-blue">Read Full Story</Button>
                </div>
              </Card>
            ))}
            
            {filteredStories.length === 0 && (
              <div className="text-center py-12 border rounded-lg">
                <p className="text-muted-foreground">No stories found matching your search.</p>
                <Button 
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mt-4"
                >
                  Reset Search
                </Button>
              </div>
            )}
          </div>
          
          {/* Submit your story */}
          <div className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Share Your Journey</h2>
            <p className="mb-4">Have an adventure worth telling? Submit your own travel story and inspire fellow travelers!</p>
            <Button>Submit Your Story</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 