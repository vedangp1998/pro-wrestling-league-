"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logos/Logo.svg";
import YoutubeIcon from "../../assets/Icons/Youtuber.svg";
import RectangleIcon from "../../assets/Icons/Rectangle.svg";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navlinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pro Wrestling League", href: "/pro-wrestling-league" },
  { label: "Star Cast", href: "/starcast" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Video", href: "/video" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="relative w-full bg-[#12375c] h-[103px] z-[50] overflow-visible">
      <div className="relative max-w-[1440px] mx-auto w-full h-full px-4 sm:px-0">
        <div className="w-full flex justify-end items-center gap-6 pt-2 pr-2 sm:pr-12 overflow-hidden">
          <div className="text-white text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-nowrap truncate animate-marquee">
            Watch Haryana Hammers vs MP Yodha Live On 16 April (SonySix,
            SonyTen)
          </div>
          <Image
            src={YoutubeIcon}
            alt="YouTube"
            width={19}
            height={19}
            className="bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 p-1"
          />
        </div>

        <div className="flex justify-between items-end h-[calc(103px-2rem)] mt-1">
          <div className="flex flex-col items-center lg:ml-[50px] md:ml-[30px] sm:ml-[20px] mt-[-8px]">
            <div className="w-[90px] sm:w-[120px] md:w-[148px] h-auto mb-[-6px]">
              <Image
                src={RectangleIcon}
                alt="Icon"
                layout="responsive"
                width={156}
                height={18}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-br-[26px] rounded-bl-[26px] w-[90px] sm:w-[120px] md:w-[148px] p-2 sm:p-3">
              <Image
                src={Logo}
                alt="Logo"
                width={134}
                height={75}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col items-end justify-end h-full relative">
            <div
              className="hidden lg:flex bg-[#C72200] items-center h-[61px] relative mt-auto mb-[-10px] mr-0 w-full"
              style={{
                clipPath: "polygon(2% 0%, 0% 100%, 100% 100%, 100% 0%)",
              }}
            >
              <motion.div
                className="absolute top-0 h-[4px] bg-white rounded"
                animate={underlineStyle}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <nav className="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10 px-4 sm:px-6 lg:px-12 z-20 h-full whitespace-nowrap overflow-x-auto w-full">
                {Navlinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    ref={(el) => {
                      navRefs.current[index] = el;
                    }}
                    onClick={() => setActiveIndex(index)}
                    className="text-white text-[12px] sm:text-sm md:text-base font-medium flex-shrink-0 h-full flex items-center"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <button
              className="lg:hidden my-4 mx-2 text-white z-[60]"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[250px] bg-[#C72200] z-[100] shadow-lg p-6 flex flex-col"
              >
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white"
                  >
                    <X size={28} />
                  </button>
                </div>
                <nav className="flex flex-col gap-4 mt-4">
                  {Navlinks.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        rotate: 3,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 12,
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                        y: 2,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveIndex(index);
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-white text-lg font-medium text-left origin-left block w-full"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              <motion.div
                className="fixed inset-0 bg-black z-[90]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
