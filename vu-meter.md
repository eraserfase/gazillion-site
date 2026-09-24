# VU meters

> What a VU meter measures, why its slow ballistics are the point, how it differs from a peak meter, what 0 VU means, and what to use each meter for.

Source: https://gazillionindustries.com/vu-meter/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A needle that moves too slowly to show you the peaks, calibrated to a standard from the late 1930s, and still the most useful meter in a modern session. The reason is that it is wrong in exactly the same way your ears are.

A VU meter shows average level rather than peak level. It was standardized at the end of the 1930s for broadcast, and its defining characteristic is deliberately sluggish ballistics: it takes around 300 milliseconds to respond fully, so it ignores brief spikes and shows you something much closer to perceived loudness. A peak meter tells you whether you are about to clip. A VU meter tells you how loud something sounds.

## The short version

- **Reads**: average level, not peaks

- **Ballistics**: roughly 300 ms to respond: deliberately slow

- **0 VU**: in professional gear, conventionally +4 dBu

- **Peak meter**: shows the highest sample: use it for safety

- **VU meter**: shows apparent loudness: use it for balance

- **Gap between them**: that is your crest factor

**BEEF at 8.** The reference you A/B against.

## Peak and average are different questions

A peak meter answers "will this clip", which is a technical question with a yes or no answer. An average meter answers "how loud is this", which is what your ear actually cares about. The two can disagree wildly: a sharp snare can peak near the ceiling and read modestly on a VU, while a distorted bass can sit well below the ceiling and read high.

That gap is not a nuisance, it is information. The difference between what a peak meter shows and what an average meter shows is the [crest factor](https://gazillionindustries.com/crest-factor/), which is the single number that predicts how loud a track can eventually get.

## What to use it for

- **Balancing.** Set relative levels with an average meter, because that is closer to what the listener hears.

- **Gain staging into analog-modeled plugins.** Many are calibrated so that a given level hits their sweet spot. A VU meter is how you find it.

- **Spotting over-compression.** If the needle stops moving, the dynamics are gone.

- **Comparing to a reference.** Level-match by average, not by peak, or the comparison is meaningless.

- **Never for safety.** A VU meter will happily sit at zero while your peaks go over. Keep a peak meter on the master for that.

[BEEFY](https://gazillionindustries.com/beefy.html) has input and output clip lights for the safety question, and JUICE for setting how hard you feed it — which is exactly the decision an average meter helps you make.

**SOFT CLIP** as the out stage, BEEF at 62.

## The calibration question

The needle position that reads zero corresponds to a specific voltage in hardware, and professional equipment has long used a convention where 0 VU lines up with +4 dBu. In a DAW there is no voltage, so plugin VU meters let you choose what digital level zero corresponds to. A common working choice is somewhere around −18 dBFS, which leaves generous headroom above and puts typical material in a sensible place.

The number matters less than picking one and keeping it, because the whole value of the meter is consistency between sessions.

## Where it costs you

Used alone it is dangerous: slow ballistics mean it simply does not show short peaks, and a mix balanced only by VU can be clipping constantly without the needle ever admitting it. It is also an old standard that predates loudness measurement as we now understand it, so for delivery targets a loudness meter reading in LUFS is the correct tool. Use all three for the three different questions.

## Questions people ask

### What is a VU meter used for?

Judging apparent loudness and setting relative balance, because it reads average level with slow ballistics rather than catching instantaneous peaks.

### Is VU the same as dB?

No. The decibel is a ratio; VU is a specific meter standard with defined ballistics and a defined reference point. A reading of 0 VU corresponds to a particular level, conventionally +4 dBu in professional analog equipment.

### What is the difference between peak and RMS?

Peak is the highest instantaneous value of the waveform. RMS is a mathematical average of its energy over a window of time, which correlates far better with perceived loudness. A VU meter is effectively showing you something close to the second one.

### What should a VU meter read when mixing?

Aim for the loudest sections to sit around zero, with the needle moving rather than pinned. If it never moves, you have compressed the life out of it; if it never reaches zero, you have room you are not using.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. **JUICE** sets the level going in, which is the control an average meter helps you set; **BEEF** brings weight, density and loudness; **COOK** changes the color and bite. **SOFT CLIP** opens switched on and takes care of the initial gain staging, so the clipping finds the sound without you hunting for a magic input level, and the input and output clip lights cover the safety question a VU meter cannot.

Too slow to protect you, and right about the only thing that matters.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
