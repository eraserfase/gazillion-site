# Phase cancellation

> Why two versions of one sound cancel each other, the difference between polarity and phase, what comb filtering actually is, and how to find and fix it.

Source: https://gazillionindustries.com/phase-cancellation/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Two microphones on one snare drum, both sounding good on their own, and when you put the faders up the drum gets smaller. Nothing is broken. You are listening to arithmetic.

Phase cancellation happens when two versions of the same sound arrive at different times and partially cancel each other. Where the waveforms are opposed they subtract, and the result is thinner than either source alone. The complete case is polarity inversion, where two identical signals cancel to silence. The common case is a small time offset, which does not cancel everything but removes a regular series of frequencies, producing the hollow sound engineers call comb filtering.

## The short version

- **Cause**: the same sound arriving twice, at different times

- **Total**: identical signals, opposite polarity, cancel to nothing

- **Partial**: a delay removes a comb of frequencies, evenly spaced

- **1 ms offset**: nulls at 500 Hz, 1.5 kHz, 2.5 kHz and upward

- **The formula**: gain = 2 |cos(π f τ)| for a delay of τ seconds

- **Distance**: 1 ms of delay is 34.3 cm of air at 343 m/s

- **Where**: multi-mic sources, layered samples, stereo wideners, room reflections

- **Test**: listen in mono; cancellation is loudest there

**BEEF at 96.** Past where most settings want to live.

## The arithmetic behind every null

One line covers the entire subject. Sum a signal with a copy of itself delayed by τ seconds and the gain at frequency f is 2 |cos(π f τ)|. That is +6.02 dB where the cosine equals one, silence where it equals nought, and every value between. Peaks land at f = k / τ, nulls at f = (2k+1) / 2τ, and the teeth repeat every 1 / τ hertz all the way up.

Convert the delay to distance and the table stops being theory. Sound covers 343 meters per second at 20 °C, so one millisecond is 34.3 cm — about the distance from a snare batter head to the rim of the kick beside it.

- **1 sample at 44.1 kHz**: 22.68 µs — first null 22.05 kHz, and 2.42 dB down at 10 kHz

- **0.1 ms — 3.4 cm**: first null 5 kHz, teeth every 10 kHz

- **0.5 ms — 17 cm**: first null 1 kHz, teeth every 2 kHz

- **1 ms — 34 cm**: first null 500 Hz, teeth every 1 kHz

- **3 ms — 1.03 m**: first null 167 Hz, teeth every 333 Hz

- **10 ms — 3.43 m**: first null 50 Hz, teeth every 100 Hz

Read the top row twice. A single sample of misalignment at 44.1 kHz puts its first null above the range of human hearing, so nobody hears a hollow tone — but the slope leading to that null is already 2.42 dB down at 10 kHz and 6.35 dB down at 15 kHz. One sample out and your cymbals are quietly missing a top octave. That is why the phrase "sample-accurate" gets used by people who otherwise never talk in samples.

## Polarity is not phase

The button on your channel strip marked with a circle and a slash flips polarity: every sample is multiplied by minus one, instantly, at every frequency. That is a useful, simple operation and it is the right fix for exactly one problem, which is a microphone pointed at the opposite side of a drum from another microphone.

Phase, properly speaking, is about timing, and timing offsets affect different frequencies differently. A half-millisecond delay is a full cycle at 2 kHz and a tiny fraction of a cycle at 50 Hz, so it wrecks the top and leaves the bottom alone. That is why flipping polarity sometimes makes things better, sometimes worse, and frequently neither: it is not the control that addresses a time offset.

The snare pair is worth working through, because it is the one case where the button is the whole answer and the arithmetic says why. Top and bottom microphones see opposite pressure: the head moves toward one diaphragm and away from the other. Un-flipped, the sum behaves like 2 |sin(π f τ)| rather than the cosine, and a sine is nought at nought hertz. Every bit of low end the two microphones share cancels completely. Flip one and you swap back to the cosine, the bottom fills in, and the first null moves up to wherever the shell depth puts it — for a 14 cm path difference, 0.408 ms, which is 1,225 Hz, right in the crack of the drum.

