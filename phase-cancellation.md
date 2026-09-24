# Phase cancellation

> Why two versions of one sound cancel each other, the difference between polarity and phase, what comb filtering actually is, and how to find and fix it.

Source: https://gazillionindustries.com/phase-cancellation/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Two microphones on one snare drum, both sounding good on their own, and when you put the faders up the drum gets smaller. Nothing is broken. You are listening to arithmetic.

Phase cancellation happens when two versions of the same sound arrive at different times and partially cancel each other. Where the waveforms are opposed they subtract, and the result is thinner than either source alone. The complete case is polarity inversion, where two identical signals cancel to silence. The common case is a small time offset, which does not cancel everything but removes a regular series of frequencies, producing the hollow sound engineers call comb filtering.

## The short version

- **Cause**: the same sound arriving twice, at different times

- **Total**: identical signals, opposite polarity, cancel to nothing

- **Partial**: a delay removes a comb of frequencies, evenly spaced

- **1 ms offset**: nulls at 500 Hz, 1.5 kHz, 2.5 kHz and upward

- **Where**: multi-mic sources, layered samples, stereo wideners, room reflections

- **Test**: listen in mono; cancellation is loudest there

## Polarity is not phase

The button on your channel strip marked with a circle and a slash flips polarity: every sample is multiplied by minus one, instantly, at every frequency. That is a useful, simple operation and it is the right fix for exactly one problem, which is a microphone pointed at the opposite side of a drum from another microphone.

Phase, properly speaking, is about timing, and timing offsets affect different frequencies differently. A half-millisecond delay is a full cycle at 2 kHz and a tiny fraction of a cycle at 50 Hz, so it wrecks the top and leaves the bottom alone. That is why flipping polarity sometimes makes things better, sometimes worse, and frequently neither: it is not the control that addresses a time offset.

## What a comb filter actually is

Mix a sound with a delayed copy of itself and you get reinforcement at frequencies whose wavelength fits the delay, and cancellation at the ones that fall between. Plot it and it looks like the teeth of a comb.

The arithmetic is simple enough to use. A one-millisecond offset puts the first null at 500 Hz, with more at 1.5 kHz, 2.5 kHz and so on up. Halve the delay and every null moves up an octave. Which tells you the important practical fact: small offsets do their damage high up, larger offsets reach down into the body of the sound, and past about 25 or 30 milliseconds the ear stops hearing a filter and starts hearing an echo.

BEEFY is a saturation and loudness effect, so it will make a thin, combed drum louder and still thin. Fix the alignment first, then reach for weight.

## How to find and fix it

- Listen in mono. Almost all cancellation is worse in mono, which is why mono is the test rather than a compromise.

- Solo pairs of tracks and mute one at a time. The problem pair is the one where two sounds together are thinner than one alone.

- Try the polarity button first. It costs nothing and it fixes opposed microphones instantly.

- If polarity does not fix it, the issue is timing: nudge one track by a few samples until the low end fills in.

- Zoom in on the waveforms and align the initial transients by eye, then check by ear.

- On layered samples, align the attacks before you do anything else.

- When recording, use the three-to-one rule: put the second microphone at least three times as far from the source as the first one is.

## Where it is not a problem

Some of it is the sound. Room reflections comb-filter every recording ever made and that is what a room is. Deliberate short delays are how chorus, flanging and most stereo widening work. The distinction is whether you chose it: a wideners that sounds huge in stereo and disappears in mono has canceled the thing you were widening, and that one is not a choice, it is a bill arriving later.

See how to layer kicks for the version of this problem that eats low end specifically.

## Questions people ask

### How do I get rid of phase issues?

Check in mono, find the pair of tracks that gets thinner together, try polarity inversion, and if that does not do it, time-align the tracks by nudging one until the low end returns.

### What happens when you invert the phase of audio?

The polarity button flips the waveform upside down at all frequencies. Against an identical copy it produces silence; against a related signal it can either fix or worsen the cancellation.

### How can you tell if microphones are out of phase?

Sum them to mono and flip the polarity of one. Whichever setting gives you more low end and a bigger sound is the correct one. If neither sounds right, you have a timing offset rather than a polarity problem.

### Does phase cancellation affect bass the most?

Low frequencies have long wavelengths, so they survive small offsets that destroy the top end. But when low frequencies do cancel, you lose the part of the record carrying the weight, which is why it feels like a bass problem.

## What BEEFY does

BEEFY is our saturation and loudness effect: it adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. BEEF is weight and density, COOK is the color and bite, JUICE is the level going in, and SOFT CLIP rounds the loudest parts. What it cannot do is put back a frequency that two tracks removed from each other. Alignment is upstream of tone, always.

Two good microphones, one drum, and a subtraction nobody asked for.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
