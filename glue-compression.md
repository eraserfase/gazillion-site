# Glue compression

> Glue compression explained: what a bus compressor does to a group, the ratio, attack and release to start with, and how much gain reduction is too much.

Source: https://gazillionindustries.com/glue-compression/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Eight drum tracks, all balanced, all in time, and the kit still sounds like eight files instead of one performance. Everything is correct. Nothing is agreeing with anything.

Glue compression is gentle compression across a group of tracks, so one gain cell moves for all of them and the parts rise and fall together. On a drum bus that means a slow attack around 10 to 30 ms, a release timed to the tempo or set to auto, a low ratio of 1.5:1 to 2:1, and only 1 to 3 dB of gain reduction on the loudest hits. The shared movement is the effect. The gain reduction is just how you get at it.

## The short version

- **Ratio**: 1.5:1 to 2:1

- **Attack**: slow, 10–30 ms, so hits keep their front edge

- **Release**: auto, or timed so gain is back before the next beat

- **Amount**: 1–3 dB on peaks, and never all the time

- **Where**: drum bus, instrument groups, mix bus

- **Test**: level-matched bypass, listening to the quiet parts

**DOSE 88.** Same source. The line dives on each hit and takes the whole bar to come back — that recovery is the pump.

## What glue actually is

Put a compressor across a group and every element now controls the gain of every other element. When the kick lands, the hats duck fractionally and come back. When the snare rings, the ring lifts the whole bus a hair as the gain recovers. Those movements are small, shared and rhythmic, and the ear reads them as one source in one space rather than several files in a spreadsheet.

The part that gets missed is that the compressor sees a sum, not a kit. Its detector is looking at one signal, and the loudest thing in any given millisecond decides the gain for everything else in that millisecond. A kick peaking 6 dB above the snare does not get 6 dB more reduction than the snare does. It gets the reduction, and the snare gets whatever the kick left behind. Every useful thing about glue and every ugly thing about it comes out of that one fact.

The same mechanism explains why heavy bus compression goes wrong so fast. A little shared movement sounds like a band. A lot of it sounds like the kick is operating a light switch.

## The arithmetic behind one to three decibels

A compression ratio is a division, and doing the division once teaches you more than an hour of turning the knob. Take a threshold of −18 dBFS and a drum bus peaking at −12 dBFS. The peak is 6 dB over. At 2:1 the output peak lands at −18 + (6 ÷ 2) = −15 dBFS, which is 3 dB of gain reduction.

Change the one number and watch it move. At 1.5:1 the same 6 dB over gives −18 + 4 = −14 dBFS, so 2 dB of reduction. At 4:1 it gives −18 + 1.5 = −16.5 dBFS, so 4.5 dB — half again as much movement from the same threshold and the same source.

- **6 dB over at 1.5:1**: 2.0 dB of gain reduction

- **6 dB over at 2:1**: 3.0 dB

- **6 dB over at 3:1**: 4.0 dB

- **6 dB over at 4:1**: 4.5 dB

- **6 dB over at 10:1**: 5.4 dB

Two things fall out of that column. Past about 4:1 the curve flattens and ratio stops buying you movement: 4:1 all the way to 10:1 adds 0.9 dB. And the threshold is the coarse control. Drop it 6 dB, to −24 dBFS, and the same −12 dBFS peak is now 12 dB over, which at 2:1 is 6 dB of reduction. One move, double the movement.

## How to set a glue compressor

- Put the compressor on the group bus, after the individual tracks are balanced.

- Set the ratio to 2:1 and the attack to about 30 ms.

- Lower the threshold until the meter shows 1 to 3 dB of gain reduction on the loudest hits.

- Set the release so the needle returns to zero between beats, or use auto release.

- High-pass the detector at 80 to 120 Hz if the compressor offers one, so the kick stops setting the gain for the hats.

- Shorten the attack only if the group feels detached from the beat.

- Match the make-up gain to bypass, and check the quiet bars rather than the drops.

- Leave it running while you balance the rest of the mix, instead of adding it at the end.

At 90 bpm a quarter note is about 667 ms and an eighth is 333 ms, so a release of 200 to 300 ms on a drum bus is usually back in time for the next hit. Longer than the beat and the gain never recovers, which is the flat, permanently squashed sound people blame on the compressor rather than on the setting.

## Attack, and what the first ten milliseconds cost

An attack setting is a time constant rather than a countdown. The gain cell does not sit still for 30 ms and then slam shut. It starts moving the moment the signal crosses over and approaches the target reduction along a curve, and most compressors use close to the same curve.

- **A third of the attack time**: 28 percent of the reduction applied

