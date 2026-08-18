import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { education } from "@/content/education"
import { SectionHeading } from "./SectionHeading"

export function Education() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section id="education" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="03">{t("nav.education")}</SectionHeading>

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
  )
}
