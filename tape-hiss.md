# Tape hiss

> What tape hiss is and where it comes from, how to reduce it without artifacts, why cassettes make static noise, and how to add hiss on purpose.

Source: https://gazillionindustries.com/tape-hiss/  
Published 2026-09-14, updated 2026-09-14. By Gazillion Industries, who make TRIPLE OG.

---

Put on an old cassette and before the music starts there's a sound like rain on a far-off roof. For decades engineers built entire systems to get rid of it. Now plugins sell it back by the knob, because a song with a little hiss under it sounds like it has a past.

Tape hiss is broadband noise produced by magnetic tape and its playback electronics, heard as a soft, steady "shhh," most noticeable in quiet passages and more pronounced on slow, narrow formats like cassette. To reduce it, use a noise reduction plugin that learns the noise from a quiet section, then gently tame the top end without over-processing. To add it on purpose, keep a filtered, low-level hiss bed under the music.

## The short version

- **What**: steady broadband noise from tape and electronics

- **Worst on**: slow, narrow formats like cassette

- **Remove**: noise reduction trained on a quiet section

- **Don't**: over-process; it turns watery

- **Add**: a low, filtered hiss bed

- **Cassette static**: clean the heads; check the tape

- **Spectrum**: generated flat, then tilted upward by the replay curve

- **The arithmetic**: 3 dB gained per doubling of speed or track width

- **The tell**: a bed that stops when the music stops

## Where tape hiss comes from

Magnetic tape stores sound in countless tiny particles, and their random arrangement produces a random noise on playback. The playback electronics add their own. Because that noise is spread across the whole spectrum, it's heard most in the highs and in the quiet gaps. Formats that pack sound into less tape, slower speeds and narrower tracks, have less signal relative to the noise, which is why a cassette hisses more than a studio reel. Noise reduction systems were invented to fight exactly this.

The arithmetic is worth doing once, because it settles every format argument you will ever read. Signal is written coherently across the area of tape it gets, so its voltage grows with that area, while noise comes from millions of independent particles and grows only with the square root. Double the tape and the gap widens 3 dB.

