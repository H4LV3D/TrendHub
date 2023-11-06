"use client";
import React from "react";
import pageData from "@/data/index.json";
import Banner from "@/components/shared/Banner/Banner";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import Image from "next/image";

type Props = {};

const About = ({}: Props) => {
  const { blogs } = pageData;

  const angles = [-9, 0, 9];
  const images = [8, 43, 46];

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
            text="We are the vanguards of progress, trailblazing a future where boundless creativity and collective empowerment redefine what's possible."
          />

          <MaxWidthProvider className=" px-6 xs:px-0">
            <hr />
            <section className="min-h-[80vh] grid grid-cols-2 grid-row-auto auto-rows-auto ">
              <div className="w-full flex items-center justify-center">
                <div className="flex -space-x-[5rem] ">
                  {[1, 2, 3].map((item, index) => (
                    <div
                      key={index}
                      className="-rotate-45"
                      style={{
                        transform: `rotate(${angles[index]}deg)`,
                      }}
                    >
                      <Image
                        key={index}
                        src={`/assets/images/peep-${images[index]}.svg`}
                        alt="hero"
                        width={320}
                        height={320}
                        className="scale-90 hover:border border-black hover:scale-95 duration-300 ease-in-out transform cursor-pointer rounded-2xl bg-white drop-shadow-xl hover:z-[99999] "
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="w-2/3 mx-auto">
                  <h2 className="text-5xl font-oleo text-[1.25rem] mb-[1rem] ">
                    Hey there,
                  </h2>
                  <p className="!leading-7 text-justify ">
                    We are the intersection of culture, creativity, and
                    technology, we are a global collective of cultural engineers
                    building the future of brand marketing and communications.
                    We leverage diverse mediums, and harness the power of media
                    to forge authentic connections and catalyze cultural
                    conversations. We are the vanguards of progress,
                    trailblazing a future where boundless creativity and
                    collective empowerment redefine what's possible. We aim to
                    be the most creative company in the world and we're
                    committed to building an inclusive culture where everyone
                    can thrive.
                  </p>
                </div>
              </div>
            </section>
          </MaxWidthProvider>
        </div>
        <div className="py-20 w-full bg-[#f7f7f7] ">
          <MaxWidthProvider className="md:container mx-auto px-6 xs:px-0">
            <div className="grid grid-cols-2 grid-row-auto auto-rows-auto ">
              <div className="w-full border"></div>
              <div className="w-full border">
                <h2 className="text-2xl text-[1.25rem] ">Hello</h2>
              </div>
            </div>
          </MaxWidthProvider>
        </div>
        <div className="min-h-[100vh] w-full md:container mx-auto px-6 xs:px-0">
          <MaxWidthProvider>
            <div className="grid grid-cols-2 grid-row-auto auto-rows-auto "></div>
          </MaxWidthProvider>
        </div>
      </PageLayout>
    </>
  );
};

export default About;
