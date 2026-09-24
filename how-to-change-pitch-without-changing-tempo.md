# How to change pitch without changing tempo

> How to change pitch without changing tempo, and tempo without pitch: how pitch shifting and time stretching work, which mode to use, and how to avoid artifacts.

Source: https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

For most of recorded history, pitch and tempo were married. Change one and the other came with it, like a turntable spinning faster. Pitch shifting and time stretching are the divorce, and like most divorces they're possible, useful, and never entirely clean.

To change pitch without changing tempo, use pitch shifting; to change tempo without changing pitch, use time stretching. Both are built into every modern DAW. Pick the algorithm that suits the material (one for drums, one for melodic parts, one for full mixes), keep the change as small as you can because artifacts grow with the amount, and turn on formant preservation for vocals so voices don't turn chipmunk or cartoon-deep.

## The short version

- **Pitch only**: pitch shifting

- **Tempo only**: time stretching (warping)

- **Both linked**: varispeed or repitch

- **Drums**: a transient-preserving mode

- **Melodic and mixes**: a high-quality tonal or complex mode

- **Vocals**: preserve formants

**TIME −35%, PITCH at unity.** Length without pitch — the other half of the machine.

## How the separation works

Time stretching slices audio into tiny overlapping pieces and either repeats or skips them to change the length, then blends the seams. Pitch shifting stretches the audio in time and resamples it back to the original length, so the pitch moves while the duration stays. The better the algorithm, the better it hides the seams, but every method trades something: smeared transients, a phasey or metallic tone, or a watery sound on sustained notes.

## Choose the mode for the material

- **Drums and loops:** modes that detect and preserve transients, so hits stay sharp.

- **Melodic parts:** tonal modes that keep sustained notes smooth.

- **Full mixes:** the highest-quality complex modes, which cost more CPU.

- **For character:** repitch or varispeed, which doesn't separate them at all. See [what is varispeed](https://gazillionindustries.com/what-is-varispeed/).

## How to change pitch without changing tempo

- Select the audio clip or region.

- Make sure it's set to follow the project tempo (warping or flex on).

- Choose a stretch mode that suits the material.

- Transpose it in semitones, and use cents for fine tuning.

- For vocals, turn on formant preservation if the mode has it.

- Listen for artifacts, and try another mode if it sounds phasey or smeared.

**Pitched up.** Same control, the other direction.

## How to change tempo without changing pitch

- Set the clip to follow the project tempo.

- Choose a transient-preserving mode for drums or a tonal mode for melodic parts.

- Change the project tempo, or stretch the clip to the new length.

- Check the hits and the sustained notes for smearing.

[SKRUU](https://gazillionindustries.com/skruu.html) puts pitch and time on separate knobs you can play, and lets either spring back.

## Keep it clean

Small moves hide best. A semitone or two, or a few BPM, usually sounds natural; a big jump in either direction exposes the algorithm. If you need a large change, try splitting it: move part of the way with varispeed, which sounds natural, and the rest with pitch shifting. And bounce the result once you like it, so you're not stacking stretch on top of stretch. For samples specifically, see [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/).

## Questions people ask

### Can you change pitch without changing speed?

Yes. Pitch shifting changes the pitch while keeping the tempo and length the same. DAWs do it with stretch algorithms; small changes sound most natural.

### How do I change the tempo without changing the pitch?

Use time stretching: set the clip to follow the project tempo with a suitable stretch mode, then change the tempo. The pitch stays where it was.

### Why does pitch shifting sound bad sometimes?

Large shifts expose the algorithm's artifacts: smeared transients, a metallic or phasey tone, and unnatural formants on voices. Use the right mode, keep changes small, and turn on formant preservation for vocals.

## Stock plugins that do this

- **FL Studio**: sample channel stretch modes; Pitcher for vocals

- **Ableton Live**: Warp modes: Beats, Tones, Texture, Re-Pitch, Complex, Complex Pro

- **Logic Pro**: Flex Time and Flex Pitch

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin: two knobs that don't touch each other. **PITCH** moves the pitch, from −20% to +10%, reading out in semitones as well as speed. **TIME** moves the length, from −50% to +25%. Speed it up while pitching down, or the other way round. **PITCH LOCK** and **TIME LOCK** hold one while the other moves, and **ELASTIC** makes either knob spring back along a return shape you choose. Zero samples of latency.

The divorce went through. They still get along better than you'd think.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
