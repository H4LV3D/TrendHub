"use client";
import React from "react";

type Props = {};

const Buttons = (props: Props) => {
  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);
  return (
    <div>
      <div className="w-full mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 group relative">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center justify-center h-12 w-12 rounded-md text-neutral-700 dark:text-neutral-400 cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300"
            >
              <i
                className={` fas ${
                  liked ? "fa-hands-clapping" : "fa-hands"
                } fa-xl fa-fw text-black`}
              ></i>
            </button>
            <p className={`text-black text-xl font-sans`}>{liked ? 31 : 30}</p>
            <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1 mt-4 px-4 pointer-events-none">
              Like
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="group relative">
              <button className="flex items-center justify-center h-10 w-10 rounded-md text-black dark:text-neutral-600 cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-black">
                <i className="fas fa-paper-plane fa-xl fa-fw"></i>
              </button>
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1 mt-4 px-4 pointer-events-none">
                Share
              </div>
            </div>
            <div className="group relative">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-700 dark:text-neutral-400  cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300"
              >
                <i
                  className={`${
                    bookmarked ? "fas" : "far"
                  } fa-bookmark fa-xl fa-fw`}
                ></i>
              </button>
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1 mt-4 px-4 pointer-events-none">
                Bookmark
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-700 dark:text-neutral-400  cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300">
                <i className="fa-solid fa-ellipsis fa-xl fa-fw"></i>
              </button>
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1 mt-4 px-4 pointer-events-none">
                Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
