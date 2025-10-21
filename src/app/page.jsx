import LoopingLogo from "@/components/ui/LoopingLogo";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProjectSection from "../components/sections/ProjectSection";
import ScrollVelo from "../components/ui/ScrollVelo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-dark">
      <Navbar />
      {/* Hero */}
      <div className="mt-28 md:mt-32 md:my-20 lg:my-44 px-12 py-4">
        <HeroSection />
      </div>
      <ScrollVelo />
      {/* About */}
      <div className="lg:px-0 lg:py-0">
        <AboutSection />
      </div>
      <LoopingLogo />
      <div>
        <ProjectSection />
      </div>
    </main>
  );
}