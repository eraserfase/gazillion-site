# The creation of the MPC

> How the MPC came to exist: the Linn machines that failed first, what Akai and Roger Linn each contributed, and the swing control in the designer's own words.

Source: https://gazillionindustries.com/mpc-creation/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries.

---

In February 1986 Roger Linn's company went under, killed by the software in a machine meant to be its future. Two years later the same designer shipped the box that became the standard instrument of hip hop, and the part everyone copies is one percentage field on a menu page.

The Akai MPC60 was released on 8 December 1988 at $5,000, designed by Roger Linn and built by Akai. It put a 12-bit sampler, sixteen velocity-sensitive pads and a MIDI sequencer in one box, with a timing engine running at 96 clock ticks per quarter note and a swing control that delays every second sixteenth note by an amount you choose between 50 and 75 percent. Those two numbers, and the way they interact with what you play, are most of why producers still argue about this machine.

## The short version

- **MPC60**: 8 December 1988, $5,000, 12-bit at 40 kHz

- **MPC3000**: 1994: 16-bit linear at 44.1 kHz, 32 voices, filters

- **Resolution**: 96 ticks per quarter note, on both

- **Swing**: 50% to 75%, delaying every even-numbered sixteenth

- **Linn's settings**: 54% to loosen straight sixteenths, 62% for a relaxed swing

- **Linn leaves**: design involvement ends at the MPC2000 in 1997

## Before Akai

Linn's first machine, the LM-1, was the first drum machine to play samples of real drums. The LinnDrum followed and sold around 5,000 units between 1982 and 1985. Then came the Linn 9000, introduced in 1984 at $5,000, which put a 32-track MIDI sequencer and eighteen pressure-sensitive rubber pads in one instrument. On paper it was everything that came afterward. In practice its software never worked properly, about 1,100 were built, and Linn Electronics closed in February 1986.

That failure is the reason the MPC exists in the form it does. Linn had already designed the instrument; what he needed was a manufacturer with the engineering depth to ship it.

## What each side actually did

Akai built it and Linn designed it, and Linn has been consistent about the split: the concept, the interface, the feel and the timing were his, the hardware engineering and manufacturing were Akai's. The relationship ran through the MPC60, the MPC60 MkII and the MPC3000, and ended when Akai went a different way. In Linn's words: "We collaborated until Akai decided to make their MPC2000 without me in order to avoid my design royalties." That was 1997. The royalty payments themselves continued until 2006, when Numark bought Akai out of bankruptcy. Those are two separate events and most retellings run them together.

## Swing, in the designer's own words

This is the part worth reading twice, because it is the mechanism behind an entire genre's worth of feel and it is not complicated. Linn:

"My implementation of swing has always been very simple: I merely delay the second 16th note within each 8th note. In other words, I delay all the even-numbered 16th notes within the beat (2, 4, 6, 8, etc.)... 50% is no swing, meaning that both 16th notes within each 8th note are given equal timing. And 66% means perfect triplet swing... The fun comes in the in-between settings. For example, a 90 BPM swing groove will feel looser at 62% than at a perfect swing setting of 66%. And for straight 16th-note beats (no swing), a swing setting of 54% will loosen up the feel without it sounding like swing."

The MPC60 manual gives the same two settings as worked examples, both at 100 bpm on sixteenth notes: 54 percent, which "removes the stiffness from perfect 1/16-note timing and is especially useful on drum sequences using 1/16-note hi-hats", and 62 percent, which it describes as "more relaxed than a perfect triplet swing". The control lives on the Timing Correct page and only appears when the note value is set to eighths or sixteenths.

Two practical notes that get lost. The delay is applied to every even sixteenth equally, so swing is a proportion of the note rather than a fixed number of milliseconds, and it scales with tempo automatically. And 96 ticks per quarter note is a coarse grid by modern standards, which is exactly why these machines offer a handful of usable shuffle positions rather than a continuous sweep. The limitation is part of the sound.

