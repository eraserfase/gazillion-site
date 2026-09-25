# Parallel compression

> Parallel compression explained: how to blend a crushed copy under the dry drums, the settings to use, and the alignment problem that thins the result.

Source: https://gazillionindustries.com/parallel-compression/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Somebody hands you a record where the drums are obviously squashed and obviously still snapping, and you spend a week trying to get both out of one compressor. You cannot. There are two copies of those drums on that record.

Parallel compression means blending a heavily compressed copy of a signal underneath the untouched original. The dry copy keeps the transients, the crushed copy raises everything quiet enough to be missed, and the fader between them sets how much weight you want. Set the compressed copy to a high ratio, a fast attack and 10 to 20 dB of gain reduction, then bring it up under the dry track until the drums get heavier without getting duller.

## The short version

- **What**: a crushed copy blended under the dry one

- **Ratio**: 8:1 to 20:1, or the highest the compressor has

- **Attack**: fast, so the copy has no transient left

- **Amount**: 10–20 dB of gain reduction on the copy

- **Blend**: start at silence, raise until it thickens, then back off

- **Watch**: latency between the two paths, and mud below 100 Hz

**DOSE 95, MIX 45.** Parallel without a send: the squashed copy sits under the dry one.

**DOSE 88.** Same source. The line dives on each hit and takes the whole bar to come back — that recovery is the pump.

## Why the blend works when one compressor does not

A compressor on its own can only trade. Push it hard and the quiet detail comes up, but the transient goes with it, because the same gain cell handles both. Two paths let you keep the spike on one and lose it on the other, which is why the technique got its reputation on drums, where the spike is the whole point.

The crushed copy behaves less like a second drum kit and more like the room the kit is in. Sticks, ring, breath, the tail of a sampled break, the hum of the record it came off: all of it arrives at roughly the same level as the hits, which is exactly what a room does to your ears at volume.

## How to set up parallel compression

- Send the drums to a new bus, or duplicate the track and mute the output of one copy.

- Put a compressor on the copy, ratio 8:1 or higher, attack fast, release medium.

- Lower the threshold until the meter shows 10 to 20 dB of gain reduction.

- Solo the copy: it should sound flat, loud and slightly unpleasant.

- Pull the copy's fader to silence, unsolo, then raise it until the drums get heavier.

- Stop as soon as the transients start to soften, and take a dB back off.

- High-pass the copy around 80 to 120 Hz if the low end is turning to soup.

If your compressor has a mix or dry/wet control, it does the same job in one instance, and it sidesteps the alignment problem below. Some people call that parallel compression too, and arguing about the name has never improved anybody's drums.

## The alignment problem

Two paths only stay a blend if they stay in time. Any plugin that reports latency will be compensated by the host, but a plugin that adds delay without reporting it, or a lookahead setting you forgot about, smears the two copies against each other and thins the result. The symptom is a blend that sounds worse as you raise it rather than louder, and often a hollow ring around the low mids.

Check it by inverting the polarity of the compressed copy with the compressor bypassed: the two should cancel to near silence. If they do not, the paths are not aligned, and no amount of fader is going to fix it.

[DRUGS](https://gazillionindustries.com/drugs.html) has MIX on the face with zero latency anywhere in the path, so the dry signal stays sample-aligned with the wet one and parallel compression does not comb-filter at any setting. It is free.

## Where it costs you

Parallel compression raises the average level of everything it touches, which means noise, bleed and the low hum under a sampled break come up with the drums. On a clean modern kit that can sound like someone left a preamp on. Kick and 808 territory gets crowded too, because the blended copy fills the gaps the kick was using; high-passing the copy or ducking it against the kick gives that space back. See [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) if the low end is the part that stopped working.

It is also easy to overdo on a whole mix. Weight on a drum bus reads as power; weight on the master reads as fatigue by the second chorus.

## Why parallel compression can make drums thinner

If the compressed copy arrives later than the dry one and nothing compensates for it, the two signals comb. The first cancellation sits at one over twice the delay, so the size of the hole is set by the latency of whatever is on the parallel path — usually the plug-in's own reported latency, or a buffer the host did not compensate.

- **32 samples (0.7 ms at 44.1 kHz)**: first null near 689 Hz · at 48 kHz, 750 Hz

- **64 samples (1.5 ms at 44.1 kHz)**: first null near 345 Hz · at 48 kHz, 375 Hz

- **128 samples (2.9 ms at 44.1 kHz)**: first null near 172 Hz · at 48 kHz, 188 Hz

- **256 samples (5.8 ms at 44.1 kHz)**: first null near 86 Hz · at 48 kHz, 94 Hz

- **512 samples (11.6 ms at 44.1 kHz)**: first null near 43 Hz · at 48 kHz, 47 Hz

Those are all in the range a drum bus lives in, which is why the symptom reads as "thinner" rather than as an obvious filter. To check it, invert the parallel channel and solo the pair: aligned copies cancel to silence, and whatever is left is the misalignment.

## How to set it up in FL Studio

Route your drums to a mixer track as usual, then pick an empty mixer track for the compressed copy. Select the drum track, and click the small arrow at the bottom of the empty track to enable a send into it. The drum track still reaches the master on its own path, so what you have now is the dry signal going where it always went plus a copy arriving on the second track. The arrow doubles as the send level.

Put the compressor on the second track and set it far harder than you would ever use in series, then bring the send level up from silence until the drums thicken. Judge it by muting the compressed track, not by bypassing the compressor, because bypassing leaves the copy summing with the dry signal at unity and that is a different sound entirely.

FL Studio compensates for plugin latency on its own, so a plug-in that reports its delay honestly will stay aligned. One that does not report it will not, and the symptom is the one described above — the low end going thin rather than anything sounding obviously late. The test is the same: invert the compressed track and pull the send up with the compressor bypassed. Aligned copies cancel toward silence.

## Questions people ask

### What is the purpose of parallel compression?

To raise the quiet parts of a sound without flattening the loud ones. You get the density of heavy compression and the transients of no compression at the same time, set by one fader.

### How do I do parallel compression?

Send the track to a second bus, compress that bus hard with a fast attack and 10 to 20 dB of gain reduction, then blend it in under the original until the sound gets heavier. Or use the mix control on a compressor that has one, which does the same thing in a single instance.

### What is the best compressor for parallel compression?

One you can push into 15 dB of gain reduction without it turning to mush, with a release that recovers between hits. The crushed copy is meant to sound wrong on its own, so transparency matters less here than on the main bus.

### Is parallel compression the same as New York compression?

Yes. New York compression is the same blend under a different name, usually with very heavy gain reduction on drums.

## What DRUGS does

DRUGS is our free one-knob bus compressor for drums. **DOSE** moves the transfer curve, the knee, the attack and the release together, the way a single hardware macro would, and makes a drum bus denser rather than louder: peak level barely moves across the whole range of the knob. **MIX** is the dry/wet, with zero latency anywhere in the path, so the dry signal stays sample-aligned with the wet one. Auto-makeup is applied after the gain cell, so setting level cannot disturb the dynamics.

Two copies of the drums, one fader. That record you wore out was never doing anything else.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
