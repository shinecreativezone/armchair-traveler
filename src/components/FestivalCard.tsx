import { Festival } from "@/data/festivals";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface FestivalCardProps {
  festival: Festival;
  onClick?: () => void;
}

export function FestivalCard({ festival, onClick }: FestivalCardProps) {
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
    <Card 
      className="overflow-hidden transition-all hover:shadow-lg cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <img 
          src={festival.imageUrl} 
          alt={festival.name}
          className="h-full w-full object-cover" 
        />
        <div className="absolute top-2 right-2">
          <Badge className={`${getCategoryColor(festival.category)} text-white`}>
            {festival.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{festival.name}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          {festival.city}, {festival.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {festival.description}
        </p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          {festival.date}
        </div>
      </CardFooter>
    </Card>
  );
} 