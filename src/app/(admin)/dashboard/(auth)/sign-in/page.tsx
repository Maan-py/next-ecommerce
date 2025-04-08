"use client";
import { FormSignIn } from "@/app/(admin)/dashboard/(auth)/sign-in/_components/form";

export default function SignInPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <FormSignIn />
      </div>
    </div>
  );
}
