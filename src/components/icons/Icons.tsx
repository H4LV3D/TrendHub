import React from "react";

type Props = {
  icon: Icon;
  action?: () => void;
  small?: boolean;
  color?: string;
};

type Icon = {
  name: string;
  text: string;
  path: string;
  viewBox: string;
};

function Icons({ icon, action, small, color }: Props) {
  const filledColor = `fill-[${color}]`;
  return (
    <>
      <div className="group relative">
        <button
          onClick={action}
          className="flex items-center justify-center sm:px-3 py-2.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke={color ? color : "currentColor"}
            fill={color ? color : "currentColor"}
            className={`${small ? "w-5 h-5" : "w-6 h-6"} `}
            viewBox={icon.viewBox}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d={icon.path}
            />
          </svg>
        </button>
        <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1 mt-4 px-4 pointer-events-none">
          {icon.text}
        </div>
      </div>
    </>
  );
}

export default Icons;
