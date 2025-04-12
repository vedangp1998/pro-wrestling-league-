import Image from "next/image";
import HeroImage from "../assets/Image/Hero.svg";

const HomePage = () => {
  return (
    <div className="w-full">
      <Image
        src={HeroImage}
        alt="Hero-Image"
        className="w-full h-auto"
        priority
      />
    </div>
  );
};

export default HomePage;
