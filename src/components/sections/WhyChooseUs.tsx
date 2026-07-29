"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

const reasons = [
  {
    title: "Ethical Investing",
    body: "Invest in businesses that comply with Islamic principles.",
  },
  {
    title: "Shariah Compliance",
    body: "Only Shariah-compliant companies as per PSX Shariah Board criteria.",
  },
  {
    title: "Financial Screening",
    body: "Companies are screened on financial ratios and business activities.",
  },
];

export default function WhyChooseUs() {
  const [playing, setPlaying] = useState(false);

  return (
<div className="bg-[#FFF7E9]/95">
      <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      {/* <SectionHeading
        index="No. 004 — Why Choose Us"
        title={`Why boards choose ${site.name}.`}
        description="Two minutes from our managing partner on how we approach an engagement — and what we deliberately don't do."
      /> */}

          <div className="">
          <p className="case-index text-brass text-sm mb-4">No. 003 — Why Choose Us</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-6">
            Why boards <br /> choose <span className="bg-gradient-to-r from-[#FEA500] via-[#C88600] to-[#986300] bg-clip-text text-transparent">Stockifyy</span>


          </h2>
        
        </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 mt-12 items-center">
        {/* Video */}
        <div className="relative aspect-video w-full bg-ink overflow-hidden rounded-[20px]">
          {playing ? (
            <video
              className="w-full h-full object-cover "
              controls
              autoPlay
              playsInline
              poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
            >
              {/* Replace with your own hosted video, e.g. /videos/why-choose-us.mp4 */}
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video: why boards choose Stockify"
              className="group relative w-full h-full block rounded-[20px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Stockify managing partner introducing the firm"
                fill
                className="object-cover opacity-80 group-hover:opacity-90 transition-opacity rounded-[20px]"
                sizes="(min-width: 1024px) 55vw, 90vw"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brass/95 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0B1F2E">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="space-y-8">
          {reasons.map((r) => (
            <div key={r.title} className="border-l-2 border-[#FEA500] pl-5">
              <h3 className="font-display text-xl text-ink mb-1">{r.title}</h3>
              <p className="font-sans text-sm text-slate leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
</div>
  );
}
