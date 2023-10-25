"use client";
import React, { useState } from "react";
import pageData from "@/data/index.json";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";
import Banner from "@/components/shared/Banner/Banner";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import { useAppSelector } from "@/hooks/useAppSelector";
import PageLayout from "@/layouts/PageLayout/PageLayout";

type Props = {};

const Newsletter = ({}: Props) => {
  const { blogs } = pageData;
  const arrangement = useAppSelector((state) => state.arrangement.value);

  const podcastNav = [
    { text: "For You", link: "#foryou" },
    { text: "Following", link: "#following" },
    { text: "Followers", link: "#following" },
    { text: "Feed", link: "#feed" },
  ];

  return (
    <>
      <PageLayout>
        <div className="md:container mx-auto px-6 xs:px-0 font-raleway mb-12">
          <Banner
            heading={{
              line1: "The news,",
              line2: "noise & newness.",
            }}
            data={blogs}
            text="Ready to learn more? Dive into a world of playful, exciting, and
                interesting experience of my personal journey in the world of
                Tech."
          />

          <DisplayNavBar Nav={podcastNav} />

          <div
            className={`"w-full grid ${
              arrangement === "single"
                ? "grid-cols-1"
                : arrangement === "double"
                ? "grid-cols-2 gap-8"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:space-x-6"
            } `}
          >
            {blogs.map((blog, index) => (
              <div key={index} className="mb-6">
                <DisplayCard display={blog} arrangement={arrangement} />
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Newsletter;
