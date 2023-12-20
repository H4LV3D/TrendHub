// "use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";
import { Metadata } from "next";

type Props = {
  children?: React.ReactNode;
  page?: string;
};

export async function generateMetadata({ page }: Props): Promise<Metadata> {
  return {
    generator: "Info Hub",
    applicationName: "Info Hub",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Toluwalope Akinkunmi", url: "https://toluwalope.tech" }],
    creator: "Toluwalope Akinkunmi",
    publisher: "Toluwalope Akinkunmi",
    formatDetection: {
      email: true,
      address: false,
      telephone: true,
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    metadataBase: new URL("https://trendingstuffs.vercel.app"),
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
      icon: "/assets/Memoji/male/Memoji-0.png",
      shortcut: "/assets/Memoji/male/Memoji-0.png",
      apple: "/apple-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    },
    manifest: "https://trendingstuffs.vercel.app/manifest.json",
    title: `${page} | Info Hub`,
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

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <div className="relative bg-white dark:bg-[#191919] min-h-screen w-full">
          <Navbar nav={true} />
          <main className="">{children}</main>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
};

export default PageLayout;
