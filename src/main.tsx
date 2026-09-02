import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@/i18n'
import '@/index.css'
import { router } from '@/routes/router'

const container = document.getElementById('root')
if (!container) {
  throw new Error('A #root elem nem található az index.html-ben.')
}

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
