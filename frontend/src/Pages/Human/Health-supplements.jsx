import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../Components/Human/ProductCard.jsx";
import human_data from "../../Data/Human_Data.jsx";

const images = [
  "/Assets/banner/Health supplements.webp",
  "/Assets/banner/Auribery Plus.jpg",
  "/Assets/banner/Reintoni.webp",
];

const Healthsupplements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <div className="font-sans">
      <div className="relative">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full transition-transform duration-500 ease-in-out"
            loading={"eager"}
          />
          
        </div>

        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/50 text-white p-2 rounded-full hover:bg-gray-800 z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-2xl transition-colors duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
      <div className="flex flex-col min-h-screen w-full p-4">
        {human_data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
            {human_data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No health supplements available.</p>
        )}
      </div>
    </div>
  );
};

export default Healthsupplements;
