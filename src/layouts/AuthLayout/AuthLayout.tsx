"use client";
import React, { useState, useEffect } from "react";
import TetiaryButton from "@/components/shared/buttons/Tetiary";
import { motion } from "framer-motion";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useAppSelector } from "@/hooks/useAppSelector";
import BrandLogo from "@/components/shared/BrandLogo/BrandLogo";

type Props = {
  children: React.ReactNode;
  form: string;
};

function AuthLayout({ children, form }: Props) {
  const [selectedImage, setSelectedImage] = useState(8);
  const step = useAppSelector((state) => state.passwordRecoveryStep.step);
  const avatarId = useAppSelector((state) => state.user.avatarId);

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
          {form !== "signup" && step !== 2 ? (
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
                        selectedImage === index + 1 ? "border-black" : ""
                      } border focus:border-black hover:border-neutral-700 rounded-xl  hover:shadow-xl hover:shadow-neutral-100 dark:border-neutral-700 `}
                      onClick={() => setSelectedImage(index + 1)}
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
        className={`w-full h-screen sm:min-h-screen grid items-center md:flex justify-center bg-[#F7F7F7] dark:bg-[#191919] `}
      >
        <motion.div
          initial={{ x: -100, opacity: 0.3 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0.5 }}
          transition={{ duration: 1 }}
        >
          <div className="md:mx-auto sm:border dark:border-neutral-800 rounded-xl sm:p-12 lg:p-10 mx-12 xl:p-12 sm:shadow-md ">
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
