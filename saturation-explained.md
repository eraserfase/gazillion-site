# Saturation explained

> What saturation actually does: even and odd harmonics, why peaks round off, what differs between tape, tube and clipping, and where it belongs in a chain.

Source: https://gazillionindustries.com/saturation-explained/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Every piece of equipment that ever made a record sound good was, in some small way, failing to do its job properly. Tape could not keep up. Tubes ran out of headroom. Transformers rang. We spent fifty years perfecting equipment that does not do that, and then twenty years buying it back.

Saturation is distortion applied in small amounts, deliberately. Push a signal into a circuit that cannot reproduce it perfectly and the circuit adds harmonics: new frequencies at whole-number multiples of what went in. Those harmonics make a sound denser, brighter and easier to hear at a given level, and they round the peaks so the average level can come up. Every named flavor of saturation is a variation on which harmonics get added and how the peaks are rounded.

## The short version

- **What**: harmonic distortion, used in small amounts

- **Even harmonics**: octaves and fifths above: read as warm, full

- **Odd harmonics**: read as edge, grit, aggression

- **Side effect**: peaks round off, so average level can rise

- **Where**: after EQ, before or after compression, and rarely on everything

- **How much**: the amount where bypassing it sounds worse, not louder

**SOFT CLIP** as the out stage, BEEF at 62.

## The mechanism, once

A perfectly linear device returns the waveform you gave it, scaled. A nonlinear device returns something slightly different, and the difference is always made of harmonics. Feed in a 100 Hz sine and you get 200, 300, 400 Hz and upward, at levels that depend on the curve.

Which harmonics appear depends on the shape of the curve. A symmetric curve, one that treats positive and negative halves identically, produces mostly odd harmonics: 300, 500, 700. An asymmetric curve, one that squashes one half more than the other, adds even harmonics too: 200, 400, 600. Even harmonics are octaves and octave-plus-fifths above the fundamental, which is why they read as musical and warm. Odd harmonics sit at intervals that are less consonant, which is why they read as edge.

The second thing that happens is level. Rounding the tops of the waveform lowers the peak more than it lowers the average, so a saturated signal can be turned up further before it clips. That is why saturation and loudness are the same conversation.

Everything else in this article follows from those two sentences. The harmonics are why it changes the tone. The rounding is why it changes the loudness. A plugin that says WARMTH on the front is doing one, the other, or both, and no amount of naming changes which.

## The curve, in numbers

Descriptions of saturation get vague fast, so here is the same curve measured instead of described. A 1 kHz sine at full scale, a plain symmetric soft curve, and a drive figure that is simply the gain applied before the curve. Harmonic levels are relative to the fundamental that comes out the other side.

- **Drive 0 dB**: THD 6.7% — 3rd at -23.5 dB, 5th at -45.1 dB, 7th at -66.5 dB

- **Drive 3 dB**: THD 11.3% — 3rd at -19.0 dB, 5th at -35.9 dB, 7th at -52.6 dB

- **Drive 6 dB**: THD 17.3% — 3rd at -15.5 dB, 5th at -28.3 dB, 7th at -40.9 dB

- **Drive 12 dB**: THD 30.0% — 3rd at -11.3 dB, 5th at -18.9 dB, 7th at -25.8 dB

- **2nd harmonic**: absent at every one of those settings

Two things in that table are worth carrying around. The first is that the 2nd harmonic is not merely quiet, it is gone: a symmetric curve cannot produce even harmonics at all, whatever the drive. The second is the rate. Add 6 dB of drive and the 3rd harmonic climbs 8 dB relative to the fundamental, from -23.5 to -15.5. Harmonics grow faster than the signal that made them, which is why a saturator feels like it does nothing and then suddenly does everything.

