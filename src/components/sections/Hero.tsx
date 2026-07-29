"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Star, BadgeCheck } from "lucide-react";
import { Ticker } from "./Ticker";
import teamImage from "../../../public/images/team.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFDF7" }}>
      <style>{`
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(254,165,0,0.35); }
          50%       { box-shadow: 0 4px 44px rgba(254,165,0,0.65); }
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        .anim-1 { animation: float-up 0.65s 0.05s ease forwards; opacity: 0; }
        .anim-2 { animation: float-up 0.65s 0.15s ease forwards; opacity: 0; }
        .anim-3 { animation: float-up 0.65s 0.25s ease forwards; opacity: 0; }
        .anim-4 { animation: float-up 0.65s 0.35s ease forwards; opacity: 0; }
        .anim-5 { animation: float-up 0.65s 0.45s ease forwards; opacity: 0; }
        .anim-6 { animation: float-up 0.65s 0.55s ease forwards; opacity: 0; }
        .glow-btn { animation: glow-pulse 2.8s ease-in-out infinite; }
        .shimmer-text {
          background-image: linear-gradient(90deg, #FEA500 0%, #7C5200 40%, #FEA500 80%, #7C5200 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .float-card-1 { animation: float-card 4s 0s ease-in-out infinite; }
        .float-card-2 { animation: float-card 4s 1.5s ease-in-out infinite; }
      `}</style>

      {/* dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(254,165,0,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.6,
        }}
      />

      {/* top-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(254,165,0,0.10) 0%, transparent 65%)" }}
      />

      {/* bottom-left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(254,165,0,0.07) 0%, transparent 65%)" }}
      />

      {/* gold top border */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #FEA500, #7C5200, #FEA500, transparent)" }}
      />

      {/* TICKER */}
      <Ticker />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8  lg:px-12">
        <div className="flex min-h-[calc(100vh-40px)] flex-col lg:flex-row lg:items-center lg:gap-10">

          {/* ════════ LEFT — copy ════════ */}
          <div className="flex w-full flex-col items-start pb-8 pt-12 sm:pb-10 sm:pt-14 lg:w-[52%] lg:py-1 lg:pr-8">

            {/* kicker */}
            <div
              className="anim-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
              style={{
                border: "1.5px solid rgba(254,165,0,0.4)",
                background: "rgba(254,165,0,0.08)",
              }}
            >
              <BadgeCheck className="size-3 sm:size-3.5" style={{ color: "#FEA500" }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px] sm:tracking-[0.2em]"
                style={{ color: "#7C5200" }}
              >
                SECP Certified · Shariah-Compliant
              </span>
            </div>

            {/* headline */}
            <h1 className="anim-2 mt-5 text-[2rem] font-black leading-[1.06] tracking-tight text-[#111111] sm:text-4xl md:text-5xl lg:text-[3.3rem] xl:text-[3.9rem]">
              Grow Your Wealth
              <br />
              <span className="shimmer-text">The Right Way.</span>
            </h1>

            {/* sub-headline */}
            <p
              className="anim-2 mt-2.5 text-base font-medium sm:text-lg md:text-xl"
              style={{ color: "" }}
            >
              Pakistan&apos;s most trusted stock market advisory.
            </p>

            {/* body */}
            <p className="anim-3 mt-3 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base sm:mt-4">
              Expert stock market guidance on the PSX — ethical, research-driven
              and built around your financial goals.
            </p>

            {/* CTAs */}
            <div className="anim-4 mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Link
                href="/#contact"
                className="glow-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:gap-2.5 sm:px-8 sm:py-4"
                style={{ background: "linear-gradient(135deg, #FEA500 0%, #7C5200 100%)" }}
              >
                Start Growing Wealth
                <ArrowRight className="size-3.5 sm:size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-[#FEA500]/5 sm:px-8 sm:py-4"
                style={{ borderColor: "rgba(254,165,0,0.4)", color: "#7C5200" }}
              >
                Explore Services
              </Link>
            </div>

            {/* stats */}
            <div
              className="anim-5 mt-8 grid grid-cols-3 gap-3 border-t pt-6 sm:mt-12 sm:gap-8 sm:pt-8"
              style={{ borderColor: "rgba(254,165,0,0.2)" }}
            >
              {[
                { value: "500+", label: "Active Clients",    sub: "& growing"      },
                { value: "8+",   label: "Years Experience",  sub: "in PSX markets" },
                { value: "100%", label: "Shariah Compliant", sub: "every service"  },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-black sm:text-2xl md:text-3xl" style={{ color: "#FEA500" }}>
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide text-[#111111] sm:mt-1 sm:text-[11px]">
                    {s.label}
                  </p>
                  <p className="text-[9px] text-gray-400 sm:text-[10px]">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ════════ RIGHT — team image ════════ */}
          <div className="relative flex w-full items-end justify-center pb-12 lg:w-[48%] lg:h-[calc(100vh-40px)] lg:items-end lg:justify-center lg:pb-0">

            {/* background card — hidden on mobile/tablet, shown on desktop */}
            <div
              className="absolute inset-x-4 bottom-10 top-10 hidden rounded-3xl lg:block lg:inset-x-0 lg:bottom-0 lg:top-16"
              style={{
                background: "linear-gradient(160deg, rgba(254,165,0,0.07) 0%, rgba(124,82,0,0.04) 100%)",
                border: "1px solid rgba(254,165,0,0.15)",
              }}
            />

            {/* floating card 1 — DESKTOP ONLY */}
            <div
              className="float-card-1 absolute left-0 top-14 z-20 hidden rounded-2xl px-4 py-3.5 lg:block"
              style={{
                background: "rgba(255,253,247,0.92)",
                border: "1px solid rgba(254,165,0,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(254,165,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#FEA500" }}>
                Avg. Portfolio Return
              </p>
              <p className="mt-1 text-2xl font-black" style={{ color: "#111111" }}>+34.8%</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <TrendingUp className="size-3" style={{ color: "#16a34a" }} />
                <p className="text-[10px] font-medium" style={{ color: "#16a34a" }}>
                  Outperforming KSE-100
                </p>
              </div>
            </div>

            {/* floating card 2 — DESKTOP ONLY */}
            <div
              className="float-card-2 absolute bottom-20 right-0 z-20 hidden rounded-2xl px-4 py-3.5 lg:block"
              style={{
                background: "rgba(255,253,247,0.92)",
                border: "1px solid rgba(254,165,0,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(254,165,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#FEA500" }}>
                Trusted Investors
              </p>
              <p className="mt-1 text-2xl font-black" style={{ color: "#111111" }}>500+</p>
              <div className="mt-1.5 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3 fill-[#FEA500] text-[#FEA500]" />
                ))}
              </div>
            </div>

            {/* team image */}
            <div className="relative z-10 h-[300px] w-full max-w-[280px] sm:h-[420px] sm:max-w-[380px] md:h-[480px] md:max-w-[420px] lg:h-[620px] lg:max-w-[520px]">
              <Image
                src={teamImage}
                alt="Stockifyy Advisory Team"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 45vw"
                style={{ filter: "drop-shadow(0 20px 40px rgba(254,165,0,0.15))" }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* bottom divider */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FEA500, transparent)", opacity: 0.5 }}
      />
    </section>
  );
}