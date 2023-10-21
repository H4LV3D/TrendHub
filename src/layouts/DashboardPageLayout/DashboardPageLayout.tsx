"use client";
import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";

type Props = {
  children: React.ReactNode;
};

const ProtectedPageLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <div className="bg-white dark:bg-black/90 min-h-screen w-full">
          <Navbar nav={true} />
          <div className="mt-20 mb-12">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
};

export default ProtectedPageLayout;
