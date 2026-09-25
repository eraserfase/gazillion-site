# Limiter vs compressor

> The difference between a limiter and a compressor, where the line sits, which order they go in, and how much of each is too much on a mix or a master.

Source: https://gazillionindustries.com/limiter-vs-compressor/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Two boxes, both turning things down, both with a threshold, both promising loudness. The difference between them is one number, and knowing which number decides which one goes at the end of your chain.

A limiter is a compressor with a very high ratio and a very fast attack, set to stop a signal crossing a ceiling. A compressor shapes dynamics across the whole performance; a limiter catches the few peaks that would otherwise clip. In practice: use a compressor early, to control and shape, with 3 to 6 dB of gain reduction on the loud parts. Use a limiter last, with a ceiling around −1 dBTP, to stop the output going over.

## The short version

- **Compressor**: ratio 2:1 to 8:1, shapes the whole performance

- **Limiter**: ratio 20:1 or higher, often infinite: a ceiling

- **Attack**: compressor, milliseconds you choose; limiter, as fast as possible

- **Job**: compressor controls dynamics; limiter prevents overs

- **Order**: compressor first, limiter last

- **Amount**: compressor 3–6 dB; limiter 1–3 dB on peaks only

- **Latency**: compressor usually none; limiter often a lookahead delay

- **Set by**: compressor, your ears and your tempo; limiter, a number you decide once

**DOSE 12.** A break with the loudest hits just touching the curve. The line twitches and settles before the next one.

**DOSE 88.** Same source. The line dives on each hit and takes the whole bar to come back — that recovery is the pump.

## The line between them

There is no hard border in the circuit, only in the setting. Traditionally anything above about 10:1 counts as limiting, and a true brickwall limiter behaves as if the ratio were infinite: nothing crosses the ceiling, ever. Below that you are compressing, which means the signal still gets louder as the input gets louder, just less so.

The practical distinction is what each is listening for. A compressor is reacting to the body of a performance, and its timings are musical decisions. A limiter is reacting to a handful of samples, and its timings are technical ones: it exists so the converter or the encoder does not receive something it cannot represent.

## What the ratio number actually does

Ratio is a slope, and the arithmetic fits in your head. A 4:1 setting means four decibels of input above the threshold buy one decibel of output above it. Feed it a peak sitting 6 dB over: 6 ÷ 4 = 1.5 dB out above the threshold, so the meter shows 6 − 1.5 = 4.5 dB of gain reduction. Every ratio is that one division.

Run the same 6 dB peak through the whole range and the returns collapse fast.

- **2:1**: 3.0 dB out over the threshold · 3.0 dB of gain reduction

- **4:1**: 1.5 dB over · 4.5 dB of gain reduction

- **8:1**: 0.75 dB over · 5.25 dB

- **10:1**: 0.6 dB over · 5.4 dB

- **20:1**: 0.3 dB over · 5.7 dB

- **100:1**: 0.06 dB over · 5.94 dB

- **infinite**: 0 dB over · 6.0 dB: the ceiling

Look at the gap between 10:1 and infinity. Six-tenths of a decibel of output separates a 10:1 compressor from an absolute ceiling. That is why the two words exist as separate tools: past about 10:1, changing the number stops changing the sound of the level and starts only changing how absolutely the lid holds. Everything interesting that a high ratio does to a track is done by its attack and release, not by the slope.

