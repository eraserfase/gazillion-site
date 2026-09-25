# How to use saturation in a mix

> What saturation is for and how to use it in a mix: on bass, drums, vocals, synths, buses and the master, how much to use, and where it goes in the chain.

Source: https://gazillionindustries.com/how-to-use-saturation/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Every plugin folder has a saturator, and most of them get used the way people use hot sauce at a diner: on everything, before tasting anything, and then again.

Use saturation to solve a specific problem: a sound that's too thin, too polite, or disappears on small speakers. Put it on the tracks that need weight or presence (bass, drums, vocals, a thin synth), start with just enough drive that you hear it, then back off. Compare at matched loudness, because saturation adds level and louder always sounds better at first.

## The short version

- **Why**: weight, presence, density, small-speaker translation

- **Bass**: harmonics so it's heard on phones

- **Drums**: density, body, glue

- **Vocals**: presence and edge; subtle

- **Buses**: a little ties parts together

- **Master**: barely, if at all

- **Check**: matched loudness, every time

**BEEF at 8.** Barely doing anything — useful as the reference you A/B against.

**BEEF at 96.** Where the plug-in stops being polite. Most settings that sound right in solo are about half this.

## What saturation is for

Saturation adds harmonics and softens peaks. That gives you three useful results. A sound gets denser, because its body comes up toward its peaks. It gets more present, because harmonics land in the range ears are most sensitive to. And it translates, because a phone speaker that can't play a low note can still play the harmonics above it. If you can't name which of the three you're after, you don't need the plugin yet.

## How much drive is enough

The setting that sounds right is smaller than the setting that sounds impressive, and the gap is measurable. Here is a mix bus measured for this page: two seconds of bass, kick, snare, hats and a pad, peak normalized to exactly −3.00 dBFS, reading −19.72 dBFS RMS. Crest factor 16.72 dB.

Every row below is that same bus through a plain symmetric soft curve and re-normalized to the same −3.00 dBFS peak, so the only thing that changed between rows is density.

- **1 dB drive**: RMS −18.40 dBFS, crest 15.40 dB — 1.32 dB louder at the same peak

- **2 dB drive**: RMS −18.12 dBFS, crest 15.12 dB — 1.60 dB louder

- **3 dB drive**: RMS −17.78 dBFS, crest 14.78 dB — 1.94 dB louder

- **6 dB drive**: RMS −16.43 dBFS, crest 13.43 dB — 3.29 dB louder

