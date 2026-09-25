# What is a transient?

> What a transient is, why the ear identifies instruments by their attack, what every dynamics processor does to them, and how to hear what you are doing.

Source: https://gazillionindustries.com/what-is-a-transient/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The first few milliseconds of a sound carry almost no energy, last almost no time, and are the reason you can tell a snare from a hand clap with your eyes closed. Then people spend all day compressing them away.

A transient is the short burst of energy at the start of a sound, before it settles into its sustained part. On a drum it is the stick hitting the head; on a bass it is the finger or the pick; on a piano it is the hammer. Transients are brief and much louder than what follows, which makes them the part every dynamics processor reacts to first and the part most easily destroyed without anyone noticing what went missing.

## The short version

- **What**: the initial attack of a sound, typically a few milliseconds

- **Why it matters**: the ear identifies instruments largely by their attack

- **Level**: far above the body of the sound, briefly

- **What eats it**: fast compressor attacks, limiting, clipping

- **What shapes it**: transient designers, and slow compressor attacks

- **Trade**: keep it and the track is dynamic, lose it and the track is loud

**BEEF at 96.** Past where most settings want to live.

## Why the attack carries the identity

Take a recording of a piano note, cut off the first thirty milliseconds, and most listeners stop hearing a piano. The sustained part is a set of harmonics that many instruments share; the attack is where the physical event lives, and the ear uses it to work out what happened.

That is why a drum that has been heavily compressed can be measurably louder and feel weaker. The body is bigger and the event is gone, so it reads as a sound rather than as something being struck.

## How long a transient is, in samples

Put units on it, because at this timescale the units are the whole argument. One sample at 44.1 kHz lasts 1 / 44100 = 22.68 microseconds. At 48 kHz it is 20.83 µs, at 96 kHz 10.42 µs. So a five-millisecond attack is 220.5 samples at 44.1 kHz, 240 at 48 kHz, 480 at 96 kHz. Not a moment. A few hundred numbers, each of which you could draw by hand.

The edge inside that attack is faster still, and it has a hard ceiling. For a first-order system the 10-to-90 percent rise time multiplied by the −3 dB bandwidth comes to 0.349, so with 20 kHz at the top of the band the steepest edge anything can produce is 0.349 / 20000 = 17.45 µs. That is shorter than one sample at 44.1 kHz. The front of a hit is already as sharp as the bandwidth permits, which is worth knowing before you go shopping for something to sharpen it.

Run the same relation the other way and it explains the tone of an attack rather than its speed. A burst lasting T seconds has its first spectral null at 1 / T, so the shorter the event the wider it spreads. A 0.2 ms tick reaches out to about 5 kHz, a 1 ms one to 1 kHz, a 5 ms one only to 200 Hz. The click of stick on head is the widest-band thing in your record and the thud beneath it is comparatively narrow, which is why a high-pass filter can take the weight out of a kick and leave the beater completely audible.

And the reason none of this shows up on a grid: at 90 BPM a beat lasts 60 / 90 = 666.7 ms, so five milliseconds is 0.75 percent of one beat. You are arguing about less than one percent of the time between two kicks, and it is the one percent the listener uses to name the instrument.

- **44.1 kHz**: one sample = 22.68 µs — 5 ms is 220.5 samples

- **48 kHz**: one sample = 20.83 µs — 5 ms is 240 samples

- **96 kHz**: one sample = 10.42 µs — 5 ms is 480 samples

- **Fastest edge in a 20 kHz band**: 17.45 µs, under one sample at 44.1 kHz

- **0.2 ms burst**: energy out to roughly 5 kHz

- **5 ms burst**: energy out to roughly 200 Hz

- **5 ms at 90 BPM**: 0.75 percent of a single beat

## Why your peak meter and your loudness meter disagree about it

Two meters watch the same hit and tell you two different stories. The gap between them is the reason anybody argues about transients at all. A peak meter reports the tallest sample. A loudness meter averages over a window, and EBU Tech 3341 sets momentary loudness to a sliding window of 0.4 seconds and short-term loudness to 3 seconds.

Do the arithmetic on one hit. Take a body sitting at a steady level and put a 5 ms spike 12 dB above it inside a 400 ms window. Twelve decibels is 15.85× in power, so the mean power across the window is (0.395 × 1 + 0.005 × 15.85) / 0.400 = 1.1856, and 10 log₁₀(1.1856) = 0.74 dB.

