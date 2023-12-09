"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import DoughnutChart from "@/components/shared/Charts/Charts";
import { PieChart } from "@/components/shared/Charts/Charts";

type Props = {};

const data = [
  {
    title: "Views",
    value: 100,
  },
  {
    title: "Comments",
    value: 25,
  },
  {
    title: "Likes",
    value: 350,
  },
  {
    title: "Shares",
    value: 60,
  },
];

const stats = [
  {
    title: "Avg Read Time",
    value: 100,
  },
  {
    title: "Avg Completion Time",
    value: 25,
  },
  {
    title: "Avg Time on Page",
    value: 350,
  },
  {
    title: "Avg Scroll Time",
    value: 60,
  },
  {
    title: "Avg Total time",
    value: 80,
  },
];

const engagements = [
  {
    title: "Views",
    value: 100,
  },
  {
    title: "Comments",
    value: 25,
  },
  {
    title: "Likes",
    value: 350,
  },
  {
    title: "Shares",
    value: 60,
  },
  {
    title: "Bookmarks",
    value: 80,
  },
];

const seo = [
  {
    title: "Search Impressions",
    value: 25,
  },
  {
    title: "Search Clicks",
    value: 80,
  },
  {
    title: "Avg CTR",
    value: 350,
  },
  {
    title: "Avg Position",
    value: 60,
  },
];

const ManagePageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="md:mb-[20vh]  ">
          <div className="h-[14vh] w-full flex space-x-6 items-center">
            <div className="w-1/2">
              <h1 className="text-2xl text-black dark:text-neutral-200 font-raleway font-medium">
                Manage
              </h1>
              <p className="text-sm font-raleway font-normal dark:text-neutral-400 text-gray-800 mt-2">
                Get staitistical information about your content.
              </p>
            </div>
            <div className="w-1/2">
              <label
                htmlFor=""
                className="text-sm text-[#696969] dark:text-neutral-400 "
              >
                Select Publication
              </label>
              <div className=" flex items-center justify-between pr-2 border dark:border-neutral-700 rounded-lg hover:border-black focus-within:border-black cursor-pointer w-2/3">
                <select
                  name=""
                  id=""
                  className="w-full p-2.5 rounded-lg outline-none text-[#696969] focus:text-black dark:focus:text-neutral-400 bg-transparent"
                >
                  <option value="">All Publications</option>
                  <option value="">Podcast</option>
                  <option value="">Blogs</option>
                  <option value="">Articles</option>
                </select>
                <i className="fas fa-chevron-down fa-sm fa-fw text-[#696969] focus:text-black"></i>
              </div>
            </div>
          </div>
          {/* <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Stats | SEO improvement | Keywords | User Engagement | Starred |
                Following
              </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((item) => (
              <div
                className={` bg-[#f7f7f7] dark:bg-neutral-800 w-full h-[6.125rem] xxl:min-w-[12.5rem] rounded-[1rem] px-[1.2rem] pt-[1.09rem]`}
                key={item.title}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[#696969] dark:text-neutral-400 text-[1rem] font-[500] ">
                    {item.title}
                  </div>
                </div>
                <div className="mt-[0.2rem] ">
                  <h1 className="text-[2rem] font-sans text-[#252424] dark:text-neutral-300 font-[700] ">
                    {item.value}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#191919] w-full rounded-lg mt-8">
            <div className="flex ">
              <div className="grid grid-cols-2 w-1/2 border-rn dark:border-neutral-700 ">
                <div className="">
                  <h3 className="text-xl font-[500] dark:text-neutral-300">
                    Post Stats
                  </h3>
                  <p className="text-sm mt-1 text-[#696969]">
                    Add or remove stats.
                  </p>
                  <div className="grid grid-cols-1 gap-3 mt-4 pr-6">
                    {stats.map((item) => (
                      <div className="flex items-center justify-between border dark:border-neutral-700 p-3 rounded-lg hover:border-black cursor-pointer group">
                        <div className="text-[#696969] group-hover:border-black text-[0.8rem] font-[500] flex items-center space-x-2 ">
                          <i className="fas fa-plus fa-fw fa-sm "></i>
                          <span>{item.title}</span>
                        </div>
                        <div className="mt-[0.2rem] ">
                          <h1 className="text-[0.9rem] font-sans text-[#696969] group-hover:border-black ">
                            {item.value}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <DoughnutChart />
                </div>
              </div>
              <div className="grid grid-cols-2 w-1/2 pl-4 h-full">
                <div className="">
                  <h3 className="text-xl font-[500] dark:text-neutral-300 ">
                    Engagements
                  </h3>
                  <p className="text-sm mt-1 text-[#696969]">
                    Add stats to chart
                  </p>
                  <div className="grid grid-cols-1 gap-3 mt-4 pr-6">
                    {engagements.map((item) => (
                      <div className="flex items-center justify-between border dark:border-neutral-700 p-3 rounded-lg hover:border-black cursor-pointer group">
                        <div className="text-[#696969] group-hover:border-black text-[0.8rem] font-[500] flex items-center space-x-2 ">
                          <i className="fas fa-plus fa-fw fa-sm "></i>
                          <span>{item.title}</span>
                        </div>
                        <div className="mt-[0.2rem] ">
                          <h1 className="text-[0.9rem] font-sans text-[#696969] group-hover:border-black ">
                            {item.value}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <PieChart />
              </div>
            </div>
          </div>

          <div className="border-t dark:border-neutral-700 py-4 mt-6">
            <h1 className="text-xl font-[500] dark:text-neutral-300 ">
              SEO Improvements
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {seo?.map((item) => (
                <div
                  className={` bg-[#f7f7f7] dark:bg-neutral-800 w-full h-[6.125rem] xxl:min-w-[12.5rem] rounded-[1rem] px-[1.2rem] pt-[1.09rem]`}
                  key={item.title}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[#696969] dark:text-neutral-400 text-[1rem] font-[500] ">
                      {item.title}
                    </div>
                  </div>
                  <div className="mt-[0.2rem] ">
                    <h1 className="text-[2rem] font-sans text-[#252424] dark:text-neutral-300 font-[700] ">
                      {item.value}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t dark:border-neutral-700 py-4 mt-8">
            <h1 className="text-xl font-[500] dark:text-neutral-300 ">
              Ai Suggestions
            </h1>

            <div className="py-4">
              <h1 className="text-lg">
                Hello there, you have no suggestions yet.
              </h1>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default ManagePageWrapper;
