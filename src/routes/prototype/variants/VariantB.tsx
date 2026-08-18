// PROTOTYPE (W1) — Variant B: "Split Sidebar"
// Fixed identity rail on the left, scrollable content stream on the right. Red accent.
import { content } from "../data"

const ACCENT = "#dc2626"

export function VariantB() {
  return (
    <div className="min-h-dvh bg-white text-[#171717] lg:grid lg:grid-cols-[320px_1fr]">
      {/* identity rail */}
      <aside className="flex flex-col justify-between border-b border-[#171717]/10 p-8 lg:sticky lg:top-0 lg:h-dvh lg:border-b-0 lg:border-r">
        <div>
          <div
            className="h-2 w-10 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          <h1 className="mt-6 text-2xl font-bold tracking-tight">
            {content.name}
          </h1>
          <p className="mt-1 text-sm font-medium" style={{ color: ACCENT }}>
            {content.role}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-[#171717]/60">
            {content.intro}
          </p>

          <nav className="mt-10 flex flex-col gap-1">
            {content.nav.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                className="group flex items-center gap-3 py-1.5 text-sm font-medium text-[#171717]/70 hover:text-[#171717]"
              >
                <span
                  className="h-px w-4 transition-all group-hover:w-8"
                  style={{ backgroundColor: i === 0 ? ACCENT : "currentColor" }}
                />
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex gap-4 font-mono text-xs uppercase tracking-wide text-[#171717]/50">
          {content.links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#171717]">
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      {/* content stream */}
      <main className="p-8 sm:p-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-[#171717]/40">
          Projekte
        </h2>
        <div className="mt-6 space-y-4">
          {content.projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group block rounded-xl border border-[#171717]/10 p-6 transition-all hover:border-[#dc2626]/40 hover:shadow-[0_2px_20px_rgba(220,38,38,0.08)]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="font-mono text-sm text-[#171717]/40">
                  {p.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#171717]/60">{p.blurb}</p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: ACCENT }}
              >
                Ansehen →
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
