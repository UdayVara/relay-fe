import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  GitBranch,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

function RelayLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.5" fill="currentColor" />
          <circle cx="18" cy="12" r="2.5" fill="currentColor" />
          <circle cx="6" cy="18" r="2.5" fill="currentColor" />

          <path
            d="M8 7.2L15.8 11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          <path
            d="M8 16.8L15.8 13"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className="text-xl font-semibold tracking-tight">relay</span>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: "Plan work",
    description:
      "Turn ideas into projects, issues and sprints without losing the bigger picture.",
  },
  {
    icon: MessageSquare,
    title: "Discuss work",
    description:
      "Keep conversations connected to the issues and projects they belong to.",
  },
  {
    icon: GitBranch,
    title: "Build together",
    description:
      "Connect your development workflow with issues, pull requests and commits.",
  },
  {
    icon: Rocket,
    title: "Ship with confidence",
    description:
      "See what's ready, what's blocked and what needs attention before release.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Plan",
    description: "Projects, issues and sprints",
  },
  {
    number: "02",
    title: "Discuss",
    description: "Team conversations and decisions",
  },
  {
    number: "03",
    title: "Build",
    description: "Code, pull requests and reviews",
  },
  {
    number: "04",
    title: "Ship",
    description: "Deployments and project progress",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" aria-label="Relay home">
            <RelayLogo />
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
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
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
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="product"
        className="relative overflow-hidden border-b border-border"
      >
        {/* subtle background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 75%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-primary" />
              A workspace built for modern teams
            </div>

            <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Move work
              <br />
              <span className="text-primary">forward.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg">
              Relay brings projects, issues, conversations and development
              workflows together in one focused workspace.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Start building
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#product-preview"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-medium transition-colors hover:bg-accent"
              >
                Explore Relay
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* HERO PRODUCT PREVIEW */}
          <div
            id="product-preview"
            className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5"
          >
            {/* window header */}
            <div className="flex h-11 items-center justify-between border-b border-border px-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
              </div>

              <div className="hidden text-xs text-muted-foreground sm:block">
                relay / workspace
              </div>

              <div className="size-5" />
            </div>

            <div className="grid min-h-[480px] grid-cols-[180px_1fr]">
              {/* sidebar */}
              <aside className="hidden border-r border-border bg-muted/30 p-4 sm:block">
                <div className="mb-7 flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground">
                    <Zap className="size-3.5" />
                  </div>
                  <span className="text-sm font-semibold">relay</span>
                </div>

                <div className="space-y-1">
                  {[
                    "Overview",
                    "Inbox",
                    "Issues",
                    "Projects",
                    "Sprints",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-md px-2.5 py-2 text-xs ${
                        index === 0
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="mb-2 px-2.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Teams
                  </p>

                  <div className="space-y-1">
                    <div className="px-2.5 py-2 text-xs text-muted-foreground">
                      Backend
                    </div>
                    <div className="px-2.5 py-2 text-xs text-muted-foreground">
                      Frontend
                    </div>
                    <div className="px-2.5 py-2 text-xs text-muted-foreground">
                      Design
                    </div>
                  </div>
                </div>
              </aside>

              {/* dashboard */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Monday, September 7
                    </p>

                    <h2 className="mt-1 text-xl font-semibold tracking-tight">
                      Your workspace
                    </h2>
                  </div>

                  <div className="hidden rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground sm:block">
                    ⌘ K
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    ["24", "Open issues"],
                    ["8", "Active projects"],
                    ["72%", "Sprint progress"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border bg-background p-4"
                    >
                      <p className="text-2xl font-semibold tracking-tight">
                        {value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-border">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <div>
                      <p className="text-sm font-medium">Current sprint</p>
                      <p className="text-xs text-muted-foreground">
                        Sprint 14 · 7 days remaining
                      </p>
                    </div>

                    <span className="text-sm font-medium text-primary">
                      72%
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[72%] rounded-full bg-primary" />
                    </div>

                    <div className="mt-4 grid gap-2">
                      {[
                        ["ENG-142", "Fix payment webhook", "In progress"],
                        ["ENG-151", "Add OAuth support", "In review"],
                        ["ENG-158", "Update billing flow", "Todo"],
                      ].map(([id, title, status]) => (
                        <div
                          key={id}
                          className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-accent"
                        >
                          <span className="font-mono text-[11px] text-muted-foreground">
                            {id}
                          </span>

                          <span className="flex-1 truncate text-xs font-medium">
                            {title}
                          </span>

                          <span className="hidden text-[11px] text-muted-foreground sm:block">
                            {status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS RELAY */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-sm font-medium text-primary">What is Relay?</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                One place for the work that matters.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                Teams lose time when planning lives in one tool, conversations
                in another and development work somewhere else. Relay connects
                those pieces so everyone can see what is happening, why it
                matters and what needs to happen next.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Projects",
                  "Issues",
                  "Sprints",
                  "Team chat",
                  "GitHub",
                  "Notifications",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Everything connected</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From the first idea to the final release.
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Relay keeps every part of the workflow connected without
              turning your workspace into a collection of complicated tools.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="bg-card p-7 transition-colors hover:bg-accent/40"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-semibold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-sm font-medium text-primary">The Relay workflow</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Work moves forward, not sideways.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              Every stage connects to the next, giving your team a clear path
              from planning to shipping.
            </p>
          </div>

          <div className="relative mt-16">
            {/* connecting line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border lg:block" />

            <div className="grid gap-10 lg:grid-cols-4">
              {workflow.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="relative mx-auto flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-semibold text-primary">
                    {step.number}
                  </div>

                  <h3 className="mt-5 font-semibold">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="size-5" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built around the team, not the tool.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Give every team member the context they need without forcing
                everyone into the same workflow. Engineers, designers,
                product managers and leadership can work from the same source
                of truth.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Clear ownership and responsibilities",
                  "Real-time project activity",
                  "Connected conversations and issues",
                  "GitHub development context",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" />
                    </div>

                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm font-medium">Engineering</p>
                  <p className="text-xs text-muted-foreground">
                    8 members · 3 active projects
                  </p>
                </div>

                <div className="flex -space-x-2">
                  {["U", "R", "A", "P"].map((letter) => (
                    <div
                      key={letter}
                      className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-5">
                {[
                  ["Rahul", "Moved ENG-142 to In Review"],
                  ["Priya", "Commented on ENG-151"],
                  ["Uday", "Created ENG-158"],
                ].map(([name, action]) => (
                  <div key={name} className="flex gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                      {name[0]}
                    </div>

                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{name}</span>{" "}
                        <span className="text-muted-foreground">{action}</span>
                      </p>

                      <p className="mt-1 text-[11px] text-muted-foreground">
                        a few minutes ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-white/15">
                <Sparkles className="size-5" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Keep your team moving.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75 sm:text-base">
                Bring projects, conversations and development together in one
                workspace built for focused teams.
              </p>

              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-background/90"
                >
                  Get started with Relay
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <RelayLogo />

          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            <Link href="#product" className="hover:text-foreground">
              Product
            </Link>

            <Link href="#features" className="hover:text-foreground">
              Features
            </Link>

            <Link href="#workflow" className="hover:text-foreground">
              Workflow
            </Link>

            <Link href="/login" className="hover:text-foreground">
              Sign in
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Relay
          </p>
        </div>
      </footer>
    </main>
  );
}