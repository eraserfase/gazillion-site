# Free arpeggiator VST plugins, and where each one runs

> Three kinds of free arpeggiator, and why the kind decides whether it loads: your DAW's own, four free MIDI arp plugins, free synths with one inside, and the wiring.

Source: https://gazillionindustries.com/free-arpeggiator-vst/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make WINNETKA.

---

The chord is held down, the kick is running, and what the track needs is the figure that nobody in the room can play at 150 BPM for four minutes. That is the whole brief for an arpeggiator, and the first good one you find will cost nothing.

Free arpeggiators come in three kinds, and the kind decides whether it will even load. Your DAW almost certainly ships one: Live, Logic, FL Studio and Bitwig all do. Free MIDI-effect plugins add more: BlueARP, Hypercyclic, RandARP and Stochas are current and free to keep. And a few free synths carry an arp inside them, with Podolski the clearest case. Ours is the third kind. [WINNETKA](https://gazillionindustries.com/winnetka/) is a $49 polysynth with a 16-step arpeggiator built in, and 45 of its 350 presets are arps already.

## The short version

- **Already installed**: Live's Arpeggiator (every edition), Logic's Arpeggiator MIDI plug-in, FL Studio's Channel Settings arp, Bitwig's Arpeggiator

- **Free MIDI arpeggiators**: BlueARP, Hypercyclic, RandARP (Windows), Stochas

- **Free synth with an arp inside**: u-he Podolski

- **The catch**: a MIDI-effect plugin needs a host that routes plugin MIDI to another plugin; Logic wants a MIDI FX build

- **Ours**: WINNETKA, $49: 16 steps, rates to 1/64, inside a polysynth with a vocoder

- **Paid references**: Xfer Cthulhu $39, Sugar Bytes Thesys $99

## Three kinds of free arpeggiator, and why the kind matters

An arpeggiator takes the notes you hold and plays them one at a time, in an order, at a rate, for a length. Where that happens decides everything about installing it. A **MIDI-effect plugin** sits before a synth and sends it notes, so it works with any instrument and has to be wired to one. A **DAW arpeggiator** does the same from a slot the host already understands, with no wiring. An **arp inside a synth** plays only that synth, and in exchange the pattern saves with the preset. The [best arpeggiator VST](https://gazillionindustries.com/best-arpeggiator-vst/) guide has the arithmetic on rate, gate and swing. This page is about the free ones, sorted by kind.

## Your DAW already ships one

**Ableton Live.** The Arpeggiator MIDI effect is in Intro, Standard and Suite. Styles are Up, Down, Converge, Diverge, Play Order, Chord Trigger and three Random modes. Rate runs in milliseconds or synced divisions, Gate is a percentage of the rate and values above 100 percent overlap into legato, Distance and Steps transpose the pattern in semitones or scale degrees, and Retrigger, Repeats, a velocity decay, a Groove chooser for swing and Hold complete it. Ableton's example: Distance +12 with Steps 2 plays a pattern starting on C3 at C3, C4 and C5.

**Logic Pro.** The Arpeggiator MIDI plug-in offers rates of 1/4, 1/8, 1/16 with triplet and dotted variants, and 1/32. Note order is Up, Down, Up/Down, Outside-in, Random or As played, with a Lock button that freezes the played order, a four-position switch that covers either Octave Range or Inversions, and four variations per direction. Apple describe it as generating "musically interesting arpeggios based on incoming MIDI notes", and it is already there.

**FL Studio.** Every channel has an arpeggiator in its Channel Settings under Miscellaneous functions: Off, Up, Down, Up-Down, Up-Down with the ends doubled, and Random, with Range in octaves, a Chord selector (None for octave steps, Auto to use the chords already in the notes, or templates), Time between notes, Gate for shorter notes, Repeat and Slide. Image-Line note the Slide option "will not work with instruments that do not support slides", which includes VST instruments. The Piano roll's Arpeggiate tool is the other one, and by Image-Line's own description it is "not a real-time effect": it writes the notes.

**Bitwig Studio.** The Arpeggiator Note FX has 17 patterns, timing in rhythmic values or milliseconds, and three octave behaviors: Broad stacks octaves with repeating shapes, Thin sorts everything into one line, and 1 by 1 plays the full pattern in each octave before moving up. Bitwig call it MPE-friendly and give it a global Randomize for velocity, timing and duration.

## Free MIDI arpeggiator plugins

Four are current, free to keep, and output MIDI for whatever synth you point them at.

**BlueARP**, from OMG Instruments, is a pattern arpeggiator and step sequencer with 64 steps per pattern, drum and guitar modes, chain and variation switching, input chord quantizing and sample-accurate timing. Version 2.8.8c is dated July 2026. It ships as VST2 and VST3 for Windows and macOS, as a universal binary, and as a separate MIDI-FX build for Logic. The maker's page has a Donate link and download links; two independent roundups list it as free. One caveat from the maker: after installing the Logic MIDI-FX build, reboot the Mac or Logic will not see it.

**Hypercyclic**, from mucoder, is "an LFO-driven MIDI arpeggiator, gate effect and step sequencer", and the maker says it is "free (as in beer)". Two tempo-synced LFOs modulate the step sequencer, there is a gate effect and a groove function that plays off the beat, and it runs as VST, Audio Unit or standalone on Windows, macOS and Linux, 64-bit, at version 1.9. It processes held chords, so you play a chord and it makes the figure.

**RandARP**, from CodeFN42, is a free arpeggiator built around randomization: velocity, gate, shift, swing, note probability, note order, octave order and octave count can each be randomized, with "Random Once" variants that hold a pattern until the input notes change. Free for commercial use, VST2 only, 64-bit Windows 7 or later, version 1.36. The only Windows-only entry here, and the one for people who want the arp to surprise them.

**Stochas** is an "open-source advanced probabilistic polyrhythmic sequencer plugin" from the Surge Synth Team, GPL-3.0, with binaries for Windows, Mac and Linux at version 1.3.13 from November 2024. It is a step sequencer with probability per step rather than a classic arp, which makes it the odd one out and the most interesting for sixteen bars that should never repeat the same way twice.

Two names that come up and are not arpeggiators: **Ripchord**, a free MIDI chord player that maps single notes to chords and strums them, and the free versions of HY-Plugins' sequencers, which the maker describes as cut-down versions "without demo limitations". Both are worth owning. Neither does the job on this page.

## Free synths with an arpeggiator built in

Shorter list than the roundups suggest. **u-he Podolski** is free, needs no serial number, and its spec line reads "combination arpeggiator / 16-step sequencer with extra modulation source". One oscillator, one filter, one envelope, and the arp. AUv2 and VST3 on macOS, VST3 and AAX on Windows.

The rest of the free-synth canon is quieter about it. The maker pages for Tyrell N6, Surge XT, Vital, Odin 2, TAL-NoiseMaker, OB-Xd and Dexed mention no arpeggiator, as read today. Some of them may have one buried in a modulation page; none of them sell it as a feature, and if the arp is the reason you are downloading, that silence is the answer.

## The routing tax, host by host

This is where free arpeggiators lose an evening. A MIDI-effect plugin produces notes and has to hand them to a synth, and no two hosts agree on how.

**Logic** accepts third-party arpeggiators only as MIDI FX builds. BlueARP ships one, Xfer say Cthulhu's MIDI FX version "installs automatically", and Sugar Bytes say Thesys's Audio Unit "works as a MIDI FX to trigger other AUs". A plain AU effect will not appear in the slot. **FL Studio** routes plugin MIDI by port number: the Wrapper's Input and Output port settings are shared channels, and Image-Line's MIDI Out plugin sends notes to any VST whose wrapper input port matches, with 256 ports available. **Live** places MIDI effects only on MIDI tracks, before the instrument. And a modern catch from Ripchord's makers applies to any VST3 note plugin: the host "must support the full VST3 MIDI spec". Check that before the download, and the [vocoder routing guide](https://gazillionindustries.com/how-to-use-a-vocoder/) covers the same host-by-host wiring for audio.

**ARP is a row, not a wire.** The pattern lives in the preset, so there is nothing to route.

## Where WINNETKA fits

WINNETKA is the third kind, and it is not free, so this is the honest version. It is a $49 polysynth with a vocoder and a 16-step arpeggiator with rates up to 1/64, plus filters, envelopes, modulation, EQ and delay in the same window. Of its 350 presets, 45 are arps: load one, hold a chord, and the figure plays, with the sound, the rate and the pattern saved together. There is no port number, no MIDI FX build and no second track.

What you give up is the universality. WINNETKA's arp plays WINNETKA. If you need one pattern to drive a drum sampler, a bass and a pad at once, that is a MIDI-effect job and BlueARP does it for nothing. If what you wanted was the sound and the figure arriving as one preset, that is this, and there is a demo on the page.

[WINNETKA](https://gazillionindustries.com/winnetka/) runs as AU, VST3 and standalone on the Mac and as VST3 on Windows. Load an arp preset, hold three notes, and turn the rate up until the track starts moving.

## Audition a free arpeggiator in ten minutes

- Hold a four-note chord on a synth with a short, bright patch.

- Set the rate to sixteenths and the gate to 50 percent.

- Switch the order to Up, then Up/Down, then As Played, and listen for which one has a shape.

- Set the octave range to 2 and hold the chord for eight bars.

- Add swing and nudge it until the pattern leans without stumbling.

- Change the chord mid-pattern and listen for a stuck note or a gap.

- Record eight bars and play them back from the timeline.

- Bounce them and play the file on a phone speaker.

Step six is the one that separates the free field. An arpeggiator that leaves a note hanging when the chord changes, or drops the first note of the new one, will do it on the record too. Image-Line's wrapper page describes a setting that sends All Notes Off when playback stops "to prevent notes or arpeggiators etc stuck on", which tells you how common the problem is.

## What a free arpeggiator costs you

It costs the phrase, because the figure it hands you is one nobody wrote, and a sixteen-bar gift becomes a four-minute problem unless you edit it. It costs arrangement room: sixteenths at 150 BPM are a note every 100 milliseconds in the register a snare and a vocal live in, and the fix is [sidechain compression](https://gazillionindustries.com/sidechain-compression/) rather than a filter sweep. And a MIDI-effect arp costs the setup every session, where an arp inside the preset costs it once. Pick the kind by which of those bills you would rather pay.

## Questions people ask

### What is the best free arpeggiator VST?

For most people, the one already in the DAW: Live, Logic, FL Studio and Bitwig each ship a capable one. Among downloads, BlueARP for a full pattern sequencer with 64 steps, Hypercyclic for LFO-driven movement, RandARP on Windows for randomization, and Stochas for probability.

### Is there a free arpeggiator plugin for FL Studio?

FL Studio has one in every channel's settings and a non-real-time Arpeggiate tool in the Piano roll. A third-party MIDI arp reaches a synth through matching Wrapper port numbers, or through the MIDI Out plugin, which Image-Line describe as a MIDI controller sending messages to internal VST plugins over any of 256 ports.

### Does Logic Pro have a free arpeggiator?

Yes, the Arpeggiator MIDI plug-in, with rates from 1/4 to 1/32 and six note orders. Third-party arps need a MIDI FX build to show up in that slot; BlueARP, Cthulhu, Thesys and Kirnu Cream all ship one.

### Which free synths have an arpeggiator?

u-he Podolski does, as a combined arpeggiator and 16-step sequencer. The maker pages for Tyrell N6, Surge XT, Vital, Odin 2, TAL-NoiseMaker, OB-Xd and Dexed do not mention one.

### Do I need a MIDI arpeggiator if my synth has one?

Only if the pattern has to drive more than one instrument. A built-in arp travels with the preset and needs no routing; a MIDI arp is universal and needs wiring in every host. Most sessions want the first; a few want the second.

### Is Cthulhu free?

No. Xfer Records list Cthulhu at $39, with a 15-minute demo. Sugar Bytes Thesys is $99. Both are MIDI-effect arps that need a synth after them. The [synths with presets](https://gazillionindustries.com/best-synth-vst-with-presets/) guide covers the instruments that arrive with the arps already written.

## What WINNETKA does

[WINNETKA](https://gazillionindustries.com/winnetka/) is our polysynth, $49, one payment, AU, VST3 and standalone on macOS 10.13 or later for Apple Silicon and Intel, and VST3 on Windows 10 or later, 64-bit. Play a single sound or layer two timbres, shape a voice with the 16-band vocoder, or play the held-vowel vocoder presets with no microphone. The **arpeggiator** runs sixteen steps with rates up to 1/64, beside filters, envelopes, modulation, a three-band EQ and delay. **350 presets**: bass, lead, pads, FX, percussion, arp and vocoder, with your own saved, imported and traded on our Discord. The [polysynth guide](https://gazillionindustries.com/best-polysynth-vst/) covers the rest of the instrument.

The chord is still held down. Something is finally playing it faster than anyone in the room can, and it cost either nothing or forty-nine dollars, depending on whether you wanted the sound to come with it.

---

## About WINNETKA

WINNETKA — a polysynth with a vocoder and 350 presets. AU, VST3 and standalone on Mac, VST3 on Windows.

https://gazillionindustries.com/winnetka/
