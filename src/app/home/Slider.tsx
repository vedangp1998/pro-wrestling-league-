"use client";

import BannerImage1 from "../assets/Image/Banner-1.jpeg";
import BannerImage2 from "../assets/Image/Banner-2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  BannerImage2,
  BannerImage1,
  BannerImage2,
  BannerImage1,
  BannerImage2,
  BannerImage1,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getPositionClass = (index: number) => {
    const leftPeek = (currentIndex - 2 + images.length) % images.length;
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    const rightPeek = (currentIndex + 2) % images.length;

    if (index === leftPeek)
      return "-translate-x-[160%] scale-75 opacity-20 z-0";
    if (index === prev) return "-translate-x-[105%] scale-90 opacity-50 z-10";
    if (index === currentIndex)
      return "translate-x-0 scale-100 opacity-100 z-20";
    if (index === next) return "translate-x-[105%] scale-90 opacity-50 z-10";
    if (index === rightPeek)
      return "translate-x-[160%] scale-75 opacity-20 z-0";

    return "hidden";
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-[1440px] h-[120px] sm:h-[160px] md:h-[180px] lg:h-[200px] xl:h-[220px] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/95 pointer-events-none z-0" />

        {/* Slide Images */}
        {images.map((src, index) => {
          const positionClass = getPositionClass(index);

          return (
            <div
              key={index}
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out transform ${positionClass} z-10`}
            >
              <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] aspect-[16/9] overflow-hidden shadow-xl">
                {index === currentIndex && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-red-500 z-30" />
                )}

                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 200px, 
                         (max-width: 768px) 240px, 
                         (max-width: 1024px) 280px, 
                         (max-width: 1280px) 320px, 
                         360px"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Navigation Buttons beside center image */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-center z-50 pointer-events-none">
          <div className="flex justify-between items-center w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] px-2 sm:px-3 pointer-events-auto">
            <button
              onClick={prevSlide}
              className="bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full shadow-md backdrop-blur"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full shadow-md backdrop-blur"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
