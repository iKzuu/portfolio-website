import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ScrollVelo from "./components/Utils/ScrollVelo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6f6f6]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div className="md:my-10">
        <ScrollVelo />
      </div>
    </main>
  );
}
