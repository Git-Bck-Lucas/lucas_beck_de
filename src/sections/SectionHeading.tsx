import type { ReactNode } from "react"

export function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs font-medium tracking-[0.2em] text-primary">{index}</span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
        <span className="text-primary">.</span>
      </h2>
    </div>
  )
}
