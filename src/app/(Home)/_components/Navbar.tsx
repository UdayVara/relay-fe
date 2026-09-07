import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function RelayLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
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

      <span className="text-[15px] font-semibold tracking-[-0.02em]">
        Relay
      </span>
    </div>
  );
}

export function Navbar() {
  return (
   <header className="absolute inset-x-0 top-0 z-50 border-b border-border/70 bg-muted/30 backdrop-blur-sm">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
    {/* Logo */}
    <Link
      href="/"
      className="transition-opacity hover:opacity-80"
      aria-label="Relay home"
    >
      <RelayLogo />
    </Link>

    {/* Navigation */}
    <nav className="hidden items-center gap-8 md:flex">
      <Link
        href="#product"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Product
      </Link>

      <Link
        href="#workflow"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Workflow
      </Link>

      <Link
        href="#about"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        About
      </Link>
    </nav>

    {/* Actions */}
    <div className="flex items-center gap-5">
      <Link
        href="/login"
        className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        Sign in
      </Link>

      <Link
        href="/signup"
        className="group inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
      >
        Get started

        <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  </div>
</header>
  );
}