The knee softens that corner. A 6 dB soft knee starts bending the curve 3 dB below the threshold and reaches full slope 3 dB above it, so nothing snaps on at a single level. Hard knee is audible on sparse material and useful when you want the compression to be a sound. [Compression explained](https://gazillionindustries.com/what-is-a-compressor/) takes all five controls one at a time.

## Threshold: the number that decides how often

Ratio decides what happens to a peak. Threshold decides which peaks it happens to. The two reach the meter as a single figure, and that figure is one multiplication: gain reduction equals the decibels over the threshold times (1 − 1 ÷ ratio).

Work it on a drum bus peaking at −4 dBFS. A threshold at −12 dBFS puts the loudest hits 8 dB over, and at 4:1 that is 8 × (1 − 1 ÷ 4) = 6 dB of reduction. Move the threshold down 3 dB to −15 and the same hits sit 11 dB over: 11 × 0.75 = 8.25 dB. Three decibels of threshold bought 2.25 dB of gain reduction.

That exchange rate is fixed by the slope, and it is worth carrying in your head. One decibel of threshold buys 0.5 dB of reduction at 2:1, 0.75 dB at 4:1 and 0.9 dB at 10:1. Which is why a limiter's input knob feels twitchy and a bus compressor's threshold feels vague: at a gentle slope the control has to travel a long way to do anything at all.

Set it by how often, not by how much. Watch which hits move the needle — the loudest three in the bar, or every sixteenth. Those are two different effects, and one control chooses between them.

## Attack and release, in milliseconds

Attack is how long the gain cell takes to arrive at its target, and it is the control that decides whether a drum keeps its front. A compressor set to 30 ms lets the stick through and grabs the body behind it. The same compressor at 1 ms catches the stick, and the kit sounds softer and further away while the meter insists the plug-in is working hard.

A limiter has no equivalent choice, because it is not allowed to miss. Most get there with lookahead: delay the audio by a fixed number of samples so the detector sees a peak before the audio reaches the gain cell. A 1.5 ms lookahead is 1.5 ÷ 1000 × 44100 = 66 samples at 44.1 kHz, or 72 at 48 kHz. That delay is the plug-in's reported latency. Your DAW compensates it on playback and cannot compensate it while you are monitoring a live input.

Release is where both tools meet physics. Gain that moves faster than the waveform underneath it stops being gain control and becomes waveform shaping, which is another word for distortion. One cycle of 50 Hz lasts 1 ÷ 50 = 20 ms; 30 Hz lasts 33.3 ms. Put a 5 ms release on a kick with its weight at 50 Hz and the gain travels up and down four times inside a single cycle. You hear that as a growl or a buzz riding the low end, and [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) is exactly what it is.

Release is also a tempo question, and the arithmetic is one division: 60000 divided by the tempo gives the quarter note in milliseconds. At 92 bpm that is 652 ms, the eighth is 326 ms and the sixteenth is 163 ms. A release longer than the gap between hits never recovers before the next one arrives, so the gain sags downward through the bar and the whole kit sinks. Short enough to be back up by the next sixteenth, long enough to stay above one cycle of your lowest content: on a break at 92 bpm that lands somewhere between about 60 and 160 ms.

## Time constants: what the attack number means

Gain travels toward its target along an exponential, and the number printed on the control is usually one time constant: the time to cover 63.2 percent of the distance, since 1 − 1 ÷ e = 0.6321. The remainder arrives after the printed number has gone by.

- **1 time constant**: 63.2% of the travel · 2.53 dB of a 4 dB target

- **2**: 86.5% · 3.46 dB

- **3**: 95.0% · 3.80 dB

- **5**: 99.3% · 3.97 dB

Read the top line again with a snare in mind. A 10 ms attack aiming at 4 dB has taken 2.53 dB at 10 ms, 3.46 dB at 20 ms and is still tightening at 30 ms, by which point the stick has been and gone. That lag is the whole reason a slow attack keeps transients: the front of the hit escapes through a gain cell that has not finished moving.

Release behaves the same way, which sharpens the tempo arithmetic above. At 92 bpm the sixteenth is 163 ms, and a 160 ms release is 1.02 time constants by the time the next hit lands, so it is 63.9 percent recovered and not 100. Two-thirds of the way home is usually what you want on drums, because the third that is left reads as glue. To get the gain genuinely back to zero between hits, use about a third of the gap: 163 ÷ 3 = 54 ms puts you at 95 percent.

One caution when comparing two plug-ins by their printed numbers. A maker who specifies the 10 to 90 percent time rather than one time constant prints a figure 2.2 times larger for the same circuit, since the natural log of 9 is 2.197. A 10 ms attack and a 22 ms attack can be the same attack.

## What the detector hears

Before any of that, something has to decide how loud the signal is right now. Peak detection follows the instantaneous sample value. RMS detection averages over a window, from a few milliseconds to a few tens of them. On drums the two disagree by a wide margin.

The size of the disagreement is computable on simple waves. A sine's RMS sits at 0.7071 of its peak, and 20 × log₁₀(0.7071) = −3.01 dB, so it reads 3.01 dB down. A square wave's RMS sits at its peak, 0 dB below. Two signals reading the same on a peak meter, 3.01 dB apart the moment you average them. A stick hit — a few milliseconds of spike over a long decay — reads lower still to an averaging detector, so the same threshold does visibly less work in RMS mode and lets the front of the kit through.

Then the frequency question. Low content carries the energy, so it writes the gain for everything above it. A kick with its weight at 50 Hz holds a full-band detector down for a whole cycle, and one cycle is 1 ÷ 50 = 20 ms, longer than any attack you would pick for a snare. High-pass the detector at 100 Hz, where one cycle is 1 ÷ 100 = 10 ms, and the hats get their gain back from the kick. This is the same control as [sidechain compression](https://gazillionindustries.com/sidechain-compression/), keyed from the track itself.

Where the detector taps the signal changes the feel as well. Tapped before the gain cell, the compressor reacts to what is arriving. Tapped after, it reacts to what it has already done, so the reduction feeds back on itself, the effective slope softens as it works harder, and the box sounds rounder and slower at identical printed settings.

Last detector question: linking. Linked, both channels take one gain figure derived from the pair, and the image holds still. Unlinked, a hard-panned hit pulls down only its own side — 2 dB of one-sided reduction is an amplitude ratio of 1.26 between the channels — and the center of the kit drifts toward the side that was not hit, for as long as the gain takes to come back. On a drum bus, link it.

## Crest factor: the number both of them move

Crest factor is peak level minus average level, in decibels, and it is the single number that describes what either box did. A snare bus peaking at −1 dBFS with an RMS of −13 dBFS has a crest factor of −1 − (−13) = 12 dB. Twelve decibels of distance between the loudest instant and the general loudness.

Now compress it. Say the compressor takes 4 dB off the peaks and 1 dB off the average, and you add 4 dB of make-up. Peak returns to −1 dBFS. Average goes from −13 to −13 − 1 + 4 = −10 dBFS. Crest factor is now 9 dB, and the track is 3 dB louder at the identical peak reading. No fader moved. That 3 dB is the entire trick, and it is why [crest factor](https://gazillionindustries.com/crest-factor/) is worth more attention than the gain reduction meter.

A limiter does the same arithmetic with a crueler shape. It removes only the top, so the average barely drops and the peak drops a lot, and each decibel of ceiling you claw back buys close to a decibel of average level. That efficiency is the temptation. It is also the reason a limiter pushed for 6 dB leaves a track with a crest factor low enough that nothing in it has anywhere to go.

## Two gentle stages, or one hard one

Ratios multiply in series. Two 2:1 compressors, both working, pass a 6 dB peak along in stages: 6 ÷ 2 = 3 dB over the first threshold, then 3 ÷ 2 = 1.5 dB over the second, which is exactly where a single 4:1 would have left it. On steady material the pair and the single are the same slope.

The timings are where they separate. Each stage has its own attack and release, so two can work on two time scales at once: a slow one riding the arrangement at 2 dB, a fast one catching the hits for another 2. Four decibels split across two meters also reads as less of an effect than 4 dB on one, because each detector is deciding with less at stake.

Two caveats, both practical. The multiplication holds only while both stages are in reduction; below the second threshold the first one's slope is all you have, which makes a two-stage chain more program-dependent than either stage alone. And the second detector is looking at the first one's output, so any change upstream re-times everything downstream. Set them front to back, then go back and re-check the first.

**MIX at 45.** The wet path squashed hard, the dry path still carrying the peaks, both arriving together.

Parallel is the other direction entirely, and nothing stacks: keep an uncompressed copy in the balance and the peaks survive in the dry path while the density arrives in the wet one. A wet/dry control inside the plug-in does the same job without a second track, as long as the dry path is not delayed against the wet one — a few samples of offset between them is a comb filter. [Parallel compression](https://gazillionindustries.com/parallel-compression/) has the routing and the phase check.

## How to use each

- Put the compressor early, on the track or the bus, and set it by ear for feel.

- Get the balance right with the compressor in, not after the limiter is on.

- Deal with the worst transients before the limiter: a clipper or saturation will shave peaks without the limiter having to pull down the whole track.

- Put the limiter last, with the ceiling at −1 dBTP for anything that will be encoded.

- Push into it a decibel at a time and listen to the quiet bars, not the loud ones.

- If the limiter is doing more than 3 dB on average, the problem is upstream.

- Set the compressor release against the tempo before you touch anything else: 60000 divided by the bpm, then take the eighth or the sixteenth.

- Check the finished bounce on a phone speaker and in a car, at the same volume as the version you started with.

For the loudness part of that chain in detail, see [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) and [how loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/).

[DRUGS](https://gazillionindustries.com/drugs.html) has both ends of this on one free panel: a compressor with one knob, and LIMIT, a soft ceiling on the output at −0.3 dBFS.

## A worked example, start to finish

A loop at 92 bpm: kick, snare, hats, a little room. It peaks at −2.4 dBFS, its average sits around −15 dBFS, and it sounds thin next to the reference. Crest factor is −2.4 − (−15) = 12.6 dB, which tells you before you touch anything that there is room to work.

- Compressor on the drum bus. Ratio 4:1, attack 30 ms, release 160 ms, which is the sixteenth note at this tempo (60000 ÷ 92 = 652; 652 ÷ 4 = 163).

- Lower the threshold until the loudest hits pull 4 dB and the quieter ones pull nothing. The meter should return to zero between hits, not hover.

- Add make-up until the bypassed and engaged levels match on a meter, then judge. If it does not sound better at matched level, it is not better.

- Saturation or a soft clipper next, taking a decibel or two off the sharpest transients. Peaks come down; average does not.

- Limiter last. Ceiling −1 dBTP. Raise the input until it reads 1.5 to 2 dB of reduction on the loudest hits and nothing at all in the quiet bar.

- Bounce. Measure peak and average again.

On material like that you should end up around −1 dBTP peak and roughly −9 to −10 dBFS average: a crest factor near 8 or 9 dB, the drums 5 dB louder than they started, and the room still audible under the hits. If the crest factor has fallen below about 6 dB, back the limiter off. Something is being held down that used to move.

## Why the limiter ceiling is not 0 dBFS

Because your peak meter is only looking at the samples, and the loudest part of the waveform usually falls between two of them. Here is the cleanest case, and you can work it out on paper. Take a sine at a quarter of the sample rate — 11,025 Hz at 44.1 kHz — and line the samples up at 45 degrees into each cycle. Every sample lands on ±0.7071 of the peak. The meter reads 20 × log₁₀(0.7071) = −3.01 dBFS. The wave that comes back out of the converter touches full scale. Your meter was wrong by 3 dB and never blinked.

Real music is less extreme than that, but the direction is always the same: true peak is equal to or higher than sample peak, never lower. Then a lossy encoder gets hold of it, throws away data, and reconstructs something with peaks in slightly different places and slightly different heights. A file mastered dead on 0 dBFS reliably comes back over. That is the whole argument for −1 dBTP, and [true peak](https://gazillionindustries.com/true-peak/) goes through the measurement properly. [Headroom](https://gazillionindustries.com/headroom-in-mixing/) and [clipping](https://gazillionindustries.com/what-is-clipping/) cover what happens when you ignore it.

A limiter that oversamples its detector can see those between-sample peaks and hold the true ceiling rather than the sample ceiling, at the cost of CPU and a little more latency. If yours has a true-peak switch, that is what it does. [Oversampling](https://gazillionindustries.com/oversampling/) explains the mechanism.

## Where each one sits in the chain

Cuts first, then the compressor, then tone and weight, then the ceiling. Each stage changes what the next one sees, which makes the order structural rather than a matter of preference. A low cut placed before the compressor stops a 30 Hz rumble from steering the gain on every bar, and moving that same cut after it changes nothing about the rumble and everything about the compression.

The interactions worth knowing: an EQ boost before a compressor gets partly undone by the compressor, because you made the thing louder that it is already pulling down. A clipper or saturator before the limiter shortens the peaks the limiter would have had to chase, so the limiter works less and the average comes up more — [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) has the numbers. A compressor after a limiter gets a signal whose peaks have already been flattened, so its detector no longer relates to the performance at all.

Two more. Parallel routing sidesteps the trade entirely by keeping an uncompressed copy in the balance, which is the subject of [parallel compression](https://gazillionindustries.com/parallel-compression/). And a compressor keyed from another track is a different job again, with its own timing rules, covered in [sidechain compression](https://gazillionindustries.com/sidechain-compression/). For the full stack on a drum bus in order, see [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/), and get the levels right on the way in with [gain staging](https://gazillionindustries.com/gain-staging/).

## The stock compressor and limiter in your DAW

Every DAW ships both, and in several of them the distinction is drawn differently enough to confuse people who move between hosts.

**Ableton Live.** Compressor for the general job, Glue Compressor for the bus, Limiter for the ceiling. Live's Limiter has a ceiling control and a lookahead selector, and it reports its latency to the transport. [Glueing a drum bus in Live](https://gazillionindustries.com/drum-bus-compression-in-ableton-live/) walks the settings.

**Logic Pro.** Compressor, with switchable circuit types that change the timings and the knee under the same controls. Two separate limiters: Limiter for a plain ceiling, Adaptive Limiter for the louder, more processed result.

**FL Studio.** Fruity Limiter is both tools in one plug-in, with COMP and LIMIT as separate tabs, which is why FL users often insert it twice. Maximus is the multiband version when one band will not do the job — see [multiband compression](https://gazillionindustries.com/multiband-compression/) before you reach for it.

**Reaper.** ReaComp for the shaping, ReaLimit for the ceiling, and ReaComp's ratio goes high enough to limit if you want it to.

**Cubase, Studio One, Bitwig, GarageBand.** All carry a Compressor and a separate limiting stage — Limiter, Maximizer, Peak Limiter, depending on the host. Names vary; the two jobs do not.

**What actually differs between hosts** is the latency handling rather than the plug-ins. A limiter with lookahead reports a delay and the host slides everything else to match it, which is invisible on playback and audible the instant you play into it: 1.5 ms of lookahead is 72 samples at 48 kHz and 144 at 96 kHz, and while tracking you hear all of it. Most hosts have a low-latency monitoring mode that drops the offenders off armed tracks. Use it while you record, switch it off before you judge anything.

The other difference is the master meter. A meter reading sample peak cannot tell you what a true-peak meter reads, for the reason in the section above: the loudest part of the wave usually falls between two samples. A host meter showing −0.2 dBFS and a true-peak reading over 0 dBTP can be describing the same file. Believe the measurement that says dBTP.

## How to check any of this in your own session

Four tests, none of which take longer than the argument about them.

- **Match the level before you judge.** Bypass, note the average on a meter, engage, and pull the output down until it reads the same. Then compare. Make-up gain flatters everything for about three seconds and fools everyone for about three years.

- **Watch the meter return.** On a compressor the gain reduction should come back to zero between hits at the tempo you are working at. If it never gets home, the release is too long for the material.

- **Bounce and measure.** Render eight bars, drop the file back in, and read peak and average off a meter. Compare them against the same eight bars with the chain bypassed. Crest factor before set against crest factor after is the whole story in two numbers.

- **Look at the waveform.** Zoom in on a snare. If the front of the hit has gone square-topped and the body has swollen, the limiter is doing what the compressor should have done.

Then play it on a phone and in a car, at the same volume as the version you started with. Small speakers punish a flattened crest factor faster than anything in the room, because there is no low end left to carry the weight and the only thing selling the hit is its front edge.

## If the destination turns everything down

Level is only yours until something normalizes it. If the thing playing your track measures loudness and matches every track to the same one, the decibels you bought come straight back off at playback, and the peaks you spent on them do not come back. Say you pushed 3 dB harder and got 3 dB louder. Turned down 3 dB at the other end, a file that left you at −1 dBTP with a 6 dB crest factor now plays at −4 dBTP with a 6 dB crest factor. The transients are still missing and the loudness has been taken back.

So run the comparison that implies, before you decide how hard to push. Bounce the same mix twice, once limited hard and once limited lightly, then pull the loud one down until the two measure the same average level. Whatever difference survives that is the only difference anybody on a normalized system will ever hear. Sometimes it is denser and better. Often it is flatter, and the transients went for nothing. [How loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/) takes that decision end to end.

## Where each one costs you

A compressor costs you dynamics in exchange for consistency, and the cost shows up as a performance that stops moving. A limiter costs you transients in exchange for level, and the cost shows up first on drums: the snare goes flat, then the kick, then everything develops a soft ceiling you can hear. Limiters also pump when pushed, because a fast attack and a slow release hold the whole mix down after every peak.

Both flatter themselves the same way, through make-up gain. Level-match before deciding.

## What each failure sounds like

Six of them, and each has a signature you can learn to name.

**Attack too fast on a compressor.** The kit gets smaller and moves backward in the room while the meter says it is working hard. Sticks lose their tick; the kick loses the click on the beater. The fix is upward: 20, 30, 50 ms until the front comes back. [What a transient is](https://gazillionindustries.com/what-is-a-transient/) covers the part you are protecting.

**Release too long.** The bar sags. Gain never gets back up between hits, so the second half of every phrase sits lower than the first and the hats disappear behind the snare. Do the tempo division and set it by arithmetic first, then adjust by ear.

**Release too short on low content.** A growl or a buzz that arrives with the kick and leaves with it. The gain is tracking inside the waveform instead of over it.

**Too much compression.** The room comes up and keeps coming up. Cymbal tails breathe, the noise floor rises between hits, and a live kit starts to sound like it was recorded in a corridor. Pleasant for one bar, exhausting for three minutes.

**Limiter over-pushed.** First the snare loses its crack. Then the kick gets shorter. Then the entire mix develops a lid you can hear as a flat, stationary top edge, and turning it up makes it worse instead of louder. [How to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) goes further into where the line sits.

**Limiter distortion on bass.** The low end thickens and smears, the kick loses its definition, and the whole bottom becomes one continuous tone rather than separate events. A limiter chasing a 40 Hz cycle has to move within 25 ms or distort it, and at that speed it is rewriting the waveform. A high-pass on the detector, or less low end into it, fixes what more limiting will not.

## When neither one is the tool

Some level problems answer to an edit rather than a detector. One shouted word jumping 8 dB above the line is a clip-gain job: pull that region down 6 dB and the compressor never sees it, and the setting that suits the rest of the take survives intact. A kick that wanders across eight bars is the same job done eight times, and it takes about a minute.

A hit with no front is a shaping problem rather than a level one, and a transient designer adds attack where a compressor can only fail to remove it — [transient shaper vs saturation](https://gazillionindustries.com/transient-shaper-vs-saturation/) sets those two against each other. A section that is loudest because it is fullest is an arrangement problem, and no detector can hear how many parts are playing. Get the levels sane on the way in with [gain staging](https://gazillionindustries.com/gain-staging/) and there is less for either box to repair.

## What each one costs

Nothing, if you want it to. Every DAW named above includes a compressor and a limiter that can finish a record, and plenty of records have been finished on them. What the paid market mostly sells on top is character, metering and speed, and those are real things to want — just not things you need before you can start. [Best free compressor plugins](https://gazillionindustries.com/best-free-compressor/) covers what to look for when the budget is nothing.

From us: [DRUGS](https://gazillionindustries.com/drugs.html) is free, and it is the compressor half of this page. [BEEFY](https://gazillionindustries.com/beefy.html) is $19 and covers the stage between them — saturation and soft clipping, with SOFT CLIP and LIMIT as its two output switches.

What to look for when the budget is nothing: [best free compressor plugins](https://gazillionindustries.com/best-free-compressor/).

## Questions people ask

### Should I use a compressor or a limiter?

Both, in that order, for different reasons. The compressor shapes how the performance moves. The limiter stops the output exceeding a ceiling. A limiter used as a compressor will flatten the life out of a track, and a compressor used as a limiter will let peaks through.

### At what point does a compressor become a limiter?

Conventionally around a 10:1 ratio, with a fast attack. A brickwall limiter behaves as though the ratio were infinite, so nothing at all passes the ceiling.

### Should the compressor come before the limiter?

Yes. Shape first, catch what is left afterward. A limiter in front of a compressor gives the compressor a signal whose peaks have already been flattened, so its timings no longer relate to the performance.

### How much limiting is too much?

When the drums lose their front edge and the quiet bars start moving with the loud ones. One to three decibels of gain reduction on peaks is normal; anything much past that is a mix problem being solved in the wrong place.

### Is a limiter just a compressor with a high ratio?

Almost. The ratio is the definition, but the attack is what makes it work: a limiter has to catch a peak that lasts a handful of samples, which is why most of them delay the audio so the detector sees the peak first. Set a compressor to 20:1 with a 0.1 ms attack and you have something close, minus the lookahead and minus the guarantee.

### What ceiling should I set on a limiter?

−1 dBTP for anything that will be encoded for streaming or sent as a lossy file. If the destination is a WAV that nobody will re-encode, −0.3 to −0.5 dBFS is fine. Set the ceiling once and leave it; the control you actually work with is the input.

### Does a limiter add latency?

Usually, because lookahead is a delay. A 1.5 ms lookahead is 66 samples at 44.1 kHz. Your DAW compensates for it during playback, so the only time it bites is tracking through the plug-in while you monitor. Turn lookahead off or bypass the limiter while recording.

### What is the difference between a limiter and a clipper?

A limiter turns the gain down for as long as the peak lasts, so the shape of the waveform survives and the level around it moves. A clipper cuts the top off and leaves everything else alone, so nothing moves and the peak itself is replaced by harmonics. Clipping buys more level per decibel and costs distortion instead of movement, which on drums is often the better trade. See [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

### How much gain reduction should a compressor do?

Three to six decibels on the loudest parts, on most material, with the meter returning to zero between them. Less than 2 dB and you may as well not have it in; more than about 8 dB and you are making a sound rather than controlling one, which is legitimate but should be a decision.

### Is a maximizer the same as a limiter?

It is a limiter with the input gain and the output ceiling linked, so one control pushes harder into a fixed lid. Same processing, fewer decisions, and easier to overdo because turning it up never makes anything read over.

### Can a compressor stop clipping?

Not reliably. A compressor at a musical ratio still lets the signal rise as the input rises, so a peak 6 dB over at 4:1 still comes out 1.5 dB over. It reduces how often you clip and how badly. Only a brickwall guarantees the ceiling.

### Do I need a limiter if I am not mastering?

On a mix bus while you work, no, and it is better left off so you hear the real dynamics. On anything you export and send to somebody, yes, if only as insurance against an unnoticed over. Set it to −1 dBTP and let it do nothing most of the time.

### Should I put a limiter on the drum bus?

Only to catch strays. One or two decibels on the very loudest hits keeps the bus from feeding the mix something stupid, and that is the whole job. Anything more and you are competing with the compressor that should be shaping the kit, and the two of them will pull in different directions all session.

### Why does my limiter make the drums sound smaller?

Because it is removing the part that made them sound big. The front edge of a hit is a few milliseconds long and 6 to 12 dB above everything around it, and shaving it flattens the crest factor that your ear reads as impact. Get the peaks down with saturation or a clipper first, so the limiter has less to take.

### Compressor or limiter on vocals?

Compressor, nearly always, and often two in series: one with a slow attack and a gentle ratio holding the overall level, one faster catching the consonants. A limiter on a vocal is for the one shouted line that jumps 8 dB, not for the performance.

### Can I skip the compressor and just use a limiter?

You can, and the track will get louder and stop moving. A limiter acts only on what crosses the ceiling, so pulling 5 dB out of one means the ceiling is deep inside the performance and every peak in the bar is being held down by a fast detector. The same 5 dB taken as 3 dB of compression plus 2 dB of limiting keeps the shape of the hits, because most of the work happened slowly.

### What does 4:1 actually mean?

Four decibels of input above the threshold produce one decibel of output above it. A peak 8 dB over comes out 2 dB over, which the meter reports as 6 dB of gain reduction. The general form is: gain reduction = decibels over × (1 − 1 ÷ ratio). Every marking on the dial is that same division.

### Where should I set the threshold?

Low enough that the hits you want handled cross it and the rest do not. In practice, bring it down until the meter moves 3 to 6 dB on the loudest hits and comes back to zero between them. If it never reaches zero, either the threshold is too low or the release is too long; shorten the release first, because that tells you which.

### Should the compressor go before or after EQ?

Cuts before, boosts after, as a default. A low cut in front stops rumble steering the gain every bar. A boost in front gets partly undone, because you just made louder the thing the compressor is already pulling down: 4 dB of boost landing above the threshold at 4:1 survives as 1 dB. The same boost after the compressor keeps all four.

### What attack and release should I use on drums?

Start at 30 ms attack, and take the release from the tempo: 60000 ÷ bpm gives the quarter note in milliseconds, then halve it twice. At 92 bpm that is 652, 326 and 163 ms; at 140 bpm it is 429, 214 and 107 ms. Then move the attack by ear until the stick returns, and keep the release longer than one cycle of your lowest content — 20 ms at 50 Hz, 25 ms at 40 Hz.

### Why did my mix get quieter when I added a limiter?

Because a limiter only attenuates. Put the ceiling below your peaks, touch nothing else, and the output can only come down. Level arrives from the input or gain control pushing the signal into a fixed ceiling, and on plug-ins where the two are linked a single knob does both. If your peaks were already under the ceiling, the limiter is doing nothing at all, which is the right state for it most of the time.

### What is the difference between peak and RMS compression?

What the detector measures. Peak detection follows the instantaneous value and catches the spike at the front of a hit. RMS averages over a window of a few milliseconds upward and answers to the body behind it. On a sine the two readings differ by 3.01 dB, because RMS sits at 0.7071 of peak and 20 × log₁₀(0.7071) = −3.01; on drums the gap is wider, so the same threshold does less work in RMS mode.

### How many compressors is too many?

Count the gain reduction rather than the plug-ins. Two stages at 3 dB each is an ordinary chain and sounds gentler than one at 6, because ratios multiply in series while each detector decides with less at stake. Past about three stages nothing is really in control: each one is reacting to the last one's output, and a change at the front re-times everything behind it.

### Should the limiter go on the master or the mix bus?

One limiter, last, wherever the chain ends. Two in series is the common accident — one on the mix bus and one on the master — and the second gets a signal whose peaks have already been flattened, so it works on the body of the mix instead of the peaks it was put there to catch. If you want one on the bus while you work, set its ceiling high enough that it never engages.

### Compressor or limiter on bass?

Compressor, with a release long enough to stay outside the waveform. One cycle of 40 Hz lasts 1 ÷ 40 = 25 ms, so a 5 ms release travels up and down five times inside a single cycle and you get distortion instead of level control. A release of 80 to 150 ms clears that cycle three times over. High-pass the detector if it offers one, and leave the ceiling to the end of the chain.

### Does a limiter make a track louder by itself?

No. It makes room for you to make it louder. The limiter removes the peaks that were stopping you raising the level, and the level itself comes from input or output gain. The number to watch while you do it is crest factor, peak minus average: if the average climbs and the peak holds, it is working, and if both climb you are only turning it up.

## What DRUGS does

DRUGS is our free bus compressor for drums, and it carries both halves of this article. **DOSE** is the compression: it moves the transfer curve, the knee, the attack and the release together, making a drum bus denser rather than louder. **GAIN** adds 5 dB after the compressor and before the ceiling. **LIMIT** is a zero-latency soft ceiling at −0.3 dBFS on the output, with a clip indicator; it attenuates only, and it is transparent below about −0.9 dBFS. Both are on when it opens.

In the order this page describes, it is the early stage. Put it on the drum bus, turn DOSE up until the room comes up under the hits, and set your own true-peak ceiling at the end of the chain, where the decision belongs. The soft ceiling on its own output is there to keep the bus itself in bounds on the way to the mix, which is a smaller job than the last plug-in on a master. [One-knob compressors](https://gazillionindustries.com/one-knob-compressor/) covers what a single macro gives up in exchange for that speed.

Three details from that panel matter for this page. MIX is dry/wet with zero latency anywhere in the path, so the dry copy stays sample-aligned with the wet one and a parallel blend does not comb-filter at any setting. Release is adaptive with no user control: a transient gets the shorter time, so gain recovers inside the gap where pump would be audible, and sustained material gets the longer one. Auto-makeup is applied after the gain cell, so setting level cannot disturb the dynamics.

Two boxes, one number between them. Now you know which one belongs at the end.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
