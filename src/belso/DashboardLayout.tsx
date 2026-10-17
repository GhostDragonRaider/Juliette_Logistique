import { useEffect, useId, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { useBelsoAuth } from './BelsoAuthContext'
import { BelsoGomb, BelsoHatter } from './belsoStilus'
import { aranyKeret, aranySzovegAtmenet, tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'
import { NyelvKapcsolo } from '../komponensek/NyelvKapcsolo'

const Keret = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: ${tema.hatter.fekete};
`

const Fejlec = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem ${tema.oldalsoPadding};
  border-bottom: ${aranyKeret};
  background: ${tema.hatter.sotet};
`

const Marka = styled.span`
  font-family: ${tema.betu.cim};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  ${aranySzovegAtmenet}
`

const Tartalom = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
`

const Oldalsav = styled.aside<{ nyitva: boolean }>`
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 40;
  width: min(280px, 88vw);
  max-width: 100%;
  transform: translateX(${(p) => (p.nyitva ? '0' : '-105%')});
  transition: transform 0.22s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.35rem;
  background: rgba(27, 27, 27, 0.98);
  border-right: ${aranyKeret};
  box-shadow: ${tema.arnyek.kartya};

  @media (min-width: ${tema.szelesseg.tablet}) {
    position: static;
    transform: none;
    width: 240px;
    flex-shrink: 0;
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
  padding: 1rem ${tema.oldalsoPadding} 2rem;
`

const FejlecJobb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: auto;
  min-width: 0;
`

const EmailSzoveg = styled.span`
  font-size: 0.75rem;
  color: ${tema.szin.szurke};
  max-width: 42vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: ${tema.szelesseg.tablet}) {
    max-width: 240px;
  }
`

export function DashboardLayout() {
  const { szoveg } = useNyelv()
  const t = szoveg.belso
  const { felhasznalo, kijelentkezes } = useBelsoAuth()
  const navigate = useNavigate()
  const [menuNyitva, setMenuNyitva] = useState(false)
  const menuId = useId()

  useEffect(() => {
    function escapeFigyelo(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuNyitva(false)
      }
    }
    window.addEventListener('keydown', escapeFigyelo)
    return () => window.removeEventListener('keydown', escapeFigyelo)
  }, [])

  async function kilepes() {
    await kijelentkezes()
    navigate('/', { replace: true })
  }

  return (
    <BelsoHatter>
      <Keret>
        <Fejlec>
          <BelsoGomb
            type="button"
            aria-expanded={menuNyitva}
            aria-controls={menuId}
            onClick={() => setMenuNyitva((e) => !e)}
            style={{ minWidth: 44 }}
          >
            {menuNyitva ? t.menuBezar : t.menuNyit}
          </BelsoGomb>
          <Marka>{t.vezerlopultCim}</Marka>
          <FejlecJobb>
            <NyelvKapcsolo className="belso-nyelv-valaszto" />
            <EmailSzoveg title={felhasznalo?.email}>
              {felhasznalo?.email}
            </EmailSzoveg>
          </FejlecJobb>
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
