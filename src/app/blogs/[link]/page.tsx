"use client";
import React from "react";
import pageData from "@/data/index.json";
import ViewLayout from "@/layouts/ViewLayout/ViewLayout";
import SuggestedInfo from "@/components/shared/SuggestedInfo/SuggestedInfo";
import Link from "next/link";
import Head from "next/head";
import type { Blog } from "@/typings/blog";

type Props = {
  params: {
    link: number;
    blog: Blog[];
  };
};

const Blog = ({ params }: Props) => {
  const link = params.link;
  const { blogs } = pageData;
  const selectedBlog = blogs[link];

  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  return (
    <>
      <Head>
        <title>{selectedBlog.title} | Gen-Z Tales</title>
        <meta name="description" content="Gen-Z Tales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* SEO TAGS */}
        <meta property="og:title" content={selectedBlog.title} />
        <meta property="og:type" content="article" />

        <meta property="og:url" content="https://genztech.xyz" />
        <meta property="og:image" content={selectedBlog.image} />
        <meta property="og:description" content={selectedBlog.description} />
        <meta property="og:site_name" content="Gen-Z Tales" />
        <meta property="article:published_time" content={selectedBlog.date} />
        <meta property="article:author" content="Toluwalope Akinkunmi" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="Technology" />
        <meta property="article:tag" content="Gen-Z Tales" />
        <meta property="article:tag" content="Gen-Z" />
        <meta property="article:tag" content="Gen-Z Tech" />

        {/* TWITTER TAGS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@genz_tech" />
        <meta name="twitter:creator" content="@toluwalope19" />
        <meta name="twitter:title" content={selectedBlog.title} />
        <meta name="twitter:description" content={selectedBlog.description} />
        <meta name="twitter:image" content={selectedBlog.image} />
        <meta name="twitter:image:alt" content={selectedBlog.title} />

        {/* GOOGLE SEARCH CONSOLE */}
        <meta
          name="google-site-verification"
          content="6l2jGxL2QK9ZvqZj2rQ9KgQa2G4R1Xb6YJ3kzWZfz9k"
        />

        {/* PINTEREST TAG */}
        <meta
          name="p:domain_verify"
          content="f8c2a6b4c3a6e1c4b0d6d7b0b3f7e6b6"
        />

        {/* FACEBOOK TAG */}
        <meta property="fb:app_id" content="10101010101010101" />

        {/* LINKEDIN TAG */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={selectedBlog.title} />
        <meta property="og:description" content={selectedBlog.description} />
        <meta property="og:image" content={selectedBlog.image} />
        <meta property="og:url" content="https://genztech.xyz" />
        <meta property="og:site_name" content="Gen-Z Tales" />
        <meta property="article:published_time" content={selectedBlog.date} />
        <meta property="article:author" content="Toluwalope Akinkunmi" />

        {/* KEY WORDS */}
        <meta
          name="keywords"
          content={`Gen-Z, Gen-Z Tales, Gen-Z Tech, Gen-Z Technology, Gen-Z Podcast, Gen-Z Newsletter, Gen-Z Blog, Gen-Z Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, Gen-Z Tales Podcast, Gen-Z Tales Newsletter, Gen-Z Tales Blog, Gen-Z Tales Article, ${selectedBlog.title}, ${selectedBlog.description}, ${selectedBlog.tags}, ${selectedBlog.date}, ${selectedBlog.duration}, ${selectedBlog.episode}, ${selectedBlog.link}, ${selectedBlog.image} `}
        />
      </Head>
      <ViewLayout>
        <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
          <div className="md:container mx-auto xs:px-0 px-8 ">
            <div className="font-raleway w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto mt-20">
              <div className="mt-20">
                <br />
              </div>
              <div className="flex justify-center xxl:border dark:border-neutral-800 rounded-xl mt-0 mb-4">
                <img
                  src={`/assets/Bust/peep-${Math.floor(
                    Math.random() * 104
                  ).toString()}.svg`}
                  className="w-[250px]"
                  alt="An SVG illustration of a person dressed in different clothings"
                />
              </div>

              <div className="w-full text-black dark:text-neutral-400">
                <h1 className="font-raleway font-semibold text-2xl sm:text-3xl md:text-4xl mt-4">
                  {blogs[link].title}
                </h1>
                <Link
                  href={``}
                  className="font-raleway text-sm sm:text-base mt-2"
                >
                  Toluwalope Akinkunmi
                </Link>

                <div className="mt-4">
                  <hr className="mt-4 mb-4 dark:border-neutral-800" />
                  <div className="flex justify-between pb-2">
                    <div className="flex items-center space-x-4 pb-2">
                      <p className="font-raleway font-normal text-sm text-neutral-600 flex items-center space-x-2">
                        <i className="fa-solid fa-hands-clapping fa-xl fa-fw"></i>
                        <span>2</span>
                      </p>
                      <p className="font-raleway font-normal flex items-center space-x-2 text-sm text-neutral-600">
                        <i className="fas fa-users fa-lg fa-fw"></i>
                        <span>5</span>
                      </p>
                    </div>
                    <p className="font-raleway font-normal text-sm">
                      {blogs[link]?.duration}
                    </p>
                    <p className="font-raleway font-normal text-sm">
                      {blogs[link]?.date}
                    </p>
                  </div>
                  <hr className="mb-3 dark:border-neutral-800" />
                </div>

                {blogs[link]?.article ? (
                  blogs[link].article.map((item, index) => (
                    <p
                      className="font-raleway text-sm md:text-base mt-6 text-justify !leading-8"
                      key={index}
                    >
                      {item.p.split("**").map((text, index) => {
                        if (index % 2 === 1) {
                          return (
                            <span className="font-semibold" key={index}>
                              {text}
                            </span>
                          );
                        } else {
                          return text;
                        }
                      })}
                    </p>
                  ))
                ) : (
                  <p className="font-raleway text-sm md:text-base mt-6 text-justify">
                    Fasten your seatbelt, As this episode is going to be yet
                    another inspiring and vital piece of information. Stay
                    Tuned!
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center">
                  {blogs[link]?.tags.map((tag: any, index: number) => (
                    <button
                      className="py-2 px-4 text-sm md:text-base rounded-full dark:text-neutral-400 bg-[#f7f7f7] dark:bg-neutral-800 mb-2 mr-3"
                      key={index}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="w-full mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => setLiked(!liked)}
                        className="flex items-center justify-center h-12 w-12 rounded-md text-neutral-700 dark:text-neutral-400 cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300"
                      >
                        {/* <i
                            className={`${
                              liked ? "fas" : "far"
                            } fa-heart fa-xl fa-fw`}
                          ></i> */}
                        <i
                          className={`${
                            liked ? "text-black" : "text-neutral-400"
                          } fas fa-hands-clapping fa-xl fa-fw`}
                        ></i>
                      </button>
                      <p
                        className={`${
                          liked ? "text-black" : "text-neutral-400"
                        } text-xl font-sans`}
                      >
                        {liked ? 31 : 30}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <>
                        <button className="flex items-center justify-center h-10 w-10 rounded-md text-black dark:text-neutral-600 cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-black">
                          <i className="fas fa-paper-plane fa-xl fa-fw"></i>
                        </button>
                      </>
                      <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-700 dark:text-neutral-400  cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300"
                      >
                        <i
                          className={`${
                            bookmarked ? "fas" : "far"
                          } fa-bookmark fa-xl fa-fw`}
                        ></i>
                      </button>
                      <button className="flex items-center justify-center h-10 w-10 rounded-md text-neutral-700 dark:text-neutral-400  cursor-pointer hover:bg-[#e7e7e7] dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-300">
                        <i className="fa-solid fa-ellipsis fa-xl fa-fw"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[70vh] bg-[#f7f7f7] dark:bg-neutral-800 w-full mt-10">
            <div className="py-10 md:container w-full sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto px-8 xs:px-0">
              <div className="sm:flex items-center justify-between dark:text-neutral-400">
                <div className="left mb-3 sm:mb-0">
                  <div className="h-20 w-20 flex items-center justify-center rounded-[50%]">
                    <img
                      src={`/assets/Bust/peep-8.svg`}
                      className="w-[75%]"
                      alt="An SVG illustration of a person dressed in different clothings"
                    />
                  </div>
                  <div className="writer mt-3">
                    <h2 className="font-[500] text-2xl ">
                      Toluwalope Akinkunmi
                    </h2>
                    <p className="text-sm mt-1">
                      2.7k Followers | Senior software developer{" "}
                    </p>
                    <p className="text-sm mt-2">
                      Senior software developer at{" "}
                      <span className="font-semibold">Gen-Z Tales</span>
                    </p>
                  </div>
                </div>
                <div className="right flex items-center sm:justify-end space-x-3">
                  <button className="py-2 px-4 text-sm md:text-base rounded-full bg-[#d6d6d6] hover:bg-neutral-600 hover:text-neutral-300 dark:bg-neutral-700">
                    Follow
                  </button>
                  <button className="left flex items-center justify-center h-10 w-10 rounded-[50%] text-black dark:text-neutral-600 hover:bg-neutral-600 hover:text-neutral-300 border dark:border-neutral-800 cursor-pointer bg-[#d6d6d6] dark:hover:bg-neutral-800  dark:hover:text-black">
                    <i className="fas fa-envelope fa-lg fa-fw"></i>
                  </button>
                </div>
              </div>

              <hr className="mt-6 mb-4 dark:border-neutral-700" />

              <div className="md:container sm:w-[450px] md:w-[650px] lg:w-[700px] mx-auto xs:px-0 px-8 mt-4">
                <h3 className="text-lg font-normal dark:text-neutral-400 ">
                  More from this <span className="font-medium">Author</span>.
                </h3>
                <SuggestedInfo split={2} data={blogs} />
              </div>
            </div>
          </div>

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
