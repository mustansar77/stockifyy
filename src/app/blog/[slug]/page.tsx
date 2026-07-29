import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import LedgerRule from "@/components/ui/LedgerRule";
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
    <article className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
      <Link href="/blog" className="font-sans text-sm text-slate hover:text-ink">
        ← All insights
      </Link>

      <p className="font-sans text-xs uppercase tracking-widest text-brass mt-8 mb-4">
        {post.category}
      </p>
      <h1 className="font-display text-4xl md:text-6xl text-ink max-w-3xl leading-tight">
        {post.title}
      </h1>
      <p className="font-sans text-sm text-slate mt-6">
        {post.author} · {formatDate(post.date)} · {post.readTime}
      </p>

      <div className="relative aspect-[16/9] w-full mt-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(min-width: 1180px) 1180px, 100vw"
          priority
        />
      </div>

      <div className="mt-12 max-w-2xl">
        <LedgerRule />
        <div className="mt-10 space-y-6">
          {post.content.map((para, i) => (
            <p key={i} className="font-sans text-slate leading-relaxed text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-10 border-t border-line">
        <p className="font-sans text-xs uppercase tracking-widest text-brass mb-6">
          Further reading
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <h3 className="font-display text-xl text-ink group-hover:text-teal transition-colors">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-slate mt-2">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
