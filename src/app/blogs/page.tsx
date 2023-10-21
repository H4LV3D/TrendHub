"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/shared/Navbar/Navbar";
import pageData from "@/data/index.json";
import Footer from "@/components/shared/footer/Footer";
import icons from "@/data/icons.json";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import Banner from "@/components/shared/Banner/Banner";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";

type Props = {};

const Blogs = ({}: Props) => {
  const { blogs } = pageData;
  const dispatch = useAppDispatch();
  const arrangement = useAppSelector((state) => state.arrangement.value);

  const Nav = [
    { text: "For You", link: "#foryou" },
    { text: "Following", link: "#following" },
    { text: "Followers", link: "#following" },
    { text: "Feed", link: "#feed" },
  ];

  const handleResize = () => {
    if (window.innerWidth < 768) dispatch(setArrangement("cards"));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-black/90 min-h-screen w-full cursor-black">
        <Header />

        <Banner
          heading={{ line1: "The message,", line2: "medium & media." }}
          data={blogs}
          text="Ready to learn more? Dive into a world of playful, exciting, and
                interesting experience of my personal journey in the world of
                Tech."
        />

        <div className="md:container mx-auto px-6 lg:px-0 font-raleway mb-12">
          <DisplayNavBar Nav={Nav} />
          <div
            className={`"w-full grid ${
              arrangement === "single"
                ? "grid-cols-1"
                : arrangement === "double"
                ? "grid-cols-2 gap-8"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6"
            } `}
          >
            {blogs.map((blog, index) => (
              <div key={index} className="mb-6">
                <DisplayCard display={blog} arrangement={arrangement} />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
