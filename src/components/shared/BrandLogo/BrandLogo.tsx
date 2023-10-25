import React from "react";
import Link from "next/link";

type Props = {};

const BrandLogo = (props: Props) => {
  return (
    <>
      <Link href="/">
        <button className="font-oleo font-normal text-3xl md:text-4xl text-black dark:text-neutral-200 ">
          Gen-Z
        </button>
      </Link>
    </>
  );
};

export default BrandLogo;
