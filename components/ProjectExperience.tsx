"use client";
import { useEffect, useMemo, useState, KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Media = { src: string; alt: string; type?: "image" | "video" };
type Year = { year: string; title: string; bullets: string[]; media?: Media[] };

const DATA: Year[] = [
  {
    year: "2025",
    title: "Project Experience",
    bullets: [
      "Full-scale intelligent cockpit testing – smartphone connectivity module",
    ],
    media: [{ src: "/projects/2022.webp", alt: "robot welding" }],
  },
  {
    year: "2024",
    title: "Project Experience",
    bullets: ["Full-scale intelligent cockpit testing – Tbox module"],
    media: [{ src: "/projects/2022.webp", alt: "robot welding" }],
  },
  {
    year: "2023",
    title: "Project Experience",
    bullets: ["Full-scale intelligent cockpit testing – DAB module"],
    media: [{ src: "/projects/2022.webp", alt: "robot welding" }],
  },
  {
    year: "2022",
    title: "Project Experience",
    bullets: [
      "Delivered full-scale intelligent cockpit testing for a 2022 compact EV sold in Australia, via an engineering partner. Scope: HMI, voice, OTA, infotainment, regulatory checks",
    ],
    media: [{ src: "/projects/2022.webp", alt: "robot welding" }],
  },
];

export default function ProjectExperience() {
  const [currentYear, setCurrentYear] = useState(DATA[0].year);
  const [idx, setIdx] = useState(0);

  const active = useMemo(
    () => DATA.find((d) => d.year === currentYear)!,
    [currentYear]
  );
  const media = active.media ?? [];

  useEffect(() => setIdx(0), [currentYear]);

  const go = (dir: number) => {
    if (!media.length) return;
    setIdx((p) => (p + dir + media.length) % media.length);
  };

  const onKeys = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowUp") {
      const i = DATA.findIndex((d) => d.year === currentYear);
      if (i > 0) setCurrentYear(DATA[i - 1].year);
    }
    if (e.key === "ArrowDown") {
      const i = DATA.findIndex((d) => d.year === currentYear);
      if (i < DATA.length - 1) setCurrentYear(DATA[i + 1].year);
    }
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 lg:py-28 overflow-hidden my-12 md:my-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* 标题 */}
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
          Project Experience
        </h2>

        {/* 布局：手机纵向，≥md 横向 */}
        <div
          className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-[1fr_minmax(180px,220px)] gap-8 md:gap-10"
          tabIndex={0}
          onKeyDown={onKeys}
          aria-label="Project Experience"
        >
          {/* 左侧：媒体 + 文案 */}
          <div className="relative">
            {/* 背景年份（响应式大小） */}
            <div className="pointer-events-none select-none absolute -z-10 inset-0 flex items-end">
              <span className="font-black tracking-tight leading-none text-[32vw] sm:text-[24vw] md:text-[18vw] text-white/10">
                {active.year}
              </span>
            </div>

            {/* 媒体：移动端自适应高，桌面固定高 */}
            <div className="relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl h-[56vw] min-h-[220px] max-h-[420px] md:h-[440px]">
              <AnimatePresence mode="wait">
                {media.length > 0 ? (
                  <motion.div
                    key={`${active.year}-${idx}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.28 }}
                    className="h-full"
                  >
                    {media[idx].type === "video" ? (
                      <video
                        src={media[idx].src}
                        className="h-full w-full object-cover"
                        controls
                        playsInline
                      />
                    ) : (
                      <Image
                        src={media[idx].src}
                        alt={media[idx].alt}
                        width={1600}
                        height={900}
                        className="h-full w-full object-cover"
                        priority
                      />
                    )}
                  </motion.div>
                ) : (
                  <div className="h-full grid place-items-center text-white/50">
                    No media
                  </div>
                )}
              </AnimatePresence>

              {media.length > 1 && (
                <>
                  <button
                    onClick={() => go(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 px-3 py-2 rounded-xl text-sm"
                    aria-label="Prev media"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 px-3 py-2 rounded-xl text-sm"
                    aria-label="Next media"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* 文案 */}
            <div className="mt-4 sm:mt-5 max-w-2xl">
              <h3 className="font-bold text-lg sm:text-xl">{active.title}</h3>
              <ul className="mt-2 sm:mt-3 space-y-2 text-white/80 text-sm sm:text-base">
                {active.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右侧：年份列表（桌面） */}
          <div
            className="hidden md:flex md:flex-col gap-3 md:gap-4 font-extrabold text-xl md:text-2xl"
            role="listbox"
            aria-label="Years"
          >
            {DATA.map((d) => {
              const activeState = d.year === currentYear;
              return (
                <button
                  key={d.year}
                  role="option"
                  aria-selected={activeState}
                  onClick={() => setCurrentYear(d.year)}
                  onMouseEnter={() => setCurrentYear(d.year)}
                  className={`text-left transition ${
                    activeState ? "opacity-100" : "opacity-30 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`inline-block px-1 rounded ${
                      activeState ? "text-white" : ""
                    }`}
                  >
                    {d.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 年份列表（移动端：横向滚动+吸附） */}
        <div className="mt-5 md:hidden">
          <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]">
            {DATA.map((d) => {
              const activeState = d.year === currentYear;
              return (
                <button
                  key={d.year}
                  onClick={() => setCurrentYear(d.year)}
                  className={`
                    snap-start shrink-0 px-4 py-2 rounded-full text-sm font-bold
                    transition
                    ${
                      activeState
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }
                  `}
                  aria-pressed={activeState}
                >
                  {d.year}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
