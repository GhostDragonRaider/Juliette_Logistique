import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { forditasok } from './forditasok'
import {
  alapNyelv,
  nyelvTaroloKulcs,
  type NyelvKod,
  type OldalForditas,
} from './nyelvTipusok'

/**
 * A nyelv kontextusban elérhető értékek.
 */
export type NyelvContextErtek = {
  nyelv: NyelvKod
  szoveg: OldalForditas
  nyelvetValaszt: (ujNyelv: NyelvKod) => void
}

/** A nyelv React kontextusa */
export const NyelvContext = createContext<NyelvContextErtek | null>(null)

type NyelvSzolgaltatoTulajdonsagok = {
  children: ReactNode
}

/**
 * Ellenőrzi, hogy a kapott érték érvényes nyelvkód-e.
 */
function ervenyesNyelvE(ertek: string | null): ertek is NyelvKod {
  return ertek === 'hu' || ertek === 'en' || ertek === 'de'
}

/**
 * Betölti a mentett nyelvet a localStorage-ból, ha van.
 */
function mentettNyelvBetoltese(): NyelvKod {
  const mentett = window.localStorage.getItem(nyelvTaroloKulcs)
  if (ervenyesNyelvE(mentett)) {
    return mentett
  }
  return alapNyelv
}

/**
 * Az induló nyelvet adja vissza (böngészőben a mentett értéket).
 */
function kezdetiNyelv(): NyelvKod {
  if (typeof window === 'undefined') {
    return alapNyelv
  }
  return mentettNyelvBetoltese()
}

/**
 * Beállítja a HTML dokumentum lang attribútumát a választott nyelvhez.
 */
function htmlNyelvBeallitasa(nyelvKod: NyelvKod) {
  document.documentElement.lang = forditasok[nyelvKod].htmlNyelv
}

/**
 * A nyelvválasztást biztosító szolgáltató komponens.
 * A kiválasztott nyelvet localStorage-ban is megjegyzi.
 */
export function NyelvSzolgaltato({ children }: NyelvSzolgaltatoTulajdonsagok) {
  const [nyelv, setNyelv] = useState<NyelvKod>(kezdetiNyelv)

  /**
   * A dokumentum lang attribútumát szinkronban tartja a választott nyelvvel.
   */
  useEffect(() => {
    htmlNyelvBeallitasa(nyelv)
  }, [nyelv])

  /**
   * Átváltja az oldal nyelvét és elmenti a választást.
   */
  function nyelvetValaszt(ujNyelv: NyelvKod) {
    setNyelv(ujNyelv)
    window.localStorage.setItem(nyelvTaroloKulcs, ujNyelv)
  }

  return (
    <NyelvContext.Provider
      value={{
        nyelv,
        szoveg: forditasok[nyelv],
        nyelvetValaszt,
      }}
    >
      {children}
    </NyelvContext.Provider>
  )
}
