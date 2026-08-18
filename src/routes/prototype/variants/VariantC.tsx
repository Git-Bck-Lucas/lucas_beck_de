// PROTOTYPE (W1) — Variant C: "Bold Centered Gradient"
// Dark, centered hero with a red→orange gradient. The expressive option.
import { content } from "../data"

export function VariantC() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#0a0a0a] text-white">
      {/* ambient gradient blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #dc2626 45%, transparent 70%)",
        }}
      />

      {/* top bar */}
      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-sm font-bold tracking-tight">{content.name}</span>
        <nav className="hidden gap-6 text-sm text-white/60 sm:flex">
          {content.nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* hero */}
      <main className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-white/70">
          {content.role}
        </span>
        <h1 className="mt-8 text-6xl font-bold leading-none tracking-tight sm:text-8xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(120deg, #fb923c, #dc2626)",
            }}
          >
            {content.name}
          </span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          {content.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{
              backgroundImage: "linear-gradient(120deg, #f97316, #dc2626)",
            }}
          >
            Audio DNA ansehen
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5"
          >
            Alle Projekte
          </a>
        </div>

        {/* project cards */}
        <div className="mt-24 grid w-full gap-4 pb-20 sm:grid-cols-3">
          {content.projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all hover:border-orange-500/40 hover:bg-white/[0.06]"
            >
              <div className="font-mono text-xs text-orange-400/80">{p.year}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/50">{p.blurb}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
