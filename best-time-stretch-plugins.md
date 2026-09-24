# Best time stretch plugins

> How to choose a time stretch plugin: the three algorithm families, what separates the good ones, a ten-minute test, and the Pro Tools and free options.

Source: https://gazillionindustries.com/best-time-stretch-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

A hook gets slowed six percent so it sits on the beat, and it works fine on the monitors. Then it goes in the car, and the singer sounds like she is standing behind a desk fan. The tempo is right. Everything else about her is wrong.

The best time stretch plugin is the one whose algorithm matches your material and whose ratio stays small. Use a transient-aware mode for drums, a spectral mode for vocals and pads, and a monophonic mode for a single line. Past roughly fifteen percent on a full mix, stop stretching and repitch instead, so speed and pitch move together and nothing has to be invented. Dedicated stretch tools earn their keep at extreme ratios and on material that mixes hard transients with long tails.

## The short version

- **What it is**: length changes, pitch stays put

- **What to look for**: algorithm choice, formant control, a wide ratio range

- **Transparent to**: about 10% on a full mix, further on one instrument

- **Free route**: your DAW's warp modes, then a dedicated free tool for extremes

- **Pro Tools route**: offline AudioSuite stretchers, priced for post houses

- **The other answer**: varispeed — move both, accept the key change

**TIME −35%, PITCH at unity.** Length moving on its own, which is the whole trick.

## Three different things get called time stretching

They fail differently, so the first job is knowing which one you are buying. Search results for *best time stretch plugin* mix all three together, which is how producers end up with a tool that cannot do the thing they wanted.

**Time-domain granulation** cuts the audio into short grains and either repeats them to make it longer or discards them to make it shorter, splicing where the waveform lines up. It is cheap on CPU, it keeps attacks hard, and when it breaks you hear stuttering or a comb-filtered flutter across sustained sound. Every DAW has one of these under a name like Beats.

