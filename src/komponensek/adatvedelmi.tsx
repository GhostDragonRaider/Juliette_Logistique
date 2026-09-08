import styled from '@emotion/styled'
import { aranySzovegAtmenet, tema } from '../stilusok/tema'

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

const Keret = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: min(100%, 46rem);
`

const FoCim = styled.h1`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
  text-wrap: balance;
  ${aranySzovegAtmenet}
`

const Alcim = styled.p`
  margin: -0.5rem 0 0.5rem;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.04em;
  color: ${tema.szin.arany};
`

const Frissites = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.86rem;
  color: ${tema.szin.szurkeSotet};
`

const Szekcio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(197, 165, 114, 0.22);
`

const SzekcioCim = styled.h2`
  margin: 0;
  font-family: ${tema.betu.cim};
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${aranySzovegAtmenet}
`

const Bekezdes = styled.p`
  margin: 0;
  color: ${tema.szin.szurke};
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  line-height: 1.75;
`

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding-left: 1.15rem;
  color: ${tema.szin.szurke};
  line-height: 1.7;

  li {
    list-style: disc;
    padding-left: 0.2rem;
  }

  li::marker {
    color: ${tema.szin.arany};
  }
`

/**
 * Általános adatvédelmi tájékoztató a jelentkezési folyamatához.
 */
export function AdatvedelmiTajekoztato() {
  return (
    <Oldal className="adatvedelmi-oldal">
      <Keret>
        <FoCim>Adatvédelmi tájékoztató</FoCim>
        <Alcim>Juliette Logistique</Alcim>
        <Frissites>Utolsó frissítés: 2026. szeptember 8.</Frissites>

        <Szekcio>
          <SzekcioCim>1. Az adatkezelő</SzekcioCim>
          <Bekezdes>
            Az adatkezelő a Juliette Logistique (a továbbiakban: „Társaság”,
            „mi”). A jelentkezési űrlapon megadott személyes adatokat a
            munkaerő-toborzás és kiválasztás céljából kezeljük.
          </Bekezdes>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>2. A kezelt adatok köre</SzekcioCim>
          <Bekezdes>A jelentkezés során különösen az alábbi adatokat kezelhetjük:</Bekezdes>
          <Lista>
            <li>azonosító és elérhetőségi adatok (név, születési dátum, telefon, e-mail, lakóhely)</li>
            <li>szakmai és vezetési tapasztalatra vonatkozó adatok</li>
            <li>jogosítványra, előéletre és nyelvtudásra vonatkozó információk</li>
            <li>feltöltött dokumentumok (pl. személyazonosító okmány, jogosítvány, CV, referencia)</li>
            <li>motivációs és szakmai bemutatkozó szövegek</li>
          </Lista>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>3. Az adatkezelés célja</SzekcioCim>
          <Lista>
            <li>jelentkezések fogadása és előszűrése</li>
            <li>kapcsolatfelvétel a kiválasztási folyamat során</li>
            <li>a megadott adatok és dokumentumok ellenőrzése</li>
            <li>alkalmas jelöltek azonosítása sofőr / járműátvezető pozíciókra</li>
          </Lista>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>4. Az adatkezelés jogalapja</SzekcioCim>
          <Bekezdes>
            Az adatkezelés jogalapja a jelentkező hozzájárulása, valamint a
            Társaság jogos érdeke a megfelelő munkaerő kiválasztásához. Egyes
            ellenőrzések a munkaviszony létesítését megelőző lépésekhez
            szükségesek lehetnek.
          </Bekezdes>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>5. Adattárolás időtartama</SzekcioCim>
          <Bekezdes>
            A jelentkezési adatokat a kiválasztási folyamat idejéig, illetve a
            vonatkozó jogszabályok által megengedett ideig őrizzük. Sikertelen
            jelentkezés esetén az adatokat ésszerű időn belül töröljük vagy
            anonimizáljuk, kivéve, ha a jelentkező hosszabb megőrzéshez
            hozzájárult.
          </Bekezdes>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>6. Adattovábbítás és adatfeldolgozók</SzekcioCim>
          <Bekezdes>
            Adatait kizárólag a toborzáshoz szükséges mértékben ismerhetik meg a
            Társaság erre feljogosított munkatársai, illetve megbízott
            adatfeldolgozói (például tárhely- vagy e-mail-szolgáltató). Harmadik
            félnek marketing célból nem adjuk át az adatokat.
          </Bekezdes>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>7. Adatbiztonság</SzekcioCim>
          <Bekezdes>
            Megfelelő technikai és szervezési intézkedésekkel védjük a személyes
            adatokat a jogosulatlan hozzáférés, elvesztés, megváltoztatás vagy
            nyilvánosságra hozatal ellen.
          </Bekezdes>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>8. Az érintett jogai</SzekcioCim>
          <Bekezdes>Ön jogosult:</Bekezdes>
          <Lista>
            <li>tájékoztatást kérni a személyes adatai kezeléséről</li>
            <li>hozzáférést kérni az Önről tárolt adatokhoz</li>
            <li>a pontatlan adatok helyesbítését kérni</li>
            <li>bizonyos esetekben az adatok törlését vagy az adatkezelés korlátozását kérni</li>
            <li>hozzájárulását bármikor visszavonni</li>
            <li>panaszt tenni a felügyeleti hatóságnál</li>
          </Lista>
        </Szekcio>

        <Szekcio>
          <SzekcioCim>9. Kapcsolat</SzekcioCim>
          <Bekezdes>
            Adatvédelmi kérdéseivel forduljon a Juliette Logistique kapcsolattartójához
            a weboldalon megadott elérhetőségeken. Ez a tájékoztató általános
            jellegű; a konkrét jogviszonyra vonatkozó részletek a mindenkori
            szerződéses és jogszabályi feltételek szerint alakulhatnak.
          </Bekezdes>
        </Szekcio>
      </Keret>
    </Oldal>
  )
}

export default AdatvedelmiTajekoztato
