# How to change pitch without changing tempo

> How to change pitch without changing tempo, and tempo without pitch: how pitch shifting and time stretching work, which mode to use, and how to avoid artifacts.

Source: https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

For most of recorded history, pitch and tempo were married. Change one and the other came with it, like a turntable spinning faster. Pitch shifting and time stretching are the divorce, and like most divorces they're possible, useful, and never entirely clean.

To change pitch without changing tempo, use pitch shifting; to change tempo without changing pitch, use time stretching. Both are built into every modern DAW. Pick the algorithm that suits the material (one for drums, one for melodic parts, one for full mixes), keep the change as small as you can because artifacts grow with the amount, and turn on formant preservation for vocals so voices don't turn chipmunk or cartoon-deep.

## The short version

- **Pitch only**: pitch shifting

- **Tempo only**: time stretching (warping)

- **Both linked**: varispeed or repitch

- **Drums**: a transient-preserving mode

- **Melodic and mixes**: a high-quality tonal or complex mode

- **Vocals**: preserve formants

- **One semitone**: a ratio of 1.0595, or 5.95% of speed

- **One percent of speed**: 17 cents of pitch

- **44.1 kHz played at 48**: 8.84% fast, 147 cents sharp

- **The bill**: artifacts scale with the size of the move

**TIME −35%, PITCH at unity.** Length without pitch — the other half of the machine.

## How the separation works

Time stretching slices audio into tiny overlapping pieces and either repeats or skips them to change the length, then blends the seams. Pitch shifting stretches the audio in time and resamples it back to the original length, so the pitch moves while the duration stays. The better the algorithm, the better it hides the seams, but every method trades something: smeared transients, a phasey or metallic tone, or a watery sound on sustained notes.

Two families do the work, and they fail in opposite directions. A time-domain method — the one behind most transient-preserving modes — cuts the file into overlapping grains, hunts for the point where the next grain best matches the last, and crossfades there. A frequency-domain method — a phase vocoder, which is what the tonal and complex modes run — takes a short window of samples, works out the amplitude and phase of every frequency bin inside it, advances its read clock at a different rate than its write clock, and builds new audio from the result. The first keeps attacks intact and struggles with held tones. The second keeps held tones smooth and struggles with attacks. That is the entire argument behind the mode menu.

The window length is where the trade lives, and it is measurable rather than a matter of taste. A 2048-sample window at 44.1 kHz is 46.4 ms long and resolves frequency to 21.5 Hz. Halve it to 1024 samples and you get 23.2 ms and 43.1 Hz: sharper in time, blunter in pitch. Double it to 4096 and you get 92.9 ms and 10.8 Hz, which is clean on a sustained low note and hopeless on a snare, because a snare's front edge is over in a few milliseconds and the window is twenty times longer than the event it is trying to describe. Nobody escapes that. Every mode in every DAW is a different guess about where to sit on the line.

## Semitones, cents and percent: the arithmetic

All three units describe the same ratio, and converting between them in your head kills most of the guesswork. One semitone is two to the power of one twelfth, 1.0595, so a semitone up is 5.95% faster and an octave is exactly double. A semitone splits into 100 cents. Run it backward and 1% of speed is 17 cents, which is why a nudge you can barely see on a fader is plainly audible against a held chord.

The tempo conversion is the one that catches people. Take a 90 BPM loop up three semitones as a speed change and the ratio is 1.1892, so it now runs at 107.03 BPM. Go the other way and ask what a small tempo nudge does to the key: pushing 90 to 93 BPM is a ratio of 1.0333, which is 57 cents, more than half a semitone. Sample rate does the same thing to you by accident. Play a 44.1 kHz file at 48 kHz and it runs 8.84% fast, 147 cents sharp, and that 90 BPM loop arrives at 97.96 BPM. If a borrowed loop is mysteriously a semitone and a half out, check the file's rate before you reach for a shifter.

