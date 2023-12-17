"use client";
import React, { useState, useEffect } from "react";
import TetiaryButton from "@/components/shared/buttons/Tetiary";
import { motion } from "framer-motion";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useAppSelector } from "@/hooks/useAppSelector";
import BrandLogo from "@/components/shared/BrandLogo/BrandLogo";
import { ResolvingMetadata, Metadata } from "next";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateAvatarId } from "@/store/slices/user/UserSlice";

type Props = {
  children: React.ReactNode;
  form: string;
};

export async function generateMetadata(
  { form }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  return {
    generator: `"Gen-Z Tales | Trend Hub | ${form} `,
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
      title: `Gen-Z Tales | ${form}`,
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
      title: `Gen-Z Tales | ${form}`,
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

function AuthLayout({ children, form }: Props) {
  const step = useAppSelector((state) => state.passwordRecoveryStep.step);
  const authStep = useAppSelector((state) => state.authStep.step);
  const avatarId = useAppSelector((state) => state.user.avatarId);

  const dispatch = useAppDispatch();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center min-h-screen dark:bg-[#191919]`}
    >
      <motion.div
        initial={{ x: 100, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        className="w-full h-screen bg-white dark:bg-neutral-800 hidden md:block"
      >
        <div className="mx-8 min-h-screen overflow-hidden">
          {(form !== "signup" && step !== 2) ||
          (form === "signup" && authStep === 1) ? (
            <>
              <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="mb-3">
                  <BrandLogo />
                </div>
                <div className="w-[275px] h-[330px] border dark:border-neutral-700 rounded-lg hover:shadow-md ">
                  {avatarId === null ? (
                    <div className="w-full h-[330px] flex items-center justify-center">
                      <ButtonLoader color="#000" />
                    </div>
                  ) : (
                    <img
                      src={`/assets/Bust/peep-${avatarId}.svg`}
                      className="mx-auto"
                      alt="A vector illustration of a boy holding a laptop open before him"
                    />
                  )}
                </div>
                <p className="w-1/2 mx-auto mt-6 text-center text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-neutral-400 font-raleway">
                  {form === "login"
                    ? avatarId === null
                      ? "Enter your email to see your custom illustration"
                      : "Welcome back, Amazing stories, news, talks and information today."
                    : "Reset your custom illustration by selecting a different illustration."}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="px-10 xl:px-4">
                <p className="w-full  xl:w-1/2 mx-auto mt-8 text-center text-sm sm:text-base md:text-xl font-normal text-gray-700 dark:text-neutral-400 font-raleway">
                  {form === "signup"
                    ? "Pick a custom illustration for your profile."
                    : "Reset your custom illustration by selecting a different illustration."}
                </p>
              </div>
              <div className="relative mx-auto overflow-y-auto marquee-height">
                <div className="grid grid-cols-4 lg:grid-cols-5 overflow-y-auto gap-x-3 space-y-3 p-6 ">
                  {[...Array(100)].map((_, index) => (
                    <button
                      key={index + 1}
                      className={`mb-2 ${
                        avatarId === index + 1 ? "border-black" : ""
                      } border focus:border-black hover:border-neutral-700 rounded-xl  hover:shadow-xl hover:shadow-neutral-100 dark:border-neutral-700 `}
                      onClick={() => dispatch(updateAvatarId(index + 1))}
                    >
                      <motion.img
                        src={`/assets/Bust/peep-${index + 1}.svg`}
                        className="mx-auto "
                        style={{
                          width: "85px",
                        }}
                        alt="A vector illustration of a boy holding a laptop open before him"
                        initial={{ x: -100, opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0.8 }}
                        transition={{ duration: 1 }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-screen overflow-hidden sm:min-h-screen grid grid-cols-1 items-center md:flex justify-center bg-[#F7F7F7] dark:bg-[#191919] `}
      >
        <motion.div
          initial={{ x: -100, opacity: 0.3 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="md:mx-auto md:min-w-[380px] md:min-h-[30rem] sm:border dark:border-neutral-800 rounded-xl sm:p-12 lg:p-10 mx-12 xl:p-12 sm:shadow-md ">
            <div className="mb-1">
              <TetiaryButton text="Back" link="/" small={true} />
            </div>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AuthLayout;
