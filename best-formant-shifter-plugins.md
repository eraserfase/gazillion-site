# Best formant shifter plugins

> How to choose a formant shifter plugin: what the control actually moves, what separates the good ones, how to test one, and the free options.

Source: https://gazillionindustries.com/best-formant-shifter-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

The bounce goes out at midnight with the hook up three semitones to sit on the beat, and the artist writes back in the morning asking who that is singing. The notes are right. The singer on the recording got about fifteen years younger on the way there.

A formant shifter moves the resonances of a voice up or down without moving the note, so the apparent size of the speaker changes while the melody stays put. Choose one on three things: formant on its own control, independent of pitch; clean consonants at the settings you will use; and low enough latency to sing through. Good free ones exist and they cover most corrective work. Decide which direction you want first, though. The opposite move, formants riding the note, is varispeed, and that is what [SKRUU](https://gazillionindustries.com/skruu.html) does.

## The short version

- **What it does**: moves vocal resonances without moving the note

- **The other move**: formants riding the note instead, which is varispeed

- **Must have**: a formant control that works independently of pitch

- **Second thing**: consonants that survive: S and T go plastic first

- **Third thing**: latency low enough to track and perform through

- **What we make**: SKRUU, $29: pitch and time apart, formants going with the pitch

- **Free, for correction**: MAutoPitch, Graillon Free Edition, your DAW's own warp formants

- **Decide on**: whether you want the old singer back, or the new one kept

The whole thing. Top half is the two rates, bottom half is what happens when you let go.

## What a formant shifter actually does to the signal

Two independent facts live inside a sung note. The vocal folds set the rate, which your ear reads as the note. The throat, mouth and nose above them act as a tube of fixed length that resonates at certain frequencies whatever the folds are doing, and those peaks are the formants. They tell you the vowel and they tell you the size of the person.

The tube is the part you can put a number on. Sound travels at about 343 m/s, an adult vocal tract runs somewhere near 17 cm, and a tube closed at one end resonates at odd multiples of *c* / 4L: roughly 500 Hz, 1500 Hz and 2500 Hz. Shorten the tube and every one of those climbs together. That is the whole trick, and it is why a smaller throat reads as a smaller human before you have consciously heard anything.

A formant shifter finds those peaks, lifts the spectral envelope off the harmonics underneath it, slides the envelope, and puts the harmonics back where they were. Shift up one octave and 500 Hz becomes 1000 Hz while the note stays put. Shift down a semitone and the envelope moves by a ratio of 1.0595, near enough 6%. The background is on the [formant shifting](https://gazillionindustries.com/formant-shifting/) page.

Speeding a recording up does something different and simpler. Every frequency in the file moves by the same ratio, formants included, so the throat shrinks along with the note. That is [varispeed](https://gazillionindustries.com/what-is-varispeed/), and it is the reason a pitched-up sample sounds like a cartoon while a singer hitting the same note in the room does not. It is also the reason this page has two answers in it rather than one.

## Four different things people mean by "formant plugin"

The searches run together and the tools do not. Sort yourself before you download anything, because three of these four will not do the job you came for.

**Formant correction inside a pitch shifter.** You moved the pitch and you want the person back. The formant control here exists to undo a side effect, usually by roughly the same amount in the opposite direction. Every serious pitch shifter and most tuners have one.

**Formant shift as an effect on its own.** Pitch untouched, formants dragged down four or five semitones, and the same performance now comes from someone twice the size. This is the villain ad-lib, the whispered giant, the second voice that is obviously the first voice. The control has to be independent of pitch for this to work at all.

**A formant filter.** A different animal: a filter bank that boosts two frequencies at once to imitate a vowel, applied to whatever you feed it. Run a synth pad through one and it talks. It does not analyze a voice or preserve anything, and people search for it with the same words. Kilohearts make a free one, and Apple's Logic Pro User Guide lists Formant Filter controls inside the EVOC 20 Filterbank that ships with the DAW.

**Formants and note moving together, on purpose.** The fourth one, and the one that quietly brought a lot of people here. You pitched a sample, the throat came with it, and what arrived was not a fault but a record. Varispeed analyzes nothing and preserves nothing: the whole file changes speed and every frequency in it travels by one ratio. That is what [SKRUU](https://gazillionindustries.com/skruu.html) is, and it is the one of the four where the note and the size are tied together deliberately rather than patched apart afterwards.

**Pitched up.** Formants riding along with the note, which is the sound a formant shifter exists to undo.

## Which formant tool to use

Two answers, because one search word is covering two opposite jobs. You have one of them, and five minutes spent working out which will save you a purchase.

**If you want the old singer back after a pitch move,** ours will not do it and we do not make one that will. Take a name off the list further down, run the ten-minute test on your own vocal, and decide on the sibilance rather than the feature grid. That is the decoupled job and it belongs to the dedicated shifters.

**If the new singer is the one you actually wanted,** use ours. [SKRUU](https://gazillionindustries.com/skruu.html) is $29, for Mac and Windows, in VST3, AU and standalone, and it makes the coupled move on purpose and by an amount you can read. PITCH moves the rate, so the note, the room, the breath and the throat all shift by one ratio, and the panel reads it out in semitones against what went in. Take a real setting: PITCH at −3.09 ST is a rate of 83.7%, which makes that 17 cm tract read as 20.3 cm and drops its first resonance from about 504 Hz to about 422 Hz. The singer gets bigger and older, and the arithmetic is on the front panel instead of in a manual. TIME moves length and nothing else, so you can take the note down and leave the tempo alone. PITCH LOCK and TIME LOCK hold one while you play the other. There is a demo on the page.

The honest edges, because a verdict without them is worth nothing. SKRUU has no formant control, will not hold a throat still, and is the wrong $29 if correction is all you need. PITCH runs from −20% to +10%, which works out at roughly −3.9 to +1.6 semitones: varispeed range, not a transposer's range, so the three-semitone lift in the opening paragraph happens somewhere else and this is only where you decide about it. Two of the tools below shift formants for nothing at all. What the $29 buys is the other half of the decision, made deliberately, with the note and the size arriving together the way they do whenever a recording plays back faster.

## What separates a good formant shifter from a bad one

Five things, for the decoupled job. The first is obvious and the other four are what you will actually notice at week three.

**Formant is on its own control.** A single "gender" knob that moves pitch and formants together in a fixed relationship is a preset wearing a knob. You want a number in semitones or a ratio, and you want it to do nothing to the note.

**The consonants hold.** Sustained vowels are easy. Sibilance is where analysis and resynthesis fall apart, because an S is broadband noise with no harmonic structure for the envelope estimator to hang on. Shift a vocal down four semitones and listen to the word "sister" on headphones. If it lisps or whistles, you have found the ceiling.

**It states its latency.** Anything doing frame-based analysis buys accuracy with a window, and the window costs time. Some tools report a few milliseconds and some report enough that you cannot sing through them. Both are honest. Silence is the problem.

**It survives a full mix, or says it will not.** Most of these are built for one monophonic source. Polyverse state plainly that Manipulator works on monophonic audio, and Soundtoys call Little AlterBoy a monophonic voice manipulator on the product page. Feeding a stacked chorus to a monophonic engine is a way to waste an afternoon.

**It does not drag other processing along.** Some tuners bundle compression, gating and saturation and leave them on in the default preset, so your A/B is comparing four things at once. Turn everything else off before you judge the formant engine.

## How to test a formant shifter in ten minutes

Do this with the demo, before you pay for anything. One vocal, one pass, and it sorts the field faster than any review.

- Load eight bars of a dry lead vocal with words in it, not a held note.

- Bypass everything in the plugin except the formant control.

- Shift formants down 4 semitones with pitch at zero. Listen for the size change.

- Listen to the sibilants on headphones. Note the first word that sounds artificial.

- Shift formants up 4 semitones. Check whether the low end of the voice survives.

- Pitch up 3 semitones and shift formants down 3 to correct. Compare against the dry vocal.

- Read the reported latency in your DAW's plugin delay compensation display.

- Set the formant control to zero and null the output against the dry track.

- Open ten instances and watch the CPU meter before you put it in a template.

Step eight decides more than people expect. A formant engine parked at zero should hand back what you gave it. Anything left in the null is analysis and resynthesis running whether you asked for it or not, and it will accumulate across a stacked vocal.

Run step three a second way before you buy anything: take the same eight bars down about three semitones with formants and note moving together, on [SKRUU](https://gazillionindustries.com/skruu.html), and put the two versions next to each other. One is a small singer with a preserved throat. The other is a different, larger person. Do that comparison once and you will know which of the two you have actually been shopping for. There is a demo on the page.

## Named options, ours first, and what each one is for

Everything below comes from the maker's own page, read today. Where no price appears, the page would not give one up, and a wrong number is worse than no number. Ours leads because it is ours and because it is the coupled one; the rest are the decoupled tools, laid out so you can find the fit rather than ranked against each other.

**SKRUU.** The recommendation on this page for the coupled move, and the plugin every number above was worked on. $29, Mac and Windows, VST3, AU and standalone. PITCH and TIME are independent of each other, PITCH reading out in semitones as well as speed against a comparator that shows what went in beside what came out. ELASTIC makes either knob sprung, so it travels home on its own when you let go, and SLOPE is the shape of that journey with sixteen to pick from. SAMPLING GRADE steps the whole thing down a grid — 31.25 kHz, 15.62, 7.81 and 3.91 — for when a new throat should arrive in a smaller machine. No formant control, no correction, and no pretending otherwise: it moves the size and the note as one thing, which is exactly why the rest of this list exists. [Hear it on its own page.](https://gazillionindustries.com/skruu.html)

**Auburn Sounds Graillon 3.** Version 3.2, in VST, AAX, AU and LV2 for Windows, macOS and Linux, with a Free Edition and a Full Edition Auburn Sounds list at $29, marked down from $38.67 on the page. Auburn Sounds describe it as a live voice changer with a pitch shifter, formant shifting and pitch correction covering both hard-tune and natural settings, three selectable pitch engines, and built-in compressor, gate, chorus, preamp and bitcrusher which they state add no latency. The Full Edition adds pitch-tracking modulation, keyboard tuning and a vocal doubler. One download covering pitch, formant and tuning, which is two of the four jobs at the top of this page answered at once.

**MeldaProduction MAutoPitch.** Free, and part of their free bundle. Melda describe it as automatic tuning and pitch correction for vocals and other monophonic instruments, with formant shift and stereo expansion offered as the creative extras. The tuning is the headline and the formant control sits beside it rather than being the point of the plugin, which is worth knowing before you install it expecting a dedicated shifter.

**Soundtoys Little AlterBoy.** Listed at $99, with a sale price of $49 showing when this was written, currently version 5.5, in AAX Native, AAX AudioSuite, VST2, VST3 and AU, supporting 44.1 kHz to 192 kHz, on macOS 10.15 or later and Windows 10 or later. Soundtoys call it a monophonic voice manipulator and put pitch and formant on separate controls, with a hard-tune mode, a robot mode, MIDI control of the pitch, and a tube saturation carried over from Decapitator. The formant control is labeled as gender on the panel, which tells you what it is for.

**Polyverse Manipulator.** $149, in VST2, VST3, AU and AAX for 64-bit Windows and macOS 10.9 or later. Polyverse build it on granular algorithms to alter the timbre and pitch of monophonic audio, list ten effects, harmonies up to four polyphonic voices, five modulation sources, and state real-time zero-latency processing for live performance. This is the sound design end of the category rather than the corrective end, and the zero-latency claim is the thing to verify first in your own session.

**Waves Vocal Bender.** Waves describe it as real-time vocal pitch and formant manipulation. Their page builds its pricing in the browser and gave up nothing readable, so no number here. Two sliders, one for each of the two facts in a voice, which is the shape the whole decoupled category settles into.

**Kilohearts Formant Filter.** Free with an account, running as an ordinary VST, AAX or AU plugin and also as a Snapin inside their modular hosts. Kilohearts describe it as vocal coloring: it boosts two frequencies to imitate different vowels, with a vowel selector pane marked with phonetic symbols, a Q knob for how narrow the boost is, and separate Lows and Highs controls to let the rest of the signal past. They suggest modulating either axis of the pane with an LFO, which is the fastest way to make a pad speak. A different device to everything else here, and no use whatever for correction.

**Your DAW.** Check before you spend. In Ableton Live, the Complex Pro warp mode has a Formants control, and Ableton state that at 100% the original formants are preserved even when the pitch is changed significantly, with the control having no effect if the transposition is unchanged. That covers whole-clip corrective work with nothing installed. Look there first, then come back and settle which of the two moves you were actually after.

**PITCH −3.09 ST.** A rate of 83.7%, note and throat descending together, with TIME moved on its own control.

## Where a formant shifter goes in the chain

Early, and on the driest signal you have. Analysis works better on a clean harmonic series, so anything that smears the spectrum before the shifter makes the shifter's job harder. That means formants before reverb, before delay, before chorus, and before any saturation heavy enough to generate new harmonics.

Compression is the interesting one. Put it after the shifter and it hears the finished voice and rides it correctly. Put it before, and you have lifted every breath and room tail up into the range the envelope estimator is trying to read, which is how a shift that sounded fine on the solo'd take turns gritty in the mix. De-essing is the exception: shaving the worst sibilance *before* a downward shift gives the engine less broadband noise to mangle.

The coupled move sits earlier still, at the head of everything. Change the speed of a part and every time constant downstream is set for a tempo that has moved: compressor releases, delay times, gate holds, LFO rates. Put the varispeed first, then set the rest to what you can hear. The same rule is why a [slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/) chain goes speed first and space second, never the other way.

One more ordering rule, for when you are pitching as well as shifting. Decide the note first, in the music, with the arrangement playing. Only then correct the size. Doing it the other way round means re-correcting every time the key moves, and the key always moves. The method is in [how to pitch a sample](https://gazillionindustries.com/how-to-pitch-a-sample/).

## What it costs you

Every formant shifter is an analysis-and-resynthesis engine, so the bill arrives in artifacts. Breath thins. Sibilance goes glassy. A shift that holds beautifully on one singer falls apart on the next, because the estimator is guessing at a tube it cannot see. Past about five semitones in either direction, every method on the market announces itself.

It costs CPU and often latency too, and the two trade against each other: a longer analysis window is more accurate and less playable. And there is a subtler bill. Correcting a pitched-up sample all the way back to its original size frequently removes the exact quality that made you pitch it up, and you end up with a technically clean vocal that has stopped being interesting.

Which is worth saying plainly, because half the records anyone loves are built on formants moving with the pitch and nobody correcting anything. That method has its own page: [chipmunk soul](https://gazillionindustries.com/chipmunk-soul/), and it is worth knowing which of the two you are doing before you reach for a correction knob. If it turns out to be that one, the knob you want is [PITCH on SKRUU](https://gazillionindustries.com/skruu.html), and it costs $29 rather than an afternoon of undoing.

## Questions people ask

### What is the best formant shifter plugin?

Depends which of the four jobs you are doing, and working that out is the first move. For correction after a pitch change, the formant control already inside your pitch shifter or your DAW's warping is usually enough. For formant shift as a deliberate effect with pitch untouched, you want the two on separate controls, which is the shape Little AlterBoy and Graillon both use. For vowel character on non-vocal material, you want a formant filter, a different device entirely. And for the note and the throat moving together on purpose, you want varispeed, which is [SKRUU](https://gazillionindustries.com/skruu.html) at $29.

### What is the best formant shifter plugin for vocals?

Test on your own singer rather than on a demo clip, because the answer changes with the voice. Run the ten-minute test above on a dry lead with consonants in it and pick on step four, the sibilance. A plugin that keeps the word "sister" intact four semitones down will keep almost anything intact, and that one test predicts more of your future irritation than any feature list.

### Is there a good free formant shifter plugin?

Yes, several, and they are genuinely usable. MAutoPitch is free from MeldaProduction and includes a formant shift alongside its tuning. Graillon's Free Edition covers pitch shifting, formant shifting and pitch correction at no cost. Kilohearts Formant Filter is free with an account if the vowel-filter version is what you were after. And before any of them, open your DAW and look for a Formants control in its warping or flex editing.

### How do I move the formants with the pitch on purpose?

Use varispeed instead of a shifter, which changes the speed of the whole file so every frequency in it moves by one ratio. That is the chipmunk-soul move and the slowed-down move, and it is what SKRUU is built to do: PITCH runs from −20% to +10%, reading out in semitones alongside speed, with TIME on its own control so length and note come apart when you want them to. No analysis, no estimator guessing at a throat, and nothing to correct afterwards.

### What is the best pitch and formant plugin?

One that puts them on two controls that do not touch each other, so you can move either alone or both by different amounts. That combination is what lets you pitch a sample up a fourth for the beat and then hand it back a throat, or leave the note alone and change who is singing it. Look for a readout in semitones on both, because guesswork here is how you end up a quarter-tone out. If what you want is the pair moving *together*, that is the other tool, and SKRUU splits pitch from time rather than pitch from formant.

### What is a formant filter plugin?

A filter bank that boosts a pair of frequencies to imitate a vowel, so anything passing through it sounds like it is saying "ah" or "oo". It performs no analysis and preserves nothing, which makes it useless for correction and excellent on pads, basses and drums. Kilohearts describe theirs exactly that way, and modulating the vowel selection is where it gets interesting.

### Does a formant shifter change the pitch?

No. It moves the resonances sitting on top of the note while the note stays where it was, which is why a formant-shifted vocal still sings the same melody. The tool that moves both together at the same ratio is varispeed, SKRUU being ours, and the difference between them is covered in [changing pitch without changing tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/).

## What SKRUU does

SKRUU is the coupled half of this story, and it is worth owning the distinction. It is our varispeed pitch and time stretch plugin for Mac and Windows, $29, in VST3, AU and standalone, and it makes no attempt to hold formants still. **PITCH** moves the playback rate, so the note, the room, the breath and the formants all move by the same ratio: a hook pitched down gets a bigger throat, on purpose, by an amount you can read in semitones on the comparator. That is the sound people spend money undoing and other people spend careers chasing.

What it adds is control over the trade. **TIME** moves length and nothing else, so you can speed a loop up while pitching it down, and **PITCH LOCK** and **TIME LOCK** hold one while you play the other. **ELASTIC** makes the knob sprung: move it, let go, and it runs home. **SLOPE** is the shape of that journey and there are sixteen of them. **SAMPLING GRADE** steps the rate down, with LO-FI 2 running at 3.9 kHz, for when a new throat should arrive in a smaller machine.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25.

**TIME −35%, PITCH at unity.** Length moved, note untouched, throat exactly where it was.

Send the bounce again in the morning. Same hook, same beat, and the singer who turns up is the one you picked.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
