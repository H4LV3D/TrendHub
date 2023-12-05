import React, { useEffect } from "react";
import { ResolvingMetadata, Metadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  return {
    generator: "Gen-Z Tales | Trend Hub",
    applicationName: "Gen-Z Tales | Trend Hub",
    referrer: "origin-when-cross-origin",
    keywords: ["Gen-Z", "Gen-Z Tales", "Gen-Z Tech", "Gen-Z Technology"],
    title: `Trend Hub | Gen-Z Tales`,
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
    metadataBase: new URL("https://trendingstuffs.vercel.app/"),
    openGraph: {
      title: `Gen-Z Tales | Home`,
      description: `Explore the intersection of culture, creativity, and technology on TrendHub - the central hub for newsletters, podcasts, and blogs.`,
      url: "https://trendingstuffs.vercel.app",
      siteName: "Trend Hub",
      phoneNumbers: ["+234 815 943 3370"],
      type: "article",
      images: [
        {
          url: `https://treningstuffs.vercel.app/assets/images/`,
          width: 800,
          height: 800,
        },
        {
          url: `https://treningstuffs.vercel.app/assets/images/`,
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
      title: `Gen-Z Tales`,
      description:
        "Explore the intersection of culture, creativity, and technology on TrendHub - the central hub for newsletters, podcasts, and blogs.",
      siteId: "1467726470533754880",
      creator: "@Kinkunmz_",
      creatorId: "1467726470533754880",
      images: [`https://treningstuffs.vercel.app/assets/images/`],
    },
    verification: {
      google: "6l2jGxL2QK9ZvqZj2rQ9KgQa2G4R1Xb6YJ3kzWZfz9k",
    },
  };
}

interface Props {
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="backdrop-blur-sm grid place-items-center fixed z-40 top-0 left-0 min-h-screen max-h-screen w-screen overflow-y-scroll bg-black bg-opacity-80 py-4 px-4">
      {children}
    </div>
  );
};

export default ModalLayout;
