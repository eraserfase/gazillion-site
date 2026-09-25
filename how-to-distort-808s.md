# How to distort an 808

> How to distort an 808 so it growls on every speaker without losing the sub: split the signal, high-pass the distorted copy, pick the drive, handle glides.

Source: https://gazillionindustries.com/how-to-distort-808s/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A clean 808 is a luxury sedan: smooth, expensive and silent from the sidewalk. A distorted one is the same engine with a hole in the muffler, and everyone on the block knows exactly when it pulls up.

To distort an 808 without losing the low end, keep the sub clean and distort the part above it. Tune the 808 first, send it (or a copy) to a distortion or soft clipper, high-pass that distorted copy around 100 Hz, drive it until it growls, low-pass any fizz, and blend it under the clean 808. Keep everything in mono and compare at matched loudness.

## The short version

- **Tune**: before anything; distortion exaggerates a wrong note

- **Split**: clean sub below, distorted copy above

- **High-pass**: the distorted copy, around 100 Hz

- **Drive**: soft clip for warmth, harder curves for aggression

- **Low-pass**: trim the fizz on the distorted copy

- **Mono**: all of it, especially the sub

**LIMIT** instead, everything else identical.

## Clip the peak or hold it

Those two screenshots are the two ways an output stage can deal with a peak that is too tall, and they are not interchangeable on bass. A clipper changes the shape of the wave: the top of the peak flattens where it crosses the ceiling, and that flattening is the thing that makes harmonics. A limiter changes gain over time instead. It ducks the whole signal for a few milliseconds around the peak and leaves the waveform's shape alone, so it adds no harmonics and no growl.

On an 808 the difference has a size you can compute. One cycle of an E1 808 lasts 24.3 ms, which is one divided by 41.2 Hz. A limiter set to a 5 ms release is moving its gain roughly five times inside a single cycle of the note, and gain moving that fast on a wave that slow is heard as a wobble in the sustain. A clipper has no release at all, so it cannot wobble. That is most of why clippers won the 808 argument, and it is arithmetic rather than taste.

## Why distort an 808

Presence. A clean 808 is almost all one low frequency, which phones and laptops barely reproduce. Distortion bends that wave and adds harmonics above it, and the ear rebuilds the low note from them. The result is an 808 people hear on any speaker, with an attitude the clean one never had.

## Which harmonics do the work

Name them and the method gets easier to aim. An 808 tuned to E1 sits at 41.2 Hz, so its harmonic ladder runs 82.4, 123.6, 164.8, 206.0, 247.2, 288.4 and 329.6 Hz, climbing in even steps of 41.2 all the way up. On a single held note distortion invents no new pitches. It fills in that ladder, and the harder you drive it the further up the ladder it fills. A 41.2 Hz note has 485 harmonics below 20 kHz. That is the size of the canvas.

