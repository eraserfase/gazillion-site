# How to mix the kick and the 808

> How to mix a kick and an 808 so they stop fighting: who owns the sub, tuning, sidechaining the 808 to the kick, phase, and using the 808 as the kick.

Source: https://gazillionindustries.com/how-to-mix-kick-and-808/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The kick and the 808 are two roommates with one bathroom. Both need it at exactly the same time every morning, and when they both push through the door at once, nobody gets anything done.

To mix a kick and an 808, give each one its own job and its own moment. Tune the 808 to the song and pick a kick that works with that key, decide which one owns the lowest frequencies, keep them from hitting at the same instant (in the arrangement or with sidechain ducking), line up their phase where they do overlap, and keep both in mono. Then balance them by listening on big and small speakers.

## The short version

- **Roles**: 808 owns the sustained sub; kick owns the hit

- **Tuning**: 808 in key; kick that doesn't fight it

- **Timing**: don't let both land at full level at once

- **Sidechain**: duck the 808 a few dB under each kick

- **Phase**: flip polarity or nudge if they cancel

- **Mono**: both, below the harmonics

- **Headroom**: two equal hits in phase sum to +6.02 dB

- **Order**: tune, duck, saturate, then judge on the bus

**LIMIT** instead, everything else identical.

## Why they fight

They live in the same place. A kick's body and an 808's fundamental both sit low, and when two low sounds play at once their waveforms add. Where they line up, the result is a bigger peak that eats headroom; where they're out of phase, part of the low end cancels and the hit goes hollow. Which one you get changes with every note the 808 plays. That's why a beat can sound huge on one bar and weak on the next.

Put a number on the good case. Two identical signals in phase double the amplitude, which is exactly +6.02 dB. A kick peaking at −6 dBFS landing on an 808 peaking at −6 dBFS therefore arrives at +0.02 dBFS. Over the top, on a bar where neither one came close on its own.

The bad case is quieter and harder to find. At these frequencies a millisecond is a large fraction of a cycle. One cycle at 50 Hz lasts 20 ms, so every millisecond of offset between the two is 18 degrees of phase, and 10 ms is a full 180 degrees. Start the 808 ten milliseconds off the kick and the two erase each other wherever they overlap.

Now the part that makes it feel random. That 10 ms is 180 degrees only at 50 Hz. At 40 Hz a cycle is 25 ms and the same offset is 144 degrees; at 60 Hz a cycle is 16.67 ms and it becomes 216 degrees. One offset, three different answers, and an 808 line changes pitch every bar. There is the whole mystery of the beat that is enormous on the G and missing on the B.

## Give yourself the headroom first

Fix the levels before you fix the collision, because every diagnosis below is read off a meter. If the kick and the 808 each peak around −12 dBFS on their own, the worst coincident hit lands at −5.98 dBFS and the bus still has room to show you what happened. At −10 dBFS each, the same sum is −3.98 dBFS. At −3 dBFS each it is +3 dBFS and whatever you hear next is the conversion, not the mix.

