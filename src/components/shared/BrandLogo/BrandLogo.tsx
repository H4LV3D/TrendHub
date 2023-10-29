import React from "react";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { hideMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";

type Props = {};

const BrandLogo = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Link href="/" onClick={() => dispatch(hideMobileSidebar())}>
        <button className="font-oleo font-normal text-3xl md:text-4xl text-black dark:text-neutral-200 ">
          Gen-Z
        </button>
      </Link>
    </>
  );
};

export default BrandLogo;
