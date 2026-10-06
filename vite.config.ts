import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const SITE_URL = 'https://juliettelogistique.de'
/** Alap SEO a nyilvános index.html-ben (német) — megegyezik a forditasok.de.seo értékekkel. */
const seo = {
  cim: 'Juliette Logistique | Premium Fahrzeugüberführung & Logistik',
  leiras:
    'Premium Fahrzeugüberführung und maßgeschneiderte Logistik in Deutschland und Europa. Zuverlässig, sicher und pünktlich.',
  kulcsszavak:
    'Fahrzeugüberführung, Premium Logistik, Autotransport, Deutschland, Europa, Juliette Logistique',
}

function indexSeoPlugin(): Plugin {
  return {
    name: 'juliette-index-seo-de',
    transformIndexHtml(html) {
      return html
        .replaceAll('__SITE_URL__', SITE_URL)
        .replaceAll('__SEO_TITLE__', seo.cim)
        .replaceAll('__SEO_DESCRIPTION__', seo.leiras)
        .replaceAll('__SEO_KEYWORDS__', seo.kulcsszavak)
    },
  }
}

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
    indexSeoPlugin(),
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
