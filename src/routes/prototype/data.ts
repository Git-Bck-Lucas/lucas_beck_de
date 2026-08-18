// PROTOTYPE (W1) — throwaway. Shared placeholder content so every variant is
// judged against the same real density. Delete this folder once a look wins.

export const content = {
  name: "Lucas Beck",
  role: "Platzhalter-Rolle",
  location: "Deutschland",
  // Platzhalter — echte Texte kommen später, hier nur zum Beurteilen des Layouts.
  intro:
    "Platzhalter-Intro. Hier stehen später ein, zwei Sätze über meine Arbeit — bewusst noch generisch, damit das Layout im Vordergrund steht.",
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
