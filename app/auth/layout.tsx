import { GlowBackground } from "@/components/glow-background"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      {children}
    </div>
  )
}
