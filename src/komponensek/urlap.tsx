import styled from '@emotion/styled'
import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import {
  aranyKeret,
  aranySzovegAtmenet,
  femesAranyGomb,
  fokuszKeret,
  tema,
} from '../stilusok/tema'
import { bekuldesJelentkezes } from '../api/jelentkezesApi'
import type { FeltoltesKulcs, UrlapAllapot } from './urlapTipusok'
import {
  ellenorizUrlap,
  legkesobbiSzuletesiDatumTizennyolcEvhez,
  type UrlapHibak,
} from './urlapEllenorzes'
import {
  ellenorizFeltoltesFajl,
  profilkepNormalizal,
} from './urlapFajl'
import { oldalTetejereGorget } from '../lib/gorgetes'
import { useNyelv } from '../nyelv/useNyelv'
import type { UrlapOpcio } from '../nyelv/nyelvTipusok'
import { SeoFej } from './SeoFej'

export type { FeltoltesKulcs, UrlapAllapot } from './urlapTipusok'

const kezdoAllapot: UrlapAllapot = {
  teljesNev: '',
  szuletesiDatum: '',
  telefon: '',
  email: '',
  lakhely: '',
  orszag: '',
  bJogositvanyEve: '',
  professzionalisEv: '',
  soforkentNemetorszag: '',
  korabbiTerulet: [],
  korabbiTeruletEgyeb: '',
  premiumTapasztalat: '',
  premiumMarkak: [],
  premiumMarkaEgyeb: '',
  premiumGyakorisag: '',
  automataValto: '',
  munkavallalasiJog: '',
  nemetorszagiCim: '',
  munkabaAllas: '',
  rugalmassag: '',
  jogositvanyKategoria: [],
  jogositvanyEgyeb: '',
  jogositvanyErvenyes: '',
  eltiltas: '',
  erkolesi: '',
  nemetNyelv: '',
  angolNyelv: '',
  okostelefon: '',
  navigacio: '',
  gpsKovetes: '',
  hosszuUt: '',
  hetvege: '',
  tobbnapos: '',
  hetiNapok: '',
  haromEvAktiv: '',
  haromEvProf: '',
  premiumSzuro: '',
  biztonsagosVezetes: '',
  gondosKezeles: '',
  ellenorzesElfogadas: '',
  motivacio: '',
  tapasztalatLeiras: '',
  adatvedelem: false,
  hozzajarulas: false,
  feltoltesek: {
    szemelyi: null,
    jogositvany: null,
    fuehrungszeugnis: null,
    oneletrajz: null,
    profilkep: null,
    referencia: null,
  },
}

const mezoHatter = `
  width: 100%;
  padding: 0.85rem 1rem;
  color: ${tema.szin.feher};
  font-family: ${tema.betu.torzs};
  font-size: 0.98rem;
  line-height: 1.45;
  background: rgba(255, 255, 255, 0.035);
  border: ${aranyKeret};
  border-radius: 0;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: ${tema.szin.szurkeSotet};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:focus {
    outline: none;
    border-color: rgba(232, 215, 181, 0.75);
    background: rgba(197, 165, 114, 0.08);
    box-shadow: 0 0 0 1px rgba(197, 165, 114, 0.2);
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

const mezoHibas = `
  border-color: rgba(220, 120, 90, 0.85);
  box-shadow: 0 0 0 1px rgba(220, 120, 90, 0.25);

  &:focus {
    border-color: rgba(220, 120, 90, 0.95);
    box-shadow: 0 0 0 1px rgba(220, 120, 90, 0.35);
  }
`

const HibaUzenet = styled.span`
  display: block;
  margin-top: 0.2rem;
  font-size: 0.82rem;
  line-height: 1.45;
  color: #e2a08a;
`

const OsszesitoHiba = styled.p`
  width: 100%;
  max-width: 36rem;
  margin: 0;
  text-align: center;
  font-size: 0.88rem;
  line-height: 1.55;
  color: #e2a08a;
`

const Oldal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${tema.oldalsoPadding}
    clamp(3.5rem, 9vh, 6rem);
  color: ${tema.szin.feher};
`

const Keret = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 46rem);
`

const FejlecBlokk = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2.75rem;
`

const FoCim = styled.h1`
  margin: 0 0 0.85rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.25;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}
`

const Alcim = styled.p`
  margin: 0 0 1.25rem;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${tema.szin.arany};
`

const Bevezeto = styled.p`
  max-width: 40rem;
  margin: 0;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  color: ${tema.szin.szurke};
`

const SzekcioBevezeto = styled.p`
  margin: 0;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.7;
  color: ${tema.szin.szurke};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
`

const Szekcio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
  padding: 2.25rem 0;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`

const SzekcioCim = styled.h2`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const MezoCsoport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

const Cimke = styled.label`
  font-family: ${tema.betu.cim};
  font-size: 0.86rem;
  letter-spacing: 0.06em;
  color: ${tema.szin.aranyVilagos};
`

const Seged = styled.span`
  display: block;
  margin-top: 0.35rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: ${tema.szin.szurkeSotet};
`

const SzovegMezo = styled.input<{ $hibas?: boolean }>`
  ${mezoHatter}
  ${(props) => (props.$hibas ? mezoHibas : '')}
`

const DatumMezo = styled.input<{ $hibas?: boolean }>`
  ${mezoHatter}
  color-scheme: dark;
  ${(props) => (props.$hibas ? mezoHibas : '')}
`

