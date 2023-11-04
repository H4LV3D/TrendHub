"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const DashboardPageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="md:container mx-auto px-6 lg:px-0 font-raleway my-8">
          <div className="bg-white dark:bg-[#191919] h-[55vh] w-full mt-4">
            <h3 className="font-medium text-xl mb-3">Recent Blogs</h3>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {Array(4).fill(
                <div className="flex flex-col border p-5 rounded-md ">
                  <h3 className="font-raleway font-[500] text-lg text-black dark:text-neutral-400 mb-2">
                    Resource
                  </h3>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet conse tetur adipisicing elit.
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
