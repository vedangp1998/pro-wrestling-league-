import Image from "next/image";
import Image1 from "../../../assets/Icons/Teams/Punjab Royals NCR Logo copy 2.svg";
import Image2 from "../../../assets/Icons/Teams/HARYANA HAMMERS 1.svg";
import Image3 from "../../../assets/Icons/Teams/mp-yodha.svg";
import Image4 from "../../../assets/Icons/Teams/UP DANGAL 1.svg";
import Image5 from "../../../assets/Icons/Teams/Colors-Delhi-Sultan-Logo 1.svg";
import Image6 from "../../../assets/Icons/Teams/Mumbai Maharathi 1.svg";

const teams = [
  { name: "NCR Punjab Royals", logo: Image1 },
  { name: "Haryana Hammers", logo: Image2 },
  { name: "MP Yodha", logo: Image3 },
  { name: "UP Dangal", logo: Image4 },
  { name: "Delhi Sultans", logo: Image5 },
  { name: "Mumbai Maharathi", logo: Image6 },
];

export default function TeamsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
      {teams.map((team, index) => (
        <div
          key={index}
          className="rounded-[29px] w-[212px] h-[171px] bg-[rgba(255,255,255,0.82)] shadow-md p-4 flex flex-col items-center justify-center text-center mx-auto"
        >
          <div className="relative w-[80px] h-[80px] mb-2">
            <Image
              src={team.logo}
              alt={team.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-[#12375C] text-[16px] font-medium">
            {team.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
