"use client";
import React, { useRef } from "react";
import Image from "next/image";

type Card = { title: string; src: string };

const cards: Card[] = [
  {
    title: "Adhesive & Metering System",
    src: "/business/Full-scale_intelligent_cockpit_testing.webp",
  },
  { title: "DAB Testing", src: "/business/DAB_Testing.webp" },
  { title: "Tbox Testing", src: "/business/Tbox_Testing.webp" },
  {
    title: "Smartphone Connectivity Testing",
    src: "/business/Smartphone_Connectivity_Testing.webp",
  },
];

export default function Business() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-28 py-12">
      <h1 className="text-base sm:text-lg md:text-3xl leading-relaxed tracking-wide text-black">
        <strong className="font-black">Relianex</strong> specializes in software
        testing for new energy vehicles and other IT services, with expertise in
        full-scale intelligent cockpit testing, including DAB, T-Box and
        smartphone connectivity.
      </h1>

      {/* Mobile: 横滑；Desktop: 网格 */}
      <div
        ref={scroller}
        className={`
          mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:gap-6
          md:grid-cols-2 lg:grid-cols-4
          md:overflow-visible overflow-x-auto snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none]
        `}
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((c, i) => (
          <article
            key={i}
            className={`
              relative h-[44vw] min-h-[220px] max-h-[320px]
              md:h-[260px] lg:h-[280px]
              rounded-3xl overflow-hidden snap-center md:snap-none
              ring-1 ring-black/10 bg-neutral-200
              shrink-0 w-[86vw] md:w-auto
              transition-transform duration-300 hover:-translate-y-1
              shadow-[0_8px_24px_-10px_rgba(0,0,0,.25)]
            `}
          >
            {/* 背景图 */}
            <Image
              src={c.src}
              alt={c.title}
              fill
              sizes="(max-width:768px) 86vw, (max-width:1024px) 50vw, 25vw"
              className="object-cover object-center"
              priority={i === 0}
            />

            {/* 蒙层 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            {/* 文案 */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold drop-shadow">
                {c.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
