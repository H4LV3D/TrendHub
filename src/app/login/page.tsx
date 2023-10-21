"use client";
import LoginForm from "@/components/forms/LoginForm/LoginForm";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import SecondaryButton from "@/components/shared/buttons/Secondary";

import React from "react";

type Props = {};

const Login = (props: Props) => {
  const [notify, setNotify] = React.useState(false);
  const [message, setMessage] = React.useState("");
  return (
    <>
      {notify && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[300px] md:w-[450px] z-50 font-raleway">
          <div className="w-full bg-black dark:bg-gray-100 flex items-center space-x-3 p-3 rounded-lg">
            <div className="w-[60px] flex justify-center text-gray-100 dark:text-black">
              <i className="fas fa-gift fa-xl fa-fw"></i>
            </div>
            <div className="font-raleway">
              <h3 className="font-semibold text-lg font-raleway text-white dark:text-black">
                {message}
              </h3>
              <p className="text-sm font-raleway text-gray-100 dark:text-black">
                You have successfully been able to subscribe to my blog,
                newsletter and updates feed for more interesting episodes.
              </p>
            </div>
          </div>
        </div>
      )}
      <AuthLayout form="login">
        <LoginForm setNotify={setNotify} setMessage={setMessage} />
        <div className="mt-8 flex flex-col space-y-2">
          <p className="text-sm text-neutral-500">Sign in with ...</p>
          <SecondaryButton link="https://google.com" text="Google" />
          <SecondaryButton link="https://apple.com" text="Apple" />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
