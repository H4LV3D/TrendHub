import React, { use } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

type Blog = {
  title: string;
  episode?: string;
  description?: string;
  readTime: string;
  date: string;
  article: {
    p: string;
  }[];
  link: string | number;
  image: string;
  tags?: string[];
  reactions?: {
    good: number;
    bad: number;
  };
};

type Props = {
  data: Blog[];
  split?: number;
};

const SuggestedInfo = ({ data, split }: Props) => {
  console.log(data);
  const arrangement = "cards";
  const dataCopy = [...data];
  const splitData = split ? split : 4;
  return (
    <>
      <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-6 pb-6">
        <div className="py-4 md:grid grid-cols-2 gap-x-6">
          {dataCopy.splice(0, splitData).map((blog: any, index: number) => (
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
