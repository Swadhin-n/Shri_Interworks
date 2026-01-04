import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl p-6 transition-all duration-300 ${
        hover
          ? "hover:bg-white/15 dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 hover:-translate-y-2 cursor-pointer"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
