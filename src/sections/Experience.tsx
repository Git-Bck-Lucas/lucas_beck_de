import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { useLang, pick } from "@/i18n/useLang"
import { experience } from "@/content/experience"
import { Tag } from "@/components/Tag"
import { SectionHeading } from "./SectionHeading"

export function Experience() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="02">{t("nav.experience")}</SectionHeading>

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
    </section>
  )
}
