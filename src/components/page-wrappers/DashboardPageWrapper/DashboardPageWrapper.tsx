"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const DashboardPageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="bg-white dark:bg-[#191919] md:container mx-auto px-6 lg:px-0 font-raleway my-8">
          <div className="bg-white dark:bg-[#191919] h-[18vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                Dashboard
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Read, Schedule and Outline your blog article here.
              </p>
            </div>
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
