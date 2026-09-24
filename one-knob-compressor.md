# What is a one-knob compressor, and is one knob enough?

> A one-knob compressor moves several linked parameters along a tuned curve. What that macro gives up, what it buys, and when you still want threshold and ratio.

Source: https://gazillionindustries.com/one-knob-compressor/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

One knob, one decision, and no meter to read. Whether that is enough depends on the job.

A one-knob compressor is a compressor whose threshold, ratio, knee and timing are fixed to a curve, with a single macro moving all of them together. One control, one decision. For a drum bus, a glue stage, or any job where you want the thing denser and you do not much care how, one knob is enough and it is faster. Reach for threshold and ratio when you have a specific problem on a specific source: the snare that jumps on one hit, a vocal that needs holding on the loud line and left alone on the quiet one, or any work where the fix is surgical.

## The short version

- **What it is**: several linked parameters moved along a curve someone already tuned

- **What you give up**: setting the timing against your tempo and your source, and choosing character separately from amount

- **What you get**: speed, and a floor under how badly it can be set

- **Good enough for**: drum bus, glue, a parallel copy, holding a balance together while you write

- **Not enough for**: one problem hit, ducking, de-essing, anything surgical

- **The test**: match the level and bypass; louder is not the same as better

## What is actually under the knob

Every compressor has the same handful of decisions in it: when to start working, how hard to pull once it does, how abruptly to arrive at that, how long to wait before it moves and how long to take coming back. A full-control compressor hands you all five and lets you combine them any way you like. A macro fixes the relationship between them and gives you one position along it.

So at a low setting the curve is shallow and only the loudest peaks touch it. Further up, the point at which it starts working has dropped, the slope has steepened and the knee has softened to keep the arrival from being obvious. You are not choosing those values. You are choosing a spot on a path that runs through them, and somebody picked that path by ear against real material. If none of the five terms mean anything yet, start with [what a compressor is](https://gazillionindustries.com/what-is-a-compressor/) and come back.

That linkage is the whole design. A full-control compressor can be set to combinations that never occur in a good mix — a 2 ms attack with a 2 second release on a busy break, a hard knee at 20:1 on a room mic. Those settings exist because the parameters are independent, and most of them are wrong. A macro deletes them from the instrument.

## What a single macro gives up

Three real things, and it is worth being plain about each.

**Your tempo.** Release is a tempo question before it is a taste question, and a fixed curve cannot know your bpm. The arithmetic is one division: 60000 divided by the tempo gives the quarter note in milliseconds, so at 90 bpm the quarter is 667 ms, the eighth 333 ms and the sixteenth 167 ms. On a busy break a release much longer than that sixteenth never gets back up before the next hit. A designer picking one release time is picking a compromise across every tempo you might use. Some one-knob designs answer this with an adaptive release that reacts to the signal in front of it, which gets close, though reacting to a transient and knowing where the bar is are different things.

**Character separately from amount.** On a full compressor, 3 dB of gain reduction at a gentle ratio and 3 dB at a steep one sound different: same number on the meter, different behavior underneath. You can hold the amount and change the flavor, or hold the flavor and change the amount. On a macro the two travel together. More density comes with more of whatever character the curve has at that point, and you take both or neither.

**The jobs that need a number.** Ducking a pad under a kick, holding dialogue at a known level, de-essing, keying off a different track, a lookahead you can set. All of those need a threshold you can place deliberately, and a macro has nowhere to put it.

## What it buys

Speed, first, and speed matters more than people admit. The compressor on a drum bus is usually a ten-second decision made forty times a week. A control set that takes a minute to get right gets skipped, or gets left at whatever the last session needed.

Second, and this is the larger one: a macro cannot be set badly. The commonest way to hurt a drum bus is an attack fast enough to catch the stick, which makes a kit sound softer and further away while the meter says the compressor is working hard. That setting is reachable on every full-control compressor ever made, and a lot of people reach it. A tuned path does not pass through it at any position of the knob. The worst thing a macro can do is too much of a thing that was pointed the right way.

Third, it keeps you listening. Watching gain reduction is a habit that survives long after it stops being useful, and a plug-in with nothing to read gives you nothing to watch. Turn it until the drums sit the way you want and stop. The judgment is the same one you were supposed to be making with the numbers.

## When you want threshold and ratio

Four cases, clearly.

**A specific problem on a specific source.** One snare hit 4 dB above the others, a bass note that jumps on the open string, a singer who leans in on the chorus and backs off on the verse. You want the compressor to act on that and leave everything else alone, which means placing the threshold exactly where the problem starts and nowhere lower.

**When the compressor is doing a job that is not tone.** Level for broadcast, a hard ceiling before a converter, a sidechain that has to open and close in time. These are engineering tasks with a right answer, and the right answer is expressed in numbers.

**When you want it audible in a particular way.** Hard knee, high ratio, fast release, a room mic pumping on purpose. That is a sound you go after deliberately, and you need the controls to aim it.

**Staging.** Two compressors with different timings, one catching peaks and one holding the body, is a real technique and it needs both sets of controls. A macro is one stage with one personality.

None of that is an argument against one knob. It is an argument about which tool belongs on which insert. Most producers end up with both, and reach for the fast one far more often. [Drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/) goes through the full control set one at a time if you want to see what you are choosing between.

## Is one knob enough on a drum bus?

Usually, yes, and the reason is specific rather than sentimental. Bus compression has a narrow band of good answers: an attack slow enough to let the hit through, a release that recovers before the next accent, a modest ratio, a few dB on the loudest hits. Ask ten engineers and you get settings that cluster. A macro is a good fit exactly where the range of correct answers is small, because the curve can be aimed straight down the middle of it. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) covers what that middle looks like.

