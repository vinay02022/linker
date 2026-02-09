import type { Metadata } from "next"
import { Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Linkkr",
  description: "Linkkr Terms of Service — rules and guidelines for using our platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="mb-8 inline-flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-glow/10">
              <Zap className="h-3.5 w-3.5 text-glow" />
            </div>
            <span className="text-base font-semibold text-foreground">Linkkr</span>
          </a>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of Linkkr&apos;s platform, services, and website (collectively, the &quot;Service&quot;). By using the Service, you agree to be bound by these Terms.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old and capable of forming a binding contract to use Linkkr. By creating an account, you represent that you meet these requirements.
          </p>

          <h2>2. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized access.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service to violate any applicable laws or third-party platform terms of service</li>
            <li>Send spam, unsolicited messages, or engage in abusive behavior through automations</li>
            <li>Attempt to reverse-engineer, decompile, or hack the Service</li>
            <li>Use the Service to scrape, collect, or harvest personal data without consent</li>
            <li>Resell or sublicense access to the Service without our written permission</li>
          </ul>

          <h2>4. Platform Connections</h2>
          <p>
            When you connect third-party social media accounts, you authorize Linkkr to perform actions on your behalf as configured in your automation settings. You remain solely responsible for ensuring your use complies with each platform&apos;s terms of service.
          </p>

          <h2>5. Subscriptions & Billing</h2>
          <p>
            Paid plans are billed on a monthly recurring basis. You may cancel at any time; your access continues until the end of the current billing period. We reserve the right to change pricing with 30 days&apos; notice.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            Linkkr and its original content, features, and functionality are owned by Linkkr and are protected by intellectual property laws. You retain ownership of any content you create or automate through the Service.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Linkkr shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time for violations of these Terms or for any other reason at our sole discretion. You may delete your account at any time through your dashboard settings.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through the Service. Continued use after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at legal@linkkr.io.
          </p>
        </div>
      </div>
    </main>
  )
}
