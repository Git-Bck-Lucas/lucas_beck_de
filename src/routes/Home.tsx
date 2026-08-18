import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { site } from "@/content/site"
import { projects } from "@/content/projects"
import { Tag } from "@/components/Tag"

export function Home() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* asymmetric hero (W1 variant F) */}
      <section className="relative grid gap-8 sm:grid-cols-12">
        <div className="sm:col-span-7">
          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-primary">
            {pick(site.role, lang)} · {pick(site.location, lang)}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {pick(site.hero.headline, lang)}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {t("home.aboutCta")}
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent"
            >
              {t("home.allProjects")}
            </Link>
          </div>
        </div>
        <div className="sm:col-span-5 sm:pt-2">
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            {pick(site.hero.intro, lang)}
          </p>
          <dl className="mt-8 space-y-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
            {site.socials.map((s) => (
              <div key={s.label} className="flex justify-between border-b border-border pb-2">
                <dt>{s.label}</dt>
                <dd>
                  <a href={s.href} className="text-foreground/75 hover:text-primary">
                    ↗
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* project teaser with ghost numbers */}
      <section>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-primary">01</span>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t("home.selectedProjects")}
          </h2>
        </div>

        <ul className="mt-6">
          {projects.map((p, i) => (
            <li key={p.title}>
              <Link
                to="/projects"
                className="group relative flex items-center gap-6 border-t border-border py-8 last:border-b"
              >
                <span className="w-16 shrink-0 text-5xl font-bold tabular-nums text-foreground/[0.08] transition-colors duration-200 group-hover:text-primary/25 sm:w-24 sm:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
                    {pick(p.tagline, lang)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
                <span className="hidden font-mono text-sm text-muted-foreground sm:block">
                  {p.year}
                </span>
                <span className="text-xl text-primary transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted-foreground/70">
          {t("projects.moreSoon")}
        </p>
      </section>
    </div>
  )
}
