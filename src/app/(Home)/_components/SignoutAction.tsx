"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

interface SignOutProps {
  className?: string;
}

export default function SignOut({ className }: SignOutProps) {
  return (
    <Button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className={className}
    >
      Sign out
    </Button>
  );
}