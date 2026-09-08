import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NyelvSzolgaltato } from './nyelv/NyelvContext'
import { FoOldal } from './oldalak/FoOldal'
import { Karrier } from './komponensek/karrier'
import { Urlap } from './komponensek/urlap'
import { GlobalisStilus } from './stilusok/GlobalisStilus'
import { HashGorgetes } from './komponensek/HashGorgetes'

/**
 * Az alkalmazás gyökér komponense.
 * Betölti a globális Emotion stílusokat, a nyelvszolgáltatót és a route-okat.
 */
function App() {
  return (
    <NyelvSzolgaltato>
      <GlobalisStilus />
      <BrowserRouter>
        <HashGorgetes />
        <Routes>
          <Route path="/" element={<FoOldal />} />
          <Route path="/karrier" element={<Karrier />} />
          <Route path="/karrier/jelentkezes" element={<Urlap />} />
        </Routes>
      </BrowserRouter>
    </NyelvSzolgaltato>
  )
}

export default App
