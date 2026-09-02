# Javaslatok a Juliette Logistique oldal felépítéséhez

Ez a dokumentum a koncepcióképek és a megbeszélt igények alapján összeszedi, hogyan érdemes
továbbépíteni az oldalt. Amit már megvalósítottam, azt jelzem; a többi döntési pont.

---

## 1. Miért ez a technológiai stack

A választás a Vite + React + TypeScript hármasra épül, mert ez a legkisebb üzemeltetési
teher egy marketing oldalhoz, és a build kimenete egy statikus `dist/` mappa, ami bárhol
kiszolgálható.

- **Tailwind CSS 4**: a fekete-arany arculat sok apró, egyedi részletből áll (aranygradiens
  feliratok, hajszálvékony keretek, betűritkított kiskapitálisok). Ezeket design tokenként
  egyszer definiáltuk a `src/index.css` `@theme` blokkjában, így a márkaszínek és betűtípusok
  egy helyen módosíthatók, nem szóródnak szét a komponensekben.
- **react-hook-form + zod**: a jelentkezési űrlap 14 mezőt és egy fájlfeltöltést tartalmaz. A
  zod séma ugyanaz a kód, ami a backend oldalon is futtatható, tehát a validációt nem kell
  kétszer megírni.
- **i18next**: a koncepción FR | DE | EN nyelvváltó van. A fordítások JSON fájlokban vannak,
  és a `src/i18n/i18next.d.ts` révén a kulcsok típusellenőrzöttek: elírt kulcsnál a build
  elszáll, nem csak a böngészőben derül ki.

### Amit érdemes átgondolni: SEO

Ez most egy kliensoldalon renderelt (SPA) oldal. A Google feldolgozza a JavaScriptet, de a
kisebb keresők és a közösségi média előnézetek (Facebook, WhatsApp, LinkedIn) nem. Ha az
organikus keresés fontos üzletileg — egy szállítmányozási cégnél jellemzően igen —, három út
van:

1. **Prerendering marad ezen a stacken**: a `vite-plugin-prerender` vagy a `vite-ssg` build
   időben statikus HTML-t generál minden útvonalra. Kis munka, nagy nyereség, a kódot nem
   kell átírni. **Ezt javaslom első körben.**
2. **Astro-ra váltás**: a React komponensek újrahasznosíthatók, alapból statikus HTML-t ad.
   Marketing oldalhoz ez a legjobb SEO/teljesítmény arány, de a projektet át kell szervezni.
3. **Next.js-re váltás**: akkor éri meg, ha a backendet is ugyanabban a projektben akarjuk
   (route handlerek, server actions), tehát a jelentkezés-feldolgozás és az admin felület is
   ide kerülne. Egy repó, egy deploy — viszont ehhez már Node futtatókörnyezet kell, nem elég
   egy statikus hosting.

Amíg nincs döntés, minden oldal saját `<title>`/`<meta description>` értéket kap a
fordításokból (`RootLayout`), és a `paths.ts`-ben egy helyen vannak az útvonalak, így egy
későbbi migráció nem jár szétszórt átírásokkal.

---

## 2. Oldalstruktúra

A koncepció alapján összeállított szerkezet (a főoldal blokkjai már megvannak):

| Blokk           | Tartalom                                                        |
| --------------- | --------------------------------------------------------------- |
| Header          | logó, menü, telefonszám, FR/DE/EN nyelvváltó                    |
| Hero            | "Juliette Logistique" aranygradiens felirat, alcím, 2 CTA gomb   |
| Bizalmi sáv     | 5 elem: biztonság, 5+ év, Németország & Európa, prémium, partnerek |
| Rólunk          | szöveg + kiemelt pontok + logó                                   |
| Szolgáltatások  | 6 kártya ikonnal                                                 |
| Partnerek       | SIXT, Europcar, AVIS, KROSCHE, FINN                              |
| CTA sáv         | "Készen áll az együttműködésre?" + ajánlatkérés                  |
| Footer          | logó, elérhetőségek, jogi linkek                                 |

Aloldalak: rólunk, szolgáltatások, partnerek, kapcsolat, karrier, jelentkezés.

### Amit érdemes hozzátenni

