# SP-404 plugin

> The sound comes apart into five things you can rebuild with plugins you have: rate reduction, the filter, the compressor, vinyl sim, and committing on the way in.

Source: https://gazillionindustries.com/sp-404-plugin/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

The machine is a gray box from 2005 with twelve pads and a bank of effects. What people mean by its sound is four of those effects and one habit.

No plugin is that machine, and none of the ones below are built from it. The sound comes apart into five things you can rebuild: bit and sample-rate reduction applied on the way in, a low-pass filter ridden by hand, a fast compressor squashing the whole loop as one block, a vinyl-sim layer of band limiting, surface noise and slow pitch drift, and the habit of printing all of it before you move on. A bitcrusher, a filter, a compressor and a noise layer cover the first four. The fifth is a workflow, and buying plugins does not install it.

## The short version

- **The machine**: Roland SP-404, 2005; twelve pads, built-in mic, effects on anything you feed it

- **The grit**: bit reduction and rate reduction, printed rather than left adjustable

- **The filter**: low-pass ridden by hand; position decides grain or clang

- **The glue**: one fast compressor across the whole loop, never per element

- **Vinyl sim**: band limit, constant surface noise, slow pitch drift, and a squash

- **Fold rule**: new rate minus the partial's frequency; one subtraction

- **Starting point**: 12 bits, rate 16 kHz, low-pass near 5 kHz

- **The part you cannot buy**: one pass, committed, no undo

