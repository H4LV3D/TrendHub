import React, { useState } from "react";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { MultiStepPasswordResetFormInputs } from "../MultiStepPasswordResetForm.interface";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import SecondaryButton from "@/components/shared/buttons/Secondary";
import PrimaryButton from "@/components/shared/buttons/Primary";

interface Props {
  register: UseFormRegister<MultiStepPasswordResetFormInputs>;
  errors: FieldErrorsImpl<MultiStepPasswordResetFormInputs>;
  isSubmitting: boolean;
}

const Step3: React.FC<Props> = ({ register, errors, isSubmitting }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1 font-semibold text-[1.5rem]">Reset Password</h1>
        <p className="text-sm">Choose a new password for your account</p>
      </div>
      <div className="grid gap-[1.5rem] w-full sm:min-w-[350px] ">
        <div className="form-container font-number text-black dark:text-white">
          <div className="w-full">
            <label
              htmlFor="password"
              className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="on"
              placeholder=""
              required
              {...register("password")}
              className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
            />
            {errors.password && (
              <p className="text-xs font-semibold">{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="form-container font-number text-black dark:text-white mb-3">
          <div className="mb-3 w-full">
            <label
              htmlFor="confirmpassword"
              className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
            >
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="on"
              placeholder=""
              required
              {...register("confirmPassword")}
              className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border hover:border-neutral-500 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
            />
            {errors.confirmPassword && (
              <p className="text-xs font-semibold">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="grid place-items-center mb-[1.25rem]">
          <PrimaryButton
            loading={isSubmitting}
            text="Submit"
            type="submit"
            action={() => {}}
          />
        </div>
        <div className="grid place-items-center">
          <SecondaryButton text="Login" link="/login" />
        </div>
      </div>
    </>
  );
};

export default Step3;
