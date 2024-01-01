"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/logo.png";
import Wrapper from "../shared/wrapper";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="bg-gray-50 sticky top-0 bg-opacity-90 backdrop-blur-md z-50">
      <Wrapper>
        <header className="flex justify-between items-center lg:py-5 py-3">
          <div className="w-28">
            <Image src={Logo} alt="Panaverse Dao" />
          </div>
          <ul className="flex items-center md:gap-10 gap-3">
            <li>
              <Link
                href={"/"}
                className={`${pathName === "/" ? "text-[#00636d]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/courses"}
                className={`${pathName === "/courses" ? "text-[#00636d]" : ""}`}
              >
                Courses
              </Link>
            </li>
          </ul>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;