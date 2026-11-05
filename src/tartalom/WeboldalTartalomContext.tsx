import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { nyilvanosTartalomBetoltese, type SzerkeszthetoTartalom } from '../api/jelentkezesApi'
import { weboldalTartalomAlap } from './weboldalTartalomAlap'

type WeboldalTartalomErtek = SzerkeszthetoTartalom & {
  betoltve: boolean
}

const WeboldalTartalomContext = createContext<WeboldalTartalomErtek | null>(null)

function egyesitettTartalom(api: Partial<SzerkeszthetoTartalom>): SzerkeszthetoTartalom {
  return {
    cegnev: api.cegnev?.trim() || weboldalTartalomAlap.cegnev,
    telefonszam: api.telefonszam?.trim() || weboldalTartalomAlap.telefonszam,
    email: api.email?.trim() || weboldalTartalomAlap.email,
    cim: api.cim?.trim() || weboldalTartalomAlap.cim,
    terulet: api.terulet?.trim() || weboldalTartalomAlap.terulet,
    elerhetoseg: api.elerhetoseg?.trim() || weboldalTartalomAlap.elerhetoseg,
  }
}

/**
 * Betölti a nyilvános /api/content adatokat (admin „Tartalom” mezői).
 */
export function WeboldalTartalomSzolgaltato({ children }: { children: ReactNode }) {
  const [tartalom, setTartalom] = useState<SzerkeszthetoTartalom>(weboldalTartalomAlap)
  const [betoltve, setBetoltve] = useState(false)

  useEffect(() => {
    let elvetve = false

    function frissit() {
      nyilvanosTartalomBetoltese()
        .then((api) => {
          if (!elvetve) {
            setTartalom(egyesitettTartalom(api))
            setBetoltve(true)
          }
        })
        .catch(() => {
          if (!elvetve) {
            setBetoltve(true)
          }
        })
    }

    frissit()

    function lathatosagValtozas() {
      if (document.visibilityState === 'visible') {
        frissit()
      }
    }

    window.addEventListener('focus', frissit)
    document.addEventListener('visibilitychange', lathatosagValtozas)

    return () => {
      elvetve = true
      window.removeEventListener('focus', frissit)
      document.removeEventListener('visibilitychange', lathatosagValtozas)
    }
  }, [])

  const ertek = useMemo(
    () => ({
      ...tartalom,
      betoltve,
    }),
    [tartalom, betoltve],
  )

  return (
    <WeboldalTartalomContext.Provider value={ertek}>{children}</WeboldalTartalomContext.Provider>
  )
}

export function useWeboldalTartalom(): WeboldalTartalomErtek {
  const ctx = useContext(WeboldalTartalomContext)
  if (!ctx) {
    return { ...weboldalTartalomAlap, betoltve: false }
  }
  return ctx
}

/** Telefonszám a fejlécben, láblécben, kapcsolatnál — admin tartalom vagy alapérték. */
export function useTelefonszam(): string {
  return useWeboldalTartalom().telefonszam
}
