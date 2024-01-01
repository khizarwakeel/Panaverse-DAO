"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/logo.png";
import Wrapper from "../shared/wrapper";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const quarters = [
  "Web 3.0 and Metaverse Developer",
  "Artificial Intelligence",
  "Cloud-Native Computing",
  "Ambient Computing and IoT",
  "Genomics and Bioinformatics",
  "Network Programmability and Automation",
];

const Header = () => {
  const pathName = usePathname();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
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
              <div
                onMouseEnter={() => setIsPopoverOpen(true)}
                onMouseLeave={() => setIsPopoverOpen(false)}
              >
                <Popover className="relative">
                  <Popover.Button className="inline-flex outline-none items-center gap-x-1">
                    <span>Courses</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    show={isPopoverOpen}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-300"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      onMouseEnter={() => setIsPopoverOpen(true)}
                      onMouseLeave={() => setIsPopoverOpen(false)}
                      className="absolute z-10 mt-3 flex right-0"
                    >
                      <div className="flex-auto w-80 overflow-hidden rounded-sm bg-white text-sm text-gray-500 border">
                        <div className="p-3">
                          {quarters.map((item) => (
                            <div>
                              <p className="py-2">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </div>
            </li>
          </ul>
        </header>
      </Wrapper>
    </div>
  );
};

export default Header;