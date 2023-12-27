"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";
import { Blog } from "@/typings/blog";
import { Podcast } from "@/typings/podcast";

type Props = {
  display: Blog | Podcast;
  arrangement: string;
};

const DisplayCard = ({ display, arrangement }: Props) => {
  const dispatch = useAppDispatch();

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      dispatch(setArrangement("cards"));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Link href={display.link}>
        <div
          className={`border dark:border-neutral-700 rounded-xl flex hover:border-neutral-600 ${
            arrangement === "double" ? "" : "w-full items-center"
          } ${arrangement === "cards" ? "flex-col " : ""} `}
        >
          <div
            className={`${
              arrangement === "single"
                ? "w-[30%] lg:w-[25%] xl:w-[20%] rounded-l-xl min-h-[16rem]"
                : arrangement === "double"
                ? "md:hidden xl:block xl:w-[35%] rounded-l-xl min-h-[16rem]"
                : "w-full rounded-t-xl h-[16rem]"
            } bg-transparent dark:bg-neutral-800/50 flex items-center justify-center `}
          >
            <img
              // src={`/assets/Bust/peep-${Math.ceil(100 * Math.random())}.svg`}
              src={`/assets/images/placeholder_image.png`}
              className="object-cover w-full h-full rounded-xl"
              alt="An SVG illustration of a person dressed in different clothings"
            />
          </div>
          <div
            className={` ${
              arrangement === "single"
                ? "w-[70%] lg:w-[75%] xl:w-[80%] rounded-r-xl h-[16rem]"
                : arrangement === "double"
                ? "md:w-[100%] xl:w-[65%] rounded-r-xl min-h-[16rem]"
                : "w-full rounded-b-xl min-h-[14rem]"
            }   py-6 px-4 dark:text-neutral-400 `}
          >
            <div className="mb-2 flex justify-between ">
              <p className="text-sm ">Toluwalope Akinkunmi</p>
            </div>
            <h1
              className={` ${
                arrangement !== "single"
                  ? "text-xl md:text-[1.4rem] mb-2"
                  : "text-xl md:text-[1.4rem] mb-2 md:mb-4"
              } font-[500] text-[#000] dark:text-neutral-200 line-clamp-2`}
            >
              {display.title}
            </h1>
            <p className="mb-1 sm:mb-2 line-clamp-3 !text- text-sm text-neutral-600  ">
              {display.description}
            </p>
            <div className="mt-3 flex items-center space-x-2 text-neutral-500 font-[400] font-sans ">
              <span className="text-sm ">{display.date}</span>
              <span className="text-sm ">.</span>
              <span className="text-sm">{display?.duration}</span>
              <span className="text-sm ">.</span>
              <p className="font-raleway font-normal text-sm text-neutral-600 flex items-center space-x-2">
                <i className="fa-solid fa-hands-clapping fa-md fa-fw"></i>
                <span>2</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCard;
