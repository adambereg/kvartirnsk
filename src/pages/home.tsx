import { SearchForm } from '@/components/search-form';
import { PropertyCard } from '@/components/property-card';
import { DealsSlider } from '@/components/deals-slider';
import { ReviewsSection } from '@/components/reviews-section';
import { MapSection } from '@/components/map-section';

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
    location: { lat: 55.0304, lng: 82.9274 }, // Площадь Ленина
  },
  {
    id: '2',
    title: 'Просторная квартира с видом',
    description: 'Светлая 2-комнатная квартира с панорамным видом на город. В пешей доступности от метро Красный проспект.',
    price: 3500,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
    location: { lat: 55.0411, lng: 82.9344 }, // Красный проспект
  },
  {
    id: '3',
    title: 'Комфортные апартаменты',
    description: 'Стильные апартаменты в новом доме. Удобная транспортная доступность, рядом метро Площадь Маркса.',
    price: 3200,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Маркса',
    location: { lat: 54.9825, lng: 82.8981 }, // Площадь Маркса
  },
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
    location: { lat: 54.9852, lng: 82.9489 }, // Речной вокзал
  },
];

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
];

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
  {
    id: '4',
    userName: 'Дмитрий Козлов',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    propertyId: '4',
    propertyTitle: 'Студия с видом на реку',
    propertyImage: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.7,
    text: 'Прекрасное место для отдыха! Вид на реку просто потрясающий, особенно на закате. В квартире есть все необходимое, очень удобная кровать. Обязательно приеду еще!',
    date: '1 февраля 2024',
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative py-20 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Найдите идеальное жилье в Новосибирске
            </h1>
            <p className="mt-6 text-lg leading-8">
              Посуточная аренда квартир и апартаментов в любом районе города
            </p>
          </div>
          <SearchForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Квартиры на карте</h2>
          </div>
          <MapSection properties={properties} />
        </div>
      </section>
      
      {/* Popular Apartments Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Популярные варианты</h2>
            <a href="/catalog" className="text-primary hover:text-primary/90 font-medium">
              Смотреть все
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Скидки и акции</h2>
            <a href="/deals" className="text-primary hover:text-primary/90 font-medium">
              Все акции
            </a>
          </div>
          <DealsSlider deals={deals} />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Отзывы гостей</h2>
            <a href="/reviews" className="text-primary hover:text-primary/90 font-medium">
              Все отзывы
            </a>
          </div>
          <ReviewsSection reviews={reviews} />
        </div>
      </section>
    </>
  );
}