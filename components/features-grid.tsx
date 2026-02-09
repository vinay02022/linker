"use client"

import { motion } from "framer-motion"
import { Cpu, Layers, ShieldCheck, Puzzle } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Automation Engine",
    description:
      "Event-driven core that processes thousands of actions per second with intelligent rate-limiting and queue management.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Horizontally scalable infrastructure designed for enterprise-grade throughput. Scale from 10 to 10M operations seamlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First",
    description:
      "Built-in compliance layer with platform-aware rate limits, anti-detection patterns, and full audit logging.",
  },
  {
    icon: Puzzle,
    title: "Modular System",
    description:
      "Plug-and-play platform modules. Add new social networks without touching the core. Each module is independently deployable.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

export function FeaturesGrid() {
  return (
    <section className="relative px-6 py-24">
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
            Infrastructure
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built different. Built to last.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Engineering-grade foundations that power every module in the Linkkr
            ecosystem.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative flex gap-4 rounded-xl border border-transparent p-5 transition-all duration-300 hover:border-border/60 hover:bg-card/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/60 text-muted-foreground transition-colors group-hover:border-glow/20 group-hover:text-glow">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
