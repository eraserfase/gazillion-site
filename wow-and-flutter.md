# Wow and flutter

> What wow and flutter are, what causes them, what they sound like, what a good rating is, and how producers add them on purpose for a vintage sound.

Source: https://gazillionindustries.com/wow-and-flutter/  
Published 2026-09-14, updated 2026-09-14. By Gazillion Industries, who make TRIPLE OG.

---

Boards of Canada's *Music Has the Right to Children* (1998) sounds like a childhood home video left in a hot car: every chord a little seasick, every melody leaning slightly off the note. Much of that feeling is pitch that won't sit still, and engineers have had names for it since long before anyone wanted it on purpose.

Wow and flutter are speed variations in tape machines and turntables that make the pitch waver. Wow is slow, a gentle swaying drift you hear as the pitch sagging and rising; flutter is fast, a trembling shimmer on sustained notes. Hi-fi gear tries to keep both to a tiny fraction of a percent. Producers add them on purpose to make music sound worn, nostalgic and alive.

## The short version

- **Wow**: slow speed drift; the pitch sways

- **Flutter**: fast speed variation; the pitch trembles

- **Causes**: uneven motors, capstans, rollers, stretched tape, warped records

- **Hi-fi goal**: as little as possible, fractions of a percent

- **Creative use**: vintage, lofi, nostalgia, movement

- **Watch**: bass and tight vocals

- **Where the split falls**: about 10 Hz: below is wow, above is flutter

- **Wow in practice**: roughly 0.5 to 6 Hz

- **Scrape flutter**: hundreds of hertz; heard as grain, never as pitch

- **Standard test tone**: 3,150 Hz, weighted around a 4 Hz peak

- **Percent to cents**: 1200 × log₂(*r*); 1% speed is 17.23 cents

- **Producer range**: 0.3% is warmth, 1% is a wobble, 2% is a broken deck

## What causes wow and flutter

A tape machine only plays at the right pitch if the tape passes the head at exactly the right speed. In practice, motors, capstans and pinch rollers are never perfect: a slightly off-center capstan, a worn roller or tape that stretches and sticks all make the speed rise and fall. On turntables, warped records and uneven platters do the same. Slow variations are wow; faster ones are flutter. The names describe what you hear: a slow pitch sag that sounds a little like the word, and a quick, fluttering waver.

Most of it is periodic, because the parts that cause it go round. A turntable at 33⅓ rpm turns 0.556 times a second, so a warped disc or an off-center spindle hole puts one pitch cycle every 1.8 seconds: 0.556 Hz, dead on. At 45 rpm the same fault reads 0.75 Hz; on a 78 it reads 1.3 Hz. On tape the rotating parts are smaller and turn faster, and there are several of them, so the capstan, the roller and the reel hubs each contribute a rate of their own and the rates have nothing to do with each other. That pile-up is what stops real wow from sounding like one oscillator.

