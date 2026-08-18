// PROTOTYPE (W1) — Variant F: "Editorial Index"
// More creative take: slim header, asymmetric hero, oversized ghost index numbers
// on projects (magazine feel), a vertical mono side-label. One restrained orange,
// no gradient, name kept modest (lesson from rejected C).
import { content } from "../data"

const ACCENT = "#c2410c"

export function VariantF() {
  return (
    <div className="min-h-dvh bg-[#f9f8f6] text-[#17150f]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* slim header */}
        <header className="flex items-center justify-between py-7">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            {content.name}
          </div>
          <nav className="flex gap-6 font-mono text-[12px] uppercase tracking-[0.15em] text-[#17150f]/55">
            {content.nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-[#17150f]">
                {n.label}
              </a>
            ))}
          </nav>
        </header>

        {/* asymmetric hero */}
        <section className="relative grid gap-8 border-t border-[#17150f]/10 py-20 sm:grid-cols-12 sm:py-28">
          <div className="sm:col-span-7">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em]" style={{ color: ACCENT }}>
              {content.role}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Platzhalter-Headline,
              <br />
              schlicht &amp; ruhig.
            </h1>
          </div>
          <div className="sm:col-span-5 sm:pt-2">
            <p className="max-w-sm text-[15px] leading-relaxed text-[#17150f]/65">
              {content.intro}
            </p>
            <dl className="mt-8 space-y-2 font-mono text-[12px] uppercase tracking-[0.12em] text-[#17150f]/50">
              <div className="flex justify-between border-b border-[#17150f]/10 pb-2">
                <dt>Standort</dt>
                <dd className="text-[#17150f]/75">{content.location}</dd>
              </div>
              <div className="flex justify-between border-b border-[#17150f]/10 pb-2">
                <dt>Kontakt</dt>
                <dd className="flex gap-3">
                  {content.links.map((l) => (
                    <a key={l.label} href={l.href} className="text-[#17150f]/75 hover:text-[#17150f]">
                      {l.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* vertical mono side-label */}
          <span
            className="pointer-events-none absolute right-0 top-24 hidden font-mono text-[11px] uppercase tracking-[0.35em] text-[#17150f]/25 lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            Portfolio · 2026
          </span>
        </section>

        {/* indexed project list with ghost numbers */}
        <section className="pb-24">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#17150f]/45">
            Ausgewählte Projekte
          </h2>
          <ul className="mt-4">
            {content.projects.map((p, i) => (
              <li key={p.title}>
                <a
                  href="#"
                  className="group relative flex items-center gap-6 border-t border-[#17150f]/10 py-8 last:border-b"
                >
                  {/* oversized ghost number */}
                  <span className="w-20 shrink-0 text-5xl font-bold tabular-nums text-[#17150f]/[0.08] transition-colors duration-200 group-hover:text-[#c2410c]/25 sm:w-28 sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-[#c2410c] sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 truncate text-sm text-[#17150f]/55">
                      {p.blurb}
                    </p>
                  </div>
                  <span className="hidden font-mono text-sm text-[#17150f]/40 sm:block">
                    {p.year}
                  </span>
                  <span
                    className="text-xl transition-transform duration-200 group-hover:translate-x-1.5"
                    style={{ color: ACCENT }}
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
