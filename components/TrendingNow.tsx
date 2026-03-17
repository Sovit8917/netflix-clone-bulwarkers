"use client";

import React, { useRef, useState } from "react";

const trendingShows = [
  {
    id: 1,
    rank: 1,
    title: "Dhurandhar",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYWfklg5D5btQoekHBjGHSFXDW_EezXrT97RnSaEwirkVnCt91QaQlcPWCxtfkSrW04hOcHguRrAMgyKTJzs2_PKkFkbs60DHC4.webp?r=05f",
  },
  {
    id: 2,
    rank: 2,
    title: "One Piece",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcwMiAXNKvtzgN1Kx06ht1pT-yTXiVSQy0BKogrxRHkSiGZlRtWZbq2ROt1kkWqfM2PWVvgDNFMw73KTzVFP0dnMIY1MsQEVJIeBdS5U2PG52vbiBsX9ajBuOg6ZrWR1H_X-.webp?r=df5",
  },
  {
    id: 3,
    rank: 3,
    title: "The Great Indian Kapil Show",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABftpjKnHqJX4EPMORPQ4RHHTlTnPF4gpvjGNF8a3-4T34kvHLh8SPWCYBezUdm6UiTi7uWETyhWBOOjeVOg_NRArIg8xPwcIUumXxCc7DdDAzJkqk8TkTSWEYSYkOn0z36s9.webp?r=367",
  },
  {
    id: 4,
    rank: 4,
    title: "Taskaree",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTk_B0l_BvDJ7CQuWOAax9ZKSAe65vFGUMjAee8pcvuYXDFDvcnFaF8nOEuwxBg-TFKzHTqhdD3D7zlMsXSpA_BQTHf-ouBVNdwJIJvNQzUGje4WVrnptKL5Ywqu9hV7pg3A.webp?r=f34",
  },
  {
    id: 5,
    rank: 5,
    title: "With Love",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRwCYHvOydLVAruaaaEH54F6sXscQA7EidAnOK-kF77rpLdyzZpKCV1w0fWkJESPL8jfZ6UU7nJU294L0-c6H_FG35zcLcNwxDo.webp?r=352",
  },
  {
    id: 6,
    rank: 6,
    title: "Show 6",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVbXUoTNkiWeGLsVtY9HIcuwl1a3-qGoR3UlqNqTqNaSBIYjd0DYeSO0mJcKaiMaH4AYtFRuqnHeuwcxSB3sofkfoh_zn_c9A80.webp?r=0e8",
  },
  {
    id: 7,
    rank: 7,
    title: "Show 7",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT79Mi0iWWtYi-57TpyWlexVfLyGglHcQknKS_qF5RsRxldAflHZj1RiYT6895R-ssNAnKe-QpJV7de--OtapTkh6sGbuDOHCkq0XFA4_KVWvWDCn9_Ff9P-i2cGkBINRLBN.webp?r=09b",
  },
  {
    id: 8,
    rank: 8,
    title: "Show 8",
    image: "https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXMlNt8lRlEH5nkoYUHkzaYFsKJJvQq-3wQ4-DyYWQmKlxu9qrynyD5cNZEHPowiQL9IPEPbTSBM9B-id8nR8QPVfL1P_CQjPOqe5ZsDbekwH5AVJbhS3v4gSBXhZb4qdcE6.webp?r=e8a",
  },
];

function TrendingNow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const CARD_WIDTH = 210;
  const SCROLL_BY = CARD_WIDTH * 3;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? SCROLL_BY : -SCROLL_BY,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white px-4 sm:px-8 lg:px-[148px] pt-[40px] pb-[48px] relative">
      <h2 className="text-[23px] font-bold mb-5 tracking-wide">Trending Now</h2>

      <div className="relative group">
        {/* Left arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-16px] lg:left-[-28px] top-0 bottom-0 z-20 flex items-center justify-center w-[32px] lg:w-[56px] bg-black/70 hover:bg-black/90 transition rounded-r-[4px]"
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 16 16" width="24" height="24" fill="white">
              <path d="M10 3L5 8l5 5V3z" />
            </svg>
          </button>
        )}

        {/* Cards row */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-[-2px] overflow-x-auto scrollbar-hide scroll-smooth -ml-7"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingShows.map((show) => (
            <TrendingCard key={show.id} rank={show.rank} title={show.title} image={show.image} />
          ))}
        </div>

        {/* Right arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-16px] lg:right-[-28px] top-0 bottom-0 z-20 flex items-center justify-center w-[32px] lg:w-[56px] bg-black/70 hover:bg-black/90 transition rounded-l-[4px]"
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 16 16" width="24" height="24" fill="white">
              <path d="M6 3l5 5-5 5V3z" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}

function TrendingCard({
  rank,
  title,
  image,
}: {
  rank: number;
  title: string;
  image: string;
}) {
  return (
    <div className="relative flex-shrink-0 flex items-end cursor-pointer group/card">
     {/* rank  */}
      <span
        className="select-none inline-block font-bold"
        style={{
          fontSize: "6rem",
          lineHeight: 1,
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "0.1rem rgb(255, 255, 255)",
          textShadow: "0 0 1.5rem rgba(0, 0, 0, 0.5)",
          marginRight: "-30px",
          flexShrink: 0,
          fontWeight:800,
          width: "80px",
          textAlign: "right",
          zIndex: 40,
          position: "relative",
          alignSelf: "flex-end",
          paddingBottom: "15px",
          
        }}
      >
        {rank}
      </span>

      {/* Thumbnail */}
      <div
        className="relative  overflow-hidden rounded-[8px]"
        style={{ width: "180px", height: "252px", flexShrink: 0 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.background = "#333";
          }}
        />
      </div>
    </div>
  );
}

export default TrendingNow;