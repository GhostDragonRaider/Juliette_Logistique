import { useContext } from 'react'
import { NyelvContext } from './NyelvContext'

/**
 * Visszaadja a aktuális nyelvet és a hozzá tartozó fordításokat.
 */
export function useNyelv() {
  const kontextus = useContext(NyelvContext)

  if (!kontextus) {
    throw new Error('A useNyelv csak a NyelvSzolgaltato belsejében használható.')
  }

  return kontextus
}
