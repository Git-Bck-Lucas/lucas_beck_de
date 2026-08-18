import { useTranslation } from "react-i18next"

import { SectionHeading } from "./SectionHeading"

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="01">{t("nav.about")}</SectionHeading>
      {/* Personal text intentionally left blank — Lucas writes this. */}
      <p className="max-w-2xl font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground/50">
        {t("common.placeholder")}
      </p>
    </section>
  )
}
