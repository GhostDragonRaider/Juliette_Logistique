import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  belsoAuthMe,
  belsoAuthTorles,
  belsoBejelentkezes,
  belsoKijelentkezes,
  type BelsoFelhasznalo,
} from '../api/belsoApi'

type BelsoAuthAllapot = {
  felhasznalo: BelsoFelhasznalo | null
  betolt: boolean
  bejelentkezve: boolean
  bejelentkezes: (email: string, password: string) => Promise<void>
  kijelentkezes: () => Promise<void>
  frissites: () => Promise<void>
  felhasznaloBeallit: (u: BelsoFelhasznalo | null) => void
}

const BelsoAuthContext = createContext<BelsoAuthAllapot | null>(null)

export function BelsoAuthSzolgaltato({ children }: { children: ReactNode }) {
  const [felhasznalo, setFelhasznalo] = useState<BelsoFelhasznalo | null>(null)
  const [betolt, setBetolt] = useState(true)

  const frissites = useCallback(async () => {
    try {
      const me = await belsoAuthMe()
      setFelhasznalo(me)
    } catch {
      setFelhasznalo(null)
    }
  }, [])

  useEffect(() => {
    let elvetve = false
    ;(async () => {
      try {
        const me = await belsoAuthMe()
        if (!elvetve) {
          setFelhasznalo(me)
        }
      } catch {
        if (!elvetve) {
          setFelhasznalo(null)
        }
      } finally {
        if (!elvetve) {
          setBetolt(false)
        }
      }
    })()
    return () => {
      elvetve = true
    }
  }, [])

  const bejelentkezes = useCallback(async (email: string, password: string) => {
    const u = await belsoBejelentkezes(email, password)
    setFelhasznalo(u)
  }, [])

  const kijelentkezes = useCallback(async () => {
    await belsoKijelentkezes()
    belsoAuthTorles()
    setFelhasznalo(null)
  }, [])

  const ertek = useMemo(
    () => ({
      felhasznalo,
      betolt,
      bejelentkezve: Boolean(felhasznalo),
      bejelentkezes,
      kijelentkezes,
      frissites,
      felhasznaloBeallit: setFelhasznalo,
    }),
    [felhasznalo, betolt, bejelentkezes, kijelentkezes, frissites],
  )

  return (
    <BelsoAuthContext.Provider value={ertek}>{children}</BelsoAuthContext.Provider>
  )
}

export function useBelsoAuth() {
  const ctx = useContext(BelsoAuthContext)
  if (!ctx) {
    throw new Error('useBelsoAuth csak BelsoAuthSzolgaltato alatt használható.')
  }
  return ctx
}
