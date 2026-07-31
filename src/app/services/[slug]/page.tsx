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
  return { title: service.title, description: service.metaDescription };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-cream">
      {/* Full-bleed hero — image as background, text overlaid on top */}
      <div className="relative h-[60vh] min-h-[460px] max-h-[620px] w-full overflow-hidden">
        <Image
          src={service.image1}
          alt={service.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        <Link
          href="/services"
          className="absolute left-6 top-6 md:left-10 md:top-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-goldDeep transition-colors"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All services
        </Link>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
            <Icon className="size-3.5" aria-hidden="true" />
            {service.tagline}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mt-5 max-w-3xl leading-tight">
            {service.title}
          </h1>

          <p className="font-sans text-white/80 border-y border-gold/50 py-3 mt-6 max-w-xl leading-relaxed">
            {service.summary}
          </p>
        </div>
      </div>

      <article className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <div className="space-y-5">
              {service.intro.map((para, i) => (
                <p key={i} className="font-sans text-slate leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            <div className="relative aspect-[16/9] w-full mt-10 rounded-2xl overflow-hidden">
              <Image
                src={service.image2}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-white p-7 h-fit">
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-5">
              What this covers
            </p>
            <ul className="space-y-5">
              {service.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Check className="size-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{f.title}</p>
                    <p className="font-sans text-xs text-slate mt-1 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="block text-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display text-sm font-medium px-5 py-3 mt-8 shadow-lg hover:opacity-90 transition-opacity"
            >
              Discuss this service
            </Link>
          </aside>
        </div>

        <div className="mt-24 pt-10 border-t border-line">
          <p className="case-index text-gold text-sm mb-6">Explore other services</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
