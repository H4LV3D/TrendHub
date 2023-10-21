import Link from "next/link";
import React from "react";

type Props = {
  text: String;
  type?: "button" | "submit" | "reset" | undefined;
  action?: () => void;
  link: string;
};

function SecondaryButton({ text, type, action, link }: Props) {
  if (!link) {
    return (
      <button
        className="border hover:border-black rounded-lg w-full py-3 flex items-center justify-center text-neutral-400 text-sm md:text-base hover:text-black mb-3"
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
        <div className="text-neutral-400 text-center hover:text-black border border-neutral-400 hover:border-black rounded-lg w-full text-base md:text-lg py-2.5 px-6">
          {text}
        </div>
      </Link>
    </>
  );
}

export default SecondaryButton;
