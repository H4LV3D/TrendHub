"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};
const settings = [
  "Personal Details",
  "Personalize",
  "Customize Theme",
  "Change Password",
  "Notifications",
  "Collaboration",
  "Request Access",
  "Delete Account",
];

// personalize is about setting a preffered color, memoji and setting a custom qr code linked to your profile
// connect to apple books so i can sync reading time

const SettingsPageWrapper = ({}: Props) => {
  const [active, setActive] = useState("Personalize");
  return (
    <>
      <MaxWidthProvider>
        <div className="">
          {/* <div className="bg-white dark:bg-[#191919] h-[55vh] w-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-20 lg:w-[900px]">
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-7xl text-black dark:text-neutral-200 font-oleo font-normal  text-center">
                Settings
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
              <p className="text-sm sm:text-base md:text-lg text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-3/4 lg:w-2/3 mb-8">
                Adjust your settings to your liking.
              </p>
            </div>
          </div> */}
          <div className="bg-white dark:bg-[#191919] h-[20vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                Settings
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Adjust your settings to your liking.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#191919] w-full p-5 flex border rounded-lg md:mb-[20vh] ">
            <div className="grid grid-cols-1 w-1/3 pr-6 py-6 border-r ">
              {settings.map((setting) => (
                <button
                  className={`font-raleway font-normal text-lg text-start text-black dark:text-neutral-400 p-3 ${
                    active === setting
                      ? "border border-black rounded-lg"
                      : "border-b"
                  }`}
                  onClick={() => setActive(setting)}
                  key={setting}
                >
                  {setting}
                </button>
              ))}
            </div>
            <div className="w-2/3 p-6 h-full ">
              <h2 className="font-medium text-2xl">{active}</h2>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default SettingsPageWrapper;
