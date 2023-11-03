"use client";
import React, { useState } from "react";
import Link from "next/link";

type BlogItem = {
  title: string;
  episode: string;
  description: string;
  article: { p: string }[];
  link: string;
  image: string;
  readTime: string;
  date: string;
  reactions?: { good: number; bad: number };
  [key: string]: any;
};

type Props = {
  blogs: BlogItem[];
};

function SearchBox({ blogs }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<BlogItem[]>([]);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchQuery(value);
    filterResults(value);
  };

  const filterResults = (query: any) => {
    const filtered = blogs.filter((item: BlogItem) => {
      for (const key in item) {
        if (typeof item[key] === "string") {
          if (item[key].toLowerCase().includes(query.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    });
    setFilteredResults(filtered);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="group flex items-center justify-center relative w-full">
          <input
            type="text"
            className="py-3.5 px-4 w-full sm:w-[350px] md:w-[400px] rounded-l-lg text-sm sm:text-base border dark:bg-transparent hover:border-neutral-600 dark:border-neutral-800 dark:hover:border-neutral-800 focus:outline-none dark:text-white focus:border-black dark:focus:border-neutral-700 font-raleway placeholder-neutral-400"
            placeholder="Search key phrases, titles, words"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="p-4 bg-black rounded-r-lg text-white dark:text-neutral-400 dark:bg-neutral-800">
            {/* <i className="fas fa-search fa-lg fa-fw"></i> */}
            Search
          </button>
        </div>
        {searchQuery && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-12 mt-4 h-64 w-full sm:w-[430px] md:w-[485px] dark:text-neutral-400 rounded-lg z-50 border-gray-400 hover:border-gray-700 dark:border-neutral-700 dark:hover:border-neutral-300 overflow-y-auto flex flex-col items-center">
            {filteredResults.length ? (
              filteredResults.map((item: any) => (
                <Link
                  href={item.link}
                  key={item.title}
                  onClick={() => setSearchQuery("")}
                >
                  <div className="w-full border border-gray-300 hover:border-black dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-md p-2 mb-2">
                    <p className="text-xs font-normal">{item.episode}</p>
                    <h2 className="font-medium text-base line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="line-clamp-1 text-sm">{item.description}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="w-full border border-gray-300 hover:border-black rounded-md p-2 mb-2 bg-neutral-50">
                <h2 className="font-medium text-base line-clamp-1">
                  No result found
                </h2>
                <p className="line-clamp-1 text-sm">
                  There are no results found for {searchQuery}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBox;
