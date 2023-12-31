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
        <div className="md:container mx-auto px-8 xs:px-0">
          <Banner
            heading={{
              line1: "We are the",
              line2: "new Generation!",
            }}
            data={blogs}
            text="We aim to be the most creative company in the world and we're committed to building an inclusive culture where everyone is welcome."
          />

          <MaxWidthProvider className=" px-8 xs:px-0">
            <hr />
            <section className=" py-16">
              <div className="w-2/3 mx-auto ">
                <div className="flex -space-x-[5rem] ">
                  {[1, 2, 3].map((item, index) => (
                    <div
                      key={index}
                      className="-rotate-45 flex-grow"
                      style={{
                        transform: `rotate(${angles[index]}deg)`,
                      }}
                    >
                      <Image
                        key={index}
                        src={`/assets/images/peep-${images[index]}.svg`}
                        alt="hero"
                        width={275}
                        height={275}
                        className="scale-90 md:hover:border border-black hover:scale-95 duration-300 ease-in-out transform cursor-pointer rounded-2xl md:bg-white md:drop-shadow-xl hover:z-[99999] "
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:mx-auto  mt-[4rem] ">
                <h2 className="text-3xl md:text-5xl text-center font-oleo mb-[1rem] ">
                  Hey there,
                </h2>
                <p className="!leading-7 text-justify  md:text-center text-sm md:text-base ">
                  We are the intersection of culture, creativity, and
                  technology, we are a global collective of cultural engineers
                  building the future of brand marketing and communications. We
                  leverage diverse mediums, and harness the power of media to
                  forge authentic connections and catalyze cultural
                  conversations.
                </p>
              </div>
            </section>
            <hr />
            <section className="">
              <div className=" py-16">
                <div className="w-full flex justify-center items-center">
                  <div className="md:p-6 h-[350px] w-[350px] rounded-2xl flex justify-center items-center ">
                    <Image
                      src={`/assets/images/peep-8.svg`}
                      alt="hero"
                      width={300}
                      height={300}
                      className="scale-75 "
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:mx-auto  mt-[4rem] ">
                  <h2 className="text-3xl md:text-5xl text-center font-oleo mb-[1rem] ">
                    All Collections.
                  </h2>
                  <p className="!leading-7 text-justify  md:text-center text-sm md:text-base ">
                    We are the vanguards of progress, trailblazing a future
                    where boundless creativity and collective empowerment
                    redefine what's possible. We aim to be the most creative
                    company in the world and we're committed to building an
                    inclusive culture where everyone can thrive.
                  </p>
                </div>
              </div>
            </section>
            <hr />
            <section className="min-h-[70vh] w-full md:container mx-auto px-8 pb-[4rem] xs:px-0">
              <div className="w-full flex justify-center items-center pt-[4rem] ">
                <div className="p-6 h-[360px] md:h-[500px] w-[360px] md:w-[500px] rounded-3xl bg-[#f9f9f9] drop-shadow-xl grid grid-cols-4 -rotate-6 ">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7].map(
                    (item, index) => (
                      <Image
                        src={`/assets/Memoji/male/Memoji-${index}.png`}
                        key={index}
                        alt="hero"
                        width={400}
                        height={400}
                        className={` ${
                          index === 0 ||
                          index === 1 ||
                          index === 2 ||
                          index === 3
                            ? ""
                            : "border-t"
                        }  ${
                          index === 0 ||
                          index === 4 ||
                          index === 8 ||
                          index === 12 ||
                          index === 16
                            ? ""
                            : "border-l"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:mx-auto  mt-[4rem] ">
                <h2 className="text-3xl md:text-5xl text-center font-oleo mb-[1rem] ">
                  Peak Creativity!
                </h2>
                <p className="!leading-7 text-justify  md:text-center text-sm md:text-base ">
                  We showcase the best of the best, inspiring creativity from
                  around the globe. We are the vanguards of progress,
                  trailblazing a future where boundless creativity and
                  collective empowerment redefine what's possible.
                </p>
              </div>
            </section>
          </MaxWidthProvider>
        </div>
      </PageLayout>
    </>
  );
};

export default About;
