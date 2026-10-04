import styled from '@emotion/styled'
import { GorgetesReveal } from '../komponensek/GorgetesReveal'
import { OldalBelso, OldalLista } from '../komponensek/TartalomOldalKeret'

/** Tartalomoldal belső kerete — szöveg és címek középre */
export const KozepreIgazitottBelso = styled(OldalBelso)`
  text-align: center;

  h1,
  h2,
  h3 {
    text-align: center;
  }

  p {
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
  }

  li {
    justify-content: center;
    text-align: center;
  }
`

export const TeljesSzelessegReveal = styled(GorgetesReveal)`
  width: 100%;
`

export const KozepreCtaSor = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`

/** Középre igazított felsorolás (szolgáltatások, partnerek) */
export const KozepreLista = styled(OldalLista)`
  align-items: center;
`
