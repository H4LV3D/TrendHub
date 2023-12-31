import React from "react";

type Props = {};

const Generations = (props: Props) => {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="mb-4">
          <div className="flex flex-col justify-center items-center lg:w-[900px]">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl text-black dark:text-neutral-200 font-oleo font-normal sm:text-center">
              The message, medium
              <br className="xs:hidden sm:block" /> & media
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
            <p className="text-sm md:text-lg sm:text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3 mb-8">
              The art of modern communication leans on messages, mediums, and
              the ever-evolving media landscape with fresh perspectives and
              engaging discussions for everyone.
            </p>
          </div>
        </div>
        <div className="py-8 overflow-hidden">
          <div className="relative w-[750px] md:w-[900px] lg:w-[1100px] h-[350px]">
            <div className="absolute top-0 left-0 w-[275px * 100] flex space-x-4 animate-marquee">
              {[...Array(100)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[275px] bg-white dark:bg-transparent  h-[330px] border dark:border-neutral-700 rounded-lg hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={`/assets/Bust/peep-${index + 1}.svg`}
                    className="mx-auto"
                    alt="A vector illustration of a boy holding a laptop open before him"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generations;
