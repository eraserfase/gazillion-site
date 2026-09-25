# Mono compatibility

> Why mixes fall apart when summed to mono, which kinds of width survive and which cancel, and how to test without killing the stereo image.

Source: https://gazillionindustries.com/mono-compatibility/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The stereo widener made the track enormous. Then it went out on a club system, a phone, a laptop and a Bluetooth speaker in somebody's kitchen, and on three of those four the part you widened got quieter or disappeared entirely.

Mono compatibility means your mix still works when the left and right channels are summed together. It matters because a great deal of real-world playback is mono or close to it, and because summing is unforgiving: anything achieved by putting the same sound on both sides with a small time or polarity difference will partially cancel when the two are added. Check in mono regularly, and treat anything that shrinks as a problem rather than a feature.

## The short version

- **What**: how the mix behaves when both channels are summed

- **Why**: phone speakers, club systems, laptops, many Bluetooth speakers

- **Risk**: wideners, stereo delays, and duplicated tracks with offsets

- **Safe**: panned sources, genuinely different left and right parts

- **Keep centered**: kick, bass, snare, lead vocal

- **Test**: a mono button on the master, used often

**SOFT CLIP** as the out stage, BEEF at 62.

## What actually disappears

Panning is safe. If the guitar is on the left and the organ is on the right, summing them puts both in the middle at a slightly lower level, and nothing is lost.

What is not safe is width created from a single source. Duplicate a part, delay one copy by a few milliseconds and pan them apart, and in stereo it sounds wide and impressive. Sum it and the two copies partially cancel, removing a comb of frequencies and leaving something thinner than the original mono part you started with. The same applies to most wideners, to stereo chorus and flanging, and to anything involving polarity inversion between channels.

