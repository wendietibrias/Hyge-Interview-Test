import AboutSection from "@/components/landing/AboutSection";
import HeroSection from "@/components/landing/HeroSection";
import ServiceSection from "@/components/landing/ServiceSection";
import Navbar from "@/components/reusable/Navbar";

export default function Home() {
  return (
     <>
      <Navbar />
      <main className="w-full min-h-screen">
        {/** Hero Call */}
        <HeroSection />
        {/** About Call  */}
        <AboutSection/>
        {/** Service Call */}
        <ServiceSection />
      </main>
     </>
  );
}
