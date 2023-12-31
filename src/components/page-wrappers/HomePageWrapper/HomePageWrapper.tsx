"use client";
import React from "react";
import pageData from "@/data/index.json";
import Genres from "@/app/home/Genres";
import Collaborative from "@/app/home/Collaborative";
import Review from "@/app/home/Reviews";
import Generations from "@/app/home/Generations";
import Subscribe from "@/app/home/Subscribe";
import Banner from "@/components/shared/Banner/Banner";
import PageLayout from "@/layouts/PageLayout/PageLayout";

export default function Home({}: {}) {
  const { blogs, reviews } = pageData;
  return (
    <>
      <PageLayout>
        <div className=" md:container mx-auto px-8 xs:px-0 font-raleway">
          <Banner
            heading={{
              line1: "Articles, Blogs,",
              line2: "Newsletters & Podcasts.",
            }}
            text="Explore our vibrant mix of articles, blogs, newsletters, and podcasts tailored for your curious mind. Stay in the loop with our trendy, informative content, just for you."
            data={blogs}
          />

          <Generations />
        </div>

        <Genres />

        <Collaborative />

        <div className="md:container mx-auto px-8 xs:px-0 font-raleway ">
          <Review reviews={reviews} />

          <Subscribe />
        </div>
      </PageLayout>
    </>
  );
}
