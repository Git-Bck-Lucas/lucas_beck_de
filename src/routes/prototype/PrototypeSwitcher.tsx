// PROTOTYPE (W1) — floating variant switcher. Throwaway; hidden in prod builds.
import { useEffect } from "react"

type Props = {
  keys: string[]
  labels: Record<string, string>
  current: string
  onChange: (key: string) => void
}

export function PrototypeSwitcher({ keys, labels, current, onChange }: Props) {
  const idx = Math.max(0, keys.indexOf(current))

  const go = (delta: number) => {
    const next = keys[(idx + delta + keys.length) % keys.length]
    onChange(next)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        (el as HTMLElement | null)?.isContentEditable
      ) {
        return
      }
      if (e.key === "ArrowLeft") go(-1)
      if (e.key === "ArrowRight") go(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-900/95 px-1.5 py-1.5 text-white shadow-2xl backdrop-blur">
        <button
          onClick={() => go(-1)}
          aria-label="Vorherige Variante"
          className="grid h-8 w-8 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          ←
        </button>
        <span className="min-w-[180px] px-2 text-center text-sm font-medium tabular-nums">
          <span className="text-orange-400">{current}</span>
          <span className="text-white/40"> · </span>
          {labels[current]}
        </span>
        <button
          onClick={() => go(1)}
          aria-label="Nächste Variante"
          className="grid h-8 w-8 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
        >
          →
        </button>
      </div>
      <div className="mt-1 text-center text-[10px] uppercase tracking-widest text-white/30">
        Prototyp · ← → zum Wechseln
      </div>
    </div>
  )
}
