# Filter cutoff and resonance explained

> What filter cutoff and resonance actually do: the 3 dB corner, slope in dB per octave, the resonant peak, self-oscillation, and how to use both musically.

Source: https://gazillionindustries.com/filter-cutoff-and-resonance/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

Two knobs on every synth ever built, and most people learn them by wiggling. One takes the brightness away. The other one makes that hollow whistle just before everything goes wrong.

Cutoff is the frequency where a filter starts removing content, conventionally the point where the signal is 3 dB down. Resonance is a feedback peak built up right at the cutoff, which emphasizes the frequencies the filter is about to throw away. Cutoff decides what goes; resonance decides how loudly the filter announces where the edge is. Turn resonance high enough and the filter rings on its own, producing a tone at the cutoff frequency with no input at all.

## The short version

- **Cutoff**: the corner frequency, where response is about 3 dB down

- **Slope**: how fast it falls past the corner: 12, 18 or 24 dB per octave

- **Resonance**: a peak at the cutoff, from feedback around the filter

- **Q**: how narrow that peak is

- **Self-oscillation**: resonance high enough to ring on its own, at the cutoff

- **Trade**: resonance boosts at the corner and takes level either side

## What cutoff really marks

A filter does not have a wall. Below the cutoff of a low-pass, material passes; above it, material is reduced by more and more the further up you go, at a rate set by the slope. The cutoff is simply the agreed measuring point: 3 dB down from the passband. At 12 dB per octave, a tone one octave above a 1 kHz cutoff comes out around 12 dB quieter; two octaves up, about 24 dB. At 24 dB per octave those numbers double, which is why the same cutoff frequency sounds far darker on a steeper filter.

This is also why sweeping a filter on a full mix sounds different from sweeping it on a bass. The mix has content at every frequency, so you hear the corner move through it. The bass has energy in a narrow range, so for most of the sweep nothing happens, and then everything happens at once.

## What resonance does

Resonance feeds some of the filter's output back into its input. The feedback reinforces frequencies at the corner and cancels a little either side, which is why a resonant low-pass sounds thinner as well as louder at the peak. Push the feedback far enough and the loop sustains itself: the filter oscillates and produces a sine-like tone at the cutoff, playable from the cutoff knob, and loud enough to hurt if you get there by accident.

The peak is the reason resonance is musical. A sweep with no resonance is a tone control moving. A sweep with resonance has a voice riding on top of it, and that voice is what your ear follows through a build.

## How to use them

- Set the resonance to zero and find the cutoff that removes what you do not want.

- Choose the slope: gentle to shade the sound, steep to make the filter an event.

- Raise resonance until the corner starts to sing, then back off a little.

- Narrow Q for a whistle, wide Q for a body that moves with the cutoff.

- Compensate the level: resonance adds at the peak and the meters will lie to you.

- Automate the cutoff over bars rather than beats for builds, over beats for grooves.

- Check on small speakers, where a resonant peak at 3 kHz goes from character to earache.

F(ilter)12 splits those two ideas into three controls: RESO decides how much resonance, Q decides how narrow it is, and Q SHAPE decides what shape the peaks make.

## Where it costs you

Resonance is boost. Every dB of peak is level you have to give back somewhere, and a resonant filter on a bus will push a limiter around in ways that have nothing to do with the music. High resonance also gets close to self-oscillation faster than you expect on a steep slope, and a filter that rings on a quiet passage will keep ringing after the passage stops.

The other cost is familiarity. A resonant sweep is one of the most recognizable gestures in electronic music, and if you use it on every transition the listener hears the gesture instead of the change. How to make a filter sweep covers the timing that keeps it from getting tired.

## Questions people ask

### What is resonance in a filter?

A boost at the cutoff frequency created by feeding the filter's output back to its input. It emphasizes the edge of the filter, and at high settings it can sustain itself and produce a tone on its own.

### What is cutoff frequency in a filter?

The frequency where the filter starts to take effect, defined as the point where the output is about 3 dB below the passband. Past it, level falls at the rate set by the slope.

### Is the cutoff frequency always at 3 dB?

The 3 dB point is the usual convention, but it is a measurement choice rather than a law, and some designs are specified differently. With resonance turned up the response at the marked cutoff can be well above the passband instead of below it, so the number stops describing what you hear.

### What is the difference between resonance and Q?

Resonance is how much the filter boosts at the corner; Q is how narrow that boost is. Some instruments give you one control that moves both, which is why the two words often get used for the same knob.

## What F(ilter)12 does

F(ilter)12 is a filter with a lo-fi section in front of it. POSITION sets where in the spectrum the filter sits, and the further it works, the more it drives and the more it sings, built in rather than dialed in. There are five shapes: low-pass, high-pass, band-pass, notch, and a morph that runs from a closing low-pass, through untouched in the middle, to an opening high-pass. SLOPE runs from 18 dB per octave up to a wall where almost nothing gets past. RESO decides how much resonance and Q decides how narrow, while Q SHAPE puts peaks and dips at fixed distances from wherever the filter is, so the whole shape travels with the knob.

Stop wiggling. You now know which one is about to make the hollow whistle.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
