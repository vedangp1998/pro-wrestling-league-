"use client";

import Image from "next/image";
import HeroImage from "../assets/Image/Hero.svg";
import Slider from "./Slider";
import LeagueTable from "./components/league-table/page";
import LatestNews from "./components/latest-news/page";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full max-h-[600px] h-[600px] overflow-hidden z-[10]">
        <Image
          src={HeroImage || "/placeholder.svg?height=600&width=1200"}
          alt="Hero-Image"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute bottom-[-20px] w-full px-4 z-[20]">
          <Slider />
        </div>
      </div>

      <LeagueTable />
      <LatestNews />
    </>
  );
};

export default HomePage;
