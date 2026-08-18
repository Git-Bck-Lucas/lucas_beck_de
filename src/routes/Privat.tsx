import { useTranslation } from "react-i18next"

// Private area (Blog, DJing …) — kept separate from the professional one-pager.
// Grundgerüst only; real content comes in a later slice (W4).
export function Privat() {
  const { t } = useTranslation()

  const blocks = ["privat.blog", "privat.djing"]

  return (
    <div className="space-y-16">
      <header className="py-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-primary">
          {t("privat.title")}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t("privat.heading")}
          <span className="text-primary">.</span>
        </h1>
      </header>

      <div className="space-y-8">
        {blocks.map((key) => (
          <section key={key} className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t(`${key}.title`)}</h2>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground/50">
              {t("common.placeholder")}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}
