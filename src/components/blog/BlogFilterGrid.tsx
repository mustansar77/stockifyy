"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/types";
import PostCard from "./PostCard";

export default function BlogFilterGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");

  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-gold text-white"
                  : "border border-gold/30 text-ink hover:border-gold/60"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {visible.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </>
  );
}
