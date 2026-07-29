import Image from "next/image";
import { Star } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  // Duplicate the array so the CSS marquee loop is seamless.
  const track = [...testimonials, ...testimonials];

  return (
 <div className="bg-[#FFFDF7]">
     <section className="py-24 md:py-28 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 mb-14">
        <SectionHeading
          index="No. 005 — Our Testimonials"
          title="Clients Who Trust Us"
          align="center"
        />
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-paper to-transparent z-10" />

        <div className="marquee-track flex gap-6 w-max animate-marquee">
          {track.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="w-[320px] md:w-[380px] shrink-0 rounded-[20px] border border-line bg-white p-7 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-[#FEA500] text-[#FEA500]"
                  />
                ))}
              </div>

              {/* Testimonial */}
              <blockquote className="font-sans text-slate leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 mt-7">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>

                <div>
                  <p className="font-sans text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-slate">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
 </div>
  );
}