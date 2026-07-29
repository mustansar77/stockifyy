import Link from "next/link";
import { services } from "@/content/services";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesSection() {
  return (
    <section className="bg-ink text-paper py-24 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <SectionHeading
            index="No. 003 — Practice Areas"
            title="Six disciplines. One point of accountability."
            light
          />
          <Link
            href="/services"
            className="hidden md:inline-block font-sans text-sm text-paper/70 hover:text-paper whitespace-nowrap"
          >
            All services →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border-t border-paper/15 py-7 flex items-start justify-between gap-6 hover:border-brass transition-colors"
            >
              <div>
                <p className="case-index text-brass/80 text-xs mb-2">{s.index}</p>
                <h3 className="font-display text-xl md:text-2xl">{s.title}</h3>
                <p className="font-sans text-sm text-paper/60 mt-2 max-w-md">
                  {s.summary}
                </p>
              </div>
              <span className="font-sans text-paper/40 group-hover:text-brass group-hover:translate-x-1 transition-all shrink-0 mt-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
