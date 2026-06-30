# Deploy: running the Codex next to another site on one IP

War Thunder Codex is a **static export** — `npm run build` produces a plain `./out`
folder of HTML/CSS/JS with no app server or database. That makes it easy to run
alongside an existing site on the same VPS: give it its own **port** and nothing
about the other site (its process, its port, its database) is touched.

This directory holds the server-side pieces. The one-shot build+upload lives in
[`../scripts/deploy.sh`](../scripts/deploy.sh).

## Why a port, not a subdomain

Name-based virtual hosts need a hostname. With **no domain — just the VPS IP** —
there is nothing to distinguish two sites on `:80`, so they are separated by port
instead. The Codex defaults to **`:8080`**; reach it at `http://<VPS_IP>:8080`.
(If you get a domain later, switch to a `server_name` and add TLS with certbot —
see the root [`README.md`](../README.md).)

## One-time server setup — pick ONE host

### Option A — nginx (preferred if nginx is installed)

```bash
sudo cp deploy/war-thunder-codex.nginx /etc/nginx/sites-available/war-thunder-codex
sudo ln -s /etc/nginx/sites-available/war-thunder-codex /etc/nginx/sites-enabled/
sudo mkdir -p /var/www/war-thunder-codex
sudo nginx -t && sudo systemctl reload nginx
```

### Option B — systemd + `serve` (no nginx needed)

Use this if the other site runs in Docker straight to `:80` and there is no
system nginx. Requires Node on the box; **adjust the path in the unit** if Node
came from nvm (`which npx`).

```bash
sudo mkdir -p /var/www/war-thunder-codex
sudo cp deploy/war-thunder-codex.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now war-thunder-codex
```

### Open the port (both layers — the common gotcha)

```bash
sudo ufw allow 8080/tcp
# AND add an inbound TCP 8080 rule in your host's firewall / security group.
```

## Every deploy after that

From your machine, in the repo root:

```bash
VPS_HOST=deploy@<VPS_IP> ./scripts/deploy.sh
```

That builds with `NEXT_PUBLIC_SITE_URL=http://<VPS_IP>:8080` (so the sitemap and
Open Graph tags carry the right URL) and rsyncs `./out` to
`/var/www/war-thunder-codex`. Override `PORT`, `SITE_URL`, or `DEPLOY_PATH` via
env if your setup differs.
