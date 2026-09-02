# Juliette Logistique — weboldal

Prémium autószállítás és testre szabott logisztika. React + TypeScript alapú, három nyelvű
(FR / DE / EN) marketing oldal, karrier aloldallal és önéletrajz-feltöltéses jelentkezési űrlappal.

## Technológiák

| Terület          | Választás                                     |
| ---------------- | --------------------------------------------- |
| Build            | Vite 8                                        |
| UI               | React 19 + TypeScript 6                       |
| Stílus           | Tailwind CSS 4 (`@theme` design tokenekkel)   |
| Routing          | React Router 7 (`createBrowserRouter`)        |
| Többnyelvűség    | i18next + react-i18next                       |
| Űrlapok          | react-hook-form + zod (`@hookform/resolvers`) |
| Ikonok           | lucide-react                                  |
| Animáció (előkészítve) | motion                                  |
| Kódminőség       | oxlint + Prettier (+ Tailwind class sorrend)   |

## Indítás

```bash
npm install
cp .env.example .env   # a backend URL-jét itt kell megadni
npm run dev            # http://localhost:5173
```

## Szkriptek

| Szkript                | Mit tesz                                   |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | fejlesztői szerver hot reload-dal          |
| `npm run build`        | típusellenőrzés + éles build a `dist/`-be  |
| `npm run preview`      | az éles build kiszolgálása lokálisan       |
| `npm run typecheck`    | csak típusellenőrzés                       |
| `npm run lint`         | oxlint                                     |
| `npm run format`       | Prettier formázás                          |
| `npm run format:check` | formázás ellenőrzése (CI-hez)              |

## Mappaszerkezet

```
src/
  assets/brand/        logóváltozatok (arany / világos / sötét)
  components/
    brand/             Logo
    form/              Field, TextInput, TextArea
    layout/            Header, Footer, RootLayout, PageHeader, LanguageSwitcher
    ui/                Button, Card, Container, Section
  features/
    careers/           jelentkezési űrlap, zod séma, API kliens
    home/              Hero, TrustBar, AboutTeaser, ServicesGrid, PartnersStrip, ContactCta
  i18n/
    index.ts           i18next konfiguráció
    i18next.d.ts       típusos fordítási kulcsok
    locales/           fr.json, de.json, en.json
  lib/                 cn (className), formErrors
  pages/               route-onkénti oldalak (lazy betöltéssel)
  routes/              paths.ts (útvonalak), router.tsx
```

## Útvonalak

| Útvonal                | Oldal                                              |
| ---------------------- | -------------------------------------------------- |
| `/`                    | főoldal                                            |
| `/ueber-uns`           | rólunk                                             |
| `/leistungen`          | szolgáltatások                                     |
| `/partner`             | partnerek                                          |
| `/kontakt`             | kapcsolat                                          |
| `/karriere`            | a munka bemutatása (a jelentkezést megelőző lap)   |
| `/karriere/bewerbung`  | jelentkezési űrlap önéletrajz-feltöltéssel         |

## Jelenlegi állapot

Kész: teljes frontend váz, arculat, három nyelv, karrier oldal, kliensoldali validációval
működő jelentkezési űrlap.

Még nincs bekötve: a backend. A `submitApplication()` (`src/features/careers/api.ts`) a
`VITE_API_URL` alá küldene `multipart/form-data`-t; amíg a változó nincs beállítva, beszédes
hibát jelez. A tervezett backend, adatbázisséma és admin felület leírása a
[`docs/JAVASLATOK.md`](docs/JAVASLATOK.md) fájlban van.

## Eszközök, amiket pótolni kell

- **Hero kép**: a koncepció aranyfényben álló sportautója. Amíg nincs meg, a hero gradiensekkel
  imitálja a hangulatot (`src/features/home/Hero.tsx`).
- **Vektoros logó**: a mostani PNG-k a kapott képből készültek. SVG-re cserélve élesebb lesz
  minden méretben — csak a `src/components/brand/Logo.tsx` importját kell átírni.
- **Partnerlogók**: SIXT, Europcar, AVIS, KROSCHE, FINN — jelenleg szöveges wordmarkok
  (`src/features/home/PartnersStrip.tsx`). A képek használatához partneri engedély kell.
- **Szolgáltatáskártyák képei**: a koncepción minden kártyán fotó van, most ikonok vannak.
