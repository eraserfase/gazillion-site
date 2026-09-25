# Adaptive EQ

> An adaptive EQ changes its curve as the music plays instead of holding one shape. What the family covers, and when a static EQ is still the right answer.

Source: https://gazillionindustries.com/adaptive-eq/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

A static EQ is a decision you make once and the whole song lives with. An adaptive EQ keeps re-deciding while the music plays.

An adaptive EQ changes its curve in response to the signal instead of holding a fixed shape. The family covers dynamic EQ, which moves a band only while that band is loud; resonance suppressors, which hunt for ringing peaks and duck them; and tilt or matching tools, which follow the broad shape of the spectrum. Reach for a static EQ when the problem is constant, like a microphone that is dull on every take. Reach for an adaptive one when the problem comes and goes, like a vocal that turns harsh only on the loud lines.

## The short version

- **Static EQ**: one fixed curve, applied at every moment

- **Adaptive EQ**: the curve is written by a detector, not by the knob

- **Dynamic EQ**: a band that cuts only while it is over threshold

- **De-esser**: a dynamic band with the detector narrowed to sibilance

- **Resonance suppressor**: many narrow bands, chasing whatever sticks out

- **Adaptive tilt**: follows the broad balance toward a target slope

- **Static wins when**: the problem is in every bar

- **Adaptive wins when**: the problem is in some bars

- **Main risk**: fast settings low down; the cut stops being a level change

## What makes an EQ adaptive

A static filter is three numbers. Frequency, gain, Q. You pick them and they hold for the length of the song, whether the music needs them at bar 4 or not. That is why EQ is the most dependable tool in a mix: the same input always produces the same output.

An adaptive EQ puts a detector in front of the filter. The detector measures something — the level in one band, the slope of the whole spectrum, the level of a different track entirely — and the gain of the band gets written by that measurement instead of by the knob. The knob stops being a value and becomes a ceiling: at most 6 dB of cut, applied only when the detector asks for it. Three parts, every time. Something that measures, something that decides how much, and a filter that gets told. Change what the measurement looks at and you get a different product with a different name on the box.

## The family, and what each one solves

**Dynamic EQ.** A bell or a shelf with a threshold attached. Under the threshold the band sits flat. Over it, the band cuts in proportion to how far over the signal went. Set a band at 3 kHz with a threshold at −20 dBFS and a 4:1 ratio: a moment arriving 8 dB over leaves 2 dB over, which is 6 dB of cut, while a moment arriving 2 dB over gets 1.5 dB. The depth tracks the size of the problem. This is the tool for the intermittent resonance — the note that booms, the chorus cymbal that splashes, the syllable that bites.

**The de-esser.** The oldest member of the family and the one everybody already owns. Band-pass the detector between 5 and 8 kHz, leave the filter on the same range, and the band ducks on sibilance and sits still on everything else. Nothing about it is special except the preset.

**Multiband compression.** Related, and a different shape. A multiband compressor splits the signal at crossover points and compresses the pieces separately; a dynamic EQ lays one filter over the full-range signal. That decides how surgical you can be. A dynamic bell at Q 6 addresses 150 Hz and leaves 400 Hz where it was; a crossover at 200 Hz moves everything under it at once.

**Resonance suppressors.** These analyze the spectrum continuously, compare each narrow slice against the average of its neighbors, and pull down whatever sticks up out of the local shape. You do not choose the bands. There are dozens or hundreds of them, they are narrow, and they move. A bell centered on 180 Hz at Q 8 covers about 22 Hz of bandwidth, which is center frequency divided by Q, and a semitone at 180 Hz is about 10.7 Hz — narrow enough to take down a ringing note and barely reach the ones either side. This is the tool for the problem you cannot name, because it is a different frequency every half second: a guitar whose body rings on two chords out of six, a room that honks on one vowel, a sampled loop with an edge that vanishes the moment you solo it.

