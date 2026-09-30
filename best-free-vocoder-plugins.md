# Best free vocoder plugins

> What free vocoder plugins genuinely do, which one your DAW already ships, and the three things the free field will not do for you.

Source: https://gazillionindustries.com/best-free-vocoder-plugins/  
Published 2026-09-29, updated 2026-09-29. By Gazillion Industries, who make WINNETKA.

---

Two in the morning, the hook needs the robot chorus, and the first four results for a free vocoder are a dead download host, a demo that mutes itself every thirty seconds, and a forum thread from 2013.

Four free vocoders are current and free to keep: TAL-Vocoder, FBVC from Full Bucket Music, the vocoder inside Surge XT, and the vocoder modules in Bespoke Synth. Check your own software first. Live Standard and Suite, Logic Pro, FL Studio and Reaper all ship a vocoder already, and for most people that ends the search. Pro Tools, GarageBand and Live Intro do not, and that is where a free download earns its place.

## The short version

- **Free and current**: TAL-Vocoder, FBVC, Surge XT, Bespoke Synth

- **Already installed**: Live Standard and Suite, Logic Pro, FL Studio, Reaper

- **No stock vocoder**: Pro Tools, GarageBand, Live Intro and Lite

- **Free does well**: the filter bank, the band count, a usable robot voice on one line

- **Free does badly**: s and t sounds, a carrier worth playing, presets that already work

