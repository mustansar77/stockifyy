import type { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "mid-market-ma-outlook-2026",
    title: "The mid-market M&A outlook for 2026",
    excerpt:
      "Deal volume in the mid-market is recovering unevenly. Here's where we see genuine momentum versus where caution still dominates.",
    content: [
      "Deal activity below the $500M threshold has behaved very differently from headline-grabbing mega-mergers over the past eighteen months. Financing remains tighter, but strategic buyers with strong balance sheets are increasingly willing to move on quality assets.",
      "We're seeing three consistent patterns across our current mandates: longer diligence windows, more structured earn-outs to bridge valuation gaps, and a renewed premium on businesses with clean, audit-ready financials.",
      "For sellers, the practical implication is preparation. Businesses that enter a process with organised data rooms and a credible forward plan are closing faster and at tighter valuation ranges than those that aren't.",
      "For buyers, discipline on integration planning — starting before signing, not after closing — continues to separate deals that create value from those that merely complete.",
    ],
    author: "Advisory Team",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "M&A",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    slug: "capital-structure-in-a-higher-rate-environment",
    title: "Rethinking capital structure in a higher-rate environment",
    excerpt:
      "The cost of debt has reset expectations across the board. What that means for how growth companies should fund their next stage.",
    content: [
      "For much of the last decade, cheap debt made capital structure decisions relatively forgiving. That's no longer the case, and businesses that haven't revisited their funding mix are carrying more risk than they realise.",
      "The businesses navigating this best are treating capital structure as a live decision rather than a one-time setup: revisiting facility terms, covenant headroom, and refinancing timelines on a regular cycle rather than only when a maturity wall forces the conversation.",
      "Equity is not automatically the answer either. In several recent mandates, the right move was renegotiating existing facilities and extending runway rather than diluting ahead of a stronger valuation window.",
    ],
    author: "Advisory Team",
    date: "2026-05-14",
    readTime: "5 min read",
    category: "Capital Strategy",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    slug: "signs-a-turnaround-plan-is-too-late",
    title: "The early warning signs a turnaround plan is already too late",
    excerpt:
      "Restructuring works best when it starts before the crisis is visible on the balance sheet. Here's what boards consistently miss.",
    content: [
      "By the time cash flow problems are obvious in monthly reporting, a business has usually already lost several months of optionality. The signals worth watching are earlier and less obvious: extending payment terms with core suppliers, a rising cost of customer acquisition without matching lifetime value, or key staff departures in finance and operations.",
      "Boards that act on these earlier signals retain far more control over the outcome — more time to negotiate with lenders, more credibility with staff and suppliers, and more options beyond a forced sale process.",
      "The single highest-leverage habit we see in resilient companies is a rolling 13-week cash flow forecast maintained continuously, not produced only once a problem has already emerged.",
    ],
    author: "Advisory Team",
    date: "2026-04-22",
    readTime: "7 min read",
    category: "Restructuring",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&q=80",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