**Adaptive tilt and spectral matching.** A tilt EQ pivots the spectrum around a center point, lifting one end as it drops the other. Make the amount follow the signal and it measures the slope of what arrives, compares that against a target slope, and applies the difference. On a bus carrying material from several places — a folder of samples, a live set, three microphones in a room — the broad balance holds steady while the sources change underneath it. Spectral matching is the same idea with a measured curve as the target. Left in follow mode it stays adaptive; printed once and frozen, it becomes a static EQ with a complicated shape.

**Sidechained or unmasking EQ.** Point the detector at a different track. A band at 60 Hz on the bass, keyed from the kick, opens a hole for exactly as long as the kick is there and closes when it leaves. The same move at 2 kHz on a pad, keyed from the vocal, buys the vocal room in the one band it needed.

## When is a static EQ the right answer?

The test is whether the problem is in every bar. A microphone with a lift at 7 kHz that sits wrong on a particular singer is wrong on every line of every take. The fix is a cut at 7 kHz, Q 1.2, four decibels, set once, after which the session is about something else. Nothing needs to move because nothing about the problem moves.

Make that band dynamic and you have built a detector that is over its threshold the entire time, which is a static cut with a release time attached and a new way to go wrong. The same logic covers high-passing a hi-hat track at 200 Hz or pulling a permanent 300 Hz box out of a boxy room. Constant problem, constant fix. A static EQ is also the only one you can draw on paper and hand to somebody else.

## When does an adaptive one earn its place?

Count bars instead. A vocal sits fine through the verses and grows a hard 3 kHz edge on the six lines where the singer pushes. Cut 3 kHz by the amount those six lines need and the verses go dull. Cut by the amount the verses can take and the six lines still bite. If the song runs 96 bars and the harshness is on 12 of them, a static cut is the wrong answer for 84 bars and the right one for 12. A dynamic band at 3 kHz, with the threshold set high enough to idle through the verses, does both jobs with one control.

Three more cases where the problem comes and goes:

- **One note louder than its neighbors.** A bass recorded in a small room will have two or three notes the room helped. The excess lives at the pitch of those notes, so the cut has to arrive with the note and leave with it.

- **Material you did not record.** A sampled loop is finished, and the content changes hit to hit, so a fixed notch is only ever right about some of the hits by luck.

- **Two parts fighting over one band.** The fix only needs to exist while both are playing, which is what a sidechained band does well and what drawn automation does badly.

## How do you set one up without it pumping?

- Find the frequency with a static boost first. Narrow bell, 6 to 10 dB up, sweep until the problem gets worse, then invert the boost into a cut.

- Set the depth the worst moment needs, with the threshold right down so the band works constantly. Judge the amount there, where you can hear it.

- Raise the threshold until the band goes idle on the material that was never the problem. That is the setting.

- Set release against the tempo. At 120 BPM a quarter note is 500 ms and a sixteenth is 125 ms, so a 300 ms release on a hi-hat band is still opening when the next hat lands, and you have built a slow static cut by accident.

- Below 150 Hz, slow everything down. A 50 Hz wave takes 20 ms to finish one cycle, and a gain change faster than that reshapes the waveform rather than changing its level.

- Watch the gain reduction meter rather than the curve. The curve shows what the band is allowed to do; the meter shows what it did.

- Bypass on the quiet material, not on the loud. Anyone can hear the improvement on the worst moment. The question is what happened to the other ninety percent.

## Where it goes in the chain

Everything in this family has a threshold, which makes all of it level-dependent. Move a fader 3 dB in front of one and every threshold behind it is 3 dB wrong. Set the gain staging first and leave it alone.

Resonance work goes before compression. A ringing peak that survives into a compressor makes the compressor duck on the ring instead of on the note, so the whole track starts breathing at the frequency of the fault. Tonal shaping goes after, because an EQ in front of a compressor decides what the compressor reacts to and an EQ behind it decides what you hear.

