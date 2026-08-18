import { NavLink, Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"

const navItems = [
  { to: "/", key: "nav.home", end: true },
  { to: "/about", key: "nav.about", end: false },
  { to: "/projects", key: "nav.projects", end: false },
  { to: "/contact", key: "nav.contact", end: false },
]

export function RootLayout() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <NavLink to="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Lucas Beck
          </NavLink>

          <nav className="flex items-center gap-0.5 sm:gap-2">
            {/* TODO: proper mobile menu; for now links stay compact and visible. */}
            <div className="flex items-center gap-0.5 sm:gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-2 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-[12px] sm:tracking-[0.12em]",
                      isActive && "text-foreground"
                    )
                  }
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center gap-1 sm:ml-2 sm:border-l sm:border-border sm:pl-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-14 sm:py-20">
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