Where it gets thinner is material that has already been through the mill. A break lifted off a record arrives compressed, and a second stage on top does less than the meter suggests. And if one element dominates the detector — a kick far louder than everything else — a full-control compressor lets you filter the sidechain so it stops steering the whole bus. A macro does not give you that lever.

## How do you set a compressor with no numbers?

The same way you should have been setting one with numbers. Turn it up past where you think it should be, until the drums are obviously moving, then come back down until the movement stops being the thing you notice. Then match the level and bypass it, twice, listening to the tail and the room rather than the hit.

The trap is unchanged from the full-control world: compression with make-up gain is louder, and louder wins any quick comparison for about three seconds. A macro does not protect you from that one. Nothing does except matching the loudness before you decide.

## Questions people ask

### Does a one-knob compressor have a threshold?

Almost always, somewhere inside. The distinction is whether the panel gives you one to set. A macro design keeps the threshold and the ratio internal and moves them along a fixed relationship, so the behavior is there while the controls for it are not.

### Is a one-knob compressor a real compressor?

Yes. It does the same thing to the signal: it lowers the gain when the input gets loud and brings it back afterward. The simplification is in the interface, not in the processing.

### Will using one knob stop me learning compression?

Partly, and it is worth knowing which part. Full controls teach you what attack and release do, because you can hear each one move on its own. A macro teaches you what more and less sound like on a particular source, which is the judgment you use most. Learn attack and release once on a compressor that exposes them, then stop paying for that lesson every session.

### Is one knob enough on a mix bus or a master?

On a mix bus, often, if the amount available at the low end of the range is small enough to be subtle. On a master, most people want a threshold, because the job there is usually to hold a known level rather than to add density, and that is a number.

### What does a macro control actually change?

Several parameters at once, along a curve set by whoever tuned it. Moving it up typically lowers the point at which compression begins, steepens the slope, softens the knee and shortens the timing, all in a fixed relationship to each other. One position, several moves.

### Can I get a one-knob compressor to do surgical work?

Not really, and trying is the wrong use of it. Surgical work means acting on one part of the signal and leaving the rest, which requires placing a threshold. Put a full-control compressor on the offending track and keep the macro on the bus.

## What DRUGS does

[DRUGS](https://gazillionindustries.com/drugs.html) is our drum bus compressor with one macro, called DOSE. The curve, the knee, the attack and the release move together underneath it, and the controls do not expose a threshold or a ratio for you to set. It is free, so the cheapest way to settle the argument on your own material is to put it on a bus and turn it up until it sounds good.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
