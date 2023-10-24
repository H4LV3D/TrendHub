import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthProvider: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`${className} max-w-[1244px] mx-auto`}>{children}</div>
  );
};

export default MaxWidthProvider;
