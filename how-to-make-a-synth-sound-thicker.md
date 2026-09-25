# How to make a synth sound thicker

> How to make a synth sound thicker: unison and detune, extra oscillators, a mono sub, chorus, saturation and layering, and how to keep it from turning harsh.

Source: https://gazillionindustries.com/how-to-make-a-synth-sound-thicker/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The synths on Vangelis's *Blade Runner* score hang in the air like fog over a city that never turns the lights off. The preset you just loaded hangs there like a single strand of dental floss.

To make a synth sound thicker, stack more going on inside the sound, then add density and space around it. Use unison voices with a little detune, add a second oscillator an octave or a fifth away, use a sub oscillator kept in mono, add chorus, saturate it for harmonics, compress it for sustain, and widen it while keeping the low end centered. If it gets harsh, low-pass it and pull back the resonance.

## The short version

- **Unison**: several voices, gently detuned

- **Oscillators**: add one an octave or fifth away

- **Sub**: a sub oscillator, kept mono

- **Chorus**: movement and width

- **Saturation**: harmonics and density

- **Harshness**: low-pass, less resonance, darker drive

**LIMIT** instead, everything else identical.

## What "thick" is on a meter

Thick is two separate things happening at once, and they get muddled together. One is spectral: how many harmonics the sound carries and how evenly they fill the band. The other is temporal: how much the sound moves inside a single held note. A lone sawtooth already has a full harmonic series and no movement whatsoever, which is why it reads bright and flat, a photograph of a chord rather than a chord.

