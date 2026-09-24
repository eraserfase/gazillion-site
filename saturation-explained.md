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

## The types, and what actually differs

- **Tape:** gentle compression, softened transients, a low-frequency lift near the head bump, and pitch instability from the transport. See [tape vs tube](https://gazillionindustries.com/tape-vs-tube-saturation/).

- **Tube:** asymmetric, so even harmonics dominate, and it gets progressively denser rather than suddenly harsh.

- **Transformer:** low-frequency saturation and a little ring, which is why it flatters bass and kick.

- **Transistor and diode:** harder edges, more odd harmonics, closer to clipping.

- **Digital clipping:** the hardest version, shearing the peak flat. Useful and unforgiving. See [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

- **Bitcrushing and sample-rate reduction:** not saturation at all, but often used for the same reason. See [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect: BEEF for weight and density, COOK for how bright the edge gets, and SOFT CLIP on by default.

**BEEF at 8.** The reference you A/B against.

## Where it goes

- Cut the problems with EQ first, so you are not saturating something you are about to remove.

- Put saturation after that, on the source or the bus, and set the input so it is working on the loud moments rather than everything.

- Decide whether you want it before or after compression: before, and the compressor reacts to a rounder signal; after, and the saturation reacts to a more consistent one.

- Match the level and bypass. Every time.

- On a mix bus, a decibel of drive is a lot. On a single drum, five is nothing.

For the practical versions of this: [how to use saturation in a mix](https://gazillionindustries.com/how-to-use-saturation/), [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/), and [parallel saturation](https://gazillionindustries.com/parallel-saturation/) for running it on a send.

## Where it costs you

Harmonics are content, and content occupies space. Saturate everything and the upper mids fill with material that was not in the recording, which is why a session with a saturator on every channel sounds crowded and tiring without any single track sounding wrong. Transients suffer too: rounding peaks is the mechanism, so the snap goes before anything else does.

And there is aliasing. Harmonics generated above the Nyquist frequency fold back down as inharmonic content, which sounds like harshness that gets worse the brighter the source. If a plugin offers oversampling, that is what it is for. See [what aliasing is](https://gazillionindustries.com/what-is-aliasing-in-audio/).

## Questions people ask

### What is the purpose of saturation?

To add harmonic content that makes a sound feel denser and more present, and to round peaks so the average level can come up. It is a way of making something louder and more audible without simply turning it up.

### Is overdrive the same as saturation?

Same mechanism, different amount. Saturation is the gentle end of the range, overdrive is further along, and distortion is further still. The words describe degrees, not different processes.

### Should you put saturation on everything?

No. Each instance adds harmonics that stack across the mix, so ten light saturators sound worse together than one considered one. Choose the two or three elements that need it.

### Where does saturation go in a vocal chain?

Usually after subtractive EQ and before or alongside compression, with the strongest version on a parallel send so the dry vocal keeps its detail. Put it last if what you want is the whole chain glued rather than the voice thickened.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. It adds body, squeezes some space out of the peaks, and brings out harmonics that help a sound feel bigger. **BEEF** is the main event: more weight, more density, more loudness and more attitude as you turn it up. **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge. **JUICE** sets the level going in. **SOFT CLIP** opens switched on and takes care of the initial gain staging, and **LIMIT** is the other choice when you want the output peaks held.

Fifty years spent removing the failure, twenty spent buying it back. At least now you know which failure you are buying.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
