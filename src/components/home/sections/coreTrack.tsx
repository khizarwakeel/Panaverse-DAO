import Button from "@/components/shared/button";
import Wrapper from "@/components/shared/wrapper";
import { quarter } from "@/components/utils/data";
import QuarterBox from "@/components/shared/quarterBox";
import Link from "next/link";

const CoreTrack = () => {
  const header = "Core Courses \n (Common in All Specializations)";

  return (
    <>
      <section className="md:mt-14 mt-8">
        <Wrapper>
          {/* Content */}
          <div className="max-w-xl">
            <h4 className="text-[#00616c] font-bold md:text-xl text-sm">
              Program of Studies
            </h4>
            <h1 className="font-semibold lg:text-4xl md:text-3xl text-base mt-2 whitespace-pre-line">
              {header}
            </h1>
            <p className="text-gray-500 md:my-7 my-4 md:text-base text-sm">
              Every participant of the program will start by completing the
              following three core courses.
            </p>
            <div>
              <Link href={'https://portal.piaic.org/signup'} target="_blank" >
              <Button content="Enroll Now" />
              </Link>
            </div>
          </div>
          {/* Boxes */}
          <div className="md:my-10 my-7 flex lg:flex-row flex-col items-stretch gap-5">
            {quarter.map((data, index) => (
              <QuarterBox
                headered={data.header}
                quarterNum={data.quarterNo}
                discrip={data.disc}
                key={index}
                haveBorder={true}
              />
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CoreTrack;