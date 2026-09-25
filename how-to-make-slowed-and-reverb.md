# How to make slowed and reverb

> How to make slowed and reverb songs: slow them with varispeed so the pitch drops, set up a long dark reverb, and how to make sped-up versions the same way.

Source: https://gazillionindustries.com/how-to-make-slowed-and-reverb/  
Published 2026-09-14, updated 2026-09-24. By Gazillion Industries, who make SKRUU.

---

Somewhere around the late 2010s, the internet discovered that a pop song slowed down and drowned in reverb sounds like the same song remembered at 3 a.m. in an empty parking lot. The sped-up version arrived soon after, like the same song played by someone who had too much coffee.

To make a slowed and reverb version, lower the playback speed with varispeed (often somewhere around 10 to 20%, so the pitch drops with it), then add a long, dark reverb and blend it well up. For a sped-up version, raise the speed instead (so the pitch rises) and usually skip the big reverb. Varispeed is the key: the pitch moving with the speed is what gives both styles their sound.

## The short version

- **Slowed**: varispeed down, often around 10 to 20%

- **Reverb**: long decay, dark tone, generous mix

- **Sped up**: varispeed up; pitch rises with it

- **Key**: speed and pitch move together

- **Polish**: low-pass the reverb, keep the low end clean

- **Rights**: use your own music, or get permission

- **The formula**: semitones = 12 × log₂(speed)

- **−10%**: −1.82 semitones; 140 bpm becomes 126

- **−20%**: −3.86 semitones; 140 bpm becomes 112

- **Exact semitones**: −10.91% is two down, −15.91% is three

- **Decay**: 3 to 6 s — 4 s is 60 dB of fall at 15 dB per second

- **Pre-delay**: 20 to 60 ms; 30 ms is a 10.3 m longer path

- **Return filters**: high-pass 200–400 Hz, low-pass 3–5 kHz

- **Wet**: 30 to 50%; at 50/50 each side sits 6 dB down

- **Order**: speed first, reverb after — never the other way

**PITCH −3.09 ST.** Pitch and tempo moving together, the way a machine does it.

## Hear the drop, then measure it

One loop at three speeds, rendered offline through the same engine SKRUU runs, no other processing. The captions are the renderer's own readout. We then ran the files through an FFT to check the readout was telling the truth.

- **Unity** — PITCH 93 — rate 1.0000, +0.00 semitones — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — PITCH 64 — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — PITCH 120 — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

- **Slowed, LO-FI 2** — PITCH 64 with SAMPLING GRADE at 3.9 kHz — https://gazillionindustries.com/skruu/skruu-down-lofi2.m4a

Measured here: the strongest partial sits at 161.96 Hz dry, 150.33 Hz slowed, 175.14 Hz sped up. Ratios of 0.9282 and 1.0814, or −1.29 and +1.36 semitones, against the −1.30 and +1.30 printed on the panel. A 0.8-second window resolves to about 1.9 Hz, near 20 cents at these frequencies, so both agree inside the measurement's own error.

## Where it comes from

