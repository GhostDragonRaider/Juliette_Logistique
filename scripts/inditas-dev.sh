#!/usr/bin/env bash
# Frontend (5173) + API (3010) egy parancsból – a /login és a bejelentkezés így működik.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cleanup() {
  if [[ -n "${API_PID:-}" ]] && kill -0 "$API_PID" 2>/dev/null; then
    kill "$API_PID" 2>/dev/null || true
    wait "$API_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

echo "Juliette API indítása (http://127.0.0.1:3010)…"
(cd "$ROOT/juliette-api" && npm run dev) &
API_PID=$!
sleep 1

if ! curl -sf "http://127.0.0.1:3010/api/health" >/dev/null 2>&1; then
  echo "Figyelem: az API még nem válaszol – ellenőrizd a juliette-api telepítést (npm install)." >&2
fi

echo "Vite dev szerver (http://localhost:5173) – állítsd le: Ctrl+C"
cd "$ROOT"
exec npm run dev
