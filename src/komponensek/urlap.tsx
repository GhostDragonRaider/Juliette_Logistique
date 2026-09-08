import styled from '@emotion/styled'
import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import {
  aranyKeret,
  aranySzovegAtmenet,
  femesAranyGomb,
  fokuszKeret,
  tema,
} from '../stilusok/tema'

type FeltoltesKulcs =
  | 'szemelyi'
  | 'jogositvany'
  | 'fuehrungszeugnis'
  | 'oneletrajz'
  | 'profilkep'
  | 'referencia'

type UrlapAllapot = {
  teljesNev: string
  szuletesiDatum: string
  telefon: string
  email: string
  lakhely: string
  orszag: string
  bJogositvanyEve: string
  professzionalisEv: string
  soforkentNemetorszag: string
  korabbiTerulet: string[]
  korabbiTeruletEgyeb: string
  premiumTapasztalat: string
  premiumMarkak: string[]
  premiumMarkaEgyeb: string
  premiumGyakorisag: string
  automataValto: string
  munkavallalasiJog: string
  nemetorszagiCim: string
  munkabaAllas: string
  rugalmassag: string
  jogositvanyKategoria: string[]
  jogositvanyEgyeb: string
  jogositvanyErvenyes: string
  eltiltas: string
  erkolesi: string
  nemetNyelv: string
  angolNyelv: string
  okostelefon: string
  navigacio: string
  gpsKovetes: string
  hosszuUt: string
  hetvege: string
  tobbnapos: string
  hetiNapok: string
  haromEvAktiv: string
  haromEvProf: string
  premiumSzuro: string
  biztonsagosVezetes: string
  gondosKezeles: string
  ellenorzesElfogadas: string
  motivacio: string
  tapasztalatLeiras: string
  adatvedelem: boolean
  hozzajarulas: boolean
  feltoltesek: Record<FeltoltesKulcs, File | null>
}

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

const ORSZAGOK = [
  'Németország',
  'Magyarország',
  'Ausztria',
  'Lengyelország',
  'Csehország',
  'Szlovákia',
  'Románia',
  'Hollandia',
  'Belgium',
  'Franciaország',
  'Egyéb',
] as const

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

const SzovegMezo = styled.input`
  ${mezoHatter}
`

const DatumMezo = styled.input`
  ${mezoHatter}
  color-scheme: dark;
`

const SelectMezo = styled.select`
  ${mezoHatter}
  appearance: none;
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
`

const SzovegTerulet = styled.textarea`
  ${mezoHatter}
  min-height: 8rem;
  resize: vertical;
`

const ValaszLista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
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

const FeltoltesKartya = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 1.15rem 0 0.35rem;
`

const FeltoltesCim = styled.h3`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

const FeltoltesGomb = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  width: fit-content;
  max-width: 100%;
  min-height: 44px;
  padding: 0.7rem 1.15rem;
  cursor: pointer;
  color: ${tema.szin.aranyVilagos};
  font-family: ${tema.betu.cim};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: ${aranyKeret};
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

const Koszonet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 50vh;
  justify-content: center;
  text-align: center;
  padding: 2rem 0.5rem;
`

const KoszonetCim = styled.h2`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.2rem, 2.6vw, 1.7rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const KoszonetSzoveg = styled.p`
  max-width: 36rem;
  margin: 0;
  color: ${tema.szin.szurke};
  line-height: 1.7;
`

type RadioProps = {
  nev: string
  ertek: string
  opciok: string[]
  onChange: (ertek: string) => void
}

function RadioCsoport({ nev, ertek, opciok, onChange }: RadioProps) {
  return (
    <ValaszLista role="radiogroup" aria-label={nev}>
      {opciok.map((opcio) => {
        const checked = ertek === opcio
        return (
          <ValaszSor key={opcio}>
            <input
              type="radio"
              name={nev}
              value={opcio}
              checked={checked}
              onChange={() => onChange(opcio)}
            />
            <Jelolo tipus="radio" checked={checked} aria-hidden="true" />
            <span>{opcio}</span>
          </ValaszSor>
        )
      })}
    </ValaszLista>
  )
}

