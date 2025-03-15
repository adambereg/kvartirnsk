import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Bell,
  CreditCard,
  Key,
  MessageSquare,
  Star,
  Wallet,
  Settings,
  LogOut,
  Plus,
} from 'lucide-react';

// Временные данные для демонстрации
const user = {
  name: 'Анна Петрова',
  email: 'anna@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  balance: 15000,
};

const bookings = [
  {
    id: '1',
    propertyTitle: 'Уютная студия в центре',
    propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    checkIn: '2024-03-15',
    checkOut: '2024-03-20',
    status: 'active',
    price: 2800,
    host: {
      name: 'Михаил Иванов',
      phone: '+7 (999) 123-45-67',
    },
  },
  {
    id: '2',
    propertyTitle: 'Просторная квартира с видом',
    propertyImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    checkIn: '2024-02-10',
    checkOut: '2024-02-15',
    status: 'completed',
    price: 3500,
    host: {
      name: 'Елена Смирнова',
      phone: '+7 (999) 234-56-78',
    },
  },
];

const messages = [
  {
    id: '1',
    from: 'Михаил Иванов',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'Добрый день! Квартира свободна в указанные даты.',
    date: '15:30',
    unread: true,
  },
  {
    id: '2',
    from: 'Поддержка',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'Здравствуйте! Чем могу помочь?',
    date: 'Вчера',
    unread: false,
  },
];

const reviews = [
  {
    id: '1',
    propertyTitle: 'Уютная студия в центре',
    propertyImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 5,
    text: 'Прекрасная квартира! Очень чисто, уютно и стильно.',
    date: '15 февраля 2024',
  },
];

export function DashboardPage() {
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
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
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>АП</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
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
              <div className="text-2xl font-bold mb-4">{user.balance} ₽</div>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Пополнить
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="bookings">Мои бронирования</TabsTrigger>
                <TabsTrigger value="messages">Сообщения</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              {/* Bookings Tab */}
              <TabsContent value="bookings">
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
                            <h3 className="text-xl font-semibold">{booking.propertyTitle}</h3>
                            <div className={`px-3 py-1 rounded-full text-sm ${
                              booking.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status === 'active' ? 'Активно' : 'Завершено'}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
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
                            <div>
                              <p className="text-sm text-gray-500">Хозяин</p>
                              <p className="font-medium">{booking.host.name}</p>
                              <p className="text-sm text-gray-500">{booking.host.phone}</p>
                            </div>
                          </div>
                          {booking.status === 'completed' && (
                            <Button variant="outline">
                              <Star className="mr-2 h-4 w-4" />
                              Оставить отзыв
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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

              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex gap-6">
                        <div className="w-48 h-32 rounded-lg overflow-hidden">
                          <img
                            src={review.propertyImage}
                            alt={review.propertyTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{review.propertyTitle}</h3>
                            <div className="flex items-center">
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <span className="ml-1 font-medium">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">{review.text}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
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