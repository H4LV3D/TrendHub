"use client";
import React, { useState } from "react";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type Props = {
  setNotify: (notify: boolean) => void;
  setMessage: (message: string) => void;
  setForm: (form: string) => void;
};

function ForgotPasswordForm({ setNotify, setMessage, setForm }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const form = { email };

  const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().email().required(),
  });

  type ForgotPasswordInterface = {
    email: string;
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ForgotPasswordInterface>({
    resolver: yupResolver(ForgotPasswordSchema),
    mode: "all",
  });

  const onSubmit = (data: ForgotPasswordInterface) => {
    console.log(data);
  };
  return (
    <>
      <p className="text-sm sm:text-base md:text-2xl font-normal md:font-medium text-gray-700 dark:text-neutral-400 font-raleway mb-3">
        Reset Password.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:max-w-lg md:w-[350px]">
          <div className="form-container font-number text-black dark:text-white mb-3">
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
                placeholder="Email"
                required
                {...register("email")}
                className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border border-neutral-300 hover:border-neutral-700 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <PrimaryButton
              action={() => {}}
              loading={loading}
              text="Reset"
              type="submit"
            />
          </div>
          <p
            className="text-sm font-raleway text-neutral-400 hover:text-black mt-2 cursor-pointer"
            onClick={() => setForm("login")}
          >
            Remember password? Login.
          </p>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
