# Juliette Logistique — architektúra javaslatok

A koncepcióképek (`docs/concepts/`) alapján premium, sötét–arany vizuális irány. A logo (`logo.png`) JL monogram + út grafika + serif „Juliette” + spaced „LOGISTIQUE”.

---

## 1. Oldalstruktúra (route-ok)

| Útvonal | Cél |
|---|---|
| `/` | Landing (hero, szolgáltatások, partnerek, kontakt CTA) |
| `/services` | Részletes szolgáltatások (opcionális) |
| `/about` | Rólunk |
| `/partners` | Partnerek |
| `/contact` | Kapcsolat / ajánlatkérés |
| `/careers` | Munkakör bemutatása |
| `/careers/apply` | Jelentkezési űrlap + CV feltöltés |
| `/admin` | Admin belépés (védett) |
| `/admin/applications` | Jelentkezések listája / részletek |

`react-router-dom` már telepítve van.

Javasolt mappastruktúra:

```
src/
  assets/           # képek, ikonok
  components/       # Header, Footer, ServiceCard, Button, …
  layouts/          # PublicLayout, AdminLayout
  pages/            # Home, Careers, Apply, Admin, …
  i18n/             # FR / DE / EN szövegek
  lib/              # API kliens, validation, storage helpers
  styles/           # CSS változók, tipográfia, globális stilus
  types/            # TypeScript típusok
```

---

## 2. Design irány

**Paletta (CSS változók):**

```css
:root {
  --bg: #0a0a0a;
  --bg-elevated: #141414;
  --gold: #c9a227;
  --gold-soft: #d4af37;
  --text: #f5f5f5;
  --text-muted: #a3a3a3;
  --border: rgba(201, 162, 39, 0.35);
}
```

**Tipográfia:**

- Display / brand: elegáns serif (pl. *Cormorant Garamond* vagy *Playfair Display*) — logo „Juliette” hangulat
- UI / body: tiszta sans (pl. *Montserrat* vagy *DM Sans*), nagy tracking a „LOGISTIQUE” stílusú feliratoknál
- Kerüld az Inter / Roboto / Arial default stacket

**Landing szekciók (koncepció szerint):**

1. Header — logo, nav (FR/DE/EN), telefon CTA
2. Hero — edge-to-edge luxusautó kép, brand headline, 1 al thr, 2 CTA
3. Értékek sáv — 5 ikon (biztonság, tapasztalat, lefedettség, premium, partnerek)
4. Szolgáltatások — kártyák (itt indokolt a card, mert interakciós egység)
5. Rólunk — kétoszlopos
6. Partnerek — logósor
7. Footer CTA — „Prêt à collaborer?” / „Bereit zur Zusammenarbeit?”

**Styling:** Tailwind CSS ajánlott a sötét téma + responsive grid miatt; alternatíva: CSS Modules + CSS változók.

**i18n:** a koncepciók FR és DE nyelven vannak. Egyszerű JSON dictionary (`fr.json`, `de.json`, `en.json`) + nyelvváltó a headerben elég az első verzióhoz.

---

## 3. Karrier + jelentkezés + CV

### Folyamat

```
/careers  →  munkakör leírás, követelmények, „Jelentkezem” CTA
     ↓
/careers/apply  →  űrlap + CV feltöltés
     ↓
Backend tárolás  →  Admin felület
```

### Űrlap mezők (javasolt)

| Mező | Típus | Megjegyzés |
|---|---|---|
| Vezetéknév, Keresztnév | text | kötelező |
| Email, Telefon | email / tel | kötelező |
| Lakóhely / ország | text | |
| Jogosítvány kategória | select | B, BE, C, CE… |
| Tapasztalat (év) | number | |
| Elérhetőség / kezdet | date / text | |
| Üzenet | textarea | opcionális |
| Önéletrajz | file | PDF / DOC / DOCX, max ~5–10 MB |
| Adatkezelési hozzájárulás | checkbox | GDPR |

### Validáció

- Frontend: Zod + React Hook Form
- Backend: ugyanazok a szabályok újraellenőrizve
- Fájltípus whitelist: `application/pdf`, Word MIME-ek
- Fájlnév sanitizálás, vírusellenőrzés később (ClamAV / cloud scan)

---

## 4. Adatbázis + fájltárolás (adminhoz)

### Ajánlott: Supabase (legegyszerűbb „sima DB” + storage + auth)

Egy stackben megoldja:

- **Postgres** — jelentkezések tábla
- **Storage** — CV fájlok (`cvs/` bucket)
- **Auth** — admin bejelentkezés (email/jelszó)
- **RLS** — publikus insert az űrlapról, admin-only read

Példa séma:

```sql
create table applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  location text,
  license_categories text[],
  experience_years int,
  available_from text,
  message text,
  cv_path text not null,          -- storage path
  cv_original_name text not null,
  status text default 'new',      -- new | reviewed | invited | rejected
  notes text
);
```

### Alternatívák

| Megoldás | Előny | Hátrány |
|---|---|---|
| **Firebase** (Firestore + Storage + Auth) | gyors setup | kevésbé „SQL” |
| **PocketBase** | egy bináris, self-host | saját hosting kell |
| **Node/Express + Postgres + S3** | teljes kontroll | több munka |

Első körben **Supabase** a leggyorsabb út az admin + CV tároláshoz.

---

## 5. Admin felület

Minimál feature-ök:

- Bejelentkezés (csak admin szerepkör)
- Jelentkezések táblázata: dátum, név, email, státusz
- Szűrés / keresés
- Részletek oldal: minden mező + CV letöltés (signed URL)
- Státusz váltás + belső megjegyzés

Később: email értesítés új jelentkezésről (Supabase Edge Function / Resend).

---

## 6. Implementációs sorrend (javasolt)

1. Design tokenek + tipográfia + Header/Footer
2. Landing szekciók a koncepció alapján
3. i18n (DE elsődleges, ha a célpiac Németország)
4. `/careers` tartalom oldal
5. `/careers/apply` űrlap (először local mock / console)
6. Supabase projekt + tábla + storage bucket
7. Űrlap bekötése API-ra
8. `/admin` védett lista + CV letöltés
9. Polish: animációk, SEO, analytics, GDPR szöveg

---

## 7. Assets

| Fájl | Tartalom |
|---|---|
| `docs/concepts/concept-landing-fr.png` | FR landing koncepció |
| `docs/concepts/concept-landing-de.png` | DE landing koncepció |
| `docs/concepts/concept-brand.png` | Brand mood |
| `docs/concepts/logo.png` | Logo (forrás) |
| `public/brand/logo.png` | Logo a webhez |

A logo érdemes később **SVG**-ként is exportálni (élesebb megjelenés minden méretben). Hero és service képekhez jogtiszta / saját fotók kellenek a koncepció stílusában.
