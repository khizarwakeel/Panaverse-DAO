import Button from "../shared/button";
import Wrapper from "../shared/wrapper";
import { trackData } from "../utils/data";
import Image from "next/image";

interface QuartersDetailProps {
  category: string;
}

const QuartersDetail = ({ params }: { params: QuartersDetailProps }) => {
  const filteredCategory = trackData.find(
    (item) => params.category === item.slug
  );

  if (!filteredCategory) {
    return <div>Category not found</div>;
  }

  return (
    <section
      style={{
        backgroundImage: "url(/assets/lines-light.webp)",
        backgroundSize: "cover",
        backgroundColor: "#1f2937",
      }}
    >
      <Wrapper>
        <div className="grid grid-cols-2 gap-20 py-20">
          <div className="flex flex-col justify-center">
            <h4 className="text-[#05c19c] text-xl pb-3 font-bold">
              {filteredCategory.track}
            </h4>
            <h1 className="text-5xl text-white font-bold">
              {filteredCategory.trackHead}
            </h1>
            <p className="py-8 text-lg text-gray-300">
              {filteredCategory.trackDisc}
            </p>
            <div>
              <Button content="Enroll Now"></Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/core-track-tech.webp"
              alt="Core-Track"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default QuartersDetail;