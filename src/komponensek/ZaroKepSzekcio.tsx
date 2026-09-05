import styled from '@emotion/styled'
import { Gomb } from './Gomb'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { telefonszam } from '../adatok/fooldalAdatok'
import { tema, aranySzovegAtmenet, revealAlap } from '../stilusok/tema'

/** Full-bleed záró kép CTA */
const ZaroKeret = styled.section`
  position: relative;
  min-height: clamp(420px, 62vh, 640px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

/** Háttérkép + sötét fátyol */
const ZaroHatter = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(20, 20, 20, 0.55) 0%,
      rgba(20, 20, 20, 0.72) 55%,
      rgba(20, 20, 20, 0.88) 100%
    ),
    url('/kepek/kamion-rolunk.png') center / cover no-repeat;
  transform: scale(1.04);
`

/** Középre igazított CTA tartalom */
const ZaroTartalom = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  width: min(100%, 720px);
  padding: clamp(2.5rem, 6vw, 4rem) ${tema.oldalsoPadding};
  text-align: center;
  ${revealAlap}
`

/** Záró cím */
const ZaroCim = styled.h2`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 4vw, 2.35rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.2;
  ${aranySzovegAtmenet}
`

/**
 * Full-bleed záró kép CTA a kapcsolatfelvételhez.
 */
export function ZaroKepSzekcio() {
  const { szoveg } = useNyelv()
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <ZaroKeret
      className="zaro-kep-szekcio"
      id="kapcsolat"
      aria-labelledby="zaro-kep-cim"
    >
      <ZaroHatter className="zaro-kep-hatter" role="img" aria-label={szoveg.zaroKep.kepAlt} />
      <ZaroTartalom
        ref={referencia}
        className={`zaro-kep-tartalom${lathato ? ' lathato' : ''}`}
      >
        <ZaroCim className="zaro-kep-cim" id="zaro-kep-cim">
          {szoveg.zaroKep.cim}
        </ZaroCim>
        <Gomb
          className="zaro-kep-gomb"
          href={`tel:${telefonszam.replace(/\s/g, '')}`}
          valtozat="telitett"
          mutatNyilat
          hanggal
          ariaLabel={`${szoveg.zaroKep.gomb}: ${telefonszam}`}
        >
          {szoveg.zaroKep.gomb}
        </Gomb>
      </ZaroTartalom>
    </ZaroKeret>
  )
}
