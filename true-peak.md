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

- **Louder than −14 LUFS**: −2 dBTP, which is what Spotify's own artist pages ask for

- **Worst offenders**: heavily limited material and bright transients

- **Worst case, a tone**: 3.01 dB hidden, at a quarter of the sample rate

**LIMIT** instead, everything else identical.

## What is actually happening

Digital audio stores a series of points. To play it back, a converter reconstructs a smooth waveform that passes through those points, and between any two of them the curve can rise above both. If two consecutive samples sit just under full scale, the curve joining them may go over it. The file is legal, the meter is honest, and the analog signal clips anyway.

A true-peak meter estimates that by oversampling: it calculates extra points between the real ones and reports the highest value it finds. The broadcast standard specifies at least four times oversampling for this measurement, which is why a true-peak reading is always equal to or higher than the sample-peak reading, never lower.

Encoding makes it worse. Lossy formats do not reproduce the waveform exactly, and the decoded result can peak higher than the file you uploaded. That is the mechanism behind the specific complaint that a master sounded fine locally and crunchy on a streaming service.

## The arithmetic, and how much is hiding

You can calculate the worst case exactly, and it is worth doing once because the answer explains every rule of thumb you have been handed. Take a tone at frequency f, sampled at rate fs, positioned so the crest of the wave falls exactly halfway between two samples. Those two samples sit a phase angle of πf / fs either side of the crest, so each reads A cos(πf / fs) where A is the real peak. The overshoot your meter misses is therefore −20 log₁₀ cos(πf / fs).

Run it at 44.1 kHz. At 1 kHz the angle is 4.08°, the cosine is 0.99746, and the hidden overshoot is 0.02 dB — nothing. At 5 kHz it is 0.56 dB. At 8 kHz, 1.49 dB. At 11,025 Hz, exactly a quarter of the sample rate, the samples land at ±0.7071 of the peak and the overshoot is 20 log₁₀√2 = 3.01 dB. At 15 kHz it is 6.35 dB.

- **1 kHz**: 0.02 dB hidden at 44.1 kHz — 0.005 dB at 96 kHz

- **5 kHz**: 0.56 dB — 0.12 dB at 96 kHz

- **8 kHz**: 1.49 dB — 0.30 dB at 96 kHz

- **11,025 Hz**: 3.01 dB — 0.58 dB at 96 kHz

- **15 kHz**: 6.35 dB — 1.09 dB at 96 kHz

- **16 kHz**: 7.58 dB — 1.25 dB at 96 kHz

Two things fall out of that column. The first is that intersample peaks are a top-end problem and only a top-end problem: below about 2 kHz there is less than a tenth of a decibel in it, which is why a bass-heavy, dark master rarely surprises anybody. The second is that the number has no ceiling you can quote. There is no fixed amount of headroom that covers intersample peaks in the abstract. What makes −1 dBTP work is that music has very little energy sitting at 15 kHz with a flat top on it.

