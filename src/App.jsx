import { Route, Routes } from 'react-router'
import Layout from './core/Layout.jsx'
import Index from './pages/index.jsx'
import seguridad from './pages/seguridad.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="Index" element={<Index />} />
        <Route path="seguridad" element={<seguridad />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
