import { Global, css } from '@emotion/react'
import { tema, fokuszKeret } from './tema'

/**
 * Az egész oldal alapvető, globális Emotion stílusait adja vissza.
 * Ambient fény, finom zajtextúra, Georgia tipográfia.
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
      position: relative;
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

    /* Ambient arany fény — mélység a sötét háttéren */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(
          ellipse 70% 50% at 15% 10%,
          rgba(197, 165, 114, 0.07),
          transparent 55%
        ),
        radial-gradient(
          ellipse 55% 45% at 85% 75%,
          rgba(197, 165, 114, 0.05),
          transparent 50%
        ),
        radial-gradient(
          ellipse 40% 30% at 50% 100%,
          rgba(143, 115, 73, 0.06),
          transparent 45%
        );
    }

    /* Finom filmzaj — prémium textúra */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      z-index: 9998;
      pointer-events: none;
      opacity: 0.035;
      mix-blend-mode: overlay;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 180px 180px;
    }

    #root {
      position: relative;
      z-index: 1;
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

      body::after {
        opacity: 0;
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
