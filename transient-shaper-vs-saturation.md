# Transient shaper vs saturation

> What a transient shaper does, what saturation does, why they push drums in opposite directions, which one your drums need, and how to use both in order.

Source: https://gazillionindustries.com/transient-shaper-vs-saturation/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A transient shaper and a saturator both get sold as the way to make drums punch, which is a little like selling a sprinter and a linebacker as the same hire. Both are athletes. They win by doing opposite things.

A transient shaper and saturation push drums in opposite directions. A transient shaper boosts or cuts the attack and sustain of each hit directly, so it makes the front edge sharper and the peaks taller relative to the body. Saturation softens the peaks and adds harmonics, so it makes the body denser relative to the peak. Use a transient shaper when drums sound flat and soft; use saturation when they sound thin and small; use both, in the right order, when they're both.

## The short version

- **Transient shaper**: sharper attack, taller peaks, no threshold

- **Saturation**: denser body, softer peaks, added harmonics

- **Flat, soft drums**: transient shaper

- **Thin, small drums**: saturation

- **Loudness**: shaping costs headroom; saturation gives it back

- **Both**: order decides whether the hit gets grit or stays clean

**SOFT CLIP** as the out stage, BEEF at 62.

## What a transient shaper does

A transient shaper follows the shape of each hit and splits it into the attack and what comes after. Turn the attack up and the front edge of every hit gets louder; turn the sustain down and the tail tightens. It works on the shape of the hit regardless of how loud it is, so there is no threshold to set. The result is a sharper, more pronounced hit, with taller peaks relative to the average level.

## How a shaper finds the attack without a threshold

Two envelope followers running at different speeds do the whole job. One tracks the signal quickly, the other slowly. Subtract the slow one from the fast one and what is left is large only while the level is climbing faster than the slow follower can keep up with. That difference is the attack detector, and nowhere in it does absolute loudness get a vote.

The speeds are the part worth carrying around. A one-pole follower with a 1 ms time constant covers 63.2% of a step in 1 ms; a 50 ms one takes fifty times as long to reach the same place. At 44.1 kHz that is 44 samples of memory against 2,205. A stick hit reaches full level inside a few dozen samples, so the fast follower is already there while the slow one is still climbing: big difference, big boost. A pad swelling over two seconds moves both followers together, the difference sits near zero, and the shaper does nothing at all.

Which also states the failure mode in one line. Anything that rises quickly reads as an attack, including a room mic catching the snare from six feet back and a bass note that happens to land on the downbeat.

## What saturation does

