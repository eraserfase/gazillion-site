# Harmonic distortion

> What harmonic distortion is, where even and odd harmonics come from, why added harmonics make things louder, and why hi-fi minimises what producers pay for.

Source: https://gazillionindustries.com/harmonic-distortion/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Hi-fi manufacturers spend fortunes getting it down to a thousandth of a percent. Plugin companies charge you to put it back. Both are describing the same measurement, and the difference between them is entirely about how much and which kind.

Harmonic distortion is new frequency content added at whole-number multiples of the frequency going in. Feed a circuit a 100 Hz tone and get back 100 Hz plus some 200, 300 and 400 Hz, and that addition is the distortion. It is measured as total harmonic distortion, or THD, expressed as a percentage of the original signal. In playback equipment it is a fault to be minimized. In a mix it is a tool, because those added harmonics make a sound denser, brighter and easier to hear.

## The short version

- **What**: added content at multiples of the input frequency

- **Measured as**: THD, a percentage of the original signal

- **Even harmonics**: octaves and fifths above: read as full, warm

- **Odd harmonics**: read as edge, grit, hardness

- **In hi-fi**: a fault; lower is better

- **In production**: a control; the amount is the decision

**BEEF at 8.** The reference you A/B against.

## Where the harmonics come from

A circuit that reproduces its input exactly, only louder, adds nothing. A circuit that cannot quite do that returns a slightly different waveform, and the difference between what you put in and what came out is always expressible as harmonics of the input.

Which harmonics depends on the shape of the distortion. If the circuit treats the positive and negative halves of the waveform the same way, you get mostly odd-numbered harmonics: three times the input frequency, five times, seven times. If it treats them differently — squashing one side more than the other — you also get even-numbered ones: two times, four times, six times.

That distinction is the whole of the warm-versus-harsh conversation. The second harmonic is an octave above the fundamental and the fourth is two octaves, so even harmonics reinforce notes that are already musically present. The third is an octave and a fifth, which is still consonant, but the fifth, seventh and upward land on intervals that clash. Tube circuits are usually asymmetric, which is why they are described as warm. Symmetric clipping is odd-heavy, which is why it sounds hard.

## Why distortion makes things louder

Two mechanisms, both useful. Adding harmonics puts energy in frequency ranges where the ear is more sensitive than it is at the fundamental, so a bass note with harmonics reads as louder without any more low end. And the process that generates the harmonics rounds the peaks of the waveform, which lowers the peak level relative to the average and lets you turn the whole thing up. See [crest factor](https://gazillionindustries.com/crest-factor/) for that second half.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and this is its job description: it brings out harmonics that help a sound feel bigger.

**SOFT CLIP** as the out stage, BEEF at 62.

## How much is a lot

Context decides, and the numbers are not comparable between contexts. A power amplifier specified at a fraction of a percent is aiming for inaudibility. A saturation plugin pushed for effect can be generating distortion in the double digits as a percentage, and that is the point of using it.

The useful version of the question is not how much THD but where it lands. Distortion on a bass guitar puts content into the midrange where small speakers work, and that is a gift. Distortion on a bright cymbal puts content above it, into the range where the ear is already sensitive and where aliasing lives, and that is a problem. Same percentage, different outcome.

## Where it costs you

Harmonics are content and content takes up space. A mix with saturation on every channel fills the upper mids with material that was not in the recording, which is why such a mix sounds crowded and fatiguing even when no single track sounds distorted.

There is also the part nobody sees on a THD meter: intermodulation. When two frequencies pass through a nonlinear circuit together, you get sum and difference frequencies as well as harmonics, and those are not musically related to anything. It is why distortion sounds fine on a single bass note and messy on a full chord, and why heavy bus saturation gets grubby in the exact moments when the most is happening.

## Questions people ask

### What is meant by harmonic distortion?

Content added at whole-number multiples of the frequencies present in the original signal, produced whenever a circuit or process is not perfectly linear.

### How much THD is acceptable?

In playback equipment, low enough to be inaudible, which is why specifications quote fractions of a percent. In music production there is no acceptable figure: saturation plugins routinely generate far more, deliberately, and the judgment is by ear.

### Are harmonics bad?

Not inherently. They are the reason instruments sound different from each other. Added harmonics are a problem when they are unintended, when they crowd a mix, or when they alias.

### What is the difference between harmonic and intermodulation distortion?

Harmonic distortion adds content at multiples of the input frequencies, which stays musically related. Intermodulation adds sums and differences between frequencies, which does not, and it is the part that makes dense material sound dirty.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is more weight, density, loudness and attitude as you turn it up; **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge; **JUICE** sets the level going in. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, adding harmonics above the low end so there is more to hear than just sub.

One measurement, two industries, opposite goals. The number was never the point.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
