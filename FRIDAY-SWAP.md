# The homepage swap — done, and the one thing it left open

**Shipped 2 Sep 2026 in `a09a537`, ahead of the Friday date this file was
written for.** The storefront is the homepage at `/`; the DRUGS page is at
`/drugs.html` with its canonical, `og:url` and product-scoped schema `@id`s moved
with it. `f12.html`'s link to DRUGS was repointed. `/storefront.html`, which was
live for a day, is now a 404.

## Still open: paid traffic lands on the shelf

There is **no redirect from `/` to `/drugs.html`**, and there cannot be one —
GitHub Pages does not issue 301s, and the root is not vacated, it now serves the
hub. So every link written before the swap still resolves, just to a different
page than it used to.

The live Meta ad is one of them. From `outreach/boost-01.md`:

```
Destination   https://gazillionindustries.com/
              ?utm_source=meta&utm_medium=paid
              &utm_campaign=boost01&utm_content=lal_dense
```

That destination is now a product picker. The ad's creative, its audience and its
copy were all built to sell DRUGS, and the click now arrives somewhere it has to
choose. Repointing it to `/drugs.html` is a change in Meta Ads Manager, not in
this repo, and it is Tony's to make.

Other pre-swap links worth checking against the same problem: the Gumroad
profile and product pages, the KVR listing, and anything in `outreach/` that
carries a bare-root URL.

## The board was counting the wrong page

`board/serve.py` filtered DRUGS traffic on `("/", "/index.html")`. Those paths
are the storefront now, so the board was reading shelf traffic as DRUGS traffic.
Fixed in `2990bfa` (`("/drugs", "/drugs.html")`), but **the running process has
to be restarted to pick it up** — a long-lived `serve.py` keeps the old table in
memory.
