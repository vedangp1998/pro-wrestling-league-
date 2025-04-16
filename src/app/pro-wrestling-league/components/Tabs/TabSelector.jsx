"use client";
import { useState, useRef, useEffect } from "react";

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

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="relative w-[695px] h-auto bg-white rounded-full shadow-md flex items-center justify-between px-4 py-2">

        {/* 🔵 Solid sliding pill */}
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
            className={`relative z-10 whitespace-nowrap px-8 py-2 rounded-full text-[18px] font-medium tracking-[0.02em] transition-all duration-300
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
    </div>
  );
}
