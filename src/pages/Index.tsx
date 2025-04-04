
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FeaturedDestination from "@/components/FeaturedDestination";
import CuratedCollection from "@/components/CuratedCollection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { collections } from "@/data/collections";

const Index = () => {
  const featuredDestinations = destinations.filter(d => d.featured);
  
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1000"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-heading animate-fade-in">
            Explore the World from Your Armchair
          </h1>
          <p className="text-xl text-travel-sand-light max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover amazing destinations, stories, and virtual experiences without leaving home
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SearchBar className="mx-auto mb-8" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/recommender">
              <Button className="bg-travel-terracotta hover:bg-travel-terracotta-dark">
                Find Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/countries">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Browse Countries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-heading">Featured Destinations</h2>
          <Link to="/recommender" className="text-travel-blue-light hover:text-travel-blue flex items-center">
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {featuredDestinations.slice(0, 1).map(destination => (
            <FeaturedDestination key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredDestinations.slice(1, 5).map(destination => (
            <div key={destination.id} className="animate-scale-in">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="w-full h-52 object-cover mb-4 rounded-lg"
              />
              <h3 className="font-bold text-xl mb-1 text-heading">{destination.name}</h3>
              <p className="text-gray-500">{destination.country}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Collections */}
      <section className="bg-travel-sand-light py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-heading">Curated Collections</h2>
            <Link to="/" className="text-travel-blue-light hover:text-travel-blue flex items-center">
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 3).map(collection => (
              <CuratedCollection key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Journey */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-travel-blue rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-white text-heading">Ready to Start Your Journey?</h2>
            <p className="text-travel-sand-light mb-6">
              Use our destination recommender to find your perfect match. Answer a few questions about your preferences 
              and let us suggest the ideal virtual travel experience for you.
            </p>
            <Link to="/recommender">
              <Button className="bg-travel-terracotta hover:bg-travel-terracotta-dark">
                Find Your Destination
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Globe className="text-white h-40 w-40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Eco-friendly Travel */}
      <section className="bg-travel-green/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-heading">
              Virtual Travel, Real Impact
            </h2>
            <p className="text-lg mb-8">
              Armchair traveling isn't just fun—it's eco-friendly! By exploring the world virtually, you're
              reducing your carbon footprint while still experiencing global wonders. Learn how armchair travel
              helps protect our planet while satisfying your wanderlust.
            </p>
            <div className="relative rounded-xl overflow-hidden aspect-video mb-8">
              <img 
                src="https://images.unsplash.com/photo-1569060368415-ea33a8c8f5b4?q=80&w=1000" 
                alt="Sustainable travel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/">
                <Button variant="outline">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
