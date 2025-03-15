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
  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6">
      <form className="grid gap-6 md:grid-cols-4">
        <div className="flex flex-col justify-end">
          <label className="text-sm font-medium leading-none text-white mb-2">
            Станция метро
          </label>
          <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
            <option value="">Выберите станцию</option>
            {metroStations.map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-end">
          <label className="text-sm font-medium leading-none text-white mb-2">
            Дата заезда
          </label>
          <input
            type="date"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col justify-end">
          <label className="text-sm font-medium leading-none text-white mb-2">
            Дата выезда
          </label>
          <input
            type="date"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col justify-end">
          <Button type="submit" className="h-10 w-full">
            <Search className="mr-2 h-4 w-4" />
            Найти
          </Button>
        </div>
      </form>
    </div>
  );
}