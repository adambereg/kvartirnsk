import { useState } from 'react';
import { Button } from './ui/button';
import { Home, LogIn, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">kvartirnsk.ru</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/catalog" className="text-sm font-medium">
            Каталог
          </Link>
          <Link to="/deals" className="text-sm font-medium">
            Скидки и акции
          </Link>
          <Link to="/landlord" className="text-sm font-medium">
            Кабинет арендодателя
          </Link>
          <Link to="/admin" className="text-sm font-medium">
            Панель администратора
          </Link>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/auth')}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Войти
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/catalog" 
              className="flex items-center space-x-2 text-sm font-medium p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/deals" 
              className="flex items-center space-x-2 text-sm font-medium p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Скидки и акции
            </Link>
            <Link 
              to="/landlord" 
              className="flex items-center space-x-2 text-sm font-medium p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Кабинет арендодателя
            </Link>
            <Link 
              to="/admin" 
              className="flex items-center space-x-2 text-sm font-medium p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Панель администратора
            </Link>
            <Button 
              variant="outline" 
              className="w-full justify-center"
              onClick={() => {
                navigate('/auth');
                setIsMobileMenuOpen(false);
              }}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}