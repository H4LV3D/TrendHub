"use client";
import React, { useState, useEffect } from "react";
import TetiaryButton from "@/components/shared/buttons/Tetiary";
import Link from "next/link";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import SearchBox from "@/components/shared/search/Search";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { showMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import MaxWidthProvider from "@/components/shared/MaxWidthProvider/MaxWidthProvider";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();

  const navItems = [
    { text: "Dashoard", link: "/dashboard" },
    { text: "My Blogs", link: "/myblogs" },
    { text: "Editor", link: "/editor" },
    { text: "Manage", link: "/manage" },
    { text: "Settings", link: "/settings" },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#191919] hidden lg:block ">
      <MaxWidthProvider>
        <div className="flex justify-between items-center w-full py-3 border-y dark:border-neutral-800">
          {navItems.map((item, index) => (
            <TetiaryButton
              key={index}
              text={item.text}
              link={item.link}
              small={false}
              active={path === item.link}
            />
          ))}
        </div>
      </MaxWidthProvider>
    </div>
  );
}

export default Header;
