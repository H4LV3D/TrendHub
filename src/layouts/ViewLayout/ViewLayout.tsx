"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <div className="relative bg-white dark:bg-black/90 min-h-screen w-full">
          <Navbar nav={true} />
          <main className="">{children}</main>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
};

export default PageLayout;
