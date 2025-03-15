import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Property {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  metro: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface MapSectionProps {
  properties: Property[];
}

// Создаем кастомную иконку для маркера
const customIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function MapSection({ properties }: MapSectionProps) {
  // Центр Новосибирска
  const center = { lat: 55.0084, lng: 82.9357 };

  useEffect(() => {
    // Фикс для иконок Leaflet в React
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={property.location}
            icon={customIcon}
          >
            <Popup>
              <div className="w-64">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="font-medium text-gray-900 mb-1">{property.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{property.metro}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{property.price} ₽/сутки</span>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="text-sm">{property.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}