import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { tema } from '../stilusok/tema'

export const AdminKeret = styled.div`
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${tema.oldalsoPadding}
    clamp(3rem, 8vh, 5rem);
  color: ${tema.szin.feher};
`

export const AdminPanel = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

export const AdminCim = styled.h1`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
  margin-bottom: 1.5rem;
`

export const AdminNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;

  a {
    color: ${tema.szin.aranyVilagos};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`

export const AdminLink = styled(Link)`
  color: ${tema.szin.aranyVilagos};
`

export const UzenetSav = styled.p<{ hiba?: boolean }>`
  padding: 0.75rem 1rem;
  margin: 0 0 1rem;
  border: 1px solid
    ${(p) => (p.hiba ? 'rgba(220, 100, 100, 0.5)' : 'rgba(197, 165, 114, 0.35)')};
  background: ${(p) =>
    p.hiba ? 'rgba(120, 40, 40, 0.25)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${(p) => (p.hiba ? '#f5c6c6' : tema.szin.szurke)};
  font-size: 0.9rem;
`

export const AdatTabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.86rem;
  margin: 1rem 0 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(197, 165, 114, 0.22);

  th,
  td {
    padding: 0.55rem 0.75rem;
    border-bottom: 1px solid rgba(197, 165, 114, 0.12);
    vertical-align: top;
    text-align: left;
  }

  th {
    width: 34%;
    color: ${tema.szin.aranyVilagos};
    font-weight: 600;
    background: rgba(0, 0, 0, 0.2);
  }

  td {
    color: ${tema.szin.feher};
    line-height: 1.45;
    word-break: break-word;
  }

  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
`

export const ListaTabla = styled(AdatTabla)`
  th {
    width: auto;
  }
`

export const GombSor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 1rem 0;
`

export const KisGomb = styled.button`
  font-family: ${tema.betu.torzs};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5rem 0.85rem;
  color: ${tema.szin.aranyVilagos};
  background: rgba(197, 165, 114, 0.12);
  border: 1px solid rgba(197, 165, 114, 0.35);
  cursor: pointer;

  &:hover {
    background: rgba(197, 165, 114, 0.22);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const FoGomb = styled(KisGomb)`
  padding: 0.65rem 1.1rem;
`

export const MezoCsoport = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${tema.szin.szurke};
`

export const SzovegMezo = styled.input`
  padding: 0.55rem 0.65rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(197, 165, 114, 0.3);
  color: ${tema.szin.feher};
`
