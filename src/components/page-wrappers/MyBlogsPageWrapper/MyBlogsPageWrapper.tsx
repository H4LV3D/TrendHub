"use client";
import React from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const MyBlogsPageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="px-6 lg:px-0">
          <div className="bg-white dark:bg-[#191919] py-10 md:h-[20vh] w-full flex flex-col items-start justify-center">
            <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
              Blogs
            </h1>
            <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
              Read, Schedule and Outline.
            </p>
          </div>

          <div className="bg-white dark:bg-[#191919] w-full md:flex rounded-lg md:mb-[20vh] ">
            <div className="w-full md:w-1/2 pr-6 h-full">
              <h2 className="font-medium text-xl mb-2">Bookmarks</h2>
              <hr />
              <div className="border-b p-4">
                <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-1">
                  Resource
                </h3>
                <p className="text-base">
                  Lorem ipsum dolor sit amet conse tetur adipi sicing elit.
                  Quibusdam, voluptate.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 w-full md:w-1/2 md:pl-6 pb-12 md:border-l">
              <h2 className="font-medium text-xl mb-2">Trending</h2>
              <div className="border-y p-4">
                <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-1">
                  Resource
                </h3>
                <p className="text-base">
                  Lorem ipsum dolor sit amet conse tetur adipi sicing elit.
                  Quibusdam, voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default MyBlogsPageWrapper;
