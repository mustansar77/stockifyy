import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LedgerRule from "@/components/ui/LedgerRule";
import { services, getServiceBySlug } from "@/content/services";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <article className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <Link href="/services" className="font-sans text-sm text-slate hover:text-ink">
        ← All services
      </Link>

      <p className="case-index text-brass text-sm mt-8 mb-4">Service {service.index}</p>
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl">
        {service.title}
      </h1>
      <p className="font-sans text-lg text-slate max-w-xl mt-6 leading-relaxed">
        {service.summary}
      </p>

      <div className="mt-14 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <LedgerRule />
          <p className="font-sans text-slate leading-relaxed mt-8 max-w-2xl">
            {service.description}
          </p>
        </div>
        <aside className="border border-line p-7">
          <p className="font-sans text-xs uppercase tracking-widest text-brass mb-5">
            What this covers
          </p>
          <ul className="space-y-3">
            {service.outcomes.map((o) => (
              <li key={o} className="font-sans text-sm text-ink flex gap-3">
                <span className="text-brass">—</span>
                {o}
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="block text-center bg-ink text-paper font-sans text-sm px-5 py-3 mt-8 hover:bg-teal transition-colors"
          >
            Discuss this service
          </Link>
        </aside>
      </div>

      <div className="mt-24 pt-10 border-t border-line flex items-center justify-between">
        <p className="font-sans text-sm text-slate">Next practice area</p>
        <Link
          href={`/services/${next.slug}`}
          className="font-display text-xl md:text-2xl text-ink hover:text-teal transition-colors"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  );
}
