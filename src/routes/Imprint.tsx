import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { site } from "@/content/site"

export function Imprint() {
  const { t } = useTranslation()
  const lang = useLang()
  const { imprint, contact } = site

  return (
    <div className="max-w-2xl space-y-10">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("imprint.title")}</h1>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("imprint.accordingTo")}
        </p>
      </header>

      <section className="space-y-1 text-[15px] leading-relaxed">
        <p className="font-semibold">{imprint.name}</p>
        {imprint.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{pick(imprint.country, lang)}</p>
      </section>

      <section className="space-y-1 text-[15px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("imprint.contact")}
        </p>
        <p>
          <a href={`mailto:${contact.email}`} className="hover:text-primary">
            {contact.email}
          </a>
        </p>
        <p>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
            {contact.phone}
          </a>
        </p>
      </section>

      <section className="space-y-1 text-[15px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("imprint.responsible")}
        </p>
        <p>{imprint.name}, {imprint.address.join(", ")}</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold">{t("imprint.disclaimerTitle")}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{t("imprint.disclaimer")}</p>
      </section>
    </div>
  )
}
