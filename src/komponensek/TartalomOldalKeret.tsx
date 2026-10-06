import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import { SeoFej, type SeoFeluliras } from './SeoFej'
import { UgrasATartalomra } from './UgrasATartalomra'
import { Gomb } from './Gomb'
import { PremiumSzam } from './PremiumSzam'
import { useTelefonszam } from '../tartalom/WeboldalTartalomContext'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'

/** Teljes oldalkeret — flex: a lábléc a viewport alján marad rövid tartalomnál is */
const Keret = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-height: 100svh;
  overflow-x: clip;
  background: ${tema.hatter.fekete};
  color: ${tema.szin.feher};
`

/** Fő tartalom */
const FoTartalom = styled.main`
  display: block;
  flex: 1 0 auto;
  padding-top: clamp(5.5rem, 12vh, 7rem);
  padding-bottom: clamp(3rem, 8vh, 5rem);
`

/** Belső max szélesség */
export const OldalBelso = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  padding: 0 ${tema.oldalsoPadding};
`

/** Oldalcím */
export const OldalCim = styled.h1`
  margin: 0 0 0.85rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.45rem, 3.4vw, 2.35rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.22;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}
`

/** Alcím */
export const OldalAlcim = styled.p`
  margin: 0 0 1.75rem;
  max-width: 42rem;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.98rem, 1.8vw, 1.12rem);
  font-style: italic;
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: ${tema.szin.arany};
`

/** Bekezdés */
export const OldalBekezdes = styled.p`
  margin: 0 0 1.15rem;
  max-width: 46rem;
  color: ${tema.szin.szurke};
  font-size: clamp(0.94rem, 1.5vw, 1.05rem);
  line-height: 1.75;
`

/** Szekciócím az oldalon belül */
export const OldalSzekcioCim = styled.h2`
  margin: 2.75rem 0 1.25rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** Listapontok */
export const OldalLista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 0 0 1.5rem;
  padding: 0;
  list-style: none;
  max-width: 46rem;
`

export const OldalListaPont = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: ${tema.szin.feher};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.55;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    margin-top: 0.45rem;
    flex-shrink: 0;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
  }
`

/** Alsó kapcsolat-sáv */
const AlsoSav = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
  padding: 1.75rem ${tema.oldalsoPadding} 2.25rem;
  background: ${tema.hatter.sotet};
`

const AlsoBelso = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const AlsoSzoveg = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  font-size: 0.95rem;
`

type TartalomOldalKeretTulajdonsagok = {
  children: ReactNode
  seo: SeoFeluliras
}

/**
 * Közös keret a tartalomoldalakhoz: SEO, alsó kapcsolat-sáv (fejléc a NyilvanosLayout-ban).
 */
export function TartalomOldalKeret({ children, seo }: TartalomOldalKeretTulajdonsagok) {
  const telefonszam = useTelefonszam()
  const { szoveg } = useNyelv()

  return (
    <Keret className="tartalom-oldal-keret">
      <SeoFej feluliras={seo} />
      <UgrasATartalomra />
      <FoTartalom className="tartalom-fo" id="fo-tartalom">
        {children}
      </FoTartalom>
      <AlsoSav className="tartalom-also-sav">
        <AlsoBelso>
          <AlsoSzoveg>{szoveg.lablec.markaLeiras}</AlsoSzoveg>
          <Gomb
            href={`tel:${telefonszam.replace(/\s/g, '')}`}
            valtozat="telefon"
            mutatTelefont
            ariaLabel={telefonszam}
          >
            <PremiumSzam>{telefonszam}</PremiumSzam>
          </Gomb>
        </AlsoBelso>
      </AlsoSav>
    </Keret>
  )
}
