/**
 * A weboldal közös színei, betűtípusai és méretei.
 * Prémium, kicsit világosabb antracit + pezsgőarany paletta.
 */
export const tema = {
  /** Háttérszínek — két fokkal világosabb, nem „lyukas fekete” */
  hatter: {
    fekete: '#141414',
    sotet: '#1b1b1b',
    emelt: '#252525',
    kartya: '#2c2c2c',
  },
  /** Pezsgőarany — finomabb, kevésbé sárgás */
  szin: {
    arany: '#c5a572',
    aranyVilagos: '#e8d7b5',
    aranySotet: '#8f7349',
    feher: '#f7f3ea',
    szurke: '#cfc6b8',
    szurkeSotet: '#9a9184',
  },
  /** Betűtípusok — Georgia a prémium alaphang */
  betu: {
    cim: 'Georgia, "Times New Roman", Times, serif',
    torzs: 'Georgia, "Times New Roman", Times, serif',
    marka: 'Georgia, "Times New Roman", Times, serif',
    szam: 'Georgia, "Times New Roman", Times, serif',
  },
  /** Finom, visszafogott fények */
  arnyek: {
    aranyFeny: '0 0 28px rgba(197, 165, 114, 0.18)',
    kartya: '0 16px 40px rgba(0, 0, 0, 0.35)',
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
 * Finom pezsgőarany szövegátmenet a főcímekhez.
 */
export const aranySzovegAtmenet = `
  color: ${tema.szin.aranyVilagos};
  background: linear-gradient(
    115deg,
    ${tema.szin.aranySotet} 0%,
    ${tema.szin.aranyVilagos} 42%,
    ${tema.szin.arany} 68%,
    #f3ebdc 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

/**
 * Vékony pezsgőarany keret a gombokhoz és kiemelésekhez.
 */
export const aranyKeret = `1px solid rgba(197, 165, 114, 0.45)`

/**
 * Egységes fókuszkeret billentyűzetes navigációhoz.
 */
export const fokuszKeret = `
  outline: 2px solid ${tema.szin.aranyVilagos};
  outline-offset: 3px;
`

/**
 * Prémium számstílus: elegáns Georgia, enyhe italic, tágabb tracking.
 */
export const premiumSzamStilus = `
  font-family: ${tema.betu.szam};
  font-style: italic;
  font-weight: 700;
  font-variant-numeric: lining-nums proportional-nums;
  letter-spacing: 0.06em;
  color: ${tema.szin.aranyVilagos};
  background: linear-gradient(
    115deg,
    ${tema.szin.aranySotet} 0%,
    ${tema.szin.aranyVilagos} 45%,
    ${tema.szin.arany} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
