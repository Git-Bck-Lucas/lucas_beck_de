// PROTOTYPE (W1) — throwaway design exploration.
// Question: "What should the site look like?" (schlicht/modern + rot/orange).
// Four structurally different landing looks on one route, switched via ?variant=.
// Winner becomes design tokens; this whole folder gets deleted afterwards.
import type { ReactNode } from "react"
import { useSearchParams } from "react-router-dom"

import { PrototypeSwitcher } from "./PrototypeSwitcher"
import { VariantA } from "./variants/VariantA"
import { VariantB } from "./variants/VariantB"
import { VariantC } from "./variants/VariantC"
import { VariantD } from "./variants/VariantD"

const variants: Record<string, { label: string; Component: () => ReactNode }> = {
  A: { label: "Editorial Minimal", Component: VariantA },
  B: { label: "Split Sidebar", Component: VariantB },
  C: { label: "Bold Centered", Component: VariantC },
  D: { label: "Mono Grid", Component: VariantD },
}

const keys = Object.keys(variants)
const labels = Object.fromEntries(
  Object.entries(variants).map(([k, v]) => [k, v.label])
)

export default function PrototypePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const raw = searchParams.get("variant")?.toUpperCase() ?? "A"
  const current = keys.includes(raw) ? raw : "A"

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
