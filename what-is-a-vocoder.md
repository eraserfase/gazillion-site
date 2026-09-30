# What is a vocoder

> A vocoder stage by stage: the filter bank, the envelope followers, the carrier, what band count changes, and where the robot impression comes from.

Source: https://gazillionindustries.com/what-is-a-vocoder/  
Published 2026-09-29, updated 2026-09-29. By Gazillion Industries, who make WINNETKA.

---

Somebody in the session asked how the robot voice on the record was done, and three people answered with three different words. Vocoder. Talk box. Autotune. Two of those were wrong, and nobody in the room could say which two.

A vocoder puts the shape of one sound onto another. A bank of band-pass filters splits the first signal — the **modulator**, usually a voice — into narrow frequency bands. An envelope follower measures the level inside each band, moment to moment. Those measurements set the gain of matching bands on the second signal, the **carrier**, usually a synth. What leaves the box is the carrier wearing the voice's spectral shape. The words belong to the modulator. The pitch belongs to the carrier.

## The short version

- **Vocoder**: a filter bank that measures one signal's spectrum and imposes it on another

- **Modulator**: what it listens to, usually a voice, split into bands and measured

- **Carrier**: what you actually hear, usually a synth, and the pitch on the record is its pitch

- **Band count**: how finely the shape is traced — more bands read the vowel, fewer smear it

- **Sibilance**: s and t carry almost no tone, so most designs add a separate high path

