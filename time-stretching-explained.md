# Time stretching explained

> How time stretching works: grain-based and spectral algorithms, which mode suits which material, how far you can push it, and when to repitch instead.

Source: https://gazillionindustries.com/time-stretching-explained/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

The sample is 94 bpm. The beat is 88. You drag the corner of the region, the numbers agree with each other, and the room tone behind the singer starts to sound like it is being spoken through a fan.

Time stretching changes the length of audio without changing its pitch. It works by cutting the audio into short windows and either repeating or dropping them, or by re-synthesizing the sound from an analysis of its frequencies. Both approaches are guesses about material the recording never contained, so the artifacts are structural rather than a sign you did it wrong. Small stretches, monophonic material and transient-aware modes hide them. Big stretches on a full mix do not.

## The short version

- **What**: length changes, pitch stays

- **How**: overlapping windows, or analysis and resynthesis

- **Safe**: within about 10% on a full mix

- **Further**: monophonic material and drums take more than mixes do

- **Artifacts**: smearing, flanging, doubled transients, metallic tails

- **Alternative**: repitch instead, and let the key move

## The two families of algorithm

The time-domain method chops the audio into small grains and overlaps them, adding repeats to make it longer or throwing some away to make it shorter, aligning each splice so the waveform matches where it joins. It is cheap, it keeps transients crisp, and when it fails you hear stuttering or a comb-filtered flutter on sustained sound.

The frequency-domain method analyzes the signal into frequency bands and phases, advances them at a different rate, and builds new audio from the result. It handles sustained material far better and blurs attacks, which is the "phasiness" people describe as underwater or metallic. Modern implementations detect transients and switch strategies at each hit, which is why one algorithm can hold a drum loop together and still stretch a pad.

## How to stretch without wrecking it

- Get the source tempo right first: a wrong tempo means the stretch is fighting the grid.

- Pick the mode that matches the material: transient-aware for drums, spectral for pads and vocals, monophonic for a single line.

- Keep the ratio inside 10 percent on a full mix if you want it transparent.

- Stretch, then bounce, then listen to the bounce rather than the live playback.

- If the attacks doubled, slice at the transients and move the pieces instead.

- If the tails swirl, shorten the analysis window or use a different mode.

- When both fail, repitch instead and accept the key change.

SKRUU keeps pitch and time as separate knobs: TIME runs from −50% to +25% and moves nothing but the length, and PITCH LOCK holds the pitch while you do it.

## Stretching versus repitching

Repitching is what a tape machine or a turntable does: speed and pitch move together, no analysis, no artifacts, and a key change you have to live with. Producers chose it for decades because it was the only option, and the sound of a sample repitched down a tone is baked into entire genres. What is varispeed covers the mechanism, and how to change pitch without changing tempo covers the other direction.

The rule of thumb: if the sample is close to your tempo, stretch it. If it is far away, or if the artifacts are audible, repitch it and build the beat around the new key. A sample pitched to fit sounds like a decision. A sample stretched 20 percent sounds like a plugin.

## Where it costs you

Stretching a full mix stretches the reverb, the room and the noise floor, and those are exactly the parts your ear uses to judge whether something is real. Drums lose the hard front edge of the transient first. Vocals lose breath, then diction. Every stretch also costs CPU while it plays, so a session with twenty stretched regions behaves worse than a session with twenty bounced ones, and bouncing is free.

## Questions people ask

### How do you time stretch audio in Logic Pro?

Turn on Flex Time for the track, choose the algorithm that suits the material, and drag the region's end or the flex markers. To fit a region to the project tempo, use the region's Flex & Follow Tempo setting rather than stretching by hand.

### How do you time stretch audio in GarageBand?

Enable Follow Tempo & Pitch on the region so it conforms to the project tempo, or hold Option while dragging the region's lower right edge to stretch it manually.

### What is the best time stretching software?

Every major DAW licenses a capable algorithm, and the mode you pick matters more than the brand. Dedicated stretching tools pull ahead on extreme ratios and on material with both transients and long tails, where a single mode has to compromise.

### How much can you time stretch before it sounds bad?

About 10 percent on a full mix, more on a single instrument, and a great deal on a pad, where there is nothing sharp to smear. Drums are the tell: if the transients start to double, you have gone past what the algorithm can hide.

## What SKRUU does

SKRUU is two knobs that do not touch each other. PITCH moves the pitch and TIME moves the length, so you can speed it up while pitching down, or the other way round. PITCH runs from −20% to +10% in 128 states and reads out in semitones as well as speed; TIME runs from −50% to +25%. PITCH LOCK and TIME LOCK hold one while the other moves, DRAG sets how long the new speed takes to arrive, and there is zero latency.

The fan noise behind the singer was never in the room. It arrived when you dragged the corner.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
