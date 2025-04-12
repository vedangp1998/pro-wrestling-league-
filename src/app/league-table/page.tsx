"use client";

import Image from "next/image";
import BackgroundImage from "../assets/Image/Hero.svg";

export default function LeagueTable() {
  const teams = [
    {
      position: "01",
      team: "NCR Punjab Royals",
      logo: "/placeholder.svg?height=40&width=40",
      played: 7,
      won: 5,
      lost: 2,
      tied: 0,
      results: ["W", "L", "W", "W", "L", "W", "W"],
      points: 1223,
      highlighted: true,
    },
    {
      position: "02",
      team: "Haryana Hammers",
      logo: "/placeholder.svg?height=40&width=40",
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
      logo: "/placeholder.svg?height=40&width=40",
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
      logo: "/placeholder.svg?height=40&width=40",
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
      logo: "/placeholder.svg?height=40&width=40",
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
      logo: "/placeholder.svg?height=40&width=40",
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
    <div className="relative w-[1440px]  m-auto bg-black h-[741px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-full h-full bg-gradient-to-b from-black to-[#123B59] opacity-90 absolute" />
        <Image
          src={BackgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-[-1]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-center mb-0">
          <div className="trapezoid-header relative w-[361px] h-12 flex items-center justify-center text-white font-bold text-xl">
            PWL Season 4 League Table
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 px-2 text-left">Pos</th>
                <th className="py-4 px-2 text-left">Team</th>
                <th className="py-4 px-2 text-center">P</th>
                <th className="py-4 px-2 text-center">W</th>
                <th className="py-4 px-2 text-center">L</th>
                <th className="py-4 px-2 text-center">T</th>
                <th className="py-4 px-2 text-center">Score Diff</th>
                <th className="py-4 px-2 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-2">
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center ${
                        team.highlighted
                          ? "bg-teal-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {team.position}
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 relative">
                        <Image
                          src={team.logo || "/placeholder.svg"}
                          alt={`${team.team} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium">{team.team}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center">{team.played}</td>
                  <td className="py-4 px-2 text-center">{team.won}</td>
                  <td className="py-4 px-2 text-center">{team.lost}</td>
                  <td className="py-4 px-2 text-center">{team.tied}</td>
                  <td className="py-4 px-2">
                    <div className="flex justify-center gap-1">
                      {team.results.map((result, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white
                        ${result === "W" ? "bg-green-500" : "bg-red-500"}`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center font-bold">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <div className="trapezoid-footer relative w-[361px] h-12 flex items-center justify-center text-white font-bold text-lg">
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
    </div>
  );
}
