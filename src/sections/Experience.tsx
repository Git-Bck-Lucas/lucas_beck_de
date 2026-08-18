import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { useLang, pick } from "@/i18n/useLang"
import { experience } from "@/content/experience"
import { education, skillGroups, spokenLanguages } from "@/content/education"
import { Tag } from "@/components/Tag"
import { SectionHeading } from "./SectionHeading"

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h3>
  )
}

export function Experience() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="02">{t("nav.experience")}</SectionHeading>

      {/* alternating timeline */}
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
                    <h4 className="font-semibold tracking-tight">{e.company}</h4>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {pick(e.period, lang)}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-primary">{pick(e.role, lang)}</p>
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
                  {e.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {/* education */}
      <div className="mt-16">
        <SubHeading>{t("about.education")}</SubHeading>
        <div className="mt-6 space-y-6">
          {education.map((ed) => (
            <div
              key={ed.institution}
              className="border-t border-border pt-6 sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div>
                <h4 className="font-semibold tracking-tight">{ed.institution}</h4>
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
      </div>

      {/* skills + languages */}
      <div className="mt-16">
        <SubHeading>{t("about.skills")}</SubHeading>
        <div className="mt-6 space-y-6">
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
      </div>
    </section>
  )
}
