import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Destination } from "@/data/destinations";
import { Clock } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
  tripLabel?: string;
}

// List of countries that have dedicated pages
const countriesWithPages = [
  "afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
  "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain",
  "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia",
  "bosnia and herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina faso",
  "burundi", "cabo verde", "cambodia"
];

const DestinationCard = ({ destination, className = "", tripLabel }: DestinationCardProps) => {
  // Determine if we should link to a country page or a destination page
  const countrySlug = destination.country.toLowerCase().replace(/\s+/g, '-');
  const hasCountryPage = countriesWithPages.includes(destination.country.toLowerCase());
  const linkUrl = hasCountryPage 
    ? `/country/${countrySlug}` 
    : `/destination/${destination.slug}`;

  return (
    <Link to={linkUrl} className={`block ${className}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          {destination.featured && (
            <div className="absolute top-2 right-2 bg-travel-terracotta text-white text-xs px-2 py-1 rounded-full">
              Featured
            </div>
          )}
          {destination.country && (
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
              {destination.country}
            </div>
          )}
          {hasCountryPage && (
            <div className="absolute top-2 left-2 bg-travel-blue text-white text-xs px-2 py-1 rounded-full">
              Country Guide Available
            </div>
          )}
        </div>
        <CardContent className="pt-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-xl text-heading">{destination.name}</h3>
              <p className="text-gray-500">{destination.country}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{destination.description}</p>
          {tripLabel && (
            <div className="flex items-center gap-1 mt-2 text-travel-blue">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{tripLabel}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 pt-0 pb-4">
          {destination.tags.activities.slice(0, 3).map((activity, index) => (
            <span key={index} className="tag tag-activity">
              {activity}
            </span>
          ))}
          <span className="tag tag-risk">
            {destination.tags.riskLevel}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DestinationCard;
