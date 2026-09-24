# Bitcrushing explained

> What a bitcrusher does: bit depth, quantization noise, sample rate reduction and aliasing, what 16, 12 and 8 bits sound like, and how to use it on drums and samples.

Source: https://gazillionindustries.com/bitcrushing-explained/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

The first video game consoles squeezed whole soundtracks into a handful of bits, and a generation grew up hearing that grit as music instead of a limitation. Now producers pay for plugins that put the limitation back.

Bitcrushing reduces the bit depth of audio, so each sample is stored with fewer possible volume steps. Quiet details get rounded to the nearest step, which adds a gritty, buzzy quantization noise that follows the music. Most bitcrushers also lower the sample rate, which removes high frequencies and folds them back as metallic aliasing. Together they make the crunchy, digital lofi sound, from subtle 12-bit warmth to 4-bit destruction.

## The short version

- **Bit depth**: fewer volume steps; grit and noise on quiet parts

- **Sample rate**: lower top end; high frequencies fold back as aliasing

- **16-bit**: about 96 dB of dynamic range

- **12-bit**: about 72 dB; gentle grain

- **8-bit**: about 48 dB; obvious crunch

- **Use**: drums, samples, vocals, lofi textures; blend to taste

**12 bit, full rate.** The quantisation is there but the top end is intact.

**4 bit at 8 kHz.** Bits make it grainy; the rate is what makes it clang.

## What bit depth does

Digital audio measures the wave thousands of times a second, and bit depth sets how many different levels each measurement can land on. Each bit doubles the steps and adds roughly 6 dB of dynamic range: 16 bits gives 65,536 steps and about 96 dB, 12 bits gives 4,096 and about 72 dB, 8 bits gives 256 and about 48 dB. Take bits away and the wave is forced onto a coarser staircase. The error between the real wave and the staircase is heard as noise and grit, loudest on the quiet parts, like reverb tails and fades.

## What sample rate reduction does

The sample rate sets the highest frequency audio can hold: half the sample rate. Lower it and the top end disappears. In a lofi effect the frequencies that no longer fit aren't filtered away first, so they fold back down as new, out-of-tune tones. That metallic shimmer is aliasing, and it's half the sound of a crushed drum. The full explanation is in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/).

## Bitcrushing vs distortion

Distortion bends the waveform on a smooth curve and adds harmonics related to the notes, so it sounds warm or gritty but musical. Bitcrushing chops the wave into steps, so its noise depends on the level and doesn't follow the harmonic series as neatly, which is why it sounds digital. They stack well: a little saturation before a gentle crush often sounds better than either alone. See [saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/).

In [F(ilter)12](https://gazillionindustries.com/f12.html), twelve bits is as clean as it gets. It only goes down from there.

## How to bitcrush audio

- Put a bitcrusher on the track or on a return for parallel use.

- Lower the bit depth until you hear grain, often somewhere between 12 and 8 bits.

- Lower the sample rate until the top softens and starts to shimmer.

- Low-pass after the crusher if the aliasing gets harsh.

- Blend with the dry signal or back the settings off, then compare at matched loudness.

## Where it works

Drums take crushing well, since the grit sits on transients and tails. Samples and chords get a worn, vintage texture. Vocals can take a little as an effect, or a lot for a robotic, radio-broken sound. On bass, go carefully: heavy crushing adds noise that muddies the low end, so crush a filtered copy instead.

## Where the folded content actually lands

Lower the sample rate and everything above half the new rate does not disappear. It mirrors down. A partial at frequency f comes back at the new rate minus f, so the content that returns is not a harmonic of anything in the music, which is why it reads as metallic rather than bright. The rule is one subtraction, and it tells you in advance what you are about to hear:

- **22.05 kHz — fold line at 11,025 Hz**: a 6 kHz hat partial passes through unchanged

- **16 kHz — fold line at 8,000 Hz**: a 6 kHz hat partial passes through unchanged

- **11.025 kHz — fold line at 5,512 Hz**: a 6 kHz hat partial comes back at 5,025 Hz

- **8 kHz — fold line at 4,000 Hz**: a 6 kHz hat partial comes back at 2,000 Hz

At 8 kHz that 6 kHz hat partial lands at 2 kHz, which is in the middle of where the vocal and snare live, and a 7 kHz one lands at 1 kHz. That is the whole reason a crushed hi-hat can make a mix sound cluttered in a region you never touched. Filtering before the rate reduction removes the content that would have folded; filtering after only attenuates it once it is already sitting on top of the music.

## Questions people ask

### What is the difference between distortion and a bitcrusher?

Distortion reshapes the waveform on a smooth curve and adds harmonics, so it sounds warm or gritty. A bitcrusher reduces bit depth and often sample rate, adding quantization noise and aliasing, so it sounds digital and crunchy.

### Is bitcrushing used on vocals?

Yes, as an effect: a little for a lo-fi or radio texture, a lot for a broken, robotic sound. It's usually blended or automated rather than left on a whole lead vocal.

### Does 12-bit sound better than 16-bit?

Not technically: 16-bit has more dynamic range and less noise. But 12-bit has a grain and warmth that many producers like, which is why vintage 12-bit samplers are still loved. [12 bit sampler plugins](https://gazillionindustries.com/12-bit-sampler-plugins/) covers what the format does to a sample and what the second half of the sound is.

## Stock plugins that do this

Three of these are already installed. What to listen for when comparing them, and the paid ones worth knowing, are in [best bitcrusher plugins](https://gazillionindustries.com/best-bitcrusher-plugins/).

- **FL Studio**: Fruity Squeeze (bit reduction)

- **Ableton Live**: Redux

- **Logic Pro**: Bitcrusher

## What F(ilter)12 does

F(ilter)12's lo-fi section is the crush pair. **SAMPLE RATE** slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content. **BIT** coarsens the steps it's measured in, so quiet detail rounds off and what's left picks up a hard edge. Twelve bits is as clean as it gets. Behind the crush sits a filter with five shapes and six resonance shapes, and on top sits **AURA**, which helps it all sit better.

The consoles had no choice about the bits. You do, which is the whole fun.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
