import React from "react";
import Link from "next/link";
import pageData from "@/data/index.json";
import BrandLogo from "../BrandLogo/BrandLogo";

type Props = {};

const footerData = {
  about: [
    {
      title: "FAQ's",
      link: "/faq",
    },
    {
      title: "Careers",
      link: "/career",
    },
    {
      title: "Feedback",
      link: "/feedback",
    },
    {
      title: "Privacy Policy",
      link: "/privacy",
    },
    {
      title: "Terms & Conditions",
      link: "/terms",
    },
  ],
  resources: [
    {
      title: "Blog",
      link: "/blogs",
    },
    {
      title: "Pricing",
      link: "/plans",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "Help Center",
      link: "/help",
    },
  ],
  pages: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Podcasts",
      link: "/podcasts",
    },
    {
      title: "settings",
      link: "/settings",
    },
    {
      title: "Newsletters",
      link: "/newsletters",
    },
  ],
};

function Footer({}: Props) {
  const { socials } = pageData;
  return (
    <>
      <div className="w-full font-raleway bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400 py-20">
        <div className="px-8 xs:px-0 md:container mx-auto xl:w-[950px]">
          <div className="md:flex flex-row lg:grid sm:grid-cols-2 mb-8">
            <div className="w-full sm:w-1/3 lg:w-full mb-8 md:mb-4 ">
              <BrandLogo />
              <p className="text-sm font-[400] sm:text-base lg:text-base !leading-6 md:!leading-7 mt-4 text-justify sm:hidden lg:block lg:w-2/3 xl:w-3/4">
                A community of young writers, readers, and storytellers who
                understand art is about self-expression, not just the end
                product.
              </p>
            </div>

            <div className="hidden w-full md:w-2/3 lg:w-full sm:grid grid-cols-3 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Resource
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.resources.map((item) => (
                    <Link href={item.link} shallow={true} key={item.link}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Pages
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.pages.map((item) => (
                    <Link href={item.link} shallow={true} key={item.link}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Company
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.about.map((item) => (
                    <Link href={item.link} shallow={true} key={item.link}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4 dark:border-neutral-700" />

          <div className="md:grid grid-cols-1 sm:grid-cols-2 items-center py-2 mt-4">
            <div className="flex items-center font-raleway font-normal sm:text-base text-sm text-neutral-600 dark:text-neutral-400 space-x-4 mb-3 md:mb-0">
              <span className=" ">All rights reserved.</span>
              <span className="font-number ">© 2023 </span>
            </div>
            <div className="flex space-x-2 items-center md:justify-end">
              {socials.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className=" rounded-md hover:border-black dark:hover:border-white"
                >
                  <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-black p-2">
                    <i className={`${item.icon} fa-xl fa-fw`}></i>
                    <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1/2 px-4 pointer-events-none">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
