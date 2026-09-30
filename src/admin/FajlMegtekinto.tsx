import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { adminFajlLetoltese, type JelentkezesFajl } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { GombSor, KisGomb, UzenetSav } from './adminStilus'
import { tema } from '../stilusok/tema'

const FajlLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const ElonezetKeret = styled.div`
  margin-top: 1rem;
  border: 1px solid rgba(197, 165, 114, 0.3);
  background: rgba(0, 0, 0, 0.35);
  min-height: 280px;
`

const PdfIframe = styled.iframe`
  width: 100%;
  min-height: 70vh;
  border: 0;
  background: #fff;
`

const KepElonezet = styled.img`
  display: block;
  max-width: 100%;
  max-height: 70vh;
  margin: 0 auto;
`

const ModalHatter = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.75);
`

const ModalPanel = styled.div`
  width: min(100%, 960px);
  max-height: 92vh;
  overflow: auto;
  padding: 1rem;
  background: ${tema.hatter.sotet};
  border: 1px solid rgba(197, 165, 114, 0.35);
`

function fajlTipus(nev: string, blob: Blob): 'pdf' | 'kep' | 'egyeb' {
  const alacsony = nev.toLowerCase()
  if (blob.type === 'application/pdf' || alacsony.endsWith('.pdf')) return 'pdf'
  if (blob.type.startsWith('image/') || /\.(png|jpe?g|webp|gif)$/i.test(alacsony)) return 'kep'
  return 'egyeb'
}

type Props = {
  fajlok: JelentkezesFajl[]
}

/**
 * Feltöltött dokumentumok megtekintése (PDF / kép) vagy letöltése.
 */
export function FajlMegtekinto({ fajlok }: Props) {
  const [hiba, setHiba] = useState('')
  const [betoltes, setBetoltes] = useState(false)
  const [elonezetUrl, setElonezetUrl] = useState<string | null>(null)
  const [elonezetTipus, setElonezetTipus] = useState<'pdf' | 'kep' | 'egyeb' | null>(null)
  const [elonezetNev, setElonezetNev] = useState('')

  useEffect(() => {
    return () => {
      if (elonezetUrl) URL.revokeObjectURL(elonezetUrl)
    }
  }, [elonezetUrl])

  async function megnyit(fajl: JelentkezesFajl) {
    setHiba('')
    setBetoltes(true)
    try {
      const token = adminTokenOlvas()
      const blob = await adminFajlLetoltese(token, fajl.utvonal)
      const tipus = fajlTipus(fajl.nev, blob)

      if (elonezetUrl) URL.revokeObjectURL(elonezetUrl)

      if (tipus === 'egyeb') {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = fajl.nev
        link.click()
        URL.revokeObjectURL(url)
        return
      }

      const url = URL.createObjectURL(blob)
      setElonezetUrl(url)
      setElonezetTipus(tipus)
      setElonezetNev(fajl.nev)
    } catch (e) {
      setHiba(e instanceof Error ? e.message : 'A fájl betöltése sikertelen.')
    } finally {
      setBetoltes(false)
    }
  }

  function bezarElonezet() {
    if (elonezetUrl) URL.revokeObjectURL(elonezetUrl)
    setElonezetUrl(null)
    setElonezetTipus(null)
    setElonezetNev('')
  }

  if (!fajlok.length) {
    return <UzenetSav>Nincs feltöltött dokumentum.</UzenetSav>
  }

  return (
    <div>
      <h3 style={{ fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        Dokumentumok
      </h3>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      <FajlLista>
        {fajlok.map((fajl) => (
          <div key={fajl.utvonal}>
            <KisGomb type="button" disabled={betoltes} onClick={() => void megnyit(fajl)}>
              {fajl.mezo}: {fajl.nev} — megtekintés
            </KisGomb>
          </div>
        ))}
      </FajlLista>

      {elonezetUrl && elonezetTipus ? (
        <ModalHatter
          role="dialog"
          aria-modal="true"
          aria-label={elonezetNev}
          onClick={bezarElonezet}
        >
          <ModalPanel onClick={(e) => e.stopPropagation()}>
            <GombSor>
              <KisGomb type="button" onClick={bezarElonezet}>Bezárás</KisGomb>
              <span style={{ color: tema.szin.szurke, fontSize: '0.85rem' }}>{elonezetNev}</span>
            </GombSor>
            <ElonezetKeret>
              {elonezetTipus === 'pdf' ? (
                <PdfIframe src={elonezetUrl} title={elonezetNev} />
              ) : (
                <KepElonezet src={elonezetUrl} alt={elonezetNev} />
              )}
            </ElonezetKeret>
          </ModalPanel>
        </ModalHatter>
      ) : null}
    </div>
  )
}
