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
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <NavLink to="/" className="text-lg font-bold tracking-tight">
            lucas&nbsp;beck
          </NavLink>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground"
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <div className="ml-2 flex items-center gap-1">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Lucas Beck. {t("footer.rights")}</p>
          <nav className="flex items-center gap-4">
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
