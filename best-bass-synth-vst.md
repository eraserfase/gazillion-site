# Best bass synth VST plugins

> The best bass synth VST plugins, free and paid, why a monosynth suits bass, and the oscillator, filter and envelope settings that make any of them sit.

Source: https://gazillionindustries.com/best-bass-synth-vst/  
Published 2026-09-26, updated 2026-09-26. By Gazillion Industries, who make JOURNEYMAN.

---

The bassline held the whole room on monitors and then vanished in the car. Kick still there, hats still there, and the part that was carrying the song reduced to a vague pressure behind the dashboard. That is a synth bass problem, and it starts at the synth.

The best bass synth VST for most records is a monophonic subtractive synth: one voice, two oscillators an octave apart, a lowpass filter with a fast envelope on it, and glide. Complexity is what makes a synth bass disappear. **JOURNEYMAN** is ours, $59, Mac and Windows, and it is built that shape on purpose — one voice, three oscillators, two ladder filters, and 200 programs with the basses at the front of the bank.

## The short version

- **What we would track the bass on**: JOURNEYMAN — ours, $59, one voice, bass programs first

- **Voice count that works**: one — two notes can never stack in the low end

- **Starting patch**: osc at 16′, a second an octave below, filter low, fast attack, short decay

- **Where the note actually lives**: fundamental 30–60 Hz, the part you hear on a phone 150–400 Hz

- **Best free bass synth plugins**: Vital’s free tier and Surge XT, both complete synths

- **The control that decides it**: the amp envelope, long before the oscillator

Everything under this is the reasoning, the arithmetic, and a build order that takes a patch from initialized to usable in seventeen plain moves.

## What a bass synth has to do that a bass preset cannot

A synth bass has one job: put a note in the low end that stays the same size on every system it will be played on. Not the same tone. A car will never give you what monitors give you. The same size, so the part reads as the floor of the record on a laptop, on a phone and in a club.

