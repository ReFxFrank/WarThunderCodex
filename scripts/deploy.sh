#!/usr/bin/env bash
# Build the static Codex and sync it to a VPS over rsync+ssh.
#
# The Codex is a static export, so "deploy" is just: build the ./out folder with
# the correct public URL baked in, then copy it to the server's web root. It does
# not touch any other site on the box — nginx (or `serve`) hosts it on its own
# port. See deploy/ for the server-side config and docs/ for the full guide.
#
# Usage:
#   VPS_HOST=deploy@203.0.113.7 ./scripts/deploy.sh
#
# Optional env:
#   PORT         port the site is served on            (default 8080)
#   SITE_URL     public base URL baked into sitemap/OG  (default http://<ip>:<PORT>)
#   DEPLOY_PATH  remote web root                        (default /var/www/war-thunder-codex)
set -euo pipefail

: "${VPS_HOST:?set VPS_HOST, e.g. VPS_HOST=deploy@203.0.113.7}"
PORT="${PORT:-8080}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/war-thunder-codex}"
# Strip any "user@" prefix to derive the bare host for the default public URL.
host_only="${VPS_HOST##*@}"
SITE_URL="${SITE_URL:-http://${host_only}:${PORT}}"

echo "▸ Building with NEXT_PUBLIC_SITE_URL=${SITE_URL}"
NEXT_PUBLIC_SITE_URL="$SITE_URL" npm run build

echo "▸ Syncing ./out/ → ${VPS_HOST}:${DEPLOY_PATH}/"
# --delete keeps the remote folder an exact mirror (removes stale files).
rsync -avz --delete ./out/ "${VPS_HOST}:${DEPLOY_PATH}/"

echo "✓ Deployed. Live at ${SITE_URL}"
echo "  Reminder: nginx (or serve) must host ${DEPLOY_PATH} on :${PORT}, and the"
echo "  port must be open in both ufw and your host's firewall/security group."
