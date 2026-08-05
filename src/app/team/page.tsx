import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Professional financial advisory and stock market guidance to help you grow, protect, and manage your wealth with confidence.",
};

export default function TeamPage() {
  const leaders = team.filter((m) =>
    ["Chairman", "Chief Executive Officer"].includes(m.role)
  );
  const directors = team.filter(
    (m) => !["Chairman", "Chief Executive Officer"].includes(m.role)
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero heading */}
      <div className="max-w-content mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12 text-center">
        <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-goldDeep mb-5">
          Stockifyy — Wealth Multiplier
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-ink font-semibold leading-tight">
          Meet Our <span className="text-gradient-gold">Team</span>
        </h1>
        <p className="font-sans text-ink/55 mt-5 max-w-xl mx-auto leading-relaxed">
          A dedicated group of professionals committed to delivering Shariah-compliant
          financial guidance you can trust.
        </p>
      </div>

      {/* Thin gold divider */}
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Leadership — Chairman & CEO */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-14 pb-10">
        <p className="text-center font-sans text-xs uppercase tracking-[0.25em] text-goldDeep font-semibold mb-10">
          Leadership
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {leaders.map((member) => (
            <div key={member.name} className="group flex flex-col items-center w-48 sm:w-56 md:w-64">
              {/* Image */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md ring-1 ring-gold/20 group-hover:ring-gold/60 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 192px"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Name & role */}
              <div className="mt-4 text-center">
                <h2 className="font-display text-lg md:text-xl text-ink font-semibold">
                  {member.name}
                </h2>
                <span className="inline-block mt-1.5 rounded-full bg-gold/10 border border-gold/30 px-3 py-0.5 text-xs font-sans font-semibold text-goldDeep tracking-wide">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thin divider */}
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Directors */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-12 pb-24">
        <p className="text-center font-sans text-xs uppercase tracking-[0.25em] text-goldDeep font-semibold mb-10">
          Directors
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {directors.map((member) => (
            <div key={member.name} className="group flex flex-col items-center w-32 sm:w-36 md:w-40">
              {/* Image */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm ring-1 ring-gold/15 group-hover:ring-gold/50 transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 128px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Name & role */}
              <div className="mt-3 text-center">
                <h2 className="font-display text-sm md:text-base text-ink font-semibold leading-tight">
                  {member.name}
                </h2>
                <span className="inline-block mt-1 rounded-full bg-gold/10 border border-gold/25 px-2.5 py-0.5 text-[10px] font-sans font-semibold text-goldDeep tracking-wide">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
