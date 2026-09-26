# Best lead synth VST: how to choose a synth lead plugin

> What makes the best lead synth VST: one voice, glide, filter slope and modulation you can reach, plus the paid and free synth lead plugins people name.

Source: https://gazillionindustries.com/best-lead-synth-vst/  
Published 2026-09-26, updated 2026-09-26. By Gazillion Industries, who make JOURNEYMAN.

---

The beat is finished and the lead is the problem. It plays the right notes in the right register, and in the car it still sounds like a keyboard demo somebody left running underneath the drums — present, in tune, carrying none of the tune.

For a single melodic line, the best lead synth VST is a monosynth: one voice, so each note hands over to the next instead of stacking on top of it, with glide, note priority and a filter you can play with your hands. [JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is ours, $59, and it is the plug-in worked through below. After that, the mechanism, a build from scratch, and the other synths people name.

## The short version

- **The job**: one line, one note at a time, loud enough to carry the melody

- **Why mono**: glide, note priority and single trigger only exist when there is one voice

- **What decides it**: filter slope and resonance, a fast attack, modulation under your hands

- **What to use**: [JOURNEYMAN](https://gazillionindustries.com/journeyman.html), $59 — three oscillators, two ladder filters, glide, 200 programs

- **Free route**: Vital's Basic tier, Surge XT, and the synth already in your DAW

- **Worst habit**: building the lead as a chord, then fighting it for the rest of the mix

**One voice, laid out in the order you build it.** Oscillators and mixer top left, filters and envelopes right, everything that moves on its own along the bottom.

## What a lead actually has to do

A lead carries the melody over everything else in the arrangement. That is one sentence with three demands buried in it: it has to be heard through a dense mix, it has to be recognizable after four bars, and it has to sound like one instrument rather than a stack of them. Most synth leads fail the third test before they get near the first two.

The register is where the trouble starts. A lead usually lives between roughly 500 Hz and 4 kHz, which is also where the ear is at its most sensitive and where the vocal, the snare and the top of the sample all want to be. You are not competing with the low end. You are competing with everything that survives a phone speaker, and that fight is covered in [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/).

A lead also has to move. A held note with a fixed timbre stops being information about eight seconds in. Something has to change while the note sounds, or the listener files the part as furniture and goes back to the drums.

## Why the best lead synth VST is usually a monosynth

A monosynth plays one note at a time. That reads like a limitation on a spec sheet and it is the reason the category exists. When an instrument can only hold one note, the engineering goes into what happens between notes rather than into how many can sound at once, and between notes is exactly where a lead lives.

### One voice means the notes connect

Play a fast run on a polysynth with any release at all and the tails overlap. Six notes into a sixteenth-note line you have four voices sounding, the filter envelope has retriggered four times, and the sum is a smear with the rhythm buried in it. A single voice cannot do that. Each new note takes the voice over, and the line stays a line.

You can hear it on a laptop speaker. Bounce the same MIDI through both and the mono version reads as a melody while the poly version reads as a texture. Neither is wrong. Only one of them is a lead.

### Note priority and trigger, the two settings nobody reads

When two notes overlap on a one-voice instrument, something has to decide which one wins. **Last** priority gives the voice to the most recent key, which is what you want for a played line. **Low** and **high** priority hand it to the bottom or top note instead, which is how you play a moving line against a pedal tone with one hand.

Trigger mode is the companion setting. On **multi** trigger every new note fires both envelopes again, so each note has its own attack. On **single** trigger an overlapping note takes the pitch without restarting the envelopes, so a legato phrase opens once and stays open. Those two switches change the feel of a part more than any preset will.

### Glide is a lead instrument's accent

Glide slides the pitch from the note you left to the note you arrived at, over a time you set. Around 20 to 60 ms it reads as an accent on the front of the note. At 200 ms and up it reads as a slide and starts eating the rhythm. Paired with single trigger it only runs when notes overlap, so you play the slides in rather than program them: hold the last note a sixteenth longer than you should and the next one arrives bent.

[JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is our monosynth for Mac and Windows: one voice, three oscillators, two ladder filters spread left and right, two envelopes, two modulation busses and 200 programs across basses, leads, keys, pads, percussion and fx. There's a demo on the page.

## What separates the best synth lead plugins from the loudest ones

Most of the difference between synth lead plugins comes down to seven things, none of which appear in the marketing, and each one can be checked in your own session in a minute.

### Detune between oscillators, and how slow it beats

Two oscillators at slightly different pitches beat at the difference frequency. Tune them 1 Hz apart and the amplitude swells once a second; 5 Hz apart and it flutters. For a lead the slow end is the one that sounds like an instrument, because the swell happens over a note rather than inside it. What varies between synths is resolution: sweep the fine tuning slowly on a held note and listen for jumps. The same principle applied to whole tracks is in [detune plugins](https://gazillionindustries.com/best-detune-plugins/).

### Filter slope, stated in poles

A low-pass filter's steepness is measured in poles, and each pole sheds 6 dB per octave above the corner. Four poles roll off at 24 dB per octave and close down to something dark and hollow; three poles roll off at 18 dB per octave and leave more of the top audible at the same cutoff setting. For a lead that has to be heard, the shallower option often survives the mix better. Being able to choose matters more than which one a synth ships with — the mechanism is in [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/).

### Resonance that stays playable

Resonance lifts a peak at the corner frequency. A little makes a filter sweep sing; too much turns the synth into a sine wave at the cutoff and takes the body with it. Park the cutoff around 800 Hz, raise resonance to the top, and play a two-octave run. If the loudness swings wildly as notes pass under the peak, you will be fighting that on every part you write.

### Two filters, and what they do to your stereo image

Running a voice through two filters at different cutoffs, one panned left and one right, makes a mono source sound wide. It is a real width with a real cost: the two sides no longer contain the same signal, so summing to mono changes the tone. Check it before you commit — the mechanism is in [phase cancellation](https://gazillionindustries.com/phase-cancellation/) and the test is in [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

### An envelope with a genuinely fast attack

The front of a note is where a lead announces itself. If the fastest attack setting still takes 10 ms to reach full level, every note starts soft and the part sits behind the drums however loud you make it. Record the synth to an audio track, zoom in on one note, and look at the first rise. The waveform tells you in a second what a spec sheet will not.

### Oscillator sync and cross-modulation

Hard sync restarts one oscillator every time another completes a cycle. You get a fixed pitch with a timbre that changes as the synced oscillator is swept, which is the hard, vocal, tearing lead you already recognize. Frequency modulation between two audio-rate oscillators gives the other family: bells and metal at low amounts, chaos above that. Both throw harmonics far above the fundamental, so sweep a synced lead up two octaves and listen for tones moving the wrong way. That is [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/), and once you hear it you cannot unhear it.

### Modulation you can reach while playing

A matrix with forty slots is a sound design tool. A mod wheel wired to one destination with an amount you set is a performance tool, and a lead is performed. The question to ask of any synth lead VST is not how many routings it has but how many of them your hands can get to without stopping the transport.

## Build a lead from scratch

Building one from a single oscillator takes about ten minutes and is the fastest way to learn where an instrument hides its character. The steps are written for JOURNEYMAN's panel; the order works on any monosynth.

- Press INIT to clear the panel to a starting state.

- Set OSC 1 OCTAVE to 8' and turn WAVE to the sawtooth position.

- Raise OSC 1 in the MIXER until the level reads healthy and the OVERLOAD lamp stays dark.

- Play the melody in and move OCTAVE until the line sits above the bass and below the hats.

- Switch OSC 2 on, set its OCTAVE to 8', and turn FREQUENCY until you hear one beat per second.

- Set OSC 3 OCTAVE to 16' and bring it up under the other two until the line has weight.

- Close CUTOFF until the top stops hissing, then raise RESONANCE until the corner sings and back it off one mark.

- Set FILTER ENV ATTACK to 0, DECAY to about 3, SUSTAIN to about 5, then raise AMOUNT until each note opens.

- Set VOLUME ENV ATTACK to 0 and RELEASE short enough that the notes stop when you do.

- Turn GLIDE on and set GLIDE RATE so a jump of a fifth arrives in roughly 40 ms.

- Set TRIGGER to SINGLE so the glide only runs between overlapping notes.

- Set the MOD WHEEL BUS DESTINATION to OSC 2 with a low AMOUNT, then ride the wheel on held notes.

- Bounce eight bars and play them on your phone before you save the program.

## Where the synth lead sits in the mix

A lead that needs volume to be heard is usually a lead with the wrong spectrum. Before you reach for the fader, find the two or three narrow bands where the part actually speaks and check that nothing else is sitting in them. On most records the lead and the vocal are fighting over the same 2 to 4 kHz, and one of them has to give it up.

Saturation is the cheaper fix. Harmonics above the fundamental give a part presence on small speakers without adding level, which matters because most phone speakers give you almost nothing below a few hundred hertz. Mechanism in [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/), practice in [how to make a synth sound thicker](https://gazillionindustries.com/how-to-make-a-synth-sound-thicker/), small speakers in [bass on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

Compression on a lead is about evenness rather than loudness. We give away a one-knob compressor for that job: [DRUGS](https://gazillionindustries.com/drugs.html) is free for Mac and Windows, and the wider list is in [best free compressor](https://gazillionindustries.com/best-free-compressor/). Set your levels first either way — a synth clipping inside the plug-in sounds like a synth with a bad filter, and the fix is three dB lower rather than a different instrument. See [gain staging](https://gazillionindustries.com/gain-staging/).

## The synth lead plugins people name, and ours

Search this term and you will get a list of large polyphonic synths, because large polyphonic synths are what people own. They all make a lead sound. The question is whether you want an instrument built for one line or a workstation you have to talk into playing one.

### Gazillion Industries JOURNEYMAN

Our monosynth, $59, Mac and Windows. One voice, three oscillators, two ladder filters with a spacing control between them, two ADSR envelopes, an LFO, two modulation busses and 200 programs. The performance controls — glide, note priority, trigger, bend range, the touch surface — are on the front panel rather than in a menu. Full description at the bottom of this page.

### Xfer Records Serum 2

$249.00 USD on Xfer's own site, where it is described as an advanced hybrid synthesizer. It carries wavetable, multisample and sample oscillators, flexible effect routing, an arpeggiator and a clip sequencer. The default answer in most forum threads, and a very large instrument to open when you want one line.

### u-he Diva

179 € on u-he's own page. Diva's panels are swappable: you pick which oscillator, filter and envelope sections to load and combine them into a layout of your own. Polyphonic, widely used for leads, and it will have you setting voice count and CPU options before you touch the part.

### Native Instruments Massive X

Native Instruments describe it on their own product page as a next-generation polyphonic wavetable synth. The preset library is enormous, and like the others here it will hand you a lead once you tell it to play one note at a time.

### LennarDigital Sylenth1

Four unison oscillators, each capable of eight unison voices in full stereo, which LennarDigital's own page totals at 32 voices per note across 16-note polyphony, plus two filter sections of four stages each. It is still one of the fastest routes to a wide supersaw. Wide is the point, and wide is the opposite of what a monosynth is for.

## Free synth lead VST options worth the download

There are good free ones. None are monosynths, so the note handoff above still applies, but if the budget is zero today, start here.

### Vital

Vital's Basic tier is free on the developer's own site and includes the full synth with all features, 75 presets and 25 wavetables; the paid tiers add presets and wavetables rather than capability. For anybody learning what modulation does, the animated display alone is worth the download.

### Surge XT

Free and open source under GPL3, per the project's own FAQ, with several synthesis methods, a large filter collection, MPE and microtuning. The interface is dense and the preset library is uneven, which is the trade for a synth nobody is charging you for. More in [best free VST plugins](https://gazillionindustries.com/best-free-vst-plugins/).

### The synth already in your DAW

Every major DAW ships a subtractive synth with oscillators, a filter and two envelopes, and most of them have a mono or legato switch buried in the voice settings. Find that switch before you download anything. It will tell you whether the problem with your lead was the instrument or the arrangement.

## What a monosynth costs you

One voice means no chords. If your part has two notes sounding at once anywhere, a monosynth plays one and drops the other, and you find out during the bounce rather than during the take. The workaround is a second instance on a second track, which costs you the shared glide and shared filter movement that made you want one voice to begin with.

A single voice also exposes your playing: no second note to hide behind, no tail from the previous chord smoothing over a late attack. That is a cost, and it is also why the good leads on records sound played rather than drawn.

## Four mistakes worth not making

**Writing the lead last.** A melody written over a finished arrangement inherits every hole that arrangement left, which is usually the wrong register. Write the line early, even if you replace the sound later.

**Solving a dull lead with more detune.** Detune widens. It does not make a part more interesting, and past a certain amount it makes the pitch ambiguous, which on a melody is fatal. If the line is boring, the line is boring.

**Automating the filter instead of playing it.** A drawn curve has the rhythm of a mouse. Assign cutoff to the mod wheel or the touch surface, record a pass, keep the take — the long version is in [how to make a filter sweep](https://gazillionindustries.com/how-to-make-a-filter-sweep/).

**Judging the sound in solo.** A lead that sounds thin alone is often perfect in the mix, and one that sounds huge alone is usually eating the vocal. Solo finds problems. It does not make decisions.

## Questions people ask

### What is the best lead synth VST?

For a single melodic line, a monosynth, because one voice is what gives you glide, note priority and single trigger — the three things that make consecutive notes behave like an instrument rather than a stack. JOURNEYMAN is ours: $59, Mac and Windows, three oscillators, two ladder filters and 200 programs. If you already own a large polysynth, switch it to mono or legato first and hear what changes before you buy anything.

### What is the best lead synth plugin for a beginner?

The one with the fewest pages. You learn faster on a panel where every control is visible at once and you can change one thing at a time. A monosynth is the smallest complete instrument there is: oscillators into a mixer, mixer into a filter, filter into an amplifier, with two envelopes and an LFO moving things. Learn that layout and every other synth becomes readable.

### Is there a good free synth lead VST?

Yes. Vital's Basic tier is free on the developer's site and gives you the full synth with all features, 75 presets and 25 wavetables. Surge XT is free and open source under GPL3 according to the project's own FAQ. Before either, look for the mono or legato switch in the synth your DAW already installed; it costs nothing and it answers whether you needed a new instrument at all.

### What is the best synth lead VST for hip-hop and trap?

The same answer, for a specific reason: those genres put the lead in a duet with an 808, and an 808 occupies the bottom two octaves completely. A monosynth with a three-pole filter setting and a fast attack gives you a line that sits above it with no low-end fight at all. Pair it with saturation rather than volume, as in [saturation plugins](https://gazillionindustries.com/best-saturation-plugins/).

### Do I need a monosynth if my synth has a mono mode?

No, and it is the right first test. Mono mode on a polysynth gives you the one-voice handoff and usually a glide control, which covers most of the benefit. What it rarely gives you is note priority, a trigger mode switch, and a panel where the performance controls are reachable while the transport runs. Try the switch. If you find yourself wanting those three, the dedicated instrument is the upgrade.

### Why does my synth lead disappear in the mix?

Usually one of three things. The attack is too slow, so every note starts underneath the drums instead of on top of them. The cutoff is too low, so there is nothing above 3 kHz for a small speaker to reproduce. Or the part occupies the same 2 to 4 kHz as the vocal, in which case volume will not fix it and a narrow cut in the other part will.

### What is the best synth lead plugin for playing live?

Whichever one puts its expression controls on the surface. On stage you need pitch bend range, glide, filter cutoff and one modulation amount reachable without a mouse, and a standalone version helps because it removes a DAW from the signal path. JOURNEYMAN runs standalone on macOS and as a VST3 plug-in on Windows, with a touch surface mapping cutoff to X and filter spacing to Y.

## What JOURNEYMAN does

JOURNEYMAN is our monosynth for Mac and Windows: AU, VST3 and standalone on macOS, VST3 on Windows, universal binary, macOS 10.13 or later and Windows 10 or later, 64-bit. One voice, and a panel where the whole signal path is visible at once.

**Three oscillators.** Each has an OCTAVE control marked in footages and a WAVE control that sweeps continuously from triangle through sawtooth and square to pulse, so the waveform is a position rather than a menu choice. Oscillators 2 and 3 add a FREQUENCY control for detuning against oscillator 1. **1-2 SYNC** hard-syncs the second oscillator to the first; **3-1 FM** routes the third into the first as a modulator. **3 KB CONT** and **3 FREQ LO** take oscillator 3 off the keyboard and down into low frequencies, which turns it into a second modulation source.

**A five-channel MIXER.** OSC 1, OSC 2, OSC 3, NOISE and EXT IN each get a level knob and an on switch, with an OVERLOAD lamp above them. External audio in means the filters and envelopes are available to anything else in your session.

**Two ladder filters.** One CUTOFF knob drives both, with **SPACING** setting how far apart they sit and the pair spread left and right for width. **RESONANCE** and **KB AMT** are shared, the section switches between **DUAL LP** and **HP:LP**, and FILTER A POLES and FILTER B POLES each select 3 POLE or 4 POLE independently.

**Two envelopes and an LFO.** FILTER ENV is an ADSR with its own AMOUNT into the cutoff; VOLUME ENV is an ADSR with an ON/EXT switch. The LFO has RATE and SYNC plus sample and hold, with FINE TUNE and GLIDE RATE beside it.

**Two modulation busses.** The MOD WHEEL BUS and the PEDAL/ON BUS each have SOURCE, SHAPING, DESTINATION and AMOUNT, plus a programmable source and destination pair underneath. All 200 programs are already wired to the mod wheel and the touch surface, so there is something to move on the first note you play.

**Performance.** Pitch and mod wheels on the panel, GLIDE and RELEASE switches, a MASTER level, a TOUCH SURFACE mapping X to cutoff and Y to spacing, keyboard priority and TRIGGER modes, and separate BEND UP and BEND DOWN ranges. Two spectrum meters run across the bottom, left and right, from 31 Hz to 16 kHz. The license key arrives with your download and in your receipt email; it activates once and then works offline.

Play the same eight bars in the car again. The line arrives before the drums do, the notes lean into each other where you held them, and nothing about it sounds like a demo left running.

---

## About JOURNEYMAN

JOURNEYMAN — a monosynth for Mac and Windows. One voice, three oscillators, two ladder filters, two envelopes, two modulation busses and 200 programs.

https://gazillionindustries.com/journeyman.html