- **Ours**: [WINNETKA](https://gazillionindustries.com/winnetka/), $49, a polysynth with a 16-band vocoder and 40 vocoder presets, twelve of them holding a vowel so they play with no microphone

## The free vocoders that are actually free

Free means free to download and keep. Every one below was checked on the maker's own site this week: no trial timer, no cut-down demo, no card at the end. Two of them are single plug-ins you drop on a channel, and two are whole instruments that happen to contain a vocoder, which is the more interesting half of the field.

**TAL-Vocoder.** Eleven bands, a vintage-style design after the vocoders of the early eighties, with a small synth built in as the carrier: a VCO with pulse, saw, noise and a sub. Sidechain routing lets you feed it a carrier of your own instead. It builds VST, VST3, AU, AAX and CLAP, for Windows 7 and later, macOS 10.9 and later as a universal binary, and 64-bit Linux. Downloads are direct links on the product page with no account and no email. It is the one to reach for when you want the sound recognized from the first bar, and it is one of the two here that ship an AAX build, which matters in exactly one host.

**FBVC, from Full Bucket Music.** Twenty bands, full stereo, with a 64-voice polyphonic tone generator inside it so you do not have to wire up a second track at all. Accent bending and vibrato, an ensemble effect, optional WAV file playback as the modulator, and an analysis and synthesis section you can pull apart band by band. Version 1.1.3, dated November 2024. Windows gets VST2, VST3, CLAP and AAX; macOS gets those plus AU, as a universal binary for Intel and Apple Silicon. The site is headed *Free Music/DAW Plug-ins* and the downloads are direct. Twenty bands read a vowel more clearly than eleven, so this is the one to try first if the words are coming out as porridge.

**Surge XT.** A full synthesizer, free and open source under the GPL, whose effects rack includes a vocoder. The band count runs from 4 to 20. The lowest band sits anywhere from 55 Hz to 3.52 kHz and the highest from 440 Hz to 14.08 kHz, with the rest spread evenly in pitch between them. There is a gate in decibels, an envelope-follower rate, a Q control for filter steepness, and a pair of controls that squeeze or slide the modulator's bands against the carrier's, which is the closest thing in the free field to [formant shifting](https://gazillionindustries.com/formant-shifting/). Standalone, AU, CLAP and VST3 on macOS; standalone, CLAP and VST3 on Windows; Linux as well. An effects-only build installs alongside the synth. Carrier and vocoder in one window, which is the arrangement that actually gets used.

**Bespoke Synth.** Free, open source under GPLv3, on Mac, Windows and Linux, and the developer is blunt that the paid tiers are the same files with a donation attached. It carries two vocoder modules: a band-based vocoder that pairs with a vocodercarrier module, and an FFT-based fftvocoder with a fricative-detection threshold. That second control is the one most cheap vocoders leave out. Bespoke is an application rather than a plug-in, so it hosts your instruments instead of sitting on a channel in your session, which rules it out for some people in one sentence and makes it the most fun of the four for everybody else.

**What did not make the list, and why.** Three things get called free on roundups and are not. A time-limited or feature-limited demo of a paid vocoder is a trial, and it will stop working or start muting itself in the middle of the take you finally liked. A plug-in behind an account and a newsletter is free in the sense that matters but you should be told first; Kilohearts Essentials is genuinely free and genuinely wants an account, and its 34 effects contain a formant filter and no vocoder. And a link to a site that stopped being updated in 2014 is not a download, it is a redirect to a parking page. Two other near-misses worth naming so you do not go looking: MeldaProduction's free bundle runs to 38 effects with no vocoder in it, and a formant shifter is a different machine altogether, which is a distinction worth having straight before you shop — see [the formant shifter field](https://gazillionindustries.com/best-formant-shifter-plugins/) if moving resonances without touching pitch is the sound you were after.

## What your DAW already ships

For a lot of readers the honest answer to "best free vocoder plugin" is a device already on the machine. Here is where it lives in the six hosts people ask about, and what the routing costs you.

**Ableton Live.** The Vocoder device, in Standard and Suite, and absent from Intro and Lite. Live's manual is specific about placement: insert it on the track carrying the *modulator*, meaning the voice, then use the Carrier chooser. External picks up any internal routing point and is the setting for the classic robot voice. Noise uses its own generator, Modulator resynthesizes the input, and Pitch Tracking runs a monophonic oscillator that follows the input's pitch. The Unvoiced knob deserves a mention on its own, because it runs a second noise generator over the pitchless parts of the signal, the f and s sounds, with a sensitivity control and a fast/slow switch. That is the sibilance problem solved in two knobs, and it is the single best thing about the stock device.

**Logic Pro.** Three of them, and they have been there since long before the Logic Pro X naming was dropped. EVOC 20 PolySynth is the instrument: a polyphonic synth with a vocoder in front of it, up to 20 bands per bank. EVOC 20 TrackOscillator is the effect version, with an oscillator that tracks the pitch of an incoming track. EVOC 20 Filterbank is the formant filter on its own, with no vocoding at all. Nothing to download, nothing to pay, and the PolySynth in particular is closer to a whole instrument than to an effect.

**FL Studio.** Two, and the split matters. Fruity Vocoder is in every edition, including Fruity itself. Vocodex, the larger one, starts at Producer Edition. If you are on Fruity and want more than the basic device gives you, a free VST3 is the route, and all four plug-ins above build one.

**Reaper.** ReaVocode, included, with a Bands control and separate wet, dry and modulator-dry levels. The setup is the fiddly part and Reaper's own effects guide walks it: give both source tracks four channels, disable their master sends, put ReaVocode on a third track, send the voice to channels 1/2 and the synth to channels 3/4. Ten minutes the first time, thirty seconds after that.

**Pro Tools.** The outlier. Avid's audio plug-in guide runs to hundreds of pages of bundled processors and does not list a vocoder anywhere in it. So for Pro Tools the free answer is genuinely a download, and the format to look for is AAX: TAL-Vocoder and FBVC both build it, and the two whole-instrument options above do not.

**GarageBand.** Apple's own list of GarageBand's effects covers compressor, delay, distortion, EQ, modulation, noise gate, reverb and a catch-all group of amps, filters and pitch shifters. No vocoder. GarageBand does load Audio Units, though, so TAL-Vocoder or FBVC installs and appears alongside the stock effects, which makes a free vocoder plugin for Mac users on GarageBand a five-minute job.

[WINNETKA](https://gazillionindustries.com/winnetka/) is a polysynth with a 16-band vocoder on board, $49, Mac and Windows, and 40 of its 350 presets are vocoder sounds. Twelve of those hold a vowel inside them, so they make the sound with no microphone plugged in at all. There's a demo on the page.

**VOCODER is a mode, not a slot.** Pressing it swaps the twenty-one edit rows for the vocoder's own, and the screen draws all sixteen bands, low on the left.

## What a free vocoder reliably gets you

The filter bank is not the hard part. Splitting a signal into bands, following the level inside each one and using those levels to gate the matching bands of a carrier is a textbook structure, and it has been in textbooks for fifty years. A free implementation of it is a real one. If you have never built the chain by hand, [the free plugin field in general](https://gazillionindustries.com/best-free-vst-plugins/) is worth a look before you spend anything on any category.

Band count is not the hard part either. Eleven bands is enough for the eighties sound and twenty is enough to follow a lyric. Surge XT will go to 20 and down to 4, and 4 bands is a sound in itself: a wet, gargling smear where the vowels used to be, useful once a record.

What you get, then, is most of the effect. Put a voice in, hold a chord, and the chord talks. That is the thing people came for, and a free plug-in does it on the first preset.

Format coverage is better here than in most free categories, which is worth saying because it usually is not. TAL-Vocoder builds VST, VST3, AU, AAX and CLAP across three operating systems. FBVC builds five formats on Windows and six on macOS as a universal binary. Surge XT covers standalone, VST3, AU and CLAP. Nothing in that list will strand a session because the wrapper does not exist. The risk with free software is the slower one: a project maintained by one person can stop being rebuilt for the next OS without an announcement, and you find out when a system update arrives rather than when the developer posts. Two of the four here ship their source, which means somebody can rebuild them. Bounce a print of anything you could not recreate and the question stops mattering.

## Three things a free vocoder usually will not do

**One: the consonants.** An s, an f and a t carry almost no pitched energy. A filter bank that is measuring tone finds nothing to measure, so the consonant arrives as a vague hiss and the line stops being words. Every serious vocoder fixes this the same way, with a separate high-frequency path that bypasses the bank, and the design differences are in how much control you get over it. Live gives you a level and a sensitivity. Some free plug-ins give you nothing. Look on the panel before you install: if there is no high-band or unvoiced control anywhere, the s sounds are the thing you will spend the evening fighting.

**Two: the carrier.** This is the gap that costs people the most time and it is almost never discussed. The sound you actually hear is the carrier, and the vocoder only shapes it. A saw, a pulse and a noise generator will give you a robot. They will not give you the thick, detuned, four-note pad that makes the robot sound expensive. Free vocoders are built as effects, so the synth inside them is a courtesy, not an instrument, and the moment you want a better carrier you are back to routing a proper synth into a sidechain input. [Whether your carrier is mono or poly](https://gazillionindustries.com/monosynth-vs-polysynth/) changes the whole character, and most free built-in carriers are thin by design.

**Three: presets, and playing it with no microphone.** A vocoder needs two inputs and nobody's preset can supply one of them, so free vocoder presets are really filter settings waiting for a voice. That leaves two jobs undone. First, nothing in the free field arrives sounding like a finished record on your particular vocal. Second, if you have no mic in front of you, or you are working at midnight in a flat with thin walls, there is no sound at all, because a held vowel has to be stored inside the instrument for that to work.

## Audition a vocoder in ten minutes

Do this once with whichever option you picked and you will know inside one coffee whether the free route covers you. Use a real vocal, not a test tone; the whole question is how the thing handles speech.

Budget most of the ten minutes for routing, because that is where people quit. A vocoder needs two signals arriving at one place and no two hosts agree on how that happens. Live wants the device on the voice and the synth picked up by an internal routing point. Reaper wants a four-channel track and two sends. Most plug-in vocoders want the synth on the channel and the voice arriving through a sidechain input, which is the opposite of Live. The two whole-instrument options sidestep it entirely, which is most of why they are on this list: FBVC has its tone generator inside, and Surge XT has the whole synth inside. Write down which arrangement your host uses the first time and the second session takes thirty seconds.

- Put a spoken or sung line on one track and a synth holding a four-note chord on another.

- Install one vocoder and load it where the host expects it: on the voice track in Live, on the synth track in most plug-in vocoders with a sidechain input.

- Route the other signal in as the carrier or the modulator, whichever the panel is asking for.

- Set the band count to 16 if it is adjustable.

- Hold the chord for eight bars and speak a sentence loaded with s, t and f sounds.

- Set the envelope follower to its fastest setting, then slow it until the consonants stop chattering.

- Raise the unvoiced or high-band control until the s sounds come back.

- Bounce the eight bars and play them on a phone speaker.

Two failures show up on the phone and nowhere else. Words that were clear on monitors turn to mush, which is a band-count and consonant problem. And the chord underneath disappears entirely, which is a carrier problem, because a thin saw has nothing below 200 Hz for a small speaker to work with. The first one you can usually fix. The second one is a shopping list.

## What the paid step buys

Straight about this: [WINNETKA](https://gazillionindustries.com/winnetka/) is $49 and has no free version, so it does not belong in a free roundup on price. It belongs here on the three gaps. The carrier is a real polysynth rather than a courtesy oscillator: up to 128 voices at once on one timbre, 64 on each of two when you layer them. Switch to VOCODER and the carrier keeps the synth's VOICE, PITCH, OSC 1, A-ADSR, LFO 1 and LFO 2 rows, so you still get mono, poly or a unison that stacks four voices on every note spread by detune, transpose across ±24 semitones, and an OSC 1 wave list running saw, pulse, triangle, sine, a voice-like Vox wave, a 64-entry table, noise and the audio input itself. The consonants sit on the AUDIO IN row, where HPF LEVEL sends everything above roughly 4 kHz straight to the output and HPF GATE holds it to the moments you are actually playing on the keys. And the presets solve the thing presets cannot usually solve: of the 40 vocoder sounds in the bank, twelve hold a vowel inside them and play with no audio input at all, which means the sound exists before the microphone does.

What it does not do is make the free options worse. If the job is a robot line on one hook and you already own Live Standard, use the Vocoder device and put the $49 somewhere else. The case for paying starts at the second session, when you have discovered that the carrier is the instrument and you are tired of building one out of two tracks and a sidechain.

## Questions people ask

### What is the best free vocoder plugin?

FBVC for clarity, because twenty bands and a built-in 64-voice tone generator means you can play it on its own. TAL-Vocoder for the eighties sound and for AAX. Surge XT if you would rather have the synth and the vocoder in one window.

### Is there a free vocoder plugin for Ableton?

Live Standard and Suite include the Vocoder device, so there is nothing to download. Intro and Lite do not, and for those any of the four free plug-ins loads as VST3 or AU.

### Does Logic Pro have a vocoder?

Three. EVOC 20 PolySynth is the instrument with up to 20 bands per bank, EVOC 20 TrackOscillator is the effect, and EVOC 20 Filterbank is the formant filter without the vocoding. All included.

### What is the best free vocoder plugin for Pro Tools?

An AAX one, since Avid's plug-in guide lists no vocoder among the bundled processors. TAL-Vocoder and FBVC both ship AAX builds. Surge XT and Bespoke Synth do not.

### Does Reaper or GarageBand come with a vocoder?

Reaper does: ReaVocode, which needs a four-channel track with the voice on channels 1/2 and the carrier on 3/4. GarageBand does not, and Apple's effect list confirms it, but GarageBand loads Audio Units so a free AU fills the gap.

### Is TAL-Vocoder still free?

Yes. It sits in the free section of TAL's own site with direct download links, no account and no email, in VST, VST3, AU, AAX and CLAP for Windows, Mac and Linux.

### Why does my free vocoder sound mushy on s and t?

Because those sounds carry almost no pitch for the filter bank to measure. The fix is a separate high-frequency path around the bank, and how much of one you get is the clearest difference between vocoders at any price. If you are chasing intelligibility more generally, [the vocal mixing chain](https://gazillionindustries.com/how-to-mix-vocals/) matters as much as the vocoder does.

## What WINNETKA does

[WINNETKA](https://gazillionindustries.com/winnetka/) is our polysynth, $49, one payment, AU, VST3 and standalone on macOS 10.13 or later for Apple Silicon and Intel, and VST3 on Windows 10 or later, 64-bit. Three modes: **SINGLE** plays one timbre, up to 128 voices at once in POLY; **LAYER** plays two timbres on every key with a full set of rows each, 64 voices apiece; **VOCODER** swaps the rows for the vocoder's own. The bank runs **sixteen bands**, drawn across the screen low on the left. AUDIO IN carries **GATE SENSE** from 2 ms to 2 s, **THRESHOLD**, **HPF LEVEL** and **HPF GATE**. The formant row carries **SHIFT** across −2 to +2 bands, **CUTOFF** at ±63 for smooth slides up to two bands either way, **RESONANCE**, **E.F. SENSE** and a **HOLD** key that freezes the shape and keeps it playing with nothing coming in. FC MOD moves the whole shape from an envelope, an LFO, velocity, key track or either wheel, up to four bands. LEVEL A, LEVEL B, PAN A and PAN B set the level and stereo place of all sixteen bands in eight pairs, from −63 to +63. On the synth side: **PITCH** transposes ±24 semitones, UNISON stacks four voices spread by DETUNE, and OSC 1's VOX wave has **CONTROL 1** running its formant from dark to bright. Around all of it, a three-band EQ at ±12 dB a band, mod effects, delay, and a sixteen-step arpeggiator with twelve patterns and rates from 1/1 down to 1/64. **350 presets** — 65 bass, 60 lead, 65 pads, 40 FX, 35 perc, 45 arp and 40 vocoder, twelve of the vocoder sounds holding a vowel so they play with no input at all. If you want the wider synth picture first, start with [synths that arrive with a usable bank](https://gazillionindustries.com/best-synth-vst-with-presets/).

Back to two in the morning. Install one of the free four, hold a chord, say the line, and play it back on your phone. Whatever the free one leaves out, you will hear it there, and you will know exactly what you are shopping for.

---

## About WINNETKA

WINNETKA — a polysynth with a vocoder and 350 presets. AU, VST3 and standalone on Mac, VST3 on Windows.

https://gazillionindustries.com/winnetka/
