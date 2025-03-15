import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Settings,
  LogOut,
  Plus,
  Home,
  Calendar,
  MessageSquare,
  Star,
  Bell,
  CreditCard,
  Key,
  Edit,
  Eye,
} from 'lucide-react';
import { PropertyCard } from '@/components/property-card';
import { BookingCalendar } from '@/components/booking-calendar';

// Временные данные для демонстрации
const landlord = {
  name: 'Михаил Иванов',
  email: 'mikhail@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  balance: 150000,
};

const properties = [
  {
    id: '1',
    title: 'Уютная студия в центре',
    description: 'Современная студия с отличным расположением рядом с метро Площадь Ленина.',
    price: 2800,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Площадь Ленина',
    status: 'active',
  },
  {
    id: '2',
    title: 'Просторная квартира с видом',
    description: 'Светлая 2-комнатная квартира с панорамным видом на город.',
    price: 3500,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    metro: 'м. Красный проспект',
    status: 'moderation',
  },
];

const bookings = [
  {
    id: '1',
    propertyTitle: 'Уютная студия в центре',
    propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    guestName: 'Анна Петрова',
    guestAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    checkIn: '2024-03-15',
    checkOut: '2024-03-20',
    status: 'pending',
    price: 2800,
  },
  {
    id: '2',
    propertyTitle: 'Просторная квартира с видом',
    propertyImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    guestName: 'Дмитрий Козлов',
    guestAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    checkIn: '2024-03-18',
    checkOut: '2024-03-25',
    status: 'confirmed',
    price: 3500,
  },
];

const messages = [
  {
    id: '1',
    from: 'Анна Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'Здравствуйте! Подскажите, пожалуйста, есть ли парковка рядом с домом?',
    date: '15:30',
    unread: true,
  },
  {
    id: '2',
    from: 'Поддержка',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'У вас новая заявка на бронирование.',
    date: 'Вчера',
    unread: false,
  },
];

export function LandlordDashboardPage() {
  const [userData, setUserData] = useState({
    name: landlord.name,
    email: landlord.email,
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleUserDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={landlord.avatar} alt={landlord.name} />
                  <AvatarFallback>МИ</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{landlord.name}</h2>
                  <p className="text-sm text-gray-500">{landlord.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Настройки
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <LogOut className="mr-2 h-4 w-4" />
                  Выйти
                </Button>
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Мой баланс</h3>
              <div className="text-2xl font-bold mb-4">{landlord.balance} ₽</div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Вывести средства
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Новые заявки</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                  3
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Активные бронирования</span>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Объекты на модерации</span>
                <span className="text-sm font-medium">1</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="properties" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="properties">Мои объекты</TabsTrigger>
                <TabsTrigger value="bookings">Бронирования</TabsTrigger>
                <TabsTrigger value="calendar">Календарь</TabsTrigger>
                <TabsTrigger value="messages">Сообщения</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              {/* Properties Tab */}
              <TabsContent value="properties">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Мои объекты</h2>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Добавить объект
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {properties.map((property) => (
                      <div key={property.id} className="relative">
                        <PropertyCard {...property} />
                        <div className="absolute right-4 top-4 flex gap-2">
                          <Button variant="outline" size="icon" className="bg-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="bg-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute left-4 top-4">
                          <div className={`px-3 py-1 rounded-full text-sm ${
                            property.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : property.status === 'moderation'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {property.status === 'active' ? 'Активно' : 
                             property.status === 'moderation' ? 'На модерации' : 'Неактивно'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Bookings Tab */}
              <TabsContent value="bookings">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Бронирования</h2>
                    <div className="flex gap-4">
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все объекты</option>
                        {properties.map(property => (
                          <option key={property.id} value={property.id}>
                            {property.title}
                          </option>
                        ))}
                      </select>
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все статусы</option>
                        <option value="pending">Ожидает подтверждения</option>
                        <option value="confirmed">Подтверждено</option>
                        <option value="checkedIn">Заселён</option>
                        <option value="completed">Завершено</option>
                        <option value="cancelled">Отменено</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex gap-6">
                          <div className="w-48 h-32 rounded-lg overflow-hidden">
                            <img
                              src={booking.propertyImage}
                              alt={booking.propertyTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-semibold">{booking.propertyTitle}</h3>
                                <div className="flex items-center mt-2">
                                  <Avatar className="h-8 w-8 mr-2">
                                    <AvatarImage src={booking.guestAvatar} alt={booking.guestName} />
                                    <AvatarFallback>{booking.guestName[0]}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm text-gray-600">{booking.guestName}</span>
                                </div>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-sm ${
                                booking.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : booking.status === 'confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {booking.status === 'pending' ? 'Ожидает подтверждения' : 
                                 booking.status === 'confirmed' ? 'Подтверждено' : 'Завершено'}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-gray-500">Заезд</p>
                                <p className="font-medium">{booking.checkIn}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Выезд</p>
                                <p className="font-medium">{booking.checkOut}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Стоимость</p>
                                <p className="font-medium">{booking.price} ₽/сутки</p>
                              </div>
                            </div>
                            {booking.status === 'pending' && (
                              <div className="flex gap-2">
                                <Button>Подтвердить</Button>
                                <Button variant="outline">Отклонить</Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Calendar Tab */}
              <TabsContent value="calendar">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Календарь бронирований</h2>
                  <BookingCalendar properties={properties} />
                </div>
              </TabsContent>

              {/* Messages Tab */}
              <TabsContent value="messages">
                <div className="bg-white rounded-lg shadow-sm">
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`p-4 flex items-start gap-4 ${
                        index !== messages.length - 1 ? 'border-b' : ''
                      }`}
                    >
                      <Avatar>
                        <AvatarImage src={message.avatar} alt={message.from} />
                        <AvatarFallback>{message.from[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold">{message.from}</h4>
                          <span className="text-sm text-gray-500">{message.date}</span>
                        </div>
                        <p className="text-gray-600">{message.message}</p>
                      </div>
                      {message.unread && (
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
                  {/* Profile Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Профиль</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Имя
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full rounded-md border border-gray-300 px-3 py-2"
                          value={userData.name}
                          onChange={handleUserDataChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full rounded-md border border-gray-300 px-3 py-2"
                          value={userData.email}
                          onChange={handleUserDataChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Security Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Безопасность</h3>
                    <Button variant="outline" className="w-full justify-start">
                      <Key className="mr-2 h-4 w-4" />
                      Сменить пароль
                    </Button>
                  </div>

                  {/* Notification Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Уведомления</h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          className="rounded border-gray-300"
                          checked={notifications.emailNotifications}
                          onChange={handleNotificationChange}
                        />
                        <span className="ml-2">Email-уведомления о бронированиях</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          className="rounded border-gray-300"
                          checked={notifications.smsNotifications}
                          onChange={handleNotificationChange}
                        />
                        <span className="ml-2">SMS-уведомления</span>
                      </label>
                    </div>
                  </div>

                  {/* Payment Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Способы оплаты</h3>
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Добавить карту
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}