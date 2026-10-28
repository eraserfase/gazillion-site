# Free glue compressor plugins, and the one we would use

> What makes a compressor glue, why the Glue Compressor is missing from FL Studio and Live Intro, the free plugins that fill the slot, and how to set one.

Source: https://gazillionindustries.com/free-glue-compressor/  
Published 2026-10-12, updated 2026-10-28. By Gazillion Industries, who make DRUGS.

---

Somebody watches a tutorial, sees the Glue Compressor sitting across a drum group in Ableton, and opens their own DAW to find it is not there. FL Studio does not have it. Live Intro does not have it. The search that follows is the one you just typed.

A free glue compressor is any bus compressor with a slow-enough attack, a release you can set against the tempo and a gentle ratio, pulling one to three decibels across a group. Nothing about glue needs a paid plugin. DRUGS is ours, free for Mac and Windows, and does it from one control called DOSE, with the release handled for you.

## The short version

- **What we would use**: DRUGS — ours, free, one knob, on the drum bus

- **What makes a compressor glue**: the job, not the box: a group, 1–3 dB, timing set to the tempo

- **Starting point, dialing it yourself**: 2:1 to 4:1, 10–30 ms attack, release near an eighth note

- **Live Intro or FL Studio**: no Glue Compressor; a free plugin fills the slot

- **Formats**: DRUGS: VST3 and AU on Mac, VST3 on Windows

- **What to skip**: anything sold as glue that only gets louder

## What makes a compressor a glue compressor

Glue is a use, and almost any compressor can be put to it. Put one across a group, and every element in the group now moves the gain of every other element. The kick lands and the hats dip a fraction of a decibel. The snare rings and the room comes up as the gain recovers. Those small shared movements are what the ear reads as one performance instead of eight files.

