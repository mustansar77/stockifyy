import {
  BellRing,
  Building2,
  Crown,
  GraduationCap,
  PieChart,
  Receipt,
  ShieldCheck,
  UserCheck,
  Video,
} from "lucide-react";
import type { Service } from "@/types";
import oneOnOneAdvisory from "../../public/images/one-on-one.jpg";

export const services: Service[] = [
  {
    slug: "stockifyy-exclusive-premium-services",
    navLabel: "Stockifyy Exclusive Premium Services",
    title: "Stockifyy Exclusive Premium Services",
    tagline: "Institutional-grade insight for elite investors.",
    icon: Crown,
    summary:
      "A priority-access tier built for high-stakes investors who need more than standard market tips.",
    intro: [
      "Our Exclusive Premium tier is designed for investors who require more than standard market tips. It combines deep-dive fundamental analysis with priority execution strategies, so you always trade a step ahead of the broader market.",
      "We bridge the gap between market volatility and consistent wealth creation with dedicated mentorship and institutional-grade research tailored to your financial goals, whether you're hedging existing positions or growing capital aggressively.",
    ],
    features: [
      {
        title: "Priority Market Access",
        description:
          "Real-time trade signals and in-depth research reports before they reach the broader market, giving you a crucial timing advantage.",
      },
      {
        title: "One-on-One Expert Mentorship",
        description:
          "Direct access to senior analysts who provide personalised guidance based on your unique risk profile and long-term objectives.",
      },
      {
        title: "Advanced Risk Management",
        description:
          "Professional-grade hedging and capital-preservation strategies to protect your portfolio during uncertain market cycles.",
      },
      {
        title: "Exclusive Sectoral Insights",
        description:
          "Private webinars and strategy sessions focused on emerging sectoral opportunities and global economic shifts.",
      },
      {
        title: "Tailored Wealth Roadmaps",
        description:
          "Every premium member receives a customised investment plan built for sustainable growth and long-term financial legacy.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
    metaDescription:
      "Stockifyy Exclusive Premium Services: priority market access, one-on-one mentorship and institutional-grade research for elite Shariah-compliant investors.",
  },
  {
    slug: "one-on-one-advisory",
    navLabel: "One on One Advisory",
    title: "One-on-One Advisory",
    tagline: "A dedicated advisor for your unique financial story.",
    icon: UserCheck,
    summary:
      "Personalised partnership with a dedicated financial expert who works exclusively on your portfolio.",
    intro: [
      "Every investor has a unique financial story and a different appetite for risk. Unlike generic market advice, our One-on-One Advisory model pairs you with a dedicated financial expert who works exclusively on your portfolio's needs.",
      "We cut through market noise to offer clear, actionable and research-backed strategies aligned with your individual wealth goals and investment timeline, empowering you to make informed decisions with confidence.",
    ],
    features: [
      {
        title: "Dedicated Personal Consultant",
        description:
          "A direct line to an expert advisor who understands your financial background and adapts to every market move.",
      },
      {
        title: "Customised Portfolio Analysis",
        description:
          "No one-size-fits-all advice — your existing investments are reviewed and optimised against current market conditions.",
      },
      {
        title: "Real-Time Collaborative Trading",
        description:
          "Work alongside your advisor to identify entry and exit points in real time so you never miss an opportunity.",
      },
      {
        title: "Continuous Financial Education",
        description:
          "We explain the reasoning behind every move, teaching you the mechanics of successful long-term investing.",
      },
      {
        title: "Focused Goal Tracking",
        description:
          "Clear milestones and regular progress reports keep you on the right path to financial freedom.",
      },
    ],
    image1: oneOnOneAdvisory,
    image2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    metaDescription:
      "One-on-One Advisory from Stockifyy: a dedicated financial expert, customised portfolio analysis and real-time guidance for individual PSX investors.",
  },
  {
    slug: "corporate-advisory",
    navLabel: "Corporate Advisory",
    title: "Corporate Advisory",
    tagline: "Strategic financial navigation for businesses and institutions.",
    icon: Building2,
    summary:
      "Comprehensive, Shariah-compliant consulting for businesses seeking expert financial navigation.",
    intro: [
      "Our Corporate Advisory service is built for businesses and institutions that need expert financial navigation in an ever-evolving market. We provide strategic consulting that spans capital restructuring, treasury management, risk assessment and Shariah-compliant corporate investment.",
      "We act as an extension of your executive team, offering data-driven insight and disciplined financial frameworks that enhance operational efficiency, protect liquidity and support long-term institutional stability on the Pakistan Stock Exchange and beyond.",
    ],
    features: [
      {
        title: "Custom Corporate Solutions",
        description:
          "Bespoke financial strategies aligned with your company's specific industry, scale and long-term objectives.",
      },
      {
        title: "Institutional Research Depth",
        description:
          "High-level market intelligence and economic forecasting to help your board make informed investment decisions.",
      },
      {
        title: "Treasury & Liquidity Management",
        description:
          "Optimise cash flow and idle capital with Shariah-compliant investment vehicles designed for stability and growth.",
      },
      {
        title: "Strategic Risk Mitigation",
        description:
          "We identify financial bottlenecks and market risks early, implementing robust frameworks to safeguard corporate assets.",
      },
      {
        title: "Regulatory & Ethical Compliance",
        description:
          "Every recommendation adheres to the highest standards of financial ethics and Shariah principles, protecting your brand's integrity.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    metaDescription:
      "Corporate Advisory from Stockifyy: treasury management, capital restructuring and Shariah-compliant investment consulting for Pakistani businesses.",
  },
  {
    slug: "assets-under-advisement-aua-model",
    navLabel: "Assets Under Advisement (AUA) Model",
    title: "Assets Under Advisement (AUA) Model",
    tagline: "Expert oversight — while you keep control of your assets.",
    icon: ShieldCheck,
    summary:
      "Strategic, conflict-free consultation for investors who retain full control of their assets.",
    intro: [
      "The AUA Model is designed for sophisticated investors and institutions who maintain full control over their assets but want professional oversight to optimise performance. Unlike traditional asset management, we act purely as your strategic consultant.",
      "We analyse your total asset base to identify inefficiencies and suggest rebalancing strategies aligned with broader market shifts — you retain final decision-making authority, and every recommendation is backed by rigorous research.",
    ],
    features: [
      {
        title: "Holistic Portfolio Oversight",
        description:
          "A unified view of your net worth and how your different investments interact with one another.",
      },
      {
        title: "Strategic Rebalancing Advice",
        description:
          "Timely suggestions on when to shift capital between sectors or asset classes to capture growth and reduce exposure.",
      },
      {
        title: "Conflict-Free Consultation",
        description:
          "Unbiased advice focused solely on performance — you maintain full custody and control of your assets throughout.",
      },
      {
        title: "Institutional-Quality Reporting",
        description:
          "Detailed performance analytics and risk assessments that show exactly how your advised assets compare to benchmarks.",
      },
      {
        title: "Scalable Advisory Solutions",
        description:
          "As your portfolio grows or diversifies, the AUA model scales with you, providing the expert bandwidth complex structures need.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    metaDescription:
      "The Stockifyy Assets Under Advisement (AUA) Model: conflict-free portfolio oversight and rebalancing advice while you retain full control of your assets.",
  },
  {
    slug: "wealth-planning",
    navLabel: "Wealth Planning",
    title: "Wealth Planning & Portfolio Design",
    tagline: "A custom-built blueprint for long-term financial security.",
    icon: PieChart,
    summary:
      "A disciplined, diversified portfolio engineered around your goals, time horizon and risk tolerance.",
    intro: [
      "A successful investment journey begins with a solid foundation. Our Wealth Planning service creates a customised roadmap that balances growth, income and stability according to your specific financial goals — never random stock picking.",
      "We take the time to understand your time horizon, liquidity needs and risk tolerance to design a structural framework that works for you, from selecting high-potential Shariah-compliant equities to balancing sectoral weights.",
    ],
    features: [
      {
        title: "Custom Asset Allocation",
        description:
          "Your portfolio is designed from scratch — every investment has a purpose and fits your overall financial strategy.",
      },
      {
        title: "Diversification Strategy",
        description:
          "Spread investments across sectors and industries so your wealth is never tied to a single stock's performance.",
      },
      {
        title: "Risk-Adjusted Returns",
        description:
          "Designs focused on achieving the highest possible return for your specific level of acceptable risk.",
      },
      {
        title: "Shariah-Compliant Selection",
        description:
          "Every component is rigorously screened to meet ethical and Shariah standards, so your profits carry peace of mind.",
      },
      {
        title: "Future-Proof Planning",
        description:
          "Portfolios are built with flexibility in mind, so your investments can adapt as your goals and markets evolve.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80",
    metaDescription:
      "Wealth Planning & Portfolio Design from Stockifyy: custom asset allocation and diversification built around your goals, on the Pakistan Stock Exchange.",
  },
  {
    slug: "trade-alert",
    navLabel: "Trade Alert",
    title: "Trade Calls Group",
    tagline: "Real-time, research-backed signals for active traders.",
    icon: BellRing,
    summary:
      "High-probability entry, exit and stop-loss levels delivered in real time to active traders.",
    intro: [
      "Our Trade Calls Group is built for active traders who want to capitalise on short-to-medium-term opportunities without spending hours on technical charts. We deliver high-probability signals based on rigorous technical analysis and real-time market sentiment.",
      "On the fast-moving Pakistan Stock Exchange, timing is the difference between profit and loss — our group focuses on clear, actionable entry points, exit targets and stop-loss levels, so you can trade with professional discipline even on the go.",
    ],
    features: [
      {
        title: "High-Probability Signals",
        description:
          "Every trade call is backed by deep technical research and volume analysis, so you only act on high-conviction setups.",
      },
      {
        title: "Complete Trade Management",
        description:
          "Not just a stock name — precise entry prices, target levels and stop-loss orders to manage risk effectively.",
      },
      {
        title: "Real-Time Notifications",
        description:
          "Instant alerts on your mobile device the moment an opportunity develops, so you can act before the price moves.",
      },
      {
        title: "Expert Market Commentary",
        description:
          "Brief market insight and trend analysis with every call, so you grow as a trader while you earn.",
      },
      {
        title: "Active Community Support",
        description:
          "Join a dedicated group of traders where analysts provide ongoing guidance throughout the trading day.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&q=80",
    metaDescription:
      "Stockifyy's Trade Calls Group: real-time PSX trade signals with clear entry, target and stop-loss levels for active, research-driven traders.",
  },
  {
    slug: "learning-portal",
    navLabel: "Learning Portal",
    title: "Educational Courses",
    tagline: "Master the market — from fundamentals to advanced strategy.",
    icon: GraduationCap,
    summary:
      "Practical, hands-on training that turns beginners into confident, independent investors.",
    intro: [
      "Education is the most powerful tool for any investor building long-term wealth. Our courses transform beginners into confident traders and experienced investors into market experts, moving beyond theory into practical, hands-on training.",
      "From the basics of the Pakistan Stock Exchange to fundamental analysis, technical charting and the psychology of trading, our educational wing bridges the gap between financial literacy and confident market execution.",
    ],
    features: [
      {
        title: "Practical Learning Approach",
        description:
          "Courses use live market examples so you can immediately apply what you learn to your own portfolio.",
      },
      {
        title: "Expert-Led Instruction",
        description:
          "Learn directly from seasoned market professionals who share years of experience and proven strategy.",
      },
      {
        title: "Comprehensive Curriculum",
        description:
          "From basic financial literacy to advanced technical analysis, every aspect of the investment landscape is covered.",
      },
      {
        title: "Shariah-Compliant Investing",
        description:
          "Ethical and Shariah principles are woven into the teaching, so you learn to grow wealth responsibly.",
      },
      {
        title: "Lifetime Learning Support",
        description:
          "Enrolling gives you access to an ongoing community of learners and mentors as the market evolves.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80",
    metaDescription:
      "Stockifyy's Educational Courses: practical, expert-led training in Shariah-compliant stock market investing, from beginner to advanced levels.",
  },
  {
    slug: "webinars",
    navLabel: "Webinars",
    title: "Interactive Webinars",
    tagline: "Live sessions that turn market news into a clear strategy.",
    icon: Video,
    summary:
      "Live analyst sessions that translate complex market news into actionable local insight.",
    intro: [
      "Our webinars are a dynamic bridge between complex financial news and your investment strategy. In a fast-changing economy, staying updated isn't just an advantage — it's a necessity, and our live sessions deliver a deep dive into current market conditions, sectoral shifts and emerging opportunities on the PSX.",
      "We take global macro trends and break them down into actionable local insight, giving you a platform to interact directly with senior analysts, ask questions and refine your investment thesis.",
    ],
    features: [
      {
        title: "Live Q&A with Analysts",
        description:
          "Get your specific investment questions answered in real time by our lead researchers during live streams.",
      },
      {
        title: "Deep-Dive Market Analysis",
        description:
          "We go beyond the headlines to explore the underlying factors driving stock prices and economic trends.",
      },
      {
        title: "Actionable Sectoral Outlooks",
        description:
          "Every webinar identifies sectors poised for growth and those carrying elevated risk in the weeks ahead.",
      },
      {
        title: "Convenient Digital Access",
        description:
          "Join from home or office on any device — never miss a critical market update.",
      },
      {
        title: "Exclusive Strategy Previews",
        description:
          "Participants often get a first look at upcoming research reports before they're published more widely.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=1200&q=80",
    metaDescription:
      "Stockifyy's Interactive Webinars: live analyst sessions, Q&A and sectoral outlooks that turn Pakistan Stock Exchange news into actionable strategy.",
  },
  {
    slug: "taxation-services",
    navLabel: "Taxation Services",
    title: "Taxation Services",
    tagline: "Clear tax guidance for confident, compliant investing.",
    icon: Receipt,
    summary:
      "Practical guidance on capital gains tax, withholding tax and FBR filing for stock market investors.",
    intro: [
      "Tax rules for stock market income in Pakistan change frequently, and getting them wrong can quietly erode your returns. Our Taxation Services help individual investors, active traders and corporate clients understand exactly what they owe — and what they don't.",
      "We work alongside your investment strategy rather than in isolation, so tax planning is built into every recommendation instead of being an afterthought at filing time.",
    ],
    features: [
      {
        title: "Capital Gains Tax Guidance",
        description:
          "Clear breakdowns of CGT on your PSX trades based on your holding period and filer status, so nothing catches you by surprise.",
      },
      {
        title: "Withholding Tax Optimisation",
        description:
          "We review broker-level deductions and dividend withholding to help ensure you're not paying more than required.",
      },
      {
        title: "Filer Status Advisory",
        description:
          "Guidance on maintaining Active Taxpayer List status and understanding how it affects your trading costs.",
      },
      {
        title: "Annual Return Support",
        description:
          "Practical support organising your capital market income and statements ahead of your FBR wealth and income tax filing.",
      },
      {
        title: "Corporate Tax Coordination",
        description:
          "For institutional clients, we coordinate with your finance team on the tax implications of corporate investment activity.",
      },
    ],
    image1: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    image2: "https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=1200&q=80",
    metaDescription:
      "Stockifyy Taxation Services: capital gains tax, withholding tax and FBR filing guidance for Pakistan Stock Exchange investors and corporate clients.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
