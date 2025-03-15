import { useState } from 'react';
import { SearchForm } from '@/components/search-form';
import { PropertyCard } from '@/components/property-card';
import { Button } from '@/components/ui/button';
import { Sliders, ChevronDown } from 'lucide-react';

// Временные данные для демонстрации
const properties = [
  {
    id: '1',
    title: 'Уютная студия в центре',
    description: 'Современная студия с отличным расположением рядом с метро Площадь Ленина. Свежий ремонт, все удобства для комфортного проживания.',
    price: 2800,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Ленина',
  },
  {
    id: '2',
    title: 'Просторная квартира с видом',
    description: 'Светлая 2-комнатная квартира с панорамным видом на город. В пешей доступности от метро Красный проспект.',
    price: 3500,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
  },
  {
    id: '3',
    title: 'Комфортные апартаменты',
    description: 'Стильные апартаменты в новом доме. Удобная транспортная доступность, рядом метро Площадь Маркса.',
    price: 3200,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Маркса',
  },
  {
    id: '4',
    title: 'Студия с видом на реку',
    description: 'Уютная студия с панорамными окнами и видом на Обь. Свежий ремонт, новая мебель.',
    price: 2400,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Речной вокзал',
  },
  {
    id: '5',
    title: 'Двухкомнатная в тихом центре',
    description: 'Просторная квартира в историческом центре. Высокие потолки, дизайнерский ремонт.',
    price: 3600,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Ленина',
  },
  {
    id: '6',
    title: 'Апартаменты бизнес-класса',
    description: 'Современные апартаменты в новом ЖК. Подземный паркинг, консьерж.',
    price: 4000,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
  },
];

export function CatalogPage() {
  const [sortBy, setSortBy] = useState('popular');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">
              Каталог квартир в Новосибирске
            </h1>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Sliders className="h-4 w-4" />
              Фильтры
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Студии</Button>
              <Button variant="outline" size="sm">1-комнатные</Button>
              <Button variant="outline" size="sm">2-комнатные</Button>
              <Button variant="outline" size="sm">3+ комнат</Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Сортировать:</span>
            <Button variant="ghost" className="gap-2">
              {sortBy === 'popular' && 'По популярности'}
              {sortBy === 'price-asc' && 'Сначала дешевле'}
              {sortBy === 'price-desc' && 'Сначала дороже'}
              {sortBy === 'rating' && 'По рейтингу'}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            Показать еще
          </Button>
        </div>
      </div>
    </div>
  );
}