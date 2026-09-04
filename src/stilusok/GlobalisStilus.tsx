import { Global, css } from '@emotion/react'
import { tema, fokuszKeret } from './tema'

/**
 * Az egész oldal alapvető, globális Emotion stílusait adja vissza.
 * Georgia tipográfia, prémium háttér és akadálymentes fókusz.
 */
function globalisStilusok() {
  return css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }

    body {
      min-height: 100vh;
      min-height: 100dvh;
      overflow-x: hidden;
      background: ${tema.hatter.fekete};
      color: ${tema.szin.feher};
      font-family: ${tema.betu.torzs};
      font-size: clamp(0.98rem, 0.94rem + 0.2vw, 1.08rem);
      line-height: 1.65;
      letter-spacing: 0.01em;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    #root {
      overflow-x: hidden;
      min-width: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img,
    svg {
      display: block;
      max-width: 100%;
      height: auto;
    }

    button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    ul {
      list-style: none;
    }

    :focus-visible {
      ${fokuszKeret}
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    @media (max-width: ${tema.szelesseg.kicsi}) {
      body {
        line-height: 1.55;
      }
    }
  `
}

/**
 * A globális Emotion stílusokat injektálja az alkalmazásba.
 */
export function GlobalisStilus() {
  return <Global styles={globalisStilusok()} />
}
