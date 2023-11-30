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
  showArrangement?: boolean;
  setTab?: React.Dispatch<React.SetStateAction<string>>;
};

const DisplayNavBar = ({ Nav, showArrangement, setTab }: Props) => {
  const { plus, grid2, grid3, square } = icons.icons;
  const [navTab, setNavTab] = useState(Nav[0].text);
  const arrangement = useAppSelector((state) => state.arrangement.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" dark:bg-[#191919] w-full flex flex-row justify-between border-b dark:border-neutral-800 mb-8 pb-2">
        <div className="w-full hidden md:flex items-center space-x-2">
          <Icons icon={plus} small={true} />
          {Nav.map((nav, index: number) => (
            <div key={index}>
              <button
                onClick={() => {
                  setNavTab(nav.text);
                  setTab && setTab(nav.text);
                }}
                className={`w-full
                        : "text-lg p-2 "
                     ${
                       navTab === nav.text
                         ? "text-black dark:text-neutral-200 font-[500]"
                         : "text-neutral-400 dark:text-neutral-400 hover:text-black hover:font-[500]"
                     } `}
              >
                {nav.text}
              </button>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="pr-[1rem] border rounded-[0.5rem] bg-[#f7f7f7] dark:bg-neutral-700 dark:border-neutral-600 cursor-pointer">
            <select className="py-[0.75rem] px-[1rem] text-[#000] font-[500] rounded-[0.625rem] bg-[#f7f7f7]  dark:bg-neutral-700 dark:border-neutral-700 outline-none">
              {Nav.map((item, index) => (
                <option value={item.text} key={index}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showArrangement ? (
          ""
        ) : (
          <div className="w-full flex justify-end">
            <div className="flex space-x-0">
              <Icons
                icon={square}
                color={arrangement === "single" ? "#000" : "#a3a3a3"}
                action={() => dispatch(setArrangement("single"))}
              />
              {/* <Icons
              icon={grid2}
              color={arrangement === "double" ? "#000" : "#a3a3a3"}
              action={() => dispatch(setArrangement("double"))}
            /> */}
              <Icons
                icon={grid3}
                color={arrangement === "cards" ? "#000" : "#a3a3a3"}
                action={() => dispatch(setArrangement("cards"))}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayNavBar;