Lofi material makes the argument on its own. Lower a sample rate and the content that lands in the mids has no harmonic relationship to the note that produced it, so it arrives at a new frequency on every hit — the arithmetic is in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/), and the grain half of it in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/). A fixed notch can be right about one hit. Something that follows the spectrum can chase all of them, which is why an adaptive stage tends to end up last in a chain that starts the way [how to make lofi beats](https://gazillionindustries.com/how-to-make-lofi-beats/) describes.

## What it costs you

CPU, first, and more than the band count suggests. A static filter is a handful of multiplications per sample. An adaptive one analyzes, decides, then filters, and a suppressor doing that across hundreds of narrow bands is a different order of work.

Latency, second, on anything with lookahead. Hosts compensate, so the symptom shows up as a session that will not run at a small buffer rather than as a late track.

Predictability, third. A static EQ does the same thing to every take. An adaptive one does a different thing to every take, which is the point, and also means a vocal comp built from four passes carries four slightly different treatments.

Character, fourth, and this is the expensive one. Set a suppressor hard across a bus and it flattens the differences between the things underneath it, because the detector has no way to tell the part that stuck out for a bad reason from the part that stuck out for a good one. Turn the depth up until the fault goes, back off until you can just hear it again, and live there.

## Questions people ask

### What is an adaptive EQ?

An EQ whose curve is set by a measurement of the signal rather than by a knob you turned once. A detector watches the audio, decides how much gain the band should have at this instant, and the filter follows. Dynamic EQs, de-essers, resonance suppressors and adaptive tilt tools are the same idea with different detectors.

### What is the difference between a dynamic EQ and a compressor?

A compressor changes the level of the whole signal when the detector crosses the threshold. A dynamic EQ changes the level of one frequency band. The detector, the threshold and the ratio work the same way in both; what differs is how much of the spectrum moves when they fire.

### Is a multiband compressor the same as a dynamic EQ?

No. A multiband compressor splits the signal at crossover points and compresses each piece, so the bands are fixed and cover everything between them. A dynamic EQ overlays bell or shelf filters on the full-range signal, so a band can be narrow and the rest of the spectrum passes untouched.

### When should I use a dynamic EQ instead of a static one?

When the problem is intermittent. If the fault is in every bar, a static cut is simpler, cheaper and easier to recall. If it appears on some notes, some sections or some takes, a static cut is wrong whenever the fault is absent, and that is the case an adaptive band exists for.

### Is a de-esser a dynamic EQ?

Yes, with the detector band-passed around the sibilance and the filter aimed at the same range. Any dynamic EQ becomes a de-esser by putting a band at 6 to 8 kHz and setting the threshold so it only fires on the hard consonants.

### Can an adaptive EQ replace volume automation?

For narrowband problems, often yes, and it keeps working when you change the take. For anything about arrangement or performance, no. Automation is a musical decision with a shape you chose; a detector only knows how loud a band was a few milliseconds ago.

### Does an adaptive EQ add latency?

Only if it uses lookahead or linear-phase filtering. A straightforward dynamic band in minimum-phase mode adds none. Suppressors and matching tools usually work in blocks and do add some, which the host reports and compensates for.

### Why does my dynamic EQ sound like it is pumping?

Usually release time against tempo, or a band placed too low for the settings on it. Work out the note length at your tempo and keep the release under it, and remember that below about 150 Hz a single cycle is long enough that fast gain changes distort rather than duck.

## What F(ilter)12 does

AURA, in [F(ilter)12](https://gazillionindustries.com/f12.html), is an adaptive EQ, and it sits after the lo-fi section and the filter rather than in front of them. That puts it on the output of a crush, which is the material a fixed curve handles worst, since the content that needs attention moves from hit to hit. The rest of the panel is there to make the mess.

The curve keeps re-deciding. You get to decide how much mess it has to decide about.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
