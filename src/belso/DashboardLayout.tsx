import { useEffect, useId, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { useBelsoAuth } from './BelsoAuthContext'
import { BelsoGomb, BelsoHatter } from './belsoStilus'
import { aranyKeret, aranySzovegAtmenet, tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'
import { NyelvKapcsolo } from '../komponensek/NyelvKapcsolo'
import { bejelentkezesiFelirat } from './dashboardFelhasznalo'

const Keret = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${tema.hatter.fekete};
  overflow-x: clip;
`

const Fejlec = styled.header`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem ${tema.oldalsoPadding};
  padding-top: max(0.75rem, env(safe-area-inset-top));
  border-bottom: ${aranyKeret};
  background: ${tema.hatter.sotet};
`

const MenüGomb = styled(BelsoGomb)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 4.75rem;
  min-height: 44px;
  padding: 0.5rem 0.65rem;
  flex-shrink: 0;
  line-height: 1.2;
`

const FelhasznaloNev = styled.p`
  margin: 0;
  min-width: 0;
  text-align: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.72rem, 3.2vw, 0.85rem);
  letter-spacing: 0.06em;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${aranySzovegAtmenet}
`

const NyelvCella = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
`

const Tartalom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 100%;

  @media (min-width: ${tema.szelesseg.tablet}) {
    flex-direction: row;
  }
`

const Oldalsav = styled.aside<{ nyitva: boolean }>`
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 40;
  width: min(280px, 92vw);
  max-width: 100%;
  transform: translateX(${(p) => (p.nyitva ? '0' : '-105%')});
  transition: transform 0.22s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  gap: 0.35rem;
  background: rgba(27, 27, 27, 0.98);
  border-right: ${aranyKeret};
  box-shadow: ${tema.arnyek.kartya};
  overflow-y: auto;

  @media (min-width: ${tema.szelesseg.tablet}) {
    position: static;
    transform: none;
    width: min(240px, 28vw);
    flex-shrink: 0;
    min-height: 0;
  }
`

const AtlatszoHatter = styled.button`
  position: fixed;
  inset: 0;
  z-index: 35;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  cursor: pointer;

  @media (min-width: ${tema.szelesseg.tablet}) {
    display: none;
  }
`

const NavElem = styled(NavLink)`
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  color: ${tema.szin.szurke};
  text-decoration: none;
  letter-spacing: 0.06em;
  font-size: 0.82rem;

  &.aktiv {
    color: ${tema.szin.aranyVilagos};
    background: rgba(197, 165, 114, 0.12);
    border: ${aranyKeret};
  }

  &:focus-visible {
    outline: 2px solid ${tema.szin.aranyVilagos};
    outline-offset: 2px;
  }
`

const AlsoSav = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`

const Fo = styled.main`
  flex: 1;
  min-width: 0;
  width: 100%;
  padding: 1rem ${tema.oldalsoPadding} max(2rem, env(safe-area-inset-bottom));
  box-sizing: border-box;
`

export function DashboardLayout() {
  const { szoveg } = useNyelv()
  const t = szoveg.belso
  const { felhasznalo, kijelentkezes } = useBelsoAuth()
  const navigate = useNavigate()
  const [menuNyitva, setMenuNyitva] = useState(false)
  const menuId = useId()
  const felirat = bejelentkezesiFelirat(felhasznalo)

  useEffect(() => {
    function escapeFigyelo(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuNyitva(false)
      }
    }
    window.addEventListener('keydown', escapeFigyelo)
    return () => window.removeEventListener('keydown', escapeFigyelo)
  }, [])

  useEffect(() => {
    if (menuNyitva) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuNyitva])

  async function kilepes() {
    await kijelentkezes()
    navigate('/', { replace: true })
  }

  return (
    <BelsoHatter>
      <Keret>
        <Fejlec>
          <MenüGomb
            type="button"
            aria-expanded={menuNyitva}
            aria-controls={menuId}
            onClick={() => setMenuNyitva((e) => !e)}
          >
            {menuNyitva ? t.menuBezar : t.menuNyit}
          </MenüGomb>
          <FelhasznaloNev title={felirat}>{felirat}</FelhasznaloNev>
          <NyelvCella>
            <NyelvKapcsolo className="belso-nyelv-valaszto" />
          </NyelvCella>
        </Fejlec>

        <Tartalom>
          {menuNyitva ? (
            <AtlatszoHatter
              type="button"
              aria-label={t.menuBezar}
              onClick={() => setMenuNyitva(false)}
            />
          ) : null}
          <Oldalsav id={menuId} nyitva={menuNyitva} aria-label={t.navAria}>
            <NavElem
              to="/dashboard/profile"
              className={({ isActive }) => (isActive ? 'aktiv' : '')}
              onClick={() => setMenuNyitva(false)}
              end={false}
            >
              {t.sajatAdataim}
            </NavElem>
            <AlsoSav>
              <BelsoGomb type="button" onClick={kilepes} style={{ width: '100%' }}>
                {t.kijelentkezes}
              </BelsoGomb>
            </AlsoSav>
          </Oldalsav>
          <Fo>
            <Outlet />
          </Fo>
        </Tartalom>
      </Keret>
    </BelsoHatter>
  )
}
