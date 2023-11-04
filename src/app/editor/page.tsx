"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import EditorPageWrapper from "@/components/page-wrappers/EditorPageWrapper/EditorPageWrapper";
import Head from "next/head";

type Props = {};

const Editor = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | Editor</title>
          <meta name="description" content="Gen-Z Blog Editor" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          <EditorPageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default Editor;
