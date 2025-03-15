import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Фиксим проблему с маркерами Leaflet в React
const icon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Координаты популярных районов Новосибирска
const districts = [
  {
    id: 1,
    name: 'Площадь Ленина',
    description: 'Исторический центр города',
    coordinates: [55.0304, 82.9274],
    properties: 15,
  },
  {
    id: 2,
    name: 'Красный проспект',
    description: 'Главная улица города',
    coordinates: [55.0411, 82.9344],
    properties: 23,
  },
  {
    id: 3,
    name: 'Площадь Маркса',
    description: 'Деловой центр левого берега',
    coordinates: [54.9825, 82.8981],
    properties: 18,
  },
  {
    id: 4,
    name: 'Речной вокзал',
    description: 'Живописный район у реки',
    coordinates: [54.9852, 82.9489],
    properties: 12,
  },
];

export function MapSection() {
  return (
    <MapContainer
      center={[55.0304, 82.9274]} // Центр Новосибирска
      zoom={12}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {districts.map((district) => (
        <Marker
          key={district.id}
          position={district.coordinates as [number, number]}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold text-lg">{district.name}</h3>
              <p className="text-gray-600">{district.description}</p>
              <p className="mt-2 text-sm">
                <span className="font-medium">{district.properties}</span> объектов в этом районе
              </p>
              <button
                onClick={() => window.location.href = `/catalog?location=${encodeURIComponent(district.name)}`}
                className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Показать все
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}