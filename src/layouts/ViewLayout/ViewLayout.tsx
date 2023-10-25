"use client";
import React from "react";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";

type Props = {
  children: React.ReactNode;
};

const ViewLayout = ({ children }: Props) => {
  return (
    <>
      <ModalProvider>
        <div className="relative bg-white  min-h-screen w-full">
          <Navbar nav={false} />
          <main className="md:container mx-auto xs:px-0 px-6 ">{children}</main>
          <Footer />
        </div>
      </ModalProvider>
    </>
  );
};

export default ViewLayout;
