"use client";
import React from "react";
import ProtectedPageLayout from "@/layouts/ProtectedPageLayout/ProtectedPageLayout";
import DashboardPageLayout from "@/layouts/DashboardPageLayout/DashboardPageLayout";
import MyBlogsPageWrapper from "@/components/page-wrappers/MyBlogsPageWrapper/MyBlogsPageWrapper";
import Head from "next/head";

type Props = {};

const MyBlogs = ({}: Props) => {
  return (
    <>
      <>
        <Head>
          <title>Gen-Z | My Blogs</title>
          <meta name="description" content="Gen-Z My Blogs" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <DashboardPageLayout>
          <MyBlogsPageWrapper />
        </DashboardPageLayout>
      </>
    </>
  );
};

export default MyBlogs;
