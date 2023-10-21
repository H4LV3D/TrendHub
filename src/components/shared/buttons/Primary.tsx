import React from "react";
import ButtonLoader from "../ButtonLoader/ButtonLoader";

type Props = {
  loading: boolean;
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  action: () => void;
};

function PrimaryButton({ loading, text, type, action }: Props) {
  return (
    <>
      <button
        className={` bg-black dark:bg-neutral-800 dark:hover:bg-neutral-700 w-full h-[3.5rem] rounded-md font-raleway font-normal text-lg text-white dark:text-neutral-400 border border-black hover:shadow-xl hover:text-gray-500 ${
          loading ? " h-[3.5rem] py-1 bg-black" : "cursor-pointer"
        }`}
        type={type}
        disabled={loading}
        onClick={() => action()}
      >
        {loading ? <ButtonLoader /> : text}
      </button>
    </>
  );
}

export default PrimaryButton;
