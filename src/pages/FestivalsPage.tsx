import { useState } from "react";
import { festivals, Festival } from "@/data/festivals";
import { FestivalCard } from "@/components/FestivalCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin as MapPinIcon, Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FestivalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<Festival["category"] | "">("");
  
  // Get unique countries
  const countries = Array.from(new Set(festivals.map(festival => festival.country))).sort();
  
  // Filter festivals based on search and filters
  const filteredFestivals = festivals.filter(festival => {
    const matchesSearch = festival.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          festival.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          festival.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          festival.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry = countryFilter ? festival.country === countryFilter : true;
    const matchesCategory = categoryFilter ? festival.category === categoryFilter : true;
    
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">World Festivals</h1>
          <p className="text-center text-muted-foreground max-w-2xl">
            Discover the most famous and vibrant festivals from around the world. From cultural celebrations to music events, explore the diversity of global festivities.
          </p>
        </div>

        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Search festivals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={categoryFilter} onValueChange={(value: any) => setCategoryFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="religious">Religious</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="art">Art</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs for different views */}
          <Tabs defaultValue="grid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredFestivals.length} {filteredFestivals.length === 1 ? 'Festival' : 'Festivals'} Found
              </h2>
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid" className="mt-6">
              {filteredFestivals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredFestivals.map((festival) => (
                    <FestivalCard
                      key={festival.id}
                      festival={festival}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No festivals found matching your filters.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="list">
              {filteredFestivals.length > 0 ? (
                <div className="space-y-4">
                  {filteredFestivals.map((festival) => (
                    <div 
                      key={festival.id} 
                      className="flex flex-col md:flex-row gap-4 border rounded-lg overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="md:w-48 h-48 md:h-auto">
                        <img 
                          src={festival.imageUrl} 
                          alt={festival.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold">{festival.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                              <MapPinIcon className="h-4 w-4" />
                              {festival.city}, {festival.country}
                            </p>
                          </div>
                          <Badge className={`${getCategoryColor(festival.category)} text-white`}>
                            {festival.category}
                          </Badge>
                        </div>
                        <p className="mt-2">{festival.description}</p>
                        <div className="mt-4 text-sm text-muted-foreground flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {festival.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No festivals found matching your filters.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
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