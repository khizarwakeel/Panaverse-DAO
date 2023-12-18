import QuarterBox from "@/components/shared/quarterBox";
import ArrowButton from "../../shared/arrowButtons";
import Wrapper from "../../shared/wrapper";
import { trackData } from "@/components/shared/data";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div className="max-w-2xl pt-0 md:pt-5">
          <h1 className="font-bold text-xl md:text-5xl">Specialized Tracks:</h1>
          <p className="md:py-8 py-5 text-gray-500 md:text-base text-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="rounded-lg basis-8/12 h-full shadow-xl border border-gray-200 py-6 px-4 lg:px-8">
            <h4 className="text-[#00616c] md:text-lg text-base">Specialized Track</h4>
            <h2 className="md:text-3xl text-base font-bold my-4">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
            <p className="mb-6 text-sm md:text-lg text-gray-500 font-light">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <ArrowButton content="Learn More" />
            <div className="flex lg:flex-row flex-col gap-5 mt-3">
              <QuarterBox
                discrip="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                headered="Quarter IV"
                quarterNum="4"
                haveBorder={false}
                paddingX={true}
              />
              <QuarterBox
                discrip="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                headered="Quarter V"
                quarterNum="5"
                haveBorder={false}
                paddingX={true}
              />
            </div>
          </div>
          <div className="basis-4/12 h-full lg:px-6 lg:py-8 py-5 cursor-pointer">
            {trackData.map((data, index) => (
              <div
                key={index}
                className={`flex items-center gap-5 pb-7 mb-10 ${
                  index !== trackData.length - 1 && "border-b"
                }`}
              >
                <div>
                  <p>{data.image}</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium">{data.track}</h4>
                  <h3 className="font-bold md:text-xl text-base mt-3">{data.trackDisc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;