- **Ajánlatkérő űrlap** a kapcsolat oldalra. Ugyanaz a mintázat, mint a jelentkezésnél
  (`Field` + zod), csak fájlfeltöltés nélkül: honnan–hova, autó típusa, kívánt dátum.
- **Referenciák / esettanulmányok**: 3-4 konkrét szállítás rövid leírással. Prémium
  szegmensben ez a legerősebb bizalomépítő elem.
- **GYIK**: a leggyakoribb kérdések (biztosítás, saját tengelyen vs. trailer, határidők).
  SEO szempontból is hasznos, mert hosszú kulcsszavakra hoz találatot.
- **Impresszum és adatvédelmi nyilatkozat**: német piacon az impresszum jogszabályi
  kötelezettség (TMG §5), és a hiánya bírságolható. A footer linkek már megvannak, a
  tartalmat kell megírni.

---

## 3. A jelentkezési folyamat

A kért két lépés megvan:

1. **`/karriere`** — a munka bemutatása: pozíció megnevezése, bevezető, három kártyában a
   feladatok / elvárt profil / amit kínálunk, majd a jelentkezés négy lépése, alul a
   „Jelentkezem" gomb.
2. **`/karriere/bewerbung`** — a jelentkezési űrlap.

### Az űrlap mezői

Név, keresztnév, e-mail, telefon, ország, város, születési dátum, jogosítvány megszerzésének
éve, jogosítvány-kategóriák, nyelvtudás, szakmai tapasztalat (év), mikortól elérhető,
motivációs szöveg (opcionális), önéletrajz (PDF/DOC/DOCX, max. 5 MB), adatkezelési
hozzájárulás.

A validáció zod sémában van (`src/features/careers/schema.ts`), a hibaüzenetek i18n kulcsok,
tehát a hibák is a kiválasztott nyelven jelennek meg.

### Javaslatok az űrlaphoz

- **Ne legyen egyoldalas monolit, ha bővül**: 14 mező még elfér egy lapon. Ha később
  hozzájönnek referenciák vagy korábbi munkahelyek, érdemes 2-3 lépéses varázslóra bontani,
  mert a hosszú űrlapok elhagyási aránya meredeken nő.
- **Piszkozat mentése**: a részben kitöltött űrlap `localStorage`-ba mentése (a fájl nélkül)
  megvédi a jelentkezőt a véletlen bezárástól.
- **Spam védelem**: egy Cloudflare Turnstile vagy hCaptcha a beküldés előtt. Egy fájlfeltöltős
  publikus végpont e nélkül idővel biztosan célpont lesz.
- **Visszaigazoló e-mail**: automatikus válasz a jelentkezőnek, és értesítés a felvevőnek.
  Erre a Resend vagy a Postmark a legegyszerűbb választás.

---

## 4. Backend és adatbázis — három lehetőség

Az igény: a jelentkezés adatai egy „sima adatbázisba" kerüljenek, az önéletrajz fájllal
együtt, és legyen egy admin felület, ahol ezek átnézhetők.

### A) Supabase — ezt javaslom

Managed PostgreSQL + fájltároló (Storage) + bejelentkezés (Auth), egy szolgáltatásban.

- **Előny**: nincs saját szerver, nincs üzemeltetés. Az önéletrajz egy privát Storage bucketbe
  megy, az admin belépés kész komponens. Ingyenes szinten elfér egy ekkora oldal, és van
  beépített SQL-felület, ahol a táblák közvetlenül böngészhetők.
- **Hátrány**: külső szolgáltatótól függünk, és a Row Level Security szabályokat gondosan
  kell beállítani (ez az a pont, ahol a Supabase projektek el tudnak hasalni).
- **Fontos**: a jelentkezés beküldése ne közvetlenül a kliensből írjon a táblába, hanem egy
  Edge Function fogadja. Így a fájltípus- és méretellenőrzés szerveroldalon is megtörténik.

### B) Saját Node backend

Fastify vagy Express + Prisma + PostgreSQL, a fájlok lemezen vagy S3-kompatibilis tárolóban
(Backblaze B2, Cloudflare R2).

- **Előny**: minden a mi kezünkben van, a zod séma szó szerint újrahasznosítható a
  validációhoz, és nincs szolgáltatói kötöttség.
