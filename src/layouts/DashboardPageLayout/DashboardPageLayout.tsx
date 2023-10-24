"use client";
import React from "react";
import Loader from "@/components/shared/Loader/Loader";
import Navbar from "@/components/shared/Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";

interface Props {
  children: React.ReactNode;
}

const ProtectedPageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ModalProvider>
        <div className="bg-white dark:bg-[#191919] min-h-screen w-full">
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