Now bend the curve off-center, squashing the negative half at half the slope of the positive half, and run the same 6 dB of drive. The 2nd harmonic arrives at -19.6 dB and the 3rd sits at -19.3 dB, within a third of a decibel of each other. That single change of shape is the whole difference between a saturator people call warm and one people call gritty. More on the harmonics themselves at [harmonic distortion](https://gazillionindustries.com/harmonic-distortion/).

## Where the harmonics land

Harmonics are musical intervals, and the arithmetic is worth doing once. The 2nd harmonic is exactly an octave above the fundamental. The 3rd is an octave and a fifth, 1902 cents up, two cents from a tempered fifth. The 5th is two octaves and a major third, 386 cents above the two-octave mark and 14 cents flat of the tempered third. The 7th lands 969 cents above two octaves, 31 cents flat of a minor seventh. The 9th is a major second, 204 cents.

Read that list downward and the pattern is obvious. The low harmonics fall on consonances and the high odd ones fall between the notes. Push a curve until the 7th and 9th are audible and you have added a flat seventh and a second to every note in the part, in tune with nothing.

Where they land in the spectrum matters as much as where they land in the scale. A 50 Hz bass note through a curve gets content at 100, 150, 200, 250 Hz and up. Most phone speakers give back very little below a couple hundred hertz, and exactly where they fall off varies by model, so on a phone the 4th harmonic is the first thing the listener hears of that note at all. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

Run the same arithmetic on a hi-hat with energy at 3 kHz and it goes the other way. The 2nd sits at 6 kHz, the 3rd at 9 kHz, the 5th at 15 kHz, the 7th at 21 kHz, and the 8th would be at 24 kHz, which is above the 22.05 kHz Nyquist limit at a 44.1 kHz sample rate. It does not disappear. It folds, and that is the start of the aliasing problem further down this page.

## What it buys you in level, with a real number

Saturation gets sold on tone and bought for loudness. Here is the loudness, measured on a test signal built for this page: two seconds, a 100 Hz sine with eight short hits on top, peak normalized to exactly -3.00 dBFS. Before any processing the RMS is -22.60 dBFS, so the crest factor is 19.60 dB.

- **3 dB drive**: crest 18.06 dB — 1.54 dB louder at the same peak

- **6 dB drive**: crest 16.89 dB — 2.71 dB louder at the same peak

- **9 dB drive**: crest 15.18 dB — 4.42 dB louder at the same peak

Check the arithmetic and the mechanism falls out of it. 19.60 minus 16.89 is 2.71. The level you gain is exactly the crest factor you gave away, to the second decimal place, every time. That is the definition rather than a rule of thumb. Everything a saturator, clipper, compressor or limiter does to loudness is a transaction in crest factor, and [crest factor](https://gazillionindustries.com/crest-factor/) is the number that keeps the score.

The concession belongs right here. 4.42 dB from 9 dB of drive is a good trade on paper and a bad one on a drum loop, because the thing you spent was the first few milliseconds of every hit. Peaks are transients. See [what a transient is](https://gazillionindustries.com/what-is-a-transient/) and [transient shaper vs saturation](https://gazillionindustries.com/transient-shaper-vs-saturation/) for the other way to buy the same loudness.

## The types, and what actually differs

- **Tape:** gentle compression, softened transients, a low-frequency lift near the head bump, and pitch instability from the transport. See [tape vs tube](https://gazillionindustries.com/tape-vs-tube-saturation/).

- **Tube:** asymmetric, so even harmonics dominate, and it gets progressively denser rather than suddenly harsh.

- **Transformer:** low-frequency saturation and a little ring, which is why it flatters bass and kick.

- **Transistor and diode:** harder edges, more odd harmonics, closer to clipping.

- **Digital clipping:** the hardest version, shearing the peak flat. Useful and unforgiving. See [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

- **Bitcrushing and sample-rate reduction:** not saturation at all, but often used for the same reason. See [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

Read that list again and notice how little of it is the curve. Tape's transient softening is compression. Its head bump is EQ. Its pitch instability is a transport. Only one line in the first bullet is harmonics, and it is not the line most people are chasing when they reach for a tape plugin.

That is worth hearing rather than taking on trust. The same eleven seconds three times: the source, then the speed made unstable with nothing else touched, then a noise bed added with nothing else touched. Neither of the second two adds a single harmonic, and both of them are things people mean when they say a track sounds saturated.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Wow and flutter 65** — speed moves between 0.941 and 1.071 — https://gazillionindustries.com/tripleog/tog-wowflutter.m4a

- **Hiss 60, tone 45** — a noise bed, nothing else — https://gazillionindustries.com/tripleog/tog-hiss.m4a

Rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits.

If what you liked about a reference was the wobble or the noise floor, turning up a drive knob will never get you there. You will just arrive at the same place louder and harder. Work out which of the four mechanisms you actually want before you pick the plugin: [analog warmth](https://gazillionindustries.com/analog-warmth/) takes that question apart.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect: BEEF for weight and density, COOK for how bright the edge gets, and SOFT CLIP on by default.

**BEEF at 8.** The reference you A/B against.

## Where it goes

- Cut the problems with EQ first, so you are not saturating something you are about to remove.

- Put saturation after that, on the source or the bus, and set the input so it is working on the loud moments rather than everything.

- Decide whether you want it before or after compression: before, and the compressor reacts to a rounder signal; after, and the saturation reacts to a more consistent one.

- Match the level and bypass. Every time.

- On a mix bus, a decibel of drive is a lot. On a single drum, five is nothing.

For the practical versions of this: [how to use saturation in a mix](https://gazillionindustries.com/how-to-use-saturation/), [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/), and [parallel saturation](https://gazillionindustries.com/parallel-saturation/) for running it on a send.

## What it argues with in the chain

A saturator is not a self-contained box. It changes what every device after it receives, and several of those devices were set up while it was bypassed.

**The EQ in front of it.** A cut before the curve removes something from the harmonic generation as well as from the signal. A boost before the curve is a drive control for that band alone, which is the cheapest way to saturate only the part of a sound that needs it. This is why the order in the list above is an order and not a preference.

**The compressor.** Put the saturator first and the compressor sees a signal with 2 to 3 dB less crest factor, so at the same setting it does noticeably less work and the release stops being audible. Put the compressor first and the curve receives a steadier level, so the harmonic content holds the same density through a bar instead of blooming on the loud hits. Both are valid. They sound different, and the difference is largest on drums.

**The limiter at the end.** Saturation is gain reduction that happened earlier and cheaper. A bus that has given up 2.71 dB of crest factor arrives at the limiter needing 2.71 dB less of it, and a limiter doing less is a limiter you cannot hear. See [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) and [how to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/).

**Reverb and delay sends.** Saturate before the send and the harmonics go into the tail, which fills the reverb with upper-mid content and makes the space sound smaller and closer. Saturate after the send and the tail stays clean under a thickened dry signal. On a vocal, that choice is bigger than the choice of reverb.

**Everything about stereo.** When the two channels already differ, the curve generates different harmonics in each of them, so the content it adds is not correlated the way the source was. It can sound wider and then vanish on a mono fold. Check it before you commit: [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

**Your peak meter.** Rounding sample peaks does not round the peaks between the samples, and a saturator can lower the reading on a sample meter while raising true peak. If the file is going anywhere that encodes it, measure with a true peak meter. See [true peak](https://gazillionindustries.com/true-peak/) and [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

## Verify it in your own session

You can find out what any saturator does in about ten minutes, and the answer will be more useful than its manual. Do this once, on the plugin you reach for most.

- Make an empty track and put a test tone generator on it.

- Set the generator to a 1 kHz sine at -12 dBFS.

- Insert the saturator after it and a spectrum analyzer after that.

- Bypass the saturator and confirm one line at 1 kHz and nothing else above the noise floor.

- Engage it and raise the drive until a second line appears.

- Read the frequencies. Lines at 2, 4 and 6 kHz mean the curve is asymmetric. Lines only at 3, 5 and 7 kHz mean it is symmetric.

- Raise the input by 6 dB and read the 3 kHz line again. On the curve measured above it moves about 8 dB.

- Change the generator to a 5 kHz sine and raise the drive again.

- Watch for lines that move down the spectrum as you turn the drive up. Those are aliases.

- Replace the tone with your own loop and match the output to the bypassed level within 0.2 dB before you judge anything.

That last step is not optional and 0.2 dB is not a stylish number. Louder wins every comparison by default, at every frequency, for reasons that are built into hearing rather than into taste: [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/). An unmatched A/B tells you which one was louder and nothing else. See also [gain staging](https://gazillionindustries.com/gain-staging/).

## Stock plugins that do this

- **Ableton Live**: Saturator

- **FL Studio**: Fruity Blood Overdrive, Fruity Soft Clipper

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

Two host-level details are worth knowing whichever of those you use. The first is output compensation: some saturators drop the output as you add drive and some do not, and one that does not has handed you a volume control disguised as a tone control. Find out which yours is with the test above before you trust a single setting. The second is latency. Oversampling runs the curve at a multiple of the session rate, so it adds delay, and while your host will compensate for that on playback it is worth checking what it does to a live monitoring path before you track through one. Ableton specifics live at [saturation plugins for Ableton Live](https://gazillionindustries.com/saturation-plugins-for-ableton-live/).

## Where it costs you

Harmonics are content, and content occupies space. Saturate everything and the upper mids fill with material that was not in the recording, which is why a session with a saturator on every channel sounds crowded and tiring without any single track sounding wrong. Transients suffer too: rounding peaks is the mechanism, so the snap goes before anything else does.

And there is aliasing. Harmonics generated above the Nyquist frequency fold back down as inharmonic content, which sounds like harshness that gets worse the brighter the source. If a plugin offers oversampling, that is what it is for. See [what aliasing is](https://gazillionindustries.com/what-is-aliasing-in-audio/).

The fold is worth seeing as numbers, because it explains why aliasing sounds so unlike distortion. Take that 3 kHz source at a 44.1 kHz sample rate. The 8th harmonic wants to be at 24 kHz and comes back at 44100 minus 24000, which is 20100 Hz. The 9th wants 27 kHz and returns at 17100. The 10th returns at 14100, the 11th at 11100, the 12th at 8100, the 13th at 5100, the 14th at 2100. As the real series climbs in 3 kHz steps, the folded series descends in 3 kHz steps through everything you can hear, landing on nothing musical on the way down. Run the session at four times the rate inside the plugin and the fold point moves from 22.05 kHz to 88.2 kHz, so harmonics up to the 29th stay where they belong and the downsampling filter removes the rest before they can come back. That is the whole argument, and the whole cost: four times as many samples through the curve. See [oversampling](https://gazillionindustries.com/oversampling/).

The last cost is that it does not come off. Compression can be undone by not using it next time; harmonics printed into a bounce are part of the recording now, indistinguishable from content that was there at the source. Keep the saturator live for as long as your session can stand it, and when you do print, keep the dry file.

## The failure modes, and what each one sounds like

- **Stacked instances.** Every element is present and nothing is in front. Solo each track and they all sound good; play three minutes on earbuds and you want it to stop. Ten light saturators are worse than one considered one.

- **Lost snap.** The kick has weight and no click, the snare has body and no crack, and the whole track reads slower at the same tempo. Back the drive off until the click returns, then leave it there.

- **Aliasing.** A fizz that sits on top of the brightest sources and gets worse as they get brighter, with a ringing quality on hi-hats that does not follow the pitch of anything. Turn oversampling on and it goes away, which is also the test for it.

- **Too much low end into the curve.** The bass modulates everything above it, so the vocal seems to duck on every kick with no compressor anywhere in the chain. High-pass into the saturator, or saturate the bass separately.

- **Harshness in the 2 to 5 kHz range.** Ear fatigue in ten minutes, and it survives an EQ cut because the content is being regenerated after the cut. [Why a mix sounds harsh](https://gazillionindustries.com/why-is-my-mix-harsh/) has the rest.

- **The loudness illusion.** You chose the setting because it sounded better and it was 2 dB louder. Every failure above is easier to hear once the levels match. (This is the one that gets everybody, including the people who write about it.)

## Questions people ask

### What is the purpose of saturation?

To add harmonic content that makes a sound feel denser and more present, and to round peaks so the average level can come up. It is a way of making something louder and more audible without simply turning it up.

### Is overdrive the same as saturation?

Same mechanism, different amount. Saturation is the gentle end of the range, overdrive is further along, and distortion is further still. The words describe degrees, not different processes.

### Should you put saturation on everything?

No. Each instance adds harmonics that stack across the mix, so ten light saturators sound worse together than one considered one. Choose the two or three elements that need it.

### Where does saturation go in a vocal chain?

Usually after subtractive EQ and before or alongside compression, with the strongest version on a parallel send so the dry vocal keeps its detail. Put it last if what you want is the whole chain glued rather than the voice thickened.

### What does saturation sound like?

On its own, very little. Level-matched and bypassed in and out, it sounds like the source moving forward slightly and getting slightly smaller in dynamic range. You hear it most clearly in the moment you switch it off, which is the only reliable way to judge it.

### How much saturation is too much?

The point where you can name the effect. If a listener would say the vocal sounds distorted rather than the vocal sounds present, you are past it. On a mix bus that is often less than a decibel of drive; on a single drum inside a busy loop it can be five or more.

### Does saturation make things louder?

Yes, and the amount is measurable. It lowers the crest factor, and whatever crest factor you lose you can add back as gain at the same peak level. On the test signal above, 6 dB of drive bought 2.71 dB.

### What is the difference between saturation and compression?

Both lower crest factor. Compression does it with a gain change that takes time, so it has an attack and a release and it can breathe. Saturation does it instantly, sample by sample, with no time constant at all, and it adds harmonics as a side effect. That is why saturation does not pump and compression does.

### What is even and odd harmonic saturation?

It describes the symmetry of the curve. A curve that treats the positive and negative halves of the waveform identically produces only odd harmonics. A curve that squashes one half harder produces even ones as well. Even harmonics fall on octaves and thirds, odd ones on fifths, sevenths and seconds, which is most of why the two are described so differently.

### Should saturation go before or after EQ?

Subtractive EQ before, corrective EQ after. Cut a resonance before the curve and the curve never makes harmonics from it; cut it after and you are removing something the saturator will keep regenerating.

### Why does my saturation sound harsh?

Three usual causes, in order of likelihood: too much low-frequency energy going into the curve, aliasing that oversampling would fix, and simply too much drive judged at an unmatched level. Test them in that order.

### Does saturation add noise?

A curve adds no noise of its own. Noise in a saturation plugin is a separate generator the maker chose to include, and it is switchable in most of them. Two different things often sold in one box.

### Is analog saturation better than digital?

The question hides a wrong assumption. Both add harmonics according to a transfer curve, and the audible differences come from which harmonics, how much level-dependent compression comes with them, and whether the digital one aliases. A digital curve running oversampled has no particular disadvantage; a digital curve running at 44.1 kHz on a bright source has an obvious one.

### Do I need a saturation plugin if I have a distortion plugin?

Not necessarily. A distortion plugin with a usable drive range at the bottom of its travel and an output control is a saturator. What you need is fine control at low amounts, output compensation so you can compare honestly, and ideally oversampling. [Best saturation plugins](https://gazillionindustries.com/best-saturation-plugins/) covers the choosing.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is the main event: more weight, more density, more loudness and more attitude as you turn it up. **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge. **JUICE** sets the level going in. **SOFT CLIP** opens switched on and takes care of the initial gain staging, and **LIMIT** is the other choice when you want the output peaks held.

Mapped onto this article: JUICE is the control that decides how far into the curve the signal goes, BEEF is how hard the curve bends, COOK is which end of the harmonic series you end up hearing, and the out stage is where the rounded peaks get held. It runs on Mac and Windows as AU, VST3 and standalone, and it costs $19.

Fifty years spent removing the failure, twenty spent buying it back. At least now you know which failure you are buying.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
