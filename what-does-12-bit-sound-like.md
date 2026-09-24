# What does 12 bit audio actually sound like

> Twelve bits gives about 72 dB of dynamic range against 16 bit's 96. What that sounds like: grain in the gaps, clean on loud hits, obvious on tails.

Source: https://gazillionindustries.com/what-does-12-bit-sound-like/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

Twelve bits is the number people ask for by name, usually after hearing something made on old hardware. What arrives is quieter than the legend, and it only shows up in certain places.

Twelve-bit audio sounds like a faint, grainy noise floor that exists only while the music plays and is loudest in the quiet parts. Each bit carries about 6 dB of dynamic range, so 12 bits gives roughly 72 dB against 16 bit's 96 dB, putting the floor about 24 dB higher. The rounding error is tied to the signal that caused it, so it reads as grit welded to the note rather than hiss underneath it. Loud material covers it. Decays, tails and fades uncover it. On a busy drum loop most people never hear it at all.

## The short version

- **Dynamic range**: about 72 dB at 12 bits, about 96 dB at 16

- **Per bit**: roughly 6 dB; 4,096 steps instead of 65,536

- **Sounds like**: fine dry grain that rises in the gaps between hits

- **Loud parts**: clean, because the signal towers over the step

- **Quiet parts**: grainy, because the signal is only a few steps tall

- **Unlike hiss**: the error tracks the music and stops when the music stops

- **The old machines**: converters and input stage as much as bit depth

- **Fastest test**: audition a long decay, never the transient

## Where the 6 dB per bit comes from

Add a bit and the number of levels a sample can land on doubles. Doubling an amplitude is 6.02 dB, and that is the whole of the rule. Sixteen bits gives 65,536 levels and about 96 dB between a full-scale peak and the smallest step the format can describe. Twelve gives 4,096 levels and about 72 dB. The 24 dB between them is four bits' worth, and it is the entire technical difference between the two.

The step is the number worth carrying around. Call full scale plus or minus one. At 16 bits one step is one part in 32,768, about 90 dB below a full-scale peak. At 12 bits it is one part in 2,048, about 66 dB down. Nothing else changes between the two formats. Every audible consequence below is that one measurement getting four times taller.

One detail decides most of what follows: the grid is fixed to full scale, not to your track. It offers the same 4,096 levels whether you feed it a mastered loop or a fade.

## What a 72 dB noise floor actually sounds like

Seventy-two decibels is still a lot of room. At a comfortable listening level the 12-bit floor lands near the sound of a quiet room, which is why nobody hears it during a chorus. What makes it noticeable is that it behaves nothing like a room: it arrives with the note and leaves with it.

The texture is dry and fine, closer to sand than to air. On sustained material it reads as a thin layer over the top, moving with the envelope. On percussive material it flickers, up for the length of each hit and gone between them. At 16 bits that floor sits 24 dB lower, far enough under normal playback that it never surfaces.

## Why the grain sits on the signal instead of under it

Quantization error is produced by the rounding, so it is a function of the thing being rounded. Its level, shape and spectrum all follow the input. Feed a quiet sine into a coarse grid and the error repeats with the period of that sine, landing as tones locked to the note rather than as a wash behind it. The ear tells those two apart easily, and files the first under fault in the machine.

That correlation also produces the gated quality on a decay. As a tail falls it stops spanning hundreds of steps and starts spanning four, then two, then one. At one step the output is a square wave switching between two values. Below that, silence. A tail that should fade smoothly goes grainy, then buzzy, then stops early, and that stutter is the most recognizable symptom of a low bit depth.

Dither is the control that breaks the correlation. A small amount of noise added before the rounding converts a signal-locked buzz into a steady floor that sits behind the music. The trade is honest: you keep the noise and lose the gating. [Bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/) covers what that switch does to the character of a crush.

## Why a loud drum loop shrugs it off and a decaying tail does not

Run the arithmetic on one source and the whole question answers itself. A snare peaking at 0 dBFS uses the full 2,048 steps of positive swing. Drop the same snare by 24 dB and it spans about 129 steps, which is nearer 8 bits of real resolution. Drop it 48 dB and it spans about 8 steps. The BIT setting never moved. The level did.

- **Peak at 0 dBFS**: 2,048 steps; the full 12 bits are in use

- **Peak at −12 dBFS**: about 514 steps; nearer 10 bits

- **Peak at −24 dBFS**: about 129 steps; nearer 8 bits

- **Peak at −48 dBFS**: about 8 steps; nearer 4 bits

- **Peak at −60 dBFS**: about 2 steps; the waveform is a square

A decaying tail walks down that table in real time. The first 200 ms of a cymbal is a 12-bit recording; the last 200 ms is a 3-bit recording, because the signal dropped 60 dB and the grid did not move with it. One hit contains both cases.

Masking finishes the job. A dense drum loop puts its own energy directly on top of the frequencies the error occupies, so there is nothing to compare the grain against. In the gap after the hit the masking lifts and the error is the loudest thing left. Dense material hides bit depth. Sparse, sustained material is where it lives.

Two things follow. Input trim is a second bit-depth control: pulling a fader 12 dB before a bit reducer costs two bits as surely as turning the knob down two. And anything that reduces crest factor first buys resolution back, since compression and soft clipping hold more of the waveform high on the grid. Records made on 12-bit hardware were tracked hot for that reason, and the workaround became part of the sound.

