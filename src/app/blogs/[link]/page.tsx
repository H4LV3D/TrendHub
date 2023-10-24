"use client";
import React, { useState } from "react";
import Link from "next/link";
import pageData from "@/data/index.json";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";

type Props = {
  params: {
    slug: string;
    link: number;
  };
};

const Suggested = () => {
  const { blogs } = pageData;
  const arrangement = "cards";
  return (
    <>
      <div className="py-4 md:grid grid-cols-2 gap-x-6">
        {blogs.splice(0, 4).map((blog, index) => (
          <div key={index} className="mb-6">
            <DisplayCard display={blog} arrangement={arrangement} />
          </div>
        ))}
      </div>
    </>
  );
};

const Blog = ({ params }: Props) => {
  const id = 2;
  const link = params.link;
  const { blogs } = pageData;

  return (
    <>
      <PageLayout>
        <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
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
              <p className="font-raleway text-xs sm:text-sm mt-2">
                {blogs[link].episode}
              </p>
              <div className="flex justify-between mt-5">
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
                  another inspiring and vital piece of information. Stay Tuned!
                </p>
              )}

              <hr className="mt-6 mb-4 dark:border-neutral-800" />

              <div className="w-full">
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
                  <div className="">
                    <button className="left flex items-center justify-center h-12 w-12 rounded-lg text-black dark:text-neutral-400 border border-black dark:border-neutral-800 cursor-pointer hover:bg-black dark:hover:bg-neutral-800 hover:text-white dark:hover:text-neutral-300">
                      <i className="fas fa-envelope fa-xl fa-fw"></i>
                    </button>
                  </div>
                </div>
                {/* <div className="text-center sm:flex items-center justify-between mt-4">
                  <div className="flex justify-center sm:justify-start items-center">
                    {blogs.map((project, index) => (
                      <div
                        className={`${
                          blogs.length > 6 ? "h-3 w-3" : "h-2 w-10"
                        } w-10 rounded-md mr-2 mb-2 ${
                          blogs[link].title === blogs[index].title
                            ? "bg-black dark:bg-neutral-500"
                            : "bg-gray-300 dark:bg-neutral-800"
                        }`}
                        key={index}
                      ></div>
                    ))}
                  </div>
                  <p className="font-raleway font-medium text-base md:text-base text-neutral-700 dark:text-neutral-400">
                    Episode{" "}
                    <span className="font-sans">{Number(link) + 1}</span> of{" "}
                    <span className="font-sans">{blogs.length}</span>
                  </p>
                </div> */}
              </div>

              <hr className="mt-6 mb-4 dark:border-neutral-800" />

              <div className="">
                <h3 className="text-lg font-normal">
                  Suggested <span className="font-medium">For you</span>.
                </h3>
                <Suggested />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Blog;
