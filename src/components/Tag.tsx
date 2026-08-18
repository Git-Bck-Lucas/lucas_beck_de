import type { ReactNode } from "react"

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
      {children}
    </span>
  )
}
