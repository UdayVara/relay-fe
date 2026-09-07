import Link from "next/link";
import {
  ArrowRight,
  Check,
  Command,
  GitBranch,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Target,
} from "lucide-react";

function RelayMiniLogo() {
  return (
    <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
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
  );
}

function Avatar({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={`flex size-7 items-center justify-center rounded-full border-2 border-card bg-muted text-[9px] font-semibold text-muted-foreground ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="product"
      className="relative min-h-svh overflow-hidden border-b border-border"
    >
      {/* Very subtle background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Vertically centered content */}
      <div className="relative mx-auto flex min-h-svh w-full max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* ─────────────────────────
              LEFT — COPY
          ───────────────────────── */}

          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" />
              The workspace for modern teams
            </div>

            {/* Heading */}
            <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.4rem]">
              Work moves
              <br />
              <span className="text-primary">forward here.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Relay brings projects, issues, team conversations and development
              together in one focused workspace.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/signup"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Start for free
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#workflow"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-accent"
              >
                See how it works
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="size-3.5 text-primary" />
                No credit card
              </span>

              <span className="h-3 w-px bg-border" />

              <span>Free for small teams</span>
            </div>
          </div>

          {/* ─────────────────────────
              RIGHT — PRODUCT PREVIEW
          ───────────────────────── */}

          <div className="relative">
            {/* Subtle depth behind product */}
            <div
              className="absolute -inset-6 rounded-3xl bg-primary/[0.035] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_80px_-30px_rgba(0,0,0,0.25)]">
              {/* App header */}
              <div className="flex h-11 items-center border-b border-border bg-muted/20 px-4">
                <div className="flex items-center gap-2">
                  <RelayMiniLogo />

                  <span className="text-xs font-semibold">Acme</span>
                </div>

                <div className="mx-auto hidden items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-[10px] text-muted-foreground sm:flex">
                  <Command className="size-3" />K
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden -space-x-2 sm:flex">
                    <Avatar>U</Avatar>
                    <Avatar>R</Avatar>
                    <Avatar>A</Avatar>
                  </div>

                  <MoreHorizontal className="size-4 text-muted-foreground" />
                </div>
              </div>

              <div className="grid min-h-[430px] grid-cols-[150px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-border bg-muted/10 p-3 sm:block">
                  <div className="mb-5 px-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Workspace
                  </div>

                  <div className="space-y-0.5">
                    {["Overview", "Inbox", "Issues", "Projects", "Sprints"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 rounded-md px-2 py-2 text-[10px] ${
                            index === 2
                              ? "bg-accent font-medium text-accent-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="size-1.5 rounded-full bg-current opacity-60" />
                          {item}
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-7">
                    <div className="mb-2 px-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Teams
                    </div>

                    <div className="space-y-0.5">
                      {["Engineering", "Design", "Product"].map((item) => (
                        <div
                          key={item}
                          className="rounded-md px-2 py-2 text-[10px] text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-border pt-4">
                    <div className="flex items-center gap-2 px-2 text-[10px] text-muted-foreground">
                      <Plus className="size-3" />
                      Add team
                    </div>
                  </div>
                </aside>

                {/* Main content */}
                <div className="min-w-0 p-5 sm:p-6">
                  {/* Page heading */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground">
                          Engineering
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                          /
                        </span>

                        <span className="text-[10px] text-muted-foreground">
                          Issues
                        </span>
                      </div>

                      <h2 className="mt-1 text-lg font-semibold tracking-tight">
                        Active issues
                      </h2>
                    </div>

                    <button className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground">
                      <Plus className="size-4" />
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="mt-5 flex items-center gap-2">
                    <div className="rounded-md bg-primary px-2.5 py-1.5 text-[9px] font-medium text-primary-foreground">
                      All issues
                    </div>

                    <div className="rounded-md px-2.5 py-1.5 text-[9px] text-muted-foreground">
                      Assigned to me
                    </div>

                    <div className="rounded-md px-2.5 py-1.5 text-[9px] text-muted-foreground">
                      Recent
                    </div>
                  </div>

                  {/* Issue list */}
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    {[
                      {
                        id: "ENG-142",
                        title: "Fix payment webhook failures",
                        status: "In progress",
                        type: "blue",
                      },
                      {
                        id: "ENG-151",
                        title: "Add OAuth support",
                        status: "In review",
                        type: "purple",
                      },
                      {
                        id: "ENG-158",
                        title: "Update billing flow",
                        status: "Todo",
                        type: "gray",
                      },
                      {
                        id: "ENG-161",
                        title: "Improve API error handling",
                        status: "Todo",
                        type: "gray",
                      },
                    ].map((issue, index) => (
                      <div
                        key={issue.id}
                        className={`group flex items-center gap-3 px-3 py-3 transition-colors hover:bg-accent ${
                          index !== 0 ? "border-t border-border" : ""
                        }`}
                      >
                        <div
                          className={`size-2 rounded-full ${
                            issue.type === "blue"
                              ? "bg-blue-500"
                              : issue.type === "purple"
                                ? "bg-primary"
                                : "bg-muted-foreground/40"
                          }`}
                        />

                        <span className="shrink-0 font-mono text-[9px] text-muted-foreground">
                          {issue.id}
                        </span>

                        <span className="min-w-0 flex-1 truncate text-[10px] font-medium">
                          {issue.title}
                        </span>

                        <span className="hidden text-[9px] text-muted-foreground md:block">
                          {issue.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom cards */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border bg-background p-3.5">
                      <div className="flex items-center gap-2">
                        <Target className="size-3.5 text-primary" />

                        <span className="text-[9px] font-medium">
                          Sprint progress
                        </span>
                      </div>

                      <div className="mt-3 flex items-end justify-between">
                        <span className="text-lg font-semibold">72%</span>

                        <span className="text-[8px] text-muted-foreground">
                          18 / 25
                        </span>
                      </div>

                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[72%] rounded-full bg-primary" />
                      </div>
                    </div>

                    <div className="rounded-lg border border-border bg-background p-3.5">
                      <div className="flex items-center gap-2">
                        <GitBranch className="size-3.5 text-primary" />

                        <span className="text-[9px] font-medium">
                          Development
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <Avatar>U</Avatar>
                          <Avatar>R</Avatar>
                          <Avatar>A</Avatar>
                        </div>

                        <span className="text-[8px] text-muted-foreground">
                          3 PRs active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating activity card */}
            <div className="absolute -bottom-5 -left-5 hidden w-56 rounded-lg border border-border bg-card p-3 shadow-xl lg:block">
              <div className="flex items-start gap-2.5">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MessageSquare className="size-3.5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-medium">New discussion</p>

                  <p className="mt-0.5 truncate text-[9px] text-muted-foreground">
                    Should we ship the billing flow?
                  </p>

                  <p className="mt-1.5 text-[8px] text-muted-foreground">
                    4 replies · Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
