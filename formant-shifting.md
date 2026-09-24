# Formant shifting

> Formant shifting explained: what formants are, why speeding a voice up shrinks the singer, and how to move pitch and formants separately on purpose.

Source: https://gazillionindustries.com/formant-shifting/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

You pitch a soul vocal up four semitones to fit the beat, and a grown woman turns into a cartoon. The notes are right. The person is gone.

Formants are the fixed resonances of a voice's throat and mouth, and they are what tell you the size of the speaker and which vowel they are saying. Pitch is how fast the vocal folds are vibrating. Move a recording's pitch without moving the formants and the voice stays the same person singing higher; move both together, which is what speeding a tape up does, and the speaker appears to shrink. Formant shifting is the control that separates the two.

## The short version

- **Pitch**: the rate of the vocal folds: the note

- **Formants**: resonances of the vocal tract: the vowel and the size

- **Together**: speeding up moves both, so the singer shrinks

- **Separate**: pitch shifting with formant correction keeps the person

- **Shift down**: bigger, older, heavier

- **Shift up**: smaller, younger, cartoon at the extremes

**Pitched up.** Same control, the other direction.

## What a formant is

The vocal folds produce a buzz full of harmonics. The throat, mouth and nose then act as a set of resonant chambers that boost some of those harmonics and suppress others, and the peaks that result are the formants. The first two do most of the work of telling vowels apart: in a typical adult male voice the "ee" in "beet" sits around 270 and 2300 Hz, while the "ah" in "father" sits nearer 730 and 1100 Hz. The exact numbers vary with the speaker's size, which is the whole point.

Those peaks stay roughly where they are when a singer changes note. A tenor holding a vowel up an octave still sounds like a tenor, because the mouth did not get smaller. A sample played faster does not have that luxury: every frequency in it moves, formants included, so the ear computes a smaller throat and hands you a chipmunk.

The size part of that is arithmetic you can do on paper. Treat the tract from the folds to the lips as a tube about 17.5 cm long, closed at one end, and its resonances land at odd multiples of a quarter wavelength. With sound moving at 343 m/s that puts them near 490, 1470 and 2450 Hz. Shorten the tube and all three rise by the same factor. That factor is the entire effect, and it is the only thing a speed change does.

There is a second mechanism underneath, and it is the one that makes correction unreliable at the extremes. The folds supply energy only at whole multiples of the fundamental, so a formant is visible to a plugin only where a harmonic happens to land on it. At a 110 Hz fundamental there are seven harmonics below 800 Hz to draw the first peak with. At 440 Hz there is one. A tracker asked to find a resonance it has almost no evidence for will guess, and what you hear is the guess.

## The arithmetic of a formant move

Every speed change is one multiplier applied to everything at once. A semitone is a ratio of the twelfth root of two, about 1.0595, so four semitones up is 1.2599 and every frequency in the file rises by 26%. Formants are frequencies. They go too.

Take the "ah" above, with peaks at 730 and 1100 Hz. Pitch it up four semitones with no correction and those peaks arrive at 920 and 1386 Hz. Run the tube backward from the new numbers and the implied speaker has a vocal tract of 13.9 cm rather than 17.5. Nobody measures that consciously. The ear does the division in a syllable and reports a child.

- **+2 semitones**: ratio 1.1225, everything +12.2%, implied tract 15.6 cm

- **+4 semitones**: ratio 1.2599, +26.0%, implied tract 13.9 cm

- **+5 semitones**: ratio 1.3348, +33.5%, implied tract 13.1 cm

- **+7 semitones**: ratio 1.4983, +49.8%, implied tract 11.7 cm

- **+12 semitones**: ratio 2.0, +100%, implied tract 8.75 cm

- **Downward**: the same ratios inverted: −5 is 0.7492, tract 23.4 cm

The reason a sped-up vowel reads as a smaller person rather than as a different vowel is that the multiplier hits every peak equally. What names a vowel is the relationship between the first two formants, and a relationship survives multiplication untouched. So the vowel arrives intact and only its scale has moved, which is exactly the measurement the ear uses to size a body.

## Test it in your own session

You can prove the mechanism in ten seconds with no plugin at all. Hold one note and move your mouth from "ee" to "ah" and back without letting the note change. The pitch never moved. Everything else did. That difference is formants on their own, with nothing else in the signal touched.

