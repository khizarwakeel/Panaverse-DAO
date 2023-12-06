import QuarterBox from "@/components/shared/quarterBox";
import ArrowButton from "../../shared/arrowButtons";
import Wrapper from "../../shared/wrapper";
import { trackData } from "@/components/shared/data";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div className="max-w-2xl">
          <h1 className="font-bold text-5xl">Specialized Tracks:</h1>
          <p className="py-8 text-gray-500">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="flex gap-8">
          <div className="rounded-lg basis-8/12 h-full shadow-xl border border-gray-200 py-6 px-8">
            <h4 className="text-[#00616c] text-lg">Specialized Track</h4>
            <h2 className="text-3xl font-bold my-4">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
            <p className="mb-6 text-lg text-gray-500 font-light">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <ArrowButton content="Learn More" />
            <div className="flex gap-5 mt-3">
              <QuarterBox
                discrip="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
                headered="Quarter IV"
                quarterNum="4"
                haveBorder={false}
              />
              <QuarterBox
                discrip="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                headered="Quarter V"
                quarterNum="5"
                haveBorder={false}
              />
            </div>
          </div>
          <div className="basis-4/12 h-full px-6 py-8 cursor-pointer">
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
                  <h3 className="font-bold text-xl">{data.trackDisc}</h3>
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