Cents earn their keep at the small end. At A440, one cent is a quarter of a Hertz — 0.25 Hz exactly enough. Layer two copies five cents apart and the difference between them is 1.27 Hz, so you hear a beat a little over once a second: slow, wide, and the whole mechanism behind [detune](https://gazillionindustries.com/best-detune-plugins/). It is also why a five cent correction on a lead vocal is obvious and a five cent correction on a kick is a waste of an afternoon.

## A worked example: eight bars at 90

Numbers make the difference concrete. Eight bars of 4/4 at 90 BPM is 32 beats, and at two thirds of a second a beat that is 21.33 seconds of audio. Here is the same +3 semitone intention, spent three ways.

- **Varispeed, +3 semitones.** Rate 1.1892. The length falls to 17.94 s, 15.9% shorter, and the loop now sits at 107 BPM. Nothing is invented; every part of the recording moves together, hiss and room included.

- **Pitch shift, +3 semitones, tempo held.** The length stays 21.33 s and the tempo stays 90. Inside, this is the varispeed move followed by a time stretch of 1.1892 that drags the 17.94 s back out to 21.33 s. The stretch is the half with the artifacts in it.

- **Time stretch to 107 BPM, pitch held.** The length falls to 17.94 s and the key stays put. Same stretch ratio, same artifacts, spent on the clock instead of the key.

Read the middle line again, because it is the point of the page. A pitch shift is a speed change plus a stretch that cancels the length change. You pay for the stretch either way. The only question is whether you spend it on the key or on the clock — and when you can live with the linked result, you spend nothing at all.

## Choose the mode for the material

- **Drums and loops:** modes that detect and preserve transients, so hits stay sharp.

- **Melodic parts:** tonal modes that keep sustained notes smooth.

- **Full mixes:** the highest-quality complex modes, which cost more CPU.

- **For character:** repitch or varispeed, which doesn't separate them at all. See [what is varispeed](https://gazillionindustries.com/what-is-varispeed/).

Two habits survive contact with every mode menu. Match the window to the fastest event in the file rather than to the name of the instrument: a plucked upright bass is transient material even though bass is a melodic part, and a pad with no attack at all will take the longest window you own and thank you. And judge the mode on the element you care about most, because a break with a sung sample over the top has no single right answer. That is the argument for splitting it onto two tracks and giving each one its own mode.

## How to change pitch without changing tempo

- Select the audio clip or region.

- Make sure it's set to follow the project tempo (warping or flex on).

- Choose a stretch mode that suits the material.

- Transpose it in semitones, and use cents for fine tuning.

- For vocals, turn on formant preservation if the mode has it.

- Listen for artifacts, and try another mode if it sounds phasey or smeared.

Two things the step list cannot carry. Transposing a region is a non-destructive property in most hosts, so the file on disk is untouched and you can walk the value back — right up until you bounce. And the host holds an advantage a plugin never will: it can look at the whole clip before it plays a single sample of it, while an insert only ever sees the next block of audio arriving. That is why a clip transposition on a settled part usually sounds a shade cleaner than the same move made live, and why the live move is the only one of the two you can perform.

**Pitched up.** Same control, the other direction.

## How to change tempo without changing pitch

- Set the clip to follow the project tempo.

- Choose a transient-preserving mode for drums or a tonal mode for melodic parts.

- Change the project tempo, or stretch the clip to the new length.

- Check the hits and the sustained notes for smearing.

Then check the length instead of trusting it. Solo the stretched clip, look at where it ends against the bar line, and confirm it lands where the grid says it should. Warping works from markers the host drops on detected transients, and one marker on the wrong hit will drag half a bar while the rest stays still. On anything with a swung or dragged feel, the marker set is usually what is wrong, not the algorithm, and no amount of switching modes will fix a marker.

[SKRUU](https://gazillionindustries.com/skruu.html) puts pitch and time on separate knobs you can play, and lets either spring back.

## Hear the linked case

Everything above is about prising pitch and tempo apart. This is the sound of leaving them married, which is the option you are turning down every time you warp something. One loop, three rates, no other processing. The figures are the renderer's own readout.

- **Unity** — rate 1.0000, +0.00 semitones — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

One source loop, rendered offline through the same engine the plug-in runs.

## Test it in your own session

You can measure what a stretch costs rather than argue about it. Ten minutes, any DAW.

- Duplicate the track so you have two copies of the same clip, A and B.

- On copy B, pitch shift up 12 semitones with the tempo held.

- Bounce copy B in place, then pitch that bounce back down 12 semitones.

- Bounce again, so B has been through the algorithm twice and should now match A.

- Line the two up to the sample and flip the polarity of one of them.

- Play both together. What you hear is everything the algorithm failed to put back.

- Repeat the whole thing at 1 semitone and compare the two residues.

Two round trips is harsher than anything you would do on purpose, and that is the point: it magnifies the character of the error until you can name it, and once you can name it you will spot it at normal sizes. Run it once per mode and you stop guessing forever. The leftover from a transient-preserving mode is a rattle of tiny attack fragments. The leftover from a phase vocoder is a soft pitched wash with no edges anywhere in it.

## Formants, and why voices go cartoon

A voice carries two independent pitch systems and a shifter moves both. The vocal folds set the fundamental, and that is the note. The throat, mouth and nose form a resonant tube whose peaks — the formants — sit at frequencies fixed by the shape of the tube, and they stay where they are when the singer jumps from a low note to a high one. That is how your ear knows one person singing a wide interval from two different people singing a note each.

A rate change moves every frequency in the file by the same ratio, formants included. Resonance in a tube runs inversely with its length, so doubling every formant is the acoustic signature of a throat half the size. The ear reads that as a smaller body rather than a higher note, which is exactly where the cartoon comes from. Formant preservation measures the spectral envelope, shifts the harmonics underneath it, and puts the envelope back where it started. Turn it on for anything with a voice in it. Turn it off when the cartoon is the point — see [chipmunk soul](https://gazillionindustries.com/chipmunk-soul/) and [formant shifting](https://gazillionindustries.com/formant-shifting/).

One warning, because the control gets left on out of habit. Formant preservation is a second estimation stacked on top of the stretch, and on a full mix there is no single envelope for it to hold, since the drums and the bass live inside the same spectrum as the voice. On a stereo mix it usually sounds worse than leaving it off. Save it for isolated vocals.

## Where it goes in the chain

Put the stretch ahead of anything that reacts to level, time or pitch. A compressor after a shift hears the material you actually kept and sets its attacks against it. A compressor before one has its own release times stretched along with the audio, which arrives at your ears as a fault in the compressor rather than a move in the music. The same goes for gates, transient shapers and anything fed from a sidechain.

Delay and reverb are a real decision rather than a default. Put them after the shift and the tails move with the source, which reads as one room doing one thing. Feed a send from the unshifted signal instead and you get a stationary space with a moving source inside it, which reads as two recordings glued together. Either can be correct; make the call on purpose. Tempo-synced delays are the trap, because they follow the project tempo, so a clip you moved with a speed change is now in a different tempo from the delay feeding off it. Set the delay by hand or bounce the clip first. The slowed case is worked through in [how to make slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/).

Two more, quickly. Anything you tuned by ear before the shift is out of tune after it, so set the pitch first and tune second. And a shifter sitting on a bus applies identical work to every source underneath it; the moment two of those sources want different modes, the bus is the wrong place for it.

## The failure modes, and what each one sounds like

- **Smearing.** A hit loses its front edge and turns into a short swell. Cause: a window longer than the attack it is covering. Fix: a transient-preserving mode, or a shorter window where the mode exposes one. Background in [what is a transient](https://gazillionindustries.com/what-is-a-transient/).

- **Pre-echo.** A faint copy of the hit arrives before the hit, up to roughly a window's length early. Cause: transient energy spread backward across the analysis window. Fix: shorter window, transient mode, or cut the hit out and move it on its own.

- **Metallic or phasey tone.** A thin ringing cast over sustained material, worst on cymbals and distorted guitars. Cause: the phases of the partials no longer line up after resynthesis. Fix: a higher-quality mode, a smaller move, or accept it as a sound and commit.

- **Watery shimmer.** A slow wobble under held notes. Cause: grain crossfades landing at a slightly different phase each time around. Fix: a tonal mode, or less shift.

- **Flamming.** One hit comes back as two. Cause: a grain boundary sitting inside the attack, so part of the attack plays twice. Fix: nudge the clip start a few milliseconds and run it again, which often moves the boundary off the hit entirely.

- **Loop drift.** The loop stops ending on the bar. Cause: warp markers on the wrong hits, or a stretch ratio that does not divide into the loop length. Fix: check the markers first and the algorithm second.

All of them scale with the size of the move and with how much the material looks like noise to the analyzer. A sine wave survives two octaves without complaint. A cymbal crash does not survive two semitones cleanly, and a full mix has a cymbal in it.

## Per-DAW: where the control actually is

The operation is identical everywhere and the menus agree about nothing, which is most of why this question keeps getting asked.

**Ableton Live.** Warp on in the clip, then Transpose in semitones and Detune in cents in Clip view. The Warp Mode chooser holds Beats, Tones, Texture, Re-Pitch, Complex and Complex Pro. Re-Pitch is the mode that refuses to separate the two, so if your pitch is moving whenever the tempo does, that is the mode you are sitting in. Complex Pro carries a Formants control, and that is the one for vocals.

**Logic Pro.** Flex Time moves length, Flex Pitch moves individual notes, and the Region inspector has Transpose for a whole region at once. Flex Time's algorithm list runs Slicing, Rhythmic, Monophonic, Polyphonic, Speed and Tempophone, and Speed is the one that links pitch back to length. For a whole-project move there is a Varispeed readout in the control bar — the full tour is in [varispeed in every DAW](https://gazillionindustries.com/varispeed-in-every-daw/).

**FL Studio.** Channel Settings, the Time stretching and pitch shifting panel, and the Mode menu inside it. The élastique modes hold pitch while time moves; Resample links them, which is the speed-change case. Pitcher and NewTone are the note-level tools when a region transpose is too blunt.

**Pro Tools.** Elastic Audio on the track, then Polyphonic, Rhythmic, Monophonic, X-Form or Varispeed from the plug-in menu. Varispeed is the linked one, and Avid document it as having no controls of its own.

**Reaper.** Item properties carry a playrate and a separate pitch adjustment in semitones, with a checkbox deciding whether pitch follows the rate. Leave it unticked and you have a speed change; tick it and you have a stretch. The pitch shifter itself is selectable per item, which is unusually honest about the fact that the algorithm is a choice.

**Cubase** puts it in AudioWarp and Musical Mode, running on the élastique algorithms, with transpose on the info line. **Studio One** sets a timestretch mode per event, with transpose and tune beside it in the inspector. **Bitwig** keeps stretch modes on the clip, including a repitch mode that links the two back together. **GarageBand** has region transpose and no varispeed at all. And **Audacity** is the clearest teacher in the list, because it splits the three operations by name in the Effect menu: Change Pitch holds the tempo, Change Tempo holds the pitch, Change Speed links them.

## What it costs you

Say the price out loud before you commit to it. A stretch costs CPU, and the modes worth using cost the most — on a session with thirty warped clips that is the difference between a project that plays and one that stutters, which is why bouncing is a discipline and not a tidying habit. A rate change costs top end on the way down, because every frequency travels with it: a cymbal sitting at 10 kHz lands at 8.4 kHz three semitones down, and no EQ puts back air that is no longer in the file. And a stretch costs sync the moment the ratio is wrong — run a clip 4% slow across eight bars at 90 BPM and its end arrives 0.89 seconds late, about a beat and a third.

The last cost is a decision. Every generation of stretching stacks on the one before it, so a clip you shift, bounce, shift again and bounce again is carrying four passes of artifacts and has no road back. Bounce once you are sure, keep the untouched file next to it, and write the semitone value down somewhere. You will want to move it 40 cents next week.

## Keep it clean

Small moves hide best. A semitone or two, or a few BPM, usually sounds natural; a big jump in either direction exposes the algorithm. If you need a large change, try splitting it: move part of the way with varispeed, which sounds natural, and the rest with pitch shifting. And bounce the result once you like it, so you're not stacking stretch on top of stretch. For samples specifically, see [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/).

## Questions people ask

### Can you change pitch without changing speed?

Yes. Pitch shifting changes the pitch while keeping the tempo and length the same. DAWs do it with stretch algorithms; small changes sound most natural.

### How do I change the tempo without changing the pitch?

Use time stretching: set the clip to follow the project tempo with a suitable stretch mode, then change the tempo. The pitch stays where it was.

### Why does pitch shifting sound bad sometimes?

Large shifts expose the algorithm's artifacts: smeared transients, a metallic or phasey tone, and unnatural formants on voices. Use the right mode, keep changes small, and turn on formant preservation for vocals.

### How do I change the pitch of a song without changing the speed?

Import the file, set it to follow the project tempo with a complex or high-quality stretch mode, and transpose the region in semitones. On a full mix keep the move small and leave formant preservation off, because there is no single voice for it to hold on to. Listen to the linked version first: a small speed change across a whole record is often less noticeable than the artifacts of holding the tempo still.

### How do I change tempo without changing pitch in Audacity?

Select the audio and use Effect, then Change Tempo, which moves the length and leaves the pitch alone. Change Pitch does the opposite. Change Speed links the two together, which is the speed-change case.

### How many semitones can I shift before it sounds bad?

There is no fixed limit, because it depends on the material and the mode, but the shape is reliable: the damage scales with the ratio. A pad or a bass line will take five or six semitones. Drums and full mixes start showing seams at two or three. Noisy content breaks first — cymbals, distorted guitar, room ambience. Find your own limit with the null test above rather than reading a number off a page.

### Does changing the pitch change the key?

Yes, by exactly the amount you shifted. Twelve semitones is an octave, so the key letter comes back around to itself. Three semitones up takes A minor to C minor. Cents do not change the key name, they change the tuning: 50 cents is a quarter tone, and it will sit badly against anything else tuned to concert pitch.

### Is it better to pitch the sample or change the project tempo?

Change the project tempo while the arrangement is still flexible, because it costs nothing and processes nothing. Pitch or stretch the sample once the arrangement is settled, or when the two disagree by more than the sample can absorb. On a chopped sample the tempo route almost always wins, since every chop you stretch is another edge for the algorithm to blur — see [how to chop samples](https://gazillionindustries.com/how-to-chop-samples/).

### Why does my drum loop lose its punch when I stretch it?

The analysis window is longer than the attack. A kick's front edge is a handful of milliseconds and a 46 ms window smooths straight over it, so the hit arrives as a swell instead. Switch to a transient-preserving mode, or slice the loop at the hits and move the slices rather than stretching through them.

### Does pitch shifting lose quality?

Always, by some amount, because audio is being played that was never recorded. The loss is smallest on sustained harmonic material and largest on transients and noise. A speed change is the exception: it alters the playback rate and invents nothing, which is why it stays clean at sizes that would wreck a shifter.

### What is the difference between transpose and pitch shift?

Transpose is usually the name of the control and pitch shift the name of the operation underneath it. Transposing an audio region by a semitone runs a pitch shifter on it. Transposing a MIDI region does not, because there is no audio to process, which is why a MIDI part transposes perfectly and an audio part never quite does.

### Can you change pitch without changing tempo in real time?

Yes. Plugin shifters do it on an insert while the track plays, and DAW stretch modes run live rather than rendering first. The trade is lookahead: a host working through a whole clip can see what is coming and an insert cannot, so a live shift on percussive material is the harder of the two cases.

## Stock plugins that do this

- **FL Studio**: sample channel stretch modes; Pitcher for vocals

- **Ableton Live**: Warp modes: Beats, Tones, Texture, Re-Pitch, Complex, Complex Pro

- **Logic Pro**: Flex Time and Flex Pitch

- **Pro Tools**: Elastic Audio: Polyphonic, Rhythmic, Monophonic, X-Form, Varispeed

- **Cubase**: AudioWarp and Musical Mode, on the élastique algorithms

- **Reaper**: item playrate and pitch, with a preserve-pitch checkbox

- **Studio One**: timestretch mode per event, transpose and tune in the inspector

- **Bitwig**: per-clip stretch modes, including a repitch mode

- **GarageBand**: region transpose only, up to 12 semitones

- **Audacity**: Change Pitch, Change Tempo and Change Speed, as three effects

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin: two knobs that don't touch each other. **PITCH** moves the pitch, from −20% to +10%, reading out in semitones as well as speed. **TIME** moves the length, from −50% to +25%. Speed it up while pitching down, or the other way round. **PITCH LOCK** and **TIME LOCK** hold one while the other moves, and **ELASTIC** makes either knob spring back along a return shape you choose. Zero samples of latency.

The bottom half of the panel is about what happens when you let go. **RETURN** sets how long the trip home takes, **BITE** how hard the knob commits to it, and sixteen **SLOPE** shapes decide the road back, while **DRAG** sets how long a new speed takes to arrive in the first place. **SAMPLING GRADE** steps the rate down through 31.25, 15.62, 7.81 and 3.91 kHz. AU, VST3 and standalone, Mac and Windows. It is the linked half of this page rather than the separated half, and that is the honest way to use it next to a stretch: take as much of the move as you can stand to hear as a speed change, where nothing is invented, and leave only the remainder for an algorithm to guess at.

The divorce went through. They still get along better than you'd think.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
