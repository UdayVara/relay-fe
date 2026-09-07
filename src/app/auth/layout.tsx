import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function RelayLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-8 items-center justify-center rounded-[9px] bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-4"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
          <circle cx="6" cy="18" r="2" fill="currentColor" />

          <path
            d="M8 7L16 11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          <path
            d="M8 17L16 13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className="text-lg font-semibold tracking-[-0.04em]">
        relay
      </span>
    </div>
  );
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/60 bg-background/95">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="transition-opacity hover:opacity-80"
          >
            <RelayLogo />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to website
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-16">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-3xl"
        />

        <div className="relative z-10 w-full max-w-[400px]">
          {children}
        </div>
      </main>
    </div>
  );
}