import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * A Vite beállítások Emotion JSX támogatással.
 * Vercel-en és helyi / más static hoston is ugyanúgy működik.
 */
export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
