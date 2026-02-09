"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <div className="mb-24 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-12 text-center backdrop-blur-sm sm:p-16"
        >
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/[0.06] blur-[80px]" />
          </div>

          <div className="relative">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-glow">
              Ready to scale?
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Start automating today
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
              Join the beta and experience the next generation of social
              automation infrastructure.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/auth"
                className="group flex items-center gap-2 rounded-xl bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all hover:opacity-90"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://calendly.com/leadlinkrr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