Three things work against that at once. Level is the first: low frequencies need more of it to register as equally loud, and the quieter somebody listens the more true that becomes, which is the [equal-loudness problem](https://gazillionindustries.com/fletcher-munson/) in a sentence. Speakers are the second: most phone and laptop drivers give up somewhere in the hundreds of hertz, the exact point varying by model, so the fundamental of a 45 Hz note is not coming out of them at all. The arrangement is the third: the bass note and the kick want the same few octaves, and two full-strength things at 50 Hz add up to one indistinct thing.

A preset cannot solve any of those, because a preset is a guess about a song it has never heard. What solves them is a small number of controls you can move while the track plays, and a synth simple enough that you know which one to reach for. That is the whole case for a monosynth on bass, and the rest of this page is the detail under it.

## One voice on purpose: the best synth plugin for bass is usually monophonic

A monosynth plays one note at a time, and on bass that limit is the feature. Play a slightly overlapping pair of notes on a polysynth and you get two fundamentals summing in the region where summing is most expensive: in phase they add, out of phase they hollow out, and the amount depends on how long your finger stayed down. A monophonic instrument cannot make that mistake. Whatever else happens, there is one note in the low end.

Monophonic also buys you the three performance controls that make a bass part sound played rather than entered. Glide slurs the pitch from the last note to the new one, which is most of what separates a bassline from a sequence of bass notes. Note priority decides which note wins when two are held — last, low or high — and it changes how your own playing comes out more than any filter setting will. Trigger mode decides whether the envelopes restart on a legato note or ride through it, which is the difference between every note having an attack and a phrase having one attack with movement inside it.

JOURNEYMAN puts all three on the face. Its KEYBOARD panel carries note priority and a single or multi TRIGGER switch with a bend range for each direction, and GLIDE sits in the PERFORMANCE panel with its own rate control and an on switch, so a part can slide in one phrase and step in the next.

The cost is stated in the category name. One voice means no chords, no held pad under the riff, no two-note stabs. If the part needs two notes ringing together you need a different instrument for that track, and the fact that a monosynth refuses is a large part of why bass parts written on one tend to sit.

## The three controls that decide whether a synth bass sits

Every bass patch on every synth named on this page comes down to three stages in the same order. Pitch, then filter, then envelope. Get them in that order and a bass part takes minutes; start anywhere else and you will spend an hour on a waveform that was never the problem.

### Oscillators: set the pitch before you touch the waveform

Octave first. A bass patch is decided by which register the oscillators are in, and by how many of them are in it. One oscillator an octave down under your main one gives weight with nothing to argue about. Two oscillators at the same footing, detuned a few cents, gives movement and costs you mono compatibility, because detuning is a slow, deliberate [phase relationship](https://gazillionindustries.com/phase-cancellation/) that walks in and out of cancellation. Both are legitimate. Only one of them survives a mono club system unchanged. Our rundown of [detune plugins](https://gazillionindustries.com/best-detune-plugins/) covers the trade in the general case.

Waveform second, and there is less in it than the forum threads suggest. A saw carries every harmonic and gives the filter the most to work with. A square carries odd harmonics and reads hollower and more woody. A triangle is nearly a sine with a little edge, which is the shape for a sub part. Pulse narrowed away from square thins out and starts to sound nasal, which is useful when the bass has to be audible on something small.

JOURNEYMAN has three oscillators, each with OCTAVE and WAVE, and WAVE sweeps continuously from triangle through saw and square to pulse rather than stepping between four buttons, so you can stop halfway between two shapes and keep the one you found. Oscillators 2 and 3 have their own FREQUENCY control for detune and interval, there is a 1-2 SYNC switch and a 3-1 FM switch, and a MIXER underneath sets the level of OSC 1, OSC 2, OSC 3, NOISE and EXT IN independently. That mixer is where the bass patch is really built, because it lets you have the sub and the body at a balance you chose rather than one the patch chose.

Bass is also the register where oscillator quality shows, because the harmonic series of a 41 Hz saw runs all the way to the top of the audio band and any [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) produced on the way lands as inharmonic content you will hear as grit on the high notes and confusion on the low ones.

### The filter: cutoff, resonance, keyboard tracking, poles

Cutoff is the tone control of the whole instrument. Every one of those harmonics is available and the filter decides how many of them you keep, so a bass patch goes from round to buzzy on one knob with nothing else touched. Resonance lifts a narrow band right at the cutoff, which on bass reads as a hollow, vocal quality at moderate settings and as a whistle at high ones. Our longer piece on [cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/) covers the interaction in full.

Keyboard tracking is the control nobody sets and everybody needs. With the cutoff parked at one frequency, a low note keeps most of its harmonics and a note an octave up loses them, so the top of your bassline goes dull exactly where it should be opening up. Tracking moves the cutoff with the note. Turn it up until the highest note of the actual part is as bright as the lowest, then stop. JOURNEYMAN calls it KB AMT and puts it next to RESONANCE.

Pole count is the standard way filter slope is described — six decibels per octave for each pole — and it is worth knowing only because it changes how much of the harmonic series leaks through above the cutoff. Fewer poles leaks more, which on bass reads as brighter at the same knob position. JOURNEYMAN gives each of its two filters a 3 or 4 pole switch, a DUAL LP or HP:LP mode pair, a shared CUTOFF and RESONANCE, and a SPACING control that offsets the two filters from each other. Spacing is a width control, and width in the low end is the thing that collapses when a system sums to mono, so it belongs in the check list further down rather than in the patch you start with. If you want to hear what a range of filters does to the same source before deciding any of this, our [filter plugin roundup](https://gazillionindustries.com/best-filter-plugins/) is the sibling page to this one.

### The envelopes: where the groove actually is

The amp envelope decides whether the part has a pocket. A fast attack puts the [transient](https://gazillionindustries.com/what-is-a-transient/) where your finger is. A short decay with the sustain down gives you a plucked note that stops making noise before the next one arrives. A long release means every note bleeds into the following one and the low end never clears, which is the single most common reason a bassline sounds like mud rather than like notes.

That last one is arithmetic, not taste. A quarter note lasts 60,000 divided by the tempo, in milliseconds. At 90 bpm a quarter is 667 ms, an eighth 333 ms, a sixteenth 167 ms. At 140 bpm the same three are 429, 214 and 107 ms. At 160 bpm they are 375, 188 and 94 ms. Set the release shorter than the gap to the next note you care about. A 300 ms release on an eighth-note bassline at 140 bpm overlaps every single note by 86 ms, and that overlap is where the definition went.

The filter envelope is the second one, and it is what people mean by a plucky bass. Point a short decay at the cutoff with the sustain low and a good amount, and the note opens for a moment and shuts, which reads as attack without any change in level. JOURNEYMAN has an ADSR for each: a FILTER ENV with its own AMOUNT, and a VOLUME ENV. The pluck is the filter one; the pocket is the volume one; and confusing them is why a bass sometimes gets louder when you only wanted it brighter.

## Best sub bass synth VST: the part under 60 Hz

A sub part is a different instrument from a bass part even when it is the same note. Sub is close to a sine: few harmonics, enormous energy, almost no information. Bass is the harmonic series above it, and the harmonic series is the part that survives being played on something small.

This is the single most useful fact in the low end. The ear reconstructs a pitch from the spacing of its harmonics, so a phone with no output below a few hundred hertz will still play you a recognizable bassline as long as the harmonics are there. A pure sub with the harmonics filtered off will be silent on that phone and enormous in a car, which is exactly the trap the opening of this page describes. Our piece on [bass on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) works through it with measurements.

So build the sub inside the patch rather than as a second track. On JOURNEYMAN that is one oscillator dropped to 32′ with its own level in the MIXER, sitting under the two doing the harmonic work at 16′. You get one note, one envelope and one filter across both, which means the sub and the body can never drift out of time with each other or get different amounts of glide. Layering a separate sub synth on its own track is the usual alternative and it costs you both of those guarantees.

Then decide how much harmonic content the sub itself needs. A little [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/) on a sub generates content at multiples of the fundamental, which is the cheapest way to make 40 Hz audible on a device that stops at 400. The full method is in [how to make bass fatter](https://gazillionindustries.com/how-to-make-bass-fatter/), and BEEFY is our saturation plugin if you want the whole chain from one house. Keep the sub mono, keep an eye on [headroom](https://gazillionindustries.com/headroom-in-mixing/), because low frequency content costs more of it than anything else in the mix, and check [true peak](https://gazillionindustries.com/true-peak/) at the end rather than assuming the sample peak told you the truth.

## Best analog bass synth VST: what that word is doing in the search box

People searching for an analog bass synth VST are usually asking for three concrete things, and it helps to separate them, because two are architecture and one is character.

The first is a subtractive signal path: oscillators into a filter into an amplifier, with an envelope on the filter and an envelope on the amp. That is a layout, it is visible on the front panel, and it is the reason those synths are fast to program. The second is continuously variable controls — a knob per function, no pages, no menus — which matters on bass because bass is decided by small moves made while the track is running. The third is character: the small pitch differences between oscillators, the way a filter misbehaves as resonance climbs, the harmonic content a saturating output stage adds. Our page on [analog warmth](https://gazillionindustries.com/analog-warmth/) pulls that third one apart into things you can actually measure.

JOURNEYMAN is built on the first two. Three oscillators with OCTAVE, WAVE and FREQUENCY, a mixer, two filters with CUTOFF, SPACING, RESONANCE and KB AMT, two ADSR envelopes, an LFO with RATE and SYNC, and two modulation busses each with SOURCE, SHAPING, DESTINATION and AMOUNT — all of it on one panel, all of it turnable while the loop plays. There is also a TOUCH SURFACE with X mapped to cutoff and Y to the spacing between the two filters, which on a bass part is a performance control rather than a sound design one: you can open and close the patch across eight bars with a gesture instead of drawing a curve.

If the third item is what you are after specifically, the analog-modeled plugins named below are honest about being exactly that, and they are good at it.

[JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is our monosynth: one voice, three oscillators, two ladder filters, two envelopes, two modulation busses and 200 programs, with the bass bank at the front. It is $59 for Mac and Windows, and every control named on this page is on its front panel. There's a demo on the page.

## The best bass synth VST plugins, sorted by what you want from one

What follows is by job rather than by rank, because a ranked list of synths answers a question nobody has. Prices and features were read on each maker's own page while writing this, and where a price would not load we have said nothing about cost rather than guess.

### If you want the bass part decided for you

**JOURNEYMAN** is ours. $59, Mac and Windows, one voice. Three oscillators each with OCTAVE and WAVE plus a continuous sweep from triangle through saw and square to pulse, a MIXER over OSC 1, OSC 2, OSC 3, NOISE and EXT IN, two ladder filters with CUTOFF, SPACING, RESONANCE and KB AMT, a switchable DUAL LP or HP:LP mode with 3 or 4 poles per filter, an ADSR FILTER ENV with AMOUNT and an ADSR VOLUME ENV, an LFO with RATE and SYNC, two modulation busses with SOURCE, SHAPING, DESTINATION and AMOUNT, GLIDE, note priority and trigger modes, a bend range per direction, and a touch surface across cutoff and filter spacing.

It ships with 200 programs across basses, leads, keys, pads, percussion and fx, and every one of them is wired to the mod wheel and the touch surface, so a program is a starting point you can push in two directions without opening anything. AU, VST3 and standalone on macOS as a universal binary; VST3 on Windows. macOS 10.13 or later, Windows 10 or later, 64-bit. There is a demo on the product page, which is the fastest way to settle whether the voice is the one you want under your drums.

What you give up, plainly. One voice is the entire bet, so chords are somebody else's plugin. And a front panel with three oscillators, two filters, two busses and a touch surface on it is more to learn than a preset browser, which costs you the first hour and pays it back on the second bassline.

### If you want to pay nothing

**Vital** is a spectral warping wavetable synth and its Basic tier is free: the full synth with all features, 75 presets and 25 wavetables, with paid tiers that add more of both. The wavetable oscillator with spectral warping is a genuinely different way to get a bass timbre, and the drag-and-drop modulation with a preview before you commit makes it quick to point an envelope at something and hear it before deciding.

**Surge XT** is free and open source, and it is the most synth you can get for no money. Subtractive hybrid, two scenes per patch that are each a complete engine, three oscillators per scene across twelve oscillator algorithms, over 2,800 patches and over 700 wavetables in the factory set, plus MPE, microtuning and CLAP support. It is a lot of instrument and it has the documentation to match. For the rest of the no-cost shelf, our [free plugin roundup](https://gazillionindustries.com/best-free-vst-plugins/) covers the effects side.

### If you want wavetables and the biggest preset economy

**Xfer Records Serum 2** is $249 and is the standard reference in this lane. Alongside the wavetable oscillator it adds multisample, sample, granular and spectral oscillator types, and Xfer put the count at over 626 presets and 288 wavetables. VST3, AU and AAX, 64-bit, with a demo limited to 15 minutes and a free upgrade for Serum 1 owners. For bass specifically the appeal is the third-party preset market around it, which is larger than any other synth's, and the cost is that a wavetable frame is one more variable in a register where fewer variables is the goal.

### If you want analog-modeled character

**u-he Diva** is 179 € and is explicit about what it is: oscillator, filter and envelope modules based on classic synth hardware, which you mix and match on one panel to build a hybrid that never existed. Zero delay feedback filter design, per-voice oscillator detune, two host-syncable LFOs, over 1,200 factory presets, resizable from 70% to 200%, and Mac, Windows and Linux with the Linux build still marked beta. On bass it is the one people reach for when they want the filter itself to be the character.

**u-he Hive 2** is 149 € and is the lighter, faster sibling: two oscillators with standard waveforms or 2D wavetables, up to 16x unison, tunable sub-oscillators, a 12 x 2 modulation matrix with modifiers, four user-definable XY pads and over 2,400 factory presets, with low CPU use as one of its stated design goals. Tunable sub-oscillators make it a reasonable one-window answer to the sub question above.

### If you want one synth that covers every job

**FabFilter Twin 3** has four oscillators with analog-modeled drift, the filters FabFilter are known for, and an effects section with reverb, delay, chorus, phaser and flanger, drive and compression built in. Modulation is drag and drop from XLFOs, envelope generators, XY controllers, envelope followers and MIDI sources, and there is a 30-day trial. Having the drive and the compression inside the synth means a bass patch can arrive finished.

**LennarDigital Sylenth1** runs four unison oscillators at up to eight voices each, which LennarDigital count as 32 voices per note against 16-note polyphony, into two filter sections of four stages each with nonlinear saturation built into them. Two ADSR envelopes, two LFOs, and a master effects section carrying five distortion types, a phaser, a chorus and flanger and an arpeggiator. It is an old design that people still reach for on bass because the unison is easy to get right.

### Check what is already installed first

Every major DAW ships with at least one subtractive synth that will make a competent bass part, and opening it costs nothing. What it will not give you is a face built for this one job, which is the whole argument for a dedicated instrument: you are not buying oscillators, you are buying the distance between noticing the bass is too bright and fixing it.

## Build a synth bass from an initialized patch

This is the build order. It works on any subtractive synth, and the control names below are JOURNEYMAN's, whose mixer, cutoff and envelope knobs read 0 to 10. Play the lowest note of the actual part throughout, not a comfortable middle C, because bass patches lie at the wrong pitch.

- Set the project tempo before you open the synth.

- Press INIT.

- Raise OSC 1 in the MIXER and leave OSC 2, OSC 3 and NOISE down.

- Set the OSC 1 OCTAVE to 16′.

- Turn OSC 1 WAVE up until the shape is a saw.

- Set CUTOFF to 3 and RESONANCE to 0.

- Set the VOLUME ENV to attack 0, decay 5, sustain 0, release 1.

- Set the OSC 3 OCTAVE to 32′.

- Raise OSC 3 in the MIXER until the low end doubles in weight.

- Set the FILTER ENV to attack 0, decay 3, sustain 0, AMOUNT 4.

- Raise KB AMT until the highest note of the part is as bright as the lowest.

- Shorten the VOLUME ENV release until it is under the gap between notes at your tempo.

- Switch GLIDE on only if the part slides, and set GLIDE RATE low.

- Play the part against the drums at final level.

- Lower CUTOFF until the bass and the kick stop competing.

- Sum the mix to mono and listen for a drop in level.

- Render eight bars and play them on a phone speaker.

Step six is the one people get wrong in both directions. Starting with the filter wide open means every later decision is made on a patch that is too bright, and you will compensate with EQ for the rest of the session. Starting with it shut means you are judging an instrument that has no harmonics yet. Three of ten is dull enough to hear the fundamental and open enough to hear what the envelope is doing.

## Making the bass survive mono, phones and cars

Four checks, in the order that catches the most problems soonest. None takes more than a minute, and a bass part that passes all four will not surprise you later.

Sum to mono and watch the level. The two usual causes of a drop are detuned oscillators and a wide filter spacing, both of which sound like size on monitors and like a hole on a club system. Our page on [mono compatibility](https://gazillionindustries.com/mono-compatibility/) covers how to check it properly with a correlation meter rather than by ear alone. If the level drops, narrow the spacing before you touch the detune, because the detune is usually the part you actually wanted. If what the patch needs is weight rather than width, the moves are in [how to make a synth sound thicker](https://gazillionindustries.com/how-to-make-a-synth-sound-thicker/).

Play it against the kick with both at final level. If the two are fighting, the fix is nearly always the arrangement rather than the plugin: move one of them in time, or move one of them in frequency, and only then reach for [sidechain compression](https://gazillionindustries.com/sidechain-compression/) to carve the overlap. The full version of that argument is in [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/), which applies identically to a synth bass.

Listen at 200 to 400 Hz, which is where the bass, the kick body, the low mids of every guitar and the chest of every vocal pile up. A bass patch with a wide-open filter puts more energy there than anybody expects, and it is the most common single cause of the complaint in [why is my mix muddy](https://gazillionindustries.com/why-is-my-mix-muddy/).

Then play it somewhere small. A phone speaker and a laptop are the two systems most of your listeners will use, and the bass either reads on them or it does not. This is not a loudness test and it is not a tone test. You are checking one thing: can you hear what note it is.

## What a bass synth costs you

Four costs, stated flatly, because a recommendation with no admitted flaws is an advertisement.

One voice means no chords. A monosynth will refuse the two-note part, and there is no setting that fixes it. That is the trade for never having two fundamentals in the low end by accident.

A patch that sounds enormous in solo is usually too wide and too bright in the mix. Width in the low end is borrowed, and mono borrows it back. Audition bass patches against the drums from the start and the temptation never gets a chance.

Sub content is expensive in headroom. Energy at 40 Hz eats more of your available level than energy anywhere else, and every decibel of it you spend is one the limiter at the end of the chain has to give back. Set the bass level against the kick early, check [gain staging](https://gazillionindustries.com/gain-staging/) through the chain, and do not solve a quiet bass by turning up the bass.

Programming takes longer than dragging in a sample. If the part is a single sliding note with a long tail, a sample with a pitch envelope on it will beat any synth for speed, and [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/) is the page for that. A synth earns its time when the part has notes in it.

## Questions people ask

### What is the best bass synth VST?

Ours, for bass specifically: JOURNEYMAN, $59, Mac and Windows, one voice, three oscillators and two ladder filters, with the bass programs at the front of the bank. A monophonic subtractive synth is the right shape for this job because it cannot put two fundamentals in the low end and because every control that matters is on one panel. Past that, Vital's free tier and Surge XT cost nothing and will both make a bass part, and Serum 2 at $249 has the largest preset market of any.

### What is the best free bass synth plugin?

Vital and Surge XT, and neither is a crippled trial. Vital's Basic tier is the complete synth with all features, 75 presets and 25 wavetables. Surge XT is free and open source, with three oscillators per scene across twelve oscillator algorithms, two complete scenes per patch and over 2,800 factory patches. Between the two you have wavetable and subtractive covered for nothing, and the gap to paid is a preset library and a front panel built for one job.

### What do people on Reddit recommend as the best bass synth VST?

The names in those threads rotate every year or two, and the useful part never does. Read them for technique and be skeptical of the shopping list, because most of the posts describing a synth that would not sit are describing a release time longer than the gap between notes, a filter with no keyboard tracking, or a detuned pair collapsing in mono. All three are on this page and all three are free to fix. If a thread convinces you to buy something, check first that the problem was not one of those.

### What is the best sub bass synth VST?

The same synth you are already using, with one oscillator dropped an octave. A sub is a nearly pure tone and almost any oscillator will produce one, so the question is really about control: you want the sub locked to the same note, envelope and glide as the body of the bass, which happens automatically when it is one oscillator inside one patch. On JOURNEYMAN that is OSC 3 at 32′ with its own level in the MIXER. Layering a separate sub synth on a second track gives you two things to keep in time instead of one.

### Do I need an analog bass synth VST, or will any synth do?

Almost any synth will make a good bass. What people are usually after when they search for that is a subtractive layout with a knob per function, because it is quick to move while the loop is playing, and a filter with some character in it. If you want plugins that specifically set out to capture the behavior of old hardware, u-he Diva at 179 € and FabFilter Twin 3 are honest about being exactly that. If what you want is the layout and the speed, that is a much wider field.

### Should synth bass be mono or stereo?

Mono below roughly 120 Hz, near enough always. Stereo width down there comes from phase differences between the channels, and phase differences are what disappear when a system sums the two channels together, which club rigs, phones and a lot of streaming playback do. Keep the sub mono and put whatever width you want on the harmonics above it. If you have widened a bass and it sounds smaller on another system, that is the mechanism.

### Why does my synth bass disappear in the mix?

In order of likelihood: the release is longer than the gap between notes so the low end never clears; the filter has no keyboard tracking so the high notes have no harmonics; the part is all fundamental and nothing above 200 Hz, so small speakers have nothing to reproduce; or the kick and the bass are both at full strength in the same octave. Work through those four in that order. The fourth one is the one everybody checks first and it is rarely the answer.

### Is a monosynth enough for bass, or do I need a polysynth?

For bass, a monosynth is enough and it is usually better. Basslines are single-note parts, and the performance controls that make them sound played — glide, note priority, single or multi trigger — only exist because the instrument is monophonic. Buy a polysynth for the chords and the pads. Buy a monosynth for the part underneath them, and you will finish that part faster.

## What JOURNEYMAN does

JOURNEYMAN is our monosynth, $59, for Mac and Windows. One voice. Three oscillators, each with OCTAVE and WAVE, WAVE sweeping continuously from triangle through saw and square to pulse, with FREQUENCY on oscillators 2 and 3, a 1-2 SYNC switch and a 3-1 FM switch. A MIXER underneath sets OSC 1, OSC 2, OSC 3, NOISE and EXT IN independently, so an external source has a level of its own alongside the three oscillators.

Two ladder filters, left and right, with a shared CUTOFF, a SPACING control that offsets them from each other for width, RESONANCE, KB AMT for keyboard tracking, a DUAL LP or HP:LP mode switch and a 3 or 4 pole selection for each filter. A FILTER ENV and a VOLUME ENV, both ADSR, with an AMOUNT on the filter one. An LFO with RATE and SYNC. Two modulation busses, one labeled MOD WHEEL and one labeled PEDAL/ON, each with SOURCE, SHAPING, DESTINATION and AMOUNT. GLIDE with its own rate. Note priority, single or multi trigger, and a bend range for each direction. A touch surface with X on cutoff and Y on the spacing between the filters.

200 programs, covering basses, leads, keys, pads, percussion and fx, and every one of them wired to the mod wheel and the touch surface so there are two expressive moves available on any patch without opening it. AU, VST3 and standalone on macOS as a universal binary for Apple Silicon and Intel; VST3 on Windows. macOS 10.13 or later; Windows 10 or later, 64-bit.

The cost, stated plainly. One voice means chords are not on the menu, which is the deliberate half of the design and the half that makes it good at the job this page is about. And the panel is a panel: three oscillators, two filters, two envelopes, two busses and a performance section are more than a preset browser, so budget an hour. There is a demo on the product page, and the fastest way to know is to put your own drum loop under it.

Back to the car. The bassline that vanished behind the dashboard had its fundamental in the right place and nothing above it, and the release was long enough that each note was still sounding when the next one arrived. One oscillator at 32′ for the weight, two at 16′ for the harmonics a small speaker can actually reproduce, and a release shorter than the gap between the notes. Same part, same system, and now you can hear what note it is.

---

## About JOURNEYMAN

JOURNEYMAN — a monosynth for Mac and Windows. One voice, three oscillators, two ladder filters, two envelopes, two modulation busses and 200 programs.

https://gazillionindustries.com/journeyman.html
