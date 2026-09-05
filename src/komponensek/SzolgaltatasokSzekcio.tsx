import styled from '@emotion/styled'
import { AranyIkon } from './AranyIkon'
import { Gomb } from './Gomb'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, fokuszKeret, revealAlap } from '../stilusok/tema'

/** A szolgáltatások szekció kerete */
const SzolgaltatasokKeret = styled.section`
  padding: clamp(3rem, 7vw, 5rem) ${tema.oldalsoPadding};
  background: transparent;
`

/** Belső max szélességű tartalom */
const BelsoTartalom = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

/** A szekció címe */
const SzekcioCim = styled.h2`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3.2vw, 2.1rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
  ${revealAlap}
`

/** A szolgáltatás kártyák rácsa */
const KartyaRac = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
`

/** Egy szolgáltatás kártya — gradient arany stroke + kép zoom */
const SzolgaltatasKartya = styled.article<{ kesleltetes: string }>`
  position: relative;
  min-height: clamp(240px, 40vw, 300px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.55rem;
  padding: 1.25rem;
  overflow: hidden;
  isolation: isolate;
  background: ${tema.hatter.kartya};
  ${revealAlap}
  transition-delay: ${(props) => props.kesleltetes};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      145deg,
      rgba(232, 215, 181, 0.55),
      rgba(197, 165, 114, 0.12) 40%,
      rgba(143, 115, 73, 0.45)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 2;
    opacity: 0.7;
    transition: opacity 0.35s ease;
  }

  @media (hover: hover) {
    &:hover::before {
      opacity: 1;
    }

    &:hover .szolgaltatas-kep-reteg {
      transform: scale(1.08);
    }

    &:hover {
      transform: translate3d(0, -6px, 0);
      box-shadow: ${tema.arnyek.aranyFeny};
    }

    &.lathato:hover {
      transform: translate3d(0, -6px, 0);
    }
  }

  &:focus-within {
    ${fokuszKeret}
  }
`

/** Háttérkép réteg — zoom hoverhez */
const KepReteg = styled.div<{ kep: string }>`
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.9) 72%),
    url(${(props) => props.kep}) center / cover no-repeat;
  transform: scale(1.01);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
`

/** Kártya szöveges tartalom */
const KartyaTartalom = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

/** A kártya címe */
const KartyaCim = styled.h3`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.78rem, 1.8vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** A kártya leírása */
const KartyaLeiras = styled.p`
  font-size: clamp(0.84rem, 1.6vw, 0.92rem);
  color: ${tema.szin.szurke};
`

/** A gomb középre igazított sora */
const KozepGombSor = styled.div`
  display: flex;
  justify-content: center;
  ${revealAlap}
`

type KartyaTulajdonsagok = {
  azonosito: string
  cim: string
  leiras: string
  kep: string
  ikon: 'auto' | 'kulcs' | 'flotta' | 'ut' | 'europa' | 'kamera'
  index: number
}

/**
 * Egy szolgáltatás kártyát jelenít meg scroll-reveallel.
 */
function SzolgaltatasKartyaElem({ cim, leiras, kep, ikon, index }: KartyaTulajdonsagok) {
  const { referencia, lathato } = useScrollReveal<HTMLElement>(0.12)

  return (
    <SzolgaltatasKartya
      ref={referencia}
      className={`szolgaltatas-kartya${lathato ? ' lathato' : ''}`}
      kesleltetes={`${index * 0.08}s`}
    >
      <KepReteg className="szolgaltatas-kep-reteg" kep={kep} aria-hidden="true" />
      <KartyaTartalom>
        <AranyIkon tipus={ikon} meret={28} className="szolgaltatas-ikon" />
        <KartyaCim className="szolgaltatas-cim">{cim}</KartyaCim>
        <KartyaLeiras className="szolgaltatas-leiras">{leiras}</KartyaLeiras>
      </KartyaTartalom>
    </SzolgaltatasKartya>
  )
}

/**
 * A szolgáltatások rácsát jeleníti meg a kiválasztott nyelven.
 */
export function SzolgaltatasokSzekcio() {
  const { szoveg } = useNyelv()
  const cimReveal = useScrollReveal<HTMLHeadingElement>()
  const gombReveal = useScrollReveal<HTMLDivElement>()

  return (
    <SzolgaltatasokKeret
      className="szolgaltatasok-szekcio"
      id="szolgaltatasok"
      aria-labelledby="szolgaltatasok-cim"
    >
      <BelsoTartalom>
        <SzekcioCim
          ref={cimReveal.referencia}
          className={`szolgaltatasok-cim${cimReveal.lathato ? ' lathato' : ''}`}
          id="szolgaltatasok-cim"
        >
          {szoveg.szolgaltatasokCim}
        </SzekcioCim>

        <KartyaRac className="szolgaltatas-kartya-rac">
          {szoveg.szolgaltatasok.map((elem, index) => (
            <SzolgaltatasKartyaElem
              key={elem.azonosito}
              {...elem}
              index={index}
            />
          ))}
        </KartyaRac>

        <KozepGombSor
          ref={gombReveal.referencia}
          className={`szolgaltatasok-gomb-sor${gombReveal.lathato ? ' lathato' : ''}`}
        >
          <Gomb
            className="osszes-szolgaltatas-gomb"
            href="#szolgaltatasok"
            valtozat="korvonal"
            mutatNyilat
          >
            {szoveg.szolgaltatasokGomb}
          </Gomb>
        </KozepGombSor>
      </BelsoTartalom>
    </SzolgaltatasokKeret>
  )
}
