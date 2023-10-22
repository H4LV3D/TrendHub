"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/contexts/themeContext";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import Head from "next/head";
import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Gen-Z Tales",
  description: "Gen-Z Tales | Express your thoughts and opinions in words",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <html lang="en">
      <Head key="app-head">
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/solid.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/all.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/brands.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/regular.css"
        />
        <link
          rel="stylesheet"
          href="/assets/fontawesome-free-6.2.1-web/css/fontawesome.css"
        />
      </Head>
      <body
        className={`${raleway.className} ${
          theme === "light" ? "bg-white" : "bg-neutral-800"
        }`}
      >
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
