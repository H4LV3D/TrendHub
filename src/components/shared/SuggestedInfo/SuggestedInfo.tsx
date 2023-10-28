import React from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import pageData from "@/data/index.json";

type Props = {};

const SuggestedInfo = ({ data }: any) => {
  const { blogs } = pageData;
  data ? data : blogs;
  const arrangement = "cards";
  return (
    <>
      <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-6 mt-10 pb-6">
        <h3 className="text-lg font-normal">
          Suggested <span className="font-medium">For you</span>.
        </h3>
        <hr className="mt-4 mb-4 dark:border-neutral-800" />
        <div className="py-4 md:grid grid-cols-2 gap-x-6">
          {data.splice(0, 4).map((blog: any, index: number) => (
            <div key={index} className="mb-6">
              <DisplayCard display={blog} arrangement={arrangement} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuggestedInfo;
