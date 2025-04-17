"use client";
import Image from "next/image";
import React from "react";
import { ChevronDown } from "lucide-react";
import Image1 from "../../../assets/Image/starcast-image/Rectangle 220.svg";
import Banner from "../../../assets/Image/Banner-3.svg";
import News1 from "../../../assets/Image/news-image/Rectangle 211.svg";
import News2 from "../../../assets/Image/news-image/Rectangle 214.svg";

const image = [Image1, Image1, Image1, Image1, Image1, Image1, Image1, Image1];

const StarCast = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-16 py-16 bg-[#edeff4] flex flex-col lg:flex-row gap-6">
        <div className="max-w-[770px] w-full mx-auto space-y-6">
          <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full mb-[80px]">
            <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />

            <div className="w-full sm:w-auto text-[18px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
              Star Cast
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
            {image.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative w-full max-w-[90%] sm:max-w-[100%] md:max-w-[620px] mx-auto"
              >
                {/* Red tab in top-left, outside the image card */}
                <div className="absolute top-[-16px] left-6 -translate-y-[50%] z-10">
                  <div className="trapezoid-header text-white text-[14px] font-semibold px-6 py-1 w-[167px] h-[34px] flex items-center justify-center">
                    Bajrang Punia
                  </div>
                </div>

                {/* Image card */}
                <div className="rounded-[4px] overflow-hidden w-full bg-white">
                  <Image
                    src={imgSrc}
                    alt="Sarita vs Geeta wrestling match"
                    className="w-full h-auto object-cover"
                    width={377}
                    height={243}
                  />
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

export default StarCast;
