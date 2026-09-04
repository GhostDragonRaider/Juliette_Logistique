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
  /** Arany és szövegszínek */
  szin: {
    arany: '#c9a227',
    aranyVilagos: '#e8d48b',
    aranySotet: '#8a7018',
    feher: '#f5f5f5',
    szurke: '#a8a8a8',
    szurkeSotet: '#6b6b6b',
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
  /** Töréspontok */
  szelesseg: {
    mobil: '720px',
    tablet: '980px',
    asztali: '1200px',
  },
} as const

/**
 * Arany metál szövegátmenet a főcímekhez.
 */
export const aranySzovegAtmenet = `
  background: linear-gradient(120deg, #8a7018 0%, #e8d48b 45%, #c9a227 70%, #f5e6a8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`

/**
 * Vékony arany keret a gombokhoz és kiemelésekhez.
 */
export const aranyKeret = `1px solid rgba(201, 162, 39, 0.55)`
