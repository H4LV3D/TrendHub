import React from "react";
import { RotatingLines } from "react-loader-spinner";

interface Props {
  color?: string;
}

const ButtonLoader: React.FC<Props> = ({ color }) => {
  return (
    <div className="grid place-items-center">
      <RotatingLines
        strokeColor={color || "white"}
        strokeWidth="5"
        animationDuration="0.75"
        width="40"
        visible={true}
      />
    </div>
  );
};

export default ButtonLoader;
