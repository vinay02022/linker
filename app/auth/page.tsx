import type { Metadata } from "next"
import { AuthForm } from "@/components/auth-form"

export const metadata: Metadata = {
  title: "Sign Up - Linkkr",
  description:
    "Create your Linkkr account and start automating your social presence across Instagram, Telegram, LinkedIn, and X.",
}

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <AuthForm />
    </main>
  )
}
