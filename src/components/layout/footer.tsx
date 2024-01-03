import Image from "next/image";
import Wrapper from "../shared/wrapper";
import { FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const programsData = [
    { courseName: "Web 3.0 and Metaverse Developer", href: "/courses/wmd" },
    { courseName: "Artificial Intelligence", href: "/courses/ai" },
    { courseName: "Cloud-Native Computing", href: "/courses/cnc" },
    { courseName: "Ambient Computing and IoT", href: "/courses/iot" },
    { courseName: "Genomics and Bioinformatics", href: "/courses/geo" },
    {
      courseName: "Network Programmability and Automation",
      href: "/courses/network",
    },
  ];
  return (
    <footer className="border-t lg:py-10 py-6">
      <Wrapper>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <Image
              src={"/assets/logo.png"}
              width={500}
              height={500}
              alt="Panaverse Dao"
              className="w-40 mx-auto md:mx-0"
            />
            <p className="py-7 text-gray-500 md:text-lg text-sm text-center md:text-left">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
            <div className="flex gap-7 md:justify-normal justify-center">
              <Link
                href={"https://web.facebook.com/groups/panaverse?_rdc=1&_rdr"}
                target="_blank"
              >
                <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                  <FaFacebookF />
                </div>
              </Link>
              <Link
                target="_blank"
                href={"https://www.youtube.com/@panaverse/streams"}
              >
                <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                  <FaYoutube />
                </div>
              </Link>
              <Link target="_blank" href={"https://github.com/panaverse"}>
                <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                  <FaGithub />
                </div>
              </Link>
            </div>
          </div>
          <div className="md:col-span-3 md:text-left text-center">
            <h4 className="font-bold text-xl mb-3">Programs</h4>
            {programsData.map((item, index) => {
              return (
                <div key={index}>
                  <Link href={item.href}>
                    <p className="py-2 text-gray-400 md:text-lg text-sm">
                      {item.courseName}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-[40%] mx-auto border-t mt-7 pt-5 font-medium text-xs md:text-base">
          <p className="text-center py-2">
            Copyright &copy; All Rights Reserved
          </p>
          <p className="text-center">
            Made by <span className="text-[#00c2d0]">Khizar Wakeel</span>{" "}
            (Software Developer)
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;