type CheckboxProps = {
  ertekek: string[]
  opciok: string[]
  onChange: (ertekek: string[]) => void
  egyebErtek?: string
  onEgyebChange?: (ertek: string) => void
  egyebCimke?: string
}

function CheckboxCsoport({
  ertekek,
  opciok,
  onChange,
  egyebErtek,
  onEgyebChange,
  egyebCimke = 'Egyéb',
}: CheckboxProps) {
  function valt(opcio: string) {
    if (ertekek.includes(opcio)) {
      onChange(ertekek.filter((e) => e !== opcio))
      return
    }
    onChange([...ertekek, opcio])
  }

  return (
    <ValaszLista>
      {opciok.map((opcio) => {
        const checked = ertekek.includes(opcio)
        const egyeb = opcio === egyebCimke
        return (
          <div key={opcio}>
            <ValaszSor>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => valt(opcio)}
              />
              <Jelolo tipus="checkbox" checked={checked} aria-hidden="true" />
              <span>{opcio}</span>
            </ValaszSor>
            {egyeb && checked && onEgyebChange ? (
              <EgyebMezo
                type="text"
                value={egyebErtek ?? ''}
                onChange={(e) => onEgyebChange(e.target.value)}
                placeholder="Kérjük, részletezze"
                aria-label={`${egyebCimke} megnevezése`}
              />
            ) : null}
          </div>
        )
      })}
    </ValaszLista>
  )
}

type FeltoltesProps = {
  cim: string
  leiras: string
  seged?: string
  fajl: File | null
  accept?: string
  onChange: (fajl: File | null) => void
}

function FeltoltesMezo({
  cim,
  leiras,
  seged,
  fajl,
  accept = '.pdf,.jpg,.jpeg,.png,.webp',
  onChange,
}: FeltoltesProps) {
  function kezel(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.files?.[0] ?? null)
  }

  return (
    <FeltoltesKartya>
      <FeltoltesCim>{cim}</FeltoltesCim>
      <Cimke as="span">{leiras}</Cimke>
      <FeltoltesGomb>
        <input type="file" accept={accept} onChange={kezel} />
        Dokumentum feltöltése
      </FeltoltesGomb>
      {fajl ? <FajlNev>{fajl.name}</FajlNev> : null}
      {seged ? <Seged>{seged}</Seged> : null}
    </FeltoltesKartya>
  )
}

/**
 * Sofőr jelentkezési űrlap — pezsgőarany prémium megjelenés.
 */