const SelectMezo = styled.select<{ $hibas?: boolean }>`
  ${mezoHatter}
  appearance: none;
  color: ${tema.szin.feher};
  background-color: rgba(255, 255, 255, 0.035);
  color-scheme: dark;

  option {
    color: ${tema.szin.feher};
    background-color: ${tema.hatter.emelt};
  }

  option[value=''] {
    color: ${tema.szin.szurke};
  }

  background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${tema.szin.arany} 50%
    ),
    linear-gradient(135deg, ${tema.szin.arany} 50%, transparent 50%);
  background-position:
    calc(100% - 1.15rem) calc(50% - 0.18rem),
    calc(100% - 0.85rem) calc(50% - 0.18rem);
  background-size: 0.35rem 0.35rem;
  background-repeat: no-repeat;
  padding-right: 2.4rem;
  ${(props) => (props.$hibas ? mezoHibas : '')}
`

const SzovegTerulet = styled.textarea<{ $hibas?: boolean }>`
  ${mezoHatter}
  min-height: 8rem;
  resize: vertical;
  ${(props) => (props.$hibas ? mezoHibas : '')}
`

const ValaszLista = styled.div<{ $hibas?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: ${(props) => (props.$hibas ? '0.55rem 0.65rem' : '0')};
  border: ${(props) =>
    props.$hibas ? '1px solid rgba(220, 120, 90, 0.55)' : 'none'};
`

const ValaszSor = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.55rem 0.15rem;
  cursor: pointer;
  color: ${tema.szin.szurke};
  font-size: 0.95rem;
  line-height: 1.45;
  transition: color 0.2s ease;

  &:hover {
    color: ${tema.szin.feher};
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }
`

const Jelolo = styled.span<{ tipus: 'radio' | 'checkbox'; checked: boolean }>`
  flex-shrink: 0;
  width: 1.05rem;
  height: 1.05rem;
  margin-top: 0.15rem;
  border: 1px solid
    ${(props) =>
      props.checked
        ? tema.szin.aranyVilagos
        : 'rgba(197, 165, 114, 0.45)'};
  border-radius: ${(props) => (props.tipus === 'radio' ? '50%' : '0')};
  background: ${(props) => {
    if (!props.checked) return 'transparent'
    if (props.tipus === 'radio') {
      return `radial-gradient(circle at center, ${tema.szin.aranyVilagos} 0 34%, transparent 37%)`
    }
    return tema.szin.arany
  }};
  box-shadow: ${(props) =>
    props.checked && props.tipus === 'checkbox'
      ? `inset 0 0 0 0.18rem ${tema.hatter.sotet}`
      : 'none'};
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
`

const EgyebMezo = styled(SzovegMezo)`
  margin-top: 0.35rem;
  margin-left: 1.8rem;
  max-width: calc(100% - 1.8rem);
`

const FeltoltesKartya = styled.div<{ $hibas?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1.15rem 0.65rem 0.85rem;
  border: ${(props) =>
    props.$hibas
      ? '1px solid rgba(220, 120, 90, 0.55)'
      : '1px solid transparent'};
`

const FeltoltesCim = styled.h3`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const FeltoltesGomb = styled.label<{ $hibas?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  max-width: 100%;
  min-height: 44px;
  padding: 0.7rem 1.15rem;
  cursor: pointer;
  text-align: center;
  color: ${tema.szin.aranyVilagos};
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: ${(props) =>
    props.$hibas
      ? '1px solid rgba(220, 120, 90, 0.85)'
      : aranyKeret};
  background: transparent;
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(197, 165, 114, 0.1);
    box-shadow: ${tema.arnyek.aranyFeny};
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    overflow: hidden;
  }
`

const FajlNev = styled.span`
  font-size: 0.84rem;
  color: ${tema.szin.szurke};
  word-break: break-word;
`

const KuldesSor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.35rem;
  padding-top: 0.5rem;
`

const AdatvedelmiLink = styled.a`
  color: ${tema.szin.aranyVilagos};
  text-decoration: underline;
  text-underline-offset: 0.18em;
  text-decoration-thickness: 1px;
  transition: color 0.2s ease;

  &:hover {
    color: ${tema.szin.arany};
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

const KuldesGomb = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  max-width: min(100%, 22rem);
  min-height: 50px;
  padding: 0.95rem 1.9rem;
  cursor: pointer;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  ${femesAranyGomb}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

const PopupHatter = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${tema.oldalsoPadding};
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: urlapPopupFade 0.28s ease;

  @keyframes urlapPopupFade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const PopupAblak = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: min(100%, 28rem);
  padding: clamp(1.75rem, 4vw, 2.35rem) clamp(1.35rem, 3.5vw, 2rem);
  text-align: center;
  background:
    linear-gradient(
      165deg,
      rgba(44, 44, 44, 0.98) 0%,
      rgba(27, 27, 27, 0.98) 100%
    );
  border: 1px solid rgba(197, 165, 114, 0.35);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(232, 215, 181, 0.12);
  animation: urlapPopupFel 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes urlapPopupFel {
    from {
      opacity: 0;
      transform: translate3d(0, 16px, 0) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const PopupCim = styled.h2`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.3;
  ${aranySzovegAtmenet}
`

const PopupSzoveg = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  line-height: 1.7;
`

const PopupZarGomb = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 0.65rem;
  min-height: 44px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${femesAranyGomb}
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    background-position 0.55s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    ${fokuszKeret}
  }
`

type RadioProps = {
  nev: string
  ertek: string
  opciok: UrlapOpcio[]
  onChange: (ertek: string) => void
  hiba?: string
}

function RadioCsoport({ nev, ertek, opciok, onChange, hiba }: RadioProps) {
  return (
    <div>
      <ValaszLista role="radiogroup" aria-label={nev} $hibas={Boolean(hiba)}>
        {opciok.map((opcio) => {
          const checked = ertek === opcio.ertek
          return (
            <ValaszSor key={opcio.ertek}>
              <input
                type="radio"
                name={nev}
                value={opcio.ertek}
                checked={checked}
                onChange={() => onChange(opcio.ertek)}
              />
              <Jelolo tipus="radio" checked={checked} aria-hidden="true" />
              <span>{opcio.felirat}</span>
            </ValaszSor>
          )
        })}
      </ValaszLista>
      {hiba ? <HibaUzenet>{hiba}</HibaUzenet> : null}
    </div>
  )
}

type CheckboxProps = {
  ertekek: string[]
  opciok: UrlapOpcio[]
  onChange: (ertekek: string[]) => void
  egyebErtek?: string
  onEgyebChange?: (ertek: string) => void
  egyebKulcs: string
  egyebPlaceholder: string
  egyebAria: string
  hiba?: string
  egyebHiba?: string
}

function CheckboxCsoport({
  ertekek,
  opciok,
  onChange,
  egyebErtek,
  onEgyebChange,
  egyebKulcs,
  egyebPlaceholder,
  egyebAria,
  hiba,
  egyebHiba,
}: CheckboxProps) {
  function valt(opcioErtek: string) {
    if (ertekek.includes(opcioErtek)) {
      onChange(ertekek.filter((e) => e !== opcioErtek))
      return
    }
    onChange([...ertekek, opcioErtek])
  }

  return (
    <div>
      <ValaszLista $hibas={Boolean(hiba || egyebHiba)}>
        {opciok.map((opcio) => {
          const checked = ertekek.includes(opcio.ertek)
          const egyeb = opcio.ertek === egyebKulcs
          return (
            <div key={opcio.ertek}>
              <ValaszSor>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => valt(opcio.ertek)}
                />
                <Jelolo tipus="checkbox" checked={checked} aria-hidden="true" />
                <span>{opcio.felirat}</span>
              </ValaszSor>
              {egyeb && checked && onEgyebChange ? (
                <EgyebMezo
                  type="text"
                  value={egyebErtek ?? ''}
                  $hibas={Boolean(egyebHiba)}
                  onChange={(e) => onEgyebChange(e.target.value)}
                  placeholder={egyebPlaceholder}
                  aria-label={egyebAria}
                />
              ) : null}
            </div>
          )
        })}
      </ValaszLista>
      {hiba ? <HibaUzenet>{hiba}</HibaUzenet> : null}
      {egyebHiba ? <HibaUzenet>{egyebHiba}</HibaUzenet> : null}
    </div>
  )
}

type FeltoltesProps = {
  cim: string
  leiras: string
  seged?: string
  fajl: File | null
  accept?: string
  onChange: (fajl: File | null) => void | Promise<void>
  hiba?: string
  kotelezo?: boolean
  feltoltesGomb: string
}

function FeltoltesMezo({
  cim,
  leiras,
  seged,
  fajl,
  accept = '.pdf,.jpg,.jpeg,.png,.webp',
  onChange,
  hiba,
  kotelezo = true,
  feltoltesGomb,
}: FeltoltesProps) {
  async function kezel(e: ChangeEvent<HTMLInputElement>) {
    const kivalasztott = e.target.files?.[0] ?? null
    e.target.value = ''
    await onChange(kivalasztott)
  }

  return (
    <FeltoltesKartya $hibas={Boolean(hiba)}>
      <FeltoltesCim>
        {cim}
        {kotelezo ? ' *' : ''}
      </FeltoltesCim>
      <Cimke as="span">{leiras}</Cimke>
      <FeltoltesGomb $hibas={Boolean(hiba)}>
        <input type="file" accept={accept} onChange={kezel} />
        {feltoltesGomb}
      </FeltoltesGomb>
      {fajl ? <FajlNev>{fajl.name}</FajlNev> : null}
      {seged ? <Seged>{seged}</Seged> : null}
      {hiba ? <HibaUzenet>{hiba}</HibaUzenet> : null}
    </FeltoltesKartya>
  )
}

/**
 * Sofőr jelentkezési űrlap — pezsgőarany prémium megjelenés.
 */
export function Urlap() {
  const navigate = useNavigate()
  const { szoveg } = useNyelv()
  const t = szoveg.jelentkezes
  const op = t.opciok
  const maxSzuletesiDatum = legkesobbiSzuletesiDatumTizennyolcEvhez()
  const [adat, setAdat] = useState<UrlapAllapot>(kezdoAllapot)
  const [hibak, setHibak] = useState<UrlapHibak>({})
  const [popupLathato, setPopupLathato] = useState(false)
  const [kuldesFut, setKuldesFut] = useState(false)
  const [kuldesHiba, setKuldesHiba] = useState('')
  const [feltoltesFut, setFeltoltesFut] = useState(false)

  useEffect(() => {
    oldalTetejereGorget('auto')
  }, [])

  function popupBezarEsKezdooldal() {
    setPopupLathato(false)
    navigate('/')
  }

  useEffect(() => {
    if (!popupLathato) {
      return
    }

    const elozoOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function billentyu(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        popupBezarEsKezdooldal()
      }
    }

    window.addEventListener('keydown', billentyu)
    return () => {
      document.body.style.overflow = elozoOverflow
      window.removeEventListener('keydown', billentyu)
    }
  }, [popupLathato, navigate])

  function torolHiba(kulcs: string) {
    setHibak((elozo) => {
      if (!elozo[kulcs]) return elozo
      const kovetkezo = { ...elozo }
      delete kovetkezo[kulcs]
      return kovetkezo
    })
  }

  function frissit<K extends keyof UrlapAllapot>(kulcs: K, ertek: UrlapAllapot[K]) {
    setAdat((elozo) => ({ ...elozo, [kulcs]: ertek }))
    torolHiba(String(kulcs))
  }

  async function feltoltesFrissit(kulcs: FeltoltesKulcs, fajl: File | null) {
    if (!fajl) {
      setAdat((elozo) => ({
        ...elozo,
        feltoltesek: { ...elozo.feltoltesek, [kulcs]: null },
      }))
      torolHiba(`feltoltes.${kulcs}`)
      return
    }

    const tipusHiba = ellenorizFeltoltesFajl(kulcs, fajl, t.hibak)
    if (tipusHiba) {
      setHibak((elozo) => ({ ...elozo, [`feltoltes.${kulcs}`]: tipusHiba }))
      return
    }

    let vegleges = fajl
    if (kulcs === 'profilkep') {
      setFeltoltesFut(true)
      try {
        vegleges = await profilkepNormalizal(fajl)
      } catch (err) {
        setHibak((elozo) => ({
          ...elozo,
          [`feltoltes.${kulcs}`]:
            err instanceof Error ? err.message : t.hibak.profilkepFeldolgozas,
        }))
        return
      } finally {
        setFeltoltesFut(false)
      }
    }

    setAdat((elozo) => ({
      ...elozo,
      feltoltesek: { ...elozo.feltoltesek, [kulcs]: vegleges },
    }))
    torolHiba(`feltoltes.${kulcs}`)
  }

  async function kuldes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const ujHibak = ellenorizUrlap(adat, t.hibak)
    setHibak(ujHibak)

    if (Object.keys(ujHibak).length > 0) {
      window.setTimeout(() => {
        const elsoHiba = document.querySelector<HTMLElement>('[data-hiba="true"]')
        elsoHiba?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
      return
    }

    setKuldesHiba('')
    setKuldesFut(true)
    try {
      const { feltoltesek, ...urlapAdat } = adat
      await bekuldesJelentkezes(urlapAdat, feltoltesek)
      setPopupLathato(true)
    } catch (e) {
      setKuldesHiba(
        e instanceof Error
          ? e.message
          : t.hibak.kuldesSikertelen,
      )
    } finally {
      setKuldesFut(false)
    }
  }

  const hibaDarab = Object.keys(hibak).length

  return (
    <>
      <SeoFej feluliras={t.seo} />
      <Oldal className="urlap-oldal">
        <Keret>
          <FejlecBlokk>
            <FoCim>{t.foCim}</FoCim>
            <Alcim>{t.alcim}</Alcim>
            <Bevezeto>{t.bevezeto}</Bevezeto>
          </FejlecBlokk>

          <Form onSubmit={kuldes} noValidate>
            <Szekcio aria-labelledby="szemelyes-adatok">
              <SzekcioCim id="szemelyes-adatok">{t.szekcio.szemelyes}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.teljesNev ? 'true' : undefined}>
                <Cimke htmlFor="teljesNev">{t.mezo.teljesNev}</Cimke>
              <SzovegMezo
                id="teljesNev"
                type="text"
                autoComplete="name"
                required
                value={adat.teljesNev}
                $hibas={Boolean(hibak.teljesNev)}
                onChange={(e) => frissit('teljesNev', e.target.value)}
              />
              {hibak.teljesNev ? <HibaUzenet>{hibak.teljesNev}</HibaUzenet> : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.szuletesiDatum ? 'true' : undefined}>
                <Cimke htmlFor="szuletesiDatum">{t.mezo.szuletesiDatum}</Cimke>
              <DatumMezo
                id="szuletesiDatum"
                type="date"
                required
                max={maxSzuletesiDatum}
                value={adat.szuletesiDatum}
                $hibas={Boolean(hibak.szuletesiDatum)}
                onChange={(e) => frissit('szuletesiDatum', e.target.value)}
              />
              {hibak.szuletesiDatum ? (
                <HibaUzenet>{hibak.szuletesiDatum}</HibaUzenet>
              ) : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.telefon ? 'true' : undefined}>
                <Cimke htmlFor="telefon">{t.mezo.telefon}</Cimke>
              <SzovegMezo
                id="telefon"
                type="tel"
                autoComplete="tel"
                required
                value={adat.telefon}
                $hibas={Boolean(hibak.telefon)}
                onChange={(e) => frissit('telefon', e.target.value)}
              />
              {hibak.telefon ? <HibaUzenet>{hibak.telefon}</HibaUzenet> : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.email ? 'true' : undefined}>
                <Cimke htmlFor="email">{t.mezo.email}</Cimke>
              <SzovegMezo
                id="email"
                type="email"
                autoComplete="email"
                required
                value={adat.email}
                $hibas={Boolean(hibak.email)}
                onChange={(e) => frissit('email', e.target.value)}
              />
              {hibak.email ? <HibaUzenet>{hibak.email}</HibaUzenet> : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.lakhely ? 'true' : undefined}>
                <Cimke htmlFor="lakhely">{t.mezo.lakhely}</Cimke>
              <SzovegMezo
                id="lakhely"
                type="text"
                autoComplete="postal-code"
                required
                value={adat.lakhely}
                $hibas={Boolean(hibak.lakhely)}
                onChange={(e) => frissit('lakhely', e.target.value)}
              />
              {hibak.lakhely ? <HibaUzenet>{hibak.lakhely}</HibaUzenet> : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.orszag ? 'true' : undefined}>
                <Cimke htmlFor="orszag">{t.mezo.orszag}</Cimke>
                <SelectMezo
                  id="orszag"
                  required
                  value={adat.orszag}
                  $hibas={Boolean(hibak.orszag)}
                  onChange={(e) => frissit('orszag', e.target.value)}
                >
                  <option value="">{t.valasszon}</option>
                  {op.orszagok.map((orszag) => (
                    <option key={orszag.ertek} value={orszag.ertek}>
                      {orszag.felirat}
                    </option>
                  ))}
                </SelectMezo>
                {hibak.orszag ? <HibaUzenet>{hibak.orszag}</HibaUzenet> : null}
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="vezetesi-tapasztalat">
              <SzekcioCim id="vezetesi-tapasztalat">{t.szekcio.vezetes}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.bJogositvanyEve ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.bJogositvanyEve}</Cimke>
                <RadioCsoport
                  nev="bJogositvanyEve"
                  ertek={adat.bJogositvanyEve}
                  opciok={op.bJogositvanyEve}
                  hiba={hibak.bJogositvanyEve}
                  onChange={(v) => frissit('bJogositvanyEve', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.professzionalisEv ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.professzionalisEv}</Cimke>
                <RadioCsoport
                  nev="professzionalisEv"
                  ertek={adat.professzionalisEv}
                  opciok={op.professzionalisEv}
                  hiba={hibak.professzionalisEv}
                  onChange={(v) => frissit('professzionalisEv', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.soforkentNemetorszag ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.soforkentNemetorszag}</Cimke>
                <RadioCsoport
                  nev="soforkentNemetorszag"
                  ertek={adat.soforkentNemetorszag}
                  opciok={op.igenNem}
                  hiba={hibak.soforkentNemetorszag}
                  onChange={(v) => frissit('soforkentNemetorszag', v)}
                />
              </MezoCsoport>

              <MezoCsoport
                data-hiba={
                  hibak.korabbiTerulet || hibak.korabbiTeruletEgyeb ? 'true' : undefined
                }
              >
                <Cimke as="span">{t.mezo.korabbiTerulet}</Cimke>
                <CheckboxCsoport
                  ertekek={adat.korabbiTerulet}
                  opciok={op.korabbiTerulet}
                  egyebKulcs={t.egyebErtek}
                  egyebPlaceholder={t.egyebPlaceholder}
                  egyebAria={t.egyebAria}
                  egyebErtek={adat.korabbiTeruletEgyeb}
                  onEgyebChange={(v) => frissit('korabbiTeruletEgyeb', v)}
                  hiba={hibak.korabbiTerulet}
                  egyebHiba={hibak.korabbiTeruletEgyeb}
                  onChange={(v) => frissit('korabbiTerulet', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="premium-tapasztalat">
              <SzekcioCim id="premium-tapasztalat">{t.szekcio.premium}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.premiumTapasztalat ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.premiumTapasztalat}</Cimke>
                <RadioCsoport
                  nev="premiumTapasztalat"
                  ertek={adat.premiumTapasztalat}
                  opciok={op.igenNem}
                  hiba={hibak.premiumTapasztalat}
                  onChange={(v) => frissit('premiumTapasztalat', v)}
                />
              </MezoCsoport>

              <MezoCsoport
                data-hiba={
                  hibak.premiumMarkak || hibak.premiumMarkaEgyeb ? 'true' : undefined
                }
              >
                <Cimke as="span">{t.mezo.premiumMarkak}</Cimke>
                <CheckboxCsoport
                  ertekek={adat.premiumMarkak}
                  opciok={op.premiumMarkak}
                  egyebKulcs={t.egyebErtek}
                  egyebPlaceholder={t.egyebPlaceholder}
                  egyebAria={t.egyebAria}
                  egyebErtek={adat.premiumMarkaEgyeb}
                  onEgyebChange={(v) => frissit('premiumMarkaEgyeb', v)}
                  hiba={hibak.premiumMarkak}
                  egyebHiba={hibak.premiumMarkaEgyeb}
                  onChange={(v) => frissit('premiumMarkak', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.premiumGyakorisag ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.premiumGyakorisag}</Cimke>
                <RadioCsoport
                  nev="premiumGyakorisag"
                  ertek={adat.premiumGyakorisag}
                  opciok={op.premiumGyakorisag}
                  hiba={hibak.premiumGyakorisag}
                  onChange={(v) => frissit('premiumGyakorisag', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.automataValto ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.automataValto}</Cimke>
                <RadioCsoport
                  nev="automataValto"
                  ertek={adat.automataValto}
                  opciok={op.igenNem}
                  hiba={hibak.automataValto}
                  onChange={(v) => frissit('automataValto', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="nemetorszag">
              <SzekcioCim id="nemetorszag">{t.szekcio.nemetorszag}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.munkavallalasiJog ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.munkavallalasiJog}</Cimke>
                <RadioCsoport
                  nev="munkavallalasiJog"
                  ertek={adat.munkavallalasiJog}
                  opciok={op.igenNem}
                  hiba={hibak.munkavallalasiJog}
                  onChange={(v) => frissit('munkavallalasiJog', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.nemetorszagiCim ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.nemetorszagiCim}</Cimke>
                <RadioCsoport
                  nev="nemetorszagiCim"
                  ertek={adat.nemetorszagiCim}
                  opciok={op.igenNem}
                  hiba={hibak.nemetorszagiCim}
                  onChange={(v) => frissit('nemetorszagiCim', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.munkabaAllas ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.munkabaAllas}</Cimke>
                <RadioCsoport
                  nev="munkabaAllas"
                  ertek={adat.munkabaAllas}
                  opciok={op.munkabaAllas}
                  hiba={hibak.munkabaAllas}
                  onChange={(v) => frissit('munkabaAllas', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.rugalmassag ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.rugalmassag}</Cimke>
                <RadioCsoport
                  nev="rugalmassag"
                  ertek={adat.rugalmassag}
                  opciok={op.rugalmassag}
                  hiba={hibak.rugalmassag}
                  onChange={(v) => frissit('rugalmassag', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="jogositvany">
              <SzekcioCim id="jogositvany">{t.szekcio.jogositvany}</SzekcioCim>

              <MezoCsoport
                data-hiba={
                  hibak.jogositvanyKategoria || hibak.jogositvanyEgyeb
                    ? 'true'
                    : undefined
                }
              >
                <Cimke as="span">{t.mezo.jogositvanyKategoria}</Cimke>
                <CheckboxCsoport
                  ertekek={adat.jogositvanyKategoria}
                  opciok={op.jogositvanyKategoria}
                  egyebKulcs={t.egyebErtek}
                  egyebPlaceholder={t.egyebPlaceholder}
                  egyebAria={t.egyebAria}
                  egyebErtek={adat.jogositvanyEgyeb}
                  onEgyebChange={(v) => frissit('jogositvanyEgyeb', v)}
                  hiba={hibak.jogositvanyKategoria}
                  egyebHiba={hibak.jogositvanyEgyeb}
                  onChange={(v) => frissit('jogositvanyKategoria', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.jogositvanyErvenyes ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.jogositvanyErvenyes}</Cimke>
                <RadioCsoport
                  nev="jogositvanyErvenyes"
                  ertek={adat.jogositvanyErvenyes}
                  opciok={op.igenNem}
                  hiba={hibak.jogositvanyErvenyes}
                  onChange={(v) => frissit('jogositvanyErvenyes', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.eltiltas ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.eltiltas}</Cimke>
                <RadioCsoport
                  nev="eltiltas"
                  ertek={adat.eltiltas}
                  opciok={op.igenNem}
                  hiba={hibak.eltiltas}
                  onChange={(v) => frissit('eltiltas', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.erkolesi ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.erkolesi}</Cimke>
                <RadioCsoport
                  nev="erkolesi"
                  ertek={adat.erkolesi}
                  opciok={op.erkolesi}
                  hiba={hibak.erkolesi}
                  onChange={(v) => frissit('erkolesi', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="nyelv">
              <SzekcioCim id="nyelv">{t.szekcio.nyelv}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.nemetNyelv ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.nemetNyelv}</Cimke>
                <RadioCsoport
                  nev="nemetNyelv"
                  ertek={adat.nemetNyelv}
                  opciok={op.nyelvSzint}
                  hiba={hibak.nemetNyelv}
                  onChange={(v) => frissit('nemetNyelv', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.angolNyelv ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.angolNyelv}</Cimke>
                <RadioCsoport
                  nev="angolNyelv"
                  ertek={adat.angolNyelv}
                  opciok={op.nyelvSzint}
                  hiba={hibak.angolNyelv}
                  onChange={(v) => frissit('angolNyelv', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="keszsegek">
              <SzekcioCim id="keszsegek">{t.szekcio.keszsegek}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.okostelefon ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.okostelefon}</Cimke>
                <RadioCsoport
                  nev="okostelefon"
                  ertek={adat.okostelefon}
                  opciok={op.igenNem}
                  hiba={hibak.okostelefon}
                  onChange={(v) => frissit('okostelefon', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.navigacio ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.navigacio}</Cimke>
                <RadioCsoport
                  nev="navigacio"
                  ertek={adat.navigacio}
                  opciok={op.igenNem}
                  hiba={hibak.navigacio}
                  onChange={(v) => frissit('navigacio', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.gpsKovetes ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.gpsKovetes}</Cimke>
                <RadioCsoport
                  nev="gpsKovetes"
                  ertek={adat.gpsKovetes}
                  opciok={op.igenNem}
                  hiba={hibak.gpsKovetes}
                  onChange={(v) => frissit('gpsKovetes', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="feltetelek">
              <SzekcioCim id="feltetelek">{t.szekcio.feltetelek}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.hosszuUt ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.hosszuUt}</Cimke>
                <RadioCsoport
                  nev="hosszuUt"
                  ertek={adat.hosszuUt}
                  opciok={op.igenNem}
                  hiba={hibak.hosszuUt}
                  onChange={(v) => frissit('hosszuUt', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.hetvege ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.hetvege}</Cimke>
                <RadioCsoport
                  nev="hetvege"
                  ertek={adat.hetvege}
                  opciok={op.hetvege}
                  hiba={hibak.hetvege}
                  onChange={(v) => frissit('hetvege', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.tobbnapos ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.tobbnapos}</Cimke>
                <RadioCsoport
                  nev="tobbnapos"
                  ertek={adat.tobbnapos}
                  opciok={op.igenNem}
                  hiba={hibak.tobbnapos}
                  onChange={(v) => frissit('tobbnapos', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.hetiNapok ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.hetiNapok}</Cimke>
                <RadioCsoport
                  nev="hetiNapok"
                  ertek={adat.hetiNapok}
                  opciok={op.hetiNapok}
                  hiba={hibak.hetiNapok}
                  onChange={(v) => frissit('hetiNapok', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="szurok">
              <SzekcioCim id="szurok">{t.szekcio.szurok}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.haromEvAktiv ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.haromEvAktiv}</Cimke>
                <RadioCsoport
                  nev="haromEvAktiv"
                  ertek={adat.haromEvAktiv}
                  opciok={op.igenNem}
                  hiba={hibak.haromEvAktiv}
                  onChange={(v) => frissit('haromEvAktiv', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.haromEvProf ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.haromEvProf}</Cimke>
                <RadioCsoport
                  nev="haromEvProf"
                  ertek={adat.haromEvProf}
                  opciok={op.igenNem}
                  hiba={hibak.haromEvProf}
                  onChange={(v) => frissit('haromEvProf', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.premiumSzuro ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.premiumSzuro}</Cimke>
                <RadioCsoport
                  nev="premiumSzuro"
                  ertek={adat.premiumSzuro}
                  opciok={op.igenNem}
                  hiba={hibak.premiumSzuro}
                  onChange={(v) => frissit('premiumSzuro', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.biztonsagosVezetes ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.biztonsagosVezetes}</Cimke>
                <RadioCsoport
                  nev="biztonsagosVezetes"
                  ertek={adat.biztonsagosVezetes}
                  opciok={op.igenNem}
                  hiba={hibak.biztonsagosVezetes}
                  onChange={(v) => frissit('biztonsagosVezetes', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.gondosKezeles ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.gondosKezeles}</Cimke>
                <RadioCsoport
                  nev="gondosKezeles"
                  ertek={adat.gondosKezeles}
                  opciok={op.igenNem}
                  hiba={hibak.gondosKezeles}
                  onChange={(v) => frissit('gondosKezeles', v)}
                />
              </MezoCsoport>

              <MezoCsoport data-hiba={hibak.ellenorzesElfogadas ? 'true' : undefined}>
                <Cimke as="span">{t.mezo.ellenorzesElfogadas}</Cimke>
                <RadioCsoport
                  nev="ellenorzesElfogadas"
                  ertek={adat.ellenorzesElfogadas}
                  opciok={op.igenNem}
                  hiba={hibak.ellenorzesElfogadas}
                  onChange={(v) => frissit('ellenorzesElfogadas', v)}
                />
              </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="dokumentumok">
              <SzekcioCim id="dokumentumok">{t.szekcio.dokumentumok}</SzekcioCim>
              <SzekcioBevezeto>{t.dokumentumokBevezeto}</SzekcioBevezeto>

              <div data-hiba={hibak['feltoltes.szemelyi'] ? 'true' : undefined}>
                <FeltoltesMezo
                  cim={t.feltoltes.szemelyi.cim}
                  leiras={t.feltoltes.szemelyi.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf"
                  fajl={adat.feltoltesek.szemelyi}
                  hiba={hibak['feltoltes.szemelyi']}
                  onChange={(f) => feltoltesFrissit('szemelyi', f)}
                />
              </div>
              <div data-hiba={hibak['feltoltes.jogositvany'] ? 'true' : undefined}>
                <FeltoltesMezo
                  cim={t.feltoltes.jogositvany.cim}
                  leiras={t.feltoltes.jogositvany.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf"
                  fajl={adat.feltoltesek.jogositvany}
                  hiba={hibak['feltoltes.jogositvany']}
                  onChange={(f) => feltoltesFrissit('jogositvany', f)}
                />
              </div>
              <div
                data-hiba={hibak['feltoltes.fuehrungszeugnis'] ? 'true' : undefined}
              >
                <FeltoltesMezo
                  cim={t.feltoltes.fuehrungszeugnis.cim}
                  leiras={t.feltoltes.fuehrungszeugnis.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf"
                  seged={t.feltoltes.fuehrungszeugnis.seged}
                  fajl={adat.feltoltesek.fuehrungszeugnis}
                  hiba={hibak['feltoltes.fuehrungszeugnis']}
                  kotelezo={
                    adat.erkolesi !== 'Nem' && adat.erkolesi !== 'Beszerzés alatt'
                  }
                  onChange={(f) => feltoltesFrissit('fuehrungszeugnis', f)}
                />
              </div>
              <div data-hiba={hibak['feltoltes.oneletrajz'] ? 'true' : undefined}>
                <FeltoltesMezo
                  cim={t.feltoltes.oneletrajz.cim}
                  leiras={t.feltoltes.oneletrajz.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".pdf,application/pdf"
                  fajl={adat.feltoltesek.oneletrajz}
                  hiba={hibak['feltoltes.oneletrajz']}
                  onChange={(f) => feltoltesFrissit('oneletrajz', f)}
                />
              </div>
              <div data-hiba={hibak['feltoltes.profilkep'] ? 'true' : undefined}>
                <FeltoltesMezo
                  cim={t.feltoltes.profilkep.cim}
                  leiras={t.feltoltes.profilkep.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                  seged={t.feltoltes.profilkep.seged}
                  fajl={adat.feltoltesek.profilkep}
                  hiba={hibak['feltoltes.profilkep']}
                  onChange={(f) => feltoltesFrissit('profilkep', f)}
                />
              </div>
              <div data-hiba={hibak['feltoltes.referencia'] ? 'true' : undefined}>
                <FeltoltesMezo
                  cim={t.feltoltes.referencia.cim}
                  leiras={t.feltoltes.referencia.leiras}
                  feltoltesGomb={t.feltoltesGomb}
                  accept=".pdf,application/pdf"
                  fajl={adat.feltoltesek.referencia}
                  hiba={hibak['feltoltes.referencia']}
                  onChange={(f) => feltoltesFrissit('referencia', f)}
                />
              </div>
            </Szekcio>

            <Szekcio aria-labelledby="motivacio">
              <SzekcioCim id="motivacio">{t.szekcio.motivacio}</SzekcioCim>

              <MezoCsoport data-hiba={hibak.motivacio ? 'true' : undefined}>
                <Cimke htmlFor="motivacioSzoveg">{t.mezo.motivacio}</Cimke>
              <SzovegTerulet
                id="motivacioSzoveg"
                value={adat.motivacio}
                $hibas={Boolean(hibak.motivacio)}
                onChange={(e) => frissit('motivacio', e.target.value)}
              />
              {hibak.motivacio ? <HibaUzenet>{hibak.motivacio}</HibaUzenet> : null}
            </MezoCsoport>

              <MezoCsoport data-hiba={hibak.tapasztalatLeiras ? 'true' : undefined}>
                <Cimke htmlFor="tapasztalatLeiras">{t.mezo.tapasztalatLeiras}</Cimke>
              <SzovegTerulet
                id="tapasztalatLeiras"
                value={adat.tapasztalatLeiras}
                $hibas={Boolean(hibak.tapasztalatLeiras)}
                onChange={(e) => frissit('tapasztalatLeiras', e.target.value)}
              />
              {hibak.tapasztalatLeiras ? (
                <HibaUzenet>{hibak.tapasztalatLeiras}</HibaUzenet>
              ) : null}
            </MezoCsoport>
            </Szekcio>

            <Szekcio aria-labelledby="kuldes">
              <SzekcioCim id="kuldes">{t.szekcio.kuldes}</SzekcioCim>

              <ValaszLista>
                <div data-hiba={hibak.adatvedelem ? 'true' : undefined}>
                  <ValaszSor>
                    <input
                      type="checkbox"
                      checked={adat.adatvedelem}
                      onChange={(e) => frissit('adatvedelem', e.target.checked)}
                      required
                    />
                    <Jelolo tipus="checkbox" checked={adat.adatvedelem} aria-hidden="true" />
                    <span>
                      {t.adatvedelemElotte}{' '}
                      <AdatvedelmiLink
                        href="/adatvedelmi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.adatvedelemLink}
                      </AdatvedelmiLink>
                      {t.adatvedelemUtana}
                    </span>
                  </ValaszSor>
                  {hibak.adatvedelem ? (
                    <HibaUzenet>{hibak.adatvedelem}</HibaUzenet>
                  ) : null}
                </div>
                <div data-hiba={hibak.hozzajarulas ? 'true' : undefined}>
                  <ValaszSor>
                    <input
                      type="checkbox"
                      checked={adat.hozzajarulas}
                      onChange={(e) => frissit('hozzajarulas', e.target.checked)}
                      required
                    />
                    <Jelolo
                      tipus="checkbox"
                      checked={adat.hozzajarulas}
                      aria-hidden="true"
                    />
                    <span>{t.hozzajarulas}</span>
                  </ValaszSor>
                  {hibak.hozzajarulas ? (
                    <HibaUzenet>{hibak.hozzajarulas}</HibaUzenet>
                  ) : null}
                </div>
              </ValaszLista>

              <KuldesSor>
                <KuldesGomb type="submit" disabled={kuldesFut || feltoltesFut}>
                  {kuldesFut
                    ? t.gombKuldesFut
                    : feltoltesFut
                      ? t.gombKepFeldolgozas
                      : t.gombKuldes}
                </KuldesGomb>
                {kuldesHiba ? <OsszesitoHiba>{kuldesHiba}</OsszesitoHiba> : null}
                {hibaDarab > 0 ? (
                  <OsszesitoHiba>
                    {t.osszesitoHiba}{' '}
                    {t.osszesitoHibaDarab.replace('{n}', String(hibaDarab))}
                  </OsszesitoHiba>
                ) : null}
              </KuldesSor>
            </Szekcio>
          </Form>
        </Keret>

        {popupLathato
          ? createPortal(
              <PopupHatter role="presentation" onClick={popupBezarEsKezdooldal}>
                <PopupAblak
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="urlap-koszonet-cim"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PopupCim id="urlap-koszonet-cim">{t.popupCim}</PopupCim>
                  <PopupSzoveg>{t.popupSzoveg}</PopupSzoveg>
                  <PopupZarGomb type="button" onClick={popupBezarEsKezdooldal}>
                    {t.popupZar}
                  </PopupZarGomb>
                </PopupAblak>
              </PopupHatter>,
              document.body,
            )
          : null}
      </Oldal>
    </>
  )
}

export default Urlap
