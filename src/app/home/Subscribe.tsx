"use client";
import React from "react";
import SubscribeForm from "@/components/forms/SubscribeForm/SubscribeForm";

type Props = {
  setNotify: (notify: boolean) => void;
  setMessage: (message: string) => void;
};

function Subscribe({ setNotify, setMessage }: Props) {
  return (
    <>
      <div className="dark:bg-[#191919] h-[88vh] w-full flex flex-col sm:items-center justify-center">
        <h4 className="text-4xl md:text-6xl font-oleo font-light dark:text-neutral-400 text-black mb-2">
          Do you want more?
        </h4>
        <p className="text-sm sm:text-base sm:text-center font-normal text-gray-700 dark:text-neutral-400 font-raleway mb-3 md:max-w-lg">
          Stay updated with the latest Gen-Z tales, blogs and newsletters by
          subscribing to our mailing list.
        </p>

        <div className="w-full">
          <SubscribeForm setNotify={setNotify} setMessage={setMessage} />
        </div>
      </div>
    </>
  );
}

export default Subscribe;
