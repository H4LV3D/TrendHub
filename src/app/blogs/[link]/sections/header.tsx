import React from "react";
import type { Blog } from "@/typings/blog";
import Link from "next/link";

type Props = {
  selectedBlog: Blog;
};

const Header = ({ selectedBlog }: Props) => {
  return (
    <>
      <div className="mt-20">
        <br />
      </div>
      <div className="h-[50vh] flex justify-center xxl:border dark:border-neutral-800 rounded-xl mt-0 mb-8">
        <img
          // src={`/assets/Bust/peep-${Math.floor(
          //   Math.random() * 104
          // ).toString()}.svg`}
          src={selectedBlog.image}
          className="object-cover w-full h-full"
          alt="An SVG illustration of a person dressed in different clothings"
        />
      </div>

      <div className="w-full text-black dark:text-neutral-400">
        <h1 className="font-raleway font-semibold text-2xl sm:text-3xl md:text-4xl mt-4">
          {selectedBlog.title}
        </h1>
        <Link href={``} className="font-raleway text-sm sm:text-base mt-2">
          Toluwalope Akinkunmi
        </Link>
      </div>
    </>
  );
};

export default Header;
