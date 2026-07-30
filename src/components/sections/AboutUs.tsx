import Image from "next/image";
import teamoffice from "../../../public/images/officeteam.png"

export default function AboutUs() {
  return (
   <div className="bg-[#FFFDF7]">
     <section id="about" className="max-w-content  mx-auto px-6 md:px-10 py-24 md:py-24">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] w-full order-2 md:order-1">
          <Image
            src={teamoffice}
            alt="Stockify Advisory office"
            fill
            className="object-cover rounded-3xl"
            sizes="(min-width: 768px) 50vw, 90vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="case-index font-display text-ink font text-lg mb-4">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-6">
            Your Trusted Partner in <span className="text-gradient-gold">Smarter Investing</span>
          </h2>
          <div className="font-sans text-slate leading-relaxed space-y-5">
            <p>
              Our mission at Stockifyy is to make Shariah-compliant investing easy
               and reliable for everyone — whether you're just starting your investment 
               journey or already active in the market.clear, research-driven guidance 
               focused on Shariah-compliant companies listed on the Pakistan Stock Exchange.
            </p>


            <p>
              By combining simplicity, transparency and disciplined analysis,
               we help investors make confident decisions, manage risk responsibly, 
               and work toward long-term financial growth without compromising their values.
            </p>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}
