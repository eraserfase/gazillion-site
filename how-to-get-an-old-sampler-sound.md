# How to get the sound of an old sampler without buying one

> How to get the sound of an old sampler with plugins you have: bit depth, sample rate and its fold-back, narrow bandwidth, a hard input stage and short chops.

Source: https://gazillionindustries.com/how-to-get-an-old-sampler-sound/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

The machines that made this sound were built to save memory. Every compromise that irritated their owners at the time is now the reason people go looking for them.

The sound of an old sampler is a stack of limitations, and every one of them can be applied on purpose with plugins you already have. Reduce the bit depth for grain. Reduce the sample rate so the top end goes and what was above the new ceiling folds back down as inharmonic tones. Narrow the bandwidth at both ends. Drive the input hard enough that it clips on the way in. Chop short, because those machines counted their memory in seconds. Do those five and you have the sound without the hardware.

## The short version

- **Bit depth**: 12 bits for grain, 8 for obvious crunch

- **Sample rate**: drop it until the top end dulls and starts to clang

- **Fold-back**: a partial at f returns at the new rate minus f

- **Bandwidth**: high-pass around 80 Hz, low-pass under the fold line

- **Input stage**: hit it hard; let the peaks round off on the way in

- **Length**: short chops, hard cuts, tails that stop early

- **Pitch**: pitch and length move together, the way varispeed does

- **Order**: filter before the rate reduction changes what folds back

## Why does an old sampler sound like that?

None of it was a design goal. Memory was the expensive part, so the engineers spent as little of it as possible per second of audio: fewer bits per sample, fewer samples per second, and a short ceiling on how long you could record. The converters and the input amplifier in front of them were built to a price. The anti-aliasing filtering was modest. The result was a machine that colored everything that went through it in the same way every time, which is the definition of a sound.

That consistency is what makes it reproducible. You are not chasing a serial number. You are chasing five measurable behaviors, and each one has a control in a modern DAW. Apply them together and in the right order and the character arrives. Apply one of them alone and you get a thin imitation that producers describe as sounding digital rather than old.

## How much does bit depth actually contribute?

Less than most people assume, and it is the first thing everyone reaches for. Bit depth sets how many levels each measurement can land on. Each bit roughly doubles the steps and adds about 6 dB of dynamic range: 16 bits gives 65,536 steps and about 96 dB, 12 bits gives 4,096 and about 72 dB, 8 bits gives 256 and about 48 dB. Take bits away and the wave is forced onto a coarser staircase, and the error between the real wave and the staircase is heard as noise.

The important part is where that noise sits. It rides the signal, so it is loudest under quiet material: reverb tails, room sound, the decay of a chord, the space between hits. A loud kick barely shows it. A sustained pad shows it immediately. This is why a crushed break sounds gritty in the gaps rather than on the transients, and why twelve bits reads as texture while eight reads as damage. The mechanism is covered in full in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

## What the sample rate does, and where the fold-back lands

This is the half of the sound that people miss. A sample rate can only describe frequencies up to half its value, and when you lower the rate, everything above that new ceiling does not quietly disappear. It mirrors down. A partial at frequency f comes back at the new rate minus f, which means the returning content has no harmonic relationship to the note that produced it. That is why the result reads as metallic instead of bright, and it is arithmetic you can do in advance:

- **22.05 kHz — fold line at 11,025 Hz**: a 6 kHz hat partial passes through unchanged

- **16 kHz — fold line at 8,000 Hz**: a 10 kHz partial comes back at 6,000 Hz

- **11.025 kHz — fold line at 5,512 Hz**: a 6 kHz partial comes back at 5,025 Hz

- **8 kHz — fold line at 4,000 Hz**: a 6 kHz partial comes back at 2,000 Hz

At 8 kHz that 6 kHz hat partial lands at 2 kHz, in the middle of where the snare and the vocal live, and a 7 kHz one lands at 1 kHz. A crushed hi-hat can clutter a region you never touched, and no amount of EQ up top will move it, because the content is no longer up top. Sweep a bright note and you can hear the direction reverse: the note goes up, the folded tone comes down to meet it. The whole mechanism is in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/).

