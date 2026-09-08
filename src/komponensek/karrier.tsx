import styled from '@emotion/styled'
import {
  aranySzovegAtmenet,
  femesAranyGomb,
  fokuszKeret,
  revealAlap,
  tema,
} from '../stilusok/tema'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hookok/useScrollReveal'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding:
    clamp(5.5rem, 12vh, 7rem)
    ${tema.oldalsoPadding}
    clamp(3rem, 8vh, 5rem);
  color: ${tema.szin.feher};
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 56rem);
`

const Title = styled.div<{ lathato: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 55vh;
  max-width: 42rem;
  padding: 0 0.5rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.45rem, 3.4vw, 2.25rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.28;
  text-wrap: balance;
  opacity: ${(props) => (props.lathato ? 1 : 0)};
  transition: opacity 0.8s ease;
  ${aranySzovegAtmenet}
`

const H1Text = styled.h1`
  position: relative;
  width: 100%;
  margin: 0 0 1.6rem;
  padding-bottom: 1.25rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.25rem, 2.8vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.22;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 3.2rem;
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(
      90deg,
      transparent,
      ${tema.szin.arany},
      transparent
    );
  }
`

const MunkaDiv = styled.div<{ lathato: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0.25rem 0 3rem;
  opacity: ${(props) => (props.lathato ? 1 : 0)};
  transition: opacity 0.8s ease;
`

const PText = styled.p`
  width: 100%;
  max-width: 42rem;
  margin: 0 auto 2rem;
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.98rem, 1.7vw, 1.08rem);
  font-weight: 400;
  font-style: italic;
  line-height: 1.75;
  letter-spacing: 0.02em;
  text-align: center;
  text-wrap: pretty;
  color: ${tema.szin.szurke};
`

const H2Text = styled.h2`
  width: 100%;
  margin: 0 0 1.6rem;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 700;
  letter-spacing: 0.16em;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}
`

const MunkaLista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  width: 100%;
  max-width: 52rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

const MunkaListaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid rgba(197, 165, 114, 0.14);
  font-family: ${tema.betu.torzs};
  font-size: clamp(0.86rem, 1.35vw, 0.96rem);
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01em;
  text-align: left;
  text-wrap: pretty;
  white-space: nowrap;
  color: ${tema.szin.szurke};

  &:first-of-type {
    border-top: 1px solid rgba(197, 165, 114, 0.14);
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
  }

  @media (max-width: ${tema.szelesseg.tablet}) {
    align-items: flex-start;
    white-space: normal;

    &::before {
      margin-top: 0.45rem;
    }
  }
`

const VideoHely = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 0.25rem 0 2.75rem;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse 55% 50% at 50% 45%,
      rgba(197, 165, 114, 0.1),
      transparent 70%
    ),
    linear-gradient(
      165deg,
      ${tema.hatter.sotet} 0%,
      ${tema.hatter.emelt} 48%,
      ${tema.hatter.kartya} 100%
    );
  border: 1px solid rgba(197, 165, 114, 0.32);
  box-shadow:
    inset 0 1px 0 rgba(232, 215, 181, 0.08),
    0 18px 40px rgba(0, 0, 0, 0.28);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3.25rem;
    height: 3.25rem;
    border: 1px solid rgba(197, 165, 114, 0.55);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.85;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(50% + 2px);
    transform: translate(-40%, -50%);
    border-style: solid;
    border-width: 0.55rem 0 0.55rem 0.9rem;
    border-color: transparent transparent transparent ${tema.szin.arany};
    opacity: 0.8;
  }
`

const PremiumButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: min(100%, 22rem);
  min-height: 48px;
  margin: 2.5rem auto 0;
  padding: 0.95rem 1.85rem;
  cursor: pointer;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.72rem, 1.4vw, 0.84rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
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

const PremiumButtonText = styled.span`
  position: relative;
  z-index: 1;
  color: ${tema.hatter.fekete};
`

/** Görgetésre felúszó tartalomblokk */
const RevealBlokk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 0.5rem;
  ${revealAlap}
`

type MunkaTartalomTulajdonsagok = {
  lathato: boolean
}

/**
 * A munkakör tartalma: bevezető + videó azonnal,
 * a további szekciók görgetésre áttűnnek.
 */
