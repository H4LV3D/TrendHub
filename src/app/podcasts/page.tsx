"use client";
import React, { useState } from "react";
import pageData from "@/data/index.json";
import DisplayCard from "@/components/shared/DisplayCard/DisplayCard";
import Banner from "@/components/shared/Banner/Banner";
import DisplayNavBar from "@/components/shared/DisplayNavBar/DisplayNavBar";
import { useAppSelector } from "@/hooks/useAppSelector";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

const Podcast = ({}: Props) => {
  const { podcasts } = pageData;
  const arrangement = useAppSelector((state) => state.arrangement.value);

  const Nav = [
    { text: "For You", link: "#foryou" },
    { text: "Following", link: "#following" },
    { text: "Followers", link: "#following" },
    { text: "Feed", link: "#feed" },
  ];

  return (
    <>
      <PageLayout>
        <div className="md:container mx-auto">
          <Banner
            heading={{
              line1: "The Voice,",
              line2: "Vote & Video.",
            }}
            data={podcasts}
            text="Amplify your voice, wield your vote, and harness the power of video to shape narratives and drive impactful societal transformations."
          />

          <MaxWidthProvider className="mb-[5rem] ">
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
              {podcasts.map((podcast, index) => (
                <div key={index} className="mb-6">
                  <DisplayCard display={podcast} arrangement={arrangement} />
                </div>
              ))}
            </div>
          </MaxWidthProvider>
        </div>
      </PageLayout>
    </>
  );
};

export default Podcast;
