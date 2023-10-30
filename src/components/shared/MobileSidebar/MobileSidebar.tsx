import React, { useEffect, useRef } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";
import { motion } from "framer-motion";
import { hideMobileSidebar } from "../../../store/slices/mobileSidebar/mobileSidebarSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { usePathname } from "next/navigation";
import BrandLogo from "../BrandLogo/BrandLogo";

const MobileSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const path = usePathname();
  const user = useAppSelector((state) => state.user.isNull);
  const ProtectedLinks = [
    {
      page: "Dashboard",
      link: "/dashboard",
    },
    {
      page: "Bookmarks",
      link: "/dashboard",
    },
    {
      page: "Read",
      link: "/dashboard",
    },
    {
      page: "Listen",
      link: "/dashboard",
    },
    {
      page: "Settings",
      link: "/settings",
    },
  ];
  const NavigationLinks = [
    {
      page: "Blogs",
      link: "/blogs",
    },
    {
      page: "Podcasts",
      link: "/podcast",
    },
    {
      page: "Newsletters",
      link: "/newsletter",
    },
    {
      page: "About",
      link: "/about",
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const allLinks = [...ProtectedLinks, ...NavigationLinks];

  // Determine the category based on the current path
  const category = allLinks.find((link) => link.link === path);

  // Check if NavigationLinks contains the category object
  const isProtected = ProtectedLinks.some(
    (link) => link.page === category?.page && link.link === category.link
  );

  // Render the appropriate category based on the path
  const renderLinks = category
    ? isProtected
      ? ProtectedLinks
      : NavigationLinks
    : NavigationLinks;

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      dispatch(hideMobileSidebar());
    }
  };

  // Listen for window resize when sidebar is open
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup - remove event listener when sidebar is closed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Prevent the rest of the page from scrolling
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className="h-screen w-screen flex fixed top-0 left-0 z-50 bg-black bg-opacity-80"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          x: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className="h-full w-[18rem] px-3 bg-white dark:bg-neutral-800"
      >
        <div
          className={`h-[5.375rem] border-b border-gray-200 dark:border-neutral-700 flex items-center py-6 pl-3`}
        >
          <BrandLogo />
        </div>
        <div className="h-[calc(100%-5.375rem)] flex flex-col justify-between py-6">
          <ul className="mb-10">
            {renderLinks.map((item, index) => {
              return (
                <SidebarLink key={index} href={item.link} text={item.page} />
              );
            })}
          </ul>
          <ul>
            <SidebarLink href="/help" text="Get Help" />
            <SidebarLink href="/contact" text="Contact Us" />
            {user ? (
              <SidebarLink href="/logout" text="Log Out" />
            ) : (
              <SidebarLink href="/login" text="Log In" />
            )}
          </ul>
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideMobileSidebar())}
        className="h-full flex-1 "
      ></div>
    </motion.div>
  );
};

export default MobileSidebar;
