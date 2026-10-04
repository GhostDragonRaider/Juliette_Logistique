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
      height: 100%;
      overflow: hidden;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }

    #fejlec-portal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      width: 100%;
      pointer-events: none;
    }

    #fejlec-portal > * {
      pointer-events: auto;
    }

    body {
      height: 100%;
      overflow: hidden;
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
      height: 100%;
      min-width: 0;
      overflow-x: clip;
      overflow-y: auto;
      overscroll-behavior-y: none;
      scroll-behavior: smooth;
      scroll-padding-top: clamp(5rem, 12vh, 6.5rem);
      -webkit-overflow-scrolling: touch;
    }

    .fejlec-sav {
      position: relative;
      width: 100%;
      max-width: 100vw;
      box-sizing: border-box;
      transform: none !important;
      transition: none !important;
      animation: none !important;
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
      text-align: center;
    }

    input[type='submit'],
    input[type='button'],
    input[type='reset'] {
      text-align: center;
    }

    ul {
      list-style: none;
    }

    :focus-visible {
      ${fokuszKeret}
    }

    @media (prefers-reduced-motion: reduce) {
      #root {
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
