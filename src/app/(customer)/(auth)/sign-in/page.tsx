"use client";
import { ActionResult } from "@/types";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { signIn } from "../lib/actions";
import Link from "next/link";

const initialFormState: ActionResult = {
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white cursor-pointer">
      {pending ? "Loading..." : "Sign In to My Account"}
    </button>
  );
}

export default function SignInPage() {
  const [state, formAction] = useFormState(signIn, initialFormState);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div id="signin" className="bg-[#EFF3FA] min-h-screen pt-[30px] pb-[50px] flex flex-col px-8">
      <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
        <form action={formAction} className="w-[500px] bg-white p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#E5E5E5]">
          {/* <div className="flex justify-center">
            <img src="/assets/logos/logo-black.svg" alt="logo" />
          </div> */}
          <h1 className="font-bold text-2xl leading-[34px]">Sign In</h1>
          {state.error !== "" && (
            <div className="border border-red-300 text-red-500 rounded p-3">
              <h4 className="font-semibold">Error</h4>
              <p className="text-sm">{state.error}</p>
            </div>
          )}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/sms.svg" alt="icon" />
            </div>
            <input type="email" id="" name="email" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your email address" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/lock.svg" alt="icon" />
              </div>
              <input
                type={`${isVisible ? "text" : "password"}`}
                id="password"
                name="password"
                className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
                placeholder="Write your password"
              />
              <button
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
                type="button"
                className="reveal-password cursor-pointer flex shrink-0">
                <img src="/assets/icons/eye.svg" alt="icon" />
              </button>
            </div>
            <button className="text-sm text-[#616369] underline w-fit mr-0 ml-auto disabled:cursor-not-allowed" disabled>
              Forgot Password
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <SubmitButton />
            <Link href="/sign-up" className="p-[12px_24px] bg-[#EFF3FA] rounded-full text-center font-semibold border border-white">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
