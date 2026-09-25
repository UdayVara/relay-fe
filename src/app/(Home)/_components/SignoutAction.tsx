"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

interface SignOutProps {
  className?: string;
}

export default function SignOut({ className }: SignOutProps) {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);

    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleSignOut}
      disabled={loading}
      className={`
        group
        h-10
        gap-2
        rounded-lg
        px-3
        text-sm
        font-medium
        text-muted-foreground
        transition-all
        duration-200
        hover:bg-destructive/10
        hover:text-destructive
        active:scale-[0.98]
        disabled:opacity-60
        cursor-pointer
        ${className ?? ""}
      `}
    >
      <LogOut
        className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
      />

      <span>
        {loading ? "Signing out..." : "Sign out"}
      </span>
    </Button>
  );
}