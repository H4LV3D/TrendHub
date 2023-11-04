"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import SettingsPageWrapper from "@/components/page-wrappers/SettingsPageWrapper/SettingsPageWrapper";
import Head from "next/head";

type Props = {};

const Settings = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | Settings</title>
          <meta name="description" content="Gen-Z Blog settings" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          <SettingsPageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default Settings;
