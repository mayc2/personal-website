# chrismay.me — personal website

Single-page React portfolio, deployed to Firebase Hosting (project `chrismay-41dcd`).

- Live: https://www.chrismay.me (Firebase Hosting custom domain; https://chrismay-41dcd.web.app is the same site)
- Stack: Nx 24, Vite 8, React 19, TypeScript, Emotion, Grommet icons, react-router 7
- Tests: Vitest + Testing Library (unit), Playwright (e2e, desktop + mobile Chrome)

## Local development

```sh
nvm use            # Node 22 (see .nvmrc); fnm/volta also read .nvmrc
npm ci
npm start          # dev server on http://localhost:4200
```

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build      # output: dist/apps/chris-personal-website
npm run e2e        # builds, serves the production bundle on :4300, runs Playwright
```

First Playwright run on a machine: `npx playwright install chromium`.

Run the e2e suite against a deployed URL instead of a local build:

```sh
BASE_URL=https://chrismay-41dcd.web.app npm run e2e
```

## Deployment

GitHub Actions handles deploys. Both workflows run lint, typecheck, unit tests, build and e2e first.

- `firebase-hosting-pull-request.yml`: every PR gets a Firebase preview channel; the URL is posted on the PR.
- `firebase-hosting-merge.yml`: pushes to `master` deploy to the live channel.

Auth is the `FIREBASE_SERVICE_ACCOUNT_CHRISMAY_41DCD` repository secret. `firebase.json` serves `dist/apps/chris-personal-website` as an SPA.

## Layout

```
apps/chris-personal-website/      the site (Vite app)
  public/                         favicons, manifest, images, resume PDF
  src/app/components/             page sections
  src/app/common/                 shared styled primitives, icons, colors
apps/chris-personal-website-e2e/  Playwright tests
```
