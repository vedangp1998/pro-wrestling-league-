import Image from "next/image";
import HeroImage from "../assets/Image/Hero3.svg";
import LatestNews from "./components/latest-news/page";

const News = () => {
  return (
    <>
      <div className="relative w-full max-h-[600px] h-[600px] overflow-hidden z-0">
        <Image
          src={HeroImage}
          alt="Hero-Image"
          className="object-cover w-full h-full"
          priority
        />

        {/* Gradient overlay */}
        <div
          className="absolute bottom-0 left-0 w-full h-[278px] z-10"
          style={{
            background:
              "linear-gradient(0deg, #010203 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />

        {/* Text overlay (above gradient and image) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
          <p className="text-[40px] font-semibold">2019</p>
          <h1 className="text-[64px] font-bold leading-tight">
            Pro Wrestling League
          </h1>
        </div>
      </div>

      <LatestNews />
    </>
  );
};

export default News;
