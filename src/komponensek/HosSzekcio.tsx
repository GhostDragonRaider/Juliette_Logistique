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

/** A hero háttérképe — lágyabb fátyol, nem túl sötét */
const HosHatter = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(20, 20, 20, 0.78) 0%, rgba(20, 20, 20, 0.42) 48%, rgba(20, 20, 20, 0.18) 100%),
    linear-gradient(0deg, rgba(20, 20, 20, 0.72) 0%, rgba(20, 20, 20, 0.18) 48%, rgba(20, 20, 20, 0.28) 100%),
    url('/kepek/hos-hatter.png') center / cover no-repeat;
  transform: scale(1.04);
  animation: ${feluszas} 1.2s ease both;

  @media (max-width: ${tema.szelesseg.mobil}) {
    background:
      linear-gradient(180deg, rgba(20, 20, 20, 0.4) 0%, rgba(20, 20, 20, 0.62) 55%, rgba(20, 20, 20, 0.82) 100%),
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

/** A nagy arany márkanév — Georgia, elegáns tracking */
const MarkaCim = styled.h1`
  margin-bottom: 0.9rem;
  font-family: ${tema.betu.marka};
  font-size: clamp(2rem, 7.5vw, 5rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.02;
  text-transform: uppercase;
  word-break: break-word;
  ${aranySzovegAtmenet}
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
