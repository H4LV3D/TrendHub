"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import DashboardPageWrapper from "@/components/page-wrappers/DashboardPageWrapper/DashboardPageWrapper";
import Head from "next/head";

type Props = {};

const Dashboard = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | Dashboard</title>
          <meta name="description" content="Gen-Z dashboard" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          <DashboardPageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default Dashboard;
