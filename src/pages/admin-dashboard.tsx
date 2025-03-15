import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Settings,
  LogOut,
  Users,
  Home,
  MessageSquare,
  Star,
  Bell,
  Ban,
  CheckCircle,
  XCircle,
  History,
  Percent,
  UserCheck,
  Building2,
  CalendarCheck,
} from 'lucide-react';

// Временные данные для демонстрации
const statistics = {
  users: {
    total: 1250,
    guests: 1000,
    landlords: 250,
  },
  properties: {
    total: 450,
    active: 380,
    moderation: 70,
  },
  bookings: {
    total: 2500,
    active: 150,
    completed: 2350,
  },
};

const propertiesToModerate = [
  {
    id: '1',
    title: 'Уютная студия в центре',
    landlord: 'Михаил Иванов',
    submitted: '2024-03-15',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'],
    status: 'pending',
  },
  {
    id: '2',
    title: 'Просторная квартира с видом',
    landlord: 'Елена Смирнова',
    submitted: '2024-03-14',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'],
    status: 'pending',
  },
];

const reviewsToModerate = [
  {
    id: '1',
    author: 'Анна Петрова',
    property: 'Уютная студия в центре',
    rating: 4.5,
    text: 'Отличная квартира, чисто и уютно!',
    submitted: '2024-03-15',
    status: 'pending',
    flagged: false,
  },
  {
    id: '2',
    author: 'Дмитрий Козлов',
    property: 'Просторная квартира с видом',
    rating: 2.0,
    text: 'Неприемлемые условия проживания.',
    submitted: '2024-03-14',
    status: 'pending',
    flagged: true,
  },
];

