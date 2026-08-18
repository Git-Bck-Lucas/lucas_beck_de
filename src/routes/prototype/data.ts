// PROTOTYPE (W1) — throwaway. Shared placeholder content so every variant is
// judged against the same real density. Delete this folder once a look wins.

export const content = {
  name: "Lucas Beck",
  role: "Data & AI Engineer",
  location: "Deutschland",
  intro:
    "Ich baue Data- und AI-Systeme, die in Produktion laufen: von RAG-Pipelines über saubere Backends bis zum Deployment.",
  flagship: {
    title: "Audio DNA",
    tagline:
      "Persönlichkeitsanalyse (Big Five) aus Spotify-Hördaten, gestützt durch RAG über musikpsychologische Fachliteratur.",
    stack: ["FastAPI", "PostgreSQL / pgvector", "RAG", "Docker"],
    year: "2026",
  },
  projects: [
    {
      title: "Audio DNA",
      blurb: "Big-Five-Analyse aus Hördaten mit RAG-Grounding.",
      year: "2026",
    },
    {
      title: "RAG Retrieval Eval",
      blurb: "Recall@k-Evaluation und Fehleranalyse einer Retrieval-Pipeline.",
      year: "2026",
    },
    {
      title: "Weiteres Projekt",
      blurb: "Platzhalter — kommt in den echten Inhalt.",
      year: "2025",
    },
  ],
  nav: [
    { label: "Start", href: "#" },
    { label: "Über mich", href: "#" },
    { label: "Projekte", href: "#" },
    { label: "Kontakt", href: "#" },
  ],
  links: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "E-Mail", href: "#" },
  ],
} as const

export type Content = typeof content
