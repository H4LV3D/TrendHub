"use client";
import React, { useState, useEffect } from "react";
import pageData from "@/data/index.json";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import Banner from "@/components/shared/Banner/Banner";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

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
      <PageLayout>
        <div className="md:container mx-auto font-raleway mb-12">
          <Banner
            heading={{ line1: "The message,", line2: "medium & media." }}
            data={blogs}
            text="leverage diverse mediums, and harness the power of media to forge authentic connections and catalyze cultural conversations."
          />

          <MaxWidthProvider>
            <DisplayNavBar Nav={Nav} />
            <div
              className={`"w-full grid ${
                arrangement === "single"
                  ? "grid-cols-1"
                  : arrangement === "double"
                  ? "grid-cols-2 gap-8"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-6"
              } `}
            >
              {blogs.map((blog, index) => (
                <div key={index} className="mb-6">
                  <DisplayCard display={blog} arrangement={arrangement} />
                </div>
              ))}
            </div>
          </MaxWidthProvider>
        </div>
      </PageLayout>
    </>
  );
};

export default Blogs;
