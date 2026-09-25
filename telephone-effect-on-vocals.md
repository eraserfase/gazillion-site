# How to make a telephone effect on vocals

> How to make a telephone effect on vocals: the 300 Hz to 3.4 kHz band, hard compression, distortion, mono, and how a modern cell call differs.

Source: https://gazillionindustries.com/telephone-effect-on-vocals/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

The verse arrives like a voicemail from someone who has already made up their mind. Small, squashed, no low end, nothing above a certain brightness, and somehow more intimate than the take you spent an afternoon on.

To make a telephone effect on vocals, band-pass the voice to roughly 300 Hz to 3.4 kHz with steep slopes, compress it hard, add light distortion, and put it in mono. That band is not an arbitrary taste: the traditional telephone network carried speech in a channel of about 300 to 3400 Hz, and everything you recognize as "phone" comes from that missing bottom and missing top. A little noise or bitcrushing turns a landline into a bad connection.

## The short version

- **Band**: high-pass 300 Hz, low-pass 3.4 kHz, steep both ends

- **Dynamics**: hard compression, 6–10 dB of gain reduction

- **Dirt**: light distortion or a bitcrusher for a cell connection

- **Width**: mono, always

- **Modern call**: widen to 50 Hz–7 kHz and add codec artifacts instead

- **Sell it**: cut the reverb: a phone has none of your room

- **Make-up**: budget 4 to 5 dB of level to give back after the band-pass

- **Check it**: sweep a narrow boost under 250 Hz and over 4 kHz; nothing should answer

**4 bit at 8 kHz.** Bits make it grainy, the rate makes it clang.

## Where the sound comes from

Analog telephone lines were built to carry intelligible speech in as little bandwidth as possible, and the usable channel ended up around 300 to 3400 Hz. Consonants survive in that range, which is all the phone company needed; chest, air and sibilance do not, which is what makes a voice sound like it is being described to you rather than happening to you.

Cell phones are a different animal. Modern wideband calls carry roughly 50 Hz to 7 kHz, so the band is wider and the artifacts are digital: dropouts, swirling in the high mids, and the particular flutter of a codec running out of data. If you want a call that sounds like this decade, keep more bandwidth and break it instead of narrowing it.

The 3.4 kHz ceiling has arithmetic behind it. Once the channel went digital it was sampled 8,000 times a second, and a signal sampled at 8 kHz can only describe frequencies below 4 kHz; anything above that folds down into the band as content that was never sung. Filtering at 3.4 kHz left a margin before the fold. Eight bits per sample at 8,000 samples a second works out to 64,000 bits a second, and the sound you are copying is whatever fits in that. Every choice in the recipe below is downstream of that one budget.

One detail a plain bitcrusher gets wrong: telephone coding companded the steps, making them fine near silence and coarse near full scale, so the grain tracked the voice instead of sitting under it at a fixed level. A linear bit reduction does the opposite, and it is loudest in the gaps between words. That is a feature if you want a cheap digital line, and it is the reason a crushed landline can sound more like a broken sampler than a phone. Turn the crush down and let the band do the work.

## The band in numbers

A 300 Hz to 3.4 kHz band-pass is wide for a filter and very narrow for music. Its geometric center is the square root of 300 × 3400, which is 1,010 Hz. It is 3,100 Hz wide, so its Q is 1010 ÷ 3100 = 0.33 — a broad shelf of a thing, not a peak. In octaves it spans log₂(3400 / 300) = 3.50 octaves, against 9.97 octaves between 20 Hz and 20 kHz. You are keeping about 35 per cent of the audible span and throwing the rest away.

The corner frequency is the part everybody copies. The slope is the part that decides whether it sounds like a phone or like an EQ move. Here is what a Butterworth high-pass at 300 Hz actually leaves behind at three common slopes, computed rather than guessed:

- **100 Hz**: 19.1 dB down at 12 dB per octave, 38.2 dB at 24, 76.3 dB at 48

