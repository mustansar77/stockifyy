import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import ServicesSection from "@/components/sections/ServicesSection";
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
      {/* <ServicesSection /> */}
      <WhyChooseUs />
      {/* <StatsSection /> */}
      <Testimonials />
      <CTASection />
      <FAQSection />
      <ContactSection  />
    </>
  );
}
