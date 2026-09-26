# Tape plugins for Logic Pro

> Logic loads Audio Units only. ChromaGlow covers saturation; speed, cassette noise and a transport need a plug-in. That one is TRIPLE OG, AU, $29.

Source: https://gazillionindustries.com/tape-plugins-for-logic-pro/  
Published 2026-09-22, updated 2026-09-26. By Gazillion Industries, who make TRIPLE OG.

---

Logic ships a very good saturation plug-in and no tape machine. ChromaGlow covers the harmonic side properly, with models of tube and analog gear, and it leaves speed, noise and the transport alone. Those three are most of what people mean by a tape sound, and they are the reason to load anything else at all.

So the thing you actually load is [TRIPLE OG](https://gazillionindustries.com/tripleog.html), our cassette tape simulation, $29, shipping as an Audio Unit on macOS so Logic finds it. **WOW FLUT** is the speed instability, **HISS** the noise bed, and **SLAM**, **SCRUB** and **CATCH** put the transport on the face rather than in a menu.

## The short version

- **Load this**: TRIPLE OG, AU on macOS, $29 — speed, noise, transport

- **Spend nothing first**: DRUGS is free and ships as an AU; use it to test the menu

- **Format**: Logic loads Audio Units only; VST3 will not appear

- **ChromaGlow**: Logic's saturation plug-in, under Distortion

- **Needs**: a Mac with an M1 or later chip to run it

- **On an Intel Mac**: ChromaGlow is absent; ours runs, macOS 10.13 or later

- **Not covered**: wow and flutter, cassette noise, a transport

- **Tape Delay**: a delay, not a tape machine; different job

## Where TRIPLE OG goes in a Logic session

On the bus, not the master. In Logic that is an Audio FX slot on the drum bus or the summing stack, picked from the Audio Units part of the plug-in menu. Match the level before you judge anything, because a tape path running a decibel hot always sounds better for the wrong reason.

Top half is the machine, bottom half is the tape, and the **SCRUB** strip along the bottom is played by hand.

- **Load it first in the chain.** Audio FX slot one on the drum bus, from the Audio Units menu.

- **Set DRIVE for thickness.** Stop at the point where the break stops sounding thin.

- **Bring AGE up to about 15 years.** Go further only when you want the wear to be audible on its own.

- **Set HISS against the quietest bar in the song**, not against a soloed loop.

- **Add WOW FLUT last**, and check the most tonal element in the arrangement for tuning before you commit.

- **Hold SLAM through the last beat of a bar and let go.**

WOW FLUT is where the number matters. In the render below, set to 65, playback speed moves between 0.941 and 1.071 of nominal — 105 cents flat to 119 cents sharp, a swing of more than two semitones peak to peak. On a drum break that reads as a machine. On a held chord it reads as bad tuning, which is the cost, and it is why the tonal parts get checked before the drums do.

The machine rather than the tape. **SLAM** is a stop you press, **SLAM RETURN** sets how long it takes to fall, and **CATCH** is the drag and the sprint back.

## Hear it

Same eleven seconds three times: clean, then the speed moving on its own, then a worn deck with the noise bed under it.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Wow and flutter 65** — speed moves between 0.941 and 1.071 — https://gazillionindustries.com/tripleog/tog-wowflutter.m4a

- **Age 35, hiss 45, drive 30, wow 40** — a worn deck — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

Rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits. Play them on a phone as well as on monitors; the speed movement survives a small speaker, and most of the harmonic work does not.

## The format question: Audio Units only

Logic loads Audio Units. It does not load VST or VST3, and a plug-in installed only as a VST3 simply will not appear in the menu no matter how many times you rescan. This catches people out constantly, because most plug-in makers lead with VST3 in their marketing and mention the AU build further down.

So check the AU build before you buy anything. TRIPLE OG installs on macOS as an Audio Unit alongside VST3 and a standalone app, macOS 10.13 or later, as a universal binary for Apple silicon and Intel.

If you want one of our Audio Units in your own plug-in menu before spending a cent, [DRUGS](https://gazillionindustries.com/drugs.html) is free: our one-knob bus compressor for drums, AU, VST3 and standalone, Mac and Windows, with a single DOSE control and a soft ceiling on the way out. It is a compressor, so it settles the install question rather than the tape one. Install it, rescan, and you know what our AU builds do in your setup.

## What ChromaGlow already covers

ChromaGlow is Logic's saturation plug-in, found under Distortion in the audio effect menu. Apple describes it as replicating the warmth and coloration of analog audio equipment by introducing harmonic distortion, with a nonlinear response and a subtle compression that tames transients. Its Model menu offers a range of saturation models including Retro Tube and Modern Tube.

One catch worth knowing before you plan a chain around it: ChromaGlow is available only on Macs with an M1 or later Apple silicon processor. On an Intel Mac it is not there, and since TRIPLE OG is a universal binary back to macOS 10.13, the older machine is not the thing standing between you and a tape sound.

The honest position, then, is that Logic already gives you harmonic thickening and you should use it. What sends people looking for a tape plug-in in the first place is the other three behaviors, and Logic has no device for any of them.

## The parts Logic has nothing for

- **Speed instability.** Nothing in Logic's stock set varies playback speed slightly and continuously the way a tape transport does. That is [wow and flutter](https://gazillionindustries.com/wow-and-flutter/), and it is the behavior you cannot assemble from other devices. On our panel it is **WOW FLUT**, built from several motions at unrelated rates rather than one sine.

- **A cassette noise floor.** Logic has noise generators; what a cassette needs is a filtered, level-matched, partly decorrelated bed that sits under the music rather than on top of it. See [tape hiss](https://gazillionindustries.com/tape-hiss/). Ours is **HISS**, with **AGE** from nought to sixty years moving wear, noise and stability together.

- **A transport.** Stopping, dragging, rewinding and coming back in sync. See [tape stop plugins](https://gazillionindustries.com/best-tape-stop-plugins/). **SLAM**, **SCRUB** and **CATCH** are three separate controls for it, on the face, playable while the session runs.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) ships as an Audio Unit on macOS, so it appears in Logic's menu like any stock plug-in, and it is $29. **WOW FLUT** and the **SLAM** transport are the parts Logic has nothing for. There's a demo on the page.

## Tape Delay is not a tape machine

Logic's Tape Delay is a delay whose design references tape echo units. It is a good delay and it is solving a different problem: repeats, feedback and the character of the repeats. It does not put your source signal on tape, and reaching for it to get a tape sound on a drum bus will not work. The distinction is in [tape delay explained](https://gazillionindustries.com/tape-delay-explained/). For the drum bus job, the thing that puts the signal on the machine is TRIPLE OG.

## Questions people ask

### Does Logic Pro have a tape emulation plugin?

No. It has ChromaGlow, a saturation plug-in with models of tube and analog gear, which covers the harmonic side of a tape sound. It has no device for speed instability, cassette noise or a tape transport, which is what a tape plug-in is bought for. Ours is [TRIPLE OG](https://gazillionindustries.com/tripleog.html), $29, AU on macOS.

### Can Logic use VST plugins?

No. Logic loads Audio Units only. A plug-in that ships VST3 but no AU build will not appear, however many times you rescan. TRIPLE OG ships both, plus a standalone app.

### Why can't I see ChromaGlow in Logic?

It is available only on Macs with an M1 or later Apple silicon processor. On an Intel Mac it is not installed. TRIPLE OG is a universal binary and runs on macOS 10.13 or later either way.

### What is the best tape plugin for Logic?

An Audio Unit that supplies what Logic does not, rather than more saturation. Weight your choice toward wow and flutter, cassette-shaped noise and transport behavior, which is exactly how TRIPLE OG is laid out: speed and noise on the tape half, three transport controls on the machine half. Wider field in [best tape emulation plugins](https://gazillionindustries.com/best-tape-emulation-plugins/).

### Is there a free tape plugin for Logic?

Our free plug-in is [DRUGS](https://gazillionindustries.com/drugs.html), a one-knob drum bus compressor rather than a tape simulation, so it is the free way to get one of our Audio Units into Logic and not the free way to get tape. For what free tape actually gets you, see [best free tape plugins](https://gazillionindustries.com/best-free-tape-plugins/).

## What TRIPLE OG does

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is our cassette tape simulation, $29, and on macOS it ships as an Audio Unit alongside VST3 and a standalone app, so Logic finds it. **WOW FLUT** is the speed instability, **HISS** a continuous broadband bed, and **AGE** runs from nought to sixty years, taking wear, noise and stability together. **TONE** and **DRIVE** handle brightness and thickness. The transport is on the face: **SLAM** stops the tape and returns it in sync, **SCRUB** runs the head backward and springs home, and **CATCH** makes it drag and then sprint to catch up. macOS 10.13 or later, Apple silicon or Intel; Windows 10 or later as a VST3.

Logic will color a sound beautifully. It will not put one on a machine.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
