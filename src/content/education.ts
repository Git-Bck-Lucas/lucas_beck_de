import type { Education, SkillGroup } from "./types"

export const education: Education[] = [
  {
    institution: "Freie Universität Berlin",
    degree: { de: "M.Sc. Wirtschaftsinformatik", en: "M.Sc. Information Systems" },
    period: "09.2021 – 03.2024",
    location: { de: "Berlin, Deutschland", en: "Berlin, Germany" },
    details: {
      de: [
        "Schwerpunkte: Datenwissenschaften, Operations Research, Business Intelligence.",
        "Auslandssemester (Erasmus) am Instituto Superior Técnico, Lissabon.",
        "Abschlussarbeit: datenschutzkonforme Pipeline zur Generierung und Evaluation synthetischer Daten (Python, Note 1,3). Abschlussnote 1,7.",
      ],
      en: [
        "Focus areas: data science, operations research, business intelligence.",
        "Semester abroad (Erasmus) at Instituto Superior Técnico, Lisbon.",
        "Thesis: privacy-compliant pipeline for generating and evaluating synthetic data (Python, graded 1.3). Final grade 1.7 (German scale, 1.0 = best).",
      ],
    },
  },
  {
    institution: "Otto-Friedrich-Universität Bamberg",
    degree: { de: "Wirtschaftsinformatik", en: "Information Systems" },
    period: "09.2020 – 08.2021",
    location: { de: "Bamberg, Deutschland", en: "Bamberg, Germany" },
    details: {
      de: ["Nachholen von Auflagenmodulen in Programmierung und höherer Mathematik."],
      en: ["Completed prerequisite modules in programming and advanced mathematics."],
    },
  },
  {
    institution: "Universität Hohenheim",
    degree: { de: "B.Sc. Wirtschaftswissenschaften", en: "B.Sc. Business & Economics" },
    period: "09.2016 – 10.2020",
    location: { de: "Stuttgart, Deutschland", en: "Stuttgart, Germany" },
    details: {
      de: [
        "Schwerpunkte: Information Systems & Supply Chain Management.",
        "Auslandssemester (Erasmus) an der Tilburg University, Niederlande.",
      ],
      en: [
        "Focus areas: information systems & supply chain management.",
        "Semester abroad (Erasmus) at Tilburg University, Netherlands.",
      ],
    },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: { de: "Sprachen & Core", en: "Languages & Core" },
    items: ["Python", "SQL"],
  },
  {
    label: { de: "Data & Cloud", en: "Data & Cloud" },
    items: ["BigQuery", "PostgreSQL", "Airflow", "Dataform", "GCP", "Docker", "Git", "CI/CD"],
  },
  {
    label: { de: "AI & ML", en: "AI & ML" },
    items: ["FastAPI", "Anthropic SDK", "RAG", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    label: { de: "BI", en: "BI" },
    items: ["Looker Studio"],
  },
]

export const spokenLanguages: { label: { de: string; en: string }; level: { de: string; en: string } }[] = [
  { label: { de: "Deutsch", en: "German" }, level: { de: "Muttersprache", en: "Native" } },
  { label: { de: "Englisch", en: "English" }, level: { de: "C1", en: "C1" } },
]
