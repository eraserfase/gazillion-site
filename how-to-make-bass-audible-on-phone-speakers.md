# How to make bass audible on phone speakers

> Why bass disappears on phone speakers and how to fix it in the mix: harmonics, a mid-bass layer, EQ that helps, writing for small speakers, and how to test.

Source: https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Hearing a bassline through a phone speaker is like watching a stadium show through a keyhole. The show is happening. You're just getting whatever fits through a hole the size of a fingernail.

To make bass audible on phone speakers, give it content the phone can actually play. Add harmonics with saturation, distortion or soft clipping; layer or boost a mid-bass range above the sub; write lines that use higher notes where it matters; keep the low end mono; and don't pile on sub level, which phones can't reproduce and which just uses up headroom. Then test on a real phone, not a guess.

## The short version

- **Harmonics**: saturation or soft clipping on the bass

- **Mid-bass**: a layer or gentle boost above the sub

- **Notes**: higher notes read better on small speakers

- **Sub**: don't boost it for phones; it doesn't come through

- **Mono**: stereo width barely survives a phone; check in mono

- **Test**: bounce it and play it on an actual phone

**BEEF at 8.** The reference you A/B against.

## Why bass disappears on phones

A phone speaker is tiny, and tiny speakers physically can't move enough air to reproduce low frequencies. Most phone speakers give back very little below a couple hundred hertz, and exactly where they fall off varies by model. A bass sound that lives mostly below that range, like a clean sub or a sine-like 808, arrives at the listener as almost nothing.

The fix is the missing fundamental. When a sound has harmonics at whole-number multiples of a low note, the ear hears the low note even if the speaker never plays it. **Your job is to give the phone harmonics to play.**

The reason it can't is one line of physics, and it is worth carrying around. The pressure a small radiator puts into a room follows the *acceleration* of the air it displaces, not the distance it travels. Acceleration goes as (2πf)2, so at a fixed output level the required cone travel scales with 1 / f2. Drop an octave and the driver has to move 22 = 4 times as far for the same result. Drop two octaves and it is 24 = 16 times. Three octaves is 64 times.

Nothing in a phone has 64 times anything spare. The driver hits the end of its travel, the enclosure behind it is a few cubic centimeters of air acting as a spring, and below the point where that spring takes over, output falls away on a slope. That is the whole story. No mix decision repeals it.

## What the roll-off costs, in dB

Put a number on the slope and the problem stops being vague. A small sealed radiator behaves like a second-order high-pass below its resonance, which is 12 dB per octave once you are clear of the corner. Call the corner fc and the arithmetic runs like this, computed from the standard second-order magnitude 1 / √(1 + (fc/f)4).

- **at fc**: −3.0 dB

- **one octave below**: −12.3 dB

- **two octaves below**: −24.1 dB

- **three octaves below**: −36.1 dB

- **four octaves below**: −48.2 dB

Now put a corner in and turn the crank. Take a hypothetical handset whose corner sits at 500 Hz. An E1 at 41.20 Hz is log2(500/41.2) = 3.6 octaves below it, and the formula returns −43.4 dB at that frequency. Move the corner down to a flattering 300 Hz and the same note is 2.86 octaves down and still −34.5 dB. Where a real phone's corner sits varies by model and is not something you can know from the session, so run the arithmetic for a couple of corners and work with the worse one.

Forty decibels is not a shortfall you close with a fader. Ten dB is a rough doubling of loudness, so recovering 40 dB by level alone is asking for something like 24 = 16 times the perceived loudness out of a part that is already the loudest thing in the file. The slope wins. The only move left is to put energy somewhere the slope is not.

## Add harmonics

