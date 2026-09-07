import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function RelayLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex size-7 items-center justify-center rounded-[8px] bg-primary text-primary-foreground shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-3.5"
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

      <span className="text-[15px] font-semibold tracking-[-0.03em]">
        Relay
      </span>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Relay home"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <RelayLogo />
        </Link>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          <Link
            href="#product"
            className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Product
          </Link>

          <Link
            href="#workflow"
            className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Workflow
          </Link>

          <Link
            href="#about"
            className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/auth/login"
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/auth/signup"
            className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-primary/90 hover:shadow-md"
          >
            Get started

            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}