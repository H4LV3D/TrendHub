"use client";
import React, { useState } from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import MultiStepCreatePostForm from "../../forms/MultiStepCreatePostForm/MultiStepCreatePostForm";
import { useAppSelector } from "@/hooks/useAppSelector";
import Drafts from "./Drafts/Drafts";

type Props = {};

const EditorPageWrapper = () => {
  const authStep = useAppSelector((state) => state.authStep.step);
  const [activeTab, setActiveTab] = useState("New");
  const Nav = [
    { text: "New", link: "#editor" },
    { text: "Drafts", link: "#outline" },
    { text: "Schedule", link: "#schedule" },
    { text: "Published", link: "#published" },
  ];

  const sideNav = [
    { text: "Outline", link: "#outline" },
    { text: "Draft", link: "#draft" },
    { text: "Edit", link: "#edit" },
    { text: "Schedule", link: "#schedule" },
    { text: "Publish", link: "#publish" },
  ];

  return (
    <>
      <MaxWidthProvider>
        <div className="mb-32">
          <div className="bg-white dark:bg-[#191919] h-[20vh] w-full flex items-center">
            <div>
              <h1 className="text-3xl text-black dark:text-neutral-200 font-raleway font-medium">
                Editor
              </h1>
              <p className="text-sm sm:text-base font-raleway font-normal dark:text-neutral-400 text-gray-800 ">
                Read, schedule and outline your blog article here.
              </p>
            </div>
          </div>

          <div className="">
            <DisplayNavBar
              Nav={Nav}
              showArrangement={true}
              setTab={setActiveTab}
            />
          </div>

          <div className="mt-5 flex space-x-6">
            <div className="w-4/5 border-r shadow-sm rounded-lg px-4">
              {(() => {
                switch (activeTab) {
                  case "New":
                    return (
                      <section>
                        <h1 className="text-2xl font-[500]">
                          Content Creation and Editing.
                        </h1>
                        <div className="">
                          <MultiStepCreatePostForm />
                        </div>
                        <div className="mt-10">
                          <h5 className="text-lg font-[500] ">
                            Step {authStep + 1} of 5
                          </h5>
                        </div>
                      </section>
                    );
                  case "Drafts":
                    return (
                      <section>
                        <h1 className="text-2xl font-[500]">Drafts</h1>
                        <div>
                          <Drafts />
                        </div>
                      </section>
                    );
                  case "Schedule":
                    return (
                      <section>
                        <h1 className="text-2xl font-[500]">Schedule</h1>
                        <div>
                          <Drafts />
                        </div>
                      </section>
                    );
                  case "Published":
                    return (
                      <section>
                        <h1 className="text-2xl font-[500]">Published</h1>
                        <div>
                          <Drafts />
                        </div>
                      </section>
                    );
                  default:
                    return (
                      <div className="border shadow-lg rounded-lg p-4">
                        <h1>Not Found</h1>
                      </div>
                    );
                }
              })()}
            </div>
            <div className="w-1/5 p-3">
              <h4 className="text-xl font-[500]">Steps</h4>
              <ul className=" mt-4 px-2 space-y-2 ">
                {sideNav.map((item, index) => (
                  <li
                    className={`"hover:text-black text-base text-neutral-500 hover:underline cursor-pointer ${
                      authStep + 1 === index + 1 && "!text-black font-[600]  "
                    } `}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default EditorPageWrapper;
