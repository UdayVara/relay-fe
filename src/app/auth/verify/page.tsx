"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import authService from "@/services/auth.service";

import {
  verifyOtpSchema,
  type VerifyOtpFormValues,
} from "./_schema/verifySchema";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (data: VerifyOtpFormValues) => {
    setServerError(null);
    setSuccessMessage(null);

    if (!email) {
      setServerError("Email is missing. Please go back and try again.");
      return;
    }

    try {
      const response = await authService.verifyOtp({
        email,
        otp: data.otp,
      });

      if (
        !response ||
        (response.status !== 200 && response.status !== 201)
      ) {
        throw new Error(
          response?.data?.message ?? "OTP verification failed"
        );
      }

      setSuccessMessage("Email verified successfully.");

      router.push("/auth/login");
    } catch (error) {
      console.error("OTP verification error:", error);

      setServerError(
        error instanceof Error
          ? error.message
          : "Invalid or expired OTP. Please try again."
      );
    }
  };

  const handleResendOtp = async () => {
    setServerError(null);
    setSuccessMessage(null);

    if (!email) {
      setServerError("Email is missing. Please go back and try again.");
      return;
    }

    try {
      const response = await authService.resendOtp({
        email,
      });

      if (
        !response ||
        (response.status !== 200 && response.status !== 201)
      ) {
        throw new Error(
          response?.data?.message ?? "Failed to resend OTP"
        );
      }

      setSuccessMessage("A new OTP has been sent to your email.");
    } catch (error) {
      console.error("Resend OTP error:", error);

      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to resend OTP. Please try again."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-[-0.045em]">
          Verify your email
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          We&apos;ve sent a 6-digit verification code to
        </p>

        {email && (
          <p className="mt-1 text-sm font-medium">
            {email}
          </p>
        )}
      </div>

      <div className="mt-8 space-y-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* OTP */}
          <div className="space-y-2">
            <Label htmlFor="otp">Verification code</Label>

            <Input
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              className="h-11 text-center text-lg tracking-[0.4em]"
              {...register("otp")}
            />

            {errors.otp && (
              <p className="text-sm text-destructive">
                {errors.otp.message}
              </p>
            )}
          </div>

          {/* Server Error */}
          {serverError && (
            <p
              role="alert"
              className="text-sm text-destructive"
            >
              {serverError}
            </p>
          )}

          {/* Success */}
          {successMessage && (
            <p
              role="status"
              className="text-sm text-green-600"
            >
              {successMessage}
            </p>
          )}

          {/* Verify */}
          <Button
            type="submit"
            className="h-11 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify email"}
          </Button>
        </form>

        {/* Resend */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the code?
          </p>

          <Button
            type="button"
            variant="link"
            className="px-0"
            onClick={handleResendOtp}
            disabled={isSubmitting}
          >
            Resend OTP
          </Button>
        </div>

        {/* Back to Login */}
        <p className="text-center text-sm text-muted-foreground">
          Already verified?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
