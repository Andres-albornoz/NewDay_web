import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages publica este repo en un subdirectorio, no en la raíz del
  // dominio: https://andres-albornoz.github.io/NewDay_web/
  // Sin esto, los assets se piden a "/assets/..." y la página queda en blanco.
  // En local mantenemos "/" para que `npm run dev` no cambie de URL.
  base: process.env.GITHUB_ACTIONS ? '/NewDay_web/' : '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
