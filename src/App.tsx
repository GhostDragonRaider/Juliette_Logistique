import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NyelvSzolgaltato } from './nyelv/NyelvContext'
import { FoOldal } from './oldalak/FoOldal'
import { RolunkOldal } from './oldalak/RolunkOldal'
import { SzolgaltatasokOldal } from './oldalak/SzolgaltatasokOldal'
import { PartnerekOldal } from './oldalak/PartnerekOldal'
import { KapcsolatOldal } from './oldalak/KapcsolatOldal'
import { Karrier } from './komponensek/karrier'
import { Urlap } from './komponensek/urlap'
import { AdatvedelmiTajekoztato } from './komponensek/adatvedelmi'
import { GlobalisStilus } from './stilusok/GlobalisStilus'
import { HashGorgetes } from './komponensek/HashGorgetes'
import { NyilvanosLayout } from './komponensek/NyilvanosLayout'
import { AdminLayout } from './admin/AdminLayout'
import { AdminBelepes } from './admin/AdminBelepes'
import { AdminTartalom } from './admin/AdminTartalom'
import { AdminJelentkezesLista } from './admin/AdminJelentkezesLista'
import { AdminJelentkezesReszlet } from './admin/AdminJelentkezesReszlet'
import { AdminNaplo } from './admin/AdminNaplo'

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
          <Route element={<NyilvanosLayout />}>
            <Route path="/" element={<FoOldal />} />
            <Route path="/rolunk" element={<RolunkOldal />} />
            <Route path="/szolgaltatasok" element={<SzolgaltatasokOldal />} />
            <Route path="/partnerek" element={<PartnerekOldal />} />
            <Route path="/kapcsolat" element={<KapcsolatOldal />} />
            <Route path="/karrier" element={<Karrier />} />
            <Route path="/karrier/jelentkezes" element={<Urlap />} />
            <Route path="/adatvedelmi" element={<AdatvedelmiTajekoztato />} />
          </Route>
          <Route path="/admin/belepes" element={<AdminBelepes />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="jelentkezesek" replace />} />
            <Route path="tartalom" element={<AdminTartalom />} />
            <Route path="jelentkezesek" element={<AdminJelentkezesLista />} />
            <Route path="jelentkezesek/:id" element={<AdminJelentkezesReszlet />} />
            <Route path="naplo" element={<AdminNaplo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NyelvSzolgaltato>
  )
}

export default App
