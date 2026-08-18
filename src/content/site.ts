import type { Localized, LocalizedList } from "./types"

type Site = {
  name: string
  role: Localized
  location: Localized
  hero: { headline: Localized; intro: Localized }
  about: LocalizedList
  contact: { email: string; phone: string }
  socials: { label: string; href: string }[]
  imprint: { name: string; address: string[]; country: Localized }
}

export const site: Site = {
  name: "Lucas Beck",
  role: { de: "Data Engineer", en: "Data Engineer" },
  location: { de: "Berlin, Deutschland", en: "Berlin, Germany" },

  hero: {
    headline: {
      de: "Dateninfrastruktur und Datenmodellierung, die in Produktion trägt.",
      en: "Data infrastructure and modeling built to run in production.",
    },
    intro: {
      de: "Data Engineer mit zwei Jahren Erfahrung an der Schnittstelle von Dateninfrastruktur und Datenmodellierung. Ich baue automatisierte ETL-Pipelines und cloudbasierte Systeme und übersetze komplexe Anforderungen in verlässliche Datenlösungen.",
      en: "Data Engineer with two years of experience at the intersection of data infrastructure and data modeling. I build automated ETL pipelines and cloud-based systems, and translate complex requirements into reliable data solutions.",
    },
  },

  about: {
    de: [
      "Ich bin Data Engineer in Berlin und arbeite an der Schnittstelle von Dateninfrastruktur und Datenmodellierung. In den letzten zwei Jahren habe ich automatisierte ETL-Pipelines und cloudbasierte Infrastruktur in der Google Cloud aufgebaut und große, komplexe Datenbestände gematcht, gemappt und harmonisiert.",
      "Stark bin ich in Python und SQL und darin, die Anforderungen verschiedener Stakeholder in verlässliche, praxisnahe Lösungen zu übersetzen. Zuletzt baue ich meine Kompetenz im Bereich agentischer KI-Systeme mit dem Anthropic SDK aus.",
      "Neben der Arbeit interessiere ich mich für Psychologie, lege als DJ auf, spiele Gitarre und bin viel mit Kraft- und Ausdauersport unterwegs.",
    ],
    en: [
      "I'm a Data Engineer based in Berlin, working at the intersection of data infrastructure and data modeling. Over the last two years I've built automated ETL pipelines and cloud-based infrastructure on Google Cloud, and matched, mapped and harmonized large, complex datasets.",
      "I'm strong in Python and SQL, and in translating the requirements of diverse stakeholders into reliable, practical solutions. Most recently I've been building expertise in agentic AI systems with the Anthropic SDK.",
      "Outside of work I'm into psychology, DJ, play guitar, and spend a lot of time on strength and endurance training.",
    ],
  },

  contact: {
    email: "kontakt@lucas-beck.de",
    // Public contact number as required for the Impressum (DDG §5).
    phone: "+49 173 154 7937",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/Git-Bck-Lucas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-beck-a8b203378/" },
    { label: "E-Mail", href: "mailto:kontakt@lucas-beck.de" },
  ],

  // Impressum per DDG §5.
  imprint: {
    name: "Lucas Beck",
    address: ["Lohmühlenstraße 27", "12435 Berlin"],
    country: { de: "Deutschland", en: "Germany" },
  },
}
