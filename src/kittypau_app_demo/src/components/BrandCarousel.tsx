
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import carousel1 from '@assets/20251023_1957_Infomercial Retro KittyPaw_simple_compose_01k89mj0v1endv40j3f7gr7dnp_1761267872800.png';
import carousel2 from '@assets/20251023_1957_Infomercial Retro KittyPaw_simple_compose_01k89mj0v2fw284k0h04v0n1r1_1761267872801.png';
import carousel3 from '@assets/37708583-2711-4687-a42a-1c791feb659c_1761267872802.png';
import carousel4 from '@assets/62e7ed80-5f18-4d14-8572-ea0e8fec0537_1761267872800.png';
import carousel5 from '@assets/d9808fd2-abbb-4893-9c27-f8bacb24827b_1761267872803.png';

const carouselImages = [
  {
    src: carousel1,
    alt: 'Before and After - Revoluciona la alimentación de tu mascota',
  },
  {
    src: carousel2,
    alt: 'Stop risking their health - Cuida la salud de tus mascotas',
  },
  {
    src: carousel3,
    alt: 'Deje de poner en riesgo su salud',
  },
  {
    src: carousel4,
    alt: 'Desde Estados Unidos - KittyPaw el plato inteligente',
  },
  {
    src: carousel5,
    alt: 'KittyPaw - Revoluciona la alimentación',
  },
];

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card shadow-lg">
        <img
          src={carouselImages[currentIndex].src}
          alt={carouselImages[currentIndex].alt}
          className="w-full h-full object-contain transition-opacity duration-500"
          data-testid={`img-carousel-${currentIndex}`}
        />
        
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            size="icon"
            variant="secondary"
            className="bg-background/80 backdrop-blur-sm hover-elevate"
            onClick={goToPrevious}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-background/80 backdrop-blur-sm hover-elevate"
            onClick={goToNext}
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
            }`}
            onClick={() => setCurrentIndex(index)}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
