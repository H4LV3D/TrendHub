"use client";
import React, { useEffect, useState } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AnimatePresence } from "framer-motion";
import { resetPasswordRecoveryStep } from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { MultiStepPasswordResetFormSchema } from "./MultiStepPasswordResetForm.schema";
import { MultiStepPasswordResetFormInputs } from "./MultiStepPasswordResetForm.interface";
import { yupResolver } from "@hookform/resolvers/yup";

const MultiStepPasswordRecoveryForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.passwordRecoveryStep.step);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    control,
  } = useForm<MultiStepPasswordResetFormInputs>({
    resolver: yupResolver(MultiStepPasswordResetFormSchema),
  });
  const email = watch("email");
  const code = parseInt(`${watch("code")}`);

  const onSubmit: SubmitHandler<MultiStepPasswordResetFormInputs> = async (
    data
  ) => {
    console.log(data);
  };

  useEffect(() => {
    return () => {
      dispatch(resetPasswordRecoveryStep());
    };
  }, [dispatch]);

  const showUI = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            register={register}
            trigger={trigger}
            errors={errors}
            email={email}
          />
        );

      case 1:
        return (
          <Step2
            trigger={trigger}
            control={control}
            errors={errors}
            email={email}
            code={code}
          />
        );

      case 2:
        return (
          <Step3
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[30rem] mx-auto overflow-x-hidden"
    >
      <AnimatePresence mode="wait">{showUI()}</AnimatePresence>
    </form>
  );
};

export default MultiStepPasswordRecoveryForm;
