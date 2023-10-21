import React, { useState, useRef } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { useForm, SubmitHandler } from "react-hook-form";
import { Step2Schema } from "./Step2.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useRouter } from "next/router";
import { resendOtp, verifyEmail } from "@/utils/requests/auth";
import { useAppSelector } from "@/hooks/useAppSelector";

interface FormInputs {
  code: number;
}

const Step2: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [resendingEmail, setResendingEmail] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedEmail = useAppSelector((state) => state.authStep.selectedEmail);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormInputs>({
    resolver: yupResolver(Step2Schema),
  });

  const [otpInputs, setOtpInputs] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setLoading(true);
      const res = await verifyEmail(selectedEmail, data.code);
      router.push("/");
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        console.log("hello ");
      } else if (error.response?.data?.returnedUser?.verified === false) {
        router.push("/signup");
      } else {
        console.log(error.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    try {
      setResendingEmail(true);
      const res = await resendOtp(selectedEmail);
    } catch {
    } finally {
      setResendingEmail(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-[3.5rem]">
          <div className="rounded-xl px-4 py-8 sm:border sm:border-gray-200 sm:shadow-lg sm:shadow-gray-200 sm:px-[3.5rem]">
            <div className="mb-8">
              <h1 className="mb-4 font-semibold text-[1.25rem] text-center">
                Complete your sign up
              </h1>
              <p className="max-w-xs text-center mx-auto">
                Enter the 4-digit code that we sent to your email
              </p>
            </div>
            <div className="grid gap-[3rem] mb-8">
              <div className="w-full grid place-items-center grid-cols-4 gap-x-3">
                {otpInputs.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`otp-${index}`}
                    id={`otp-${index}`}
                    maxLength={1} // Limit input to one character
                    className="h-[4rem] w-[4rem] border rounded-lg text-[2rem] text-[#000] flex items-center justify-center pl-[1.5rem]"
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(input) => (inputRefs.current[index] = input)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-center mb-[1.25rem]">
              Didn&apos;t receive the code?{" "}
              <button
                disabled={resendingEmail}
                onClick={() => handleClick()}
                className="text-[#0043CE]"
              >
                <span>Resend</span>
              </button>
            </p>
            <div className="grid place-items-center">
              <button
                disabled={loading}
                className="h-[3.5rem] w-full max-w-[21rem] bg-[#11424C] text-white font-semibold rounded-xl"
              >
                {loading ? <ButtonLoader /> : <span>Verify Email</span>}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
