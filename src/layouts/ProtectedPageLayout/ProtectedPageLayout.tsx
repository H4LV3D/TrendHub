"use client";
import React from "react";
import Loader from "@/components/shared/Loader/Loader";
import ModalProvider from "@/components/page-wrappers/ModalProvider/ModalProvider";
import { useUser } from "../../hooks/useUser";

interface Props {
  children: React.ReactNode;
}

const ProtectedPageLayout: React.FC<Props> = ({ children }) => {
  const { isLoading, isNull } = useUser("/");

  if (isLoading || isNull) {
    return <Loader />;
  }
  return (
    <>
      <ModalProvider>{children}</ModalProvider>
    </>
  );
};

export default ProtectedPageLayout;
