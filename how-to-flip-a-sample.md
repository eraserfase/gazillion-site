# How to flip a sample

> How to flip a sample instead of looping it: five moves that change what a record means, from extreme pitching to replaying the part yourself.

Source: https://gazillionindustries.com/how-to-flip-a-sample/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Everybody has the same records now. The crates are a search box, the rare groove is on a streaming playlist called Rare Groove, and four people in your city have already looped the same bar this week.

To flip a sample, change what it means, not just where it starts. The moves that do that are pitching it far enough to change its character, chopping it and reordering the pieces, filtering it down to one element and rebuilding around that, replaying the part yourself, or putting it over a groove it was never written for. A loop repeats a record. A flip uses the record as raw material for a different one.

## The short version

- **Pitch**: move it far enough to change the voice, not just the key

- **Chop**: cut it up and play a new order

- **Strip**: filter to one element and build around it

- **Replay**: play the part yourself and sample that

- **Recontext**: new tempo, new drums, new feel

- **Rate**: +5 semitones plays at 1.3348× speed, and drags the tempo with it

- **Rule**: if the original is still recognizable in the first bar, keep going

**DOSE 12.** The line along the bottom is gain reduction.

## Five ways to flip it

**Pitch it until it becomes someone else.** A soul vocal up five semitones stops being a man in 1972 and becomes an instrument you have never heard. Down four and the same phrase turns into a threat. Pitching also moves the formants, which is why extreme moves sound like a different singer rather than the same one transposed; [formant shifting](https://gazillionindustries.com/formant-shifting/) is the control that separates those two things.

**Chop it and change the order.** Take the four bars apart and play them back in a sequence the band never played, so the chord you liked lands where the drums hit rather than where the arranger put it. [How to chop samples](https://gazillionindustries.com/how-to-chop-samples/) covers the mechanics.

**Strip it to one element.** Low-pass until only the bass line survives, or high-pass until you have nothing but the ride and the room, then build the rest yourself. What you keep is a groove and a texture, and nobody can name the record from a filtered ride cymbal.

**Replay it.** Learn the four notes and play them on whatever is in the room. You keep the idea, lose the clearance problem, and get to change the voicing while you are there. Sample your own replay and treat that as the source.

**Change the context.** A ballad at 72 bpm becomes a different animal under drums at 144, because the ear hears the same phrase at half time. Slow it, swing it, or put a break under it that argues with the original feel.

## Pitch: the multiplier behind the move

Pitching by speed is one multiplication. Playing a sample *n* semitones up means playing it at two to the power of *n* over twelve, so +5 semitones is a rate of 1.3348 and −4 is 0.7937. Every other consequence falls out of that one number: length, tempo, and the position of every resonance in the recording.

Work the tempo out before you commit, because it decides whether the flip can live in your session at all. A 90 bpm loop taken up five semitones plays back at 90 × 1.3348 = 120.14 bpm. The same loop down four lands on 71.43. If your beat is already written at 88, a five-semitone lift hands you a tempo decision you have not made yet.

- **−12**: rate 0.5000 — 90 bpm becomes 45.00, and a 2.667 s bar grows to 5.333 s

- **−5**: rate 0.7492 — 90 bpm becomes 67.42

- **−4**: rate 0.7937 — 90 bpm becomes 71.43

- **−3**: rate 0.8409 — 90 bpm becomes 75.68

- **+3**: rate 1.1892 — 90 bpm becomes 107.03

- **+5**: rate 1.3348 — 90 bpm becomes 120.14

- **+7**: rate 1.4983 — 90 bpm becomes 134.85

- **+12**: rate 2.0000 — 90 bpm becomes 180.00, and the bar shrinks to 1.333 s

The resonances move by that same multiplier, and that is the part your ear hears as a different person. Say the vowel you liked has its first two peaks near 500 Hz and 1,500 Hz. At +5 semitones they sit at 667 Hz and 2,002 Hz; at −4 they sit at 397 Hz and 1,191 Hz. No throat is that size. That mismatch between a human phrase and an inhuman body is the entire trick, and it is why a small move sounds like a mistake and a large one sounds like a decision. [How to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/) goes further into the move itself.

Pitch far enough up and you run out of bandwidth. At a 44.1 kHz sample rate the highest frequency the file can carry is 22,050 Hz. Content sitting at 16 kHz taken up an octave wants to be at 32 kHz, which will not fit, and a resampler with nothing band-limiting it folds that energy back to 44,100 − 32,000 = 12,100 Hz. You hear a thin metallic ring an octave below the cymbals that slides *down* as you sweep the pitch *up*. [Aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) is the name for it, and on a dusty flip it is sometimes the best thing in the bar.

Small moves first, so the multiplier has something to point at. One loop at three speeds. Measured off these three files this week: peak sits at −0.74, −1.01 and −0.84 dBFS, a spread of 0.27 dB. A speed change of this size does almost nothing to your meter and everything to the key, which is why level is never the thing to judge a pitch move on.

- **Unity** — rate 1.0000, +0.00 semitones — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

**DOSE 88.** It dives on each hit and takes the bar to recover.

## Chop: the grid in milliseconds

A chop has a length, and you should know it in milliseconds before you start cutting. At 90 bpm a beat is 666.7 ms, a bar is 2,666.7 ms, a sixteenth is 166.7 ms and an eighth-note triplet is 222.2 ms. At 144 bpm the same four numbers are 416.7, 1,666.7, 104.2 and 138.9. Those are the only lengths your slices can be if they are going to land.

Every slice boundary that falls mid-waveform is a step in the signal, and a step is a click. A 5 ms fade at 44.1 kHz is 220 samples (0.005 × 44,100 = 220.5), long enough to bury the tick and short enough to leave the note alone. On a slice that starts on a kick, pull the fade to 3 ms, or 132 samples, so the front of the hit survives — a [transient](https://gazillionindustries.com/what-is-a-transient/) that short is most of what makes a drum sound like a drum.

Reordering is where the flip actually happens. Four slices can be played in 4 × 3 × 2 × 1 = 24 different orders, and eight slices in 40,320, so the bar you loaded is one arrangement out of tens of thousands the band never tried. Play the order in by hand rather than drawing it, keep the takes, and pick the one where the chord lands on a drum rather than next to it. [Chopping a drum break](https://gazillionindustries.com/how-to-chop-a-drum-break/) is the same operation with the swing at stake instead of the harmony.

## Strip: what a filter leaves, and what it costs you in level

Stripping means keeping one band and throwing the rest away, and the slope decides how clean that cut is. A 24 dB-per-octave low-pass at 200 Hz puts 1,600 Hz — three octaves up — 24 × 3 = 72 dB down, which is gone. A 12 dB-per-octave high-pass at 6 kHz leaves 1.5 kHz, two octaves below, only 24 dB down, so the body of the record is quiet but still there. One of those hides the source and one does not.

Narrowing a band costs level, and it costs more than people expect. Measured off the three files below this week: at the middle setting the peak falls 3.16 dB and the RMS falls 1.27 dB; at the narrow setting the peak falls 8.34 dB and the RMS falls 7.95 dB. A stripped part almost always sounds worse on the first listen for that reason alone, so make the level back before you decide anything. [Gain staging](https://gazillionindustries.com/gain-staging/) is doing half the work in every A/B you have ever lost.

One loop, the band narrowed in two steps, so the level figures above have something behind them. Listen for what survives rather than for what is missing: at the narrow setting the bass and the room are the whole record, and the source has stopped being nameable.

- **Open** — filter 100, nothing removed — https://gazillionindustries.com/f12/f12-clean.m4a

- **Filter 60** — peak down 3.16 dB, RMS down 1.27 dB — https://gazillionindustries.com/f12/f12-filter60.m4a

- **Filter 30** — peak down 8.34 dB, RMS down 7.95 dB — https://gazillionindustries.com/f12/f12-filter30.m4a

## Recontext: the stretch ratio, and when to let the pitch move

Moving a loop to a new tempo is a division, and the answer picks your method for you. A 90 bpm loop under 144 bpm drums is 144 ÷ 90 = 1.6. Get there on speed alone and the pitch rises by 12 × log₂(1.6) = 8.14 semitones, most of a fifth and a different record. Get there with a time-stretch and the pitch holds while the algorithm invents the material that was never recorded. Both are legitimate. Only one of them is free.

Half time is the move that costs nothing at all. 144 ÷ 2 = 72 exactly, so drums at 144 over a 72 bpm ballad need no processing whatsoever: the bar lines sit on top of each other and the ear hears the phrase at half speed against the kit. Any clean division works the same way — 80 and 160, 85 and 170 — and the awkward cases are the ones in between. 96 into 90 is a ratio of 1.0667, worth 1.12 semitones, close enough that letting the speed move and transposing the session to meet it usually beats stretching.

The further a stretch ratio sits from 1.0, the more of what you are hearing was made up by software rather than played by anybody. That is the trade, stated plainly. [Time stretching](https://gazillionindustries.com/time-stretching-explained/) covers how the algorithms differ, and [changing pitch without changing tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/) covers the case where you want one and not the other.

## How to flip a sample

- Loop the bar you like and listen until you can name what you like about it.

- Set the session tempo, then decide whether the sample follows your tempo or you follow its key.

- Pick one big move from the list above and commit to it before adding anything.

- Chop the result and play a new arrangement by hand.

- Build drums that fight the original groove rather than copying it.

- Mute the sample for four bars: if the beat dies, the flip is still doing the work.

- Process the flipped part as one thing so the pieces share a sound.

- Bounce the flip to a new file and work on the bounce, so pitch and stretch stop being live settings that a tempo change can undo.

- Match levels to within 1 dB before comparing the flip to the raw loop.

- Play eight seconds to somebody who knows the record and watch whether they name it.

[DRUGS](https://gazillionindustries.com/drugs.html) is our free one-knob bus compressor for drums, and it is what we reach for when a flipped loop needs drums with the room pushed up under the hits instead of on top of them.

## Flipping a sample in each DAW

Every host offers the same two switches under different names: follow the tempo, or follow the rate. Find which one your clip is set to before you touch a knob, because half the "my sample went weird" problems are a stretch algorithm quietly doing its job on material it was never meant for.

### Ableton Live

The Warp switch in the clip view is the whole argument. Warp off plays the file at its recorded rate and ignores your tempo. Warp on with Re-Pitch ties pitch to tempo the way a turntable does, so speeding the project up raises the key. Beats, Tones, Texture and Complex Pro all hold the pitch and stretch instead. Transpose is in semitones with Detune in cents underneath it, and *Slice to New MIDI Track* turns the chops into a rack you can play. [Varispeed in Ableton Live](https://gazillionindustries.com/varispeed-in-ableton-live/) has the detail.

### Logic Pro

Flex Time carries five algorithms, and the one called Speed is the varispeed option — it moves pitch with length, where Slicing, Rhythmic, Monophonic and Polyphonic all try to preserve the key. Flex Pitch handles the pitch side on its own. For chopping, Quick Sampler in Slice mode maps the pieces across the keyboard in one drag, and the project Varispeed control in the LCD pitches the whole session at once, which is the fastest way to audition a key change.

### FL Studio

The sampler channel's Time stretching mode is where this lives. Resample is the varispeed setting: pitch and length move together. The stretch modes hold pitch. Slicex takes a loop apart and lays the slices across the keyboard with their markers editable, and Edison is where you top and tail a chop and set the fades before it ever reaches the playlist.

### Reaper, Bitwig and Studio One

Reaper puts a playback rate field in item properties with a *preserve pitch* checkbox next to it — uncheck it and you have varispeed, check it and you have a stretch. Dynamic Split handles the chopping. Bitwig and Studio One both put the same choice in the clip or event inspector under a stretch-mode menu. In every case the setting you are looking for says repitch, resample or speed.

## Where the flip sits in the chain

Order matters here more than on most chains, because two of these stages change the length of the file. Pitch and stretch first, while the material is still one piece. Bounce. Filter and EQ next, so you are cutting the version you will actually use. Chop after that, with the fades set on the bounced file. Then process the slices as a group rather than one at a time, and only then put drums under it.

Watch what the later stages do to the earlier ones. Saturation exaggerates resampling artifacts rather than hiding them, so an aggressive upward pitch plus heavy drive gives you that metallic ring at twice the volume you expected — sometimes the point, often not. [Saturating drums](https://gazillionindustries.com/how-to-saturate-drums/) and [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) both apply once the kit arrives. Compression on the sample group pulls the record's own noise floor up into the mix, which is usually the best free texture in the session and occasionally a hiss problem. If the flip has gone thin, [making a sample sound fuller](https://gazillionindustries.com/how-to-make-a-sample-sound-fuller/) is the repair.

## How to check the flip is doing the work

Four tests, all of which you can run in your own session in under a minute.

- Mute the sample for four bars — 10.67 s at 90 bpm. If the beat collapses, the flip is carrying it; if nothing happens, you wrote a loop with decoration on top.

- Check the tempo arithmetic. A 90 bpm source pitched up five semitones should read 120.14 bpm. If your host reports 90, the pitch move was a stretch, not a speed change, and the character you were chasing is not going to arrive.

- Bounce it and play it on a phone. A flip that depends on sub-100 Hz content disappears on a speaker that starts rolling off above it, and phone playback is where most of this music gets heard. [Loudness curves](https://gazillionindustries.com/fletcher-munson/) explain why the balance shifts as well as the bandwidth.

- Play eight seconds to a person who owns the original. The moment they name the record, you have a loop.

## Failure modes, and what each one sounds like

Six things go wrong, and each has a sound you can learn to identify in a bar. Naming the symptom is most of the fix, because every one of them has a different cause and a different control.

- **Chipmunk**: vowels too small for the voice, a glassy edge on consonants. The formants moved with the rate; shift them back down or commit harder

- **Smear**: a soft halo arriving just before each transient and a phasing wobble on sustained chords. The stretch ratio is too far from 1.0

- **Ticks**: a dry click at the head of every slice, worst on the ones cut mid-sustain. Fades of 3 to 5 ms, or 132 to 220 samples at 44.1 kHz

- **Metal**: an inharmonic ring that slides down when you sweep the pitch up. Fold-back from pitching past the bandwidth the file has

- **Thin**: the stripped part vanished under the drums. 7.95 dB of RMS left with the band you cut, and none of it came back on its own

- **Clash**: a slow beating on held notes. The sample got transposed and the bass line did not

The seventh failure has no sound at all, which is what makes it dangerous: the flip that changed nothing. If the first bar still plays as the record, you moved furniture around a room that is still somebody else's.

## Where it costs you

Flipping hard means giving up the thing that made you load the record. Pitch it far enough and the warmth you liked turns thin; chop it fine enough and the phrase stops breathing. There is also a practical cost: the harder the flip, the more of the arrangement you have to supply yourself, which is why heavily flipped beats usually need more drum work, not less.

Clearance does not care how clever the flip is, either. Transformation is a musical argument, not a legal defense.

The tool cost is close to nothing, and worth saying plainly because a lot of pages on this subject imply otherwise. Your host already ships a pitch algorithm, a stretch algorithm, a slicer and a filter, and everything above can be done with those alone. If you want ours: DRUGS is free for Mac and Windows, SKRUU is $29 for the pitch and time side, and F(ilter)12 is $49 with DRUGS included. The expensive part of flipping has always been the digging, and it still is.

A flip that leaves most of the loop alone is its own approach - [how to make Madlib type beats](https://gazillionindustries.com/how-to-make-madlib-type-beats/).

## Questions people ask

### Is sample flipping legal?

Flipping is a creative method, not a permission. A release that contains someone else's recording needs clearance from the owner of the recording and the owner of the composition, however much you changed it. Replaying the part yourself removes the recording side of that, though the composition is still somebody's.

### How do you flip audio backwards?

Reverse the region or sample in your DAW, which plays it from the end. Reversed chords and cymbals are useful as lead-ins because the sound swells into the downbeat instead of hitting it. Reverse a chop, bounce it, and chop the bounce for a part that sounds recorded rather than processed.

### Is sampling lazy?

Finding the bar, hearing what it could become, and rebuilding it is arrangement work. Looping a bar and adding hi-hats is not, and the difference is audible in two seconds. The method is neutral; the flip is where the labor shows.

### What does it mean to flip a sample?

Flipping means using a recording as raw material for a piece of music that is not the recording. The test is whether a listener who knows the source can name it in the first bar. Change the pitch, the order, the band, the player or the tempo far enough that the answer is no, and you have flipped it.

### What is the difference between a loop and a flip?

A loop keeps the source arrangement and repeats it. A flip takes the arrangement apart and puts a new one back. Both are valid records and one of them is much harder to make, because the second you stop repeating the bar you have to supply everything the band was supplying.

### How many semitones should I pitch a sample?

Far enough to change the body of the voice rather than just the key, which in practice means three semitones or more in either direction. One or two semitones reads as a tuning correction. Five up multiplies the rate by 1.3348 and every resonance with it, and that is where a phrase starts sounding like a different instrument.

### Why does my pitched sample sound like a chipmunk?

Because the formants went up with the pitch. Speed-based pitching multiplies every frequency in the file by the same number, so a resonance at 500 Hz taken up five semitones lands at 667 Hz and the implied throat gets shorter. Use a pitch shifter with a separate formant control to hold them down, or lean into it and let the flip be inhuman on purpose.

### Why does my stretched sample sound underwater?

Because the stretch ratio is far from 1.0 and the algorithm is manufacturing most of what you hear. The giveaway is a smear before transients and a phasing quality on held chords. Either pick a closer tempo, switch to a speed-based move and transpose the session to meet the new key, or chop the loop and move the pieces instead of stretching the whole thing.

### How do I get rid of the clicks between chops?

Fade every slice edge. Three to five milliseconds is the working range, which at 44.1 kHz is 132 to 220 samples. Anything shorter leaves the step in the waveform audible as a tick; anything much longer starts eating the attack. Slices that begin on a kick want the short end of that range.

### Do I have to chop a sample to flip it?

No. Pitching, stripping to one band, replaying the part and changing the tempo context all qualify, and some of the best flips are a single loop moved a long way. Chopping is the most reliable route because reordering four slices gives you 24 arrangements to choose from, but it is one option out of five.

### How do you flip a sample in Ableton?

Drop the audio in a clip slot, set Warp to Re-Pitch if you want speed and key tied together or Complex Pro if you want the key held, then use Transpose in semitones. Right-click the clip and choose Slice to New MIDI Track to get the chops as a playable rack. Build the new order on that rack rather than by dragging audio around.

### How do you flip a sample in FL Studio?

Load the loop into a sampler channel and set Time stretching to Resample for a speed-based move, or a stretch mode to hold the pitch. Use Slicex for chopping, since it lays the slices across the keyboard with editable markers, and set your fades in Edison before the part leaves the editor.

### What tempo should I flip a sample at?

Pick the tempo of the beat first, then work out what the sample has to do to arrive there. The arithmetic is one division: your tempo over the sample's tempo. A quotient of 2.0 or 0.5 is free, anything near 1.0 is easy either way, and the awkward middle is where you have to choose between a stretch and a key change.

## What DRUGS does

DRUGS is a bus compressor with one macro control, called **DOSE**, and it is free. It goes on a drum bus and makes it denser rather than louder, reshaping a break instead of leveling it, with the room brought up underneath the hits. There is no threshold and no ratio in the model, so there is nothing to set up: turn it up until the drums stop being polite.

On the way out there is GAIN and a soft ceiling. GAIN adds 5 dB after the compressor and before LIMIT, and LIMIT is a zero-latency soft ceiling at −0.3 dBFS with a clip indicator, transparent below about −0.9 dBFS; both are on when it opens. DOSE at 0 is not a bypass, so when you A/B a flipped break, switch the plug-in off rather than turning the knob down. It installs as AU, VST3 and a standalone on macOS and as a VST3 on Windows, with zero samples of latency on either — which matters on a flip, where a chopped copy usually has to stay sample-aligned with the loop it came from.

Four people looped the same bar this week. Only one of them is going to be unrecognizable.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
