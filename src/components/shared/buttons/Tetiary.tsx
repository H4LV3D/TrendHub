import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  link?: string;
  small: boolean;
  active?: boolean;
  action?: () => void;
};

function TetiaryButton({ text, link, small, active, action }: Props) {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={`"w-full  ${
            small
              ? "text-sm text-neutral-400 hover:text-black"
              : "text-lg p-2 text-neutral-400 dark:text-neutral-400 hover:text-black"
          } ${active ? "!text-black font-medium dark:text-neutral-400" : ""} `}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`"w-full  ${
            small
              ? "text-sm text-neutral-400 hover:text-black"
              : "text-lg p-2 text-neutral-400 dark:text-neutral-400 hover:text-black"
          } ${active ? "!text-black dark:text-neutral-400" : ""} `}
          onClick={() => action}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default TetiaryButton;
