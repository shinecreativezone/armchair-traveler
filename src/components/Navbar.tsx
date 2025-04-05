import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, LogOut, Menu, Search, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import SignInDialog from "./auth/SignInDialog";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { festivals, getPopularFestivals } from "@/data/festivals";
import { experiences, getPopularExperiences } from "@/data/experiences";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
  };

  const getUserInitials = () => {
    if (!user?.email) return "U";
    return user.email.substring(0, 1).toUpperCase();
  };

  // Get top countries and festivals
  const topCountries = [
    { name: "France", slug: "france" },
    { name: "Japan", slug: "japan" },
    { name: "Italy", slug: "italy" },
    { name: "Australia", slug: "australia" },
    { name: "Brazil", slug: "brazil" },
  ];

  const topFestivals = getPopularFestivals().slice(0, 5);
  const topExperiences = getPopularExperiences().slice(0, 5);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-travel-blue font-bold text-2xl"
        >
          <Globe className="h-6 w-6" />
          <span className="text-heading">Armchair Traveler</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-travel-blue-light transition">Home</Link>
          <Link to="/recommender" className="text-gray-700 hover:text-travel-blue-light transition">Destination Recommender</Link>
          
          {/* Things to Do Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-gray-700 hover:text-travel-blue-light transition">
                Things to Do
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup>
                {/* Countries Section */}
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <DropdownMenuLabel className="px-0">Countries</DropdownMenuLabel>
                    <Link to="/countries" className="text-xs text-travel-blue hover:underline">
                      View all countries
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {topCountries.map(country => (
                      <DropdownMenuItem key={country.slug} asChild>
                        <Link to={`/country/${country.slug}`}>{country.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
                
                {/* Festivals Section */}
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <DropdownMenuLabel className="px-0">Festivals</DropdownMenuLabel>
                    <Link to="/festivals" className="text-xs text-travel-blue hover:underline">
                      View all festivals
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {topFestivals.map(festival => (
                      <DropdownMenuItem key={festival.id} asChild>
                        <Link to={`/festival/${festival.id}`}>{festival.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
                
                {/* Experiences Section */}
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <DropdownMenuLabel className="px-0">Experiences</DropdownMenuLabel>
                    <Link to="/experiences" className="text-xs text-travel-blue hover:underline">
                      View all experiences
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {topExperiences.map(experience => (
                      <DropdownMenuItem key={experience.id} asChild>
                        <Link to={`/experience/${experience.id}`}>{experience.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{user.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => setIsSignInOpen(true)}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          )}
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/recommender" 
                  className="text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Destination Recommender
                </Link>
                
                {/* Mobile Things to Do Sections */}
                <div className="py-2">
                  <h3 className="text-lg font-medium mb-2">Things to Do</h3>
                  
                  <div className="pl-4 border-l-2 border-gray-200">
                    <h4 className="font-medium py-1">Countries</h4>
                    <div className="pl-2 space-y-1">
                      {topCountries.map(country => (
                        <Link 
                          key={country.slug}
                          to={`/country/${country.slug}`}
                          className="block text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {country.name}
                        </Link>
                      ))}
                      <Link 
                        to="/countries"
                        className="block text-travel-blue py-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View all countries
                      </Link>
                    </div>

                    <h4 className="font-medium py-1 mt-3">Festivals</h4>
                    <div className="pl-2 space-y-1">
                      {topFestivals.map(festival => (
                        <Link 
                          key={festival.id}
                          to={`/festival/${festival.id}`}
                          className="block text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {festival.name}
                        </Link>
                      ))}
                      <Link 
                        to="/festivals"
                        className="block text-travel-blue py-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View all festivals
                      </Link>
                    </div>

                    <h4 className="font-medium py-1 mt-3">Experiences</h4>
                    <div className="pl-2 space-y-1">
                      {topExperiences.map(experience => (
                        <Link 
                          key={experience.id}
                          to={`/experience/${experience.id}`}
                          className="block text-gray-600 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {experience.name}
                        </Link>
                      ))}
                      <Link 
                        to="/experiences"
                        className="block text-travel-blue py-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View all experiences
                      </Link>
                    </div>
                  </div>
                </div>
                
                {user ? (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 p-2 border rounded">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>{getUserInitials()}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{user.email}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full flex items-center justify-center"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSignInOpen(true);
                    }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <SignInDialog 
        open={isSignInOpen} 
        onOpenChange={setIsSignInOpen} 
      />
    </header>
  );
};

export default Navbar;
