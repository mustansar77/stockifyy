# Stockify Advisory — Corporate Advisory Website

Next.js 14 (App Router) · TypeScript · Tailwind CSS
Professional `src/` structure with pages, components, content, and
types fully separated.

## Folder structure

```
stockify-nextjs/
├── public/
│   ├── images/                 # local brand/photo assets (see README.txt inside)
│   └── videos/                 # local video assets (see README.txt inside)
├── src/
│   ├── app/                            # ROUTES (App Router — file = URL)
│   │   ├── layout.tsx                  # root layout: fonts, Header, Footer, metadata
│   │   ├── page.tsx                    # "/" — composes all homepage sections
│   │   ├── globals.css
│   │   ├── not-found.tsx               # custom 404
│   │   ├── services/
│   │   │   ├── page.tsx                # "/services"
│   │   │   └── [slug]/page.tsx         # "/services/mergers-acquisitions" etc.
│   │   └── blog/
│   │       ├── page.tsx                # "/blog"
│   │       └── [slug]/page.tsx         # "/blog/mid-market-ma-outlook-2026" etc.
│   │
│   ├── components/
│   │   ├── layout/                     # structural, appears on every page
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/                   # one file per homepage section
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── WhyChooseUs.tsx         # video section
│   │   │   ├── StatsSection.tsx        # 3 stat cards
│   │   │   ├── Testimonials.tsx        # moving/marquee card row
│   │   │   ├── CTASection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                         # small reusable primitives
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── LedgerRule.tsx          # signature divider motif
│   │       └── Accordion.tsx           # used by FAQSection
│   │
│   ├── content/                        # ALL COPY & DATA lives here, not in components
│   │   ├── site.ts                     # brand name, nav, contact details
│   │   ├── services.ts
│   │   ├── blog.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   └── stats.ts
│   │
│   ├── types/
│   │   └── index.ts                    # shared TypeScript interfaces
│   │
│   └── lib/
│       └── utils.ts                    # formatDate, cx (class merge), etc.
│
├── tailwind.config.ts                  # design tokens: colors, fonts, marquee keyframes
├── next.config.js
├── postcss.config.js
├── package.json
└── tsconfig.json                       # "@/..." path aliases into src/
```

**Why this shape:** routes (`app/`) only ever import components — they
don't contain copy or long JSX blocks. Components only ever import
from `content/` — they don't hardcode text. That means:
- To change any wording, stats, testimonials, FAQ, or blog/service
  content → edit a file in `src/content/`, never a component.
- To restyle a section → edit its file in `src/components/sections/`.
- To add a page → add a folder under `src/app/`.

## Homepage section order (`src/app/page.tsx`)

1. **Hero** — headline, CTA buttons, hero image
2. **About Us** — firm description with image
3. **Services** — 6 practice areas, dark section, links to `/services`
4. **Why Choose Us** — video (click-to-play) + 3 differentiators
5. **Stats** — 3 stat cards
6. **Testimonials** — auto-scrolling row of client quote cards (pauses on hover, respects `prefers-reduced-motion`)
7. **CTA** — full-width call to action band
8. **FAQ** — accordion, expand/collapse
9. **Contact** — form, in-page anchor `#contact`

## Images & video

- Images use `next/image` pointed at Unsplash stock photography so the
  site renders correctly out of the box — swap for your own files in
  `public/images/` when ready (see the README.txt in that folder).
- The "Why Choose Us" video is wired up with a real click-to-play
  player; it currently points at a public sample video as a
  placeholder — replace with your own file per `public/videos/README.txt`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Design tokens (tailwind.config.ts)

- `ink` `#0B1F2E` · `paper` `#F6F4EF` · `brass` `#B08D57` · `teal` `#17423B` · `slate` `#5A6472` · `line` `#DAD4C6`
- Fonts: **Fraunces** (display/serif) + **Inter** (body/UI)
