import { useTranslation } from "react-i18next"

import { site } from "@/content/site"
import { SectionHeading } from "./SectionHeading"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-16 sm:py-24">
      <SectionHeading index="04">{t("nav.contact")}</SectionHeading>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        <a
          href={`mailto:${site.contact.email}`}
          className="font-mono text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {site.contact.email}
        </a>
        {site.socials
          .filter((s) => s.href.startsWith("http"))
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-sm text-muted-foreground uppercase tracking-wide hover:text-primary"
            >
              {s.label} ↗
            </a>
          ))}
      </div>
    </section>
  )
}
