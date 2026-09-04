import { useEffect, useId, useState } from 'react'
import styled from '@emotion/styled'
import { Logo } from './Logo'
import { Gomb } from './Gomb'
import { PremiumSzam } from './PremiumSzam'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { nyelvKapcsolok, type NyelvKod } from '../nyelv/nyelvTipusok'
import { tema, aranyKeret, fokuszKeret } from '../stilusok/tema'

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
  gap: 0.75rem;
  padding-top: max(0.85rem, env(safe-area-inset-top, 0px));
  padding-bottom: 1.1rem;
  padding-left: ${tema.oldalsoPadding};
  padding-right: max(1rem, env(safe-area-inset-right, 0px), min(4vw, 3rem));
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0) 100%);
`

/** Asztali navigációs lista */
const NavigacioLista = styled.nav`
  display: none;
  align-items: center;
  gap: clamp(0.8rem, 1.5vw, 1.5rem);

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: flex;
  }
`

/** Egy navigációs link */
const NavigacioLinkElem = styled.a`
  position: relative;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.68rem, 0.9vw, 0.8rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  color: ${tema.szin.aranyVilagos};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.55rem;
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

  &:focus-visible {
    ${fokuszKeret}
  }
`

/** Jobb oldali segédsáv (nyelv + telefon) */
const JobbSav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    gap: 0.85rem;
  }
`

/** Nyelvválasztó sor — mindig látható */
const NyelvValaszto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: ${tema.betu.cim};
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: ${tema.szin.szurke};
`

/** Egy nyelv gombja a kapcsolóban */
const NyelvGomb = styled.button<{ aktiv: boolean }>`
  min-width: 36px;
  min-height: 36px;
  color: ${(props) => (props.aktiv ? tema.szin.aranyVilagos : tema.szin.szurke)};
  font-weight: ${(props) => (props.aktiv ? 700 : 500)};
  transition: color 0.2s ease;

  &:hover {
    color: ${tema.szin.arany};
  }

  &:focus-visible {
    ${fokuszKeret}
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
  gap: 0.25rem;
`

/** Telefon gomb szöveg — nagyon keskeny képernyőn rejtve */
const TelefonSzoveg = styled.span`
  display: none;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    display: inline;
  }
`

/** Mobil menü gomb */
const MobilMenuGomb = styled.button<{ nyitva: boolean }>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  min-width: 44px;
  min-height: 44px;
  padding: 0.55rem;
  border: ${aranyKeret};

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: none;
  }

  &:focus-visible {
    ${fokuszKeret}
  }

  span {
    display: block;
    width: 18px;
    height: 1.5px;
    background: ${tema.szin.arany};
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  ${(props) =>
    props.nyitva &&
    `
    span:nth-of-type(1) {
      transform: translateY(6.5px) rotate(45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }
  `}
`

/** Lenyíló mobil menü panel */
const MobilMenuPanel = styled.div<{ nyitva: boolean }>`
  display: ${(props) => (props.nyitva ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem ${tema.oldalsoPadding} 1.4rem;
  background: rgba(27, 27, 27, 0.97);
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
  const menuAzonosito = useId()

  /**
   * Escape billentyűvel bezárja a mobil menüt.
   */
  useEffect(() => {
    /**
     * Figyeli az Escape billentyűt a menü bezárásához.
     */
    function escapeFigyelo(esemeny: KeyboardEvent) {
      if (esemeny.key === 'Escape') {
        setMobilMenuNyitva(false)
      }
    }

    window.addEventListener('keydown', escapeFigyelo)
    return () => window.removeEventListener('keydown', escapeFigyelo)
  }, [])

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
                aria-label={kapcsolo.felirat}
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
          ariaLabel={telefonszam}
        >
          <TelefonSzoveg className="telefon-szoveg">
            <PremiumSzam>{telefonszam}</PremiumSzam>
          </TelefonSzoveg>
        </Gomb>

        <MobilMenuGomb
          className="mobil-menu-gomb"
          type="button"
          nyitva={mobilMenuNyitva}
          aria-label={mobilMenuNyitva ? szoveg.menuBezaroAria : szoveg.menuAria}
          aria-expanded={mobilMenuNyitva}
          aria-controls={menuAzonosito}
          onClick={mobilMenutValt}
        >
          <span />
          <span />
          <span />
        </MobilMenuGomb>
      </JobbSav>

      <MobilMenuPanel
        id={menuAzonosito}
        className="mobil-menu-panel"
        nyitva={mobilMenuNyitva}
        role="navigation"
        aria-label={szoveg.navigacioAria}
      >
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