function MunkaTartalom({ lathato }: MunkaTartalomTulajdonsagok) {
  const feladatokReveal = useScrollReveal<HTMLDivElement>(0.2)
  const elvarasokReveal = useScrollReveal<HTMLDivElement>(0.2)
  const kinalunkReveal = useScrollReveal<HTMLDivElement>(0.2)
  const premiumButtonReveal = useScrollReveal<HTMLDivElement>(0.2)

  return (
    <MunkaDiv lathato={lathato}>
      <H1Text>Járműátvezető / sofőr Juliette Logistique</H1Text>
      <PText>
        A Juliette Logistique professzionális gépjármű-átvezetéssel és
        járműlogisztikával foglalkozik egész Németország területén. Ha
        megbízhatóan, pontosan és gondosan dolgozol, és fontos számodra a
        járművek biztonságos kezelése, nálunk a helyed.
      </PText>
      <VideoHely className="video-hely" aria-hidden="true" />

      <RevealBlokk
        ref={feladatokReveal.referencia}
        className={feladatokReveal.lathato ? 'lathato' : undefined}
      >
        <H2Text>Mit fogsz csinálni?</H2Text>
        <MunkaLista>
          <MunkaListaItem>
            Gépjárművek átvétele, átvezetése és átadása a megbízó által
            megadott feltételek szerint
          </MunkaListaItem>
          <MunkaListaItem>
            Járművek saját keréken történő szállítása Németország-szerte
          </MunkaListaItem>
          <MunkaListaItem>
            Átvételkori és átadáskori állapotellenőrzés, dokumentálás
          </MunkaListaItem>
          <MunkaListaItem>
            Szükség esetén fotódokumentáció készítése
          </MunkaListaItem>
          <MunkaListaItem>
            Kilométeróra-állás, járműadatok és meglévő sérülések rögzítése
          </MunkaListaItem>
          <MunkaListaItem>
            Kulcsok és járműdokumentumok gondos kezelése
          </MunkaListaItem>
          <MunkaListaItem>
            Megbízások határidőre történő teljesítése
          </MunkaListaItem>
          <MunkaListaItem>
            Digitális megbízáskezelés és státuszjelentés támogatása
          </MunkaListaItem>
        </MunkaLista>
      </RevealBlokk>

      <RevealBlokk
        ref={elvarasokReveal.referencia}
        className={elvarasokReveal.lathato ? 'lathato' : undefined}
      >
        <H2Text>Kit keresünk?</H2Text>
        <MunkaLista>
          <MunkaListaItem>Érvényes B jogosítvány (BE előny)</MunkaListaItem>
          <MunkaListaItem>
            Megbízható, precíz, ügyfélközpontú hozzáállás
          </MunkaListaItem>
          <MunkaListaItem>Tiszta előélet és gondos járműkezelés</MunkaListaItem>
          <MunkaListaItem>
            Rugalmasság regionális és országos útvonalakra
          </MunkaListaItem>
          <MunkaListaItem>
            Alapszintű német és/vagy angol kommunikáció
          </MunkaListaItem>
        </MunkaLista>
      </RevealBlokk>

      <RevealBlokk
        ref={kinalunkReveal.referencia}
        className={kinalunkReveal.lathato ? 'lathato' : undefined}
      >
        <H2Text>Mit kínálunk?</H2Text>
        <MunkaLista>
          <MunkaListaItem>
            Változatos, felelősségteljes munka prémium járműlogisztikában
          </MunkaListaItem>
          <MunkaListaItem>
            Átlátható folyamatok és digitális megbízáskezelés
          </MunkaListaItem>
          <MunkaListaItem>
            Megbízható szakmai közeg: pontosság, biztonság, gondosság
          </MunkaListaItem>
        </MunkaLista>
      </RevealBlokk>
      <RevealBlokk
        ref={premiumButtonReveal.referencia}
        className={premiumButtonReveal.lathato ? 'lathato' : undefined}
      >
        <PremiumButton type="button">
          <PremiumButtonText>Csatlakoznál hozzánk?</PremiumButtonText>
        </PremiumButton>
      </RevealBlokk>


    </MunkaDiv>

    
  )
}

export function Karrier() {
  const [lepes, setLepes] = useState(0)
  const [lathato, setLathato] = useState(false)

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setLathato(true)
    }, 200)

    const t2 = window.setTimeout(() => {
      setLathato(false)
    }, 2800)

    const t3 = window.setTimeout(() => {
      setLepes(1)
      setLathato(true)
    }, 3600)

    const t4 = window.setTimeout(() => {
      setLathato(false)
    }, 6200)

    const t5 = window.setTimeout(() => {
      setLepes(2)
      setLathato(true)
    }, 7000)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
      window.clearTimeout(t4)
      window.clearTimeout(t5)
    }
  }, [])

  return (
    <Container className="karrier-oldal">
      <SubContainer>
        {lepes === 0 ? (
          <Title lathato={lathato}>Csatlakoznál hozzánk?</Title>
        ) : lepes === 1 ? (
          <Title lathato={lathato}>Ismerd meg a munkánkat.</Title>
        ) : lepes === 2 ? (
          <MunkaTartalom lathato={lathato} />
        ) : null}
      </SubContainer>
    </Container>
  )
}

export default Karrier
