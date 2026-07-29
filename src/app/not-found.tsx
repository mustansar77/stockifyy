import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 md:px-10 py-32 text-center">
      <p className="case-index text-brass text-sm mb-4">404</p>
      <h1 className="font-display text-4xl md:text-5xl text-ink mb-6">
        This page isn&apos;t on file.
      </h1>
      <p className="font-sans text-slate mb-10">
        The page you&apos;re looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="bg-ink text-paper font-sans text-sm px-7 py-3.5 hover:bg-teal transition-colors"
      >
        Return home
      </Link>
    </section>
  );
}
