# Headroom in mixing

> How much headroom to leave on a mix bus, why the usual technical explanation no longer applies in a modern DAW, and the reason that still holds.

Source: https://gazillionindustries.com/headroom-in-mixing/  
Published 2026-09-20, updated 2026-09-25. By Gazillion Industries, who make BEEFY.

---

Somebody told you to leave six decibels of headroom and you have been doing it ever since without anyone explaining why. The reason is real, but it is not the one usually given, and in a modern DAW half the original argument no longer applies.

Headroom is the space between the loudest peak in your mix and the ceiling. The practical advice is to aim for peaks around −6 dBFS on the mix bus before you send anything to mastering. Your DAW will almost certainly not distort without it: internally it has room to spare. What matters is that every stage after you needs somewhere to go, and a mix that arrives already touching the ceiling gives the next person nothing to work with.

## The short version

- **What**: the gap between your peaks and the ceiling

- **Target**: around −6 dBFS peak on the mix bus

- **Real reason**: the mastering stage needs somewhere to go

- **Not the reason**: internal DAW distortion, which is rare now

- **Still true for**: converters, fixed-point stages, and analog gear

- **Cost of ignoring**: a mix that can only be made quieter

**BEEF at 96.** Past where most settings want to live.

## Why the old advice existed

On tape and on early digital systems, running too hot really did degrade the signal: tape saturated and fixed-point digital clipped hard at a fixed ceiling with nothing above it. Leaving room was self-defense.

Most modern DAWs mix internally in floating point, where the usable range is so large that a channel reading well above zero is not actually damaged: pull the fader down and it comes back intact. That is why people who insist a hot mix bus is destroying your audio are usually describing a machine nobody has used for twenty years.

What has not changed: converters clip at a hard ceiling, some plugins model fixed-point or analog stages internally and will distort when driven, and the final file has an absolute limit. So headroom still matters, just at fewer points than it used to.

## The reason that still holds

A mix bounced at −0.1 dBFS has already spent everything. Whoever masters it, including you tomorrow, has no room to add a compressor, no room to drive a saturator, and no option but to turn it down before doing anything at all. Six decibels of headroom works as a courtesy to the next stage rather than as a technical requirement, and most of the time the next stage is you.

There is a second, subtler benefit: a mix that peaks at −6 dBFS is one you balanced by fader rather than by pushing everything up against a ceiling, which tends to produce better relative levels in the first place.

