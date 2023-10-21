import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import React from "react";
import MultiStepPasswordRecoveryForm from "../../components/forms/MultiStepPasswordResetForm/MultiStepPasswordResetForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AuthLayout form={"reset-password"}>
        <MultiStepPasswordRecoveryForm />
      </AuthLayout>
    </div>
  );
};

export default page;
