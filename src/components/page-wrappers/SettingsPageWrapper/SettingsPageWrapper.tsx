"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import Image from "next/image";
import Personal from "./personal/Personal";

type Props = {};

const Settings = [
  {
    id: 1,
    title: "Personal Details",
    description:
      "Update your personal details, such as name and email address to be used across the platform.",
  },
  {
    id: 2,
    title: "Personalize",
    description:
      "customise your profile with a memoji and a custom qr code linked to your profile",
  },
  {
    id: 3,
    title: "Customize Theme",
    description:
      "Adjust the theme to your liking by changing the mode to your preferred choice.",
  },
  {
    id: 4,
    title: "Change Password",
    description: " Update your password to keep your account secure.",
  },
  {
    id: 5,
    title: "Notifications",
    description:
      "Toggle notifications on or off for your account, and adjust the frequency of emails you receive.",
  },
  {
    id: 6,
    title: "Collaborators",
    description:
      "Manage access for collaborators to your account, and what they can do.",
  },
  {
    id: 7,
    title: "Request Access",
    description:
      "Request access to another account, or to a team you are not a member of, to collaborate.",
  },
  {
    id: 8,
    title: "Delete Account",
    description:
      "Delete your account and all associated data. This action cannot be undone.",
  },
];

// personalize is about setting a prefered color, memoji and setting a custom qr code linked to your profile
// connect to apple books so i can sync reading time

const SettingsPageWrapper = ({}: Props) => {
  const [active, setActive] = useState(1);
  const currentSetting = Settings.find((setting) => setting.id === active);

  const [name, setName] = useState("John Doe");
  return (
    <>
      <MaxWidthProvider>
        <div className="px-8 sm:px-0">
          <div className="bg-white dark:bg-[#191919] h-[14vh] w-full flex items-center">
            <div>
              <h1 className="text-2xl text-black dark:text-neutral-200 font-raleway font-medium">
                Settings
              </h1>
              <p className="text-sm font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Adjust your settings to your liking.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/4 flex justify-center items-center">
              <Image
                src={`/assets/Bust/peep-${Math.floor(
                  Math.random() * 104
                ).toString()}.svg`}
                alt="avatar"
                width={180}
                height={180}
              />
            </div>
            <div className="w-3/4 flex flex-col-reverse gap-y-4 xl:gap-y-0 xl:flex-row xl:items-center">
              <div className="w-1/2 xl:border-r dark:border-neutral-800">
                <h1 className="text-xl font-[500] dark:text-neutral-300 capitalize">
                  {name}
                </h1>
                {/* <p className="text-sm text-[#696969] ">johndoe@gmail.com</p> */}
                <p className="about mt-0 text-[0.875rem] text-[#696969] dark:text-neutral-400 ">
                  Technical Writer, Content Creator, and Software Developer.
                </p>
                <p className="about mt-1 text-[0.875rem] text-[#696969] dark:text-neutral-500 ">
                  I write about technology, software development, and personal
                  development. I also write about my journey as a software
                  developer.
                </p>
              </div>

              <div className="w-1/2">
                <div className="py-6 grid grid-cols-3 pr-16 xl:pr-0">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-sans text-center font-[500] dark:text-neutral-300 ">
                      23
                    </div>
                    <div className="text-base text-[#696969] dark:text-neutral-400 ">
                      Publications
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-sans font-[500] dark:text-neutral-300 ">
                      1200
                    </div>
                    <div className="text-base text-[#696969] dark:text-neutral-400 ">
                      Followers
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-sans font-[500] dark:text-neutral-300 ">
                      1028
                    </div>
                    <div className="text-base text-[#696969] dark:text-neutral-400 ">
                      Following
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#191919] w-full md:h-[70vh] flex md:border-t dark:border-neutral-800 md:mb-[10vh] ">
            <div className="flex flex-col w-full md:w-1/4 md:pr-6 md:border-r dark:border-neutral-800 sm:pt-6 ">
              {Settings.map((setting) => (
                <button
                  className={`text-start text-black dark:text-neutral-400 w-full p-4 flex items-center justify-between ${
                    active === setting.id
                      ? " text-black font-[500] rounded-lg bg-[#f7f7f7] dark:bg-neutral-800 dark:text-neutral-200 "
                      : ""
                  }`}
                  onClick={() => setActive(setting.id)}
                  key={setting.title}
                >
                  {setting.title}
                  {active === setting.id && (
                    <div className="md:hidden">
                      <i
                        className="fas fa-chevron-down fa-sm fa-fw"
                        aria-hidden="true"
                      ></i>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="hidden md:block md:w-3/4 p-6 md:p-8 lg:p-10 h-full overflow-y-auto ">
              <div className="">
                <h2 className="text-xl mb-1 dark:text-neutral-300 ">
                  {currentSetting?.title}
                </h2>
                <p className=" text-gray-800 dark:text-neutral-400 text-sm">
                  {currentSetting?.description}
                </p>
                <hr className="my-2 dark:border-neutral-800" />
              </div>
              <Personal />
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default SettingsPageWrapper;
