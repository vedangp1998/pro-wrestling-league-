"use-client";
import Image from "next/image";
import React from "react";
import News1 from "../../../assets/Image/news-image/Rectangle 211.svg";
import News2 from "../../../assets/Image/news-image/Rectangle 214.svg";
import Image1 from "../../../assets/Image/about-us/Kartikeya.svg";
import Image2 from "../../../assets/Image/about-us/Brijbhushan.svg";
import Image3 from "../../../assets/Image/about-us/Sunil.svg";

const achievements = [
  "51 Olympians (23 Men & 28 Women)",
  "20 Rio2016 Olympic Medalists",
  "30 World Championship Medalists",
  "13 Continental Games Champions",
  "34 World & Continental Champions",
];

const cardData = [
  {
    image: Image1,
    title: "Kartikeya Sharma",
    description: "Founder and Promoter - Pro Wrestling League",
    label: "Read More",
  },
  {
    image: Image2,
    title: "Mr. Brijbhushan Sharan Singh",
    description: "President, Wrestling Federation of India",
    label: "Read More",
  },
  {
    image: Image3,
    title: "Sunil Yash Kalra",
    description: "CEO, Pro Wrestling League",
    label: "Read More",
  },
];

const infoSections = [
  {
    title: "Prize Money",
    content: (
      <>
        <div className="mb-2">
          The Pro Wrestling League offers a prize purse of Rs. 3 Crore.
        </div>
        <ul className="list-disc list-inside space-y-1 w-full sm:w-[712px]">
          <li>Winning Team: Rs. 1.9 Crore</li>
          <li>Runner up Team: Rs. 1.1 Crore</li>
        </ul>
      </>
    ),
  },
  {
    title: "Format",
    content: (
      <ul className="list-disc list-inside space-y-1 w-full sm:w-[712px]">
        <li>Teams: Six</li>
        <li>No of Players per Team: Nine (Five Men + Four Women)</li>
        <li>Domestic Players per Team: Five</li>
        <li>International Players per Team: Four</li>
        <li>
          No of Bouts per Match: Seven in League Phase and Nine in Semi-Finals
          and Final
        </li>
      </ul>
    ),
  },
  {
    title: "TV Coverage",
    content: (
      <>
        <div className="mb-2">
          The Pro Wrestling League is the most watched Olympic-styled Wrestling
          League. You can catch all the action LIVE from PWL 4 on:
        </div>
        <ul className="list-disc list-inside space-y-1 w-full sm:w-[712px] mb-2">
          <li>English: Sony SIX, Sony SIX HD</li>
          <li>Hindi: Sony TEN 3, Sony TEN 3 HD, Sony WAH</li>
        </ul>
        <div>Timing: 7-9 PM, every day (14-31 Jan 2019)</div>
      </>
    ),
  },
];

const OnlineMediaPage = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 md:px-16 py-16 bg-[#edeff4] flex flex-col lg:flex-row gap-6">
        <div className="max-w-[770px] w-full mx-auto space-y-6">
          <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full">
            <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />

            <div className="w-full sm:w-auto text-[20px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
              About Pro Wrestling League
            </div>
          </div>

          <div className="text-[20px] text-[#000000] max-w-[770px]">
            An initiative of Pro Sportify and Wrestling Federation of India, Pro
            Wrestling League (PWL) is the biggest Olympic Wrestling League in
            the country.
          </div>
          <div className="text-[20px] text-[#000000] max-w-[770px]">
            Established since 2015, PWL have successfully completed three
            editions and during this period, the League has showcased world
            class wrestling action from:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl w-full">
            {achievements.map((text, index) => (
              <div
                key={index}
                className="bg-[#C72200] text-white text-[20px] font-medium rounded-[5px] px-6 py-4"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="text-[20px] text-[#000000] max-w-[770px]">
            In the previous three editions, the League has recorded a total of
            staggering 3,764 points (Average of 70 points per match) scored by
            all the participating wrestlers.
          </div>

          <div className="text-[20px] text-[#000000] max-w-[770px]">
            The PWL Season 4 is set to be bigger and better than ever this year
            with the addition of a new team from Madhya Pradesh – MP Yodha.
            There are totally six competing teams – Delhi Sultans, UP Dangal,
            Haryana Hammers, MP Yodha, Mumbai Maharathi and the NCR Punjab
            Royals.
          </div>

          <div className="text-[20px] text-[#000000] max-w-[770px]">
            The PWL Season 4 will witness participants from 15 nationalities
            spanning across Asia, Europe, Africa and the American continent.
          </div>

          {infoSections.map((section, index) => (
            <div
              key={index}
              className="w-full max-w-[95%] sm:max-w-4xl mx-auto mb-6"
            >
              {/* Section Title */}
              <div
                className="relative z-10 inline-block"
                style={{ marginLeft: "16px", marginBottom: "-1px" }}
              >
                <div
                  className="text-white text-[16px] sm:text-[20px] px-4 py-1 text-center"
                  style={{
                    backgroundColor: "#c72200",
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                    width: "auto",
                    paddingInline: "20px",
                  }}
                >
                  {section.title}
                </div>
              </div>

              {/* Section Content */}
              <div
                className="bg-white rounded-[6px] border-none p-4 sm:p-6 text-black"
                style={{ fontSize: "16px", fontWeight: 400 }}
              >
                {section.content}
              </div>
            </div>
          ))}

          <div className="relative bg-white h-auto sm:h-[56px] rounded-[5px] flex flex-col sm:flex-row items-center justify-between overflow-hidden text-center sm:text-left w-full">
            <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />

            <div className="w-full sm:w-auto text-[20px] sm:text-[24px] text-[#12375C] font-semibold ml-0 sm:ml-8 mt-2 sm:mt-0">
              Management Team{" "}
            </div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardData.map((card, idx) => (
                <div
                  className="bg-white rounded-[5px] overflow-hidden border border-[#D8D8D8] w-full"
                  key={idx}
                >
                  <div className="w-full relative h-[180px] sm:h-[243px]">
                    <Image
                      src={card.image}
                      alt={`${card.title} image`}
                      fill
                      className="object-cover rounded-t-[5px]"
                    />
                  </div>
                  <div className="p-4 text-left text-black">
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold mb-4 leading-[24px] text-black">
                      {card.title}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-black/63 mb-3 leading-[20px]">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className="text-white text-[12px] w-[110px] sm:w-[130px] md:w-[152px] h-[30px] flex items-center justify-center cursor-pointer"
                      style={{
                        backgroundColor: "#C72200",
                        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                      }}
                    >
                      {card.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10 w-full lg:max-w-[465px] mx-auto">
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

          <div className="w-full space-y-0">
            <div className="relative bg-white h-[56px] rounded-[5px] rounded-br-none flex items-center justify-between overflow-hidden border-b-[0.5px] border-[#12357C]">
              <div className="absolute left-0 top-0 h-full w-[13px] bg-[#12375C] rounded-l-[5px]" />
              <div className="text-[20px] sm:text-[24px] text-[#12375C] font-semibold pl-4 ml-4">
                News{" "}
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
        </div>
      </div>
    </>
  );
};

export default OnlineMediaPage;
