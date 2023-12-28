import pageData from "@/data/index.json";
import React from "react";

type Props = {};

type TitleAndTeaser = {
  title: string;
  teaser: string;
};

type GenreItem = {
  name: string;
  illustrativeImage: string;
  titlesAndTeasers: TitleAndTeaser[];
};

function Genres({}: Props) {
  const { genres } = pageData;

  const subSections = ({ title, teaser }: TitleAndTeaser) => {
    return (
      <div className="border border-neutral-400 dark:border-neutral-400 rounded-lg p-3 mb-3">
        <h5 className="font-raleway font-medium text-lg pb-1 dark:text-neutral-400">
          {title}
        </h5>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {teaser}
        </p>
      </div>
    );
  };

  const renderSection = (item: GenreItem) => {
    return (
      <div
        key={item.name}
        className={`h-[60vh] md:h-[80vh] w-full flex ${
          item.name === "Romance & Relationships" ? "flex-row-reverse" : ""
        } items-center`}
      >
        <div className="w-full md:w-1/2 bg-[#F7F7F7] dark:bg-neutral-800/75 h-[60vh] md:h-[80vh] flex flex-col justify-center items-center">
          <h4 className="font-oleo text-3xl mb-4 dark:text-neutral-200">
            {item.name}
          </h4>
          <div className="w-4/5 md:w-3/5 mx-auto">
            {item.titlesAndTeasers.map((tt, index) => (
              <div key={index}>{subSections(tt)}</div>
            ))}
          </div>
          <div className="hidden sm:block md:hidden">
            <img
              src={item.illustrativeImage}
              className="xs:w-[220px] sm:w-[45%] md:w-[48%] lg:w-[48%] xl:w-[55%] dark:opacity-80 mx-auto"
              alt="A vector illustration of a boy holding a laptop open before him"
            />
          </div>
        </div>
        <div className="hidden w-1/2 h-[80vh] md:flex justify-center items-center">
          <img
            src={item.illustrativeImage}
            className="xs:w-[220px] sm:w-[45%] md:w-[48%] lg:w-[48%] xl:w-[55%] dark:opacity-80 mx-auto"
            alt="A vector illustration of a boy holding a laptop open before him"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="mb-4 md:container mx-auto flex flex-col justify-center sm:items-center">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl text-black dark:text-neutral-200 font-oleo font-normal sm:text-center">
            Genres and Themes.
          </h1>
          <p className="text-sm md:text-lg sm:text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 my-6 lg:w-[600px]">
            Dive into a world of captivating genres and trending themes.
            Discover your next obsession with our hand-picked selection tailored
            for the young enthusiast.
          </p>
        </div>
        <div className="pt-8 w-full overflow-hidden">
          <div className="relative w-full mx-auto md:w-[900px] lg:w-[1100px] h-[180vh] md:h-[240vh]">
            <div className="absolute top-0 left-0 w-full">
              {genres.map((genre, index) => (
                <div key={index}>{renderSection(genre)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
