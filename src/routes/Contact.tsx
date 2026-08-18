import { useTranslation } from "react-i18next"

import { site } from "@/content/site"

export function Contact() {
  const { t } = useTranslation()

  return (
    <div className="max-w-2xl space-y-8">
      <header>
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-primary">
          {t("contact.title")}
        </p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.contact.email}
        </h1>
      </header>

      <p className="text-lg leading-relaxed text-muted-foreground">{t("contact.intro")}</p>

      <div>
        <a
          href={`mailto:${site.contact.email}`}
          className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          {t("contact.emailMe")}
        </a>
      </div>

      <div className="border-t border-border pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("contact.elsewhere")}
        </p>
        <div className="mt-3 flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="text-sm font-medium text-foreground/80 underline-offset-4 hover:text-primary hover:underline"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
