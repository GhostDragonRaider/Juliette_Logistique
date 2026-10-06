import styled from '@emotion/styled'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'
import { useWeboldalTartalom } from '../tartalom/WeboldalTartalomContext'
import { SeoFej } from './SeoFej'

const Oldal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${tema.oldalsoPadding}
    clamp(3.5rem, 9vh, 6rem);
  color: ${tema.szin.feher};
`

const Keret = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: min(100%, 46rem);
`

const FoCim = styled.h1`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}
`

const Alcim = styled.p`
  margin: -0.5rem 0 0.5rem;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${tema.szin.arany};
`

const Frissites = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.86rem;
  color: ${tema.szin.szurkeSotet};
`

const Szekcio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`

const SzekcioCim = styled.h2`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const Bekezdes = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  line-height: 1.75;
`

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-left: 1.15rem;
  color: ${tema.szin.szurke};
  line-height: 1.7;

  li {
    list-style: disc;
    padding-left: 0.2rem;
  }

  li::marker {
    color: ${tema.szin.arany};
  }
`

/**
 * Általános adatvédelmi tájékoztató a jelentkezési folyamatához (HU / EN / DE).
 */
export function AdatvedelmiTajekoztato() {
  const { szoveg } = useNyelv()
  const { cegnev } = useWeboldalTartalom()
  const adatvedelmi = szoveg.adatvedelmi

  return (
    <>
      <SeoFej feluliras={adatvedelmi.seo} />
      <Oldal className="adatvedelmi-oldal">
        <Keret>
          <FoCim>{adatvedelmi.foCim}</FoCim>
          <Alcim>{cegnev}</Alcim>
          <Frissites>{adatvedelmi.frissites}</Frissites>

          {adatvedelmi.szekciok.map((szekcio) => (
            <Szekcio key={szekcio.cim}>
              <SzekcioCim>{szekcio.cim}</SzekcioCim>
              {szekcio.bekezdesek?.map((szovegSor) => (
                <Bekezdes key={szovegSor}>{szovegSor}</Bekezdes>
              ))}
              {szekcio.lista ? (
                <Lista>
                  {szekcio.lista.map((elem) => (
                    <li key={elem}>{elem}</li>
                  ))}
                </Lista>
              ) : null}
            </Szekcio>
          ))}
        </Keret>
      </Oldal>
    </>
  )
}

export default AdatvedelmiTajekoztato