- **150 Hz**: 12.3 dB down at 12, 24.1 dB at 24, 48.2 dB at 48

- **200 Hz**: 7.8 dB down at 12, 14.3 dB at 24, 28.2 dB at 48

- **250 Hz**: 4.9 dB down at 12, 7.2 dB at 24, 12.9 dB at 48

- **300 Hz**: 3.0 dB down at every slope — the corner is the corner

Read the 200 Hz row twice. At 12 dB per octave a chesty male note there is only 7.8 dB down, which is plenty of body left to ruin the illusion, and it is why so many attempts at this sound like a vocal with the bass rolled off. Doubling to 24 dB per octave buys 6.5 dB more rejection at 200 Hz and 19.1 dB more at 100 Hz. Doubling again to 48 buys another 13.9 dB at 200 Hz. The top end behaves the same way in reverse: a 24 dB per octave low-pass from 3.4 kHz puts 6 kHz 19.8 dB down and 8 kHz 29.7 dB down, which is what takes the "s" out of the singer's mouth and puts it in the earpiece. If slope and corner are still fuzzy, [filter cutoff and resonance explained](https://gazillionindustries.com/filter-cutoff-and-resonance/) has the long version.

## Why a band-passed voice still has a pitch

Cut everything below 300 Hz from a voice singing at 110 Hz and the note does not move. This surprises people, and it is the reason the effect reads as a device rather than as a transposition. A voice is a fundamental plus a stack of harmonics at whole multiples of it, and the ear takes the pitch from the spacing of that stack, not from the presence of the lowest member. Take the lowest members away and the spacing is unchanged.

Run the arithmetic on a 110 Hz voice through a 24 dB per octave high-pass at 300 Hz. The fundamental at 110 Hz comes out 34.9 dB down, effectively gone. The second harmonic at 220 Hz is 11.1 dB down. The third at 330 Hz is 1.7 dB down. The fourth at 440 Hz is 0.2 dB down, which is nothing. From the third harmonic upward the voice is untouched, spaced 110 Hz apart, and your ear fills in the note that is no longer there.

Higher voices get less out of the same setting, and this is the adjustment most guides skip. A voice at 220 Hz loses only 11.1 dB of its fundamental to a 300 Hz high-pass, so the effect lands weaker and the take still sounds like it is in the room. Move the high-pass to 400 Hz and that fundamental falls 20.8 dB; move it to 500 Hz and it falls 28.5 dB, at the cost of taking the second harmonic 5.8 dB down with it. Pick the corner off the singer, not off a preset.

## What the band-pass does to the level

The band-pass costs you level, and it costs you less peak than you expect. Measured here on a four-second spoken line rendered at 48 kHz by the speech synthesizer built into this machine, so the figures can be reproduced exactly: 62.6 per cent of the energy sat below 300 Hz, 35.5 per cent inside the phone band, and 1.88 per cent above 3.4 kHz. Band-passing it at 24 dB per octave on both ends dropped RMS by 4.20 dB and peak by only 1.84 dB.

