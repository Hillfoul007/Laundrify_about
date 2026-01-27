import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_IMAGES = [
  {
    url: "https://images.pexels.com/photos/4959878/pexels-photo-4959878.jpeg",
    alt: "Fresh clean laundry service in basket - professional dry cleaning and washing",
  },
  {
    url: "https://images.pexels.com/photos/28576623/pexels-photo-28576623.jpeg",
    alt: "Folded white shirts with iron - express laundry service ready for delivery",
  },
  {
    url: "https://images.pexels.com/photos/6721897/pexels-photo-6721897.jpeg",
    alt: "Happy customer receiving laundry delivery service - free pickup and delivery",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
      {/* Images */}
      {CAROUSEL_IMAGES.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-lg hover:shadow-xl"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
