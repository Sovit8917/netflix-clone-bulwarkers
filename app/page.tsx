import TrendingNow from "@/components/TrendingNow";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrendingNow />
    </div>
  );
}

export default page;