import {
  ArrowRight,
  Check,
  GitBranch,
  MessageSquare,
  Rocket,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Plan",
    description:
      "Turn ideas into projects, issues and focused sprints with clear ownership.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss",
    description:
      "Keep decisions and conversations connected to the work they belong to.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Build",
    description:
      "Connect issues to branches, commits and pull requests as work happens.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Ship",
    description:
      "Know what is ready, what is blocked and what needs attention before release.",
  },
];

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium text-primary">
              The Relay workflow
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              From the first idea to the final release.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Work should not disappear between tools. Relay keeps your
              team&apos;s context connected across planning, conversations,
              development and delivery.
            </p>
          </div>
        </div>

        {/* Main workflow */}
        <div className="mt-20">
          {/* Desktop connecting line */}
          <div className="relative hidden lg:block">
            <div className="absolute left-[6%] right-[6%] top-7 h-px bg-border" />

            <div className="absolute left-[6%] top-7 h-px w-[29%] bg-primary" />
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.04]"
                >
                  {/* Number + icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-medium text-muted-foreground">
                      {step.number}
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Check className="size-3.5 text-primary" />

                    Connected in Relay

                    {index < steps.length - 1 && (
                      <ArrowRight className="ml-auto hidden size-3.5 lg:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-muted/30">
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">
            <div>
              <p className="text-sm font-semibold">
                Everything stays connected.
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                One issue can carry its context from planning all the way to
                production.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md border border-border bg-card">
                <Target className="size-3.5 text-primary" />
              </div>

              <div className="h-px w-5 bg-border" />

              <div className="flex size-7 items-center justify-center rounded-md border border-border bg-card">
                <MessageSquare className="size-3.5 text-primary" />
              </div>

              <div className="h-px w-5 bg-border" />

              <div className="flex size-7 items-center justify-center rounded-md border border-border bg-card">
                <GitBranch className="size-3.5 text-primary" />
              </div>

              <div className="h-px w-5 bg-border" />

              <div className="flex size-7 items-center justify-center rounded-md border border-border bg-card">
                <Rocket className="size-3.5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}