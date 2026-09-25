# How to make bass fatter

> How to make bass sound fatter and thicker: layer a sub and mid-bass, add harmonics, compress for consistency, clear the low mids, and make bass growl.

Source: https://gazillionindustries.com/how-to-make-bass-fatter/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A thin bass is a suit two sizes too small: technically there, obviously wrong, and everyone in the room notices before you do. Nobody ever accused Bootsy Collins of dressing a bassline that way.

To make bass fatter, build body and harmonics around the sub rather than just adding more low end. Layer a clean sub with a mid-bass sound, add saturation or distortion for harmonics, compress for a steady level, give the low mids room in the mix, and keep the low end mono. For growl, push the distortion further and move a filter over time. Then check on big and small speakers.

## The short version

- **Layers**: clean sub below, mid-bass with character above

- **Harmonics**: saturation or distortion on the upper layer

- **Compression**: even level so every note lands

- **EQ**: body in the low mids; don't just boost the sub

- **Growl**: harder distortion plus filter movement

- **Mono**: keep the low end centered

- **Crossover**: one number, usually near 100 Hz, and both layers obey it

- **Proof**: mono sum, level-matched bypass, phone speaker, full arrangement

**BEEF at 96.** Past where most settings want to live.

## What "fat" actually is

Fat bass is a bass whose low end, body and harmonics all show up together, note after note. More sub on its own never gets there. A sub alone is felt more than heard and disappears on small speakers; harmonics alone sound thin and buzzy. Fat is both, at a steady level, with enough room around it that nothing else steps on it.

## Where fat lives, in hertz

Bass notes sit lower than most people picture, and the arithmetic settles a lot of arguments before they start. Equal temperament with A4 at 440 Hz puts the open low E of a bass guitar at 41.20 Hz, the low B of a five-string at 30.87 Hz, and the C1 that a great many sub patterns are written on at 32.70 Hz. G1 is 49.00 Hz. A1 is exactly 55.00 Hz.

- **B0**: 30.87 Hz — one cycle lasts 32.4 ms

- **C1**: 32.70 Hz — 30.6 ms

- **E1**: 41.20 Hz — 24.3 ms

- **G1**: 49.00 Hz — 20.4 ms

- **A1**: 55.00 Hz — 18.2 ms

Those cycle times are the reason bass refuses to behave like the rest of the mix. One cycle of E1 lasts 24.3 ms, which is longer than the whole attack and release of a compressor set up for drums. Any processor whose gain moves faster than 24.3 ms on that note is moving inside the waveform rather than around it, and the ear hears that as grit rather than control.

The harmonics matter more than the fundamental does, and they are just multiplication. E1 at 41.20 Hz has partials at 82.41, 123.61, 164.81, 206.02, 247.22, 288.42, 329.62 and 370.83 Hz, marching on at 41.20 Hz intervals forever. That spacing is what the ear reads as the pitch, which is how a bassline keeps its note on a speaker that reproduces none of its fundamental. Fatness is mostly a question of what you put in that series and how much of it.

## Layer a sub and a mid-bass

Split the job. One layer is a clean, mostly sine-like sub that holds the floor. The other is a mid-bass sound with more character, filtered so its lowest octave doesn't double the sub. The sub gives weight on big systems; the mid-bass gives body and definition everywhere else. Tune both to the same notes and keep their starts lined up.

## Setting the crossover between the two layers

Pick one frequency and make both layers obey it. Near 100 Hz works for most music, because it sits above the fundamental of everything in the table above and below the range where the note starts to sound like an instrument. Write the number down and use it on both filters, or the two layers will overlap in a band neither of them owns.

Slope decides how clean the handoff is. A 24 dB-per-octave high-pass at 100 Hz is 24 dB down an octave lower at 50 Hz and 48 dB down two octaves lower at 25 Hz, which leaves the sub in sole possession of the bottom. The same filter at 12 dB per octave is only 12 dB down at 50 Hz, and 12 dB is still plenty of level for two layers to argue over a fundamental. Use the steeper slope on the character layer and let the sub run open below it.

## The two ways a layered bass goes thin

Both of them sound like the layers being quieter than they are, and neither is fixed by turning anything up.

