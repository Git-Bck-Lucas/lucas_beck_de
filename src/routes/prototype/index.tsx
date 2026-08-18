// PROTOTYPE (W1) — throwaway design exploration.
// Question: "What should the site look like?" (schlicht/modern + rot/orange).
// Four structurally different landing looks on one route, switched via ?variant=.
// Winner becomes design tokens; this whole folder gets deleted afterwards.
import type { ReactNode } from "react"
import { useSearchParams } from "react-router-dom"

import { PrototypeSwitcher } from "./PrototypeSwitcher"
import { VariantE } from "./variants/VariantE"
import { VariantF } from "./variants/VariantF"
import { VariantA } from "./variants/VariantA"
import { VariantB } from "./variants/VariantB"
import { VariantD } from "./variants/VariantD"

// E/F are the synthesis (A+B+D direction). A/B/D kept only as reference. C dropped.
const variants: Record<string, { label: string; Component: () => ReactNode }> = {
  E: { label: "Studio Rail", Component: VariantE },
  F: { label: "Editorial Index", Component: VariantF },
  A: { label: "Editorial Minimal (Ref)", Component: VariantA },
  B: { label: "Split Sidebar (Ref)", Component: VariantB },
  D: { label: "Mono Grid (Ref)", Component: VariantD },
}

const keys = Object.keys(variants)
const labels = Object.fromEntries(
  Object.entries(variants).map(([k, v]) => [k, v.label])
)

export default function PrototypePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("variant")?.toUpperCase() ?? "E"
  const current = keys.includes(raw) ? raw : "E"

  const setVariant = (key: string) => {
    setSearchParams({ variant: key }, { replace: true })
  }

  const Active = variants[current].Component

  return (
    <>
      <Active />
      {!import.meta.env.PROD && (
        <PrototypeSwitcher
          keys={keys}
          labels={labels}
          current={current}
          onChange={setVariant}
        />
      )}
    </>
  )
}
