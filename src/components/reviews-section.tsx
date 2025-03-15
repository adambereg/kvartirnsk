import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  propertyId: string;
  propertyTitle: string;
  propertyImage: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsProps {
  reviews: Review[];
}

export function ReviewsSection({ reviews }: ReviewsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col rounded-lg border bg-white p-6">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{review.userName}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{review.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="mb-4 text-gray-600">{review.text}</p>
          <Link
            to={`/properties/${review.propertyId}`}
            className="mt-auto flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-gray-50"
          >
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={review.propertyImage}
                alt={review.propertyTitle}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-medium text-gray-900">{review.propertyTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}