Those two numbers do not move together, and the gap is the interesting part. Crest factor — peak minus RMS — rose from 13.25 dB to 15.61 dB. Band-passing a voice makes it *peakier*. The low end of a voice is its steadiest component, a near-continuous hum under the words; strip it and what remains is consonant bursts standing over a thinner sustained core. So the compression in step 4 earns its place twice over: it puts the 4.2 dB back and it flattens a signal that just got harder to hear at a constant level. If crest factor is new to you, [crest factor](https://gazillionindustries.com/crest-factor/) covers it.

Run the same measurement on your own take before you reach for a fader. Bounce four seconds dry, bounce four seconds band-passed, and read RMS and peak on both. If the RMS drop is much larger than 5 dB the voice was bass-heavy to begin with and the high-pass is doing two jobs; if it is under 2 dB, the slopes are too gentle and the low end is still in there.

## How to make a telephone effect

- Put an EQ on the vocal and high-pass at 300 Hz with a 24 dB per octave slope.

- Low-pass at 3.4 kHz with the same slope.

- Add a 4 to 6 dB peak around 1.5 to 2 kHz for that boxy honk.

- Compress hard: fast attack, 6 to 10 dB of gain reduction, so every word sits at the same level.

- Add light distortion or a bitcrusher after the filtering, not before.

- Collapse it to mono and remove any reverb that was on the vocal.

- Ride the level so the filtered vocal stays audible against the music.

- For the handoff, automate the filters open on the downbeat when the full vocal returns.

[F(ilter)12](https://gazillionindustries.com/f12.html) has a band-pass shape, a slope that goes from 18 dB per octave up to a wall, and SAMPLE RATE and BIT in front of it, which is the whole recipe on one panel.

**4 bit at 8 kHz.** Bits make it grainy, the rate makes it clang.

## Compressor settings that fit a voice

Step 4 says "compress hard," which is where most chains go vague. Set the times off the material instead. One cycle at the band's geometric center of 1,010 Hz lasts 0.99 ms, so an attack of 1 ms or faster is already acting inside a single cycle of the middle of the band; that is the setting that flattens a consonant into a click. An attack of 5 to 10 ms lets the burst through and keeps a little snap, which suits a rapped verse where the words have to stay legible.

Release comes off the syllable rate. The four-second line measured above ran 20 syllables, which is 4.9 syllables a second and 204 ms each. A release between 60 and 150 ms recovers inside a syllable and keeps the gain riding the words. Past 250 ms the compressor holds the gain down across syllable boundaries and the line starts breathing in places nobody sang.

Ratio follows from the reduction you want rather than from the name on the preset. If the loudest words land 12 dB over the threshold, a 4:1 ratio passes 12 ÷ 4 = 3 dB of that, so you get 9 dB of gain reduction. At 8:1 it passes 1.5 dB and you get 10.5 dB. At 20:1, 0.6 dB and 11.4 dB. Set the threshold so the quiet words just tickle it, pick the ratio that lands you in the 6 to 10 dB window, then add back the 4-ish dB the band-pass took. A little general grounding helps here — [what is a compressor](https://gazillionindustries.com/what-is-a-compressor/).

## Where it sits in the chain

Build the effect on a duplicate of the vocal track with its sends switched off, not on the vocal itself. Two reasons, both practical: the reverb and delay you already set up for the real vocal will happily pour room into a signal that is supposed to have none, and a duplicate lets you crossfade between phone and full take on the downbeat instead of automating six parameters at once.

Order inside the chain, and why each link sits where it does. Tuning and timing first, because nothing downstream fixes a flat note. De-essing next, or more likely not at all — a 3.4 kHz low-pass already puts 8 kHz 29.7 dB down, so the sibilance a de-esser exists to catch has mostly left the building. Then the band-pass. Then the compressor, because the crest factor went up and you want the compressor working on the signal that actually reaches the listener. Then the dirt. Then mono. Then level.

The dirt is the one link with a real trade-off. Distortion and bit reduction both make new content above whatever you feed them, so anything you add after the low-pass escapes the band you just built. Here is the size of that leak, measured on three published renders of the same loop: the clean file carries 0.018 per cent of its energy above 3.4 kHz, the bit-reduced render carries 0.504 per cent, and the rate-reduced render carries 0.957 per cent. That is 14.6 dB and 17.4 dB more out-of-band energy respectively. Put a second low-pass at 3.4 kHz after the dirt and the leak closes; leave it off and the listener hears a plugin rather than a phone. The mechanism behind the rate-reduced number is in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/), and the bit-depth half is in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

The source here is a drum loop rather than a vocal, deliberately: what matters is what the crush pair does *above* the low-pass corner, and a loop with a wide top end shows it where a band-limited voice would hide it. Play the three and listen past 3.4 kHz.

- **Clean** — 0.018% of energy above 3.4 kHz — https://gazillionindustries.com/f12/f12-clean.m4a

- **Bit reduced** — 0.504%, up 14.6 dB — https://gazillionindustries.com/f12/f12-bitcrush.m4a

- **Rate reduced** — 0.957%, up 17.4 dB — https://gazillionindustries.com/f12/f12-rate25.m4a

Percentages are the share of total spectral energy above 3.4 kHz, measured this week on the three published files with a single Hann-windowed transform of each, not estimated from the settings. Rendered through [F(ilter)12](https://gazillionindustries.com/f12.html).

## Doing it in your DAW

Every host ships an EQ that can do this. They differ in exactly one way that matters here, and it is how steep they will go.

### Ableton Live

EQ Eight's low cut and high cut bands each switch between 12 and 48 dB per octave, per Ableton's own reference. Take both to 48: steeper than the 24 the recipe calls for, and on this effect steeper is better. Gain is disabled on the cut bands, so dragging a cut band vertically sets Q instead, which puts a resonant lip right at the corner — a small lift at 300 Hz reads as the boxiness of a cheap earpiece. Ableton's manual also points out that you can assign the same parameters to two or more filters for drastic filtering, which is how you get past 48 without another plugin. Use a third band for the 1.5 to 2 kHz honk.

### Logic Pro

In Channel EQ, band 1 is the high pass and band 8 is the low pass. For those two the Gain/Slope control sets slope rather than gain, which catches people who drag it expecting a level change. Apple notes that the Q parameter on bands 1 and 8 does nothing while the slope is at 6 dB per octave, so raise the slope first and only then reach for Q. Band 4 or 5 handles the midrange peak.

### FL Studio

Fruity Parametric EQ 2 offers Low Pass, Band Pass, High Pass and Notch band types, and slopes of 12, 24, 36 and 48 dB per octave in both Steep and Gentle variants. Image-Line's manual is explicit about the difference: Steep sits around −3 dB at the cutoff, while Gentle runs between −6 dB and −12 dB there. On a 300 Hz high-pass over a voice that is audible — Gentle 8 starts removing chest well before the corner, which suits the effect if the singer is low and works against you if they are not. Try both on the same take.

## How to check it before you commit

- Solo the processed vocal and sweep a narrow EQ boost through it. Anything that answers below 250 Hz or above 4 kHz means the slopes are too soft.

- Sum the master to mono and listen again. The phone track should not change at all; if it does, something in the chain is still stereo. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) has the full test.

- Play the bounce through a phone speaker. A device that already band-limits will either confirm the illusion or expose the leak instantly. See [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) for what those speakers actually do.

- Record a five-second voice memo on your own phone and A/B it against your chain at matched level. This is the only reference that costs nothing and settles arguments.

- Check the handoff in isolation. Loop two bars either side of the downbeat where the filters open and make sure the full vocal arrives on the beat, not after it.

## What goes wrong, and what each one sounds like

**Slopes too gentle.** Sounds like a vocal with the bass rolled off, because that is what it is. You can still hear chest under the words and the voice keeps its position in the room. Fix: steeper, both ends, before you touch anything else.

**High-pass too high on a high voice.** The voice does not narrow, it thins out and loses power, and the take starts sounding like a bad recording rather than a phone. Drop the corner back toward 300 Hz and add the midrange peak instead.

**Dirt after the low-pass with nothing after it.** A bright fizz sits on top of an otherwise dark signal, and the two halves plainly do not come from the same device. The measurement above says how much escapes. Second low-pass, always.

**Reverb left on.** The listener hears your room through the earpiece, which is the single fastest way to break the effect. Kill the send, or automate it to zero for the treated section.

**Compressor too slow.** Words duck under each other and the line pumps at the syllable rate. Shorten the release toward 100 ms and it settles.

**Effect running on the real vocal.** You lose the ability to hand back to the full take, and every later revision means undoing the chain. Duplicate the track.

## Two versions worth building

**Landline:** narrow band, hard compression, light saturation, no noise. Clean and old, the sound of a voice on an answering machine.

**Cell:** wider band, a bitcrusher set low enough to hear the grain, a couple of short dropouts cut into the take by hand, and a hint of pitch instability. Add a clipped syllable at the start of a phrase and the listener will fill in the rest of the story.

**Voicemail:** the landline chain plus a tail. Leave the last word of each phrase running a fraction longer than a live voice would, add a faint steady hiss under the whole message, and let the level sag by a decibel or two across the take. A voicemail is a recording of a phone call, so it carries one more generation of loss than a call does.

**Walkie-talkie or intercom:** the same band, pushed harder. Take the high-pass to 400 or 500 Hz, drive the distortion until the vowels break up rather than just roughen, and clip the first 30 to 50 ms off the start of each phrase so it sounds like the transmit button was late. A short burst of noise at the end of each line reads as the squelch. For the distortion side of that, [distortion on vocals](https://gazillionindustries.com/distortion-on-vocals/) goes into what each flavor does to a voice.

If you want the voice to sound like it is in a different space rather than on a different device, that is a different chain: see [how to make music sound like it is in another room](https://gazillionindustries.com/how-to-make-music-sound-like-another-room/).

## Where it costs you

A band-passed vocal is a thin vocal, and a whole verse of it gets tiring by the second pass. The usual fix is contrast: run the effect on one line, a pre-chorus, or the first half of a verse, then open the filters and let the full take land. Intelligibility is the other cost. Removing everything under 300 Hz takes the weight off a low voice, and heavy distortion on top can turn a clear lyric into a texture, which is fine until someone asks you what the words are.

In money it costs nothing. Every element of the chain ships with every DAW, and the stock EQ plus the stock compressor will get you a convincing landline in about four minutes. What you buy a dedicated filter for is movement — a band that opens on a downbeat, follows the kick, or rides an LFO — and the character a filter picks up when it is being driven, which a clean parametric EQ will not give you at any setting. If you are shopping rather than building, [telephone effect plugins](https://gazillionindustries.com/telephone-effect-plugins/) lists what is out there, and [best low pass and high pass filter plugins](https://gazillionindustries.com/best-lowpass-highpass-filter-plugins/) covers the slope question on its own.

The last cost is a mixing one. A phone vocal occupies 300 Hz to 3.4 kHz and nothing else, which is exactly where guitars, snares and synth mids live. Something has to move. Usually it is a 2 dB dip around 1.5 kHz in whatever is competing, held only for the treated bars.

## Questions people ask

### How do you make vocals sound like a telephone?

Band-pass the vocal to about 300 Hz to 3.4 kHz with steep slopes, compress it hard, add a little distortion, and make it mono. A small boost around 1.5 to 2 kHz makes it boxier.

### What is the telephone effect?

A processing treatment that imitates the narrow frequency range of a phone line by removing the low end and the top end and leaving a compressed, slightly distorted midrange.

### How do I make audio sound like a phone call?

Use the same band-pass and compression, then add the artifacts of the device you have in mind: light saturation for a landline, bitcrushing and short dropouts for a cell call.

### Should the telephone effect be in mono?

Yes. A phone has one speaker, and a stereo image is the fastest way to break the illusion. Place the mono vocal wherever you like in the field, but do not let it be wide.

### What frequency range is a telephone effect?

About 300 Hz to 3,400 Hz for a landline. That band is 3,100 Hz wide, 3.50 octaves, centered geometrically on 1,010 Hz, and it covers roughly 35 per cent of the octave span between 20 Hz and 20 kHz. A modern wideband call is closer to 50 Hz to 7 kHz.

### What EQ settings make a telephone effect?

High-pass at 300 Hz and low-pass at 3.4 kHz, both as steep as the EQ allows, plus a 4 to 6 dB bell around 1.5 to 2 kHz. Slope matters more than the exact corners: at 12 dB per octave a 200 Hz note is only 7.8 dB down, at 24 it is 14.3 dB down, at 48 it is 28.2 dB down.

### Why does my telephone effect still sound like a normal vocal?

Almost always the slopes. A 12 dB per octave high-pass at 300 Hz leaves a 100 Hz fundamental only 19.1 dB down, which is audible body. Go to 24 dB per octave and it falls 38.2 dB. The other usual culprit is reverb still arriving through a send.

### Does the telephone effect change the pitch of the vocal?

No. The ear reads pitch from the spacing of the harmonics, and a high-pass does not change that spacing. On a 110 Hz voice through a 24 dB per octave high-pass at 300 Hz, the fundamental is 34.9 dB down and the third harmonic at 330 Hz is only 1.7 dB down, so the note stays put while the body leaves.

### Should I use a bitcrusher for a phone effect?

For a cell call, yes, gently. For a landline it is optional and easy to overdo, because a linear bit reduction is loudest in the gaps between words while a real phone line's grain tracked the voice. Whichever you use, put a second low-pass after it — measured on three published renders, rate reduction raised the energy above 3.4 kHz by 17.4 dB and bit reduction by 14.6 dB.

### How do I make a vocal sound like a voicemail or answering machine?

Build the landline version, then add one more generation of loss: a faint continuous hiss, a slow drop of a decibel or two across the message, and tails that hang slightly longer than a live voice. The beep is a sine tone, not processing.

### Is a radio or walkie-talkie effect the same thing?

Same band, different violence. Push the high-pass to 400 or 500 Hz, drive the distortion until vowels break up, cut 30 to 50 ms off the front of each phrase, and put a short noise burst at the end of each line for the squelch.

### How loud should the telephone vocal sit in the mix?

Louder than the number on the fader suggests. The band-pass cost about 4.2 dB of RMS on a measured spoken line while costing only 1.84 dB of peak, so matching peaks leaves the effect quiet. Match by ear against the full vocal, then clear space for it around 1.5 kHz.

### Can I do the telephone effect without a plugin?

You cannot do it without *a* plugin, but you do not need to buy one. The stock EQ and compressor in any DAW will build a convincing landline. A dedicated filter earns its keep when you want the band to move or to distort as it moves.

## What F(ilter)12 does

F(ilter)12 is a filter with a lo-fi section in front of it. The filter has five shapes, including **band-pass**, and **SLOPE** runs from 18 dB per octave up to a wall where almost nothing gets past, which is the steepness this effect wants. **SAMPLE RATE** slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content, and **BIT** coarsens the steps it is measured in. **DIRTY** feeds the filter's own distortion back through itself, for when the line should sound bad as well as narrow.

Two more controls do specific work on a voice. **Q SHAPE** puts fixed peaks and dips on the filter wherever it sits, and one of the shapes, **VOWEL**, is four peaks spaced like a voice — the boxy honk step 3 asks you to dial in by hand, already shaped. **DRAW** is the other route: click the display to place your own points, drag them from silence to a boost, pull the handles for width, and right-click one for a notch, a shelf or a cut. Those points travel with the cutoff, so when you open the band on the downbeat the whole character moves with it rather than staying behind.

**MIX** is the intelligibility control. A verse that has gone unreadable at 100 per cent usually comes back at 40, with the phone still clearly there and the words legible again. And because the plug-in reports zero samples of latency, an automation curve that opens the filter on the downbeat opens it on the downbeat, which matters on a handoff that has to land with the drums. **AUTO FILTER** and **SIDECHAIN** are the movement routes if you want the connection to breathe rather than sit still.

**The whole panel.** Crush on top, shapes in the middle, the band drawn underneath.

Leave the message. Hang up before the reverb gets back.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
