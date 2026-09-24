# Best pitch shifter plugins

> How to choose a pitch shifter plugin: the three algorithm families, what formant control buys, free options worth having, and how to test one fast.

Source: https://gazillionindustries.com/best-pitch-shifter-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

The same thread goes up on a plugin forum every few weeks. A sample sits a tone flat against the beat, or a hook needs to be a fifth higher, and every pitch tool already installed does something slightly wrong to it. Twenty replies arrive, all of them names, none of them saying which name is for which job.

Choose the pitch shifter by what the audio is. One voice or one line wants a formant-aware real-time shifter. A chord or a finished mix wants a polyphonic processor, or a varispeed move that carries pitch and speed together. Anything you intend to play or automate wants a low-latency insert rather than an offline editor. Free plugins cover the monophonic case properly; money buys polyphony, a choice of algorithm, and control over formants.

## The short version

- **One line**: formant-aware real-time shifter on an insert

- **Chords or a mix**: polyphonic processor, or varispeed the whole thing

- **Free**: Graillon's free edition, MAutoPitch, Pitchproof

- **Judge it by**: formant control, latency, what it does to transients

- **Test**: two semitones on a dry vocal, then an octave, then a drum loop

- **Our answer**: SKRUU, for the varispeed half of the job

## Hear it

Every page in this category describes what varispeed does and then shows a screenshot of a knob. Here is one loop through SKRUU at three speeds, then the same thing with the sampling rate stepped down. The figures are the renderer's own readout.

- **Unity** — PITCH 93 — rate 1.0000, +0.00 semitones — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — PITCH 64 — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — PITCH 120 — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

- **Slowed, LO-FI 2** — PITCH 64 with SAMPLING GRADE at 3.9 kHz — https://gazillionindustries.com/skruu/skruu-down-lofi2.m4a

One source loop, rendered offline through the same engine the plug-in runs, no other processing.

**PITCH −3.09 ST.** The varispeed route: pitch and speed linked, no analysis in the path.

## Three families, and why they sound different

Every pitch shifter belongs to one of three families, and most of the confusion in those forum threads comes from comparing plugins across families as if they were doing the same thing.