Read that twice. The peak meter jumped twelve decibels. The loudness meter moved three quarters of one. That spike took twelve decibels of your ceiling and handed back 0.74 dB of loudness, and every loudness tool ever sold exists to renegotiate the exchange rate.

Now the direction you actually act in. Bring the same spike down from 12 dB above the body to 9 dB and its contribution to the window falls from 0.74 dB to 0.36 dB. You surrendered 0.38 dB of average and freed 3 dB of ceiling, which you take straight back on the output fader. Three decibels louder at the same peak, bought for 0.38 dB of the stick. [Crest factor](https://gazillionindustries.com/crest-factor/) is that subtraction given a name, and [true peak](https://gazillionindustries.com/true-peak/) covers why the tallest sample is not quite the tallest the signal gets.

## How far that exchange rate holds

Run the subtraction all the way down and the trade stops being a feeling. Keep the same model — a body at a steady level, one 5 ms spike, a 400 ms window — and walk the spike down two decibels at a time, recording what each step does to the average.

- **Spike 12 dB above the body**: adds 0.74 dB to the 400 ms window

- **10 dB**: 0.46 dB

- **8 dB**: 0.28 dB

- **6 dB**: 0.16 dB

- **4 dB**: 0.08 dB

- **Level with the body**: 0.00 dB

Read the bottom row. Flatten the attack completely, all twelve decibels of it, and the loudness meter loses three quarters of one decibel. That is the entire contribution every attack in that window was ever making to your average level. In exchange you get twelve decibels of ceiling, which goes straight onto the fader. Twelve for 0.74 is the whole business model of loudness processing, and every tool in the category is a different way of collecting it.

The rate breaks at one specific place: the moment your ceiling drops below the body. Above that line you are only touching the 1.25 percent of the window the spike occupies, so peaks cost almost nothing. Below it you are acting on the 98.75 percent, and the average falls with the ceiling nearly decibel for decibel. Three decibels into the body costs close to three decibels of loudness, and the harmonics arrive anyway. Everything people call "over-limited" lives under that line.

Anchors help when you read your own meter. The standard waveforms have exact crest factors: a sine peaks √2 above its RMS, so 20 log₁₀(1.4142) = 3.01 dB; a triangle is √3, so 4.77 dB; a square is 0 dB, peak and RMS the same number, which is where a clipper is pointed. A drum bus at 15 dB and the same bus at 9 dB are both ordinary. A drum bus reading 4 dB is closer to a square wave than to a kit, and it will sound like one on the third listen.

## What happens to transients in a mix

- **Compression with a fast attack** catches the transient itself and turns it down. Useful for control, expensive in impact.

- **Compression with a slow attack** lets it through and squashes the body afterward, which makes the transient relatively louder. That is where punch comes from.

- **Clipping** shears the top off the transient only, leaving the body alone. Efficient for loudness and directly destructive to attack if overdone.

- **Saturation** rounds the transient's peak and adds harmonics, which softens the edge while making the sound feel bigger.

- **Limiting** is the last thing to touch them, and by then there should be very little left to catch.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and the page is specific about this: SOFT CLIP brings rounded, fuzzy edges to the loudest parts, which is a transient decision as much as a tonal one.

**LIMIT** instead, everything else identical.

## What a compressor attack time actually catches

The list above says a fast attack catches the transient and a slow one lets it through. Here is how much, in decibels, so the dial stops being a guess. Gain reduction approaches its target on an exponential: GR(t) = GRfinal × (1 − e−t/τ). One time constant gets you 63.2 percent of the way there, three get you 95.0 percent.

Set the eventual gain reduction to 10 dB and start the clock. With a 10 ms attack, one millisecond in you have 10 × (1 − e−0.1) = 0.95 dB of gain reduction. At 3 ms, 2.59 dB. At 5 ms, 3.93 dB. The stick is through the door before the compressor has taken a whole decibel off it, and everything behind the stick eventually gets the full ten.

Change one number. With a 0.1 ms attack the gain reduction at 1 ms is already 9.9996 dB. The compressor has the entire transient, all ten decibels of it, before the head has finished moving. Same ratio, same threshold, same reading on the gain-reduction meter, and a completely different drum.

- **0.1 ms attack**: 10.00 dB of GR by 1 ms — the attack is gone

- **1 ms attack**: 6.32 dB by 1 ms, 9.50 dB by 3 ms

- **3 ms attack**: 2.83 dB by 1 ms, 6.32 by 3 ms, 8.11 by 5 ms

- **10 ms attack**: 0.95 dB by 1 ms, 3.93 by 5 ms, 6.32 by 10 ms

- **30 ms attack**: 0.33 dB by 1 ms, 1.54 by 5 ms, 2.83 by 10 ms

One warning about the engraving. Attack is not defined the same way everywhere: some makers quote the time to reach 63.2 percent of the target, others the time to reach 90 percent, and 90 percent takes 2.3026 time constants. A dial marked 10 ms under the second definition has a time constant of 10 / 2.3026 = 4.34 ms, and it will take more than twice as much off your first millisecond as a 10 ms dial under the first. Trust the gain-reduction meter on a single hit, never the number printed next to the knob. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) has the settings side of this.