Read the first and last rows together. One decibel of drive bought 1.32 dB of level. The next five decibels bought 1.97 dB between them. Saturation is front-loaded, and past the first couple of decibels you are buying tone rather than loudness. Note also that 16.72 minus 13.43 is 3.29, the same figure as the level gained: the loudness is exactly the [crest factor](https://gazillionindustries.com/crest-factor/) you handed over.

Harmonic content moves the opposite way, and faster. On the same curve, a full-scale 1 kHz sine measures 6.71% THD with no drive added at all, then 8.05% at 1 dB, 9.57% at 2, 11.28% at 3 and 17.30% at 6. Divide the level gained by the distortion it cost and the first decibel returns 1.32 dB for 1.34 points of THD, which is 0.99 dB per point. The five decibels after it return 1.97 dB for 9.25 points, or 0.21 dB per point. The first decibel of drive is nearly five times the bargain the next five are, and that ratio is the entire argument for using less than you want to.

## Match the level before you judge it

You cannot hear saturation honestly until the two versions are the same loudness, and the tolerance is tighter than people assume. A 1 dB difference is a 12.20% change in amplitude, which is plenty to decide an A/B on its own. Match to 0.1 dB, which is 1.16%, and you are actually comparing tone.

The trim figures from the table above are the whole procedure. Drive 3 dB into that bus and you owe the output stage 1.94 dB back before you are allowed an opinion. Most saturators give you an output or trim control for exactly this; if yours doesn't, put a gain utility straight after it.

- Set the drive where you think you want it.

- Bounce four bars with the saturator bypassed, and four with it active.

- Measure both files, RMS or short-term LUFS, and subtract.

- Put that difference into the output trim as a negative number.

- Re-bounce, confirm the two now read within 0.1 dB, then listen.

Do this once per session and you will start turning the drive down. It is the single change that separates people who use saturation from people who apply it. More on levels through the chain in [gain staging](https://gazillionindustries.com/gain-staging/).

## Bass and 808s

This is where saturation earns its keep. A clean sub is nearly invisible on small speakers, and a little drive gives it harmonics a laptop can play. Keep the lowest octave clean by saturating a high-passed copy if the sub starts to smear. The long version is in [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/).

Do the arithmetic once and the reason is obvious. An 808 tuned to E1 has its fundamental at 41.20 Hz, so the ladder above it runs 82.4, 123.6, 164.8, 206.0, 247.2, 288.4, 329.6, 370.8 and 412.0 Hz. Phone and laptop speakers give back very little below a couple of hundred hertz, and exactly where they roll off varies by model, so the fifth and sixth rungs of that ladder are the first thing most listeners hear of the note at all. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

Level matters as much as position. On a symmetric soft curve at 6 dB of drive, the 3rd harmonic sits 15.5 dB under the fundamental, the 5th 28.3 dB under and the 7th 40.9 dB under. On a full-range monitor those are a whisper beneath a very loud note. On a phone, where the fundamental is barely reproduced, the same whisper is the melody.

The split-band version is worth the two extra devices. Duplicate the bass, high-pass the copy around 120 Hz, saturate only the copy, and leave the original sub untouched. You get the harmonics for small speakers and a clean fundamental for the club, and the two never fight. [Parallel saturation](https://gazillionindustries.com/parallel-saturation/) covers the blend in detail.

## Two bass notes at once, and the tone that belongs to no key

Saturation on a single note produces harmonics. Saturation on two notes at once also produces sums and differences of those notes, and those land wherever the arithmetic puts them, in tune with nothing. This is intermodulation, and it is the reason saturated bass chords turn to porridge while saturated bass lines do not.

Measured on the same curve: A1 at 55.00 Hz and C2 at 65.41 Hz, equal level, 6 dB of drive. Two new tones show up, one below the pair and one above it. Twice the first note minus the second, 44.59 Hz, arrives 18.16 dB down. Twice the second minus the first, 75.82 Hz, arrives 17.87 dB down. That 44.59 Hz tone is 37 cents above F1 at 43.65 Hz, which is to say it is a third of a semitone out of tune with a note you did not play.

One detail from the same measurement is useful: the sum tone at 120.41 Hz and the difference tone at 10.41 Hz never appeared, both more than 120 dB down. A symmetric curve produces only odd-order products, so it cannot generate them. Asymmetric curves can, which is part of why asymmetric saturation on a bass chord muddies faster.

It sounds like a growl that moves when the chord moves and stays when it shouldn't. If you hear it, play the bass monophonically, or high-pass the saturated copy so only one note at a time has real energy going into the curve.

## Drums

Saturation brings each hit's body up toward its front edge and gives a kit something to sound like on any speaker. Kicks take less than snares; a whole bus takes less than either, because every hit drives everything else into the curve with it. Details in [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/).

The order of magnitude is worth carrying in your head, because a clean kit starts with more crest factor than anything else in the session: the stick is in contact for a few milliseconds and the rest of the bar is decay. The programmed bus measured for the chain-order test further down this page read −6.00 dBFS peak and −25.03 dBFS RMS, so 19.03 dB of crest. Six decibels of drive, trimmed back to the same peak, took it to 17.03 dB. Two decibels of separation, gone, in exchange for two decibels of body. That is a fair trade once and a bad habit four times.

Cymbals are what breaks first. Hats have energy where the added harmonics fold and pile up, so a bus setting that flatters the kick will usually make the hats spit. Either saturate the kick and snare on their own channels, or high-shelf the hats down a decibel before the bus curve and put them back after. See [what is a transient](https://gazillionindustries.com/what-is-a-transient/) and [transient shaper vs saturation](https://gazillionindustries.com/transient-shaper-vs-saturation/).

## Vocals

Gentle saturation brings a vocal forward without an EQ boost that turns harsh. It goes most often after EQ and compression, where it adds color to an already even signal, though before compression works too. Obvious distortion on a vocal is a different, louder decision.

The mechanism on a voice is not the one people describe. A male vocal with a fundamental around 110 Hz has its presence region, 2 to 5 kHz, built out of harmonics 19 through 45 of that fundamental. A soft curve at 6 dB of drive, fed a 110 Hz sine, puts its 3rd at 330 Hz and its 5th at 550 Hz, and by the 13th at 1430 Hz it is already 78.6 dB down. Nothing useful reaches 2 kHz from the fundamental. The presence you hear comes from the curve distorting the harmonics the voice already has up there, which is why saturation flatters a bright singer and does very little for a dull one.

Sibilance is the trap. An "s" with energy at 7 kHz has its 3rd harmonic at 21 kHz, which is above the 22.05 kHz Nyquist limit at a 44.1 kHz session rate, so it has nowhere legitimate to go. De-ess before the saturator, not after, and the problem disappears rather than getting distorted. More at [how to mix vocals](https://gazillionindustries.com/how-to-mix-vocals/) and [distortion on vocals](https://gazillionindustries.com/distortion-on-vocals/).

## Synths, keys, samples

A thin synth or a tiny sample often just needs harmonics to take up space. Drive until it stops sounding like it's coming through a wall, and watch the top end: bright sources get fizzy fast, so a darker setting or a gentle low-pass after the saturator keeps it musical.

Here is why the top end is the part that breaks. Take a source with its fundamental at 440 Hz through the same curve at 6 dB of drive: the 3rd lands at 1320 Hz 15.5 dB down, the 5th at 2200 Hz 28.3 dB down, the 7th at 3080 Hz 40.9 dB down and the 9th at 3960 Hz 53.5 dB down. Four new components inside the presence band from one note. Run the same curve on a 110 Hz part and its first four new components all land below 1 kHz. Same plugin, same setting, completely different job.

Above about 5 kHz the arithmetic stops being polite. An 8 kHz component in a 44.1 kHz session has its 3rd harmonic at 24 kHz, which cannot exist, so it folds back to 20,100 Hz. The 5th would be 40 kHz and folds to 4,100 Hz, arriving 28.34 dB under the fundamental. That 4.1 kHz tone is in no harmonic relationship with anything in the track, and it is the metallic ring people mean by fizz. Working at a higher session rate moves the fold-back point up; so does [oversampling](https://gazillionindustries.com/oversampling/) inside the plugin, a general technique for running the curve at a higher rate so the fold-back point sits above anything you can hear. The plain fix at your end is to low-pass the source before the curve. See [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/).

## Buses and the master

On a bus, a small amount ties parts together, since everything on the bus drives the curve together. On the master, go very light or skip it. Every harmonic you add there lands on the whole mix at once, and problems are easier to fix a track at a time.

The case against saturating everything is arithmetic, not taste. Harmonic energy sums like any other energy, so six tracks each contributing the same amount of new harmonic content put 10 log₁₀(6), or 7.78 dB, more of it into the mix than one track does. Twelve tracks make it 10.79 dB. None of that lands where the fundamentals are; it lands stacked in the two-to-six kilohertz region, which is where the ear is already most sensitive and where [a mix goes harsh](https://gazillionindustries.com/why-is-my-mix-harsh/).

The second cost is separation. Saturation works by reducing crest factor, so saturating every channel reduces every channel's crest factor, and a mix where nothing has a transient advantage is a mix where nothing steps forward. Pick three or four elements. Let the others stay pointy.

On a master, 1 dB of drive on that test bus bought 1.32 dB of level at 8.05% THD applied to everything simultaneously. That is a real trade and sometimes worth it, but do it knowingly, and do it before the limiter rather than instead of one. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) and [how to master a beat](https://gazillionindustries.com/how-to-master-a-beat/) cover the end of the chain.

[BEEFY](https://gazillionindustries.com/beefy.html) has no drum-only rule: bass, synths, samples, keys, guitar, vocals. The demo on the page is 28 seconds.

## Where it goes in the chain, measured

Chain order arguments usually get settled with adjectives. Here is the same question settled with a meter. The drum bus from earlier, −6.00 dBFS peak and −25.03 dBFS RMS, 19.03 dB of crest. Saturate it at 6 dB of drive and trim the output back to the identical −6.00 dBFS peak: RMS −23.03 dBFS, crest 17.03 dB.

Now feed both versions to the same compressor: 4:1, threshold −24 dBFS, 5 ms attack, 120 ms release.

- **Clean into the compressor**: 6.88 dB maximum gain reduction, 2.51 dB average

- **Saturated first, peak matched**: 8.30 dB maximum gain reduction, 3.59 dB average

At the same peak level the saturator made the compressor work harder, by 1.08 dB on average, because the average level rose while the peak stayed put. Anything that reduces crest factor pushes more of the signal over a fixed threshold. If you move a saturator in front of a compressor and leave the threshold alone, expect more gain reduction and set the threshold back up to compensate.

Put the saturator after the compressor instead and the job changes. The compressor has already evened the signal, so the curve sees a steadier level and colors consistently rather than only on the loud bits. You lose the trick of a transient poking through a fixed curve and gain predictability. Neither is correct, but they are not interchangeable and the meter says so.

The rest of the order is less contested. Subtractive EQ goes before, so you are not manufacturing harmonics of a resonance you were about to remove. Tone EQ goes after, so you are shaping what the curve produced. Reverb and delay go after, because saturating a tail distorts the room rather than the source, which is a specific effect and rarely the one you wanted.

## Stereo, mono and the sum

A saturator on a stereo track usually runs two independent curves, one per channel, and that changes what your mono sum contains. Measured on a wide pair peaking at −3.10 dBFS left and −4.80 dBFS right: saturating each channel and then summing to mono gave −6.45 dBFS RMS, while summing to mono first and then saturating gave −5.82 dBFS. Level match those two mono sums and the difference between them still sits only 23.64 dB down, which is a long way from identical.

What it sounds like: a wide, saturated pad that thins out or changes character on a phone, a club sub, or anything else that sums. The width itself is what gets distorted, because the side content drives each channel's curve differently. Check the sum before you commit, and if it collapses, saturate the mid and leave the sides clean. See [mono compatibility](https://gazillionindustries.com/mono-compatibility/) and [phase cancellation](https://gazillionindustries.com/phase-cancellation/).

## What each failure mode sounds like

Saturation fails in about six recognizable ways, and each one has a cause you can point at. Learn the sound and you can skip the diagnosis.

- **Fizz**: metallic ring on hats, air and sibilance; fold-back components landing between the notes. Low-pass before the curve, or raise the session rate.

- **Mud**: the 150 to 400 Hz region filling in; 2nd and 3rd harmonics of bass content. Saturate a high-passed copy instead.

- **Smear**: a sub that loses its pitch; intermodulation between simultaneous low notes. Go monophonic or split the band.

- **Flat drums**: the kit gets louder and stops hitting; crest factor spent. Back the drive off and check the meter.

- **Harshness**: the whole mix is tiring at low volume; harmonics stacked from too many saturated channels. Remove it from half of them.

- **Mono collapse**: a wide element shrinks on a phone; two independent curves on a stereo pair. Saturate the mid.

The one that catches everybody is the fourth. Louder and flatter arrives gradually, it feels like progress at every individual step, and it is only obvious an hour later when the drums have stopped doing anything. That is what the matched-level bypass is for.

## How to check it in your own session

Four tests, none of which take longer than a bounce. Do them in this order and you will not need a second opinion.

- Null test. Duplicate the track, bypass the saturator on one copy, invert its polarity, and play both. What you hear is exactly what the plugin added, alone.

- Matched-level bypass. Trim the output until active and bypassed read within 0.1 dB, then switch between them with the whole mix playing.

- Phone check. Bounce eight bars and play it on a phone speaker at arm's length. Bass harmonics and fizz both show up here before they show up on monitors.

- Mono check. Sum to mono and listen for anything that shrinks or changes character.

The null test is the one worth building into how you work. It answers "what is this actually doing" in about ten seconds, and it very often answers "nothing you would miss."

## How to set it

- Insert the saturator on the track you want to change.

- Turn the drive up until the effect is obvious.

- Back it off until you only just miss it when you bypass.

- Match the output level to bypass.

- Compare in context with the whole mix playing, then on a phone.

- Note the trim you needed, and treat anything past about 3 dB as a decision rather than a default.

- Count how many channels in the session already have one, and take it off the ones that cannot justify it.

- Come back after a break and A/B once more at matched level before you print.

## Per-DAW notes

The technique is identical everywhere; the level-matching is where hosts differ. In Ableton Live, drop a Utility after the saturator and use its Gain field, which types to two decimal places. In Logic Pro, the Gain plugin does the same job and the stock loudness meter gives you the number to type in. In FL Studio, Fruity Balance sits in the next mixer slot. In Pro Tools, Trim. In Reaper and Bitwig Studio, every device already carries its own wet/dry control, which makes parallel blending a single knob rather than a routing exercise.

Two host-level things are worth checking once. Delay compensation must be on before you try parallel saturation, or the blended copy arrives late and the low end cancels. And any saturator that reports latency will shift the track it is on, so if you are lining up a saturated copy against a clean one by ear, confirm the two null when the plugin is bypassed.

## Questions people ask

### Should you put saturation on everything?

No. On a few tracks it adds weight and presence; on every track the added harmonics stack up and the mix gets harsh and crowded. Put it where you can say what it's fixing.

### Should I compress or saturate first?

Both work. Saturation first raises the average level, so at the same peak the compressor crosses its threshold more often and does more gain reduction, not less — measured above, 3.59 dB average against 2.51 dB. Saturation after means the compressor's shape drives the saturator, so transients bite harder. Try both and keep the one you prefer.

### What is the purpose of saturation?

To add harmonics and soften peaks, which makes a sound denser, more present and easier to hear on small speakers, without the obvious sound of distortion.

### Where should saturation go in a vocal chain?

Usually after EQ and compression, so it colors an even signal, and before any reverb or delay. Putting it before compression also works if you want the compressor to tame the added bite.

### How much saturation is too much?

When bypassing it sounds worse rather than quieter, you are at the right amount. When the level trim you need to match bypass exceeds about 3 dB on a full bus, you have made a loudness decision rather than a tone one. Make it on purpose or turn it down.

### Does saturation make things louder?

Yes, and the amount is predictable. It lowers the peak more than the average, so you can turn the whole thing up by the difference. On the bus measured above that was 1.32 dB at one decibel of drive and 3.29 dB at six.

### Is saturation the same as clipping?

They are neighbors. Clipping flattens anything past a threshold and leaves everything below it alone; saturation bends the whole curve gradually, so quiet parts are affected too. See [what is clipping](https://gazillionindustries.com/what-is-clipping/) and [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

### Why does my saturation sound harsh?

Usually one of three things: too much drive on a bright source, fold-back components from content above about 5 kHz, or the same plugin on fifteen channels at once. Low-pass the source, work at a higher session rate, and remove it from most of those channels. [Why is my mix harsh](https://gazillionindustries.com/why-is-my-mix-harsh/) goes through the rest.

### Can saturation fix a muddy mix?

Rarely, and it more often causes one. Saturating bass-heavy material puts new energy at two and three times the fundamental, which is exactly the 150 to 400 Hz range that reads as mud. Clear the range first, then decide. See [why is my mix muddy](https://gazillionindustries.com/why-is-my-mix-muddy/).

### Should saturation go before or after EQ?

Cuts before, boosts after. A cut before the curve stops you generating harmonics of a problem you were about to delete; a boost after lets you shape what the curve produced instead of feeding it more of something.

### Do I still need saturation if I use a limiter?

They solve different halves of the same problem. Saturation reduces crest factor across the whole signal, so the limiter has less to catch and works more gently for the same output level. See [how to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) and [how to make a mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/).

### What's a good starting drive setting?

Enough to need about 1 to 2 dB of output trim to match bypass. On the bus measured for this page that was one to two decibels of drive. Individual channels take more than buses, and bass takes more than cymbals.

### Does saturation work on a stereo bus?

It works, but check the mono sum. Two independent curves on a wide pair change what survives summing; the measurement above put the difference only 23.64 dB under the signal. Saturate the mid if the sum collapses.

### What's the difference between saturation and distortion?

Degree and intent. Both add harmonics; saturation is the amount you use when you want the source to still sound like itself. [Saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/) has the full comparison, and [saturation explained](https://gazillionindustries.com/saturation-explained/) has the curve itself.

## Stock plugins that do this

- **FL Studio**: Fruity Blood Overdrive

- **Ableton Live**: Saturator

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

Any of those will teach you the technique. What you tend to buy later is a curve you like without auditioning six of them, and an output stage that makes the matched-level comparison a single control. More options in [best saturation plugins](https://gazillionindustries.com/best-saturation-plugins/) and [saturation plugins for Ableton Live](https://gazillionindustries.com/saturation-plugins-for-ableton-live/).

**SOFT CLIP** as the out stage, which is how a new instance opens.

**LIMIT** instead, everything else identical. The choice is which one catches the peak.

## What BEEFY does

BEEFY is our saturation and loudness plugin for making sounds thicker, punchier and more up front. **BEEF** is the main control: a little for weight and presence, more for an obviously saturated sound. **COOK** sets the color, **JUICE** sets the level going in, and **SOFT CLIP** opens switched on and handles the initial gain staging. Feed it a thin synth, a chopped sample, an electric piano, a guitar, or a vocal that could use some attitude.

A new instance opens at JUICE 0 dB, BEEF 30, COOK 30 and SOFT CLIP switched on, which is a deliberate starting point rather than a bypass: park it there, play the part, and move one control at a time. JUICE is where the level-matching from this page happens, so drive with BEEF and pay it back with JUICE until active and bypassed read the same. **LIMIT** is the alternative to SOFT CLIP as the output stage, and swapping between the two at identical settings is the fastest way to hear what an output stage is actually for.

It is $19, runs on Mac and Windows, and installs as AU, VST3 and a standalone application, so you can drive a loop into it without opening a session at all. The demo on the product page runs three without-and-with comparisons in 28 seconds, which is a faster answer than anything on this page.

Taste first. Then the hot sauce, on the one plate that needed it.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
