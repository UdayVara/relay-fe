import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function RelayMark() {
  return (
    <div className="flex size-8 items-center justify-center rounded-[9px] bg-primary text-primary-foreground">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="size-[18px]"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2.2" fill="currentColor" />
        <circle cx="18" cy="12" r="2.2" fill="currentColor" />
        <circle cx="6" cy="18" r="2.2" fill="currentColor" />

        <path
          d="M8 7L15.8 11"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M8 17L15.8 13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Relay home"
        >
          <RelayMark />

          <span className="text-[19px] font-semibold tracking-[-0.03em]">
            relay
          </span>
        </Link>

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

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="group inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get started
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}