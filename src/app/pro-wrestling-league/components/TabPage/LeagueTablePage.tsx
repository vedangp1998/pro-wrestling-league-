"use client";

import Image from "next/image";
import Logo1 from "../../../assets/Icons/Teams/Punjab Royals NCR Logo copy 2.svg";
import Logo2 from "../../../assets/Icons/Teams/HARYANA HAMMERS 1.svg";
import Logo3 from "../../../assets/Icons/Teams/mp-yodha.svg";
import Logo4 from "../../../assets/Icons/Teams/UP DANGAL 1.svg";
import Logo5 from "../../../assets/Icons/Teams/Colors-Delhi-Sultan-Logo 1.svg";
import Logo6 from "../../../assets/Icons/Teams/Mumbai Maharathi 1.svg";

export default function LeagueTablePage() {
  const teams = [
    {
      position: "Q1",
      team: "NCR Punjab Royals",
      logo: Logo1,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: true,
    },
    {
      position: "Q2",
      team: "Haryana Hammers",
      logo: Logo2,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: true,
    },
    {
      position: "03",
      team: "MP Yodha",
      logo: Logo3,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: false,
    },
    {
      position: "04",
      team: "UP Dangal",
      logo: Logo4,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: false,
    },
    {
      position: "05",
      team: "Delhi Sultans",
      logo: Logo5,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: false,
    },
    {
      position: "06",
      team: "Mumbai Maharathi",
      logo: Logo6,
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: false,
    },
  ];

  return (
    <>
      <div className="relative z-10 w-full max-w-[1440px] px-2 sm:px-0 lg:px-0 mx-auto mt-6">
        {/* Header */}
        <div className="flex justify-center mb-0 mt-12">
          <div className="trapezoid-header relative w-full max-w-[361px] h-12 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
            PWL Season 4 League Table
          </div>
        </div>

        {/* New Table  */}
        <div
          className="bg-cover bg-center overflow-x-auto rounded-md max-w-[945px] mx-auto shadow-lg scroll-smooth"
          style={{
            backgroundImage: "url('/your-background.jpg')",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          <div className="min-w-[640px] w-full">
            {/* Single Table with Thead and Tbody */}
            <table className="min-w-[640px] w-full text-[12px] sm:text-[14px] md:text-[16px] text-[#12375C] font-500 table-fixed">
              <thead className="bg-white">
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                    Pos
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[220px]">
                    Team
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                    P
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                    W
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                    L
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                    T
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[160px]">
                    Score Diff
                  </th>
                  <th className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[80px]">
                    Points
                  </th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team, index) => (
                  <tr
                    key={index}
                    className={`text-[#12375C] font-semibold bg-white ${
                      index !== teams.length - 1
                        ? "border-b border-[#C4C4C4]"
                        : ""
                    }`}
                  >
                    <td className="py-2 px-2 sm:py-4 sm:px-4 w-[50px]">
                      <div
                        className={`w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-[6px] flex items-center justify-center ${
                          team.highlighted
                            ? "bg-[#11AAA7] text-white"
                            : "bg-gray-100"
                        }`}
                        style={
                          !team.highlighted
                            ? { color: "rgba(18, 55, 92, 0.5)" }
                            : {}
                        }
                      >
                        {team.position}
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 w-[220px]">
                      <div className="flex items-center gap-1 sm:gap-2 flex-wrap sm:flex-nowrap">
                        <div
                          className={`rounded-full w-[8px] h-[8px] ${
                            team.highlighted ? "bg-[#11AAA7]" : "bg-white"
                          }`}
                        ></div>
                        <Image
                          src={team.logo || "/placeholder.svg"}
                          alt={`${team.team} logo`}
                          width={40}
                          height={40}
                          className="sm:w-[54px] sm:h-[54px]"
                        />
                        <span className="text-[12px] sm:text-[14px] md:text-[16px] font-bold text-[#12375C]">
                          {team.team}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                      {team.played}
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                      {team.won}
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                      {team.lost}
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center w-[50px]">
                      {team.tied}
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 w-[160px]">
                      <div className="flex justify-center gap-[2px] sm:gap-1 flex-wrap">
                        {team.results.map((result, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs text-white ${
                              result === "W" ? "bg-[#238A46]" : "bg-[#C72200]"
                            }`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 text-center font-bold w-[80px]">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
