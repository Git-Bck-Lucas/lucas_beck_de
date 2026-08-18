import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { sections } from "@/sections/sections"
import { useSectionNav } from "@/hooks/useSectionNav"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

export function RootLayout() {
  const { t } = useTranslation()
  const location = useLocation()
  const { active, goTo, goTop } = useSectionNav()
  const [menuOpen, setMenuOpen] = useState(false)

  const desktopLinkClass =
    "rounded-md px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"

  // Close the mobile menu on navigation, and lock body scroll / support Escape while open.
  useEffect(() => setMenuOpen(false), [location.pathname])
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const handleSection = (id: string) => {
    setMenuOpen(false)
    goTo(id)
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <button
            onClick={() => {
              setMenuOpen(false)
              goTop()
            }}
            className="flex items-center gap-2 text-sm font-bold tracking-tight"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Lucas Beck
          </button>

          <div className="flex items-center gap-1">
            {/* desktop nav */}
            <nav className="hidden items-center gap-1 sm:flex">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className={cn(desktopLinkClass, active === s.id && "text-foreground")}
                >
                  {t(s.key)}
                </button>
              ))}
              <NavLink
                to="/privat"
                className={({ isActive }) => cn(desktopLinkClass, isActive && "text-foreground")}
              >
                {t("nav.privat")}
              </NavLink>
            </nav>

            <div className="flex items-center gap-1 sm:ml-2 sm:border-l sm:border-border sm:pl-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* mobile burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menü"
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-accent sm:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 bg-background sm:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-6 py-6">
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleSection(s.id)}
                className={cn(
                  "flex items-center gap-3 border-b border-border py-4 text-left text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active === s.id && "text-foreground"
                )}
              >
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(s.key)}
              </button>
            ))}
            <NavLink
              to="/privat"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 border-b border-border py-4 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )
              }
            >
              <span className="font-mono text-xs text-primary">07</span>
              {t("nav.privat")}
            </NavLink>
          </nav>
        </div>
      )}

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
