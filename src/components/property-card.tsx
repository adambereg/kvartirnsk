import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  metro: string;
}

export function PropertyCard({
  id,
  title,
  description,
  price,
  rating,
  imageUrl,
  metro,
}: PropertyCardProps) {
  return (
    <Link to={`/properties/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-lg font-semibold text-gray-900">{price} ₽</p>
          </div>
          <p className="mb-2 text-sm text-gray-600">{metro}</p>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}