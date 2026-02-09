"use client"

import { motion } from "framer-motion"
import { Instagram, Send, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

const platforms = [
  {
    name: "Instagram Boom",
    icon: Instagram,
    status: "Live",
    statusColor: "bg-glow/20 text-glow",
    description:
      "Primary automation engine. Engagement boosting, follower targeting, content scheduling, and story analytics.",
    borderHover: "hover:border-glow/40",
    iconHover: "group-hover:text-glow group-hover:bg-glow/10",
  },
  {
    name: "Telegram Automation",
    icon: Send,
    status: "Early Access",
    statusColor: "bg-emerald-500/20 text-emerald-400",
    description:
      "Messaging automation with smart replies, channel management, and audience growth tools built for Telegram.",
    borderHover: "hover:border-emerald-500/40",
    iconHover: "group-hover:text-emerald-400 group-hover:bg-emerald-500/10",
  },
  {
    name: "LinkedIn Growth",
    icon: Linkedin,
    status: "Coming Soon",
    statusColor: "bg-muted text-muted-foreground",
    description:
      "Professional network automation. Connection requests, content posting, and lead generation pipelines.",
    borderHover: "hover:border-border",
    iconHover: "group-hover:text-muted-foreground",
  },
  {
    name: "Twitter / X Boost",
    icon: Twitter,
    status: "Coming Soon",
    statusColor: "bg-muted text-muted-foreground",
    description:
      "Social reach amplification. Thread automation, engagement tracking, and audience analytics engine.",
    borderHover: "hover:border-border",
    iconHover: "group-hover:text-muted-foreground",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function PlatformCards() {
  return (
    <section id="platforms" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-glow">
            Platform Modules
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One engine. Multiple platforms.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Each module is purpose-built for its platform, yet they all share
            the same scalable core infrastructure.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={cardVariants}
              className={`group relative rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 ${platform.borderHover} hover:bg-card/80`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/60 text-muted-foreground transition-all duration-300 ${platform.iconHover}`}
                >
                  <platform.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-muted-foreground" />
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-semibold text-foreground">
                    {platform.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${platform.statusColor}`}
                  >
                    {platform.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