- **Hátrány**: kell egy futó szerver, backup, monitoring, TLS. Ez folyamatos, nem egyszeri
  munka.
- Akkor válaszd ezt, ha a jelentkezéseken túl később saját szállításkezelő logika is jön
  (megrendelések, sofőrbeosztás, fuvarkövetés) — ott egy managed BaaS hamar szűk lesz.

### C) Next.js egy repóban

A frontendet átköltöztetjük Next.js-re, és a backend route handlerekként ugyanitt él.

- **Előny**: egy kódbázis, egy deploy, ráadásul az SEO probléma is megoldódik (SSR).
- **Hátrány**: a mostani Vite projekt átszervezése. Nem sok munka ebben a fázisban — most
  még kicsi a kódbázis, később drágább lesz.
- Ha az SEO és a backend együtt fontos, ez összességében a legkevesebb összmunka.

**Összegzés**: ha a cél a gyors indulás minimális üzemeltetéssel, akkor **A) Supabase**. Ha
az oldal egy nagyobb belső rendszer első lépése, akkor érdemes most **C) Next.js**-re
váltani, mert később ez a migráció lényegesen több munka.

---

## 5. Adatmodell

PostgreSQL séma a jelentkezésekhez. A fájl maga **nem** az adatbázisba kerül, csak az
elérési útja — a bájtok objektumtárolóba mennek. Ez azért fontos, mert a bináris tartalom az
adatbázisban felfújja a backupot és lassítja a lekérdezéseket.

```sql
create type application_status as enum (
  'new', 'in_review', 'interview', 'hired', 'rejected'
);

create table applications (
  id                 uuid primary key default gen_random_uuid(),
  created_at         timestamptz not null default now(),
  status             application_status not null default 'new',

  last_name          text not null,
  first_name         text not null,
  email              text not null,
  phone              text not null,
  country            text not null,
  city               text not null,
  birth_date         date not null,

  license_since      smallint not null,
  license_categories text not null,
  languages          text not null,
  experience_years   smallint not null,
  available_from     date not null,
  message            text,

  cv_storage_path    text not null,
  cv_original_name   text not null,
  cv_mime_type       text not null,
  cv_size_bytes      integer not null,

  consent_at         timestamptz not null,
  submitted_locale   text not null default 'de',
  admin_note         text,
  reviewed_at        timestamptz,
  reviewed_by        uuid references admin_users (id)
);

create index applications_created_at_idx on applications (created_at desc);
create index applications_status_idx on applications (status);

create table admin_users (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  password_hash text not null,
  display_name  text not null,
  created_at    timestamptz not null default now(),
  last_login_at timestamptz
);
```

Néhány döntés, amit érdemes tudatosan meghozni:

- A `consent_at` időbélyeg, nem logikai érték. Egy adatvédelmi vizsgálatnál azt kell tudni
  bizonyítani, hogy a hozzájárulás **mikor** történt.
- A `submitted_locale` megmutatja, milyen nyelven jelentkezett valaki. Ez alapján tudja a
  felvevő, milyen nyelven hívja vissza.
- A `status` enum, nem szabad szöveg. Így nem lesz „interview" és „Interview" ugyanabban a
  táblában.

---

## 6. Fájlfeltöltés — amire figyelni kell

Egy publikus, fájlt fogadó végpont a rendszer legsebezhetőbb pontja. A kliensoldali
ellenőrzés (típus, 5 MB méret) csak kényelmi funkció, kikapcsolható. Szerveroldalon
mindenképp kell:

1. **Méretkorlát a proxy szintjén is**, ne csak az alkalmazásban — különben a kérés törzse
   már beolvasásra kerül, mielőtt elutasítjuk.
2. **Valódi tartalomtípus-ellenőrzés**: a `Content-Type` fejlécet a kliens írja, tehát
   hamisítható. A fájl első bájtjaiból (magic number) kell megállapítani, hogy valóban PDF
   vagy DOCX-e (`file-type` csomag).
3. **Generált fájlnév**: soha ne a felhasználó által megadott nevet használjuk az elérési
   úton (`../` és hasonló trükkök miatt). Az eredeti nevet külön mezőben tároljuk, és csak a
   letöltéskor adjuk vissza `Content-Disposition` fejlécben.