The version with numbers takes about five minutes.

- Put a three-second held vowel from a single voice on one track.

- Open a spectrum analyzer, set the FFT size to 4096 or higher, and turn averaging slow.

- Ignore the individual harmonic spikes and find the two lowest broad humps under them.

- Write down the frequency at the top of each hump. Those are the first two formants.

- Bounce the same file up five semitones with formant preservation switched off.

- Measure again: both humps should now sit 33.5% higher than they did.

- Bounce a third time with preservation switched on, and measure once more.

- Compare the third measurement with the first. Anything past a few percent is slippage.

Then do the listening half on the same three files, in the same order, on a phone speaker. A phone gives you almost nothing under the first formant, so the first formant is most of what survives the trip, and an error there is obvious on a train in a way it never is on monitors.

## How to use it

- Pitch the sample where the music needs it first, and leave formants alone.

- If the voice now sounds like a different, smaller person, shift the formants down.

- Start by moving them the opposite way to the pitch, by about the same amount.

- Adjust by ear on a held vowel: the vowel should sound the same, only higher.

- For character rather than correction, move formants without moving pitch at all.

- Check consonants: heavy formant moves make S and T sounds artificial first.

- Match loudness between the corrected and uncorrected versions before you judge either.

- Keep the uncorrected bounce on a muted track.

Going the other way is a production tool on its own. Formants down with the pitch untouched gives you the voice of somebody much larger without turning the melody into a drone, which is why it shows up on every villain ad-lib since about 2011. Up without pitch gives a thin, nasal, slightly uncanny read that sits well under a mix because it occupies almost no low end.

## Where it sits in the chain

Put the formant move first, ahead of anything you tuned by ear. A notch you placed at 340 Hz was placed against a resonance the shifter is about to relocate, and an EQ left upstream goes on cutting a frequency with nothing at it any more. Move the formants, then set the EQ against what is actually there.

Pitch correction belongs before the formant shift rather than after. A corrector wants the spectral envelope the singer actually produced; hand it one that has already been slid up or down and its note detection gets worse for no gain. De-essing belongs after, because unvoiced sounds are where the damage lands and a de-esser downstream is catching it instead of feeding it in.

Saturation and reverb go last, on the shifted signal. Adding harmonics to something that has already been taken apart and rebuilt multiplies whatever smear is in it, and a reverb fed the shifted voice puts the room behind the new size rather than the old one. If you want the old room, print the shift and send the print.

The parallel move is worth knowing, and Apple ships it as a tip in the Logic Pro guide: Pitch at 0 semitones, Mix at 50%, Formant at +1, Robotize off. You get the same singer with a smaller head standing next to herself, and the Mix slider sets how much of her there is. Blending a formant-shifted copy under an untouched lead is the cheapest doubling in the room, and it costs no tuning.

