# How to saturate drums

> How to use saturation on drums: what it does to kicks, snares and the drum bus, where to put it, how much to use, and how to keep cymbals from turning harsh.

Source: https://gazillionindustries.com/how-to-saturate-drums/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The drums came out of the pack spotless. Every hit sharp, every hit even, and the whole kit about as warm as a hospital hallway at 4 a.m.

Saturating drums means driving them into gentle distortion so they pick up harmonics, lose a little peak, and sound denser and more present, especially on small speakers. Put it on the kick and snare for character, on the drum bus to pull the kit together, or on a parallel copy you blend in under the clean drums. Use less than you think, watch the cymbals, and compare at matched loudness.

## The short version

- **Kick**: harmonics so the body reads on small speakers

- **Snare**: thicker body, more crack; takes more drive

- **Drum bus**: density and glue; watch the hats

- **Parallel**: drive a copy hard, blend it under

- **Order**: before or after compression; both work

- **Amount**: until you hear it, then back off

- **Check**: at matched loudness, on a phone too

**BEEF at 8.** Barely doing anything — useful as the reference you A/B against.

**BEEF at 96.** Where the plug-in stops being polite. Most settings that sound right in solo are about half this.

## What saturation does to a drum

Saturation adds and takes. It adds harmonics, new frequencies stacked above the ones the hit already has. And because the curve flattens as it's pushed, it takes a little off the peaks, which brings the body of each hit up toward its front edge.

The shape of the curve sets the color. Symmetric curves add mostly odd harmonics and tend to sound edgier; asymmetric curves add even harmonics too and tend to sound rounder. Either way: more to hear, less spike.

## Crest factor is the number that actually moves

The measurable thing saturation does is close the gap between a drum's peak and its average. That gap is crest factor, and on a clean kit it is wide: the stick is in contact for a few milliseconds and the rest of the bar is decay. Meters read the milliseconds. Ears read the rest.

Here is the arithmetic on a real pass. The drum bus peaks at −1.0 dBFS and reads −18.0 dBFS RMS, so crest factor is 17.0 dB. Leave the output trim alone and drive it until the peak reads −4.0 dBFS and the RMS reads −17.4 dBFS: the peak fell 3.0 dB, the average rose 0.6 dB, and crest factor is now 13.4 dB.

Now put the 3.0 dB back on the output. Same peak you started with, 3.6 dB louder on average. That 3.6 dB is the whole trick, and it is why saturated drums survive a limiter that flattens clean ones. More in [crest factor](https://gazillionindustries.com/crest-factor/).

## Where the new harmonics land

Harmonics are exact multiples of the frequency that made them, so you can work out in advance where a saturator will put its energy.

Take a kick with its fundamental at 55 Hz. The harmonics sit at 110, 165, 220, 275, 330, 385 and 440 Hz. The eighth of them is concert A, three octaves up, and a speaker with no hope of reproducing 55 Hz plays it without complaint — the whole reason a saturated kick reads on a laptop. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/). A snare with its body around 200 Hz gets 400, 600, 800 and 1,000 Hz, straight into the band your ear is most sensitive in, which is why a snare grows more than a kick from the same drive.

Now a hat with energy at 12 kHz in a session running at 44.1 kHz. Its second harmonic wants 24 kHz. Nyquist is 22.05 kHz, so there is nowhere to put it and it folds back to 44.1 − 24 = 20.1 kHz. The third wants 36 kHz and returns at 8.1 kHz. The fourth wants 48 kHz and returns at 3.9 kHz.

