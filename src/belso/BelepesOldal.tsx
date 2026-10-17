import { useEffect, useState, type FormEvent } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { useBelsoAuth } from './BelsoAuthContext'
import {
  BelsoGomb,
  BelsoHatter,
  BelsoHiba,
  BelsoMezo,
  BelsoPanel,
  BelsoCimke,
} from './belsoStilus'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'
import { useNyelv } from '../nyelv/useNyelv'

const Keret = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: max(1.25rem, env(safe-area-inset-top))
    ${tema.oldalsoPadding} max(1.25rem, env(safe-area-inset-bottom));
`

const Cim = styled.h1`
  margin: 0 0 1.25rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 4vw, 1.75rem);
  letter-spacing: 0.12em;
  text-align: center;
  ${aranySzovegAtmenet}
`

const FormSor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const JelszoSor = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: stretch;

  input {
    flex: 1;
  }
`

const VisszaLink = styled(Link)`
  display: inline-block;
  margin-top: 1.25rem;
  color: ${tema.szin.szurke};
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 3px;
`

export function BelepesOldal() {
  const { szoveg } = useNyelv()
  const t = szoveg.belso
  const navigate = useNavigate()
  const hely = useLocation()
  const { bejelentkezve, bejelentkezes } = useBelsoAuth()
  const [email, setEmail] = useState('')
  const [jelszo, setJelszo] = useState('')
  const [jelszoLathato, setJelszoLathato] = useState(false)
  const [hiba, setHiba] = useState('')
  const [fut, setFut] = useState(false)

  useEffect(() => {
    if (bejelentkezve) {
      const cel =
        (hely.state as { from?: string } | null)?.from || '/dashboard'
      navigate(cel, { replace: true })
    }
  }, [bejelentkezve, navigate, hely.state])

  async function kuldes(esemeny: FormEvent) {
    esemeny.preventDefault()
    setHiba('')
    setFut(true)
    try {
      await bejelentkezes(email.trim(), jelszo)
      const cel =
        (hely.state as { from?: string } | null)?.from || '/dashboard'
      navigate(cel, { replace: true })
    } catch (err) {
      setHiba(err instanceof Error ? err.message : t.belepesHibaAlt)
    } finally {
      setFut(false)
    }
  }

  return (
    <BelsoHatter>
      <Keret>
        <BelsoPanel style={{ width: '100%', maxWidth: 420 }}>
          <Cim>{t.belepesCim}</Cim>
          <form onSubmit={kuldes}>
            <FormSor>
              <BelsoCimke>
                {t.emailCimke}
                <BelsoMezo
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </BelsoCimke>
              <BelsoCimke>
                {t.jelszoCimke}
                <JelszoSor>
                  <BelsoMezo
                    type={jelszoLathato ? 'text' : 'password'}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={jelszo}
                    onChange={(e) => setJelszo(e.target.value)}
                  />
                  <BelsoGomb
                    type="button"
                    aria-pressed={jelszoLathato}
                    aria-label={
                      jelszoLathato ? t.jelszoElrejt : t.jelszoMutat
                    }
                    onClick={() => setJelszoLathato((e) => !e)}
                  >
                    {jelszoLathato ? t.jelszoElrejt : t.jelszoMutat}
                  </BelsoGomb>
                </JelszoSor>
              </BelsoCimke>
              {hiba ? <BelsoHiba role="alert">{hiba}</BelsoHiba> : null}
              <BelsoGomb prim type="submit" disabled={fut}>
                {fut ? t.belepesFut : t.belepesGomb}
              </BelsoGomb>
            </FormSor>
          </form>
          <VisszaLink to="/">{t.visszaNyilvanos}</VisszaLink>
        </BelsoPanel>
      </Keret>
    </BelsoHatter>
  )
}
