import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { projects } from "@/content/projects"
import { Tag } from "@/components/Tag"

export function Projects() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div className="space-y-10">
      <header>
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-primary">
          {t("projects.title")}
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>
                {p.flagship && (
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-primary">
                    {t("projects.flagship")}
                  </span>
                )}
              </div>
              <span className="font-mono text-sm text-muted-foreground">{p.year}</span>
            </div>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/85">
              {pick(p.tagline, lang)}
            </p>
            {p.description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {pick(p.description, lang)}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            {p.links && (
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                  >
                    {pick(l.label, lang)} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground/70">
        {t("projects.moreSoon")}
      </p>
    </div>
  )
}