Saturation bends the waveform on a curve. The loudest parts bend most, so the peaks come down relative to the body, and the bending adds harmonics above the notes. The result is a thicker, denser, more present hit with a lower peak-to-average ratio. More in [saturation vs distortion](https://gazillionindustries.com/saturation-vs-distortion/).

## Where the harmonics from saturation land

Harmonics are whole-number multiples of whatever made them, so the new content is predictable before you hear it. Take a snare with its body around 190 Hz. Bend that waveform and energy appears at 380, 570, 760, 950, 1,140 and 1,330 Hz, every one of them inside the band your ear is most sensitive in. The hit grows for you well before it grows on a meter.

A transient shaper contributes none of that. It is a gain that moves, so its output is the input multiplied by an envelope, and multiplying in time smears in frequency. A gain change completing in 5 ms spreads each component by roughly 1 / 0.005 = 200 Hz. Wide enough to soften an edge, nowhere near enough to invent a partial that was not already there.

That is the clean dividing line between the two. One decides how much of the existing sound arrives and when. The other manufactures content.

## They move in opposite directions

That's the part that matters. A transient shaper raises the gap between peak and average; saturation and clipping shrink it. So a transient shaper makes drums punchier and uses up headroom, and saturation makes them denser and louder at the same ceiling. Neither is better. **They fix different problems.**

## The same hit, both ways: the arithmetic

Numbers settle this faster than adjectives do. Take one drum hit, simplified down to two parts: 5 ms of attack at full scale, then 495 ms of body 12 dB below it. Peak is 1.000, RMS across the whole 500 ms works out at 0.268, and crest factor is 20 x log10(1 / 0.268) = 11.4 dB. Hold that as the reference.

Now the transient shaper, attack up 4.0 dB. The attack multiplies by 10^(4/20) = 1.585 and the body does not move. The peak rises the full 4.0 dB. RMS goes from 0.268 to 0.295, a rise of 0.8 dB, because the attack is one part in a hundred of the hit's length. Crest factor is now 14.6 dB.

Now the saturator on the same hit, driven 6.0 dB harder into a soft curve. The body sits well below the knee and comes through the full 6.0 dB louder; the attack is deep in the bend and comes out 2.0 dB above where it started. Peak up 2.0 dB, RMS from 0.268 to 0.512, crest factor 7.8 dB.

Now match the peaks, which is the only comparison worth making. Pull the shaped version down 4.0 dB and its average level is 3.2 dB *below* the reference. Pull the saturated version down 2.0 dB and its average is 3.6 dB *above*. Same source, same ceiling, 6.8 dB apart.

Your kit will not produce those exact figures, because the size of the swing depends on how much of the hit is attack and how far the body sits under it. The direction is not negotiable, though, and the size is usually in that territory. [Crest factor](https://gazillionindustries.com/crest-factor/) is the number doing all the work here.

**BEEF at 96.** Past where most settings want to live.

## Which one your drums need

- **Flat, soft, blurry hits** that don't poke through: a transient shaper, attack up.

- **Thin, small, weightless hits** that poke through but sound cheap: saturation.

- **Boomy, ringing hits** that smear the groove: a transient shaper, sustain down.

- **Quiet drums** that hit the ceiling early: saturation or soft clipping, then more level.

## Cutting sustain buys the same punch without the headroom bill

Run the arithmetic on the shaper's other control and something useful drops out. Leave the attack alone and pull the sustain down 4.0 dB instead. The body goes from 0.250 to 0.158, RMS falls from 0.268 to 0.186, and crest factor lands on 14.6 dB — the identical figure the attack boost produced. The peak never moved.

So the two controls buy the same peak-to-average change and bill you differently for it. Attack up spends 4.0 dB of headroom. Sustain down spends 3.2 dB of average level, and you can put that straight back with an output trim. On anything headed for a limiter, sustain down is the cheaper of the two. See [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

It is not free, only cheaper. Sustain down takes the room with it, so a loop with its ambience baked in gets drier as it gets tighter, and there is no way to separate those two on a printed break.

**BEEF at 8.** The reference you A/B against.

[BEEFY](https://gazillionindustries.com/beefy.html) is a saturation and loudness plugin, not a transient shaper: it squeezes some space out of the peaks and adds body. The demo on the page is 28 seconds.

## Using both

- For hits with grit on the front edge: transient shaper first (attack up), then the saturator.

- For density with the attack restored: saturator first, then a transient shaper to bring back the edge.

- Match levels after each plugin so you judge the change, not the volume.

- Compare the two orders on the same loop and keep the one that fits.

Shaper first means taller attacks drive the saturator harder, so the hits get the most grit. Saturator first means the shaper can put back some of the edge the curve took off.

## Why the order changes the result, in numbers

Carry the same figures through both chains and the reason stops being a matter of taste. Shaper first delivers the attack to the saturator 4.0 dB hotter while the body arrives untouched, so the curve is bending the front edge almost exclusively. The grit lands on the stick and the body stays comparatively clean. That is the sound people mean by an aggressive kit.

Saturator first inverts the setup. The curve has already closed the gap between attack and body by 4.0 dB, so the shaper's two followers now see a smaller difference and produce less gain movement for the same knob position. You will need to push the attack control noticeably further to get the same visible change, and what you get back is an edge on top of a dense hit rather than a distorted edge.

One practical consequence. If you set the shaper first and then insert a saturator ahead of it later, the shaper's setting is no longer doing what it was doing. Reset it and dial it again rather than trusting the number on the knob.

## Where each one sits in the rest of the chain

- High-pass or corrective EQ first, so neither process works on content you are about to throw away.

- Transient shaper next, on the individual drum, where the hits are still separate events.

- Compression after that if you want glue, with an attack slow enough not to undo the shaping you just paid for. See [how to compress drums](https://gazillionindustries.com/how-to-compress-drums/).

- Saturation on the bus, where two hits at once feed the curve together and get bound to each other.

- Clipper, then limiter, last. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) covers that pair, and [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) covers the whole run.

The one ordering error that costs real loudness is a transient shaper after the clipper. The clipper has flattened the peaks on purpose; boosting attack behind it builds new peaks for the limiter to shave off again, and you finish quieter than you started with two processes fighting.

## Level-match with a number, not a feeling

Matching by ear matches the wrong quantity. Saturation raises average level more than peak level, and average is what your ear reports back to you, so the saturated version wins every blind test it has no business winning. Read it off a meter instead.

- Put a loudness meter last in the chain and loop four bars.

- Read short-term loudness with the plugin bypassed. Write it down.

- Engage the plugin and read it again.

- Subtract, and pull the plugin's output trim by that many dB.

- A/B now, and not one second before.

Say bypassed reads −13.4 LUFS and engaged reads −11.1 LUFS. The difference is 2.3 dB, so the output comes down 2.3 dB and you judge it there. [Gain staging](https://gazillionindustries.com/gain-staging/) covers the trims and [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/) covers why the ear falls for the louder one every single time.

## Measure the crest factor and the argument ends

You can tell which of the two a plugin is doing to your drums in about ninety seconds, without reading a manual. Crest factor is peak minus RMS, and every DAW ships a meter that reports both.

- Loop four bars of the drums with the plugin bypassed.

- Read peak and RMS off the meter and subtract. Say −3.1 dBFS peak and −16.4 dBFS RMS: crest factor 13.3 dB.

- Engage the plugin and read both again.

- Subtract again. A bigger number means it shaped. A smaller number means it saturated, clipped or compressed.

Do this once to anything sold as a punch box and you find out which of the two it is doing to your drums, whatever the name on the front panel suggests.

## Null the two against each other and listen to the difference

A null test separates the two processes more convincingly than any A/B, and it takes two minutes.

- Bounce four bars dry.

- Level-match as above, then bounce the same four bars with the plugin engaged.

- Drop both bounces on new tracks, aligned to the same start point.

- Flip the polarity of the dry bounce and play them together.

- Turn it up and listen to what is left.

A transient shaper leaves a burst at every hit and near-silence in between, because outside the attack window its gain is 1.0 and the two files cancel. A saturator leaves a continuous residue that follows the whole hit, made of harmonics that were not in the dry file at all. Once you have heard those two residues you will never confuse the processes again.

Beware one trap: if the plugin has any latency the host is not compensating, the null will be garbage and everything sounds like harmonics. A 1 ms slip puts a comb null at 1 / (2 x 0.001) = 500 Hz and another every 1 kHz above it. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) has the rest.

## What each mistake sounds like

Almost every complaint about these two processes is one of the following, and most are fixable without turning the whole thing down.

- **Punchier but quieter**: You boosted attack and the limiter is giving it straight back. Use sustain down instead, or shape before the loudness stage.

- **A click instead of a kick**: The attack boost is lifting the beater and not the body. Shorten the shaper's attack window, or lift the body with saturation instead.

- **Bleed arriving with every hit**: The shaper cannot tell a snare from the room mic catching it. Gate or tighten the source before the shaper, not after.

- **Pumping on a sustained part**: The shaper is riding gain on material with no clear attacks. It belongs on drums and plucks, not pads.

- **A snare like paper**: Saturation has gone past body into crack. Back the drive off until the fundamental comes back underneath it.

- **Woolly low end after saturation**: The sub is distorting into 80 to 200 Hz. High-pass into the saturator, or saturate a copy with the lows removed.

- **A metallic ring that will not tune**: Aliasing. If the saturator you are using offers oversampling, switch it on; otherwise take the top end down ahead of it. See [oversampling](https://gazillionindustries.com/oversampling/).

- **Drier as it gets tighter**: Sustain down is removing the room along with the ring. That trade cannot be undone on a printed loop.

- **Big in the room, small on a phone**: What you added was low end the phone cannot play. Check both before committing.

## What each one costs

Shaping costs headroom and honesty. Every dB of attack boost is a dB you hand to the limiter later, and the shaper exaggerates whatever timing error already exists in a layered kick — two samples of offset that nobody heard become two audible clicks. On a sampled break it also lifts the attack of everything sharing that hit, including a bass note and a stray vocal.

Saturation costs depth and reversibility. Pulling the peaks in removes the sense of a room around the kit, and past a certain drive every hit sounds equally important, which is the same as none of them being important. The harmonics are permanent once printed; no EQ takes them back out.

Both costs are worth paying. Neither is worth paying twice, which is what happens when you shape on the channel, shape again on the bus, and let a limiter sort out the mess. More in [how to mix drums](https://gazillionindustries.com/how-to-mix-drums/).

## Check it on a phone speaker

This is where the two part company for good. A phone speaker gives up on the low end long before the fundamental of a kick, so the body you bought with saturation arrives as its harmonics — the 380 and 570 Hz content from that snare survives even when the 190 Hz does not. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

The shaped version has a harder time. Phone playback chains protect their own drivers with limiting, and limiting reacts to exactly the peaks you just made taller. Much of the 4.0 dB you added to the attack gets handed back by the device, while the 3.6 dB of average level from the saturated version does not.

Bounce the loop, send it to yourself, play it out of the phone at arm's length. Two minutes, and it decides more arguments than a monitor ever has.

## Comparing the two orders in your DAW

You want to hear both orders inside thirty seconds, not rebuild the chain twice. Every host gives you a way.

- **Ableton Live**: Drag the devices past each other in the chain, or build both orders as two chains inside one Audio Effect Rack and flip between them with the chain selector.

- **Logic Pro**: Drag a plugin from one insert slot to another to swap the order, and save each version as a channel strip setting so you can go back.

- **FL Studio**: Reorder the effect slots on the mixer track, keeping the same two plugins and changing only which comes first.

Whichever you use, level-match both orders to the same short-term reading before you decide. The two orders rarely come out at the same loudness, and the louder one wins on sound alone about as often as a coin lands on its edge.

## Questions people ask

### Is a transient shaper just a compressor?

No. A compressor reacts to level above a threshold. A transient shaper reacts to the shape of each hit, boosting or cutting its attack and sustain whether the hit is loud or quiet. A slow-attack compressor can emphasize transients too, but less directly.

### Should I apply saturation before or after compression?

Both work. Saturation first gives the compressor softer peaks, so it works less. Saturation after lets the compressor's attack shape drive the saturator, so the hits bite harder. Try both.

### Does a transient shaper make drums louder?

It makes them punchier, but boosting the attack raises the peaks, which uses up headroom. Saturation or soft clipping is what lets drums sit louder at the same ceiling.

### Which is better for punch, a transient shaper or saturation?

Depends on which kind of punch is missing. If the hits are blurry and slow to arrive, the shaper fixes it. If the hits arrive fine but sound small and cheap once they get there, saturation fixes it. The test: solo the loop and ask whether the problem is the first 5 ms or the 495 after it.

### Do I need a transient shaper if I already use saturation?

Not usually, on a loud record. Saturation and clipping already win you the level, and once the record is near its ceiling a shaper mostly gives the limiter more work. Where the shaper earns its place is earlier, on one drum that sits too far back, or on a sustain cut to tighten a ringing tom.

### Can saturation replace a transient shaper?

For the sustain-down job, roughly yes: both bring the peak and the body closer together. For the attack-up job, no. Saturation cannot raise a peak above the curve it is bending; that is the one thing its shape prevents.

### Does saturation kill transients?

It rounds them. The peak comes down and harmonics go up, so the attack loses height and gains brightness, and the two changes partly cancel in perception. Drive it hard enough and the peak stops moving at all no matter how hard the stick lands, which is when a kit starts sounding played by a machine. [What is a transient](https://gazillionindustries.com/what-is-a-transient/) has more.

### Where should a transient shaper go in the chain?

Early. After corrective EQ, before compression, and well before any clipper or limiter. Put it last and you are building peaks for the loudness stage to take straight back off.

### Transient shaper on each drum or on the drum bus?

Individual drums, as a rule. On a bus the detector sees a kick and a hat at once and applies one gain to both, so a hat riding on the downbeat gets the kick's attack boost. Bus shaping is for a whole loop you cannot separate, and then in small amounts.

### Why do my drums sound punchier but quieter?

Because that is the trade, stated exactly. On the worked example above, the shaped version measured 3.2 dB lower in average level once both were pulled to the same peak. Either accept the level and shape less, or use sustain down, which buys the same crest-factor change without touching the peak.

### How much attack boost is too much?

When the beater, the stick or the click becomes a separate event from the drum, you have gone past it. Watch the meter as well: if a bus peaking at −6.0 dBFS reads −2.0 dBFS after the shaper, you have spent 4 dB and have 1.0 dB left against a −1.0 dBFS ceiling.

### Why does my transient shaper pump or breathe?

It is being fed material with no clear attacks, so the two followers never separate cleanly and the gain wanders. Pads, sustained bass and reverb returns all do this. Move it to the source with actual hits in it.

### Does a transient shaper work on 808s?

On the click, yes; on the tail, carefully. An 808 is a short attack on a long sine, so attack up sharpens the click and sustain down shortens the note, which is an arrangement decision rather than a mix one. For weight rather than edge, saturate it: see [how to distort 808s](https://gazillionindustries.com/how-to-distort-808s/).

### Does a transient shaper work on a full mix?

Barely, and not in your favor. On a finished mix the detector follows whatever is loudest, so you shape the kick and everything glued to it. Saturation on a mix behaves far more predictably, which is why the loudness stage is built from saturation, clipping and limiting rather than from shapers.

### Why did my transient shaper do nothing?

Three usual causes. The source is already limited or clipped, so there is no peak-to-body gap left for it to work on. The part has slow attacks the detector never triggers on. Or it is sitting after a compressor with a fast attack, which removed the transients before the shaper ever saw them.

## Stock plugins that do this

- **FL Studio**: Transient Processor (a paid add-on); Fruity Blood Overdrive

- **Ableton Live**: Drum Buss (Transients, Crunch); Saturator

- **Logic Pro**: Enveloper; ChromaGlow (Logic Pro 11 and later)

## What BEEFY does

BEEFY is the saturation side of this page: a saturation and loudness effect that adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is the main control, **COOK** sets the color, and **SOFT CLIP**, on by default, rounds off the loudest parts. If your drums need a sharper front edge first, put a transient shaper ahead of it.

A new instance opens with SOFT CLIP on, JUICE at 0 dB, BEEF at 30 and COOK at 30, which is a working starting point rather than a preset. **JUICE** sets how hard you are feeding the thing, and **LIMIT** is there as the alternative to SOFT CLIP when you want the output peaks held rather than rounded. On a drum bus, keep BEEF low enough that bypass and engaged still sound like the same kit, then level-match and decide.

Run the crest-factor check from above across it and the number goes down, every time, which is the whole point of putting it there. Mac and Windows, AU, VST3 and standalone, $19. More on the method in [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/) and [how to make drums hit harder](https://gazillionindustries.com/how-to-make-drums-hit-harder/).

Hire the sprinter, hire the linebacker. Just don't ask either one to play the other's position.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
