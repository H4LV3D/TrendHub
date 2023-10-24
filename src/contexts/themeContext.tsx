"use client";
import React, { createContext, useState, useEffect, FC } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("current-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs as Theme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const checkTheme = (existing: Theme): void => {
    const root = window.document.documentElement;
    const isDark = existing === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(existing);

    const body = window.document.body;
    body.classList.remove(existing === "light" ? "bg-[#191919]" : "bg-white");
    body.classList.add(existing === "light" ? "bg-white" : "bg-[#191919]");

    setTheme(existing);
    localStorage.setItem("current-theme", existing);
  };

  useEffect(() => {
    if (initialTheme) {
      checkTheme(initialTheme);
    }
    checkTheme(theme);
  }, [initialTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
