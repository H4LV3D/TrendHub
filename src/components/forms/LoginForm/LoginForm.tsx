"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SignUpFormInput from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Interface";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { updateAvatarId } from "@/store/slices/user/UserSlice";
import { useRouter } from "next/navigation";

type Props = {
  setNotify: (notify: boolean) => void;
  setMessage: (message: string) => void;
};

interface LoginForm {
  email: string;
  password: string;
}

function LoginForm({ setNotify, setMessage }: Props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    trigger,
    control,
    handleSubmit,
  } = useForm<SignUpFormInput>();

  const email = watch("email");

  useEffect(() => {
    const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isEmail.test(email)) {
      dispatch(updateAvatarId(8));
    }
  }, [email, dispatch]);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };
  return (
    <>
      <h3 className="text-lg sm:text-lg md:text-2xl font-medium text-neutral-800 dark:text-neutral-400 font-raleway mb-3">
        Welcome back, Login.
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:w-[350px]">
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder=""
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder=""
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Link
            href="/reset-password"
            className="text-sm font-raleway text-neutral-500 hover:text-black"
          >
            Forgot your password?
          </Link>
          <div className="mt-4">
            <PrimaryButton
              loading={loading}
              text="Login"
              action={() => {}}
              type="submit"
            />
          </div>
          <div className="mt-3">
            <Link
              href="/signup"
              className="text-sm font-raleway text-neutral-500 hover:text-black cursor-pointer"
            >
              Don't have an account? Sign Up.
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
