"use client"; // Only needed if using Next.js App Router

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import Image2 from "../../../assets/Image/news-image/Rectangle 186.svg";
import Image3 from "../../../assets/Image/news-image/Rectangle 187.svg";

// Dummy card data
const cardData = [
  {
    image: Image2,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
  {
    image: Image3,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
  {
    image: Image2,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
  {
    image: Image3,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
  {
    image: Image2,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
  {
    image: Image3,
    title:
      "Pro Wrestling League a great platform for young wrestlers, says Bajrang Punia",
    description:
      "Bajrang Punia said that the upcoming Pro Wrestling league (PWL) will provide young Indian grapplers a great platform to learn from the international wrestlers.",
    label: "Read More",
  },
];

const LatestNews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-16 py-16 bg-[#edeff4] flex flex-col gap-6">
      {/* Section Header */}
      <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full">
        <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
        <div className="w-full sm:w-auto text-[20px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
          PWL Season 4 2025 Latest News
        </div>
      </div>

      {/* Horizontal Slider */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 px-2 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 bg-white rounded-[5px] overflow-hidden border border-[#D8D8D8] w-[300px] sm:w-[350px] md:w-[400px]"
            >
              <div className="w-full">
                <Image
                  src={card.image}
                  alt={`${card.title} image`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-[180px] sm:h-[243px] object-cover rounded-t-[5px]"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-6 leading-[24px]">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-black/63 mb-3 leading-[20px]">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="trapezoid-footer bg-red-600 text-white text-[12px] w-[110px] sm:w-[130px] md:w-[152px] h-[30px] flex items-center justify-center cursor-pointer">
                  {card.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
