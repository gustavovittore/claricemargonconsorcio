import { AboutSection } from "@/components/landing/AboutSection";
import { BrazilInvestmentSection } from "@/components/landing/BrazilInvestmentSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { GlobalMapSection } from "@/components/landing/GlobalMapSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { Navbar } from "@/components/landing/Navbar";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { PersonalizedSection } from "@/components/landing/PersonalizedSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { VideoTestimonialsSection } from "@/components/landing/VideoTestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F2F0EF] text-[#1F1F1F]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PersonalizedSection />
      <VideoTestimonialsSection />
      <TestimonialsSection />
      <GlobalMapSection />
      <BrazilInvestmentSection />
      <PartnersSection />
      <AboutSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
