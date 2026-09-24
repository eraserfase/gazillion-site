# How to make lofi drums

> How to make lofi drums that sound dusty and played: soft hits, heavy swing, a low-pass, a little bit crush, saturation, bus compression and a dark room.

Source: https://gazillionindustries.com/how-to-make-lofi-drums/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

Clean drums sound like a new pair of sneakers: fine, bright, and a little embarrassing. Lofi drums are the pair that's been through two winters and a basement flood, and they're the ones everybody wants to borrow.

To make lofi drums, start with soft, simple hits or a drum loop, program them with heavy swing, then take the shine off: low-pass the top end, reduce the bit depth or sample rate a little, add saturation and a short room, compress the bus so it squashes gently, and bury a quiet noise bed underneath. Lower velocities and small timing drifts make them sound played rather than programmed.

## The short version

- **Sounds**: soft kicks, dull snares, quiet hats or a loop

- **Groove**: heavy swing, uneven velocities

- **Top end**: low-pass until nothing clicks

- **Crush**: a little bit or sample rate reduction

- **Glue**: saturation, bus compression, a short room

- **Noise**: a quiet bed under the kit

- **Tempo**: slow enough that the swing has room, usually 70 to 90 BPM

- **Order**: crush, filter, saturate, compress, room, noise

- **Check it**: phone speaker, then a car, then mono

**12 bit, full rate.** The quantisation is there but the top end is intact.

**4 bit at 8 kHz.** Bits make it grainy; the rate is what makes it clang.

## Pick the right hits

Lofi drums are quiet drums. Pick a kick with a soft, round thump instead of a click, a snare or rim with a dull crack, and hats that are more shuffle than sizzle. A sampled drum loop from an old record, or a loop that already sounds a little worn, gets you most of the way before any processing.

Soft has a measurable side, and it saves you an hour of filtering. A hat that reads as sizzle carries most of its energy above about 6 kHz and rings for 150 ms or more. A hat that reads as shuffle carries its energy between roughly 2 and 6 kHz and is gone inside 40 ms. A clicky kick has a spike somewhere around 2 to 4 kHz sitting on top of the 50 to 100 Hz body; a thumpy kick has the body and almost nothing on top. Audition five kicks and keep the one that already lacks the spike. Filter a clicky kick and what you get is a dull click.

