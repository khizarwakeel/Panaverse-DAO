"use client";
import QuarterBox from "@/components/shared/quarterBox";
import ArrowButton from "../../shared/arrowButtons";
import Wrapper from "../../shared/wrapper";
import { trackData } from "@/components/utils/data";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const selectedItemData = trackData.find((item) => item.slug === selectedItem);

  return (
    <section>
      <Wrapper>
        <div className="max-w-2xl pt-0 md:pt-5">
          <h1 className="font-bold text-xl md:text-5xl">
            {selectedItemData?.track}
          </h1>
          <p className="md:py-8 py-5 text-gray-500 md:text-base text-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col-reverse lg:gap-14 gap-8">
          <div className="rounded-lg lg:basis-7/12 h-full sticky top-[6.6rem] shadow-xl border border-gray-200 py-6 px-4 lg:px-8">
            <h4 className="text-[#00616c] md:text-lg text-base">
              {selectedItemData?.track}
            </h4>
            <h2 className="md:text-3xl text-base font-bold my-4">
              {selectedItemData?.trackHead}
            </h2>
            <p className="mb-6 text-sm md:text-lg text-gray-500 font-light">
              {selectedItemData?.trackDisc}
            </p>
            <Link href={`/courses/${selectedItemData?.slug}`}>
            <ArrowButton content="Learn More" />
            </Link>
            <div className="flex lg:flex-row flex-col gap-5 mt-3">
              {selectedItemData?.quarters.map((item, index) => (
                <QuarterBox
                  key={index}
                  discrip={item.disc}
                  headered={item.headers}
                  quarterNum={item.quarterNo}
                  haveBorder={false}
                  paddingX={true}
                />
              ))}
            </div>
          </div>
          <div className="lg:basis-5/12 h-full flex flex-col gap-6 cursor-pointer">
            {trackData.map((data, index) => (
              <div
                onClick={() => setSelectedItem(data.slug)}
                key={index}
                className={`flex md:flex-row flex-col items-center gap-5 pb-6 ${
                  index !== trackData.length - 1 && "border-b"
                }`}
              >
                <div className="shrink-0 z-20 relative">
                  <div className="relative z-20">
                    <Image
                      src={data.image}
                      width={500}
                      height={500}
                      alt={data.alt}
                      className="h-28 w-48 object-cover rounded-md"
                    />
                  </div>
                  <div
                    className={`${
                      data.slug === selectedItem
                        ? "absolute bg-gradient-to-r from-[#05a2ebd3] to-blue-800 w-48 h-28 md:top-[5px] md:-left-[5px] top-1 right-1 z-0 rounded-md"
                        : ""
                    }`}
                  ></div>
                </div>
                <div>
                  <h4 className="text-primary font-medium md:text-left text-center">
                    {data.track}
                  </h4>
                  <h3 className="font-bold md:text-lg xl:text-lg text-base mt-3 md:text-left text-center">
                    {data.trackHead}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;