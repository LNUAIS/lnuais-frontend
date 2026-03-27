# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
node scripts/server.js   # Start local dev server on port 3000
```

No build step — all files are served as static HTML/CSS/JS. To test on mobile, use your machine's local IP address instead of localhost (ensure both devices are on the same WiFi).

## Architecture

### Environment & API Routing

`scripts/config.js` detects the environment by checking `window.location.hostname`:
- **Local** (`localhost`/`127.0.0.1`): routes to `http://localhost:3000` (proxied by `scripts/server.js` to backend at port 5000)
- **Production** (`lnuais.com` or `amplifyapp.com`): uses relative paths, which Amplify rewrites via `customHttp.yml` to the backend CloudFront URL

All pages import `scripts/config.js` and call `CONFIG.getApiBaseUrl()` before making fetch requests.

### Auth Architecture

Authentication uses two layers simultaneously:
- **HTTP-only session cookie** — set by the backend, required for actual API authorization
- **localStorage `user` object** — used by the frontend for UI state (name, email, picture, id)

`scripts/server.js` strips `Domain`, `Secure`, and `SameSite` cookie attributes when proxying locally, so cookies work on `localhost`. Production relies on Amplify's rewrite rules to forward cookies naturally.

**Auth flow:**
1. Email signup → backend sends verification code → `verify.html` (reads `pendingEmail` from localStorage)
2. Login via `POST /api/auth/login` → frontend verifies session with `GET /api/auth/current-user` → stores user in localStorage → redirects to `dashboard.html`
3. Google OAuth: redirect to `/api/auth/google?return_to=[origin]` → backend Passport.js handles callback → returns to `return_to` URL
4. Logout: `POST /api/auth/logout` → clear localStorage → redirect to `signin.html`

**Page access control** is done inline in each HTML page — there is no central routing or auth guard. Pages check `localStorage.getItem('user')` directly in `<script>` tags.

### Key Scripts

- `scripts/navbar.js` — Runs on all public pages. Checks localStorage for a logged-in user and replaces the "Join Us" nav link with a profile section (avatar + first name). Uses `ui-avatars.com` as fallback for non-Google users.
- `scripts/hamburger.js` — Mobile nav toggle.
- `scripts/typed.js` — Typed.js animation on the landing page hero section.
- `scripts/server.js` — Dev proxy server; also handles static file serving with MIME detection and falls back unknown routes to `index.html`.

### Styling

- `styles/styles.css` — Global styles (dark theme, yellow accent `#ffe000`, Inter font)
- `styles/responsive.css` — Mobile breakpoints for global layout
- Page-specific CSS: `about.css`, `courses.css`, `events.css`, `news.css`

### Production Deployment

`customHttp.yml` configures AWS Amplify:
- Rewrites `/api/<*>`, `/users/<*>`, `/oauth2/<*>`, `/logout` to the backend Elastic Beanstalk URL
- Adds security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- Falls back all unmatched paths to `/index.html`

`amplify.yml` has no build step — artifacts are the entire repo root.
