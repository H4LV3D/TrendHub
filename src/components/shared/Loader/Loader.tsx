import Head from "next/head";
import React from "react";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import BrandLogo from "../BrandLogo/BrandLogo";

const Loader: React.FC = () => {
  return (
    <>
      <Head>
        <title>Gen-Z</title>
        <meta name="description" content="connect meet and share opinions " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen w-screen bg-block-bg grid place-items-center">
        <div>
          <div className="mb-4">
            <BrandLogo />
          </div>
          <ButtonLoader color="#000" />
        </div>
      </div>
    </>
  );
};

export default Loader;
