import Wrapper from "@/components/shared/wrapper";
import HeroImage from "public/assets/heroimage.png";
import Image from "next/image";
import Button from "@/components/shared/button";

const HeroSection = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex lg:flex-row flex-col items-center gap-5 lg:gap-20 mt-5">
          <div className="flex-1">
            <h4 className="text-[#00616c] font-bold md:text-xl text-base">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="font-extrabold text-base sm:text-5xl leading-tight mt-2 text-gray-900">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-gray-500 mt-6 md:text-base text-sm">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="text-gray-500 my-8 md:text-base text-sm">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div>
           <Button content="Learn More" />
           </div>
          </div>
          <div>
            <Image src={HeroImage} alt="HeroSection" width={550} height={550} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;