- **Background**: [the history of the machine](https://gazillionindustries.com/sp-404-history/)

## So what is actually making that sound?

Roland has published very little about how these effects work inside, and nothing here is measured off one. What follows is the sound described from the outside, rebuilt from processes you already own. Four of the five are signal processing, which is the easy part: every DAW ships a bitcrusher, a filter and a compressor, and a noise loop is a file. The fifth is the recording process itself, and it is worth naming early.

## How much of it is the resampling?

More than people expect. Resampling on the machine means recording its own output back into a new pad with the effects already on it. Two things happen on every pass: the effects become part of the file, and the arithmetic of the format runs again on material that has already been through it once.

That arithmetic tells you what a setting will do before you turn it. Each bit doubles the number of levels a measurement can land on and adds roughly 6 dB of range, so 12 bits gives 4,096 steps and about 72 dB, and one step sits about 66 dB below a full-scale peak. That step is the grain you are buying, and [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/) works through the rest of it.

The trap is that the grid is measured from full scale rather than from your track. A loop peaking at 0 dBFS into an 8-bit stage uses all 256 steps. Drop the fader feeding it by 20 dB and the same loop spans about 26 steps, under 5 bits of real resolution, with the bit control untouched. Input level is a second crush knob, and usually the more musical one.

Rate reduction is the other half, and its rule is one subtraction. Lower the sample rate and everything above half the new rate mirrors back down: a partial at frequency f returns at the new rate minus f. At an 8 kHz rate, a 6 kHz hi-hat partial comes back at 2 kHz, landing on the snare and the vocal. At 11.025 kHz the same partial lands at 5,025 Hz and stays out of the way. Filtering before the reduction removes what would have folded; filtering after only turns down something already welded to the music.

Then there is pass count. Each rounding is one-way and the second knows nothing about the first, so a loop resampled four times carries four floors rather than a deeper version of one. One pass at 12 bits reads as grain; the same setting four times reads as a texture with its own level. If your version sounds thin next to a record you like, check pass count before reaching for a lower number.

## What is the filter doing?

Less tonal work than you would think and more structural. On the hardware the filter is something you ride with a hand on a knob while the part plays, so the cutoff moves with the music rather than with the grid. That is a performance, and it survives being printed.

Position matters more than the setting. Put the filter before the rate reduction and you remove the high content that would otherwise fold, so you get grain with a clean midrange. Put it after and the folded content is generated first and then attenuated, which leaves the mids dirty and the top polite. Both are usable. They are different sounds, and choosing between them is a bigger decision than the cutoff number.

For a drum loop, a low-pass between 3 and 6 kHz with a little resonance, plus a high-pass near 100 Hz so the compressor that follows is not chasing the kick. Record the sweep from a controller in one take. A drawn lane lands on the beat; a hand lands slightly early or late, and that is the difference you are hearing.

## Why does a loop off it sound glued?

Because the compression happens once, across everything, before the parts get a chance to behave like separate parts. The compressor sits in the same effect bank as the rest, so it hits a whole two-bar loop on the way into a pad, and from then on the loop is one object.

The arithmetic explains the whole effect. Take 6 dB of gain reduction on the peaks and add 6 dB of makeup. The peaks end up where they started, and everything that was not a peak comes up 6 dB: the room on the sample, the tail of the crash, the hum on the record, and the floor the bit reduction just raised. The gaps fill in, and the sources stop having their own separate backgrounds.

A fast attack is part of it. Flattening the front of a transient removes the cue that a kick and a snare were recorded in different places. Compress the loop as one block, do not compress the elements first, and do not repair the transients afterward.

## What is vinyl sim, in parts?

From the outside it behaves like four processes at once. Top and bottom roll off so the loop sits in a narrower band. A continuous surface noise appears underneath. Pitch drifts slowly. And the whole thing thickens the way compression thickens. Build each one separately and you find out which one you actually wanted.

The noise is the part people skip, and it does more than it should. Quantization grit exists only while there is signal, because the rounding produces it. Surface noise sits there whether the music plays or not. Stack the two and the quiet parts get a floor that is half constant and half reactive, which is most of what reads as density. A noise loop at roughly −40 dBFS is enough: inaudible alone, obvious when you mute it.

Pitch drift is small numbers. Ten cents is a ratio of about 1.0058, so plus or minus ten cents is a speed variation of about 0.58 percent, moving at well under 1 Hz. Anything faster stops sounding like a worn record. If your version sounds stiff, this is usually the missing piece rather than the crush amount.

- **Band limit**: high-pass near 100 Hz, low-pass 5 to 6 kHz

- **Surface noise**: a looped noise file around −40 dBFS, always on

- **Drift**: ±10 cents, under 1 Hz, irregular

- **Squash**: fast attack, about 6 dB of reduction, makeup to match

- **Order**: band limit, then squash, then noise on top

## Can a plugin give you the workflow?

No, and this is the part most pages leave out. A large share of what people love about records made on that machine comes from the producer not being able to change their mind later. Effects go on while the recording is being made. When it stops, the settings are gone, the pad holds a file, and the only route back is to do it again from the source.

That shows up in the music twice. Decisions get made early, so the arrangement is built around a sound that already exists rather than a placeholder to be treated later. And nobody spends forty minutes comparing two settings that differ by 2 dB, because there is nothing to compare against. Those records are partly the sound of a first instinct surviving.

You can impose most of this on a DAW, and it costs discipline rather than money. Bounce in place after each stage and delete the source clip. Take the plugins off the track. Do not keep a muted dry copy on a hidden track, because knowing it is there is what stops you committing.

What you cannot remove is undo. The hardware's commitment is real; yours is a rule you agreed to follow. The plugins get you the processing and the discipline gets you the rest. [How to make lofi beats](https://gazillionindustries.com/how-to-make-lofi-beats/) covers the same ground from the arrangement side.

## What chain gets closest?

Order matters more than the individual settings, and printing between stages matters more than either. Run this on a two-bar loop you have already chopped by hand.

- Start with the loop played in rather than quantized. The timing is part of the sound.

- High-pass around 100 Hz so nothing downstream is chasing the low end.

- Bit depth to 12, rate to 16 kHz. Set the input level deliberately. Print.

- Low-pass near 5 kHz with a little resonance, ridden by hand across the two bars in one take. Print.

- Compressor across the whole loop, fast attack, about 6 dB of reduction, makeup to match. Print.

- Noise layer underneath at roughly −40 dBFS, and a drift of a few cents.

- Delete the dry clip. Take the plugins off the track.

- Check it in mono, then on a phone speaker. Folded content concentrates between 2 and 5 kHz, where a small driver is loudest and your monitors are most forgiving.

Those are starting points rather than a preset. The right bit setting depends on how loud the source arrives, which is the usual reason a chain like this comes out either clean or destroyed when you wanted neither.

## What is left that no plugin covers?

The pads, and what a human does to a break when the timing comes out of their hands instead of a grid. The microphone, and the fact that a box with a mic on it invites you to record the room, a voice, whatever is nearby. And the table: a machine with a small set of buttons produces different decisions than a screen with everything on it. None of that is for sale, and it is most of the remaining gap once the processing is right.

## Questions people ask

### What plugin gets that sound?

A bitcrusher for the bit and rate reduction, a low-pass filter you can ride, a fast compressor across the whole loop, and a noise layer underneath, printed one stage at a time. No single plugin covers all four, and the ones that bundle them still leave the workflow to you.

### Do I need the hardware to get it?

Not for the processing. Bit reduction, rate reduction, filtering and compression are reproducible in software, and the arithmetic is identical. What the hardware adds is a recording process with no undo, which changes what you commit to.

### What bit depth and sample rate should I start at?

12 bits and 16 kHz on a drum loop. Twelve is audible on decays and nearly invisible on loud transients, and 16 kHz dulls the top without dragging folded content down onto the snare. Go lower when you want the process to be obvious.

### Why does my version sound cleaner than the records?

Two reasons, usually. The input level is too conservative, so the source sits high above the step size and is barely quantized. And it has only been through the chain once, where repeated passes stack floors a single heavier setting does not reproduce.

### Should the filter go before or after the crush?

Before, for grain with a clean midrange, since filtering first removes the content that would have folded down. After, for dirty mids and a polite top. Both are correct; they are different sounds.

### Is the sound the effects or the workflow?

Both, in roughly equal measure. The effects are reproducible and documented well enough to rebuild. The workflow is a constraint the machine imposes and your DAW does not, so you impose it yourself by printing and deleting as you go.

### Does resampling in a DAW do the same thing?

Arithmetically, yes. Bouncing a processed clip and reprocessing the bounce rounds the audio again the way a second pass on hardware does. The difference is that you can undo it, and that changes which version you keep.

## What F(ilter)12 does

[F(ilter)12](https://gazillionindustries.com/f12.html) puts the crush pair, a filter with five shapes and six resonance shapes, and an adaptive EQ called AURA on one panel, so the first two stages above happen in one place and get printed together. Twelve bits is as clean as it gets; it only goes down from there. It was tuned by ear, and nothing in it was measured from any machine.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
