import { FoOldal } from './oldalak/FoOldal'
import { GlobalisStilus } from './stilusok/GlobalisStilus'

/**
 * Az alkalmazás gyökér komponense.
 * Betölti a globális Emotion stílusokat és megjeleníti a főoldalt.
 */
function App() {
  return (
    <>
      <GlobalisStilus />
      <FoOldal />
    </>
  )
}

export default App
