import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Gomb } from './Gomb'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A hero tartalom felúszó animációja */
const feluszas = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/** A hero háttérképe */
const HosHatter = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.55) 48%, rgba(0, 0, 0, 0.28) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.4) 100%),
    url('/kepek/hos-hatter.png') center / cover no-repeat;
  transform: scale(1.04);
  animation: ${feluszas} 1.2s ease both;

  @media (max-width: ${tema.szelesseg.mobil}) {
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.78) 55%, rgba(0, 0, 0, 0.92) 100%),
      url('/kepek/hos-hatter.png') 70% center / cover no-repeat;
  }
`

/** A hero szöveges tartalma */
const HosTartalom = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 820px);
  animation: ${feluszas} 0.9s ease 0.15s both;
`

/** A nagy arany márkanév */
const MarkaCim = styled.h1`
  margin-bottom: 0.85rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.85rem, 8vw, 5.4rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 0.98;
  text-transform: uppercase;
  word-break: break-word;
  ${aranySzovegAtmenet}
`

/** A hero alcíme */
const HosAlcim = styled.p`
  margin-bottom: 0.7rem;
  max-width: 40rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.78rem, 2.2vw, 1.05rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tema.szin.feher};
`

/** A rövid mottó */
const HosMotto = styled.p`
  margin-bottom: 1.6rem;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.78rem, 2vw, 0.95rem);
  letter-spacing: 0.14em;
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
 * A főoldal hero szekcióját jeleníti meg a kiválasztott nyelven.
 */
export function HosSzekcio() {
  const { szoveg } = useNyelv()

  return (
    <HosKeret className="hos-szekcio" id="kezdooldal" aria-labelledby="hos-cim">
      <HosHatter className="hos-hatter" aria-hidden="true" />
      <HosTartalom className="hos-tartalom">
        <MarkaCim className="marka-cim" id="hos-cim">
          {szoveg.hos.markaNev}
        </MarkaCim>
        <HosAlcim className="hos-alcim">{szoveg.hos.alcim}</HosAlcim>
        <HosMotto className="hos-motto">{szoveg.hos.motto}</HosMotto>
        <GombSor className="hos-gomb-sor">
          <Gomb
            className="hos-elsodleges-gomb"
            href="#kapcsolat"
            valtozat="telitett"
            mutatNyilat
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
      </HosTartalom>
    </HosKeret>
  )
}