Three sources at once is worth knowing too, because plenty of beats have a kick, an 808 and a sub layer. Three equal signals in phase sum to +9.54 dB. [Gain staging](https://gazillionindustries.com/gain-staging/) and [headroom](https://gazillionindustries.com/headroom-in-mixing/) cover the rest.

## Decide who owns the sub

One of them has to lead down low. In most trap and drill, the 808 carries the sub and the kick supplies a shorter punch and click on top. In other styles the kick owns the bottom and the bass sits a little higher. Pick one, then shape the other around it: a shorter kick with less low end, or an 808 that starts just after the kick's body has gone.

Put the split somewhere you can name. The common trap layout gives the 808 everything below 60 to 80 Hz and high-passes the kick there, leaving the kick its body and its click. Slope decides whether that split is real. A 24 dB/octave high-pass at 70 Hz is 24 dB down one octave below at 35 Hz, an amplitude ratio of about 1 to 15.8, so the kick genuinely stops contributing there. At 12 dB/octave it is only 12 dB down, a ratio of about 1 to 4, which is plenty loud enough to keep arguing with the 808.

The other layout runs the opposite way: the kick keeps 40 to 80 Hz and the bass line is written an octave up, out of the fight entirely. Boom bap and most house beats work like this, and it is the reason those records survive a small speaker without anybody sidechaining anything.

One thing to leave alone. Do not low-pass the 808 to keep it out of the kick's way. The 808's harmonics above 100 Hz are the only part of it a laptop or a handset will ever play, and cutting them trades a problem you can hear on monitors for one you cannot hear at all until somebody sends you a voice note from a bus.

## Tune them together

An 808 that's out of key clashes with the chords, and a kick with a strong pitch can clash with the 808. Tune the 808 to the song first. Then listen to the kick against it on the root note; if the low end sounds rough or beats against itself, tune or swap the kick until it settles.

These are the fundamentals in the octave most 808s live in, at twelve-tone equal temperament with A4 at 440 Hz:

- **E1**: 41.20 Hz

- **F1**: 43.65 Hz

- **F♯1**: 46.25 Hz

- **G1**: 49.00 Hz

- **G♯1**: 51.91 Hz

- **A1**: 55.00 Hz

- **A♯1**: 58.27 Hz

- **B1**: 61.74 Hz

- **C2**: 65.41 Hz

To read what you actually have, solo the 808, loop one long note and put a high-resolution analyzer on it. The tallest low peak is the fundamental. Pitch the sample until that peak sits on the number in the table. Do the same to the kick and write its number down, even though nobody thinks of a kick as having a pitch.

Here is why the second number matters, in swells per second. An 808 sitting on A1 at 55.00 Hz under a kick whose body reads 58 Hz produces beating at the difference, 3 Hz: three slow swells every second, for as long as both are sounding. Those two are 92 cents apart, very nearly a whole semitone, and no tuner is going to tell you because nobody tuned the kick in the first place.

The small version is sneakier. 50 Hz against 51 Hz is 34 cents and one swell per second. At 140 BPM a quarter note lasts 428.57 ms, so that swell is slower than the pulse and drifts across the bar, making the low end seem to change size for no reason anyone can point at.

Three ways out, cheapest first: pitch the whole kick sample until its body agrees with the root, notch a narrow dip at the kick's fundamental, or shorten the kick so its tail never lives long enough to meet the 808's.

**BEEF at 8.** The reference you A/B against.

## Sidechain the 808 to the kick

- Put a compressor on the 808.

- Set its sidechain input to the kick.

- Use a fast attack, a ratio around 4:1 and a release short enough to recover before the next kick.

- Lower the threshold until the 808 ducks a few dB on each kick hit.

- Listen for the kick coming through clearly without the 808 audibly pumping.

A volume-shaping or ducking plugin triggered by the kick does the same job with more control over the curve. Either way, the goal is the kick getting the door for a few milliseconds, not the 808 disappearing.

"Short enough to recover" has a number attached to it, and the number is the gap between kicks. At a given tempo with kicks on quarter notes, that gap is 60,000 divided by the tempo:

- **85 BPM**: 705.88 ms between kicks — release 150 to 230 ms

- **90 BPM**: 666.67 ms — release 150 to 220 ms

- **130 BPM**: 461.54 ms — release 100 to 150 ms

- **140 BPM**: 428.57 ms — release 100 to 140 ms

- **150 BPM**: 400.00 ms — release 90 to 130 ms

- **160 BPM**: 375.00 ms — release 85 to 125 ms

The rule behind the right-hand column is a third of the gap, which leaves the 808 back at full level for the remaining two thirds. Halve those releases if the kicks are on eighths, and halve them again for sixteenths — at 140 BPM a sixteenth is 107.14 ms, which is the point where the ducking stops being an effect and starts being the 808's envelope.

Now the reassuring arithmetic, because most people duck too little out of fear of losing weight. Take 140 BPM, quarter-note kicks, a 3 dB duck lasting 100 ms out of every 428.57 ms. That is a 23.3% duty cycle at half power, and the 808's average level over the bar drops by 0.54 dB. Go to a 6 dB duck over the same window and it drops by 0.83 dB. Ducking barely changes how loud the 808 is. It changes *when* it is loud, which is the entire point.

## What the sidechain controls are doing, and how each one fails

Every control on that compressor has an audible failure, and they sound nothing alike. Learn the four and you stop guessing.

**Attack too slow.** Set 10 ms on a 50 Hz problem and half a cycle of the 808 has already gone by at full level before the gain starts moving. The meter shows a tidy duck and the speakers show the collision you were trying to dodge. Use the fastest attack the plugin offers, 0 to 1 ms.

**Release too short.** At 50 Hz a 5 ms release is a quarter of one cycle, so the gain moves four times inside a single period of the 808 and the envelope becomes part of the waveform. It sounds like the 808 grew a fuzz pedal on the tail of every note, and no amount of threshold hunting removes it.

**Release too long.** The 808 never gets back to full before the next kick, so the whole bar sits two or three dB down and nothing in particular sounds wrong. This is the one people ship. The track just feels lighter than the reference and nobody can name the reason.

**Duck too deep.** Past roughly 8 to 10 dB the ear stops hearing a kick with room around it and starts hearing the bass breathing. On a quarter-note pattern it reads as a pulse; on a busy sixteenth pattern it reads as the low end flickering. [Sidechain compression](https://gazillionindustries.com/sidechain-compression/) has the general case.

**LIMIT** instead, everything else identical.

## Check the phase

Solo the kick and the 808 together on a note where they overlap. Flip the polarity on one of them; if the low end gets fuller, keep it flipped. If neither setting sounds right, nudge the 808's start a few milliseconds later, or trim its attack so the two waveforms stop fighting. Then check other notes, since the answer can change with pitch.

How much a nudge costs you, per millisecond, at the pitches an 808 actually plays:

- **40 Hz**: 25.00 ms cycle — 14.4° per ms

- **50 Hz**: 20.00 ms — 18.0° per ms

- **55 Hz**: 18.18 ms — 19.8° per ms

- **60 Hz**: 16.67 ms — 21.6° per ms

- **80 Hz**: 12.50 ms — 28.8° per ms

Do the test with a meter, not only with ears. Loop one bar where the two coincide, put a peak meter on the bus that carries both, and write down the number. Flip the polarity on the 808 and write down the new number. A difference of a couple of dB tells you which way the pair is adding; a difference near zero tells you they barely overlap and the phase is not your problem.

The two repairs are not interchangeable. A polarity flip rotates every frequency by 180 degrees at once. A time nudge rotates each frequency by a different amount, more the higher you go, which is why the flip sometimes does nothing at all and a two-millisecond move fixes everything. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) goes further into the mechanism.

The concession, stated flatly: on a pattern where the 808 plays five different notes, no single setting is right for all five. Tune the alignment to the loudest, longest note in the pattern and let the passing notes be slightly wrong. Chasing all five is how an evening disappears.

## Keep the bottom in mono

Below about 100 Hz there is nothing for two ears to compare, so width down there buys you no image and costs you level in mono. The wavelength of a 50 Hz tone in air is 343 divided by 50, which is 6.86 m. A head is about 0.18 m across, which is 2.6% of that wavelength, or 9.5 degrees of phase difference between your ears. Nine degrees is not a stereo image.

At 100 Hz the wavelength is 3.43 m and the same head spans 18.9 degrees, so that is roughly where width starts to mean anything. Sum everything below it, or simply put the 808 and the kick in mono and spend the width on the things that can use it.

What a wide 808 sounds like when it meets a mono system, which is most club rigs and every phone: part of it quietly leaves. Not a dropout, just a beat that was enormous in your room and ordinary everywhere else. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) has the checks.

