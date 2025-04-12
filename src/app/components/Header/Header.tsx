"use client";

import Image from "next/image";
import Logo from "../../assets/Logos/Logo.svg";
import YoutubeIcon from "../../assets/Icons/Youtuber.svg";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import RectangleIcon from "../../assets/Icons/Rectangle.svg";

const Navlinks = [
  "Home",
  "About Us",
  "Pro Wrestling League",
  "Star Cast",
  "News",
  "Gallery",
  "Video",
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const current = navRefs.current[activeIndex];
    if (current) {
      setUnderlineStyle({
        left: current.offsetLeft - 12,
        width: current.offsetWidth + 24,
      });
    }
  }, [activeIndex]);
  return (
    <>
      <header className="relative w-full bg-[#12375c] h-[103px] ">
        <div className="relative w-full max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="ml-[40px]">
              <Image src={RectangleIcon} alt="Icon" />
              <div className="bg-white rounded-br-[34px] rounded-bl-[34px] w-[148px] m-auto p-4">
                <Image
                  className=""
                  src={Logo}
                  alt="Logo"
                  width={134}
                  height={75}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-end gap-6 mt-2 mr-16">
                <div className="text-white text-[4px] sm:text-base whitespace-nowrap">
                  Watch Haryana Hammers vs MP Yodha Live On 16 April (SonySix,
                  SonyTen)
                </div>
                <Image
                  src={YoutubeIcon}
                  alt="Icon"
                  width={19}
                  height={19}
                  className="bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center p-1"
                />
              </div>
              <div
                className="bg-[#C72200] flex items-center justify-center w-[1029px] h-[61px] mt-4 relative"
                style={{
                  clipPath: "polygon(2% 0%, 0% 100%, 100% 100%, 100% 0%)",
                }}
              >
                {/* Animated underline */}
                <motion.div
                  className="absolute top-0 h-[4px] bg-white "
                  animate={underlineStyle}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  style={{ position: "absolute" }}
                />

                <nav className="flex items-center gap-x-16 px-12 z-20 h-full">
                  {Navlinks.map((item, index) => (
                    <button
                      key={index}
                      ref={(el) => {
                        navRefs.current[index] = el;
                      }}
                      onClick={() => setActiveIndex(index)}
                      className="relative text-white text-sm sm:text-base md:text-lg font-medium whitespace-nowrap h-full flex items-center"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
