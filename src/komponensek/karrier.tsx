import styled from '@emotion/styled'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'

/**
 * Karrier oldal — saját fejlesztéshez.
 *
 * Arany szöveg a főoldallal megegyezően:
 *   import { aranySzovegAtmenet } from '../stilusok/tema'
 *   majd a styled komponensben: ${aranySzovegAtmenet}
 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  color: ${tema.szin.feher};
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  padding: 0 1.5rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.2rem, 3vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.35;
  ${aranySzovegAtmenet}
`

const H1Text = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-family: ${tema.betu.cim};
  text-wrap: balance;
  ${aranySzovegAtmenet}

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export function Karrier() {
  return (
    <Container className="karrier-oldal">
      <SubContainer>
        <Title>
          Tudj meg többet munkánkról és jelentkezz hozzánk.
        </Title>
      </SubContainer>
    </Container>
  )
}

export default Karrier