Run the two doublings that matter. A reel at 15 ips is eight times cassette speed, and 10 log10(8) = 9.0 dB. A 2-inch machine split 24 ways gives each track 50.8 mm ÷ 24 = 2.12 mm; a cassette is 3.81 mm across four tracks, so at best 0.95 mm each, before guard bands. Even on the generous figure the ratio is 2.22, which is 3.5 dB. Add them: 12.5 dB of noise floor before anybody has made a design decision. [How a tape machine works](https://gazillionindustries.com/how-does-a-tape-machine-work/) covers the rest of the mechanism, and [tape speed](https://gazillionindustries.com/tape-speed/) the trade you make every time you slow one down.

## Why the hiss is tilted rather than flat

The noise leaves the tape roughly even across the spectrum and does not reach your ear that way. A playback head responds to the rate of change of magnetism, so its output climbs 6 dB per octave all by itself. The replay curve cancels that climb up to a turnover frequency and then stops cancelling. Above the turnover, whatever the tape itself contributes arrives climbing, and the hiss is contributed by the tape. The music comes out level because the recording side was shaped for this trip. The hiss never went through that stage.

The turnovers are published as time constants, and a time constant is a corner frequency in disguise: f = 1 / (2πτ). At τ = 120 µs the corner sits at 1,326 Hz; at τ = 70 µs it sits at 2,274 Hz. The lower corner has been climbing longer by the time you reach the top of the band. Put 10 kHz through both curves: one is up 17.6 dB, the other up 13.1 dB. That 4.5 dB goes straight to the hiss. Formulations that accept more high-frequency level are what buy the shorter time constant, which is what buys the quieter top octave. A quieter tape and a brighter tape are the same purchase.

So tape hiss is not white. It climbs through the mids, peaks in the top two octaves, then rolls off where the head gap runs out of high end. Leave a bed flat and it sounds like a synthesizer with the noise oscillator up.

## What it sounds like

A soft, even hiss, like air or distant rain, sitting under the music. It rises and falls with nothing, which is what separates it from the crackle and pops of vinyl (a different medium, with a different kind of noise). In a busy mix you barely notice it; in a fade or a quiet intro it becomes the texture of the recording.

## Telling hiss from the other noises on the tape

Most people who say "my tape hisses" are describing three problems at once, and they have different fixes. Sort them by what the noise does over time.

- **Steady "shhh," level never changes**: hiss. Normal. Reduce it or live with it.

- **A hum with a buzzy edge**: mains and grounding, 50 or 60 Hz plus harmonics. Narrow notches, not noise reduction.

- **Intermittent crackle and scratch**: shed oxide or damage. It belongs to the tape, so it moves when you play a different one.

- **A squeal that tracks transport speed**: tape sticking against the heads and guides. Mechanical, not electrical.

- **Hiss that got louder *and* duller over months**: the heads. Dirt lifts the tape off the gap, and a magnetized head erodes the top of everything it touches.

- **Pitch wanders under the noise**: the transport. See [wow and flutter](https://gazillionindustries.com/wow-and-flutter/).

The diagnostic costs nothing: play a second tape. What changes belongs to the first tape, what stays belongs to the machine.

## How to get rid of tape hiss

- Find a section with only hiss, like the lead-in before the music.

- Load a noise reduction plugin and let it learn the noise from that section.

- Apply gentle reduction first, a few dB, and increase slowly.

- Listen for a watery, swirly sound; back off as soon as you hear it.

- Use a gentle high shelf cut if some hiss remains.

- Leave a little hiss rather than damage the music.

## Why over-reduction turns watery

Almost every hiss remover works the same way underneath. It cuts the audio into overlapping frames, takes an FFT of each, compares every frequency bin against the profile it learned, and pulls down the bins that look like noise before rebuilding. Nothing in that is a filter. It is a decision, taken fresh, thousands of times a second.

The artifacts are what happens when the decision is marginal. Take a 2,048-point FFT at 48 kHz. Each frame covers 2048 / 48000 = 42.7 ms and each bin is 48000 / 2048 = 23.4 Hz wide. At 75 per cent overlap a new frame lands every 10.7 ms, which is 94 decisions a second. Push the reduction hard and most bins in a quiet passage go to silence while a scattered few sit just above the line and survive. What is left is a few dozen 23 Hz-wide tones, each about 43 ms long, blinking independently. That is the sound people call underwater, or swimmy, or birds.

Window size trades one artifact for another rather than removing it. At 4,096 points the bins halve to 11.7 Hz and the chirps get finer, but the frame doubles to 85 ms and the reduction smears across a tenth of a second, hollowing transients. At 1,024 points the frame is 21.3 ms, tight enough to hold transients, but the bins are 46.9 Hz apart and a cymbal and the hiss now share one. No setting wins both, so the working rule is arithmetic rather than taste: halve whatever the plugin says it is removing, then audition the fades and the breath before the first line.

## The cheaper fix: hide it instead of removing it

Hiss is only a problem where nothing masks it, which in most records is four places: the count-in, the breath before a vocal, the gap between sections, and the tail of the last chord. Fix those and the rest never needed touching.

- Trim the head and tail of every region to the first and last sample of music.

- Fade the last chord across its own decay rather than cutting it.

- Ride a broad shelf, about 3 dB down above 8 kHz, across the gaps only.

- Leave the hiss alone everywhere the music is playing.

Four automated fades cost nothing. A reduction pass over the whole song costs the top end of it.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html)'s HISS is a continuous broadband bed, partly decorrelated across the channels. There's a demo on the page.

## How to add tape hiss on purpose

Hiss is one of the quickest ways to make a clean digital production feel like a recording with history. Keep it quiet, just audible in the gaps. Filter it so it doesn't compete with cymbals, and make it slightly different in each channel so it feels wide rather than stuck in the middle. It pairs naturally with [wow and flutter](https://gazillionindustries.com/wow-and-flutter/) and the other moves in [how to make music sound like a cassette tape](https://gazillionindustries.com/how-to-make-music-sound-like-cassette/).

### Building a bed that holds up

- Generate broadband noise, or use the HISS control on a cassette plugin.

- High-pass around 200 Hz so it stops fighting the bass.

- Low-pass around 12 kHz so it stops fighting the cymbals.

- Tilt what's left upward, roughly 3 dB per octave, the way the replay curve leans.

- Set the level with the music muted, then unmute and drop it 6 dB.

- Decorrelate the channels, then check it in mono before you commit.

- Start the bed a bar before the music and give the render a tail, so it is already running at the top and is not chopped off at the end.

Step five sounds arbitrary and is not. Judged alone a bed always ends up too loud, because in isolation you are listening *to* it rather than *under* it, and 6 dB is about the distance between those two judgements.

## Where the hiss goes in the chain

On a real dub, the tape adds its noise and everything downstream operates on the music and the noise together. Copy that order and the bed behaves. Break it and the bed announces itself.

The clearest case is the master limiter. Say it applies 6 dB of output gain and only catches peaks. Under the music that gain is partly absorbed by gain reduction, but in the gap between sections there is nothing to limit, so the full 6 dB lands on the hiss. A bed set to −60 dBFS in the mix arrives at −54 dBFS in the gaps, twice the level, in exactly the spot with nothing to hide it. Set the bed, listen again with the master chain running, and expect to pull it down. A bus compressor with a fast release does the same in miniature, pumping the hiss up in every hole the drums leave. [Gain staging](https://gazillionindustries.com/gain-staging/) and [using a limiter](https://gazillionindustries.com/how-to-use-a-limiter/) cover the same order of operations from the other side.

The placement that always sounds wrong is last. After the limiter the bed never moves and sits flat over a song whose level is changing underneath it, and ears catch that in four bars without being able to say why.

## Mono, stereo and the 3 dB you lose

Two beds identical in both channels are one bed in the middle of your head. Two independent ones spread across the image and sound like air in a room. The difference becomes a number the moment somebody plays your record on a phone.

Sum to mono the usual way, (L+R)/2. Identical channels survive intact, because the average of a thing and itself is the thing. Independent channels add as power rather than voltage, so the sum carries half the energy of one channel: 10 log10(0.5) = −3.0 dB. A decorrelated bed gets 3 dB quieter on a mono speaker while the kick and the vocal, both centered, do not move at all. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) has the general case.

Verify it in a minute. Duplicate the hiss track, flip polarity on the copy, sum the two. Digital silence means the channels are identical and the bed is mono. Whatever is still audible is the part that genuinely differs, and that part is what disappears on a phone.

## Hear it

Hiss is easier to judge against the thing it sits under. Here is a loop clean, then the same loop with a noise bed under it and the top end pulled back.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Hiss 60, tone 45** — a noise bed, nothing else — https://gazillionindustries.com/tripleog/tog-hiss.m4a

The same eleven seconds each time, rendered offline through TRIPLE OG at the settings shown. No other processing, no master bus, no edits.

## Hiss as a symptom rather than an effect

A bed on its own is a sticker. On a worn tape the noise arrives with the company it keeps: a darker top end, a softer attack, a transport no longer exactly on time. Those all move the same direction, and together they read as age rather than as noise.

The same loop with the noise alone, then with the noise as one symptom among several.

- **Hiss 60, tone 45** — a noise bed, nothing else — https://gazillionindustries.com/tripleog/tog-hiss.m4a

- **Age 35, hiss 45, drive 30, wow 40** — a worn deck — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

The same eleven seconds each time, rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits.

The hiss figure in the second file is *lower* than in the first, and the second still sounds older. Hiss carries the idea of age, and it stops being convincing the moment it is doing all the work. [Making a sample sound old](https://gazillionindustries.com/how-to-make-a-sample-sound-old/) and [dusty drums](https://gazillionindustries.com/how-to-make-drums-sound-dusty/) work the same way.

## What a hiss bed costs

Very little in level, and more than people expect everywhere else. Level is the one producers worry about and the one that turns out not to matter: a −60 dBFS bed under a −12 dBFS program raises the measured level by 0.00007 dB. Under a ten-thousandth of a decibel. It will not cost you loudness.

The bills come due elsewhere. Broadband noise is the least compressible signal there is, so a streaming encoder at a fixed bitrate spends real bits describing your hiss, and those bits come out of the music. A bed reaching past 12 kHz sits on the cymbals and takes the shimmer off them, which is why the low-pass above is not optional. And once printed it is in the record: no instrumental, no clean version, no recovering what it masked. [Dither](https://gazillionindustries.com/dithering/) is the same argument at a far lower level and for a much better reason. Print the bed to its own track rather than into the mix and you keep the option.

## The failure modes and what each one sounds like

- **Too much reduction**: watery, swirling, flickering top end in the fades

- **Bed too loud**: the mix sits behind a curtain; cymbals lose their edges

- **Bed after the limiter**: dead still, never breathes with the song

- **Bed automated on and off**: the noise ducks with the music, which tape never does

- **Bed identical in both channels**: a point of noise dead center, between your ears

- **Bed flat white**: synthetic and papery, all top, no lean through the mids

- **Looped bed with a hard join**: a tick once per loop, inaudible in a busy bar and obvious in the intro. Crossfade the join by 100 ms or more

- **Three tape plugins stacked**: three uncorrelated beds sit 10 log10(3) = 4.8 dB above one

- **Printed at the wrong rate**: a 44.1 kHz file dropped into a 48 kHz session without conversion runs 8.8 per cent fast, a shift of 1.47 semitones

The stacking one catches everybody. A tape plugin on the drum bus, another on the vocal and a third on the master do not give you three tasteful beds. They give you one loud one. Pick the bus that should own the noise and set HISS to zero on the other two.

## Questions people ask

### How do I get rid of tape hiss?

Use a noise reduction plugin that learns the noise from a quiet section, apply it gently to avoid watery artifacts, and use a subtle high shelf cut for what's left. Removing all of it usually harms the music.

### What noise does tape make?

A steady, soft hiss across the whole frequency range, most audible in quiet passages. Worn machines can also add hum, dropouts and speed wobble.

### Why is my cassette tape making a static noise?

Common causes are dirty or magnetized playback heads, a worn or damaged tape, or a player out of alignment. Cleaning the heads and trying another tape helps narrow it down.

### What dB should tape hiss be at?

There is no correct figure, only a correct method. Mute the music, set the bed until it is clearly audible alone, drop it 6 dB, unmute. Check again with the master chain running, because a limiter hands its makeup gain to the hiss in every gap.

### Why does my tape hiss sound fake?

Usually one of three things. It is flat rather than tilted upward. It is identical in both channels, so it sits in a point in the middle. Or it switches on and off with the plugin, which real noise cannot do, because the medium making it never stops.

### Does tape hiss make my track less loud?

No. A bed at −60 dBFS under a −12 dBFS program changes the measured level by 0.00007 dB. What it costs is encoder bits on streaming platforms and a little shimmer at the top, which is why you low-pass it.

### Should I remove tape hiss before or after mastering?

Before, and on the individual source if you can reach it. A master chain lifts the hiss along with everything else, so reducing it afterwards means fighting a signal that has already been amplified and compressed.

### Is tape hiss the same as white noise?

It starts close to it on the tape and does not arrive that way. A playback head's output rises 6 dB per octave with frequency, and the replay curve only cancels that rise up to a turnover around 1.3 or 2.3 kHz. Above there the hiss climbs, so it reaches you tilted upward until head losses roll it off again.

### Can I add hiss to one track instead of the whole mix?

Yes, and it usually sounds better. A bed on the drum bus alone tells the ear the drums came off a tape, which is a more specific claim than a bed over everything. Keep HISS at zero on the other instances so the beds do not stack.

### Why did my hiss disappear on my phone?

Because it was decorrelated and the phone summed it to mono, costing 3 dB, then played it through a speaker with almost nothing below 500 Hz. Test on the small speaker before you decide the bed is right.

## What TRIPLE OG does

TRIPLE OG is our cassette tape simulation. **HISS** is a continuous broadband bed, shaped and partly decorrelated across the channels, with no clicks, crackle or dust, because that's a different medium. **AGE** runs from nought to sixty years and makes the tape darker, noisier and less stable as it climbs. **TONE** sets the playback brightness, and **WOW FLUT**, **CATCH**, **SCRUB** and **SLAM** handle the transport.

**HISS at 0.** The bed is off, and nothing else on the panel has moved.

**HISS at 85.** Same panel, same everything else. The bed sits under the music rather than on top of it.

HISS and **AGE** are separate controls for the reason this page has been arguing. AGE moves the whole machine at once, noise included. HISS alone is for when the mix needs a floor under it and nothing else should change. Mac and Windows, VST3, AU and standalone, and there's a demo on the page.

Rain on a far-off roof. Engineers spent decades trying to stop it. It turns out people missed it.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
