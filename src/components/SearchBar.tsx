
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar = ({ className = "", placeholder = "Search destinations, stories, or itineraries..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recommender?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex w-full max-w-2xl ${className}`}>
      <div className="relative w-full">
        <Input
          type="text"
          placeholder={placeholder}
          className="pr-10 h-12 rounded-l-md rounded-r-none border-r-0 focus-visible:ring-travel-blue"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button 
        type="submit" 
        className="rounded-l-none bg-travel-blue hover:bg-travel-blue-light h-12"
      >
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
