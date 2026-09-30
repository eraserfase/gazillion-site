# Best vocoder plugins

> How a vocoder turns a voice into gain values, the three controls that decide whether your words survive, and what to use in each DAW.

Source: https://gazillionindustries.com/best-vocoder-plugins/  
Published 2026-09-29, updated 2026-09-29. By Gazillion Industries, who make WINNETKA.

---

Two in the morning, a cheap USB microphone, and a robot voice that arrives as porridge. Every consonant is gone. The chord underneath is doing its job, the vowels are almost there, and nobody listening could tell you a single word of it.

A vocoder needs three things to speak: a carrier you can play, an envelope follower fast enough to catch a syllable, and somewhere for the consonants to go. Band count is the number everyone quotes and the third most useful of the three. [WINNETKA](https://gazillionindustries.com/winnetka/) is $49, carries all three, and is the vocoder worked through below. Then the mechanism, a ten-minute test, the per-DAW specifics, the free routes, and the other names.

## The short version

- **What a vocoder does**: puts the moving shape of one sound onto the pitches of another

- **The two inputs**: the carrier is what you play; the modulator is the voice that shapes it

- **What decides quality**: a playable carrier, formant control, follower speed, a path for the consonants

- **What to use**: [WINNETKA](https://gazillionindustries.com/winnetka/), $49 — a polysynth with a 16-band vocoder, 350 presets, Mac and Windows

- **Free route**: your DAW's own vocoder device, or Surge XT's 20-band vocoder effect

- **What it costs**: routing you wire once, and a vocal take with real diction

**Twenty-one rows, five knobs.** Press a key in EDIT SELECT and the five knobs under the screen take on that row's jobs. Press VOCODER and the rows change to the vocoder's own.

## So what is the best vocoder plugin?

Three different products answer to the name, and buying the wrong one accounts for most of the disappointment in the category. A **vocoder instrument** carries its own synth, so you play notes and speak and it works. A **vocoder effect** has no carrier of its own and makes you supply one from another track. A **vocal processor** bundles vocoding with tuning, harmony and doubling, and treats the vocoder as one module among several. Decide which of the three you are buying before you read a single recommendation, this one included.

Ours is the first kind. [WINNETKA](https://gazillionindustries.com/winnetka/) is $49, one payment, and the carrier is a full polysynth rather than a courtesy oscillator. Press VOCODER and the rows change: AUDIO IN with its own gate, a MIXER that sets what the vocoder shapes, a FORMANT row with SHIFT, CUTOFF and RESONANCE, four rows of band levels and pans, and an HPF LEVEL control that sends the top of your voice past the bands entirely so the consonants survive. Forty of its 350 presets are vocoder presets, and twelve of those hold a vowel inside them, so they speak with no microphone plugged in at all.

Where ours is the wrong answer, briefly. If you need a hundred bands and a matrix that cross-wires one band of the modulator into a different band of the carrier, that is MeldaProduction's MVocoder. If you want vocoding sitting inside a rack of tuning, harmony and stutter modules, that is iZotope VocalSynth 2. Both are below with their makers' own numbers.

## What a vocoder actually does

A vocoder measures one sound and paints the measurement onto another. Both signals run through a bank of band-pass filters tuned to the same frequencies. The level in each band of the first signal is followed continuously, and that moving level is applied as a volume control to the matching band of the second. Nothing is being synthesized from the voice; the voice is only ever a set of gain values. Which is why a vocoder can never be a one-track plug-in, and why all the setup difficulty in the category comes from that one fact.

### Carrier and modulator

The **modulator** is the sound being measured, almost always a voice. The **carrier** is the sound being shaped, almost always something harmonically dense. Ableton's own manual puts it plainly in its Vocoder documentation, describing the modulator as something with clear rhythmic character such as speech or drums, and the carrier as typically a harmonically-rich synthesizer sound.

Pitch lives entirely in the carrier. Sing a melody into a vocoder and the melody vanishes, because the analysis throws away everything except band levels. The tune you hear is the one your fingers are playing. A thin carrier also gives you a thin result: if the carrier has no energy at 3 kHz, no amount of band gain can put a consonant there, because a vocoder can only turn down what already exists. Saws, pulses and noise work. A sine does not, and a clean electric piano barely does.

### Band count, with the arithmetic

The band count is how finely the spectrum is sliced, and the number is less dramatic than the marketing suggests. Take the range most speech vocoders work across, 100 Hz to 8 kHz. That span is log2(8000/100) = 6.3 octaves. Split it evenly across 16 bands and each band covers 0.40 of an octave, a shade under a perfect fourth, with its top edge about 31 percent above its bottom edge.

Run the same span at other counts. Twenty bands gives 0.32 of an octave each, just under four semitones. One hundred bands gives 0.06 of an octave, about three quarters of a semitone. Going from 16 to 100 is a real increase in resolution and a much smaller increase in intelligibility, because vowels are told apart by two or three broad formant peaks rather than by fine structure. More bands buys accuracy and costs the grain that makes a vocoder sound like a vocoder. Sixteen is the count most people picture when they picture the effect.

### The sibilance problem

Consonants are where vocoders fall apart, and the arithmetic above explains why. An "s" puts most of its energy above 4 kHz. In the 16-band split we just did, everything above 4 kHz is one octave out of 6.3, which is 16 ÷ 6.3 = 2.5 bands. Two and a half bands cannot tell an "s" from an "f" from a "sh", so all three come back as the same wash of gain on the same two filters, and the word stops being a word.

Every serious vocoder solves this the same way: detect the unvoiced part of the signal and route it around the filter bank. Ableton's Vocoder has an Unvoiced knob with its own sensitivity and a Fast/Slow switch. Apple's Logic Pro user guide lists (U/V) detection parameters for EVOC 20 PolySynth and a whole page of tips on speech intelligibility. WINNETKA does it with HPF LEVEL, which takes the voice above roughly 4 kHz straight to the output, plus an HPF GATE key so that top end only appears while you hold a chord. A vocoder that ignores this will never be intelligible, however many bands it has.

## What separates a good vocoder VST from a bad one

Seven things, and two of them appear on a feature list. Search for the best vocoder VST plugin and you get a list of products; what follows is a list of behaviors, which is the part that still applies when the next one comes out. It is also what sorts a top vocoder VST from a demo that sounded fine on somebody else's prepared stem.

### A carrier you can actually play

The carrier is half the sound and the half most plug-ins skimp on. Two oscillators with real waveforms, a noise source, a filter and an amp envelope is the working minimum. If the carrier section is one waveform selector and a detune knob, you will spend the rest of your life routing an external synth into a sidechain to get anything with weight.

### Formant control that moves in bands

Shifting the whole analysis shape up or down turns one voice into a different one without touching pitch, and our piece on [formant shifting](https://gazillionindustries.com/formant-shifting/) covers the underlying idea. On a vocoder the control is coarse by nature, because it moves in whole bands: WINNETKA's SHIFT travels up to two bands either way, which on the split above is around nine semitones, with a CUTOFF control beside it that slides the same distance smoothly instead of stepping. RESONANCE sets how sharp the bands are, which is the difference between a soft chorus of vowels and something that whistles — our longer piece on [cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/) is the background on that trade.

### A follower with a speed control

The envelope follower decides how fast each band chases the voice. Too fast and you hear the filter bank rattling on every plosive. Too slow and consonants smear into the vowel behind them. WINNETKA calls it E.F. SENSE: low values catch every syllable, high values smear them, and at the top of the range the shape stops moving and holds. There is a HOLD key for that on purpose, and letting go drops the sense value back to 20 so you are not stuck with a frozen vowel.

### A gate you can set

Between words, a live microphone sends room, breath and preamp hiss into the analysis, and the vocoder faithfully paints all of it onto your chord. A threshold that shuts the input below a level is the fix, and the release on that gate decides whether the tail of each word survives. WINNETKA's GATE SENSE runs from 2 ms to 2 s of hold-open time, with THRESHOLD beside it and the gate off entirely at zero.

### Per-band level and pan

Most vocoders let you draw the band levels. Fewer let you place them. WINNETKA's knobs read BAND 1 to BAND 8, each covering two neighboring bands of the sixteen, across four rows: LEVEL A and PAN A hold the low four, LEVEL B and PAN B the high four. Pan runs −63 to +63, so the low half of a vowel can sit left and the high half right, and one held chord spreads across the stereo field without a single reverb. Check that in mono before you commit.

### A way to use it with no microphone

This is the feature nobody lists and everybody needs. Most vocoder work happens at a desk with no microphone set up, and a vocoder with no modulator makes no sound at all. WINNETKA ships twelve vocoder presets with a vowel held inside them, so you load one, play a chord, and it speaks. You can then export that sound, held vowel included, as a file you keep.

### Formats and the boring part

Check the formats first, because a vocoder you cannot load is not a vocoder. A standalone build matters more here than on most plug-ins, since it lets you hold a microphone and play without opening a DAW. WINNETKA is AU, VST3 and standalone on macOS and VST3 on Windows, on macOS 10.13 or later and Windows 10 or later, 64-bit, Intel and Apple Silicon.

[WINNETKA](https://gazillionindustries.com/winnetka/) is our polysynth with a vocoder: a 16-band vocoder with formant, gate and per-band pan on one side, a two-timbre polysynth with a 16-step arpeggiator on the other, and 350 presets across bass, lead, pads, FX, percussion, arp and vocoder. $49, one payment, Mac and Windows. There's a demo on the page.

## How to audition a vocoder plugin in ten minutes

Do this in your own session, on your own speakers, with your own voice. Ten minutes of it beats an hour of reading roundups, this one included, because the thing being tested is whether *your* voice comes back as words.

- Load the vocoder and route a vocal track or a live microphone into its modulator input.

- Set the carrier to a sawtooth with the filter fully open, so nothing is being removed yet.

- Hold a three-note chord around C3 and speak a sentence with hard consonants in it.

- Turn the unvoiced or high-pass path to zero and say the same sentence again.

- Bring that path back up until the consonants return without hissing between words.

- Set the input gate threshold until the room noise between words goes silent.

- Sweep the follower speed from its fastest setting to its slowest across one held phrase.

- Move the formant control one band up, then two bands down, holding the same chord.

- Play the same chord an octave lower and an octave higher without changing anything else.

- Bounce eight bars, then play it on a phone speaker and in the car.

Step ten is the one people skip, and a vocoder fails it more often than any other effect. A phone speaker gives you almost nothing under 500 Hz, so the carrier's body disappears and the 2 kHz to 5 kHz band does all the work; if the words are gone there, the problem is the consonant path rather than the level. Step nine matters for the same reason. A patch built on one chord voicing often falls apart an octave away, because the carrier's harmonics have moved and the bands have not.

## The best vocoder plugin for each DAW

The plug-in matters less than the routing here, and the routing is the only part that genuinely differs between hosts. Every one of these is the same job: get a voice to the vocoder's modulator input while MIDI reaches its carrier.

### The best vocoder plugin Ableton users already own

Live ships a Vocoder audio effect, and Ableton's manual notes it is absent from the Intro and Lite editions, which catches people out. It offers four carrier options — Noise, External, Modulator and Pitch Tracking — plus a Bands chooser, a Formant knob, Range sliders, a BW control for filter bandwidth, and a Precise/Retro switch where Retro makes higher bands narrower and louder.

For WINNETKA the wiring runs the other way and takes about fifteen seconds. Put WINNETKA on a MIDI track. On the track your voice is on, set Audio To to the WINNETKA track and pick Audio In-WINNETKA in the box underneath. If that track is a live microphone, set its Monitor to In. Play a chord, speak, done.

### The best vocoder plugin for Logic Pro

Logic ships three of them. Apple's Logic Pro user guide lists EVOC 20 PolySynth as an instrument, with Analysis controls, (U/V) detection parameters, dual-mode and FM-mode oscillator parameters, a noise generator, formant filter controls, and pages headed Tips to enhance speech intelligibility and Tips to avoid sonic artifacts. EVOC 20 TrackOscillator and EVOC 20 Filterbank are the effect versions of the same engine, and all three are free with the DAW.

WINNETKA loads in Logic as an AU instrument; send your microphone or vocal track to its audio input. The advantage over a stock device is the carrier: vocoder mode still leaves the VOICE, PITCH, OSC 1, A-ADSR and LFO rows working on it, so the thing your voice shapes is a synth you can program rather than a fixed oscillator pair.

### The best vocoder plugin FL Studio ships with

FL Studio includes Vocodex, which Image-Line's manual describes as carrying advanced articulation envelopes, an integrated carrier synthesizer, a Soundgoodizer maximizer, vocoder envelope control and up to 100 variable-width multi-parameter vocoder bands. A simpler Fruity Vocoder sits alongside it. FL users therefore have less reason than most to buy anything, and a stronger reason than most to want a different *character*, since 100 narrow bands lands somewhere very different from 16 wide ones.

WINNETKA runs in FL Studio as a VST3 on Windows and as VST3 or AU on Mac. Send your vocal track to its audio input and play the chords from the piano roll. The arpeggiator earns its keep here: set ARP B to 1/16 and at 120 BPM each step lasts 60 ÷ 120 ÷ 4 = 125 ms, so sixteen steps fill exactly one bar. Push it to 1/64 and a step is 31.25 ms, which turns a spoken word into a stutter you did not have to edit.

### The best vocoder plugin Pro Tools will load

Pro Tools wants AAX. iZotope's specification page for VocalSynth 2 lists AAX alongside AU, VST2 and VST3 and names Pro Tools among its supported hosts, which makes VocalSynth 2 the straightforward paid answer if Pro Tools is the only place you work. WINNETKA's formats are AU, VST3 and standalone on macOS and VST3 on Windows, so the reliable route into a Pro Tools session is the standalone app: run it, feed it your microphone, record the output back in as audio. One extra step, with the side benefit of committing the sound instead of re-rendering it forever.

## The vocoder plugins people name, and ours

Everything below was read on the maker's own page while writing this. Ours is first because it is the one we would put on the chord. The rest are the names you will meet everywhere else, and every one of them does something real.

### Gazillion Industries WINNETKA

[WINNETKA](https://gazillionindustries.com/winnetka/) is $49, one payment, AU, VST3 and standalone on macOS and VST3 on Windows. A polysynth with a 16-band vocoder. In VOCODER mode the AUDIO IN row gives you GATE SENSE, THRESHOLD, HPF LEVEL and HPF GATE; the MIXER row sets the carrier from OSC 1, an INST channel and NOISE; FORMANT carries SHIFT, CUTOFF and RESONANCE; E.F. SENSE and HOLD control the follower; FC MOD aims a source at the formant shape; and four rows set LEVEL and PAN for eight band pairs. Outside vocoder mode it is a polysynth running up to 128 voices on one timbre or 64 each on two layered ones, with a four-mode filter, two ADSR envelopes, two LFOs, four patch cords, a 16-step arpeggiator, a MOD FX section covering chorus, flanger, ensemble and phaser, a tempo-locked delay and a three-band EQ. 350 presets: 65 bass, 60 lead, 65 pads, 40 FX, 35 perc, 45 arp and 40 vocoder. Demos are on the page.

### iZotope VocalSynth 2

VocalSynth 2 is $199.00 on iZotope's own store page, with a free trial offered. iZotope describe five modules — Vocoder, Compuvox, Polyvox, Talkbox and Biovox — with seven stompbox-style effects in one plug-in, and three processing modes: Auto, MIDI and Sidechain. Formats are AAX, AU, VST2 and VST3, 64-bit only, and the supported-host list names Logic Pro 11, Pro Tools 2024, Ableton Live 12 and FL Studio 2024 among others. The vocoder here is one colored module inside a vocal rack, which is right if vocal processing is the job and overkill if a talking synth is.

### Arturia Vocoder V

Vocoder V is listed at 149 € with a free demo. Arturia describe a 16-channel vocoder with a built-in synthesizer carrier section, a dedicated sample player so you can vocode material other than your voice, and added effects. Their own copy makes the point that a vocoder traditionally needed an external synthesizer and that this one includes its carrier.

### MeldaProduction MVocoder

MVocoder is $56 with a free trial. Melda describe an analog-filter-based vocoder supporting up to 100 bands and up to order-10 filters, with a carrier/modulator band matrix, band distribution and resonance graphs, morphing modes, and up to 8 surround channels. It has no integrated synth: the carrier arrives through an external sidechain, which is more work per session and more freedom per session. Windows needs a VST, VST3 or AAX host; macOS adds AU.

### Waves OVox Vocal ReSynthesis

Waves describe OVox as a voice-controlled synth and vocal effects processor covering morphing, tuning, harmonizing, vocoder and talkbox effects, as a plug-in or a standalone app. Their specification tab lists zero samples of latency at 44.1 and 48 kHz and 128 samples at 88.2 and 96 kHz. Waves shows a list price of $149 next to a much lower current price on the same page, and those numbers move constantly, so read the figure on their site rather than in any roundup.

## Free vocoder plugins worth the download

Two free routes are worth having before you spend anything, and one is already installed.

### Your DAW's own vocoder

Live, Logic and FL Studio all ship one, described above with their makers' own feature lists, and none costs a thing on top of the DAW. What you give up in each case is the carrier: a stock device generally hands you a small fixed oscillator section, so the moment you want the thing your voice shapes to be a real instrument, you are routing an external synth in through a sidechain and managing two tracks for one sound.

### Surge XT

Surge XT is free and open source, and its effects list includes a vocoder. The manual gives the parameters: a 20-band algorithm with a Bands control from 4 to 20, Min Frequency from 55 to 3520 Hz, Max Frequency from 440 to 14080 Hz with bands spread evenly in pitch between them, plus Gain, Gate, Env Follow, Q, a four-way input selector, and Range and Center controls that squeeze or recenter the modulator bands against the carrier bands. Since Surge XT is also a synth, carrier and vocoder live in one plug-in, which puts it ahead of most free options. Our roundup of [free plug-ins worth installing](https://gazillionindustries.com/best-free-vst-plugins/) covers the rest of a starter chain.

We make one free plug-in and it is DRUGS, a one-knob bus compressor for drums, which answers no vocoder question at all. Our vocoder is [WINNETKA](https://gazillionindustries.com/winnetka/) at $49 with a demo on the page. If the budget is genuinely zero this month, the two above are the honest answer, and the ten-minute test works the same on both.

## What a vocoder costs you

Every effect has a bill. This one arrives in four parts, and all four are worth knowing before you spend.

It costs routing. Two signals have to arrive at one plug-in, and no DAW makes that as simple as dragging an effect onto a track. Budget five minutes the first time in each project template, save the template, and never think about it again.

It costs diction. A vocoder is a merciless test of how clearly you speak: words that read fine on a normal vocal take come back as mush, and the fix is performance rather than plug-in. Slow down, over-articulate the consonants, record closer than feels natural. Everything we say about [getting a vocal to sit](https://gazillionindustries.com/how-to-mix-vocals/) applies double once the words have to survive a filter bank.

It costs arrangement space. A vocoded part occupies 300 Hz to 5 kHz continuously and loudly, which is precisely where a lead vocal lives. Two of them in the same section fight for the whole record. Put the vocoder in the gaps, or accept that it has become the lead.

It costs a little certainty about pitch. Because the carrier holds the tune, changing the chord changes the vowel color with it, and bright open voicings speak more clearly than close low ones. That is why so many vocoder parts sit higher than instinct would put them. Our piece on [one voice against several](https://gazillionindustries.com/monosynth-vs-polysynth/) is the background on why chords behave differently here.

## Three mistakes worth not making

These come up in the same order every time, and all three are cheaper to avoid than to fix.

**Playing single notes.** A vocoder wants held chords. One note gives the analysis almost nothing to paint onto, and the result sounds like a filtered voice rather than a talking synth. Three or four notes held through a whole phrase is the shape that works.

**Singing the melody.** The pitch of the modulator is discarded, so singing a tune into a vocoder does nothing except make your diction worse. Speak it flat, at a steady level, and let the keyboard carry the melody. The one exception is rhythm: the timing of your syllables is the entire groove of the part.

**Judging it solo.** A vocoder patch that sounds thrilling on its own is usually three decibels too bright and a whole octave too wide in the mix. Print it, play the arrangement, take a band or two of the top end out. The version that sounds slightly dull in solo is the one that survives the record.

## Questions people ask

### What is the best vocoder plugin?

The one whose carrier you can program, whose formant control moves in bands you can hear, and whose consonant path is a control rather than an accident. Band count decides far less than any of those three. WINNETKA is $49, with a 16-band vocoder carrying formant shift, cutoff, resonance, a gate and per-band pan, and a full polysynth acting as the carrier. Run the ten steps above on any candidate before you spend.

### What is the best vocoder VST for vocals?

The best vocoder plugin for vocals is the one with an unvoiced or high-pass path you can set by ear, because that single control decides whether your words are words. Then an input gate, so room noise between phrases is not painted onto the chord. WINNETKA handles the first with HPF LEVEL and HPF GATE, the second with THRESHOLD and GATE SENSE. Record closer than feels natural; no plug-in fixes a mumbled take.

### What is the best cheap vocoder plugin?

Below $60 there are two real options: WINNETKA at $49, which includes the synth that carries it, and MeldaProduction's MVocoder at $56, which does not and expects a sidechain. A cheap vocoder plug-in with no carrier is not cheap in practice, since you then spend a second plug-in and a second track on every part. Our roundup of [synths under $100](https://gazillionindustries.com/best-synth-vst-under-100/) covers the wider budget end.

### What is the best free vocoder plugin?

Your DAW's own, then Surge XT. Live, Logic and FL Studio each ship a capable device, and Surge XT's free 20-band vocoder effect has the advantage of living inside a synth, so the carrier is right there. What you give up across all of them is carrier depth and, in most cases, a purpose-built consonant path.

### Is there a best vocoder plugin Reddit agrees on?

No, and the threads converge on the same handful of names — the stock DAW devices, VocalSynth 2, OVox, Vocodex — while almost never touching the thing that decides the outcome, which is whether the poster has a consonant path and a carrier with harmonics. Take the names as a shortlist and settle it with the ten-step test, since what works for a house track with a shouted hook will not work for a spoken verse.

### Do I need a microphone to use a vocoder plugin?

Not always. A vocoder needs a modulator, but the modulator can be any audio: a drum loop, a guitar, a recorded vocal from a sample pack. WINNETKA goes one step further with twelve vocoder presets that hold a vowel inside them, so they play with no audio input at all, and E.F. SENSE at its maximum freezes whatever shape is there. For anything with words, though, you need a real take.

### Why does my vocoder sound muddy and unintelligible?

Four causes, in the order they usually apply. The carrier has no high harmonics, so try a saw or a pulse instead of whatever is loaded. The consonant path is off, so raise the unvoiced or high-pass control. The follower is too slow, so syllables are merging. Or the chord is too low and too close, so the bands have nothing to separate. Fix them in that order and the fourth is rarely needed.

### Which is the best plugin for vocoder work in 2026?

Every best vocoder plugin 2026 roundup names roughly the same products, so the useful question is which of them carries its own synth. The good vocoder VST options now nearly all do, and the ones that do not have become harder to justify. Ours is WINNETKA at $49, because the carrier is a full polysynth with 350 presets rather than a pair of oscillators bolted to an analysis bank, and because the gate, the formant and the consonant path all sit on one panel.

## What WINNETKA does

[WINNETKA](https://gazillionindustries.com/winnetka/) is a polysynth with a vocoder, $49, one payment, in AU, VST3 and standalone on macOS and VST3 on Windows. Three modes: **SINGLE** plays one timbre, **LAYER** plays two at once with their own full sets of rows, and **VOCODER** turns the analysis on and swaps the rows for its own. Twenty-one EDIT SELECT keys pick a row; the five knobs under the screen take on that row's jobs and the red windows above them change to match. One timbre plays up to 128 voices at once in POLY; two layered timbres get 64 voices each. UNISON stacks four voices on every note, two per timbre when layered, spread apart by DETUNE.

The **vocoder** is 16 bands. **AUDIO IN** carries GATE SENSE from 2 ms to 2 s, THRESHOLD, HPF LEVEL for the voice above about 4 kHz, and an HPF GATE key tying that top end to your keys. **FORMANT** has SHIFT across two bands either way, CUTOFF sliding the same distance smoothly, RESONANCE for band sharpness, E.F. SENSE for follower speed and a HOLD key that freezes the shape and saves it with the preset. **FC MOD** aims an envelope, an LFO, velocity, key track or a wheel at the formant shape, up to four bands of movement. Four rows read BAND 1 to BAND 8, each knob holding two neighboring bands, with LEVEL and PAN from −63 to +63. **DIRECT** passes your dry voice through alongside it.

The **synth** underneath is the carrier and a full instrument in its own right. OSC 1 offers saw, pulse, triangle, sine, a voice-like VOX wave whose CONTROL 1 moves its formant from dark to bright, a 64-entry wave table, noise tuned to the note you play, and the audio input itself. OSC 2 adds saw, square and triangle with ring modulation, sync, and both together. **PITCH** transposes both oscillators ±24 semitones, two octaves in each direction, with fine TUNE at ±50 cents and portamento to 5 s. The filter switches between 24 dB low-pass, 12 dB low-pass, band-pass and high-pass; two ADSR envelopes run from instant to 20 s a stage; two LFOs give four shapes each with tempo lock; four patch cords route eight sources to eight destinations.

The **arpeggiator** is sixteen steps across ARP A, ARP B and STEP: twelve patterns, a range to four octaves, gate length, latch, swing to ±100 percent and rates from 1/1 down to 1/64. **Effects** run MOD FX, then DELAY, then EQ, the last with shelves at 40 Hz to 1 kHz and 1 to 18 kHz and a fixed 1 kHz bell, all ±12 dB. **350 presets** cover bass, lead, pads, FX, perc, arp and vocoder, and you can save, import and export your own as files.

Same chord, same microphone, same two in the morning. This time the consonants came back with the words attached.

---

## About WINNETKA

WINNETKA — a polysynth with a vocoder and 350 presets. AU, VST3 and standalone on Mac, VST3 on Windows.

https://gazillionindustries.com/winnetka/
