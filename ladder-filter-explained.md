# Ladder filter explained

> What a ladder filter is stage by stage, why a 4 pole and a 24 dB filter are the same thing, and the low end resonance takes away.

Source: https://gazillionindustries.com/ladder-filter-explained/  
Published 2026-09-26, updated 2026-09-26. By Gazillion Industries, who make JOURNEYMAN.

---

The bass sat right in the headphones and went missing in the car. You pull the resonance back to work out what changed, and the weight walks straight back in: same note, same cutoff, twice the bottom.

A ladder filter is a low-pass built from identical one-pole stages in series, with the output of the last stage fed back to the input. Each stage takes 6 dB per octave off everything above the corner, so four stages give you the 24 dB filter that people mean when they say a 4 pole filter. The feedback is the resonance control, and on this design that same feedback pulls level out of everything below the corner. The trade is the sound.

## The short version

- **Ladder**: one-pole low-pass stages in series, with feedback around the whole chain

- **One pole**: 6 dB per octave past the corner, and up to 90 degrees of phase shift

- **4 pole**: four stages, so 24 dB per octave: one octave above the corner is 24 dB down

- **3 pole**: 18 dB per octave, and the resonant peak sits above the marked cutoff

- **Resonance**: the feedback amount; it lifts the corner and takes the low end with it

