import Link from "next/link";
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
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 py-20">
          <div className="flex flex-col justify-center lg:order-none order-2">
            <h4 className="text-[#05c19c] text-xl pb-3 font-bold">
              {filteredCategory.track}
            </h4>
            <h1 className="lg:text-5xl text-2xl text-white font-bold">
              {filteredCategory.trackHead}
            </h1>
            <p className="py-8 md:text-lg text-base text-gray-300">
              {filteredCategory.trackDisc}
            </p>
            <div>
              <Link href={"https://portal.piaic.org/signup"}>
                <Button content="Enroll Now"></Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:order-none order-1">
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