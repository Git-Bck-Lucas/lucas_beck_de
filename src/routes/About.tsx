import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { useLang, pick } from "@/i18n/useLang"
import { site } from "@/content/site"
import { experience } from "@/content/experience"
import { education, skillGroups, spokenLanguages } from "@/content/education"
import { Tag } from "@/components/Tag"

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{children}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-primary" />
    </div>
  )
}

export function About() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div className="space-y-24">
      {/* intro */}
      <section>
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-primary">
          {t("about.title")}
        </p>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/85">
          {pick(site.about, lang).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* experience timeline */}
      <section>
        <SectionHeading>{t("about.experience")}</SectionHeading>

        <ol className="relative">
          <div className="absolute left-3 top-1 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          {experience.map((e, i) => {
            const leftSide = i % 2 === 0
            return (
              <li key={e.company} className="relative mb-8">
                <span className="absolute left-3 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background sm:left-1/2" />
                <div
                  className={cn(
                    "ml-10 sm:ml-0 sm:w-[calc(50%-2rem)]",
                    leftSide ? "sm:mr-auto" : "sm:ml-auto"
                  )}
                >
                  <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/40">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-semibold tracking-tight">{e.company}</h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">
                        {pick(e.period, lang)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {pick(e.role, lang)}
                    </p>
                    {e.location && (
                      <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                        {pick(e.location, lang)}
                      </p>
                    )}
                    {e.bullets && (
                      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                        {pick(e.bullets, lang).map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      {/* education */}
      <section>
        <SectionHeading>{t("about.education")}</SectionHeading>
        <div className="space-y-6">
          {education.map((ed) => (
            <div
              key={ed.institution}
              className="border-t border-border pt-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h3 className="font-semibold tracking-tight">{ed.institution}</h3>
                <p className="mt-0.5 text-sm text-primary">{pick(ed.degree, lang)}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {ed.period}
                  {ed.location ? ` · ${pick(ed.location, lang)}` : ""}
                </p>
              </div>
              {ed.details && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground sm:mt-0">
                  {pick(ed.details, lang).map((d, di) => (
                    <li key={di}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* skills + languages */}
      <section>
        <SectionHeading>{t("about.skills")}</SectionHeading>
        <div className="space-y-6">
          {skillGroups.map((g) => (
            <div key={pick(g.label, lang)} className="sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {pick(g.label, lang)}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-0">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
          <div className="sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {t("about.languages")}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground sm:mt-0">
              {spokenLanguages.map((l) => (
                <span key={pick(l.label, lang)}>
                  <span className="text-foreground">{pick(l.label, lang)}</span> — {pick(l.level, lang)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
