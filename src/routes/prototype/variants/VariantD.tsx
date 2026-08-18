// PROTOTYPE (W1) — Variant D: "Mono Grid / Technical"
// Monospace, README/terminal feel, faint grid, a single orange used sparingly.
import { content } from "../data"

const ACCENT = "#ea580c"

export function VariantD() {
  return (
    <div className="min-h-dvh bg-[#f4f4f2] font-mono text-[#171717]">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* top line */}
        <div className="flex items-center justify-between text-xs text-[#171717]/50">
          <span>~/lucas-beck</span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2"
              style={{ backgroundColor: ACCENT }}
            />
            available for work
          </span>
        </div>

        {/* bordered grid */}
        <div className="mt-4 border border-[#171717]/20">
          {/* identity cell */}
          <div className="border-b border-[#171717]/20 p-6 sm:p-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {content.name}
            </h1>
            <p className="mt-1 text-sm">
              <span style={{ color: ACCENT }}>{"> "}</span>
              {content.role}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#171717]/70">
              {content.intro}
            </p>
          </div>

          {/* two-column meta */}
          <div className="grid sm:grid-cols-2">
            <div className="border-b border-[#171717]/20 p-6 sm:border-b-0 sm:border-r sm:p-8">
              <div className="text-xs uppercase tracking-widest text-[#171717]/40">
                Kontakt
              </div>
              <ul className="mt-3 space-y-1 text-sm">
                {content.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="hover:underline"
                      style={{ textDecorationColor: ACCENT }}
                    >
                      {l.label}
                      <span style={{ color: ACCENT }}> ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 sm:p-8">
              <div className="text-xs uppercase tracking-widest text-[#171717]/40">
                Navigation
              </div>
              <ul className="mt-3 space-y-1 text-sm">
                {content.nav.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="hover:underline">
                      <span className="text-[#171717]/40">/ </span>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* projects table */}
        <div className="mt-8 text-xs uppercase tracking-widest text-[#171717]/40">
          Projekte
        </div>
        <div className="mt-3 border border-[#171717]/20">
          {content.projects.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={
                "group flex items-baseline gap-4 p-4 text-sm hover:bg-[#171717]/[0.03] " +
                (i < content.projects.length - 1
                  ? "border-b border-[#171717]/20"
                  : "")
              }
            >
              <span className="w-10 text-[#171717]/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-bold">{p.title}</span>
              <span className="flex-1 truncate text-[#171717]/60">{p.blurb}</span>
              <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
