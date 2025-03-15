import { useState } from 'react';
import { Link } from 'react-router-dom';

// Временные данные для демонстрации
const deals = [
  {
    id: '1',
    title: 'Студия с видом на реку',
    description: 'Уютная студия с панорамными окнами и видом на Обь. Свежий ремонт, новая мебель.',
    price: 2400,
    oldPrice: 3000,
    discount: 20,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Речной вокзал',
  },
  {
    id: '2',
    title: 'Двухкомнатная в тихом центре',
    description: 'Просторная квартира в историческом центре. Высокие потолки, дизайнерский ремонт.',
    price: 3600,
    oldPrice: 4500,
    discount: 15,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Ленина',
  },
  {
    id: '3',
    title: 'Апартаменты бизнес-класса',
    description: 'Современные апартаменты в новом ЖК. Подземный паркинг, консьерж.',
    price: 4000,
    oldPrice: 5000,
    discount: 25,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
  },
];

export function DealsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {deals.map((deal) => (
            <div key={deal.id} className="w-full flex-shrink-0">
              <div className="relative">
                <img
                  src={deal.imageUrl}
                  alt={deal.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
                  -{deal.discount}%
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{deal.title}</h3>
                  <p className="text-white/90 mb-4">{deal.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 line-through">{deal.oldPrice} ₽/сутки</p>
                      <p className="text-white text-2xl font-bold">{deal.price} ₽/сутки</p>
                    </div>
                    <Link
                      to={`/properties/${deal.id}`}
                      className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {deals.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}