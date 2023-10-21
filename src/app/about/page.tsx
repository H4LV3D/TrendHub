"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import pageData from "@/data/index.json";
import Footer from "@/components/shared/footer/Footer";
import Banner from "@/components/shared/Banner/Banner";

type Props = {};

const About = ({}: Props) => {
  const { blogs } = pageData;

  return (
    <>
      <div className="bg-white dark:bg-black/90 min-h-screen w-full cursor-black">
        <Navbar />

        <Banner
          heading={{
            line1: "We are the",
            line2: "new Generation!",
          }}
          data={blogs}
          text="Ready to learn more? Dive into a world of playful, exciting, and
                interesting experience of my personal journey in the world of
                Tech."
        />

        <Footer />
      </div>
    </>
  );
};

export default About;