Two neighbors get folded into the same conversation and should not be. Below wow sits drift: the whole machine running a fraction slow for minutes at a time, which you hear as a song that will not line up with anything else rather than as movement. Above flutter sits scrape flutter, made by the tape stick-slipping across fixed guides and the heads themselves at hundreds of hertz. That one never reads as pitch. It reads as a grainy haze laid over the signal, and it is a large part of why a worn cassette sounds dusty before it sounds out of tune. [How a tape machine works](https://gazillionindustries.com/how-does-a-tape-machine-work/) walks the rest of the transport.

## Wow, flutter, and the number on a spec sheet

The split between the two is a frequency, and the convention puts it near 10 Hz. Wow is modulation slower than that, mostly living between 0.5 and 6 Hz. Flutter runs from about 10 Hz up into the low hundreds. The standard measurement records a 3,150 Hz tone, plays it back, and measures how far the recovered frequency moves; the weighting curve applied to that measurement peaks around 4 Hz, because that is the rate at which a wavering pitch bothers a listener most.

A published figure means nothing without the method beside it. A peak-weighted reading and an RMS reading of the same transport give different numbers, and the RMS one is smaller, so two decks performing identically can quote figures that differ by a factor. When a spec says 0.05%, the useful question is 0.05% measured how. Read the footnote or ignore the number.

## Percent, cents, and translating between them

Speed and pitch are one quantity here. Multiply tape speed by a ratio *r* and every frequency in the music multiplies by *r* too, so the shift in cents is 1200 × log₂(*r*). Run it on the numbers that appear on spec sheets: 0.1% of speed error is 1.73 cents, 0.3% is 5.19 cents, and a full 1% is 17.23 cents, a sixth of a semitone. Backward, 10 cents of movement is 0.579% and 25 cents is 1.45%.

That arithmetic settles most arguments about how much is too much. Hi-fi territory, a few hundredths of a percent, sits under a single cent; you cannot tune anything that finely by ear and neither can the record. Producer territory opens around 0.3% and gets interesting near 1%, where a held note visibly moves on a tuner. Past 2%, which is 34.28 cents, listeners stop hearing character and start hearing a machine in trouble. Sometimes that is the job.

The demo further down this page runs the speed between 0.941 and 1.071. In cents that is −105 to +119: just past a semitone flat at the bottom of the sway, and further than that sharp at the top. Nothing subtle is happening in that file. Hear the extreme once, then decide where your own setting belongs, because guessing at a depth control with no reference is how pages like this one get written.

## What it sounds like

Subtle wow makes sustained chords feel like they're breathing. Heavier wow sounds seasick, the whole track drifting in and out of tune. Flutter is harder to hear on drums and easier on long notes, where it adds a trembling, slightly grainy quality. Together they're a big part of why cassettes and old records sound old. A single, perfectly regular pitch wobble sounds more like chorus; real wow and flutter come from several irregular motions at once.

## Why drums hide it and pads cannot

Note length against modulation period decides all of it. To hear wow *as* wow, the note has to last long enough to cover a cycle. At 1 Hz a cycle is one second. A closed hat lasting 40 ms covers 4% of that cycle, 14.4 degrees of phase, so the pitch is effectively frozen for the whole hit. You get one small detune, not a waver.

Put the same 1 Hz wow under a four-second pad and the pad crosses four complete cycles, and now it is a sway you can count out loud. That single ratio explains the whole reputation of the effect: drums appear to hide it, keys and pads cannot. It also tells you exactly what happens to a chopped loop. Every chop starts at a different point on the cycle, so every chop sits at a slightly different pitch, and a loop that used to repeat exactly stops repeating. Producers pay money for that. See [how to chop samples](https://gazillionindustries.com/how-to-chop-samples/) and [how to make Dilla type beats](https://gazillionindustries.com/how-to-make-dilla-type-beats/).

Fast flutter changes category rather than degree. Once the modulation rate passes roughly 20 Hz the ear stops tracking the wobble and starts hearing the sidebands it produces. Modulate a 1 kHz tone at 30 Hz and you get components spaced 30 Hz apart around the carrier: 970, 1000, 1030 and outward. Nobody calls that pitch movement. They call it roughness, or grain, or say the sample sounds dirty, and then reach for a [cassette plugin](https://gazillionindustries.com/best-cassette-plugins/) to get more of it.

## Why one sine wave gives you a chorus

Almost every wow effect is a delay line with a moving read point. Speed the read point up and the pitch rises; slow it down and the pitch falls. The relationship is exact. If the delay is a sine of depth *D* seconds at rate *f* Hz, the peak speed deviation is 2π*fD*.

Put numbers in it and the design problem shows itself. At 1 Hz you need 1.59 ms of delay depth to reach 1% deviation, and 2 ms buys 1.26%, which is 21.6 cents. At 12 Hz, 0.2% costs only 0.027 ms. Slow movement is expensive in buffer and fast movement is nearly free, which is why a plugin offering deep wow reports a delay to your host and a flutter-only effect barely has to.

**WOW/FLUT on [TRIPLE OG](https://gazillionindustries.com/tripleog.html)** is composite instability rather than one sine wave. Slow drift and fast warble at unrelated rates.

The same mechanism explains the chorus complaint. A modulated delay run fully wet is pitch modulation and nothing else. Blend dry signal back in and the two copies comb: at 2 ms of delay the first notch lands at 250 Hz with another every 500 Hz above it, and a sweeping notch pattern is the definition of a chorus. Tape hands you no dry path. Run the effect at 100% wet, keep it off a parallel send unless the comb is the point, and reach for a proper [detune device](https://gazillionindustries.com/best-detune-plugins/) when the comb was what you wanted all along.

One quieter consequence is worth knowing. A moving read point almost never lands on a whole sample, so the plugin interpolates between neighbors, and cheap interpolation loses top end in proportion to how far off a whole sample the read point sits. Sweep a sine through it and you can watch the high end dip and recover in time with the wow. Small effect. On a cassette page, arguably free character.

## How to use wow and flutter

- Put a wow and flutter or tape effect on pads, keys, samples or a whole loop.

- Start with the depth at zero and raise it until you just hear the pitch move.

- Set wow slow and gentle for drift; add a little flutter for texture.

- Prefer irregular or randomized movement over a single steady wobble.

- Check the result against the bass and vocal, and back off if they sound out of tune.

- Run the effect fully wet and set the amount with depth, never with a dry blend.

- Use one instance on a bus rather than one per track, so every part moves together.

- Read the movement on a tuner in cents before committing to a setting.

- Keep the sub out of the effect path, or hold the depth under 0.3% if it must stay in.

- Print the result to audio, because randomized motion renders differently every time.

## Where it sits in the chain

A machine puts the instability last, because tape is the final medium. Everything printed to it moves together, including the reverb that was already in the mix, so the effect goes after bus compression and before nothing at all. The other honest position is a sampled tape part inside a modern session, where the wow belongs to that one part and the rest of the record holds still. Pick one. The rest follows from it.

Before a reverb, the tail arrives already wavering and then smears further as it decays. After a reverb, the tail wavers as one printed object, which is tighter and closer to a cassette dub. Before saturation, the drive stage sees a moving signal and its harmonics move with it. After saturation, the harmonics are generated at fixed ratios and then bent together, which reads a shade cleaner. None of those is wrong. They are different machines, and [four-track recording](https://gazillionindustries.com/four-track-recording/) is the workflow where the distinction was made for you.

Two placements reliably cause trouble. On the master after a limiter, everything moves including the sub, and the low end begins to argue with the kick. Split across several tracks with independent instances, the parts drift out of tune with each other, because eight transports do not add up to one cassette. One capstan, one speed, one instance.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html)'s WOW FLUT is built from several motions at once, because one sine is just a chorus. There's a demo on the page.

## Verify it in your own session

Descriptions are cheap and a tuner is free. Seven steps and you will know exactly what your plugin is doing, in units you can compare against anything else.

- Put a 440 Hz sine on an empty track and let it run for thirty seconds.

- Insert the wow effect after it and set the mix to 100% wet.

- Insert a tuner after the effect and watch the cents readout, not the note name.

- Write down the highest and lowest cent values it reaches over one minute.

- Convert to speed: percent equals 2 to the power of cents divided by 1200, minus one, times one hundred.

- Swap the tuner for a spectrum analyzer with a long window and watch the 440 Hz line widen into a band.

- Repeat the test at 4 kHz, where the same percentage produces ten times the movement in hertz.

Worked, so there is no ambiguity. A tuner swinging between −10 and +10 cents is running about ±0.58% in speed, which is a worn cassette deck rather than a hi-fi one. At ±1% a 440 Hz tone moves ±4.4 Hz, so the analyzer shows a band about 8.8 Hz wide. The same 1% at 4.4 kHz moves ±44 Hz, a band ten times wider. That ratio is why the top of the spectrum looks smeared long before the bottom does.

Hosts differ in the tools, not in the readings. Live has Tuner and Spectrum; put Tuner last in the chain and Spectrum on a parallel return so it sees the same signal. Logic has Tuner and MultiMeter, and Logic's Tuner reads cents plainly enough to do this by eye. FL Studio's Wave Candy covers the spectrum half, and its oscilloscope makes the period of the wow visible as the waveform breathing in and out. Reaper ships ReaTune. One genuine per-host difference: in Live a warped clip is already having its playback rate changed to hold the grid, so wow on top of warping is two rate changes stacked. Set the clip Unwarped, or to Re-Pitch, while you judge the effect, and see [what varispeed is](https://gazillionindustries.com/what-is-varispeed/) for why those two are not the same operation.

## Where it works, and where it doesn't

Keys, pads, guitars, chopped samples and lofi loops take wow and flutter beautifully; see [how to make lofi beats](https://gazillionindustries.com/how-to-make-lofi-beats/). Drums hide it. Bass and 808s are the risk: a wavering sub fights the kick and sounds out of tune fast, so keep low end off the effect or use very little. On a lead vocal, a small amount can sound like a vintage record; more than that sounds like a mistake.

The vocal case has a number attached to it. A sung note and a doubled or harmonized copy a few cents apart do not sound detuned first, they beat first, at a rate equal to the difference in hertz. Two tones 10 cents apart at 110 Hz beat 0.64 times a second, slow enough to count and impossible to unhear. Move that pair up to 440 Hz and the same 10 cents beats 2.5 times a second, which reads as shimmer instead of as a fault. Low and slow is where wow gets caught.

## Failure modes, and what each one sounds like

- **Seasick low end**: sub and kick drift apart and the bottom of the mix sounds waterborne. Too much depth, or the effect is sitting on the master.

- **Hollow sweeping**: a notch moving through the mids. Dry signal is blended with the delayed copy. Go fully wet.

- **Vibrato**: one countable, musical rate. A single sine is driving the delay. Add a second, unrelated motion.

- **Grain and roughness**: sidebands rather than movement. The modulation rate has passed about 20 Hz.

- **Chords that will not settle**: a wavering part beating against a steady bass. Check the beat rate, not the tuning.

- **Mono collapse**: left and right moving independently. Sum to mono and listen; see [mono compatibility](https://gazillionindustries.com/mono-compatibility/) and [phase cancellation](https://gazillionindustries.com/phase-cancellation/).

- **Softened transients**: interpolation loss while the read point sits off a whole sample. Raise the oversampling or accept the trade.

- **A different take every bounce**: randomized motion is not deterministic. Print once and use the print.

## Hear it

Descriptions of wow and flutter only go so far. Here is one loop with the speed held steady, then the same loop with the transport allowed to wander.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Wow and flutter 65** — speed moves between 0.941 and 1.071 — https://gazillionindustries.com/tripleog/tog-wowflutter.m4a

The same eleven seconds each time, rendered offline through TRIPLE OG at the settings shown. No other processing, no master bus, no edits.

## Wear, and the transport giving up entirely

Wow and flutter get worse with age, and they do not get worse alone. A deck loses top end, gains noise and loses speed stability on the same schedule, because the same rubber, the same oxide and the same bearings are responsible for all three. That is why a wow setting on its own can sound applied, and why wow alongside a little dullness and a little [hiss](https://gazillionindustries.com/tape-hiss/) reads as a real object. The two files below carry the whole package rather than the one control.

- **Age 35, hiss 45, drive 30, wow 40** — a worn deck — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

- **CATCH 100** — speed falls to 0.211 and sprints back to 1.854 — https://gazillionindustries.com/tripleog/tog-catch.m4a

The same eleven seconds each time, rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits.

Run those speeds through the conversion and the second one stops being wow by any reading. 0.951 to 1.059 is −87 to +99 cents, which is close to a semitone in each direction. The CATCH file falls to 0.211, which is 2,694 cents down, better than two octaves, and then overshoots to 1.854, about 1,069 cents up. At that scale the transport has stopped wavering and started failing, which is a related effect with its own name; see [how to make a tape stop effect](https://gazillionindustries.com/how-to-make-a-tape-stop-effect/) and [the plugins that do it](https://gazillionindustries.com/best-tape-stop-plugins/).

## What it costs

Four costs, and only the first one bites regularly. Tuning: any part with a defined pitch, played against a steady part, beats against it, and the lower the register the slower and more exposed the beat. Keeping the sub out of the effect path removes most of the problem and costs you nothing you would have heard.

Delay: deep wow needs a buffer at least as long as its slowest backward excursion, so the plugin declares that figure to the host and the host compensates on playback. Performing into it live is a different matter and you will feel the buffer under your hands. Track with the depth low and raise it before the print.

Permanence: once printed, irregular wow is not coming back out. Pitch correction aligns a monophonic line to a grid; it cannot unpick a continuous rate change applied to a full mix along with its noise floor. Bounce a flat version next to the treated one before you commit, the same way you would keep a dry stem of anything else destructive. Restoration tools exist that track a steady reference inside a recording and correct against it, and they need that reference to be there.

Repeatability: randomized motion means the next render is a different take. If a specific bounce has been approved by somebody, keep the audio file rather than the plugin state, and see [how to make music sound like cassette](https://gazillionindustries.com/how-to-make-music-sound-like-cassette/) for the rest of the chain that has the same property.

## Questions people ask

### What does wow and flutter mean?

Wow and flutter are unwanted speed variations in analog playback that make the pitch waver. Wow is slow variation, heard as drifting pitch; flutter is fast variation, heard as a trembling quality on sustained notes.

### What is a good wow and flutter rating?

For playback equipment, lower is better, and good turntables and cassette decks are rated at small fractions of a percent. Differences at that level are hard to hear; cheap or worn machines can be audibly worse.

### Why is it called wow and flutter?

The names describe the sound: "wow" for the slow rise and fall in pitch, and "flutter" for the fast, wavering tremble.

### What is the difference between wow and flutter?

Rate, and nothing else. Wow is speed modulation below about 10 Hz, slow enough that you follow the pitch up and down as it happens. Flutter is above that, reaching into the low hundreds of hertz, fast enough that you hear texture instead of movement. Both come from the same fault, a transport that will not hold a steady speed.

### Is wow and flutter the same as vibrato?

The mechanism is identical, pitch modulation, and the difference is regularity and intent. Vibrato is one steady rate applied to one part by a player. Wow and flutter are several unrelated rates applied to everything at once by a machine that is failing. A single sine at 5 Hz reads as vibrato no matter what the plugin is called.

### How much wow and flutter is too much?

Read it in cents rather than guessing. Up to about 5 cents of movement, roughly 0.3% in speed, reads as warmth. Around 17 cents, which is 1%, it is clearly a wobble and still musical on pads and keys. Past 34 cents, or 2%, a listener hears a broken machine, which is a fine choice as long as you chose it.

### Why does my wow and flutter plugin sound like a chorus?

Two reasons, usually together. The mix control is letting dry signal through, so the delayed copy combs against it, and at 2 ms of delay the first notch sits at 250 Hz. And the modulation is a single sine, which the ear locks onto as a countable rate. Run fully wet and add a second motion at an unrelated speed.

### Can you remove wow and flutter from a recording?

Not cleanly. Restoration software can track a steady reference inside the recording and correct against it, and it works best on material carrying a strong continuous tone. On a finished mix the rate change is applied to every element and the noise floor together, so the correction follows whatever is loudest and drags everything else along with it.

### What causes wow and flutter on a turntable?

Anything that varies rotation or the groove's path under the stylus: a warped disc, an off-center spindle hole, a slipping or hardened belt, a motor that cogs, worn bearings. The periodic faults lock to the platter. At 33⅓ rpm one revolution takes 1.8 seconds, so an off-center pressing sways at 0.556 Hz; at 45 rpm the same fault sways at 0.75 Hz.

### Does a wow and flutter plugin add latency?

A little, and the deeper the wow the more of it. The effect reads from a delay line, so the buffer has to be at least as long as the slowest backward excursion the setting allows. The host compensates on playback; you will still feel the buffer while performing into the plugin. Reduce depth while tracking and raise it for the print.

### Should wow and flutter go on the master bus?

It is the honest position, because one transport moves everything on the tape together, and it is also the risky one, because everything includes the sub. Either exclude the low end from the effect path or hold the depth under about 0.3%. Mixes built around a tuned 808 are the ones that break first.

### Is wow and flutter measured in percent or cents?

Spec sheets use percent of speed and musicians think in cents. Convert with cents equals 1200 × log₂(1 + percent / 100). A 0.1% deck sits at 1.73 cents, a 1% setting is 17.23 cents, and 2% is 34.28 cents, just over a third of a semitone.

## What TRIPLE OG does

TRIPLE OG is our cassette tape simulation, and wow and flutter are only the start. **WOW FLUT** is continuous, bounded instability built from several motions at once. **AGE** runs from nought to sixty years, darker, noisier and less speed-stable as it climbs. **CATCH** is the machine failing on its own: it drags, jams and then recovers, and **SCRUB** and **SLAM** let you do it on purpose by hand. **TONE**, **HISS**, **DRIVE** and **MIX** shape the tape itself.

**WOW/FLUT at 0.** The transport holds speed.

**WOW/FLUT at 92.** Slow drift and fast warble at unrelated rates, not one sine.

One knob covers the composite, which is deliberate. The motions underneath run at rates that do not divide into each other, so turning the control up deepens the instability without ever handing you a countable vibrato. It moves the whole signal together, the way a single transport moves everything printed to one tape, and it moves the reverb tails and the hiss with it. **MIX** stays at 100 for that reason: a dry path would comb against the moving one, and a cassette has no dry path to offer.

Leave the home video in the car a little longer. It only gets better.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
