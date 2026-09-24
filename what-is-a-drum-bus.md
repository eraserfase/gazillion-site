# What is a drum bus, and why put things on it?

> A drum bus is one channel every drum track is routed into. How to build one in any DAW, what belongs on it, what does not, and why glue happens there.

Source: https://gazillionindustries.com/what-is-a-drum-bus/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Eight drum tracks, a compressor on each, and the kit still sounds like a pile of files. The fix is usually one channel they all arrive at first.

A drum bus is a single channel that every drum is routed into before it reaches the master, so the kick, snare, hats and percussion pass through one fader and one set of plug-ins. People put things on it because processing the sum is a different operation from processing each part: one compressor reacting to the whole kit makes every drum move with every other drum, and that shared movement is what everyone means by glue. Build one in any DAW by making a group or aux channel, sending the drum tracks there instead of to the master, and putting your processing on that channel.

## The short version

- **What it is**: one channel that every drum track is routed into

- **How to make one**: new group or aux channel; drum outputs point at it, it points at the master

- **Why bother**: one fader for the whole kit, and one processor reacting to all of it at once

- **Put on it**: 1–3 dB of gentle compression, saturation, broad EQ, a parallel copy

- **Keep off it**: anything belonging to one drum: gating, tuning, surgical EQ, a fix for one bad hit

- **Order**: balance the drums, then route, then process

- **Test**: match the level and bypass the bus: louder is not the same as better

## What a bus actually is

A bus is a destination that audio can be sent to. In a DAW it appears as a channel with nothing recorded on it: signal arrives from other channels, gets added together, and leaves through one fader. A drum bus is that channel with the drums pointed at it.

Summing is the whole mechanism. Once the kick, the snare, the hats and the shaker all arrive at the same place, anything sitting on that channel sees them added into a single signal. A compressor there has no idea which drum is which. It reads the sum, and it applies its gain change to the sum.

Two things follow. One fader now moves the whole kit against the bass and the vocal, which is worth the routing on its own. And the processing is shared, which is the part people mean when they tell you to put things on the drum bus.

## How do you make a drum bus in any DAW?

- Create a channel that takes its audio from other channels rather than from an input. Different programs call it a bus, a group, an aux, a submix or a stem; the routing is the same in all of them.

- Set the output of every drum track to that new channel instead of to the master.

- Set the output of the new channel to the master.

- Play the busiest bar. The drums should still sound, and the meter on the new channel should move. A silent meter means some tracks are still going straight to the master.

- Pull the new fader down a few dB before you touch anything else. Eight channels summed into one arrive louder than any of them was on its own.

- Balance the individual drums first. Then put processing on the bus.

Some programs will do the first three steps for you if you select the drum tracks and choose the option about grouping them. Open the routing afterward and look at what it did.

## Why is processing the sum different from processing each drum?

A compressor on the snare track knows about the snare. It is a local decision: this hit jumped 4 dB, pull it down. Nothing else in the kit is affected, because nothing else in the kit is in that compressor.

Put the same compressor on the bus and every element now controls the gain of every other element. When the kick lands, the hats duck a fraction and come back. When the snare rings, the ring holds the whole bus down a hair and then lets it up. Those movements are small, shared and locked to the bar, and the ear reads them as one source in one room rather than several files playing at once. That is glue, and there is nothing mystical in it. [Glue compression](https://gazillionindustries.com/glue-compression/) covers the settings; the routing above is what makes them possible.

The same logic applies to anything nonlinear. Saturation across the sum works on the kick and the snare together, so the two interact inside the process instead of being colored separately on their own tracks. Whether you want that is a taste question. That it happens is a routing question, and the drum bus is where you decide it.

## What belongs on a drum bus

The test is simple: does this decision apply to the kit as a whole? If yes, the bus is the right place. If it applies to one drum, it belongs on that drum.

**Gentle compression.** One to three dB of gain reduction on the loudest hits, a slow attack so the front of each hit survives, a release timed to the tempo. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) goes through the controls one at a time. Keep it small here: the bus is where the kit agrees, not where problems get solved.

**Saturation or soft clipping.** Weight and a little peak control at the same time, applied to everything so the kit thickens as one object. It also stops the kick from being the only thing that ever reaches the ceiling.

**Broad EQ.** A shelf, a high-pass under the whole kit, a wide dip where the drums are covering the bass. Gentle, musical moves that you would otherwise have to repeat on six channels.

