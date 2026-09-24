# What is varispeed

> What varispeed is, how speed and pitch move together, the math of semitones and speed, how it differs from pitch shifting, and how producers use it.

Source: https://gazillionindustries.com/what-is-varispeed/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

In 1966 the Beatles gave George Martin two takes of "Strawberry Fields Forever" in different keys and tempos and asked him to join them. He sped one up and slowed the other until they met, and the splice became one of the most famous edits in pop. That's varispeed: change the speed and the pitch comes along for the ride.

Varispeed changes playback speed and pitch together, the way a tape machine or a turntable does when it runs faster or slower. Speed up and the audio gets shorter and higher; slow down and it gets longer and lower. Doubling the speed raises the pitch an octave (12 semitones), and each semitone is a speed change of about 6%. Unlike modern pitch shifting, it doesn't separate pitch from time, and that link is exactly what gives it its sound.

## The short version

- **What**: speed and pitch change together

- **Faster**: shorter and higher

- **Slower**: longer and lower

- **Octave**: double speed = +12 semitones; half speed = −12

- **Semitone**: about a 6% speed change

- **One percent**: about 17 cents, a sixth of a semitone

- **What moves**: everything in the file: voice, room, hiss, vibrato, reverb tail

- **vs pitch shifting**: varispeed keeps them linked; pitch shifting separates them

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25.

## Hear it

A definition is cheap. Here is one loop at three speeds, then the same slowed pass with the sampling rate stepped down, so you can hear how small a percentage has to be before your ear calls it a different key. The figures are the renderer's own readout.

- **Unity** — PITCH 93 — rate 1.0000, +0.00 semitones — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — PITCH 64 — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — PITCH 120 — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

- **Slowed, LO-FI 2** — PITCH 64 with SAMPLING GRADE at 3.9 kHz — https://gazillionindustries.com/skruu/skruu-down-lofi2.m4a

One source loop, rendered offline through the same engine the plug-in runs, no other processing.

## Where it comes from

Tape machines and turntables have always had speed controls, and engineers used them creatively long before plugins. Recording a part with the tape running slow makes it sound faster and higher on normal playback; slowing a record down makes a voice deep and a groove heavy. Hip hop producers learned the same lesson sampling records: play a 45 at 33 and everything drops about five semitones and gets heavier.