This is why a loop off a record beats a folder of one-shots for the first pass. The loop arrives with the room, the bleed between mics and the tape already printed into it, and those three are the slow part to fake. You are buying a finished decision about how the kit sat in a space. Chop it, keep what you need, and treat the whole bar as one sound rather than four instruments — there is a longer walk through that in [how to chop a drum break](https://gazillionindustries.com/how-to-chop-a-drum-break/), and a famous worked case in [the amen break](https://gazillionindustries.com/amen-break/).

## Swing it and loosen it

Straight timing kills the feel. Push the offbeat hats late with a strong swing setting, then vary velocities so no two hats hit the same. Nudge a snare or two a few milliseconds off the grid. The goal is a drummer who's a little tired and very good. The general groove advice in [how to make boom bap drums](https://gazillionindustries.com/how-to-make-boom-bap-drums/) applies here too, just slower and softer.

Velocity does more of this work than swing does, and producers skip it because it is boring to draw in. Give the hats a range rather than a value: put the downbeat hats somewhere around 90 of 127, the offbeats around 55, and let two or three land near 40 so they read as a brush of the stick rather than a hit. Snares want less spread, maybe 100 on the backbeat and 65 on a ghost note. A kit where every hat is at 100 sounds like a kit where every hat is at 100, no matter what you put after it.

Then loosen the grid itself, and loosen it unevenly. Ten milliseconds is the useful unit here: at 85 BPM a quarter note is 705.9 ms, so 10 ms is about 1.4 per cent of a beat, and on a 960-tick-per-quarter grid it is roughly 14 ticks. That is small enough that nobody hears a mistake and large enough that the pocket changes. Drag the snare late by 8 to 15 ms, leave the kick where it is, and let the hats scatter by 3 to 8 ms in both directions. Consistent drift reads as a player. Random drift reads as a bad take.

## Swing in milliseconds, worked out

Swing percentages are easier to trust once you convert them. A swing control moves the offbeat of a pair from the halfway point to wherever you set it, so the number is a position, not an amount. At 85 BPM a quarter note lasts 705.9 ms, an eighth lasts 352.9 ms and a sixteenth lasts 176.5 ms. Those four numbers are all you need.

Take sixteenth-note swing, which is what most lofi kits use. The pair of sixteenths spans one eighth, 352.9 ms. Straight puts the offbeat at 176.5 ms. Set swing to 58 per cent and it moves to 0.58 × 352.9 = 204.7 ms, which is 28 ms late. Set it to 62 per cent and it lands at 218.8 ms, 42 ms late. Full triplet swing, 66.7 per cent, puts it at 235.3 ms, 59 ms late. Drop the tempo to 72 BPM and the same 62 per cent setting is worth 50 ms, because the beat got longer. The swing number stayed still and the groove moved, which is why a setting you loved on one beat feels wrong on the next.

Somewhere between 56 and 63 per cent is where most of this music lives. Below 55 it reads as tight. Above 65 it reads as a shuffle, which is a different genre with its own rules. Set the number, then nudge individual hits away from it — the swing gets you the shape and the hand-nudges get you the person.

## Take the shine off

A low-pass filter on the drum bus is the fastest lofi move there is. Bring the cutoff down until the hats stop clicking and the snare loses its edge, then back it off slightly so the groove still reads. Then crush them a little: fewer bits for grit, a lower sample rate for that folded, metallic top. The mechanics are in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

Slope matters as much as cutoff, and it is the control people forget they have. A 2-pole filter falls 12 dB per octave, so a cutoff at 6 kHz leaves 12 kHz only 12 dB down — the sizzle is still audible, just pushed behind the mix. A 4-pole filter falls 24 dB per octave, so the same 6 kHz cutoff puts 12 kHz 24 dB down and the hats genuinely stop existing up there. Use the gentle slope when you want the kit dusty but present, and the steep one when you want it in another room.

Three cutoff regions, and you can hear the difference between them inside a bar. Around 5 to 7 kHz the kit sounds like a record rather than a session: hats dulled, snare intact, kick untouched. Around 3 to 4 kHz it moves behind the vocal and starts to feel like a loop someone else made. Around 1.5 to 2 kHz it is through a wall, and the kick body is the only thing carrying the rhythm. Add 10 to 20 per cent resonance and the cutoff stops being a curtain and becomes a color, which is the whole subject of [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/).

[F(ilter)12](https://gazillionindustries.com/f12.html) puts a filter and the crush pair on one panel, for drums and samples. There's a demo on the page.

## What the rate knob folds down

Bit reduction and rate reduction sound different because they break different rules. Bit reduction rounds every sample to a coarser grid and leaves a noise floor behind it. You get roughly 6 dB of usable range per bit, so 16 bit gives you about 96 dB, 12 bit about 72 dB and 8 bit about 48 dB. That last number is the one that bites: a drum tail that decays to −55 dBFS is below an 8-bit floor sitting near −48 dB, so the tail does not decay any more, it turns into grain and stops. That grain is the dust people are describing.

Rate reduction does something else entirely. Drop the rate to R and the highest frequency the signal can hold is R/2. Anything above that does not disappear, it folds back down to the difference. Reduce to 8 kHz and the ceiling is 4 kHz: a 6 kHz hat partial reappears at 8 − 6 = 2 kHz, a 7 kHz partial reappears at 1 kHz, and a 10 kHz partial wraps to 2 kHz. None of those new tones are related to the note underneath, which is why the result clangs instead of ringing. Reduce to 11.025 kHz instead and the ceiling is 5.5 kHz, so only the top of the hat folds and the snare survives. [What aliasing is](https://gazillionindustries.com/what-is-aliasing-in-audio/) covers the rest.

Practically: set bits first, by ear, until the tails get gritty and stop. Then bring the rate down slowly and stop the moment the hats start to change pitch when you move them. Pitch change with position is the tell that you have gone past texture into artifact. Some records want that. Most drum busses do not.

## Glue and room

Squash the drum bus gently with a compressor so the hits and their tails come together, add a little saturation for warmth (see [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/)), and put the kit in a short, dark room. Lofi drums sound like they're in the next room, not in your face.

Give the bus compressor a ratio near 2:1, an attack of 10 to 30 ms so the kick still arrives before the gain reduction does, and 2 to 4 dB of reduction on the loudest hits. The release is the setting that decides whether the kit breathes. At 85 BPM an eighth is 353 ms and a sixteenth is 176 ms, so a release somewhere between 150 and 300 ms lets the bus come back up before the next hit instead of holding the whole bar down. Longer than 400 ms and the kit stops pulsing and starts sagging. There are starting values for a handful of common cases in [drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/), and the why is in [glue compression](https://gazillionindustries.com/glue-compression/).

The room should be small, dark and mostly inaudible on its own. Pre-delay of 15 to 25 ms, decay of 0.4 to 0.8 seconds, and then filter the return hard: high-pass it around 300 Hz so the kick does not smear, low-pass it around 3 kHz so the tail is duller than the kit feeding it. Sit the return 18 to 24 dB under the dry bus. A useful sanity check is that 20 ms of pre-delay is about seven meters of extra travel at room temperature, so you are describing a small room and you should not hear a space larger than one. More on the trick in [how to make music sound like another room](https://gazillionindustries.com/how-to-make-music-sound-like-another-room/).

## The noise bed, and how loud to set it

Noise is the cheapest part of this sound and the easiest to overdo. You want a continuous bed — vinyl surface noise, tape hiss, a room tone recorded on a phone, the hum of your own radiator — sitting far enough down that you notice it only when it stops. If your drums peak near −8 dBFS, put the bed somewhere around −45 dBFS. That is a gap of roughly 37 dB, which is quiet enough to read as the medium and loud enough to survive a streaming encode.

Two details decide whether the bed sounds like part of the record or like a layer you bought. First, filter it the same way you filtered the kit: if the drums stop at 5 kHz and the crackle runs to 18 kHz, the crackle is now the brightest thing in the mix and the ear goes straight to it. Second, put the noise *inside* the bus compressor rather than after it, so it ducks under every hit and swells back in the gaps. That swell is the sound people are actually reaching for. [Tape hiss](https://gazillionindustries.com/tape-hiss/) goes into where the noise on real tape came from, and [how to make a sample sound old](https://gazillionindustries.com/how-to-make-a-sample-sound-old/) does the same job for melodic material.

One honest warning. A noise bed under the drums is a noise bed under the whole song, and if you also put one under the keys and one under the bass you have three uncorrelated hiss layers adding up. Print one, put it on its own channel, and let the whole arrangement share it.

## Where it goes in the chain, and what fights what

Order changes the result more than any single setting here. Crush before filter and the filter cleans up the folded junk the rate reduction made, so you get grit without clang. Filter before crush and there is less content above the new ceiling to fold, so the crush sounds tamer and more like grain. Both are usable. Pick on purpose.

The chain that behaves predictably, per drum bus: pitch or speed change first, then bit and rate reduction, then the low-pass, then saturation, then bus compression, then the room send, with the noise bed joining before the compressor. Saturation after the filter matters because saturation generates new harmonics above wherever you just filtered to — put it first and the filter removes the warmth you paid for. [How to mix drums](https://gazillionindustries.com/how-to-mix-drums/) covers the wider routing.

Two interactions to watch. A heavy low-pass and a fast attack compressor fight each other: the filter softens the transient, so the compressor stops catching it, and your 2 dB of gain reduction quietly becomes zero. Check the meter, not the setting. And saturation plus a sub-heavy kick is where lofi drum busses go to die, because the harmonics stack in the 100 to 300 Hz region and the kit turns to mud. If that happens, high-pass the saturator's input at 120 Hz and let the fundamental bypass it. A parallel path does the same job with less collateral — see [parallel compression](https://gazillionindustries.com/parallel-compression/).

## How to make lofi drums

- Load soft one-shots or a worn drum loop.

- Program a simple pattern with heavy swing and uneven velocities.

- Route the kit to a bus and low-pass it until nothing clicks.

- Add a little bit depth or sample rate reduction.

- Add saturation and gentle bus compression.

- Send it to a short, dark room reverb.

- Put a quiet noise bed under the drums.

- Nudge two or three hits off the grid by 8 to 15 ms and leave the rest.

- Bounce the loop and play it on a phone speaker.

- Come back and raise the cutoff by whatever the phone took away.

## The same pass with numbers on it

- **Tempo**: 70 to 90 BPM

- **Swing**: sixteenths at 56 to 63 per cent

- **Hat velocity**: a 40 to 95 spread, never one value

- **Hand nudges**: snare 8 to 15 ms late, hats ±3 to 8 ms

- **Low-pass**: 5 to 7 kHz dusty, 3 to 4 kHz next room

- **Slope**: 12 dB/oct to suggest, 24 dB/oct to remove

- **Bits**: 12 for texture, 8 when you want the tails to stop

- **Rate**: 11 kHz folds the hats, 8 kHz folds the snare too

- **Bus comp**: 2:1, attack 10 to 30 ms, release 150 to 300 ms, 2 to 4 dB

- **Room**: pre-delay 15 to 25 ms, decay 0.4 to 0.8 s, return −20 dB

- **Noise**: about 37 dB under the drum peaks, filtered to match

## How to check it in your own session

Every one of these moves can be verified in under a minute, and guessing is what makes lofi drum busses sound overcooked. Four tests, in the order they save you time.

Bypass test, for the filter. Loop one bar, put a spectrum analyzer after the bus and watch where the curve leaves the noise floor with the filter in and out. If your cutoff is at 5 kHz and the curve still climbs past 10 kHz, something downstream is putting top end back — usually the saturator, occasionally the noise bed. Fix the order, not the cutoff.

Solo-the-difference test, for the crush. Duplicate the drum bus, flip the polarity of the copy, and bypass the crusher on the copy only. What you hear is exactly what the crusher added, on its own. On a bit reduction it will sound like a steady gritty hiss that follows the tails. On a rate reduction it will sound like a separate clanging instrument playing its own melody, and that melody is the folded content. If you can hum it, your listeners will hear it.

Gain-reduction test, for the compressor. Watch the meter for a full bar rather than trusting the knobs: you want the needle to reach 2 to 4 dB on the kick and snare and return most of the way to zero before the next hit. A needle that never comes back means the release is too long. A needle that never moves means the low-pass already ate the transient, which is covered in [what a transient is](https://gazillionindustries.com/what-is-a-transient/).

Small-speaker test, for all of it. Bounce the loop, play it on a phone, and then play it in a car. A phone's driver gives you very little below a few hundred hertz, so a soft kick under a heavy low-pass can vanish entirely and leave you with hats and hiss — see [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/). The car will tell you the opposite story about the low end. Split the difference and trust the phone about the top.

## Where these controls live, by DAW

The moves are the same everywhere; the labels are not. In Ableton Live the swing lives in the Groove Pool, applied per clip with a timing amount you can dial back below 100 per cent, and the Velocity MIDI device will randomize hat velocities faster than drawing them. Redux gives you bit and rate on one device, Auto Filter gives you the low-pass with selectable slopes, and Drum Buss puts light saturation and a dry-wet on the bus in one box.

In FL Studio the swing slider sits on the Channel Rack and applies globally, so per- pattern feel means going into the piano roll and moving hits by hand. The graph editor under the step sequencer is the fastest way to give hats a velocity spread. Fruity Love Philter carries the filter with enough shapes to cover the whole job, and Fruity Blood Overdrive handles the dirt.

In Logic Pro the region inspector holds quantize strength and quantize swing, and those two fields together do what the hand-nudging does elsewhere: set a tight grid, then pull strength down to 70 or 80 per cent so hits keep some of their played position. Bitcrusher covers bits and rate, AutoFilter covers the low-pass, and ChromaGlow (Logic Pro 11 and later) covers saturation. The MIDI Transform window has a humanize operation if you want the drift generated rather than drawn.

Whatever the DAW, do the swing as MIDI and the crush as audio. Swing that lives in a groove template can be changed after the fact. A crushed audio file cannot.

## What goes wrong, and what it sounds like

Overcooked lofi drums have four distinct failure sounds, and each one points at a single control.

The kit disappears under the bass. Cause: the low-pass went too far, so the only band the drums still occupy is the one the bass and the kick fundamental already own. You hear rhythm without articulation, and the groove reads as slower than it is. Raise the cutoff 400 Hz at a time until the snare comes back.

The hats have a tune of their own. Cause: rate reduction past the point where folded content is louder than the source content up there. The giveaway is that the pitch of the clang changes when you move the hat in the bar, or when the sample under it changes note. Back the rate off or filter after the crusher rather than before it.

The hiss pumps. Cause: a noise bed placed before a compressor with a fast release, so the bed lifts audibly in every gap. A little of this is the effect you want; a lot of it sounds like a gate misfiring. Lengthen the release, drop the bed 6 dB, or move it after the compressor and accept a flatter result.

The kick has no thump left. Cause: saturation ahead of the filter, stacking harmonics into the 100 to 300 Hz region until the fundamental is masked by its own overtones. Solo the kick, bypass the saturator and listen for whether the pitch of the thump moves. If it does, high-pass into the saturator and put the low end back around it. [How to layer kicks](https://gazillionindustries.com/how-to-layer-kicks/) has the other half of that problem.

## What it costs you

Every move on this page removes something, and most of them remove it permanently. The low-pass takes the air that makes a kit sound close, and once the loop is bounced you cannot put air back — boosting 10 kHz on filtered drums raises noise, not cymbals. Bit reduction raises the noise floor for good, which matters more than it sounds like when eight crushed tracks stack up into a mix. Rate reduction writes new frequencies into the file that no later processing can separate from the real ones.

The groove has costs too. Heavy swing on the drums means every other part has to swing with them or sit deliberately against them; a straight arpeggio over 62 per cent hats sounds broken rather than tense. And a dark kit pushes the vocal forward whether you planned that or not, because you just cleared the 4 to 10 kHz region the vocal's consonants live in. That can be the best thing that happens to the record. It is still a decision you made with a filter knob.

The way to keep the cost down is to commit late. Keep the drum bus processing live until the arrangement is finished, print a crushed version only when you need the CPU back, and keep the clean stems. Nobody has ever regretted having the clean stems.

## Questions people ask

### How do I get a lofi drum sound?

Use soft hits with heavy swing, low-pass the drum bus, add a little bit or sample rate reduction and saturation, compress gently, and give them a short, dark room with a quiet noise bed underneath.

### Where can I find lofi drum loops?

Sample packs sell them, but you can make your own from any drum loop by filtering, crushing and saturating it. Resampling your own processed loops gives you a kit nobody else has.

### How do I make drums sound dusty?

Roll off the high end, reduce the sample rate or bit depth a little, add saturation and a noise bed, and soften the transients with gentle compression. Dust is mostly missing top end plus a little noise.

### What BPM are lofi drums?

Most of this material sits between 70 and 90 BPM. The reason is arithmetic rather than taste: at 85 BPM a sixteenth lasts 176 ms, so a swing setting of 62 per cent moves the offbeat 42 ms late and you can hear the drag. Run the same setting at 140 BPM and the same percentage is worth 26 ms, which reads as tight instead of lazy.

### How much swing should I use on lofi drums?

Start at 58 per cent on sixteenths and adjust by ear. Below 55 per cent the kit reads as straight; above 65 per cent it turns into a shuffle. Then nudge two or three individual hits off the swung position by 8 to 15 ms, because a single percentage applied to everything still sounds like a setting.

### Should I bitcrush before or after the filter?

Crush first if you want grit without clang, because the filter then removes the folded content the rate reduction created. Filter first if you want the crush gentler, because there is less content above the new ceiling left to fold. Both are correct; the first order is safer on a full kit.

### What bit depth should I use for lofi drums?

12 bit gives you audible grain with the tails still decaying normally. 8 bit puts the noise floor around 48 dB below full scale, which is high enough that quiet tails stop decaying and turn to grit. Below 8 bit you are making an effect rather than a drum sound. There is more in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

### How do I add vinyl crackle to my drums?

Put a crackle or hiss loop on its own channel, filter it to the same ceiling as the drum bus, and route it into the bus compressor so it ducks under each hit. Set it roughly 37 dB below the drum peaks. One bed for the whole song, not one per instrument.

### Can I make lofi drums with stock plugins?

Yes, entirely. Every DAW ships a low-pass filter, a bitcrusher, a saturator, a compressor and a reverb, which is the complete list of what this needs. The card above names the specific stock devices in Live, FL Studio and Logic.

### Why do my lofi drums sound weak?

Usually the low-pass and the compressor are cancelling each other out. A heavy filter softens the transient, the compressor then stops catching it, and you get a dull kit with no movement. Check the gain reduction meter: if it never reaches 2 dB, raise the cutoff or lengthen the attack until it does.

### Why do my lofi drums disappear on phone speakers?

A soft kick under a heavy low-pass leaves almost nothing in the band a small driver can reproduce. Add a little saturation to generate harmonics an octave or two above the kick fundamental, which small speakers can play and the ear reads as the missing low end.

## Stock plugins that do this

- **FL Studio**: Fruity Love Philter; Fruity Blood Overdrive

- **Ableton Live**: Redux; Auto Filter; Drum Buss

- **Logic Pro**: Bitcrusher; AutoFilter; ChromaGlow (Logic Pro 11 and later)

## What F(ilter)12 does

F(ilter)12 is our 12 bit sauce filter, built for drums and samples. Its lo-fi section is **SAMPLE RATE**, which rolls off the top and folds what was up there back down, and **BIT**, which rounds off quiet detail and gives what remains a hard edge. The filter behind it has five shapes, six resonance shapes and **DRIVE**, and **AUTO FILTER** can move it with swing. One producer's line on the page: it gave their drums some vintage dust.

On a drum bus that means one instance instead of three, which matters for the order question above: the crush pair and the filter are already arranged so the filter is cleaning up after the rate reduction rather than feeding it. Start with BIT, then SAMPLE RATE, then bring the cutoff down until the hats stop clicking, then add DRIVE last. AURA is there when the kit reads dull rather than dusty and you want some definition back without undoing the filter.

It runs on Mac and Windows as AU, VST3 and standalone, and it is $49 with DRUGS included free. There is a demo on the page, and it is the honest way to decide whether the panel suits how you work.

Two winters, one flood, and they still fit.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