4. **Privát tároló**: a bucket ne legyen publikusan olvasható. Az admin felület időlimites
   (pl. 5 perces) aláírt URL-lel töltse le az önéletrajzot.
5. **Vírusellenőrzés**: ha lesz forgalom, egy ClamAV vagy managed scan a feltöltés után.
   Az önéletrajzokat emberek nyitják meg, tehát ez nem elméleti kockázat.

---

## 7. Admin felület

A jelentkezéskezelő felület minimum funkciói:

- **Bejelentkezés** e-mail + jelszó párral (a jelszó Argon2 vagy bcrypt hash-elve).
  Két-három admin felhasználónál nem kell külső identitásszolgáltató.
- **Lista**: jelentkezések fordított időrendben, szűrés státuszra, keresés névre/e-mailre.
- **Részletek**: minden beküldött adat, és egy „Önéletrajz letöltése" gomb aláírt URL-lel.
- **Státuszkezelés**: új → átnézés alatt → interjú → felvéve / elutasítva, plusz egy belső
  megjegyzés mező.
- **CSV export**: a felvevő jellemzően táblázatban akar dolgozni.

Az admint **külön útvonalra** (`/admin`) érdemes tenni, és a kódját külön bundle-be — a
`paths.ts`-ben az útvonal már fenn van tartva. Ha a backend Next.js lesz, akkor az admin
kerülhet oda is; így a védett adatok soha nem mennek le a kliensbe.

**Amit érdemes elkerülni**: a Supabase Studio vagy egy pgAdmin „ez lesz az admin felület"
megoldás. Működik az első héten, de a felvevő kollégának adatbázis-hozzáférést adni azt
jelenti, hogy egy elgépelt `delete` mindent visz.

---

## 8. GDPR

A jelentkezők adatai különösen érzékenyek (önéletrajz, születési dátum), és a német piac
ebben szigorú:

- **Adatkezelési tájékoztató** az űrlap mellett, nem csak egy pipa: mi a cél, mennyi ideig
  tároljuk, kik látják.
- **Megőrzési idő**: a német gyakorlat szerint az elutasított jelentkezők adatait 6 hónap
  után törölni kell (az AGG szerinti igényérvényesítési határidő után). Ezt érdemes
  automatizálni egy időzített feladattal, nem emlékezetre bízni.
- **Törlési kérés kezelése**: legyen egy egyszerű mód rá az adminban (jelentkezés törlése a
  fájllal együtt).
- **Adatfeldolgozói szerződés**: ha Supabase-t vagy más külső tárolót használunk, ez
  formálisan is kell.

---

## 9. Üzemeltetés és deploy

- **Frontend**: Cloudflare Pages vagy Netlify. A `dist/` statikus, tehát a build és a deploy
  automatizálható egy git push-ból. Az SPA miatt kell egy átirányítási szabály (minden
  útvonal az `index.html`-re), különben a `/karriere` közvetlen megnyitása 404 lesz.
- **Domain**: `juliette-logistique.com` vagy `.de`. A német piacra a `.de` erősebb bizalmi
  jel.
- **Backend**: Supabase esetén nincs mit üzemeltetni. Saját backendnél Railway, Fly.io vagy
  egy Hetzner VPS a legjobb ár-érték.
- **Analitika**: Plausible vagy Umami. Cookie nélkül működnek, tehát nem kell cookie banner —
  ami egy GDPR-érzékeny oldalon kifejezetten előny.

---

## 10. Következő lépések

1. Döntés a backendről (A / B / C a 4. pontból). Ez minden további munkát meghatároz.
2. Végleges arculati eszközök beszerzése: vektoros logó, hero kép, szolgáltatásfotók.
3. A szövegek átnézése anyanyelvi beszélőkkel — a mostani FR és DE tartalom a koncepcióképek
   alapján készült, tehát vázlat, nem végleges marketingszöveg.
4. Jelentkezés-fogadó végpont megírása, a zod séma szerveroldali újrahasznosításával.
5. Admin felület a 7. pont szerint.
6. Impresszum és adatvédelmi tájékoztató.
7. Prerendering bekapcsolása (vagy döntés az Astro/Next.js migrációról).
8. Spam védelem és visszaigazoló e-mail.
