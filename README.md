# website

The landing page for DRUGS, and nothing else.

One self-contained `index.html` — the screenshots are embedded, so there are no
other assets and nothing to break. Served by GitHub Pages from `main`.

## Deliberately separate from the plugin repo

The plugin source is a commercial product and must stay private. This repo exists
so that GitHub Pages can serve the page publicly without the DSP going with it.
Nothing from `drugs/` belongs in here.

## Updating

Edit `store/site/index.html` in the plugin repo, copy it here, commit, push.
Pages redeploys on its own within a minute or so.
