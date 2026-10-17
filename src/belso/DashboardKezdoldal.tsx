import styled from '@emotion/styled'
import { tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'
import { BelsoPanel } from './belsoStilus'

const UresSzoveg = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  line-height: 1.6;
  font-size: 1rem;
`

export function DashboardKezdoldal() {
  const { szoveg } = useNyelv()
  const t = szoveg.belso

  return (
    <BelsoPanel>
      <h1
        style={{
          margin: '0 0 0.75rem',
          fontFamily: tema.betu.cim,
          fontSize: '1.1rem',
          letterSpacing: '0.1em',
          color: tema.szin.aranyVilagos,
        }}
      >
        {t.udvozletCim}
      </h1>
      <UresSzoveg>{t.udvozletSzoveg}</UresSzoveg>
    </BelsoPanel>
  )
}
