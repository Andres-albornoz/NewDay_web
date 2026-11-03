import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// En GitHub Pages el sitio se publica en https://<usuario>.github.io/<repo>/,
// por lo que la base debe coincidir con el nombre del repositorio. En local
// (o en un sitio de usuario <usuario>.github.io) se sirve desde la raiz.
const [propietario, repositorio] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
const esSitioDeUsuario = repositorio === `${propietario}.github.io`
const base = repositorio && !esSitioDeUsuario ? `/${repositorio}/` : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
