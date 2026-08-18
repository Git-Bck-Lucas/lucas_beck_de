import { useTranslation } from "react-i18next"

import { useLang, pick } from "@/i18n/useLang"
import { site } from "@/content/site"
import { useSectionNav } from "@/hooks/useSectionNav"

export function Hero() {
  const { t } = useTranslation()
  const lang = useLang()
  const { goTo } = useSectionNav()

  return (
    <section id="top" className="scroll-mt-24 py-16 sm:py-28">
      <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-accent-orange">
        {pick(site.role, lang)} · {pick(site.location, lang)}
      </p>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
        {site.name}
        <span className="text-primary">.</span>
      </h1>
      {/* Tagline intentionally left for Lucas to write. */}
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/50">
        {t("hero.taglinePlaceholder")}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => goTo("projects")}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          {t("nav.projects")}
        </button>
        <button
          onClick={() => goTo("contact")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent"
        >
          {t("nav.contact")}
        </button>
      </div>
    </section>
  )
}
