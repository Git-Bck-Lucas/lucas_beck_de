import { useTranslation } from "react-i18next"

export type Lang = "de" | "en"

// Subscribes to i18next so components re-render on language change.
export function useLang(): Lang {
  const { i18n } = useTranslation()
  return i18n.resolvedLanguage === "en" ? "en" : "de"
}

export function pick<T>(value: { de: T; en: T }, lang: Lang): T {
  return value[lang]
}
