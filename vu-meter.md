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

- **+4 dBu in volts**: 0.7746 × 104/20 = 1.228 V RMS

- **0 VU in a DAW**: your choice: −18 or −20 dBFS are the usual picks

- **Peak meter**: shows the highest sample: use it for safety

- **VU meter**: shows apparent loudness: use it for balance

- **Gap between them**: that is your crest factor

- **Loudness meter**: the one for delivery targets: neither of the above

**BEEF at 8.** The reference you A/B against.

## Three hundred milliseconds, in numbers

The whole instrument is that one figure. The specification says a steady 1 kHz tone switched on drives the needle to 99 percent of its final reading in 300 ms, and that it falls back on roughly the same schedule. Everything people love and everything people get wrong about VU metering comes out of that sentence.

Model the movement as a single-pole average and you can put a time constant on it. Reaching 99 percent takes ln(100) time constants, and ln(100) = 4.605, so the constant is 300 ÷ 4.605 = 65 ms. That number is the useful one, because it tells you how much of a sound the meter has actually heard by the time the sound is over. A burst of length T lifts the needle to 1 − e−T/65 of its steady value:

- **5 ms burst**: 7.4% of true level — reads 22.6 dB low

- **10 ms**: 14.2% — reads 16.9 dB low

- **20 ms**: 26.4% — reads 11.6 dB low

- **50 ms**: 53.6% — reads 5.4 dB low

- **100 ms**: 78.5% — reads 2.1 dB low

- **200 ms**: 95.4% — reads 0.4 dB low

- **300 ms**: 99.0% — reads 0.1 dB low