The underlying mechanism is the same one in [phase cancellation](https://gazillionindustries.com/phase-cancellation/): two versions of one sound, arriving at different times, subtracting from each other.

## The comb, in hertz

The damage is not vague. When one sound reaches the sum twice with a delay between the copies, they cancel at every frequency where they land half a cycle apart, and you can calculate exactly where those frequencies fall from the delay alone.

For a delay of Δt seconds, the first null sits at 1 / (2Δt) and the nulls repeat every 1 / Δt hertz above it. Nothing about the source matters, only the offset. A 10 ms offset — a common micro-shift widener setting — puts the first null at 50 Hz and the rest at 150, 250 and 350 Hz, spaced 100 Hz apart. Pull the offset down to 1 ms and the first null climbs to 500 Hz with 1 kHz between notches. Push it out to 20 ms and the first null lands at 25 Hz with 50 Hz spacing, which is a notch inside every semitone the bass plays.

- **0.05 ms**: first null 10 kHz, notches 20 kHz apart

- **0.1 ms**: first null 5 kHz, notches 10 kHz apart

- **0.5 ms**: first null 1 kHz, notches 2 kHz apart

- **1 ms**: first null 500 Hz, notches 1 kHz apart

- **5 ms**: first null 100 Hz, notches 200 Hz apart

- **10 ms**: first null 50 Hz, notches 100 Hz apart

- **20 ms**: first null 25 Hz, notches 50 Hz apart

- **40 ms**: first null 12.5 Hz, notches 25 Hz apart

Read that table as two different problems rather than one. Short offsets put a handful of wide notches across the band and the ear hears a tuned, hollow coloration it can name. Long offsets put hundreds of narrow notches across the same band, too close together for the ear to resolve one at a time, and what arrives instead is a general loss of body with no obvious culprit. The second kind is the one that survives a careless check, because nothing sounds broken. It just sounds smaller.

Depth is a separate question from spacing, and it is set by the level of the second copy. With the copy at gain g relative to the original, the notch goes down by 20 log₁₀(1 − g) and the peak between notches comes up by 20 log₁₀(1 + g).

- **Copy at 0 dB**: notch bottomless, peaks +6.02 dB

- **−0.92 dB**: notch −20.00 dB, peaks +5.58 dB

- **−3.10 dB**: notch −10.46 dB, peaks +4.61 dB

- **−6.02 dB**: notch −6.02 dB, peaks +3.52 dB

- **−12.04 dB**: notch −2.50 dB, peaks +1.94 dB

- **−20.00 dB**: notch −0.92 dB, peaks +0.83 dB

That last row is the useful one. Pull the widened copy 20 dB under the original and the worst notch in the whole comb is 0.92 dB deep, which nobody will ever hear as a hole. You have bought most of the width for almost none of the summing cost. Matched levels are where the comb becomes a weapon.

## What a correlation meter costs you, in decibels

Correlation meters give you a number between −1 and +1 and leave you to guess what it means. Convert it to decibels and it stops being a mood ring.

Take two channels at the same RMS level, call it a, with correlation r between them. The mono fold (L + R) / 2 has power a²(1 + r) / 2, so the level after summing, measured against one channel on its own, is 10 log₁₀((1 + r) / 2) decibels.

- **r = +1.0**: 0.00 dB — identical channels, nothing lost

- **r = +0.9**: −0.22 dB

- **r = +0.5**: −1.25 dB

- **r = 0**: −3.01 dB — genuinely unrelated left and right

- **r = −0.5**: −6.02 dB

- **r = −0.8**: −10.00 dB exactly

- **r = −0.9**: −13.01 dB

- **r = −1.0**: silence

Two things fall out of that column. First, zero on the meter is the honest price of real stereo — two different performances, two different rooms, 3.01 dB quieter when you add them — and it needs no fixing. Second, the curve is brutal past about −0.5. A pad sitting at −0.8 loses exactly ten decibels of itself in the sum, which is the difference between an element and a memory of one.

One caution before you trust the needle. Correlation is reported broadband, so a track can read a comfortable +0.6 while a single band inside it sits at −0.9 and vanishes. The meter tells you whether to look. The analyzer tells you where.

## Where mono still happens

More often than people assume. Phone speakers are a single driver. A lot of small Bluetooth speakers are one driver, or two close enough together to behave like one. Club and venue systems are frequently run mono, or are wide enough that no listener is hearing a stereo image. Laptops have two speakers a few inches apart. And listeners are rarely sitting exactly between two correctly placed monitors.

You do not need to mix in mono to respect this. You need to check in mono often enough that nothing in the arrangement depends on stereo to exist.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect, and it is the right answer to a thin sound only after you have checked that the thinness is not two tracks cancelling each other.

**BEEF at 8.** The reference you A/B against.

## How mono the listener actually is

Geometry decides this, and the geometry is not in your favor. A stereo triangle puts the two speakers about 60° apart as seen from the chair. Every other playback situation squeezes that angle down toward nothing, and a squeezed angle behaves more and more like a sum.

Work a phone. Two drivers at opposite ends of a 16 cm handset, held at arm's length, call it 40 cm. The half-angle is arctan(0.08 / 0.40) = 11.3°, so the full spread is 22.6°. That is close to a third of the studio angle, from a device that also has the two drivers facing different directions. A palm-sized speaker with its drivers 8 cm apart, sitting a meter away on a kitchen counter, gives 2 × arctan(0.04 / 1.00) = 4.6°. At 4.6° the argument about whether it is technically stereo has stopped mattering.

Now the venue, which does something worse than summing. Take two stacks 12 m apart and a listener 15 m back and 3 m off center. The two path lengths are √(15² + 9²) = 17.493 m and √(15² + 3²) = 15.297 m, a difference of 2.196 m. At 343 m/s that is 6.40 ms of delay between the two arrivals, which combs your record in the air with the first null at 78 Hz and notches every 156 Hz above it. The room is doing to your mix exactly what a badly set widener does, and it is doing it to a different spot on the floor for every person in the building. Anything you built out of interchannel delay is being rebuilt by the venue with numbers you do not control.

Vinyl adds a physical constraint on top of a perceptual one. In a 45/45 cut, the summed signal moves the stylus side to side and the difference signal moves it up and down. Out-of-phase low frequency is therefore vertical excursion, and enough of it lifts the stylus out of the groove. That is why cutting engineers ask for a mono low end, and it is not a preference.

## How to check

- Put a mono button somewhere you will actually press it — on the monitor path, not buried in a plugin.

- Press it every time you add a stereo effect, not just at the end.

- Listen for elements that get quieter rather than the mix simply getting narrower.

- Keep kick, bass, snare and lead vocal centered, so the load-bearing parts are unaffected by summing.

- High-pass the sides of any width processing, or restrict widening to above a few hundred hertz, so the low end stays mono.

- If a part vanishes in mono, fix it at the source: use a genuinely different performance for the other side rather than a processed copy.

## Read the notches and get the delay back

Listening tells you something is wrong. Measuring tells you what to move. The comb spacing is an exact function of the offset, so the analyzer hands you the offset if you read it properly.

- Solo the suspect pair and sum it to mono.

- Run pink noise or a slow sine sweep through it and watch a spectrum analyzer with a long average.

- Find two adjacent notches and subtract their frequencies. That gap in hertz is 1 / Δt.

- Invert it. Notches 100 Hz apart mean a 10 ms offset. Notches 200 Hz apart mean 5 ms. Notches 1 kHz apart mean 1 ms.

- Go to the widener or the duplicated track and remove that many milliseconds.

The same arithmetic runs in samples, which is how to catch an accidental offset rather than a deliberate one. At 44.1 kHz a delay of n samples puts the first null at 22050 / n hertz. One sample nulls at 22.05 kHz, which is Nyquist and therefore inaudible. Ten samples nulls at 2205 Hz, right through the vocal presence range. A hundred samples nulls at 220.5 Hz, which will hollow out a bass guitar. Four hundred and forty-one samples — ten milliseconds — nulls at 50 Hz. If a comped part sounds wrong only in mono, count the samples.

Two more tests, both cheap. For a level answer, put a loudness meter on the master, note the reading, engage mono, note it again, and compare the drop against the correlation table above: a tenth of a decibel is nothing, a decibel and a quarter puts you at r = +0.5, and three decibels says the mix has as much side as mid. For a content answer, invert the polarity of one channel and sum: what you are left with is the side signal itself, which is precisely the material mono throws away. If your hook is in there, you have found the problem by hearing it rather than by reasoning about it.

**LIMIT** as the out stage instead.

## The mono button, per DAW

None of this happens unless the check is one keystroke away. Every major DAW can do it with something already installed.

- **Ableton Live** — Utility on the master, Width at 0%. Map the Width control to a key or a controller so the check costs nothing.

- **Logic Pro** — the Gain plugin has a Mono switch. Direction Mixer with Spread at 0 does the same job and also lets you rotate the image on the way.

- **FL Studio** — the Stereo Separation knob on the master mixer track, turned all the way to merge.

- **Studio One** — the Mono button on the Main fader in the console.

- **REAPER** — the stock Channel Mixer JS, or a Mid/Side JS with the side turned off.

- **Pro Tools** — route the mix bus into a mono auxiliary input and monitor that, which also gives you somewhere to hang a meter.

One warning that costs people a master. Anything you insert on the master gets printed on the bounce. Put the mono device in the very last slot so it is obvious, give it a color, and bypass it before you export — or better, keep a separate monitoring chain the render never sees. A track delivered in accidental mono is a worse outcome than the problem you were checking for.

## Pan law decides whether panning itself costs you

Panning is safe, but how safe depends on a setting most people have never opened. Pan law sets how much a source is attenuated when it sits in the middle, and that choice determines whether a hard-panned part comes back at the same level as a centered one after summing.

Run the three common values against a hard-panned source at unit gain, folding with (L + R) / 2. With a 0 dB law, a centered source feeds 1.000 to each side and sums to 1.000, while the hard-panned source sums to 0.500, so panning something hard costs it 6.02 dB in mono. With the equal-power −3 dB law, the centered source feeds 0.707 to each side and sums to 0.707 against the panned source's 0.500, a difference of 3.01 dB. With a −4.5 dB law the gap is 1.52 dB. With a −6 dB law the centered source sums to 0.500 and the panned source sums to 0.500, and the difference is zero.

So the wider your pan law, the more your hard-panned parts recede on a phone, and the tighter it is, the more your center builds up when things collapse. Logic Pro exposes this directly in the project settings. Others bury it or fix it. Find yours, write the number down, and stop being surprised that the guitars sit lower on the small speaker than they did in the room.

## Five failure modes and what each one sounds like

- **Hollow and tuned.** A short offset, under about 2 ms, giving a few wide notches. It sounds like the part is being played through a length of pipe, and the pitch of the hollowness stays put while the music moves.

- **Smaller with no obvious fault.** A long offset, 10 ms and up, giving dense notches the ear cannot separate. Nothing sounds broken. The part simply reads as less important than it did, which is the failure people ship.

- **An element straight-up gone.** Something living only in the difference signal: a fully inverted duplicate, a side-only reverb return, a widener pushed past the point where the two channels oppose each other. Mono discards the difference signal entirely, so there is no partial version of this one.

- **The low end wanders and then thins.** Wide bass, stereo sub reverb, or two kick layers a few samples out of alignment. In stereo it feels enormous. In the sum the fundamental drops and the track loses its floor, and because the notches sit at 22050 / n hertz, a handful of samples is all it takes.

- **Detune that swims.** A pitched copy does not comb, it beats, at the difference frequency. Ten cents on a 220 Hz note gives 221.274 Hz and a 1.27 Hz beat. The same ten cents on a note at 880 Hz gives 885.098 Hz and a 5.10 Hz beat. Summed, the width you liked turns into a tremolo whose speed climbs with pitch, which is why detuned pads sound seasick on a laptop.

## Why the low end goes mono at 100 to 150 Hz

The usual advice is to keep everything below roughly 100 to 150 Hz mono. The number comes from the width of a head.

Interaural phase can only place a sound while the head is narrower than half a wavelength. Take the ears 17.5 cm apart: half a wavelength equals 0.175 m at a wavelength of 0.35 m, which at 343 m/s is 980 Hz. Above that the phase cue becomes ambiguous and hearing leans on level differences instead. Below it, phase is the cue — but it runs out of resolution fast. At 300 Hz the wavelength is 1.14 m and the head spans 55° of phase. At 120 Hz the wavelength is 2.86 m and the head spans 22°. At 60 Hz the wavelength is 5.72 m and the head spans 11°.

Eleven degrees is almost no information. So the trade at the bottom of the mix is a clear one: stereo down there buys you a directional cue nobody can use, and it costs you level every time the signal is summed, plus stylus excursion if the record gets cut. Put a high-pass on the side channel somewhere between 100 and 150 Hz, leave the mid alone, and you lose nothing you were actually hearing. The wavelength at 100 Hz is 3.43 m, longer than most rooms people work in, which is a second reason the low end was never really stereo where you were sitting.

## Fixing it without throwing the width away

Most fixes people reach for are amputations. These are not.

- Measure the offset from the notch spacing and remove it, rather than turning the effect down by ear.

- Turn the widened copy down instead of turning the width off. At 20 dB below the original the deepest notch is 0.92 dB, and the image still opens.

- High-pass the side channel at 100 to 150 Hz so the part that cancels worst is the part you kept mono anyway.

- Replace a delayed duplicate with a second performance. Two takes are uncorrelated rather than opposed, so the sum costs 3.01 dB and nothing notches.

- If you want a delayed double, push the offset past about 40 ms so it reads as an echo with 25 Hz notch spacing the ear integrates, or pull it under 0.1 ms so the first null sits at 5 kHz and above. The middle ground is where the damage lives.

- Build width out of frequency rather than time: different EQ curves left and right, or different amp and cabinet tones, both stay put when summed.

- Get level and body from the source. Saturation raises a part's presence by adding harmonic content rather than by opposing the two channels, so what it gives you survives the fold. There is more on that in [saturation explained](https://gazillionindustries.com/saturation-explained/) and in [crest factor](https://gazillionindustries.com/crest-factor/).

## Where it costs you

Strict mono-compatibility is a constraint and constraints cost something. Some of the most beautiful stereo effects in records are not perfectly mono-compatible, and a producer who refuses all of them ends up with a narrow, safe mix. The working position is that nothing essential should rely on stereo: a wide pad that gets smaller in mono is fine, while a hook that disappears is not.

It is also easy to over-test. A mix that is checked in mono constantly but never enjoyed in stereo tends to end up correct and dull.

The side high-pass has a price too, and it is worth naming. Filtering the difference signal below 150 Hz takes the bottom out of stereo reverb tails and room mics, so a live drum kit can go from sounding like a room to sounding like a stack of close mics. If the record is going to be heard mostly on headphones, take the filter lower — 80 Hz, or none at all — and accept that the sum will lose a little. Every one of these decisions is a bet on where the record gets played.

## Questions people ask

### Should I mix in mono or stereo?

Mix in stereo and check in mono. Some engineers do the initial balance in mono because it forces clear decisions about level and frequency, then open it up. Either way, mono is a test rather than a destination.

### Why does my mix sound worse in mono?

Almost always because something is cancelling: a widener, a duplicated and offset part, a stereo effect with polarity differences, or two microphones on one source. Mute things one at a time in mono until the level comes back.

### Is mono audio bad?

No. Mono is simply one channel. A great many classic records are mono mixes and they are not deficient; they are focused. What is bad is a stereo mix that falls apart when summed.

### Does bass need to be in mono?

The low end benefits from being centered, because stereo information down there translates badly on most systems and can cause problems on vinyl. Keeping everything below roughly 100 to 150 Hz mono is a common and sensible default.

### How do I check mono compatibility?

Sum the master and listen for elements that get quieter rather than the whole mix getting narrower. Add two measurements to that: watch a loudness meter across the switch, and invert one channel and sum to hear the difference signal on its own. Whatever is loud in the difference signal is what the sum deletes.

### What is a good correlation meter reading?

Anything from 0 to +1 is safe to ship. Zero means left and right are unrelated and the sum loses 10 log₁₀(0.5) = 3.01 dB, which is the normal price of stereo. Negative readings are where to look: −0.5 costs 6.02 dB, −0.8 costs exactly 10.00 dB, and −1 costs everything.

### How much level drop in mono is acceptable?

Under half a decibel on the full mix means nothing is fighting. Around 1.25 dB puts the master at a correlation of about +0.5, which is wide and still fine. Past 3 dB the mix has as much difference signal as sum signal, and you should be soloing groups to find out which one is responsible before you touch the master.

### Does a Haas delay ruin mono compatibility?

It combs the sum, and the numbers say how badly. A 15 ms Haas offset puts the first null at 33.3 Hz with notches every 66.7 Hz, which is dense enough to read as lost body rather than as a hollow tone. Attenuating the delayed side helps more than shortening it: at 12 dB down, the deepest notch is 2.50 dB.

### Why does my vocal disappear in mono?

Three usual causes. A doubler or widener on the vocal bus with the two sides opposed; a reverb or delay return that is side-heavy so the tail goes and takes the size with it; or a polarity flip on one of two microphones. Solo the vocal bus, invert one channel, sum, and whatever is still audible is the part that goes missing.

### Do stereo wideners ruin a mix?

Not by existing. They ruin a mix when they are set to matched level and left across everything, including the bottom end. Used on one or two sustained parts, above 150 Hz, with the wide copy well under the original, a widener is a normal tool with a measurable and small cost.

### How many samples of offset cause a problem?

At 44.1 kHz an offset of n samples puts the first null at 22050 / n hertz. One sample nulls at 22.05 kHz and does not matter. Ten samples nulls at 2205 Hz and takes a bite out of vocal presence. A hundred samples nulls at 220.5 Hz and hollows a bass. Anything over about five samples between two layers of the same sound is worth aligning.

### Does mono compatibility still matter for streaming?

The delivery is stereo, so nothing is summed on the way. The playback is the problem: a handset with drivers 16 cm apart at arm's length spans 22.6° against the 60° of a studio triangle, and a small wireless speaker with drivers 8 cm apart at a meter spans 4.6°. At those angles the two channels are arriving at both ears together, and anything opposed subtracts in the air.

### Should I check mono on headphones or speakers?

Speakers, if you have them, because summed material on headphones still arrives at two separate ears and sounds more convincing than it will in a room. Headphones are fine for the measurement part — the meter drop and the inverted-channel test give the same numbers either way.

### Can a plugin fix mono compatibility automatically?

A plugin can high-pass the side channel, narrow the image, or cap correlation, and those all help. None of them can put back a part that was built out of two opposed copies, because the information was subtracted rather than masked. Fix that one at the source.

### Why does my kick lose punch in mono?

Usually layer alignment. Two kick samples a few samples apart notch each other low down, and in stereo the notch is filled by whichever layer is panned away from the other. Sum it and the fill disappears. Zoom in, align the initial transient sample-accurately, and check the sum again before blaming the sample. [How to mix drums](https://gazillionindustries.com/how-to-mix-drums/) has the rest of the order.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger, which is a genuine way to make a part more present without relying on stereo width to do it. **BEEF** brings weight and density, **COOK** changes the color and bite, **JUICE** sets the level going in, and **SOFT CLIP** opens switched on to round the loudest parts.

Set against this article, that distinction is the whole point. Width built from two opposed copies is borrowed, and the sum calls the loan in at 3, 6 or 10 dB depending on how far you pushed the correlation. Loudness built from harmonic content is paid for up front and survives the fold, because it is added to the material rather than arranged around it. When a part feels small, work out which of the two you need before you reach for either.

Judge any processor by the same test you would run on a widener. Insert it, sum to mono, and watch the meter across the switch. If the drop is the same with the plugin engaged as it was without, the plugin is not spending your summed level. **LIMIT** is the other output switch, holding the peaks when you want a ceiling instead of a rounded edge, and both switches sit on the panel next to each other. BEEFY is $19, runs on Mac and Windows as AU, VST3 and standalone, and there is a 28-second demo with three without/with comparisons on the page.

Four playback systems, three of them summing your record. Press the button more often.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
