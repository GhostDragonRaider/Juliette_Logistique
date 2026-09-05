import styled from '@emotion/styled'
import { Gomb } from './Gomb'
import { useScrollReveal } from '../hookok/useScrollReveal'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, revealAlap } from '../stilusok/tema'

/** Teljes szélességű háttér */
const RolunkHatter = styled.section`
  background: rgba(27, 27, 27, 0.88);
`

/** A rólunk szekció kétoszlopos kerete */
const RolunkKeret = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
  padding: clamp(3rem, 7vw, 5rem) ${tema.oldalsoPadding};
  ${revealAlap}

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
    gap: 3rem;
  }
`

/** A bal oldali képrész */
const KepOldal = styled.div`
  position: relative;
  min-height: clamp(240px, 50vw, 420px);
  overflow: hidden;
  border: 1px solid rgba(197, 165, 114, 0.25);

  @media (hover: hover) {
    &:hover img.rolunk-kep {
      transform: scale(1.04);
    }
  }
`

/** A kamion háttérkép */
const RolunkKep = styled.img`
  width: 100%;
  height: 100%;
  min-height: clamp(240px, 50vw, 420px);
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
`

/**
 * A jobb alsó sarokban lévő logó jelvény.
 */
const LogoJelveny = styled.div`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(78px, 16vw, 118px);
  padding: 0.45rem 0.55rem;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(197, 165, 114, 0.4);
  backdrop-filter: blur(2px);
`

/** A mellékelt, pezsgőaranyra konvertált brand logo */
const LogoJelvenyKep = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`

/** A jobb oldali szöveges rész */
const SzovegOldal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  min-width: 0;
`

/** A rólunk főcíme */
const RolunkCim = styled.h2`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.2rem, 3vw, 1.85rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.25;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A rólunk bekezdése */
const RolunkBekezdes = styled.p`
  max-width: 34rem;
  color: ${tema.szin.szurke};
  font-size: clamp(0.92rem, 1.8vw, 1rem);
`

/** Az előnyök listája */
const ElonyLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem 1.2rem;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: 1fr 1fr;
  }
`

/** Egy előny pont */
const ElonyPont = styled.li`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: clamp(0.86rem, 1.6vw, 0.95rem);
  color: ${tema.szin.feher};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid ${tema.szin.arany};
    transform: rotate(45deg);
    flex-shrink: 0;
  }
`

/**
 * A „Rólunk” szekciót jeleníti meg a kiválasztott nyelven.
 */
export function RolunkSzekcio() {
  const { szoveg } = useNyelv()
  const { referencia, lathato } = useScrollReveal<HTMLDivElement>(0.12)

  return (
    <RolunkHatter className="rolunk-szekcio" id="rolunk" aria-labelledby="rolunk-cim">
      <RolunkKeret
        ref={referencia}
        className={`rolunk-keret${lathato ? ' lathato' : ''}`}
      >
        <KepOldal className="rolunk-kep-oldal">
          <RolunkKep
            className="rolunk-kep"
            src="/kepek/kamion-rolunk.png"
            alt={szoveg.rolunk.kepAlt}
            loading="lazy"
            decoding="async"
          />
          <LogoJelveny className="rolunk-logo-jelveny">
            <LogoJelvenyKep
              className="rolunk-logo-kep"
              src="/brand/logo-arany.png"
              alt="Juliette Logistique"
            />
          </LogoJelveny>
        </KepOldal>

        <SzovegOldal className="rolunk-szoveg-oldal">
          <RolunkCim className="rolunk-cim" id="rolunk-cim">
            {szoveg.rolunk.cim}
          </RolunkCim>
          <RolunkBekezdes className="rolunk-bekezdes">
            {szoveg.rolunk.bekezdes}
          </RolunkBekezdes>

          <ElonyLista className="rolunk-elony-lista">
            {szoveg.rolunk.pontok.map((pont) => (
              <ElonyPont key={pont} className="rolunk-elony-pont">
                {pont}
              </ElonyPont>
            ))}
          </ElonyLista>

          <div>
            <Gomb
              className="rolunk-gomb"
              href="#kapcsolat"
              valtozat="korvonal"
              mutatNyilat
            >
              {szoveg.rolunk.gomb}
            </Gomb>
          </div>
        </SzovegOldal>
      </RolunkKeret>
    </RolunkHatter>
  )
}
