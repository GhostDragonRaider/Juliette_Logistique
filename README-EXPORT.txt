Juliette Logistique — teljes VPS export
Dátum: 2026-10-31T07:54:32+01:00
Host: juliettelogistique / 185.80.51.35

Tartalom:
- frontend/  — nginx root (buildelt SPA)  /var/www/juliettelogistique.de
- api/       — Node API forráskód (node_modules nélkül)
- data/      — SQLite DB + feltöltések + napló
- config/    — nginx + systemd

Helyi futtatás (API):
  cd api && npm install && NODE_ENV=development PORT=3010 DATA_DIR=../data node index.js

Megjegyzés: a frontend forráskód (Vite/React) a GitHub repo-ban van:
  GhostDragonRaider/Juliette_Logistique
Ez az export a szerveren futó buildelt frontendet és a teljes API-t tartalmazza.
