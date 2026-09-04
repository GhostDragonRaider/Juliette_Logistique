import styled from '@emotion/styled'
import { tema } from '../stilusok/tema'

/** Az ikon komponens lehetséges típusai */
type IkonTipus =
  | 'pajzs'
  | 'csillag'
  | 'terkep'
  | 'gyemant'
  | 'kezetfogas'
  | 'auto'
  | 'kulcs'
  | 'flotta'
  | 'ut'
  | 'europa'
  | 'kamera'
  | 'telefon'
  | 'nyil'

type IkonTulajdonsagok = {
  tipus: IkonTipus
  meret?: number
  className?: string
}

/** Az SVG ikon közös kerete */
const IkonKeret = styled.svg`
  display: block;
  flex-shrink: 0;
  stroke: ${tema.szin.arany};
  fill: none;
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
`

/**
 * Visszaadja a kért arany vonalas ikont SVG-ként.
 */
export function AranyIkon({ tipus, meret = 28, className }: IkonTulajdonsagok) {
  const kozos = {
    className,
    width: meret,
    height: meret,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  }

  if (tipus === 'pajzs') {
    return (
      <IkonKeret {...kozos}>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </IkonKeret>
    )
  }

  if (tipus === 'csillag') {
    return (
      <IkonKeret {...kozos}>
        <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" />
      </IkonKeret>
    )
  }

  if (tipus === 'terkep') {
    return (
      <IkonKeret {...kozos}>
        <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </IkonKeret>
    )
  }

  if (tipus === 'gyemant') {
    return (
      <IkonKeret {...kozos}>
        <path d="M3 9l4-5h10l4 5-9 11L3 9z" />
        <path d="M3 9h18M8 4l2 5M16 4l-2 5M10 9l2 11M14 9l-2 11" />
      </IkonKeret>
    )
  }

  if (tipus === 'kezetfogas') {
    return (
      <IkonKeret {...kozos}>
        <path d="M8 13l2.5 2.5a2 2 0 002.8 0L17 12" />
        <path d="M4 12l3-3 3 1 2-2 3 2 3-1 2 2" />
      </IkonKeret>
    )
  }

  if (tipus === 'auto') {
    return (
      <IkonKeret {...kozos}>
        <path d="M4 14l2-5h12l2 5" />
        <path d="M3 14h18v3H3z" />
        <circle cx="7" cy="17" r="1.2" />
        <circle cx="17" cy="17" r="1.2" />
      </IkonKeret>
    )
  }

  if (tipus === 'kulcs') {
    return (
      <IkonKeret {...kozos}>
        <circle cx="8" cy="10" r="3" />
        <path d="M11 10h9v2h-2v2h-2v-2h-2" />
      </IkonKeret>
    )
  }

  if (tipus === 'flotta') {
    return (
      <IkonKeret {...kozos}>
        <path d="M3 16V9h8v7" />
        <path d="M11 12h6l3 3v1h-9" />
        <circle cx="6.5" cy="17" r="1.2" />
        <circle cx="16.5" cy="17" r="1.2" />
      </IkonKeret>
    )
  }

  if (tipus === 'ut') {
    return (
      <IkonKeret {...kozos}>
        <path d="M8 21l2-18h4l2 18" />
        <path d="M12 7v2M12 12v2M12 17v2" />
      </IkonKeret>
    )
  }

  if (tipus === 'europa') {
    return (
      <IkonKeret {...kozos}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16" />
      </IkonKeret>
    )
  }

  if (tipus === 'kamera') {
    return (
      <IkonKeret {...kozos}>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <circle cx="12" cy="13" r="3.2" />
        <path d="M8 7l1.5-2h5L16 7" />
      </IkonKeret>
    )
  }

  if (tipus === 'telefon') {
    return (
      <IkonKeret {...kozos}>
        <path d="M7 4h3l1 4-2 1a10 10 0 004 4l1-2 4 1v3a2 2 0 01-2 2A12 12 0 015 6a2 2 0 012-2z" />
      </IkonKeret>
    )
  }

  return (
    <IkonKeret {...kozos}>
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </IkonKeret>
  )
}
