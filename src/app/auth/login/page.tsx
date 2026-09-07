import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div>
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-[-0.045em]">
          Welcome back
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Sign in to continue to your Relay workspace.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {/* OAuth */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-10"
          >
            <GoogleIcon />
            Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="h-10"
          >
            <GithubIcon />
            GitHub
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <Separator className="flex-1" />

          <span className="text-xs text-muted-foreground">
            or continue with email
          </span>

          <Separator className="flex-1" />
        </div>

        {/* Form */}
        <form className="space-y-4">
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

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Password
              </Label>

              <Link
                href="/auth//forgot-password"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="h-11"
            />
          </div>

          <Button
            type="submit"
            className="h-11 w-full"
          >
            Sign in
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-foreground hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M21.35 12.27c0-.78-.07-1.54-.24-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.45h3.14c1.84-1.69 2.93-4.18 2.93-7.41Z"
      />

      <path
        fill="currentColor"
        d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.55 0-4.71-1.72-5.49-4.04H3.27v2.53A9.75 9.75 0 0 0 12 21.75Z"
      />

      <path
        fill="currentColor"
        d="M6.51 13.83a5.86 5.86 0 0 1 0-3.66V7.64H3.27a9.75 9.75 0 0 0 0 8.72l3.24-2.53Z"
      />

      <path
        fill="currentColor"
        d="M12 6.13c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.22 14.62 2.25 12 2.25a9.75 9.75 0 0 0-8.73 5.39l3.24 2.53C7.29 7.85 9.45 6.13 12 6.13Z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 fill-current"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}