import styled from '@emotion/styled'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, revealAlap } from '../stilusok/tema'

/** Ügyfélidézet szekció */
const IdezetKeret = styled.section`
  padding: clamp(3.5rem, 8vw, 5.5rem) ${tema.oldalsoPadding};
  background: rgba(27, 27, 27, 0.7);
  border-top: 1px solid rgba(197, 165, 114, 0.14);
  border-bottom: 1px solid rgba(197, 165, 114, 0.14);
`

/** Belső idézet blokk */
const IdezetBelso = styled.blockquote`
  width: min(100%, 760px);
  margin: 0 auto;
  text-align: center;
  ${revealAlap}
`

/** Nagy idézőjel dísz */
const IdezoJel = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-family: ${tema.betu.marka};
  font-size: clamp(2.8rem, 6vw, 4rem);
  line-height: 1;
  color: ${tema.szin.arany};
  opacity: 0.55;
`

/** Az idézet szövege */
const IdezetSzoveg = styled.p`
  margin-bottom: 1.4rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.15rem, 2.8vw, 1.65rem);
  font-style: italic;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0.02em;
  color: ${tema.szin.feher};
`

/** Szerző */
const IdezetSzerzo = styled.footer`
  font-size: clamp(0.78rem, 1.5vw, 0.9rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/**
 * Egy ügyfélidézetet jelenít meg scroll-reveallel.
 */
export function IdezetSzekcio() {
  const { szoveg } = useNyelv()
  const { referencia, lathato } = useScrollReveal<HTMLQuoteElement>(0.2)

  return (
    <IdezetKeret className="idezet-szekcio" aria-label={szoveg.idezet.szerzo}>
      <IdezetBelso
        ref={referencia}
        className={`idezet-belso${lathato ? ' lathato' : ''}`}
      >
        <IdezoJel aria-hidden="true">“</IdezoJel>
        <IdezetSzoveg className="idezet-szoveg">{szoveg.idezet.szoveg}</IdezetSzoveg>
        <IdezetSzerzo className="idezet-szerzo">{szoveg.idezet.szerzo}</IdezetSzerzo>
      </IdezetBelso>
    </IdezetKeret>
  )
}
