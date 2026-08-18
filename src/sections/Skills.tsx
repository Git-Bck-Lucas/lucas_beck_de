import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { skillGroups, spokenLanguages } from "@/content/education"
import { Tag } from "@/components/Tag"
import { SectionHeading } from "./SectionHeading"

export function Skills() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section id="skills" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="04">{t("nav.skills")}</SectionHeading>

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
  )
}
