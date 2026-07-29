import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
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

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 2);

  return (
    <div className="bg-cream">
      <article className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All services
          </Link>

          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold text-goldDeep shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Service {service.index}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-ink mt-6 max-w-3xl leading-tight">
          {service.title}
        </h1>
        <p className="font-sans text-lg text-slate max-w-xl mt-6 leading-relaxed">
          {service.summary}
        </p>

        <div className="relative aspect-[21/9] w-full mt-10 rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(min-width: 1170px) 1170px, 100vw"
            priority
          />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <p className="font-sans text-slate leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
          <aside className="rounded-2xl border border-line bg-white p-7 h-fit">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-5">
              What this covers
            </p>
            <ul className="space-y-3">
              {service.outcomes.map((o) => (
                <li key={o} className="font-sans text-sm text-ink flex gap-3">
                  <Check className="size-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="block text-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-sans text-sm font-medium px-5 py-3 mt-8 shadow-lg hover:opacity-90 transition-opacity"
            >
              Discuss this service
            </Link>
          </aside>
        </div>

        <div className="mt-24 pt-10 border-t border-line">
          <p className="case-index text-gold text-sm mb-6">Explore other practice areas</p>
          <div className="grid sm:grid-cols-2 gap-8">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
