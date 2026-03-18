import TrendingNow from "@/components/TrendingNow";
import HeroSection from "@/components/HeroSection";

function page() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      
      <HeroSection />
      <TrendingNow />
    </div>
  );
}

export default page;