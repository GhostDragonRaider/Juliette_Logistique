import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

/**
 * Elindítja a React alkalmazást a #root elemen.
 */
function alkalmazasInditasa() {
  const gyokerElem = document.getElementById('root')

  if (!gyokerElem) {
    throw new Error('Nem található a #root elem az index.html-ben.')
  }

  createRoot(gyokerElem).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

alkalmazasInditasa()
