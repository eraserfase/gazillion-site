# True peak

> What true peak means, why a file can read 0 dBFS and still clip on playback, how it is measured, and what ceiling to use for anything that will be encoded.

Source: https://gazillionindustries.com/true-peak/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Your limiter says the ceiling is at zero and nothing is over it. The file goes to a streaming service, gets encoded, comes back, and there is distortion on the loudest hits that was not there when you bounced it. Nothing went wrong. Your meter was measuring the wrong thing.

True peak is the highest level the waveform actually reaches once it is converted back to analog, including the parts between samples. A normal peak meter only shows you the sample values, and the reconstructed waveform passes through points higher than any individual sample, so a file that reads exactly 0 dBFS can genuinely exceed 0 when played. Set your final ceiling at −1 dBTP and the problem disappears.

## The short version

- **Sample peak**: the highest sample value in the file

- **True peak**: the highest point of the reconstructed waveform

- **Why they differ**: the real waveform passes between the samples

- **Measured by**: oversampling, at least four times, per the standard

- **Ceiling**: −1 dBTP for anything that will be encoded

- **Worst offenders**: heavily limited material and bright transients

**LIMIT** instead, everything else identical.

## What is actually happening

Digital audio stores a series of points. To play it back, a converter reconstructs a smooth waveform that passes through those points, and between any two of them the curve can rise above both. If two consecutive samples sit just under full scale, the curve joining them may go over it. The file is legal, the meter is honest, and the analog signal clips anyway.

A true-peak meter estimates that by oversampling: it calculates extra points between the real ones and reports the highest value it finds. The broadcast standard specifies at least four times oversampling for this measurement, which is why a true-peak reading is always equal to or higher than the sample-peak reading, never lower.

Encoding makes it worse. Lossy formats do not reproduce the waveform exactly, and the decoded result can peak higher than the file you uploaded. That is the mechanism behind the specific complaint that a master sounded fine locally and crunchy on a streaming service.

## What to do about it

- Use a limiter with true-peak detection and turn it on.

- Set the ceiling to −1 dBTP for anything that will be encoded or streamed.

- For a file that will only ever be played as-is, −0.3 to −0.5 dBTP is defensible.

- Check the bounced file with a true-peak meter rather than trusting the limiter's own display.

- If you are over, do not simply pull the output down: find the transient causing it and deal with it upstream, with a clipper or with saturation.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and its SOFT CLIP is the upstream answer: round the peaks before the limiter ever sees them.

**BEEF at 96.** Past where most settings want to live.

## Where the decibel goes

People resist the −1 dBTP ceiling because it looks like giving away a decibel of loudness. It is not, for two reasons. Streaming services normalize playback anyway, so the absolute ceiling is not what determines how loud your track sounds next to anything else. And the decibel you are protecting buys you a clean decode instead of intermittent distortion on exactly the loudest, most important moments of the record.

If you want the loudness conversation rather than the ceiling conversation, that is [how loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/) and [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/).

## Where it costs you

True-peak limiting is more computationally expensive and, at aggressive settings, can sound different from sample-peak limiting: the limiter is catching peaks that are not in the samples, so it pulls down slightly more and slightly earlier. On heavily limited material that is audible. The fix is the same as always, which is to do less of the work in the limiter.

## Questions people ask

### What does true peak mean?

The highest level the analog waveform reaches after conversion, including the points between samples. It is estimated by oversampling and reported in dBTP.

### What true peak should I master to?

−1 dBTP for anything that will be encoded or streamed. Tighter ceilings are fine for uncompressed files that will be played directly.

### What is the difference between sample peak and true peak?

Sample peak is the largest value stored in the file. True peak is the largest value of the waveform the converter reconstructs from those values, which can be higher. The difference is typically a fraction of a decibel and can be more on dense, heavily limited material.

### What is the difference between LUFS and true peak?

LUFS measures perceived loudness over time, which is what streaming normalization responds to. True peak measures the single highest instantaneous level, which is what causes clipping. You need to satisfy both, and they are unrelated numbers.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, which lowers peaks before a limiter has to. **LIMIT** is the other choice, a straight-ahead way to keep the output peaks in check, and the two are separate decisions. Input and output clip lights show you both ends.

The meter was not lying. It was answering a different question from the one the converter asks.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
