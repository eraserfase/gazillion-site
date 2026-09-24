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

**4 bit at 8 kHz.** Bits make it grainy; the rate is what makes it clang.

## How aliasing works

A sample rate can only describe frequencies up to half its value. At 44.1 kHz, that ceiling is 22.05 kHz. Anything above it gets mirrored back below the ceiling by the same distance it went over. A simple example: at a 15 kHz sample rate the ceiling is 7.5 kHz, so a 10 kHz tone shows up at 5 kHz instead (15 minus 10). That new tone has no musical relationship to the note that made it, which is why aliasing sounds wrong rather than warm.

## What aliasing sounds like

On a sustained note it's a faint extra tone that moves the wrong way when the pitch bends: the note goes up, the alias goes down. On drums and noisy sounds it's a hard, metallic sheen on the top end. On a heavily crushed sample it's that ringing, robotic shimmer that makes the sound feel like it's coming through a broken machine. **If a bright sound gets harsher in a way EQ can't fix, suspect aliasing.**

## Where it comes from in a mix

- **Distortion and clipping:** they create new harmonics, and some land above the ceiling. See [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

- **Sample rate reduction:** lowering the rate lowers the ceiling, on purpose.

- **Pitching samples up** in a sampler without good interpolation.

- **Bright synth waveforms** generated without anti-aliasing.

In [F(ilter)12](https://gazillionindustries.com/f12.html), SAMPLE RATE folds the top back down as new content on purpose. There's a demo on the page.

## How to avoid it when you don't want it

- Turn on oversampling in distortion, clipping and saturation plugins that offer it.

- Low-pass bright material before running it through heavy nonlinear processing.

- Use a higher quality or "HQ" mode on samplers and synths when pitching things up.

- Check by sweeping a high note: if a second tone moves the opposite way, that's aliasing.

## How to use it on purpose

Lofi producers reach for aliasing deliberately. Lowering the sample rate on drums, chords or a whole loop gives the crunchy, metallic top of old samplers, especially alongside bit depth reduction (see [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/)). Filter the result afterward if it gets piercing; you want grit, not a headache. [Best bitcrusher plugins](https://gazillionindustries.com/best-bitcrusher-plugins/) goes through which ones let you hear that fold-back and which ones hide it.

## Where the folded content actually lands

Lower the sample rate and everything above half the new rate does not disappear. It mirrors down. A partial at frequency f comes back at the new rate minus f, so the content that returns is not a harmonic of anything in the music, which is why it reads as metallic rather than bright. The rule is one subtraction, and it tells you in advance what you are about to hear:

- **22.05 kHz — fold line at 11,025 Hz**: a 6 kHz hat partial passes through unchanged

- **16 kHz — fold line at 8,000 Hz**: a 6 kHz hat partial passes through unchanged

- **11.025 kHz — fold line at 5,512 Hz**: a 6 kHz hat partial comes back at 5,025 Hz

- **8 kHz — fold line at 4,000 Hz**: a 6 kHz hat partial comes back at 2,000 Hz

At 8 kHz that 6 kHz hat partial lands at 2 kHz, which is in the middle of where the vocal and snare live, and a 7 kHz one lands at 1 kHz. That is the whole reason a crushed hi-hat can make a mix sound cluttered in a region you never touched. Filtering before the rate reduction removes the content that would have folded; filtering after only attenuates it once it is already sitting on top of the music.

## Questions people ask

### What is aliasing in sound?

Aliasing is when frequencies above half the sample rate fold back into the audible range as lower, unrelated tones, adding a metallic or out-of-tune quality to the sound.

### Can you explain aliasing with an example?

At a 15 kHz sample rate, the highest frequency that can be represented is 7.5 kHz. A 10 kHz tone can't fit, so it reappears at 5 kHz: 2.5 kHz below the ceiling, the same distance it went over.

### What is anti-aliasing in audio?

Anti-aliasing means removing or preventing frequencies above the Nyquist limit before they can fold back, usually with a low-pass filter before downsampling, or by processing at a higher sample rate with oversampling.

## What F(ilter)12 does

F(ilter)12 is our 12 bit sauce filter, and its lo-fi section uses this on purpose. **SAMPLE RATE** slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content. **BIT** coarsens the steps, so quiet detail rounds off. A filter with five shapes sits behind the crush to shape what comes out, and **AURA** helps the result sit in the mix.

The wagon wheels are still spinning backward. Now you get to decide how fast.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
