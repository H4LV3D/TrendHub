import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from "@/components/shared/buttons/Primary";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  increaseAuthStep,
  decreaseAuthStep,
} from "@/store/slices/authStep/AuthStepSlice";
import SecondaryButton from "@/components/shared/buttons/Secondary";

type Props = {};

function SignUpForm({}: Props) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<SignUpFormInput>({
  //   // resolver: yupResolver(signUpSchema),
  //   mode: "all",
  // });

  const dispatch = useAppDispatch();

  // const onSubmit: SubmitHandler<SignUpFormInput> = async (
  //   data: SignUpFormInput
  // ) => {
  //   console.log(data);
  //   dispatch(increaseAuthStep());
  // };

  return (
    <>
      <div className="mt-6 dark:text-neutral-300">
        <h5 className="text-lg font-[500] dark:text-neutral-300 ">
          Pick a content type.
        </h5>
        <p className="text-sm text-neutral-400">
          Choose a content type to get started.
        </p>
        <div className="mt-2 px-4 border dark:border-neutral-800 w-full sm:max-w-xl rounded-lg cursor-pointer hover:border-neutral-500 focus:border-black dark:focus:border-neutral-500  text-neutral-500 ">
          <select
            name=""
            id=""
            className="text-base w-full p-3 focus:outline-none cursor-pointer bg-transparent "
          >
            <option value="Blog">Blog</option>
            <option value="Article">Article</option>
            <option value="Newsletter">Newsletter</option>
            <option value="Podcast">Podcast</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <h5 className="text-lg font-[500] dark:text-neutral-300 ">Title</h5>
        <p className="text-sm text-neutral-400">
          Pick a suitable title for your content.
        </p>
        <div className="mt-2 px-2 border dark:border-neutral-700 w-full sm:max-w-xl rounded-lg cursor-pointer hover:border-neutral-500 focus-within:border-black ">
          <input
            name="title"
            id="title"
            placeholder="Content title"
            className="text-base w-full py-3 px-1 focus:outline-none bg-transparent dark:placeholder:text-neutral-500"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-lg font-[500] dark:text-neutral-300 ">Seo Tags</p>
        <p className="text-sm text-neutral-400">
          Select words that best describe your content.
        </p>
        <div className="mt-2 px-2 border dark:border-neutral-700 w-full sm:max-w-xl rounded-lg cursor-pointer hover:border-neutral-500 focus-within:border-black ">
          <textarea
            name="title"
            id="title"
            rows={4}
            placeholder="Tags separated by commas"
            className="text-base w-full py-3 px-1 focus:outline-none bg-transparent dark:placeholder:text-neutral-500    bnnmn"
          />
        </div>
      </div>
      <div className="mt-6">
        <h5 className="text-lg font-[500] dark:text-neutral-300 ">
          Upload Image
        </h5>
        <p className="text-sm text-neutral-400 mt-1">
          Upload an image for your content.
        </p>
        <div className="w-full sm:max-w-xl">
          <label className="flex justify-center w-full h-32 px-4 transition bg-transparent border-2 border-gray-300 border-dashed rounded-md dark:border-neutral-700 appearance-none cursor-pointer hover:border-gray-400 focus:outline-none mt-2">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600 dark:text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600 dark:text-neutral-300">
                Drop files to Attach, or{" "}
                <span className="text-blue-500 underline">browse</span>
              </span>
            </span>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-16">
        <div className="sm:w-[250px]">
          <SecondaryButton
            text="Back"
            type="button"
            action={() => dispatch(decreaseAuthStep())}
          />
        </div>
        <div className="sm:w-[250px]">
          <PrimaryButton
            text="Next"
            type="button"
            loading={false}
            action={() => dispatch(increaseAuthStep())}
          />
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
