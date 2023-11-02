"use client";
import React from "react";
import pageData from "@/data/index.json";
import ViewLayout from "@/layouts/ViewLayout/ViewLayout";
import SuggestedInfo from "@/components/shared/SuggestedInfo/SuggestedInfo";

type Blog = {
  title: string;
  episode?: string;
  description?: string;
  readTime: string;
  date: string;
  article: {
    p: string;
  }[];
  link: number;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};

type Props = {
  params: {
    link: number;
    blog: Blog[];
  };
};

const Blog = ({ params }: Props) => {
  const link = params.link;
  const { blogs } = pageData;
  const selectedBlog = blogs[link];

  return (
    <>
      <ViewLayout>
        <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
          <div className="md:container mx-auto xs:px-0 px-6 ">
            <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto mt-20">
              <div className="mt-20">
                <br />
              </div>
              <div className="flex justify-center sm:border dark:border-neutral-800 rounded-xl mt-0 mb-4">
                <img
                  src={`/assets/Bust/peep-${Math.floor(
                    Math.random() * 104
                  ).toString()}.svg`}
                  className="w-[250px]"
                  alt="An SVG illustration of a person dressed in different clothings"
                />
              </div>

              <div className="w-full text-black dark:text-neutral-400">
                <h1 className="font-raleway font-semibold text-2xl sm:text-3xl md:text-4xl mt-4">
                  {blogs[link].title}
                </h1>
                <p className="font-raleway text-sm sm:text-base mt-2">
                  Toluwalope Akinkunmi
                </p>

                <div className="mt-4">
                  <hr className="mt-6 mb-4 dark:border-neutral-800" />
                  <div className="flex justify-between pb-2">
                    <p className="font-raleway font-normal text-sm">
                      <i className="fas fa-user fa-sm fa-fw mr-2"></i>
                      100
                    </p>
                    <p className="font-raleway font-normal text-sm">
                      <i className="fas fa-clock fa-sm fa-fw mr-2"></i>
                      {blogs[link]?.readTime}
                    </p>
                    <p className="font-raleway font-normal text-sm">
                      <i className="fas fa-calendar-days fa-sm fa-fw mr-2"></i>
                      {blogs[link]?.date}
                    </p>
                  </div>
                  <hr className="mb-3 mt-1 dark:border-neutral-800" />
                </div>

                {blogs[link]?.article ? (
                  blogs[link].article.map((item, index) => (
                    <p
                      className="font-raleway text-sm md:text-base mt-6 text-justify !leading-8"
                      key={index}
                    >
                      {item.p.split("**").map((text, index) => {
                        if (index % 2 === 1) {
                          return (
                            <span className="font-semibold" key={index}>
                              {text}
                            </span>
                          );
                        } else {
                          return text;
                        }
                      })}
                    </p>
                  ))
                ) : (
                  <p className="font-raleway text-sm md:text-base mt-6 text-justify">
                    Fasten your seatbelt, As this episode is going to be yet
                    another inspiring and vital piece of information. Stay
                    Tuned!
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center">
                  {blogs[link]?.tags.map((tag: any, index: number) => (
                    <button
                      className="py-2 px-4 text-sm md:text-base rounded-full dark:text-neutral-400 bg-[#f7f7f7] dark:bg-neutral-800 mb-2 mr-3"
                      key={index}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="w-full mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <>
                        <button className="left flex items-center justify-center h-12 w-12 rounded-lg text-black dark:text-neutral-600 border border-black dark:border-neutral-800 cursor-pointer hover:bg-black dark:hover:bg-neutral-800 hover:text-white dark:hover:text-black">
                          <i className="fas fa-chevron-left fa-xl fa-fw"></i>
                        </button>
                      </>
                      <>
                        <button className="left flex items-center justify-center h-12 w-12 rounded-lg text-black dark:text-neutral-600 border border-black dark:border-neutral-800 cursor-pointer hover:bg-black dark:hover:bg-neutral-800 hover:text-white dark:hover:text-black">
                          <i className="fas fa-chevron-right fa-xl fa-fw"></i>
                        </button>
                      </>
                    </div>
                    <div className="flex items-center space-x-6">
                      <button className="left flex items-center justify-center h-12 w-12 rounded-lg text-black dark:text-neutral-400 border border-black dark:border-neutral-800 cursor-pointer hover:bg-black dark:hover:bg-neutral-800 hover:text-white dark:hover:text-neutral-300">
                        <i className="fas fa-envelope fa-xl fa-fw"></i>
                      </button>
                      <button className="left flex items-center justify-center h-12 w-12 rounded-lg text-black dark:text-neutral-400 border border-black dark:border-neutral-800 cursor-pointer hover:bg-black dark:hover:bg-neutral-800 hover:text-white dark:hover:text-neutral-300">
                        <i className="fas fa-envelope fa-xl fa-fw"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[70vh] bg-[#f7f7f7] dark:bg-neutral-800 w-full mt-10">
            <div className="py-10 md:container w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto px-6 xs:px-0">
              <div className="sm:flex items-center justify-between dark:text-neutral-400">
                <div className="left mb-3 sm:mb-0">
                  <div className="h-20 w-20 flex items-center justify-center rounded-[50%]">
                    <img
                      src={`/assets/Bust/peep-8.svg`}
                      className="w-[75%]"
                      alt="An SVG illustration of a person dressed in different clothings"
                    />
                  </div>
                  <div className="writer mt-3">
                    <h2 className="font-[500] text-2xl ">
                      Toluwalope Akinkunmi
                    </h2>
                    <p className="text-sm mt-1">
                      2.7k Followers | Senior software developer{" "}
                    </p>
                    <p className="text-sm mt-2">
                      Senior software developer at{" "}
                      <span className="font-semibold">Gen-Z Tales</span>
                    </p>
                  </div>
                </div>
                <div className="right flex items-center sm:justify-end space-x-5">
                  <button className="py-2 px-4 text-sm md:text-base rounded-full bg-[#d6d6d6] hover:bg-neutral-600 hover:text-neutral-300 dark:bg-neutral-700">
                    Follow
                  </button>
                  <button className="left flex items-center justify-center h-12 w-12 rounded-[50%] text-black dark:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-300 border dark:border-neutral-800 cursor-pointer dark:hover:bg-neutral-800  dark:hover:text-black">
                    <i className="fas fa-chevron-left fa-xl fa-fw"></i>
                  </button>
                </div>
              </div>

              <hr className="mt-6 mb-4 dark:border-neutral-700" />

              <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-6 mt-4">
                <h3 className="text-lg font-normal dark:text-neutral-400 ">
                  More from this <span className="font-medium">Author</span>.
                </h3>
                <SuggestedInfo split={2} data={blogs} />
              </div>
            </div>
          </div>

          <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-6 mt-10 pb-6">
            <h3 className="text-lg font-normal dark:text-neutral-400 ">
              Suggested <span className="font-medium">For you</span>.
            </h3>
            <hr className="mt-4 mb-4 dark:border-neutral-800" />
            <SuggestedInfo data={blogs} />
          </div>
        </div>
      </ViewLayout>
    </>
  );
};

export default Blog;
