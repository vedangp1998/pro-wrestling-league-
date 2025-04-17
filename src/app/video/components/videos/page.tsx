"use client";
import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";
import Image1 from "../../../assets/Image/card-images/USATSI_23517759 4.svg";
import Image2 from "../../../assets/Image/card-images/USATSI_23517759 5.svg";
import Banner from "../../../assets/Image/Banner-3.svg";
import News1 from "../../../assets/Image/news-image/Rectangle 211.svg";
import News2 from "../../../assets/Image/news-image/Rectangle 214.svg";
import PlayIcon from "../../../assets/Icons/Play.svg";

const image = [
  Image2,
  Image1,
  Image2,
  Image1,
  Image2,
  Image1,
  Image2,
  Image1,
  Image2,
  Image1,
  Image2,
  Image1,
];

const Videos = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-16 py-16 bg-[#edeff4] flex flex-col lg:flex-row gap-6">
        <div className="max-w-[770px] w-full mx-auto space-y-6">
          <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full mb-[80px]">
            <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />

            <div className="w-full sm:w-auto text-[18px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
              Videos{" "}
            </div>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-6 w-full sm:w-auto px-2 sm:pr-4 mt-2 sm:mt-0">
              {/* Season Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select className="w-full sm:w-[160px] text-[#12375C] text-[16px] sm:text-[20px] font-semibold border-none rounded-[5px] px-4 py-2 pr-10 bg-[rgba(18,55,92,0.12)] focus:outline-none appearance-none">
                  <option>Season 4</option>
                  <option>Season 3</option>
                  <option>Season 2</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#12375C]">
                  <ChevronDown />
                </div>
              </div>

              {/* Team Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select className="w-full sm:w-[160px] text-[#12375C] text-[16px] sm:text-[20px] font-semibold border-none rounded-[5px] px-4 py-2 pr-10 bg-[rgba(18,55,92,0.12)] focus:outline-none appearance-none">
                  <option>All Teams</option>
                  <option>Team A</option>
                  <option>Team B</option>
                  <option>Team C</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#12375C]">
                  <ChevronDown />
                </div>
              </div>

              {/* Search Label */}
              <div className="text-[#12375C] text-[16px] sm:text-[24px] font-semibold w-full sm:w-auto text-center sm:text-left">
                Search
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {image.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative rounded-[12px] overflow-hidden w-full max-w-[90%] sm:max-w-[100%] md:max-w-[620px] mx-auto"
              >
                <Image
                  src={imgSrc}
                  alt="Sarita vs Geeta wrestling match"
                  className="w-full h-auto object-cover"
                  width={620}
                  height={309}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[rgba(235,234,234,0.61)] rounded-full w-[34px] h-[34px] m-auto flex items-center justify-center cursor-pointer">
                    <Image src={PlayIcon} alt="icon" width={13} height={13} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-6">
                  <div className="trapezoid-footer bg-red-600 text-white text-[12px] w-[152px] h-[30px] flex items-center justify-center">
                    Sarita vs Geeta
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx global>{`
            .trapezoid-header {
              background-color: #c72200;
              clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
            }

            .trapezoid-footer {
              background-color: #c72200;
              clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
            }
          `}</style>
        </div>

        <div className="space-y-10 w-full lg:max-w-[465px] mx-auto">
          <div className="w-full space-y-0">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12357C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                Advertisement
              </div>
            </div>
            <div className="bg-white p-4 sm:p-10 m-auto">
              <Image
                src={Banner}
                alt="Advertisement"
                width={393}
                height={328}
                className="object-cover w-full h-full rounded"
              />
            </div>
          </div>

          <div className="w-full space-y-0">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12357C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                Gallery{" "}
              </div>
            </div>
            <div className="bg-white p-4 sm:p-10 m-auto">
              <Image
                src={News2}
                alt="Advertisement"
                width={393}
                height={328}
                className="object-cover w-full h-full rounded"
              />
            </div>
          </div>

          <div className="w-full space-y-0">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12357C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                News{" "}
              </div>
            </div>
            <div className="bg-white p-4 sm:p-10 m-auto">
              <Image
                src={News1}
                alt="Advertisement"
                width={393}
                height={328}
                className="object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
