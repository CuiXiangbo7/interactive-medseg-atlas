# Website

This is the Docusaurus site for the repository. The source of truth for guide content remains in the root bilingual Markdown files under `datasets/` and `models/`. The build script stages those files into localized Docusaurus docs and rewrites the repository-relative links.

## Preview locally

```bash
cd website
npm ci
npm run start
```

## Production build

```bash
cd website
npm ci
npm run build
```

The site is deployed to GitHub Pages by `.github/workflows/deploy-pages.yml` after changes are pushed to `main`.
