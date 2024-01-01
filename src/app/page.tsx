import HeroSection from "@/components/home/sections/heroSection";
import CoreTrack from "@/components/home/sections/coreTrack";
import SpecializedTracks from "@/components/home/sections/specializedTracks";
import Outcome from "@/components/home/sections/outcome";
import Footer from "@/components/layout/footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoreTrack />
      <SpecializedTracks />
      <Outcome />
      <Footer />
    </div>
  );
};

export default Home;