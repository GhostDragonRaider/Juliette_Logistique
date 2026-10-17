import styled from '@emotion/styled'
import { useNyelv } from '../nyelv/useNyelv'
import { nyelvKapcsolok, type NyelvKod } from '../nyelv/nyelvTipusok'
import { fokuszKeret, tema } from '../stilusok/tema'

const NyelvValaszto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${tema.betu.cim};
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: ${tema.szin.szurke};
  flex-shrink: 0;
`

const NyelvGomb = styled.button<{ aktiv: boolean }>`
  text-align: center;
  min-width: 36px;
  min-height: 36px;
  color: ${(props) => (props.aktiv ? tema.szin.aranyVilagos : tema.szin.szurke)};
  font-weight: ${(props) => (props.aktiv ? 700 : 500)};
  transition: color 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${tema.szin.arany};
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

const NyelvElvalaszto = styled.span`
  color: ${tema.szin.szurkeSotet};
`

const NyelvElem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`

type NyelvKapcsoloTulajdonsagok = {
  className?: string
}

/**
 * HU | EN | DE nyelvválasztó — nyilvános fejléc és belső felület közös komponense.
 */
export function NyelvKapcsolo({ className }: NyelvKapcsoloTulajdonsagok) {
  const { nyelv, szoveg, nyelvetValaszt } = useNyelv()

  function nyelvetAtvalt(ujNyelv: NyelvKod) {
    nyelvetValaszt(ujNyelv)
  }

  return (
    <NyelvValaszto
      className={className}
      role="group"
      aria-label={szoveg.nyelvAria}
    >
      {nyelvKapcsolok.map((kapcsolo, index) => (
        <NyelvElem key={kapcsolo.kod} className="nyelv-elem">
          {index > 0 ? (
            <NyelvElvalaszto aria-hidden="true">|</NyelvElvalaszto>
          ) : null}
          <NyelvGomb
            className="nyelv-gomb"
            type="button"
            aktiv={nyelv === kapcsolo.kod}
            aria-pressed={nyelv === kapcsolo.kod}
            aria-label={kapcsolo.felirat}
            onClick={() => nyelvetAtvalt(kapcsolo.kod)}
          >
            {kapcsolo.felirat}
          </NyelvGomb>
        </NyelvElem>
      ))}
    </NyelvValaszto>
  )
}
