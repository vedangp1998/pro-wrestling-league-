"use client";

import Image from "next/image";
import IndiaFlag from "../../../assets/Icons/IndianFlag.svg";

export default function LeagueTablePage() {
  const wrestlers = [
    {
      name: "Bajrang Punia",
      countryFlag: IndiaFlag,
      weight: "65kg",
      category: "Indian Men",
      bouts: 7,
      won: 6,
      lost: 1,
      points: 8.4,
    },
    {
      name: "Vinesh Phogat",
      countryFlag: IndiaFlag,
      weight: "53kg",
      category: "Indian Men",
      bouts: 6,
      won: 5,
      lost: 1,
      points: 8.4,
    },
    {
      name: "Ravi Kumar Dahiya",
      countryFlag: IndiaFlag,
      weight: "57kg",
      category: "Indian Men",
      bouts: 8,
      won: 7,
      lost: 1,
      points: 8.4,
    },
    {
      name: "Sakshi Malik",
      countryFlag: IndiaFlag,
      weight: "62kg",
      category: "Indian Men",
      bouts: 6,
      won: 4,
      lost: 2,
      points: 8.4,
    },
    {
      name: "Deepak Punia",
      countryFlag: IndiaFlag,
      weight: "86kg",
      category: "Indian Men",
      bouts: 7,
      won: 5,
      lost: 2,
      points: 8.4,
    },
  ];

  return (
    <div className="relative z-10 w-full max-w-[1440px] px-2 sm:px-0 lg:px-0 mx-auto mt-6">
      {/* Header */}
      <div className="flex justify-center mb-0 mt-12">
        <div className="trapezoid-header relative w-full max-w-[361px] h-12 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
          Top Players Statistics{" "}
        </div>
      </div>

      {/* Table */}
      <div
        className="bg-cover bg-center overflow-x-auto rounded-md max-w-[945px] mx-auto shadow-lg scroll-smooth"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        <div className="w-full">
          <table className=" w-full text-[12px] sm:text-[14px] md:text-[16px] text-[#12375C] font-500 table-fixed">
            <thead className="bg-white">
              <tr className="border-b-2 border-gray-200 h-[64px]">
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[140px]">
                  Name
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[120px]">
                  Country
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[100px]">
                  Weight
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[120px]">
                  Category
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[100px]">
                  Bouts
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[80px]">
                  Won
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[100px]">
                  Blocked
                </th>
                <th className="py-2 px-2 sm:py-4 sm:px-4 text-center font-semibold whitespace-nowrap w-[140px]">
                  Points/Match
                </th>
              </tr>
            </thead>

            <tbody>
              {wrestlers.map((wrestler, index) => (
                <tr
                  key={index}
                  className={`text-[#12375C] font-semibold bg-white border-b border-[#C4C4C4] h-[64px]`}
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.name}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    <div className="flex justify-center items-center min-h-[24px]">
                      <Image
                        src={wrestler.countryFlag}
                        alt="Country Flag"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.weight}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.category}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.bouts}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.won}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center">
                    {wrestler.lost}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 text-center font-bold">
                    {wrestler.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
