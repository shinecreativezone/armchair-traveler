import { Festival } from "@/data/festivals";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FestivalCardProps {
  festival: Festival;
  className?: string;
}

export function FestivalCard({ festival, className = "" }: FestivalCardProps) {
  const getCategoryColor = (category: Festival["category"]) => {
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
  };

  return (
    <Link to={`/festival/${festival.id}`} className="block h-full">
      <Card className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full ${className}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={festival.imageUrl} 
            alt={festival.name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute top-2 right-2">
            <Badge className={`${getCategoryColor(festival.category)} text-white`}>
              {festival.category}
            </Badge>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {festival.country}
          </div>
          {festival.popularity === "high" && (
            <div className="absolute top-2 left-2 bg-travel-terracotta text-white text-xs px-2 py-1 rounded-full">
              Popular
            </div>
          )}
        </div>
        <CardContent className="pt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl text-heading">{festival.name}</h3>
              <p className="text-gray-500 flex items-center gap-1">
                <MapPinIcon className="h-4 w-4" />
                {festival.city}
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {festival.description}
          </p>
          <div className="flex items-center gap-1 mt-2 text-travel-blue">
            <CalendarIcon className="h-4 w-4" />
            <span className="text-sm font-medium">{festival.date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 