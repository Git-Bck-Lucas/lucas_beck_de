import { useTranslation } from "react-i18next"

export function Privacy() {
  const { t } = useTranslation()

  const sections = [
    { title: "privacy.controllerTitle", text: "privacy.controllerText" },
    { title: "privacy.dataTitle", text: "privacy.dataText" },
    { title: "privacy.contactTitle", text: "privacy.contactText" },
    { title: "privacy.rightsTitle", text: "privacy.rightsText" },
  ]

  return (
    <div className="max-w-2xl space-y-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("privacy.title")}</h1>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          {t("privacy.draftNote")}
        </p>
      </header>

      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="space-y-2">
            <h2 className="font-semibold">{t(s.title)}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{t(s.text)}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
