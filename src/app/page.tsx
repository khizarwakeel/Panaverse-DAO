import HeroSection from "@/components/home/sections/heroSection";
import CoreTrack from "@/components/home/sections/coreTrack";
import SpecializedTracks from "@/components/home/specializedTracks";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoreTrack />
      <SpecializedTracks />
    </div>
  );
};

export default Home;