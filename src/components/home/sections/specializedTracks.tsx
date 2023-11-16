import ArrowButton from "../../shared/arrowButtons";
import Wrapper from "../../shared/wrapper";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h1 className="font-bold text-5xl">Specialized Tracks:</h1>
          <p className="py-8 text-gray-500">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div>
          <div className="rounded-lg shadow-xl border border-gray-200 py-10 px-8">
            <h4 className="text-[#00616c] text-lg">Specialized Track</h4>
            <h2 className="text-3xl font-bold my-4">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
            <p className="mb-6 text-lg text-gray-500">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <ArrowButton content="Learn More" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;