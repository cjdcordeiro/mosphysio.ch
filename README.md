# mosphysio.ch

Static website for MOS Physiothérapie.

## Staging

- **Staging site:** <https://cjdcordeiro.github.io/mosphysio.ch/>, which publishes `main` on every push.
- **Pull request previews:** every pull request is published at `https://cjdcordeiro.github.io/mosphysio.ch/pr-<number>/`, and a comment on the PR links to it. The preview is removed when the PR is closed.
- **Manual runs:** Actions → GitHub Pages → Run workflow. On `main` it redeploys staging; on any other branch it publishes `https://cjdcordeiro.github.io/mosphysio.ch/branch/<branch-name>/` (the link is in the run summary).

All of these are deployed by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) to the `gh-pages` branch. GitHub Pages must be set to **Deploy from a branch**, `gh-pages`, `/ (root)`.

Keep internal links relative so they work on staging, in previews and in production.
