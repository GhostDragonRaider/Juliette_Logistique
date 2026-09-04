import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Gomb } from './Gomb'
import { hosSzovegek } from '../adatok/fooldalAdatok'
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
  display: flex;
  align-items: flex-end;
  padding: 7rem 4vw 5.5rem;
  overflow: hidden;
`

/** A hero háttérképe */
const HosHatter = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.45) 48%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.35) 100%),
    url('/kepek/hos-hatter.png') center / cover no-repeat;
  transform: scale(1.04);
  animation: ${feluszas} 1.2s ease both;
`

/** A hero szöveges tartalma */
const HosTartalom = styled.div`
  position: relative;
  z-index: 1;
  max-width: 820px;
  animation: ${feluszas} 0.9s ease 0.15s both;
`

/** A nagy arany márkanév */
const MarkaCim = styled.h1`
  margin-bottom: 1rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(2.4rem, 7vw, 5.4rem);
  font-weight: 800;
  letter-spacing: 0.06em;
  line-height: 0.95;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A hero alcíme */
const HosAlcim = styled.p`
  margin-bottom: 0.7rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.85rem, 1.6vw, 1.05rem);
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${tema.szin.feher};
`

/** A rövid mottó */
const HosMotto = styled.p`
  margin-bottom: 2rem;
  font-family: ${tema.betu.torzs};
  font-size: 0.95rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** A két CTA gomb sora */
const GombSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`

/**
 * A főoldal hero szekcióját jeleníti meg: háttérkép, márkanév, alcím és CTA gombok.
 */
export function HosSzekcio() {
  return (
    <HosKeret className="hos-szekcio" id="kezdooldal">
      <HosHatter className="hos-hatter" aria-hidden="true" />
      <HosTartalom className="hos-tartalom">
        <MarkaCim className="marka-cim">{hosSzovegek.markaNev}</MarkaCim>
        <HosAlcim className="hos-alcim">{hosSzovegek.alcim}</HosAlcim>
        <HosMotto className="hos-motto">{hosSzovegek.mottó}</HosMotto>
        <GombSor className="hos-gomb-sor">
          <Gomb
            className="hos-elsodleges-gomb"
            href="#kapcsolat"
            valtozat="telitett"
            mutatNyilat
          >
            {hosSzovegek.elsodlegesGomb}
          </Gomb>
          <Gomb
            className="hos-masodlagos-gomb"
            href="#rolunk"
            valtozat="korvonal"
            mutatNyilat
          >
            {hosSzovegek.masodlagosGomb}
          </Gomb>
        </GombSor>
      </HosTartalom>
    </HosKeret>
  )
}
