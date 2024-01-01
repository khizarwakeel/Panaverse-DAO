import Image from "next/image";
import Wrapper from "../shared/wrapper";
import { FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  const programsData = [
    "Web 3.0 and Metaverse Developer",
    "Artificial Intelligence",
    "Cloud-Native Computing",
    "Ambient Computing and IoT",
    "Genomics and Bioinformatics",
    "Network Programmability and Automation",
  ];
  const routes = [
    "Home",
    "Quarter 1",
    "Quarter 2",
    "Quarter 3",
    "Quarter 4",
    "Quarter 5",
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
              <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                <FaFacebookF />
              </div>
              <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                <FaYoutube />
              </div>
              <div className="bg-[#00c2d0] p-3 rounded-full text-lg md:text-2xl text-white shadow-lg">
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:text-left text-center">
            <h4 className="font-bold text-xl mb-3">Programs</h4>
            {programsData.map((item, index) => {
              return (
                <div key={index}>
                  <p className="py-2 text-gray-400 md:text-lg text-sm">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-3 md:text-left text-center">
            <h4 className="font-bold text-xl mb-3">Pages</h4>
            {routes.map((item, index) => {
              return (
                <div key={index}>
                  <p className="py-2 text-gray-400 md:text-lg text-sm">
                    {item}
                  </p>
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