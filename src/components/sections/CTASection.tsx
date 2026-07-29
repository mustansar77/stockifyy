import Button from "@/components/ui/Button";
import Image from "next/image";
import ctabg from "../../../public/images/979dfbd39e08b8cbb4b3d06496c6053c63ff870e.png";

export default function CTASection() {
  return (
    <section>
      <div className="relative overflow-hidden bg-gradient-to-b from-[#634102] via-[#C88600] to-[#FEA500] text-paper px-8 py-16 md:px-16 md:py-20 text-center">
        {/* Background Image */}
        <Image
          src={ctabg}
          alt="CTA Background"
          fill
          className="object-cover opacity-20"
          priority
        />

        {/* Optional Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10">
          <p className="case-index text-white text-sm mb-4">
            No. 006 — Start a Conversation
          </p>

          <h2 className="font-display text-3xl md:text-5xl mx-auto leading-tight mb-6">
            Ready to Build a Better Financial Future?
          </h2>

          <p className="font-sans text-white mx-auto mb-9 leading-relaxed">
            Let our experts help you make the right investment decisions and
            reach your goals.
          </p>

          <Button
            href="/#contact"
            variant="accent"
            className="rounded-[104px] border border-white bg-white/40"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}