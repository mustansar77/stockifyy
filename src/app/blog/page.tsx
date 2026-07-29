import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LedgerRule from "@/components/ui/LedgerRule";
import { posts } from "@/content/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspective on M&A, capital strategy, and restructuring from active advisory mandates.",
};

export default function BlogIndexPage() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <p className="case-index text-brass text-sm mb-4">Insights</p>
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-2xl">
        Perspective from live mandates.
      </h1>
      <p className="font-sans text-slate max-w-xl mt-6 leading-relaxed">
        Notes from current engagements — written for boards and
        management teams, not for other advisors.
      </p>

      <div className="mt-16">
        <LedgerRule ticks />
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group grid md:grid-cols-[180px_140px_1fr] gap-6 md:gap-10 py-9 border-b border-line hover:bg-teal/5 transition-colors -mx-4 px-4 items-start"
          >
            <div className="relative aspect-[4/3] w-full order-1 md:order-none">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
            <p className="font-sans text-sm text-slate">{formatDate(p.date)}</p>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-brass mb-2">
                {p.category}
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink group-hover:text-teal transition-colors">
                {p.title}
              </h2>
              <p className="font-sans text-sm md:text-base text-slate mt-2 max-w-xl">
                {p.excerpt}
              </p>
              <p className="font-sans text-xs text-slate/70 mt-4">
                {p.author} · {p.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
