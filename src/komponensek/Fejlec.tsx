import { useEffect, useId, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { Logo } from './Logo'
import { Gomb } from './Gomb'
import { PremiumSzam } from './PremiumSzam'
import { telefonszam } from '../adatok/fooldalAdatok'
import { useNyelv } from '../nyelv/useNyelv'
import { nyelvKapcsolok, type NyelvKod } from '../nyelv/nyelvTipusok'
import { tema, aranyKeret, fokuszKeret } from '../stilusok/tema'

type FejlecTulajdonsagok = {
  /** Ha true, a fejléc mindig sticky üveg stílusú (pl. karrier oldal) */
  mindigSticky?: boolean
}

/** A fejléc — scroll után sticky üveg hatás */
const FejlecSav = styled.header<{ sticky: boolean }>`
  position: ${(props) => (props.sticky ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: max(0.85rem, env(safe-area-inset-top, 0px));
  padding-bottom: 1.1rem;
  padding-left: ${tema.oldalsoPadding};
  padding-right: max(1rem, env(safe-area-inset-right, 0px), min(4vw, 3rem));
  background: ${(props) =>
    props.sticky
      ? 'rgba(20, 20, 20, 0.72)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0) 100%)'};
  backdrop-filter: ${(props) => (props.sticky ? 'blur(14px) saturate(1.2)' : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.sticky ? 'blur(14px) saturate(1.2)' : 'none')};
  border-bottom: ${(props) =>
    props.sticky ? '1px solid rgba(197, 165, 114, 0.18)' : '1px solid transparent'};
  box-shadow: ${(props) =>
    props.sticky ? '0 10px 28px rgba(0, 0, 0, 0.28)' : 'none'};
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.35s ease;
`

/** Asztali navigációs lista */
const NavigacioLista = styled.nav`
  display: none;
  align-items: center;
  gap: clamp(0.55rem, 1.2vw, 1.25rem);

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: flex;
  }

  @media (min-width: ${tema.szelesseg.asztali}) {
    gap: clamp(0.8rem, 1.5vw, 1.5rem);
  }
`

/** Egy navigációs link */
const navigacioLinkStilus = `
  position: relative;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.62rem, 0.85vw, 0.78rem);
  font-weight: 600;
  letter-spacing: 0.1em;
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

const NavigacioLinkElem = styled.a`${navigacioLinkStilus}`
const NavigacioRouterLink = styled(Link)`${navigacioLinkStilus}`

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
    transition:
      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.25s ease;
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

/** Lenyíló mobil menü panel — prémium lecsúszó animáció */
const MobilMenuPanel = styled.div<{ nyitva: boolean }>`
  display: flex;
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  right: 0;
  flex-direction: column;
  gap: 0.2rem;
  padding: ${(props) => (props.nyitva ? '0.85rem' : '0')} ${tema.oldalsoPadding}
    ${(props) => (props.nyitva ? '1.35rem' : '0')};
  max-height: ${(props) => (props.nyitva ? 'min(70vh, 28rem)' : '0')};
  overflow: hidden;
  pointer-events: ${(props) => (props.nyitva ? 'auto' : 'none')};
  visibility: ${(props) => (props.nyitva ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.nyitva ? 1 : 0)};
  transform: translate3d(0, ${(props) => (props.nyitva ? '0' : '-14px')}, 0);
  background:
    linear-gradient(
      180deg,
      rgba(27, 27, 27, 0.98) 0%,
      rgba(20, 20, 20, 0.96) 100%
    );
  backdrop-filter: blur(16px) saturate(1.15);
  -webkit-backdrop-filter: blur(16px) saturate(1.15);
  border-bottom: 1px solid
    ${(props) =>
      props.nyitva ? 'rgba(197, 165, 114, 0.28)' : 'transparent'};
  box-shadow: ${(props) =>
    props.nyitva ? '0 18px 40px rgba(0, 0, 0, 0.35)' : 'none'};
  transition:
    max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    padding 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.45s ease,
    visibility 0.45s;

  a,
  .mobil-navigacio-link {
    opacity: ${(props) => (props.nyitva ? 1 : 0)};
    transform: translate3d(0, ${(props) => (props.nyitva ? '0' : '-10px')}, 0);
    transition:
      opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      color 0.2s ease;
  }

  ${(props) =>
    props.nyitva
      ? Array.from(
          { length: 8 },
          (_, i) => `
    a:nth-of-type(${i + 1}),
    .mobil-navigacio-link:nth-of-type(${i + 1}) {
      transition-delay: ${70 + i * 55}ms;
    }
  `,
        ).join('')
      : `
    a,
    .mobil-navigacio-link {
      transition-delay: 0ms;
    }
  `}

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.2s ease, visibility 0.2s ease;
    transform: none;

    a,
    .mobil-navigacio-link {
      transform: none;
      transition: opacity 0.2s ease;
    }
  }