**SOFT CLIP as the out stage.** The clipper rounds the peak rather than holding a ceiling over it.

## What the detector sees before the attack time starts

Attack time is the second thing that happens to a transient. The first is detection, and two compressors set to identical numbers will do different things to the same snare because their sidechains are measuring different quantities.

A peak detector follows the waveform sample by sample. Hand it the 5 ms spike sitting 12 dB above the body and it reports 12 dB, at once, with no window to get through first.

An RMS detector averages before it decides. Put a 2 ms tick 12 dB above the body into a 10 ms RMS window and the detector's mean power is (0.008 × 1 + 0.002 × 15.85) / 0.010 = 3.97, and 10 log₁₀(3.97) = 5.99 dB. The tick is twelve decibels tall and the sidechain sees six. Shorten the window to 2 ms and the window is nothing but tick, so the detector sees all twelve again. The RMS window is a second attack time, hidden, sitting ahead of the one printed on the panel, and it is most of why the same settings on two units give you two drums. [What a compressor is](https://gazillionindustries.com/what-is-a-compressor/) covers the rest of the signal path.

Then there is what the sidechain is allowed to hear at all. A high-pass in the detector path at 100 Hz takes the kick's fundamental out of the decision without touching the audio, so the bus stops ducking a bar's worth of cymbals every time the kick lands. That one filter is frequently the difference between a bus compressor that glues and one that pumps. [Sidechain compression](https://gazillionindustries.com/sidechain-compression/) works the same mechanism deliberately.

## Look-ahead, and the peak the plugin already knows about

Look-ahead is delay, spent on purpose. A plugin advertising 1.5 ms of it is holding your audio back by 1.5 × 44.1 = 66.15 samples at 44.1 kHz, 72 at 48 kHz and 144 at 96 kHz, so its detector is reading the future while its output is still in the past.

What that buys is the shape of the gain change. Without look-ahead nothing can reduce a peak it has not met yet, so a genuinely instant attack has to be a step in gain, and a step in gain landing on a 5 ms event is an edge of its own — you removed a click and installed a different one. With look-ahead the same reduction is spread across the samples before the peak arrives, a ramp rather than a step, and the hit is turned down on its way in.

What it costs is that the attack gets ducked before it happens. On a dense mix nobody will ever find it. On a sparse one — a single snare with air around it — it reads as a small dip of the track just ahead of the hit, and once you have heard it you cannot stop hearing it. [How to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) has the settings side.

The null test above breaks on exactly this if you are careless. Sixty-six samples of uncompensated latency is 1.5 ms of delay against the dry copy, which is a comb filter with its first null at 1 / (2 × 0.0015) = 333 Hz and another every 1 / 0.0015 = 667 Hz above it. That residue looks like a plugin doing dramatic things to your low mids and it is your own alignment. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) has the arithmetic for the general case.

## How to hear what you are doing to them

- Solo a drum and bypass everything. Listen to the attack alone, not the whole hit.

- Add your processing and level-match. The question is never "is it louder" but "is the stick still there".

- Zoom into the waveform: a healthy transient is a narrow spike well above the body. A flattened one looks like a brick.

- Check on a small speaker. Transients survive there better than low end does, so a track with no attack has almost nothing left on a phone.

