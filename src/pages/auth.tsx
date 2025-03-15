import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Home, Mail, Lock, User, Building } from 'lucide-react';

export function AuthPage() {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'guest',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      role: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here will be the actual authentication logic
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full border-b bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">kvartirnsk.ru</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {isRegistered ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold">Проверьте вашу почту</h2>
              <p className="text-gray-600">
                Пожалуйста, зайдите в вашу почту и подтвердите регистрацию, перейдя по ссылке в письме.
              </p>
              <Button
                className="w-full"
                onClick={() => navigate('/')}
              >
                Вернуться на главную
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 w-full mb-8">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Добро пожаловать</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Пароль
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="password"
                          name="password"
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Войти
                    </Button>
                  </form>
                </div>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Создать аккаунт</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Пароль
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="password"
                          name="password"
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Подтвердите пароль
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          required
                          className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Выберите роль
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none">
                          <input
                            type="radio"
                            name="role"
                            value="guest"
                            className="sr-only"
                            checked={formData.role === 'guest'}
                            onChange={handleRoleChange}
                          />
                          <div className="flex flex-1 items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium">Гость</div>
                            </div>
                          </div>
                          <div
                            className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                              formData.role === 'guest'
                                ? 'border-primary'
                                : 'border-transparent'
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                        <label className="relative flex cursor-pointer rounded-lg border p-4 focus:outline-none">
                          <input
                            type="radio"
                            name="role"
                            value="landlord"
                            className="sr-only"
                            checked={formData.role === 'landlord'}
                            onChange={handleRoleChange}
                          />
                          <div className="flex flex-1 items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                              <Building className="h-5 w-5 text-primary" />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium">Арендодатель</div>
                            </div>
                          </div>
                          <div
                            className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                              formData.role === 'landlord'
                                ? 'border-primary'
                                : 'border-transparent'
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Зарегистрироваться
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
    </div>
  );
}