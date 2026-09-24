# Best detune plugins

> How detune plugins work, what separates a good one from a bad one, free and paid picks verified today, and how to set detune on guitars.

Source: https://gazillionindustries.com/best-detune-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

Two guitar takes, hard panned, and on the monitors the part sounded like a wall. In the car it folded into one thin line up the middle. Same file, same mix.

A detune plugin plays a copy of your signal at a slightly different pitch and mixes it back in. Pitch offsets are measured in cents, and 100 cents is one semitone; useful detune lives between about 3 and 20 cents, where the ear hears two players instead of one bad note. The one to reach for is a micro pitch shifter with an independent cent offset per voice and a dry path it leaves alone. Free ones do the same job. All of them have to be checked in mono.

## The short version

- **What**: a copy of the signal at a small pitch offset, mixed back in

- **Unit**: cents — 100 cents is a semitone, 1200 is an octave

- **Range**: 3–20 cents for width; past 25 it reads as out of tune

- **Why it widens**: left and right no longer match, so the ear counts two sources

- **The catch**: mono sums lose most of it and can comb the midrange

- **Free and good**: Kilohearts Essentials, MAutoPitch, Blue Cat's Chorus

**A small offset up.** Detune is the same control as pitch shift, kept tiny.

## What detune does to the signal

Two copies of the same note at slightly different pitches beat against each other. The beat rate is the difference between the two frequencies, so it is not a fixed wobble across the spectrum: it scales with pitch. Offset a 220 Hz note by 5 cents and the copy lands at 220.64 Hz, a beat of 0.64 Hz, which is one pulse every 1.6 seconds. The same 5 cents on a 2 kHz partial gives a beat near 5.8 Hz.

That single fact explains most of what detune sounds like. The top shimmers, the bottom lurches. It is why a detuned pad glitters and a detuned bass sounds seasick, and why the standing advice to high-pass the detuned copy is arithmetic rather than fussiness. Roll the wet voice off below about 150 Hz and the seasick part goes with it.

Add a few milliseconds of delay to the detuned voice and the ear stops hearing a pitch relationship and starts hearing a second performer standing apart. Under about 30 ms the two fuse into one wider source; past 50 ms you hear a distinct double.

## Three ways a plugin gets there

Every detune plugin picks one of three mechanisms, and the mechanism decides what it is good for.

**A modulated delay line.** Chorus, ensemble and vibrato units vary a short delay over time, and a delay whose length is changing produces a pitch offset while it moves. Artifacts are close to nil, because nothing is invented — it is the same sample data read at a drifting rate. The trade is that the offset can never sit still: stop the modulation and the detune stops with it.

**A true pitch shifter.** A granular or spectral engine holds a fixed offset indefinitely: 7 cents up stays 7 cents up. This is what people usually mean by a detune plugin. It costs latency and transient accuracy, because the engine is splicing or resynthesizing, and at small offsets those splices are inaudible on most material and very audible on a dry hi-hat.

