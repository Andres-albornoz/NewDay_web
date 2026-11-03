import { Route, Routes } from 'react-router'
import Layout from './core/Layout.jsx'
import Index from './pages/index.jsx'
import Seguridad from './pages/seguridad.jsx'
import Investigacion from './pages/investigacion.jsx'
import Apollo from './pages/Apollo.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="Seguridad" element={<Seguridad />} />
        <Route path="investigacion" element={<investigacion />} />
        <Route path="Apollo" element={<Apollo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
