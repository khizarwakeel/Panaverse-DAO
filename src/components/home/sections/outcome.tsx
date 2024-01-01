import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

const Outcome = () => {
  return (
    <section className="my-20">
      <Wrapper>
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={"/assets/outcome-poster.webp"}
              alt="Outcome"
              width={550}
              height={550}
            />
          </div>
          <div>
            <h1>Data</h1>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;