"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Instagram,
  Send,
  Linkedin,
  Twitter,
  ArrowRight,
  Zap,
  Menu,
  Calendar,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const products = [
  {
    name: "Instagram Boom",
    icon: Instagram,
    badge: "Focus",
    badgeColor: "bg-glow/20 text-glow",
    description: "Primary automation engine for Instagram growth",
  },
  {
    name: "Telegram Automation",
    icon: Send,
    badge: "Live",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    description: "Early access messaging automation",
  },
  {
    name: "LinkedIn Growth",
    icon: Linkedin,
    badge: "Soon",
    badgeColor: "bg-muted text-muted-foreground",
    description: "Professional network automation",
  },
  {
    name: "Twitter / X Boost",
    icon: Twitter,
    badge: "Soon",
    badgeColor: "bg-muted text-muted-foreground",
    description: "Social reach amplification engine",
  },
]

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-border/60 bg-card/60 px-6 py-3 backdrop-blur-xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-glow/10">
            <Zap className="h-4 w-4 text-glow" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Linkkr
          </span>
        </a>

        {/* Center links — desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-xl border border-border/60 bg-card/90 p-2 shadow-2xl backdrop-blur-xl"
                >
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href="#platforms"
                      onClick={() => setDropdownOpen(false)}
                      className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary/60"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-secondary/60 transition-colors group-hover:border-glow/30 group-hover:bg-glow/10">
                        <product.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-glow" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {product.name}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${product.badgeColor}`}
                          >
                            {product.badge}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#pricing"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* CTA — always visible */}
          <a
            href="/auth"
            className="group flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-secondary/40 text-muted-foreground transition-colors hover:text-foreground md:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border/60 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-glow/10">
                    <Zap className="h-3.5 w-3.5 text-glow" />
                  </div>
                  Linkkr
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Products
                </p>
                {products.map((product) => (
                  <a
                    key={product.name}
                    href="#platforms"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    <product.icon className="h-4 w-4" />
                    <span>{product.name}</span>
                    <span
                      className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  </a>
                ))}

                <div className="my-4 h-px w-full bg-border/60" />

                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  FAQ
                </a>

                <div className="my-4 h-px w-full bg-border/60" />

                <a
                  href="https://calendly.com/leadlinkrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Call
                </a>
                <a
                  href="/auth"
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
