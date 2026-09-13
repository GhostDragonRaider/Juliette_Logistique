# Juliette Logistique

Premium járműszállítás és logisztika — TypeScript + React + Vite.

## Gyors start (helyi / nem Vercel)

```bash
npm install
npm run dev
```

Előnézet a production build után:

```bash
npm run build
npm run preview
```

A `dist/` mappa bármilyen static hoston futtatható (Netlify, GitHub Pages, nginx, stb.).

## Vercel

A repo tartalmazza a `vercel.json` fájlt. Vercel-en:

1. Importáld a GitHub repo-t: `GhostDragonRaider/Juliette_Logistique`
2. Framework: **Vite** (auto)
3. Build: `npm run build`
4. Output: `dist`
5. Production branch: `main`

SPA útvonalakhoz a `vercel.json` minden kérést az `index.html`-re ír át.

## Parancsok

| Parancs | Leírás |
|---|---|
| `npm run dev` | Fejlesztői szerver |
| `npm run build` | Production build (`dist/`) |
| `npm run preview` | Build előnézet |
| `npm run lint` | Oxlint |

## Stack

- Vite 8 + React 19 + TypeScript
- Emotion (`@emotion/styled`) — nincs CSS/SASS fájl
- HU / EN / DE nyelvválasztó
- react-router-dom

Részletes terv: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
