"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const stats = [
  {
    id: 1,
    title: "Word Count",
    description: "10000",
    icon: "fas fa-file-word",
  },
  {
    id: 2,
    title: "Articles Read",
    description: "500",
    icon: "fas fa-book",
  },
  {
    id: 3,
    title: "Reading Time (mins)",
    description: "400",
    icon: "fas fa-clock",
  },
  {
    id: 4,
    title: "Bookmarks",
    description: "50",
    icon: "fas fa-bookmark",
  },
  {
    id: 4,
    title: "Written Content",
    description: "10",
    icon: "fas fa-pencil-alt",
  },
];

const DashboardPageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="bg-white dark:bg-[#191919] md:container mx-auto px-6 lg:px-0 font-raleway my-8">
          <div className="bg-white dark:bg-[#191919] h-[18vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                Welcome John,
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Here's what you've been up to.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                className=" border dark:border-neutral-800 p-4 rounded-lg cursor-pointer bg-[#f7f7f7] "
                key={stat.id}
              >
                <div className="flex justify-between space-x-4">
                  <div className="">
                    <p className="font-raleway font-[400] text-base text-black dark:text-neutral-400 mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-3xl font-sans font-[600] ">
                      {stat.description}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <i
                      className={`${stat.icon} fa-fw text-2xl text-neutral-400 mb-1`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-8 mt-2">
            <div className="bg-[#f7f7f7] h-[30vh] rounded-2xl"></div>
            <div className="bg-[#f7f7f7] h-[30vh] rounded-2xl"></div>
          </div>
          <div className="w-full mt-10">
            <h3 className="font-medium text-xl mb-3">Continue Reading</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Array(3).fill(
                <div className="flex flex-col border dark:border-neutral-800 p-5 rounded-md ">
                  <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-1">
                    Resource
                  </h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet conse tetur adipi sicing elit.
                    Quibusdam, voluptate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default DashboardPageWrapper;
