import styled from '@emotion/styled'
import { aranyKeret, fokuszKeret, tema } from '../stilusok/tema'

export const BelsoHatter = styled.div`
  min-height: 100dvh;
  background: ${tema.hatter.fekete};
  color: ${tema.szin.feher};
  font-family: ${tema.betu.torzs};
`

export const BelsoMezo = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: ${aranyKeret};
  background: ${tema.hatter.emelt};
  color: ${tema.szin.feher};
  font-size: 1rem;

  &:focus-visible {
    ${fokuszKeret}
  }
`

export const BelsoCimke = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: ${tema.szin.szurke};
`

export const BelsoGomb = styled.button<{ prim?: boolean }>`
  min-height: 48px;
  padding: 0.65rem 1.25rem;
  border-radius: 4px;
  border: ${aranyKeret};
  background: ${(p) =>
    p.prim ? 'rgba(197, 165, 114, 0.18)' : 'transparent'};
  color: ${tema.szin.aranyVilagos};
  font-family: ${tema.betu.cim};
  letter-spacing: 0.08em;
  cursor: pointer;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

export const BelsoPanel = styled.section`
  border: ${aranyKeret};
  background: ${tema.hatter.sotet};
  border-radius: 6px;
  padding: 1.25rem;
  box-shadow: ${tema.arnyek.kartya};
`

export const BelsoHiba = styled.p`
  margin: 0;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: 1px solid rgba(220, 80, 80, 0.45);
  background: rgba(80, 20, 20, 0.35);
  color: #f5d0d0;
  font-size: 0.9rem;
`

export const BelsoSiker = styled.p`
  margin: 0;
  padding: 0.65rem 0.85rem;
  border-radius: 4px;
  border: 1px solid rgba(120, 180, 120, 0.45);
  background: rgba(20, 60, 30, 0.35);
  color: #d8f0d8;
  font-size: 0.9rem;
`
