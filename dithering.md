# Dithering

> What dither actually does, why rounding errors are worse than noise, which type to use, and the three rules that cover every case you will meet in practice.

Source: https://gazillionindustries.com/dithering/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The last checkbox in the export dialog, the one nobody understands, sitting there asking whether you want to add noise to a record you just spent a week cleaning up. The answer is usually yes, and the reason is a genuinely strange piece of engineering.

Dither is a tiny amount of noise added deliberately before you reduce bit depth, because the errors caused by that reduction are worse than the noise. Truncating a 24-bit file to 16-bit produces rounding errors that follow the signal, which the ear hears as distortion on quiet material. Adding noise first makes those errors random instead, turning a correlated distortion into an unobtrusive hiss. Apply it once, at the very end, only when you are actually reducing bit depth.

## The short version

- **What**: noise added before reducing bit depth

- **Why**: it converts rounding distortion into steady noise

- **When**: only when going to a lower bit depth, usually 16-bit

- **Where**: last, after the limiter, once and only once

- **Type**: triangular is the standard safe choice

- **Noise shaping**: moves the noise to where the ear cares less

**BEEF at 96.** Past where most settings want to live.

## Why rounding is worse than noise

A 24-bit sample has far more possible values than a 16-bit one. When you convert, every value has to move to the nearest available step, and the amount it moves is the error. That error is not random: it depends on the signal, so it tracks the music, and anything that tracks the music is heard as distortion rather than as background.

On a loud passage the error is minuscule compared to the signal and nobody will ever hear it. On a fade-out, a solo piano note decaying into silence, or a quiet ambient passage, it is audible as a grainy, gritty edge that gets worse as the music gets quieter, which is exactly backwards from how noise behaves.

Dither breaks the correlation. Add a small amount of random noise before the conversion and the errors stop following the signal, because the thing being rounded is now signal plus noise. You trade a distortion that appears when the music is quiet for a constant noise floor a few decibels above where it would otherwise be. In every listening test that matters, that is the better trade.

## Types, briefly

- **Triangular (TPDF)** is the standard choice and the one to use if you do not want to think about it. It fully decorrelates the error at the cost of a slightly higher noise floor.

- **Noise shaping** adds the same total amount of noise but moves most of it into frequency ranges the ear is less sensitive to, usually the top octave. It measures worse and sounds better.

- **Aggressive noise shaping** pushes that further. On material destined for further processing it is a bad idea, because that shaped noise is now baked in.

[BEEFY](https://gazillionindustries.com/beefy.html) lives much earlier in the chain than this: saturation and loudness, with SOFT CLIP holding the peaks long before anything gets exported.

**LIMIT** instead, everything else identical.

## The rules

- Dither only when reducing bit depth. Exporting 24-bit from a 24-bit session needs none.

- Dither once, on the final export. Dithering a file that was already dithered adds noise without benefit.

- Put it last, after the limiter. Anything after dither re-quantizes and undoes the point.

- If you are delivering 24-bit masters to a distributor, let them dither when they encode. Do not do it for them.

- Triangular unless you have a reason. The reason is usually quiet classical or acoustic material, where noise shaping earns its keep.

## Where it costs you

Honestly: on a loud modern master, very little either way. The noise floor of a 16-bit file is low enough that the difference between dithered and truncated is inaudible under a record that never drops below a moderate level. The people who genuinely need this are working on material with real quiet passages. Everyone else should do it because it is free and correct, not because they will hear it.

The real cost is double-dithering and dithering at the wrong stage, both of which add noise for no reason.

## Questions people ask

### Should dithering be on or off?

On, if the export is reducing bit depth, usually to 16-bit. Off if you are exporting at the same bit depth you worked at, or handing a 24-bit file to someone who will process it further.

### Does dither lower quality?

It raises the noise floor very slightly and removes a distortion that would otherwise appear on quiet material. By any measure that matters musically, it improves the result.

### Should I add dither to my master?

If the master is being delivered as a 16-bit file, yes, on the final export only. If you are delivering 24-bit, no.

### What does dithering mean in music?

Adding low-level noise before a bit-depth reduction so that the rounding errors become random noise rather than signal-dependent distortion.

## What BEEFY does

BEEFY is our saturation and loudness effect, and the reason it appears in an article about dither is the shape of the chain. **BEEF**, **COOK** and **JUICE** do their work on the source or the bus; **SOFT CLIP** opens switched on and rounds the loudest parts so the peaks are dealt with early; **LIMIT** holds the output when you want that instead. Dither is the very last thing that happens, after all of it, in the export dialog.

Add noise on purpose, at the end, to make the quiet parts sound cleaner. Engineering is not always intuitive.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