So the folk rule works, and now it has a reason attached. Whichever polarity gives more weight is the one where the shared low frequencies are adding rather than subtracting, and the residual notch has moved somewhere you can live with.

## What a comb filter actually is

Mix a sound with a delayed copy of itself and you get reinforcement at frequencies whose wavelength fits the delay, and cancellation at the ones that fall between. Plot it and it looks like the teeth of a comb.

The arithmetic is simple enough to use. A one-millisecond offset puts the first null at 500 Hz, with more at 1.5 kHz, 2.5 kHz and so on up. Halve the delay and every null moves up an octave. Which tells you the important practical fact: small offsets do their damage high up, larger offsets reach down into the body of the sound, and past about 25 or 30 milliseconds the ear stops hearing a filter and starts hearing an echo.

How deep the teeth cut is a separate question from where they sit, and it is set entirely by the level of the second copy. Two copies at matched level give an infinite null and a +6.02 dB peak. Drop the second copy and the damage collapses fast.

- **Second copy at 0 dB**: peak +6.02 dB, null total

- **−6 dB**: peak +3.52 dB, trough −6.02 dB, ripple 9.54 dB

- **−9.5 dB**: peak +2.50 dB, trough −3.52 dB, ripple 6.02 dB

- **−12 dB**: peak +1.94 dB, trough −2.50 dB, ripple 4.44 dB

- **−20 dB**: peak +0.83 dB, trough −0.92 dB, ripple 1.74 dB

That table is the three-to-one rule, derived. Put the second microphone three times as far from the source and the spill arrives at a third of the amplitude, which is 9.54 dB down, which holds the comb ripple to 6.02 dB. Nobody chose three because it sounded tidy. Go to five times the distance and the ripple falls to 3.52 dB; drop to twice and it climbs to 9.54 dB, which you will hear on every source with sustain in it.