The same arithmetic grades the meter doing the measuring. A meter oversampling four times is looking at points 1 / 4fs apart, so its own worst-case miss is −20 log₁₀ cos(πf / 4fs): 0.36 dB for content at 16 kHz, 0.56 dB at 20 kHz, 0.69 dB right at the Nyquist limit. Eight times oversampling takes those to 0.09, 0.14 and 0.17 dB. The four-times minimum is a floor, not a promise, and the gap between a four-times meter and the truth is most of the reason the recommended ceiling is a whole decibel rather than three tenths of one. [Oversampling in audio plugins](https://gazillionindustries.com/oversampling/) covers the same mechanism where it does the other job.

## What to do about it

- Use a limiter with true-peak detection and turn it on.

- Set the ceiling to −1 dBTP for anything that will be encoded or streamed.

- Set it to −2 dBTP if the master is louder than −14 LUFS integrated, which most rap and beat masters are.

- For a file that will only ever be played as-is, −0.3 to −0.5 dBTP is defensible.

- Check the bounced file with a true-peak meter rather than trusting the limiter's own display.

- If you are over, do not simply pull the output down: find the transient causing it and deal with it upstream, with a clipper or with saturation.

- Turn off any normalize option in your export dialog before you bounce, or it will rescale the file after the limiter has finished and hand you a different peak than the one you approved.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and its SOFT CLIP is the upstream answer: round the peaks before the limiter ever sees them.

**BEEF at 96.** Past where most settings want to live.

## What clipping does to the number, measured

Here is the part nobody tells you, and it is easy to demonstrate. A clipper working on the samples does not remove intersample peaks. It can make them considerably worse.

For this page I built a two-bar loop at 90 BPM: a 55 Hz kick with a 90 ms decay constant and a 3 ms click, a snare of noise plus a 190 Hz body, eighth-note hats made of noise between 4 kHz and 18 kHz. The whole thing was band-limited at 18 kHz and normalized so the loudest sample sat exactly at 0 dBFS. True peak was measured by zero-padding the spectrum out to thirty-two times the rate, which is accurate to well under a hundredth of a decibel. Undisturbed, that loop reads **+0.26 dBTP** with a sample peak of 0.00 dBFS. A quarter of a decibel over, and nothing has been done to it yet.

Then hard clip it at 44.1 kHz and renormalize each result so the sample peak is again exactly 0 dBFS.

- **No clipping**: +0.26 dBTP

- **+1 dB into the clipper**: +0.84 dBTP

- **+2 dB**: +1.88 dBTP

- **+3 dB**: +2.64 dBTP

- **+6 dB**: +4.08 dBTP

Read that again with the sample peaks in mind: every one of those files reads 0.0 dBFS on an ordinary peak meter, and their real peaks are four decibels apart. The clipper shears every sample above the line, and the reconstruction between those flattened samples bulges right back up, because flattening the tops is exactly the operation that puts energy up where the overshoot lives.

The same loop with the hats rolled off above 12 kHz reached only **+1.40 dBTP** at that same +6 dB of clipping, against +4.08 for the bright one. Top end is where this lives, so a bright master and a dark master clipped by the same amount are not the same risk.

And the arithmetic of trying to fix it with the output fader alone is brutal, because pulling the fader down moves true peak and sample peak together. To get the +3 dB version under −1 dBTP you would have to sit at −3.64 dBFS sample peak; the +6 dB version needs −5.08 dBFS. That is the case for a limiter that detects true peak and reduces gain only at the offending moments, instead of taxing the whole record for four bad milliseconds. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) and [how to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) cover the two halves of that chain.

## Clip at a higher rate and most of it goes away

Take the identical loop and apply the identical +3 dB of hard clipping, but do the clipping at a higher internal rate, band-limit the result and bring it back to 44.1 kHz. Normalized so every version has the same 0 dBFS sample peak:

- **Clipped at 44.1 kHz**: +2.64 dBTP

- **Clipped at 88.2 kHz**: +0.51 dBTP

- **Clipped at 176.4 kHz**: +0.42 dBTP

- **Clipped at 352.8 kHz**: +0.44 dBTP

Two point two decibels of hidden peak removed by nothing but doing the arithmetic at a finer spacing, and the curve flattens after the first doubling. That is the whole argument for an oversampled clipping stage, stated in one number, and it is also the answer to the producer who swears their master is fine because the meter reads zero. Working at 96 kHz for the whole session gets you the same benefit for free: the column in the table above shows the same content hiding 0.58 dB at 96 kHz where it hid 3.01 dB at 44.1.

## Where the decibel goes

People resist the −1 dBTP ceiling because it looks like giving away a decibel of loudness. It is not, for two reasons. Streaming services normalize playback anyway, so the absolute ceiling is not what determines how loud your track sounds next to anything else. And the decibel you are protecting buys you a clean decode instead of intermittent distortion on exactly the loudest, most important moments of the record.

If you want the loudness conversation rather than the ceiling conversation, that is [how loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/) and [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/).

## What the services do with the number

This part is published, so you can stop guessing. Spotify's artist support pages state that playback is adjusted to −14 dB LUFS according to the ITU 1770 standard, applied at playback rather than baked into your file. Louder masters get negative gain, which their page is explicit costs you no extra distortion. Quieter masters get positive gain, and here is where true peak reaches into your pocket: the page says they consider the headroom of the track and leave 1 dB of headroom for lossy encodings, and gives the example of a track at −20 LUFS with a true-peak maximum of −5 dBFS being lifted only as far as −16 LUFS rather than the full −14.

Their mastering guidance on the same page asks for −14 dB integrated LUFS, true peak kept below −1 dBTP, and — the line people miss — true peak below −2 dB if the master is louder than −14 LUFS, because louder tracks are more susceptible to extra distortion when encoded. Almost every rap and beat master is louder than −14 LUFS. If yours is, the number on this page is two, not one.

