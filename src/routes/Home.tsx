import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Experience } from "@/sections/Experience"
import { Education } from "@/sections/Education"
import { Skills } from "@/sections/Skills"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"

export function Home() {
  const location = useLocation()

  // Scroll to a section when arriving from another route (e.g. nav on /impressum).
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      requestAnimationFrame(() =>
        document.getElementById(target)?.scrollIntoView({ block: "start" })
      )
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
