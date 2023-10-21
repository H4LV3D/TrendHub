import React from "react";

type Props = {};

function Collaborative({}: Props) {
  return (
    <>
      <div className="relative py-20 bg-[#F7F7F7] w-full overflow-hidden flex flex-col items-center justify-center dark:border-neutral-700">
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center lg:w-[900px]">
            <p className="text-2xl mb-4">Introducing</p>
            <h1 className="text-5xl sm:text-6xl dark:text-neutral-200 font-oleo font-normal text-center text-black">
              Collaborative Writing
            </h1>
            <div className="w-full flex flex-col justify-center items-center mt-4 lg:w-[900px]">
              <p className="text-sm md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3">
                Ready to learn more? Dive into a world of playful, exciting, and
                interesting experience of my personal journey in the world of
                Tech.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="/assets/images/collaborative.jpeg"
            className="h-[80vh] mx-auto"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Collaborative;
