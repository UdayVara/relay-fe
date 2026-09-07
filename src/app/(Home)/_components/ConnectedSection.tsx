import {
  ArrowUpRight,
  GitBranch,
  MessageSquare,
  MoreHorizontal,
  Users,
} from "lucide-react";

const connections = [
  {
    icon: GitBranch,
    title: "Development",
    description:
      "Connect issues directly to branches, commits and pull requests.",
    meta: "12 pull requests",
  },
  {
    icon: MessageSquare,
    title: "Conversations",
    description:
      "Keep decisions close to the work instead of losing them in chat.",
    meta: "24 discussions",
  },
  {
    icon: Users,
    title: "Your team",
    description:
      "Give everyone a clear view of ownership, progress and what comes next.",
    meta: "18 teammates",
  },
];

export function ConnectedSection() {
  return (
    <section
      id="product"
      className="border-b border-border bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-medium text-primary">
              Everything connected
            </p>

            <h2 className="mt-3 max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Your team&apos;s context should never get lost.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Relay connects the things your team already does. Issues,
              discussions, code and people stay connected to the same piece of
              work.
            </p>
          </div>
        </div>

        {/* Main visual */}
        <div className="mt-20 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Connection map */}
          <div className="relative min-h-[440px] overflow-hidden rounded-xl border border-border bg-card">
            {/* Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 75%)",
              }}
            />

            <div className="relative flex h-full min-h-[440px] items-center justify-center">
              {/* Connecting lines */}
              <div className="absolute left-[24%] top-1/2 h-px w-[52%] bg-border" />

              <div className="absolute left-1/2 top-[25%] h-[50%] w-px bg-border" />

              {/* Center */}
              <div className="relative z-10 flex w-52 flex-col items-center rounded-xl border border-primary/20 bg-card p-5 text-center shadow-xl shadow-primary/[0.06]">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-sm font-semibold">R</span>
                </div>

                <p className="mt-4 text-sm font-semibold">
                  Fix payment webhook
                </p>

                <p className="mt-1 text-[10px] text-muted-foreground">
                  ENG-142 · In progress
                </p>

                <div className="mt-4 flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2.5 py-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />

                  <span className="text-[9px] text-muted-foreground">
                    Sprint 14
                  </span>
                </div>
              </div>

              {/* Development node */}
              <div className="absolute left-[8%] top-1/2 -translate-y-1/2 rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-accent">
                    <GitBranch className="size-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium">Development</p>
                    <p className="text-[9px] text-muted-foreground">
                      3 PRs linked
                    </p>
                  </div>
                </div>
              </div>

              {/* Discussion node */}
              <div className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-accent">
                    <MessageSquare className="size-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium">Discussion</p>
                    <p className="text-[9px] text-muted-foreground">
                      4 replies
                    </p>
                  </div>
                </div>
              </div>

              {/* Team node */}
              <div className="absolute left-1/2 top-[10%] -translate-x-1/2 rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-md bg-accent">
                    <Users className="size-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium">Engineering</p>
                    <p className="text-[9px] text-muted-foreground">
                      6 members
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card px-3 py-2 shadow-sm">
                <span className="size-1.5 rounded-full bg-primary" />

                <span className="text-[9px] text-muted-foreground">
                  Context stays with the work
                </span>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4">
            {connections.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.04]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-accent">
                      <Icon className="size-4 text-primary" />
                    </div>

                    <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-5 text-sm font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                    <span className="size-1.5 rounded-full bg-primary/60" />

                    <span className="text-[9px] text-muted-foreground">
                      {item.meta}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small statement */}
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-border bg-card px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <span className="text-xs font-semibold">R</span>
            </div>

            <div>
              <p className="text-xs font-medium">
                One source of truth.
              </p>

              <p className="mt-0.5 text-[10px] text-muted-foreground">
                Less switching. Less searching. More shipping.
              </p>
            </div>
          </div>

          <MoreHorizontal className="hidden size-4 text-muted-foreground sm:block" />
        </div>
      </div>
    </section>
  );
}