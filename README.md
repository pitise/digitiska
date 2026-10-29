# digitiska

Public website for **digitiska.com**, plus earlier product experiments.

| Folder | What it is | Deployed? |
|---|---|---|
| `site/` | The digitiska.com website: Home, Studio, About, Contact, Privacy, 404 | Yes, by the Cloudflare Worker `digitiska-main` (see `wrangler.jsonc`) |
| `docs/site-design/` | Design rules for the site (`DESIGN.md`, `design.json`) and review screenshots | No |
| `Products/Solat/` | Source of solat.digitiska.com | Not from this repo: uploaded by hand to the Cloudflare Pages project `solat` (see `Products/Solat/DEPLOY-CLOUDFLARE.md`) |
| `Products/Hafazan/`, `Products/PrayerTimes/` | Tests | No |

## The website

Plain HTML, CSS and JavaScript, no build step. Fonts are self-hosted (`site/assets/fonts/`, SIL Open Font License 1.1). `site/_headers` sets a strict content security policy, so the pages use no inline scripts or styles and load nothing from other sites. Messages and the kit-news sign-up open the visitor's own email app (to digitiska@protonmail.com); the site stores nothing.

Small text edits: edit the file in `site/` on GitHub (pencil icon), then commit to a branch and open a pull request into `main`. Once Cloudflare is connected (below), merging to `main` publishes the change.

## Connect Cloudflare (once)

1. Cloudflare dashboard, **Workers & Pages**, open the Worker **digitiska-main** (it holds the custom domain digitiska.com).
2. **Settings, Build**, connect the Git repository `pitise/digitiska`, production branch `main`.
3. Build command: leave empty. Deploy command: `npx wrangler deploy`. Root directory: `/`.
4. Merge the website pull request into `main`; Cloudflare builds and replaces what digitiska-main serves today.
5. Check https://digitiska.com, /studio, /about, /contact, /privacy and a missing page (should show the site's 404).

Nothing here touches solat.digitiska.com.

## Before launch

- Replace or remove names marked † (working titles of kits in the works).
- Give the real Core and Complete prices if they should show on the site (today the kit row points to the kit page).
- Check the setup estimates (US$49, US$90, US$250) and the Privacy page wording.
- Terms and Service terms pages are not written yet and are not linked.

Dates in this repo use dd.mmm.yyyy (for example 29.Oct.2026).
