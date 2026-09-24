# What order should the plug-ins on my drum bus go in?

> Five plug-ins on a drum bus and it sounds worse than bypass. Here is the order each stage belongs in, why each position matters, and why removing two helps most.

Source: https://gazillionindustries.com/drum-bus-chain-order/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Five plug-ins went onto the drum bus one at a time, each sounding like an improvement on the way in. The bus now sounds smaller than the raw sum did.

Order the chain by what each stage needs to hear. Corrective EQ first, so the compressor is not reacting to low mids you meant to remove anyway. Compression second, to make the kit move as one thing. Tone EQ third. Saturation fourth, for weight. A clipper or limiter last and alone at the top, catching the peaks that survived. Level-match every stage against its own bypass before deciding it helped. If the bus still sounds worse than it did empty, stop reordering: five processors is more than most drum buses need, and removing two fixes it faster than resequencing five.

## The short version

- **1. Corrective EQ**: cuts only — high-pass, and whatever mud would otherwise trigger the compressor

- **2. Compressor**: small, shared movement, set against the tempo

- **3. Tone EQ**: boosts here, where the compressor cannot pull them back down

- **4. Saturation**: weight and harmonics, driven by a signal that is already even

- **5. Clipper or limiter**: last, alone, one of them, catching what survived

- **Every stage**: output matched so bypass does not change the loudness

- **The real fix**: delete two of the five and re-listen

## Why does the order change the sound at all?

Two kinds of plug-in care where they sit, and one kind barely does.

A compressor cares because its detector hears whatever arrives at its input. Move something in front of it and you have changed the thing it is reacting to, which changes when it pulls down, how far, and on which element of the kit. Saturation and clipping care because they are level-dependent: anything before them that raises or lowers level changes how hard they are driven, and therefore how much harmonic content comes out.

An EQ mostly does not care. Cut 300 Hz at the top of the chain or the bottom and the filter does the same arithmetic either way. What changes is what the EQ is feeding. That is the whole of the order question: which stages are listening, and what you are letting them listen to.

## Compression before saturation, or saturation before compression?

Both are usable. They are different sounds, and the difference is not subtle once you know what to listen for.

**Compressor first.** The compressor meets the full dynamic range, so gain reduction tracks the actual hits and the glue behaves the way the settings suggest. The saturator then receives a signal that is already even, so it gets driven to roughly the same place bar after bar. The color is consistent, the level is predictable, and the whole bus sits still. This is the safer order and the one that usually sounds tidier.

**Saturation first.** The saturator meets the raw peaks. Loud hits get driven harder than quiet ones, so the color moves with the performance, and the loudest transients get rounded before anything else touches them. The compressor then sees a signal with less distance between peak and average, so at the same threshold it does less work and reacts more to the body of the kit than to the stick. The result is looser and more record-like, and harder to control.

Choose by the complaint. If the bus is uneven, compress first and let the saturator work on the result. If the bus is thin, saturate first and let the compressor tidy up what comes out of it. Doing both at once and hoping is how you end up with five plug-ins.

One practical note: saturation before a compressor moves the level going into the compressor, so the threshold you set earlier is no longer the threshold you wanted. Re-set it after any reorder. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) covers getting the timings right once the signal in front is settled.

## Where does EQ go, before or after the compressor?

Before the compressor you are changing what it listens to. After it you are changing the result. Those are two different jobs and they want two different EQ moves.

Cuts belong before. A high-pass in front of a drum bus compressor stops the lowest kick energy from operating the gain cell for the whole kit, which is the most common reason a hi-hat pattern ducks on every beat. A wide dip in the low mids before the compressor stops the mud from triggering gain reduction that then pulls down the snare as well. You are doing sidechain work with an ordinary EQ, and it is more effective than any timing adjustment you can make afterward.

Boosts belong after. Add 6 kHz in front of a compressor and the compressor hears more top, reacts to it, and pulls some of it back down. You are paying for a boost and then paying a compressor to undo part of it, and the amount it undoes changes with every loud hit. Put the same boost after and it lands exactly where you put it.

The exception is when the boost is the thing you want the compressor to react to, which happens more often than the rule suggests. Push the snare band before the compressor and the snare starts driving the gain movement for the whole bus. That is a deliberate effect, worth reaching for on purpose and worth removing when it arrived by accident.

## Why a clipper or a limiter belongs last

A clipper and a limiter both set a ceiling, and a ceiling only holds if nothing comes after it. An EQ boost after a limiter puts peaks straight back above the line. A saturator after a clipper rounds the flat tops and changes the level again. Whatever you place after your ceiling stage is quietly undoing the one job that stage exists to do.

There is a second reason, and it matters more day to day. A clipper in the middle of a chain flattens transients, and every stage after it is then working on a signal whose peaks are already gone. The compressor has less to grab. The saturator has less to react to. You lose the ability to hear what those stages are actually doing, and you start turning them up to compensate.

