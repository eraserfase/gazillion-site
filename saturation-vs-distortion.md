# Saturation vs distortion

> Saturation, overdrive, distortion and fuzz are the same process at different strengths. What actually changes, odd vs even harmonics, and which one to use.

Source: https://gazillionindustries.com/saturation-vs-distortion/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

In 1964 Dave Davies of the Kinks cut slits in his amp's speaker cone with a razor blade, and the guitar on "You Really Got Me" came out torn at the edges. Sixty-odd years later people still argue about what to call that sound, usually in a comment section, usually while selling a plugin.

Saturation and distortion are the same process at different intensities. Both bend a signal's waveform, and a bent waveform carries new harmonics. "Saturation" usually means the gentle end: a little added harmonic content, slightly softened peaks, more density without an obvious effect. "Distortion" means you can plainly hear it. Overdrive and fuzz are points further along the same line.

## The short version

- **Same thing**: a nonlinear curve that adds harmonics

- **Saturation**: gentle; felt as density and presence

- **Overdrive**: obvious but warm; the curve is pushed

- **Distortion**: plainly audible grit

- **Fuzz**: close to a square wave

- **The difference**: how hard it's driven, and the shape of the curve

**BEEF at 8.** Barely doing anything — useful as the reference you A/B against.

**BEEF at 96.** Where the plug-in stops being polite. Most settings that sound right in solo are about half this.

## What's actually happening

Every one of these is a curve. Quiet signal passes nearly straight through, and as it gets louder the curve bends, so the output stops growing as fast as the input. That bending changes the shape of the waveform, and a changed waveform contains frequencies that weren't there before: harmonics, at whole multiples of the notes going in.

Drive it gently and the curve barely bends. Drive it hard and the tops of the waveform flatten toward a square, which is why heavily fuzzed guitar sounds like a buzzing wall. **Same machine, different pressure on the pedal.**

## Odd and even harmonics

The shape of the curve sets the color. A symmetric curve, one that bends the top and bottom of the wave the same way, adds mostly odd harmonics (three times, five times the frequency), which tend to sound edgier and more aggressive. An asymmetric curve adds even harmonics too (twice, four times), which tend to sound rounder, closer to the note itself. Most real devices mix both, which is why "warm" and "gritty" are adjectives and not measurements.

## Where the words come from

- **Saturation** comes from recording gear: tape and circuits that softly run out of room as you push them.

- **Overdrive** comes from guitar amps played past the point where they stay clean.

- **Distortion** is the umbrella term, and also what people call it once it's obvious.

- **Fuzz** is the extreme end: clipped nearly square.

- **Bitcrushing** gets filed alongside them, but it's a different mechanism entirely: fewer bits and lower sample rates, not a bent curve.

## Which one you want

Pick by what you want the listener to notice. If they should hear a thicker, more present sound without hearing an effect, that's saturation: a few dB of drive, checked at matched loudness. If the grit is the point (a growling 808, a vocal with teeth), push into distortion and commit. The in-between is where mixes go muddy, because it's too much to be invisible and too little to be a choice.

The practical side is in [how to use saturation in a mix](https://gazillionindustries.com/how-to-use-saturation/) and [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/).

[BEEFY](https://gazillionindustries.com/beefy.html) covers the whole range with one big knob, from a little weight to a lot of rude. The demo on the page is 28 seconds.

## How to tell which one you are hearing

The line between them is a matter of degree rather than mechanism, but there are reliable tells once you know what to listen for.

**Can you still hear the source?** Saturation leaves the identity of the sound intact — a saturated piano is a piano that sounds warmer. Distortion replaces it — a distorted piano is a new sound that used to be a piano. That is the practical boundary and it matters more than any definition.

**What happens to the noise floor?** Heavy distortion brings everything underneath the music up with it, so room tone, hiss and bleed become audible and stop sounding like background. If the quiet parts got loud, you are past saturation.

**Does it change with playing dynamics?** Saturation responds to level, so quieter passages get less of it and the performance stays intact. Aggressive distortion tends to flatten that out, which is why heavily distorted parts often feel static.

## The words on the plugin do not mean much

Saturation, distortion, overdrive, drive, color, warmth, character and heat are marketing terms as often as technical ones, and no standards body polices any of them.

What does carry information is the description of the mechanism — whether a plugin says it is clipping, waveshaping, modelling a circuit, or generating harmonics at specified orders. Two plugins labeled saturation can do completely different things, and two labeled differently can do nearly the same thing.

So treat the name as a hint about intended flavor, and decide by ear on your own material at matched level. That last part is the one people skip, and level matching is the difference between a real comparison and preferring whichever one was louder.

## Questions people ask

### Is overdrive the same as saturation?

They're the same process at different strengths. Saturation is the subtle end, where you hear density rather than an effect; overdrive is pushed far enough to hear the grit, a term that comes from guitar amps.

### Is saturation just distortion?

Yes: mild distortion. Both bend the waveform and add harmonics. Saturation is the name for the gentle end of that range.

### What are the types of distortion?

By intensity: saturation, overdrive, distortion and fuzz. By curve: soft clipping (rounded), hard clipping (flat-topped), and asymmetric shapes that add even harmonics. Bitcrushing is often grouped with them but works by reducing bit depth and sample rate instead.

### Should you put saturation on everything?

No. A little on the parts that need weight or presence helps; stacked on every track, the added harmonics pile up and the mix turns harsh and crowded. Use it where you can name what it's fixing.

### How can I tell saturation from distortion by ear?

Ask whether the source is still itself. Saturation leaves the identity intact and responds to playing dynamics; distortion replaces the sound and tends to flatten dynamics while bringing the noise floor up with it.

## What BEEFY does

BEEFY is our saturation and loudness plugin, and it goes from the subtle end to the obvious one. A little **BEEF** fills things out; a lot gets rude. **COOK** moves the color from a rounder feel toward a brighter, more cooked edge, and **SOFT CLIP**, on by default, brings rounded, fuzzy edges to the loudest parts. There is no drum-only rule: it works on synths, samples, keys, guitar and vocals too.

Dave Davies never needed the word. He needed the razor blade, and then he needed to stop.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
