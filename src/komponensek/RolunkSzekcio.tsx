import styled from '@emotion/styled'
import { Gomb } from './Gomb'
import { rolunkSzovegek } from '../adatok/fooldalAdatok'
import { tema, aranySzovegAtmenet } from '../stilusok/tema'

/** A rólunk szekció kétoszlopos kerete */
const RolunkKeret = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 5rem 4vw;
  background: ${tema.hatter.sotet};

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: 1.05fr 1fr;
    align-items: center;
    gap: 3rem;
  }
`

/** A bal oldali képrész */
const KepOldal = styled.div`
  position: relative;
  min-height: 340px;
  overflow: hidden;
  border: 1px solid rgba(201, 162, 39, 0.25);
`

/** A kamion háttérkép */
const RolunkKep = styled.img`
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
`

/** Arany JL monogram a képen */
const MonogramJel = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 0.55rem 0.75rem;
  font-family: ${tema.betu.marka};
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${tema.szin.aranyVilagos};
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(201, 162, 39, 0.45);
`

/** A jobb oldali szöveges rész */
const SzovegOldal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

/** A rólunk főcíme */
const RolunkCim = styled.h2`
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 2.6vw, 1.9rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.25;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A rólunk bekezdése */
const RolunkBekezdes = styled.p`
  max-width: 34rem;
  color: ${tema.szin.szurke};
  font-size: 0.98rem;
`

/** Az előnyök listája */
const ElonyLista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem 1.2rem;
`

/** Egy előny pont */
const ElonyPont = styled.li`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.9rem;
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
 * A „Rólunk” szekciót jeleníti meg képpel, szöveggel és előnyökkel.
 */
export function RolunkSzekcio() {
  return (
    <RolunkKeret className="rolunk-szekcio" id="rolunk">
      <KepOldal className="rolunk-kep-oldal">
        <RolunkKep
          className="rolunk-kep"
          src="/kepek/kamion-rolunk.png"
          alt="Juliette Logistique Transportfahrzeug"
        />
        <MonogramJel className="rolunk-monogram" aria-hidden="true">
          JL
        </MonogramJel>
      </KepOldal>

      <SzovegOldal className="rolunk-szoveg-oldal">
        <RolunkCim className="rolunk-cim">{rolunkSzovegek.cim}</RolunkCim>
        <RolunkBekezdes className="rolunk-bekezdes">
          {rolunkSzovegek.bekezdes}
        </RolunkBekezdes>

        <ElonyLista className="rolunk-elony-lista">
          {rolunkSzovegek.pontok.map((pont) => (
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
            {rolunkSzovegek.gomb}
          </Gomb>
        </div>
      </SzovegOldal>
    </RolunkKeret>
  )
}
