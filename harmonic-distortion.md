# Harmonic distortion

> What harmonic distortion is, where even and odd harmonics come from, why added harmonics make things louder, and why hi-fi minimises what producers pay for.

Source: https://gazillionindustries.com/harmonic-distortion/  
Published 2026-09-20, updated 2026-09-25. By Gazillion Industries, who make BEEFY.

---

Hi-fi manufacturers spend fortunes getting it down to a thousandth of a percent. Plugin companies charge you to put it back. Both are describing the same measurement, and the difference between them is entirely about how much and which kind.

Harmonic distortion is new frequency content added at whole-number multiples of the frequency going in. Feed a circuit a 100 Hz tone and get back 100 Hz plus some 200, 300 and 400 Hz, and that addition is the distortion. It is measured as total harmonic distortion, or THD, expressed as a percentage of the original signal. In playback equipment it is a fault to be minimized. In a mix it is a tool, because those added harmonics make a sound denser, brighter and easier to hear.

## The short version

- **What**: added content at multiples of the input frequency

- **Measured as**: THD, a percentage of the original signal

- **Even harmonics**: octaves and fifths above: read as full, warm

- **Odd harmonics**: read as edge, grit, hardness

- **In hi-fi**: a fault; lower is better

- **In production**: a control; the amount is the decision

- **1% THD**: the added content sits 40 dB under the fundamental

- **Square wave**: 48.34% THD, every part of it odd

- **The real control**: input level: 6 dB less in can mean 14 dB less THD

**BEEF at 8.** The reference you A/B against.

## THD in percent, THD in decibels

The percentage is a ratio, so it converts to decibels with twenty times the base-ten log. Worth having in your head, because spec sheets are written in percent and your analyzer reads in decibels, and the two will never be on the same screen at the same time.

- **0.005%**: −86.0 dB

- **0.01%**: −80 dB

- **0.1%**: −60 dB

- **1%**: −40 dB

- **3%**: −30.5 dB

- **5%**: −26.0 dB

- **10%**: −20 dB

- **48.34%**: −6.3 dB

Going the other way is what you actually do in front of an analyzer. A second harmonic sitting 26 dB below the fundamental is 10−26/20 = 0.0501, or 5.01 percent on its own. THD is the whole set of them together, taken as a root-sum-square: square every harmonic's amplitude, add them, take the square root, divide by the fundamental.

Work one. Second harmonic at −26 dB is 0.05012. Third at −34 dB is 0.01995. Fourth at −42 dB is 0.00794. Squared and summed: 0.002512 + 0.000398 + 0.000063 = 0.002973. The square root is 0.05453, so THD is 5.45 percent. Notice what the two smaller harmonics were worth: they moved the total up by less than half a percentage point. The largest harmonic almost always is the answer, which is why a spectrum picture tells you more than a single THD figure ever will.

## Where the harmonics come from

A circuit that reproduces its input exactly, only louder, adds nothing. A circuit that cannot quite do that returns a slightly different waveform, and the difference between what you put in and what came out is always expressible as harmonics of the input.

Which harmonics depends on the shape of the distortion. If the circuit treats the positive and negative halves of the waveform the same way, you get mostly odd-numbered harmonics: three times the input frequency, five times, seven times. If it treats them differently — squashing one side more than the other — you also get even-numbered ones: two times, four times, six times.

