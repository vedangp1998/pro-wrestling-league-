"use client";

import Image from "next/image";
import HeroImage from "../assets/Image/Hero.svg";
import Slider from "./Slider";
import LeagueTable from "../components/league-table/page";
import LatestNews from "../components/latest-news/page";

const HomePage = () => {
  return (
    <>
      <div className="relative w-full max-h-[600px] h-[600px] overflow-hidden z-0">
        <Image
          src={HeroImage}
          alt="Hero-Image"
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute bottom-[-20px] w-full px-4 z-10">
          <Slider />
        </div>
      </div>

      <LeagueTable />
      <LatestNews />
    </>
  );
};

export default HomePage;
