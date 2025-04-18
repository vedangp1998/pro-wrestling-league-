"use client";
import Image from "next/image";
import React from "react";
import Image1 from "../../../../assets/Image/news-image/Rectangle 188.svg";
import Banner from "../../../../assets/Image/Banner-3.svg";
import News1 from "../../../../assets/Image/news-image/Rectangle 211.svg";
import News2 from "../../../../assets/Image/news-image/Rectangle 214.svg";
import Social1 from "../../../../assets/Logos/Facebook.svg";
import Social2 from "../../../../assets/Logos/Twitter.svg";
import Team1 from "../../../../assets/Icons/Teams/Punjab Royals NCR Logo copy 2.svg";
import Team2 from "../../../../assets/Icons/Teams/Colors-Delhi-Sultan-Logo 1.svg";

import { ArrowRight } from "lucide-react";

const image = [
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
];

const PrintMediaPage = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-16 py-16 bg-[#edeff4] flex flex-col lg:flex-row gap-6">
        <div className="max-w-[770px] w-full mx-auto space-y-6">
          <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full mb-12">
            <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />

            <div className="w-full sm:w-auto text-[20px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
              PWL Seasons Print Media{" "}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-6">
            {image.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative w-full max-w-[90%] sm:max-w-[100%] md:max-w-[620px] mx-auto"
              >
                {/* Red tab in top-left, outside the image card */}
                <div className="absolute top-[-16px] left-6 -translate-y-[50%] z-10">
                  <div className="trapezoid-header text-white text-[14px] font-semibold px-6 py-1 w-[229px] h-[34px] flex items-center justify-center">
                    Hindustan Times (Pune){" "}
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

          <div className="w-full mt-[-10px]">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12375C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                Top Next Match
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 m-auto flex flex-col items-center justify-center gap-6 border-b-[0.5px] border-[#12375C]">
              <div className="text-center">
                <div className="text-[20px] sm:text-[22px] font-bold text-black">
                  Pro Wrestling League Quarter Finals
                </div>
                <div className="text-[14px] sm:text-[16px] text-[#8d8d8d]">
                  Saturday, October 17th, 2018
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
                {/* Team 1 */}
                <div className="flex flex-col items-center justify-center w-[72px] sm:w-[80px] lg:w-[99px]">
                  <Image src={Team1} alt="img" className="w-full h-auto" />
                  <div className="text-[11px] sm:text-[12px] text-[#12375C] font-semibold text-center mt-2 break-words">
                    NCR Punjab Royals
                  </div>
                </div>

                {/* VS Section */}
                <div className="flex flex-col items-center justify-center px-2">
                  <div className="text-[14px] sm:text-[20px] text-[#000000] font-bold">
                    VS
                  </div>
                  <div className="text-[11px] sm:text-[14px] text-[#8d8d8d]">
                    8:00 PM
                  </div>
                  <div className="text-[11px] sm:text-[14px] text-[#8d8d8d]">
                    Madison Club
                  </div>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center justify-center w-[72px] sm:w-[80px] lg:w-[99px]">
                  <Image src={Team2} alt="img" className="w-full h-auto" />
                  <div className="text-[11px] sm:text-[12px] text-[#12375C] font-semibold text-center mt-2 break-words">
                    Delhi Sultans
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 m-auto flex flex-col items-center justify-center gap-5">
              <div className="text-center">
                <div className="text-[20px] sm:text-[22px] font-bold text-[#C72200]">
                  Pro Wrestling League Quarter Finals
                </div>
                <div className="text-[14px] sm:text-[16px] text-[#8d8d8d]">
                  Saturday, October 17th, 2018
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
                {/* Team 1 */}
                <div className="flex flex-col items-center justify-center w-[72px] sm:w-[80px] lg:w-[99px]">
                  <Image src={Team1} alt="img" className="w-full h-auto" />
                  <div className="text-[11px] sm:text-[12px] text-[#12375C] font-semibold text-center mt-2 break-words">
                    NCR Punjab Royals
                  </div>
                </div>

                {/* VS Section */}
                <div className="flex flex-col items-center justify-center px-2">
                  <div className="text-[14px] sm:text-[20px] text-[#000000] font-bold">
                    VS
                  </div>
                  <div className="text-[11px] sm:text-[14px] text-[#8d8d8d]">
                    8:00 PM
                  </div>
                  <div className="text-[11px] sm:text-[14px] text-[#8d8d8d]">
                    Madison Club
                  </div>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center justify-center w-[72px] sm:w-[80px] lg:w-[99px]">
                  <Image src={Team2} alt="img" className="w-full h-auto" />
                  <div className="text-[11px] sm:text-[12px] text-[#12375C] font-semibold text-center mt-2 break-words">
                    Delhi Sultans
                  </div>
                </div>
              </div>

              <div className="text-white bg-[#12375C] w-full p-4 rounded-[5px] flex items-center justify-center cursor-pointer text-sm sm:text-base">
                BUY TICKETS
              </div>
              <div className="flex flex-wrap items-start justify-center gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-[20px] sm:text-[24px] font-bold text-black">
                    00
                  </div>
                  <div className="text-[12px] sm:text-[14px] text-[#8D8D8D]">
                    DAYS
                  </div>
                </div>
                <div className="font-bold">:</div>
                <div>
                  <div className="text-[20px] sm:text-[24px] font-bold text-black">
                    00
                  </div>
                  <div className="text-[12px] sm:text-[14px] text-[#8D8D8D]">
                    HOURS
                  </div>
                </div>
                <div className="font-bold">:</div>
                <div>
                  <div className="text-[20px] sm:text-[24px] font-bold text-black">
                    00
                  </div>
                  <div className="text-[12px] sm:text-[14px] text-[#8D8D8D]">
                    MINS
                  </div>
                </div>
                <div className="font-bold">:</div>
                <div>
                  <div className="text-[20px] sm:text-[24px] font-bold text-black">
                    00
                  </div>
                  <div className="text-[12px] sm:text-[14px] text-[#8D8D8D]">
                    SECS
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 w-full mt-[-25px]">
            <div className="flex items-center justify-between bg-[#385998] text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-[#344E86] p-0.5 rounded-[5px]">
                  <Image
                    alt="Facebook logo"
                    src={Social1}
                    width={61}
                    height={61}
                  />
                </div>
                <div className="text-sm sm:text-base">
                  <p className="font-semibold">LIKE OUR FACEBOOK PAGE</p>
                  <p>FOLLOW</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border border-white rounded-full">
                <ArrowRight size={20} color="#ffffff" strokeWidth={1.25} />
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#272727] text-white p-4 sm:p-5 rounded-lg">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="bg-white rounded-[5px]">
                  <Image
                    alt="Facebook logo"
                    src={Social2}
                    width={63}
                    height={63}
                  />
                </div>
                <div className="text-sm sm:text-base">
                  <p className="font-semibold">FOLLOW US ON TWITTER X</p>
                  <p>LIKE</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 border border-white rounded-full">
                <ArrowRight size={20} color="#ffffff" strokeWidth={1.25} />
              </div>
            </div>
          </div>

          <div className="w-full space-y-0">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12357C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                Star Cast{" "}
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
        </div>
      </div>
    </>
  );
};

export default PrintMediaPage;
