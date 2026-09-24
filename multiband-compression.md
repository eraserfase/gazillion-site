# Multiband compression

> What multiband compression is for, how to set crossovers and how much to use, how it differs from dynamic EQ, and why most problems need a single band instead.

Source: https://gazillionindustries.com/multiband-compression/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

The mix is fine except for one thing: every time the bass player leans in, the whole record ducks. One compressor is reacting to one frequency range and charging the entire track for it.

Multiband compression splits a signal into frequency bands and compresses each one separately, so a loud low end no longer pulls the top down with it. A three-band split is the common case: low, mid and high, with crossovers somewhere around 200 Hz and 3 kHz. Use it to solve a problem that lives in one range, keep the amount small, and reach for a single-band compressor first, because most problems that look like they need four bands actually need better balance.

## The short version

- **What**: one compressor per frequency band

- **Bands**: three is usually enough; five is usually too many

- **Crossovers**: around 200 Hz and 3 kHz as a starting point

- **Amount**: 1–3 dB in the band that has the problem

- **Best at**: one range misbehaving: boomy lows, harsh upper mids

- **Worst at**: being left on every bus because it sounds clever

## What it is really for

A normal compressor sees one number: the level of everything at once. Feed it a track with a heavy kick and a bright vocal and the kick makes every decision, because it is the loudest thing in the room. The vocal gets turned down on every kick, forever, and nobody asked for that.

Split the signal at 200 Hz and the kick can only trigger the low band. The vocal carries on. That is the whole argument, and it is a good one in exactly the cases where a single range is misbehaving in time: a boomy note that only rings on one chord, sibilance that only spikes on certain words, a bass guitar whose low E is 4 dB louder than every other note.

## How to set it up

- Find the problem first, by ear, and name the frequency range it lives in.

- Set a crossover either side of it, so the band you compress contains the problem and little else.

- Solo the band and listen: it should contain what you are chasing and nothing important that you are not.

- Compress only that band, ratio 2:1 to 4:1, with 1 to 3 dB of gain reduction on the offending moments.

- Set attack and release the same way you would on a single band: slow enough to keep transients, fast enough to recover.

- Leave the other bands untouched. If they need work too, do them one at a time.

- Bypass at matched level and confirm the problem is gone and nothing else changed.

DRUGS is our free one-knob drum bus compressor. It is single-band and it stays that way on purpose: one gain cell for the whole kit is what makes a break sound like one thing.

## Multiband or dynamic EQ

They overlap heavily. A dynamic equalizer applies a filter whose gain depends on level, so it cuts a specific frequency only when that frequency gets loud, and it leaves the rest of the spectrum alone. A multiband compressor splits the signal into bands and compresses each. For surgical work, taking 3 dB off a 240 Hz ring only when it rings, dynamic EQ usually sounds more transparent because it does not chop the signal at crossover points. For broad level control of a whole range, multiband is more natural.

The practical rule: narrow and surgical, use dynamic EQ. Wide and about level, use multiband.

## Where it costs you

Crossovers are filters, and filters shift phase around their corner frequencies, so splitting a mix into four bands and putting it back together does not give you exactly what you started with. On a drum bus that can soften the transient in a way nobody chose. Multiband also makes it easy to compress four things a little instead of fixing one thing properly, and to produce a mix that measures well and sounds inert.

And it can dismantle the thing you liked. Drums have a natural relationship between the thump and the crack; compress those bands separately and hard enough and you get a kit assembled out of parts.

## Questions people ask

### How do you use multiband compression?

Identify the frequency range that is causing the problem, set crossovers around it, compress that band by 1 to 3 dB, and leave the others alone. Then level-match and bypass to confirm you fixed what you meant to fix.

### What is the difference between dynamic EQ and multiband compression?

Dynamic EQ moves a filter's gain in response to level, so it is narrow and surgical and does not split the signal. Multiband compression splits the signal at crossover points and compresses each band, which is better for broad level control of a whole range.

### What is the difference between a single-band and a multiband compressor?

A single-band compressor makes one decision for the whole signal, so the loudest element controls everything. A multiband compressor makes a separate decision per frequency range, so a loud low end cannot pull the top end down.

### Should I use multiband compression on my master?

Only if something specific is wrong, and then only a decibel or two in the band that is wrong. A master that needs four bands of compression usually needs the mix fixed instead.

## What DRUGS does

DRUGS is our free bus compressor for drums, with one macro control called DOSE and one gain cell for the whole signal. Turning DOSE up makes a drum bus denser rather than louder, because peak level barely moves across the range of the knob, and the release reacts to the transient in front of it. It is not a repair tool and it is not surgical: it is there to make a kit read as one block. MIX is dry/wet with zero latency, so you can blend it in parallel instead of splitting the spectrum.

The bass player leans in. This time the rest of the record does not flinch.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
