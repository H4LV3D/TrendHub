"use client";
import React from "react";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import MultiStepCreatePostForm from "../../forms/MultiStepCreatePostForm/MultiStepCreatePostForm";
import { useAppSelector } from "@/hooks/useAppSelector";

type Props = {};

const EditorPageWrapper = () => {
  const authStep = useAppSelector((state) => state.authStep.step);
  const [activeTab, setActiveTab] = React.useState("Transactions");
  const Nav = [
    { text: "New", link: "#editor" },
    { text: "Drafts", link: "#outline" },
    { text: "Edit", link: "#schedule" },
    { text: "Schedule", link: "#schedule" },
    { text: "Published", link: "#published" },
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
            <DisplayNavBar Nav={Nav} showArrangement={true} />
          </div>

          <div className="mt-5 flex space-x-6">
            <div className="w-4/5">
              {(() => {
                switch (activeTab) {
                  case "Transactions":
                    return (
                      <div className="border shadow-lg rounded-lg p-4">
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
                      </div>
                    );
                  // case "Drafts":
                  //   return <Security />;
                  // case "Edit":
                  //   return <Payment addresses={addresses} cards={cards} />;
                  // case "Schedule":
                  //   return <Farms fetchingFarms={false} />;
                  // case "Published":
                  //   return <TractorList />;
                  default:
                    return (
                      <div className="border shadow-lg rounded-lg p-4">
                        <h1>Not Found</h1>
                      </div>
                    );
                }
              })()}

              <div className="w-1/5 border-l p-3">
                <h4 className="text-xl font-[500]">Steps</h4>
                <ul className="text-base text-neutral-500 mt-4 px-2 space-y-2 ">
                  <li className="hover:text-black hover:underline cursor-pointer ">
                    Outline
                  </li>
                  <li className="hover:text-black hover:underline cursor-pointer ">
                    Draft
                  </li>
                  <li className="hover:text-black hover:underline cursor-pointer ">
                    Edit
                  </li>
                  <li className="hover:text-black hover:underline cursor-pointer ">
                    Schedule
                  </li>
                  <li className="hover:text-black hover:underline cursor-pointer ">
                    Publish
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </>
  );
};

export default EditorPageWrapper;
