import { SearchForm } from '@/components/search-form';
import { PropertyCard } from '@/components/property-card';
import { Percent } from 'lucide-react';

// Временные данные для демонстрации
const deals = [
  {
    id: '4',
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
    id: '5',
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
    id: '6',
    title: 'Апартаменты бизнес-класса',
    description: 'Современные апартаменты в новом ЖК. Подземный паркинг, консьерж.',
    price: 4000,
    oldPrice: 5000,
    discount: 25,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
  },
  {
    id: '7',
    title: 'Стильная студия у метро',
    description: 'Современная студия с дизайнерским ремонтом. 5 минут пешком до метро.',
    price: 2200,
    oldPrice: 2800,
    discount: 20,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Студенческая',
  },
  {
    id: '8',
    title: 'Семейные апартаменты',
    description: 'Просторная трехкомнатная квартира с детской комнатой и игровой зоной.',
    price: 4500,
    oldPrice: 5500,
    discount: 18,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Золотая Нива',
  },
  {
    id: '9',
    title: 'Премиум квартира в центре',
    description: 'Эксклюзивная квартира с панорамными окнами и террасой.',
    price: 5500,
    oldPrice: 7000,
    discount: 21,
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Ленина',
  }
];

export function DealsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white mb-8">
              <h1 className="text-4xl font-bold mb-4">Скидки и специальные предложения</h1>
              <p className="text-lg">
                Лучшие цены на аренду квартир в Новосибирске
              </p>
            </div>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="relative">
                <PropertyCard {...deal} />
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1.5 text-white">
                  <Percent className="h-4 w-4" />
                  <span className="text-sm font-medium">-{deal.discount}%</span>
                </div>
                <div className="absolute right-4 top-4">
                  <p className="text-sm text-gray-500 line-through">{deal.oldPrice} ₽</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Как получить скидку?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Длительное бронирование</h3>
                <p className="text-gray-600">Скидка до 25% при бронировании от 7 дней</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Раннее бронирование</h3>
                <p className="text-gray-600">Скидка до 20% при бронировании за 30 дней</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Постоянным гостям</h3>
                <p className="text-gray-600">Скидка до 15% на повторное бронирование</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}