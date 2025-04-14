"use client";

import Image from "next/image";
import HeroImage from "../assets/Image/Hero.svg";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full m-auto h-auto flex items-center justify-center overflow-hidden z-0">
        <Image
          src={HeroImage}
          alt="Hero-Image"
          className="object-cover h-auto max-h-[600px]"
          priority
        />

        <div className="absolute bottom-[-8%] w-full z-100">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
