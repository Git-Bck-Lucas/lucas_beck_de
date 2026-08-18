// PROTOTYPE (W1) — Variant A: "Editorial Minimal"
// Typography-driven, left-aligned, generous whitespace, one restrained orange.
import { content } from "../data"

const ACCENT = "#c2410c" // burnt orange, used sparingly

export function VariantA() {
  return (
    <div className="min-h-dvh bg-[#faf9f7] text-[#1a1a1a]">
      <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6 py-16 sm:px-8">
        {/* meta row */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/50">
          <span>{content.name}</span>
          <span>{content.location}</span>
        </div>

        {/* hero */}
        <div className="mt-24 sm:mt-32">
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Data & AI
            <br />
            <span style={{ color: ACCENT }}>Engineer.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1a1a1a]/70">
            {content.intro}
          </p>
        </div>

        {/* selected work */}
        <div className="mt-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[#1a1a1a]/40">
            Ausgewählte Arbeiten
          </h2>
          <ul className="mt-4 divide-y divide-[#1a1a1a]/10 border-t border-[#1a1a1a]/10">
            {content.projects.map((p) => (
              <li key={p.title}>
                <a
                  href="#"
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="text-xl font-medium transition-colors group-hover:text-[#c2410c]">
                    {p.title}
                  </span>
                  <span className="hidden flex-1 truncate text-sm text-[#1a1a1a]/50 sm:block">
                    {p.blurb}
                  </span>
                  <span className="font-mono text-sm text-[#1a1a1a]/40">
                    {p.year}
                  </span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: ACCENT }}
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* footer links */}
        <div className="mt-auto flex flex-wrap gap-6 pt-20 font-mono text-sm">
          {content.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#1a1a1a]/60 underline-offset-4 hover:text-[#1a1a1a] hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
