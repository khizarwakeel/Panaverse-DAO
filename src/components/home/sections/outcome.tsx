import Wrapper from "@/components/shared/wrapper";
import Image from "next/image";

const Outcome = () => {
  const outcomeData = [
    "Product Ownership",
    "Freelancing",
    "Global Marketing by Panaverse DAO",
    "Boosting Economy",
  ];
  return (
    <section className="lg:my-20 my-10">
      <Wrapper>
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center">
          <div className="flex md:flex-none justify-center order-1 md:order-none lg:mt-0 mt-5">
            <Image
              src={"/assets/outcome-poster.webp"}
              alt="Outcome"
              width={550}
              height={550}
            />
          </div>
          <div>
            <h1 className="md:text-5xl text-xl font-semibold lg:py-12 py-5 order-2 md:order-none">
              The Outcome for Participants of the Program
            </h1>
            <p className="md:text-lg text-sm leading-relaxed">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan{"'"} s software exports.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-x-10">
              {outcomeData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className=" flex-shrink-0 my-2"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z"
                      fill="url(#paint0_radial_35_416)"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z"
                      fill="white"
                    ></path>
                    <defs>
                      <radialGradient
                        id="paint0_radial_35_416"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)"
                      >
                        <stop offset="0.125" stopColor="#00E1F0"></stop>
                        <stop offset="1" stopColor="#00616C"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <p className="md:text-lg text-base md:py-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;