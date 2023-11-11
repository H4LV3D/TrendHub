import React from "react";
import SearchBox from "@/components/shared/search/Search";
import { motion } from "framer-motion";

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
        className="bg-white dark:bg-[#191919] h-[85vh] w-full flex flex-col items-center justify-center"
        id="search"
      >
        <div className="flex flex-col sm:justify-center items-start sm:items-center mt-20 lg:w-[900px]">
          {heading.line1 === "Articles, Blogs," && (
            <motion.span
              initial={{ y: -100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0.5 }}
              transition={{ duration: 1 }}
              className="font-raleway text-base sm:text-base my-4 bg-black text-white rounded-full px-6 py-2 "
            >
              Informative
            </motion.span>
          )}
          <motion.h1
            initial={{ x: -100, opacity: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-[5rem] xl:text-8xl text-black dark:text-neutral-200 font-oleo font-normal sm:text-center"
          >
            {heading.line1}
            <br className="xs:hidden md:block" /> {heading.line2}
          </motion.h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
          <motion.p
            initial={{ x: 100, opacity: 0.3 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="text-sm !leading-6 md:!leading-7 sm:text-base md:text-lg sm:text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 md:w-2/3 mb-8"
          >
            {text}
          </motion.p>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <SearchBox blogs={data} />
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
