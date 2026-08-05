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
    <div className="bg-cream">
      <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-goldDeep">
            Stockifyy - Wealth Multiplier
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-ink font-semibold mt-5">
            Our Team
          </h1>
          <p className="font-sans text-slate mt-4 leading-relaxed">
            Professional Financial Advisory &amp; Stock Market Guidance to Help
            You Grow, Protect, and Manage Your Wealth with Confidence.
          </p>
        </div>

        {/* Leadership row — Chairman & CEO, large cards centered */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {leaders.map((member) => (
            <div
              key={member.name}
              className="w-[45%] sm:w-72 max-w-[300px] flex flex-col items-center text-center rounded-2xl border border-line bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-4 pb-0 w-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 300px, 45vw"
                  />
                </div>
              </div>
              <div className="px-5 py-6">
                <h2 className="font-display text-xl text-ink">{member.name}</h2>
                <p className="font-sans text-sm text-gold font-medium mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Directors row — small cards centered */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {directors.map((member) => (
            <div
              key={member.name}
              className="w-[42%] sm:w-40 max-w-[160px] flex flex-col items-center text-center rounded-xl border border-line bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-2 pb-0 w-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 160px, 42vw"
                  />
                </div>
              </div>
              <div className="px-3 py-3">
                <h2 className="font-display text-sm text-ink leading-tight">{member.name}</h2>
                <p className="font-sans text-xs text-gold font-medium mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
