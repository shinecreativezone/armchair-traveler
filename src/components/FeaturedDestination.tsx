
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Destination } from "@/data/destinations";

interface FeaturedDestinationProps {
  destination: Destination;
}

const FeaturedDestination = ({ destination }: FeaturedDestinationProps) => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-xl">
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-6 md:p-10">
        <div className="animate-fade-in">
          <div className="flex flex-wrap gap-2 mb-3">
            {destination.tags.activities.slice(0, 2).map((activity, index) => (
              <span key={index} className="tag tag-activity">
                {activity}
              </span>
            ))}
            <span className="tag tag-climate">
              {destination.tags.climate[0]}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-heading">
            {destination.name}, {destination.country}
          </h2>
          <p className="text-travel-sand-light mb-6 max-w-lg">
            {destination.description}
          </p>
          <Link to={`/destination/${destination.slug}`}>
            <Button className="bg-travel-terracotta hover:bg-travel-terracotta-dark">
              Explore Destination
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;