const users = [
  {
    id: '1',
    name: 'Михаил Иванов',
    email: 'mikhail@example.com',
    role: 'landlord',
    status: 'active',
    registeredAt: '2024-01-15',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: '2',
    name: 'Анна Петрова',
    email: 'anna@example.com',
    role: 'guest',
    status: 'active',
    registeredAt: '2024-02-01',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

const messages = [
  {
    id: '1',
    from: 'Михаил Иванов',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'Здравствуйте! Когда будет рассмотрена моя заявка?',
    date: '15:30',
    unread: true,
  },
  {
    id: '2',
    from: 'Анна Петрова',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    message: 'У меня проблема с бронированием.',
    date: 'Вчера',
    unread: false,
  },
];

export function AdminDashboardPage() {
  const [platformSettings, setPlatformSettings] = useState({
    commission: 5,
    emailNotifications: true,
    smsNotifications: true,
  });

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPlatformSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">Администратор</h2>
                  <p className="text-sm text-gray-500">admin@kvartirnsk.ru</p>
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

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Объекты на модерации</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  {statistics.properties.moderation}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Новые отзывы</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {reviewsToModerate.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Активные чаты</span>
                <span className="text-sm font-medium">{messages.length}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="dashboard">Панель управления</TabsTrigger>
                <TabsTrigger value="properties">Модерация объявлений</TabsTrigger>
                <TabsTrigger value="reviews">Модерация отзывов</TabsTrigger>
                <TabsTrigger value="users">Пользователи</TabsTrigger>
                <TabsTrigger value="messages">Сообщения</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Статистика платформы</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Users Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Пользователи</h3>
                          <p className="text-3xl font-bold">{statistics.users.total}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Гости</span>
                          <span className="font-medium">{statistics.users.guests}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Арендодатели</span>
                          <span className="font-medium">{statistics.users.landlords}</span>
                        </div>
                      </div>
                    </div>

                    {/* Properties Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <Building2 className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Объекты</h3>
                          <p className="text-3xl font-bold">{statistics.properties.total}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Активные</span>
                          <span className="font-medium">{statistics.properties.active}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">На модерации</span>
                          <span className="font-medium">{statistics.properties.moderation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bookings Stats */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          <CalendarCheck className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Бронирования</h3>
                          <p className="text-3xl font-bold">{statistics.bookings.total}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Активные</span>
                          <span className="font-medium">{statistics.bookings.active}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Завершённые</span>
                          <span className="font-medium">{statistics.bookings.completed}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Properties Moderation Tab */}
              <TabsContent value="properties">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Модерация объявлений</h2>
                    <div className="flex gap-4">
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все статусы</option>
                        <option value="pending">На рассмотрении</option>
                        <option value="approved">Одобрено</option>
                        <option value="rejected">Отклонено</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {propertiesToModerate.map((property) => (
                      <div key={property.id} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex gap-6">
                          <div className="w-48 h-32 rounded-lg overflow-hidden">
                            <img
                              src={property.images[0]}
                              alt={property.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-semibold">{property.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  Арендодатель: {property.landlord}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                  Дата подачи: {property.submitted}
                                </p>
                              </div>
                              <div className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                                На рассмотрении
                              </div>
                            </div>
                            <div className="space-y-4">
                              <textarea
                                placeholder="Комментарий к модерации..."
                                className="w-full rounded-md border border-gray-300 px-3 py-2 h-24"
                              />
                              <div className="flex gap-2">
                                <Button className="gap-2">
                                  <CheckCircle className="h-4 w-4" />
                                  Одобрить
                                </Button>
                                <Button variant="outline" className="gap-2">
                                  <XCircle className="h-4 w-4" />
                                  Отклонить
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Reviews Moderation Tab */}
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Модерация отзывов</h2>
                    <div className="flex gap-4">
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все отзывы</option>
                        <option value="flagged">С нарушениями</option>
                        <option value="pending">На рассмотрении</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {reviewsToModerate.map((review) => (
                      <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">{review.author}</h3>
                              {review.flagged && (
                                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                                  Нарушение
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{review.property}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{review.text}</p>
                        <div className="space-y-4">
                          <textarea
                            placeholder="Комментарий к модерации..."
                            className="w-full rounded-md border border-gray-300 px-3 py-2 h-24"
                          />
                          <div className="flex gap-2">
                            <Button className="gap-2">
                              <CheckCircle className="h-4 w-4" />
                              Одобрить
                            </Button>
                            <Button variant="outline" className="gap-2">
                              <XCircle className="h-4 w-4" />
                              Отклонить
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Users Tab */}
              <TabsContent value="users">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Пользователи</h2>
                    <div className="flex gap-4">
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все роли</option>
                        <option value="guest">Гости</option>
                        <option value="landlord">Арендодатели</option>
                      </select>
                      <select className="rounded-md border border-gray-300 px-3 py-1.5">
                        <option value="">Все статусы</option>
                        <option value="active">Активные</option>
                        <option value="blocked">Заблокированные</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div key={user.id} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{user.name}</h3>
                              <p className="text-sm text-gray-500">{user.email}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                  user.role === 'landlord'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {user.role === 'landlord' ? 'Арендодатель' : 'Гость'}
                                </span>
                                <span className="text-sm text-gray-500">
                                  Регистрация: {user.registeredAt}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                              <History className="h-4 w-4" />
                              История
                            </Button>
                            {user.status === 'active' ? (
                              <Button variant="outline" size="sm" className="gap-2">
                                <Ban className="h-4 w-4" />
                                Заблокировать
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm" className="gap-2">
                                <UserCheck className="h-4 w-4" />
                                Разблокировать
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  {/* Commission Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Комиссия платформы</h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        name="commission"
                        min="0"
                        max="100"
                        className="w-24 rounded-md border border-gray-300 px-3 py-2"
                        value={platformSettings.commission}
                        onChange={handleSettingsChange}
                      />
                      <span className="text-gray-500">%</span>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Настройки уведомлений</h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          className="rounded border-gray-300"
                          checked={platformSettings.emailNotifications}
                          onChange={handleSettingsChange}
                        />
                        <span className="ml-2">Email-уведомления</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          className="rounded border-gray-300"
                          checked={platformSettings.smsNotifications}
                          onChange={handleSettingsChange}
                        />
                        <span className="ml-2">SMS-уведомления</span>
                      </label>
                    </div>
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