A snare [transient](https://gazillionindustries.com/what-is-a-transient/) is finished inside 10 ms. Read the second row again. The meter is not failing at that moment; it is doing the job it was built for, which is to ignore an event too short for anyone to hear as loudness.

One honest caveat on the table. A real moving-coil movement is a damped second-order system that overshoots by a percent or so on the way up, so the exact figures sit a fraction of a decibel off the single-pole model above. The shape is right, and the shape is what decides how you use the thing.

## Peak and average are different questions

A peak meter answers "will this clip", which is a technical question with a yes or no answer. An average meter answers "how loud is this", which is what your ear actually cares about. The two can disagree wildly: a sharp snare can peak near the ceiling and read modestly on a VU, while a distorted bass can sit well below the ceiling and read high.

That gap is not a nuisance, it is information. The difference between what a peak meter shows and what an average meter shows is the [crest factor](https://gazillionindustries.com/crest-factor/), which is the single number that predicts how loud a track can eventually get.

Three meters, three questions, and they do not substitute for one another. The peak meter guards the ceiling and tells you nothing about loudness. The needle reports loudness and tells you nothing about the ceiling. A loudness meter reading in LUFS is the one that answers what a streaming platform will do to your master. Keeping all three up costs one screen and settles arguments that otherwise run for an hour. See [true peak](https://gazillionindustries.com/true-peak/) for the reason the first of those three is itself an approximation, and [headroom](https://gazillionindustries.com/headroom-in-mixing/) for what you are supposed to leave above it.

## What the needle actually averages

A moving-coil meter responds to the average of the rectified waveform, which is the mean of the absolute value. That is a different quantity from RMS, and the scale is printed so the two agree on exactly one waveform: a sine.

Take a sine of amplitude A. Its mean absolute value is 2A/π = 0.6366A. Its RMS is A/√2 = 0.7071A. The ratio, 0.7071 ÷ 0.6366 = 1.1107, is the form factor, and it is baked into where the numbers are painted. Feed the meter a sine and it reads true RMS. Feed it anything else and the assumption quietly breaks.

- **Square wave.** Mean absolute value A, true RMS also A. The scale multiplies by 1.1107 anyway, so the meter reads 20 log10(1.1107) = **0.91 dB high**.

- **Triangle wave.** Mean absolute value 0.5A, true RMS A/√3 = 0.5774A. The meter shows 1.1107 × 0.5A = 0.5554A, which is **0.34 dB low**.

Under a decibel across the textbook extremes, and smaller than that on music. It will never ruin a balance. It is worth knowing anyway, because "VU meter" and "RMS meter" get used as synonyms and they describe two instruments that agree on one input and drift apart on every other one.

## What to use it for

- **Balancing.** Set relative levels with an average meter, because that is closer to what the listener hears.

- **Gain staging into analog-modeled plugins.** Many are calibrated so that a given level hits their sweet spot. A VU meter is how you find it.

- **Spotting over-compression.** If the needle stops moving, the dynamics are gone.

- **Comparing to a reference.** Level-match by average, not by peak, or the comparison is meaningless.

- **Catching a gain mistake.** A doubled plugin or a fader nudged in the dark usually shows up as the needle sitting a suspiciously round 3 or 6 dB from where it lived yesterday. A peak meter buries that in transient scatter.

- **Timing a compressor.** Put the needle next to the gain reduction display and you can see whether the release lets the level recover between hits, or whether the second hit arrives while the first is still being held down.

- **Never for safety.** A VU meter will happily sit at zero while your peaks go over. Keep a peak meter on the master for that.

[BEEFY](https://gazillionindustries.com/beefy.html) has input and output clip lights for the safety question, and JUICE for setting how hard you feed it — which is exactly the decision an average meter helps you make.

**SOFT CLIP** as the out stage, BEEF at 62.

## One loop, two meters, measured

Arguing about this in the abstract is cheap, so here it is on two files already on this site. Both are the same eleven and a half seconds: one untouched, one run through a worn tape setting. Each was decoded to mono at 48 kHz, full-wave rectified, smoothed with a single-pole filter at the 65 ms constant derived above, scaled by the 1.1107 form factor, and read at its highest deflection, with 0 VU aligned to −18 dBFS.

- **Dry — sample peak**: −8.82 dBFS

- **Dry — needle**: −19.25 dBFS, which is −1.25 VU

- **Worn — sample peak**: −10.13 dBFS

- **Worn — needle**: −19.70 dBFS, which is −1.70 VU

- **Peak meter says**: they are 1.32 dB apart

- **Needle says**: they are 0.45 dB apart

Level-match those two by peak and you have set up the comparison 0.87 dB wrong, in favor of the processed one. That is comfortably enough to decide an A/B all by itself, and it is how a plugin gets credited with an improvement it did not make. The peak-to-needle gap is 10.44 dB on the dry file and 9.57 dB on the worn one, and the difference between those two numbers is the [crest factor](https://gazillionindustries.com/crest-factor/) the processing removed.

Same source, same length. Listen for how little the apparent level moves next to how much the peak does.

- **Dry** — no processing — peak −8.82 dBFS, needle −1.25 VU — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Worn deck** — age 35, hiss 45, drive 30, wow 40 — peak −10.13 dBFS, needle −1.70 VU — https://gazillionindustries.com/tripleog/tog-aged.m4a

Rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. Meter figures computed from those two files.

**The whole argument on one panel.** A slow needle for loudness, and a separate lamp for the peaks it cannot see.

## The calibration question

The needle position that reads zero corresponds to a specific voltage in hardware, and professional equipment has long used a convention where 0 VU lines up with +4 dBu. In a DAW there is no voltage, so plugin VU meters let you choose what digital level zero corresponds to. A common working choice is somewhere around −18 dBFS, which leaves generous headroom above and puts typical material in a sensible place.

The number matters less than picking one and keeping it, because the whole value of the meter is consistency between sessions.

It is worth seeing what each choice buys you, though, since the arithmetic is one line. A sine reading 0 VU has a sample peak 3.01 dB above its RMS. So with zero set at −18 dBFS, that tone peaks at −14.99 dBFS and you have 15 dB of room above the needle's zero. Set zero at −20 dBFS and you have 17 dB. Set it at −14 dBFS and you have 11. Nothing about the music changes; only where zero is painted on the dial.

One trap that catches people on the first try. Test oscillators are usually marked in peak amplitude, not RMS. Dial up "−18 dBFS" on a peak-marked oscillator and you get a tone whose RMS is −21 dBFS, and a needle sitting three decibels shy of zero for no reason you can see. For a −18 dBFS RMS sine, set the oscillator to **−15.0 dBFS peak**.

For the record on the hardware side: 0 dBu is 0.7746 V RMS, so +4 dBu is 0.7746 × 1.5849 = 1.228 V. Consumer gear aligned to −10 dBV sits at 0.316 V, which is 20 log10(1.228 ÷ 0.316) = 11.8 dB lower. That single figure explains most of the level mismatches between a rack and a hi-fi input.

## Calibrate yours in five minutes

- Insert the meter last on the master, after every other processor.

- Set its reference to −18 dBFS and write that number down somewhere permanent.

- On an empty track, generate a 1 kHz sine at −15.0 dBFS peak. That is −18 dBFS RMS.

- Confirm the needle rests at 0 VU. If it does not, the reference control is not doing what you assumed.

- Mute the tone and play the loudest eight bars of the mix.

- Note the highest needle reading and the highest sample-peak reading. Subtract one from the other.

- That difference is your crest factor. Use the same reference in every session from now on.

Step six is the one worth repeating monthly. A crest factor that keeps shrinking across sessions is a record of your own habits, and usually of a [limiter](https://gazillionindustries.com/how-to-use-a-limiter/) being asked to do work that belongs earlier in the chain.

## Pre-fader, post-fader, and which meter you are reading

The one thing that genuinely differs between hosts is where the meter is tapped, and it will mislead you before anything else does. A meter in a plugin slot reads what arrives at that slot: everything before it, nothing after. A channel-strip meter might be tapped before or after the fader, and before or after the inserts, and DAWs do not agree with each other.

Two tests settle it in your own session, permanently:

- Loop a bar and pull the channel fader down 6 dB. If the meter follows, it is post-fader. If it sits still, it is pre-fader and it is reporting on your inserts, not on what leaves the channel.

- Bypass the last insert. If the meter moves, it is post-insert.

The consequence is concrete. On a pre-fader meter, two channels can both read a tidy 0 VU and still arrive at the bus 6 dB apart, because the faders are doing the work the meter cannot see. Every balance you set that way is a balance you set blind. More on the whole chain in [gain staging](https://gazillionindustries.com/gain-staging/).

The same logic makes the meter a tool rather than a decoration when you are setting a nonlinear plugin. Put one average meter before it and one after. The first tells you what you are feeding the thing; the second tells you what came out. The difference between those two readings, watched while you turn a drive control, is the most honest picture of [saturation](https://gazillionindustries.com/saturation-explained/) you can get without a scope.

## Three clocks: peak, quasi-peak and loudness

Every meter is an averaging window with a length, and the length is the whole personality of the instrument.

- **Sample peak.** No window at all. One sample, the highest one.

- **Quasi-peak meters.** Integrate over roughly 5 to 10 ms depending on the standard, so they catch nearly every transient without reacting to a single stray sample.

- **VU.** The exponential average above, 65 ms.

- **Momentary loudness.** A 400 ms rectangular window, frequency weighted.

- **Short-term loudness.** 3 seconds of the same thing.

- **Integrated loudness.** The whole program, with quiet sections gated out.

Here is the part that surprises people. An exponential average lags its input by about one time constant, so 65 ms. A rectangular window lags by half its length, so a 400 ms momentary reading lags by 200 ms. 200 ÷ 65 = 3.07, which means the 1939 needle reacts about three times faster than the modern loudness reading everyone treats as the responsive one.

The other difference matters more in practice. Loudness meters are frequency weighted, with a high-pass and a high shelf that deliberately discount low end, because that is closer to how hearing works. A VU meter is unweighted and counts a 40 Hz tone exactly as hard as a 1 kHz one. So two mixes sitting at the same 0 VU can land in different places on a loudness meter, and the bass-heavy one is the one that vanishes on a laptop. [Equal-loudness behavior](https://gazillionindustries.com/fletcher-munson/) is the reason, and [bass on small speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) is the practical fallout.

## Four ways the needle misleads you, and what each sounds like

- **Pinned and still.** Over-compressed. It sounds like the loop stopped breathing: the snare no longer announces itself, and nothing gets quieter to let anything else through. On a phone it will read as louder and less interesting at the same time.

- **Low needle, flickering peak lamp.** A high crest factor. It sounds clean and frustratingly quiet, and every attempt to raise it runs into [clipping](https://gazillionindustries.com/what-is-clipping/) long before it gets loud. The fix lives in the peaks, not the fader.

- **Healthy needle, dull mix.** Unweighted metering being fooled by sub energy. It sounds large in the room and absent everywhere else, because the needle is counting frequencies most playback never reproduces.

- **Needle where you want it, nothing hits.** You reached the average by flattening what got you there. It sounds polite. Every drum arrives, none of them arrives first. This is the failure that made [soft clipping](https://gazillionindustries.com/soft-clipping-explained/) popular, because shearing the top few samples costs far less than squashing the whole envelope.

## The phone speaker check

The needle cannot hear a phone. A handset driver rolls off steeply below a few hundred hertz, and exactly where depends on the model, so a large share of what the VU is dutifully counting is energy that most of your listeners will never receive. The meter is not wrong; it is answering a question about the signal rather than about the delivery.

So finish the way you would finish anything else. Bounce the loop, send it to yourself, play it on the phone at arm's length on a table. If the balance you set by needle falls apart there, the needle was measuring energy the listener does not get, and the mix needs the weight moved up into the range the speaker can actually produce. Do it before the [master](https://gazillionindustries.com/how-to-master-a-beat/), not after.

## Where it costs you

Used alone it is dangerous: slow ballistics mean it simply does not show short peaks, and a mix balanced only by VU can be clipping constantly without the needle ever admitting it. It is also an old standard that predates loudness measurement as we now understand it, so for delivery targets a loudness meter reading in LUFS is the correct tool. Use all three for the three different questions.

It costs you on short material too. Audition a kick one-shot on its own and you are asking a meter with a 65 ms constant to report on an event that may be over in 50, which the table above says will read about 5.4 dB low. Nothing is broken. The instrument is simply being asked a question it was designed not to answer, and the answer you get back is a number you should not write down.

The last cost is attention, and it is the real one. A needle is hypnotic, and two extra meters are two more things to look at instead of listening. Set your levels with it, then stop watching it. The best use of a VU meter is the ten seconds at the start of a session when it tells you where you are, and the ten seconds at the end when it tells you whether you drifted.

## Questions people ask

### What is a VU meter used for?

Judging apparent loudness and setting relative balance, because it reads average level with slow ballistics rather than catching instantaneous peaks.

### Is VU the same as dB?

No. The decibel is a ratio; VU is a specific meter standard with defined ballistics and a defined reference point. A reading of 0 VU corresponds to a particular level, conventionally +4 dBu in professional analog equipment.

### What is the difference between peak and RMS?

Peak is the highest instantaneous value of the waveform. RMS is a mathematical average of its energy over a window of time, which correlates far better with perceived loudness. A VU meter is effectively showing you something close to the second one.

### What should a VU meter read when mixing?

Aim for the loudest sections to sit around zero, with the needle moving rather than pinned. If it never moves, you have compressed the life out of it; if it never reaches zero, you have room you are not using.

### Is 0 VU the same as 0 dBFS?

No, and treating them as the same is the fastest way to a distorted master. 0 dBFS is the digital ceiling and there is nothing above it. 0 VU is a reference mark you place wherever you like, typically 18 or 20 dB below that ceiling, so that the peaks the needle cannot see still have somewhere to go.

### Should 0 VU be −18 or −20 dBFS?

Either works. −18 dBFS leaves 15 dB of room above a 0 VU sine, −20 dBFS leaves 17. Pick the one your busiest material sits comfortably under and then never change it, because the meter earns its keep through session-to-session consistency rather than through the specific number.

### Why does my VU meter never reach zero?

Usually the reference is set lower than you think, or the meter is tapped pre-fader on a channel you have pulled down. Check the reference first, then run the fader test: move the fader 6 dB and see whether the needle follows.

### What is the response time of a VU meter?

It reaches 99 percent of a steady reading in about 300 ms, which corresponds to a single-pole time constant of roughly 65 ms. A 10 ms burst therefore lifts the needle to only about 14 percent of its true level, which is 16.9 dB low.

### Why does my VU meter read lower than my peak meter?

Because it is answering a different question, and the difference between the two readings is the crest factor of the material. A gap of 10 dB or more is normal for drums. A gap of 4 dB or less means something in the chain has already flattened the peaks considerably.

### Is a VU meter the same as an RMS meter?

Not quite. A VU movement responds to the mean of the rectified signal and its scale is multiplied by 1.1107 so that the reading matches true RMS on a sine wave. On a square wave the same scale reads 0.91 dB high; on a triangle, 0.34 dB low. The error is under a decibel and irrelevant to balancing, but the two instruments are not identical.

### What is the difference between VU and LUFS?

LUFS is frequency weighted and defined by a modern standard with fixed measurement windows, which makes it the right tool for delivery targets. VU is unweighted with a 65 ms time constant, which makes it the right tool for balancing while you work. The needle is also about three times quicker to react than a 400 ms momentary loudness reading.

### Do I still need a VU meter if I have a loudness meter?

They answer different questions, so most people keep both. Use the loudness meter to decide where the finished track lands. Use the needle while you are moving faders, because it responds fast enough to show you the effect of a change in the moment.

### Can a VU meter clip?

The meter itself cannot, but your signal can while the needle sits well under zero. That is the entire reason a peak indicator lives next to the dial on most hardware and most plugins. Keep a [true peak](https://gazillionindustries.com/true-peak/) reading on the master and let the needle get on with loudness.

### Where should I put a VU meter in the chain?

Wherever you need the answer. Last on the master to judge the finished level, and in pairs either side of a nonlinear plugin when you are setting its drive. A meter reads only what reaches its own slot, so its position is part of the measurement.

### Why do VU meters bounce less on modern music?

Because the material arrives with its crest factor already reduced. Heavily compressed and clipped masters have very little difference between peak and average, so there is little for a slow needle to swing across. A still needle on someone else's record is a measurement of that record, not of your meter.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. **JUICE** sets the level going in, which is the control an average meter helps you set; **BEEF** brings weight, density and loudness; **COOK** changes the color and bite. **SOFT CLIP** opens switched on and takes care of the initial gain staging, so the clipping finds the sound without you hunting for a magic input level, and the input and output clip lights cover the safety question a VU meter cannot.

Saturation and soft clipping both work by closing the gap between peak and average, which is why the needle is the meter that shows the work happening. Set it with two readings. Watch an average meter going in and set JUICE so the needle lands where you decided it lives. Watch a peak meter coming out and keep the ceiling honest. Then turn BEEF and pay attention to the moment the needle stops climbing while the distortion keeps arriving, because that is the point where you are spending character and getting no loudness for it. **LIMIT** is there as the alternative output stage when you want the peaks caught rather than rounded.

Too slow to protect you, and right about the only thing that matters.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
