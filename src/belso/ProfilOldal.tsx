import { useEffect, useState, type FormEvent } from 'react'
import styled from '@emotion/styled'
import { belsoProfilMentese } from '../api/belsoApi'
import { useBelsoAuth } from './BelsoAuthContext'
import {
  BelsoCimke,
  BelsoGomb,
  BelsoHiba,
  BelsoMezo,
  BelsoPanel,
  BelsoSiker,
} from './belsoStilus'
import { tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'

const Racs = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${tema.szelesseg.mobil}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const TeljesSzeles = styled.div`
  grid-column: 1 / -1;
`

export function ProfilOldal() {
  const { szoveg } = useNyelv()
  const t = szoveg.belso
  const { felhasznalo, felhasznaloBeallit } = useBelsoAuth()
  const profil = felhasznalo?.profile

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [hiba, setHiba] = useState('')
  const [siker, setSiker] = useState('')
  const [fut, setFut] = useState(false)

  useEffect(() => {
    if (!profil) {
      return
    }
    setFirstName(profil.firstName)
    setLastName(profil.lastName)
    setPhone(profil.phone)
    setBirthDate(profil.birthDate ?? '')
    setCountry(profil.country)
    setPostalCode(profil.postalCode)
    setCity(profil.city)
    setStreetAddress(profil.streetAddress)
  }, [profil])

  async function mentes(esemeny: FormEvent) {
    esemeny.preventDefault()
    setHiba('')
    setSiker('')
    setFut(true)
    try {
      const friss = await belsoProfilMentese({
        firstName,
        lastName,
        phone,
        birthDate: birthDate || null,
        country,
        postalCode,
        city,
        streetAddress,
      })
      felhasznaloBeallit(friss)
      setSiker(t.mentesSiker)
    } catch (err) {
      setHiba(err instanceof Error ? err.message : t.mentesHiba)
    } finally {
      setFut(false)
    }
  }

  return (
    <BelsoPanel>
      <h1
        style={{
          margin: '0 0 1rem',
          fontFamily: tema.betu.cim,
          fontSize: '1.05rem',
          letterSpacing: '0.1em',
          color: tema.szin.aranyVilagos,
        }}
      >
        {t.sajatAdataim}
      </h1>
      <form onSubmit={mentes}>
        <Racs>
          <BelsoCimke>
            {t.vezeteknev}
            <BelsoMezo
              name="lastName"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </BelsoCimke>
          <BelsoCimke>
            {t.keresztnev}
            <BelsoMezo
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </BelsoCimke>
          <TeljesSzeles>
            <BelsoCimke>
              {t.emailCimke}
              <BelsoMezo
                type="email"
                name="email"
                value={felhasznalo?.email ?? ''}
                readOnly
                aria-readonly="true"
              />
            </BelsoCimke>
          </TeljesSzeles>
          <BelsoCimke>
            {t.telefon}
            <BelsoMezo
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </BelsoCimke>
          <BelsoCimke>
            {t.szuletesiDatum}
            <BelsoMezo
              type="date"
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </BelsoCimke>
          <BelsoCimke>
            {t.orszag}
            <BelsoMezo
              name="country"
              autoComplete="country-name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </BelsoCimke>
          <BelsoCimke>
            {t.iranyitoszam}
            <BelsoMezo
              name="postalCode"
              autoComplete="postal-code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </BelsoCimke>
          <BelsoCimke>
            {t.varos}
            <BelsoMezo
              name="city"
              autoComplete="address-level2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </BelsoCimke>
          <TeljesSzeles>
            <BelsoCimke>
              {t.lakcim}
              <BelsoMezo
                name="streetAddress"
                autoComplete="street-address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </BelsoCimke>
          </TeljesSzeles>
        </Racs>
        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {hiba ? <BelsoHiba role="alert">{hiba}</BelsoHiba> : null}
          {siker ? <BelsoSiker role="status">{siker}</BelsoSiker> : null}
          <BelsoGomb prim type="submit" disabled={fut}>
            {fut ? t.mentesFut : t.mentesGomb}
          </BelsoGomb>
        </div>
      </form>
    </BelsoPanel>
  )
}
