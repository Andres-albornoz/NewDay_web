import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/NewDay_web.github.io/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})