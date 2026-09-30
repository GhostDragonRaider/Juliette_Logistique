import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NyelvSzolgaltato } from './nyelv/NyelvContext'
import { FoOldal } from './oldalak/FoOldal'
import { Karrier } from './komponensek/karrier'
import { Urlap } from './komponensek/urlap'
import { AdatvedelmiTajekoztato } from './komponensek/adatvedelmi'
import { GlobalisStilus } from './stilusok/GlobalisStilus'
import { HashGorgetes } from './komponensek/HashGorgetes'
import { AdminLayout } from './admin/AdminLayout'
import { AdminBelepes } from './admin/AdminBelepes'
import { AdminAttekintes } from './admin/AdminAttekintes'
import { AdminTartalom } from './admin/AdminTartalom'
import { AdminJelentkezesLista } from './admin/AdminJelentkezesLista'
import { AdminJelentkezesReszlet } from './admin/AdminJelentkezesReszlet'

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
          <Route path="/adatvedelmi" element={<AdatvedelmiTajekoztato />} />
          <Route path="/admin/belepes" element={<AdminBelepes />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminAttekintes />} />
            <Route path="tartalom" element={<AdminTartalom />} />
            <Route path="jelentkezesek" element={<AdminJelentkezesLista />} />
            <Route path="jelentkezesek/:id" element={<AdminJelentkezesReszlet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NyelvSzolgaltato>
  )
}

export default App
