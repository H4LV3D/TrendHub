import React, { use, useState } from "react";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setArrangement } from "@/store/slices/arrangement/arrangementSlice";

type Nav = {
  text: string;
  link: string;
};

type Props = {
  Nav: Nav[];
  color?: string;
  arrangement?: string;
};

const DisplayNavBar = ({ Nav }: Props) => {
  const { plus, grid2, grid3, square } = icons.icons;
  const [navTab, setNavTab] = useState("For You");
  const arrangement = useAppSelector((state) => state.arrangement.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" dark:bg-[#191919] w-full flex flex-row justify-between border-b mb-8">
        <div className="w-full  flex items-center space-x-2">
          <Icons icon={plus} small={true} />
          {Nav.map((nav, index: number) => (
            <div key={index}>
              <button
                onClick={() => setNavTab(nav.text)}
                className={`"w-full
                        : "text-lg p-2 text-neutral-400 dark:text-neutral-400 hover:text-black"
                     ${
                       navTab === nav.text
                         ? "!text-black dark:text-neutral-400"
                         : ""
                     } `}
              >
                {nav.text}
              </button>
            </div>
          ))}
        </div>
        <div className="">
          <div className="flex">
            <Icons
              icon={square}
              color={arrangement === "single" ? "#000" : "#a3a3a3"}
              action={() => dispatch(setArrangement("single"))}
            />
            <Icons
              icon={grid2}
              color={arrangement === "double" ? "#000" : "#a3a3a3"}
              action={() => dispatch(setArrangement("double"))}
            />
            <Icons
              icon={grid3}
              color={arrangement === "cards" ? "#000" : "#a3a3a3"}
              action={() => dispatch(setArrangement("cards"))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayNavBar;
