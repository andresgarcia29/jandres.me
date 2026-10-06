# jandres.me

Personal site of Andrés García, Senior SRE / Platform Engineer. It's built like a status page: a terminal hero,
an "all systems operational" board of career outcomes, incident-review case studies, and a live strip with real
GitHub activity refreshed every six hours.

**Stack:** Astro (static, no UI framework), plain CSS, ~3 KB of vanilla JS, Cloudflare Workers static assets.

## Develop

```bash
npm ci
npm run dev            # http://localhost:4321
GH_TOKEN=... npm run data   # refresh src/data/github.json (classic PAT, read:user scope)
npm run build && npm run check
```

All copy lives in `src/content/site.ts`.

## How it stays live

`.github/workflows/site.yml` runs on every push and every six hours:

1. `npm run check`, the confidentiality gate over source and git history (`scripts/check-terms.sh`).
2. On schedule: `scripts/fetch-github.mjs` pulls contributions and the latest releases/commits with one GraphQL
   call and commits `src/data/github.json`. If GitHub is down, the committed snapshot is used and the site
   says how old it is.
3. Build, run the gate again over `dist/`, deploy with `wrangler deploy`.

Repository secrets: `GH_TOKEN` (classic PAT, `read:user` only), `CLOUDFLARE_API_TOKEN`
("Edit Cloudflare Workers" template), `CLOUDFLARE_ACCOUNT_ID`.

## Easter eggs

- Press <kbd>⌘K</kbd>, <kbd>Ctrl+K</kbd> or <kbd>/</kbd> for the command palette (`whoami`, `cv`, `email`, …).
- [`/status.json`](https://jandres.me/status.json)
- Any missing page.