The page also documents the Loud listening setting at −11 LUFS, with a limiter engaged at −1 dB on sample values, 5 ms attack and 100 ms decay, applied regardless of your true peak. Somebody else's limiter, on your record, in a listening mode you do not control. Leaving room is cheaper than arguing with it.

## Check it in your own session

You do not need to take any of this on faith, and you do not need a specific plugin to test it. Sample-rate conversion is a true-peak meter you already own.

- Bounce the master at its native rate as a 24-bit WAV, with every normalize option off.

- Note the sample peak of that file.

- Open a copy in an editor and convert the sample rate to eight times the original: 352.8 kHz from 44.1, 384 kHz from 48.

- Read the sample peak of the converted file. That is the true peak, accurate to within 0.09 dB for content up to 16 kHz.

- Subtract step 2 from step 4. The difference is your overshoot.

- Run the same file past your own meter. If it reports the step 4 number, it is measuring true peak. If it reports the step 2 number, it is not, and every ceiling you have ever set with it was a sample-peak ceiling.

Four times conversion works too and is quicker, but it under-reads by up to 0.36 dB for content at 16 kHz and 0.56 dB at 20 kHz, which is enough to matter on the exact material you would be testing. Do the eight.

## Where it sits in the chain

True-peak limiting is the last processing decision on the master, and the order of the handful of things around it is not arbitrary.

Sample-rate conversion goes before the limiter, never after. Converting a file changes the samples, so a file that was pinned at −1 dBTP at 48 kHz is at some other number once it has been converted to 44.1. If you owe a 44.1 kHz delivery, convert and then limit, and check the converted file.