**A parallel path.** Feed a copy of the bus into a second channel, crush it, and blend it underneath, so the transient stays intact on the dry path and the body comes up behind it. See [parallel compression](https://gazillionindustries.com/parallel-compression/) for the routing and the level matching.

## What does not belong on it

Most drum bus disasters are a per-track decision made in the wrong place.

**A fix for one drum.** If the hi-hat is harsh, the bus makes the whole kit pay for the hi-hat. Take the harshness out on the hi-hat channel and let the bus do its job on a kit that already works.

**Surgical EQ.** A narrow notch on a ringing tom takes that frequency out of the snare, the room and the cymbals as well. Narrow cuts are track work.

**Gates, tuning and pitch.** Anything that has to be timed or tuned to one drum cannot be timed or tuned to five at once.

**Reverb as an insert.** An insert wets everything, including the kick. Use a send from the bus to a reverb channel so you keep control of how much and of what.

**Loudness processing.** A limiter pushed hard on the drum bus eats the transients that carry the groove, and it does that while the bass and the vocal are not even in the room yet. Loudness is a later stage with a different job.

**Hard stereo widening.** Widening the sum takes the kick and the snare off the center along with everything else.

## Bus, group, aux, send: which word means what?

The terminology comes from consoles and every DAW kept a different piece of it. Three distinctions change what you hear.

**Output routing versus a send.** Routing an output moves the entire signal to the new destination; the track no longer reaches the master any other way. A send copies the signal at a level you choose and leaves the original path alone. Drum busing is output routing. Reverb and parallel paths are sends.

**Pre-fader versus post-fader sends.** A post-fader send follows the track fader, so the amount you send changes when you rebalance. A pre-fader send ignores the fader, which is what you want for a parallel path you plan to set once and leave.

**A control group is not the same animal.** VCA faders and link groups move several faders together without summing the audio anywhere. Levels move; no shared processing happens, because there is no single channel for a compressor to sit on. If someone tells you to glue the drums and you build a control group, nothing will glue.

## Do buses go into other buses?

Routinely. The drum bus usually feeds a mix bus rather than the master, and inside the drums you can split further: kick and snare into one channel, room and overheads into another, both arriving at the drum bus. Each layer is one more place to treat things as a unit.

Two rules keep it from becoming a maze. Every layer should earn a decision you would actually make there, or it is a channel you pass through and forget to check. And the further up you go, the less each stage should do, because movement created at the top is imposed on everything under it. A drum bus can work hard, since the kit is one instrument and the interaction is the point. A mix bus should barely move.

## Where it costs you

Summing raises level. Eight tracks that each peaked comfortably can arrive at the bus hot enough to change how everything on it responds, and saturation cares a great deal about input level. Set the fader before you judge the processing.

The loudest element drives everything. On a drum bus that usually means the kick decides how much gain reduction the hats get, which is the mechanism behind glue and also the reason heavy bus compression can duck a hi-hat pattern you spent an hour programming.

Parallel paths can drift. Mute and unmute the processed copy while both are playing: if the drums thin out when it comes in, the two paths are not aligned and blending will not fix it.

And the oldest trap: a bus compressor with make-up gain is louder, and louder wins any quick A/B. Match the levels first, then listen to the quiet bars rather than the drops.

## Questions people ask

### What is a drum bus?

A channel that all the drum tracks are routed into before the master, so the whole kit shares one fader and one chain of plug-ins. Anything on that channel treats the drums as a single signal rather than as separate tracks.

### What is the difference between a drum bus and a group or an aux?

In most DAWs, nothing that matters. The names come from different consoles: a group is usually fed by output routing, an aux by sends, and both are channels that sum other channels. A control group or VCA is the exception, because it moves faders without summing audio, so no processing can sit across the sum.

### Do I need a drum bus if I am working from one sampled break?

The loop is already a summed signal, so the routing buys you nothing until you add something to it. As soon as there is an extra kick, a clap layer or a shaker, route the loop and the added hits into one channel so they get compressed together and start behaving like one kit.

### Should the drum bus go to the master or to a mix bus?

To a mix bus if you use one, and to the master if you do not. Either way the point is that the drums arrive somewhere as one signal, with their internal balance already settled.

### What should go on a drum bus first?

Compression, because the shared gain movement is the effect everyone is after and it is the hardest one to get any other way. Saturation second, for weight and peak control. Broad EQ after that, and only where the kit as a whole needs it.

### How much compression should a drum bus get?

One to three dB of gain reduction on the loudest hits for glue, with the meter returning to zero in the quiet bars. More than that is a character decision rather than a cohesion one, and it is worth making deliberately: heavy bus compression trades separation for movement.

### Why do my drums sound worse after I made a drum bus?

Usually level. Summing raised the input to everything on that channel, so plug-ins are hitting harder than the settings suggest. Pull the bus fader down, match the level to bypass, and judge it again.

## What DRUGS does

DRUGS is our free bus compressor for drums, with one macro control called **DOSE** that moves the transfer curve, the knee, the attack and the release together. There is no threshold to find and no ratio to set, which is most of the work on a drum bus gone. The release is adaptive: a hit gets the shorter time so gain recovers inside the gap, and sustained material gets the longer one so it holds still. **MIX** gives you the parallel path without building one. It is free: [DRUGS](https://gazillionindustries.com/drugs.html).

Route the kit into one channel, put one thing across it, and listen to the hats while the kick plays. Everything else on this page follows from that.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