[BEEFY](https://gazillionindustries.com/beefy.html) is a saturation and loudness effect, so it will make a thin, combed drum louder and still thin. Fix the alignment first, then reach for weight.

**LIMIT** instead, everything else identical.

## Why small offsets spare the bass and big ones eat it

Every producer has been told low frequencies are forgiving. Here is the exchange rate. Phase difference in degrees is 360 × f × τ, and the sum of two equal signals at that angle is 2 cos(half the angle).

Take a one-millisecond offset and walk up the spectrum. At 40 Hz the two copies are 14 degrees apart and you lose 0.07 dB against a perfect sum. At 50 Hz, 18 degrees and 0.11 dB. At 100 Hz, 36 degrees and 0.44 dB. At 200 Hz, 72 degrees and 1.84 dB. At 300 Hz, 108 degrees and 4.62 dB. At 500 Hz the copies are exactly opposed and there is nothing left. Under half a decibel below 100 Hz, total annihilation at 500 Hz, and the whole journey took 400 Hz.

Two numbers are worth memorizing from that walk. At 120 degrees of separation the sum equals one source alone: two faders up, no gain at all, which is the moment a layer stops paying rent. At 90 degrees you get +3.01 dB where you expected +6.02 dB, so half your stacking is gone and nothing sounds obviously broken. That second one does most of the damage in real sessions, because a loss with no hollowness attached gets blamed on the sample.

Now scale it. A 5 ms offset between two layered kicks puts the first null at 100 Hz, which is the fundamental of the part you layered them for. Same drums, same plugins, one decision about timing, and the low end either exists or does not. [Mixing a kick and an 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) is mostly this problem wearing a different hat.

## Where the comb stops being a filter and becomes an echo

The transition is not a matter of taste, and you can compute roughly where it sits. Comb teeth are spaced 1 / τ hertz apart. The ear resolves detail in bands whose width grows with frequency — about 79 Hz wide at 500 Hz, 133 Hz at 1 kHz and 241 Hz at 2 kHz, by the standard equivalent-rectangular-bandwidth estimate. When the teeth are wider than the band, you hear each one as timbre. When they are narrower, the ear averages across several and hears no filtering at all.

Set spacing equal to bandwidth and solve. Around 1 kHz the crossover falls at τ = 1000 / 133, or 7.5 ms. Around 2 kHz it is 4.2 ms; around 500 Hz it is 12.7 ms. So there is no single boundary, only a band of delays between roughly 4 and 13 ms where the comb dissolves from the top down. Below that you hear a filter. Above about 25 ms you hear two events. In between you hear something worse than either: a sound that is neither wide nor tight, which is where most accidental double-tracking lands.

## Measure the offset instead of guessing it

Nudging by feel takes twenty minutes. Measuring takes two, and it needs only a spectrum analyzer, which every DAW ships.

- Sum the two offending tracks to mono and route them, alone, into an analyzer with a long averaging window.

- Play a sustained passage, or send pink noise through the same two paths if the source is recorded material you can re-print.

- Look for the regular notches. Read off the spacing between two adjacent ones in hertz.

- Invert it. Spacing of 1,000 Hz means τ = 1 ms. 500 Hz means 2 ms. 333 Hz means 3 ms. 200 Hz means 5 ms.

- Multiply by the sample rate for the nudge. 1 ms is 44.1 samples at 44.1 kHz and 48 samples at 48 kHz; 3 ms is 132 and 144.

- Move one track by that many samples in the direction that makes the notches disappear, then re-measure. Two moves at once and you learn nothing.

The notches are the honest readout because they are absolute: a null is in the same place whatever the source material is doing, while a peak can be hidden by a quiet passage. Count teeth, not levels.

## How to find and fix it

- Listen in mono. Almost all cancellation is worse in mono, which is why mono is the test rather than a compromise.

- Solo pairs of tracks and mute one at a time. The problem pair is the one where two sounds together are thinner than one alone.

- Try the polarity button first. It costs nothing and it fixes opposed microphones instantly.

- If polarity does not fix it, the issue is timing: nudge one track by a few samples until the low end fills in.

- Zoom in on the waveforms and align the initial transients by eye, then check by ear.

- On layered samples, align the attacks before you do anything else.

- When recording, use the three-to-one rule: put the second microphone at least three times as far from the source as the first one is.

- Check both polarities again after you have time-aligned. Alignment changes which answer is correct, and the button you ruled out in step three may now be the right one.

- Watch the level meter on the summed pair while you nudge. The correct alignment is almost always the loudest one, and a meter settles an argument two ears will keep having.

- If one of the two tracks carries a plugin the other does not, bypass everything on both before you judge the offset. You are measuring the chain, not the recording.

- Fix it at the source where you can. Moving a microphone 10 cm costs nothing and survives every later decision; a sample nudge has to be redone on every re-take.

## Prove it in your own session: the null test

Three minutes, no plugins, and it converts an opinion into a number.

- Duplicate a mono track. Leave both at the same level and do not touch anything else.

- Invert the polarity of the copy. The pair should go silent. If it does not, something in one of the two paths is altering the signal and you have found it.

- Put the copy back in polarity and delay it by exactly 44 samples at 44.1 kHz. Play it. That is the 1 ms comb from the table, with a first null at 500 Hz.

- Sweep the delay from 1 sample to 500 samples while the loop runs. You will hear the hollow tone descend through the material and then dissolve into a slapback somewhere past about 1,100 samples.

- Now do it with the real pair. Print both tracks, line them up, invert one, and listen to what survives. Whatever is left is the part of the two recordings that differs — the room, the bleed, the offset.

- Note the summed level at your best alignment and at your worst. The difference is what the problem was costing you, in decibels, with no opinion in it.

One thing will break this, so rule it out first. Any plugin that reports latency has to be compensated by the host, and a single sample of uncompensated offset turns a clean null into a bright ghost that looks exactly like a phase problem. Test the rig before you test the take.

## Why you cannot EQ a null back

The instinct is to find the missing frequency and boost it. Run the numbers on that and the instinct dies quickly.

A 1 ms comb is 10 dB down across a span from 449.5 Hz to 550.5 Hz, which is 101 Hz wide, which is a bell with a Q of 4.95. At the center of that span there is no signal at all, and a boost applied to nothing returns nothing — you raise the noise floor and the neighboring content, and the hole stays. Then remember the teeth repeat: the same offset has another null at 1,500 Hz, another at 2,500 Hz, another at 3,500 Hz. You would need a bell at Q 5 on every one of them, and the first time anybody moves a fader the whole comb shifts and your curve is wrong.

A minimum-phase EQ makes it worse in a small, specific way: a bell boost carries its own phase shift, so EQ-ing one of two layered tracks moves the alignment between them near the corner frequency. That is a real effect and it explains sessions where a kick got worse the moment somebody sweetened it. Align first, then EQ. [Mud in a mix](https://gazillionindustries.com/why-is-my-mix-muddy/) is often this: energy piling up at the comb's peaks while its nulls hollow out the space between them.

## What saturation does to a combed sound

This is the part that makes phase problems hard to catch, and it is the part that concerns a page about a saturation plugin.

Saturation generates harmonics of whatever reaches it. Those harmonics are created *after* the cancellation has already happened, so they are not subject to the comb — they land at integer multiples of the surviving fundamentals and partially refill the notches. Work one case: a 100 Hz kick through a 3 ms comb loses its 5th harmonic at 500 Hz, its 15th at 1,500 Hz and its 25th at 2,500 Hz, because those are exactly the odd multiples of the 167 Hz first null. Saturate the result and the fundamental regenerates harmonics at all of those frequencies, from scratch.

The hole gets covered. It does not get fixed. What refills is a harmonic series belonging to the saturator, not the original recording's noise, room and transient content, and everything inharmonic that fell in a notch stays gone. In practice you get a sound that measures flatter and still feels hollow, and you spend the next hour looking for the wrong problem. Align, then saturate, and the saturation buys you something instead of hiding something. [Saturation](https://gazillionindustries.com/saturation-explained/) and [transient behavior](https://gazillionindustries.com/what-is-a-transient/) both sit downstream of this.

**SOFT CLIP as the out stage.** Worth reaching for after the alignment, never instead of it.

## Where alignment sits in the chain

Before everything, and the reason is that every stage after it measures the wrong signal.

- **Before EQ,** because a comb moves when the alignment moves, and any curve you drew against the old comb is now a curve against nothing.

- **Before compression,** because a detector follows the summed envelope. A combed pair has a smaller, differently shaped peak, so the compressor makes a different decision about a hit that has not actually changed.

- **Before saturation and clipping,** because both trade peak level for harmonics, and a canceled peak gives them less to work with. See [crest factor](https://gazillionindustries.com/crest-factor/) for the ledger.

- **Before any width processing,** because wideners usually work by creating exactly the offsets described here. Stacking a deliberate one on an accidental one produces results nobody can reason about.

- **Before you print the stems,** because an alignment error is cheap to fix now and expensive to fix after somebody else has the files.

## Where it bites when there is no microphone in the room

Most people meet this on a drum kit and then assume programming exempts them. It does not.

- **Layered one-shots.** Two kicks whose attacks land 132 samples apart at 44.1 kHz are 3 ms out, first null 167 Hz. See [how to layer kicks](https://gazillionindustries.com/how-to-layer-kicks/).

- **The same sample twice.** Copying a hi-hat to a second track for parallel processing, then using a plugin whose latency the host cannot report, leaves you summing a delayed duplicate at full level. That is the worst case in the table.

- **Stereo wideners and short delays.** Anything that offsets one side against the other sums to a comb in mono. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) is the whole of this problem stated as a checkbox.

- **Detuned unison.** Two oscillators drifting past each other sweep through every phase angle repeatedly, which is what the movement in a [detuned patch](https://gazillionindustries.com/best-detune-plugins/) is. Gorgeous in stereo, and it can lose you several decibels at the moments the two are opposed.

- **Multiband anything.** Crossover filters shift phase around their corner frequencies. Recombining the bands is a sum of phase-shifted copies, which is why an untouched multiband instance can still change the sound.

- **Reamped or DI-plus-amp bass.** Speaker, air, microphone and cable arrive at different times. A 0.5 m path is 1.46 ms and a first null at 343 Hz, straight through the note's second harmonic.

- **Room reflections in an untreated space.** A microphone 0.5 m from a hard wall gets a 1 m round trip, 2.92 ms, first null 172 Hz, teeth every 343 Hz. Move the stand, not the EQ.

## Failure modes, and what each one sounds like

Diagnose by ear first and you get to the right measurement faster.

- **Hollow, tubed, slightly metallic.** An offset in the 0.5 to 3 ms range, nulls landing in the midrange where the ear is sharpest.

- **Thin, with no weight at all.** A polarity error on two close microphones, or an offset past about 5 ms pushing the first null down under 100 Hz.

- **Enormous in the room, gone on a phone.** Width built from offsets, folding down in mono. The most expensive one, because it sounds like a win until it ships.

- **Soft attack, correct tone.** A one- or two-sample offset. No audible comb in the midrange, a couple of decibels off the top octave, and a hit that has lost its edge without losing its color.

- **Swirling, restless, like a slow flanger.** A moving offset — drifting unison, tape-style modulation, or two takes with human timing.

- **Boxy rather than hollow.** A single strong reflection at 3 to 8 ms, which is a wall or a desk one to three meters away.

- **Two events instead of one.** Past roughly 25 ms the ear stops combining and starts counting, and you have a slapback you did not order.

## Doing it in your DAW

They all have the two tools you need — a polarity invert and a way to shift by samples — and they all hide them somewhere different.

- **Ableton Live.** Utility carries a phase invert per channel. Track Delay, in the track's Delay field, shifts a whole track in milliseconds and needs Delay Compensation left on. To move audio itself, switch snapping off and drag the clip, or use the clip's start offset.

- **Logic Pro.** The Gain plugin has a phase invert per side. Sample Delay shifts by whole samples, which is the one to use for this work because the units match the measurement. Track Delay lives in the track inspector.

- **FL Studio.** Fruity Stereo Shaper inverts either side and offsets one against the other. For a whole part, move the audio clip in the playlist with snapping off.

- **Pro Tools.** Time Adjuster delays in samples and carries a polarity invert in the same window, which makes it the fastest place to try both answers on one source.

- **Reaper.** Item properties carry an Invert Phase checkbox and a start offset, and the Nudge dialog will move a selection by a set number of samples, typed in.

Whichever one you use, do the shift in samples rather than milliseconds if the choice is offered. Milliseconds round, and at 44.1 kHz the rounding is up to 22.68 µs, which is exactly the error that costs you the top octave.

**BEEF at 8.** The reference you A/B against.

## Where it is not a problem

Some of it is the sound. Room reflections comb-filter every recording ever made and that is what a room is. Deliberate short delays are how chorus, flanging and most stereo widening work. The distinction is whether you chose it: a widener that sounds huge in stereo and disappears in mono has canceled the thing you were widening, and that one is a bill arriving later.

There is a second exemption worth naming. Two *different* sounds do not comb-filter each other in any meaningful way, because comb filtering needs the same waveform twice. A kick and a bass note at the same frequency can still add or subtract at that frequency, and often do, but they will not produce the evenly spaced notches described here. If you are hearing a regular comb, there is a duplicate somewhere and it is findable.

See [how to layer kicks](https://gazillionindustries.com/how-to-layer-kicks/) for the version of this problem that eats low end specifically.

## What the fix costs

Nothing, for almost all of it. Every DAW in the list above ships a polarity invert, a sample delay and a spectrum analyzer, and those three are the complete kit for the measurement, the null test and the fix. Alignment is the rare mix problem where spending money is genuinely optional, and it is worth saying plainly before anybody goes shopping for a plugin to solve it.

The paid part comes after, once the sum is coherent and you want it bigger. [DRUGS](https://gazillionindustries.com/drugs.html) is our one-knob bus compressor for drums, free on Mac and Windows: DOSE does the work, with GAIN and a soft ceiling on the way out, and it does not sit at unity with DOSE at nought, so match levels before you judge it. [BEEFY](https://gazillionindustries.com/beefy.html) is $19, one payment, Mac and Windows, AU, VST3 and standalone. Neither of them — nor anything else in the category — can return a frequency that two tracks removed from each other.

## Questions people ask

### How do I get rid of phase issues?

Check in mono, find the pair of tracks that gets thinner together, try polarity inversion, and if that does not do it, time-align the tracks by nudging one until the low end returns.

### What happens when you invert the phase of audio?

The polarity button flips the waveform upside down at all frequencies. Against an identical copy it produces silence; against a related signal it can either fix or worsen the cancellation.

### How can you tell if microphones are out of phase?

Sum them to mono and flip the polarity of one. Whichever setting gives you more low end and a bigger sound is the correct one. If neither sounds right, you have a timing offset rather than a polarity problem.

### Does phase cancellation affect bass the most?

Low frequencies have long wavelengths, so they survive small offsets that destroy the top end. But when low frequencies do cancel, you lose the part of the record carrying the weight, which is why it feels like a bass problem.

### What does phase cancellation sound like?

Below about 3 ms of offset it sounds hollow and slightly metallic, like a fixed flanger that never moves. Past 5 ms it sounds thin and weightless. Past about 25 ms it stops sounding like a filter and starts sounding like a short echo.

### Is phase cancellation the same as comb filtering?

Comb filtering is what partial phase cancellation from a time offset produces: a series of evenly spaced notches at (2k+1) / 2τ hertz. Full cancellation, where two identical signals of opposite polarity sum to silence, is the special case with no notches because nothing survives.

### How many samples should I nudge a track?

Measure rather than guess. Read the spacing between two adjacent notches on an analyzer, take its reciprocal for the delay in seconds, and multiply by the sample rate. Notches 500 Hz apart mean 2 ms, which is 88 samples at 44.1 kHz and 96 at 48 kHz.

### Can I fix phase cancellation with EQ?

No. At the bottom of a null there is no signal to boost, and the notch from a 1 ms offset is only 101 Hz wide at its 10 dB points, needing a Q near 5 — and there is another one every 1,000 Hz above it. Move the track in time instead.

### Does saturation fix phase cancellation?

It hides some of it. Harmonics created after the cancellation land at multiples of what survived and partially refill the notches, so the spectrum flattens out while the recording's original content at those frequencies stays gone. Align first.

### Why do my layered kicks lose low end?

Their attacks are not aligned. A 5 ms offset puts the first null at 100 Hz, which is where the weight lives. Snap both attacks to the same sample and the two layers add instead of fighting.

### Why does my mix sound thin in mono?

Something in it is built from left-against-right offsets or opposed polarity, which stays audible while the channels are separate and cancels the moment they sum. Wideners, Haas delays and mid/side tricks are the usual culprits.

### Why does flipping polarity make my bass disappear?

Because the two sources were already in polarity with each other. Inverting swaps the sum from a cosine shape to a sine shape, and a sine is nought at nought hertz, so everything the two share at the bottom cancels. The flip is right only when the sources genuinely oppose, such as a top and bottom microphone on the same drum.

### Is 180 degrees out of phase the same as inverted polarity?

Only for a single steady frequency. A polarity invert flips every frequency at once; a 180-degree phase shift applies at one frequency and a different angle at every other one. For broadband material they are different operations with different results.

### Does phase cancellation only happen with microphones?

No. Layered samples, duplicated tracks, stereo wideners, detuned unison, multiband crossovers, parallel chains with uncompensated latency and reamped bass all produce it, and none of them involve a room.

### Does plugin latency cause phase problems?

It can. Hosts compensate reported latency automatically, and the failure cases are the ones where latency goes unreported — external hardware inserts, certain send configurations, some sample-rate-converting plugins. Test the rig by nulling a bypassed instance against a bare copy of the same print before you blame the take.

### What is the 3 to 1 rule?

Place the second microphone at least three times as far from the source as the first one is. The spill then arrives about 9.5 dB down, which limits the comb ripple to roughly 6 dB — audible, but not ruinous. At twice the distance the ripple is 9.5 dB; at five times it is 3.5 dB.

### Does phase cancellation affect loudness?

Directly. Two aligned copies sum to +6.02 dB, at 90 degrees apart to +3.01 dB, and at 120 degrees apart to nothing at all over one source alone. Half your stacking can vanish with no hollowness to warn you.

### Should I use a phase alignment plugin?

Try the free route first, because it solves most of it: polarity invert, then a sample-accurate nudge measured off an analyzer. Paid alignment tools earn their place on sources where the offset changes across the spectrum, such as a speaker plus a direct feed, which a single delay cannot correct.

### Does EQ cause phase shift?

A minimum-phase EQ does, around every band you move. That matters here because EQ-ing one of two layered tracks changes their alignment near the corner frequency, so a sweetening move can make a stack worse. Align first, then EQ.

### Is linear-phase EQ the fix for phase problems?

No. It avoids adding phase shift of its own, which is a different thing from removing an existing time offset between two tracks. It also introduces latency and pre-ringing, so it is a tool with a cost rather than a repair.

### Can you hear phase cancellation on headphones?

You hear less of it, which is the trap. Headphones keep the channels apart, so left-against-right cancellation never happens at your ears. Check on a mono speaker, or fold to mono and listen there.

### How do I check phase in my DAW?

Sum to mono, solo pairs, and use the polarity invert to compare. A correlation meter helps as a warning light — sustained negative readings mean something is opposed — but the notch spacing on a spectrum analyzer is what tells you the actual delay.

### What delay is too long to be phase cancellation?

Somewhere between 4 and 13 ms the comb stops being audible as a filter, because the teeth become narrower than the ear's resolving bandwidth — 133 Hz at 1 kHz, so a spacing under that, meaning a delay past 7.5 ms, gets averaged away. Past about 25 ms you are hearing an echo instead.

### Can two different sounds cancel each other?

They can subtract at frequencies they share, and often do around a kick and a bass note. What they cannot produce is the evenly spaced notch pattern, because that requires the same waveform arriving twice. A regular comb means a duplicate exists somewhere.

## What BEEFY does

BEEFY is our saturation and loudness effect: it adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is weight and density, **COOK** is the color and bite, **JUICE** is the level going in, and **SOFT CLIP** rounds the loudest parts. What it cannot do is put back a frequency that two tracks removed from each other. Alignment is upstream of tone, always.

Read against this article, the panel has one honest place in the order of work: after the sum is coherent. Drive a combed pair with JUICE and you raise a spectrum with holes in it; the harmonics BEEF and COOK bring out will land on top of the notches and flatten the measurement without returning the recording. Do the nudge, confirm it on a meter, then come back and set the drive. **LIMIT** and **SOFT CLIP** are the two output switches, and both of them are working on a peak that alignment has already decided the height of.

BEEFY is $19, one payment, and runs on Mac and Windows as AU, VST3 and standalone. There is a 28-second demo with three without/with comparisons on the page.

Two good microphones, one drum, and a subtraction nobody asked for.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
