"use client"

import { motion } from "framer-motion"

export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Primary spotlight */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-glow/[0.07] blur-[120px]"
      />

      {/* Secondary ambient glow */}
      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-glow/[0.04] blur-[100px]"
      />

      {/* Subtle bottom glow */}
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -15, 25, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-glow/[0.03] blur-[100px]"
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Top gradient beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glow/20 to-transparent" />
    </div>
  )
}
