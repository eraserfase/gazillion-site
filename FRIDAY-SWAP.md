# Friday: making the storefront the homepage

`storefront.html` is built and committed but **not pushed**. The homepage still
sells DRUGS, which is where the running ads point, and it has to stay that way
until the launch.

The swap is three moves:

```bash
git mv index.html drugs.html     # the DRUGS page keeps existing, at its own URL
git mv storefront.html index.html
git push origin main
```

Then, in the same commit, fix what the move breaks:

- **`drugs.html`** — `rel="canonical"`, `og:url` and the structured-data `@id`
  all still say `https://gazillionindustries.com/`. They have to become
  `/drugs.html`, or the DRUGS page tells crawlers it is the homepage.
- **The ads.** Every live ad and link points at `gazillionindustries.com/`, which
  will stop being the DRUGS page the moment this lands. Either repoint them at
  `/drugs.html` first, or accept that the traffic arrives at the shelf instead of
  the product. This is the actual risk in the swap; the file moves are trivial.
- **`sitemap.xml`** — add `/drugs.html`, keep `/` and `/f12.html`.
- **The storefront's `See DRUGS` button** already points at `/drugs.html`, so it
  starts working at the same moment. Nothing to change there.

`/f12.html` is already live and unlinked. The storefront is the first thing that
links to it.
