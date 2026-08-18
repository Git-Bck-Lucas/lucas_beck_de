import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { sectionIds } from "@/sections/sections"

// Smooth-scroll navigation for the one-page layout, plus active-section tracking.
export function useSectionNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState("")

  const onHome = location.pathname === "/"

  // Track which section is in view (only relevant on the home one-pager).
  useEffect(() => {
    if (!onHome) {
      setActive("")
      return
    }
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onHome, location.key])

  const goTo = useCallback(
    (id: string) => {
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        navigate("/", { state: { scrollTo: id } })
      }
    },
    [location.pathname, navigate]
  )

  const goTop = useCallback(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
  }, [location.pathname, navigate])

  return { active, goTo, goTop }
}
