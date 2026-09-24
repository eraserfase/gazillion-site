# What is aliasing in audio

> What aliasing is, what it sounds like, where it comes from in a mix, how to prevent it with oversampling, and how lofi producers use it on purpose.

Source: https://gazillionindustries.com/what-is-aliasing-in-audio/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

In old westerns the wagon wheels spin backward on screen. The camera isn't taking pictures fast enough to catch the spokes, so the eye gets a wrong answer that looks perfectly real. Audio does the same thing with sound, and some producers love the wrong answer.

Aliasing happens when audio contains frequencies above half the sample rate (the Nyquist frequency). Digital audio can't represent them, so they fold back down and reappear as lower, unrelated tones. It sounds metallic, glassy or out of tune, and it's most obvious on bright sounds and high notes. In mixing it's usually a flaw that oversampling prevents; in lofi and bitcrushed sounds it's part of the character.

## The short version

- **Cause**: frequencies above half the sample rate

- **Result**: they fold back as lower, inharmonic tones

- **Sounds like**: metallic, glassy, out-of-tune shimmer

- **Common sources**: distortion, clipping, sample rate reduction, synths

- **Prevent**: oversampling, filtering before downsampling

- **Or use it**: lofi crush, digital grit

## How aliasing works

A sample rate can only describe frequencies up to half its value. At 44.1 kHz, that ceiling is 22.05 kHz. Anything above it gets mirrored back below the ceiling by the same distance it went over. A simple example: at a 15 kHz sample rate the ceiling is 7.5 kHz, so a 10 kHz tone shows up at 5 kHz instead (15 minus 10). That new tone has no musical relationship to the note that made it, which is why aliasing sounds wrong rather than warm.

## What aliasing sounds like

On a sustained note it's a faint extra tone that moves the wrong way when the pitch bends: the note goes up, the alias goes down. On drums and noisy sounds it's a hard, metallic sheen on the top end. On a heavily crushed sample it's that ringing, robotic shimmer that makes the sound feel like it's coming through a broken machine. If a bright sound gets harsher in a way EQ can't fix, suspect aliasing.

## Where it comes from in a mix

- Distortion and clipping: they create new harmonics, and some land above the ceiling. See soft clipping explained.

- Sample rate reduction: lowering the rate lowers the ceiling, on purpose.

- Pitching samples up in a sampler without good interpolation.

- Bright synth waveforms generated without anti-aliasing.

In F(ilter)12, SAMPLE RATE folds the top back down as new content on purpose. There's a demo on the page.

## How to avoid it when you don't want it

- Turn on oversampling in distortion, clipping and saturation plugins that offer it.

- Low-pass bright material before running it through heavy nonlinear processing.

- Use a higher quality or "HQ" mode on samplers and synths when pitching things up.

- Check by sweeping a high note: if a second tone moves the opposite way, that's aliasing.

## How to use it on purpose

Lofi producers reach for aliasing deliberately. Lowering the sample rate on drums, chords or a whole loop gives the crunchy, metallic top of old samplers, especially alongside bit depth reduction (see bitcrushing explained). Filter the result afterward if it gets piercing; you want grit, not a headache.

## Questions people ask

### What is aliasing in sound?

Aliasing is when frequencies above half the sample rate fold back into the audible range as lower, unrelated tones, adding a metallic or out-of-tune quality to the sound.

### Can you explain aliasing with an example?

At a 15 kHz sample rate, the highest frequency that can be represented is 7.5 kHz. A 10 kHz tone can't fit, so it reappears at 5 kHz: 2.5 kHz below the ceiling, the same distance it went over.

### What is anti-aliasing in audio?

Anti-aliasing means removing or preventing frequencies above the Nyquist limit before they can fold back, usually with a low-pass filter before downsampling, or by processing at a higher sample rate with oversampling.

## What F(ilter)12 does

F(ilter)12 is our 12 bit sauce filter, and its lo-fi section uses this on purpose. SAMPLE RATE slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content. BIT coarsens the steps, so quiet detail rounds off. A filter with five shapes sits behind the crush to shape what comes out, and AURA helps the result sit in the mix.

The wagon wheels are still spinning backward. Now you get to decide how fast.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