**Resampling.** Play the audio faster or slower and the pitch follows, the mechanism described in [what varispeed is](https://gazillionindustries.com/what-is-varispeed/). The offset is exact and there is no algorithm to hear, but length changes with pitch, so a 10-cent copy of a four-minute track drifts about 1.4 seconds by the end. Good for a whole part, wrong for a live insert unless the plugin buffers it back.

A fourth thing sold in the same aisle is not detune at all: pseudo stereo wideners use all-pass phase tricks rather than pitch, so they widen without beating. Keep the two apart in your head.

**The other direction.** Down and up on two copies is the whole trick.

## What separates a good detune plugin from a bad one

Everything in the category sounds broadly fine at 8 cents on a pad. The differences show up on the edges.

- **Independent offsets per voice.** One symmetric knob that spreads both sides equally is a preset with a handle on it. You want the left voice and the right voice set separately, because material is rarely symmetric.

- **Resolution of one cent or finer.** Coarse steps force a choice between too little and too much, and the useful vocal settings sit between 4 and 9 cents.

- **A dry path that is left alone.** Some plugins run the dry signal through the engine to keep it time-aligned, which spends artifacts on the part you wanted untouched. Set mix to zero and null-test against the bypass.

- **Honest latency reporting.** A shifter with a long window that fails to report its delay to the host will smear every parallel path in the session.

- **Per-voice delay in milliseconds.** Time, rather than pitch, is what turns width into a double, and you want that on a control rather than by accident.

[SKRUU](https://gazillionindustries.com/skruu.html) detunes by moving playback speed rather than by splicing grains, so small PITCH offsets have no algorithm to hear, and ELASTIC lets the offset spring back on its own. There's a demo on the page.

## How to test a detune plugin in ten minutes

- Load the plugin on a dry mono source: one guitar take, one vocal, no reverb.

- Set the wet level to unity and the offset to 7 cents up on one side, 7 cents down on the other.

- Listen in stereo for ten seconds, then sum to mono and listen again.

- Measure the drop: if the mono sum loses more than a few dB of level, the two voices are canceling and the setting is too wide.

- High-pass the wet voices at 150 Hz and repeat the mono check.

- Set the mix to zero and null-test the output against the bypassed plugin.

- Run a dry closed hi-hat through it at the same settings and listen for doubled or softened attacks.

- Check the reported latency in the host, then bounce and confirm the bounce lines up with the original.

- Play the bounce on a phone speaker before you keep the setting.

Step nine is the one people skip. A phone speaker is close to mono, rolls the bottom off hard, and is where most of the audience hears the record. If the guitars still sound like two guitars there, the detune is doing real work.

## Where detune goes in the chain

Put it after anything that changes dynamics and before anything that adds space. Compression ahead keeps the two voices at a steady relative level; reverb after puts both copies in one room, which is what sells them as a single performance. Detune into a reverb sounds like a wide instrument; reverb into a detune sounds like a wide room.

On a bus, run it parallel rather than in series, because a send can be EQ'd and a wet/dry knob cannot. High-pass the send at 150 Hz and shelve the top down a couple of dB, and the width arrives without the glitter.

Never detune the low fundamental of a bass. Below roughly 120 Hz the beat period is long enough to read as an unsteady note rather than as width. Split the band and detune only the top.

## Named options, and what each one actually is

Facts below come from each maker's own product page, read today.

**Eventide MicroPitch** is listed at $99 and described as a dual-voiced, fine-resolution pitch shifter for subtle tone fattening, with delays on board for slap back effects. It runs as AAX, VST2 and VST3 on Windows 10 and later, and as AAX, AU, VST2 and VST3 on macOS 10.14 and later on Intel and Apple Silicon, plus AUv3 and standalone on iOS. Two voices, each with its own pitch and delay, is the control set described above.

**Waves Doubler** is described on its page as a four-voice doubler and imager with modulation and detuning — more voices than most parts need and more than most plugins offer. The price on that page is injected by script and did not load, so check it yourself.

**Soundtoys Little AlterBoy** is a monophonic voice tool: pitch shifting, formant shifting, a hard-tune mode, MIDI control of the pitch, and a tube drive stage carried over from the same maker's saturation plugin. It aims at vocals rather than width, and the formant control is the reason to keep it in mind — see [formant shifting](https://gazillionindustries.com/formant-shifting/).

## Best free detune plugin

Three free options cover the category between them, and none of them is a demo.

**Kilohearts Essentials** is a bundle of 34 effects, free with an account, and the list includes Pitch Shifter, Chorus, Ensemble, Flanger, Haas, Stereo and Frequency Shifter. Pitch Shifter is the fixed-offset engine, Ensemble and Chorus are the modulated-delay route, Haas is the time-offset route. Three mechanisms in one free download is the fastest way to learn which one your material wants.

**MeldaProduction MAutoPitch** is free, arrives in the MFreeFXBundle, and is built as an automatic tuning plugin for vocals and other monophonic sources, with formant shift and stereo expansion alongside the tuning. If the detune problem is really a backing-vocal problem, start here.

**Blue Cat's Chorus** is freeware: a single-voice chorus with a stereo spread control and a choice of sine or triangle LFO, in most plugin formats for Mac and Windows. The cheapest way to hear what a modulated delay does that a fixed offset cannot.

When the mono check keeps failing, **Polyverse Wider** is a free pseudo-stereo widener that increases the image of a mono signal by up to 200% and stays in phase with itself when summed, in VST2, VST3, AU and AAX for 64-bit Windows and macOS 10.9 and later. Different mechanism, same job, no beating.

**TIME moved, PITCH held.** Length and pitch on separate knobs.

## Best guitar detune plugin, and how to set it

Guitars are why this search term exists. A rhythm part tracked once and copied to both sides is identical left and right, so it collapses to the center, and a few cents of offset on each copy pushes it back out. The tool is a two-voice micro shifter with per-side cent control; the free stand-in is the Kilohearts Pitch Shifter on two channels.

- Duplicate the guitar track and hard-pan the two copies.

- Insert the detune plugin on each copy, not on the bus.

- Set the left copy to 6 cents down and the right copy to 6 cents up.

- Add 12 ms of delay to one side and 18 ms to the other.

- High-pass both detuned copies at 150 Hz.

- Sum to mono and pull the offsets back until the mono level stops dropping.

- Return to stereo and set the final wet level by ear against the drums.

Two other guitar jobs get called detune and are something else. Dropping a recorded part a semitone is a shift of exactly 100 cents, a whole step is 200, and that wants a plugin built for range rather than width — the method is in [how to change pitch without changing tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/). Fixing a note that drifted sharp inside a chord is tuning work, and no amount of width hides it.

## What it costs you

Detune buys width and spends three things. It spends mono, always: two signals that differ cannot sum without interference, and the arithmetic of [phase cancellation](https://gazillionindustries.com/phase-cancellation/) does not negotiate. It spends definition, because a smeared attack is the price of two attacks a few milliseconds apart. And on a clear melodic line it spends pitch certainty — a lead vocal detuned past about 12 cents starts to sound like a singer who nearly got there.

So use it sparingly and late. Get the part right, get it in tune, get it sitting, add width last, and check [mono compatibility](https://gazillionindustries.com/mono-compatibility/) before you commit.

## Questions people ask

### What is the best detune plugin?

For most people it is a two-voice micro pitch shifter with an independent cent offset and delay per voice. Eventide MicroPitch is listed at $99 and is described by its maker as exactly that: a dual-voiced, fine-resolution pitch shifter with delays. If you need four voices rather than two, Waves Doubler is described as a four-voice doubler and imager with modulation and detuning.

### What is the best free detune plugin?

Kilohearts Essentials, which is free with an account and includes Pitch Shifter, Chorus, Ensemble and Haas among its 34 effects, so you get all three detune mechanisms in one download. MeldaProduction MAutoPitch is free and better suited to vocals, and Blue Cat's Chorus is freeware with a stereo spread control if you want the modulated-delay flavor.

### What is the best guitar detune plugin?

The same two-voice micro shifter, used on two hard-panned copies rather than on the bus, with roughly 6 cents of offset each way and 12 to 18 ms of delay. Set it per copy, high-pass the wet voices at 150 Hz, and check the mono sum before you keep it.

### How many cents should I detune?

Start at 7 and move from there. Below 3 cents the effect is nearly inaudible on most material; above about 20 cents the ear stops hearing width and starts hearing an out-of-tune second voice. Pads take more than vocals, and low instruments take less than high ones, because the beat rate scales with frequency.

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin, $29, VST3, AU and standalone on Mac and Windows, and it detunes the third way: by speed. **PITCH** and **TIME** move independently, so the offset and the length are two decisions rather than one — lock either and play the other. Because the offset is a change in playback rate rather than a splice, there is no grain window to hear on a transient. **ELASTIC** makes the knob sprung: move it, let go, and it runs home, with **SLOPE** choosing the return shape out of sixteen. **SAMPLING GRADE** steps the rate down when the copy should not share the original's bandwidth, and LO-FI 2 runs at 3.9 kHz. Two copies, one sent up and one sent down, and the width is built out of speed.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25.

Those two guitar takes are still hard panned. Now they survive the car.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
