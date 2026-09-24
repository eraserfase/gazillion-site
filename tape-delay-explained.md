# Tape delay explained

> How tape delay works: head distance over tape speed, feedback and generations, why the repeats darken, slapback timings, and how to use it on a send.

Source: https://gazillionindustries.com/tape-delay-explained/  
Published 2026-09-20, updated 2026-09-20. By Gazillion Industries, who make TRIPLE OG.

---

The vocal says one word and the room says it back four times, each one darker than the last, until the last repeat is a rumor of a consonant. Nothing in a plugin list does that by accident.

A tape delay records the signal onto moving tape and plays it back a moment later from a second head further along. The delay time is the distance between the record head and the playback head divided by the tape speed, so moving the head or changing the speed changes the time, and changing it while the tape is moving bends the pitch. Feedback sends the playback back to the record head, so every repeat is a new generation of tape: darker, noisier and slightly out of tune.

## The short version

- **Mechanism**: record head, moving tape, playback head further along

- **Time**: head distance divided by tape speed

- **Feedback**: playback routed back to record: each repeat is another generation

- **Character**: top end lost, noise and distortion gained, pitch wobbles

- **Speed change**: pitch bends while the time moves, unlike a digital delay

- **Slapback**: one repeat at 60–140 ms, no feedback

## Why the repeats fall apart

Each pass through the machine is a full trip through a tape chain: a record amplifier, magnetic tape with a limited high-frequency response, a playback head, and a transport that is never perfectly steady. So repeat two has less top than repeat one, more hiss, a little saturation, and a pitch that drifts by fractions of a semitone. Stack six of those and the tail dissolves into a dark smear that no amount of low-pass filtering on a clean digital delay imitates, because the filtering is only one of the four things happening.

Push the feedback past unity and the loop gains more than it loses. That is self-oscillation: a howl that builds until something clips, and an instrument in its own right if you ride it.

## How to use tape delay in a mix

- Put it on a send rather than the track, so the dry signal stays untouched.

- Set the time by ear against the tempo: a dotted eighth for movement, a quarter for space.

- Set feedback for two to four audible repeats, then take one off.

- High-pass the delay return around 200 to 300 Hz so the repeats do not crowd the low end.

- Duck the return against the dry vocal so the repeats land in the gaps, not on the words.

- Automate the feedback up on the last word of a line, and back down before the next one.

- For the pitch bend, move the delay time while the repeats are sounding.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is a cassette transport rather than a delay, which makes it a good place to send a delay return: the repeats come back with tape on them instead of arriving clean.

## Slapback, and the other old trick

A single repeat between about 60 and 140 ms with no feedback is slapback, and it is the sound of fifties rock and roll vocals: close enough to read as one voice, far enough to double it. Shorter than about 40 ms and it stops being a repeat and starts being a comb filter, thinning the source instead of thickening it. Longer than 150 ms and the ear hears two separate events.

The other trick is running a whole bus through a delay with the mix at a few percent, so nothing reads as an echo and everything gets slightly wider and less steady. Drums take this better than you would expect, especially if the repeats are dark.

## Where it costs you

Repeats are level, and level on a vocal send eats the same space the vocal needs. Long feedback tails wash into the next bar and blur transitions, which is why the automation above matters more than the settings. Tape delay also detunes: the pitch instability that makes it musical on a voice can make a synth line sound broken, and on anything with a tuned sustain you will hear the beating between the dry note and the repeat.

## Questions people ask

### Is analog delay the same as tape delay?

No. Analog delay usually means a bucket-brigade chip passing the signal along a chain of capacitors, which darkens and compresses the repeats without tape's pitch instability. Tape delay uses actual moving tape, so it adds wow, flutter and saturation that a chip does not.

### What is the best tape delay setting for vocals?

A dotted eighth or a quarter note with two or three repeats, high-passed around 250 Hz, ducked under the dry vocal, on a send. Start there and change one thing at a time.

### Why do tape delay repeats get darker?

Each repeat is another pass through the tape chain, and tape's high-frequency response is limited, so every generation loses top end while gaining noise and distortion.

### What causes the pitch bend when you change the delay time?

Changing the time means changing the tape speed or the head position while audio is already on the tape, so the material plays back faster or slower than it was recorded, and pitch moves with speed. See [varispeed](https://gazillionindustries.com/what-is-varispeed/).

## What TRIPLE OG does

TRIPLE OG is a cassette transport: six controls for what the medium is and what it is doing, and one for your hand. **TONE** is the playback system's brightness, where 50 is a musically neutral cassette rather than a bypass. **HISS** is a continuous broadband bed, shaped and partly decorrelated across the channels. **AGE** is in years, nought to sixty. **DRIVE** is soft asymmetric saturation, oversampled, and the level stays flat inside half a decibel from one end of the knob to the other. **WOW FLUT** is continuous, bounded instability built from several motions at once.

Four repeats, each one further from the word than the last. The room is still answering.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
