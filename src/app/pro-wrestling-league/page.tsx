import Image from "next/image";
import HeroImage from "../assets/Image/Hero2.svg";
import LeagueTable from "../home/components/league-table/page";
import LatestNews from "../home/components/latest-news/page";

const ProWrestlingLeague = () => {
  return (
    <>
      <div className="relative w-full max-h-[600px] h-[600px] overflow-hidden z-0">
        <Image
          src={HeroImage}
          alt="Hero-Image"
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <p className="text-[40px] font-semibold">2019</p>
          <h1 className="text-[64px] font-bold leading-tight">
            Pro Wrestling League
          </h1>
        </div>
      </div>

      <LeagueTable />
      <LatestNews />
    </>
  );
};

export default ProWrestlingLeague;