Saturation, distortion and soft clipping all add harmonics above the notes going in. A little on the bass makes it audible on a phone without changing much on big speakers. To keep the sub clean, drive a copy with its low end filtered out and blend it under the original. The full method for 808s is in [how to distort an 808](https://gazillionindustries.com/how-to-distort-808s/), and the theory is in [saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/).

## Which harmonic actually clears the speaker

Harmonics land at whole-number multiples of the note, so the note decides how far up the series you have to go before anything clears the roll-off. Here is the first harmonic above 300 Hz for the notes an 808 line actually sits on, with the note frequencies from equal temperament at A4 = 440 Hz.

- **B0, 30.87 Hz**: 10th harmonic, 308.7 Hz

- **C1, 32.70 Hz**: 10th harmonic, 327.0 Hz

- **E1, 41.20 Hz**: 8th harmonic, 329.6 Hz

- **G1, 49.00 Hz**: 7th harmonic, 343.0 Hz

- **A1, 55.00 Hz**: 6th harmonic, 330.0 Hz

Read the left column and the right column together and the writing advice at the bottom of this page stops being taste. A line on A1 needs its 6th harmonic to survive. The same line dropped to B0 needs its 10th. The 10th harmonic of anything is a faint thing in most sounds, and the drive it takes to raise it is the drive that makes the part buzz on a proper system.

The full series for E1 runs 41.2, 82.4, 123.6, 164.8, 206.0, 247.2, 288.4, 329.6 Hz. Four of those eight are still underwater at a 300 Hz corner, and the first two are so far down the slope they may as well not exist. When somebody says their 808 sounds fine in the room and vanishes on a phone, this table is what happened.

## How much harmonic a gentle drive actually makes

Most people underdrive the bass and assume the harmonics arrived. They can be measured. Take the textbook cubic soft clipper, y = x − x3/3, feed it a sine at amplitude A, and the algebra falls out in closed form: the fundamental comes out at A − A3/4 and the third harmonic at A3/12. Nothing else. Run the ratio.

- **A = 0.25**: 3rd harmonic 45.5 dB below the fundamental

- **A = 0.50**: 3rd harmonic 33.1 dB below

- **A = 0.75**: 3rd harmonic 25.3 dB below

- **A = 1.00, at the clip point**: 3rd harmonic 19.1 dB below

Hold that against the roll-off table. A polite drive on an E1 puts its third harmonic at 123.6 Hz, 33 dB down, on a part of the curve that is itself another 20-odd dB down. Two subtractions on the same signal. You added harmonic content and the phone still got nothing, which is the exact moment most people conclude that phone speakers are hopeless and stop.

Push to the other end and the numbers change character. Clip a sine all the way to a square and the harmonics are 4 / nπ for odd n, which is 1/n relative to the fundamental: the 3rd at −9.5 dB, the 5th at −14.0 dB, the 7th at −16.9 dB, the 9th at −19.1 dB. Now the 5th and 7th of an E1 — 206.0 and 288.4 Hz — are carrying real level in the region the phone can move. Square is too far for a musical part. The useful setting lives between those two tables, and the tables tell you which direction to walk.

The practical reading: drive until the harmonics are audible *on the phone*, then back off by ear on the monitors. Not the reverse. Setting drive on monitors and hoping is how the part ends up either inaudible on the phone or unbearable everywhere else. More on the shapes involved in [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) and [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

## The ear wants a cluster, not one harmonic

The missing fundamental is not magic and it has a requirement. What the ear reconstructs is the *spacing* of the surviving harmonics. Give it 206.0, 247.2 and 288.4 Hz and the gaps are 41.2 Hz each, so it resolves a 41.2 Hz note — the E1 you played, arriving through a speaker that never produced it.

Give it one lonely harmonic and there is no spacing to read. The pitch you hear is that harmonic's own pitch. The 5th harmonic of E1 is 206.0 Hz, which sits 0.14 semitones under G♯3. So a bassline reduced to its 5th harmonic plays back on the phone as a thin melody a major third off the one you wrote, in the wrong octave. That is a real failure mode and people describe it as the bass "sounding weird" rather than as what it is, which is a different tune.

So the target is two or three adjacent harmonics above the roll-off, not the single brightest one you can manufacture. That is also why an octave-up layer works so cleanly: a layer at E2, 82.41 Hz, has its own series at 164.8, 247.2 and 329.6 Hz, which are exactly the even harmonics of E1. It reinforces the same spacing instead of introducing a competing one.

## Layer a mid-bass

A second bass sound an octave up, or a layer with more body in the low mids, gives small speakers something real to play. Keep it lower in level than the main bass and filter its bottom so it doesn't double the sub. On synth bass, mixing in a brighter oscillator does the same job at the source.

Two numbers make the layer behave. High-pass the layer somewhere above the main bass's fundamental so the two are not stacking in the same region — for an 808 line living between B0 and A1, a high-pass around 150 to 200 Hz keeps the layer out of the sub entirely. And watch the summing: two parts at equal level add to 10 log10(2) = 3.0 dB above either one, and four of them to 6.0 dB, so a layer that sounds subtle soloed can be worth 3 dB of low-mid build-up in the mix. Set it in the arrangement, never soloed.

**LIMIT** instead, everything else identical.

## EQ with intent

Boosting the sub for phone listeners does nothing for them and costs everyone headroom. A gentle boost somewhere in the low mids, where the bass's upper harmonics and body sit, helps far more. Make the move on the bass, not the whole mix, and check that it doesn't turn the mix muddy on big speakers.

Here is the bill for the sub boost, in full. Suppose the 808 is already the peak-defining element, which it usually is. A +3 dB low shelf under 60 Hz raises the file's peak by up to 3 dB. You are bouncing to a ceiling, so the whole master comes down 3 dB to fit, and every other element in the record loses 3 dB against where it was. The phone listener heard none of the boost and all of the loss. That is the trade in one sentence, and it is the same arithmetic as [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

Spend the same 3 dB between roughly 150 and 400 Hz on the bass channel instead and every listener gets it, including the ones on a full-range system, where that band is where a bass reads as a note rather than as pressure. The risk there is mud, and [why a mix sounds muddy](https://gazillionindustries.com/why-is-my-mix-muddy/) is the same band from the other side. Narrow bells, on the bass channel, in the arrangement.

## The loudness curve is against you as well

A second effect stacks on top of the speaker's. Ears are far less sensitive to low frequencies than to mids, and the gap widens the quieter the playback. A phone on a table is quiet playback. The standard A-weighting curve is a decent stand-in for how the ear discounts the bottom end at modest levels, and it is a published formula, so the numbers can just be computed.

- **41.2 Hz**: −34.0 dB relative to 1 kHz

- **82.4 Hz**: −21.9 dB

- **123.6 Hz**: −16.3 dB

- **206.0 Hz**: −10.5 dB

- **329.6 Hz**: −6.3 dB

- **1 kHz**: 0 dB, by definition

The move from the fundamental at 41.2 Hz to its 5th harmonic at 206.0 Hz is worth 23.4 dB of ear sensitivity before the speaker has done anything at all. Add the roll-off on top and you can see why the harmonic route is not a consolation prize. It is the only route where both curves are working with you. [Fletcher–Munson](https://gazillionindustries.com/fletcher-munson/) covers the full picture, including what it does to your own judgment at 2 a.m.

[BEEFY](https://gazillionindustries.com/beefy.html)'s SOFT CLIP adds harmonics above the low end, so there's more to hear than sub. The demo on the page is 28 seconds.

## Write for small speakers

The arrangement matters too. A bassline that sits very low the whole time gives phones nothing; one that moves up the neck on the important moments comes through. You don't have to change the song, just notice where the lowest notes are doing all the work and whether a note an octave up would say the same thing.

The table above prices each choice. Writing the hook on A1 instead of B0 moves the first surviving harmonic from the 10th to the 6th, and a 6th harmonic is something a modest drive can actually produce. That is a free 4-harmonic head start, taken before you open a plugin, and it costs one note choice in one bar. Keep the low notes for the moments where the sub is the point, on a system that has one.

## Mono is not optional down here

Work out where the two speakers on a phone stop being two speakers. Sound moves at about 343 m/s, so a 100 Hz wave is 343 / 100 = 3.43 m long and its half-wavelength is 1.72 m. The earpiece and the bottom firing speaker on a large phone are maybe 13 cm apart. The frequency whose half-wavelength equals 0.13 m is 343 / (2 × 0.13) = 1319 Hz.

Below about 1.3 kHz, then, those two drivers are one source as far as the listener is concerned. Everything you did with stereo width in the bass is summed before it reaches an ear. If the left and right of the bass are out of phase with each other, that summing is a subtraction, and the part gets quieter on the phone than it was in your session — note by note, unevenly, depending on what each note's phase relationship happens to be. See [phase cancellation](https://gazillionindustries.com/phase-cancellation/) and [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

The rule that follows is short. Anything below roughly 150 Hz goes mono. Width on the bass, if you want it, lives in the harmonics above that, where it survives the sum and where the phone can play it anyway.

## Test it properly

- Bounce the beat and send the file to your phone.

- Play it on the phone speaker, not headphones, at a normal volume.

- Listen for whether the bassline's notes are followable.

- Adjust harmonics and mid-bass on the bass track, not the master.

- Recheck on your monitors or headphones so the big-speaker version still holds.

A phone's speakers sit a few centimeters apart, so stereo width barely survives; check the mix in mono too, because stereo tricks on the bass can cancel there. More in [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/).

Step three has a specific test and most people skip it. Do not ask whether you can hear bass. Ask whether you can *sing the line back*. Audible and followable are different results, and only the second one means the harmonic cluster is doing its job. If you can hear that something low is present but could not name the notes, you have one harmonic through and not three.

## Simulate the phone in the session

A phone in your hand is the real test and nothing replaces it. A filter on the master gets you close enough to iterate quickly between bounces, and the same arithmetic tells you what the filter is doing.

- Put an EQ on the master bus, last in the chain, and name it PHONE.

- Set a high-pass at 400 Hz with a 24 dB per octave slope.

- Set a low-pass at 8 kHz on the same instance.

- Sum to mono after it, so the check includes the phase penalty.

- Drop the monitoring level until it is genuinely quiet.

- Bypass the whole thing before you make any decision about the sub.

At those settings a 4th-order high-pass at 400 Hz puts 41.2 Hz down 79.0 dB, 82.4 Hz down 54.9 dB, 206.0 Hz down 23.1 dB and 329.6 Hz down 7.6 dB. That is harsher than a real phone at the very bottom and roughly right in the region that decides the outcome, which makes it a useful pessimist. Anything that survives this survives a handset.

Step six is not optional. Leave the PHONE band-pass engaged while you set the sub and you will overcook the low end for everybody, because you will be compensating for a filter of your own making. Turn it on to check, off to work.

## Where this sits in the chain

Order changes the result. The harmonic generator belongs on the bass channel, before the bus, so that the bus compressor and the master see the harmonics as part of the sound rather than as an afterthought glued on top. A saturator after a bus compressor gets fed an already-leveled signal and produces a more constant harmonic content, which is the flat, buzzy version of this technique.

The parallel version sidesteps the argument. Send the bass to an aux, high-pass that aux at 150 Hz, drive it hard, and blend it under the untouched original. Now the sub stays exactly as you wrote it, the harmonics are a fader, and you can set that fader on the phone. [Parallel saturation](https://gazillionindustries.com/parallel-saturation/) has the full version, and [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) covers what happens at the end of the chain.

One interaction to watch: the harmonics you added raise the average level without raising the peak much, which is a crest factor change. A sine has a crest factor of 20 log10(√2) = 3.01 dB and a square has 0 dB, so driving a sine-like 808 toward a squarer shape at the same peak is worth about 3 dB of RMS on that channel for free. Your bus compressor will notice. [Crest factor](https://gazillionindustries.com/crest-factor/) explains the meter you are reading.

## Failure modes, and what each one sounds like

- **Underdriven**: phone plays a soft thud with no pitch; the line is audible but you can't sing it

- **Overdriven**: nasal, honking midrange on monitors; on the phone the bass reads as a buzzing lead

- **One harmonic only**: the melody is transposed and thin; listeners say the bass sounds "off"

- **Layer too loud**: boxy around 200 to 400 Hz; the low end stops feeling low on big speakers

- **Sub boosted for phones**: the whole mix ducks on every bass note and nobody gains anything

- **Stereo bass**: level jumps note to note on the phone; some notes nearly vanish

- **Harmonics on the master**: vocals and hats get the drive too; the top end turns gritty

The middle three are the common ones and they all read as "something is wrong with my bass" rather than as a diagnosis. Work down the list against a bounce on a handset and each one identifies itself in about fifteen seconds.

## Stock plugins that do this

- **FL Studio**: Fruity Parametric EQ 2 for the band-pass; Fruity Waveshaper or Fruity Soft Clipper for harmonics; Wave Candy to see them arrive

- **Ableton Live**: EQ Eight for the band-pass; Saturator for harmonics; Utility with Width at 0 for the mono check; Spectrum to confirm

- **Logic Pro**: Channel EQ for the band-pass; Clip Distortion or Phat FX for harmonics; Direction Mixer with Spread at 0 for mono; MultiMeter for correlation

## What this costs

Every bit of this is a trade and it is fair to name them. Harmonics on the bass put energy in the low mids, which is the most crowded band in a modern mix, so a bass that now travels to a phone is also a bass that is competing with the snare body, the keys and the low end of the vocal. You will spend EQ moves elsewhere paying for it.

The mid-bass layer adds a second part to keep in tune, in time and in phase with the first, and a layer that drifts even slightly in phase against the main bass will subtract rather than add. And the phone-first mindset, taken too far, produces records that sound thin on the system where somebody was going to feel them. The sub is not the enemy here. It is a payload for a different delivery route, and it should still be correct.

Last cost, the honest one: this is iterative. Bounce, walk to the phone, listen, walk back. Three or four rounds on a bassline is normal and there is no plugin setting that skips them.

## Questions people ask

### Why can't I hear the bass on my phone?

Phone speakers are too small to reproduce most low frequencies. If the bass is mostly sub, like a clean 808, there's almost nothing left for the phone to play. Adding harmonics lets the ear hear the bass notes anyway.

### Should I boost the bass for phone speakers?

Not the sub. Boosting frequencies the phone can't play only uses up headroom. Add harmonics with saturation, or gently boost the low mids of the bass, where phone speakers can respond.

### How do I make my 808 louder on phone speakers?

Distort or saturate it so it has harmonics, layer a higher bass sound under it if needed, and check the result on a real phone. Raising the 808's level alone rarely helps.

### What frequency should I boost so bass shows up on a phone?

Roughly 150 to 400 Hz, on the bass channel, with a narrow bell. That is where the first surviving harmonics of a low 808 land: the 5th of an E1 is at 206.0 Hz and the 8th is at 329.6 Hz. Boosting below 100 Hz sends level to a region the handset cannot move.

### Why does my 808 sound like a different note on my phone?

One harmonic is getting through and the rest are not, so your ear takes the pitch of the survivor. The 5th harmonic of E1 is 206.0 Hz, which is essentially G♯3. Drive a little harder or add an octave-up layer so two or three adjacent harmonics come through together and the ear can read their spacing.

### Does distorting the bass ruin it on good speakers?

It can, if you set it on the phone and never check back. Set the drive so the line is followable on a handset, then A/B on monitors and pull back to the last setting that still passed the handset test. Parallel is the safer route: keep the original, drive a high-passed copy, and blend.

### Do I need to high-pass my 808 for phone listeners?

No. Removing the sub does not help the phone, since the phone was never going to play it, and it takes away the part every full-range system does play. High-pass the saturated copy or the layer, not the source.

### Does mono bass really matter for phones?

Yes, and the geometry says why. The two speakers on a large phone are around 13 cm apart, which means they act as one source below 343 / (2 × 0.13) = 1319 Hz. Anything out of phase in your low end gets subtracted rather than heard.

### How do I check my mix on phone speakers without a phone?

Band-pass the master from 400 Hz to 8 kHz with steep slopes, sum to mono after it, and monitor quietly. A 24 dB per octave high-pass at 400 Hz leaves 41.2 Hz 79.0 dB down and 206.0 Hz 23.1 dB down, so it is pessimistic at the very bottom and about right where it counts. Bypass it before you make any low-end decision.

### Should I just make the whole track louder?

No. Players even out level between tracks, so the loudness you buy at the master gets handed back, and the bass was missing for a reason that level does not address. See [how to make a mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/).

### Why is the bass fine in my car but gone on the phone?

A car plays the fundamental and the phone plays the harmonics, so the two are reproducing different halves of the same sound. A car that flatters the low end will hide exactly the problem this page is about. Check both, and trust the phone on whether the line is followable.

### Does the kick need the same treatment?

The attack of a kick already sits well above the roll-off, so a kick usually survives a handset better than an 808 does. What suffers is the relationship between them. [Mixing a kick and an 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) covers that, and [making drums cut through](https://gazillionindustries.com/how-to-make-drums-cut-through-the-mix/) covers the rest of the kit.

## What BEEFY does

BEEFY is our saturation and loudness plugin. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, adding harmonics above the low end so there's more to hear than just sub. **BEEF** adds weight and density as you turn it up, and **COOK** moves the tone from rounder toward brighter, which is where a phone listens.

A new instance opens with SOFT CLIP on, JUICE at 0 dB, BEEF at 30 and COOK at 30, which is a working starting point rather than a bypass. For this job, put it on the bass channel or on a high-passed parallel copy, set JUICE so the part is arriving at a sensible level, then raise BEEF while the whole arrangement plays. Stop at the first setting where the line is followable on a bounce to your phone, and then check it does not honk on monitors. COOK decides whether the new harmonics land as warmth or as edge, and edge is what a small driver reproduces.

**LIMIT** is the alternative to SOFT CLIP on the way out, and the two do not behave alike on bass. Soft clipping rounds the top of the waveform and leaves the note feeling immediate; limiting pulls the level down around the peak, which on a sustained 808 can make the whole note breathe. [Soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/) and [how to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) cover the choice. BEEFY runs on Mac and Windows as AU, VST3 and standalone, and it is $19.

**SOFT CLIP** as the out stage, BEEF at 62. Match the bypassed level before you judge it.

If the bassline needs holding together rather than thickening, [DRUGS](https://gazillionindustries.com/drugs.html) is our free one-knob bus compressor, Mac and Windows, with a DOSE control, a GAIN control and a soft ceiling on the way out. Judge it by bypassing the plugin rather than by turning DOSE down, because DOSE at zero is not unity and is still part of the sound.

Nobody's widening the keyhole. You just put the show where it can see through.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
