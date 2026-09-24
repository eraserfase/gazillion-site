# Drum bus compressor settings

> Every control on a drum bus compressor, what it actually changes, and a starting point that works on most material without copying somebody else's numbers.

Source: https://gazillionindustries.com/drum-bus-compressor-settings/  
Published 2026-09-19, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Every control on a drum bus compressor, what it actually changes, and a starting point that works on most material. Written by the people who then built [a compressor with none of them](https://gazillionindustries.com/drugs.html).

## The short version

- **Ratio**: 4:1

- **Attack**: 10–30 ms

- **Release**: 100–300 ms, or auto

- **Threshold**: set for 2–4 dB of gain reduction on the loudest hits

- **Knee**: soft

- **Make-up**: matched, so bypass and engaged are the same loudness

That will glue a drum bus without hurting it. Everything below is why, and when to leave it.

## Attack decides whether drums punch

Attack is how long the compressor waits before it clamps down. A fast attack — under about 3 ms — catches the transient itself and flattens the stick. A slower one, 10 to 30 ms, lets the transient through and compresses the body behind it.

That second behavior is why a compressed drum bus can sound *bigger* rather than smaller: the hit stays sharp and everything under it comes up. **If your drums got weaker when you compressed them, attack is almost always the reason.**

**DOSE 12.** The line along the bottom is the gain reduction, and here it barely leaves the top.

**DOSE 88.** Same source. It dives on each hit and takes the bar to come back — that recovery is what people mean by pump.

## Release decides whether it breathes

Release is how fast the gain comes back. Short, 50 to 100 ms, recovers inside the gap between hits — that recovery is what people hear as pump. Long, past about 300 ms, holds still and glues instead.

The trap is a release near the tempo of the track. Land on it and the compressor breathes in time and sounds musical; land slightly off and the whole bus sounds seasick. Auto-release exists because that edge is hard to find by hand and moves whenever the material does.

## Ratio matters less than people think

On a drum bus, 2:1 to 4:1 covers nearly everything. A higher ratio does not really mean "more compressed" — it changes character more than amount, and it interacts with threshold. 4:1 with a high threshold does less than 2:1 with a low one, so the two are only meaningful together.

## Set threshold by the meter, not the number

The threshold value on its own tells you nothing, because it depends entirely on how hot the bus is running. Watch gain reduction instead:

- **2–4 dB**: glue — you feel it more than hear it

- **4–6 dB**: obvious, still musical on drums

- **6 dB+**: an effect; commit to it or back off

If the needle is pinned and never returns, you are limiting, not compressing.

Or don't watch the meter at all — there is an argument for a bus compressor with one control and none of these, which is [what we ended up building](https://gazillionindustries.com/drugs.html). There is a demo on the page.

## Questions people ask

### What attack and release should I use on a drum bus?

Set attack by ear rather than by number: the fastest setting at which the hit still sounds struck. Set release against the tempo, so the gain returns just before the next accent. Both depend on the material and the bpm, which is why copied numbers rarely travel.

### How much gain reduction should a drum bus compressor do?

On a drum bus, several decibels on the loudest hits is normal and reads as a room. On a mix bus, a decibel or two. If the kit sounds like it is moving rather than playing, it is doing too much.

### What ratio is best for drums?

Lower than most people set. The ratio decides how hard it clamps once it is working, and on drums the interesting part is the timing rather than the amount, so a modest ratio with the timing right beats a high ratio with the timing wrong.

### Should I compress each drum or just the bus?

The bus, first. It is the stage that makes separate hits sound like one kit, and it is the one you would miss. Individual compression is for fixing a specific problem on a specific drum, not a default.

## Knee

A soft knee eases compression in gradually as the signal approaches the threshold; a hard knee applies it all at once. Soft is more forgiving on drums and harder to hear. Hard is the right choice when you *want* to hear the compressor working.

## Make-up gain, and the only honest A/B

Compression costs level, make-up gain gives it back, and louder always sounds better for the first few seconds. **Match the bypassed and engaged loudness before you judge anything.** A large share of "this plugin sounds incredible" moments are an unmatched level and nothing else.

## Glue, specifically

Glue is what people call it when separate hits stop sounding like separate hits and start sounding like one performance in one room. Mechanically there is nothing mystical about it: the compressor is reacting to the whole bus at once, so every loud element ducks everything else fractionally, and the room and the quieter hits rise relative to the peaks.

It comes from a slower attack, a release long enough not to pump, and less gain reduction than you think — 2 to 4 dB. Reaching for more usually produces density, not glue.

## Mix bus and master bus

Same controls, less of everything. A drum bus will take obvious compression and often sounds better for it; a full mix will not. Start around 1 to 2 dB of gain reduction, a gentler ratio, and a slower attack so the transients that carry the whole arrangement survive.

The other difference is that mistakes compound. Everything already compressed on the way in gets compressed again, so the mix bus is the wrong place to fix a problem that belongs further back.

## What DRUGS does instead

Having written all of that: **DRUGS has none of it.** One knob, called DOSE.

Everything above — curve, knee, attack, release — moves underneath it, together, and you do not get a vote. There are no settings on this page to get right, which is either a relief or a problem depending on what kind of producer you are.

Turn it up until it sounds good.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
