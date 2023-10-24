import React from "react";

type Props = {};

function Collaborative({}: Props) {
  return (
    <>
      <div className="relative py-20 bg-[#F7F7F7] dark:bg-neutral-800/75 w-full overflow-hidden flex flex-col items-center justify-center dark:border-neutral-700">
        <div className="flex items-center justify-center dark:text-neutral-400">
          <div className="container flex flex-col justify-center sm:items-center lg:w-[900px]">
            <p className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-4">
              Introducing
            </p>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl dark:text-neutral-200 font-oleo font-normal sm:text-center text-black">
              Collaborative Writing,
            </h1>
            <div className="w-full flex flex-col justify-center items-center mt-4 lg:w-[900px]">
              <p className="text-sm md:text-lg sm:text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3">
                Join forces with like-minded individuals, unleash your
                imagination, and craft compelling stories that resonate with the
                vibrant spirit of Gen Z.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/assets/images/collaborative.jpeg"
            className="md:h-[80vh] mx-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Collaborative;
