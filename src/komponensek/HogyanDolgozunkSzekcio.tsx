import styled from '@emotion/styled'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, revealAlap, premiumSzamStilus } from '../stilusok/tema'

/** Hogyan dolgozunk szekció kerete */
const FolyamatKeret = styled.section`
  padding: clamp(3rem, 7vw, 5rem) ${tema.oldalsoPadding};
  background: transparent;
`

/** Belső tartalom */
const BelsoTartalom = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

/** Szekció cím */
const SzekcioCim = styled.h2`
  margin-bottom: clamp(2rem, 5vw, 3rem);
  text-align: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3.2vw, 2.1rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
  ${revealAlap}
`

/** 1–3 lépésrács — folyamatos összekötő vonallal */
const LepesRac = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    /* Egy folyamatos vonal mindhárom lépésen át — az 1. is kapja */
    &::before {
      content: '';
      position: absolute;
      top: 1.55rem;
      left: 8%;
      right: 8%;
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(197, 165, 114, 0.15),
        rgba(197, 165, 114, 0.5) 20%,
        rgba(197, 165, 114, 0.5) 80%,
        rgba(197, 165, 114, 0.15)
      );
      pointer-events: none;
      z-index: 0;
    }
  }
`

/** Egy folyamat lépés */
const LepesKartya = styled.li<{ kesleltetes: string }>`
  position: relative;
  z-index: 1;
  padding: 0.5rem 0.25rem 0.5rem 0;
  ${revealAlap}
  transition-delay: ${(props) => props.kesleltetes};

  /* Mobil: függőleges összekötő minden lépésnél (az utolsó kivételével) */
  @media (max-width: ${tema.szelesseg.mobil}) {
    padding-left: 1.1rem;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 0.15rem;
      top: 3.2rem;
      bottom: -1.2rem;
      width: 1px;
      background: linear-gradient(
        180deg,
        rgba(197, 165, 114, 0.45),
        transparent
      );
      pointer-events: none;
    }
  }

  /* Asztali: rövid összekötő a szám jobb oldalán — mindháromnál, az utolsónál sem rejtjük el a közös vonalat */
  @media (min-width: ${tema.szelesseg.mobil}) {
    &::after {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 2.6rem;
      width: calc(100% - 1.5rem);
      height: 1px;
      background: linear-gradient(
        90deg,
        rgba(197, 165, 114, 0.55),
        rgba(197, 165, 114, 0.2)
      );
      pointer-events: none;
      z-index: 0;
    }

    &:last-child::after {
      width: 0;
      background: none;
    }
  }
`

/** Nagy 1–3 szám */
const LepesSzam = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 0.85rem;
  padding-right: 0.35rem;
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  line-height: 1;
  background: ${tema.hatter.fekete};
  ${premiumSzamStilus}
`

/** Lépés cím */
const LepesCim = styled.h3`
  margin-bottom: 0.55rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.88rem, 1.8vw, 1rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tema.szin.feher};
`

/** Lépés leírás */
const LepesLeiras = styled.p`
  max-width: 22rem;
  font-size: clamp(0.88rem, 1.6vw, 0.98rem);
  color: ${tema.szin.szurke};
`

type LepesTulajdonsagok = {
  szam: string
  cim: string
  leiras: string
  index: number
}

/**
 * Egy folyamat lépést jelenít meg scroll-reveallel.
 */
function FolyamatLepes({ szam, cim, leiras, index }: LepesTulajdonsagok) {
  const { referencia, lathato } = useScrollReveal<HTMLLIElement>(0.15)

  return (
    <LepesKartya
      ref={referencia}
      className={`folyamat-lepes${lathato ? ' lathato' : ''}`}
      kesleltetes={`${index * 0.12}s`}
    >
      <LepesSzam className="folyamat-szam" aria-hidden="true">
        {szam}
      </LepesSzam>
      <LepesCim className="folyamat-cim">{cim}</LepesCim>
      <LepesLeiras className="folyamat-leiras">{leiras}</LepesLeiras>
    </LepesKartya>
  )
}

/**
 * A „Hogyan dolgozunk” 1–3 idővonal szekciót jeleníti meg.
 */
export function HogyanDolgozunkSzekcio() {
  const { szoveg } = useNyelv()
  const cimReveal = useScrollReveal<HTMLHeadingElement>()

  return (
    <FolyamatKeret
      className="hogyan-dolgozunk-szekcio"
      id="hogyan-dolgozunk"
      aria-labelledby="hogyan-dolgozunk-cim"
    >
      <BelsoTartalom>
        <SzekcioCim
          ref={cimReveal.referencia}
          className={cimReveal.lathato ? 'lathato' : undefined}
          id="hogyan-dolgozunk-cim"
        >
          {szoveg.hogyanDolgozunk.cim}
        </SzekcioCim>

        <LepesRac className="folyamat-lepes-rac">
          {szoveg.hogyanDolgozunk.lepesek.map((lepes, index) => (
            <FolyamatLepes key={lepes.szam} {...lepes} index={index} />
          ))}
        </LepesRac>
      </BelsoTartalom>
    </FolyamatKeret>
  )
}
