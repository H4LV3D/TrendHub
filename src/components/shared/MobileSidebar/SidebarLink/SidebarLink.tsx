import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { hideMobileSidebar } from "../../../../store/slices/mobileSidebar/mobileSidebarSlice";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";

interface Props {
  text: string;
  href: string;
}

const SidebarLink: React.FC<Props> = ({ text, href }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const path = usePathname();
  const isActive = path.includes(href);

  return (
    <li onClick={() => dispatch(hideMobileSidebar())} className="mb-2 ">
      <Link
        href={href}
        className={`flex items-center group relative gap-6 h-12 px-4 rounded-xl dark:text-neutral-400 ${
          isActive &&
          "dark:text-white bg-black text-white dark:bg-neutral-700 font-bold"
        }`}
      >
        <p className={`font-[500] text-sm sm:text-base whitespace-nowrap `}>
          {text}
        </p>
      </Link>
    </li>
  );
};

export default SidebarLink;
