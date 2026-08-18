import type { Localized } from "./types"

type Site = {
  name: string
  role: Localized
  location: Localized
  contact: { email: string; phone: string }
  socials: { label: string; href: string }[]
  imprint: { name: string; address: string[]; country: Localized }
}

// Intro / about prose intentionally left out — Lucas writes those himself later.
export const site: Site = {
  name: "Lucas Beck",
  role: { de: "Data Engineer", en: "Data Engineer" },
  location: { de: "Berlin, Deutschland", en: "Berlin, Germany" },

  contact: {
    email: "kontakt@lucas-beck.de",
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
