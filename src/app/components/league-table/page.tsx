"use client";

import Image from "next/image";
import BackgroundFullImage from "../../assets/Image/Full-Hero-Image.jpeg";
import Logo1 from "../../assets/Icons/Teams/Punjab Royals NCR Logo copy 2.svg";
import Logo2 from "../../assets/Icons/Teams/HARYANA HAMMERS 1.svg";
import Logo3 from "../../assets/Icons/Teams/mp-yodha.svg";
import Logo4 from "../../assets/Icons/Teams/UP DANGAL 1.svg";
import Logo5 from "../../assets/Icons/Teams/Colors-Delhi-Sultan-Logo 1.svg";
import Logo6 from "../../assets/Icons/Teams/Mumbai Maharathi 1.svg";

import Image1 from "../../assets/Image/card-images/USATSI_23517759 4.svg";
import Image2 from "../../assets/Image/card-images/USATSI_23517759 5.svg";
import PlayIcon from "../../assets/Icons/Play.svg";

export default function LeagueTable() {
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

  const cardData = [
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Final",
      vsColor: "#12375C",
      dividerColor: "#D6D7D8",
      cardBg: "bg-white",
      scoreBg: "#12375C",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#C72200",
      dividerColor: "#D6D7D8",
      cardBg: "bg-white",
      scoreBg: "#12375C",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#FF4013",
      dividerColor: "#D6D7D8",
      cardBg: "bg-white",
      scoreBg: "#12375C",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#11AAA7",
      dividerColor: "#11AAA7",
      cardBg: "bg-[rgba(255,255,255,0.6)]",
      scoreBg: "#C72200",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#C72200",
      dividerColor: "#D6D7D8",
      cardBg: "bg-white",
      scoreBg: "#12375C",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#FF4013",
      dividerColor: "#D6D7D8",
      cardBg: "bg-white",
      scoreBg: "#12375C",
    },
    {
      topTeam: "NCR Punjab Royals",
      bottomTeam: "Haryana Hammers",
      score: "3 - 6",
      matchType: "Semi-Final",
      vsColor: "#11AAA7",
      dividerColor: "#11AAA7",
      cardBg: "bg-[rgba(255,255,255,0.6)]",
      scoreBg: "#C72200",
    },
  ];

  return (
    <>
      <div className="relative w-full max-w-[1440px] m-auto bg-black min-h-[741px] h-[auto] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0 py-0">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="w-full h-full bg-gradient-to-b from-black via-[#123B59] to-black opacity-90 absolute" />
          <Image
            src={BackgroundFullImage}
            alt="Background"
            layout="full"
            objectFit="cover"
            className="z-[-1] mt-[120px]"
          />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Top Half */}
          <div className="relative z-10 w-full max-w-[1440px] px-2 sm:px-0 lg:px-0 mx-auto mt-6 border-b-2 border-[#C4C4C4] ">
            {/* Header */}
            <div className="flex justify-center mb-0 mt-12">
              <div className="trapezoid-header relative w-full max-w-[361px] h-12 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                PWL Season 4 League Table
              </div>
            </div>

            {/* Old Table with Seperation */}
            {/* <div
              className="bg-cover bg-center overflow-x-auto rounded-md max-w-[945px] mx-auto shadow-lg"
              style={{ backgroundImage: "url('/your-background.jpg')" }}
            >
              <div className="min-w-[640px] w-full">
                <div className="overflow-x-auto">
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
                  </table>
                </div>

                <div className="h-4" />

                <div className="overflow-x-auto">
                  <table className="min-w-[640px] w-full text-[12px] sm:text-[14px] md:text-[16px] text-[#12375C] font-500 table-fixed">
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
                                    result === "W"
                                      ? "bg-[#238A46]"
                                      : "bg-[#C72200]"
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
            </div> */}

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
                                  result === "W"
                                    ? "bg-[#238A46]"
                                    : "bg-[#C72200]"
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

            {/* Footer */}
            <div className="flex justify-center mt-10">
              <div className="trapezoid-footer relative w-full max-w-[361px] h-12 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                Total 6 Teams (Played)
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
            <div>
              <div className="text-[clamp(12px,3.5vw,18px)] text-white bg-[#C72200] rounded-tr-[16px] rounded-tl-[16px] w-[90%] sm:w-[60%] md:w-[70%] lg:w-[70%] max-w-[300px] h-[50px] sm:h-[57px] flex items-center justify-center mx-auto px-4 text-center">
                PWL Season 4 League Results
              </div>

              <div className="bg-[#11AAA7] w-full max-w-[472px] h-[586px] rounded-[13px] px-4 sm:px-6 py-6">
                <div className="flex flex-col gap-3 max-h-[496px] overflow-y-auto scroll-smooth pr-2 custom-scrollbar">
                  {cardData.map((card, index) => (
                    <div className="relative w-full" key={index}>
                      <div
                        className={`${card.cardBg} w-full max-w-[399px] h-auto rounded-[13px] shadow-lg flex items-center justify-between p-2`}
                      >
                        <div className="flex items-center justify-center m-auto ml-5 gap-3">
                          <div className="flex flex-col items-start justify-center gap-1 w-full max-w-[230px]">
                            {/* Top Team */}
                            <div className="flex items-center gap-3 sm:gap-4 w-full">
                              <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                                <Image
                                  src={Logo1}
                                  alt="icon"
                                  width={38}
                                  height={38}
                                />
                              </div>
                              <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                                {card.topTeam}
                              </div>
                            </div>

                            {/* Divider */}
                            <div
                              className="w-full h-[1px]"
                              style={{ backgroundColor: card.dividerColor }}
                            ></div>

                            {/* Bottom Team */}
                            <div className="flex items-center gap-3 sm:gap-4 w-full">
                              <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                                <Image
                                  src={Logo2}
                                  alt="icon"
                                  width={38}
                                  height={38}
                                />
                              </div>
                              <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                                {card.bottomTeam}
                              </div>
                            </div>
                          </div>

                          {/* Score Box */}
                          <div
                            className="w-[110px] sm:w-[134px] h-[103px] flex items-center justify-center rounded-[13px] text-white flex-shrink-0"
                            style={{ backgroundColor: card.scoreBg }}
                          >
                            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                              <div className="text-[clamp(12px,2.5vw,16px)] font-medium text-center whitespace-nowrap">
                                {card.matchType}
                              </div>
                              <div className="text-[clamp(20px,5vw,26px)] font-semibold text-center whitespace-nowrap">
                                {card.score}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* V/S Badge */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: "-18px" }}
                      >
                        <div
                          style={{
                            width: "61px",
                            height: "30px",
                            backgroundColor: card.vsColor,
                            clipPath:
                              "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                            transform: "rotate(90deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              transform: "rotate(-90deg)",
                              color: "white",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            V/S
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All */}
                <div className="text-[16px] text-white font-semibold cursor-pointer mt-4 flex items-center justify-center">
                  View All
                </div>
              </div>
            </div>

            <div className="bg-white w-[95%] sm:w-full max-w-[797px] p-4 sm:p-6 md:p-8 rounded-[19px] h-[586px] shadow-lg mx-auto mt-[60px] flex flex-col">
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold flex items-center justify-center text-center">
                Watch Season 4 Highlights
              </div>

              {/* Season Buttons */}
              <div className="w-full overflow-x-auto sm:overflow-visible mt-4 mb-6">
                <div className="flex items-center gap-3 justify-start min-w-[420px] sm:min-w-0 sm:justify-center px-2 sm:px-0">
                  <div className="bg-[#C72200] w-[120px] h-[38px] flex items-center justify-center rounded-[29px] text-[14px] sm:text-[16px] text-white">
                    Latest
                  </div>
                  <div className="bg-[#EFEFEF] w-[120px] h-[38px] flex items-center justify-center rounded-[29px] text-[14px] sm:text-[16px] text-[#616161]">
                    Season 3
                  </div>
                  <div className="bg-[#EFEFEF] w-[120px] h-[38px] flex items-center justify-center rounded-[29px] text-[14px] sm:text-[16px] text-[#616161]">
                    Season 2
                  </div>
                </div>
              </div>

              {/* Videos Section */}
              <div className="flex-1 mb-4 overflow-y-auto md:overflow-y-visible px-1 custom-scrollbar">
                {/* Mobile: Scrollable vertical list | Desktop: Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  {[Image2, Image1, Image2, Image1].map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative rounded-[12px] overflow-hidden w-full max-w-[90%] sm:max-w-[100%] md:max-w-[360px] mx-auto"
                    >
                      <Image
                        src={imgSrc}
                        alt="Sarita vs Geeta wrestling match"
                        className="w-full h-auto object-cover"
                        width={365}
                        height={181}
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

              <div className="text-[#616161] text-[16px] flex items-center justify-center font-semibold cursor-pointer">
                View More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
