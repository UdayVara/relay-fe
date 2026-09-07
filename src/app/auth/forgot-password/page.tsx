import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="text-center">
        <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-xl border bg-card shadow-sm">
          <Mail className="size-5 text-primary" />
        </div>

        <h1 className="text-3xl font-semibold tracking-[-0.045em]">
          Forgot your password?
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Enter your email and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      <form className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            className="h-11"
          />
        </div>

        <Button
          type="submit"
          className="h-11 w-full"
        >
          Send reset link
        </Button>
      </form>

      <div className="mt-6 flex justify-center">
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to sign in
        </Link>
      </div>
    </>
  );
}