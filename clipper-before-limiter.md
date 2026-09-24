# Clipper before limiter

> Why a clipper goes before the limiter on the master, how to set both, what each one costs, and why the true-peak limiter always stays last.

Source: https://gazillionindustries.com/clipper-before-limiter/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

On a good basketball team the help defender takes the quick guard before he reaches the paint, so the big man at the rim only has to deal with what's left. Put one of them in charge of everything and somebody gets dunked on.

A clipper goes before the limiter. The clipper takes the fastest, tallest transients instantly, without the attack and release movement a limiter would add, and the limiter after it catches everything else and holds the final true-peak ceiling. Each does a little, so neither's side effects become audible. Start with a dB or two from each, keep the true-peak limiter last, and compare at matched loudness.

## The short version

- **Order**: mix bus processing, then clipper, then limiter

- **Clipper**: catches the fastest spikes; 1–2 dB on the loudest hits

- **Limiter**: last, true peak, ceiling around -1 dBTP

- **Split**: small amounts from each beat a lot from one

- **Earlier**: clipping drums or 808 first means less on the master

- **Check**: clipper only, limiter only, both, at matched loudness

**SOFT CLIP as the out stage.** BEEF 62, JUICE +2.0. The clipper rounds the peak instead of holding a ceiling over it.

**LIMIT as the out stage.** Identical settings otherwise. The choice is which one catches the peak, and they do not sound the same.

## Why the clipper goes first

A limiter is fast but not instant. It turns the gain down over a short attack and lets it back up over a release, and when a mix is full of sharp drum hits, that movement is what you start to hear: pumping, dulled snares, a mix that breathes when it shouldn't. A clipper has no timing at all. It reshapes each sample on its own, so it can take the top off a snare without moving anything else.

Put it in front and the limiter receives a signal whose worst spikes are already gone. It needs less gain reduction, so it moves less. The cost moves to the clipper, which distorts a little instead. In small amounts, on short transients, that distortion is hard to hear.

## Why the limiter stays last

The final stage has to guarantee the ceiling. A true-peak limiter estimates the peaks between samples, the ones that can appear after conversion or lossy encoding, and holds them under the ceiling you set. Put a clipper after it and the output can go back over. Streaming services ask for headroom there: Spotify recommends keeping true peaks below -1 dBTP, or below -2 dBTP for masters louder than -14 LUFS.

Red Hot Chili Peppers' *Californication* (1999) is still the record people point to when a loud master tips over into audible clipping. Nobody wants to be the next example.

## How to set a clipper before a limiter

- Order the master chain: your mix bus processing, then the clipper, then the limiter.

- Set the limiter to true peak with a ceiling of -1.0 dBTP, and leave its input at zero for now.

- Raise the clipper's input until the loudest transients lose 1 to 2 dB.

- Raise the limiter's input until it shows a couple of dB of gain reduction on the loudest section.

- Level-match and compare three versions: clipper only, limiter only, both.

- Keep the one with the most punch at the same loudness.

If the clipper is available with oversampling, use it on the master, where cymbals and vocals make aliasing easy to hear.

## Clip earlier and the master needs less

The drums and the 808 create most of the fast peaks in a beat. Clip them on their own channels or bus and the master clipper has almost nothing to do, which is often the cleaner result. The detail is in [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/), and the full loudness chain is in [how to make your mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/).

BEEFY has [SOFT CLIP and LIMIT](https://gazillionindustries.com/beefy.html) as separate buttons, for the drums or 808 before they reach the master. The demo on the page is 28 seconds.

## What it costs

Split the work and each tool stays quiet. Lean on either and its signature comes out: a clipper doing too much turns snares papery and adds grit to cymbals, and a limiter doing too much pumps and flattens the groove. If the two together need more than a few dB to reach your level, the mix needs work before the master does.

## Questions people ask

### Does a clipper go before or after the limiter?

Before. The clipper removes the fastest transients so the limiter works less, and the true-peak limiter stays last so the output never goes over its ceiling.

### Is a clipper the same as a limiter?

No. Both control peaks, but a limiter turns the gain down over time with attack and release, and a clipper reshapes the waveform instantly, adding distortion instead of gain movement.

### What goes first, a compressor or a limiter?

The compressor. Compression shapes dynamics inside the mix; the limiter is a safety ceiling at the very end. On a master the usual order is compression, then clipping, then limiting.

### Should I clip after the limiter for more loudness?

Not for streaming. A clipper after the limiter can push true peaks back over the ceiling, which risks distortion once the file is encoded. Keep the true-peak limiter last.

## Stock plugins that do this

- **FL Studio**: Fruity Soft Clipper before the limiter

- **Ableton Live**: Saturator with soft clip on, then Limiter

## What BEEFY does

BEEFY is our saturation and loudness plugin, and it has both tools as separate choices. **SOFT CLIP** opens switched on, brings rounded, fuzzy edges to the loudest parts and takes care of the initial gain staging. **LIMIT** keeps output peaks in check. Or turn both buttons off and push it yourself, with input and output clip lights at either end.

Most people will get the most from it on the drums, 808 and bass, so the master clipper and limiter have less to fix.

The guard never made it to the paint. The big man barely had to jump.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
