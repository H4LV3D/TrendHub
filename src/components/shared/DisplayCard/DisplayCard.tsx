"use client";
import React, { useState, useEffect } from "react";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";

type Article = {
  p: string;
};
type Reactions = {
  good: number;
  bad: number;
};

type Blog = {
  title: string;
  episode: string;
  description: string;
  article: Article[];
  author?: string;
  link: string;
  image: string;
  readTime: string;
  date: string;
  reactions?: Reactions | undefined;
};

type Props = {
  display: Blog;
  arrangement: string;
};

const DisplayCard = ({ display, arrangement }: Props) => {
  const { heartFilled, heartOutlined, thumbsDownFilled, thumbsDownOutlined } =
    icons.icons;

  const [filled, setFilled] = useState(false);
  const [bad, setBad] = useState(false);
  const dispatch = useAppDispatch();

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      dispatch(setArrangement("cards"));
    }
  };

  // Listen for window resize when sidebar is open
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup - remove event listener when sidebar is closed
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
            } bg-neutral-100 dark:bg-neutral-800/50 `}
          ></div>
          <div
            className={` ${
              arrangement === "single"
                ? "w-[70%] lg:w-[75%] xl:w-[80%] rounded-r-xl h-[16rem]"
                : arrangement === "double"
                ? "md:w-[100%] xl:w-[65%] rounded-r-xl min-h-[16rem]"
                : "w-full rounded-b-xl min-h-[14rem]"
            }   p-6 dark:text-neutral-400 `}
          >
            <div className="mb-2 flex justify-between ">
              <p className="text-sm md:text-base">Toluwalope Akinkunmi</p>
              <p className="text-sm">{display.readTime}</p>
            </div>
            <h1
              className={` ${
                arrangement !== "single"
                  ? "text-xl md:text-2xl mb-2"
                  : "text-xl md:text-3xl mb-2 md:mb-4"
              } font-[500] text-[#000] dark:text-neutral-200 line-clamp-2`}
            >
              {display.title}
            </h1>
            <p className="mb-1 sm:mb-2 line-clamp-3 !text-justify text-sm md:text-base ">
              {display.description}
            </p>
            <div className="mt-3">
              <p className="mb-0 sm:mb-2 line-clamp-3 text-sm md:text-base">
                Author :{" "}
                <span className="font-[500]">Toluwalope Akinkunmi</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              {/* {display.reactions && "good" in display.reactions && (
                <div className="reactions flex items-center space-x-1">
                  <div className="flex items-center space-x-0">
                    {filled ? (
                      <Icons
                        icon={heartFilled}
                        action={() => setFilled(false)}
                        small={true}
                      />
                    ) : (
                      <Icons
                        icon={heartOutlined}
                        action={() => setFilled(true)}
                        small={true}
                      />
                    )}

                    <p className="number ">{display?.reactions?.good}</p>
                  </div>
                  <div className="flex items-center space-x-0">
                    {bad ? (
                      <Icons
                        icon={thumbsDownFilled}
                        action={() => setBad(false)}
                        small={true}
                      />
                    ) : (
                      <Icons
                        icon={thumbsDownOutlined}
                        action={() => setBad(true)}
                        small={true}
                      />
                    )}
                    <p className="number">{display?.reactions?.bad}</p>
                  </div>
                </div>
              )} */}
              {/* <div className="flex justify-end">
                {display.article.length > 0 ? (
                  <TetiaryButton
                    text="Read more"
                    link={display.link}
                    small={true}
                  />
                ) : (
                  <TetiaryButton
                    text="Download"
                    link={display.link}
                    small={true}
                  />
                )}
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DisplayCard;
