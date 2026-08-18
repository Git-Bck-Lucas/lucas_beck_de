// PROTOTYPE (W1) — Variant E: "Studio Rail"
// Mix of B (identity rail structure) + A (editorial restraint, big type) + D
// (mono meta labels, numbered index, status dot). One restrained orange. No gradient.
import { content } from "../data"

const ACCENT = "#c2410c"

export function VariantE() {
  return (
    <div className="min-h-dvh bg-[#faf9f7] text-[#171512] lg:grid lg:grid-cols-[340px_1fr]">
      {/* identity rail */}
      <aside className="flex flex-col justify-between border-b border-[#171512]/10 px-8 py-10 lg:sticky lg:top-0 lg:h-dvh lg:border-b-0 lg:border-r lg:py-12">
        <div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#171512]/45">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            lucas-beck.de
          </div>

          <h1 className="mt-8 text-3xl font-semibold leading-tight tracking-tight">
            {content.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-[#171512]/55">
            {content.role}
          </p>

          <p className="mt-6 max-w-[26ch] text-[15px] leading-relaxed text-[#171512]/60">
            {content.intro}
          </p>

          <nav className="mt-10 flex flex-col gap-0.5">
            {content.nav.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                className="group flex items-center gap-3 py-1.5 text-[15px] font-medium text-[#171512]/70 hover:text-[#171512]"
              >
                <span
                  className="h-px w-5 origin-left transition-all duration-200 group-hover:w-9"
                  style={{ backgroundColor: i === 0 ? ACCENT : "#171512" }}
                />
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex gap-5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#171512]/45">
          {content.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors hover:text-[#171512]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </aside>

      {/* content stream */}
      <main className="px-8 py-12 sm:px-12 lg:py-16">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm" style={{ color: ACCENT }}>
            01
          </span>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#171512]/45">
            Ausgewählte Projekte
          </h2>
        </div>

        <ul className="mt-8 border-t border-[#171512]/10">
          {content.projects.map((p, i) => (
            <li key={p.title}>
              <a
                href="#"
                className="group relative flex items-baseline gap-5 border-b border-[#171512]/10 py-7 pl-4 transition-colors hover:bg-[#171512]/[0.02] sm:gap-8 sm:pl-6"
              >
                {/* growing accent bar on hover */}
                <span
                  className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 transition-all duration-200 group-hover:h-[60%]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="w-8 font-mono text-sm text-[#171512]/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-[#c2410c]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm text-[#171512]/55">
                    {p.blurb}
                  </p>
                </div>
                <span className="hidden font-mono text-sm text-[#171512]/35 sm:block">
                  {p.year}
                </span>
                <span
                  className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: ACCENT }}
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
