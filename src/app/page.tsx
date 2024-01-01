import HeroSection from "@/components/home/sections/heroSection";
import CoreTrack from "@/components/home/sections/coreTrack";
import SpecializedTracks from "@/components/home/sections/specializedTracks";
import Outcome from "@/components/home/sections/outcome";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoreTrack />
      <SpecializedTracks />
      <Outcome />
    </div>
  );
};

export default Home;