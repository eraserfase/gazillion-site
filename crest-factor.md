# Crest factor

> What crest factor is, why it decides how loud a track can get at a fixed ceiling, and how compression, clipping, saturation and limiting all reduce it.

Source: https://gazillionindustries.com/crest-factor/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

There is one number that explains why a drum loop will not get as loud as a synth pad, why clipping makes things louder, and why your master stopped improving three decibels ago. Almost nobody uses it.

Crest factor is the difference between a signal's peak level and its average level, in decibels. A recording with sharp transients and quiet gaps has a high crest factor; a dense, compressed one has a low crest factor. Because the peak is what hits the ceiling and the average is what you hear as loudness, reducing crest factor is the mechanism behind every loudness tool there is: compression, clipping, saturation and limiting all do it.

## The short version

- **Definition**: peak level minus average level, in dB

- **Sine wave**: about 3 dB

- **Square wave**: 0 dB — peak and average are the same

- **Live drums**: high, often in the high teens or more

- **Loud master**: low, often single digits

- **Why it matters**: the peak sets your ceiling, the average sets your loudness

## Why it decides everything about loudness

Your output has a hard ceiling: you cannot exceed it without distortion you did not choose. What determines how loud the track sounds is not that ceiling, it is the average level underneath it. So the entire loudness question is: how much average can I get for a given peak?

A snare hit is a spike followed by almost nothing. Its peak is enormous and its average is small, so it eats the whole ceiling and delivers very little perceived loudness. A sustained distorted bass has almost no spike at all, so its average sits right under the ceiling. That is the same fact stated twice: low crest factor is loud, high crest factor is dynamic, and everything in mastering is choosing where between them to sit.

## How each tool reduces it

- Compression pulls the loud parts down over time and lets you raise everything afterward, which lowers peak relative to average.

- Clipping shears or rounds only the few samples at the top, lowering peak and barely touching average. That makes it the most efficient tool per decibel, and the most destructive if overdone.

- Saturation rounds peaks and adds harmonics, raising average while lowering peak, which is why it is the gentlest loudness tool in the box.

- Limiting catches what is left, which should be very little.

BEEFY is our saturation and loudness effect: the page describes it as squeezing some space out of the peaks, which is this article in six words.

## How to use it in practice

- Put a meter that shows peak and short-term loudness on your mix bus.

- Note the difference between them. That is roughly your crest factor.

- Compare it to a reference track you admire at the same point in the chain.

- If yours is much higher, you have headroom you are not using and a peak problem to solve.

- If yours is much lower and the reference sounds better, you have flattened it too far.

- Work on the elements with the highest crest factor first, which is almost always the drums.

## Where it costs you

Crest factor is not a quality score, and chasing a number is how records get ruined. A high crest factor on a jazz recording is the music working; a low one on a club track is the music working. The useful discipline is to know which direction you are moving and why, not to hit a target.

It is also easy to confuse with dynamic range. Crest factor is about the relationship between the peaks and the average at a moment; dynamic range in the musical sense is about how much quieter the quiet sections are than the loud ones. A record can have a low crest factor and still have a quiet intro.

## Questions people ask

### What is crest factor in audio?

The difference between the peak level and the average level of a signal, expressed in decibels. It tells you how spiky the waveform is.

### How do you calculate crest factor?

Subtract the average level from the peak level in decibels. A meter showing both peak and RMS, or peak and short-term loudness, gives you the two numbers directly.

### What is the crest factor of a sine wave?

About 3 dB. A square wave is 0 dB, because its peak and its average are the same. Anything with transients is higher.

### Does compression reduce crest factor?

Yes, and so do clipping, limiting and saturation. That is what they have in common and why all four can be used to make something louder at a fixed ceiling.

## What BEEFY does

BEEFY is our saturation and loudness effect. BEEF brings more weight, more density and more loudness as you turn it up; COOK changes the color and bite from rounder toward brighter; JUICE sets the level going in. SOFT CLIP opens switched on and takes care of the initial gain staging, bringing rounded, fuzzy edges to the loudest parts, and LIMIT holds the output peaks when you want that instead. Both are optional and both are on the panel.

One number, measurable in ten seconds, that explains the last decade of arguments about loudness.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
