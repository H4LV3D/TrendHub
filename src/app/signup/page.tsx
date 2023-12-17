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
      </AuthLayout>
    </>
  );
};

export default page;
