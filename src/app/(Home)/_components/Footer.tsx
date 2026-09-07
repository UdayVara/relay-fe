import Link from "next/link";

function RelayMark() {
  return (
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
  );
}

const footerLinks = {
  Product: [
    {
      label: "Features",
      href: "#product",
    },
    {
      label: "Workflow",
      href: "#workflow",
    },
    {
      label: "Changelog",
      href: "/changelog",
    },
  ],

  Company: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  Resources: [
    {
      label: "Documentation",
      href: "/docs",
    },
    {
      label: "Help center",
      href: "/help",
    },
  ],
};

export function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-border bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <RelayMark />

              <span className="text-base font-semibold tracking-[-0.025em]">
                relay
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              One focused workspace for teams to plan, build and ship better
              work.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground">
                {category}
              </h3>

              <ul className="mt-5 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Relay. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>

            <Link
              href="/status"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}