- **Half**: 39 percent

- **One full attack time**: 63 percent

- **Twice**: 86 percent

- **Three times**: 95 percent

Put a snare through it. Attack 30 ms, target reduction 3 dB. Ten milliseconds into the hit, ten being a third of thirty, the cell has applied 28 percent of 3 dB, which is 0.85 dB. The crack goes out almost untouched, and that is the whole point of a slow attack. Now set the attack to 3 ms. Ten milliseconds is more than three time constants, so over 95 percent of the reduction is already in — 2.9 dB gone before the body of the snare has arrived.

Some compressors ramp in a straight line instead, and some change shape with input level, but the numbers still predict what you hear. To see what a slow attack is protecting, zoom into a snare hit in your editor: the crack is over in a handful of milliseconds and the body runs on for another 50 to 200. That is the mechanical reason the 10 to 30 ms window keeps coming up, and why anything under 5 ms sounds like the kit moved several feet further away. [What is a transient](https://gazillionindustries.com/what-is-a-transient/) has the longer version.

**DOSE 12.** The other end of the same knob. The line dips on the loud hits and sits flat everywhere else — that shape is what glue settings look like on a meter.

[DRUGS](https://gazillionindustries.com/drugs.html) is a free one-knob bus compressor for drums, built for this job: DOSE makes the bus denser rather than louder, and the release reacts to what is in front of it instead of asking you for a number.

## The detector, and why the kick sets the gain

Low frequency carries the most energy, so on a full-range bus the kick usually owns the detector. Say the kick peaks at −8 dBFS with its fundamental near 50 Hz and the snare peaks at −12 dBFS. The kick is 4 dB hotter, so every gain movement on that bus is a kick movement and the snare is a passenger.

A high-pass in the detector path changes who is driving, and the arithmetic is octaves. Fifty hertz is one octave below 100 Hz, so a 12 dB per octave high-pass at 100 Hz in the sidechain lands the kick's fundamental on the detector around 12 dB down, at an effective −20 dBFS, while the snare's body up at 200 Hz passes untouched. The snare is now 8 dB hotter than the kick and the compressor starts answering to the backbeat. At 6 dB per octave the same filter takes only 6 dB off, which leaves the snare 2 dB ahead: enough to change the feel, not enough to change who is in charge.

With no detector filter at all, an external trigger gets you there the long way round — [sidechain compression](https://gazillionindustries.com/sidechain-compression/) has the routing. The cost either way is that the compressor stops reacting to the kick, so bus peak level goes up. Check the peak meter, not just the sound.

## Glue on the mix bus

Same idea, less of it. On a full mix, 1 to 2 dB of gain reduction with a slow attack and an auto release is plenty, and it works best if it was there while you were balancing, not bolted on at the end. A compressor added after the mix is finished changes every decision you already made, and you will spend the evening re-balancing to match it.

The practical version: set the mix bus compressor early, at 1 to 2 dB, then leave it alone, and change anything else on the groups underneath. A mix bus that keeps moving during the mix is a moving target for every fader decision below it.

Loudness belongs further down the chain. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) covers the part where you are actually chasing level.

## Where glue sits in the chain

Anything that alters level ahead of the compressor alters what the detector sees. A 3 dB low shelf boost in front of a glue compressor is, to the detector, a 3 dB drop in threshold for everything that shelf touches. Move the same EQ after it and the setting stays where you put it.

Clippers and limiters belong after, every time: a clipper in front removes the peaks the compressor was there to catch, so the meter goes quiet and the bus flattens for a reason you never chose. Transient shapers cut both ways. Ahead of the compressor, the attack you just added is the first thing it takes back off. After it, the attack survives and pokes through whatever ceiling sits at the end. [Drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) walks the full sequence.

## Where it costs you

Glue trades separation for cohesion. The kick pushing the bus down is the effect working, and it is also a hi-hat losing a little of its place. On sparse material the movement can turn into audible breathing between hits, especially with a release near the beat length. And a bus compressor with make-up gain is louder, so a quick bypass always flatters it. Match the levels and listen to the bars where nothing much happens: that is where pumping shows up first.

There is a machine cost too. Lookahead and oversampling both add latency, and delay compensation handles that on playback but not in your headphones while you are playing a part in. If you track through the bus, switch both off until the parts are recorded.

## Four failure modes, and what each one sounds like

Bus compression goes wrong in a small number of recognizable ways. Each has a sound, and each has a control attached to it.

**Pumping.** The bus swells in the gaps, loudest on the hats and the room tone. Gain is still recovering when the next transient arrives, so the release is near or longer than the beat. Shorten it toward the sixteenth-note figure for your tempo.

**Low-frequency grit.** The kick grows a buzz that was not in the source and the gain meter twitches too fast to read. A 50 Hz fundamental has a period of 1 ÷ 50 = 20 ms, so a release under 20 ms lets the detector track individual cycles and the gain cell becomes an amplitude modulator running at 50 Hz. Keep the release above roughly 30 ms on anything with sub content. That floor and the tempo ceiling only meet at 500 bpm, where the sixteenth is 30 ms.

**Flat transients.** The kit sounds correct and further away, and you catch yourself adding top end that was never missing. The attack is too fast. Back toward 30 ms and the distance closes without an EQ move.

**Lopsided reduction.** Hats duck on beats they were never played on and one ghost note lifts the whole bar. A single element owns the detector. High-pass it, or pull that element out of the group and fold it back in after the compressor.

## Glue on a drum bus is not glue on a mix bus

The same technique at the same settings does two different jobs depending on where it sits, and treating them as one thing is why mix-bus compression so often makes a mix worse.

On a drum bus, everything arriving is part of one instrument. The compressor is making a kit out of separate hits, and it can work reasonably hard because the interaction between the kick and the snare is the point. Several decibels of movement is normal and sounds like a room.

On a mix bus, the sources are unrelated. The kick is now modulating the vocal, the bass is modulating the guitars, and every one of those relationships is audible whether or not you wanted it. That is why mix-bus settings are so much gentler: a decibel or two, and the job is cohesion rather than character.

If a mix bus compressor is doing four or five decibels and the mix sounds like it is moving, the fix is usually to do that work on the groups instead and leave the two bus nearly alone.

## What glue is not

Three things get blamed on missing glue that a compressor cannot supply.

**It is not a balance fix.** If a part is too loud, it is too loud in a glued mix too. The compressor changes how things move together, not how they sit.

**It is not a depth fix.** Things sound pasted on because of reverb, arrangement and frequency masking. Compression across the sum can actually make that worse by pulling everything to a similar level.

**It is not loudness.** Glue settings by definition barely reduce gain, so they contribute almost nothing to how loud a master can get. If loudness is the goal, that is a limiter or a clipper and it is a different stage with a different job.

## How to check it in your own session

Ears lose this argument to make-up gain every time, and they lose it in the first second. Five minutes of file work settles it.

- Bounce eight bars twice: once with the compressor active, once bypassed.

- Measure integrated loudness on both and trim the compressed one until the two agree within 0.1 dB.

- Compare the trimmed files on the quiet bars, not on the drop.

- Invert one against the other and play what is left. That difference signal is the gain movement on its own.

- Play the compressed bounce through a phone speaker and listen for hats swelling between hits.

- Watch the gain reduction meter through the quietest bar. Anything above zero there means the threshold is too low.

Step four is worth doing twice, because the difference signal has a rhythm of its own. If that rhythm is the kick pattern, the kick is running the mix and the detector needs a high-pass. If it is a steady wash with no accents, the release is too long. [Crest factor](https://gazillionindustries.com/crest-factor/) before and after puts a number on how much peak-to-average range the compressor took.

## What release time should a compressor use at my tempo?

Release is a tempo question before it is a taste question. Set it so the gain reduction has recovered before the next hit lands, and the useful ceiling is the sixteenth note at your tempo. Past that the compressor is still pulling down when the next transient arrives, which is what flattens a groove. The arithmetic is one division: 60000 divided by the tempo gives the quarter note in milliseconds, and you halve it from there.

- **70 bpm**: quarter 857 ms · eighth 429 ms · sixteenth 214 ms

- **80 bpm**: quarter 750 ms · eighth 375 ms · sixteenth 188 ms

- **90 bpm**: quarter 667 ms · eighth 333 ms · sixteenth 167 ms

- **100 bpm**: quarter 600 ms · eighth 300 ms · sixteenth 150 ms

- **120 bpm**: quarter 500 ms · eighth 250 ms · sixteenth 125 ms

- **140 bpm**: quarter 429 ms · eighth 214 ms · sixteenth 107 ms

- **170 bpm**: quarter 353 ms · eighth 176 ms · sixteenth 88 ms

Start at the eighth-note figure for a drum bus and move toward the sixteenth if the compressor is still breathing on the next hit. Slower than the quarter note and it stops tracking the bar at all.

## Glue compression in your DAW

The controls are the same everywhere. The labels and the ranges are not.

**Ableton Live.** The Glue Compressor puts attack in milliseconds and release in seconds, which catches people out the moment they read a tempo table: 0.2 on the release dial is 200 ms. There is no knee control, because the knee sharpens as the ratio rises, so a low ratio is already a soft knee. Auto release runs two times at once, a slow base and a fast one that reacts to transients, which is why it copes with mixed material better than any single number. The Range slider caps how much compression can happen at all, and Soft clip fixes maximum output at −0.5 dB while adding distortion of its own — the manual suggests leaving it off unless that distortion is what you came for. Longer walkthrough at [drum bus compression in Ableton Live](https://gazillionindustries.com/drum-bus-compression-in-ableton-live/).

**FL Studio.** Fruity Compressor runs threshold from 0.0 to −60.0 dB, ratio from 0.4:1 to 30:1, attack from 0.0 to 400.0 ms and release from 1 to 4000 ms, with the knee on a Type selector rather than a dial: Hard, Medium, Vintage and Soft, each with an /R variant. Glue wants Soft or Medium and a ratio at the bottom of that enormous range. Image-Line now lists it as a legacy plugin and points at the compressor section inside Fruity Limiter instead.

**Everywhere else.** Find three things before you touch a dial: whether the release has an auto setting, whether the detector has a high-pass, and whether the gain reduction meter reads peak or average.

## Questions people ask

### What is the difference between compression and glue compression?

Compression is the process; glue is one use of it. A compressor on a single track controls that track. The same compressor across a group makes the whole group share one gain movement, and that shared movement is what people hear as glue.

### Is glue compression the same as bus compression?

Near enough. Bus compression names where the compressor sits; glue names what you ask it to do there. A bus compressor pulling 6 dB with a 1 ms attack is still bus compression, and nobody would call that glue.

### Can any compressor be a glue compressor?

Most can, with a low ratio, a slow attack and small gain reduction. What varies is how forgiving the release and the knee are when several sources hit at once, which is why some compressors take group duty better than others at the same numbers.

### What type of compressor is best for glue?

One with a gentle knee, a low ratio available, and a release that suits the tempo, including an auto setting. On a drum bus, the timing controls decide the result far more than the circuit does.

### How much gain reduction should a glue compressor do?

One to three decibels on the loudest moments, and nothing at all in the quiet bars. If the meter never comes back to zero, the release is too long or the threshold is too low.

### Should I glue the drum bus or the mix bus?

They are different jobs. A drum bus can work hard because the kit is one instrument and the interaction is the point. A mix bus should barely move, because there every unrelated source is modulating every other one and you can hear it.

### Where does glue compression go in the chain?

After the individual tracks are processed and balanced, and before any clipper or limiter. Anything that changes level ahead of it changes what its detector sees, and anything that strips peaks ahead of it removes the thing it was put there to catch.

### Why does my mix sound worse with a bus compressor on it?

Usually because it went on last, so every balance decision underneath was made without it and the compressor moves all of them at once. The other common cause is too much: past two or three decibels on a full mix, unrelated sources start modulating each other audibly.

### Does glue compression make a mix louder?

Barely. Two decibels off the peaks and nothing in the gaps moves the average very little, and the make-up gain only puts back what the gain cell took. Loudness comes from a clipper or a limiter further down.

### Should I use parallel compression instead?

They answer different complaints. Parallel keeps the dry peaks intact and adds a crushed copy underneath for density, so nothing in the group moves the rest of it. Glue works precisely because everything does move together. [Parallel compression](https://gazillionindustries.com/parallel-compression/) covers the blend.

### Can saturation do the same job as glue compression?

A related job by a different route. Saturation pulls the peaks down inside each hit and adds harmonics that tie sources together tonally, but it creates no shared gain movement, so the kick never moves the hats. Plenty of drum buses want both. [How to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/) has the settings.

### What is the best free glue compressor?

Ours is free, so take this as interested advice. DRUGS is a one-knob bus compressor for drums with an adaptive release and a soft ceiling on the output, on Mac and Windows. Every major DAW also ships a stock compressor that does the job once the attack and the release are right, and that one costs nothing either.

## What DRUGS does

DRUGS is our free bus compressor with one macro control. **DOSE** moves the transfer curve, the knee, the attack and the release together, so the density comes up without the peak level moving much across the range of the knob. The release is adaptive and has no user control: a hit gets the shorter time, so gain recovers inside the gap where pump is audible, and sustained material gets the longer one, so it holds still rather than breathing. Auto-makeup sits after the gain cell, so setting level cannot disturb the dynamics.

What that buys you on a group is the timing. A fixed release is one compromise made across a whole track; an adaptive one is a fresh compromise every few milliseconds. That is why DOSE can sit in the same position through a sparse verse and a busy drop without being touched.

Eight files, one gain cell, and a kit that finally sounds like it was in the room together.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
