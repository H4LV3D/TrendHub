import SignUpFormInput from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Interface";
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  name: keyof SignUpFormInput;
  register: UseFormRegister<SignUpFormInput>;
  validationRules?: RegisterOptions;
  error?: string;
};

function Input({ id, type, label, placeholder, name, register, error }: Props) {
  return (
    <>
      <div className="form-container font-number text-black dark:text-white mb-3">
        <div className="mb-3 w-full">
          <label
            htmlFor={id}
            className="mb-1 text-sm text-light text-neutral-500 dark:text-neutral-500 font-raleway"
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            autoComplete="on"
            placeholder={placeholder}
            required
            {...register(name)}
            className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border border-neutral-300 hover:border-neutral-700 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
          />
          {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
      </div>
    </>
  );
}

export default Input;
