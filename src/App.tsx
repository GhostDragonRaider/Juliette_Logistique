import { NyelvSzolgaltato } from './nyelv/NyelvContext'
import { FoOldal } from './oldalak/FoOldal'
import { GlobalisStilus } from './stilusok/GlobalisStilus'

/**
 * Az alkalmazás gyökér komponense.
 * Betölti a globális Emotion stílusokat, a nyelvszolgáltatót és a főoldalt.
 */
function App() {
  return (
    <NyelvSzolgaltato>
      <GlobalisStilus />
      <FoOldal />
    </NyelvSzolgaltato>
  )
}

export default App
