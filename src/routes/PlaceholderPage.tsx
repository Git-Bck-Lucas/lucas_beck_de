import { useTranslation } from "react-i18next"

export function PlaceholderPage({ titleKey }: { titleKey: string }) {
  const { t } = useTranslation()

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight">{t(titleKey)}</h1>
      <p className="text-muted-foreground">{t("home.placeholder")}</p>
    </section>
  )
}
