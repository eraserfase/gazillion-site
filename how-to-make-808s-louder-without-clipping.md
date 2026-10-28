# How to make 808s louder without clipping

> Why an 808 clips before anything else, how much loudness a soft clipper buys in decibels, the order to do it in, and where streaming puts the ceiling.

Source: https://gazillionindustries.com/how-to-make-808s-louder-without-clipping/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make BEEFY.

---

On the monitors the 808 is the biggest thing in the room. On the master meter it is the only thing going red, and on the phone in the car it has disappeared. All three are the same fact about the same note.

An 808 gets louder without clipping by raising its average and lowering its peaks: tune it, saturate it for harmonics a phone can play, soft clip two or three decibels off the top of the sine, then leave the master to a limiter at −1 dBTP. A sine has only 3 dB between peak and average, so every decibel shaved off the peak comes almost straight back as loudness. [BEEFY](https://gazillionindustries.com/beefy.html) does the saturation and the clip on one knob, for $39; the stock tools below do it in two or three.

## The short version

- **Why it clips first**: a sine's peak is only 3 dB above its average, so it is the loudest average thing in the beat at any peak

- **Order**: tune, set the peak at −6 dBFS, saturate, soft clip 2 to 3 dB, sidechain to the kick, limiter on the master

- **What the clipper buys**: about 1 to 1.3 dB of loudness for 2 to 3 dB off the peaks, plus harmonics a phone can play

- **Stock tools**: Fruity Soft Clipper, Live's Saturator with Soft Clip, Logic's Clip Distortion

- **Ours**: BEEFY: BEEF for the harmonics, SOFT CLIP for the peaks, both on one knob

- **The ceiling**: Spotify asks for −1 dB true peak, and −2 if the master is louder than −14 LUFS

## Why the 808 clips before anything else

The 808 is a sine, or close to one, and a sine spends most of its cycle near its own peak. Its crest factor, the gap between peak and RMS, is 3.01 dB. A snare's is somewhere between 8 and 12. So at the same peak level, the 808 is five to nine decibels louder on average than the drums around it, which is why it is the first thing to hit the ceiling and the last thing you want to turn down. Peak at −6 dBFS and the sine's average is −9. Nothing else in the beat is that loud for that long.

The phone is the other half of the problem. Tune the note to F and it sits near 44 Hz, and most phone speakers give back very little below a couple of hundred hertz (exactly where varies by model). A sine has nothing above its fundamental, so nothing is left in the range the speaker can play. The ear rebuilds a missing low note if you give it the harmonics stacked above it: for that F, 87, 131, 175 and 218 Hz. Saturation and clipping create exactly those, which is why "louder without clipping" and "audible on a phone" are the same job. The mechanism is in [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/); this page is the loudness arithmetic.

## How much a clipper actually buys you

We ran the numbers on a 41 Hz sine, an E, clipped and then brought back up to its original peak. Shave 2 dB off the top with a hard clip and the average comes up 1.0 dB, with a third harmonic at 124 Hz sitting 21 dB under the fundamental. Shave 3 dB and the average comes up 1.3 dB, third harmonic at −17 dB. Shave 6 dB and you gain 1.9 dB of loudness and a third harmonic only 12 dB down, which is a square wave on its way to being a buzz.

A soft curve trades some of that loudness for a cleaner top. The same 3 dB through a rounded curve gains about 1.0 dB instead of 1.3, with the third harmonic at −18 dB and the fifth 35 dB down instead of 31. So the honest range is two to three decibels of clipping, about one decibel of loudness, and a set of odd harmonics in the 120 to 220 Hz band where a phone speaker lives. Past that the gain curve flattens and the buzz does not. [Crest factor](https://gazillionindustries.com/crest-factor/) is the number behind all of it.

## Do it, in order

- Tune the 808 to the key, and check the note on a tuner, not by ear against the bass.

- Set the 808's channel so its peaks land at −6 dBFS with everything else muted.

- Insert a saturator and drive it until a tuner or spectrum display shows harmonics at 2, 3 and 5 times the fundamental.

- Insert a soft clipper after it and raise the input until the clip light shows on the sustained note, then back off until 2 to 3 dB are being shaved.

- Lower the output to match the bypassed level and compare on the phone, not the monitors.

- Sidechain the 808 to the kick, 2 to 4 dB of ducking with a release that clears before the next kick.

- Leave the master to a limiter with its ceiling at −1 dBTP.

Step two is where most 808s go wrong. A sine peaking at −1 dBFS leaves the clipper nothing to do except hit the master, and a sine peaking at −18 forces the saturator to add gain instead of harmonics. Six decibels of headroom is the room the next three steps spend. The kick relationship in step six is its own subject, in [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/).

Or put [BEEFY](https://gazillionindustries.com/beefy.html) on the 808 and do steps three and four with one knob. BEEF adds the harmonics as it goes up, SOFT CLIP opens switched on and handles the gain staging, and the clip lights show you both ends. The demo on the page is 28 seconds.

**SOFT CLIP** as the out stage, BEEF at 62. One decision, both halves of the job.

## Clip the 808, limit the master, never the other way

A clipper on the master hears the 808, the kick and the hats at once, and the moment the kick drives it into the curve, everything else sounding at that instant is distorted too. The hats go gritty on every kick hit before the 808 shows any damage. A clipper on the 808 channel hears only the 808, so the harmonics it adds belong to the note and nothing else gets chewed. The master then needs a limiter, which is a different machine: Live's manual calls its Limiter "essentially a compressor with an infinite ratio", and Apple say Logic's Limiter "reduces any peak above the threshold to the threshold level". [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) has the full order.

## Stock plugins that do this

- **FL Studio**: Fruity Soft Clipper (every edition): Threshold and Post Gain; Fruity Limiter on the master

- **Ableton Live**: Saturator with Post Clip Mode on Soft Clip (every edition); Limiter with Ceiling Mode on True Peak for the master

- **Logic Pro**: Clip Distortion for the 808; Adaptive Limiter with Out Ceiling and True Peak Detection for the master

Fruity Soft Clipper has no oversampling and no knee control, so set its Threshold where the sustained note just rounds and bring Post Gain down to match. Live's Saturator has Hi-Quality in its title-bar menu, which Ableton say "reduces aliasing and improves sound quality"; turn it on for a sub. Logic's Clip Distortion clips where Drive puts it and has no ceiling, so its Output Gain is how you match level. The [free soft clipper guide](https://gazillionindustries.com/free-soft-clipper-plugin/) covers the downloads if your DAW's one runs out.

## Where the loudness actually ends up

Not on the master. Spotify's own page says tracks are adjusted "to −14 dB LUFS, according to the ITU 1770 standard", that a louder master gets negative gain, and that you should "keep it below −1dB TP (True Peak) max", or below −2 if the master is louder than −14 LUFS, "to avoid extra distortion". Apple's mastering guidance is "to leave at least 1 dB of headroom". So a master pushed another decibel into a clipper is turned back down on arrival, and what survives the turn-down is the 808's own average level against the rest of the mix. That is why the work happens on the channel. [How to make your mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/) is the master-bus version of this page.

## What it costs

It costs the sine. Two decibels of clipping and the note has an edge; six and it buzzes, and the buzz is louder on the phone than the sub was, which was the point until it was too much. It costs the kick its space: a saturated 808 now has energy at 120 to 250 Hz, exactly where a kick's body sits, so step six stops being optional. And it costs you the ability to fix it later. A clipped 808 bounced into the beat is the 808. Print it when it sounds right on the phone and the monitors on the same afternoon, and not before.

## Questions people ask

### Why does my 808 clip when nothing else does?

Because a sine's average level is only 3 dB below its peak, where a drum's is 8 to 12. At the same peak the 808 is the loudest average thing in the beat, so it reaches the ceiling first and stays there longest.

### How loud should an 808 be?

Peaking around −6 dBFS on its own channel before processing, which puts its average near −9. Judge the final level on a phone speaker at the same loudness as the bypassed version, since a louder channel wins every comparison for the first few seconds whether or not it is better.

### Should I use a clipper or a limiter on an 808?

A soft clipper on the 808, a limiter on the master. The clipper has no attack or release and adds harmonics to the one sound you want them on. The limiter catches what is left at the end of the chain without distorting the hats on every kick.

### Saturation before or after the clipper?

Before. Saturation adds the harmonics; the clipper then shaves the peaks of a signal that already has them. In BEEFY that order is built in: BEEF is the saturation and SOFT CLIP is the output stage.

### Why does my 808 distort on phone speakers?

Usually because it was over-clipped: the harmonics that made it audible are now a buzz the phone plays well and the sub it was meant to represent is gone. Back the clipper off to 2 or 3 dB and let the saturation carry the midrange instead. [How to distort 808s](https://gazillionindustries.com/how-to-distort-808s/) covers the deliberate version.

### Does a louder master make the 808 louder on Spotify?

No. Spotify normalizes to −14 LUFS and turns louder masters down. What survives is the 808's level relative to the rest of the mix, which is set on its channel, not on the master.

## What BEEFY does

BEEFY is our saturation and loudness plugin for Mac and Windows, $39, and it covers steps three and four above in one window. **BEEF** is the main event: more weight, density and loudness as it goes up, and the harmonics above the low end so there is more to hear than sub. **SOFT CLIP** opens switched on and takes care of the initial gain staging, so there is no input level to hunt for. **JUICE** sets the level going in, **COOK** moves the color from rounder toward brighter and more bitten, and **LIMIT** is the other output stage if you would rather hold the peaks than round them. Input and output clip lights, a cow that reacts to the audio. VST3, AU and standalone on the Mac, VST3 on 64-bit Windows.

Back to the car. The 808 is still not shaking anything through that speaker, and you can hear the note now, every time, which on a phone is as loud as a note gets.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
