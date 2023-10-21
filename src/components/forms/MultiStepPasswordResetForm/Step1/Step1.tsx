"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  UseFormRegister,
  UseFormTrigger,
  FieldErrorsImpl,
  set,
} from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { increasePasswordRecoveryStep } from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { requestPasswordReset } from "@/utils/requests/auth";
import { MultiStepPasswordResetFormInputs } from "../MultiStepPasswordResetForm.interface";
import PrimaryButton from "@/components/shared/buttons/Primary";
import SecondaryButton from "@/components/shared/buttons/Secondary";

interface Props {
  register: UseFormRegister<MultiStepPasswordResetFormInputs>;
  trigger: UseFormTrigger<MultiStepPasswordResetFormInputs>;
  errors: FieldErrorsImpl<MultiStepPasswordResetFormInputs>;
  email: string;
}

const Step1: React.FC<Props> = ({ register, trigger, errors, email }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  //   const handleNext = async () => {
  //     try {
  //       const isValid = await trigger(["email"]);
  //       if (!isValid) return;
  //       setLoading(true);
  //       const res = await requestPasswordReset(email);
  //       dispatch(increasePasswordRecoveryStep());
  //     } catch (error: any) {
  //       if (error.code === "ERR_NETWORK") {
  //         console.log(error?.message);
  //       } else {
  //         console.log(error.response?.data?.message);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleNext = async () => {
    // setLoading(true);
    const isValid = await trigger(["email"]);

    console.log("hello there", isValid);
    dispatch(increasePasswordRecoveryStep());
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-2 font-semibold text-[1.5rem]">Forgot Password</h1>
        <p className="max-w-xs text-sm font-[400] text-neutral-600 ">
          Enter your registered email to receive further instructions
        </p>
      </div>
      <div className="form-container w-full sm:w-[350px] font-number text-black dark:text-white mb-8">
        <div className="mb-3 w-full">
          <label
            htmlFor="email"
            className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="on"
            placeholder=""
            required
            {...register("email")}
            className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
          />
          {errors.email && (
            <p className="text-xs font-semibold">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-4">
        <PrimaryButton
          loading={loading}
          text="Send"
          type="button"
          action={handleNext}
        />

        <SecondaryButton text="Login" link="/login" />
      </div>
    </>
  );
};

export default Step1;