Dither goes after the limiter and cannot hurt you. A 16-bit least significant bit is 1 / 32768, which is −90.31 dBFS. Add triangular dither at two of those peak to peak on top of a peak sitting at −1 dBFS and the peak moves by 0.0003 dB. It is not a rounding error, it is four orders of magnitude below one. [Dithering explained](https://gazillionindustries.com/dithering/) has the rest of that decision.

Anything that changes the waveform goes before the true-peak stage: EQ, mid/side width, a final tilt, a fade. Put a half-decibel shelf after the limiter and you have invalidated the measurement, quietly, in a way no meter in the session will flag because most master meters are reading the bus, not the file.

And the cheapest decibel of all is the one you never had to catch. Lowering [crest factor](https://gazillionindustries.com/crest-factor/) with saturation upstream, or moving a kick and an 808 off the same sixteenth, gets you loudness without asking the last stage to perform a rescue. [Headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/) and [how to master a beat](https://gazillionindustries.com/how-to-master-a-beat/) cover the rest of the order.

## What each failure sounds like

Four different problems get described with the same word, and they are distinguishable by ear if you know what you are listening for.

**Converter clipping** is a short dry crackle, present only on the loudest hits, and its signature is that it moves. The same file from the same folder crackles on one device and plays clean on another, because the two converters have different amounts of internal headroom. If a client hears it and you cannot, that is this.

**Encoder overshoot** is the same crackle that only exists after the upload. Local file clean, streamed version crunchy on hats and snare tops. The tell is that it appears on the brightest, shortest events and never on the bass.

**Over-tight true-peak limiting** sounds like dullness rather than distortion. The limiter is catching peaks that are not in the samples, so it pulls down earlier and slightly harder than the visible waveform suggests it should, and the first thing you lose is hat and cymbal edge. If switching the true-peak option on made the master duller rather than quieter, you were leaning on the limiter for gain you should have taken upstream.

**A ceiling set too low** sounds like nothing at all. That is the point. One decibel of peak on a normalized platform is a decibel the platform was going to take back anyway.

## Where it costs you

True-peak limiting is more computationally expensive and, at aggressive settings, can sound different from sample-peak limiting: the limiter is catching peaks that are not in the samples, so it pulls down slightly more and slightly earlier. On heavily limited material that is audible. The fix is the same as always, which is to do less of the work in the limiter.

There is a second cost worth naming. Doing this properly means bouncing, converting, measuring and sometimes going back, which is minutes per master rather than seconds, and it is the least interesting work in the building. The trade is that the failure it prevents is the one you cannot hear on your own system and will only learn about from somebody else, weeks later, about a record you have already stopped thinking about.

## Questions people ask

### What does true peak mean?

The highest level the analog waveform reaches after conversion, including the points between samples. It is estimated by oversampling and reported in dBTP.

### What true peak should I master to?

−1 dBTP for anything that will be encoded or streamed. Tighter ceilings are fine for uncompressed files that will be played directly.

### What is the difference between sample peak and true peak?

Sample peak is the largest value stored in the file. True peak is the largest value of the waveform the converter reconstructs from those values, which can be higher. The difference is typically a fraction of a decibel and can be more on dense, heavily limited material.

### What is the difference between LUFS and true peak?

LUFS measures perceived loudness over time, which is what streaming normalization responds to. True peak measures the single highest instantaneous level, which is what causes clipping. You need to satisfy both, and they are unrelated numbers.

### What does dBTP stand for?

Decibels true peak. Same scale as dBFS, with 0 meaning full scale, but measured on the reconstructed waveform instead of on the stored samples.

### Is −1 dBTP too quiet?

No. Playback normalization sets a single gain offset from your integrated LUFS, and your peak ceiling has no part in that calculation unless it is so low that a quiet master cannot be lifted all the way. On a loud master, the decibel is invisible.

### Should I use −1 dBTP or −0.1 dBTP?

−0.1 dBTP survives nothing. A four-times meter can under-read by up to 0.56 dB on content at 20 kHz, and encoders add their own overshoot on top of that, so a tenth of a decibel is inside the measurement error before the file has left your machine. Use −1 dBTP, or −2 if the master is louder than −14 LUFS.

### Can true peak ever be lower than sample peak?

No. A true-peak meter reports the highest value it finds among the real samples and the interpolated ones, so its answer is the sample peak or something above it. If a meter shows you a lower number, it is measuring something else, such as short-term loudness.

### Why does my master distort after uploading?

Three candidates, in order of likelihood: the file was over 0 dBTP before it left, so the encoder had nothing to work with; the file was near 0 dBTP and the encoder's own overshoot took it over; or the playback setting on the listener's end applied gain. The first two are fixed by the ceiling. Bounce, convert to eight times the rate, and read the peak before you argue with anybody.

### Does a higher sample rate fix intersample peaks?

It shrinks them a lot. The same tone at 11,025 Hz hides 3.01 dB at 44.1 kHz and 0.58 dB at 96 kHz. But the delivery file is usually 44.1 or 48, and the conversion down brings the problem back, so a high session rate helps the processing rather than the delivery.

### Do I need true-peak limiting on individual tracks?

No. Intersample peaks only cause a problem at the point of conversion or encoding, and inside a session everything is running in floating point, where going over full scale costs nothing until something writes a file. Watch it on the master and on any stem you are handing to somebody else.

### My limiter says −1 dBTP and my meter says something else. Which is right?

Probably neither, and the difference is oversampling factor. A four-times estimate and a sixteen-times estimate of the same file legitimately differ by up to about half a decibel on bright material. Settle it offline: convert the bounced file to eight times its rate and read the sample peak, which is the answer both plugins are approximating.

### Does clipping help or hurt true peak?

Measured on the loop above, hard clipping at the file's own rate hurt it: +3 dB of clipping took a loop from +0.26 dBTP to +2.64 dBTP at the same sample peak. The same clipping done at 176.4 kHz landed at +0.42 dBTP. Clipping is still the most efficient way to lower crest factor; it just needs to happen at a finer time resolution than the file's own.

### Does true peak matter for WAV files sent to a beat store or an engineer?

For an engineer, leave real headroom and do not limit at all. For a store that will stream previews, the preview is encoded, so it matters exactly as much as anywhere else. For a file somebody will only ever play from disk, −0.3 dBTP is fine.

### Does dither push me over the ceiling?

No, by four orders of magnitude. Triangular dither at two 16-bit least significant bits peak to peak moves a −1 dBFS peak by 0.0003 dB.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, which lowers peaks before a limiter has to. **LIMIT** is the other choice, a straight-ahead way to keep the output peaks in check, and the two are separate decisions. Input and output clip lights show you both ends.

For the job on this page it sits upstream, on the drum bus or the element that is causing the overshoot, not on the master after the limiter. **JUICE** sets the level going in, **BEEF** is the weight and density, and **COOK** moves the color from rounder toward brighter and more cooked — worth watching on this particular page, since brighter is the direction that costs you true peak. It is $19, one payment, Mac and Windows, with AU, VST3 and a Mac standalone. Whatever you use for the last stage, the decibel it does not have to catch is the cheapest one on the record.

The meter was not lying. It was answering a different question from the one the converter asks.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
