# Parallel saturation

> How to set up parallel saturation on a return track, how hard to drive it, how to filter the saturated copy, and how it compares with parallel compression.

Source: https://gazillionindustries.com/parallel-saturation/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A good gumbo keeps the stock and the roux in the same pot without letting either one win. Parallel saturation is the same recipe: a clean signal and a burnt one, stirred together until you can't tell where one stops.

Parallel saturation means blending a heavily saturated copy of a sound under the clean original. Send the track to a return, push the saturation there much harder than you would on the channel, filter the return if the low end smears, and turn it up underneath the dry signal until the sound thickens. The clean signal keeps the transients and the low end; the saturated one adds density and harmonics.

## The short version

- **Setup**: send to a return; saturator 100% wet there

- **Drive**: harder than you would inline

- **Filter**: high-pass the return; tame fizz with a low-pass

- **Blend**: up until it thickens, then back a touch

- **Latency**: make sure delay compensation is on

- **Best on**: drums, bass, vocals, full buses

## Why blend instead of insert

On an insert, saturation changes everything it touches: more drive means more density, but also softer transients and, on bass, a smeared sub. In parallel you get to pick. The dry signal keeps the front edge of every hit and the clean low end, and the return supplies the grit and weight. So you can push the saturator somewhere you'd never leave it on the track itself, and only use as much as the mix wants.

## How to set up parallel saturation

- Create a return (aux or bus) track and send the source to it.

- Put the saturator on the return with its own mix control at 100% wet.

- Drive it hard, well past what you'd use on the channel.

- High-pass the return so the sub stays clean; add a low-pass if it fizzes.

- Pull the return fader down, then raise it under the dry signal until the sound thickens.

- Back it off a touch, then compare with the return muted at matched loudness.

## Filter the burnt copy

The return is where the harshness hides. Heavy saturation adds a lot of high harmonics and, on bass, a woolly low end, and both get added straight onto the clean signal. A high-pass keeps the dry sub in charge, and a low-pass or a gentle high shelf cut keeps cymbals and vocals from turning into sandpaper. Filtering after the saturator shapes what it added; filtering before changes what drives it. Both are useful.

## Keep it lined up

Some saturators add latency, especially with oversampling on. Most DAWs compensate for plugin latency automatically; check that it's switched on in yours, or the blend smears, thins out, or combs. If a return makes the sound thinner instead of thicker, suspect timing or polarity before blaming the saturator.

## Where it works best

- Drums: density without losing the hit. See how to saturate drums.

- Bass and 808s: harmonics on top, clean sub below.

- Vocals: presence and edge that never fully takes over.

- Whole buses: a single return can thicken a group of parts together.

For parallel use, run BEEFY on a return track and blend it in. The demo on the page is 28 seconds.

## Parallel saturation vs parallel compression

They're cousins. Parallel compression, sometimes called New York compression, blends a heavily compressed copy under the dry signal to lift the quiet detail and sustain. Parallel saturation does a similar lift and adds harmonics on top. Neither is better; compression brings up the room and the tail, saturation brings up the weight and the grit, and plenty of mixes use both.

## Questions people ask

### What is parallel saturation?

Blending a heavily saturated copy of a signal under the clean original, usually on a return track, so you get density and harmonics while the dry signal keeps its transients and low end.

### What are the different types of saturation?

Common styles are tape, tube, transformer and clipper-style saturation. They differ in which harmonics they add and how they treat transients and high frequencies, but all bend the waveform with a nonlinear curve.

### Is parallel compression better than parallel saturation?

Neither is better. Parallel compression lifts quiet detail and sustain; parallel saturation lifts density and adds harmonics. Use compression when you want more room and tail, saturation when you want more weight and grit.

## What BEEFY does

BEEFY is our saturation and loudness plugin. For parallel saturation, put it on a return track like any insert and blend the return under the dry signal. BEEF sets how far it goes, from weight and density toward something rude, and COOK moves the color from rounder toward brighter, which on a return decides how much top end you're adding. SOFT CLIP opens switched on and handles the initial gain staging.

Stock and roux, same pot. Nobody at the table asks which one they're tasting.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
