"use client";
import React from "react";
import Image from "next/image";
import { IvantageLogo } from "@/lib/constants/image";
import { InputField } from "@/components/ui/Forms/InputField";
import Button from "@/components/ui/Button/Button";
import { PasswordInput } from "@/components/ui/Forms/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/personalbankingschema/authschema";
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

  const onSubmit = (data: any) => {
    login.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full blur-2xl opacity-40 animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-lg opacity-70 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-teal-200 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border-2 border-indigo-200 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-50 to-purple-100 rounded-full translate-y-12 -translate-x-12 opacity-60"></div>
          
          <div className="flex justify-center ">
            <Image src={IvantageLogo} alt="iVantage Logo" />
          </div>

      
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Access iVantage Hybrid Control Centre
            </p>
          </div>

     
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <InputField
                label="Email Address"
                id="email"
                placeholder="Enter your email address"
                error={errors.email?.message}
                {...register("email")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />

              <PasswordInput
                label="Password"
                id="password"
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            </div>

         
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                disabled={isSubmitting || login.isPending}
              >
                {isSubmitting || login.isPending ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Signing you in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}