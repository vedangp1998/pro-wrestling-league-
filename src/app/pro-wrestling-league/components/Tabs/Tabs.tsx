"use client";

import Image from "next/image";
import Image1 from "../../../assets/Image/card-images/USATSI_23517759 4.svg";
import Image2 from "../../../assets/Image/card-images/USATSI_23517759 5.svg";
import PlayIcon from "../../../assets/Icons/Play.svg";
import TabSelector from "./TabSelector";

export default function Tabs() {
  return (
    <>
      <div className="relative w-full max-w-[1440px] m-auto bg-black min-h-[741px] h-[auto] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0 py-0">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div
            className="w-full h-full absolute opacity-90"
            style={{
              background: `linear-gradient(
                to bottom,
                black 0%,
                #123B59 25%,
                black 50%,
                #123B59 75%,
                black 100%
               )`,
            }}
          />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Top Half */}

          <TabSelector />

          <div className="relative z-10 w-full max-w-[1440px] px-2 sm:px-0 lg:px-0 mx-auto mt-6 border-b-2 border-[#C4C4C4] ">
            {/* Footer */}
            <div className="flex justify-center mt-10">
              <div className="trapezoid-footer relative w-full max-w-[361px] h-12 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                All Season 4 Results List
              </div>
            </div>
          </div>

          {/* CSS for trapezoid shapes */}
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

          {/* Bottom Half */}

          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1440px] px-12 sm:px-4 lg:pl-[70px] mt-10 sm:mt-14 md:mt-12 lg:mt-20 xl:mt-[80px] pb-14">
            {/* Videos Section */}
            <div className="flex-1 mb-4 overflow-y-auto md:overflow-y-visible px-1 custom-scrollbar">
              <div className="text-[24px] text-white text-center mb-12">
                Watch Season 4 Highlights
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {[
                  Image2,
                  Image1,
                  Image2,
                  Image1,
                  Image2,
                  Image1,
                  Image2,
                  Image1,
                ].map((imgSrc, idx) => (
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
                        <Image
                          src={PlayIcon}
                          alt="icon"
                          width={13}
                          height={13}
                        />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
