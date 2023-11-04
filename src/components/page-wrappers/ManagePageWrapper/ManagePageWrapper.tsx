"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import DoughnutChart from "@/components/shared/Charts/Charts";
import { PieChart } from "@/components/shared/Charts/Charts";

type Props = {};

const ManagePageWrapper = ({}: Props) => {
  return (
    <>
      <MaxWidthProvider>
        <div className="">
          <div className="bg-white dark:bg-[#191919] h-[20vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                Manage
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 mt-2">
                Get staitistical information into how your
                <br /> blog is being percived by your users.
              </p>
              {/* <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Stats | SEO improvement | Keywords | User Engagement | Starred |
                Following
              </p> */}
            </div>
          </div>

          <div className="bg-white dark:bg-[#191919] w-full p-4 border rounded-lg md:mb-[20vh] ">
            <h2 className="font-medium text-2xl">Statistics </h2>

            <div className="flex ">
              <div className="grid grid-cols-2 p-4 w-1/2 border-r ">
                <DoughnutChart />
                <div className="w-full h-full"></div>
              </div>
              <div className="grid grid-cols-2 p-4 w-1/2 h-full">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default ManagePageWrapper;
