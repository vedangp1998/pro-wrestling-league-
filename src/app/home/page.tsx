"use client";

import Image from "next/image";
import HeroImage from "../assets/Image/Hero.svg";
import BannerImage1 from "../assets/Image/Banner-1.jpeg";
import BannerImage2 from "../assets/Image/Banner-2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  BannerImage2,
  BannerImage1,
  BannerImage2,
  BannerImage1,
  BannerImage2,
  BannerImage1,
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      return "-translate-x-[160%] scale-75 opacity-30 z-0";
    if (index === prev) return "-translate-x-[105%] scale-90 opacity-50 z-10";
    if (index === currentIndex)
      return "translate-x-0 scale-100 opacity-100 z-20";
    if (index === next) return "translate-x-[105%] scale-90 opacity-50 z-10";
    if (index === rightPeek)
      return "translate-x-[160%] scale-75 opacity-30 z-0";

    return "hidden";
  };
  return (
    <>
      <div className="w-full  m-auto  h-[756px] flex items-center justify-center overflow-hidden">
        <Image
          src={HeroImage}
          alt="Hero-Image"
          className="w-[1440px] h-[756px] object-fit"
          priority
        />
      </div>

      <div className="w-full h-[0px] flex items-center justify-center bg-black">
        <div className="relative max-w-[1440px] w-full h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/95 to-black/100 z-0 pointer-events-none" />
          {images.map((src, index) => {
            const positionClass = getPositionClass(index);

            return (
              <div
                key={index}
                className={`absolute top-0 transition-all duration-700 ease-in-out transform ${positionClass}`}
              >
                {/* Image Wrapper without transparency */}
                <div className="relative w-[379px] h-[198px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Left Button (on left image) */}
                {index ===
                  (currentIndex - 1 + images.length) % images.length && (
                  <button
                    onClick={prevSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-30"
                  >
                    <ChevronLeft size={28} />
                  </button>
                )}

                {/* Right Button (on right image) */}
                {index === (currentIndex + 1) % images.length && (
                  <button
                    onClick={nextSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-30"
                  >
                    <ChevronRight size={28} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[1440px] h-[131px] bg-gradient-to-b from-black/20 to-black mx-auto relative mt-[-80px] z-1"></div>
    </>
  );
};

export default HomePage;
