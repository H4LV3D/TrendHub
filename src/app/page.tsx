import React from "react";
import HomePageWrapper from "@/components/page-wrappers/HomePageWrapper/HomePageWrapper";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Home | InfoHub`,
    description: `Explore the intersection of culture, creativity, and technology on InfoHub - the central hub for newsletters, podcasts, and blogs.`,
    keywords: ["Gen-Z", "Info Hub"],
    metadataBase: new URL("https://trendingstuffs.vercel.app"),
    twitter: {
      card: "summary_large_image",
      title: `Home | InfoHub`,
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
      ],
    },
  };
}

export default function Home({}: {}) {
  return (
    <>
      <HomePageWrapper />
    </>
  );
}
