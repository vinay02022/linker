"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Which platforms does Linkkr support?",
    answer:
      "Linkkr currently supports Instagram (primary focus) and Telegram (early access). LinkedIn and Twitter/X integrations are on the roadmap and coming soon. Our modular architecture lets us add new platforms quickly.",
  },
  {
    question: "Is my account safe when using automation?",
    answer:
      "Absolutely. Linkkr is built compliance-first with rate limiting, human-like behavior patterns, and platform-specific safety guards. We follow each platform's guidelines to keep your accounts safe and in good standing.",
  },
  {
    question: "Can I try Linkkr for free?",
    answer:
      "Yes! Our Free plan gives you access to one platform with 50 automated actions per month — no credit card required. You can upgrade to Pro anytime as you scale.",
  },
  {
    question: "How does billing work?",
    answer:
      "Pro plans are billed monthly at $39/month. You can cancel anytime from your dashboard — no long-term contracts or cancellation fees. Enterprise pricing is custom based on your team's needs.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your Pro subscription at any time. Your access continues until the end of your current billing period. We don't do refunds for partial months, but you'll never be charged again after cancelling.",
  },
  {
    question: "Do you offer an API?",
    answer:
      "Yes, Pro and Enterprise plans include full API access. You can integrate Linkkr into your existing workflows, build custom automation sequences, and connect with your other tools.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Free users get community support via our Discord. Pro users receive priority email support with 24-hour response times. Enterprise customers get a dedicated account manager and custom SLA.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* Divider */}
        <div className="mb-24 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-glow">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Everything you need to know about Linkkr. Can&apos;t find what
            you&apos;re looking for?{" "}
            <a
              href="https://calendly.com/leadlinkrr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              Book a call
            </a>{" "}
            with our team.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
