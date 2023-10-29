import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";
import Link from "next/link";
import SignUpFormInput from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Interface";
import { signUpSchema } from "@/components/forms/MultiStepSignUpForm/Step1/SignUpFormInput.Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { increaseAuthStep } from "@/store/slices/authStep/AuthStepSlice";

type Props = {};

function SignUpForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInput>({
    resolver: yupResolver(signUpSchema),
    mode: "all",
  });

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormInput> = async (
    data: SignUpFormInput
  ) => {
    console.log(data);
    dispatch(increaseAuthStep());
    // try {
    //   const URL = "https://moyinoluwa-portfolio.cyclic.app/subscribe";
    //   const response = await fetch(URL, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   });
    //   const json = await response.json();
    //   if (response.ok) {
    //     console.log(json.msg);
    //   } else {
    //     console.log("An error occurred. Please try again.");
    //   }
    // } catch (error) {
    //   console.log("Network error. Please try again later.");
    // }
  };

  return (
    <>
      <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-neutral-400 font-raleway mb-3">
        It's Easy, Sign Up.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full sm:w-[350px]">
          <Input
            id="username"
            type="text"
            label="Full Name"
            placeholder=""
            name="firstName"
            register={register}
            error={errors.firstName?.message}
          />
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
          <div className="my-2">
            <p className="text-xs text-neutral-400 font-raleway">
              By signing up, you agree to our{" "}
              <Link href="/terms">
                <span className="text-black dark:text-white">
                  Terms of Service
                </span>
              </Link>{" "}
              and{" "}
              <Link href="/privacy">
                <span className="text-black dark:text-white">
                  Privacy Policy
                </span>
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <PrimaryButton
              loading={loading}
              text="Sign Up"
              type="submit"
              action={() => {}}
            />
          </div>
          <div className="mt-2">
            <Link
              href="/login"
              className="text-sm font-raleway text-neutral-400 hover:text-black  cursor-pointer"
            >
              Already have an account? Login.
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
