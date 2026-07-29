"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 md:right-10 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-gold to-goldDeep text-white shadow-lg hover:opacity-90 transition-opacity"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
