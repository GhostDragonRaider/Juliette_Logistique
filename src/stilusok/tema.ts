/**
 * A weboldal közös színei, betűtípusai és méretei.
 * Innen veszünk minden stílusértéket, hogy egységes maradjon a kinézet.
 */
export const tema = {
  /** Háttérszínek */
  hatter: {
    fekete: '#050505',
    sotet: '#0a0a0a',
    emelt: '#121212',
    kartya: '#161616',
  },
  /** Arany és szövegszínek (a szürke kontrasztja akadálymentes) */
  szin: {
    arany: '#c9a227',
    aranyVilagos: '#e8d48b',
    aranySotet: '#8a7018',
    feher: '#f5f5f5',
    szurke: '#c2c2c2',
    szurkeSotet: '#8a8a8a',
  },
  /** Betűtípusok */
  betu: {
    cim: '"Montserrat", "Segoe UI", sans-serif',
    torzs: '"DM Sans", "Segoe UI", sans-serif',
    marka: '"Cormorant Garamond", Georgia, serif',
  },
  /** Árnyékok és fények */
  arnyek: {
    aranyFeny: '0 0 24px rgba(201, 162, 39, 0.28)',
    kartya: '0 12px 40px rgba(0, 0, 0, 0.45)',
  },
  /** Töréspontok minden képernyőmérethez */
  szelesseg: {
    kicsi: '480px',
    mobil: '720px',
    tablet: '980px',
    asztali: '1200px',
    nagy: '1440px',
  },
  /** Maximális tartalomszélesség nagy monitorokon */
  maxTartalom: '1280px',
  /** Oldalsó belső margó (safe area-val is) */
  oldalsoPadding:
    'max(1rem, env(safe-area-inset-left, 0px), min(4vw, 3rem))',
} as const

/**
 * Arany metál szövegátmenet a főcímekhez.
 * Fallback szín is van, ha a clip nem támogatott.
 */
export const aranySzovegAtmenet = `
  color: ${tema.szin.aranyVilagos};
  background: linear-gradient(120deg, #8a7018 0%, #e8d48b 45%, #c9a227 70%, #f5e6a8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

/**
 * Vékony arany keret a gombokhoz és kiemelésekhez.
 */
export const aranyKeret = `1px solid rgba(201, 162, 39, 0.55)`

/**
 * Egységes fókuszkeret billentyűzetes navigációhoz.
 */
export const fokuszKeret = `
  outline: 2px solid ${tema.szin.aranyVilagos};
  outline-offset: 3px;
`
