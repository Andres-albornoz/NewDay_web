import { Route, Routes } from 'react-router'
import Layout from './core/Layout.jsx'
import Index from './pages/Index.jsx'
import Seguridad from './pages/Seguridad.jsx'
import Investigacion from './pages/Investigacion.jsx'
import Apoyo from './pages/Apoyo.jsx'
import NotFound from './pages/NotFound.jsx'

import Home2 from './pages/Fundacion/HomeFundacion.jsx'
import Crea from './pages/Fundacion/Creacion.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="Seguridad" element={<Seguridad />} />
        <Route path="Investigacion" element={<Investigacion />} />
        <Route path="Apoyo" element={<Apoyo />} />
        <Route path="*" element={<NotFound />} />

        <Route path="Home2" element={<Home2 />} />
        <Route path="Crea" element={<Crea />} />
      </Route>
    </Routes>
  )
}
