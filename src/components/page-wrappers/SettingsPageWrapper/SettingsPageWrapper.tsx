"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

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
    title: "Collaboration",
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

// personalize is about setting a preffered color, memoji and setting a custom qr code linked to your profile
// connect to apple books so i can sync reading time

const SettingsPageWrapper = ({}: Props) => {
  const [active, setActive] = useState(1);
  const currentSetting = Settings.find((setting) => setting.id === active);
  return (
    <>
      <MaxWidthProvider>
        <div className="px-6 sm:px-0">
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

          <div className="bg-white dark:bg-[#191919] w-full md:min-h-[75vh] sm:p-6 flex md:border rounded-xl md:mb-[20vh] ">
            <div className="grid grid-cols-1 w-full md:w-1/3 md:pr-6 md:border-r ">
              {Settings.map((setting) => (
                <button
                  className={`text-start text-black dark:text-neutral-400 w-full p-3 flex items-center justify-between ${
                    active === setting.id
                      ? "border-b md:border-0 border-black border rounded-lg"
                      : "border-b "
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
            <div className="hidden md:w-2/3 p-6 h-full ">
              <div className="">
                <h2 className="font-medium text-2xl mb-1">
                  {currentSetting?.title}
                </h2>
                <p className="font-normal text-gray-800 dark:text-neutral-400 text-base">
                  {currentSetting?.description}
                </p>
                <hr className="my-2" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default SettingsPageWrapper;
