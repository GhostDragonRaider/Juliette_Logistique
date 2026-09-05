import styled from '@emotion/styled'

/**
 * Karrier oldal — saját fejlesztéshez.
 *
 * Fontos: az App.tsx mindig betölti ezt a fájlt.
 * Ha itt import-hiba van, az EGÉSZ weboldal üresen marad.
 *
 * Stílushoz a projektben ezt használd:
 *   import styled from '@emotion/styled'
 *   const Valami = styled.div` ... `
 *
 * NE így:
 *   import emotion from '@emotion/react'  ← nincs default export
 *   emotion.div`...`
 */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  color: #f7f3ea;
`

/**
 * A /karrier útvonal komponense.
 */
export function Karrier() {
  return (
    <Container className="karrier-oldal">
    
    </Container>
  )
}

export default Karrier
