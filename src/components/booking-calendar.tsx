import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

interface Property {
  id: string;
  title: string;
}

interface BookingCalendarProps {
  properties: Property[];
}

export function BookingCalendar({ properties }: BookingCalendarProps) {
  const [selectedProperty, setSelectedProperty] = useState<string>('');

  // Временные данные для демонстрации
  const bookings = [
    {
      propertyId: '1',
      startDate: new Date(2024, 2, 15),
      endDate: new Date(2024, 2, 20),
      status: 'confirmed', // confirmed, pending, checkedIn, checkedOut, blocked
      guest: {
        name: 'Анна Петрова',
        phone: '+7 (999) 123-45-67',
      },
      price: 2800,
    },
    {
      propertyId: '2',
      startDate: new Date(2024, 2, 18),
      endDate: new Date(2024, 2, 25),
      status: 'checkedIn',
      guest: {
        name: 'Дмитрий Козлов',
        phone: '+7 (999) 234-56-78',
      },
      price: 3500,
    },
  ];

  const statusColors = {
    confirmed: 'bg-green-200',
    pending: 'bg-yellow-200',
    checkedIn: 'bg-blue-200',
    checkedOut: 'bg-gray-200',
    blocked: 'bg-black',
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex gap-6">
        {/* Properties List */}
        <div className="w-64 border-r pr-6">
          <h3 className="font-semibold mb-4">Объекты</h3>
          <div className="space-y-2">
            <button
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedProperty === '' ? 'bg-primary text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedProperty('')}
            >
              Все объекты
            </button>
            {properties.map((property) => (
              <button
                key={property.id}
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedProperty === property.id ? 'bg-primary text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedProperty(property.id)}
              >
                {property.title}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="font-semibold">Легенда</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-200" />
                  <span>Подтверждено</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-yellow-200" />
                  <span>Ожидает подтверждения</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-200" />
                  <span>Гость заселился</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-200" />
                  <span>Гость выехал</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-black" />
                  <span>Даты закрыты</span>
                </div>
              </div>
            </div>
          </div>
          <Calendar
            mode="multiple"
            selected={[]}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
}