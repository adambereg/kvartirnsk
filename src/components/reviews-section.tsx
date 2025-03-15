import { useState } from 'react';

// Временные данные для демонстрации
const reviews = [
  {
    id: '1',
    userName: 'Анна Петрова',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    propertyId: '1',
    propertyTitle: 'Уютная студия в центре',
    propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 5.0,
    text: 'Прекрасная квартира! Очень чисто, уютно и стильно. Расположение идеальное - рядом метро, магазины и кафе. Хозяева очень приветливые и отзывчивые. Обязательно вернусь сюда снова!',
    date: '15 февраля 2024',
  },
  {
    id: '2',
    userName: 'Михаил Иванов',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    propertyId: '2',
    propertyTitle: 'Просторная квартира с видом',
    propertyImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.8,
    text: 'Отличная квартира с потрясающим видом на город! Все необходимое есть, техника новая, интернет быстрый. Единственный небольшой минус - слышимость от соседей, но это не критично.',
    date: '10 февраля 2024',
  },
  {
    id: '3',
    userName: 'Елена Смирнова',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    propertyId: '3',
    propertyTitle: 'Комфортные апартаменты',
    propertyImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.9,
    text: 'Замечательные апартаменты! Все продумано до мелочей, есть абсолютно все для комфортного проживания. Район тихий, спокойный, при этом до метро всего 5 минут пешком.',
    date: '5 февраля 2024',
  },
];

export function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeReview * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={review.propertyImage}
                        alt={review.propertyTitle}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-full object-cover"
                          src={review.userAvatar}
                          alt={review.userName}
                        />
                        <div className="ml-4">
                          <div className="text-lg font-medium text-gray-900">
                            {review.userName}
                          </div>
                          <div className="text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-xl font-semibold text-gray-900">
                          {review.propertyTitle}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className={`w-5 h-5 ${
                                index < Math.floor(review.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-gray-600">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы */}
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveReview(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeReview ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}