Slowing songs down isn't new. In the early 1990s Houston's DJ Screw built a whole sound on it, slowing records to a crawl on his screw tapes (see [how to chop and screw a song](https://gazillionindustries.com/how-to-chop-and-screw/)). The slowed and reverb version is its internet-era cousin: less chopping, much more reverb, and a mood that's closer to nostalgia than to a car rolling slow down a Houston street.

Both live off the same fact. A recording read out slower is a recording moved down in pitch, and everything in it moves together — the voice, the snare, the hiss, the reverb that was already on the record. A screw tape spends its second move on chops. A slowed and reverb upload spends it on space.

## Slow it down the right way

Use varispeed or repitch, not time stretching, so the pitch drops along with the tempo. That drop is the sound: voices get deeper, the groove gets heavier, and the whole track sounds like it's playing on a tired machine. How far to go depends on the song, but a slowdown in the 10 to 20% range, roughly two to four semitones, is a common starting point. The math is in [what is varispeed](https://gazillionindustries.com/what-is-varispeed/).

Time stretching is the other operation, and it is the one that gives the job away. A stretcher holds the pitch and invents the extra time, so a 20% slowdown means about one frame in five was reconstructed rather than played. On pads you may never hear it. On a close vocal you get a faint chorus around the consonants, and on hats a flutter where the transient used to be. Varispeed reconstructs nothing — see [time stretching explained](https://gazillionindustries.com/time-stretching-explained/).

## How far to slow it, in numbers

Speed and pitch are one number in two units. Semitones = 12 × log₂(speed), and speed = 2^(semitones/12). Half speed is exactly twelve semitones down. One semitone down is a speed of 0.9439, near enough 5.6%.

- **−5%**: −0.89 st — 140 bpm → 133.0

- **−7.5%**: −1.35 st — 140 bpm → 129.5

- **−10%**: −1.82 st — 140 bpm → 126.0

- **−15%**: −2.81 st — 140 bpm → 119.0

- **−20%**: −3.86 st — 140 bpm → 112.0

- **−25%**: −4.98 st — 140 bpm → 105.0

- **−33⅓%**: −7.02 st — 140 bpm → 93.3

Length follows the same ratio. A 3:30 record at −20% runs 262.5 seconds, which is 4:22.5. Bounce the slowed pass and look at the length: if it is still 3:30, your DAW stretched the time instead of changing the speed.

The percentages in common use do not land on semitones, and that matters the moment you play something new over the top. At −10% an A at 440 Hz becomes 396 Hz, which is G plus 17.6 cents. At −15% it is 374 Hz, F sharp plus 18.6 cents. At −20% it is 352 Hz, F plus 13.7 cents. Either detune the new part by that offset, or pick a percentage that lands clean: −10.91% is exactly two semitones down, −15.91% exactly three, −20.63% exactly four.

## Why the top end dies before you touch a filter

Every frequency in the file divides by the same ratio. At −20% a 1 kHz tone lands at 800 Hz, a 6 kHz sibilant at 4.8 kHz, an 8 kHz air band at 6.4 kHz, a hi-hat peaking near 10 kHz at 8 kHz. Nothing was filtered. The spectrum moved down, and the ear reads that as dull. Which is why the last low-pass on the master should be a smaller move than people expect — take another 6 dB out at 5 kHz and you are behind a door rather than far away, which is [a different effect](https://gazillionindustries.com/how-to-make-music-sound-like-another-room/).

The low end moves in the direction nobody plans for. A 60 Hz kick fundamental at −20% is 48 Hz and a 40 Hz sub is 32 Hz, under the point where most phones give you anything at all. The formants move too, 3.86 semitones down with the note, which is why a slowed voice reads as a physically bigger person. If you want the depth without the ventriloquism, that separation is what a formant control is for — [formant shifting](https://gazillionindustries.com/formant-shifting/).

## The reverb

This is the other half of the name, so don't be shy with it. Choose a hall or plate with a long decay, give it a little pre-delay so the vocal stays readable, and low-pass the reverb so it's dark instead of glassy. Blend it higher than you would in a normal mix. High-pass the reverb too, so the low end stays tight under all that space.

## Setting the reverb by the numbers

Decay first, because it decides whether the track reads as a song or as a wash. RT60 is the time the tail takes to fall 60 dB, so a 4-second decay is 15 dB per second: 20 dB down at 1.33 s, 40 dB down at 2.67 s. Set it against the harmony. At 112 bpm a beat is 535.7 ms and a bar is 2.14 s, so a 4-second tail runs 7.5 beats — almost two full bars into whatever comes next. Chords moving every bar means two chords sounding at once, and 2 to 3 seconds is the honest ceiling. Chords moving every four bars, and six seconds is free.

Pre-delay next. Sound travels about 343 m/s in room air, so 30 ms of pre-delay is a reflection arriving off a path 10.3 m longer than the direct one, and 60 ms is 20.6 m. Under about 10 ms the voice and the room fuse, and the words go first.

Then the filters on the return, which separate a dark reverb from a loud one. A 12 dB/octave low-pass at 4 kHz puts 8 kHz 12 dB down and 16 kHz 24 dB down; the same filter at 3 kHz costs 17 dB at 8 kHz. Somewhere in 3 to 5 kHz is the whole argument. High-pass the return at 200 to 400 Hz so the kick and the bass never enter the tail; they lose nothing by being kept out of it.

Blend last, and blend in dB rather than in percent. A 30% wet control puts the wet path 10.5 dB down and the dry 3.1 dB down, a 7.4 dB gap. At 50/50 both sit 6 dB down and the gap is zero, roughly where the style announces itself. Past 60% the wet is louder than the dry and the lyrics stop arriving.

[SKRUU](https://gazillionindustries.com/skruu.html) gives you varispeed pitch and independent time, with shifts you can play.

**SAMPLING GRADE at LO-FI 1.** 7.81 kHz rather than 31.25.

## How to make slowed and reverb

- Import your track or stems.

- Slow it with varispeed or repitch so the pitch drops with the tempo.

- Set the amount by number: −10% for −1.82 semitones, −20% for −3.86.

- Bounce a few seconds and check the length ratio matches the speed you set.

- Add a reverb on a return: long decay, some pre-delay.

- Set decay against the harmony — under three seconds if the chords move every bar.

- Set pre-delay to 20 to 60 ms so the words stay in front of the room.

- Low-pass and high-pass the reverb return.

- Blend the reverb in until the track sounds far away but still clear.

- Add a gentle low-pass on the whole track if the top end is still bright.

- Check the true peak; a long tail adds to peaks you already balanced.

- Export and compare with the original to make sure it still hits.

## Where it goes in the chain

Speed first, everything else after. Slow the source, then feed the slowed signal to the reverb. Do it the other way and the tail gets slowed with everything else: a 4-second decay at −20% becomes 5 seconds and drops 3.86 semitones, so every nudge of the speed changes the shape of the room under you. Usable if you chose it, a nuisance if you did not.

The order that works: varispeed as an insert on the track or the master, reverb on a return fed after it, tape noise or crackle after the speed change as well (noise slowed 20% stops sounding like noise), compression after the reverb rather than before so the tail does not pump the dry, master low-pass last. One thing to watch on the insert is latency, because a host only compensates for what a plugin reports. SKRUU's page states zero samples of it, which is one less thing to line up when the varispeed sits on one track out of thirty.

## Doing it in your DAW

Four of the five big hosts already have varispeed and none put it in the same place. Ableton Live: the Re-Pitch warp mode, per clip, driven by the Set tempo — see [varispeed in Ableton Live](https://gazillionindustries.com/varispeed-in-ableton-live/). Logic Pro: the Varispeed readout in the control bar, −50% to +100%, in Varispeed (Speed and Pitch) mode rather than Speed Only, which pitch-corrects the output back. FL Studio: Mode set to Resample in the Channel Settings stretch panel. Pro Tools: the Varispeed plug-in inside Elastic Audio, which has no controls of its own. GarageBand has none; its Transpose slider moves pitch and leaves the length alone, which is the opposite operation.

Two of those are global and one is per clip, which is the limitation for this style. If you want the speed to sag into a chorus and come back, it has to be on an insert where it is an ordinary automation lane. Full rundown in [varispeed in every DAW](https://gazillionindustries.com/varispeed-in-every-daw/), and the plugin side in [best varispeed plugins](https://gazillionindustries.com/best-varispeed-plugins/).

**TIME −35%, PITCH at unity.** The other operation, for when the key has to stay put.

## How to make a sped-up version

Do the opposite: raise the speed with varispeed so the pitch climbs. Sped-up and nightcore-style edits usually skip the big reverb and keep the mix bright and punchy. Check the vocal: the higher you go, the more cartoonish it gets, which is the style up to a point and a joke past it.

Same formula, other direction. Plus 10% is +1.65 semitones and takes 140 bpm to 154. Plus 20% is +3.16 and takes it to 168. Most uploads sit between 8 and 15%, one to two and a half semitones up: far enough to hear, near enough that the singer still sounds like a person. The cost inverts too. A 6 kHz sibilant at +20% is 7.2 kHz, so a bright mix turns harsh — de-ess after the speed change, not before, because the frequency you need to catch has moved. The formants climb with the note, which is the mechanism behind pitched-up soul vocals: [chipmunk soul](https://gazillionindustries.com/chipmunk-soul/).

**Pitched up.** Same knob, other direction, and the direction that exposes a bad resampler.

## What goes wrong, and what each one sounds like

**Stretched instead of slowed.** A faint chorus around the consonants, doubled sibilants, a hi-hat that flutters where it used to snap. The key did not move, which is the giveaway. Put the clip in a repitch mode, or take the speed change off the timeline and onto an insert.

**Bright reverb.** The "s" sounds get their own long tail and the top of the mix hisses for two seconds after every line. Low-pass the return; 4 kHz at 12 dB/octave is 12 dB off at 8 kHz and usually enough.

**No high-pass on the return.** The kick loses its front edge and the bass turns into one continuous note. High-pass at 200 to 400 Hz and the low end comes back without the dry signal being touched.

**Clipping you did not put there.** Crackle on the loudest chord, worst after encoding to a streaming format. A long tail sums with the next transient, so the peaks you balanced before the reverb are not the peaks you have now — [true peak](https://gazillionindustries.com/true-peak/) and [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

**A tail that disappears on a phone.** A wide stereo reverb can partly cancel when the sides fold in, and most listening for this style happens on one small speaker — [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

## How to check it in your own session

- Length. Divide the slowed bounce's duration by the original's. That ratio is your speed; 1.000 means you time-stretched.

- Pitch. Put an analyzer on the output, hold a sustained low note, read the strongest partial before and after, and take 12 × log₂ of the ratio. That is what we did to the demo files above: 161.96 Hz to 150.33 Hz is 0.9282, which is −1.29 semitones.

- Cents. A tuner on the master says how far off a semitone you landed, which is the number you detune any new part by.

- Words. Solo the reverb return. If you can make out the lyric in the tail, the pre-delay is too short or the low-pass is too high.

## What it costs

Three things, worth saying flatly. You lose top end, because the whole spectrum moved down before you filtered what was left. You lose punch, because a long tail fills the gaps that made the drums feel fast. And you land between keys unless you did the arithmetic, so anything added later has to be tuned in cents. The tools cost nothing extra if your DAW has a repitch mode and a hall, which four of the five do; a plugin earns its $29 when you want to ride the speed while the track runs rather than set it once per clip.

## Questions people ask

### How is slowed music created?

By lowering the playback speed with varispeed so the pitch drops along with the tempo, then usually adding a long, dark reverb. The linked change in speed and pitch is what gives it its heavy, dreamy sound.

### How can I make a song slower without changing the pitch?

Use time stretching instead of varispeed: set the audio to follow the project tempo and lower the tempo. The pitch stays the same, but you lose the deeper, heavier slowed sound.

### Is it legal to make slowed and reverb versions of songs?

Altering and publishing someone else's recording involves their copyright, so uploading those versions can get removed or claimed. Making slowed versions of your own music, or with permission, avoids the problem.

### What percentage should I slow a song down by?

Between 10 and 20% for most material. Ten percent is 1.82 semitones down and takes 140 bpm to 126; twenty is 3.86 semitones and takes it to 112. Below 5% it reads as a mistake rather than a version; past 30% the drums stop sounding like drums.

### How many semitones is slowed and reverb?

Usually two to four down. Semitones = 12 × log₂(speed), so 0.90 speed is −1.82 and 0.80 speed is −3.86. For a round number, slow by 10.91% for exactly two semitones or 15.91% for exactly three.

### What reverb settings do I use for slowed and reverb?

A hall or plate at 3 to 6 seconds of decay, 20 to 60 ms of pre-delay, the return high-passed at 200 to 400 Hz and low-passed at 3 to 5 kHz, blended 30 to 50% wet. Cut the decay to two or three seconds if the chords change every bar.

### Should I add reverb before or after slowing the song?

After. Reverb applied first gets slowed with everything else, so a 4-second tail becomes 5 seconds at −20% and shifts down 3.86 semitones with the track.

### Why does my slowed song sound muddy?

The low end moved down with everything else and then went into the reverb. A 60 Hz kick fundamental at −20% is 48 Hz. High-pass the reverb return at 200 to 400 Hz first; that alone fixes most of it and costs the dry signal nothing.

### Why does my slowed vocal sound watery or flangy?

You time-stretched rather than repitched. A stretcher invents the extra time, and on consonants the invented material reads as a light chorus. Check the key: if it did not move, the speed did not either.

### Does slowing a song change the key?

Yes, and usually to somewhere between two keys. At −10% an A at 440 Hz lands at 396 Hz, which is G plus 17.6 cents. Tune anything you add by that offset, or choose a percentage that lands on a semitone.

### What is the difference between slowed and reverb and chopped and screwed?

The first move is the same and the second is not. Screwed material is chopped, doubled and cut by hand and kept fairly dry; slowed and reverb leaves the arrangement alone and puts the work into the space. Method in [how to chop and screw a song](https://gazillionindustries.com/how-to-chop-and-screw/).

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin. **PITCH** runs from −20% to +10% and moves speed and pitch together, reading out in semitones. **TIME** moves only the length, from −50% to +25%, so you can slow the groove without dropping the key, or the other way round. **DRAG** sets how long a new speed takes to arrive, from instant to a hand on the platter, and **ELASTIC** springs a shift back when you let go.

PITCH LOCK and TIME LOCK hold one while you play the other. **SLOPE** is the road a sprung knob takes home, and there are sixteen — six smooth, five stepped, five that overshoot and come back — with RETURN for how long the trip takes, free or quantized to the bar. **SAMPLING GRADE** is the grid underneath it all: 31.25 kHz, 15.62, 7.81 and 3.91. The display is a pitch comparator in semitones, what went in against what came out, with the octaves marked.

AU, VST3 and a standalone on macOS 10.13 or later, VST3 on 64-bit Windows 10 or later, zero samples of latency, any session rate, $29. There is a demo on the [product page](https://gazillionindustries.com/skruu.html).

Same song, same empty parking lot. It just got later.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