Now put a phone in front of it. Small drivers roll off in the bass and the corner frequency varies a lot by model, so count in harmonics rather than in hertz. Wherever your phone gives up, the first rung above that point is the first thing it can move air with. If the useful bottom sits somewhere near 500 Hz, the 12th harmonic of that E1 lands at 494.4 Hz and the 13th at 535.6 Hz, and those two are carrying your bassline out of the speaker while the fundamental never enters the room. The ear reconstructs the 41.2 Hz note from the even spacing of the rungs it can hear. Same trick, longer version, in [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

## Why it loses the low end

Distortion doesn't only add. Push a sub hard and its peaks flatten, the harmonics pile up on top, and the level of the fundamental relative to everything else drops. On slides and long notes the distortion also creates intermodulation, extra tones that muddy the bottom. Distort the whole signal hard and the 808 gets louder and thinner at the same time.

## What the measurement says the sub does

The fundamental itself does not leave, and knowing that changes what you reach for. Run a 41.2 Hz sine through a hyperbolic tangent soft clipper, normalize the output back to the same peak level, and the fundamental comes out *higher* than it went in: +0.55 dB at unity drive, +1.28 dB with 6 dB of drive, +2.04 dB at 18 dB. A hard clipper arrives sooner, +1.71 dB at 6 dB in. Both are walking toward the same wall at +2.10 dB, which is 4 divided by pi written in decibels — the fundamental of a square wave measured against the sine that made it.

What collapses is a ratio. On the clean note there is nothing between 120 and 500 Hz worth naming; that band sits about 95 dB under the 20 to 60 Hz band, which is another way of saying a sine is a sine. Peak-matched with 12 dB of drive into the soft curve, the sub band has risen 8.4 dB and the 120 to 500 Hz band has risen 73 dB, arriving 30 dB under the sub. At 18 dB of drive it closes to 23 dB under. Nothing was removed. The sub got outnumbered, and outnumbered is what thin means here.

So the control you actually want is a ratio control, and the split gives you one: the clean path sets the sub, the distorted path sets everything above it, and a fader between them sets the balance you just measured. Whole-signal distortion welds those two numbers together and hands you one knob for both.

## Intermodulation, in exact frequencies

Two low notes through one nonlinear stage produce tones belonging to neither. Take the 808 on E1 at 41.2 Hz and a kick body at A1, 55 Hz, into the same soft clipper with 12 dB of drive. The output contains a tone at 27.4 Hz sitting 16.8 dB below the 808's fundamental, and another at 68.8 Hz sitting 17.5 dB below it. The first is twice the 808 minus the kick; the second is twice the kick minus the 808. Back the drive off to 6 dB and both drop to about 25 dB down, so every 6 dB of extra drive costs you roughly 8 dB of unwanted tone.

Neither frequency is in your key, and neither moves with the arrangement. 27.4 Hz is below what most rooms and nearly all phones reproduce, so it does not announce itself. It eats headroom and it pushes your limiter, which is why a mix can read muddy on a meter and sound merely weak in the room. See [why is my mix muddy](https://gazillionindustries.com/why-is-my-mix-muddy/).

Octave layers are the exception, and the arithmetic says why. If the second note is exactly double the first, then twice the low minus the high is zero, the difference tone equals the fundamental, and twice the high minus the low equals the third harmonic. Every product lands back on the harmonic series of the lower note, so it reads as tone rather than as noise. An 808 doubled an octave up survives one distortion stage. An 808 sitting a fourth away from a kick does not. Splitting them is the subject of [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/).

## How to distort an 808 without losing the sub

- Tune the 808 to the song.

- Duplicate the 808 track, or send it to a return track.

- On the copy, put a high-pass filter around 100 Hz, then the distortion.

- Drive the distortion until the copy growls on its own.

- Add a low-pass after it wherever the top turns fizzy.

- Blend the copy under the clean 808 until it reads on a phone.

- Check both are in mono and compare at matched loudness.

Filtering before the distortion stops the sub from driving it; filtering after cleans up what it added. Try the high-pass in both places and keep whichever sounds tighter.

## Where the crossover goes, and the phase trap

100 Hz is a starting point, not an answer, because the right cutoff depends on the note. What matters is how far below the cutoff the fundamental sits and how steep the filter is. Here is the fundamental's attenuation for four common 808 notes at a 100 Hz cutoff:

- **C1, 32.7 Hz**: 1.61 octaves below — 19.4 dB down at 12 dB/oct, 38.7 dB at 24

- **E1, 41.2 Hz**: 1.28 octaves below — 15.4 dB down at 12, 30.7 dB at 24

- **G1, 49.0 Hz**: 1.03 octaves below — 12.3 dB down at 12, 24.7 dB at 24

- **A1, 55.0 Hz**: 0.86 octaves below — 10.3 dB down at 12, 20.7 dB at 24

Read that as a warning about high notes. A 12 dB/oct high-pass at 100 Hz only takes 10.3 dB off an A1, which leaves plenty of sub to drive the distortion and make the intermodulation above. If your 808 line runs above about G1, either steepen the slope or move the cutoff up to 120 Hz, where that same A1 fundamental is 13.5 dB down at 12 dB/oct.

The trap is phase. A filter turns phase as well as level, and the copy has to sum with a clean 808 that was never filtered. A 12 dB/oct high-pass leaves the copy 90 degrees ahead at its own cutoff, and 90 degrees apart means the two paths add to about +3 dB with no cancellation. A 24 dB/oct high-pass leaves the copy 180 degrees out at the cutoff — exactly inverted — so wherever both paths still carry level, they subtract. The symptom is a blend that gets *thinner* as you push it up.

Test it in ten seconds. Flip the polarity switch on the distorted copy and listen to the blend both ways. If inverted is fatter, you were sitting in the notch, and the fix is a shallower slope or a cutoff moved far enough that the two paths stop overlapping. Background in [phase cancellation](https://gazillionindustries.com/phase-cancellation/).

## Setting the drive with a number

Drive is level into a fixed curve, so you can state it instead of hunting for it. Measured on a 41.2 Hz sine through a tanh soft clipper, output peak-normalized each time, with THD meaning the combined level of everything the curve invented as a percentage of the note that went in:

- **−12 dB in**: THD 0.6%; third harmonic 45 dB down; nothing else measurable

- **−6 dB in**: THD 2.1%; third 33 dB down; fifth 66 dB down

- **0 dB in**: THD 7.3%; third 23 dB down; fifth 44 dB down

- **+6 dB in**: THD 18.7%; third 15 dB down; seventh 40 dB down

- **+12 dB in**: THD 32.5%; third 11 dB down; seventh 25 dB down

- **+18 dB in**: THD 41.9%; third 9 dB down — nearly a square wave

A hard clipper covers the same ground in less distance: 5.0% THD driven 1 dB into its ceiling, 14.5% at 3 dB in, 25.1% at 6 dB, 35.9% at 10.5 dB. It reaches any given THD figure with less drive and puts more of it in the upper harmonics, which is the audible difference between the two words. Percent and decibels are the same statement twice, by the way: 1% is 40 dB below the note, 3% is 30.5 dB down, 10% is 20 dB down.

For an 808 copy that has already been high-passed, the useful window is roughly 0 to +12 dB into the curve. Under that the copy is too polite to read on a phone. Over it, the seventh harmonic and its neighbors arrive in force, and the seventh sits 31 cents flat of the tempered minor seventh, which is the sourness people mean when they say a distorted 808 sounds wrong against the melody. Set it with a trim in front of the stage rather than by feel: [gain staging](https://gazillionindustries.com/gain-staging/) and [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

**BEEF at 96.** Past the polite window. On a high-passed 808 copy this is a color, not a default.

**SOFT CLIP** as the out stage, BEEF at 62.

## Which kind of distortion

Soft clipping and gentle saturation round the note and add weight, which suits melodic 808s and slower tempos. Harder clipping and overdrive add bite and aggression, which suits drill and faster trap. Very hard settings or wavefolding get close to a buzz, which is a choice, not a mistake, as long as the clean sub is still holding the floor. More on the differences in [saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/).

[BEEFY](https://gazillionindustries.com/beefy.html) can take a clean bass note toward a growl with one big knob. The demo on the page is 28 seconds.

## Aliasing at 41 Hz

A low fundamental pushes a distortion stage further up the spectrum than anything else in your session, and that is where aliasing lives. At a 44.1 kHz session rate the Nyquist limit is 22,050 Hz. For a 41.2 Hz note the 535th harmonic, at 22,042 Hz, is the last one that fits; the 536th, at 22,083 Hz, has nowhere to go and folds back down into the audible range. A hard-driven 808 generates hundreds of harmonics past that line, so the folding is not theoretical.

The reason it sounds bad rather than merely bright is a division. 44,100 divided by 41.2 is 1,070.39, not a whole number, so the folded partials land about 16 Hz off the harmonic grid of the note. They are harmonics of nothing. On a sustained 808 that reads as a faint metallic ring sitting over the note, and the giveaway is that it does not move when the note moves: play the same figure a fifth up and the ring stays roughly where it was. Oversampling is the general answer and it is a concept worth understanding before you go shopping for it — [oversampling](https://gazillionindustries.com/oversampling/) and [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/). Cheaper partial fix: low-pass the distorted copy before the fold has anything loud to work with.

## Glides and chords

Slides make distortion busier, because the harmonics sweep with the pitch. If a glide turns messy, pull the drive back on the copy, or automate the blend down through the slide. Two 808 notes overlapping through one distortion produce harsh extra tones, so keep 808 lines one note at a time.

A glide is worse than it looks because every rung of the ladder moves by the same ratio at once. Slide E1 up to A1, a fourth, and the fundamental travels 13.8 Hz while the 12th harmonic travels 165 Hz across the same few hundred milliseconds. The top of the spectrum is sweeping twelve times faster than the bottom, and any resonance in your chain gets excited on the way past. If a glide screams at one point and nowhere else, that is a fixed resonance being swept, and the fix is a bell cut on the copy rather than less drive.

## Checking it in your own session

- Bounce the same eight bars twice: clean 808, then clean plus distorted copy.

- Level-match the two bounces on a loudness meter before you compare.

- Sum the master to mono and listen to both again.

- Play both from a phone speaker at arm's length, at the volume a listener would use.

- Invert the copy's polarity mid-playback and note whether it gets fatter.

- Read the bus peak on both and write the two numbers down.

Step two has a catch worth knowing. A loudness meter applies a weighting curve that treats 41.2 Hz as 5.33 dB quieter than flat, while 206 Hz — the fifth harmonic of that note — is only 0.25 dB down. That is a 5.1 dB gap in the meter's opinion between your sub and your harmonics, all of it in favor of the harmonics. So a distorted 808 reads louder on the meter than the sub content alone justifies, you turn it down further to match, and the match is honest about perceived level while under-reporting what happened to the bottom. Match on the meter, then judge the sub by ear on something that can actually play it. Why the curve is shaped that way: [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/).

Step six is arithmetic you can do in advance. A clean 808 peaking at −6 dBFS with a distorted copy 12 dB under it puts the bus at −2.47 dBFS in the worst case, 3.53 dB louder than you started. Set the copy 20 dB under and the worst case is −4.42 dBFS, a gain of 1.58 dB. Whatever the blend costs, give it back to the master before you go anywhere near a limiter: [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

## Failure modes, and what each one sounds like

- **Loud and thin**: the whole 808 went through the drive; sub and harmonics rose together and the ratio moved against you

- **Hollow around the crossover**: a 24 dB/oct high-pass on the copy, 180 degrees out at the cutoff; try 12 dB/oct

- **Metallic ring on held notes**: aliasing folding off the harmonic grid; it stays put when the note moves

- **Rumble under the note**: intermodulation with the kick or a second 808 note; separate them or cut the drive

- **Fizz on the tail**: upper harmonics outlasting the fundamental; low-pass the copy or shorten its envelope

- **Great in solo, gone in the mix**: the harmonics landed where the snare and the vocal already live

- **Wobble on the sustain**: a limiter releasing faster than one cycle of the note

## Routing the split in each DAW

The routing differs more than the technique does. In Ableton Live, put two chains in an Audio Effect Rack on the 808 track, leave one empty and put the high-pass and the distortion on the other; both halves stay time-aligned inside the rack and the chain volume is your blend. In FL Studio, route the 808 channel to a second mixer insert alongside its own, and treat that second insert as the distorted path. In Logic Pro, duplicate the track with its settings and process the duplicate, which keeps the two paths independent when you start automating the blend.

All three compensate for plugin latency on parallel paths automatically, so the split does not smear on its own. It smears when one plugin misreports its latency, and a low sine is the most revealing test signal there is: a one-sample error on a 41.2 Hz note is a phase error of 0.3 degrees and inaudible, but a 256-sample buffer of uncompensated delay is 77 degrees and plainly audible as loss. If the blend sounds wrong only inside one project, bypass the copy's plugins one at a time and watch for the low end to snap back.

## What the split costs

Two paths is two of everything. Every automation move has to happen twice, every tuning change has to reach both, and a freeze or a bounce has to include both or you will find out later. The copy is a second thing to keep in mono and a second thing to watch on the meter. And there is a real case against the whole method: on a lot of drill and harder trap, the sound people came for *is* the whole signal driven flat, sub included, with the weight bought back by an EQ afterward. If that is the record, the split is the wrong tool and the extra precision buys you a tidier version of something nobody asked for. See [how to make drill 808s](https://gazillionindustries.com/how-to-make-drill-808s/).

## Questions people ask

### How do I make my bass sound distorted?

Run it through a soft clipper, overdrive or saturation plugin and raise the drive until you hear grit. To keep the low end solid, distort a high-passed copy and blend it under the clean bass rather than distorting the whole signal.

### Is an 808 just bass?

In modern production, mostly. The name comes from a drum machine's bass drum, but today "808" usually means a long, tuned bass drum that plays the bassline, often distorted so it's heard on small speakers.

### Does distortion make an 808 louder?

It makes it sound louder, because harmonics land where ears are most sensitive, even when the peak level doesn't change. That's also why you should compare at matched loudness before deciding it sounds better.

### What frequency should I high-pass the distorted 808 at?

Start at 100 Hz with a 12 dB/oct slope and move it with the note. At 100 Hz that slope takes 19.4 dB off a C1 fundamental but only 10.3 dB off an A1, so a high 808 line needs the cutoff nearer 120 Hz to keep the same amount of sub out of the drive.

### Should I distort the 808 or the whole drum bus?

The 808 on its own, in almost every case. A bus stage puts the 808 and the kick through one curve, and two low notes through one nonlinearity generate difference tones that belong to neither — 41.2 Hz against 55 Hz produces a tone at 27.4 Hz only 17 dB down at moderate drive. Bus saturation is for glue, covered in [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/).

### Should distortion go before or after compression on an 808?

After, usually. A compressor evens out the level hitting the curve, which makes the amount of distortion consistent from note to note instead of jumping with velocity. Put it the other way around and the loud notes get a different harmonic recipe from the quiet ones, which can be the effect you want on a sparse line.

### Why does my 808 sound fine alone and thin in the mix?

The harmonics you added landed where the snare, the hats and the vocal already are, so they are masked, and the sub you did not add is doing the work alone. Solo the distorted copy against the vocal rather than against silence, and move the copy's low-pass down until the two stop fighting.

### Does distorting an 808 need oversampling?

It depends on how hard you drive and at what session rate, not on the plugin alone. The test is your own: hold one note, drive the copy, and listen for a metallic ring that stays in the same place when you move the note. That fixed ring is folded content and it is the symptom oversampling addresses. No ring, no problem to solve.

### Should the distorted copy be in mono?

Yes, and check it rather than assume it. Any stereo width on the copy will partly cancel when a club sums to mono, and the cancellation is worst exactly where the copy is loudest. See [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

### Can I use a limiter instead of a clipper on an 808?

For peak control, yes. For growl, no — a limiter moves gain and leaves the waveform shape alone, so it adds no harmonics. It also has a release time, and any release shorter than the 24.3 ms cycle of an E1 note will be heard as movement in the sustain. The comparison in full: [limiter vs compressor](https://gazillionindustries.com/limiter-vs-compressor/).

### How much drive is too much on an 808?

Past about 12 dB into a soft curve you are at roughly 32% THD, with the seventh harmonic 25 dB down. The seventh sits 31 cents flat of the tempered minor seventh, so it reads as out of tune against the melody rather than as grit. When people say a distorted 808 sounds sour, that interval is usually what they heard.

### Why does my distorted 808 disappear in the car?

Car systems have their own resonances and a boot that reinforces one narrow band, so an 808 tuned near that band booms and every other note vanishes. Play a chromatic run of your 808 patch in the car and listen for the note that jumps. That is a room problem, and the fix is arrangement or a gentle cut, not more drive.

### Does distorting an 808 change its tuning?

No. On a single held note every harmonic a curve adds is a whole multiple of the fundamental, so the pitch is unchanged. What changes the perceived pitch is two notes at once, where the difference tones land off the grid.

## Stock plugins that do this

- **FL Studio**: Fruity Blood Overdrive; Fruity Soft Clipper

- **Ableton Live**: Saturator; Roar (Live 12)

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

## What BEEFY does

BEEFY is our saturation and loudness plugin, and 808s and bass are very much invited. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, adding harmonics above the low end so there's more to hear than just sub. Push **BEEF** and a clean bass note moves toward a growl. **COOK** moves the tone from rounder toward brighter and more bitten. For the split method above, run it on the copy or the return.

A new instance opens with SOFT CLIP on, **JUICE** at 0 dB, BEEF at 30 and COOK at 30, which is a working position rather than a bypass. JUICE is the input trim, so the drive figures in the table above can be set as a number instead of hunted for by ear. **LIMIT** is the alternative to SOFT CLIP on the output, and the two screenshots on this page are that one switch thrown both ways. It runs as AU, VST3 and standalone on Mac and Windows, and it costs $19.

Same engine, new muffler. Now the whole block hears it coming.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
