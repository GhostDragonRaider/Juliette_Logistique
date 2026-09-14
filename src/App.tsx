import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NyelvSzolgaltato } from './nyelv/NyelvContext'
import { FoOldal } from './oldalak/FoOldal'
import { Karrier } from './komponensek/karrier'
import { Urlap } from './komponensek/urlap'
import { AdatvedelmiTajekoztato } from './komponensek/adatvedelmi'
import { GlobalisStilus } from './stilusok/GlobalisStilus'
import { HashGorgetes } from './komponensek/HashGorgetes'

/**
 * Az alkalmazás gyökér komponense.
 * Betölti a globális Emotion stílusokat, a nyelvszolgáltatót és a route-okat.
 * A gyökér útvonal automatikusan a Karrier oldalra irányít.
 */
function App() {
  return (
    <NyelvSzolgaltato>
      <GlobalisStilus />
      <BrowserRouter>
        <HashGorgetes />
        <Routes>
          <Route path="/" element={<Navigate to="/karrier" replace />} />
          <Route path="/fooldal" element={<FoOldal />} />
          <Route path="/karrier" element={<Karrier />} />
          <Route path="/karrier/jelentkezes" element={<Urlap />} />
          <Route path="/adatvedelmi" element={<AdatvedelmiTajekoztato />} />
        </Routes>
      </BrowserRouter>
    </NyelvSzolgaltato>
  )
}

export default App
