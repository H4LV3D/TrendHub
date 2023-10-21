"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Toggle from "../Toggle/Toggle";
import TetiaryButton from "../buttons/Tetiary";
import SecondaryButton from "../buttons/Secondary";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import SearchBox from "@/components/shared/search/Search";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { showMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import MaxWidthProvider from "../MaxWidthProvider/MaxWidthProvider";
import { showSearchBox } from "@/store/slices/searchbox/searchBoxSlice";
import PrimaryButton from "../buttons/Primary";

type Props = {
  nav?: boolean;
};

function Header({ nav }: Props) {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();

  const navItems = [
    { text: "Blogs", link: "/blogs" },
    { text: "Podcast", link: "/podcast" },
    { text: "Newsletter", link: "/newsletter" },
    { text: "About", link: "/about" },
  ];

  const [hasShadow, setHasShadow] = useState(false);
  const { search } = icons.icons;
  const user = useAppSelector((state) => state.user.data);

  const [blogs, setBlogs] = useState([]);

  const handleClickScroll = (link: any) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldHaveShadow = window.scrollY > 1000;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = ` font-raleway flex items-center justify-between py-3 ${
    nav ? `lg:border-b border-neutral-50` : ""
  } ${hasShadow ? "shadow-sm border-gray-200" : ""}`;

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-[#191919] z-20">
      <MaxWidthProvider>
        <div className={`${headerClasses}`}>
          <Link href="/" className="hidden lg:block" shallow={true}>
            <div className="group relative flex justify-center items-center border-gray-400 hover:border-gray-700 dark:border-gray-600 dark:hover:border-gray-300 rounded-md dark:text-neutral-300 py-2 cursor-pointer">
              <h3 className="font-oleo font-normal text-blacktext-3xl lg:text-4xl">
                Gen-Z
              </h3>
              <div className="opacity-0 bg-black dark:bg-neutral-900 dark:text-neutral-400 text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-4 mt-4 px-4 pointer-events-none">
                Home
              </div>
            </div>
          </Link>
          <button
            className="lg:hidden"
            onClick={() => dispatch(showMobileSidebar())}
          >
            <h3 className="font-oleo font-normal text-3xl lg:text-4xl lg:hidden">
              Gen-Z
            </h3>
          </button>

          <div className="hidden lg:block">
            {nav ? (
              <div className="">
                <SearchBox blogs={blogs} />
              </div>
            ) : (
              <div className="flex items-center space-x-5">
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
            )}
          </div>

          <div>
            <div className="hidden sm:flex items-center space-x-4 text-black dark:text-neutral-400">
              <div className="border-r border-neutral-500 items-center space-x-2 hidden md:flex text-black dark:text-neutral-400">
                {hasShadow && !nav && (
                  <Icons
                    icon={search}
                    action={() => handleClickScroll("search")}
                  />
                )}
                {nav && (
                  <div className="lg:hidden">
                    <Icons
                      icon={search}
                      action={() => dispatch(showSearchBox())}
                    />
                  </div>
                )}

                <Toggle />
              </div>
              {user === null ? (
                <SecondaryButton text="Login" link="/login" />
              ) : (
                <div className=" pr-6 flex flex-row items-center space-x-3 ">
                  <div className="">
                    <img
                      src={`/assets/Bust/peep-8.svg`}
                      className="h-12 w-12"
                      alt="your custom illustration"
                    />
                  </div>
                  <div>
                    <p className="text-base m-0">Toluwalope</p>
                    <TetiaryButton text="Logout" link="/logout" small={true} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthProvider>
    </div>
  );
}

export default Header;
