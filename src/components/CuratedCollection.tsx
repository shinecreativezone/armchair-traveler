
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Collection } from "@/data/collections";

interface CuratedCollectionProps {
  collection: Collection;
  className?: string;
}

const CuratedCollection = ({ collection, className = "" }: CuratedCollectionProps) => {
  return (
    <Link to={`/collection/${collection.slug}`} className={`block ${className}`}>
      <Card className="overflow-hidden card-hover border-0 h-full">
        <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg">
          <img
            src={collection.imageUrl}
            alt={collection.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <h3 className="text-xl font-bold text-white text-heading">{collection.title}</h3>
          </div>
        </div>
        <CardContent className="pt-4 pb-6">
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">{collection.description}</p>
          <div className="flex items-center text-travel-blue-light font-medium">
            <span>Explore collection</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CuratedCollection;
