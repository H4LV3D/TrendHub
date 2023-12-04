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
    generator: "Gen-Z Tales | Trend Hub",
    applicationName: "Gen-Z Tales | Trend Hub",
    referrer: "origin-when-cross-origin",
    keywords: [
      "Gen-Z",
      "Gen-Z Tales",
      "Gen-Z Tech",
      "Gen-Z Technology",
      ...selectedBlog.tags.map((tag) => tag),
      ...previousKeywords,
    ],
    title: `${selectedBlog.title} | Gen-Z Tales`,
    authors: [{ name: "Toluwalope Akinkunmi", url: "https://toluwalope.tech" }],
    creator: "Toluwalope Akinkunmi",
    publisher: "Toluwalope Akinkunmi",
    formatDetection: {
      email: true,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    metadataBase: new URL("https://trendingstuffs.vercel.app/"),
    openGraph: {
      title: `${selectedBlog.title} | Gen-Z Tales`,
      description: selectedBlog.description,
      url: "https://trendingstuffs.vercel.app",
      siteName: "Trend Hub",
      phoneNumbers: ["+234 815 943 3370"],
      type: "article",
      images: [
        {
          url: `https://treningstuffs.vercel.app/${selectedBlog.image}`,
          width: 800,
          height: 800,
        },
        {
          url: `https://treningstuffs.vercel.app/${selectedBlog.image}`,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
        ...previousImages,
      ],
      locale: "en_US",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/shortcut-icon.png",
      apple: "/apple-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    },
    manifest: "https://trendingstuffs.vercel.app/manifest.json",
    twitter: {
      card: "summary_large_image",
      title: `${selectedBlog.title} | Gen-Z Tales`,
      description: selectedBlog.description,
      siteId: "1467726470533754880",
      creator: "@Kinkunmz_",
      creatorId: "1467726470533754880",
      images: [`https://treningstuffs.vercel.app/${selectedBlog.image}`],
    },
    verification: {
      google: "6l2jGxL2QK9ZvqZj2rQ9KgQa2G4R1Xb6YJ3kzWZfz9k",
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
