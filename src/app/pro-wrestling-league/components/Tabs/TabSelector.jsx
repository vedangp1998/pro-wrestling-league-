"use client";
import { useState, useRef, useEffect } from "react";
import TeamsPage from "../TabPage/TeamsPage";
import ResultsPage from "../TabPage/ResultsPage";
import LeagueTablePage from "../TabPage/LeagueTablePage";
import PlayerStatsPage from "../TabPage/PlayerStatsPage";

const tabs = ["Teams", "Results", "League Table", "Top5 Player Statistics"];

export default function TabSelector() {
  const [activeTab, setActiveTab] = useState("Results");
  const tabRefs = useRef([]);
  const pillRef = useRef(null);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);
    const activeEl = tabRefs.current[index];
    const pill = pillRef.current;

    if (activeEl && pill) {
      pill.style.width = `${activeEl.offsetWidth}px`;
      pill.style.left = `${activeEl.offsetLeft}px`;
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "Teams":
        return <TeamsPage />;
      case "Results":
        return <ResultsPage />;
      case "League Table":
        return <LeagueTablePage />;
      case "Top5 Player Statistics":
        return <PlayerStatsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 w-full px-4">
      <div className="relative w-full max-w-[695px] h-auto bg-white rounded-full shadow-md flex items-center justify-between px-4 py-2 overflow-x-auto scrollbar-hide">
        <div
          ref={pillRef}
          className="absolute top-2 bottom-2 bg-[#12375C] rounded-full transition-all duration-300 ease-in-out"
          style={{ left: 0, width: 0 }}
        />

        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 whitespace-nowrap px-6 py-2 rounded-full text-[16px] sm:text-[18px] font-medium tracking-[0.02em] transition-all duration-300
              ${
                activeTab === tab
                  ? "text-white"
                  : "text-[#12375C] hover:bg-gray-100"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 w-full max-w-5xl">{renderContent()}</div>
    </div>
  );
}