What earns a compressor the label is how well it behaves at low gain reduction. A good glue compressor sounds like something at two decibels, recovers without a wobble, and stays out of the way of the front edge of the hit. That is why the name stuck to console-style bus compressors. They were built for exactly that range. If you want the long version of the mechanism, the [glue compression guide](https://gazillionindustries.com/glue-compression/) has the arithmetic.

**DOSE 12.** The line dips on the loud hits and sits flat between them. On a meter, that is what glue looks like.

## Why the Glue Compressor is missing from your DAW

Ableton's own manual describes the Glue Compressor as an analog-modeled compressor made with Cytomic, based on the bus compressor from a famous 1980s mixing console. Ableton's edition comparison lists it in Live Standard and Suite and leaves it out of Intro. FL Studio, Logic and Reaper ship their own compressors and none of them is that one.

Cytomic sells its own plugin, The Glue, for $99. That is where most people's search for a free alternative starts. The good news is that the name is doing more work than the circuit. What made the Glue Compressor useful on a drum group was an attack you could set slow enough to let the hit through, a release you could match to the song, a soft clip switch on the output (the manual caps it at −0.5 dB) and a forgiving character at low gain reduction. All four exist in free plugins, and two of them are already built into ours.

## Free glue compressor options, and where each fits

Three kinds of free compressor do glue well. Pick by what you want to control.

### The decision already made: DRUGS

DRUGS is ours and it is free. One knob called DOSE moves the curve, the knee, the attack and the release together, so the bus gets denser while the peak level barely moves. The release adapts to what is in front of it: a hit gets the short time, sustained material gets the long one. GAIN adds 5 dB after the compressor and a soft ceiling at −0.3 dBFS sits after that, which covers the job the soft clip switch did on the stock device. It is voiced for drums and breaks, and it lives on the drum bus.

### Full control, clean: TDR Kotelnikov

Tokyo Dawn's free Kotelnikov gives you separate release controls for peak and RMS content, a sidechain high-pass and a delta preview that plays only what the compressor is removing. Its maker says it does not try to emulate any existing device. It is the pick if you want to set every number yourself and hear nothing added.

### Character, two knobs: Klanghelm DC1A

Klanghelm lists DC1A as a free "effortless character comp". It sits between the other two: more color than Kotelnikov, fewer decisions than a full compressor.

Our honest ranking for a drum group is the order above, and the reason is time. The other two are good tools that ask you to know your attack and release. DRUGS asks you to listen.

[DRUGS](https://gazillionindustries.com/drugs.html) is a free one-knob bus compressor for drums, Mac and Windows. Put it on the drum group, turn DOSE up until the room comes forward under the hits, and stop.

## How to set any free glue compressor

If you go with a compressor that has the usual controls, these settings get you to glue in under five minutes. Work on a loop with every drum playing.

- Route every drum track to one group or bus.

- Insert the compressor on that group and set the ratio to 2:1.

- Set the attack to 20 ms.

- Set the release to one eighth note at your tempo (333 ms at 90 BPM, 250 ms at 120 BPM).

- Lower the threshold until the meter shows 1 to 3 dB of gain reduction on the loudest hits.

- Turn on the sidechain high-pass if it has one and set it near 100 Hz.

- Raise the makeup gain until the bus matches its bypassed level.

- Toggle bypass at matched level and keep it only if the kit sounds like one take.

The release number is the one that decides it. An eighth note is 60,000 divided by the tempo, divided by two, so at 90 BPM a quarter note lasts 667 ms and an eighth lasts 333. A release much shorter than that pumps audibly on every kick. Much longer, and the gain never recovers between hits, so the compressor turns into a fader.

With DRUGS, steps two through seven are one knob. Insert it on the group, raise DOSE, and use GAIN and the bypass to compare at matched level.

## Glue in FL Studio and Live Intro

The fix is the same in both: a third-party plugin on a bus. In FL Studio, route the drum channels to one mixer track and load the compressor there. In Live Intro, put the drum tracks in a Group and load the plugin on the Group track. DRUGS installs as VST3 on Windows and as VST3 and AU on the Mac, and runs in FL Studio and Ableton Live among others, so either path works.

If you are in full Live and already have the stock device, the [Ableton drum bus guide](https://gazillionindustries.com/drum-bus-compression-in-ableton-live/) covers its settings. The reason to add another compressor anyway is speed on a drum bus. The stock device asks for five decisions where DRUGS asks for one.

## On the mix bus

On the mix bus the job changes from shaping drums to holding a whole record together without anyone noticing. That calls for a compressor that adds little of its own sound at low gain reduction, an attack slow enough to let transients through, and a release that follows the song.

Tokyo Dawn's free Kotelnikov is built for that seat. Its maker describes stereo linking options optimized for the stereo bus, separate release controls for peak and RMS content, and a sidechain high-pass. It does not try to emulate any device. Klanghelm's free DC1A, which its maker calls an "effortless character comp," is the option if you want the mix bus to sound like something.

DRUGS is voiced for drums, and that is what we sell it for. Some people put it on the master anyway; one review on its page reads "need this in my ableton master chain." Try it there if you like what it does to the drums, but do the drum bus first.

## What glue costs

Glue spends dynamics, and it spends them quietly. A group compressed into one solid block sounds finished on an eight-bar loop and tiring across three minutes, because the fills stop jumping out. Bounce the whole arrangement and listen once before deciding the bus is done.

It also couples everything to the loudest element. With a full-range detector the kick sets the gain for the whole kit, so a louder kick ducks the hats more. A sidechain high-pass reduces that, and so does balancing the drums before you compress them rather than after.

## Questions people ask

### Is there a free glue compressor plugin available?

Yes. DRUGS is ours and free for Mac and Windows, built for the drum bus. TDR Kotelnikov and Klanghelm DC1A are also free. None of the three is a time-limited trial.

### Can any compressor be a glue compressor?

Mostly, yes. Glue describes the job: a compressor across a group, working gently, with timing that follows the song. Some compressors sound better doing it than others, especially at one to three decibels of reduction, but the settings decide more than the brand.

### What is the best glue compressor?

For a drum bus, ours, and it is free: one control, an adaptive release and a soft ceiling on the output. The paid reference for the console sound is Cytomic's The Glue at $99. Either way, an attack around 20 ms and a release matched to the tempo will matter more than the purchase.

### What are the best free VST compressors?

It depends on the slot. For glue on drums, DRUGS. For clean, detailed control on a mix or a master, TDR Kotelnikov. For quick character, Klanghelm DC1A. The [free compressor guide](https://gazillionindustries.com/best-free-compressor/) covers the rest of the jobs.

### Is there a free alternative to the Ableton Glue Compressor for FL Studio?

Any of the free compressors here run in FL Studio as plugins. DRUGS runs there as a VST3 on Windows and as VST3 or AU on the Mac. Put it on the mixer track the drums are routed to.

## What DRUGS does

DRUGS is our free bus compressor with one macro control. **DOSE** moves the transfer curve, the knee, the attack and the release together, so the drum bus gets denser rather than louder. The release is adaptive and has no user control. Auto-makeup sits after the gain cell, **MIX** blends dry and wet with zero latency so parallel never comb-filters, **GAIN** adds 5 dB on the way out and **LIMIT** holds the output under −0.3 dBFS. It installs as VST3 and AU plus a standalone app on macOS 10.13 or later, and as VST3 on 64-bit Windows 10 or later.

The tutorial had a device you did not have. Now you have one it did not mention.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
