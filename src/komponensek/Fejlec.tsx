import { useState } from 'react'
import styled from '@emotion/styled'
import { Logo } from './Logo'
import { Gomb } from './Gomb'
import { navigacioLinkek, nyelvek, telefonszam } from '../adatok/fooldalAdatok'
import { tema, aranyKeret } from '../stilusok/tema'

/** A fejléc rögzített sávja */
const FejlecSav = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 4vw;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0) 100%);
`

/** Asztali navigációs lista */
const NavigacioLista = styled.nav`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: flex;
  }
`

/** Egy navigációs link */
const NavigacioLinkElem = styled.a`
  position: relative;
  font-family: ${tema.betu.cim};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: ${tema.szin.aranyVilagos};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.35rem;
    width: 0;
    height: 1px;
    background: ${tema.szin.arany};
    transition: width 0.25s ease;
  }

  &:hover {
    color: ${tema.szin.feher};
  }

  &:hover::after {
    width: 100%;
  }
`

/** Jobb oldali segédsáv (nyelv + telefon) */
const JobbSav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`

/** Nyelvválasztó sor */
const NyelvValaszto = styled.div`
  display: none;
  align-items: center;
  gap: 0.35rem;
  font-family: ${tema.betu.cim};
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: ${tema.szin.szurke};

  @media (min-width: ${tema.szelesseg.mobil}) {
    display: flex;
  }
`

/** Egy nyelv gombja */
const NyelvGomb = styled.button<{ aktiv: boolean }>`
  color: ${(props) => (props.aktiv ? tema.szin.aranyVilagos : tema.szin.szurke)};
  font-weight: ${(props) => (props.aktiv ? 700 : 500)};
  transition: color 0.2s ease;

  &:hover {
    color: ${tema.szin.arany};
  }
`

/** Elválasztó a nyelvek között */
const NyelvElvalaszto = styled.span`
  color: ${tema.szin.szurkeSotet};
`

/** Mobil menü gomb */
const MobilMenuGomb = styled.button`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.4rem;
  border: ${aranyKeret};

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: none;
  }

  span {
    display: block;
    width: 18px;
    height: 1.5px;
    background: ${tema.szin.arany};
  }
`

/** Lenyíló mobil menü panel */
const MobilMenuPanel = styled.div<{ nyitva: boolean }>`
  display: ${(props) => (props.nyitva ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem 4vw 1.5rem;
  background: rgba(8, 8, 8, 0.96);
  border-bottom: ${aranyKeret};

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: none;
  }
`

/**
 * A főoldal fejlécét rajzolja ki: logo, navigáció, nyelvváltó és telefon gomb.
 */
export function Fejlec() {
  const [aktivNyelv, setAktivNyelv] = useState<(typeof nyelvek)[number]>('DE')
  const [mobilMenuNyitva, setMobilMenuNyitva] = useState(false)

  /**
   * Átváltja a kiválasztott nyelvet a fejlécben.
   */
  function nyelvetValaszt(nyelv: (typeof nyelvek)[number]) {
    setAktivNyelv(nyelv)
  }

  /**
   * Megnyitja vagy bezárja a mobil menüt.
   */
  function mobilMenutValt() {
    setMobilMenuNyitva((elozo) => !elozo)
  }

  /**
   * Bezárja a mobil menüt egy linkre kattintás után.
   */
  function mobilMenutBezar() {
    setMobilMenuNyitva(false)
  }

  return (
    <FejlecSav className="fejlec-sav">
      <Logo className="fejlec-logo" />

      <NavigacioLista className="navigacio-lista" aria-label="Hauptnavigation">
        {navigacioLinkek.map((link) => (
          <NavigacioLinkElem
            key={link.azonosito}
            className="navigacio-link"
            href={link.cel}
          >
            {link.felirat}
          </NavigacioLinkElem>
        ))}
      </NavigacioLista>

      <JobbSav className="fejlec-jobb-sav">
        <NyelvValaszto className="nyelv-valaszto" aria-label="Sprache">
          {nyelvek.map((nyelv, index) => (
            <span key={nyelv} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              {index > 0 ? <NyelvElvalaszto>|</NyelvElvalaszto> : null}
              <NyelvGomb
                className="nyelv-gomb"
                type="button"
                aktiv={aktivNyelv === nyelv}
                onClick={() => nyelvetValaszt(nyelv)}
              >
                {nyelv}
              </NyelvGomb>
            </span>
          ))}
        </NyelvValaszto>

        <Gomb
          className="telefon-gomb"
          href={`tel:${telefonszam.replace(/\s/g, '')}`}
          valtozat="telefon"
          mutatTelefont
        >
          {telefonszam}
        </Gomb>

        <MobilMenuGomb
          className="mobil-menu-gomb"
          type="button"
          aria-label="Menü"
          aria-expanded={mobilMenuNyitva}
          onClick={mobilMenutValt}
        >
          <span />
          <span />
          <span />
        </MobilMenuGomb>
      </JobbSav>

      <MobilMenuPanel className="mobil-menu-panel" nyitva={mobilMenuNyitva}>
        {navigacioLinkek.map((link) => (
          <NavigacioLinkElem
            key={link.azonosito}
            className="mobil-navigacio-link"
            href={link.cel}
            onClick={mobilMenutBezar}
          >
            {link.felirat}
          </NavigacioLinkElem>
        ))}
      </MobilMenuPanel>
    </FejlecSav>
  )
}
