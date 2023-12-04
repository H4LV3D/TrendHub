import React from "react";
import type { Blog } from "@/typings/blog";

type Props = {
  selectedBlog: Blog;
};

const Read = ({ selectedBlog }: Props) => {
  return (
    <>
      {selectedBlog?.article ? (
        selectedBlog.article.map((item, index) => (
          <p
            className="font-raleway text-sm md:text-base mt-6 text-justify !leading-8"
            key={index}
          >
            {item.p.split("**").map((text, index) => {
              if (index % 2 === 1) {
                return (
                  <span className="font-semibold" key={index}>
                    {text}
                  </span>
                );
              } else {
                return text;
              }
            })}
          </p>
        ))
      ) : (
        <p className="font-raleway text-sm md:text-base mt-6 text-justify">
          Fasten your seatbelt, As this episode is going to be yet another
          inspiring and vital piece of information. Stay Tuned!
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center">
        {selectedBlog.tags &&
          selectedBlog.tags.map((tag: any, index: number) => (
            <button
              className="py-2 px-4 text-sm md:text-base rounded-full dark:text-neutral-400 bg-[#f7f7f7] dark:bg-neutral-800 mb-2 mr-3"
              key={index}
            >
              {tag}
            </button>
          ))}
      </div>
    </>
  );
};

export default Read;