None of those is a multiple of 12 kHz. They are inharmonic tones planted in the top end, and they move the wrong way when the hat changes pitch. That is the metallic edge people call harshness. Run the saturator at 4x oversampling and the internal rate becomes 176.4 kHz, Nyquist moves to 88.2 kHz, all three harmonics fit, and the downsampling filter removes them on the way back. See [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) and [oversampling](https://gazillionindustries.com/oversampling/).

## Kick

The kick has to be heard where it can't be felt. A little saturation puts harmonics above the body, where a laptop can play them. Too much and the low end goes woolly as the sub itself distorts. If that happens, saturate a copy with the lows cut out and blend it back under the clean kick.

## Snare

Snares usually take more heat than kicks, because most of what makes a snare a snare lives in the mids. Drive it until the body fattens and the crack comes forward. Stop before the crack turns to paper (you'll know; it sounds like a stapler).

## Hats and cymbals

Hats are where drum saturation goes wrong first, and it goes wrong quietly. A closed hat is broadband noise above 6 kHz with no fundamental for the harmonics to hang on, so most of what the curve makes from it either lands above the audible band or folds back as something inharmonic.

Keep them out of it. If the kit needs brighter hats, use EQ, where you pick the band. Saturate them anyway and you want the gentlest curve you own, oversampling on, and a check against bypass on headphones — the fold-back tones sit quietly under the hat itself, and a room will hide them.

## The drum bus

Bus saturation is a group decision. Every hit pushes the curve for everything playing at that moment, so when the kick lands, the snare and hats get driven with it. That shared push is the glue on a good day and the grit on a bad one.

A little on the whole kit pulls the hits and the room closer together. A lot turns cymbals into sandpaper on every downbeat. If the top end gets harsh, keep the hats and cymbals out of the saturated bus, or darken what goes into it. For the compression side of the bus, see [drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/).

## Two hits at once: what the bus really adds

A bent curve does not handle the kick and the snare separately. It handles their sum, and two frequencies through one nonlinearity produce their sum and their difference on top of their own harmonics.

Work it through on a backbeat. A 55 Hz kick and a 200 Hz snare body landing together give 200 + 55 = 255 Hz and 200 − 55 = 145 Hz. The kick's own second harmonic, 110 Hz, works against the 200 to give 310 Hz and 90 Hz. Not one of those four is a multiple of 55 or of 200.

Intermodulation is the whole difference between saturating a bus and saturating each drum by the same amount. Per-element drive only adds content related to the thing that made it; bus drive adds a cloud of unrelated low-mid energy that shows up only when two drums coincide, which on most beats means 2 and 4 and nowhere else. Records are made of that cloud, so use it on purpose: drive a bus less than you would a single drum, and when the low mids crowd, move the drive down to the channels. [Harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) has the longer version.

## Parallel saturation

Keep the clean drums and add the burnt ones.

- Send the drums to a return track.

- Put the saturation on the return and push it harder than you would on the channel.

- High-pass the return if the kick's sub starts to smear.

- Blend the return in under the dry drums until the kit thickens, then pull it back a touch.

The front edge stays with the dry drums and the density comes from the return, so you can push the saturation further than an insert would allow.

Or put [BEEFY](https://gazillionindustries.com/beefy.html) on the drum bus and turn up BEEF. The demo on the page is 28 seconds.

## Routing the parallel path, by DAW

The blend works the same everywhere. What differs is whether the send moves with the fader, and whether the two copies stay in time.

- **Ableton Live**: Send each drum channel to a Return, or use one Audio Effect Rack with two chains and set the chain volumes — the Rack keeps the blend in a single device you can save.

- **Logic Pro**: A Send creates an Aux. Sends are post-fader by default, so riding the drum fader rides the saturated copy with it. Switch to pre-fader to lock the blend.

- **FL Studio**: Route the drum mixer track to a second mixer track as well as to the master, and set the amount with the send knob on the routing arrow.

Then the part that bites. An oversampling saturator adds latency, the host delays the dry path to match, and the two land together — until something breaks that compensation. A 1 ms offset between the copies does not read as an echo. It reads as a comb filter with its first null at 1 / (2 x 0.001) = 500 Hz and another every 1 kHz above, and it sounds like the kit arriving down a length of pipe.

Test for it by muting the dry path. If the return alone sounds healthy and the blend sounds thinner than either half, the problem is alignment, not taste. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) covers that, and [parallel saturation](https://gazillionindustries.com/parallel-saturation/) goes deeper on the blend.

## Before or after compression?

Both orders work, and they sound different. Saturation first means the compressor reacts to peaks that are already softened, so it works less and the kit gets dense early. Saturation after means a punchy compressor setting, with its slow attack, hands the curve a sharper front edge, so every hit drives it harder. Try both and keep the one you would rather listen to.

## Tape, tube or clipper?

The name on the plugin matters less than the curve and how hard you hit it. Tape-style saturation tends to soften transients and the top end. Tube-style is usually described as rounder. Clipper-style is the most aggressive on transients, which makes it the most obvious on drums. Hit any of them softly and they sound more alike than the marketing suggests.

## Where saturation sits in the rest of the chain

Order decides what each device gets handed. Five placements are worth being deliberate about.

- **After a high-pass, not before.** Rumble under 30 Hz you cannot hear still drives the curve and intermodulates with everything you can. Cut it first and the same drive setting sounds cleaner for free.

- **EQ before, for the sound going in.** Boost 3 kHz ahead of the saturator and the saturator works hardest at 3 kHz. Boost it afterward and you have only turned up what came out.

- **Transient shaper before, usually.** Sharpen the attack first and the curve has a bigger peak to round off, which buys more character per dB. [Transient shaper vs saturation](https://gazillionindustries.com/transient-shaper-vs-saturation/).

- **Clipper after, limiter last.** A saturator that already took 3 dB off the crest leaves the clipper less to do and the limiter less again. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/).

- **Reverb sends pre-saturation.** Send after the drive and the harmonics go to the room too, and the room turns gritty before the drums do.

The full argument is in [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/).

## How much

Until you hear it, then less. Saturation adds level, and louder always sounds better for a few seconds, so **level-match against bypass before you judge**. Then play it on a phone. If you notice the saturation before you notice the drums, back off.

If you've crushed the drums already, [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/) covers the peaks, and [how to make drums hit harder](https://gazillionindustries.com/how-to-make-drums-hit-harder/) covers everything around them.

## Level-match it with a number, not a feeling

Matching by ear matches the wrong quantity. Saturation raises average level more than it raises peak level, and average is what your ear reports. Read it off a meter instead.

- Put a loudness meter after the saturator and loop four bars.

- Read short-term loudness with the saturator bypassed and write it down.

- Engage the saturator and read it again.

- Subtract, and pull the saturator's output trim by that many dB.

- A/B now, and not before.

A worked one: bypassed reads −14.2 LUFS, engaged reads −11.6 LUFS, difference 2.6 dB, so the output comes down 2.6 dB. Judge it there. A setting that only wins while it is 2.6 dB louder has not won anything. [Gain staging](https://gazillionindustries.com/gain-staging/) covers the trims and [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/) covers why the ear falls for it every time.

## Hear exactly what you added: the null check

You can isolate the saturation on its own in about two minutes, and it ends more arguments than A/B does.

- Bounce four bars of the drums with the saturator bypassed.

- Level-match as above, then bounce the same four bars with it engaged.

- Drop both bounces onto new tracks, aligned to the same start point.

- Flip the polarity of the dry bounce.

- Play them together and turn it up.

What is left is everything the saturator added and everything it removed, with the drums subtracted out. Listen to what it is made of. Harmonics that follow the kick and the snare are what you were buying. A wash of hat fizz, a ring that stays at one pitch whatever the drums do, or a steady hiss under everything are what you were not.

Run it once per saturator you own, at a low setting and a high one. Ten minutes of that teaches you more than a year of switching presets.

## What it sounds like when it goes wrong

Each of these has one cause, and most are fixable without turning the whole thing down.

- **Woolly, undefined low end**: The sub is distorting and filling 80 to 200 Hz. High-pass into the saturator, or saturate a copy with the lows removed.

- **Fizz that arrives on the downbeat**: The kick is driving the bus and the hats are riding along. Keep the hats out of the saturated bus.

- **A snare like a stapler**: The crack has gone past body into paper. Back the drive off until the fundamental comes back underneath it.

- **A metallic ring that will not tune**: Aliasing. Turn oversampling on, or take the top end down before the saturator instead of after.

- **Shorter, not bigger**: You flattened the peak and never took the makeup gain. Put the level back and listen again.

- **Thin and hollow with the return up**: The parallel copies are not aligned. Check delay compensation before touching the blend.

- **Big in the room, small on a phone**: You matched peak instead of loudness, and what you added was low end the phone cannot play.

- **Big on a phone, thin on a system**: The harmonics grew and the fundamental did not. Check a saturated kick on both.

## What it costs

Saturation charges for what it gives. The bill arrives in four places.

**Transient length.** Every dB of peak reduction is a dB of front edge you no longer have, and on a beat where the kit carries the groove alone that edge is the performance. If you want the density and the edge both, take the density in parallel.

**Top-end patience.** Added content above 6 kHz is the first thing that stops being pleasant on a long listen: exciting for thirty seconds, tiring by the third track. Judge a saturated kit inside the arrangement, never in solo. [Why is my mix harsh](https://gazillionindustries.com/why-is-my-mix-harsh/) is the same problem one stage later.

**Decisions you can no longer make.** Once crest factor is down, the limiter has less to grab and the master has fewer moves left. Saturate the bus hard, then ask for the mix to be louder, and what remains is EQ and optimism. [Headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

**CPU, if you oversample.** 4x means four times as many samples through the curve, plus a filter at each end. Eight instances across a kit is eight times that, which is a decent reason to saturate the bus once rather than every channel twice.

## A sampled break takes it differently

Programmed drums and a break off a record want opposite amounts, and it is the single biggest reason a setting that worked on one beat sounds wrong on the next.

A break has already been through a chain — a room, a desk, tape, a pressing, and whatever the sampler did to it. It arrives with harmonics, a noise floor and a top end that is already rolled off. Adding a lot of saturation stacks a second set of the same artifacts onto the first, and the result gets cloudy quickly: the hats smear, the room comes forward, and the hit gets shorter without getting bigger.

Programmed drums are the opposite. They are clean, identical every time, and have no harmonic content the sampler did not put there, so saturation is adding something genuinely missing. This is where you can push it well past where it feels sensible and have it still sound like a record rather than an effect.

The rule of thumb that survives contact with real sessions: on a break, use saturation for weight and keep it low. On programmed drums, use it for character and be generous.

## Check the low end before you commit

Saturation generates harmonics above the fundamental. On a kick that means new content in the low mids, and low mids are what small speakers use to imply a bass note they cannot actually reproduce.

The consequence is counter-intuitive and catches people out constantly: a saturated kick sounds bigger on a laptop and can sound thinner on a system, because the fundamental has not grown and may have been reduced slightly while the harmonics above it have. If you are checking on small speakers you will read that as an improvement every time.

So check a saturated kick on more than one playback before committing, and if the session lives or dies on sub weight, saturate everything except the element carrying it.

## Questions people ask

### Should I compress or saturate drums first?

Either works. Saturation first gives the compressor softer peaks to react to, so it works less. Saturation after lets a slow-attack compressor hand the saturator a sharper transient, so it bites harder. Try both on the same loop and keep the one you prefer.

### Is saturation just distortion?

Yes, mild distortion. Saturation is the gentle end of the same process: the waveform bends a little, adds harmonics and softens its peaks. Push the same curve harder and people start calling it distortion.

### How much saturation should I use on drums?

Enough that the drums sound thicker at matched loudness and still keep their front edge. If you notice the saturation before you notice the drums, back off.

### Does saturation work the same on sampled and programmed drums?

No, and it is the main reason one setting does not travel between beats. A break arrives with harmonics, noise and a rolled-off top already, so a lot of saturation just stacks the same artifacts twice. Programmed drums have none of that, so saturation is adding something genuinely absent and can be pushed much further.

### Should I saturate each drum or the drum bus?

Both, in different amounts. Per-drum drive only adds content related to that drum, so it stays clean higher up. Bus drive also makes sum and difference frequencies between drums that hit together — the glue people want and the low-mid mud they do not. Start gently on the bus, then add per-drum drive where a single element still needs character.

### Does saturation make drums louder?

It makes them louder at the same peak. Peak level falls as the curve flattens while average level holds or rises, so once you restore the peak with output gain the average is higher than it was. A 3 dB drop in peak with a 0.6 dB rise in RMS nets 3.6 dB of average level for the same meter reading.

### Why do my drums sound harsh after saturation?

Usually aliasing on the hats. Harmonics generated above half the sample rate fold back into the audible band at frequencies unrelated to the source, so they never sit in tune with anything. Turn on oversampling, keep cymbals out of the saturated path, or darken the signal before the curve rather than after it.

### Do I need oversampling for drum saturation?

On anything with hats or cymbals in it, yes. On a kick alone it barely matters: a 55 Hz fundamental would need its four hundredth harmonic to reach 22 kHz, and there is nothing that far up to fold. Leave it on for buses and snares, turn it off on sub-only material if CPU is tight.

### Should saturation go before or after EQ on drums?

EQ before the saturator changes what the saturator reacts to, so a boost becomes more harmonics at that frequency. EQ after only shapes the finished result. Cut before, boost after, is a serviceable default: high-pass first so inaudible rumble stops driving the curve, then fix the tone once you hear what came out.

### Can you saturate drums too much?

The tell is length, not tone. When drums start sounding shorter rather than bigger, the peak reduction has gone past what the added harmonics pay for. The second tell is a kit that sounds great for eight bars and tiring for thirty-two. Both mean back it off and take the difference in parallel.

### What is the difference between saturating and clipping drums?

Degree and shape. A clipper flattens anything above a set point and leaves everything under it untouched, so quiet material passes unchanged and transients take all of it. A saturator bends the curve gradually, so the whole signal gets a little of the treatment. On drums the clipper is the peak tool and the saturator is the tone tool.

### How do I saturate drums in Ableton Live?

Group the drums, put Saturator or Drum Buss on the group, and use the device's own dry/wet as the blend. For a true parallel version, send the group to a Return track and drive the Return harder. An Audio Effect Rack with two chains does the same inside one device if you want to save it as a preset. More in [saturation plugins for Ableton Live](https://gazillionindustries.com/saturation-plugins-for-ableton-live/).

## Stock plugins that do this

- **FL Studio**: Fruity Blood Overdrive; Fruity Soft Clipper

- **Ableton Live**: Drum Buss (Crunch); Saturator

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

## What BEEFY does

BEEFY is our saturation and loudness plugin. Put it on the whole drum bus to pull the hits and the body closer together, or give a kick or a snare its own helping.

**BEEF** is the main control: more weight, density and loudness as it goes up. **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge. **SOFT CLIP** opens switched on and handles the initial gain staging, and **LIMIT** holds the output peaks instead if you prefer. For parallel saturation, run it on a return track like any other insert.

Starting points rather than presets, because the amount depends entirely on what you feed it. On a drum bus, keep BEEF low enough that bypass and engaged still sound like the same kit, then level-match and decide. On a single snare, further, because the mids take it. On a parallel return, further again, because the dry drums are still holding the front edge. Find the amount with BEEF first, then move COOK — same drive, different top end.

The two shots above are the range: BEEF at 8 is the reference you A/B against, BEEF at 96 is well past where most drum settings live. It runs as AU, VST3 and standalone on Mac and Windows, so every routing note above applies to it unchanged.

Same drums, same pack. They just don't sound like a hospital hallway anymore.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