The movement is measurable. One sawtooth has a peak-to-RMS ratio of 4.77 dB. Run seven of them slightly detuned and their peaks drift into alignment every second or so; at that instant the peak has grown by 20 log10(7) = 16.90 dB while the RMS has only grown by 20 log10(2.646) = 8.45 dB, so the crest factor of the stack reaches 4.77 + 8.45 = 13.22 dB. That one number explains the pad that clips once a bar and still reads quiet the rest of the time. More in [crest factor](https://gazillionindustries.com/crest-factor/).

## Thicken it at the source

The synth itself is the best place to start. Turn on unison and add a few voices with a small amount of detune: the slight pitch differences beat against each other and the sound spreads out. Add a second oscillator an octave below or a fifth above for weight. A sub oscillator gives it a floor. Don't overdo the detune; past a point the synth sounds out of tune rather than thick.

Everything downstream is repair work by comparison. A chorus on a thin patch spreads a thin patch; a saturator on a thin patch makes a thin patch louder and brighter. Oscillators, unison and filter tracking are the only places where you add material rather than rearrange it, and they are free of the mono and headroom penalties that the later stages all charge.

## How much detune, in cents and in Hz

Detune works by beating, and the beat rate is arithmetic you can do before you touch the knob. Two voices *a* cents apart sit at a frequency ratio of 2^(a/1200), so at a fundamental *f* they beat at f × (2^(a/1200) − 1) times a second. At A4, 440 Hz, five cents works out at 440 × 0.002892 = 1.27 Hz, one slow swell every 0.79 seconds. That swell is the thickness.

- **3 cents**: 0.76 Hz at A4 — one swell every 1.31 s

- **5 cents**: 1.27 Hz — every 0.79 s

- **7 cents**: 1.78 Hz — every 0.56 s

- **12 cents**: 3.06 Hz — every 0.33 s

- **25 cents**: 6.40 Hz — every 0.16 s, which is vibrato speed

The catch is that the beat rate scales with pitch. Ten cents beats at 0.32 Hz on A1 at 55 Hz and at 5.10 Hz on A5 at 880 Hz: sixteen times faster across four octaves, from a slow breath to a wobble sitting right in vibrato territory. A detune setting that sounds enormous on a bass patch sounds seasick two octaves up. Dial it in at the register the part actually plays, then run the top of the range and check it there before you commit.

## Unison voices and the swing they bring

Voice count changes level, not only width. Voices whose phases line up sum coherently and gain 20 log10(N); voices that have drifted apart sum incoherently and gain 10 log10(N). For seven voices that is 16.90 dB against 8.45 dB, and the gap between them — 8.45 dB — is the size of the swell the detune drags the patch through, over and over, at the beat rate from the list above.

Three voices gives a 4.77 dB swing. Sixteen gives 12.04 dB. Which is why enormous unison counts feel huge on their own and then run out of room the moment anything else arrives: the patch spends most of its life 8 to 12 dB under its own peaks, and you have to leave all of that in the headroom budget. Three to seven voices covers most parts. Go higher when the swell is the whole point of the sound, and read [gain staging](https://gazillionindustries.com/gain-staging/) before you do.

## Octaves, fifths, and the third to leave out

Added oscillators do not all thicken by the same amount, and the reason is tuning. An octave in equal temperament is an exact 2:1 ratio, so an octave-down oscillator adds weight and contributes no movement at all. Its harmonics land precisely on the root's harmonics and nothing beats.

A fifth is the free one. Equal temperament sets the fifth at 700 cents where a pure fifth is 701.955 cents, so it sits 1.96 cents narrow. On a root of 110 Hz the root's third harmonic is at 330 Hz, while the fifth sits at 110 × 1.498307 = 164.81 Hz and its second harmonic at 329.63 Hz. Those two beat at 0.37 Hz: one slow swell every 2.7 seconds, with no detune knob involved and no extra voices to pay for.

A major third is the one to think twice about. Equal temperament puts it 13.7 cents sharp of pure, and on that same 110 Hz root the third's fourth harmonic lands at 554.37 Hz against the root's fifth harmonic at 550 Hz — a 4.37 Hz beat. Fast enough to read as roughness instead of width. Put the third in the arrangement, where the ear forgives it, rather than inside the oscillator stack where it grinds.

## Chorus and width

Chorus copies the sound, delays the copies slightly and modulates them, which adds movement and width. It's the classic way to make a thin pad bloom. Widen the synth, but keep its low end and any sub centered, and check it in mono so the width doesn't cancel into something thinner than where you started.

The pitch shift falls straight out of how fast the delay moves. A chorus sweeping its delay time by 4 ms peak to peak at 0.5 Hz changes the delay at up to 0.00628 seconds per second, which is a pitch deviation of 0.628%, or 10.8 cents. Hold that depth and raise the rate to 2 Hz and the rate of change quadruples: 43 cents. Depth sets how far the copy wanders. Rate multiplies it. That arithmetic is the whole reason a fast, deep chorus sounds seasick while a slow, deep one sounds wide.

## Keep the sub out of the widener

Any chorus, doubler or widener adds a delayed copy to the original, and a delayed copy comb-filters whatever it is added to. Notches land at odd multiples of 1/(2D). At a typical 8 ms chorus delay the first notch sits at 62.5 Hz, the next at 187.5 Hz, the next at 312.5 Hz. The first one is directly on top of the sub. Run a 20 ms doubler instead and it is worse: notches at 25, 75, 125 and 175 Hz, straight through the body of the patch.

So split the signal rather than arguing with it. Low-pass one copy at 100 to 120 Hz, keep that copy mono and dry, and send only the rest to the chorus and the widener. Then sum the mix to mono and listen to the bottom: if the low end drops when you press the button, something in the low path is being delayed. More in [mono compatibility](https://gazillionindustries.com/mono-compatibility/) and [phase cancellation](https://gazillionindustries.com/phase-cancellation/).

## Saturate it

Saturation adds harmonics and brings the quieter parts of the sound up toward its peaks, so the synth takes up more room. On a bright synth, use a darker setting or low-pass after it so the added harmonics don't turn fizzy. More in [how to use saturation in a mix](https://gazillionindustries.com/how-to-use-saturation/).

Where the harmonics land is arithmetic too. A symmetric soft clipper generates odd harmonics, so a 55 Hz note comes back with energy at 165, 275 and 385 Hz; an asymmetric drive adds the even ones at 110, 220 and 330 Hz as well. On a low synth those added partials are the only part of the note a small speaker can reproduce, which makes saturation a completely different tool from EQ down there: EQ can only raise energy that already exists. See [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) and [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/) for the shapes behind that.

## Where saturation goes in the chain

Order changes the result more than the amount does. Saturation before the filter feeds harmonics into the filter and the filter takes them back out again, giving a thick sound with a top you can steer. Saturation after the filter puts harmonics above the cutoff, which is how you get a dark patch that still has an edge, and also how you get fizz.

Pushing hard also runs into a limit that has nothing to do with taste. Harmonics generated above half the sample rate fold back down as inharmonic tones, which on a bright unison patch is the metallic ring that appears on the top notes and not the low ones. [What aliasing is](https://gazillionindustries.com/what-is-aliasing-in-audio/) and [oversampling](https://gazillionindustries.com/oversampling/) cover the mechanism and when it is worth caring about.

Two other placements are worth knowing. Saturate before the chorus and every detuned copy carries the same harmonics, which keeps the sound coherent and slightly duller. Saturate after the chorus and the saturator sees the beating, so the drive breathes with it: livelier, harder to control, and the first place a pad starts to pump. And a saturator behind a compressor is working on a signal whose crest factor has already fallen, so the same drive setting bites noticeably harder. Drop its input 3 to 6 dB when you move it there and re-judge.

Feed [BEEFY](https://gazillionindustries.com/beefy.html) a thin synth and turn up the big knob. The demo on the page is 28 seconds.

**SOFT CLIP** as the out stage, BEEF at 62.

## How to make a synth sound thicker

- Turn on unison with three to seven voices and a small detune.

- Add a second oscillator an octave down or a fifth up, mixed lower.

- Add a sub oscillator if the part needs a floor, and keep it mono.

- Add chorus for movement and width.

- Saturate it, then match levels against bypass.

- Compress lightly so the notes sustain evenly.

- Low-pass or pull back the resonance if it turns harsh.

- Give it a little reverb so it sits in a space.

- Low-pass a copy at 110 Hz, sum that copy to mono, and widen only the rest.

- Level-match the processed version to bypass inside 0.5 dB before judging it.

- Sum the mix to mono and check the low end does not drop.

- Play the bounce on a phone speaker and confirm the note still has a pitch.

- Play it inside the full arrangement at conversation volume.

## Compression for sustain, in milliseconds

Compression thickens by lifting the quiet part of a note toward the loud part, and the times decide whether that helps or flattens. Attack sets how much of the front edge survives. One cycle of a 110 Hz fundamental lasts 9.1 ms, so a 10 ms attack lets roughly a whole cycle through before the gain reduction arrives, while a 1 ms attack catches the note before it has finished its first cycle and takes the pluck with it.

Release sets what happens between notes. Gain recovery is exponential: one time constant returns 63% of the way back, two returns 86%, three returns 95%. At 120 BPM a quarter note is 500 ms, so a 300 ms release recovers about 81% before the next note lands, which is movement you can hear and still even. A 1,000 ms release recovers 39%, and the patch breathes with the bar rather than with the note.

A ratio of 2:1 to 3:1 with 3 to 5 dB of gain reduction is plenty for a pad. Past that you are trading movement for level, and the movement was the thing you came for. [What a compressor does](https://gazillionindustries.com/what-is-a-compressor/) has the rest of the controls.

## Layering

Two simple synths often beat one complicated one. A soft pad under a plucky lead, or a sustained layer under short stabs, fills the gaps without making either part busy. Filter each layer to its own range so they add up to one thick sound instead of two competing ones.

Detune the layers against each other rather than pushing the detune inside each one. Two patches with mild unison, sitting 6 to 9 cents apart, beat at 1.53 to 2.29 Hz at A4 and sound wider than either one shoved to sixteen voices, at a fraction of the level swing. Three oscillators sat a few cents apart is the oldest form of the same move, and [the Minimoog Voyager](https://gazillionindustries.com/minimoog-voyager/) puts a fine tuning control on each one for it.

Offsetting the layers in time is the trap. A 12 ms offset between two copies of the same material combs at 41.7, 125 and 208.3 Hz, hollowing out the precise range you were trying to fill. If you want them loose, offset by a couple of milliseconds at most, or write them as genuinely different parts.

Then split the band. High-pass the bright layer at 250 to 400 Hz and low-pass the sustaining layer at 1 to 2 kHz. A crossover at 350 Hz means everything under 350 Hz is one layer's job alone, which is the only reliable way to keep a stack from turning to soup. [Why a mix goes muddy](https://gazillionindustries.com/why-is-my-mix-muddy/) is mostly this, repeated across five tracks.

## What goes wrong, and what each fault sounds like

- **Detune too wide**: reads out of tune rather than wide; on a lead the pitch stops being a pitch

- **Chorus fast and deep**: seasick, and the low mids pump as the notches slide

- **Sub inside the widener**: full in the room, hollow on a phone and on a mono club sub

- **Too much drive**: fizz on top and a flattened front; the part reads loud and small

- **Two copies, nothing changed**: exactly 6.02 dB louder and not one bit thicker

- **Reverb used as thickness**: the synth moves further away instead of getting bigger

- **Everything thickened**: the vocal vanishes; thickness is space taken from something else

The last two are the ones that survive a whole session unnoticed, because both of them sound good in solo. Reverb in particular reads as size on a soloed pad and as distance the moment a drum hits. If you are reaching for it to fix thinness, you have run out of the moves above and should go back to the oscillators.

## Check it in four places

A thick synth is a claim about how a sound behaves on systems you are not sitting in front of, so verify it on those. Mono first, because that is where width turns into subtraction. Level-matched against bypass second, because a version 1 dB louder wins a blind test on loudness alone: match inside 0.5 dB or you are judging the gain. Doubling an amplitude is +6.02 dB, and almost every stage in this article adds some.

Then the phone, which is the actual test for anything low. A phone driver puts out very little below roughly 500 Hz, and how little varies a lot by model. A 55 Hz note reaches that speaker only through its harmonics at 110, 165, 220 and 275 Hz, and the ear rebuilds the 55 Hz pitch out of their 55 Hz spacing. Which is the argument for saturating a low synth rather than boosting it: the harmonics are the only part that arrives. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/). Fourth, play it in the arrangement at conversation volume, where [the ear's own frequency response](https://gazillionindustries.com/fletcher-munson/) flattens out the low end you have been admiring at monitoring level.

## What the thickness costs

Every move here sends a bill. Unison multiplies: two oscillators at seven voices with eight notes held is 2 × 7 × 8 = 112 oscillators running at once, and a second layer takes it to 224. That is the CPU spike that arrives on the fullest chord of the song and nowhere else, which is why it always seems to appear during the bounce.

Width costs mono. Whatever you gain by spreading the patch is what a phone, a laptop, a shop PA or a club sub takes back when it sums. Saturation costs transients: crest factor you pull out is attack you do not get back, and a pad that started at 13 dB peak-to-RMS and finishes at 5 has stopped moving, whatever the meter says about its level. And the largest cost has nothing to do with the synth at all. A thick synth occupies the range a vocal or a snare was counting on. Decide early which of them is the record, and thin the other one on purpose rather than by accident.

## Doing it in Ableton, Logic and FL Studio

The method is identical everywhere and only the device names move. In Ableton Live, start with the instrument's own unison section, then Chorus-Ensemble for the width, then Saturator for the harmonics. Utility covers both checks in this article: it has a mono-below control for the low end and a mono switch for the mono sum.

In Logic Pro, Ensemble or Chorus does the width and ChromaGlow (Logic Pro 11 and later) or Overdrive does the harmonics. Direction Mixer's Spread sets how wide the patch sits, and the Gain utility has a mono button for the check. In FL Studio, reach for Fruity Chorus and Fruity Blood Overdrive, and build the mono low band by hand on a second channel, as below.

Where a DAW has no mono-below device, build it by hand in thirty seconds: duplicate the track, low-pass one copy at 110 Hz and collapse that copy to mono, high-pass the other at 110 Hz and leave it as wide as you like. It behaves the same and you can see exactly what it is doing.

## Questions people ask

### How do I make a synth sound less harsh?

Lower the filter cutoff or add a low-pass after the synth, reduce the resonance, use fewer bright oscillators, and cut a little in the upper mids where it bites. If saturation is involved, use a darker setting.

### How do I make a synth sound more full?

Add unison voices with a small detune, a second oscillator an octave or fifth away, chorus for width and saturation for density, and support it with a pad or sub layer. Keep the low end in mono.

### Does detune make a synth thicker?

A little does: slightly detuned unison voices beat against each other and spread the sound. Too much makes it sound out of tune, so stop when it starts to wobble.

### Why does my synth sound thin?

Usually one oscillator, no movement inside the note, and a high-pass or a bright filter setting taking the body out. A single sawtooth has every harmonic and no motion, so it reads flat however loud it is. Add a second oscillator or unison first, then look at what the filter and the EQ are removing below 400 Hz.

### How many unison voices should I use?

Three to seven for most parts. The level swing between aligned and drifted voices is 10 log10(N), so three voices swing 4.77 dB, seven swing 8.45 dB and sixteen swing 12.04 dB. Past seven you are mostly buying headroom problems and CPU, unless the swell itself is the sound you want.

### How much detune is too much?

When the beat rate reaches vibrato speed. At A4 that is about 25 cents, which beats at 6.40 Hz. The same setting an octave down beats at 3.20 Hz and sounds fine, so there is no single correct number. Set it in the register the part plays and audition the top of the range.

### Should I use unison or chorus?

Unison first, because it creates new material inside the synth. Chorus second, because it copies and delays what already exists and therefore brings comb filtering with it. Using both is normal. Using chorus to fix a patch that has one oscillator and no unison rarely gets there.

### Does layering the same patch twice make it thicker?

Not on its own. Two identical copies sum to exactly 6.02 dB more level and nothing else. Change something on the second copy — a few cents of tuning, a different filter setting, a different waveform, an octave — and it starts adding width and harmonics rather than gain.

### Why does my thick synth sound thin on my phone?

Two likely reasons. The width is cancelling in the mono sum, which you can confirm by summing to mono in the DAW. Or the thickness lives below roughly 500 Hz, where a phone speaker has almost no output. Saturation fixes the second one by putting harmonics higher up; nothing fixes the first except keeping the low end centered.

### Why does my synth sound worse in mono?

A widener or chorus is adding a delayed copy, and the sum notches at odd multiples of 1/(2D). An 8 ms delay notches at 62.5, 187.5 and 312.5 Hz. Take the low band out of the widened path, or shorten the delay so the first notch lands above anything you care about.

### Does reverb make a synth thicker?

It makes it bigger and further away, which is a different thing. Reverb adds density around the note without adding anything inside it, so a soloed pad improves and the same pad in a busy arrangement blurs. Use it after the thickening, short and low in level, not instead of it.

### Should I saturate before or after the chorus?

Before, for a coherent sound where every copy carries the same harmonics. After, for a livelier one where the drive breathes with the beating. After also pumps sooner, so if the pad starts moving in a way you did not ask for, move the saturator in front of the chorus and re-match levels.

### How do I thicken a lead without losing the note?

Keep the detune under about 7 cents so the pitch stays identifiable, use three to five voices rather than sixteen, add the weight with an octave-down oscillator rather than more detune, and put the width on a parallel copy so the center stays dry. The octave beats at 0 Hz, so it adds nothing that can smear the pitch.

### Why does my pad clip when the meter says it is quiet?

Detuned voices drift in and out of phase alignment, so the peak and the average move independently. Seven voices can reach a crest factor of about 13 dB at the instant they align, which for an RMS-style meter reading −18 means peaks near −5. Leave headroom sized to the peaks, not the average. [Headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/) covers how much.

## Stock plugins that do this

- **FL Studio**: Fruity Chorus; Fruity Blood Overdrive

- **Ableton Live**: Chorus-Ensemble; Saturator

- **Logic Pro**: Ensemble or Chorus; ChromaGlow (Logic Pro 11 and later)

- **Any DAW**: duplicate, low-pass one copy at 110 Hz and sum it to mono, widen the other

## What BEEFY does

BEEFY is our saturation and loudness plugin, and there's no drum-only rule: feed it a thin synth. It adds body, squeezes some space out of the peaks and brings out harmonics that help a sound feel bigger. Use a little **BEEF** for weight and presence, or push it for an obviously saturated sound. **COOK** moves the color from rounder toward brighter, which on a synth decides how much edge you add.

Every new instance opens the same way: SOFT CLIP on, **JUICE** at 0 dB, BEEF at 30, COOK at 30. On a thin pad that is already a working starting point. Raise BEEF until the body arrives, then set COOK by ear, lower for weight and higher for edge. **LIMIT** is the other output stage: try both at the same drive on a unison patch and keep whichever one leaves the 8 dB swell intact, because that swell is what you spent the voices on. Then pull JUICE back until the processed version matches bypass and decide from there. BEEFY is $19, Mac and Windows, AU, VST3 and standalone.

Nobody's asking for the whole fog bank. Just more than a strand of floss.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
