import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import ServicesSpiral from "@/components/sections/ServicesSpiral";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServicesSpiral />
      <WhyChooseUs />
      {/* <StatsSection /> */}
      <Testimonials />
      <CTASection />
      <FAQSection />
      <ContactSection  />
    </>
  );
}
