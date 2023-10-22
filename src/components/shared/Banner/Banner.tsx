import React from "react";
import SearchBox from "@/components/shared/search/Search";

type Props = {
  heading: {
    line1: string;
    line2: string;
  };
  text: string;
  data: any;
};

const Banner = ({ heading, text, data }: Props) => {
  return (
    <>
      <div
        className="bg-white dark:bg-neutral-800 h-[85vh] w-full flex flex-col items-center justify-center"
        id="search"
      >
        <div className="flex flex-col justify-center items-center mt-20 lg:w-[900px]">
          <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl text-black dark:text-neutral-200 font-oleo font-normal  text-center">
            {heading.line1}
            <br className="xs:hidden md:block" /> {heading.line2}
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
          <p className="text-sm sm:text-base md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3 mb-8">
            {text}
          </p>
        </div>
        <SearchBox blogs={data} />
      </div>
    </>
  );
};

export default Banner;
