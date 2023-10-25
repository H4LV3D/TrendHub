"use client";
import React from "react";
import pageData from "@/data/index.json";
import Banner from "@/components/shared/Banner/Banner";
import PageLayout from "@/layouts/PageLayout/PageLayout";

type Props = {};

const About = ({}: Props) => {
  const { blogs } = pageData;

  return (
    <>
      <PageLayout>
        <div className="md:container mx-auto px-6 xs:px-0">
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
        </div>
      </PageLayout>
    </>
  );
};

export default About;
