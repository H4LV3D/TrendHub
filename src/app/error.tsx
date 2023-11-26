"use client";
import React, { useEffect } from "react";
import PageLayout from "@/layouts/PageLayout/PageLayout";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";
import PrimaryButton from "@/components/shared/buttons/Primary";
import { useRouter } from "next/navigation";

type Props = {};

const Blogs = ({}: Props) => {
  const router = useRouter();

  return (
    <>
      <PageLayout>
        <MaxWidthProvider className="px-8 sm:px-0">
          <div className="bg-white dark:bg-[#191919] h-[85vh] max-w-md mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center mt-20 lg:w-[900px]">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-[5rem] xl:text-8xl text-black dark:text-neutral-200 font-oleo font-normal sm:text-center">
                Ouch!
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-7 lg:w-[900px]">
              <p className="text-sm sm:text-base md:text-lg sm:text-center font-raleway font-normal dark:text-neutral-400 text-gray-800 sm:w-1/2 mb-8">
                The information you are requesting is currently unavailable. try
                reloading the page.
              </p>
            </div>
            <div className="w-3/4 md:w-full ">
              <PrimaryButton
                text="Reload"
                loading={false}
                type="button"
                action={() => {
                  router.refresh();
                }}
              />
            </div>
          </div>
        </MaxWidthProvider>
      </PageLayout>
    </>
  );
};

export default Blogs;
