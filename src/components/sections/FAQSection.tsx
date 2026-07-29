import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/content/faq";

export default function FAQSection() {
  return (
    <section id="faq" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        {/* <SectionHeading
          index="No. 007 — FAQ"
          title="Common questions before the first call."
        /> */}

             <div className="">
          <p className="case-index text-brass text-sm mb-4">No. 007 — FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-6">
            Common questions before the <span className="bg-gradient-to-r from-[#FEA500] via-[#C88600] to-[#986300] bg-clip-text text-transparent">first call. </span>

          </h2>
          
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