[SKRUU](https://gazillionindustries.com/skruu.html) moves pitch and time independently: PITCH runs from −20% to +10% in 128 states and reads out in semitones as well as speed, so you can hear where the character starts to change and stop there.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25.

## Formant controls, DAW by DAW

Four of the big hosts ship a formant control and none of them agree on where it lives or what it is scaled in. The pattern to look for is a formant parameter bolted to whichever stretch algorithm the host considers its best one, which is reliably also its most expensive one. Where each host hides its [speed](https://gazillionindustries.com/varispeed-in-every-daw/) control is a different map.

### Ableton Live: Formants, inside Complex Pro

Live keeps it in a warp mode rather than a device. Choose Complex Pro on the clip and a Formants control appears next to it; Ableton's manual states that at 100% the original formants are preserved even when the pitch is changed significantly. Two limits come with that. The control does nothing at all unless the clip's transposition has been changed, and Ableton says plainly that Complex and Complex Pro can cost more CPU than the other warp modes, suggesting freeze or resample to get it back.

The Envelope control beside it is the one people leave alone. Ableton gives 128 as the default and suggests lower values for high-pitched samples and higher for low ones, worth a pass on any source far from a speaking range. Re-Pitch, the mode that behaves like a speed control, deactivates the transposition controls outright, so there is no formant question in it at all: everything moves together, by design.

### Logic Pro: the Formant knob on Vocal Transformer

Logic splits pitch and formants onto two knobs of one plugin. Apple's guide describes the Pitch knob as transposing in semitone steps and as changing the pitch of a voice rather than its character, while the Formant knob shifts formants with the pitch held or moved independently. Apple names its own extremes: positive values give the Mickey Mouse read, negative values head toward Darth Vader.

The setting worth finding is in the Extended Parameters area. A Formants pop-up offers Process always or Keep unvoiced formants, and Apple's stated reason for the second is that processing only the voiced formants retains sibilant sounds and gives a more natural transformation on some signals. That is a direct fix for the artifact most people hit first, and it is folded away behind a disclosure triangle where nobody looks.

### FL Studio: per note in Newtone, a switch in Pitcher

Image-Line splits the job across two plugins. In Newtone the formant control is per note: enter Advanced Edit mode, double-click the note, and drag vertically on the Formant handle. Image-Line's own manual describes formants as resonances caused by the size and shape of the vocal tract, and says changing them changes the apparent size, age or sex of the vocalist.

Pitcher, the live one, gives you a Formant switch for preservation and a Gender knob that overrides it. Image-Line is blunt about leaving the switch off: past a shift of more than a few notes you get the helium sound. Pitcher also carries a minimum-frequency setting for its pitch detection, and the manual suggests 80 to 170 Hz for male voices and 170 to 220 Hz for female ones. Set that before you blame the formant control for a tracking error.

### Cubase: Shift Formant in VariAudio

Steinberg puts it in the Sample Editor, not on an insert. Segment the audio, turn on Edit VariAudio, select one or more segments and move the Shift Formant slider, which takes positive and negative percentages with 0 leaving the original alone. Steinberg states that formant shifting does not affect the pitch or timing of a segment, and that using it selects the Solo algorithm automatically, which is a choice made for you on material you may have picked a different algorithm for. With Smart Controls set to All you can skip the Inspector and drag the control in the lower left corner of a segment, which on a long vocal is the difference between editing and data entry.

## What it sounds like when it breaks

Every failure here has a sound, and each sound has one cause you can point at. Learn the five and a bad vocal diagnoses itself in a pass.

**Sibilance goes first.** S, T, F and SH are broadband noise with no resonant peaks in them, so a shifter told to move their formants has nothing to lock onto and makes something up. It arrives as a chirp or a thin whistle riding on the consonant. This is precisely what Logic's Keep unvoiced formants setting exists to sidestep.

**The barrel.** Push formants far enough down and energy piles into the 200 to 400 Hz region and the voice sounds cupped, as though the singer is inside something. Bigger stops reading as bigger and starts reading as enclosed, usually two or three semitones before you expected it to.

**Breath with no floor.** Inhales and the air between words are noise, and noise is what an analysis stage handles worst. On a heavily shifted take they thin to a hiss, and the performance quietly loses its sense of a body in a room.

**Smear on anything polyphonic.** A formant shifter assumes one source with one spectral envelope. Give it a stereo mix, a stacked harmony or a held chord and it averages what it finds, returning a soft, phasey version of the input with no useful resizing in it.

**What the compressor reveals.** A shifted vocal that convinced you in solo can come apart once a compressor lifts the quiet passages 6 or 8 dB, because the artifacts were always sitting under the loud syllables. Audition it after the compressor, at mix level, or you are auditioning the wrong signal.

## When you want the chipmunk

Half the records people love are built on formants moving with the pitch. Soul vocals sped up until they stop being sung and start being an instrument have carried entire catalogs, and the small-throat artifact is the signature, not a mistake to be corrected. [Chipmunk soul](https://gazillionindustries.com/chipmunk-soul/) is the whole method, and it is worth knowing which of the two you are doing before you reach for a correction knob.

None of this is limited to voices either. Anything with a resonant body has formants: the shell of a drum, the box of a guitar, the room around both. A speed change moves every one of them by the same ratio, which is why a break sped up 8% does not sound like the same kit played faster but like a smaller kit, and why slowing one down is the cheapest large room available. The ear sizes objects the way it sizes people, off the resonances, and it does not care that a snare has no throat. See [what varispeed is](https://gazillionindustries.com/what-is-varispeed/) for the mechanism underneath all of it.

## Where it costs you

Formant processing is analysis and resynthesis, so it has artifacts. Big shifts thin out breath and sibilance, and on a busy stereo mix rather than a single voice they smear. It also fights with the rest of the chain: a formant-shifted vocal that sounded convincing solo can reveal its edges once a compressor lifts the quiet parts. And correcting a pitched-up sample all the way back often costs you the reason you pitched it up in the first place.

It costs latency too, and the floor is set by physics rather than by coding. To resolve a 100 Hz fundamental an analysis window has to cover at least one 10 ms period, and trackers in practice use several of them, so a formant shifter across a live vocal gives a singer a delay in the headphones they can feel. Print it, or track dry and shift afterward.

The last cost is a decision rather than a defect. Both bounces are right for different records, and the one that sounded obviously better in solo is not reliably the one that survives the mix, so carry both to the end. [Pitching a sample](https://gazillionindustries.com/how-to-pitch-a-sample/) is the same argument one step earlier.

## Questions people ask

### What does formant shifting mean?

Moving the resonant peaks of a voice up or down without changing the note being sung. It changes the apparent size and character of the speaker while leaving the melody where it was.

### Does formant shifting change pitch?

No. Pitch is the rate of the vocal folds and formants are the resonances on top of it. A formant shifter moves the second without touching the first, which is why a formant-shifted vocal still sings the same notes.

### What is the difference between formants and pitch?

Pitch is the note. Formants are the peaks in the spectrum that tell you which vowel it is and how big the person saying it is. Two singers on the same note sound different largely because their formants are in different places.

### What is the best vocal formant shifter?

The one in your DAW is usually good for a couple of semitones, which covers most corrective work. Dedicated tools hold together further out, but past about five semitones every method starts sounding processed, so plan the take rather than the plugin.

### What does formant mean in music?

A resonance belonging to the body that made the sound, fixed by that body's size and shape rather than by the note. In a voice it is the throat and mouth. On a snare it is the shell. It is the part of a sound that tells your ear what produced it.

### Why does my pitched-up vocal sound like a chipmunk?

Because the shifter moved the formants along with the note. Raised resonances read to the ear as a shorter vocal tract, and a shorter tract means a smaller person. Switch on formant preservation, or shift the formants down by the interval you pitched up.

### Should formants go up or down when I pitch a vocal up?

Down. Start at the same interval in the opposite direction, so four semitones up against four semitones of formants down, then back off until the vowel sits right. The correction almost never needs the full amount to sound convincing.

### How many semitones can you pitch shift before it sounds bad?

Two or three either way survives on most material with no correction at all. Past about five, every method announces itself, and formant correction buys distance rather than removing the limit. A better take beats a better algorithm every time.

### Does formant shifting work on a full mix?

Poorly. The analysis assumes a single source with one spectral envelope, and a mix has dozens of sources overlapping. What comes back is smeared and phasey rather than resized. Shift the stem, or shift the voice before it is committed.

### How do I make my voice sound deeper without changing the pitch?

Shift the formants down and leave the pitch at zero. One to three semitones of downward formant shift adds apparent size without touching the melody. Past that, the low mids pile up and the voice sounds cupped rather than large.

### What is formant correction?

Formant preservation under another name. The plugin measures the spectral envelope before the pitch move and re-imposes it afterward, so the resonances stay put while the note travels. Ableton, Logic Pro, FL Studio and Cubase each ship a version of it.

### Is formant shifting the same as autotune?

No. Pitch correction moves notes onto a grid. Formant shifting moves the resonances and leaves the notes alone. They often sit in the same plugin, which is where the confusion starts, and they are the two halves of [separating pitch from everything else](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/).

## What SKRUU does

SKRUU is two knobs that do not touch each other. **PITCH** moves the pitch and **TIME** moves the length: speed it up while pitching down, or the other way round, and lock either one while you play the other. PITCH runs from −20% to +10% in 128 states and reads out in semitones as well as speed, with unity marked; TIME runs from −50% to +25% and moves nothing but the length. The display is a pitch comparator in semitones, what went in against what came out, so how far off the record you are is a picture rather than a number you have to trust.

It sits on the other side of this line on purpose. A varispeed move carries pitch and formants together, because one rate governs both, and the shrinking singer is the outcome rather than a fault waiting for a correction knob. When that is the sound you came for, a formant control is the first thing you would be switching off.

The notes were always right. Now you get to decide who is singing them.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
