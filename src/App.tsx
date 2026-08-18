import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RootLayout } from "@/layout/RootLayout"
import { Home } from "@/routes/Home"
import { Privat } from "@/routes/Privat"
import { Imprint } from "@/routes/Imprint"
import { Privacy } from "@/routes/Privacy"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="privat" element={<Privat />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
