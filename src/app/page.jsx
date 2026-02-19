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
      <div id="hero" className="scroll-mt-32 mt-32 my-10 px-12 py-4 md:scroll-mt-40 md:mt-40 md:my-20 lg:scroll-mt-0 lg:mt-0 lg:my-0 lg:p-0">
        <HeroSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
    </main>
  );
}