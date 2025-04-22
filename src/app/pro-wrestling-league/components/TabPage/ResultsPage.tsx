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
  const scrollRefTop = useRef<HTMLDivElement>(null);
  const scrollRefBottom = useRef<HTMLDivElement>(null);
  const [visibleCardsTop, setVisibleCardsTop] = useState<number[]>([]);
  const [visibleCardsBottom, setVisibleCardsBottom] = useState<number[]>([]);
  const cardRefsTop = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefsBottom = useRef<(HTMLDivElement | null)[]>([]);

  const midPoint = Math.ceil(cardData.length / 2);
  const topRowCards = cardData.slice(0, midPoint);
  const bottomRowCards = cardData.slice(midPoint);

  useEffect(() => {
    cardRefsTop.current = cardRefsTop.current.slice(0, topRowCards.length);
    cardRefsBottom.current = cardRefsBottom.current.slice(
      0,
      bottomRowCards.length
    );
  }, [topRowCards.length, bottomRowCards.length]);

  useEffect(() => {
    const observerTop = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCardsTop((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleCardsTop((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        root: scrollRefTop.current,
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    const observerBottom = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCardsBottom((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisibleCardsBottom((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        root: scrollRefBottom.current,
        threshold: 0.6,
        rootMargin: "0px",
      }
    );

    cardRefsTop.current.forEach((card) => {
      if (card) observerTop.observe(card);
    });

    cardRefsBottom.current.forEach((card) => {
      if (card) observerBottom.observe(card);
    });

    return () => {
      cardRefsTop.current.forEach((card) => {
        if (card) observerTop.unobserve(card);
      });
      cardRefsBottom.current.forEach((card) => {
        if (card) observerBottom.unobserve(card);
      });
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = window.innerWidth < 640 ? 280 : 399;
    if (scrollRefTop.current) {
      scrollRefTop.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
    if (scrollRefBottom.current) {
      scrollRefBottom.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderCard = (
    card: (typeof cardData)[0],
    index: number,
    isTopRow: boolean
  ) => (
    <div
      key={index}
      ref={(el) => {
        if (isTopRow) {
          cardRefsTop.current[index] = el;
        } else {
          cardRefsBottom.current[index] = el;
        }
      }}
      data-index={index}
      className={`relative min-w-[280px] sm:min-w-[399px] transition-all duration-500 ${
        (isTopRow ? visibleCardsTop : visibleCardsBottom).includes(index)
          ? "opacity-100"
          : "opacity-30"
      }`}
    >
      <div className="absolute top-[-24px] sm:top-[-30px] left-3 sm:left-4 z-10">
        <div
          className="text-white text-[10px] sm:text-[12px] w-[90px] sm:w-[130px] md:w-[152px] h-[24px] sm:h-[30px] flex items-center justify-center cursor-pointer rounded-t-[12px] sm:rounded-t-[15px]"
          style={{ backgroundColor: "#C72200" }}
        >
          {index % 2 === 0 ? card.date : card.matchType}
        </div>
      </div>

      <div
        className={`${card.cardBg} w-full max-w-[280px] sm:max-w-[399px] h-auto rounded-[10px] sm:rounded-[13px] shadow-lg flex items-center justify-between p-2 sm:p-2`}
      >
        <div className="flex items-center justify-center m-auto ml-3 sm:ml-5 gap-2 sm:gap-3">
          <div className="flex flex-col items-start justify-center gap-1 w-full max-w-[160px] sm:max-w-[230px]">
            <div className="flex items-center gap-2 sm:gap-4 w-full">
              <div className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                <Image
                  src={teamLogos[card.topTeam] ?? "/placeholder.svg"}
                  alt={card.topTeam}
                  width={28}
                  height={28}
                  className="object-contain sm:w-[38px] sm:h-[38px]"
                />
              </div>
              <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(10px,3vw,12px)] sm:text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                {card.topTeam}
              </div>
            </div>

            <div
              className="w-full h-[1px]"
              style={{ backgroundColor: card.dividerColor }}
            ></div>

            <div className="flex items-center gap-2 sm:gap-4 w-full">
              <div className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] flex-shrink-0">
                <Image
                  src={teamLogos[card.bottomTeam] || "/placeholder.svg"}
                  alt={card.bottomTeam}
                  width={28}
                  height={28}
                  className="object-contain sm:w-[38px] sm:h-[38px]"
                />
              </div>
              <div className="text-[#12375C] font-bold leading-[1.2] text-[clamp(10px,3vw,12px)] sm:text-[clamp(12px,3.5vw,16px)] whitespace-nowrap overflow-hidden text-ellipsis">
                {card.bottomTeam}
              </div>
            </div>
          </div>

          <div
            className="w-[90px] sm:w-[134px] h-[48px] sm:h-[58px] flex items-center justify-center rounded-[10px] sm:rounded-[13px] text-white flex-shrink-0"
            style={{ backgroundColor: card.scoreBg }}
          >
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
              <div className="text-[clamp(16px,4vw,20px)] sm:text-[clamp(20px,5vw,26px)] font-semibold text-center whitespace-nowrap">
                {card.score}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: "-14px" }}
      >
        <div
          style={{
            width: "50px",
            height: "24px",
            backgroundColor: "#12375C",
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            transform: "rotate(90deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="sm:w-[61px] sm:h-[30px]"
        >
          <div
            style={{
              transform: "rotate(-90deg)",
              color: "white",
              fontSize: "10px",
              fontWeight: 600,
            }}
            className="sm:text-[12px]"
          >
            V/S
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-2 sm:px-4">
      <div
        ref={scrollRefTop}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6 sm:pt-12 w-full max-w-[1440px] mx-auto items-center justify-center snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {topRowCards.map((card, index) => renderCard(card, index, true))}
      </div>

      <div
        ref={scrollRefBottom}
        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6 sm:pt-12 w-full max-w-[1440px] mx-auto items-center justify-center snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {bottomRowCards.map((card, index) => renderCard(card, index, false))}
      </div>

      <div className="mt-4 sm:mt-6 flex justify-center gap-4">
        <button
          onClick={() => scroll("left")}
          className="text-white bg-transparent border border-[#4A5568] rounded-full hover:bg-[#12375C] transition-colors w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="text-white bg-transparent border border-[#4A5568] rounded-full hover:bg-[#12375C] transition-colors w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