- If you need both, use two paths: one with the attack intact and one squashed, blended. That is [parallel compression](https://gazillionindustries.com/parallel-compression/).

## Prove it in your own session: the null test

Everything above is checkable in about four minutes, and the check is worth more than the reading. Listening tells you whether you like it. Nulling tells you what changed.

- Print the drum bus twice over the same eight bars: once with the processor bypassed, once with it on.

- Level-match the two prints by their average, on a loudness meter, over the same section. Matching by peak will lie to you here, because the peak is the thing under test.

- Put both prints on tracks, line them up sample-accurately, and invert the polarity of one.

- Play the pair. What remains is exactly what the processor added or removed. Nothing else.

- Turn the residue up and listen to where it sits in time. A click at the front of every hit means the work is happening on the transient. A steady fuzz under the whole loop means the work is happening on the body. Most processors give you some of each, and the balance is the setting.

- Note peak and average for both prints and subtract each pair. The change in that difference is your transient reduction in decibels, with no opinion in it.

- Move one control, print again, repeat. Two controls at once and you learn nothing.

One thing will break this, so rule it out first. Any processor that reports latency has to be compensated, and a single sample of misalignment turns a clean null into a bright high-frequency ghost that looks exactly like transient damage. Test the rig before you test the plugin: null a bypassed instance against a bare copy of the same print. If that does not go silent, your alignment is wrong and nothing you conclude afterward is about the plugin.

## Where transient work sits in a chain

Order decides what each stage sees, so the same three plugins in two orders are two different records. Work outward from the cheapest move.

Before any processing at all, there is the sample, the tuning, the pattern and the length of the tail. Those are free and they add no harmonics. A decaying hit repeating every T seconds with a decay constant τ has a crest factor of 10 log₁₀(4T / τ), so shortening a tail or doubling a pattern moves the same number a clipper moves, at no cost. [Crest factor](https://gazillionindustries.com/crest-factor/) runs those numbers out.

Then shaping, ahead of dynamics, so that the compressor sees the envelope you want rather than the one you inherited. Then EQ, which cuts both ways here. A high-pass ahead of a clipper removes low-frequency energy that was pushing the waveform into the ceiling, so the clipper spends its work on the stick instead of the rumble. A shelf boost placed after a clipper puts peaks back that the clipper just paid to remove, which is the single most common reason a chain stops getting louder no matter what you do to it.

Resonant EQ has its own transient cost, and it is calculable. A bell filter behaves like a resonator with a decay time constant of Q / πf₀. At 3 kHz with a Q of 8 that is 8 / (π × 3000) = 0.85 ms, and roughly 5.9 ms to fall 60 dB — longer than the transient you boosted it to sharpen. Drop the Q to 2 and the ring is down to 1.5 ms. Wide boosts sharpen attacks; narrow ones smear them and then get blamed on the compressor.

Saturation and clipping come late, and the limiter comes last with almost nothing left to catch. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) covers that handoff, [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) covers the drum end, and [parallel saturation](https://gazillionindustries.com/parallel-saturation/) is the way out of the ordering question entirely: process a copy hard, keep the original attack, blend.

## The harmonics a clipped transient sends back down

Every nonlinearity makes harmonics, and the transient is the widest-band thing in the record, so the transient is where the most of them get made. Above half the sample rate they do not vanish. They fold.

Take one 6 kHz component inside the stick and clip it at 44.1 kHz, where Nyquist is 22.05 kHz. The third harmonic lands at 18 kHz and stays where it belongs. The fifth wants 30 kHz, so it comes back at 44100 − 30000 = 14.1 kHz. The seventh wants 42 kHz and comes back at 2.1 kHz. That last number is the whole problem: 2.1 kHz is not a harmonic of 6 kHz or of anything else in the hit, so it sits beside the sound instead of inside it, and it reads as a small metallic ring arriving with every snare.

Run the same hit at 96 kHz, where Nyquist is 48 kHz, and the first harmonic with anywhere to fold is the ninth at 54 kHz, which comes back at 42 kHz and is gone. That gap is the entire argument for oversampling a nonlinear stage rather than the rate you tracked at. [Oversampling](https://gazillionindustries.com/oversampling/) covers the implementation and [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) covers why the folded partial moves the wrong way.

You can hear it without a spectrum analyzer. Put the processor on a sine, sweep it slowly up through the top two octaves, and listen underneath. If a second tone slides downward while you are sweeping upward, that tone is the fold, and it is being generated by every hat in your loop at the same settings.

## Pre-ringing, or the part of the attack that arrives early

A linear-phase filter is symmetric in time. That is the point of it: every frequency leaves with the same delay, so nothing inside the hit gets shifted relative to anything else. The bill arrives as symmetry in the other direction — an impulse response with as much response before its center as after it.

Put a number on the window. A 2048-tap symmetric filter at 44.1 kHz has its center at (2048 − 1) / 2 = 1023.5 samples, and 1023.5 / 44100 = 23.2 ms. The filter's response to a hit can therefore begin as much as 23.2 ms before the hit does, which is four times longer than the attack you were trying to protect.

On a busy mix this is invisible. On a sparse arrangement it is a short breath of tone ahead of the stick, and it is most obvious on steep, low high-passes, where the filter has to be longest. A minimum-phase filter puts all of that energy after the event instead, where the hit itself covers it, and pays in phase shift across the band. Two bills, and you choose which one to settle. Solo a snare, put a steep linear-phase high-pass on it, and look at the waveform: the smear ahead of the transient is visible before it is audible.

## Failure modes, and what each one sounds like

- **Attack too fast on the bus.** The kick becomes a thud with no beater and the snare reads like a magazine being slapped. Loudness holds or improves, which is why this one survives so many sessions.

- **Fast attack plus a fast release.** The body swells back up in the gaps between hits. Cymbal wash and room breathe in and out on the pattern, and the whole kit sounds like it is being inflated once a beat.

- **Clipper pushed past the stick.** The snap turns into a buzz. Hats gain a fizz that rides on top of everything, because the harmonics a clipper generates land high and do not decay with the hit. [What is clipping](https://gazillionindustries.com/what-is-clipping/) has the mechanism.

- **Transient designer pushed too far.** An audible pop arrives ahead of the note, and on anything with room in it the tail gets yanked up with the attack. Close mics tolerate this; a stereo room recording does not.

- **The limiter doing the mix's job.** Loud sections shrink and quiet ones do not, so the record loses size exactly where it was supposed to grow. On a phone it reads as flat rather than as loud.

- **Aligned peaks.** Kick, bass and a stab on the same sixteenth sum in voltage, so the peak jumps while the average barely moves. This is an arrangement failure wearing a processing costume. [How to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) covers the worst offender.

- **Nothing touched at all.** Every element keeps its full attack, the meters jump, the parts sit apart from each other, and the track never gets near a competitive level. Full preservation is a failure mode too.

## Finding transients in your DAW

Every major DAW detects transients, they all expose a sensitivity control, and none of them agrees with the others about how many your loop contains. That disagreement is the most useful thing in this section: a transient is a perceptual boundary, not a line already drawn in the file.

- **Ableton Live** places warp markers on detected attacks. In Beats warp mode the Transient Loop Mode and Transient Envelope settings govern what happens after each detected attack, and pulling the envelope short is the fastest way to hear the attacks of a loop separated from their bodies.

- **Logic Pro** writes transient markers when you enable Flex Time on a track, with a detection sensitivity you raise and lower in the Flex view. The Slicing algorithm cuts at exactly those markers, so the marker count is the honest answer to how many events Logic thinks are there.

- **FL Studio** slices at detected attacks and hands you the pieces on separate pads, which turns the question into an audible one: play the slices and hear where it split a flam into two hits or merged two into one.

- **Pro Tools** analyzes for event markers under Elastic Audio, and it has a navigation mode that jumps the cursor from one detected transient to the next. Tabbing through a bar counts the events for you.

- **Reaper** exposes transient sensitivity and a threshold directly in its dynamic split dialog, with a live preview of where the cuts would fall. It is the quickest of the five for watching the detector change its mind as you move one slider.

Take one loop through two of them at the default sensitivity and compare the counts. A ghost note on a snare will register in one and not the other, and once you have seen that you will stop treating "the transient" as a thing with edges and start treating it as a region a few milliseconds wide that you are choosing to act on.

**BEEF at 8.** The reference you A/B against.

## Transients outside the drum bus

The word gets used almost exclusively about kits, which leaves three quarters of a record unexamined. The same arithmetic applies everywhere, and the burst relation from earlier — first spectral null at 1 / T — tells you where each one lives.

- **Vocals.** The consonant is the transient. A 2 ms burst on a hard "t" has its first null at 1 / 0.002 = 500 Hz and spreads broadly above that, which is why consonants are the part of a vocal that survives a phone speaker while the vowel disappears, and also why de-essers and clippers end up fighting over the same syllables. [How to mix vocals](https://gazillionindustries.com/how-to-mix-vocals/) and [distortion on vocals](https://gazillionindustries.com/distortion-on-vocals/) take that further.

- **Bass and 808s.** Two separate events glued together: a wide-band click at the front and a narrow sine underneath, and they can be processed apart because they barely overlap in frequency. A second-order high-pass at 150 Hz sits 150 / 50 = 3 times above an 808 tuned near 50 Hz, which is log₂3 = 1.58 octaves, so at 12 dB per octave the fundamental comes down about 19 dB while the click goes past untouched. Split the two, treat them separately, sum them back. [Kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) is where this matters most.

- **Guitar and keys.** Pick and hammer. Both are short enough to be the first thing any bus compressor reacts to, which is how a rhythm part ends up controlling the gain of a whole mix without anybody noticing who is driving.

- **Synths.** The transient is written by the envelope, so it costs nothing to change and it should be changed there first. An amplitude envelope with its attack at zero gives you the steepest edge the band permits, which the earlier sum puts at 17.45 µs, and every millisecond you add to that stage is a millisecond your compressor no longer has to negotiate.

- **Sampled loops.** The attack you inherited includes somebody else's room, somebody else's mic and, often, somebody else's limiter. Slicing separates the events so you can treat them individually. [How to chop a drum break](https://gazillionindustries.com/how-to-chop-a-drum-break/) covers the mechanics.

## Where it costs you

Preserving every transient is not a virtue either. A mix where every element keeps its full attack has no glue: the parts sit apart from each other, the meters jump around, and the record never reaches a competitive level because the peaks are eating all the ceiling. Some of the transient has to go. The craft is deciding which ones, and on which elements, rather than letting a limiter make that decision for you at the very end.

Price the trade before you make it. Start with a drum bus whose crest factor is 15 dB. Shave 3 dB off the peaks alone and make it up on the fader: same ceiling, 3 dB more average, crest factor now 12 dB. That is what you bought. What you paid was three decibels of every attack on the bus, and the earlier window arithmetic says those three decibels were only worth 0.38 dB of loudness on their own — the gain came from being allowed to raise everything else, not from the spike itself.

Which is the argument for taking it in pieces. Six decibels removed in one place is a different record from six decibels removed two at a time across the drum bus, a saturator and a clipper ahead of the limiter, because each stage reshapes the hit in a way the next one no longer has to. Re-measure between stages. If the crest factor stops falling while the gain-reduction meter keeps moving, you are past the transients and into the body, and the body is where flatness comes from. [How to make a mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/) works the same ground from the loudness side.

## What the tools cost

Most of it costs nothing, which is worth saying before anybody goes shopping. Every major DAW ships a compressor with an attack control, a limiter and a polarity invert, and that is the complete equipment list for the null test, the detector comparison and the crest-factor ledger above. The measurement half of this article has no price at all.

The paid half is shaping and loudness. [DRUGS](https://gazillionindustries.com/drugs.html) is our one-knob bus compressor for drums, free on Mac and Windows: DOSE does the work, with GAIN and a soft ceiling on the way out, and it does not sit at unity with DOSE at nought, so level-match before you judge it. [BEEFY](https://gazillionindustries.com/beefy.html) is $19, one payment, Mac and Windows, AU, VST3 and standalone. Whatever you use, the honest way to spend money here is to demo against the null test rather than against the loudness, because everything in the category makes the loop louder and the question was always which few milliseconds it took that from.

## Questions people ask

### What exactly is a transient?

The short, high-energy start of a sound, before it settles into its sustained portion. Usually a few milliseconds long and considerably louder than what follows.

### Is transient response good or bad?

Neither. Strong transient response means a system or a mix reproduces attacks accurately, which is usually what you want for drums and percussion, and occasionally not what you want if the goal is a smoother, denser sound.

### Is a transient shaper just a compressor?

No. A compressor reacts to level: it acts when the signal crosses a threshold. A transient designer reacts to the shape of the envelope, so it treats an attack the same way whether the part is loud or quiet. See [transient shaper vs saturation](https://gazillionindustries.com/transient-shaper-vs-saturation/).

### How long is a transient?

For most percussive sounds, a few milliseconds up to perhaps twenty. Which is why compressor attack times in that range are the ones that change the character of a drum.

### How many samples is a transient?

Five milliseconds is 220.5 samples at 44.1 kHz, 240 at 48 kHz and 480 at 96 kHz, because one sample lasts 22.68, 20.83 and 10.42 microseconds respectively. Zoom in that far and you can see the whole event.

### What is a transient in music production?

The attack portion of any sound: the stick, the pick, the hammer, the consonant at the front of a word. Producers use the word for the part of a hit a processor gets to first, which in practice means the first two to twenty milliseconds.

### What compressor attack time preserves transients?

Long enough that very little gain reduction has built up while the attack is passing. For 10 dB of eventual gain reduction, a 10 ms attack has applied 0.95 dB at the one-millisecond mark and 3.93 dB at five. A 0.1 ms attack has applied 9.9996 dB by one millisecond. Start at 10 to 30 ms on drums and come down until the hit stops poking out.

### Does saturation kill transients?

It rounds them rather than removing them, and it raises the level of everything underneath with added harmonics. That double action is why a decibel of peak taken with saturation usually sounds less obvious than a decibel taken with a clipper. [Saturation explained](https://gazillionindustries.com/saturation-explained/) has the harmonic detail.

### Does clipping destroy transients?

Clipping only touches samples above the ceiling, which on a drum loop means the attacks and nothing else. In small amounts that is the most efficient loudness available, because the averaging window barely notices the loss. Pushed further it is the fastest way to turn a snap into a buzz. [What is clipping](https://gazillionindustries.com/what-is-clipping/) covers the shapes.

### Why does my peak meter jump but my loudness meter barely move?

Because they measure over different spans. A 5 ms spike 12 dB above the body raises the peak reading by 12 dB and raises a 400 ms momentary loudness window by 0.74 dB, since the spike occupies 1.25 percent of the window. That gap is the whole reason loudness processing exists.

### Why do my drums sound weak after compression?

Almost always a fast attack catching the stick while the body gets turned up to compensate, so the loop measures louder and lands softer. Level-match, bypass, and listen for the attack rather than the level. [Why do my drums sound weak](https://gazillionindustries.com/why-do-my-drums-sound-weak/) goes through the rest of the causes.

### Can you get a transient back once it is gone?

Partly. A transient designer can lift the front of an envelope that is still there in reduced form, and it will read as sharper. What it cannot do is invent the high-frequency content a clipper converted to harmonics, so a heavily flattened hit comes back as a louder version of itself rather than as the original. Fix it upstream where the copy still has one.

### Should a transient shaper go before or after a compressor?

Before, in most chains, so the compressor sees the envelope you actually want and reacts to it. Putting it after means shaping something the compressor has already reshaped, and the two will fight over the same few milliseconds every hit.

### Does EQ affect transients?

Yes, in both directions. A high-pass ahead of a clipper frees the clipper to work on the attack rather than on low-frequency energy. A resonant boost rings: a bell at 3 kHz with a Q of 8 has a decay time constant of 8 / (π × 3000) = 0.85 ms and takes about 5.9 ms to fall 60 dB, which is longer than the attack it was boosting. Lower Q, shorter ring.

### Do transients matter on phone speakers?

More than anywhere else. A small driver cannot reproduce the low end that carries weight on a big system, so the attack is most of what survives the trip. A loop with its attacks flattened has very little left by the time it reaches a phone. [Making bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) covers the other half of that problem.

### Do transients cause true-peak overs?

They are the usual source. Sample peaks sit on the grid and the reconstructed waveform does not, so a signal whose highest samples are short and steep can exceed the tallest sample between them. A half-sample shift on a tone at a quarter of the sample rate under-reads by −20 log₁₀(cos 45°) = 3.01 dB, and that is the reason ceilings get set below zero. [True peak](https://gazillionindustries.com/true-peak/) has the measurement.

### What is transient detection in a DAW?

An analysis pass that marks where the software believes each attack starts, used for warping, flexing, slicing and dynamic splitting. Every one of them exposes a sensitivity control, and two DAWs at their defaults will disagree about how many events a loop contains, which is a fair reminder that the boundary is a judgment rather than a fact in the file.

### Is a transient the same as an attack?

In practice, yes for recorded sound. The distinction worth keeping is that "attack" also names a control on a synthesizer envelope and a control on a compressor, and those set times rather than describe the signal. When somebody says the transient is gone, they mean the event; when they say the attack is too slow, they usually mean the knob.

### What is a transient peak?

The tallest sample inside the attack, and the number your peak meter is reporting. It carries almost no energy: a 5 ms spike sitting 12 dB above the body raises a 400 ms momentary loudness window by 0.74 dB, because it occupies 1.25 percent of that window.

### Transient or sustain — which one carries the loudness?

The sustain, by a distance. Flatten the attack entirely in the model above and the momentary window falls 0.74 dB while twelve decibels of ceiling come free. Everything a loudness processor does is a version of that swap.

### Does a limiter remove transients?

It reduces them, which is the job. The difference between limiters is mostly the shape of the reduction: with look-ahead the gain comes down as a ramp across the samples ahead of the peak — 1.5 ms of look-ahead is 66.15 samples at 44.1 kHz — and without it the gain has to step, which puts an edge back where you just removed one. [Limiter vs compressor](https://gazillionindustries.com/limiter-vs-compressor/) separates the two tools.

### Should I clip or limit the transients?

Clip early and limit last. A clipper touches only what is above the ceiling, which on a drum loop means the attacks and nothing else, so it is the cheapest peak reduction there is in loudness terms. A limiter is a safety device by the time it gets the signal. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) has the handoff.

### Does a peak-detecting compressor hit transients harder than an RMS one?

Yes, and by a measurable amount. A 2 ms tick 12 dB above the body reads as 12 dB to a peak detector and as 10 log₁₀(3.97) = 5.99 dB to an RMS detector using a 10 ms window. Same signal, same panel settings, six decibels of difference in what the unit thinks is happening.

### Does oversampling preserve transients?

It does nothing to the transient directly. What it prevents is the harmonics your clipper makes out of the transient folding back down into the audio. At 44.1 kHz the seventh harmonic of a 6 kHz component lands at 42 kHz and returns at 2.1 kHz, which is not a harmonic of anything in the hit. [Oversampling](https://gazillionindustries.com/oversampling/) has the detail.

### Why does my snare ring or sound metallic after clipping?

Two candidates, and they sound different. A buzz that rides on the top of everything and does not decay with the hit is clipping harmonics. A short metallic tone that changes pitch when you change the sample rate is folded content, which the sum above puts at 2.1 kHz for a 6 kHz component at 44.1 kHz. Oversample the stage and the second one leaves.

### Why does linear-phase EQ smear my drums?

Because a symmetric filter responds before the event as well as after it. A 2048-tap filter at 44.1 kHz centers at 1023.5 samples, which is 23.2 ms, so its response to a hit can start that far ahead of the hit. Switch the band to minimum phase and the energy moves behind the transient where the hit masks it.

### What sample rate should I record at to keep transients?

44.1 kHz already captures every edge the band contains. The steepest rise a 20 kHz bandwidth permits is 0.349 / 20000 = 17.45 µs, and the system reconstructs that exactly. Higher rates help where processing is nonlinear, not where recording is linear, so the argument for 96 kHz is about what your clipper does downstream.

### What is a good crest factor for a drum bus?

There is no single right number, but there are anchors. A sine measures 3.01 dB, a triangle 4.77 dB and a square 0 dB. Measure your own by subtracting short-term loudness from peak over the same eight bars, then measure a record you rate the same way and compare the two. [Crest factor](https://gazillionindustries.com/crest-factor/) runs the method.

### How do I keep transients while making the track louder?

Take the reduction in pieces and measure between them. Six decibels removed by one plugin is a flatter record than six decibels removed two at a time across three stages, because each stage hands the next a hit that needs less work. When crest factor stops falling but the gain-reduction meter keeps moving, the stage has finished with your attacks and started on the body.

### What is the transient on a vocal?

The consonant. A hard "t" or "k" is a burst of a couple of milliseconds, and a 2 ms burst has its first spectral null at 500 Hz with energy spread widely above it. That is why consonants are what survives on a laptop speaker and why a fast vocal compressor can make a singer sound like they are mumbling without changing the level much at all.

### Do synth sounds have transients?

Yes, and they are the only ones you can rewrite for free. The amplitude envelope's attack stage is the transient, so a synth part that keeps triggering your bus compressor should be fixed at the envelope before anybody reaches for a plugin.

### Can I add a transient that was never recorded?

You can put one next to it. Layering a short click or a tick under a soft hit gives the ear the event it is looking for, and it stays under your control in a way that a transient designer lifting a flattened envelope does not. [How to layer kicks](https://gazillionindustries.com/how-to-layer-kicks/) covers the alignment, which is where layering usually goes wrong.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **SOFT CLIP** opens switched on and rounds the loudest parts, which is the transient-facing control; **BEEF** adds weight and density behind the hit; **COOK** changes the color and bite from rounder toward brighter; and **JUICE** sets how hard you are feeding it in the first place.

Read against this article, the panel is two questions. JUICE and BEEF decide how much signal reaches the bend, which is how far the average comes up. SOFT CLIP and LIMIT are the two ways of handling what is still standing at the top: one rounds the peak, the other holds a ceiling over it, and they are separate switches so you can hear the difference on one hit rather than reason about it. Both off is also an option, and it is the honest starting point for the null test above.

BEEFY is $19, one payment, and runs on Mac and Windows as AU, VST3 and standalone. There is a 28-second demo with three without/with comparisons on the page, which is the fastest way to hear what rounding a peak does to an attack.

Five milliseconds, almost no energy, and the whole difference between a snare and a slap.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