**Resampling, also called varispeed.** Play the audio faster or slower and the pitch moves with it. There is no analysis, no window, nothing to guess at, so there are no artifacts in the usual sense — the whole recording, formants and room included, simply moves. Doubling the speed raises the pitch twelve semitones. What it costs is the length, which changes by the same ratio. [What varispeed is](https://gazillionindustries.com/what-is-varispeed/) covers the math once, properly.

**Time-domain grain splicing.** Resample to get the pitch, then cut the result into short grains and repeat or drop them to put the length back. Cheap on CPU, low latency, keeps transients hard. When it fails you hear a flutter on sustained sound, because the splices are periodic and your ear finds the period.

**Frequency-domain resynthesis.** Analyze the signal into frequency and phase, move the partials, rebuild the audio. This is what handles pads, chords and long tails without stuttering, and it is where the smeared, glassy, underwater quality comes from when you push it. Attacks are the weak point, which is why modern versions detect transients and switch strategy at each hit.

The reason a vocal pitched up four semitones sounds like a cartoon is separate from all of that. It is formants: the fixed resonances of the throat and mouth that tell a listener how big the singer is. Resampling moves them with the pitch. A formant-aware shifter holds them still, or moves them on their own knob. [Formant shifting](https://gazillionindustries.com/formant-shifting/) is the whole story, and it is the single control that separates a usable vocal shift from a novelty.

## What separates a good pitch shifter from a bad one

- **A formant control that is its own knob.** Not a preserve checkbox. You want to pitch a vocal up three semitones and pull the formants down two, and that is a two-knob job.

- **Honest latency.** Some of the best-sounding algorithms need a long analysis window and report the delay to the host. That is fine for mixing and useless for tracking. Check the number before you decide it feels laggy.

- **Transient handling you can hear.** On a drum loop a weak shifter doubles the attack or softens it into a thud. This is the fastest test there is.

- **Range with resolution.** An octave each way is plenty for most work, but cents matter more than semitones: a sample two records old is rarely exactly at pitch, and a shifter with only semitone steps cannot fix it.

- **Automation and MIDI.** A pitch control you can draw, or play from a keyboard, is a different instrument from one you set once.

- **A mix control.** Blending the shifted signal under the dry one is how harmonies get made, and a plugin without it forces a second track.

[SKRUU](https://gazillionindustries.com/skruu.html) is the varispeed answer to this: PITCH and TIME on separate knobs, so you can drop a sample five semitones and pull the length back without an analysis stage anywhere near the vocal. There's a demo on the page.

**TIME −35%, PITCH at unity.** Length on its own, with the pitch held.

## How to test one in ten minutes

Demos are all trial versions and marketing pages. Ten minutes with your own audio settles it faster than a week of reading threads.

- Load a dry solo vocal with no reverb and no tuning on it.

- Shift up two semitones and listen for a change in the size of the singer.

- Pull the formant control down until the size sounds right again, and note how much it took.

- Shift up twelve semitones and listen to the consonants, not the notes.

- Shift down seven semitones and listen to the breath between lines.

- Swap the vocal for a drum loop and shift two semitones either way.

- Solo the loop and check whether each attack is still one attack.

- Read the latency the plugin reports to your host.

- Bounce every version and listen to the bounce on phone speakers.

- Delete the ones that failed step seven.

## Where it goes in the chain

Pitch shifting goes early, before anything that adds character. Shift first, then compress, then saturate, then reverb. A shifter placed after a compressor hears a signal whose dynamics have already been rewritten, and a shifter placed after reverb moves the room along with the source, which is a specific effect rather than a default.

The exception is deliberate. Putting the shifter last, after the reverb, shrinks or stretches the entire space, and on a send that can be the most interesting thing on the record. The rule is that you should know which one you chose.

On a send rather than an insert, set the plugin to full wet and use the send level as the blend. This is how octave-down bass reinforcement and shimmer-style octave-up pads get built, and it keeps the dry signal untouched underneath.

## Free pitch shifter plugins worth installing

The free tier is genuinely good now, with one caveat: almost all of it is monophonic, built for voices and single lines.

**Auburn Sounds Graillon.** Auburn Sounds ships Graillon in a free edition and a paid full edition, as a VST, AAX, AU and LV2 plugin for Windows, macOS and Linux. It does pitch shifting, formant shifting and pitch correction, and version 3 carries three selectable pitch engines — G2, which keeps the earlier sound, G3, and I1 from the maker's Inner Pitch plugin. The built-in compressor, gate, chorus, preamp and bitcrusher are all voiced for vocals.

**MeldaProduction MAutoPitch.** Free, and described by MeldaProduction as automatic tuning and pitch correction for vocals and other monophonic instruments. Alongside the tuning it has a formant shift and a stereo expansion, which is a useful pair for background vocals where you want each layer slightly different.

**Aegean Music Pitchproof.** A free harmonizer-style shifter with a pedal's set of controls: a Blend knob for dry against shifted, a Pitch menu of intervals such as +7 or −7, scale-aware harmony settings keyed to a major or minor scale, and a Detune control. There is a mono option for lower CPU, a Transient Fix switch, and a tuner built in because the plugin is tracking pitch anyway. Aegean Music states a maximum range of an octave up or down, a little more with detune, and that it works best on monophonic signals.

Your host is the fourth free option and people forget it. Every major DAW licenses a competent stretching and shifting engine, offers a transient-aware mode and a spectral mode, and will repitch a clip without any plugin at all. [How to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/) walks that route.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25 — the sampler's own contribution to the pitch.

## Paid options, and what the money buys

Paying gets you one of three things: a better algorithm, more than one algorithm, or the ability to work on material that is not a single line.

**Soundtoys Little AlterBoy.** A monophonic voice manipulator that shifts pitch and formant in real time, locks a voice to a single pitch for robot tones, takes MIDI from the host to drive the pitch, and includes a tube saturation stage from the maker's Decapitator. Soundtoys lists version 5.5 as Apple Silicon and VST 3 compatible, in AAX Native, AAX AudioSuite, VST 2, VST 3 and AU, from 44.1 kHz to 192 kHz, on macOS 10.15 or later and Windows 10 or later — and states it is not compatible with ARM-based Windows machines, which is worth knowing before you buy.

**Polyverse Manipulator.** Listed at $149, and built on granular algorithms that alter the timbre and pitch of monophonic audio. Polyverse lists ten effects, five modulation sources, up to four polyphonic harmony voices, MIDI control of melody, and real-time zero-latency processing for live performance, in VST2, VST3, AU and AAX for 64-bit Windows and macOS 10.9 or later. The interesting part is that the pitch control is one of ten things it does to a voice rather than the only one.

**Zynaptiq PITCHSHIFT.** Sold in two tiers on Zynaptiq's own site: PITCHSHIFT at USD 149 with three algorithms for mono and stereo, and PITCHSHIFT PRO at USD 269 with six algorithms and up to sixteen channels of phase-synchronous multi-channel processing. The algorithm range runs from a classic delay-line design through resynthesis and time stretching to hybrid processing, which is the practical argument for a dedicated plugin: one algorithm cannot be right for a guitar fifth, a monster voice and a frame-rate pitch correction on a film mix.

## Polyphonic pitch shifting, the hard case

Shifting a single note is a solved problem. Shifting one note inside a chord, or one instrument inside a finished mix, is not, and this is where the searches get specific.

**Zynaptiq PITCHMAP** is built for exactly this. Zynaptiq describes it as processing the pitch of individual sounds within mixed signals in real time, letting you play new melodies and harmonies over a recording from a MIDI keyboard or a pitch map drawn in its interface, correcting tuning at the same time, and suppressing individual sounds within a mix. There is a 30-day free trial, which for a processor this unusual is the only sensible way to judge it.

**Celemony Melodyne** comes at it from the other direction. Rather than a real-time insert, it offers note-based editing, where the analysis turns a recording into blobs you move. Celemony's own description covers polyphonic instruments such as piano and guitar, and per-note editing of pitch, vibrato, volume, sibilants, length, timing and formants, with multitrack note editing in one window. It runs via ARA, as a plugin, or standalone.

There is a third answer that costs nothing and nobody mentions in the threads: move the whole thing. If a two-bar loop is a semitone flat, repitching the entire loop keeps every internal relationship intact, because you changed the playback rate rather than guessed at the parts. The key moves and the length moves, and if that is acceptable you have avoided the hardest problem in the category.

## Real-time versus offline

A real-time shifter runs on an insert while the session plays, reports its latency to the host, and can be automated and performed. An offline editor analyzes first and renders after, which buys quality and per-note control and costs you the ability to change your mind while the track is running.

The searches for a real-time pitch shifter are usually about one of two things: performing the shift live, or automating it as a musical gesture. For the first, latency is the only number that matters and a granular or delay-line algorithm will beat a spectral one. For the second, what you want is a knob whose whole travel is musical, so a sweep from unity to a fifth up sounds like a move rather than a series of steps.

**Pitched up.** Same knob, other direction, length moving with it.

## What it costs you

Every family in this category takes something. Resampling takes the length and the key. Grain splicing takes the smoothness of sustained sound. Resynthesis takes the front edge of transients and gives back a faint metallic sheen on tails, and it takes CPU and latency to do it.

Formants are the cost people notice last and mind most. Preserving them on a big shift keeps the singer the right size and introduces its own artifacts, usually a nasal quality on vowels. Letting them move is honest and it also means a four-semitone lift turns an adult into a child. Neither setting is free, and choosing between them takes about fifteen seconds once you know it is a choice.

The last cost is commitment. A shifter left live on twenty tracks is a CPU bill and a session that behaves differently on another machine. Bounce the ones you are sure about. The rest of the argument is in [time stretching explained](https://gazillionindustries.com/time-stretching-explained/).

## Questions people ask

### What is the best pitch shifter plugin?

There is no single answer because the category contains three different machines. For one voice or one line, a formant-aware real-time shifter on an insert. For chords or a full mix, a polyphonic processor or a note-based editor. For a sample that needs to move as a whole, varispeed, because it moves everything and guesses at nothing.

### What is the best free pitch shifter plugin?

For vocals, Graillon's free edition is the usual recommendation and does pitch shifting, formant shifting and correction in one window. MAutoPitch is free and adds a formant shift and stereo expansion to its tuning. Pitchproof is free and gives you scale-aware harmonies with an octave of range each way. All three are monophonic, which is the honest limit of the free tier.

### What do people on Reddit recommend for pitch shifting?

The threads split the same way every time: vocal people name formant-capable shifters, sound designers name granular ones, and someone points out that the DAW already does it. The useful part of those threads is the disagreement, because it is a sign that the askers have not said whether their source is one line or a mix. Say which, and the answer narrows to two plugins.

### What is the best polyphonic pitch shifter plugin?

For real-time work on a mixed signal, PITCHMAP is the tool built specifically to address pitch inside mixed material and has a 30-day trial. For per-note editing of chords, Melodyne works on polyphonic instruments such as piano and guitar. If the whole passage can move together, repitching it avoids the problem entirely and sounds like a record rather than a process.

### What is the best real time pitch shifter VST?

For a real-time pitch shifter VST, look for the lowest reported latency and a formant knob. Granular and delay-line algorithms perform live in a way spectral ones cannot, and makers who intend a plugin for live use say so explicitly — Polyverse, for instance, lists real-time zero-latency processing for live performance as a feature of Manipulator.

### How do I change pitch without changing the tempo?

Use a pitch shifter rather than a speed control, and keep the shift small if you want it transparent. The full method, in both directions, is in [how to change pitch without changing tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/).

The whole panel. **PITCH** and **TIME** are the two knobs; everything else decides how they move and what the rate does on the way.

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin, $29, for Mac and Windows, as VST3, AU and a standalone. **PITCH** and **TIME** are separate knobs and neither one drags the other: speed a sample up while pitching it down, or lock one and play the other. **ELASTIC** makes the knob sprung, so you move it, let go, and it runs home on its own, and **SLOPE** picks the shape of that return from sixteen of them. **SAMPLING GRADE** steps the rate down, with LO-FI 2 running at 3.9 kHz, so the pitch move and the grit can arrive in the same gesture.

Twenty replies, all of them names. The question was never which plugin. It was whether the thing you are pitching is one line or a whole record.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
