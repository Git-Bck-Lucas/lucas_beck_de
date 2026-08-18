// Bilingual content model. Substantive content lives here (typed, DE/EN),
// UI chrome (nav, labels) stays in i18next JSON.

export type Localized = { de: string; en: string }
export type LocalizedList = { de: string[]; en: string[] }

export type Experience = {
  company: string
  url?: string
  role: Localized
  period: Localized
  location?: Localized
  bullets?: LocalizedList
  tags: string[]
}

export type Education = {
  institution: string
  degree: Localized
  period: string
  location?: Localized
  details?: LocalizedList
}

export type Project = {
  title: string
  tagline: Localized
  description?: Localized
  stack: string[]
  year: string
  flagship?: boolean
  links?: { label: Localized; href: string }[]
}

export type SkillGroup = {
  label: Localized
  items: string[]
}
