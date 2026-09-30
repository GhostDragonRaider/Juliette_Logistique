import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { adminFajlLetoltese, type JelentkezesFajl } from '../api/jelentkezesApi'
import { adminTokenOlvas } from './auth'
import { GombSor, UzenetSav } from './adminStilus'
import { tema } from '../stilusok/tema'
import { premiumKartya, premiumSzekcioCim } from './adminPremiumStilus'

const Szekcio = styled.section`
  ${premiumKartya}
  margin-top: 2rem;
  padding: 1.2rem 1.25rem 1.35rem;
`

const SzekcioCim = styled.h3`
  ${premiumSzekcioCim}
`

const FajlRacs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 0.85rem;
  margin-top: 0.25rem;

  @media (max-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: 1fr;
  }
`

const FajlGomb = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
  padding: 0.75rem 0.85rem;
  text-align: left;
  cursor: pointer;
  font-family: ${tema.betu.torzs};
  color: ${tema.szin.feher};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.15));
  border: 1px solid rgba(197, 165, 114, 0.22);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;

  &:hover:not(:disabled) {
    border-color: rgba(197, 165, 114, 0.45);
    transform: translateY(-1px);
    background: linear-gradient(180deg, rgba(197, 165, 114, 0.12), rgba(0, 0, 0, 0.18));
  }

  &:disabled {
    opacity: 0.55;
    cursor: wait;
  }
`

const FajlTipus = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tema.szin.arany};
`

const FajlNev = styled.span`
  font-size: 0.84rem;
  line-height: 1.35;
  color: ${tema.szin.aranyVilagos};
`

const ElonezetKeret = styled.div`
  margin-top: 1rem;
  border: 1px solid rgba(197, 165, 114, 0.3);
  background: rgba(0, 0, 0, 0.35);
  min-height: 280px;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.25);
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
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(6px);
`

const ModalPanel = styled.div`
  width: min(100%, 960px);
  max-height: 92vh;
  overflow: auto;
  padding: 1.15rem;
  ${premiumKartya}
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.55);
`

const BezarasGomb = styled.button`
  font-family: ${tema.betu.torzs};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.5rem 0.9rem;
  color: ${tema.hatter.fekete};
  cursor: pointer;
  border: 1px solid rgba(232, 215, 181, 0.55);
  background: linear-gradient(135deg, #8f7349, #e8d7b5, #c5a572);
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
    return (
      <Szekcio>
        <SzekcioCim>Dokumentumok</SzekcioCim>
        <UzenetSav>Nincs feltöltött dokumentum.</UzenetSav>
      </Szekcio>
    )
  }

  return (
    <Szekcio>
      <SzekcioCim>Dokumentumok</SzekcioCim>
      {hiba ? <UzenetSav hiba>{hiba}</UzenetSav> : null}
      <FajlRacs>
        {fajlok.map((fajl) => (
          <FajlGomb
            key={fajl.utvonal}
            type="button"
            disabled={betoltes}
            onClick={() => void megnyit(fajl)}
          >
            <FajlTipus>{fajl.mezo}</FajlTipus>
            <FajlNev>{fajl.nev}</FajlNev>
          </FajlGomb>
        ))}
      </FajlRacs>

      {elonezetUrl && elonezetTipus ? (
        <ModalHatter
          role="dialog"
          aria-modal="true"
          aria-label={elonezetNev}
          onClick={bezarElonezet}
        >
          <ModalPanel onClick={(e) => e.stopPropagation()}>
            <GombSor>
              <BezarasGomb type="button" onClick={bezarElonezet}>Bezárás</BezarasGomb>
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
    </Szekcio>
  )
}
