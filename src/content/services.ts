import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "mergers-acquisitions",
    index: "01",
    title: "Mergers & Acquisitions",
    summary:
      "End-to-end deal advisory — from target screening to post-merger integration.",
    description:
      "We advise boards and management teams through the full lifecycle of a transaction: strategic rationale, valuation, negotiation, due diligence coordination, and integration planning. Our role is to protect value at every stage, not just close the deal.",
    outcomes: [
      "Buy-side and sell-side representation",
      "Valuation and deal structuring",
      "Due diligence coordination",
      "Post-merger integration planning",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  },
  {
    slug: "capital-strategy",
    index: "02",
    title: "Capital Strategy",
    summary:
      "Optimising the balance sheet — funding structure, capital allocation, investor readiness.",
    description:
      "We help leadership teams decide how to fund growth: the right mix of debt and equity, when to raise, and how to present the story to capital markets. This includes readiness reviews ahead of a raise or listing.",
    outcomes: [
      "Capital structure review",
      "Fundraising strategy and materials",
      "Investor and lender readiness",
      "Scenario and sensitivity modelling",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    slug: "restructuring-turnaround",
    index: "03",
    title: "Restructuring & Turnaround",
    summary:
      "Stabilising and repositioning businesses under financial or operational pressure.",
    description:
      "When performance has deteriorated, we provide an independent, rapid assessment and a workable plan — covering liquidity management, stakeholder negotiation, and operational reset.",
    outcomes: [
      "13-week cash flow and liquidity planning",
      "Creditor and stakeholder negotiation",
      "Operational restructuring roadmap",
      "Interim management support",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    slug: "governance-risk",
    index: "04",
    title: "Governance & Risk Advisory",
    summary: "Board effectiveness, risk frameworks, and regulatory positioning.",
    description:
      "We work with boards and audit committees to strengthen governance structures, clarify risk appetite, and prepare organisations for regulatory scrutiny or investor diligence.",
    outcomes: [
      "Board and committee effectiveness reviews",
      "Enterprise risk framework design",
      "Regulatory and compliance positioning",
      "ESG and disclosure advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  },
  {
    slug: "valuation-financial-modelling",
    index: "05",
    title: "Valuation & Financial Modelling",
    summary: "Independent, defensible valuations and decision-grade models.",
    description:
      "From fairness opinions to complex three-statement models, we build the analytical backbone that supports high-stakes decisions — built to withstand scrutiny from boards, auditors, and counterparties.",
    outcomes: [
      "Independent valuation opinions",
      "Three-statement and LBO modelling",
      "Scenario and stress testing",
      "Purchase price allocation support",
    ],
    image:
      "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
  },
  {
    slug: "strategy-growth-advisory",
    index: "06",
    title: "Strategy & Growth Advisory",
    summary:
      "Market entry, portfolio strategy, and long-range planning for leadership teams.",
    description:
      "We help executive teams pressure-test strategic direction — where to compete, where to divest, and how to sequence growth investment against available capital and management bandwidth.",
    outcomes: [
      "Market entry and expansion planning",
      "Portfolio and divestiture strategy",
      "Long-range strategic planning",
      "Competitive and market diligence",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
