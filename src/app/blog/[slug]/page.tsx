import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import LedgerRule from "@/components/ui/LedgerRule";
import PostCard from "@/components/blog/PostCard";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import BackToTop from "@/components/blog/BackToTop";
import ShareLinks from "@/components/blog/ShareLinks";
import { posts, getPostBySlug } from "@/content/blog";
import { formatDate } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-cream">
      <ReadingProgressBar />
      <BackToTop />

      {/* Full-bleed magazine hero */}
      <div className="relative h-[56vh] min-h-[420px] max-h-[620px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-content mx-auto w-full px-6 md:px-10 pb-10 md:pb-14">
            <Link
              href="/blog"
              className="inline-block text-sm text-white/80 hover:text-white transition-colors mb-6"
            >
              ← All insights
            </Link>

            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-4 max-w-3xl leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70 mt-5">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-14">
          {/* Main column */}
          <div className="max-w-2xl">
            <LedgerRule />
            <div className="mt-10 space-y-6">
              {post.content.map((para, i) => {
                if (i === 0) {
                  return (
                    <p
                      key={i}
                      className="font-sans text-slate leading-relaxed text-lg first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-goldDeep first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85]"
                    >
                      {para}
                    </p>
                  );
                }
                if (i === 1) {
                  return (
                    <p
                      key={i}
                      className="font-display text-xl md:text-2xl text-ink italic leading-snug border-l-2 border-gold pl-6 py-1"
                    >
                      {para}
                    </p>
                  );
                }
                return (
                  <p key={i} className="font-sans text-slate leading-relaxed text-lg">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Share row — shown here on mobile/tablet where the sidebar is hidden */}
            <div className="mt-12 pt-8 border-t border-line lg:hidden">
              <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
                Share this
              </p>
              <ShareLinks title={post.title} path={`/blog/${post.slug}`} />
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6">
                <p className="font-sans text-xs uppercase tracking-widest text-gold mb-4">
                  Share this
                </p>
                <ShareLinks title={post.title} path={`/blog/${post.slug}`} />
              </div>

              <div className="rounded-2xl border border-line bg-white p-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white font-display font-semibold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink">{post.author}</p>
                  <p className="font-sans text-xs text-slate">Stockifyy Advisory</p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gold to-goldDeep p-6 text-white">
                <p className="font-display text-lg font-semibold leading-snug">
                  Considering something similar?
                </p>
                <p className="font-sans text-sm text-white/80 mt-2 leading-relaxed">
                  Talk to a partner about your situation — confidentially, no
                  obligation.
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-block rounded-full bg-white text-ink font-sans text-sm font-medium px-5 py-2.5 hover:bg-cream transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Further reading */}
      <div className="bg-creamSoft border-t border-creamLine">
        <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="case-index text-gold text-sm mb-6">Further reading</p>
          <div className="grid sm:grid-cols-2 gap-8 items-stretch">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