That distinction is the whole of the warm-versus-harsh conversation. The second harmonic is an octave above the fundamental and the fourth is two octaves, so even harmonics reinforce notes that are already musically present. The third is an octave and a fifth, which is still consonant. The seventh is where it turns. Tube circuits are usually asymmetric, which is why they are described as warm. Symmetric clipping is odd-heavy, which is why it sounds hard. See [analog warmth](https://gazillionindustries.com/analog-warmth/) for what that word is doing in a plugin description.

## The arithmetic of a soft clipper

Take the simplest curve that rounds a peak instead of shearing it: y = x − x³/3. Feed it a sine of amplitude A. Because sin³θ = (3 sin θ − sin 3θ) / 4, the output comes out exactly as

**y = (A − A³/4) sin θ + (A³/12) sin 3θ**

One new term. A third harmonic and nothing else. At A = 1 the fundamental leaves at 1 − 0.25 = 0.750 and the third at 1/12 = 0.08333, so THD is 0.08333 / 0.750 = 11.11 percent, which is 20 log₁₀(0.1111) = −19.08 dB. Synthesize that tone at 99.59 Hz, run it through the curve and take a 16,384-point FFT at 44.1 kHz and the analyzer returns 0.750000 for the fundamental, 0.083333 for the third, −19.08 dBc, THD 11.1111 percent. Not one even harmonic anywhere above the noise, because the curve is odd-symmetric and cannot make one.

Now halve the input. At A = 0.5 the fundamental is 0.5 − 0.125/4 = 0.46875 and the third is 0.125/12 = 0.010417, so THD drops to 2.222 percent. Six decibels less signal into the curve took the distortion down 20 log₁₀(11.111 / 2.222) = 13.98 dB. That ratio is the most useful number on this page. The harmonic grows with the cube of the level while the fundamental barely moves, so the trim in front of a saturator is a much stronger distortion control than it feels like. Run a channel 6 dB hot and you arrive at the curve with five times the distortion. Set your levels first: [gain staging](https://gazillionindustries.com/gain-staging/) is half of this.

On [BEEFY](https://gazillionindustries.com/beefy.html), **JUICE** sets the level going in, which is the knob this paragraph is about.

## Even harmonics need an asymmetric curve

Add a squaring term instead: y = x + a x². Since sin²θ = (1 − cos 2θ) / 2, the output carries a second harmonic of amplitude a A²/2 and — unavoidably, from the same term — a DC offset of a A²/2. With a = 0.2 and A = 1 that is 0.100 of second harmonic, 10 percent, −20 dB. Measure the mean of the output and it is 0.1000 exactly.

The DC is the part nobody mentions. Every even-order nonlinearity shifts the waveform off zero, the shift scales with the square of the level, and so it moves with the performance. It costs you [headroom](https://gazillionindustries.com/headroom-in-mixing/) that the waveform display does not explain, and it puts a small step at every edit point. A high-pass below 20 Hz after the saturator removes it and costs nothing audible.

## Where each harmonic lands, in cents

The warm-and-harsh story gets sharper if you price the intervals. One octave is 1200 cents, and the nth harmonic sits 1200 log₂(n) cents above the fundamental. Equal temperament is the ruler your keyboard uses; the harmonic series does not consult it.

- **2nd**: 1200.00 — octave, exact

- **3rd**: 1901.96 — octave and a fifth, 1.96 cents sharp of tempered

- **4th**: 2400.00 — two octaves, exact

- **5th**: 2786.31 — two octaves and a major third, 13.69 cents flat

- **6th**: 3101.96 — two octaves and a fifth

- **7th**: 3368.83 — 31.17 cents under a minor seventh

- **9th**: 3803.91 — a major second, 3.91 cents sharp

- **11th**: 4151.32 — 51.32 cents above a fourth, 48.68 under a tritone

- **13th**: 4440.53 — 40.53 cents above a minor sixth

Read the column and the received wisdom needs a correction. The fifth harmonic is a just major third, 386.31 cents where equal temperament puts 400, and it is one of the most consonant intervals there is. Odd harmonics are not a block of trouble. The seventh is the first one that genuinely fights, landing 968.83 cents into its octave against the 1000 your keyboard plays, and the eleventh is worse, sitting almost exactly between a fourth and a tritone, as far from any key as a pitch can get. Symmetric clipping sounds hard because it produces a strong seventh, eleventh and thirteenth, not because odd is a bad number.

This also explains why the harsh onset arrives suddenly rather than gradually. A gentle curve stops at the third. Push it and the series extends upward, and the first arrivals past the fifth are the ones that clash. Half the "it was fine and then it was awful" experience with a drive knob is that boundary being crossed.

## Why distortion makes things louder

Two mechanisms, both useful. Adding harmonics puts energy in frequency ranges where the ear is more sensitive than it is at the fundamental, so a bass note with harmonics reads as louder without any more low end. And the process that generates the harmonics rounds the peaks of the waveform, which lowers the peak level relative to the average and lets you turn the whole thing up. See [crest factor](https://gazillionindustries.com/crest-factor/) for that second half.

Put numbers on the second one. A sine peaking at 1.0 has an RMS of 0.7071, a crest factor of 20 log₁₀(1 / 0.7071) = 3.01 dB. Drive the same sine far enough to square it and peak and RMS are both 1.0, crest 0 dB. The average came up 3.01 dB with the peak untouched, and the bill for it was 48.34 percent THD — that figure is √(π²/8 − 1), the exact THD of an ideal square wave, with the third harmonic at 1/3 (−9.54 dB), the fifth at 1/5 (−13.98 dB) and the seventh at 1/7 (−16.90 dB). Three decibels of loudness is the whole prize, and squaring the waveform is the most violent way anyone has found to collect it.

The first mechanism is the one that pays better. An open E on a bass guitar is 41.2 Hz, and its harmonics run 82.4, 123.6, 164.8, 206.0 and on up. A small speaker that produces nothing below the mid hundreds of hertz — where exactly depends on the phone — is deaf to the fundamental and to most of the series. If its useful range starts at 500 Hz, the first harmonic to reach it is the thirteenth, at 13 × 41.203 = 535.6 Hz. Generate that content and the note arrives on the phone at full strength; leave it out and the listener hears a rhythm with no pitch. More on that in [bass on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/), and on the sensitivity curve itself in [Fletcher–Munson](https://gazillionindustries.com/fletcher-munson/).

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and this is its job description: it brings out harmonics that help a sound feel bigger.

**SOFT CLIP** as the out stage, BEEF at 62.

## Measuring THD in your own session

Nobody needs to take any of this on trust. The test takes ten minutes and it tells you more about a saturation plugin than a week of reading will.

- Put a spectrum analyzer after the plugin and set its FFT size to 16,384 points. At 44.1 kHz that is 44100 / 16384 = 2.6917 Hz per bin.

- Choose a test frequency that lands exactly on a bin. Bin 37 is 37 × 2.6917 = 99.59 Hz. Use 99.59 Hz rather than a round 100 Hz.

- Feed a sine at 99.59 Hz and −12 dBFS into the channel, with every other insert bypassed.

- Read the fundamental's level in dBFS.

- Read the levels at 199.18, 298.77, 398.36 and 497.96 Hz.

- Subtract each from the fundamental to get a figure in dBc.

- Convert each with 10dB/20, square the results, add them, take the square root, multiply by 100. That is THD in percent.

- Raise the input 6 dB and repeat the reading.

What comes back is a fingerprint. Only odd harmonics means a symmetric curve. A visible second and fourth means the curve is asymmetric and there is DC riding under your signal. A series that runs out of steam by the fifth is a gentle stage; one still climbing at the eleventh will sound hard on anything with pitch. And the step-8 reading is the one that matters most: if 6 dB more input moved THD by roughly 14 dB, the stage behaves like a cubic, which is to say it is very responsive to level and you should be setting that level deliberately.

The DAWs differ in what they hand you for this. Logic Pro has Test Oscillator for the tone and the Channel EQ analyzer or MultiMeter for the reading. Ableton Live has no dedicated tone generator, so use any instrument with a sine and read it on Spectrum. FL Studio users have Wave Candy and the display in Fruity Parametric EQ 2. Reaper ships JS analyzers. The one setting worth checking everywhere is the FFT length: the common default of 2048 points is 21.53 Hz per bin at 44.1 kHz, which is enough to see the harmonics but not enough to read their levels, because a tone sitting between bins smears across several of them and reads low.

Sample rate matters for the second half of the test. Run the session at 44.1 kHz for it, because that is what most listeners get, and because the fold point moves: at 48 kHz Nyquist is 24 kHz instead of 22.05 kHz, so the same plugin at the same setting puts its ghost content somewhere else entirely. The worked numbers are in the next section.

## How much is a lot

Context decides, and the numbers are not comparable between contexts. A power amplifier specified at a fraction of a percent is aiming for inaudibility. A saturation plugin pushed for effect can be generating distortion in the double digits as a percentage, and that is the point of using it.

Some anchors, all computed above. An amplifier quoting 0.005 percent is holding its harmonics 86 dB down. A cubic soft clipper driven to full scale sits at 11.11 percent, 19 dB down. An ideal square wave is 48.34 percent, 6.3 dB down, and at that point the harmonics are a co-equal part of the sound rather than a seasoning. Most saturation that reads as pleasant on a full mix is somewhere between one and five percent; most saturation that reads as an effect on one drum is well past ten. Those are ranges to orient by, not targets.

Spec sheets complicate the comparison one more way: most quote THD+N, which folds the noise floor into the same figure. That makes the number level-dependent in a direction people find surprising. A unit with a noise floor 100 dB below full scale, measured with a signal at −60 dBFS, has noise sitting 40 dB under the signal. That alone reads as 1 percent THD+N with the distortion at literally zero. Low-level THD+N figures are mostly a noise measurement wearing a distortion label.

The useful version of the question is not how much THD but where it lands. Distortion on a bass guitar puts content into the midrange where small speakers work, and that is a gift. Distortion on a bright cymbal puts content above it, into the range where the ear is already sensitive and where aliasing lives, and that is a problem. Same percentage, different outcome.

## Where it costs you

Harmonics are content and content takes up space. A mix with saturation on every channel fills the upper mids with material that was not in the recording, which is why such a mix sounds crowded and fatiguing even when no single track sounds distorted.

There is also the part nobody sees on a THD meter: intermodulation. When two frequencies pass through a nonlinear circuit together, you get sum and difference frequencies as well as harmonics, and those are not musically related to anything. It is why distortion sounds fine on a single bass note and messy on a full chord, and why heavy bus saturation gets grubby in the exact moments when the most is happening.

## The failure modes, and what each one sounds like

Four ways this goes wrong. Each has a signature, and once you have heard the signature you stop guessing.

**Aliasing.** Hard clip a 5 kHz tone in a 44.1 kHz session and the odd harmonics want to sit at 15, 25, 35 and 45 kHz. Only the third fits under the 22.05 kHz Nyquist limit. The fifth reflects to 44100 − 25000 = 19100 Hz, the seventh to 44100 − 35000 = 9100 Hz, and the ninth wraps past the whole rate to 45000 − 44100 = 900 Hz. Measured on that clipped tone they come back at −16.1, −22.5 and −28.1 dB relative to the fundamental: a 5 kHz sine quietly producing a 900 Hz note. It sounds like a thin metallic ring that will not sit with the music. The diagnostic is beautiful — move the source up from 5000 to 5100 Hz and the seventh's reflection moves *down*, from 9100 to 8400 Hz. Play a chromatic run up and the fizz descends. Nothing acoustic does that. Run the session at 48 kHz instead and the ninth folds to 48000 − 45000 = 3000 Hz, so the ghost changes pitch when you change sample rate, which is the other tell. The fix is described in [oversampling](https://gazillionindustries.com/oversampling/), and the mechanism in [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/).

**Intermodulation on chords.** Take A4 at 440 Hz and C♯5 at 554.37 Hz through the cubic curve from earlier. It is odd-order, so it makes no sum or difference tone at all, but it does make 2f₁ − f₂ = 325.63 Hz and 2f₂ − f₁ = 668.73 Hz, measured at 22.1 and 23.0 dB below the fundamentals. E4 is 329.63 Hz, so the first product lands 21.1 cents flat of it; E5 is 659.26 Hz, so the second lands 24.7 cents sharp. An asymmetric curve adds the difference tone as well, 554.37 − 440 = 114.37 Hz, which is 67.4 cents sharp of A2. What you hear reads as a chord going slightly sour rather than as dirt: a third of a semitone of wrongness with no obvious source. It is the reason saturation that flattered a bass line ruins a stacked pad.

**DC offset.** The silent one. An asymmetric stage pushes the whole waveform off center by an amount that tracks the square of the level, so your true peak reading climbs while the audible loudness does not. It sounds like nothing at all until an edit clicks. Check it on a [meter](https://gazillionindustries.com/vu-meter/) that shows DC, or high-pass below 20 Hz and watch the peak level fall.

**Blunted transients.** Every rounded peak is a transient with its tip removed. The loop gets louder and the kick loses its click, the snare loses its snap, and the drums start to feel like they are behind glass. It is the cost that shows up last and the one people mistake for needing more compression. Turn the input down 6 dB, get 14 dB less distortion by the arithmetic above, and see whether you miss it.

## Harmonic distortion in the chain

Harmonics are made out of whatever arrives, which decides the order of everything else. A 30 Hz rumble you cannot hear on your monitors is generating content at 60, 90, 120 and 150 Hz the moment it hits a nonlinear stage, and that you can hear. High-pass before the saturator, not after.

Compression and saturation trade places depending on what you want. Saturate first and the compressor receives a signal with a lower crest factor, so it does less work and pumps less. Compress first and the saturator receives a steadier level, so the harmonic content stops moving with the performance — which matters, because the whole output changes with the cube of the input. Neither is correct. The first is for character that breathes, the second is for a consistent tone.

Downstream, harmonics are new content, so EQ after the stage is a legitimate part of the move rather than an admission of failure. Feed the result to a limiter and you are in [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) territory: the saturator takes the peaks down cheaply and the limiter catches the rest. And when the harmonics are wanted but the transients are not negotiable, split the signal: [parallel saturation](https://gazillionindustries.com/parallel-saturation/) lets you run a stage far harder than you could in series, because the clean path keeps the attack intact.

## What it costs

Nothing about generating harmonic distortion is expensive. Any DAW will do the physics with stock tools, and the test above needs no purchase at all. What a saturation plugin sells is the curve somebody chose and the staging that gets you onto it without hunting for an input level. [BEEFY](https://gazillionindustries.com/beefy.html) is $19, a one-time purchase, Mac and Windows.

## Questions people ask

### What is meant by harmonic distortion?

Content added at whole-number multiples of the frequencies present in the original signal, produced whenever a circuit or process is not perfectly linear.

### How much THD is acceptable?

In playback equipment, low enough to be inaudible, which is why specifications quote fractions of a percent. In music production there is no acceptable figure: saturation plugins routinely generate far more, deliberately, and the judgment is by ear.

### Are harmonics bad?

Not inherently. They are the reason instruments sound different from each other. Added harmonics are a problem when they are unintended, when they crowd a mix, or when they alias.

### What is the difference between harmonic and intermodulation distortion?

Harmonic distortion adds content at multiples of the input frequencies, which stays musically related. Intermodulation adds sums and differences between frequencies, which does not, and it is the part that makes dense material sound dirty.

### How do you calculate THD?

Square the amplitude of every harmonic, add them together, take the square root, and divide by the amplitude of the fundamental. With harmonics at 0.05012, 0.01995 and 0.00794 against a fundamental of 1, that is √0.002973 = 0.05453, or 5.45 percent.

### What does 1% THD mean?

The added harmonic content, all of it combined, is one hundredth of the fundamental's amplitude — 40 dB below it. 0.1 percent is 60 dB below, 10 percent is 20 dB below.

### Why do even harmonics sound warm and odd harmonics sound harsh?

Even harmonics land on octaves and octave-plus-fifths, so they reinforce pitches the note already implies. The odd series starts consonant too — the third is a fifth, the fifth is a just major third — and turns at the seventh, which sits 31.17 cents under a tempered minor seventh, and the eleventh, which sits halfway between a fourth and a tritone. Harsh is the upper odd harmonics specifically, not odd in general.

### Is harmonic distortion the same as saturation?

Saturation is a way of producing it. Harmonic distortion is the measurement of what any nonlinear process adds, saturation included, and also clipping, tape, tubes and a badly gained converter. The reading is in [saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/).

### Does harmonic distortion make audio louder?

Yes, two ways at once. It puts energy where the ear is more sensitive, and it rounds peaks so the average can come up. Squaring a sine wave raises RMS by 3.01 dB at an unchanged peak, and costs 48.34 percent THD to do it.

### How do I measure THD in my DAW?

Send a 99.59 Hz sine through the plugin, read the fundamental and the first few harmonics on a 16,384-point FFT, convert each dBc reading with 10dB/20, and root-sum-square them. The odd frequency is deliberate: it lands exactly on bin 37 at 44.1 kHz, so nothing smears.

### What causes harmonic distortion in a plugin?

Any transfer curve that is not a straight line. A cubic term makes a third harmonic, a squared term makes a second harmonic plus DC, and a hard corner makes an unlimited series that will alias. What varies between plugins is the shape of the curve and whether the high harmonics are given room above the audible band.

### Why does distortion sound worse on high frequencies?

Because the harmonics run out of room. The seventh harmonic of a 5 kHz tone wants to be at 35 kHz, and in a 44.1 kHz session it reflects back down to 9100 Hz, where it has no musical relationship to anything. Distort a 100 Hz bass note and every harmonic through the twentieth still fits comfortably.

### Can harmonic distortion be removed?

No. It is added content at frequencies that were already occupied, so no process can separate it out afterward. The options are to generate less of it, to generate it in parallel so a clean path survives, or to EQ the region it landed in, which also removes the original material.

### What is THD+N?

Total harmonic distortion plus noise, measured as one figure. It rises as signal level falls, because the noise floor stays put. A device with noise 100 dB below full scale, measured at −60 dBFS, reads 1 percent THD+N with no distortion present at all.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is more weight, density, loudness and attitude as you turn it up; **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge; **JUICE** sets the level going in. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, adding harmonics above the low end so there is more to hear than just sub.

SOFT CLIP also takes care of the initial gain staging, so you land on the curve without hunting for a magic input level, and you can still add more BEEF from there. Switch to **LIMIT** instead to hold the output peaks, or turn both output buttons off and push it yourself; they are separate choices. Input and output clip lights watch both ends. It is $19, one payment, Mac and Windows — VST3, Audio Unit and standalone on Mac for Apple Silicon and Intel, 64-bit VST3 on Windows.

One measurement, two industries, opposite goals. The number was never the point.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
