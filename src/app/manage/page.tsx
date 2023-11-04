"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import ManagePageWrapper from "@/components/page-wrappers/ManagePageWrapper/ManagePageWrapper";
import Head from "next/head";

type Props = {};

const Manage = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | Settings</title>
          <meta name="description" content="Gen-Z Blog Settings" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          <ManagePageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default Manage;
