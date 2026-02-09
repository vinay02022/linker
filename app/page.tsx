import { FloatingNavbar } from "@/components/floating-navbar"
import { GlowBackground } from "@/components/glow-background"
import { HeroSection } from "@/components/hero-section"
import { PlatformCards } from "@/components/platform-cards"
import { FeaturesGrid } from "@/components/features-grid"
import { PricingSection } from "@/components/pricing-section"
import { MovingReviews } from "@/components/moving-reviews"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GlowBackground />
      <FloatingNavbar />
      <HeroSection />
      <PlatformCards />
      <FeaturesGrid />
      <PricingSection />
      <MovingReviews />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