- **Ours**: [WINNETKA](https://gazillionindustries.com/winnetka/), $49, a polysynth with a 16-band vocoder and 40 vocoder presets, twelve of them holding a vowel so they play with no microphone

## How does a vocoder work, stage by stage

Four stages, in order, and every control on a vocoder panel belongs to one of them.

**One: the split.** The modulator hits a bank of band-pass filters running in parallel. Each passes a slice of the spectrum and rejects the rest, so sixteen filters produce sixteen versions of your voice. Take a bank spread from 100 Hz to 8 kHz: that range is a ratio of 80 to 1, and dividing it evenly across sixteen bands gives each band a ratio of about 1.32 to 1, roughly four tenths of an octave, a little wider than a third-octave EQ band at 1.26 to 1. A vocoder is [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/), sixteen times over.

**Two: the measurement.** Each stream goes into its own envelope follower, which throws away the waveform and keeps the level. Rectify, then smooth. What survives is one number per band: sixteen numbers describing the shape of your mouth, updated continuously. The smoothing time is what matters musically — short catches every consonant, long averages across syllables.

**Three: the application.** The carrier passes through a second filter bank tuned to the same sixteen slices, and each slice hits an amplifier whose gain is the matching number from stage two. Band 4 of the carrier gets as loud as band 4 of your voice, thousands of times a second.

**Four: the sum.** The sixteen shaped bands are added back together and sent to the output. That sum is the vocoder sound.

Notice what never happens. The modulator is measured and discarded, and every sample at the output came out of the carrier, so if the carrier has no energy in a band, turning that band up produces nothing. Sing the clearest consonant of your life into a sine wave and you will hear silence.

## What does vocoder mean, and why it splits the voice at all

The word is a blend of *voice* and *coder*, per the Wiktionary entry for vocoder, read September 29, 2026. The second half is the half people forget, and the half that explains the machine.

A vocoder began as a way to send speech down a wire. The IEEE's Engineering and Technology History Wiki, on its Vocoders and Voders page, read September 29, 2026, credits the engineer Homer Dudley and a team of researchers at Bell Telephone Laboratories with inventing the vocoder in the late 1930s, and states the problem: engineers wanted a way to pack two or more telephone conversations onto lines that could ordinarily carry only one. Analyze the speech, transmit the much smaller description, rebuild the sound at the far end. The same page says the point was to reduce the volume of information transmitted.

Read that against the four stages and the design stops looking arbitrary. Sixteen slowly moving band levels are a tiny fraction of the data in a waveform, and they carry most of what makes speech intelligible. The filter bank was never about tone. The filter bank is the compression scheme.

## What the band count actually changes

Band count sets the resolution of the tracing, and nothing else. It decides how many measurements describe your mouth at any instant, and so how much of the difference between one vowel and the next survives the trip.

The difference between *ee* and *oo* is which parts of the spectrum are loud. Your mouth is a tube with resonances in it, and the peaks those resonances produce are called formants. A vocoder can only reproduce a peak if it has a band sitting where the peak is. Four bands average the whole range into four numbers, enough for rhythm and almost nothing else. Sixteen put the lowest formants in different bands, which is where vowels start to separate. Keep adding and the returns arrive slowly while the filters narrow and the carrier has to be denser to fill them. [Formant shifting](https://gazillionindustries.com/formant-shifting/) covers moving those peaks without moving the pitch.

Placement matters as much as count, and no spec sheet mentions it, so the only honest comparison of two vocoders is saying the same line through both.

WINNETKA runs sixteen bands and draws all sixteen on the screen, low on the left, so you watch what the vocoder is hearing rather than guess. The panel folds them into eight controls: the knobs read BAND 1 to BAND 8 and each holds two neighboring bands, eight times two being the full sixteen. LEVEL A and PAN A hold the lows, bands 1 to 4; LEVEL B and PAN B hold bands 5 to 8, each pair placed across 127 positions from −63 hard left to +63 hard right.

## Carrier choice: what the shape gets painted on

The carrier decides whether any of this works. A vocoder can only shape what the carrier already contains, so it has to be harmonically dense and it has to keep sounding while you talk.

Dense first. A sawtooth has energy at every harmonic of its fundamental, so all sixteen bands have something to open. A sine has one partial, so fifteen bands are shaping silence, and every thin unreadable vocoder is a carrier problem before it is anything else. Sustained second: a carrier with a fast decay drops out halfway through the word, so set full sustain and no decay and let the gate decide when sound stops. Detuning voices against each other fills the gaps up top, where one oscillator's partials sit far apart.

In WINNETKA's VOCODER mode the MIXER row is the carrier: **OSC 1**, **INST** and **NOISE**. OSC 1 offers saw, pulse, triangle, sine, a voice-like VOX wave, a TABLE of 64 stored waves, noise, and the audio input itself. On VOX, CONTROL 1 moves that wave's own formant from dark to bright, so the carrier arrives with vocal character before the vocoder touches it. There is no OSC 2 in this mode, so SINE's CONTROL 1 adds harmonics instead of cross-modulating. INST is the right input channel, so a guitar or a pad can carry the shape instead, and TRANSPOSE moves the carrier ±24 semitones without touching that shape.

## The sibilance problem, and the two fixes

Say "sister" through a vocoder with nothing set up and you hear something close to "ih-uh". The s disappears. It is the oldest complaint about the format, and it comes straight out of the mechanism.

An s is noise. So is an f, an sh, a t and a k. No pitch, no harmonic series, almost all the energy high up, gone in a few tens of milliseconds. The filter bank measures them perfectly well; stage three is where it breaks. Up where the fricatives live, a pitched carrier's partials are widely spaced and weak, so opening the top bands lets through a handful of thin harmonics rather than a wash of noise. The measurement is right and the material to paint it on is missing.

**Fix one: a separate high path.** Send the top of the modulator around the filter bank and straight to the output, so the s you hear is your actual s sitting on top of synthesized vowels. WINNETKA does this with **HPF LEVEL**, which its manual describes as sending the top of the voice, above about 4 kHz, straight to the output so the s's and t's cut through. Hiss, breath and room noise above that point go out too, which is what **HPF GATE** is for: light it and the top end only passes while you hold a key.

**Fix two: noise in the carrier.** If the top bands have nothing to open, give them something. White noise alongside the oscillator puts broadband energy across the range, and the filter bank shapes it into the consonant the same way it shapes the oscillator into the vowel. WINNETKA keeps NOISE next to OSC 1 in the MIXER row. Too much turns the patch breathy, so add it while speaking hard consonants, not while holding a chord.

The third thing is not a fix, but it decides whether the first two matter: what arrives at the input. Close to the microphone, over-enunciated past the point that feels silly, level steady, because a follower cannot measure what was never captured. The same thinking runs through [the telephone effect on vocals](https://gazillionindustries.com/telephone-effect-on-vocals/), from the other direction.

[WINNETKA](https://gazillionindustries.com/winnetka/) is our polysynth with a 16-band vocoder, $49, with the gate, the high path for the s's and t's, formant shift and shape hold on the panel rather than buried in a menu. Forty of its 350 presets are vocoder presets and twelve of those hold a vowel inside them, so the whole thing can be heard before a microphone is plugged in. There's a demo on the page.

## Where the robot impression comes from

Four things make a vocoder sound like a machine, and each can be turned up or down.

**The pitch is held.** Whatever key you press is the pitch, exactly, with no drift. A human voice wanders by a few cents constantly, even on a held note, and the absence of that wander is most of the effect.

**The spectrum is quantized.** A real mouth slides its formants continuously from one vowel to the next, and sixteen bands turn that slide into sixteen gains rising and falling. The glide becomes a staircase. Fewer bands, taller steps.

**The timing is smoothed.** The envelope follower averages over some window, and that window is a low-pass filter on the diction. WINNETKA calls it **E.F. SENSE**: low values catch every syllable, high values smear them, and at 127 the shape stops following the voice and holds.

**The polyphony is impossible.** Sing one line, hold a four-note chord, and four pitches come out saying the same words in sync. Nothing biological does that, and a listener hears it as a machine before they can explain why.

Two other boxes get called robot voices and neither one is a vocoder. A **talk box** sends a driver's output up a plastic tube into the player's mouth and mics the result, so the filtering is anatomy rather than electronics, which is why a talk box sounds like a person where a vocoder sounds like a device. A **ring modulator** multiplies the voice by a fixed tone and outputs the sums and differences, which is the metallic one.

## Vocoder vs autotune: two different machines

No, a vocoder is not autotune. The two do opposite things to a voice.

Pitch correction tracks the fundamental of your voice, compares it to a scale you chose, and shifts the whole signal to the nearest allowed note. The voice at the output is your voice, moved. Turn the control that sets how fast it moves all the way up and it steps between notes instead of gliding, and that stepping is what people mean when they call a record autotuned. A vocoder never moves your pitch, because your pitch never reaches the output.

Three tells separate them on a record:

- **Chords.** Four notes of the same lyric, in tune and in sync from one take, is a vocoder. Pitch correction tracks one fundamental and gives one note back.

- **Silence.** Stop playing keys and a vocoder goes quiet however loud you sing, because the carrier stopped. Pitch correction keeps passing audio.

- **Texture.** Pitch correction leaves the grain of the voice intact: the breath, the rasp, the room. A vocoder replaces all of it with oscillator.

They share one failure, which is where the confusion starts: both go wrong at the formants. A pitch shift that moves the whole spectrum drags the formants up with the fundamental, which is how a voice ends up sounding like a small animal. [Chipmunk soul](https://gazillionindustries.com/chipmunk-soul/) is that artifact turned into a style on purpose, and [the pitch shifter roundup](https://gazillionindustries.com/best-pitch-shifter-plugins/) covers the tools that hold formants still while the pitch moves. If the record you are chasing has the voice's own grain in it, you want a shifter. If it has synth in it, you want a vocoder.

## How to hear each part on its own

Every argument above is checkable in about two minutes, and the checks convince faster than the explanations. Take the machine apart in this order.

**The carrier with no voice.** Turn the input gate off — on WINNETKA, THRESHOLD at 0 — and hold a chord in silence. That is the raw carrier with every band wide open. If it sounds thin here it will sound thin with words on it.

**The modulator with no carrier.** Bring the carrier level to zero and raise DIRECT, which passes your voice dry into the output. Hearing the measured signal clean tells you whether a missing consonant was lost in the vocoder or was never sung.

**The shape by itself.** Press HOLD. The band levels freeze and keep playing with no input at all, so you can move around the keyboard and hear one vowel on every note. WINNETKA saves that frozen shape with the preset, which is how twelve of its forty vocoder presets play a vowel with no microphone near the computer. Letting HOLD go sets E.F. SENSE to 20 and the shape follows your voice again.

**The band structure.** With a shape held, move FORMANT SHIFT from −2 to +2. Each step slides the whole pattern one band, and the vowel changes identity while nothing about your voice changes. CUTOFF does the same smoothly, up to two bands either way, and RESONANCE sharpens each band. That is the fastest way to learn what sixteen bands means: you are moving the tracing while the thing being traced stands still.

## Set up a vocoder part

- **Put the vocoder on its own track** and switch the mode to VOCODER.

- **Route your voice to the vocoder's input.** In Ableton Live, set the voice track's Audio To to the WINNETKA track, pick Audio In-WINNETKA below it, and set Monitor to In for a live microphone. In other DAWs, send the vocal track to WINNETKA's audio input.

- **In the standalone app, open Settings from the notice at the top of the window**, choose your input, untick Mute audio input, and wear headphones.

- **Set THRESHOLD to 0** and hold a chord with no voice.

- **Choose saw or pulse on OSC 1** and set MIXER OSC 1 to 127.

- **Speak at performance level, then raise THRESHOLD** until room noise stops opening the vocoder.

- **Set GATE SENSE for how long the gate stays open after the voice stops**, anywhere from 2 ms to 2 s.

- **Set E.F. SENSE low for syllable detail**, higher for a smeared shape.

- **Raise HPF LEVEL until the s's and t's come through**, then light HPF GATE.

- **Add NOISE in the MIXER row while speaking hard consonants**, not while holding a chord.

- **Set FORMANT SHIFT one band at a time**, and use CUTOFF for smaller moves.

- **Check the part in mono and on a phone speaker** before you print it.

## Questions people ask

### What is a vocoder?

A processor that measures the spectrum of one signal and imposes it on another. Band-pass filters split the modulator, usually a voice, into narrow bands; envelope followers measure each band's level; those levels set the gain of matching bands on the carrier, usually a synth. What you hear is all carrier.

### Is a vocoder autotune?

No. Pitch correction finds the pitch of your voice and moves it to a note in a scale, leaving your voice in the signal. A vocoder discards your pitch and uses only the changing shape of your spectrum to control a synth. The test is a chord: a vocoder sings four notes of one lyric at once, and pitch correction has only ever had one pitch to work with.

### Do I need a microphone to use a vocoder?

Not always. A modulator can be anything with a moving spectrum: a drum loop, a pad, a guitar. Some instruments also store a frozen shape, so a vowel lives inside the preset and plays with no input. Twelve of WINNETKA's forty vocoder presets do this, 30 percent of that bank playable the second you load it.

### What should I use as the carrier?

Something harmonically dense and sustained. A saw or a pulse has energy in every band and holds it for as long as you are talking, where a sine has one partial and leaves most bands with nothing to shape. Mix in a little noise if the consonants still are not landing.

### Why can I not understand the words?

Five causes, in the order worth checking. The carrier is too simple, or decaying too fast. The consonants have nothing to open, so raise the high path or add noise. The envelope follower is slow and is averaging your syllables. The gate is closing early. The diction was soft going in.

### How do robot voice boxes work?

Three machines get that name. A vocoder measures the voice's spectrum and paints it onto a synth, keeping the words and replacing the voice. A talk box pushes a driver's output up a tube into the player's mouth and mics the result, keeping the voice and changing the source. A ring modulator multiplies the voice by a fixed tone, scattering the harmonics and wrecking both.

### What is the best vocoder plugin?

Ours, if you want the vocoder attached to a synth worth playing on its own. WINNETKA is $49: a 16-band vocoder with the gate, the high path, formant shift, resonance and shape hold on the panel, plus a full polysynth to carry it and 350 presets around it. Our free plug-in is [DRUGS](https://gazillionindustries.com/drugs.html), a one-knob drum bus compressor, so that is the free way to get one of ours into your session and not a free way to get a vocoder. If the synth side is the gap, [best synth VST under 100](https://gazillionindustries.com/best-synth-vst-under-100/) is the same decision sorted by price.

## What WINNETKA does

[WINNETKA](https://gazillionindustries.com/winnetka/) is our polysynth with a vocoder in it, $49, for Mac and Windows. Three modes: **SINGLE** plays one timbre, up to 128 voices at once in POLY; **LAYER** plays two timbres on every key, each with its own full set of rows and 64 voices each in POLY; **VOCODER** turns the rows into the vocoder's own. UNISON stacks four voices on every note, two per timbre in LAYER, spread by DETUNE. The vocoder runs **sixteen bands**, drawn on the screen low on the left. Its AUDIO IN row carries **GATE SENSE**, **THRESHOLD**, **HPF LEVEL** and **HPF GATE**. Its MIXER row carries the carrier: **OSC 1**, **INST** on the right input channel, and **NOISE**. Its FORMANT row carries **SHIFT** across −2 to +2, **CUTOFF** at ±63 for slides up to two bands either way, **RESONANCE**, **E.F. SENSE** and **HOLD**. FC MOD moves the whole shape from the amp envelope, an LFO, velocity, key track or either wheel, up to four bands either way. LEVEL A, LEVEL B, PAN A and PAN B set the level and the stereo place of all sixteen bands in eight pairs. Around it: a filter with four types, F-ADSR and A-ADSR, two LFOs, four patch cords, a three-band EQ with ±12 dB on each band, mod effects, delay, and a sixteen-step arpeggiator with twelve patterns and rates from 1/1 down to 1/64. **350 presets** — 65 bass, 60 lead, 65 pads, 40 FX, 35 perc, 45 arp and 40 vocoder. AU, VST3 and standalone on macOS 10.13 or later, Apple Silicon and Intel; VST3 on Windows 10 or later, 64-bit. The key is in your receipt email and on your download page, activates online once, then works offline.

Back to the session and the three answers. Play the line through a vocoder and hold a four-note chord under it. Whatever that record was, you will know inside a bar whether this was it.

---

## About WINNETKA

WINNETKA — a polysynth with a vocoder and 350 presets. AU, VST3 and standalone on Mac, VST3 on Windows.

https://gazillionindustries.com/winnetka/
