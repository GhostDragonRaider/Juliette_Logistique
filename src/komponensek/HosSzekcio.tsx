import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Gomb } from './Gomb'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, fokuszKeret } from '../stilusok/tema'

/** A hero háttérképei — váltakozó prémium jelenetek */
const hosKepek = [
  '/kepek/hos-mercedes.png',
  '/kepek/hos-bmw.png',
  '/kepek/hos-volvo.png',
] as const

/** Egy dián töltött idő (ms) */
const DIA_IDO = 6500

/** Áttűnés hossza (ms) — prémium, lassú crossfade */
const ATTUNES_IDO = 1600

/** Ken Burns: lassú zoom a látható képen */
const kenBurns = keyframes`
  0% {
    transform: scale(1.04) translate3d(0, 0, 0);
  }
  100% {
    transform: scale(1.12) translate3d(-1.2%, -0.8%, 0);
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

/** A váltakozó háttérképek konténere */
const HatterKeret = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`

/** Egy háttérkép réteg — soft crossfade + Ken Burns */
const KepReteg = styled.div<{ aktiv: boolean; kep: string }>`
  position: absolute;
  inset: 0;
  background: url(${(props) => props.kep}) center / cover no-repeat;
  opacity: ${(props) => (props.aktiv ? 1 : 0)};
  transform: scale(${(props) => (props.aktiv ? 1 : 1.04)});
  transition:
    opacity ${ATTUNES_IDO}ms cubic-bezier(0.4, 0, 0.2, 1),
    transform ${ATTUNES_IDO}ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${(props) => (props.aktiv ? kenBurns : 'none')} ${DIA_IDO + ATTUNES_IDO}ms
    ease-in-out both;
  will-change: opacity, transform;

  @media (max-width: ${tema.szelesseg.mobil}) {
    background-position: 65% center;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity 0.4s ease;
    transform: scale(1.04);
  }
`

/** Sötét fátyol a szöveg olvashatóságához — minden kép felett */
const HatterFatyol = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(20, 20, 20, 0.78) 0%, rgba(20, 20, 20, 0.42) 48%, rgba(20, 20, 20, 0.22) 100%),
    linear-gradient(0deg, rgba(20, 20, 20, 0.72) 0%, rgba(20, 20, 20, 0.18) 48%, rgba(20, 20, 20, 0.28) 100%);

  @media (max-width: ${tema.szelesseg.mobil}) {
    background: linear-gradient(
      180deg,
      rgba(20, 20, 20, 0.4) 0%,
      rgba(20, 20, 20, 0.62) 55%,
      rgba(20, 20, 20, 0.82) 100%
    );
  }
`

/** Finom arany indikátor pontok a hero alján */
const IndikatorSor = styled.div`
  position: absolute;
  right: ${tema.oldalsoPadding};
  bottom: clamp(1.4rem, 4vh, 2.4rem);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.55rem;
`

/** Egy indikátor pont / vékony arany vonal */
const IndikatorPont = styled.button<{ aktiv: boolean }>`
  width: ${(props) => (props.aktiv ? '28px' : '8px')};
  height: 3px;
  padding: 0;
  border-radius: 1px;
  background: ${(props) =>
    props.aktiv ? tema.szin.aranyVilagos : 'rgba(197, 165, 114, 0.35)'};
  box-shadow: ${(props) =>
    props.aktiv ? '0 0 10px rgba(197, 165, 114, 0.35)' : 'none'};
  transition:
    width 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    background: ${tema.szin.arany};
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

/** A hero szöveges tartalma */
const HosTartalom = styled.div`
  position: relative;
  z-index: 2;
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
 * A főoldal hero szekcióját jeleníti meg váltakozó háttérképekkel.
 * Soft crossfade + Ken Burns — görgetéskor a háttér nem mozog.
 */
export function HosSzekcio() {
  const { szoveg } = useNyelv()
  const [aktivIndex, setAktivIndex] = useState(0)

  useEffect(() => {
    /**
     * Előre betölti a hero képeket, hogy az áttűnés ne villogjon.
     */
    hosKepek.forEach((forras) => {
      const kep = new Image()
      kep.src = forras
    })
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      return
    }

    /**
     * Időközönként a következő képre vált soft crossfade-del.
     */
    const idozito = window.setInterval(() => {
      setAktivIndex((elozo) => (elozo + 1) % hosKepek.length)
    }, DIA_IDO)

    return () => window.clearInterval(idozito)
  }, [aktivIndex])

  /**
   * Manuálisan egy adott diára vált (indikátor kattintás).
   */
  function diaraValt(index: number) {
    setAktivIndex(index)
  }

  return (
    <HosKeret
      className="hos-szekcio"
      id="kezdooldal"
      aria-labelledby="hos-cim"
    >
      <HatterKeret className="hos-hatter-keret" aria-hidden="true">
        {hosKepek.map((kep, index) => (
          <KepReteg
            key={kep}
            className="hos-kep-reteg"
            kep={kep}
            aktiv={index === aktivIndex}
          />
        ))}
        <HatterFatyol className="hos-hatter-fatyol" />
      </HatterKeret>

      <IndikatorSor className="hos-indikator-sor" role="tablist" aria-label="Háttérképek">
        {hosKepek.map((kep, index) => (
          <IndikatorPont
            key={kep}
            type="button"
            className="hos-indikator"
            aktiv={index === aktivIndex}
            aria-label={`${index + 1}. háttérkép`}
            aria-current={index === aktivIndex}
            onClick={() => diaraValt(index)}
          />
        ))}
      </IndikatorSor>

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
