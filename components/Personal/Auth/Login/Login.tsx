"use client";
import React from "react";
import Image from "next/image";
import { doctor, IvantageLogo } from "@/lib/constants/image";
import Link from "next/link";
import { InputField } from "@/components/ui/Forms/InputField";
import { URLS } from "@/lib/constants/url";
import Button from "@/components/ui/Button/Button";
import { PasswordInput } from "@/components/ui/Forms/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/authschema";
import { useForm } from "react-hook-form";
import { useAuth } from "@/lib/hooks/Personal/Auth/Auth";

export default function Login() {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = (data:any) => {
    login.mutate(data)
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid lg:grid-cols-2 h-full">
        <div className="relative hidden lg:block h-full bg-gradient-to-br from-blue-50 to-primary-04">
          <Image
            src={doctor}
            alt="Doctor illustration"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>

        <div className="flex items-center justify-center p-8 bg-white h-full overflow-y-auto">
          <div className="w-full max-w-md">
            <div className="flex justify-end mb-4">
              <Image src={IvantageLogo} alt="Logo" />
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
              <p className="text-gray-600">
                Log in to iVantage Personal Banking
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

              <div>
                <InputField
                  label="Account Number"
                  id="accountNumber"
                  placeholder="Enter Account number"
                  error={errors.accountNumber?.message}
                  {...register("accountNumber")}
                />
              </div>

              <div>
                <PasswordInput
                  label="Password"
                  id="password"
                  placeholder="Enter Password"
                  error={errors.password?.message}
                  {...register("password")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    // {...register("rememberMe")}
                    className="w-4 h-4 text-primary-01 border-gray-300 rounded focus:ring-primary-01"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary-01 hover:text-primary-02"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary-01 hover:bg-primary-02 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                disabled={isSubmitting || login.isPending}
              >
                {isSubmitting || login.isPending ? "Logging in..." : "Log in"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    href={URLS.AUTH.PERSONAL.REGISTER}
                    className="text-primary-01 hover:text-primary-02 font-medium"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}