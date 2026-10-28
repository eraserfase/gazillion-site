# Free time stretch plugins, and where free runs out

> The time stretching already in Live, FL Studio and Audacity, the free plugins for extremes and for a knob, and the one move free does not cover.

Source: https://gazillionindustries.com/free-time-stretch-plugin/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make SKRUU.

---

The loop is 86 BPM and the session is 92. Six beats per minute is nothing on paper and everything in the room: the hats drag, the snare lands late, and somebody types "free time stretch plugin" into a search bar.

You already own a time stretcher. Ableton Live's Warp modes, FL Studio's Sampler stretch modes and Audacity's Change Tempo all move length without moving pitch, for nothing. For extremes, PaulXStretch is free and open source and turns eight bars into an hour. Baby Audio's Warp is a free plugin with a speed knob, behind an account. Where free stops is the move you make by hand while the track plays, length on one knob and pitch on another, with a return you chose. That is [SKRUU](https://gazillionindustries.com/skruu.html), $29.

## The short version

- **Already installed**: Live's Warp modes (every edition), FL Studio's Sampler stretch modes, Audacity's Change Tempo

- **Free, for extremes**: PaulXStretch: GPLv3, standalone, AU, VST3, AAX and CLAP

- **Free plugin with a knob**: Baby Audio Warp, free with an account; SlowSampler2, name your price

- **Free, offline**: Audacity; the Rubber Band and SoundTouch command-line tools

- **Where free stops**: a live knob for length, a separate one for pitch, and a designed return

- **Ours**: SKRUU, $29: TIME −50% to +25%, PITCH −20% to +10%, sixteen return shapes

## Three different things called free time stretching

Sort yourself before you download. **DAW-native** stretching lives in the clip or sampler engine and follows the project tempo; it is free because you paid for the DAW. **Offline** tools render a new file at a new length and are free because they are open source. **Real-time plugins** stretch audio passing through an insert while the host plays, and this is the smallest free category, because the job is harder. The [time stretching explainer](https://gazillionindustries.com/time-stretching-explained/) covers the algorithms. Here is who does which.

## What your DAW already does

**Ableton Live.** Warping lets you change "the timing of a clip without altering its pitch, or vice versa", and the Warp modes are Beats, Tones, Texture, Re-Pitch, Complex and Complex Pro. Ableton's own steer: Beats "works best for audio that has a dominant rhythm", Tones is "useful for stretching audio that has a distinct pitch", Texture "works well for sounds that don't have a clear melody or pitch", and Complex is for "a combination of beats, melodies, and textures" such as whole songs, with Complex Pro a higher-quality variation that costs more CPU. Re-Pitch is the one that moves pitch with speed, like a turntable. The compare page marks the complex warp modes and real-time stretching as included in Intro, Standard and Suite. [Varispeed in Ableton Live](https://gazillionindustries.com/varispeed-in-ableton-live/) covers Re-Pitch against Complex Pro.

**FL Studio.** The Sampler channel has three knobs: PITCH changes "sample pitch while preserving its length", MUL modifies the length, and TIME sets how long the sample takes to play, "since pitch and playback speed can be adjusted independently". The modes split in two. Realtime modes, Resample, Stretch and Stretch pro, apply on the fly and work when the tempo is automated; Stretch pro adds a formant control. The Elastique modes, e3 Generic and e3 Mono, are offline, which Image-Line say "provides the highest quality but can't be used with Tempo changes". Slice stretch and Slice map handle drum loops by moving slices, and Auto picks for you.

**Audacity.** Free, open source, version 4.0.1 for macOS, Windows and Linux. Change Tempo alters length without pitch and offers a high-quality SBSMS option that is slower but "will retain the complete content". Change Speed and Pitch moves both together, from 0.010 to 50 times the original speed. Sliding Stretch ramps tempo or pitch from one value to another across the selection. All three are rendered, so this is the offline route for a file you will not touch again.

## Free time stretch plugins

**PaulXStretch** is the one worth having for the far end. Sonosaurus publish it "multi-platform, open-source, completely free" under GPLv3, as a standalone and as AU, VST3, AAX and CLAP on macOS, VST3, AAX and CLAP on Windows, VST3 and CLAP on Linux, and AUv3 on iOS. It is built on Paul Nasca's algorithm, whose original program stretches "up to 10,000 times" in Stretch mode and far beyond that in HyperStretch. The makers are blunt about scope: it "is NOT suitable for subtle time or pitch correction" and exists for "radical transformation of sounds". Eight bars into an hour of pad, yes. A loop six BPM out, no.

**Baby Audio Warp** is a free module from their Transit 2 effect, offered on the freebies page as a fully functional plugin. Baby Audio describe a varispeed control to speed up or slow down audio and a Stretch knob that gives "control over pitch independent of time". Formats and ranges are not on the page; a free Baby Audio account is required to download.

**SlowSampler2** is a VST3 instrument and effect for Windows, macOS and Linux, open source and name-your-own-price, inspired by the OtoMAD and YTPMV remix styles, with real-time sampling of a track, "various time stretching options" and multiple pitch algorithms. Odd, specific, and the only free real-time stretcher here that captures the live input.

Two engines rather than plugins, for completeness. **Rubber Band Library**, from Breakfast Quay, is the C++ library behind a lot of commercial stretching, open source under the GPL with a commercial license for proprietary use, at version 4.0 since October 2024; the maker ships a free command-line utility and no plugin. **SoundTouch** is Olli Parviainen's LGPL library for tempo, pitch and playback rate, with the SoundStretch command-line tool. If you can type a path, both are free time stretchers of a kind.

## Where free runs out

In the middle. The DAW handles the loop that is six BPM out. PaulXStretch handles the drone. The gap is the gesture: pull a bus to 70 percent length under a breakdown while the track plays, hold it, let it snap back on the downbeat, and do it without a key change you did not choose and without committing to a render. None of the free tools above puts that on a knob you ride.

That is what [SKRUU](https://gazillionindustries.com/skruu.html) is for. TIME runs from −50% to +25% and moves nothing but the length. PITCH runs from −20% to +10% on its own knob, with the readout in semitones against what went in. TIME LOCK holds the length while you play the pitch, or the other way round. Turn ELASTIC on and the knob is sprung: move it, let go, and it runs home along one of sixteen SLOPE shapes, with RETURN free or quantized to the bar. $29, Mac and Windows, VST3, AU and standalone.

**TIME −35%, PITCH at unity.** Length without pitch, on a knob, while the track plays.

Its range is the honest edge. −50% to +25% is what a beat asks for, and it is not eight times speed, not thirty-six semitones, and not a bar turned into an hour. Serato's Pitch 'n Time Pro does 1/8 to 8 times speed independent of pitch and 36 semitones independent of tempo, as an AudioSuite render for Pro Tools at USD 799. Cableguys' TimeShaper 3, 29 euros, moves a virtual playhead on a pattern for stutters, slow-downs and reverses. Different jobs, and the free tools cover two of the three. The [best time stretch plugins](https://gazillionindustries.com/best-time-stretch-plugins/) guide weighs the whole field.

[SKRUU](https://gazillionindustries.com/skruu.html) is $29. Put it on the bus, pull TIME down into the breakdown, let go, and listen to it come home. There is a demo on the page.

## Test a free time stretcher in ten minutes

- Take an eight-bar drum loop with a reverb tail on the snare.

- Stretch it 7 percent longer with pitch held, which is 86 to 92 BPM backward.

- Listen to the snare's front edge on headphones, then the tail.

- Stretch it 25 percent longer and listen again.

- Stretch it 50 percent longer and note where the hats turn to grain.

- Try each mode your tool offers at the 25 percent setting.

- Pitch the loop down three semitones with length held and listen for a phase swirl on the cymbals.

- Bounce the 25 percent version and play it on a phone speaker.

Steps three and five tell you what every stretcher trades. The transient softens first, then the tail smears, then the hats go granular. A tool that holds the front edge at 25 percent is a good one, free or not. Beyond 50 percent you have left correction and entered sound design, which is PaulXStretch's territory.

## What free time stretching costs you

Every stretch is a guess about audio the recording never contained. Reverb tails smear first, then drums lose the hard front edge, then vocals lose breath, consonants and diction in that order. Offline tools cost you the undo: once Audacity renders the file, that is the file. DAW-native modes cost CPU and follow the project tempo, which is right until you want a move the tempo map does not know about. And the free real-time options cost you the account, the format you needed, or the range. Pick the bill you would rather pay. For the loop six BPM out, it is almost always the DAW's.

## Questions people ask

### Is there a free time stretch plugin?

Yes. PaulXStretch is free and open source for extreme stretching as a standalone and plugin. Baby Audio Warp is free with an account and has a speed control and a Stretch knob. SlowSampler2 is name-your-own-price. And Live, FL Studio and Audacity stretch without any download.

### What is the best free time stretch VST?

For a loop a few BPM out, your DAW's own modes: Complex Pro in Live, e3 Generic in FL Studio. For a drone or a texture, PaulXStretch. For a live knob, Baby Audio Warp if you are happy with an account. None of them is bad; they are built for different distances.

### Can you time stretch without changing pitch for free?

Yes, in every DAW named here and in Audacity's Change Tempo. The [pitch without tempo](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/) guide covers the opposite move and the settings for both.

### How much can you stretch before it sounds bad?

Transients survive to about 25 percent on a good algorithm, tails smear earlier, and past 50 percent the result is a new sound rather than a corrected one. The ten-minute test above finds the line for your material.

### Does FL Studio have time stretching?

Yes, in the Sampler channel: PITCH, MUL and TIME knobs, three Realtime modes that follow tempo automation, two offline Elastique modes for quality, and slice modes for drum loops.

### Is SKRUU a time stretch plugin?

It is a varispeed pitch and time stretch plugin, with the two on separate knobs. TIME stretches length from −50% to +25% while the track plays. It is for the gesture rather than the extreme, and [varispeed in every DAW](https://gazillionindustries.com/varispeed-in-every-daw/) covers how it sits beside the host's own tools.

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin for Mac and Windows, in VST3, AU and standalone, and it puts rate and length on two knobs that do not touch each other. **PITCH** runs from −20% to +10% in 128 states and reads out in semitones as well as percent. **TIME** runs from −50% to +25% and moves nothing but the length. **PITCH LOCK** and **TIME LOCK** hold one while you play the other. **ELASTIC** makes either knob sprung, **SLOPE** is the shape of the trip home with sixteen to choose from, **DRAG** sets how long a new speed takes to arrive, and **SAMPLING GRADE** steps the whole thing down from 31.25 kHz to 3.91. Zero samples of latency, any sample rate.

The loop is at 92 now and the snare lands on time, and it cost nothing. The knob is for the night you want it to land somewhere else on purpose.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