[BEEFY](https://gazillionindustries.com/beefy.html) has JUICE for exactly this reason: it sets the level going in, so you can feed it harder or back it off independently of how hot the channel happens to be.

**LIMIT** instead, everything else identical.

## Six decibels, in numbers

Six is a specific amount of room and it helps to know exactly how much. Amplitude in decibels is 20 log₁₀ of the ratio, so 20 log₁₀(2) = 6.0206 dB. A peak sitting 6 dB below full scale is at 50.1% of full scale in amplitude and a quarter of the power, since 10 log₁₀(4) comes to the same 6.02 dB. Half the swing your converter can produce is parked above your loudest hit, unused. That unused half is workspace for the next stage rather than a safety margin against damage.

What it costs you in resolution is nothing you can measure. In a 24-bit file the smallest step sits 20 log₁₀(223) = 138.5 dB below full scale, and the theoretical signal-to-noise figure for a full-scale sine at 24 bits is 6.02 × 24 + 1.76 = 146.2 dB. Bounce with peaks at −6 dBFS and there are still 132.5 dB between your loudest moment and the quantization floor.

Nothing in the room can use that. A quiet home studio sits somewhere around 30 dB SPL of background noise and a loud playback peak is around 100 dB SPL, so the physical world gives you about 70 dB to play with. You could bounce 68 dB down — a mix peaking at −68 dBFS, which looks broken on a meter — and the file would still hold 70.5 dB of range above its own noise. Six is free.

Sixteen bits is the case where the arithmetic bites. There the smallest step sits 20 log₁₀(215) = 90.3 dB below full scale, so a bounce 20 dB quiet leaves 70 dB, which is the point where you start hearing the floor on long fades. That is an argument for working at 24-bit or in float, and for [dithering](https://gazillionindustries.com/dithering/) when you finally deliver 16.

## What floating point actually gives you

Single-precision floating point stores a 24-bit mantissa and an 8-bit exponent, and the exponent is the part that buys the headroom. The largest normal value is close to 2128, which is 128 × 6.0206 = 770.6 dB above unity, and the smallest normal value sits 758.6 dB below it. A channel reading +18 dBFS in a float mixer is about 750 dB away from the nearest wall.

The mantissa is the part that decides quality, and it does not care where the signal sits. Precision is relative: 24 significant bits at every exponent, so the same waveform at +30 dBFS and at −90 dBFS is stored with the same accuracy. That is the whole reason pulling the master fader down recovers an over-scale bus intact, and the reason the same move on tape or in a fixed-point mixer did not.

You can prove it in thirty seconds rather than take it on faith. Put a gain plugin on the mix bus set to +40 dB, a second gain plugin straight after it set to −40 dB, and play. If your mixer is floating point the signal comes back sounding exactly as it did, with the intermediate meter reading absurd numbers. Anywhere that test produces crunch, you have found a stage with a real ceiling in it.

## Why the mix bus goes hot on its own

Nobody sets out to bury the master meter. Levels do it by themselves, and the arithmetic says how fast. Take twenty-four tracks, each averaging −20 dBFS RMS, none of them related to each other. Uncorrelated sources sum in power, so the total is −20 + 10 log₁₀(24) = −20 + 13.8 = −6.2 dBFS RMS. Give that arrangement a [crest factor](https://gazillionindustries.com/crest-factor/) of 12 dB, which is ordinary for a full mix, and the peaks land at +5.8 dBFS.

Nothing went wrong there. Twenty-four sensible channels put the mix bus 11.8 dB above where you want it, and the answer is one fader move of −11.8 dB, not thirty trim adjustments that destroy the balance you spent the afternoon on.

Correlated material climbs faster. Two copies of the same signal in phase sum at 20 log₁₀(2) = 6.02 dB rather than 3.01, and three copies at 20 log₁₀(3) = 9.54 dB. Stack three kicks in phase and you have added nearly 10 dB to the loudest 30 ms of every bar while the average barely moves. [Layering kicks](https://gazillionindustries.com/how-to-layer-kicks/) is where most surprise peaks come from, and [phase cancellation](https://gazillionindustries.com/phase-cancellation/) is why the sum is sometimes smaller than either part instead.

## Where the ceiling is genuinely hard

Float saves you almost everywhere, so it is worth knowing the handful of places it does not.

- **The converter**: a DAC has a fixed number range and stops dead at the top of it; monitoring can clip while the file is clean

- **The delivered file**: 16- and 24-bit integer formats have no values above full scale, so anything over is flattened on write

- **Fixed-point and analog-style stages**: inside plugins that have a ceiling wherever the designer put one, audible as crunch on the loudest hits only

- **Calibrated analog levels**: with 0 dBFS calibrated to +24 dBu, −18 dBFS is +6 dBu and −20 dBFS is +4 dBu — gear designed for a nominal +4 dBu is at its design level when your meter says −20

- **Sample rate conversion and encoding**: both can reconstruct a waveform higher than the samples you wrote; see [true peak](https://gazillionindustries.com/true-peak/)

That last row is the one most likely to catch a finished record. A file measuring exactly 0.0 dBFS on a sample-peak meter can genuinely exceed zero on playback, because the reconstructed curve passes between the samples. A ceiling of −1 dBTP removes the problem.

**SOFT CLIP as the out stage.** Rounding a peak is one way to buy room; holding a ceiling over it is the other.

## How to actually do it

- Set levels with the faders, not by boosting with EQ and plugins until everything is loud.

- If the mix bus is hot, pull the master fader down rather than trimming thirty channels.

- Check the peak meter on the mix bus and aim for the loudest section to reach around −6 dBFS.

- Take any limiter or loudness plugin off the mix bus before bouncing for mastering.

- Bounce at 24-bit or higher so the lower level costs you nothing at all.

- If you are mastering it yourself, still do this, and then do the loudness stage deliberately.

- Measure the loudest eight bars, not the intro, and use a peak-hold meter so a single hit cannot slip past while you are reading.

- Leave the master fader wherever the arithmetic puts it; there is no credit for 0.0.

- Deal with a plugin that is clipping at the plugin, by lowering its own input, rather than at the master fader after it.

- Write the peak value into the bounce filename, so tomorrow you know what arrived without opening it.

## How to check it in your own session

Every claim above can be tested on the project already open in front of you, and testing takes less time than arguing about it online.

- Reset the peak-hold on the mix bus meter, play the loudest section start to finish, and read the held number. That is your actual peak, not the one you remember.

- Run the +40 / −40 gain test described above to find out whether your summing is floating point.

- Bounce the mix twice, once as it stands and once with the master fader 6 dB lower. Import both, raise the quiet one by exactly 6 dB, flip the polarity of one, and play them together. If the result is silence, headroom cost you nothing.

- Find out whether your master bus inserts come before or after the fader: put a heavily driven plugin on the mix bus, then pull the fader 12 dB. If the distortion changes, the insert is before the fader. If it does not, the fader is not protecting that plugin at all.

- Bounce once at 32-bit float. Anything that went over is still in the file and can be recovered by lowering the level after the fact, which makes it a safe emergency copy.

- Open the bounced file in an editor and look at the sample peak and the true peak side by side. A gap of 0.3 to 1.5 dB on limited material is normal, and it is the gap that decides your final ceiling.

## Where headroom sits in the chain

Headroom works as a running total rather than a single setting, and it gets spent at five points along the way. Channel gain feeds a group bus, the group feeds the mix bus, the mix bus feeds the master chain, the master chain feeds the converter or the file. Each stage adds level or takes some away, and only the last two have a wall in them.

The order of processing decides how much room each stage needs. Saturation and clipping reduce peaks and raise average level, so a stage that follows them sees a smaller crest and needs less headroom. A compressor with a slow attack lets the transient through untouched and can leave the peak exactly where it was while raising everything around it, which eats room. Put the peak control before the level control and the numbers stay tidy; [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) covers the specific case, and [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) covers the general one.

The per-channel version of all of this is [gain staging](https://gazillionindustries.com/gain-staging/), and it is a genuinely different problem: on the way in, a quiet signal is fighting analog preamp noise, so recording at −40 dBFS costs you something real. On the way out, inside the box, a quiet bus costs you nothing at all. Do not carry the input rule into the mix bus.

## Headroom and the loudness you are aiming at

The two numbers are related by one subtraction. Peak-to-loudness is the true peak minus the integrated loudness, so a master reading −1 dBTP and −14 LUFS has 13 dB of it, and a mix peaking at −6 dBFS with an integrated loudness of −18 LUFS has 12 dB. That second pair is a healthy place for a mix to arrive: loud enough to hear what it will become, 12 dB of peak left for the master stage to spend.

Work out what the master stage then has to find. Going from −18 LUFS to a −14 LUFS delivery is 4 dB of loudness, and going from −6 dBTP to −1 dBTP is 5 dB of ceiling. Those are small, comfortable moves. Hand over a mix already at −0.1 dBFS and −8 LUFS and the same target requires taking 6 dB away, which is the sound of a record getting quieter and flatter for no gain. [How loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/) works through the delivery end.

Streaming normalization is the reason none of this costs you competitive loudness. Playback is level-matched, so the mix that arrives with room and gets mastered properly plays back next to everything else at the same loudness, with its transients intact.

## Failure modes and what each one sounds like

Headroom problems have distinct symptoms, and naming the sound saves you an hour of turning knobs at random.

- **Crunch only on the biggest hits**: a stage with a hard ceiling somewhere in the chain; pull its input down 6 dB and see whether the crunch goes with it

- **Distortion in the room, clean in the file**: the converter or the monitor path is clipping, not the mix; bounce and look at the file before touching anything

- **Mix sounds fine, master comes back small**: you arrived with nothing to spend, so the only available move was downward

- **Grit on long fades and reverb tails**: a quiet bounce delivered at 16-bit without [dither](https://gazillionindustries.com/dithering/)

- **Meter says −6, file reads over**: the meter is reading RMS or is placed before the fader; check [true peak](https://gazillionindustries.com/true-peak/) on the bounced file

- **Quiet version sounds worse**: almost always [loudness bias](https://gazillionindustries.com/fletcher-munson/); match levels and listen again

- **Peaks over with every channel under**: correlated material summing; find the layered low end before you touch the master

- **Pulling the master down changes the tone**: there is a level-dependent plugin after the fader, or the fader is post-insert

## What actually differs from one DAW to the next

Less than the arguments suggest, and the differences that exist are worth ten minutes of checking rather than reading about. Three of them matter.

Where the meter is tapped. Some mix bus meters read after the fader and some read before it, so the same session shows two different numbers depending on the program. Move the master fader 6 dB and watch: if the reading follows, the meter is post-fader and you can trust it as a picture of what leaves. If it does not move, that meter is telling you about the sum, not the output.

Where the inserts sit. On some master and mix bus channels the inserts come after the fader, which means pulling the fader does nothing to protect a plugin on that bus. The driven-plugin test above settles it in one pass, and the answer changes where you put your trim.

What the bounce dialog does on its own. Bit depth, dither and any normalize option are all decided there, and a normalize step will undo the headroom you just left. Turn normalize off, set 24-bit or 32-bit float, and leave dither off until the 16-bit delivery.

## The monitor knob, not the fader

The hardest part of leaving headroom is that the mix gets quieter and quieter mixes sound worse. That is an ear, not a mix. Equal-loudness curves mean the low end and the top both recede as level drops, so a mix pulled down 6 dB will genuinely sound thinner until you turn the monitors up to compensate.

Turn up the monitor control and leave the master fader where the numbers want it. If the comparison matters, match levels before judging: a 1 dB advantage is enough to win a blind test on its own, and 0.1 dB is a change in amplitude of 1.2%, which is below the point of caring. [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/) is the mechanism, and a [VU meter](https://gazillionindustries.com/vu-meter/) is a cheap way to keep an average in view while the peak meter shouts.

## Where it costs you

Chasing headroom for its own sake is a waste of time, and obsessing over gain staging every channel to some magic number is a habit borrowed from equipment nobody in a bedroom is using. A channel peaking at −3 dBFS inside a floating-point mixer is not a problem to solve.

The genuine cost of too much headroom is only that you have to turn it up later, which is free. The cost of too little is that the record can only get quieter from here. [Gain staging](https://gazillionindustries.com/gain-staging/) covers the per-channel version of this.

## Questions people ask

### What does headroom mean in music?

The space between the loudest part of your signal and the maximum the system can handle, measured in decibels.

### How much headroom should I leave?

Around 6 dB of peak headroom on the mix bus is the common convention and works well. Anywhere between 3 and 10 is defensible; the exact number matters much less than not running into the ceiling.

### Does more headroom mean better audio quality?

Not by itself. In a floating-point mixer, more headroom does not make the audio cleaner. What it buys is room for later stages, which usually produces a better final result for a different reason.

### Is there such a thing as too much headroom?

Practically, no, as long as you are working at 24-bit or in floating point. A mix bounced 20 dB down simply gets turned up. At 16-bit it would start to matter, which is a good reason not to work at 16-bit.

### Is −6 dB headroom enough for mastering?

Yes, comfortably. A mix arriving at −6 dBFS peak with roughly 12 dB of peak-to-loudness gives a mastering stage 5 dB of ceiling and 4 dB of loudness to find before it hits a −1 dBTP, −14 LUFS delivery. Neither of those is a strain.

### Is −3 dBFS enough headroom?

It is workable. Three decibels is an amplitude ratio of 1.41, so there is still real room above the peaks. Six is the convention because it survives one careless boost later without anybody having to ask you for a new bounce.

### Should I leave headroom on every channel?

No. Inside a floating-point mixer a channel at −2 dBFS is not damaged and a channel at −30 dBFS is not cleaner. The only reasons to trim a channel are to stop a plugin with an internal ceiling from clipping, and to keep the faders in a range where they are easy to ride.

### Why does my mix clip when no individual channel is clipping?

Because the channels add up. Twenty-four uncorrelated tracks at −20 dBFS RMS sum to −20 + 10 log₁₀(24) = −6.2 dBFS RMS, and ordinary peaks on top of that land above zero. Pull the master, not the channels.

### Should I remove the limiter before sending a mix to mastering?

Yes, and bounce a second version with it on if you want the mastering engineer to hear what you were aiming at. A limited mix bus gives them a decision already made and no way to undo it.

### Should I bounce at 32-bit float?

It is a good safety copy, because anything that went over full scale is still recoverable in the file. For delivery to a person or a service, send 24-bit, which every stage handles without comment.

### How do I add headroom to a finished mix?

Lower the master fader, or put a gain trim at the very end of the chain and set it negative. In a floating-point project both are exact and lossless. If the mix has a limiter on it, raise the limiter's ceiling or take it off rather than turning the whole thing down underneath it.

### Does leaving headroom make my track quieter on streaming?

No. Playback is loudness-normalized, so the ceiling you bounced at has no bearing on how loud it plays next to anything else. What the headroom buys is a master stage that had options.

### What is the difference between headroom and dynamic range?

Headroom is the distance from your loudest peak up to the ceiling. Dynamic range is the distance from your loudest peak down to the quietest thing you can still hear over the noise floor. One is space above, the other is space below.

### Does headroom matter if I master my own tracks?

It matters more, because you are the next stage. Bounce the mix, leave it overnight, and start the master on a file that still has room in it rather than pushing the loudness inside the mix session where every fader move changes it again.

### Why does my peak meter read differently from the bounced file?

Usually the meter is tapped before the fader or before the last insert, or it is reading RMS instead of peak. Sometimes it is a sample-peak reading against a true-peak one, which will differ by a few tenths of a decibel on limited material.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. **JUICE** sets the level going in, so you can feed it a little harder or back things off without touching your channel gain structure. **BEEF** brings weight, density and loudness; **COOK** changes the color and bite. **SOFT CLIP** opens switched on and takes care of the initial gain staging, helping the clipping find the sound without making you hunt for a magic input level.

The two output switches are the part that touches this article. **SOFT CLIP** rounds the loudest parts, which buys room by making the tallest peak shorter. **LIMIT** keeps the output peaks in check instead, which buys room by holding a ceiling over them. They are separate choices, and both can be off if you would rather push it yourself. The input and output clip lights are there so you can see which end of the plugin is running out of room before you can hear it.

Six decibels, for the benefit of somebody downstream. Usually a slightly better-rested version of you.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
