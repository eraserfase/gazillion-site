# How to use a limiter

> How to set a limiter: where it goes, what ceiling to use, how much gain reduction is normal, and why doing the work upstream is what keeps it from pumping.

Source: https://gazillionindustries.com/how-to-use-a-limiter/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The last plugin in the chain, the one that makes everything louder, and therefore the one everybody reaches for first and leans on hardest. Most of what a limiter gets blamed for is work it should never have been asked to do.

A limiter stops a signal exceeding a ceiling you set. Use it last, set the ceiling at −1 dBTP for anything that will be streamed or encoded, and push into it until you have the loudness you want, watching the gain reduction meter: one to three decibels on peaks is normal and healthy. If you need much more than that, the problem is upstream and no limiter setting will fix it.

## The short version

- **Job**: prevent anything crossing a ceiling

- **Position**: last, after everything else

- **Ceiling**: −1 dBTP for streaming and encoded delivery

- **Amount**: 1–3 dB of gain reduction on peaks

- **Release**: fast enough to recover, slow enough not to distort

- **Warning sign**: the meter never returning to zero

## What it actually is

A limiter is a compressor with a very high ratio and a very fast attack, aimed at a ceiling rather than at a musical result. A brickwall limiter behaves as if the ratio were infinite: nothing gets past, ever. See limiter vs compressor for where the line sits between them.

Most modern limiters use lookahead: they delay the audio by a few milliseconds so the detector can see a peak coming and start reducing gain before it arrives, rather than clamping down after it has already gone past. That is why a limiter can catch a transient that a compressor with the same attack time would miss, and it is why limiters report latency.

## How to set one

- Put it last. Anything after it can push the signal back over the ceiling you just set.

- Set the ceiling first: −1 dBTP for encoded delivery, tighter only for files that will be played as they are.

- Turn on true-peak detection if it has it.

- Raise the input or threshold slowly, a decibel at a time, and watch the gain reduction meter.

- Listen to the quiet bars, not the drops. Pumping shows up where there is space, not where it is busy.

- Set release by ear: too fast and you hear distortion on bass notes, too slow and the whole track ducks after every hit.

- Back off one decibel from wherever you stopped. You will not miss it tomorrow.

BEEFY has LIMIT as one of two output choices, with SOFT CLIP as the other. They are separate switches and either can be off.

## Do the work before the limiter

This is the whole article in one idea. A limiter asked to deliver eight decibels of loudness will pump, flatten and distort, because it is turning the entire mix down every time one snare arrives. Deal with the peaks before it sees them and the limiter has almost nothing left to do.

The tools for that are clipping and saturation, both of which lower peaks without touching the rest of the track. Clipper before limiter covers the order and the amounts, and crest factor explains why it works.

## Where it costs you

Transients go first: the snare loses its crack, then the kick goes blunt. Then the sense of depth, because everything gets pushed toward the same level. Then, at the extreme, audible distortion on sustained low notes, where the limiter's release is moving fast enough to modulate the waveform itself.

There is also a strategic cost. Streaming services normalize playback, so past a certain point you are giving up dynamics for loudness that the listener's player is going to take straight back off. How loud should my master be has the numbers.

## Questions people ask

### What does a limiter actually do?

It prevents a signal exceeding a set ceiling, by reducing gain very quickly whenever the signal would cross it. Used with make-up gain, that lets the whole track sit louder under the same ceiling.

### How much gain reduction should a limiter do?

One to three decibels on the loudest peaks for most material. If the meter is showing six or more on average, move that work upstream to a clipper, a compressor or the mix itself.

### Should I use a limiter before mastering?

Take it off the mix bus before you bounce for mastering. Leave headroom instead. If you are mastering it yourself, the limiter belongs at the end of the mastering chain, not on the mix you are feeding into it.

### When should I use a limiter on vocals?

As a safety catch after compression, taking a decibel or two off the few loudest words, not as the main dynamics control. Compression shapes the performance; the limiter just stops the occasional spike from running away.

## What BEEFY does

BEEFY is our saturation and loudness effect. SOFT CLIP opens switched on and brings rounded, fuzzy edges to the loudest parts, which is the upstream work that stops a limiter from having to do everything. LIMIT is the other choice when you want output peaks held in check instead, and both can be turned off so you can push it yourself. BEEF brings weight and density, COOK the color and bite, and JUICE the level going in. Input and output clip lights watch both ends.

Last in the chain, and the least it has to do, the better it sounds.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
