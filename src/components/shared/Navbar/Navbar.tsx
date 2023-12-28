"use client";
import React, { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import TetiaryButton from "../buttons/Tetiary";
import SecondaryButton from "../buttons/Secondary";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/hooks/useAppSelector";
import SearchBox from "@/components/shared/search/Search";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { showMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import MaxWidthProvider from "../MaxWidthProvider/MaxWidthProvider";
import BrandLogo from "../BrandLogo/BrandLogo";
import pageData from "@/data/index.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  nav?: boolean;
};

type User = {
  fullName: string;
  email: string;
  avatarId: number;
};

function Header({ nav }: Props) {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useAppDispatch();

  const navItems = [
    { text: "About", link: "/about" },
    { text: "Blogs", link: "/blogs" },
    { text: "Podcasts", link: "/podcasts" },
    { text: "Newsletters", link: "/newsletters" },
  ];

  // const user = useAppSelector((state) => state.user.data);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const retrievedUser = localStorage.getItem("user");
      setUser(retrievedUser ? JSON.parse(retrievedUser) : null);
    }
  }, []);

  const { bars } = icons.icons;
  const { blogs, podcasts } = pageData;
  const data = [...blogs, ...podcasts];
  const [hasShadow, setHasShadow] = useState(false);

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

  const headerClasses = `font-raleway flex items-center justify-between py-3  ${
    nav
      ? `lg:border-b border-neutral-50 dark:border-[#191919] px-4 sm:px-0`
      : "md:border-b border-neutral-100 dark:border-[#191919] sm:border-none"
  } ${hasShadow ? "shadow-sm border-gray-200" : ""}`;

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-[#191919] z-20">
      <MaxWidthProvider>
        <div className={`${headerClasses}`}>
          <div className="hidden lg:block group relative dark:border-gray-600 dark:text-neutral-300 py-2 cursor-pointer">
            <BrandLogo />
            <p className="opacity-0 bg-black dark:bg-neutral-900 dark:text-neutral-400 text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-4 mt-4 px-4 pointer-events-none">
              Home
            </p>
          </div>
          <div className="lg:hidden">
            <Icons icon={bars} action={() => dispatch(showMobileSidebar())} />
          </div>

          <div className="hidden lg:block">
            {nav ? (
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
            ) : (
              <div className="">
                <SearchBox blogs={data} />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-3 text-black dark:text-neutral-400">
              <div className="hidden sm:flex sm:border-r border-neutral-500 space-x-0  items-center text-black dark:text-neutral-400">
                <Toggle />
              </div>
              {user === null || user === undefined ? (
                <div className="hidden sm:flex">
                  <SecondaryButton text="Login" link="/login" />
                </div>
              ) : (
                <div className="flex flex-row items-center space-x-0">
                  <div className="">
                    <img
                      src={`/assets/Bust/peep-${user.avatarId}.svg`}
                      className="h-12 w-12"
                      alt="your custom illustration"
                    />
                  </div>
                  <div>
                    <Link href="/dashboard">
                      <p className="text-sm font-[500] sm:text-base m-0">
                        {user.fullName.split(" ")[0]}
                      </p>
                    </Link>
                    <TetiaryButton
                      text="Logout"
                      action={() => {
                        localStorage.setItem(
                          "loggedOutUser",
                          JSON.stringify(user)
                        );
                        localStorage.setItem("user", "");
                        router.refresh();
                      }}
                      // link="/logout"
                      small={true}
                    />
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
