import styled from '@emotion/styled'
import { AranyIkon } from './AranyIkon'
import { Gomb } from './Gomb'
import { useNyelv } from '../nyelv/useNyelv'
import { tema, aranySzovegAtmenet, fokuszKeret } from '../stilusok/tema'

/** A szolgáltatások szekció kerete */
const SzolgaltatasokKeret = styled.section`
  padding: clamp(3rem, 7vw, 5rem) ${tema.oldalsoPadding};
  background: ${tema.hatter.fekete};
`

/** Belső max szélességű tartalom */
const BelsoTartalom = styled.div`
  width: min(100%, ${tema.maxTartalom});
  margin: 0 auto;
`

/** A szekció címe */
const SzekcioCim = styled.h2`
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.25rem, 3.5vw, 2.2rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

/** A szolgáltatás kártyák rácsa */
const KartyaRac = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${tema.szelesseg.kicsi}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${tema.szelesseg.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
`

/** Egy szolgáltatás kártya */
const SzolgaltatasKartya = styled.article<{ kep: string }>`
  position: relative;
  min-height: clamp(240px, 40vw, 300px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.55rem;
  padding: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(201, 162, 39, 0.22);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.9) 72%),
    url(${(props) => props.kep}) center / cover no-repeat;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      border-color: rgba(201, 162, 39, 0.65);
      box-shadow: ${tema.arnyek.aranyFeny};
    }
  }

  &:focus-within {
    ${fokuszKeret}
  }
`

/** A kártya címe */
const KartyaCim = styled.h3`
  font-family: ${tema.betu.cim};
  font-size: clamp(0.78rem, 1.8vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tema.szin.aranyVilagos};
`

/** A kártya leírása */
const KartyaLeiras = styled.p`
  font-size: clamp(0.84rem, 1.6vw, 0.92rem);
  color: ${tema.szin.szurke};
`

/** A gomb középre igazított sora */
const KozepGombSor = styled.div`
  display: flex;
  justify-content: center;
`

/**
 * A szolgáltatások rácsát jeleníti meg a kiválasztott nyelven.
 */
export function SzolgaltatasokSzekcio() {
  const { szoveg } = useNyelv()

  return (
    <SzolgaltatasokKeret
      className="szolgaltatasok-szekcio"
      id="szolgaltatasok"
      aria-labelledby="szolgaltatasok-cim"
    >
      <BelsoTartalom>
        <SzekcioCim className="szolgaltatasok-cim" id="szolgaltatasok-cim">
          {szoveg.szolgaltatasokCim}
        </SzekcioCim>

        <KartyaRac className="szolgaltatas-kartya-rac">
          {szoveg.szolgaltatasok.map((elem) => (
            <SzolgaltatasKartya
              key={elem.azonosito}
              className="szolgaltatas-kartya"
              kep={elem.kep}
            >
              <AranyIkon tipus={elem.ikon} meret={28} className="szolgaltatas-ikon" />
              <KartyaCim className="szolgaltatas-cim">{elem.cim}</KartyaCim>
              <KartyaLeiras className="szolgaltatas-leiras">{elem.leiras}</KartyaLeiras>
            </SzolgaltatasKartya>
          ))}
        </KartyaRac>

        <KozepGombSor className="szolgaltatasok-gomb-sor">
          <Gomb
            className="osszes-szolgaltatas-gomb"
            href="#szolgaltatasok"
            valtozat="korvonal"
            mutatNyilat
          >
            {szoveg.szolgaltatasokGomb}
          </Gomb>
        </KozepGombSor>
      </BelsoTartalom>
    </SzolgaltatasokKeret>
  )
}
