import { Global, css } from '@emotion/react'
import { tema } from './tema'

/**
 * Az egész oldal alapvető, globális Emotion stílusait adja vissza.
 * Nincs külön CSS fájl — minden Emotionön keresztül megy.
 */
function globalisStilusok() {
  return css`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;700&family=Montserrat:wght@500;600;700;800&display=swap');

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      min-height: 100vh;
      background: ${tema.hatter.fekete};
      color: ${tema.szin.feher};
      font-family: ${tema.betu.torzs};
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      max-width: 100%;
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
  `
}

/**
 * A globális Emotion stílusokat injektálja az alkalmazásba.
 */
export function GlobalisStilus() {
  return <Global styles={globalisStilusok()} />
}
