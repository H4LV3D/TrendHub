"use client";
import React, { useState, useRef } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import {
  Controller,
  UseFormRegister,
  UseFormTrigger,
  FieldErrorsImpl,
  Control,
} from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { resendOtp, verifyOtp } from "@/utils/requests/auth";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  decreasePasswordRecoveryStep,
  increasePasswordRecoveryStep,
} from "@/store/slices/passwordRecoveryStep/passwordRecoveryStepSlice";
import { MultiStepPasswordResetFormInputs } from "../MultiStepPasswordResetForm.interface";
import PrimaryButton from "@/components/shared/buttons/Primary";

interface Props {
  trigger: UseFormTrigger<MultiStepPasswordResetFormInputs>;
  control: Control<MultiStepPasswordResetFormInputs, any>;
  errors: FieldErrorsImpl<MultiStepPasswordResetFormInputs>;
  email: string;
  code: number;
}

const Step2: React.FC<Props> = ({ trigger, control, errors, email, code }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [resendingEmail, setResendingEmail] = useState<boolean>(false);
  const [otpInputs, setOtpInputs] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const selectedEmail = useAppSelector(
    (state) => state.passwordRecoveryStep.selectedEmail
  );
  const dispatch = useAppDispatch();

  // Function to handle changes in the OTP input boxes
  const handleInputChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newOtpInputs = [...otpInputs];
      newOtpInputs[index] = value;
      setOtpInputs(newOtpInputs);

      if (index < 3) {
        // Auto-focus on the next input box
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && !otpInputs[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //   const handleNext = async () => {
  //     try {
  //       const isValid = await trigger(["code"]);
  //       if (!isValid) return;
  //       setLoading(true);
  //       const res = await verifyOtp(email, code);
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

  const handleClick = async () => {
    try {
      setResendingEmail(true);
      const res = await resendOtp(selectedEmail);
      console.log(res.data.message);
    } catch {
    } finally {
      setResendingEmail(false);
    }
  };

  const handleNext = async () => {
    const isValid = await trigger(["code"]);
    console.log(isValid);
    dispatch(increasePasswordRecoveryStep());
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1 font-semibold text-[1.5rem]">Enter OTP</h1>
        <p className="text-sm">
          Enter the 4-digit code that we sent to your email
        </p>
      </div>
      <div className="grid gap-[2rem] w-full sm:min-w-[350px] mb-8">
        <div className="w-full grid place-items-center grid-cols-4 gap-x-3">
          {otpInputs.map((value, index) => (
            <input
              key={index}
              type="text"
              name={`otp-${index}`}
              id={`otp-${index}`}
              maxLength={1} // Limit input to one character
              className="h-[4rem] w-[4rem] border focus:border-black rounded-lg text-[2rem] text-[#000] flex items-center justify-center pl-[1.5rem] outline-none"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(input) => (inputRefs.current[index] = input)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className=" mb-2 text-gray-600 text-sm">
          Didn&apos;t receive the code?{" "}
          <button
            disabled={resendingEmail}
            onClick={() => handleClick()}
            className="text-[#000]"
          >
            <span>Resend</span>
          </button>
        </p>
        <div className="grid place-items-center mb-[1.25rem]">
          <PrimaryButton
            loading={loading}
            text="Verify"
            type="button"
            action={handleNext}
          />
        </div>
        <div className="grid place-items-center">
          <button
            type="button"
            onClick={() => {
              dispatch(decreasePasswordRecoveryStep());
            }}
            disabled={loading}
            className="h-[3rem] w-full max-w-[21rem]  bg-transparent border border-neutral-500 text-neutral-500 hover:text-[#0e0e0e] hover:border-[#0e0e0e] font-semibold rounded-lg"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