- **Our answer**: [JOURNEYMAN](https://gazillionindustries.com/journeyman.html), $59, Mac and Windows: two ladder filters, each switchable between 3 and 4 pole

## What is a ladder filter, stage by stage

Start with the simplest filter there is. A single resistor and capacitor make a one-pole low-pass: above a corner frequency the level falls away at 6 dB per octave, gently enough that you would call it a tone control rather than a filter. Put a second identical stage after the first and the rolloff adds up. Put four in a row and you have a ladder.

Two details turn that chain into an instrument. The first is that one control moves every stage at once, so the four corners stay locked together and the whole run of stages behaves like a single filter with a single cutoff. The second is the feedback path: some of what comes out of the last stage is sent back, inverted, to the input of the first. That returning signal is what the resonance knob sets.

The name is a picture of the schematic. The gain stages sit in matched pairs, one above the next, with the rungs running between them and the control current climbing the whole structure from the bottom. Draw it out and it looks like a ladder standing up on the page. The word describes the layout of the circuit, nothing about how it sounds, which is why two ladders can be built the same way and behave differently once you push them.

What you get from that layout is a filter with weight in one place. Everything above the corner is handled by the same four stages, and everything the feedback does happens around all four of them at once. Compare that with a state-variable design, where the low-pass, high-pass and band-pass outputs are all available at the same time from one core. A ladder gives you one answer and commits to it.

## Filter poles explained, and what each one costs

A pole is one stage of falling response. That is the whole definition you need in a session. Each pole in a low-pass takes 6 dB per octave off the material above the corner and adds up to 90 degrees of phase shift on the way past. The 6 comes out of the arithmetic: doubling the frequency halves the voltage, and 20 times the log of a half is 6.02 dB, which everybody rounds down.

The counting is simple after that. One pole is 6 dB per octave, two poles are 12, three poles are 18, four poles are 24. A 12 dB filter and a 2 pole filter are two names for the same steepness, and so are a 24 dB filter and a 4 pole filter. When a synth panel offers you a POLES switch it is offering you steepness, in 6 dB steps, and nothing else.

Where this gets useful is when you remember that the source has a slope of its own. A sawtooth wave loses 6 dB per octave as the harmonics climb, because harmonic number *n* arrives at one over *n* of the fundamental's amplitude. A square wave does the same over its odd harmonics. A triangle falls at 12 dB per octave, which is why it sounds soft before any filter touches it.

So the slopes stack. A sawtooth through a 4 pole low-pass measures 30 dB per octave above the corner, counting the wave's own 6 and the filter's 24. The same sawtooth through 3 poles measures 24. A triangle through 4 poles measures 36 and disappears almost the moment you close the filter, which is the real reason triangle-plus-heavy-filtering makes such a dull patch. Pick the wave first, then pick the poles.

## Why a 4 pole filter and a 24 dB filter are the same thing

Take a real note and do the arithmetic. Play A1 at 55 Hz on a sawtooth and set the cutoff to 220 Hz, which is the fourth harmonic. The eighth harmonic sits at 440 Hz, exactly one octave above the corner. Through a 24 dB filter that harmonic comes out 24 dB down. Through an 18 dB filter it comes out 18 dB down. Six decibels, on one harmonic, from one switch.

Keep going up and the gap widens. Two octaves above the corner, at 880 Hz, the 4 pole is 48 dB down and the 3 pole is 36 dB down: a 12 dB difference on the part of the spectrum that carries bite. That is the whole audible story of poles. A 3 pole setting leaves a thin band of upper harmonics alive above the corner, and those survivors are what let a filtered bass still read on a small speaker.

The image, once, and then back to numbers. Four poles closes the door; three poles closes it and leaves the transom open. Neither one is better. A 24 dB filter is the right call when you want the cutoff to be an event you can hear moving, and an 18 dB filter is the right call when you want the note to keep its edge while the filter still does real work.

There is one more thing the switch changes, and it surprises people. Poles set the phase as well as the level. Four stages each turn the signal 45 degrees late at the corner, which adds to 180 degrees; three stages add to 135. If you are layering a filtered synth against an unfiltered one at the same pitch, changing the pole count moves the two against each other in time and the combined low end changes with it. Check the sum in mono before you decide which one you liked.

## Resonance on a ladder, and the low end it takes

Resonance is the amount of output sent back around the chain. It is the one control where ladders behave distinctly, and it is worth understanding rather than wiggling. At the corner frequency, each of four one-pole stages is 45 degrees behind, and 45 times four is 180. Send the output back inverted and it lines up at exactly that frequency, reinforcing itself. The peak therefore lands on the cutoff, which is why the resonance on a 4 pole ladder tracks the knob so neatly.

Push the feedback far enough and the loop sustains with no input. On paper the ideal four-stage ladder needs a loop gain of 4 to get there, and the tone it produces is a sine at the cutoff, playable from the cutoff control. Every synth with a ladder in it has a setting where the filter stops being a filter and starts being an oscillator.

Now the cost, which is the part that sends people to the forums. The feedback subtracts from the input as well as adding at the corner, so the passband below the cutoff drops as resonance climbs. In the idealized circuit the level under the corner falls to one over one-plus-the-loop-gain. At the gain that makes it self-oscillate, that is one fifth of what went in: 13.98 dB of low end gone, in exchange for the peak you wanted. Nobody tells you this on the panel.

That is the car and the headphones from the top of this page. A resonant bass with the peak sitting at 300 Hz reads as huge on a system that reproduces 40 Hz, and reads as thin on anything that starts at 200. Bounce it and check it the short way, on the speaker most of your listeners actually use, which is covered in [making bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/).

Three poles changes the arithmetic again. With three stages you only reach 180 degrees above the marked corner, at the square root of three times the cutoff, about four fifths of an octave up, and the loop needs a gain of 8 rather than 4 to sustain. So a 3 pole ladder resonates slightly sharp of where the knob says, and it takes more feedback to get there. If you have ever switched pole counts and thought the resonance moved, it did.

[JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is our monosynth, $59 for Mac and Windows, and it puts two ladder filters under one CUTOFF with a POLES selector on each one, so you can hold 3 pole on one side and 4 pole on the other and hear the difference in the same note. There's a demo on the page.

## Two ladder filters, and what SPACING does

One ladder gives you one brightness. Two of them, offset from each other, give you two brightnesses in the same note, and that is a different instrument. The control that sets the offset is usually called spacing, and it is the difference between a monosynth that sounds like a filter sweep and one that sounds like a voice.

In the dual low-pass arrangement you get one ladder per channel with the two corners pulled apart. In stereo that reads as width, because the left and right sides of the same note are losing different amounts of top. In mono it collapses into a shallow formant, a lift and a dip that stay in one place while the note moves under them. Both are useful and they are not the same effect, so sum to mono and listen before you commit.

Wire the same pair in series instead, high-pass into low-pass, and the spacing control sets bandwidth. Wide spacing is a broad band with body; narrow spacing is a resonant slot you can sweep, which is the most direct way to get a vocal quality out of an instrument with no formant section. Close it far enough with resonance up and the two corners start fighting over the same narrow band, which is the good kind of trouble.

The general background on corners and peaks, for either arrangement, is in [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/), and the timing that keeps a moving cutoff from sounding like every other build is in [how to make a filter sweep](https://gazillionindustries.com/how-to-make-a-filter-sweep/).

## What a ladder filter is good at

Bass, first and by a distance. Run one oscillator low, detune a second a few cents against it, set a 4 pole low-pass around the fourth harmonic and let the filter envelope do the work. The steep slope removes everything that would clash with the rest of the arrangement, and the resonance peak at the corner puts a formant right where the ear finds the pitch. A part built this way takes up the whole bottom of a record without an EQ move; the technique for getting the same weight out of recorded material is in [how to make bass fatter](https://gazillionindustries.com/how-to-make-bass-fatter/), and the wider comparison of instruments for the job is in [best bass synth VST plugins](https://gazillionindustries.com/best-bass-synth-vst/).

Leads, second, and this is where keyboard tracking earns its keep. A filter with tracking at full moves its cutoff one octave for every octave you play, so the timbre holds across the keyboard and a line stays even. Tracking at zero leaves the cutoff fixed, so high notes get progressively duller as you climb, which is either a problem or a way to make a phrase sink into the track as it rises. Set it deliberately rather than leaving it where the program left it.

Third, and least talked about: a ladder is a good place to put audio that is not a synth. Feed a drum loop or a vocal through one, keep the resonance low and open the filter halfway, and you get a slope that removes top without the glassy quality of a steep digital cut. Then thicken what survives, which is the job described in [how to make a synth sound thicker](https://gazillionindustries.com/how-to-make-a-synth-sound-thicker/).

## The best ladder filter plugin depends on where the filter sits

Two different purchases hide behind that search, and picking the wrong one accounts for most of the disappointment. Either you want a playable voice with a ladder in it, or you want a filter to put on audio you already have. Decide which before reading a single recommendation, this one included. If it is the first, the tests that separate one voice from another are in [best monosynth VST](https://gazillionindustries.com/best-monosynth-vst/).

For a playable voice, ours is [JOURNEYMAN](https://gazillionindustries.com/journeyman.html), $59 for Mac and Windows, AU and VST3 with a standalone build on Mac. One voice, three oscillators, two ladder filters under a single CUTOFF with SPACING between them, RESONANCE and KB AMT, a switch between dual low-pass and high-pass into low-pass, and a POLES selector on each filter set to 3 or 4. The point of the pair is that you can hear the pole count as a difference rather than read about it, on one note, with everything else held still. Two hundred programs come with it, across basses, leads, keys, pads, percussion and fx.

For filtering audio you already have, ours is F(ilter)12 at $49: five filter shapes, six resonance shapes, a lo-fi section in front of the filter and AURA behind it. It is a different tool for a different job, and the roundup that puts it against the rest of that category is [best filter plugins](https://gazillionindustries.com/best-filter-plugins/).

Where ours is the wrong answer, briefly and honestly. If what you want is a collection of specific circuit models to audition side by side, Cytomic's The Drop is $99 as a one-time purchase, and its filter modes are models of named synth circuits, one of which is a ladder cascade and the rest of which are Sallen-Key, state-variable and cascade designs. If you want a filter with four filters in it and a drag-and-drop modulation matrix, FabFilter's Volcano 3 offers four filters with flexible routing, a drive setting on each one that adjusts its internal saturation, and filter styles that self-oscillate at high peak settings. Neither of those is a monosynth, and neither will play you a bass line.

## How to set a ladder filter

- Set resonance to zero and the filter fully open before you judge anything.

- Choose the wave first: sawtooth for harmonics to filter, triangle when you want the note dark before the filter starts.

- Close the cutoff until the note loses the part you do not want, and stop there.

- Switch between 3 and 4 pole at that cutoff and pick the one that keeps the right amount of bite.

- Raise resonance until the corner starts to sing, then back it off by a third.

- Match the level against bypass, because resonance took low end out and the peak put level back in somewhere else.

- Set keyboard tracking: full for an even timbre across the keyboard, zero for notes that darken as they rise.

- Set the filter envelope amount last, with attack at zero, and add attack only once the sustained tone is right.

- Sum to mono and play the part on a phone speaker before you save the program.

## Where a ladder costs you

The low-end loss is the headline cost and it is unavoidable, because it comes from the same feedback that gives you the peak. You can compensate with level after the filter, or with a second unfiltered oscillator underneath, but you cannot have maximum resonance and an untouched passband out of one ladder. Anyone promising both is describing a different circuit.

The second cost is that steep filters hide mistakes until the arrangement gets busy. A 24 dB low-pass at 300 Hz makes a bass sound enormous in solo, because nothing is competing with it, and then the part vanishes under a kick drum that owns the same 80 Hz. Build the sound against the drums rather than in isolation.

The third is phase, already mentioned once and worth repeating because it costs real time: 180 degrees at the corner on a 4 pole is enough to partly cancel a layer sitting underneath it. When a doubled bass gets thinner rather than fatter, the filter is usually the reason, and flipping the polarity of one layer tells you inside two seconds whether that is what happened.

And a ladder will not do surgery. It has one corner and one slope, and it removes a whole region rather than a problem frequency. Notching a resonant ring out of a sample is an EQ job, and reaching for a filter to do it wastes an hour.

## Questions people ask

### What is a ladder filter?

A low-pass filter built from identical one-pole stages wired in series, with the output of the last stage fed back to the input. The cutoff control moves all the stages together, the feedback amount is the resonance control, and the name comes from the way the stages are drawn stacked in pairs on the schematic.

### What is a 4 pole filter?

A filter with four stages of rolloff, which is 24 dB per octave above the corner. One octave above the cutoff the level is 24 dB down, two octaves above it is 48 dB down. On a ladder, four poles also means the resonant peak lands on the cutoff frequency itself.

### Is a 24 dB filter better than a 12 dB filter?

It is steeper, which is a different thing. A 24 dB filter takes twice as much per octave as a 12 dB filter and makes the cutoff an event you can hear moving. A 12 dB filter shades a sound and leaves more of the character above the corner intact. Bass and dramatic sweeps want the steep one; gentle tone shaping wants the shallow one.

### What does 3 pole mean on a synth filter?

Three stages, so 18 dB per octave. Against a 4 pole setting at the same cutoff, a 3 pole leaves everything above the corner 6 dB per octave louder, so the note keeps more edge. On a ladder it also moves the resonant peak: three stages reach the phase condition for resonance above the marked cutoff rather than on it.

### Why does my bass get thinner when I turn up resonance?

Because the feedback that creates the peak is subtracted from the input, so the passband below the corner drops as resonance rises. In the idealized four-stage ladder, at the feedback that makes it self-oscillate, the level under the corner is one fifth of what went in, which is 13.98 dB. Add gain after the filter, or run an unfiltered oscillator underneath.

### Do ladder filters self-oscillate?

With enough feedback, yes. The loop sustains itself and produces a sine tone, at the cutoff on a four-stage design, playable from the cutoff control and loud enough to hurt if you arrive there by accident. Some designs cap the feedback below that point on purpose.

### Can a ladder filter be a high-pass?

The core is a low-pass, but the difference between the input and the low-pass output is a high-pass, and designs take taps from different points in the chain to get other responses. On an instrument with two filters you get the useful version of this for nothing: run one as a high-pass into the other as a low-pass and you have a band whose width you control.

### What is the best ladder filter plugin?

It depends on whether you want to play it or apply it. For a voice you play, ours is JOURNEYMAN at $59, with two ladder filters and a 3 or 4 pole selector on each. For filtering audio you already have, ours is F(ilter)12 at $49. If you specifically want a rack of named circuit models to compare, Cytomic's The Drop is $99 and includes a ladder cascade among its modes.

## What JOURNEYMAN does

JOURNEYMAN is a monosynth for Mac and Windows: AU, VST3 and standalone on macOS, VST3 on Windows, $59. One voice, three oscillators, each with OCTAVE and WAVE, with 1-2 SYNC and 3-1 FM on switches, feeding a MIXER over OSC 1, OSC 2, OSC 3, NOISE and EXT IN.

The filter section is two ladder filters under one CUTOFF, with SPACING setting how far apart they sit, plus RESONANCE and KB AMT. A switch puts them in DUAL LP or HP/LP, and the keyboard panel carries a separate POLES selector for FILTER A and FILTER B, each set to 3 or 4. A FILTER ENV and a VOLUME ENV, both ADSR, an LFO with RATE and SYNC, and two modulation busses, MOD WHEEL and PEDAL/ON, each with SOURCE, SHAPING, DESTINATION and AMOUNT.

Then the playing controls: GLIDE, keyboard TRIGGER modes, note priority, BEND range up and down, and a TOUCH SURFACE that maps X to cutoff and Y to spacing, with a third axis on resonance. Two hundred programs come loaded, across basses, leads, keys, pads, percussion and fx, and every one of them is wired to the mod wheel and the touch surface.

Back to the car. Turn the resonance down, open the cutoff a little to pay yourself back the low end, and drive round the block again.

---

## About JOURNEYMAN

JOURNEYMAN — a monosynth for Mac and Windows. One voice, three oscillators, two ladder filters, two envelopes, two modulation busses and 200 programs.

https://gazillionindustries.com/journeyman.html
