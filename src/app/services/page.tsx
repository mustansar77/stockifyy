import type { Metadata } from "next";
import Link from "next/link";
import LedgerRule from "@/components/ui/LedgerRule";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six advisory disciplines: M&A, capital strategy, restructuring, governance, valuation, and growth strategy.",
};

export default function ServicesPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <p className="case-index text-brass text-sm mb-4">Practice Areas</p>
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-2xl">
        Advisory built around the decision, not the deliverable.
      </h1>
      <p className="font-sans text-slate max-w-xl mt-6 leading-relaxed">
        Each discipline below is led by a partner directly. We take on a
        deliberately limited number of engagements at any time, so every
        mandate has senior attention from day one.
      </p>

      <div className="mt-16">
        <LedgerRule ticks />
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-10 items-start py-9 border-b border-line hover:bg-teal/5 transition-colors -mx-4 px-4"
          >
            <p className="case-index text-2xl text-brass">{s.index}</p>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-teal transition-colors">
                {s.title}
              </h2>
              <p className="font-sans text-sm md:text-base text-slate mt-2 max-w-xl">
                {s.summary}
              </p>
            </div>
            <span className="font-sans text-sm text-slate self-center group-hover:translate-x-1 group-hover:text-teal transition-all">
              View →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
