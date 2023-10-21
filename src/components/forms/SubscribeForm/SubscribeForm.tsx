"use client";
import React, { useState } from "react";
import Input from "@/components/shared/Input/Input";
import PrimaryButton from "@/components/shared/buttons/Primary";

type Props = {
  setNotify: (notify: boolean) => void;
  setMessage: (message: string) => void;
};

function ForgotPasswordForm({ setNotify, setMessage }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const form = { email };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const URL = "https://moyinoluwa-portfolio.cyclic.app/subscribe";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.msg);
        setNotify(true);
        if (json.msg) {
          setMessage(json.msg);
          setLoading(false);
          setTimeout(() => {
            setNotify(false);
          }, 8000);
          setEmail("");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full sm:max-w-lg">
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
                // {...register("email")}
                className="w-full font-raleway rounded-md py-2.5 px-5 font-light text-neutral-600 text-base focus:text-black focus:border-black dark:text-neutral-400 dark:focus:text-neutral-300 bg-transparent border border-neutral-300 hover:border-neutral-700 dark:border-neutral-800 focus:outline-none dark:focus:border-neutral-700 placeholder-neutral-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <PrimaryButton
              action={() => {}}
              loading={loading}
              text="Subscribe"
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
