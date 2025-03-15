import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapSection } from '@/components/map-section';
import { ReviewsSection } from '@/components/reviews-section';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Star,
  MapPin,
  Wifi,
  Tv,
  Utensils,
  ParkingCircle,
  Bath,
  Wind,
  Edit,
  Plus,
  Percent,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Временные данные для демонстрации
const property = {
  id: '1',
  title: 'Уютная студия в центре',
  description: 'Современная студия с отличным расположением рядом с метро Площадь Ленина. Свежий ремонт, все удобства для комфортного проживания.',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  ],
  price: 2800,
  defaultMinStay: 2,
  location: {
    address: 'ул. Ленина, 10',
    metro: 'м. Площадь Ленина',
    coordinates: { lat: 55.0304, lng: 82.9274 },
  },
  amenities: [
    { icon: Wifi, label: 'Wi-Fi' },
    { icon: Tv, label: 'Телевизор' },
    { icon: Utensils, label: 'Кухня' },
    { icon: ParkingCircle, label: 'Парковка' },
    { icon: Bath, label: 'Ванная' },
    { icon: Wind, label: 'Кондиционер' },
  ],
  cancellationPolicy: 'Бесплатная отмена за 48 часов до заезда',
  rating: 4.8,
  reviews: [
    {
      id: '1',
      userName: 'Анна Петрова',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 5,
      text: 'Прекрасная квартира! Очень чисто, уютно и стильно.',
      date: '15 февраля 2024',
    },
    {
      id: '2',
      userName: 'Дмитрий Козлов',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      rating: 4,
      text: 'Отличное расположение, все рядом.',
      date: '10 февраля 2024',
    },
  ],
  host: {
    id: '1',
    name: 'Михаил Иванов',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    rating: 4.9,
    responseRate: 98,
    responseTime: 'В течение часа',
    registeredSince: 'Январь 2024',
  },
  availability: {
    dates: [
      { date: '2024-03-20', status: 'confirmed', price: 2800 },
      { date: '2024-03-21', status: 'pending', price: 2800 },
      { date: '2024-03-22', status: 'checkedIn', price: 2800 },
      { date: '2024-03-23', status: 'checkedOut', price: 2800 },
      { date: '2024-03-24', status: 'blocked', price: 2800 },
    ],
  },
  isAdmin: true, // Флаг для демонстрации функционала админа
  isLandlord: true, // Флаг для демонстрации функционала арендодателя
};

export function PropertyPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [specialPrice, setSpecialPrice] = useState<string>('');
  const [minStay, setMinStay] = useState<string>('');

  // Функция для получения цвета статуса бронирования
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-200';
      case 'pending':
        return 'bg-yellow-200';
      case 'checkedIn':
        return 'bg-blue-200';
      case 'checkedOut':
        return 'bg-gray-200';
      case 'blocked':
        return 'bg-black';
      default:
        return 'bg-white';
    }
  };

  // Обработчики для галереи
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[500px] bg-gray-900">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-5 w-5" />
                    <span>{property.location.metro}</span>
                  </div>
                </div>
              </div>
              {property.isAdmin && (
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    В популярные
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Percent className="h-4 w-4" />
                    Добавить акцию
                  </Button>
                </div>
              )}
              {property.isLandlord && (
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4" />
                  Редактировать
                </Button>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Описание</h2>
              {isEditing ? (
                <textarea
                  className="w-full h-32 p-3 rounded-md border"
                  defaultValue={property.description}
                />
              ) : (
                <p className="text-gray-600">{property.description}</p>
              )}
            </div>

            {/* Amenities */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Удобства</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <amenity.icon className="h-5 w-5 text-gray-600" />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Расположение</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <MapSection
                  properties={[
                    {
                      id: property.id,
                      title: property.title,
                      price: property.price,
                      rating: property.rating,
                      imageUrl: property.images[0],
                      metro: property.location.metro,
                      location: property.location.coordinates,
                    },
                  ]}
                />
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Отзывы</h2>
              <ReviewsSection reviews={property.reviews} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl font-bold">{property.price} ₽</div>
                <span className="text-gray-500">за сутки</span>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Даты проживания
                  </label>
                  <div className="flex gap-2">
                    <input type="date" className="flex-1 rounded-md border px-3 py-2" />
                    <input type="date" className="flex-1 rounded-md border px-3 py-2" />
                  </div>
                </div>
                <Button className="w-full">Забронировать</Button>
              </div>
            </div>

            {/* Host Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={property.host.avatar} alt={property.host.name} />
                  <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{property.host.name}</h3>
                  <p className="text-sm text-gray-500">
                    На платформе с {property.host.registeredSince}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Рейтинг:</span>
                  <span className="font-medium">{property.host.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span>Отвечает:</span>
                  <span className="font-medium">{property.host.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Частота ответов:</span>
                  <span className="font-medium">{property.host.responseRate}%</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Написать сообщение
              </Button>
            </div>

            {/* Calendar (for landlord) */}
            {property.isLandlord && (
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Календарь доступности</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-200" />
                      <span>Подтверждено</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-yellow-200" />
                      <span>Ожидает</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-200" />
                      <span>Заселён</span>
                    </div>
                  </div>
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={setSelectedDates}
                    className="rounded-md border"
                    modifiers={{
                      booked: property.availability.dates.map(
                        (d) => new Date(d.date)
                      ),
                    }}
                    modifiersStyles={{
                      booked: { backgroundColor: '#000' },
                    }}
                  />
                  {selectedDates.length > 0 && (
                    <div className="space-y-2">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Специальная цена
                        </label>
                        <input
                          type="number"
                          value={specialPrice}
                          onChange={(e) => setSpecialPrice(e.target.value)}
                          className="w-full rounded-md border px-3 py-2"
                          placeholder="Цена за сутки"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Минимальный срок
                        </label>
                        <input
                          type="number"
                          value={minStay}
                          onChange={(e) => setMinStay(e.target.value)}
                          className="w-full rounded-md border px-3 py-2"
                          placeholder="Количество дней"
                        />
                      </div>
                      <Button className="w-full">Сохранить</Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}