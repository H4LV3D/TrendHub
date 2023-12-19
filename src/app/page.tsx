"use client";
import React from "react";
import pageData from "@/data/index.json";
import Genres from "./home/Genres";
import Collaborative from "./home/Collaborative";
import Review from "./home/Reviews";
import Generations from "./home/Generations";
import Subscribe from "./home/Subscribe";
import Banner from "@/components/shared/Banner/Banner";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: `Home | Info Hub`,
    description: `Explore the intersection of culture, creativity, and technology on InfoHub - the central hub for newsletters, podcasts, and blogs.`,
    twitter: {
      card: "summary_large_image",
      title: `InfoHub`,
      description:
        "Explore the intersection of culture, creativity, and technology on TrendHub - the central hub for newsletters, podcasts, and blogs.",
      creator: "@Kinkunmz_",
      images: [
        `https://treningstuffs.vercel.app/assets/images/regenerated.jpg`,
      ],
    },
    openGraph: {
      title: `Home | InfoHub`,
      description: `Explore the intersection of culture, creativity, and technology on TrendHub - the central hub for newsletters, podcasts, and blogs.`,
      url: "https://trendingstuffs.vercel.app",
      siteName: "InfoHub",
      phoneNumbers: ["+234 815 943 3370"],
      type: "article",
      images: [
        {
          url: `https://treningstuffs.vercel.app/assets/images/regenerated.jpg`,
          width: 800,
          height: 800,
        },
        {
          url: `https://treningstuffs.vercel.app/assets/images/regenerated.jpg`,
          width: 600,
          height: 600,
          alt: "My custom alt",
        },
        ...previousImages,
      ],
      locale: "en_US",
    },
  };
}

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
