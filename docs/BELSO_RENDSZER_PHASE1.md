# Juliette Logistique – belső rendszer, 1. fázis

## 1. Létrehozott / módosított fájlok (összefoglaló)

**Backend (`juliette-api/`):** `db.js`, `sessionStore.js`, `belso/middleware.js`, `belso/routes.js`, `belso/validation.js`, `scripts/create-user.js`, `test/belso-auth.test.mjs`, `index.js` (session, CORS, helmet, belső route-ok).

**Frontend:** `src/belso/*`, `src/api/belsoApi.ts`, `src/App.tsx`, `src/komponensek/Fejlec.tsx`, `src/nyelv/belsoForditasok.ts`, `src/nyelv/forditasok.ts`, `src/nyelv/nyelvTipusok.ts`, `vite.config.ts` (dev proxy).

**Dokumentáció:** `docs/BACKUP.md`, ez a fájl.

## 2. Technológiák és függőségek

- **Frontend:** meglévő React 19 + Vite + Emotion + react-router-dom.
- **Backend:** Express (meglévő `juliette-api`), **SQLite** (`better-sqlite3`), **Argon2id** (`argon2`), **express-session** + SQLite session tároló, **helmet**, **express-rate-limit**, **zod**, **cookie-parser**.

## 3. Bejelentkezés

1. `GET /api/auth/csrf` – CSRF token (cookie + válasz).
2. `POST /api/auth/login` – e-mail + jelszó, Argon2 ellenőrzés, egységes hibaüzenet sikertelen esetén.
3. Sikeres belépés: session regenerálás, `jl.sid` HttpOnly cookie.

## 4. Munkamenet

- Szerveroldali session SQLite `sessions` táblában.
- Cookie: `HttpOnly`, `SameSite=Lax`, `Secure` productionben, 12 óra rolling maxAge.
- `GET /api/auth/me` – aktuális felhasználó + profil.
- `POST /api/auth/logout` – session törlés + cookie törlés.

## 5. Profil mentés

- `GET /api/profile/me`, `PATCH /api/profile/me` – csak bejelentkezett user, user_id a sessionből.
- Adatok: `user_profiles` tábla, paraméterezett SQL.

## 6. Migrációk

Verziókezelt SQL a `db.js`-ben (`schema_migrations` + `users`, `user_profiles`, `sessions`). Alap fájl: `DATA_DIR/belso.sqlite` (vagy `SQLITE_PATH`).

## 7. Biztonság

- Argon2id jelszóhash, min. 12 karakter CLI-nél.
- Rate limit a loginon (IP + e-mail).
- CSRF fejléc + cookie/session.
- Helmet, CORS credentials (opcionális `CORS_ORIGINS`).
- Nincs jelszó naplózás; profil API nem fogad `userId`-t a kliensről.
- Admin JWT rendszer változatlan (`/api/admin/*`).

## 8. Tesztek

```bash
cd juliette-api && node --test test/belso-auth.test.mjs
npm run build   # frontend typecheck + build
```

A belső auth teszt: két felhasználó, login, profil mentés, 401 névtelenül, B nem látja A adatait.

## 9. Ellenőrizetlen / későbbi

- Teljes WCAG audit minden új komponensen.
- Minden felsorolt viewport manuális böngészőteszt (automatikus reszponzív CSS alapok kész).
- Éles nginx / VPS proxy cookie beállítások.
- Production `SESSION_SECRET`, `CORS_ORIGINS`, `TRUST_PROXY=1`.

## 10. Teszt felhasználó (fejlesztés)

Nem production környezetben az API induláskor automatikusan létrehozza, ha még nincs:

| Mező | Érték |
|------|--------|
| Belépés (alias) | `teszt` |
| Jelszó | `teszt` |
| Tényleges e-mail az adatbázisban | `teszt@teszt.local` |

Kikapcsolás: `DEV_TEST_USER=0`. Productionben **nem** jön létre.

## 11. Első éles felhasználó

```bash
cd juliette-api
export DATA_DIR=/path/to/data   # opcionális
node scripts/create-user.js --email user@example.com --password 'legalabb12karakter'
```

## 12. Fejlesztői környezet

A `/login` **csak akkor érhető el**, ha a Vite dev szerver fut a **5173**-as porton. A bejelentkezéshez kell az API is (**3010**).

**Egyszerű (ajánlott):**

```bash
npm install
cd juliette-api && npm install && cd ..
npm run dev:all
```

**Két terminál:**

```bash
cd juliette-api && npm run dev    # :3010
npm run dev                       # :5173, /api proxy
```

Nyisd meg: **http://localhost:5173/login** (ne csak a főoldalt – a `/login` útvonal kell).

Ha „nem érhető el” / connection refused: nincs elindítva a dev szerver, vagy más folyamat foglalja a 5173-at.

## 13. Élesítés (később, külön jóváhagyással)

1. `SESSION_SECRET`, `CORS_ORIGINS` (pl. `https://juliettelogistique.de`), `NODE_ENV=production`, `TRUST_PROXY=1`.
2. SQLite fájl jogosultságok + backup.
3. Nginx: `/api` proxy a Node API-ra, HTTPS, cookie átadás.
4. Frontend build deploy; **ne** futtass destruktív migrációt éles adaton jóváhagyás nélkül.
5. Felhasználók csak CLI-vel.

**Ebben a szakaszban nem történt automatikus VPS élesítés.**
