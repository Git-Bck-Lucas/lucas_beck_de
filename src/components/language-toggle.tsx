import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage === "en" ? "en" : "de"
  const next = current === "de" ? "en" : "de"

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t("a11y.toggleLanguage")}
      className="font-medium uppercase"
      onClick={() => i18n.changeLanguage(next)}
    >
      {current}
    </Button>
  )
}
