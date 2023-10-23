"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import pageData from "@/data/index.json";
import Genres from "./home/Genres";
import Collaborative from "./home/Collaborative";
import Review from "./home/Reviews";
import Generations from "./home/Generations";
import Subscribe from "./home/Subscribe";
import Footer from "@/components/shared/footer/Footer";
import Banner from "@/components/shared/Banner/Banner";
import Head from "next/head";

export default function Home({}: {}) {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("");
  const { blogs, reviews } = pageData;

  return (
    <>
      <Head>
        <title>Trending | Home</title>
        <meta name="description" content="Gen-Z Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {notify && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[450px] z-50 font-raleway">
          <div className="w-full bg-black dark:bg-gray-100 flex items-center space-x-3 p-3 rounded-lg">
            <div className="w-[60px] flex justify-center text-gray-100 dark:text-black">
              <i className="fas fa-gift fa-xl fa-fw"></i>
            </div>
            <div className="font-raleway">
              <h3 className="font-semibold text-lg font-raleway text-white dark:text-black">
                {message}
              </h3>
              <p className="text-sm font-raleway text-gray-100 dark:text-black">
                You have successfully been able to subscribe to my blog,
                newsletter and updates feed for more interesting episodes.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-[#191919] min-h-screen w-full cursor-black">
        <Navbar />
        <div className="md:container mx-auto px-6 lg:px-0 font-raleway ">
          <Banner
            heading={{
              line1: "Articles, Blogs,",
              line2: "Newsletters & Podcasts.",
            }}
            text="Ready to learn more? Dive into a world of playful, exciting, and interesting experience of my personal journey in the world of Tech."
            data={blogs}
          />

          <Generations />
        </div>

        <Genres />

        <Collaborative />

        <div className="md:container mx-auto !px-6 lg:px-0 font-raleway ">
          <Review reviews={reviews} />

          <Subscribe setNotify={setNotify} setMessage={setMessage} />
        </div>
        <Footer />
      </div>
    </>
  );
}