export function Urlap() {
  const [adat, setAdat] = useState<UrlapAllapot>(kezdoAllapot)
  const [elkuldve, setElkuldve] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  function frissit<K extends keyof UrlapAllapot>(kulcs: K, ertek: UrlapAllapot[K]) {
    setAdat((elozo) => ({ ...elozo, [kulcs]: ertek }))
  }

  function feltoltesFrissit(kulcs: FeltoltesKulcs, fajl: File | null) {
    setAdat((elozo) => ({
      ...elozo,
      feltoltesek: { ...elozo.feltoltesek, [kulcs]: fajl },
    }))
  }

  function kuldes(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!adat.adatvedelem || !adat.hozzajarulas) {
      return
    }
    setElkuldve(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (elkuldve) {
    return (
      <Oldal className="urlap-oldal">
        <Keret>
          <Koszonet>
            <KoszonetCim>Köszönjük jelentkezését!</KoszonetCim>
            <KoszonetSzoveg>
              Sikeres előszűrés esetén felvesszük Önnel a kapcsolatot a további
              lépésekkel kapcsolatban.
            </KoszonetSzoveg>
          </Koszonet>
        </Keret>
      </Oldal>
    )
  }

  return (
    <Oldal className="urlap-oldal">
      <Keret>
        <FejlecBlokk>
          <FoCim>Sofőr jelentkezési űrlap</FoCim>
          <Alcim>Németországi prémium- és luxusautó-vezető</Alcim>
          <Bevezeto>
            Kérjük, töltse ki az alábbi űrlapot a lehető legpontosabban. A
            jelentkezés során megadott adatokat és dokumentumokat a kiválasztási
            folyamat során ellenőrizhetjük.
          </Bevezeto>
        </FejlecBlokk>

        <Form onSubmit={kuldes} noValidate>
          <Szekcio aria-labelledby="szemelyes-adatok">
            <SzekcioCim id="szemelyes-adatok">1. Személyes adatok</SzekcioCim>

            <MezoCsoport>
              <Cimke htmlFor="teljesNev">Teljes név</Cimke>
              <SzovegMezo
                id="teljesNev"
                type="text"
                autoComplete="name"
                required
                value={adat.teljesNev}
                onChange={(e) => frissit('teljesNev', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="szuletesiDatum">Születési dátum</Cimke>
              <DatumMezo
                id="szuletesiDatum"
                type="date"
                required
                value={adat.szuletesiDatum}
                onChange={(e) => frissit('szuletesiDatum', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="telefon">Telefonszám</Cimke>
              <SzovegMezo
                id="telefon"
                type="tel"
                autoComplete="tel"
                required
                value={adat.telefon}
                onChange={(e) => frissit('telefon', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="email">E-mail-cím</Cimke>
              <SzovegMezo
                id="email"
                type="email"
                autoComplete="email"
                required
                value={adat.email}
                onChange={(e) => frissit('email', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="lakhely">Lakóhely / irányítószám</Cimke>
              <SzovegMezo
                id="lakhely"
                type="text"
                autoComplete="postal-code"
                required
                value={adat.lakhely}
                onChange={(e) => frissit('lakhely', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="orszag">Melyik országban él jelenleg?</Cimke>
              <SelectMezo
                id="orszag"
                required
                value={adat.orszag}
                onChange={(e) => frissit('orszag', e.target.value)}
              >
                <option value="">Válasszon…</option>
                {ORSZAGOK.map((orszag) => (
                  <option key={orszag} value={orszag}>
                    {orszag}
                  </option>
                ))}
              </SelectMezo>
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="vezetesi-tapasztalat">
            <SzekcioCim id="vezetesi-tapasztalat">
              2. Vezetési tapasztalat
            </SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Hány éve rendelkezik B kategóriás jogosítvánnyal?
              </Cimke>
              <RadioCsoport
                nev="bJogositvanyEve"
                ertek={adat.bJogositvanyEve}
                opciok={[
                  'Kevesebb mint 1 év',
                  '1–2 év',
                  '3–5 év',
                  'Több mint 5 év',
                ]}
                onChange={(v) => frissit('bJogositvanyEve', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Hány év professzionális vezetési tapasztalattal rendelkezik?
              </Cimke>
              <RadioCsoport
                nev="professzionalisEv"
                ertek={adat.professzionalisEv}
                opciok={['Nincs', '1–2 év', '3–5 év', 'Több mint 5 év']}
                onChange={(v) => frissit('professzionalisEv', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Dolgozott már professzionális sofőrként Németországban?
              </Cimke>
              <RadioCsoport
                nev="soforkentNemetorszag"
                ertek={adat.soforkentNemetorszag}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('soforkentNemetorszag', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Milyen területen dolgozott korábban?</Cimke>
              <CheckboxCsoport
                ertekek={adat.korabbiTerulet}
                opciok={[
                  'Személyszállítás',
                  'Fahrzeugüberführung / autóátadás',
                  'VIP- vagy luxus személyszállítás',
                  'Autókölcsönző',
                  'Taxi',
                  'Futár / kiszállítás',
                  'Egyéb',
                ]}
                egyebErtek={adat.korabbiTeruletEgyeb}
                onEgyebChange={(v) => frissit('korabbiTeruletEgyeb', v)}
                onChange={(v) => frissit('korabbiTerulet', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="premium-tapasztalat">
            <SzekcioCim id="premium-tapasztalat">
              3. Prémium- és luxusautó-tapasztalat
            </SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Vezetett már prémium vagy luxus kategóriájú járműveket?
              </Cimke>
              <RadioCsoport
                nev="premiumTapasztalat"
                ertek={adat.premiumTapasztalat}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('premiumTapasztalat', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Milyen prémium/luxus márkákkal rendelkezik tapasztalattal?
              </Cimke>
              <CheckboxCsoport
                ertekek={adat.premiumMarkak}
                opciok={[
                  'BMW',
                  'Mercedes-Benz',
                  'Audi',
                  'Porsche',
                  'Bentley',
                  'Lamborghini',
                  'Ferrari',
                  'Range Rover',
                  'Egyéb',
                ]}
                egyebErtek={adat.premiumMarkaEgyeb}
                onEgyebChange={(v) => frissit('premiumMarkaEgyeb', v)}
                onChange={(v) => frissit('premiumMarkak', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Milyen gyakran vezetett prémium vagy luxus járműveket?
              </Cimke>
              <RadioCsoport
                nev="premiumGyakorisag"
                ertek={adat.premiumGyakorisag}
                opciok={['Alkalmanként', 'Rendszeresen', 'Naponta']}
                onChange={(v) => frissit('premiumGyakorisag', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Van tapasztalata automata váltós, nagy teljesítményű járművek
                vezetésében?
              </Cimke>
              <RadioCsoport
                nev="automataValto"
                ertek={adat.automataValto}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('automataValto', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="nemetorszag">
            <SzekcioCim id="nemetorszag">4. Németországi munkavégzés</SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Rendelkezik érvényes munkavállalási jogosultsággal Németországban?
              </Cimke>
              <RadioCsoport
                nev="munkavallalasiJog"
                ertek={adat.munkavallalasiJog}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('munkavallalasiJog', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Rendelkezik németországi lakcímmel?</Cimke>
              <RadioCsoport
                nev="nemetorszagiCim"
                ertek={adat.nemetorszagiCim}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('nemetorszagiCim', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Mikor tud munkába állni?</Cimke>
              <RadioCsoport
                nev="munkabaAllas"
                ertek={adat.munkabaAllas}
                opciok={[
                  'Azonnal',
                  '1 héten belül',
                  '2 héten belül',
                  '1 hónapon belül',
                  'Később',
                ]}
                onChange={(v) => frissit('munkabaAllas', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Mennyire rugalmas a munkavégzés helyét illetően?
              </Cimke>
              <RadioCsoport
                nev="rugalmassag"
                ertek={adat.rugalmassag}
                opciok={[
                  'Csak a lakóhelyem közelében',
                  'Németországon belül rugalmas vagyok',
                  'Egész Németországban vállalok munkát',
                ]}
                onChange={(v) => frissit('rugalmassag', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="jogositvany">
            <SzekcioCim id="jogositvany">
              5. Jogosítvány és vezetési előélet
            </SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Milyen kategóriájú jogosítvánnyal rendelkezik?
              </Cimke>
              <CheckboxCsoport
                ertekek={adat.jogositvanyKategoria}
                opciok={['B', 'BE', 'C', 'Egyéb']}
                egyebErtek={adat.jogositvanyEgyeb}
                onEgyebChange={(v) => frissit('jogositvanyEgyeb', v)}
                onChange={(v) => frissit('jogositvanyKategoria', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Érvényes jelenleg a jogosítványa?</Cimke>
              <RadioCsoport
                nev="jogositvanyErvenyes"
                ertek={adat.jogositvanyErvenyes}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('jogositvanyErvenyes', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Volt az elmúlt 5 évben vezetéstől eltiltása vagy súlyos
                közlekedési szabálysértése?
              </Cimke>
              <RadioCsoport
                nev="eltiltas"
                ertek={adat.eltiltas}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('eltiltas', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Rendelkezik Führungszeugnisszel / erkölcsi bizonyítvánnyal?
              </Cimke>
              <RadioCsoport
                nev="erkolesi"
                ertek={adat.erkolesi}
                opciok={['Igen', 'Nem', 'Beszerzés alatt']}
                onChange={(v) => frissit('erkolesi', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="nyelv">
            <SzekcioCim id="nyelv">6. Nyelvtudás</SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">Milyen szinten beszél németül?</Cimke>
              <RadioCsoport
                nev="nemetNyelv"
                ertek={adat.nemetNyelv}
                opciok={[
                  'Egyáltalán nem',
                  'Alapszint',
                  'Kommunikációs szint',
                  'Jó',
                  'Anyanyelvi szint',
                ]}
                onChange={(v) => frissit('nemetNyelv', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Milyen szinten beszél angolul?</Cimke>
              <RadioCsoport
                nev="angolNyelv"
                ertek={adat.angolNyelv}
                opciok={[
                  'Egyáltalán nem',
                  'Alapszint',
                  'Kommunikációs szint',
                  'Jó',
                  'Anyanyelvi szint',
                ]}
                onChange={(v) => frissit('angolNyelv', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="keszsegek">
            <SzekcioCim id="keszsegek">
              7. Munkavégzéshez szükséges készségek
            </SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Rendelkezik okostelefonnal és mobilinternettel?
              </Cimke>
              <RadioCsoport
                nev="okostelefon"
                ertek={adat.okostelefon}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('okostelefon', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Tudja használni a Google Maps vagy más navigációs alkalmazásokat?
              </Cimke>
              <RadioCsoport
                nev="navigacio"
                ertek={adat.navigacio}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('navigacio', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Vállalja GPS-alapú munkakövetés és digitális munkarendszer
                használatát?
              </Cimke>
              <RadioCsoport
                nev="gpsKovetes"
                ertek={adat.gpsKovetes}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('gpsKovetes', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="feltetelek">
            <SzekcioCim id="feltetelek">8. Munkavállalási feltételek</SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Hajlandó 200–500 km-es utakat is vállalni?
              </Cimke>
              <RadioCsoport
                nev="hosszuUt"
                ertek={adat.hosszuUt}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('hosszuUt', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Vállal hétvégi munkavégzést?</Cimke>
              <RadioCsoport
                nev="hetvege"
                ertek={adat.hetvege}
                opciok={['Igen', 'Nem', 'Esetenként']}
                onChange={(v) => frissit('hetvege', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Vállal többnapos munkát Németországon belül?
              </Cimke>
              <RadioCsoport
                nev="tobbnapos"
                ertek={adat.tobbnapos}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('tobbnapos', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">Hány napot tud hetente dolgozni?</Cimke>
              <RadioCsoport
                nev="hetiNapok"
                ertek={adat.hetiNapok}
                opciok={['2–3 nap', '4 nap', '5 nap', '6 vagy több nap']}
                onChange={(v) => frissit('hetiNapok', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="szurok">
            <SzekcioCim id="szurok">9. Fontos szűrőkérdések</SzekcioCim>

            <MezoCsoport>
              <Cimke as="span">
                Van legalább 3 év aktív vezetési tapasztalata?
              </Cimke>
              <RadioCsoport
                nev="haromEvAktiv"
                ertek={adat.haromEvAktiv}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('haromEvAktiv', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Van legalább 3 év professzionális vezetési tapasztalata?
              </Cimke>
              <RadioCsoport
                nev="haromEvProf"
                ertek={adat.haromEvProf}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('haromEvProf', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Van tapasztalata prémium vagy luxus járművek vezetésében?
              </Cimke>
              <RadioCsoport
                nev="premiumSzuro"
                ertek={adat.premiumSzuro}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('premiumSzuro', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Biztonságosan és felelősségteljesen vezet nagy értékű járműveket?
              </Cimke>
              <RadioCsoport
                nev="biztonsagosVezetes"
                ertek={adat.biztonsagosVezetes}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('biztonsagosVezetes', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Vállalja, hogy a rábízott járműveket kiemelt gondossággal kezeli?
              </Cimke>
              <RadioCsoport
                nev="gondosKezeles"
                ertek={adat.gondosKezeles}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('gondosKezeles', v)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke as="span">
                Elfogadja, hogy a jelentkezés során vezetési tapasztalatát és
                dokumentumait ellenőrizhetjük?
              </Cimke>
              <RadioCsoport
                nev="ellenorzesElfogadas"
                ertek={adat.ellenorzesElfogadas}
                opciok={['Igen', 'Nem']}
                onChange={(v) => frissit('ellenorzesElfogadas', v)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="dokumentumok">
            <SzekcioCim id="dokumentumok">10. Dokumentumok feltöltése</SzekcioCim>
            <SzekcioBevezeto>
              Kérjük, töltse fel az alábbi dokumentumokat.
            </SzekcioBevezeto>

            <FeltoltesMezo
              cim="Személyazonosító okmány"
              leiras="Személyi igazolvány vagy útlevél feltöltése"
              fajl={adat.feltoltesek.szemelyi}
              onChange={(f) => feltoltesFrissit('szemelyi', f)}
            />
            <FeltoltesMezo
              cim="Jogosítvány"
              leiras="Érvényes vezetői engedély mindkét oldalának feltöltése"
              fajl={adat.feltoltesek.jogositvany}
              onChange={(f) => feltoltesFrissit('jogositvany', f)}
            />
            <FeltoltesMezo
              cim="Führungszeugnis / erkölcsi bizonyítvány"
              leiras="Führungszeugnis feltöltése"
              seged="Ha még nincs, a jelentkezés során jelezze."
              fajl={adat.feltoltesek.fuehrungszeugnis}
              onChange={(f) => feltoltesFrissit('fuehrungszeugnis', f)}
            />
            <FeltoltesMezo
              cim="Önéletrajz"
              leiras="CV / Lebenslauf feltöltése"
              seged="Opcionális"
              fajl={adat.feltoltesek.oneletrajz}
              onChange={(f) => feltoltesFrissit('oneletrajz', f)}
            />
            <FeltoltesMezo
              cim="Profilkép"
              leiras="Aktuális profilkép feltöltése"
              seged="Opcionális"
              accept=".jpg,.jpeg,.png,.webp"
              fajl={adat.feltoltesek.profilkep}
              onChange={(f) => feltoltesFrissit('profilkep', f)}
            />
            <FeltoltesMezo
              cim="Referencia / munkáltatói igazolás"
              leiras="Korábbi munkáltatói referencia vagy munkaviszony igazolása"
              seged="Opcionális"
              fajl={adat.feltoltesek.referencia}
              onChange={(f) => feltoltesFrissit('referencia', f)}
            />
          </Szekcio>

          <Szekcio aria-labelledby="motivacio">
            <SzekcioCim id="motivacio">11. Motiváció</SzekcioCim>

            <MezoCsoport>
              <Cimke htmlFor="motivacioSzoveg">
                Miért szeretne Németországban prémium és luxusautókat vezetni?
              </Cimke>
              <SzovegTerulet
                id="motivacioSzoveg"
                value={adat.motivacio}
                onChange={(e) => frissit('motivacio', e.target.value)}
              />
            </MezoCsoport>

            <MezoCsoport>
              <Cimke htmlFor="tapasztalatLeiras">
                Kérjük, röviden mutassa be korábbi vezetési és szakmai
                tapasztalatait.
              </Cimke>
              <SzovegTerulet
                id="tapasztalatLeiras"
                value={adat.tapasztalatLeiras}
                onChange={(e) => frissit('tapasztalatLeiras', e.target.value)}
              />
            </MezoCsoport>
          </Szekcio>

          <Szekcio aria-labelledby="kuldes">
            <SzekcioCim id="kuldes">12. Jelentkezés elküldése</SzekcioCim>

            <ValaszLista>
              <ValaszSor>
                <input
                  type="checkbox"
                  checked={adat.adatvedelem}
                  onChange={(e) => frissit('adatvedelem', e.target.checked)}
                  required
                />
                <Jelolo tipus="checkbox" checked={adat.adatvedelem} aria-hidden="true" />
                <span>
                  Elolvastam és elfogadom az{' '}
                  <AdatvedelmiLink
                    href="/adatvedelmi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adatvédelmi tájékoztatót
                  </AdatvedelmiLink>
                  .
                </span>
              </ValaszSor>
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
                <span>
                  Hozzájárulok ahhoz, hogy a jelentkezésemben megadott adatokat és
                  feltöltött dokumentumokat a kiválasztási folyamat során
                  ellenőrizzék.
                </span>
              </ValaszSor>
            </ValaszLista>

            <KuldesSor>
              <KuldesGomb
                type="submit"
                disabled={!adat.adatvedelem || !adat.hozzajarulas}
              >
                Jelentkezés elküldése
              </KuldesGomb>
              <KoszonetSzoveg>
                Köszönjük jelentkezését! Sikeres előszűrés esetén felvesszük
                Önnel a kapcsolatot a további lépésekkel kapcsolatban.
              </KoszonetSzoveg>
            </KuldesSor>
          </Szekcio>
        </Form>
      </Keret>
    </Oldal>
  )
}

export default Urlap
