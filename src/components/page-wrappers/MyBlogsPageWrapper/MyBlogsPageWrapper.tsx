"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const MyBlogsPageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="">
          <div className="bg-white dark:bg-[#191919] h-[20vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                My Blogs
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Read, Schedule and Outline your blog article here.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#191919] w-full p-5 flex border rounded-lg md:mb-[20vh] ">
            <div className="grid grid-cols-1 w-1/3 pr-6 py-6 border-r "></div>
            <div className="w-2/3 p-6 h-full ">
              <h2 className="font-medium text-2xl">Hello, John</h2>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default MyBlogsPageWrapper;
