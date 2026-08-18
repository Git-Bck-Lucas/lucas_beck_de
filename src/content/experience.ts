import type { Experience } from "./types"

export const experience: Experience[] = [
  {
    company: "Savvean UG",
    role: { de: "Data & AI Engineer (Teilzeit)", en: "Data & AI Engineer (Part-time)" },
    period: { de: "07.2026 – heute", en: "07.2026 – Present" },
    bullets: {
      de: [
        "Aufbau der Kompetenz zur Entwicklung agentischer KI-Systeme mit dem Anthropic SDK, mit Fokus auf praxisnahe Automatisierungslösungen für Non-Profits und kleine bis mittelständische Unternehmen.",
      ],
      en: [
        "Building expertise in developing agentic AI systems with the Anthropic SDK, focused on practical automation solutions for non-profits and small and medium-sized businesses.",
      ],
    },
    tags: ["Anthropic SDK", "Python", "Agentic AI", "Automation"],
  },
  {
    company: "Lot Internet GmbH",
    role: { de: "Data Analyst / Data Engineer", en: "Data Analyst / Data Engineer" },
    period: { de: "06.2024 – 06.2026", en: "06.2024 – 06.2026" },
    location: { de: "Potsdam, Deutschland", en: "Potsdam, Germany" },
    bullets: {
      de: [
        "Eigenständiger Aufbau des Produktbereichs „Händlermonitor“ von Grund auf: GCP-Dateninfrastruktur mit automatisierten ETL-Pipelines (Airflow, BigQuery, Dataform) für 1,6 Mio. Fahrzeugangebote täglich, 80 % weniger manuelle Prüfung bei voller Ausfallsicherheit.",
        "Performance-Optimierung geschäftskritischer BigQuery-Queries plus Monitoring- und Alerting-System (Cloud Functions, Pub/Sub, Scheduler): Dashboard-Ladezeit von 30 auf unter 3 Sekunden.",
        "Hauptverantwortlich für BI und Visualisierung: interaktive Looker-Studio-Dashboards mit eigenen Angebots- und Nachfrage-Indizes, produktiv bei einem großen europäischen Automobilkonzern.",
        "Datenmodellierung und Harmonisierung von über 100 Mio. Rohdatensätzen (YAML-Lookups, SQL-Transformationen, automatisierte Tests) sowie Weiterentwicklung eines Python-Matching-Algorithmus auf fünf europäische Ländermärkte.",
      ],
      en: [
        "Independently built the “Händlermonitor” product area from the ground up: GCP data infrastructure with automated ETL pipelines (Airflow, BigQuery, Dataform) for 1.6M vehicle listings per day, cutting manual review by 80% at full operational reliability.",
        "Performance optimization of business-critical BigQuery queries plus a monitoring and alerting system (Cloud Functions, Pub/Sub, Scheduler): dashboard load time from 30 to under 3 seconds.",
        "Lead responsibility for BI and visualization: interactive Looker Studio dashboards with self-developed supply and demand indices, in production at a major European automotive group.",
        "Data modeling and harmonization of 100M+ raw records (YAML lookups, SQL transformations, automated tests), plus ongoing development of a Python matching algorithm across five European country markets.",
      ],
    },
    tags: ["GCP", "BigQuery", "Airflow", "Dataform", "Python", "SQL", "Looker Studio"],
  },
  {
    company: "Vattenfall GmbH",
    role: {
      de: "Werkstudent – Digitale Transformation / Projektmanagement",
      en: "Working Student – Digital Transformation / Project Management",
    },
    period: { de: "04.2023 – 12.2023", en: "04.2023 – 12.2023" },
    location: { de: "Berlin, Deutschland", en: "Berlin, Germany" },
    bullets: {
      de: [
        "Eigenständige konzernweite Bedarfsanalyse zu HPC-Kapazitäten sowie Pflege des konzerninternen Datenkatalogs.",
      ],
      en: [
        "Independently conducted a company-wide needs analysis on HPC capacity and maintained the internal corporate data catalog.",
      ],
    },
    tags: ["Data Catalog", "HPC", "Project Management"],
  },
  {
    company: "Kaiser & Kraft GmbH",
    role: {
      de: "Werkstudent – IT Integration Technologies / EDI",
      en: "Working Student – IT Integration Technologies / EDI",
    },
    period: { de: "05.2021 – 03.2023", en: "05.2021 – 03.2023" },
    location: { de: "Stuttgart, Deutschland", en: "Stuttgart, Germany" },
    tags: ["EDI", "IT Integration"],
  },
  {
    company: "Daimler Truck AG",
    role: { de: "Praktikant – Controlling", en: "Intern – Controlling" },
    period: { de: "03.2020 – 09.2020", en: "03.2020 – 09.2020" },
    location: { de: "Stuttgart, Deutschland", en: "Stuttgart, Germany" },
    tags: ["Controlling"],
  },
]
