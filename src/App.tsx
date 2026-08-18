import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RootLayout } from "@/layout/RootLayout"
import { PlaceholderPage } from "@/routes/PlaceholderPage"
import PrototypePage from "@/routes/prototype"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PROTOTYPE (W1) — throwaway design exploration, standalone (no layout). */}
        <Route path="/prototype" element={<PrototypePage />} />
        <Route element={<RootLayout />}>
          <Route index element={<PlaceholderPage titleKey="nav.home" />} />
          <Route path="about" element={<PlaceholderPage titleKey="nav.about" />} />
          <Route path="projects" element={<PlaceholderPage titleKey="nav.projects" />} />
          <Route path="contact" element={<PlaceholderPage titleKey="nav.contact" />} />
          <Route path="impressum" element={<PlaceholderPage titleKey="footer.imprint" />} />
          <Route path="datenschutz" element={<PlaceholderPage titleKey="footer.privacy" />} />
          <Route path="*" element={<PlaceholderPage titleKey="nav.home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
