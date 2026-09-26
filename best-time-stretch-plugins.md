# Best time stretch plugins

> How to choose a time stretch plugin: the three algorithm families, what separates the good ones, a ten-minute test, and the Pro Tools and free options.

Source: https://gazillionindustries.com/best-time-stretch-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

A hook gets slowed six percent so it sits on the beat, and it works fine on the monitors. Then it goes in the car, and the singer sounds like she is standing behind a desk fan. The tempo is right. Everything else about her is wrong.

The best time stretch plugin is the one whose algorithm matches the material and whose ratio stays small: transient-aware for drums, spectral for vocals and pads, monophonic for a single line. Past about fifteen percent on a full mix, stop stretching and move speed and pitch together instead. Our tool for that is [SKRUU](https://gazillionindustries.com/skruu.html), $29: TIME pulls length on its own, PITCH is a separate knob, and both play live. The AAX stretchers below cost USD 399 and USD 799.

## The short version

- **What it is**: length changes, pitch stays put

- **What to look for**: algorithm choice, formant control, a wide ratio range

- **Transparent to**: about 10% on a full mix, further on one instrument

- **What we reach for**: SKRUU, $29 — TIME −50% to +25%, PITCH on its own knob

- **Free route**: your DAW's warp modes, then a dedicated free tool for extremes

- **Pro Tools route**: offline AudioSuite stretchers at USD 399 and USD 799

- **The other answer**: varispeed — move both, accept the key change

**TIME −35%, PITCH at unity.** Length moving on its own, which is the whole trick.

## Three different things get called time stretching

They fail differently, so the first job is knowing which one you are buying. Search results for *best time stretch plugin* mix all three together, which is how producers end up with a tool that cannot do the thing they wanted.

**Time-domain granulation** cuts the audio into short grains and either repeats them to make it longer or discards them to make it shorter, splicing where the waveform lines up. It is cheap on CPU, it keeps attacks hard, and when it breaks you hear stuttering or a comb-filtered flutter across sustained sound. Every DAW has one of these under a name like Beats.

**Spectral resynthesis** analyzes the signal into frequency bands with their phases, advances them at a different rate, and rebuilds audio from the result. It holds sustained material together far better and it softens attacks, which is the smeared, underwater quality people complain about. Good implementations detect transients and switch strategy at each hit, which is how one mode can carry a drum loop and a pad in the same pass. The mechanics are unpacked in [time stretching explained](https://gazillionindustries.com/time-stretching-explained/).

**Varispeed** is a rate change rather than a stretch. Playback rate moves, so length and pitch travel together in fixed proportion, exactly the way a tape machine or a turntable does it. There is no analysis and therefore no artifact, because no new material is being guessed at. You pay for that in key. [What is varispeed](https://gazillionindustries.com/what-is-varispeed/) covers the arithmetic, and it is the family our own plugin belongs to.

## So what do you actually use for time stretching

Match the tool to the size of the move rather than to the plugin list. Under about five percent on one instrument, the warp mode already in your session does it and nobody hears the difference on a phone. Between five and fifteen, the mode matters more than the brand: the transient-aware one for drums, the spectral one for anything sustained. Past fifteen on a full mix, stretching stops being the right question.

That last case is the one producers hit constantly, and it is what [SKRUU](https://gazillionindustries.com/skruu.html) was built for. **TIME** moves the length by itself, from −50% to +25%. **PITCH** is a separate knob running −20% to +10% across 128 states, reading out in semitones as well as speed, so you can pull a loop long while the key goes the other way, or hold one with PITCH LOCK and play the other. **ELASTIC** makes whichever knob you grab sprung: shove it, let go, and it walks home along one of sixteen SLOPE shapes. Six of those are smooth, five stepped, five overshoot and come back. It is $29.

Worked example, using the six-percent hook from the top. Put SKRUU on the vocal, pull TIME to −6% and leave PITCH at unity: the length comes in, the key stays where the arrangement needs it. If you would rather not stretch her at all, set TIME back to unity — double-click returns it — and take PITCH down until the loop lands instead, then transpose the rest of the track to meet the new key. The display is a pitch comparator in semitones with the octaves marked, so the interval is a picture rather than arithmetic at two in the morning. Two knobs, one decision, live while the track plays.

## What separates the good time stretch plugins from the rest

- **More than one algorithm.** A single mode has to compromise between holding transients and holding tone. Any tool that gives you one setting for drums, vocals and full mixes is making that compromise for you, permanently.

- **A wide, honest ratio range.** Look for the published limits and for whether they shrink in certain modes. Serato's own page notes that Pitch 'n Time Pro runs from one-eighth speed to eight times speed, but that its Voice Mode is limited to 50%–200% and plus or minus twelve semitones. That kind of small print is the difference between a spec and a promise. Ours is on the page the same way: SKRUU's TIME is −50% to +25% and PITCH is −20% to +10%, and there is no asterisk under either.

- **Formant control.** When pitch moves, the resonances of the throat or the body of the instrument move with it, and that is what makes a shifted voice sound like a different-sized person. Being able to hold the formants still is the single biggest quality lever on vocals. See [formant shifting](https://gazillionindustries.com/formant-shifting/).

- **Phase coherence across channels.** On a stereo mix or a stem, the two sides must be processed together or the image collapses and widens at random. zplane state phase coherence and up to eight channels as features of élastiqueAAX for exactly this reason.

- **Real-time preview.** Stretching offline, waiting, listening, undoing and going again is how an afternoon disappears. Hearing the ratio move while the track plays is worth more than a small quality edge. SKRUU is built from that end: the knobs are the instrument, ELASTIC springs them back, and DRAG sets how long the new speed takes to arrive — instant at the floor, a hand on the platter turned up.

- **A readout you can trust.** Target BPM, target length, percentage and semitones are four ways of saying one thing, and a tool that shows you all four stops you doing arithmetic at two in the morning. SKRUU puts the host tempo above the comparator, with whether the transport is locked to it, in time with it, or drifting.

[SKRUU](https://gazillionindustries.com/skruu.html) is $29 and there is a demo on the page: PITCH and TIME on separate knobs, ELASTIC to spring them home across sixteen shapes, and SAMPLING GRADE to step the rate down to 15.62, 7.81 or 3.91 kHz when the speed move alone is not the whole idea. AU, VST3 and standalone on Mac, VST3 on Windows.

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

- Now make the same move as a rate change, pitch and length together, and play it to whoever is on the record. Half the time the key change is the better version.

- Buy the dedicated stretcher only if it wins the 25 percent test. At 5 percent almost everything wins.

Those last two steps are the ones people skip, and they are the ones that save money. Stock warp modes have improved enormously; the gap now opens up at the extremes, not in the middle. The middle is where most beats live, and the move there is a $29 knob rather than a facility purchase.

## Where it goes in the chain

Stretching belongs as early as possible, on the raw file, before compression and before saturation. Both of those raise the noise floor and sharpen transients, which hands the algorithm more of the material it handles worst. Stretch first, bounce, then process the bounce. SKRUU sits at the same point, first in the chain, for the same reason.

There is a CPU argument for the same order. A live stretch runs while the session plays, so twenty warped regions cost twenty stretches every pass, forever. Bouncing costs nothing at playback and it freezes the decision, which is usually a mercy.

**Pitched up.** Speed and semitones read out together, so you can see what the key did.

## The best time stretch plugin for Pro Tools

Pro Tools is its own market, because the format is AAX and the buyers are post houses with dialogue to fit to picture. That shows up in the pricing.

Serato's Pitch 'n Time Pro is an AudioSuite plug-in for Pro Tools, currently version 3.1.1, listed on Serato's site at USD 799. Serato state that it works with all versions of Pro Tools, offers time compression and expansion from one-eighth speed through to eight times speed independent of pitch, and pitch shifting of up to thirty-six semitones independent of tempo. The time and pitch panels are separate and can be mixed and matched, and there is real-time previewing. Pro Tools users can download a thirty-day demo license. Pitch 'n Time LE 3, listed at USD 399, runs as a plug-in in Pro Tools and as an algorithm inside Logic's Time & Pitch Machine, which makes it the unusual case of one purchase covering both hosts.

zplane's élastiqueAAX is the other name that comes up. zplane describe it as an offline AudioSuite plugin built on their ÉLASTIQUEPRO v3 engine, with real-time pitch shifting up to plus or minus twenty-four semitones or 25% to 400%, time stretching from 25% to 400%, optional formant preserving, presets for framerate conversion jobs, multi-channel support for up to eight channels and complete phase coherence. There is a cut-down version, élastiqueAAXtce, which only does time stretching as a TC/E plugin and needs Pro Tools 12.8.1 or above. zplane also note that since version 2023.3 the élastiqueAAX time-stretching algorithm is integrated directly within Pro Tools, which is worth knowing before you buy something you may already have.

Read both of those as a description of a different trade. They are AAX, they are offline, and they are priced for a room with picture to hit and a client in it. If your problem is a loop four BPM out or a hook that needs to sit lower, that is a rate change, it happens on two knobs while the track runs, and it costs $29.

## The best free time stretch VST

Start with what you own, because free covers more of this than people expect. Ableton Live's manual lists Beats, Tones, Texture, Re-Pitch, Complex and Complex Pro as warp modes, and they map cleanly onto the families above: Beats optimizes granulation to preserve transients, Tones is for distinct-pitch material like vocals, monophonic instruments and basslines, Texture is for pads, drones and noise, Complex Pro is the one for full songs with a Formants control that holds the resonances still at 100%. Re-Pitch is the varispeed option, and Ableton describe it plainly as changing the playback rate so that doubling the speed raises the pitch by an octave. [Varispeed in Ableton Live](https://gazillionindustries.com/varispeed-in-ableton-live/) has the settings.

For extremes, PaulXStretch is the one to have. Sonosaurus publish it free and open source under GPLv3, as a standalone application on macOS, Windows, iOS and Linux and as an AU, VST3 and AAX plugin on macOS and Windows. Their own page is honest about scope: it is designed for radical transformation and is expressly not suitable for subtle time or pitch correction. Use it to turn eight bars into four minutes of drone, not to nudge a vocal into place.

GSi give away VariSpeed for Windows, macOS and Linux. It is a tape echo where the motor speed is the control, so moving the speed moves the delay time and everything in the repeats with it. That is a different job from a stretcher and a useful one, and it costs nothing to find out whether it is the sound you were after.

Where free runs out is the middle: a move you want to make by hand, on a knob, while the track plays, without committing to a render and without a key change you did not choose. That is the step worth $29, and there is a longer list of what else lives in that lane in [best varispeed plugins](https://gazillionindustries.com/best-varispeed-plugins/).

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25 — a separate decision from the speed.

**The whole panel.** Two knobs that ignore each other, and a sprung return under them.

## What it costs you

Every stretch is a guess about audio the recording never contained, and the guess shows up first in the parts your ear uses to judge whether a space is real. Reverb tails smear. Room tone starts to breathe. Drums lose the hard front edge before anything else goes, and vocals lose breath, then consonants, then diction in that order.

Ours has a boundary too, and it is worth saying out loud. SKRUU's TIME runs −50% to +25% and PITCH runs −20% to +10%. That is the range a beat asks for, and it is not eight times speed, thirty-six semitones, or one bar turned into an hour of drone. If the job is any of those, the tools above exist for it, and two of them cost nothing to try.

The money cost is worth stating plainly. The dedicated Pro Tools tools above are priced for facilities, and buying one to fix a sample that was four BPM out is an expensive way to avoid a rate change. Try the free routes at the ratios you actually use first.

## Questions people ask

### What is the best time stretch plugin?

For most producers it is two tools rather than one. Use the warp mode already in your DAW in the right setting for small moves: transient-aware for drums, spectral for vocals and pads. Once the move is big enough that the stretch starts to show, switch to varispeed and let the key travel; ours is [SKRUU](https://gazillionindustries.com/skruu.html) at $29, with TIME and PITCH on separate knobs and a sprung return under both. A dedicated post-house stretcher earns its price when you have to fit audio to picture.

### Can you time stretch without changing the pitch in SKRUU?

Yes. TIME moves the length by itself, from −50% to +25%, while PITCH stays at unity, and PITCH LOCK and TIME LOCK hold one while the other moves. The readout gives you speed and semitones together, so you can see what you did to the key when you do move it. $29, Mac and Windows.

### What is the best free time stretch VST?

PaulXStretch from Sonosaurus, for extreme stretching, is free and open source and runs as a standalone app and as an AU, VST3 and AAX plugin. Their own documentation says it is unsuitable for subtle correction, so keep your DAW's warp modes for small moves. For the everyday middle between those two, a $29 varispeed knob covers more ground than either.

### What is the best time stretch plugin for Pro Tools?

The two names that dominate are Serato's Pitch 'n Time, which is an AudioSuite plug-in listed at USD 799 for Pro and USD 399 for LE, and zplane's élastiqueAAX, whose engine zplane say has been integrated directly into Pro Tools since version 2023.3. Both offer trials. Check what your Pro Tools version already includes before buying either, and check whether the move you need is a rate change, which is a great deal cheaper.

### How much can you time stretch before it sounds bad?

Around ten percent on a full mix, more on a single instrument, and a great deal on a pad where there is no sharp edge to smear. Drums are the tell. Once the hi-hat attacks start to double, the algorithm has run out of room and you should move the rate instead, using [the pitch and tempo relationship](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/) to work out the new key.

## What SKRUU does

[SKRUU](https://gazillionindustries.com/skruu.html) is varispeed with the two halves pulled apart, and it is the answer to the question at the top of this page. **PITCH** and **TIME** move independently, so you can speed a loop up while pitching it down, or lock one and play the other. PITCH runs −20% to +10% across 128 states with unity marked; TIME runs −50% to +25% and moves nothing but the length. **ELASTIC** makes the knob sprung: move it, let go, and it runs home on its own, with **RETURN** setting how long that takes, free or quantized to the bar, and **SLOPE** setting the shape of the return across sixteen curves. **SAMPLING GRADE** steps the rate down through 15.62, 7.81 and 3.91 kHz, and all four grades record all the time, so the grade can change while a note is sounding. It is $29, it runs on Mac as AU, VST3 and standalone and on Windows as VST3, and it is the tool for the moment you decide to move the key rather than fight it. There is more on choosing between the two in [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/), and the slowed-down case in [how to make slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/).

Back in the car with the hook. Slowed the other way — speed down, key down, the whole record moving together — the singer stops standing behind a fan and starts standing lower.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
