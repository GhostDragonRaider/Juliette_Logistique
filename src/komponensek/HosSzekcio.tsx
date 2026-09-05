import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Gomb } from './Gomb'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** Ken Burns: lassú zoom + pan a háttérképen */
const kenBurns = keyframes`
  0% {
    transform: scale(1.08) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.18) translate3d(-2.5%, -1.5%, 0);
  }
`

/** Arany fényseprés a márkanév felett */
const fenySepes = keyframes`
  0% {
    transform: translateX(-120%) skewX(-18deg);
    opacity: 0;
  }
  20% {
    opacity: 0.55;
  }
  55% {
    opacity: 0.35;
  }
  100% {
    transform: translateX(220%) skewX(-18deg);
    opacity: 0;
  }
`

/** Szöveg staggered fade-in */
const szovegFade = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 22px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

/** A hero teljes szélességű szekciója */
const HosKeret = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: flex-end;
  padding:
    clamp(6rem, 14vh, 8rem)
    ${tema.oldalsoPadding}
    clamp(3rem, 8vh, 5.5rem);
  overflow: hidden;
`

/** Parallax réteg a háttérhez */
const HatterParallax = styled.div<{ eltolas: number }>`
  position: absolute;
  inset: -8% 0 -4%;
  transform: translate3d(0, ${(props) => props.eltolas}px, 0);
  will-change: transform;
  transition: transform 0.08s linear;
`

/** A hero háttérkép — Ken Burns mozgással */
const HosHatter = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(20, 20, 20, 0.78) 0%, rgba(20, 20, 20, 0.42) 48%, rgba(20, 20, 20, 0.18) 100%),
    linear-gradient(0deg, rgba(20, 20, 20, 0.72) 0%, rgba(20, 20, 20, 0.18) 48%, rgba(20, 20, 20, 0.28) 100%),
    url('/kepek/hos-hatter.png') center / cover no-repeat;
  animation: ${kenBurns} 28s ease-in-out infinite alternate;
  will-change: transform;

  @media (max-width: ${tema.szelesseg.mobil}) {
    background:
      linear-gradient(180deg, rgba(20, 20, 20, 0.4) 0%, rgba(20, 20, 20, 0.62) 55%, rgba(20, 20, 20, 0.82) 100%),
      url('/kepek/hos-hatter.png') 70% center / cover no-repeat;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: scale(1.04);
  }
`

/** A hero szöveges tartalma */
const HosTartalom = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 860px);
`

/** Fade wrapper késleltetéssel */
const FadeSor = styled.div<{ kesleltetes: string }>`
  animation: ${szovegFade} 0.95s cubic-bezier(0.22, 1, 0.36, 1) ${(props) => props.kesleltetes} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

/** A nagy arany márkanév — Juliette + LOGISTIQUE tipográfia */
const MarkaCim = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  margin-bottom: 0.9rem;
  overflow: hidden;
  font-family: ${tema.betu.marka};
  font-weight: 700;
  line-height: 0.98;
  text-transform: uppercase;
  word-break: break-word;
`

/** „Juliette” — expresszívebb display */
const MarkaJuliette = styled.span`
  font-size: clamp(2.15rem, 8vw, 5.2rem);
  letter-spacing: 0.04em;
  ${aranySzovegAtmenet}
`

/** „LOGISTIQUE” — keskenyebb, tracking-es */
const MarkaLogistique = styled.span`
  font-size: clamp(1.05rem, 3.6vw, 2.05rem);
  font-weight: 600;
  letter-spacing: 0.28em;
  color: ${tema.szin.aranyVilagos};
  opacity: 0.92;
`

/** Arany fényseprés a márka felett */
const FenySepes = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(232, 215, 181, 0.35) 50%,
    transparent 100%
  );
  animation: ${fenySepes} 4.5s ease-in-out 1.2s infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`

/** A hero alcíme */
const HosAlcim = styled.p`
  margin-bottom: 0.75rem;
  max-width: 40rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.82rem, 2vw, 1.05rem);
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tema.szin.feher};
`

/** A rövid mottó */
const HosMotto = styled.p`
  margin-bottom: 1.7rem;
  font-family: ${tema.betu.marka};
  font-size: clamp(0.82rem, 1.8vw, 1rem);
  font-style: italic;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** A két CTA gomb sora */
const GombSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: ${tema.szelesseg.kicsi}) {
    flex-direction: column;
    align-items: stretch;

    a {
      width: 100%;
    }
  }
`

/**
 * A főoldal hero szekcióját jeleníti meg cinematic motionnal.
 */
export function HosSzekcio() {
  const { szoveg } = useNyelv()
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    /**
     * Finom parallax: a háttér lassabban mozog, mint a görgetés.
     */
    function parallaxFigyelo() {
      const y = window.scrollY
      const max = window.innerHeight
      if (y > max * 1.2) {
        return
      }
      setParallax(y * 0.28)
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      return
    }

    parallaxFigyelo()
    window.addEventListener('scroll', parallaxFigyelo, { passive: true })
    return () => window.removeEventListener('scroll', parallaxFigyelo)
  }, [])

  return (
    <HosKeret
      className="hos-szekcio"
      id="kezdooldal"
      aria-labelledby="hos-cim"
    >
      <HatterParallax eltolas={parallax} aria-hidden="true">
        <HosHatter className="hos-hatter" />
      </HatterParallax>

      <HosTartalom className="hos-tartalom">
        <FadeSor kesleltetes="0.1s">
          <MarkaCim className="marka-cim" id="hos-cim">
            <MarkaJuliette className="marka-juliette">Juliette</MarkaJuliette>
            <MarkaLogistique className="marka-logistique">Logistique</MarkaLogistique>
            <FenySepes aria-hidden="true" />
          </MarkaCim>
        </FadeSor>

        <FadeSor kesleltetes="0.28s">
          <HosAlcim className="hos-alcim">{szoveg.hos.alcim}</HosAlcim>
        </FadeSor>

        <FadeSor kesleltetes="0.42s">
          <HosMotto className="hos-motto">{szoveg.hos.motto}</HosMotto>
        </FadeSor>

        <FadeSor kesleltetes="0.55s">
          <GombSor className="hos-gomb-sor">
            <Gomb
              className="hos-elsodleges-gomb"
              href="#kapcsolat"
              valtozat="telitett"
              mutatNyilat
              hanggal
            >
              {szoveg.hos.elsodlegesGomb}
            </Gomb>
            <Gomb
              className="hos-masodlagos-gomb"
              href="#rolunk"
              valtozat="korvonal"
              mutatNyilat
            >
              {szoveg.hos.masodlagosGomb}
            </Gomb>
          </GombSor>
        </FadeSor>
      </HosTartalom>
    </HosKeret>
  )
}
