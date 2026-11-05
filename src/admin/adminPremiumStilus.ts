import { css } from '@emotion/react'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'

/** Közös prémium kártya — arany fénycsík + finom belső fény. */
export const premiumKartya = css`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(ellipse 80% 60% at 100% 0%, rgba(197, 165, 114, 0.1), transparent 55%),
    radial-gradient(ellipse 50% 40% at 0% 100%, rgba(197, 165, 114, 0.06), transparent 50%),
    linear-gradient(168deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.008) 100%),
    ${tema.hatter.emelt};
  border: 1px solid rgba(197, 165, 114, 0.32);
  box-shadow:
    inset 0 1px 0 rgba(232, 215, 181, 0.1),
    ${tema.arnyek.kartya};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(232, 215, 181, 0.55) 45%,
      rgba(197, 165, 114, 0.35) 55%,
      transparent
    );
    pointer-events: none;
  }
`

export const premiumSzekcioCim = css`
  margin: 0 0 1rem;
  padding-bottom: 0.65rem;
  font-family: ${tema.betu.cim};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
  border-bottom: 1px solid rgba(197, 165, 114, 0.18);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 2.75rem;
    height: 1px;
    background: linear-gradient(90deg, ${tema.szin.arany}, transparent);
  }
`

export const premiumOldalCim = css`
  margin: 0 0 1.25rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.88rem, 1.8vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`
