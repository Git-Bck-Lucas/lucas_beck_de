// One-page sections on "/". `id` doubles as the scroll anchor.
export const sections = [
  { id: "about", key: "nav.about" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
] as const

export const sectionIds = sections.map((s) => s.id)
