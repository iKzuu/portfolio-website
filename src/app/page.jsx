import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/layout/Navbar";
import ProjectSection from "@/components/sections/ProjectSection";
import AboutSection from "@/components/sections/AboutSection";
import Marquee from "@/components/animations/Marquee/Marquee";

export default function Home() {

  const sectionPadding = "px-8 md:px-24 lg:px-40 2xl:px-64";

  // px-8 md:px-24 lg:px-28

  return (
    <main className="flex min-h-screen flex-col bg-dark">
      {/* Hero */}
      <div id="hero" className={`${sectionPadding}`}>
        <HeroSection />
      </div>
      <div className={`${sectionPadding} sticky z-50 top-0`}>
        <Navbar />
      </div>
      <div id="about" className={`${sectionPadding}`}>
        <AboutSection />
      </div>
      <Marquee />
      <div id="projects">
        <ProjectSection />
      </div>
    </main>
  );
}