import { SearchForm } from '../components/search-form';
import { MapSection } from '../components/map-section';
import { DealsSlider } from '../components/deals-slider';
import { ReviewsSection } from '../components/reviews-section';

export function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero секция с поиском */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Найдите идеальное жилье в Новосибирске
          </h1>
          <div className="w-full max-w-3xl">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Секция с картой */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Популярные районы</h2>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <MapSection />
        </div>
      </section>

      {/* Секция со специальными предложениями */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Специальные предложения</h2>
        <DealsSlider />
      </section>

      {/* Секция с отзывами */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Отзывы наших гостей</h2>
          <ReviewsSection />
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-8">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Проверенные хозяева</h3>
            <p className="text-gray-600">Мы тщательно проверяем всех владельцев жилья</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстрое бронирование</h3>
            <p className="text-gray-600">Мгновенное подтверждение бронирования</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-gray-600">Мы всегда на связи и готовы помочь</p>
          </div>
        </div>
      </section>
    </div>
  );
}