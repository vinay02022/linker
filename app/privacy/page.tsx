import type { Metadata } from "next"
import { Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Linkkr",
  description: "Linkkr Privacy Policy — how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:leading-relaxed">
          <p>
            Linkkr (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Account Information</h3>
          <p>
            When you create an account, we collect your name, email address, and any information provided through third-party authentication (Google, LinkedIn).
          </p>
          <h3>Platform Connections</h3>
          <p>
            When you connect social media accounts, we receive access tokens and profile information necessary to perform automation actions on your behalf. We do not store your social media passwords.
          </p>
          <h3>Usage Data</h3>
          <p>
            We automatically collect information about how you interact with our platform, including pages visited, features used, and automation actions performed.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>To execute automation actions you configure</li>
            <li>To communicate with you about your account and updates</li>
            <li>To detect and prevent fraud, abuse, or security incidents</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul>
            <li>Service providers who help us operate our platform (hosting, analytics)</li>
            <li>Social media platforms as necessary to perform requested automations</li>
            <li>Law enforcement when required by applicable law</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit and at rest, access controls, and regular security audits to protect your data.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your account and associated data at any time by contacting us.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, contact us at privacy@linkkr.io.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes via email or through our platform.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at privacy@linkkr.io.
          </p>
        </div>
      </div>
    </main>
  )
}
