import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { site } from "@/content/site"

export function Imprint() {
  const { t } = useTranslation()
  const lang = useLang()
  const { imprint, contact } = site

  return (
    <div className="max-w-xl space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("imprint.title")}
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("imprint.accordingTo")}
        </p>
      </div>

      <div className="space-y-0.5 text-[15px] leading-relaxed">
        <p>{imprint.name}</p>
        {imprint.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{pick(imprint.country, lang)}</p>
        <p className="pt-3">
          <a href={`mailto:${contact.email}`} className="hover:text-primary">
            {contact.email}
          </a>
        </p>
        <p>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
            {contact.phone}
          </a>
        </p>
      </div>
    </div>
  )
}
