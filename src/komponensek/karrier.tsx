import { useEffect } from 'react'
import styled from '@emotion/styled'
import { Fejlec } from './Fejlec'
import { LablecSzekcio } from './LablecSzekcio'
import { Gomb } from './Gomb'
import { SeoFej } from './SeoFej'
import { UgrasATartalomra } from './UgrasATartalomra'
import { ScrollHaladas } from './ScrollHaladas'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { telefonszam } from '../adatok/fooldalAdatok'
import { tema, aranySzovegAtmenet, revealAlap } from '../stilusok/tema'

/** A karrier oldal gyökér kerete */
const KarrierKeret = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  background: transparent;
  color: ${tema.szin.feher};
`

/** Fő tartalom a fejléc alatt */
const KarrierTartalom = styled.main`
  padding-top: clamp(5.5rem, 12vh, 7rem);
`

/** Hero sáv a karrier oldal tetején */
const KarrierHos = styled.section`
  padding: clamp(2.5rem, 6vw, 4rem) ${tema.oldalsoPadding} clamp(2rem, 5vw, 3rem);
  border-bottom: 1px solid rgba(197, 165, 114, 0.16);
  background: rgba(27, 27, 27, 0.55);
`

/** Belső max szélesség */
const Belso = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

/** Oldalcím */
const Cim = styled.h1`
  margin-bottom: 0.85rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** Alcím */
const Alcim = styled.p`
  margin-bottom: 1.1rem;
  max-width: 36rem;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tema.szin.feher};
`

/** Bevezető bekezdés */
const Bekezdes = styled.p`
  max-width: 40rem;
  color: ${tema.szin.szurke};
  font-size: clamp(0.92rem, 1.8vw, 1.02rem);
`

/** Pozíciók / előnyök szekció */
const Szekcio = styled.section`
  padding: clamp(2.5rem, 6vw, 4rem) ${tema.oldalsoPadding};
`

/** Szekció alcím */
const SzekcioCim = styled.h2`
  margin-bottom: clamp(1.4rem, 3vw, 2rem);
  font-family: ${tema.betu.cim};
  font-size: clamp(1.15rem, 2.8vw, 1.6rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
  ${revealAlap}
`

/** Pozíció kártyák rácsa */
const PozicioRac = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

/** Egy nyitott pozíció */
const PozicioKartya = styled.article`
  padding: 1.4rem 1.35rem;
  border: 1px solid rgba(197, 165, 114, 0.28);
  background: rgba(37, 37, 37, 0.65);
  ${revealAlap}
  transition: border-color 0.3s ease, transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      border-color: rgba(197, 165, 114, 0.55);
      transform: translateY(-3px);
    }
  }
`

/** Pozíció címe */
const PozicioCim = styled.h3`
  margin-bottom: 0.65rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** Pozíció leírása */
const PozicioLeiras = styled.p`
  margin-bottom: 1rem;
  color: ${tema.szin.szurke};
  font-size: clamp(0.88rem, 1.6vw, 0.96rem);
`

/** Elvárások listája */
const ElvarasLista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`

/** Egy elvárás pont */
const ElvarasPont = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  color: ${tema.szin.feher};
  font-size: clamp(0.84rem, 1.5vw, 0.92rem);

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    margin-top: 0.4rem;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`

/** Előnyök lista */
const ElonyLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem 1.5rem;
  ${revealAlap}

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: 1fr 1fr;
  }
`

/** Egy előny */
const ElonyPont = styled.li`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: ${tema.szin.feher};
  font-size: clamp(0.88rem, 1.6vw, 0.98rem);

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`

/** CTA sáv */
const CtaSav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 2rem;
  ${revealAlap}
`

/**
 * A Karrier oldalt jeleníti meg: nyitott pozíciók, előnyök és jelentkezési CTA.
 */
export function Karrier() {
  const { szoveg } = useNyelv()
  const pozicioReveal = useScrollReveal<HTMLHeadingElement>()
  const elonyReveal = useScrollReveal<HTMLUListElement>()
  const ctaReveal = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <KarrierKeret className="karrier-oldal">
      <ScrollHaladas />
      <SeoFej
        cimFeluliras={szoveg.karrier.seoCim}
        leirasFeluliras={szoveg.karrier.seoLeiras}
      />
      <UgrasATartalomra />
      <Fejlec mindigSticky />

      <KarrierTartalom id="fo-tartalom">
        <KarrierHos className="karrier-hos" aria-labelledby="karrier-cim">
          <Belso>
            <Cim id="karrier-cim">{szoveg.karrier.cim}</Cim>
            <Alcim className="karrier-alcim">{szoveg.karrier.alcim}</Alcim>
            <Bekezdes className="karrier-bekezdes">{szoveg.karrier.bekezdes}</Bekezdes>
          </Belso>
        </KarrierHos>

        <Szekcio className="karrier-poziciok" aria-labelledby="karrier-poziciok-cim">
          <Belso>
            <SzekcioCim
              ref={pozicioReveal.referencia}
              id="karrier-poziciok-cim"
              className={pozicioReveal.lathato ? 'lathato' : undefined}
            >
              {szoveg.karrier.poziciokCim}
            </SzekcioCim>

            <PozicioRac className="karrier-pozicio-rac">
              {szoveg.karrier.poziciok.map((pozicio, index) => (
                <PozicioKartya
                  key={pozicio.cim}
                  className="karrier-pozicio-kartya lathato"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <PozicioCim>{pozicio.cim}</PozicioCim>
                  <PozicioLeiras>{pozicio.leiras}</PozicioLeiras>
                  <ElvarasLista>
                    {pozicio.elvarasok.map((elvaras) => (
                      <ElvarasPont key={elvaras}>{elvaras}</ElvarasPont>
                    ))}
                  </ElvarasLista>
                </PozicioKartya>
              ))}
            </PozicioRac>
          </Belso>
        </Szekcio>

        <Szekcio
          className="karrier-elonyok"
          aria-labelledby="karrier-elonyok-cim"
          style={{ background: 'rgba(27, 27, 27, 0.7)' }}
        >
          <Belso>
            <SzekcioCim id="karrier-elonyok-cim" className="lathato">
              {szoveg.karrier.elonyokCim}
            </SzekcioCim>
            <ElonyLista
              ref={elonyReveal.referencia}
              className={elonyReveal.lathato ? 'lathato' : undefined}
            >
              {szoveg.karrier.elonyok.map((elony) => (
                <ElonyPont key={elony}>{elony}</ElonyPont>
              ))}
            </ElonyLista>

            <CtaSav
              ref={ctaReveal.referencia}
              className={ctaReveal.lathato ? 'lathato' : undefined}
            >
              <Gomb
                className="karrier-jelentkezes-gomb"
                href={`tel:${telefonszam.replace(/\s/g, '')}`}
                valtozat="telitett"
                mutatNyilat
                hanggal
                ariaLabel={`${szoveg.karrier.gomb}: ${telefonszam}`}
              >
                {szoveg.karrier.gomb}
              </Gomb>
            </CtaSav>
          </Belso>
        </Szekcio>
      </KarrierTartalom>

      <LablecSzekcio />
    </KarrierKeret>
  )
}

export default Karrier
