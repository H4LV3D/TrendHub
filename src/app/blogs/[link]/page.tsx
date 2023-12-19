import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

import pageData from "@/data/index.json";
import ViewLayout from "@/layouts/ViewLayout/ViewLayout";

import SuggestedInfo from "@/components/shared/SuggestedInfo/SuggestedInfo";
import Header from "./sections/header";
import Info from "./sections/info";
import Buttons from "./sections/buttons";
import Read from "./sections/read";
import Author from "./sections/author";

type Props = {
  params: {
    link: number;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { blogs } = pageData;
  const selectedBlog = await blogs[params.link];
  const previousImages = (await parent).openGraph?.images || [];
  const previousKeywords = (await parent).keywords || [];

  return {
    title: `${selectedBlog.title} | Info Hub`,
    description: selectedBlog.description,
    keywords: [
      "Gen-Z",
      "Info Hub",
      ...selectedBlog.tags.map((tag) => tag),
      ...previousKeywords,
    ],
    openGraph: {
      title: `${selectedBlog.title} | Info Hub`,
      description: selectedBlog.description,
      url: "https://trendingstuffs.vercel.app",
      siteName: "Info Hub",
      type: "article",
      images: [
        {
          url: `https://treningstuffs.vercel.app${selectedBlog.image}`,
          width: 600,
          height: 600,
        },
        {
          url: `https://treningstuffs.vercel.app${selectedBlog.image}`,
          width: 600,
          height: 600,
          alt: "My custom alt",
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${selectedBlog.title} | Info Hub`,
      description: selectedBlog.description,
      creator: "@Kinkunmz_",
      images: [`https://treningstuffs.vercel.app${selectedBlog.image}`],
    },
  };
}

const Blog = ({ params }: Props) => {
  const link = params.link;
  const { blogs } = pageData;
  const selectedBlog = blogs[link];

  return (
    <>
      <ViewLayout>
        <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
          <div className="md:container mx-auto xs:px-0 px-8 ">
            <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto mt-20">
              <Header selectedBlog={selectedBlog} />

              <Info selectedBlog={selectedBlog} />

              <Read selectedBlog={selectedBlog} />

              <Buttons />
            </div>
          </div>

          <Author />

          <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-8 mt-10 pb-6">
            <h3 className="text-lg font-normal dark:text-neutral-400 ">
              Suggested <span className="font-medium">For you</span>.
            </h3>
            <hr className="mt-4 mb-4 dark:border-neutral-800" />
            <SuggestedInfo data={blogs} />
          </div>
        </div>
      </ViewLayout>
    </>
  );
};

export default Blog;
