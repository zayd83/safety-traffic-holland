"use client";

import React, { useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// ─── Brand data ───────────────────────────────────────────────────────────────

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Wegwerkzaamheden",
    imageUrl: "/images/A7402006.jpg",
  },
  {
    id: 2,
    title: "Evenementen",
    imageUrl: "/images/A7402014.jpg",
  },
  {
    id: 3,
    title: "Calamiteiten",
    imageUrl: "/images/A7401952.jpg",
  },
  {
    id: 4,
    title: "Bouwplaatsbegeleiding",
    imageUrl: "/images/A7401975.jpg",
  },
  {
    id: 5,
    title: "Heel Nederland",
    imageUrl: "/images/Heel-nederland.png",
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer shrink-0
        ${isActive ? "w-[270px]" : "w-[52px]"}`}
      style={{
        height: "420px",
        transition: "width 700ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={onMouseEnter}
    >
      {/* Background image */}
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover"
        sizes="270px"
      />

      {/* Gradient overlay — stronger at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(26,26,46,0.90) 0%, rgba(26,26,46,0.3) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Yellow top accent bar when active */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
        style={{
          backgroundColor: "#F5A623",
          opacity: isActive ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
      />

      {/* Caption */}
      <span
        className="absolute text-white font-semibold whitespace-nowrap text-sm"
        style={{
          ...(isActive
            ? {
                bottom: "20px",
                left: "20px",
                transform: "rotate(0deg)",
                opacity: 1,
              }
            : {
                bottom: "88px",
                left: "50%",
                transform: "translateX(-50%) rotate(90deg)",
                opacity: 0.75,
                fontSize: "12px",
              }),
          transition: "opacity 300ms ease, transform 400ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {item.title}
      </span>
    </div>
  );
};

// ─── Check icon ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      style={{ color: "#F5A623" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function HeroAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0d1b2e 0%, #1A1A2E 45%, #1a3a5c 100%)",
        minHeight: "92vh",
      }}
    >
      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(27,111,190,0.22) 0%, transparent 70%), " +
            "radial-gradient(ellipse 35% 35% at 85% 75%, rgba(245,166,35,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 border border-white/20"
            style={{ backgroundColor: "rgba(27,111,190,0.2)", color: "#93c5fd" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            VCA-gecertificeerd · 24/7 beschikbaar
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Professionele<br />
            <span style={{ color: "#F5A623" }}>verkeers&shy;begeleiding.</span><br />
            Veilig. Vlot. Betrouwbaar.
          </h1>

          <p
            className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
            style={{ lineHeight: "1.75" }}
          >
            Wij begeleiden verkeer bij werkzaamheden, evenementen en calamiteiten — door heel Nederland. Met vaste, VCA-gecertificeerde verkeersregelaars altijd op de juiste plek.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
              style={{ backgroundColor: "#F5A623", color: "#1A1A2E" }}
            >
              Offerte aanvragen
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/25 hover:bg-white/10 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Bekijk onze diensten
            </a>
          </div>
        </div>

        {/* Right: image accordion */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end overflow-hidden">
          <div className="flex flex-row items-stretch gap-3 overflow-x-auto pb-2 max-w-full">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="relative border-t border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-6 md:gap-12">
          {["VCA-gecertificeerd", "Vaste verkeersregelaars", "Heel Nederland"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-white/70 font-medium">
              <CheckIcon />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
