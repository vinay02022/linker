"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Calendar } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with a single platform.",
    features: [
      "1 platform connection",
      "50 automated actions / month",
      "Basic analytics",
      "Community support",
    ],
    cta: "Get Started",
    ctaHref: "/auth",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$39",
    period: "/ month",
    description: "For creators and founders scaling across platforms.",
    features: [
      "All 4 platforms",
      "Unlimited automated actions",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom automation flows",
      "API access",
    ],
    cta: "Join Beta",
    ctaHref: "/auth",
    variant: "primary" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams with advanced needs and dedicated support.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA & uptime guarantee",
      "SSO & team management",
      "On-premise option",
    ],
    cta: "Book a Call",
    ctaHref: "https://calendly.com/leadlinkrr",
    variant: "secondary" as const,
    external: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="mb-24 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-glow">
            Pricing
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Start free, scale when you&apos;re ready. No hidden fees, no surprise
            charges.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 backdrop-blur-sm transition-all ${
                plan.popular
                  ? "border-glow/40 bg-card/60 shadow-lg shadow-glow/5"
                  : "border-border/60 bg-card/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-glow px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-glow" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                {...(plan.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`group flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                  plan.variant === "primary"
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border/60 bg-secondary/40 text-foreground hover:border-border hover:bg-secondary/60"
                }`}
              >
                {plan.external && <Calendar className="h-4 w-4" />}
                {plan.cta}
                {!plan.external && (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
