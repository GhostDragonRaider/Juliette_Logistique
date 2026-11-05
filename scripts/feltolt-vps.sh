#!/usr/bin/env bash
# Statikus frontend feltöltése a VPS-re (rsync).
# Használat:
#   JL_DEPLOY_HOST=185.80.51.35 JL_DEPLOY_USER=root JL_DEPLOY_PATH=/var/www/juliettelogistique.de ./scripts/feltolt-vps.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${JL_DEPLOY_HOST:-185.80.51.35}"
USER="${JL_DEPLOY_USER:-root}"
REMOTE="${JL_DEPLOY_PATH:-/var/www/juliettelogistique.de}"

cd "$ROOT"
npm run build

echo "Feltöltés: ${USER}@${HOST}:${REMOTE}/"
rsync -avz --delete \
  -e "ssh -o StrictHostKeyChecking=accept-new" \
  "${ROOT}/dist/" "${USER}@${HOST}:${REMOTE}/"

echo "Kész. Ellenőrzés: curl -sL https://juliettelogistique.de/ | grep juliette-build"
