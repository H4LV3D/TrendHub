import React, { useContext } from "react";
import { ThemeContext } from "@/contexts/themeContext";
import Icons from "@/components/icons/Icons";
import icons from "@/data/icons.json";

type Props = {};

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { moon, sun } = icons.icons;

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="checkbox">
        {theme === "dark" ? (
          <Icons icon={moon} action={() => setTheme("light")} />
        ) : (
          <Icons icon={sun} action={() => setTheme("dark")} />
        )}
      </label>
      <div className="hidden xxl:block">
        <label className="toggleDarkBtn">
          <input
            type="checkbox"
            id="checkbox"
            className="dark:bg-gray-300"
            defaultChecked={theme === "dark"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <span className="slideBtnTg round"></span>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