In [F(ilter)12](https://gazillionindustries.com/f12.html), SAMPLE RATE folds the top back down as new content on purpose. There is a demo on the page.

## Does the order of the chain matter?

More than any single setting. Filtering before the rate reduction removes the content that would have folded, so you get a dull, closed sound with a clean midrange. Filtering after the rate reduction only attenuates the folded tones once they are already sitting on top of the music, so the midrange keeps the clang and the top gets darker.

Both are useful and they sound nothing alike. If a chopped loop is turning into mud, low-pass in front of the crusher. If a loop sounds too polite, move the filter behind it and let the fold-back through. Old machines did some of each, which is part of why they are hard to pin down with one setting, and why having the filter on either side of the crush is worth more than another decimal place of precision.

## What about the bandwidth?

A modern converter passes everything. Those machines did not. The bottom was loose and rolled away early, the top stopped well short of where a record stops, and the middle was where all the level was. Reproducing that is two filters and a decision about how far to push them.

High-pass around 80 Hz and the sub content goes, which immediately makes a chop sound like it came off a machine rather than out of a session. Low-pass somewhere under the fold line and you are choosing how much of the metallic return survives. Then push a wide, gentle boost into the 1—3 kHz range, because that is the register these machines emphasized and it is the register a chopped loop needs to cut through a mix. Narrow bandwidth with a strong middle is most of the impression of age on its own.

## How hard should the input stage be hit?

Harder than feels correct. On those machines you set the record level by ear against a small row of lights, and everyone ran them hot, because a quiet sample wasted the bits you had paid for. The peaks rounded off on the way in and stayed rounded, baked into the recording before any bit reduction happened.

In a DAW that means saturation or soft clipping in front of the crusher, not after it. Ours is BEEFY, and any soft clipper with a controllable input will get you there. Push until the transients stop growing and the body gets louder, then back off until the hits still move air. The effect is density: a loop that sits at one level and pushes forward, rather than one that spikes and hides. Doing this first also changes what the rate reduction has to work with, since clipping generates harmonics of its own that then fold back down as part of the character.

## Why does the length of the chop matter so much?

Because the memory limit shaped the music. If a machine gives you two seconds of recording time, a bar of 4/4 at 90 BPM already runs about 2.67 seconds (60,000 divided by 90 is 666.7 ms a beat, times four), so a whole bar does not fit. You chop tighter, you cut tails early, and you let the next hit cover the gap. That clipped decay is a signature. Producers spend real effort adding it back with a gate or an envelope after sampling a source that had no such limit.

Pitch is the other half. On those machines, playing a sample higher meant reading it faster, so pitch and duration moved together. Pitch a two-second chop up an octave and it lasts one second. Up a fifth, a 3:2 ratio, and it lasts two thirds of that, about 1.33 seconds. Producers used that deliberately: pitching a break up to fit more of it into memory, then slowing the whole track to compensate. A modern time-stretch holds the length and breaks the link, which is exactly the thing that makes a chop sound new. If you want the old behavior, use varispeed, which is what our SKRUU does.

## A working order

- Chop shorter than feels comfortable and cut the tail hard.

- Pitch with varispeed rather than time-stretch, so the length moves with the pitch.

- Drive a saturator or soft clipper at the front until the peaks round off.

- High-pass around 80 Hz to lose the sub.

- Reduce bit depth to 12, then to 8 if you want it obvious.

- Reduce the sample rate until the top dulls and the clang arrives.

- Decide whether the filter goes before the rate reduction or after, and listen to both.

- Compare against the dry loop at matched loudness, because all of this adds level.

Run that on a clean source and the difference is not subtle. For the texture work that sits on top of it, including the noise, the wear and the timing, see [how to make a sample sound old](https://gazillionindustries.com/how-to-make-a-sample-sound-old/).

## Questions people ask

### Can you get the old sampler sound with stock plugins?

Most of the way, yes. A bit reducer, a filter and a saturator will do the five jobs that matter: bit depth, sample rate, bandwidth, input drive and short chops. Stock bit reducers vary in whether they let the fold-back through or filter it away, and that difference is most of what separates one crusher from another.

### Is 12-bit the right setting?

It is the useful starting point. Twelve bits gives about 72 dB of dynamic range and a grain that reads as texture rather than damage. Eight bits, at about 48 dB, is an effect you notice. Most of the character people are chasing comes from the sample rate and the input stage rather than from the bits.

### Why does my crushed loop sound thin instead of heavy?

Usually the input stage was skipped. Those recordings were made hot, so the peaks rounded off before anything else happened. Saturate or soft clip in front of the crusher, then add a wide boost around 1—3 kHz. Weight in this sound comes from density in the midrange, and very little of it comes from the low end.

### Should I filter before or after the sample rate reduction?

Before, to remove the content that would fold down and muddy the midrange. After, to darken the folded tones while keeping the clang. They are different sounds, so try the same loop each way and keep the one that fits the track.

### Does pitching a sample down make it sound older?

It helps, if the pitch and the length move together. Varispeed pitching lengthens the sample as it lowers it and drags the whole spectrum down with it, which is the behavior those machines had. A time-stretch that holds the length keeps the sample sounding current.

### Do I need a sampler plugin for this?

No. You need a chop, a way to pitch it, and a processing chain that reduces bits and rate. Whether the chop lives in a sampler or on an audio track changes the workflow rather than the sound.

## What F(ilter)12 does

F(ilter)12 is our 12 bit sauce filter, and it covers three of the five jobs in one place. **BIT** coarsens the steps, **SAMPLE RATE** drops the ceiling so the top folds back down as new content, and the filter behind the crush has five shapes and six resonance shapes, so you can choose what reaches the rate reduction and what gets cleaned up afterward. **AURA** sits on top and helps the result hold its place in a mix. Nothing in it is modeled on a particular machine; it was tuned by ear until chops sounded right. See [F(ilter)12](https://gazillionindustries.com/f12.html).

The engineers were rationing memory. You have as much as you want, which means every one of these limits is now a choice.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
