import Link from "next/link";
import React from "react";

type Props = {
  text: String;
  type?: "button" | "submit" | "reset" | undefined;
  action?: () => void;
  link?: string;
};

function SecondaryButton({ text, type, action, link }: Props) {
  if (!link) {
    return (
      <button
        className="border dark:border-neutral-700 hover:border-black rounded-lg w-full h-[3.5rem] flex items-center justify-center text-neutral-400 text-sm md:text-base hover:text-black"
        type={type}
        onClick={action}
      >
        {text}
      </button>
    );
  }
  return (
    <>
      <Link href={link}>
        <div className="w-full text-neutral-400 dark:text-neutral-600 dark:hover:text-neutral-400 text-center hover:text-black border dark:border-neutral-800 dark:hover:border-neutral-500 border-neutral-400 hover:border-black rounded-lg text-base md:text-lg h-[3.5rem] px-6">
          {text}
        </div>
      </Link>
    </>
  );
}

export default SecondaryButton;