The reason it was everywhere is that the speeds were fixed and few. Reel machines ran at standard rates that doubled as you climbed — 7.5 inches per second to 15, 15 to 30 — so a tape played at the next speed up is exactly an octave higher and exactly half as long, no arithmetic required. Records offered two speeds and one ratio between them. Every era of sample-based music inherited those intervals from the machines, not from a decision anyone made at a desk. The mechanics are in [how does a tape machine work](https://gazillionindustries.com/how-does-a-tape-machine-work/), and the speed side alone in [tape speed](https://gazillionindustries.com/tape-speed/).

It still happens by accident, and the accident is instructive. Hand a 44.1 kHz file to a session running at 48 kHz with no conversion and it plays 8.8% fast, which is +1.47 semitones and a length 8.1% short. That is varispeed with nobody's hand on a knob: the same samples, read out at a rate they were not written at. Every deliberate use of the effect is that mistake, made on purpose and by a chosen amount.

## The math, once

Pitch follows speed on a curve. A speed ratio of 2 is exactly +12 semitones, 0.5 is exactly −12, and one semitone is a ratio of about 1.059. So −20% speed (a ratio of 0.8) lowers the pitch by about 3.9 semitones, and +10% raises it about 1.7. A 45 rpm record played at 33⅓ runs at about 74% speed, roughly 5.2 semitones down. **You don't need the numbers to use it, but they explain why small speed changes sound so big.**

Work in cents if you are chasing tuning rather than character. A cent is a hundredth of a semitone, and near unity one percent of speed is about 17 cents — call it a sixth of a semitone. Half a percent is under nine cents, which is roughly the width of a good chorus detune and small enough that most people hear it as thickness rather than as a key change. Three percent is about half a semitone and is already an argument with the bass player. That narrow band between five and twenty cents is where the effect stops sounding like a pitch move at all; see [best detune plugins](https://gazillionindustries.com/best-detune-plugins/) for what lives there.

**Pitched up.** Same control, the other direction.

## What is actually happening to the samples

Digital varispeed is resampling, and resampling is one idea: move the read pointer through the file at a rate other than one stored sample per output sample. At 44.1 kHz the stored samples sit 22.7 microseconds apart. Ask for 74.1% speed and the pointer advances 0.741 of a sample each tick, so almost every read lands between two stored values and has to be estimated from the neighbors. That estimate is the interpolator, and the quality of a speed change is mostly the quality of that guess.

What comes out is the original spectrum multiplied by the ratio. Every partial, every resonance, every piece of noise moves by the same factor, which is why nothing has to be invented and nothing can be invented badly. At 74.1% a 440 Hz A lands at 326 Hz, an 8 kHz hat lands at 5.9 kHz, and a 60 Hz hum lands at 44 Hz where it is harder to notch and easier to feel. Nothing in the file is exempt.

The two directions fail differently, and it is worth knowing which one you are in. Speeding up pushes content toward and past the ceiling: at 44.1 kHz the ceiling is 22.05 kHz, so a 20 kHz partial played 10% fast sits at 22 kHz and just survives, while the same partial played 20% fast wants to be at 24 kHz, which the format cannot hold, and it folds back down into the audible range as a tone that has nothing to do with the music. That is [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/), and it is the reason a good speed-up filters before it reads. Slowing down cannot alias, because everything moves away from the ceiling; its failure is interpolation error, heard as a thin gritty layer that rides the loudest sustained material and disappears the moment the audio stops.

## Varispeed vs pitch shifting and time stretching

Modern pitch shifting and time stretching pull pitch and length apart with DSP, so you can raise a vocal without changing its tempo. That's powerful, but it adds artifacts and loses the natural character of a speed change. Varispeed doesn't cheat: the whole sound, including its formants and its room, moves together. Voices get chipmunk-bright or molasses-deep, and drums get snappier or heavier in a way that sounds like a machine, not an algorithm. The other approach is covered in [how to change pitch without changing tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/).

The tell is the singer's body. Formants are the fixed resonances of a throat and mouth, and a listener reads them as size. Varispeed drags them with the pitch, so a vocal pulled down five semitones does not sound like the same person singing lower — it sounds like a larger person, in a larger room, because the room moved too. A formant-aware shifter holds them still and keeps the singer the same size at a new pitch. Neither is the correct one. [Formant shifting](https://gazillionindustries.com/formant-shifting/) has the mechanism, and [chipmunk soul](https://gazillionindustries.com/chipmunk-soul/) is a whole subgenre built on choosing the first answer on purpose.

Here is the practical split. Reach for varispeed when the movement is the point, when the source is a full mix or a record you want to stay a record, and when you would rather have a real transformation than a transparent one. Reach for pitch shifting when one element has to change key inside an arrangement that cannot move. Reach for [time stretching](https://gazillionindustries.com/time-stretching-explained/) when a loop has to meet a tempo and the key is already right. The first has no artifacts and no freedom; the other two buy freedom with artifacts.

[SKRUU](https://gazillionindustries.com/skruu.html) does both: varispeed pitch, and time that moves independently of it.

## A worked example, eight bars at 74.1%

Take an eight-bar 4/4 loop at 90 bpm. It is 21.3 seconds long. Now play it at 74.1% speed, the ratio between the two speeds on a turntable, and read off what happens to every quantity in the file at once:

- **Tempo**: 90 bpm becomes 66.7 bpm

- **Length**: 21.3 seconds becomes 28.8

- **Pitch**: down 5.20 semitones — a fourth and a bit

- **A 440 Hz vocal note**: lands at 326 Hz

- **A 220 Hz bass note**: lands at 163 Hz

- **A 50 Hz kick fundamental**: lands at 37 Hz

- **An 8 kHz hat**: lands at 5.9 kHz

- **A 1.8 s reverb tail**: becomes 2.43 s

- **A 12 ms slap in the recording**: becomes 16.2 ms

- **A 5 Hz vibrato**: slows to 3.7 Hz

One control moved and every row followed it. Not one of them was a separate decision, and there is no setting anywhere that would have excused a single one. The reverb got longer, so the record sounds like it was cut in a bigger room. The vibrato slowed, so the singer sounds calmer. The kick fell to 37 Hz, which is under the point where most phones give up entirely — see [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) before you decide the low end got better. That bundle of consequences is the sound people are after when they slow something down, and it is why a pitch shifter set to −5.20 semitones does not give it to them.

Going the other way is the same arithmetic with the signs flipped. At +10% the loop runs 99 bpm, finishes in 19.4 seconds and sits 1.65 semitones up, which is enough to take the weight out of a drum break and put a nervous edge on a vocal. Producers who chop breaks live in this region; it is most of what [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/) is about.

**PITCH −3.09 ST.** Read out as a percentage and as an interval, because they are the same number twice.

## What producers use it for

- **Slowed and sped-up edits:** see [how to make slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/).

- **Chopped and screwed:** the Houston sound is built on slowing records down. See [how to chop and screw a song](https://gazillionindustries.com/how-to-chop-and-screw/).

- **Sampling:** pitching a sample by speed keeps it sounding like a record.

- **Transitions:** a speed ramp at the end of a section, or a slow-down to a stop.

- **Getting a break to a tempo:** a loop that is 4% too slow can be pulled into the grid by speed alone, and the two-thirds of a semitone it costs you is often cheaper than the smear a stretch would add. [How to chop a drum break](https://gazillionindustries.com/how-to-chop-a-drum-break/) works through the case.

- **Hiding a source:** a few semitones of speed moves the formants as well as the notes, which changes who the voice sounds like, not only what note it is on.

- **Doubling:** a copy detuned five to fifteen cents by speed drifts against the original in time as well as pitch, so the double breathes instead of sitting still.

- **Riding it as a performance:** a hand on the control through a chorus is a part, and it is the one thing a global project setting cannot give you.

## Test it in your own session in ten minutes

Do not take any of this on faith. Nine steps, one loop, your own monitors.

- Load an eight-bar full-mix loop on an audio track and note the project tempo.

- Insert the varispeed device first in the chain, before every other plugin.

- Set the amount to −6% and play one full pass without touching anything.

- Count the bars against the grid and find where the loop has fallen behind.

- Return to unity and confirm the loop lines up again.

- Write an automation ramp from unity to −12% across four bars.

- Write a second ramp covering the same range in half a bar.

- Swap the loop for a held synth pad and play both ramps again.

- Bounce the section and compare the bounce against what you heard live.

Steps six and seven separate a tool from a toy. A slow ramp forgives almost any interpolator; a fast one on a sustained pad does not, and the pad is where you will hear the grit first. Step nine matters because some hosts render at a different quality than they play, and a bounce that does not match what you approved is the worst kind of surprise: it only shows up after you have moved on.

## Where it goes in the chain

Put it first on the track, ahead of anything that reacts to level or to time. A compressor after a speed dip hears a quieter, longer signal and responds to the music. A compressor before one has its attack and release times dragged around by a control it cannot see, which sounds like a fault in the compressor rather than a move in the song.

Reverb and delay are a real decision rather than a rule. Put them after and the tail moves with the source, so the whole thing reads as one machine slowing down. Put them before, or print them into the file, and the tail moves too — it was recorded, so it is part of the audio. What you cannot do by accident is a dry source sagging into a stationary tail, which reads as two recordings glued together. Make that choice with a send, on purpose. The slowed case is worked all the way through in [how to make slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/).

Two more interactions catch people. A tempo-synced delay placed after a slowed track stays locked to the host grid while the audio no longer is, so the repeats land in a place the performance never suggested — sometimes wonderful, never neutral. And a sidechain keyed off a slowed track will drift off the grid with it, because the transients it triggers on have moved. Key the compressor off something that did not move, or accept the drift as the part.

Saturation is worth putting on both sides once. Distort before the speed change and the harmonics you generated travel down with everything else, so they stay in the new key's series and sound like part of the recording. Distort after and the harmonics are generated at the new pitch, which is brighter and more obviously a plugin. Both are usable. They are not interchangeable.

**TIME −35%, PITCH at unity.** Length without pitch — the half varispeed will never give you.

## The failure modes, and what each one sounds like

Six ways it goes wrong. Each has a sound, and knowing the sound is faster than reading a manual.

- **Grit on a held tone.** A thin, sandy layer that appears on sustained material while the control is moving and vanishes in the gaps. That is the interpolator running out of accuracy. Test it on a pad, never on drums, because drums hide it.

- **A whistle that follows nothing.** On a fast speed-up, a tone that moves the wrong way against the music. Content has crossed the sampling ceiling and folded back. Higher internal rates or a filter before the read is the only fix; EQ afterward cannot separate it from the music because it is now inside the music.

- **Stepping on a ramp.** Small audible jumps during a slow move, like a zipper. The control is quantized — usually to semitones or to a coarse table — and a quantized control can transpose but cannot slide.

- **Drift you did not order.** Slow one track by 4% at 90 bpm and it is 111 ms late by the end of a single bar. Over eight bars it is a different song. Nothing has gone wrong; the drift is the definition of the effect, and it is why a per-track speed move has to be either committed or automated back to unity.

- **Air that will not come back.** Drop a mix an octave and a 10 kHz cymbal is now a 5 kHz cymbal. There is no content above the old ceiling to boost. A high shelf here lifts hiss, not air, and the mix gets duller and noisier at the same time.

- **Low end that disappears on the way down.** The fundamentals fell with everything else. A kick that read as weight at 50 Hz is at 37 Hz after a 5.2-semitone drop, where a laptop and a phone both produce approximately nothing. Check it on the small speaker before you commit, every time.

## How each DAW spells it

The operation is one thing and the menus are five things, which is most of why the question gets asked at all. Logic Pro calls it Varispeed and puts it in the control bar as a project-wide setting. Ableton Live calls it Re-Pitch and makes it a warp mode chosen on each clip. FL Studio calls it Resample and hides it in the stretch mode menu inside Channel Settings. Pro Tools calls it Varispeed and puts it in the Elastic Audio slot rather than an insert. GarageBand has no varispeed at all; its Audio Editor transposes, which moves pitch and leaves length alone.

The shared gap is worth naming, because it explains the search that brings most people here. Four of those five are settings rather than controls: they apply to a project or a clip, they are set and then left, and none of them is a continuous knob on a track that you can automate, perform and record. That is the thing an insert plugin adds, and the reason people go looking for one after they have already found the feature. Every menu path, with the ranges and the traps, is in [varispeed in every DAW](https://gazillionindustries.com/varispeed-in-every-daw/), and the plugins that fill the gap are in [best varispeed plugins](https://gazillionindustries.com/best-varispeed-plugins/).

## Speed to semitones, as a lookup

Varispeed ties pitch and duration together, so any speed change is also an interval. The conversion is twelve times the base-two logarithm of the speed ratio. Worked out for the intervals people actually reach for:

- **+6 semitones**: play at 141.4% speed

- **+5 semitones**: play at 133.5% speed

- **+4 semitones**: play at 126.0% speed

- **+3 semitones**: play at 118.9% speed

- **+2 semitones**: play at 112.2% speed

- **+1 semitone**: play at 105.9% speed

- **unchanged**: 100% — ratio 1.000

- **−1 semitone**: play at 94.4% speed

- **−2 semitones**: play at 89.1% speed

- **−3 semitones**: play at 84.1% speed

- **−4 semitones**: play at 79.4% speed

- **−5 semitones**: play at 74.9% speed

- **−6 semitones**: play at 70.7% speed

- **+12 semitones (one octave up)**: 200% — double speed

- **−12 semitones (one octave down)**: 50% — half speed

- **A 45 rpm record played at 33⅓**: 74.1% — down 5.20 semitones

- **A 33⅓ record played at 45 rpm**: 135.0% — up 5.20 semitones

The two record-speed rows are the reason so much sample-based music sits near five semitones from where it started. That interval is not a choice anyone made; it falls out of the two speeds a turntable offers.

The same table read from the other end gives you tempo, because tempo scales with speed exactly as pitch does. A 96 bpm break taken down one semitone arrives at 90.6 bpm. Taken down two, 85.5. Down five, 71.9. If you have ever wondered why a particular slowed tempo keeps turning up in a genre, it is usually because a common source tempo met a common interval.

## What it costs you

It costs you the ability to choose. Pitch and length arrive as one decision, so getting a sample into your key means accepting whatever tempo comes with it, and getting it to your tempo means accepting the key. That is the whole trade, and every plugin that promises otherwise is doing something else — usually well, always with artifacts.

It costs you top end on the way down and headroom on the way up, and neither is recoverable after the bounce. It costs you sync on any track you move and do not move back. On a global setting it costs you your monitoring reference, because the numbers on screen stop describing the record in the room, and a mix approved at the wrong speed is a mix approved for nobody. And it costs you a generation: once it is printed, undoing it is another resampling pass on material that has already been resampled once.

Set against that, it costs almost no processing power, it has no minimum latency in principle, and it cannot produce the smeared, glassy artifacts that a stretch produces, because it never has to invent a sample that was not recorded. For a great deal of sample-based music that is not a compromise. It is the sound.

## Questions people ask

### Did the Beatles use varispeed?

Yes. The best-known example is "Strawberry Fields Forever," where George Martin joined two takes in different keys and tempos by speeding one up and slowing the other until they matched.

### What does varispeed do?

It changes playback speed and pitch together: faster playback is shorter and higher, slower playback is longer and lower, just like a tape machine or turntable running at a different speed.

### What is varispeed in Logic Pro?

Logic Pro has a Varispeed feature that changes the playback speed of the whole project, with a choice between changing speed only or changing speed and pitch together.

### Why is it called varispeed?

Short for variable speed. It was the name on the control that let a tape machine or a turntable run faster or slower than its nominal rate, and the name traveled to software along with the behavior. Nothing in the word refers to pitch, which is the point: pitch is a consequence, not a parameter.

### Is varispeed the same as pitch shifting?

No. Pitch shifting moves pitch and holds length, which takes analysis and resynthesis and comes with artifacts. Varispeed moves the playback rate and lets pitch and length move together, which invents nothing and therefore smears nothing. If a tool offers a pitch control that does not change the tempo, it is not doing varispeed.

### Does varispeed change the tempo?

Always, and by the same proportion as the pitch. At 74.1% speed a 90 bpm loop plays at 66.7 bpm and takes a third longer to finish. There is no setting that separates the two; separating them is what pitch shifting and time stretching are for.

### How much pitch change is one percent of speed?

About 17 cents, a sixth of a semitone, near unity. One semitone is a speed change of about 5.95%, which most people round to 6%. Half a percent is under nine cents, which is chorus-width detune rather than a key change.

### What speed is a 45 played at 33?

About 74.1% of the original, which is 5.20 semitones down and about a third longer. The reverse, a 33⅓ record played at 45, is 135% and 5.20 semitones up. Those two numbers account for an enormous amount of sample-based music sitting a fourth-and-a-bit from where it started.

### Does varispeed lose quality?

Slowing down cannot alias, so the only loss is interpolation error, and on a decent implementation it sits far below the music. Speeding up can push content past the sampling ceiling, where it folds back as tones that have nothing to do with the music. The audible cost of a big slow-down is not distortion at all: it is lost high end, because the highs moved down with everything else.

### Why do slowed samples sound like they are in a bigger room?

Because the room is in the file and the room slowed down too. A 1.8-second tail at 74.1% speed becomes 2.43 seconds, and the early reflections spread with it, which your ear reads as more distance between the walls. Nothing was added. The space that was recorded simply got played back longer.

### Can you do varispeed in real time?

Yes, and that is the argument for a plugin over a project setting. Resampling needs no analysis window, so a speed control can be automated, performed and recorded like any other parameter. The features built into most hosts are settings applied to a project or a clip rather than controls you can ride while the track runs.

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin, and it keeps the two on separate knobs. **PITCH** runs from −20% to +10% in 128 states and reads out in semitones as well as speed. **TIME** runs from −50% to +25% and moves nothing but the length. Lock either one and play the other, or run both, and with **ELASTIC** on the knob springs back along one of sixteen return shapes. **DRAG** sets how long a new speed takes to arrive; turned up, it's a hand on the platter.

Two things follow from that layout. Because PITCH reads out in both units at once, the lookup table above stops being something you consult — the interval and the percentage are the same number twice, and the panel shows you both while you move. And because ELASTIC returns the knob for you, a dip is a gesture rather than an automation drawing job: push, let go, and the **SLOPE** you chose decides the shape of the road back, which is sixteen different ways for the same dip to land. **SAMPLING GRADE** steps the rate down underneath all of it, with LO-FI 2 running at 3.9 kHz, which is a separate decision from speed and stacks with it. Mac and Windows, VST3, AU and standalone, $29.

**The whole panel.** Top half is the two rates, bottom half is what happens when you let go.

George Martin had two tape machines and a deadline. The trick still sounds like magic.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
