import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-primary px-6 py-20 text-center sm:px-12 lg:px-20">
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 85%)",
            }}
          />

          {/* Soft center glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex size-10 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10">
              <span className="text-sm font-semibold text-primary-foreground">
                R
              </span>
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to move work forward?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-primary-foreground/70 sm:text-base">
              Bring your projects, conversations and development together.
              Give your team one place to plan, build and ship.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex h-11 items-center gap-2 rounded-md bg-background px-6 text-sm font-medium text-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-background/90"
              >
                Start for free

                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-md border border-primary-foreground/20 px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-primary-foreground/60">
              <span className="flex items-center gap-1.5">
                <Check className="size-3.5" />
                No credit card
              </span>

              <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />

              <span>Free for small teams</span>

              <span className="hidden h-3 w-px bg-primary-foreground/20 sm:block" />

              <span>Set up in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}