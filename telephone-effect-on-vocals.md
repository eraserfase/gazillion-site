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

## Where the sound comes from

Analog telephone lines were built to carry intelligible speech in as little bandwidth as possible, and the usable channel ended up around 300 to 3400 Hz. Consonants survive in that range, which is all the phone company needed; chest, air and sibilance do not, which is what makes a voice sound like it is being described to you rather than happening to you.

Cell phones are a different animal. Modern wideband calls carry roughly 50 Hz to 7 kHz, so the band is wider and the artifacts are digital: dropouts, swirling in the high mids, and the particular flutter of a codec running out of data. If you want a call that sounds like this decade, keep more bandwidth and break it instead of narrowing it.

## How to make a telephone effect

- Put an EQ on the vocal and high-pass at 300 Hz with a 24 dB per octave slope.

- Low-pass at 3.4 kHz with the same slope.

- Add a 4 to 6 dB peak around 1.5 to 2 kHz for that boxy honk.

- Compress hard: fast attack, 6 to 10 dB of gain reduction, so every word sits at the same level.

- Add light distortion or a bitcrusher after the filtering, not before.

- Collapse it to mono and remove any reverb that was on the vocal.

- Ride the level so the filtered vocal stays audible against the music.

- For the handoff, automate the filters open on the downbeat when the full vocal returns.

F(ilter)12 has a band-pass shape, a slope that goes from 18 dB per octave up to a wall, and SAMPLE RATE and BIT in front of it, which is the whole recipe on one panel.

## Two versions worth building

Landline: narrow band, hard compression, light saturation, no noise. Clean and old, the sound of a voice on an answering machine.

Cell: wider band, a bitcrusher set low enough to hear the grain, a couple of short dropouts cut into the take by hand, and a hint of pitch instability. Add a clipped syllable at the start of a phrase and the listener will fill in the rest of the story.

If you want the voice to sound like it is in a different space rather than on a different device, that is a different chain: see how to make music sound like it is in another room.

## Where it costs you

A band-passed vocal is a thin vocal, and a whole verse of it gets tiring by the second pass. The usual fix is contrast: run the effect on one line, a pre-chorus, or the first half of a verse, then open the filters and let the full take land. Intelligibility is the other cost. Removing everything under 300 Hz takes the weight off a low voice, and heavy distortion on top can turn a clear lyric into a texture, which is fine until someone asks you what the words are.

## Questions people ask

### How do you make vocals sound like a telephone?

Band-pass the vocal to about 300 Hz to 3.4 kHz with steep slopes, compress it hard, add a little distortion, and make it mono. A small boost around 1.5 to 2 kHz makes it boxier.

### What is the telephone effect?

A processing treatment that imitates the narrow frequency range of a phone line by removing the low end and the top end and leaving a compressed, slightly distorted midrange.

### How do I make audio sound like a phone call?

Use the same band-pass and compression, then add the artifacts of the device you have in mind: light saturation for a landline, bitcrushing and short dropouts for a cell call.

### Should the telephone effect be in mono?

Yes. A phone has one speaker, and a stereo image is the fastest way to break the illusion. Place the mono vocal wherever you like in the field, but do not let it be wide.

## What F(ilter)12 does

F(ilter)12 is a filter with a lo-fi section in front of it. The filter has five shapes, including band-pass, and SLOPE runs from 18 dB per octave up to a wall where almost nothing gets past, which is the steepness this effect wants. SAMPLE RATE slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content, and BIT coarsens the steps it is measured in. DIRTY feeds the filter's own distortion back through itself, for when the line should sound bad as well as narrow.

Leave the message. Hang up before the reverb gets back.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
