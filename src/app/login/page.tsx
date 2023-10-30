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
      <AuthLayout form="login">
        <LoginForm setNotify={setNotify} setMessage={setMessage} />
        <div className="mt-6 flex flex-col space-y-2">
          <p className="text-sm text-neutral-500">Sign in with ...</p>
          <SecondaryButton link="https://google.com" text="Google" />
          <SecondaryButton link="https://apple.com" text="Apple" />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
