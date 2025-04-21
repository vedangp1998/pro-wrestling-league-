"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Team1 from "../../../assets/Icons/Teams/Punjab Royals NCR Logo copy 2.svg";
import Team2 from "../../../assets/Icons/Teams/HARYANA HAMMERS 1.svg";

const teamLogos: Record<string, string> = {
  "NCR Punjab Royals": Team1,
  "Haryana Hammers": Team2,
};

const cardData = [
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Final",
    score: "3 - 6",
    date: "Mon 27, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Semi-Final 2",
    score: "3 - 6",
    date: "Sun 26, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Semi-Final 2",
    score: "3 - 6",
    date: "Sat 25, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Final",
    score: "3 - 6",
    date: "Mon 27, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Semi-Final 2",
    score: "3 - 6",
    date: "Sun 26, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
  {
    topTeam: "NCR Punjab Royals",
    bottomTeam: "Haryana Hammers",
    matchType: "Semi-Final 2",
    score: "3 - 6",
    date: "Sat 25, Jan",
    cardBg: "bg-gradient-to-r from-[#E5E5E5] to-[#FFFFFF]",
    dividerColor: "#D9D9D9",
    scoreBg: "#12375C",
    vsColor: "#0A1A27",
  },
];

export default function ResultPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cardData.length);
  }, [cardData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 399;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-6 pt-12 w-full max-w-[1296px] mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-index={index}
            className={`relative min-w-[399px] transition-all duration-500 ${
              visibleCards.includes(index) ? "opacity-100" : "opacity-30"
            }`}
          >
            {/* Match Type Badge */}
            <div className="absolute top-[-30px] left-4 z-10">
              <div
                className="text-white text-[12px] w-[110px] sm:w-[130px] md:w-[152px] h-[30px] flex items-center justify-center cursor-pointer rounded-t-[15px]"
                style={{ backgroundColor: "#C72200" }}
              >
                {index % 2 === 0 ? card.date : card.matchType}
              </div>
            </div>

            {/* Card Content */}
            <div
              className={`${card.cardBg} w-full max-w-[399px] h-auto rounded-[13px] shadow-lg flex items-center justify-between p-2`}
            >
              <div className="flex items-center justify-center m-auto ml-5 gap-3">
                <div className="flex flex-col items-start justify-center gap-1 w-full max-w-[230px]">
                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className="w-[38px] h-[38px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                      <Image
                        src={teamLogos[card.topTeam] ?? "/placeholder.svg"}
                        alt={card.topTeam}
                        width={38}
                        height={38}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                      {card.topTeam}
                    </div>
                  </div>

                  <div
                    className="w-full h-[1px]"
                    style={{ backgroundColor: card.dividerColor }}
                  ></div>

                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                      <Image
                        src={teamLogos[card.bottomTeam] || "/placeholder.svg"}
                        alt={card.bottomTeam}
                        width={38}
                        height={38}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                      {card.bottomTeam}
                    </div>
                  </div>
                </div>

                <div
                  className="w-[110px] sm:w-[134px] h-[58px] flex items-center justify-center rounded-[13px] text-white flex-shrink-0"
                  style={{ backgroundColor: card.scoreBg }}
                >
                  <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
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
                  backgroundColor: "#12375C",
                  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
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

      {/* Slider Controls */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => scroll("left")}
          className="text-white bg-transparent border border-[#4A5568] rounded-full hover:bg-[#12375C] transition-colors w-10 h-10 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-white bg-transparent border border-[#4A5568] rounded-full hover:bg-[#12375C] transition-colors w-10 h-10 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