**Spectral resynthesis** analyzes the signal into frequency bands with their phases, advances them at a different rate, and rebuilds audio from the result. It holds sustained material together far better and it softens attacks, which is the smeared, underwater quality people complain about. Good implementations detect transients and switch strategy at each hit, which is how one mode can carry a drum loop and a pad in the same pass. The mechanics are unpacked in [time stretching explained](https://gazillionindustries.com/time-stretching-explained/).

**Varispeed** is not stretching at all. Playback rate changes, so length and pitch move together in fixed proportion, exactly the way a tape machine or a turntable does it. There is no analysis and therefore no artifact, because no new material is being guessed at. You pay for that in key. [What is varispeed](https://gazillionindustries.com/what-is-varispeed/) covers the arithmetic.

## What separates the good time stretch plugins from the rest

- **More than one algorithm.** A single mode has to compromise between holding transients and holding tone. Any tool that gives you one setting for drums, vocals and full mixes is making that compromise for you, permanently.

- **A wide, honest ratio range.** Look for the published limits and for whether they shrink in certain modes. Serato's own page notes that Pitch 'n Time Pro runs from one-eighth speed to eight times speed, but that its Voice Mode is limited to 50%–200% and plus or minus twelve semitones. That kind of small print is the difference between a spec and a promise.

- **Formant control.** When pitch moves, the resonances of the throat or the body of the instrument move with it, and that is what makes a shifted voice sound like a different-sized person. Being able to hold the formants still is the single biggest quality lever on vocals. See [formant shifting](https://gazillionindustries.com/formant-shifting/).

- **Phase coherence across channels.** On a stereo mix or a stem, the two sides must be processed together or the image collapses and widens at random. zplane state phase coherence and up to eight channels as features of élastiqueAAX for exactly this reason.

- **Real-time preview.** Stretching offline, waiting, listening, undoing and going again is how an afternoon disappears. Hearing the ratio move while the track plays is worth more than a small quality edge.

- **A readout you can trust.** Target BPM, target length, percentage and semitones are four ways of saying one thing, and a tool that shows you all four stops you doing arithmetic at two in the morning.

[SKRUU](https://gazillionindustries.com/skruu.html) is our varispeed plugin: PITCH and TIME are separate knobs, so you can pull the length in while the pitch stays where it was, or run them against each other. There's a demo on the page.

**PITCH −3.09 ST, TIME +19.5%.** Both moving, independently, on a knob you can play.

## How to test a time stretch plugin in ten minutes

Demos are free and marketing copy is not evidence. Use one file you know intimately and push the tool until it breaks, because where it breaks tells you what it is for.

- Pick a twelve-bar section with drums, a sustained vocal and audible room tone.

- Stretch it by 5 percent. Bounce it. Listen on phone speakers, not monitors.

- Stretch the same section by 25 percent and bounce again.

- Listen to the hi-hats first: doubled or flammed attacks mean the grain size is fighting the transients.

- Listen to the vocal tail next: swirling or a metallic ring means the phase handling is giving up.

- Listen to the room tone last, because reverb and noise floor break before anything else does.

- Repeat both passes in every algorithm the plugin offers and write down which mode won each test.

- Run the same two ratios through your DAW's stock warping and compare directly.

- Buy only if the paid tool wins at 25 percent. At 5 percent almost everything wins.

That last step is the one people skip, and it is the one that saves money. Stock warp modes have improved enormously; the gap now opens up at the extremes, not in the middle.

## Where it goes in the chain

Stretching belongs as early as possible, on the raw file, before compression and before saturation. Both of those raise the noise floor and sharpen transients, which hands the algorithm more of the material it handles worst. Stretch first, bounce, then process the bounce.

There is a CPU argument for the same order. A live stretch runs while the session plays, so twenty warped regions cost twenty stretches every pass, forever. Bouncing costs nothing at playback and it freezes the decision, which is usually a mercy.

**Pitched up.** Speed and semitones read out together, so you can see what the key did.

## The best time stretch plugin for Pro Tools

Pro Tools is its own market, because the format is AAX and the buyers are post houses with dialogue to fit to picture. That shows up in the pricing.

Serato's Pitch 'n Time Pro is an AudioSuite plug-in for Pro Tools, currently version 3.1.1, listed on Serato's site at USD 799. Serato state that it works with all versions of Pro Tools, offers time compression and expansion from one-eighth speed through to eight times speed independent of pitch, and pitch shifting of up to thirty-six semitones independent of tempo. The time and pitch panels are separate and can be mixed and matched, and there is real-time previewing. Pro Tools users can download a thirty-day demo license. Pitch 'n Time LE 3, listed at USD 399, runs as a plug-in in Pro Tools and as an algorithm inside Logic's Time & Pitch Machine, which makes it the unusual case of one purchase covering both hosts.

zplane's élastiqueAAX is the other name that comes up. zplane describe it as an offline AudioSuite plugin built on their ÉLASTIQUEPRO v3 engine, with real-time pitch shifting up to plus or minus twenty-four semitones or 25% to 400%, time stretching from 25% to 400%, optional formant preserving, presets for framerate conversion jobs, multi-channel support for up to eight channels and complete phase coherence. There is a cut-down version, élastiqueAAXtce, which only does time stretching as a TC/E plugin and needs Pro Tools 12.8.1 or above. zplane also note that since version 2023.3 the élastiqueAAX time-stretching algorithm is integrated directly within Pro Tools, which is worth knowing before you buy something you may already have.

## The best free time stretch VST

Start with what you own. Ableton Live's manual lists Beats, Tones, Texture, Re-Pitch, Complex and Complex Pro as warp modes, and they map cleanly onto the families above: Beats optimizes granulation to preserve transients, Tones is for distinct-pitch material like vocals and basslines, Texture is for pads, drones and noise, Complex Pro is the one for full songs with a Formants control that holds the resonances still at 100%. Re-Pitch is the varispeed option, and Ableton describe it plainly as changing the playback rate so that doubling the speed raises the pitch by an octave.

For extremes, PaulXStretch is the one to have. Sonosaurus publish it free and open source under GPLv3, as a standalone application on macOS, Windows, iOS and Linux and as an AU, VST3 and AAX plugin on macOS and Windows. Their own page is honest about scope: it is designed for radical transformation and is expressly not suitable for subtle time or pitch correction. Use it to turn eight bars into four minutes of drone, not to nudge a vocal into place.

For the varispeed side of the question, GSi give away VariSpeed for Windows, macOS and Linux. It is a tape echo where the motor speed is the control, so moving the speed moves the delay time and everything in the repeats with it. That is a different job from a stretcher and a useful one, and it costs nothing to find out whether it is the sound you were actually after.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25 — a separate decision from the speed.

**The whole panel.** Two knobs that ignore each other, and a sprung return under them.

## What it costs you

Every stretch is a guess about audio the recording never contained, and the guess shows up first in the parts your ear uses to judge whether a space is real. Reverb tails smear. Room tone starts to breathe. Drums lose the hard front edge before anything else goes, and vocals lose breath, then consonants, then diction in that order.

The money cost is worth stating plainly. The dedicated Pro Tools tools above are priced for facilities, and buying one to fix a sample that was four BPM out is an expensive way to avoid repitching. Try the free routes at the ratios you actually use first.

## Questions people ask

### What is the best time stretch plugin?

For most producers the best time stretch plugin is the one already in the DAW, used in the right mode: transient-aware for drums, spectral for vocals and pads, varispeed when the ratio gets large. A dedicated tool is worth buying when you routinely work past about twenty percent, when you need formant control while shifting, or when you have to fit audio to picture.

### What is the best free time stretch VST?

PaulXStretch from Sonosaurus, for extreme stretching, is free and open source and runs as a standalone app and as an AU, VST3 and AAX plugin. Their own documentation says it is unsuitable for subtle correction, so keep your DAW's warp modes for small moves and use PaulXStretch when you want a bar to become an atmosphere.

### What is the best time stretch plugin for Pro Tools?

The two names that dominate are Serato's Pitch 'n Time, which is an AudioSuite plug-in listed at USD 799 for Pro and USD 399 for LE, and zplane's élastiqueAAX, whose engine zplane say has been integrated directly into Pro Tools since version 2023.3. Both offer trials. Check what your Pro Tools version already includes before buying either.

### How much can you time stretch before it sounds bad?

Around ten percent on a full mix, more on a single instrument, and a great deal on a pad where there is no sharp edge to smear. Drums are the tell. Once the hi-hat attacks start to double, the algorithm has run out of room and you should repitch instead, using [the pitch and tempo relationship](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/) to work out the new key.

## What SKRUU does

SKRUU is varispeed with the two halves pulled apart. **PITCH** and **TIME** move independently, so you can speed a loop up while pitching it down, or lock one and play the other. **ELASTIC** makes the knob sprung: move it, let go, and it runs home on its own, with **SLOPE** setting the shape of the return across sixteen curves. **SAMPLING GRADE** steps the rate down, with LO-FI 2 running at 3.9 kHz. It is $29, it runs on Mac and Windows as VST3, AU and standalone, and it is the tool for the moment you decide to move the key rather than fight it. There is more on choosing between the two in [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/).

Back in the car with the hook. Slowed the other way — speed down, key down, nothing analyzed and nothing invented — the singer stops standing behind a fan and starts standing lower.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
