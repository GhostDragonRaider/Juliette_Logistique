import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { tema, fokuszKeret } from '../stilusok/tema'

type LogoMeret = 'fejlec' | 'jelveny'

type LogoTulajdonsagok = {
  className?: string
  /** fejlec: eredeti header méret; jelveny: kép jelvényhez skálázva */
  meret?: LogoMeret
  /** Ha false, nem link (pl. dekor a rólunk képen) */
  linkKel?: boolean
}

/** A logo külső doboza (fejléc link) */
const LogoDoboz = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
  color: ${tema.szin.arany};

  &:focus-visible {
    ${fokuszKeret}
  }

  @media (min-width: ${tema.szelesseg.kicsi}) {
    gap: 0.75rem;
  }
`

const LogoStatikus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
  color: ${tema.szin.arany};

  @media (min-width: ${tema.szelesseg.kicsi}) {
    gap: 0.75rem;
  }
`

/** JL monogram SVG — fejléc méret (változatlan) */
const LogoSvgFejlec = styled.svg`
  display: block;
  flex-shrink: 0;
  width: 40px;
  height: 40px;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    width: 52px;
    height: 52px;
  }
`

/** JL monogram — kisebb, a rólunk kép jelvényéhez */
const LogoSvgJelveny = styled.svg`
  display: block;
  flex-shrink: 0;
  width: 34px;
  height: 34px;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    width: 38px;
    height: 38px;
  }
`

/** A logo szöveges része (fejléc) */
const LogoSzovegFejlec = styled.div`
  display: none;
  flex-direction: column;
  line-height: 1.05;
  min-width: 0;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    display: flex;
  }
`

/** Szöveg a jelvényben — mindig látható, kisebb */
const LogoSzovegJelveny = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  min-width: 0;
`

const MarkaNev = styled.span<{ $meret: LogoMeret }>`
  font-family: ${tema.betu.marka};
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${tema.szin.aranyVilagos};
  font-size: ${(p) =>
    p.$meret === 'jelveny' ? 'clamp(0.72rem, 2.5vw, 0.88rem)' : 'clamp(1rem, 2vw, 1.15rem)'};
`

const MarkaAlcim = styled.span<{ $meret: LogoMeret }>`
  font-family: ${tema.betu.cim};
  font-weight: 600;
  text-transform: uppercase;
  color: ${tema.szin.arany};
  font-size: ${(p) => (p.$meret === 'jelveny' ? '0.48rem' : '0.58rem')};
  letter-spacing: ${(p) => (p.$meret === 'jelveny' ? '0.2em' : '0.28em')};
`

function LogoJlSvg({ meret }: { meret: LogoMeret }) {
  const Svg = meret === 'jelveny' ? LogoSvgJelveny : LogoSvgFejlec
  return (
    <Svg viewBox="0 0 80 80" role="img" aria-hidden="true">
      <text
        x="12"
        y="48"
        fill={tema.szin.arany}
        fontFamily="Georgia, serif"
        fontSize="42"
        fontWeight="700"
      >
        J
      </text>
      <text
        x="36"
        y="48"
        fill={tema.szin.aranyVilagos}
        fontFamily="Georgia, serif"
        fontSize="42"
        fontWeight="700"
      >
        L
      </text>
      <path
        d="M8 56 C 24 48, 40 62, 72 50"
        fill="none"
        stroke={tema.szin.arany}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 55 C 40 52, 52 56, 64 52"
        fill="none"
        stroke={tema.hatter.fekete}
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
    </Svg>
  )
}

function LogoTartalom({ meret }: { meret: LogoMeret }) {
  const Szoveg = meret === 'jelveny' ? LogoSzovegJelveny : LogoSzovegFejlec
  return (
    <>
      <LogoJlSvg meret={meret} />
      <Szoveg>
        <MarkaNev $meret={meret}>Juliette</MarkaNev>
        <MarkaAlcim $meret={meret}>Logistique</MarkaAlcim>
      </Szoveg>
    </>
  )
}

/**
 * A Juliette Logistique arany logóját jeleníti meg (JL monogram + szöveg).
 */
export function Logo({ className, meret = 'fejlec', linkKel = true }: LogoTulajdonsagok) {
  if (linkKel && meret === 'fejlec') {
    return (
      <LogoDoboz className={className} to="/" aria-label="Juliette Logistique">
        <LogoTartalom meret="fejlec" />
      </LogoDoboz>
    )
  }

  return (
    <LogoStatikus className={className} aria-hidden={meret === 'jelveny'}>
      <LogoTartalom meret={meret} />
    </LogoStatikus>
  )
}
