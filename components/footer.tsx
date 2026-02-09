import { Zap } from "lucide-react"

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

const links: Record<string, FooterLink[]> = {
  Product: [
    { label: "Instagram Boom", href: "#platforms" },
    { label: "Telegram", href: "#platforms" },
    { label: "LinkedIn", href: "#platforms" },
    { label: "Twitter / X", href: "#platforms" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    {
      label: "Book a Call",
      href: "https://calendly.com/leadlinkrr",
      external: true,
    },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Status", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-glow/10">
                <Zap className="h-3.5 w-3.5 text-glow" />
              </div>
              <span className="text-base font-semibold text-foreground">
                Linkkr
              </span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Modular social automation
              <br />
              built for scale.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group}
              </h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Linkkr. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
