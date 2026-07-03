# personal-site

Portfolio site for Amir Zimhony — Data Engineer / AI engineer with a strong data foundation.

## Local development

Static HTML — no build step required.

### Quick start (Python)

```bash
python3 -m http.server 8000
```

Open http://localhost:8000

**Note:** Nav links use clean URLs (`/projects`, etc.) that only work on Netlify. Locally, open pages directly:

- http://localhost:8000/projects.html
- http://localhost:8000/experience.html
- http://localhost:8000/skills.html
- http://localhost:8000/contact.html

### Netlify CLI (matches production)

Respects `_redirects` for clean URLs:

```bash
npm install -D netlify-cli
npx netlify dev
```

## Deploy

Push to `main` on GitHub. Netlify deploys automatically if the repo is linked.

- **Build command:** leave empty (static site)
- **Publish directory:** `.` (repo root)
