import { useState } from 'react'
import styled from '@emotion/styled'
import { Logo } from './Logo'
import { Gomb } from './Gomb'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { nyelvKapcsolok, type NyelvKod } from '../nyelv/nyelvTipusok'
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

/** Nyelvválasztó sor — mindig látható */
const NyelvValaszto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${tema.betu.cim};
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: ${tema.szin.szurke};
`

/** Egy nyelv gombja a kapcsolóban */
const NyelvGomb = styled.button<{ aktiv: boolean }>`
  color: ${(props) => (props.aktiv ? tema.szin.aranyVilagos : tema.szin.szurke)};
  font-weight: ${(props) => (props.aktiv ? 700 : 500)};
  transition: color 0.2s ease;

  &:hover {
    color: ${tema.szin.arany};
  }

  &:focus-visible {
    outline: 2px solid ${tema.szin.arany};
    outline-offset: 3px;
  }
`

/** Elválasztó a nyelvek között */
const NyelvElvalaszto = styled.span`
  color: ${tema.szin.szurkeSotet};
`

/** Egy nyelv gomb csoportja az elválasztóval */
const NyelvElem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
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
 * A főoldal fejlécét rajzolja ki: logo, navigáció, nyelvkapcsoló és telefon gomb.
 */
export function Fejlec() {
  const { nyelv, szoveg, nyelvetValaszt } = useNyelv()
  const [mobilMenuNyitva, setMobilMenuNyitva] = useState(false)

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

  /**
   * Átváltja az oldal nyelvét a kapcsolóról.
   */
  function nyelvetAtvalt(ujNyelv: NyelvKod) {
    nyelvetValaszt(ujNyelv)
  }

  return (
    <FejlecSav className="fejlec-sav">
      <Logo className="fejlec-logo" />

      <NavigacioLista className="navigacio-lista" aria-label={szoveg.navigacioAria}>
        {szoveg.navigacio.map((link) => (
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
        <NyelvValaszto
          className="nyelv-valaszto"
          role="group"
          aria-label={szoveg.nyelvAria}
        >
          {nyelvKapcsolok.map((kapcsolo, index) => (
            <NyelvElem key={kapcsolo.kod} className="nyelv-elem">
              {index > 0 ? <NyelvElvalaszto aria-hidden="true">|</NyelvElvalaszto> : null}
              <NyelvGomb
                className="nyelv-gomb"
                type="button"
                aktiv={nyelv === kapcsolo.kod}
                aria-pressed={nyelv === kapcsolo.kod}
                onClick={() => nyelvetAtvalt(kapcsolo.kod)}
              >
                {kapcsolo.felirat}
              </NyelvGomb>
            </NyelvElem>
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
          aria-label={szoveg.menuAria}
          aria-expanded={mobilMenuNyitva}
          onClick={mobilMenutValt}
        >
          <span />
          <span />
          <span />
        </MobilMenuGomb>
      </JobbSav>

      <MobilMenuPanel className="mobil-menu-panel" nyitva={mobilMenuNyitva}>
        {szoveg.navigacio.map((link) => (
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
