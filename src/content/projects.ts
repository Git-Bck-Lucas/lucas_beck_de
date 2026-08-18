import type { Project } from "./types"

export const projects: Project[] = [
  {
    title: "Audio DNA",
    flagship: true,
    year: "2026",
    tagline: {
      de: "Persönlichkeitsanalyse (Big Five) aus Spotify-Hördaten, fundiert über eine selbst gebaute, literaturbasierte RAG-Pipeline.",
      en: "Personality analysis (Big Five) from Spotify listening data, grounded through a self-built, literature-based RAG pipeline.",
    },
    description: {
      de: "Vollständig eigenentwickelt und selbst gehostet: FastAPI-Backend, RAG über musikpsychologische Fachliteratur mit pgvector, Retrieval-Evaluation und ein kalibrierter Zwei-Modi-Prompt. Läuft containerisiert mit CI/CD auf einem eigenen Server.",
      en: "Fully self-developed and self-hosted: FastAPI backend, RAG over music-psychology research with pgvector, retrieval evaluation, and a calibrated two-mode prompt. Runs containerized with CI/CD on my own server.",
    },
    stack: ["Python", "FastAPI", "PostgreSQL / pgvector", "RAG", "Docker", "CI/CD"],
    links: [
      { label: { de: "GitHub", en: "GitHub" }, href: "https://github.com/Git-Bck-Lucas" },
    ],
  },
]