`

/**
 * Eldönti, hogy a navigációs cél route-e (nem csak hash a főoldalon).
 */
function routeCel(cel: string) {
  return cel.startsWith('/') && !cel.startsWith('/#')
}

/**
 * A főoldal fejlécét rajzolja ki: logo, navigáció, nyelvkapcsoló és telefon gomb.
 */
export function Fejlec({ mindigSticky = false }: FejlecTulajdonsagok) {
  const { nyelv, szoveg, nyelvetValaszt } = useNyelv()
  const hely = useLocation()
  const navigal = useNavigate()
  const [mobilMenuNyitva, setMobilMenuNyitva] = useState(false)
  const [sticky, setSticky] = useState(mindigSticky)
  const menuAzonosito = useId()

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

  useEffect(() => {
    if (mindigSticky) {
      setSticky(true)
      return
    }

    /**
     * A hero alsó része után aktiválja a sticky üveg státuszt.
     */
    function stickyFigyelo() {
      setSticky(window.scrollY > 72)
    }

    stickyFigyelo()
    window.addEventListener('scroll', stickyFigyelo, { passive: true })
    return () => window.removeEventListener('scroll', stickyFigyelo)
  }, [mindigSticky])

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

  /**
   * Hashes főoldali linkeket kezel — más oldalról is a megfelelő szekcióra ugrik.
   */
  function hashLinkKattintas(cel: string) {
    mobilMenutBezar()
    const hash = cel.includes('#') ? `#${cel.split('#')[1]}` : cel

    if (hely.pathname !== '/') {
      navigal({ pathname: '/', hash: hash.replace(/^#/, '') })
      return
    }

    const elem = document.querySelector(hash)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  /**
   * Egy navigációs linket rajzol ki (route vagy hash).
   */
  function navigacioLinketRajzol(
    link: { azonosito: string; felirat: string; cel: string },
    osztalyNev: string,
  ) {
    if (routeCel(link.cel)) {
      return (
        <NavigacioRouterLink
          key={link.azonosito}
          className={osztalyNev}
          to={link.cel}
          onClick={mobilMenutBezar}
        >
          {link.felirat}
        </NavigacioRouterLink>
      )
    }

    return (
      <NavigacioLinkElem
        key={link.azonosito}
        className={osztalyNev}
        href={link.cel.startsWith('/#') ? link.cel.slice(1) : link.cel}
        onClick={(esemeny) => {
          esemeny.preventDefault()
          hashLinkKattintas(link.cel)
        }}
      >
        {link.felirat}
      </NavigacioLinkElem>
    )
  }

  return (
    <FejlecSav className="fejlec-sav" sticky={sticky || mindigSticky}>
      <Logo className="fejlec-logo" />

      <NavigacioLista className="navigacio-lista" aria-label={szoveg.navigacioAria}>
        {szoveg.navigacio.map((link) => navigacioLinketRajzol(link, 'navigacio-link'))}
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
        aria-hidden={!mobilMenuNyitva}
      >
        {szoveg.navigacio.map((link) =>
          navigacioLinketRajzol(link, 'mobil-navigacio-link'),
        )}
      </MobilMenuPanel>
    </FejlecSav>
  )
}
