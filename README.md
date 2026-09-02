# Juliette Logistique

Premium járműszállítás és logisztika — TypeScript + React weboldal.

## Gyors start

```bash
npm install
npm run dev
```

Egyéb parancsok:

| Parancs | Leírás |
|---|---|
| `npm run build` | Production build (`dist/`) |
| `npm run preview` | Build előnézet |
| `npm run lint` | Oxlint |

## Stack (jelenlegi setup)

- **Vite 8** + **React 19** + **TypeScript**
- **react-router-dom** — többoldalas navigációhoz
- Koncepcióképek: `docs/concepts/`
- Logo: `public/brand/logo.png`

## Következő lépések — javaslatok

Részletes architektúra: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

Röviden:

1. **Landing** — sötét + arany premium design a koncepciók alapján (FR/DE/EN)
2. **Karrier** — munkakör bemutatása → jelentkezési űrlap (CV feltöltés)
3. **Backend** — ajánlott: Supabase (Postgres + Storage + Auth) vagy Firebase
4. **Admin** — jelentkezések listázása, CV letöltés, státuszkezelés
