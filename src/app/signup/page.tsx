"use client";
import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import SignUpForm from "@/components/forms/MultiStepSignUpForm/SignUpForm";
import SecondaryButton from "@/components/shared/buttons/Secondary";

type Props = {};

const page = (props: Props) => {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <AuthLayout form="signup">
        <SignUpForm />
        <div className="mt-8">
          <p className="text-sm mb-2 text-neutral-500">Sign up with</p>
          <SecondaryButton link="https://google.com" text="Google" />
          <SecondaryButton link="https://apple.com" text="Apple" />
        </div>
      </AuthLayout>
    </>
  );
};

export default page;
