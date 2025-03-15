import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

// Список всех станций метро Новосибирска
const metroStations = [
  'Площадь Маркса',
  'Студенческая',
  'Речной вокзал',
  'Октябрьская',
  'Площадь Ленина',
  'Красный проспект',
  'Гагаринская',
  'Заельцовская',
  'Березовая роща',
  'Золотая Нива',
  'Маршала Покрышкина',
  'Сибирская',
  'Площадь Гарина-Михайловского',
];

export function SearchForm() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location,
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      guests: guests.toString(),
    });
    navigate(`/catalog?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Локация */}
        <div className="relative">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Район или метро
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Например: Площадь Ленина"
          />
        </div>

        {/* Дата заезда */}
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
            Дата заезда
          </label>
          <input
            type="date"
            id="checkIn"
            value={dates.checkIn}
            onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Дата выезда */}
        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
            Дата выезда
          </label>
          <input
            type="date"
            id="checkOut"
            value={dates.checkOut}
            onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Количество гостей */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Гости
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="px-3 py-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-full px-4 py-2 border-y border-gray-300 text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setGuests(guests + 1)}
              className="px-3 py-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Кнопка поиска */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Найти жилье
        </button>
      </div>
    </form>
  );
}