"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    generator: "Gen-Z Tales | Trend Hub",
    applicationName: "Gen-Z Tales | Trend Hub",
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
      apple: "/assets/Memoji/male/Memoji-0.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    },
    manifest: "https://trendingstuffs.vercel.app/manifest.json",
  };
}

type Props = {
  children: React.ReactNode;
};

const ViewLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <div className="relative bg-white dark:bg-[#191919] min-h-screen w-full">
          <Navbar nav={false} />
          <main className="">{children}</main>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
};

export default ViewLayout;
