"use client";
import React from "react";
import pageData from "@/data/index.json";
import Genres from "./home/Genres";
import Collaborative from "./home/Collaborative";
import Review from "./home/Reviews";
import Generations from "./home/Generations";
import Subscribe from "./home/Subscribe";
import Banner from "@/components/shared/Banner/Banner";
import Head from "next/head";
import PageLayout from "@/layouts/PageLayout/PageLayout";

export default function Home({}: {}) {
  const { blogs, reviews } = pageData;

  return (
    <>
      <Head>
        <title>Trending | Home</title>
        <meta name="description" content="Gen-Z Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

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
