import { BrowserRouter, Routes, Route } from "react-router-dom"

import { RootLayout } from "@/layout/RootLayout"
import { Home } from "@/routes/Home"
import { About } from "@/routes/About"
import { Projects } from "@/routes/Projects"
import { Contact } from "@/routes/Contact"
import { Imprint } from "@/routes/Imprint"
import { Privacy } from "@/routes/Privacy"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Imprint />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