One ceiling stage, at the top, doing a small amount. A clipper and a limiter stacked on a drum bus is two solutions to a problem you probably only have once.

[DRUGS](https://gazillionindustries.com/drugs.html) is our free one-knob bus compressor for drums. It is one stage, and it goes where any drum bus compressor goes: after the cuts, before the tone shaping and the weight.

## How to rebuild the chain tonight

- Bypass all five and match the bus level to where it was. Listen. Write down what is actually wrong in one sentence.

- Turn the first plug-in back on. Set its output so bypassing it does not change loudness. Decide whether it earns its place on its own.

- Add the next one. Match again. Judge again. Anything that does not survive a level-matched bypass comes off and stays off.

- Stop when the sentence you wrote down has been answered, even if that happens at two plug-ins.

- Put the ceiling stage on last, and only if the peaks still need it.

- Leave it, come back, and check the quiet bars rather than the loudest one.

Building upward like this is slower for one evening and faster for every evening after, because you find out which stage was the problem instead of guessing at an order.

## Level-match, or none of this tells you anything

Every stage in a drum chain has some way of making things louder: makeup gain, output trim, drive, a boost. Louder wins a quick comparison almost every time, and it wins it for about two seconds, which is exactly as long as an A/B lasts.

Five plug-ins added one at a time, each judged without matching, is five consecutive decisions to be a little louder. The bus ends up hotter and flatter, and nothing in the chain looks guilty, because each stage only added a small amount.

Match on the meter first, then trim by ear on a quiet bar. [Gain staging](https://gazillionindustries.com/gain-staging/) goes through the levels themselves, which is a separate question from the order and worth settling before you touch the order.

## Five plug-ins is usually the problem

Most drum buses want one processor, occasionally two. A compressor for movement, and sometimes something for weight or a ceiling on top. [Glue compression](https://gazillionindustries.com/glue-compression/) on its own does more for a kit than four stages arguing about the same three decibels.

When there are five, they are usually overlapping rather than cooperating. Two compressors doing the same small amount of gain reduction. A saturator and a clipper both rounding the same transients. An EQ boost near the top of the chain undoing a cut near the bottom. Each stage was a reasonable idea in the moment and the chain as a whole has no argument behind it.

Serial processing is not automatically wrong. Two gentle compressors, each doing a decibel, often sound better than one doing two. The test is whether each stage still earns its place with the level matched, judged on its own, in the order you settled. Two that do beat five that half do.

## Where it costs you

Reordering has a smaller effect than people expect, and it is always smaller than removing a stage. If the difference between two orders is hard to hear once the levels match, the order is not where your evening should go.

Some stages have costs the order cannot fix. A linear-phase EQ adds latency and can smear a transient forward, which shows up on drums before anywhere else. Ordinary minimum-phase EQs shift phase around whatever they move, so a cut and a boost at nearby frequencies do not simply cancel.

And every dynamic or nonlinear stage takes something from the transient. That cost is the reason the answer to a chain sounding worse is so often subtraction.

## Questions people ask

### Should compression go before or after saturation on a drum bus?

Compression first gives an even, predictable result, because the saturator is driven to roughly the same place every bar. Saturation first gives a looser one, because the loudest hits get colored hardest and the compressor then reacts to the body of the kit rather than the transient. Pick by which complaint you are fixing.

### Does EQ go before or after compression?

Cuts before, boosts after. A cut before the compressor stops that frequency range from triggering gain reduction. A boost before the compressor gets partly pulled back down by the compressor reacting to it. Put a boost after the compressor and it stays where you set it.

### Where does a transient shaper go in a drum chain?

Before the compressor if you want the compressor to react to the shaped transients, which is usually the point. After the compressor it is repairing attack the compressor removed, and it is generally quicker to slow the compressor's attack down instead.

### Should a clipper go before or after a limiter?

Clipper first, limiter after, if you use both. The clipper takes the short peaks that would otherwise make the limiter work hard, and the limiter catches what is left. On a drum bus inside a mix, one of the two is nearly always enough.

### How many plug-ins should be on a drum bus?

One or two on most sessions. A compressor for movement, and optionally one stage for weight or a ceiling. If there are five, start by bypassing all of them, matching the level, and adding back only what survives on its own.

### My chain sounds worse than bypass. What should I check first?

Level. Match the output to bypass and compare again, because a chain that is 3 dB louder flatters itself. If it still loses with the levels matched, remove stages one at a time from the middle of the chain, not from the ends.

## What DRUGS does

[DRUGS](https://gazillionindustries.com/drugs.html) is a bus compressor with one macro control, called **DOSE**, which makes a drum bus denser rather than louder. There is no threshold to re-set when you change the order of the chain, and the release adapts to what is in front of it, so a reorder that changes the signal reaching it does not leave a timing setting stranded. It is one stage, and on most drum buses it is the only one that has to be there.

Take the other four off and see how much of the sound you actually lose.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
