import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Percent } from 'lucide-react';
import { PropertyCard } from './property-card';
import { Button } from './ui/button';

interface Deal extends PropertyCardProps {
  discount: number;
  oldPrice: number;
}

interface DealsSliderProps {
  deals: Deal[];
}

export function DealsSlider({ deals }: DealsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%]">
              <div className="relative">
                <PropertyCard {...deal} />
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-red-500 px-3 py-1.5 text-white">
                  <Percent className="h-4 w-4" />
                  <span className="text-sm font-medium">-{deal.discount}%</span>
                </div>
                <div className="absolute right-4 top-4">
                  <p className="text-sm text-gray-500 line-through">{deal.oldPrice} ₽</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}