[Gazillion Industries](https://gazillionindustries.com/) makes plugins tuned by ear, which is the same argument in a different box: pick the behavior that makes people move, then build the control around it.

## The MPC3000

The 1994 model is the one most associated with the golden era, and the manual's own list of what changed is the best summary anyone has written. Sampling went from 12-bit non-linear at 40 kHz to 16-bit linear at 44.1 kHz, with stereo sampling and a digital input added. Memory went from 2 MB to 16 MB and the five-second per-sound cap disappeared. Voices doubled from 16 to 32, and each got a dynamic lowpass filter with its own envelope and resonance. Sequence memory rose about 30 percent to 75,000 notes. Pad banks went from two to four.

And one addition that matters more than its billing: a Shift Timing feature, independent of timing correction, that moves notes earlier or later by an amount you set. Combined with per-track swing, that is the toolkit behind the rhythmic arguments of the next decade. Our piece on [J Dilla](https://gazillionindustries.com/j-dilla/) goes through what one producer did with it.

What did not change: the sequencer still ran at 96 ticks per quarter note.

## What "turning quantize off" actually means

The story that a producer switched quantize off and played by hand is repeated constantly, and as a description of an approach it is fair. As a technical explanation it is wrong. On these machines, quantize off is a setting called OFF(1/384), and the manual is explicit about what it does: "No timing correction — in this setting, the highest resolution of the MPC60 is used — 96 divisions per 1/4-note." Your notes are not free. They are landing on a 384-per-bar grid, which at 90 bpm puts the ticks about 7 milliseconds apart.

That is fine enough to capture the feel of a hand, and coarse enough that the machine is quietly making decisions for you. Both things are true, and the interesting music came from people who knew it.

## After the MPC3000

The line continued without its designer: the MPC2000 and 2000XL, the 4000, the 1000 and 2500, the 5000, and then the software-and-controller era with the Renaissance, the Live, the X and the One. Whether the later machines feel like the early ones is the longest-running argument in beatmaking forums, and it is partly a question about swing implementations and partly nostalgia for a workflow with no undo.

The pads, though, went everywhere. Sixteen squares in a four-by-four grid, velocity sensitive, one sound each, is now the default physical interface for making rhythm on a computer, and it came from a man trying to ship the machine that had already bankrupted him once.

## Questions people ask

### Who invented the MPC?

Roger Linn designed it and Akai manufactured it. Linn had previously built the LM-1, the LinnDrum and the Linn 9000 under his own company, which closed in February 1986.

### When did the MPC come out and what did it cost?

The MPC60 was released on 8 December 1988 at $5,000. Linn's own account adds that it was later reduced to $3,500.

### What is MPC swing and what does the percentage mean?

It delays every even-numbered sixteenth note within the beat. The number is the share of time given to the first note of each pair: 50 percent is straight, 66 percent is perfect triplet swing, and 75 percent is the maximum. Values between 50 and about 66 are where most of the useful feel lives.

### What swing setting should I use?

The designer's own suggestions are 54 percent to loosen straight sixteenths without it sounding swung, and around 62 percent for a swing that feels more relaxed than a strict triplet. Both assume sixteenth notes; adjust by ear for the track.

### What is the difference between the MPC60 and the MPC3000?

The MPC3000 sampled at 16-bit linear 44.1 kHz instead of 12-bit at 40 kHz, had 16 MB of memory instead of 2, doubled the voices to 32, added a filter per voice, added stereo sampling and a digital input, and added Shift Timing. The sequencer resolution stayed at 96 ticks per quarter note.

What we make for the bus those pads end up on.

We make [DRUGS](https://gazillionindustries.com/drugs.html). What we make for the bus those pads end up on.

## Where it still matters

If you never touch one of these machines, two things from it are still worth stealing. The swing percentages are real numbers you can dial into any DAW, and 54 and 62 are better starting points than the 8 percent your host defaults to. And shifting one voice against another, rather than nudging a whole pattern, is a technique rather than a piece of hardware. See [how to make boom bap drums](https://gazillionindustries.com/how-to-make-boom-bap-drums/) and [how to chop a drum break](https://gazillionindustries.com/how-to-chop-a-drum-break/).

A software failure closed one company and forced the design into someone else's factory. The grid it shipped with is still under most of the rhythm you hear.

---

## About Gazillion Industries

Gazillion Industries makes plugins tuned by ear: DRUGS, F(ilter)12, SKRUU, TRIPLE OG and BEEFY.

https://gazillionindustries.com/
