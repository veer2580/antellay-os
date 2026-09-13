# Deploying Antellay OS to Cloudflare Workers & Pages

This project is fully configured and ready for one-command deployment to **Cloudflare Workers** (with Workers Static Assets) and **Cloudflare Pages**.

---

## ⚡ Quick Start: Deploy in 2 Minutes

### 1. Authenticate with Cloudflare (One-time)
Run this command in your terminal to log in to your Cloudflare account:
```bash
npx wrangler login
```
A browser window will open asking you to authorize Wrangler. Click **Allow**.

---

### 2. Deploy to Cloudflare Workers (Recommended)
Run:
```bash
npm run deploy
```
This automatically runs `npm run build` and then deploys your application via `wrangler deploy`.

Your site will be live immediately with a free `*.workers.dev` subdomain (e.g. `https://antellay-os.<your-subdomain>.workers.dev`).

---

## 🌐 Alternative: Deploy to Cloudflare Pages
If you prefer Cloudflare Pages:
```bash
npm run deploy:pages
```
Or connect your GitHub repository directly to Cloudflare Pages:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`

---

## 🛠️ Local Testing & Preview

Test the production worker locally before deploying:
```bash
npm run worker:dev
```
Or preview the Vite build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration Files Included

| File | Purpose |
|------|---------|
| [`wrangler.toml`](file:///c:/Users/ronak/OneDrive/Desktop/new%20antellay-os/wrangler.toml) | Workers configuration with `[assets]` binding and `not_found_handling = "single-page-application"` |
| [`worker.js`](file:///c:/Users/ronak/OneDrive/Desktop/new%20antellay-os/worker.js) | Worker entry point routing requests to static assets |
| [`public/_redirects`](file:///c:/Users/ronak/OneDrive/Desktop/new%20antellay-os/public/_redirects) | SPA routing fallback rule (`/* /index.html 200`) so `/about`, `/mission`, etc. work on hard refresh |
| [`public/_headers`](file:///c:/Users/ronak/OneDrive/Desktop/new%20antellay-os/public/_headers) | Production caching & security headers for JS/CSS assets |

---

## 🔗 Adding a Custom Domain
1. Open [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → click your worker `antellay-os`.
3. Go to **Settings** → **Triggers** / **Custom Domains**.
4. Click **Add Custom Domain** and enter your domain name.