## The part of the old sound that was never the bits

People describing a 12-bit sound are usually describing a whole signal path, and bit depth is one term in it. The converters of the era were not neutral: their anti-alias and reconstruction filters were steep, and steep filters ring and sag in the top octave. The input stage had a real circuit behind its gain control, so everything arrived colored before a single sample was taken.

The sample rates matter at least as much. Many of those machines ran well below 44.1 kHz, which puts the ceiling in the top of the audible range and folds anything above it back down as unrelated tones. That fold is a large part of what people hear as the character, and it has nothing to do with the number of bits. [What is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/) has the arithmetic for where the folded content lands.

Add the working habits on top: memory was short, so people pitched material down to fit and played it back up, which is another aliasing source. The sound was made of converters, filters, a low ceiling, an input stage and a set of constraints, with bit depth somewhere in the middle of the list. Set a plugin to 12 bits and you get one ingredient, cleanly. The rest is a production decision, which is what [how to make a sample sound old](https://gazillionindustries.com/how-to-make-a-sample-sound-old/) is about.

## How to hear it on your own material in ten minutes

- Pick a loop with a long decaying element in it: a ride, a reverb tail, a held chord with the pedal down.

- Insert a bit reducer and match bypassed and processed levels to within 0.5 dB.

- Set it to 12 bits and leave the sample rate alone, so one variable moves.

- Bypass and unbypass during the decay, never on the transient.

- Listen to the last second of the tail, where the signal is a few steps tall.

- Drop the fader feeding the reducer by 12 dB and bring the output back up by the same amount. The grain should get worse.

- Repeat it on a loud, dense drum loop and notice how hard the setting is to find.

## Where 12 bits helps and where it gets in the way

- **Chopped loops**: works well; the chops cut the tails off anyway

- **Drum bus**: works well; dense material masks most of the grain

- **Keys and pads**: audible on every release; use it deliberately or not at all

- **Lead vocal**: grain rides the ends of phrases; blend rather than insert

- **Reverb returns**: the worst case, and occasionally the best effect

- **Bass**: the floor muddies the low end; reduce a filtered copy instead

- **Master bus**: hits the quietest elements hardest, which is backward

The pattern there is dynamic range rather than genre. Material that lives near the top of the meter is cheap to reduce. Material that spends time near the bottom pays for it, and the payment arrives at the end of every note.

## Questions people ask

### What does 12 bit audio actually sound like?

Like a quiet, dry grain that lives in the gaps. Loud material sounds close to identical to its 16-bit version. Decays, tails and fades pick up a fine noise that moves with them, gets buzzy as they fall, and cuts off slightly early. The crunch people describe comes from hearing that floor exposed, or from a low sample rate beside it.

### How much dynamic range does 12 bit audio have?

About 72 dB, which is 6 dB per bit times twelve. Sixteen bits gives about 96 dB and 8 bits about 48 dB. Those are the theoretical figures for the format; real converters land a few decibels short of them.

### Is 12 bit worse than 16 bit?

Technically, yes: 24 dB less dynamic range and a step four times taller. Musically it depends entirely on the source. On a dense drum loop the difference is hard to find at all. On a solo piano with long pedaled decays it is obvious inside one bar.

### Why does 12 bit sound warm?

Bit depth on its own adds no warmth. It raises a noise floor in the mids and highs and takes nothing away. The warmth people attribute to 12 bit comes from the company it keeps: a limited top end from a low sample rate, a gain stage with a circuit behind it, and material recorded hot to stay above the floor.

### Does bit depth change the frequency response?

No. Bit depth sets the height of the steps and sample rate sets the ceiling. Reducing bit depth raises a noise floor across the spectrum without removing any top end. Reducing the sample rate removes the top end and folds what was above the new ceiling back down as unrelated tones. Most of what gets called a 12-bit sound is both happening together.

### Why does my 12 bit sample sound completely clean?

Because it is loud, and probably short. A sample that peaks near full scale and stops before it decays never spends any time down where the steps are coarse. Find something with four seconds of tail on it and listen to the last one.

### Should I record at 12 bits?

No. Record at 24 and apply the reduction afterward, on a duplicate track or a send. Rounding discards information permanently, and a coarse grid forces you to track hot, which removes decisions you would rather make later.

### Does dither remove the 12 bit character?

It changes it rather than removing it. Dither decorrelates the rounding error, so the buzz that rides the note becomes a steadier floor behind it, and tails fade out instead of stuttering out. You keep the noise and lose the gating. On sustained material that usually sounds better, and on chopped drums it usually sounds less interesting.

### Why do old 12 bit machines sound different from a plugin set to 12 bits?

Because bit depth was one part of a chain. Those machines had colored input stages, steep converter filters, sample rates well under 44.1 kHz, and users pitching material around to save memory. A plugin gives you the quantization on its own. The rest is filtering, aliasing and gain staging you add on purpose.

## What F(ilter)12 does

[F(ilter)12](https://gazillionindustries.com/f12.html) takes its name from the number. **BIT** coarsens the steps, and twelve is as clean as it gets, so every setting below that is a decision about how much grain you want sitting in the gaps. **SAMPLE RATE** handles the other half of the old sound, and **AURA** keeps the result sitting in the mix. Tuned by ear, aimed at the sound rather than at any particular box.

Those machines had twelve bits because that was the budget. You have twelve bits because you picked the tail you wanted to hear fall apart.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