## Use the 808 as the kick

Sometimes the cleanest answer is no kick at all where they collide. An 808 with a strong attack, or a short click layered on its start, can be the hit and the bass at once. It's a common approach in trap, and it takes the collision off the table entirely.

Build it the same way you would build a kick. Take the 808 as the sub layer, high-pass a click or a top sample at 1 kHz so only its front edge survives, and align that click to the 808's first peak rather than to the file start. Because the click carries nothing below 1 kHz, there is no low-frequency phase relationship left to go wrong, which is the whole advantage. [How to layer kicks](https://gazillionindustries.com/how-to-layer-kicks/) covers the alignment in samples.

[BEEFY](https://gazillionindustries.com/beefy.html) puts harmonics above the 808's low end, so it's heard without taking more sub from the kick. The demo on the page is 28 seconds.

## The arrangement fix is free

The cheapest sidechain is an empty step. If the 808 does not land on the kick, there is nothing to duck, nothing to align and nothing to explain to anybody later. Write the 808 to start on the off-beat, or cut the note short so its tail has ended before the next kick arrives.

Where the pattern will not move, move it a little. At 140 BPM a thirty-second note is 53.57 ms, which is enough to leave the kick's first half alone and still sits inside the pocket. At 150 BPM the same subdivision is 50.00 ms, and at 160 BPM it is 46.88 ms — around there the delay starts reading as a flam rather than a groove, so nudge in milliseconds by ear instead of by grid.

The cost is the pattern you wanted. A drill 808 that slides into the downbeat is supposed to be on the downbeat, and there are beats where the right answer is to keep the collision and manage it with everything above. [How to make drill 808s](https://gazillionindustries.com/how-to-make-drill-808s/) takes that lane further.

## Where each move sits in the chain

Order changes the result, so fix it once and stop rearranging. On the 808 channel: tune, then trim the start and shape the envelope, then duck, then saturate, then set the level. On the kick: trim, high-pass, shape, level. Then both into one low bus, and judge everything from there.

The one ordering decision worth thinking about is the saturator against the ducker. Put the saturator *after* the ducker and the gain reduction changes how hard the 808 drives it, so the harmonics duck and return along with the level and the tone moves with every kick. Put the saturator *before* the ducker and the harmonic content stays constant while only the level moves. The second is more predictable and the first is more alive; pick deliberately rather than by accident.

Put the pair on one bus because the sum is the thing that collides. A clipper or a limiter on that low bus sees the coincident peak, which is exactly the peak worth rounding, and it leaves the rest of the mix out of it. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) explains the order on the way out, and [how to master a beat](https://gazillionindustries.com/how-to-master-a-beat/) covers what reaches the master.

**SOFT CLIP as the out stage.** The peak where the kick and the 808 coincide is the one that needs rounding.

## Sidechain routing, DAW by DAW

Every DAW does this, and they split into two camps. In one camp the compressor picks a track by name and you are finished in two clicks. In the other you have to build a path first, either a send or a pair of extra channels, and the compressor listens to that. Knowing which camp you are in saves the ten minutes everybody loses the first time.

- **Ableton Live**: Compressor, open the Sidechain panel, choose the kick track directly

- **Logic Pro**: Compressor, Side Chain menu at the top right, choose the kick track or a bus

- **Bitwig Studio**: Compressor, pick the sidechain source in the device itself

- **FL Studio**: route the kick's mixer track to the 808's as a sidechain send first, then set that input in Fruity Limiter's COMP mode

- **Studio One**: switch the Compressor's sidechain on, then send the kick to it

- **Cubase**: activate side-chain on the Compressor, then create a send from the kick

- **Reaper**: send the kick into channels 3/4 of the 808 track, then point ReaComp's detector at those channels

- **Pro Tools**: bus the kick, then select that bus as the key input on the compressor

Two details that catch people regardless of DAW. The sidechain send should be pre-fader, or muting the kick in the arrangement stops the ducking as well as the sound. And if the plugin offers a sidechain filter, high-pass the detector around 100 Hz so the compressor is triggered by the kick's attack rather than by its sub, which makes the duck start earlier and end cleaner.

## Balance on more than one speaker

Headphones exaggerate the sub; phones barely play it. Set the balance on monitors or good headphones, then check on a phone and a laptop. If the 808 vanishes there, it needs harmonics, not more level. That part is in [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/), and distorting it on purpose is in [how to distort an 808](https://gazillionindustries.com/how-to-distort-808s/).

The reason harmonics work is a ladder you can write out. An 808 on E1 has its fundamental at 41.20 Hz and harmonics at 82.4, 123.6, 164.8, 206.0 and 247.2 Hz. A handset plays none of the first number and all of the rest, and the ear reconstructs the pitch from the spacing of what survives. Saturation is how you put the upper rungs there; level only makes the bottom rung, which the handset was never going to move air with anyway. [Making bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) is the long version.

Check the balance at more than one volume as well as on more than one speaker. The ear's sensitivity to low frequencies falls off faster than its sensitivity to the midrange as the level drops, so a kick-and-808 balance set loud is bass-heavy played quiet, and one set quiet is thin played loud. [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/) is the curve behind that. Set the balance once at a comfortable level, then confirm at background level and at something closer to a car.

## Five checks, ten minutes

- Loop the bar where the kick and the 808 coincide. Put a peak meter on the low bus, mute the 808, note the reading; unmute it and note the reading again.

- Flip the polarity of the 808 and repeat the two readings. Keep the setting that reads higher, provided it also sounds fuller.

- Sum the master to mono. If the low end shrinks, something below 100 Hz is wide.

- Turn the monitors down until the beat is at conversation level. The kick should still be a kick; if it disappears it is leaning entirely on sub.

- Bounce the loop, play it on a phone with the speaker pointed away from you, then play the same file in a car.

Anything that survives all five is finished. The reason the meter is in there twice is that the phase faults are the ones that sound like nothing — there is no distortion, no pumping, just a pair of sounds quietly refusing to add up.

## What it costs

Every fix above takes something. Ducking the 808 also ducks whatever the 808 was holding up, so a sparse beat can end up with a hole where the bass used to be continuous. High-passing the kick costs weight on a big system, and you will not hear what you gave away until the record is on one. Tuning a kick to the song changes its character, sometimes into a different drum. Saturating the 808 to make it read on a phone adds midrange that a vocal may want back.

The money side is small. Every DAW in the list above already ships the compressor that does the sidechain, so that half costs nothing. BEEFY is $19 for Mac and Windows if you want the harmonic half handled in one panel, and DRUGS, our one-knob drum bus compressor, is free on both.

## Questions people ask

### Can you use an 808 as a kick?

Yes. An 808 with a sharp attack, or with a short click layered on top, can work as both the kick and the bass, which avoids the two clashing in the low end.

### Should you sidechain the 808 to the kick?

Often, yes. Ducking the 808 a few dB whenever the kick hits lets the kick punch through without fighting the 808's low end. Keep the release short so the 808 recovers quickly and doesn't pump.

### Should the kick or the 808 be louder?

It depends on the style and on which one carries the sub. In most trap, the 808 carries more low-end energy and the kick cuts through with its click. Balance by ear on several speakers rather than by meter.

### How should I mix 808s?

Tune them to the song, give them room from the kick, keep the sub in mono, add harmonics with saturation or soft clipping so they're heard on small speakers, and compare against references at matched loudness.

### How many dB should I duck the 808?

Three to six dB is the usual working range, and eight to ten is where it starts being audible as pumping. It costs less than people fear: at 140 BPM with quarter-note kicks, a 3 dB duck lasting 100 ms takes 0.54 dB off the 808's average level over the bar, and a 6 dB duck takes 0.83 dB.

### What release time should I use for sidechaining an 808?

About a third of the gap between kicks. Divide 60,000 by the tempo for the quarter-note gap in milliseconds, then take a third of it: 143 ms at 140 BPM, 154 ms at 130 BPM, 235 ms at 85 BPM. Halve those if the kicks land on eighths.

### Why does my 808 disappear when the kick hits?

Either the duck is too deep, or the two are canceling. Bypass the sidechain compressor: if the 808 still thins out on the kick, it is phase, and the polarity flip is the first thing to try. At 50 Hz a 10 ms offset between them is a full 180 degrees, which is total cancellation where they overlap.

### Should I high-pass the kick?

When the 808 owns the sub, yes, at 60 to 80 Hz and steeply. A 24 dB/octave high-pass at 70 Hz is 24 dB down at 35 Hz, an amplitude ratio of about 1 to 15.8, so the kick stops contributing down there. At 12 dB/octave it is only about 1 to 4 and the two keep arguing.

### Should the 808 be mono or stereo?

Mono below 100 Hz at the very least. A 50 Hz wave is 6.86 m long and a head is 0.18 m across, so there is only 9.5 degrees of phase difference between your ears to build an image from. Keep any width in the harmonics above 100 Hz, where 18.9 degrees is available.

### Why does my 808 sound different on every note?

Because the phase relationship with the kick changes with pitch. A fixed offset of one millisecond is 14.4 degrees at 40 Hz, 18.0 degrees at 50 Hz and 21.6 degrees at 60 Hz. Align to the loudest, longest note in the pattern and accept that the passing notes will be slightly off.

### Should I saturate the 808 before or after the sidechain?

Before, if you want the harmonics to stay put while the level moves. After, if you want the tone to move with the kick, since the gain reduction changes how hard the 808 drives the saturator. Both work. Choose one on purpose.

### Why do my kick and 808 sound muddy together?

Usually an untuned kick body beating against the 808, or too much shared content between 100 and 300 Hz. Read both fundamentals off an analyzer: 55 Hz against 58 Hz gives three swells a second and reads as mud rather than as tuning. [Why is my mix muddy](https://gazillionindustries.com/why-is-my-mix-muddy/).

### Do I need to sidechain if the kick and 808 never play together?

No. If the two never overlap there is nothing to duck, and adding a compressor only gives you an envelope to get wrong later. Check the tails though — an 808 whose release runs 300 ms into the next kick is overlapping whether the grid says so or not.

### Should the kick and 808 go on the same bus?

Yes, and judge them there. The sum is what collides, what eats headroom and what reaches the master, so any clipping, limiting or saturation applied to the pair should see the sum rather than the two parts. [How to mix drums](https://gazillionindustries.com/how-to-mix-drums/) covers the wider routing.

### What peak level should the kick and 808 hit?

Leave room for the collision rather than aiming at a target. Two equal hits in phase sum to +6.02 dB, so parts peaking at −12 dBFS each give you a worst case of −5.98 dBFS, and three coincident sources sum to +9.54 dB. [Gain staging](https://gazillionindustries.com/gain-staging/) and [true peak](https://gazillionindustries.com/true-peak/).

## Stock plugins that do this

- **FL Studio**: Fruity Limiter in compressor mode, sidechained to the kick

- **Ableton Live**: Compressor with Sidechain enabled

- **Logic Pro**: Compressor with a side chain input

- **Reaper**: ReaComp with its detector on channels 3/4

- **Studio One**: Compressor with the sidechain switched on

- **Cubase**: Compressor with side-chain activated

- **Bitwig Studio**: Compressor with a sidechain source picked in the device

## What BEEFY does

BEEFY is our saturation and loudness plugin. On the 808, **SOFT CLIP**, which opens switched on, adds harmonics above the low end so there's more to hear than just sub, which helps it read without more low-end level. On the kick, **BEEF** gives it more chest, or a pleasantly chewed-up edge. **COOK** moves the tone from rounder toward brighter and **JUICE** sets the level going in.

The job it is doing here is the harmonic ladder. An 808 on E1 puts its fundamental at 41.20 Hz, which a phone will never reproduce; the rungs at 82.4, 123.6, 164.8 and 206.0 Hz are what the handset plays and what the ear turns back into a pitch. Adding those rungs lets you leave the sub level where the big speakers liked it instead of pushing it up until the master limiter starts complaining.

The two output switches decide how the coincident peak is handled. **SOFT CLIP** rounds the top of it and colors it slightly; **LIMIT** holds a ceiling over it instead. A kick meeting an 808 makes a peak that is short and loud, which is the case a clipper handles with the least audible effort. Put it on the bus that carries both, A/B against bypass at matched level, and let **JUICE** return whatever the peak reduction took. [Soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/) has the mechanism.

BEEFY runs on Mac and Windows as AU, VST3 and standalone, $19. There is a 28-second demo with three without/with comparisons on the page.

Same two roommates, same bathroom. They just made a schedule.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
