import { NavLink, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { sections } from "@/sections/sections"
import { useSectionNav } from "@/hooks/useSectionNav"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export function RootLayout() {
  const { t } = useTranslation()
  const { active, goTo, goTop } = useSectionNav()

  const navLinkClass =
    "rounded-md px-2 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-[12px] sm:tracking-[0.12em]"

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <button
            onClick={goTop}
            className="flex items-center gap-2 text-sm font-bold tracking-tight"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Lucas Beck
          </button>

          <nav className="flex items-center gap-0.5 sm:gap-1">
            {/* TODO: proper mobile menu; links stay compact for now. */}
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className={cn(navLinkClass, active === s.id && "text-foreground")}
              >
                {t(s.key)}
              </button>
            ))}
            <NavLink
              to="/privat"
              className={({ isActive }) => cn(navLinkClass, isActive && "text-foreground")}
            >
              {t("nav.privat")}
            </NavLink>

            <div className="ml-1 flex items-center gap-1 border-l border-border pl-1 sm:ml-2 sm:pl-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} Lucas Beck · {t("footer.rights")}
          </p>
          <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-wide">
            <NavLink to="/impressum" className="hover:text-foreground">
              {t("footer.imprint")}
            </NavLink>
            <NavLink to="/datenschutz" className="hover:text-foreground">
              {t("footer.privacy")}
            </NavLink>
          </nav>
        </div>
      </footer>
    </div>
  )
}
