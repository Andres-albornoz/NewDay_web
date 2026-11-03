import { Route, Routes } from 'react-router'
import Layout from './core/Layout.jsx'
import Index from './pages/Index.jsx'
import Seguridad from './pages/Seguridad.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="Seguridad" element={<Seguridad />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