The first is timing. Two layers playing the same note *D* milliseconds apart sum with notches at odd multiples of 1/(2D). A 5 ms offset notches at 100, 300 and 500 Hz, straight through the body you are trying to build. A 10 ms offset notches at 50, 150 and 250 Hz, and that first null lands on the fundamental of G1. Line the two starts up to the sample, or accept that your crossover has moved somewhere you did not choose. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) covers the shape of it.

The second is tuning. Detune that reads as lush on a pad reads as a fault down here, because the beat rate scales with pitch. Five cents at 41.20 Hz is 41.20 × (2^(5/1200) − 1) = 0.119 Hz, one slow swell every 8.4 seconds. Held notes drift in and out of level over a whole bar and a half, so the bass sounds inconsistent and no single note sounds wrong. Tune both layers to the same cent value and leave the detune for something above 200 Hz.

## Add harmonics

Saturation or distortion on the mid-bass layer (or a high-passed copy of a single bass) thickens it and makes it audible on phones and laptops. Start gentle for warmth, push harder for grit. The details are in [how to use saturation in a mix](https://gazillionindustries.com/how-to-use-saturation/) and [parallel saturation](https://gazillionindustries.com/parallel-saturation/).

**BEEF at 8.** The reference you A/B against.

## What a soft clipper puts where

Saturation is the one processor on this page that adds material rather than rearranging it. EQ can only change the level of frequencies that are already in the signal, so a 6 dB boost at 60 Hz on a bass that is already carrying its fundamental raises a band the listener's laptop still cannot deliver. Harmonics are new content, placed at exact multiples of the note, and they land where a small speaker actually works.

Symmetry decides which ones. A symmetric clipper, driven equally on both halves of the wave, produces odd harmonics only, so E1 comes back with added energy at 123.61, 206.02, 288.42 and 370.83 Hz. An asymmetric drive adds the even ones too, at 82.41, 164.81 and 247.22 Hz. Odd harmonics read as hollow and aggressive; even ones read as warm and closer to an octave doubler. Both are covered in [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) and [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

How much you get is steeper than it feels. Take the textbook soft clipper y = x − x³/3 and feed it a sine of amplitude *A*. Since sin³θ = (3 sin θ − sin 3θ)/4, the output is A(1 − A²/4) sin θ + (A³/12) sin 3θ. The third harmonic is A³/12, so it grows as the cube of the input: 6.02 dB more drive buys 18.06 dB more third harmonic. At A = 0.5 that harmonic sits 33.06 dB under the fundamental and you can barely hear it. At A = 1.0 it sits 19.08 dB under and it is the sound.

That cube law is the whole experience of saturating a bass: nothing, nothing, nothing, too much, across about six decibels of input. Which makes the input control the one that decides the tone, and the output control merely the one that makes it match. Set the drive by ear, then trim back to a level match before you judge anything. [Gain staging](https://gazillionindustries.com/gain-staging/) is the difference between choosing a sound and choosing a volume.

## Soft clip or limit on the bass

The two output stages solve the same problem and leave different damage. Start with what is available: a pure sine has a peak-to-RMS ratio of 20 log10(√2) = 3.01 dB, and a square wave has 0 dB. Clip a sine bass all the way to a square and the most average level you can win at a fixed peak is 3.01 dB. Everything beyond that comes from the harmonics you added on the way, which is a different sound rather than more of the same one. [Crest factor](https://gazillionindustries.com/crest-factor/) is the number to watch.

Clipping does its work instantly and only on the samples that exceed the threshold, so the note's shape survives and the excess turns into harmonics. A limiter turns the whole signal down for a few milliseconds around each peak, and a few milliseconds on a 24.3 ms cycle is a quarter of the waveform. Set fast on bass, a limiter dulls the front of the note and pumps the sustain; set slow, it stops catching the peaks it was hired for. [Limiter versus compressor](https://gazillionindustries.com/limiter-vs-compressor/) and [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) have the chain order.

In practice: clip the bass, limit the mix. If you use both, put the clipper first so the limiter has less to do, and check the result as sample peaks and as intersample peaks, which are not the same number. [True peak](https://gazillionindustries.com/true-peak/) explains the gap and why a file that reads −0.1 dBFS can still distort on somebody's phone.

**SOFT CLIP** as the output stage.

## Compress for consistency

A bass that jumps in level from note to note never sounds full. Moderate compression evens it out so every note carries the same weight. Slower attack keeps the pluck or front edge; faster attack smooths it. On bass guitar this does more for fatness than any EQ move.

[BEEFY](https://gazillionindustries.com/beefy.html) is built for this: more weight, density and loudness with one big knob. The demo on the page is 28 seconds.

## Compressor times on a 41 Hz note

Set the times against the cycle, not against a preset name. At E1 one cycle is 24.3 ms. A 10 ms attack lets 41 percent of the first cycle through before gain reduction arrives, which keeps the finger or the pluck and catches the body. A 1 ms attack arrives long before the wave has finished its first swing and takes the front of the note with it. A 30 ms attack passes a cycle and a quarter untouched, which is a sound in its own right and not much like control.

Release is where bass compressors get ugly. Anything under about 24 ms puts the gain movement inside a single cycle, and the detector starts tracking the waveform instead of the performance. You hear that as a buzz that appears on the low notes and vanishes on the high ones. Keep the release above two or three cycles, so 49 to 73 ms at E1, and longer if you want the line to breathe.

Recovery is exponential, which makes the rest arithmetic. One time constant returns 63 percent of the gain, two returns 86 percent, three returns 95 percent. At 90 BPM an eighth note lasts 333 ms, so a 150 ms release has recovered 89 percent before the next note lands and every note starts from the same place. A 400 ms release has recovered 57 percent, and the bass moves with the bar rather than with the note. Both are usable. Only one of them is even.

Ratio and amount, last. Six decibels over the threshold at 4:1 comes out 1.5 dB over, which is 4.5 dB of gain reduction. Three to six decibels on the loudest notes is a fat bass. Twelve is a flat one, and no amount of makeup gain puts the movement back. [What a compressor does](https://gazillionindustries.com/what-is-a-compressor/) covers knee, detection and the rest.

## How to make bass growl

- Start from the mid-bass layer or a high-passed copy of the bass.

- Drive a distortion or soft clipper until the tone turns aggressive.

- Put a low-pass filter after it and move the cutoff over each note, with an envelope or LFO.

- Add a little resonance so the movement talks.

- Blend it over the clean sub and keep the sub untouched.

The growl is the moving filter on distorted harmonics. Without the movement it's just a buzzy bass; without the distortion there's nothing for the filter to sweep.

Rate is the parameter nobody names. Sweeping a cutoff from 200 Hz to 2 kHz covers log2(10) = 3.32 octaves, and doing it in 120 ms is 27.7 octaves per second, which reads as a snarl at the front of the note. Stretch the same sweep over 600 ms and it is 5.5 octaves per second, which reads as a wah. Same filter, same distortion, same depth; only the clock changed. [Cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/) and [how to make a filter sweep](https://gazillionindustries.com/how-to-make-a-filter-sweep/) go further into the gesture.

## Hear what the movement does

This is a full loop through [F12](https://gazillionindustries.com/f12.html) rather than an isolated bass, so take it as the gesture and not as the bass sound. The point is what a moving filter does to the meters compared with a parked one. Peak, mean and crest figures are measured off these four files.

- **Open** — peak −5.43 dBFS, mean −16.23, crest 10.80 dB — https://gazillionindustries.com/f12/f12-clean.m4a

- **Filter 60** — peak −8.61, mean −17.60, crest 8.99 dB — https://gazillionindustries.com/f12/f12-filter60.m4a

- **Filter 30** — peak −13.79, mean −24.09, crest 10.30 dB — https://gazillionindustries.com/f12/f12-filter30.m4a

- **Swept** — peak −7.71, mean −20.41, crest 12.70 dB — https://gazillionindustries.com/f12/f12-filter-sweep.m4a

Four renders of the same 1.05-second loop at 44.1 kHz, no other processing. The swept file has the highest crest factor of the four, wider than any fixed position — 3.71 dB wider than the same filter parked at 60. That is the growl on a meter: a note that keeps changing how much of itself is arriving. It is also the reason a growling bass eats headroom that a static one does not: leave room after the filter for whatever catches those peaks, and expect to give up two or three decibels you would have kept on a parked sound.

## Give it room

Fatness disappears when other parts crowd the same range. Keys, pads and guitars with a lot of low-mid content blur the bass's body, so thin those out a little. If the kick and bass overlap, sort that first: [how to mix the kick and the 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) covers the low-end handoff.

Two parts cannot both own 150 Hz, and the one that wins is whichever one you decided on. Pull 2 to 4 dB out of the electric piano at 200 Hz and the bass gets fatter without the bass fader moving, because the ear reads that band as belonging to one instrument now instead of three. [Why a mix goes muddy](https://gazillionindustries.com/why-is-my-mix-muddy/) is this same move, repeated across the whole session.

## Keep the low end mono, and why

Two channels carrying identical low content sum to exactly 6.02 dB more level in mono. Delay one of them and that addition turns into subtraction at odd multiples of 1/(2D): a 2 ms spread nulls at 250 Hz, a 5 ms spread at 100 Hz, a 10 ms spread at 50 Hz. Widening plug-ins, stereo doublers and any chorus in the chain all work by delaying a copy, so all of them put a notch somewhere in the bass.

The fix is to split rather than argue. Low-pass one copy at 100 Hz, collapse that copy to mono and leave it dry; send only the band above it anywhere near a widener. Then sum the master to mono and listen to the bottom. If the low end drops when you press the button, you are donating that much bass to every phone, laptop, shop system and club sub that will ever play the record. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) has the test in full.

## How to make bass fatter, step by step

- Write the bassline on a clean sine sub and tune it to the key.

- Add a second layer with harmonic content on the same notes.

- High-pass the second layer at 100 Hz with a 24 dB-per-octave slope.

- Align the two layers to the sample so nothing combs.

- Tune both layers to the same cent value, with no detune below 200 Hz.

- Saturate the upper layer and stop when the third harmonic is audible.

- Compress with a 10 ms attack, a 150 ms release and 3 to 6 dB of gain reduction.

- Cut 2 to 4 dB at 200 Hz on the parts that crowd the body.

- Collapse everything below 100 Hz to mono.

- Clip the bass bus rather than limiting it.

- Level-match the processed version to bypass inside 0.5 dB.

- Sum the mix to mono and confirm the low end does not drop.

- Play the bounce on a phone speaker and confirm the note still has a pitch.

- Play it in the arrangement at conversation volume before you commit.

## What goes wrong, and what each fault sounds like

- **More sub, nothing else**: loud on the meter, absent on every speaker under six inches, and the whole mix loses headroom

- **Layers a few ms apart**: a hollow band that moves when you change the offset; solo sounds fine, the sum does not

- **Both layers running full range**: the note doubles in level on some pitches and cancels on others, so the line reads uneven

- **Detune on the sub**: a slow swell every several seconds; notes seem to go missing at random

- **Compressor release too short**: a buzz that shows up only on the lowest notes and disappears an octave up

- **Too much drive**: fizz above 1 kHz and a flattened front; the bass reads loud, busy and small

- **Widener on the whole bass**: enormous in the room, gone in mono, thin on a phone and on a club sub

- **Fatness judged unmatched**: the louder version wins every time, and the louder version was 1.5 dB louder

The last one survives more sessions than all the others put together, because it never sounds like a mistake. Doubling an amplitude is +6.02 dB, and nearly every stage on this page adds some. Match inside half a decibel or you are auditing the gain knob.

## Check it in four places

A fat bass is a claim about rooms you are not sitting in, so go and check it in them. Mono first, because that is where width turns into subtraction and where layering mistakes stop hiding. Level-matched bypass second, for the reason above.

The phone is third and it is the real one. A phone speaker puts out very little below roughly 500 Hz, and how little varies a lot by model. For E1 at 41.20 Hz that means the first partial the speaker has any chance with is the 13th, at 535.64 Hz; for C1 at 32.70 Hz it is the 16th, at 523.25 Hz. Everything below is simply not delivered, and the pitch you hear is the one your ear rebuilds out of the 41.20 Hz spacing between the partials that survive. Which is the whole argument for saturating a bass rather than boosting it: only the harmonics arrive. [How to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) is the long version.

Fourth, the arrangement at conversation volume, where [the ear's own frequency response](https://gazillionindustries.com/fletcher-munson/) takes back most of the low end you have been admiring at monitoring level. And treat your room as a suspect while you are at it: sound travels at about 343 m/s, so a 3.5 m dimension has its first axial mode at 343/(2 × 3.5) = 49.0 Hz and a 4.2 m dimension has one at 40.8 Hz. Those are the notes your room will lie to you about, and they are exactly the notes in the table at the top of this page.

## Doing it in Ableton, Logic and FL Studio

The method does not change and only the device names do. In Ableton Live, EQ Eight sets the crossover, Saturator adds the harmonics, Glue Compressor evens the level, and Utility covers both low-end jobs: its mono-below control keeps the bottom centered and its mono switch runs the check. Line the layers up with the clip envelopes rather than by eye.

In Logic Pro, Channel EQ handles the split, ChromaGlow (Logic Pro 11 and later) or Overdrive supplies the harmonics, and the stock Compressor has the attack and release values above. Direction Mixer's Spread sets width, and the Gain utility has both a mono button and a phase invert for testing. In FL Studio, use Fruity Parametric EQ 2 for the crossover, Fruity Blood Overdrive or Fruity Soft Clipper for the harmonics, Fruity Limiter in compressor mode for the level, and Fruity Stereo Enhancer with stereo separation pulled toward mono on the low layer.

Where a DAW has no mono-below device, build one in thirty seconds: duplicate the bass, low-pass one copy at 100 Hz and collapse it to mono, high-pass the other at 100 Hz and do what you like with it. It behaves identically and you can see exactly what it is doing, which the single-knob version never shows you.

## What a fat bass costs

Headroom, first. Every stage here raises average level against a fixed ceiling, and the bass is already the loudest thing in the spectrum on most records. A growling bass costs more of it than a static one, for the reason the meters above show: the sweep's crest factor ran 3.71 dB wider than the parked filter, and that width has to live somewhere. [Headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/) covers how much to leave.

Then transients. Crest factor you remove is attack you do not get back, and a bass squeezed from 10 dB peak-to-average down to 4 has stopped moving whatever the loudness meter says about it. Then width, which mono takes back in full. And finally the arrangement: a fat bass occupies the range the kick, the low vocal and the left hand of the keys were all counting on. Decide early which of them is the record and thin the others deliberately, because the alternative is thinning all four by accident and calling the result muddy.

## Questions people ask

### How do I get a fat bass tone?

Combine a clean sub with a mid-bass layer that has harmonics, add saturation for body, compress for an even level, and clear the low mids of competing parts. Fat comes from body and harmonics as much as from low end.

### How do I make my subs hit harder?

Keep the sub clean, tuned and in mono, give it room from the kick with timing or sidechain, and add harmonics on a layer above it so it's heard on small speakers. More sub level alone mostly eats headroom.

### How do I increase bass volume without muddying the mix?

Add harmonics and body rather than raw low end, cut competing low-mid content from other parts, and control the bass's peaks with compression or soft clipping so it can sit louder without clipping.

### What frequency makes bass sound fat?

Fatness lives in two bands at once. Weight sits at the fundamental, 30 to 55 Hz for most bass notes, and body sits in the harmonics between roughly 80 and 400 Hz. Boosting only the first gives you a rumble that small speakers never reproduce. Adding content in the second gives you a note that survives a phone and a laptop.

### Why does my bass sound thin on laptop speakers?

Because there is nothing there for the laptop to play. A small driver has almost no output below about 500 Hz, so a bass carried entirely by its fundamental arrives as silence. Saturate it so the note has partials above 500 Hz, and the ear rebuilds the pitch from their spacing.

### Should I use distortion or EQ to make bass fatter?

Distortion, when the problem is that content is missing. EQ can only change the level of frequencies that are already in the signal, so a boost at 200 Hz on a pure sine raises nothing at all. Saturation puts new partials at exact multiples of the note. Use EQ afterwards to shape what the saturation created.

### How do I make an 808 fatter?

Treat the fundamental and the harmonics as two jobs. Leave the sub clean and in mono, run a high-passed copy through a clipper or saturator so the note has a body, and blend the two. Then tune it, because an untuned sub note fights the key more than any processing can fix. [How to distort 808s](https://gazillionindustries.com/how-to-distort-808s/) and [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/) go further.

### Should my bass be in mono?

Below about 100 Hz, yes. Anything stereo down there is a delayed or level-shifted copy, and the mono sum turns that into notches at odd multiples of 1/(2D). Above 100 Hz, widen as much as the mono check survives.

### How much compression should I use on bass?

Three to six decibels of gain reduction on the loudest notes, at 3:1 or 4:1. A 10 ms attack keeps the front of the note on a 41 Hz fundamental, and a release of 150 ms or longer keeps the gain movement outside the 24.3 ms cycle. Shorter releases than that start distorting the low notes.

### Why does my bass compressor sound distorted?

The release is shorter than one cycle of the note. At E1 a cycle lasts 24.3 ms, so a 10 ms release runs through more than two full recoveries inside every cycle and the detector ends up tracking the waveform instead of the performance. Raise the release to 50 ms or more, or switch the detector to RMS if the compressor offers it.

### Does clipping make bass fatter?

It makes it louder and adds harmonics, which reads as fatter up to a point. The ceiling is arithmetic: a sine has 3.01 dB of peak-to-average to give up, so that is the most average level available at a fixed peak. Past there you are buying harmonics, and whether they sound fat or fizzy is a taste question about how many and how high.

### Why does my bass clip when it doesn't sound loud?

Low frequencies move a peak meter far harder than they move your ear, because the ear's sensitivity falls away steeply below 100 Hz. So the meter fills long before the bass sounds loud. Watch peak against average rather than peak alone, and remember a moving filter widens the gap: the swept file above ran 3.71 dB wider than the same filter held still. [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/) is the curve behind it.

### Should I layer the bass or just saturate it?

Saturate first, because it is one plug-in and it solves the small-speaker problem on its own. Layer when you want the two jobs voiced separately, for instance a sine sub with a completely different instrument carrying the body. Layering also brings timing and tuning problems that a saturator does not.

### How do I make a bass guitar sound fatter?

Compression does more here than anything else, because the level varies with the player's fingers from note to note. Even it out first at 3 to 6 dB of gain reduction, then add saturation for harmonics, then look at EQ. Cutting 2 to 3 dB around 400 Hz often reads as more weight than boosting 80 does.

### Why does my bass sound fat in headphones and thin in the car?

Headphones deliver the fundamental straight to your ear with no room and no cancellation. A car adds a boxy space, a mono-ish sum in the back and a lot of road noise in the low mids. If the difference is dramatic, check the mono sum first, then check whether the fatness lives entirely below 100 Hz.

### What is the difference between a fat bass and a loud bass?

Fat is spectral and loud is a fader. A fat bass has content across two or three octaves of harmonics so it stays present on every system; a loud bass has more level in whatever band it already had. The test is to turn the whole mix down 12 dB. Loud disappears. Fat stays legible.

### Why does my bass disappear when the drums come in?

The kick and the bass are competing for the same 40 to 120 Hz and one of them is winning at random. Give them separate jobs by frequency or by time: duck the bass for 40 to 80 ms under each kick, or carve a narrow band out of one of them. [Sidechain compression](https://gazillionindustries.com/sidechain-compression/) and [mixing the kick and the 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) cover both routes.

### Where does saturation go in the bass chain?

After a static filter and before the compressor for a predictable result: the filter decides what gets driven, and the compressor then sees a signal whose crest factor the saturation has already reduced. A growl is the exception, because there the filter is the gesture and it needs harmonics to sweep, so the drive goes first. Putting the saturator after the compressor makes the same drive setting bite noticeably harder either way, so drop its input 3 to 6 dB when you move it there and judge again.

## Stock plugins that do this

- **FL Studio**: Fruity Blood Overdrive; Fruity Soft Clipper

- **Ableton Live**: Saturator; Roar (Live 12)

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

- **Any DAW**: duplicate the bass, low-pass one copy at 100 Hz and sum it to mono, saturate the other

## What BEEFY does

BEEFY is our saturation and loudness plugin for making sounds thicker, punchier and more up front, and 808s and bass are very much invited. **BEEF** adds weight, density and loudness as you turn it up. **SOFT CLIP**, on by default, adds harmonics above the low end and can take a clean bass note toward a growl. **COOK** moves the tone from rounder toward brighter and more bitten, and **JUICE** sets the level going in.

Every new instance opens the same way: SOFT CLIP on, JUICE at 0 dB, BEEF at 30, COOK at 30. On a sub that has no body yet, that is already a working starting point. Raise BEEF until the harmonics arrive and the note reads on the small speaker, set COOK by ear — lower for weight, higher for edge — and remember the cube law from further up: the last few decibels of JUICE change the sound far more than the first few did. **LIMIT** is the other output stage. Try both at the same drive on the same bar and keep whichever leaves the front of the note intact, because on bass that front edge is the part the ear uses to find the pitch. Then pull JUICE back until the processed version matches bypass, and decide. BEEFY is $19, Mac and Windows, AU, VST3 and standalone.

**LIMIT** instead, everything else identical.

Same bassline, tailored this time. The whole room notices, for the right reason.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
