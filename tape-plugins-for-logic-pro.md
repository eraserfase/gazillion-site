# Tape plugins for Logic Pro

> Logic loads Audio Units only. What ChromaGlow covers, why it needs Apple silicon, and the three things Logic has no plug-in for.

Source: https://gazillionindustries.com/tape-plugins-for-logic-pro/  
Published 2026-09-22, updated 2026-09-22. By Gazillion Industries, who make TRIPLE OG.

---

Logic ships a very good saturation plug-in and no tape machine. ChromaGlow covers the harmonic side properly, with models of tube and analog gear, and it leaves the parts of a tape sound that come from the transport entirely alone. Those are the parts worth buying.

Logic loads Audio Units and nothing else, so any tape plug-in you buy has to ship an AU build. ChromaGlow handles saturation and needs Apple silicon; what it does not do is speed instability, cassette noise or a transport. TRIPLE OG ships AU on macOS.

## The short version

- **Format**: Logic loads Audio Units only; VST3 will not appear

- **ChromaGlow**: Logic's saturation plug-in, under Distortion

- **Needs**: a Mac with an M1 or later chip to run it

- **Not covered**: wow and flutter, cassette noise, a transport

- **Tape Delay**: a delay, not a tape machine; different job

- **Our answer**: TRIPLE OG, AU on macOS, $29

## The format question first

Logic loads Audio Units. It does not load VST or VST3, and a plug-in installed only as a VST3 simply will not appear in the menu no matter how many times you rescan. This catches people out constantly, because most plug-in makers lead with VST3 in their marketing and mention the AU build further down.

So before anything else, check that what you are buying ships an AU build for macOS. TRIPLE OG does, alongside VST3 and a standalone app.

## What ChromaGlow already covers

ChromaGlow is Logic's saturation plug-in, found under Distortion in the audio effect menu. Apple describes it as replicating the warmth and coloration of analog audio equipment by introducing harmonic distortion, with a nonlinear response and a subtle compression that tames transients. Its Model menu offers a range of saturation models including Retro Tube and Modern Tube.

One catch worth knowing before you plan a chain around it: ChromaGlow is available only on Macs with an M1 or later Apple silicon processor. On an Intel Mac it is not there.

If saturation is what you wanted from tape, and you are on Apple silicon, you have it. Buying a tape plug-in for harmonic thickening in Logic is buying something you own.

TRIPLE OG ships as an Audio Unit on macOS, so it appears in Logic's menu like any stock plug-in. WOW FLUT and the SLAM transport are the parts Logic has nothing for. There's a demo on the page.

## The parts Logic has nothing for

- Speed instability. Nothing in Logic's stock set varies playback speed slightly and continuously the way a tape transport does. That is wow and flutter, and it is the behavior you cannot assemble from other devices.

- A cassette noise floor. Logic has noise generators; what a cassette needs is a filtered, level-matched, partly decorrelated bed that sits under the music rather than on top of it. See tape hiss.

- A transport. Stopping, dragging, rewinding and coming back in sync. See tape stop plugins.

## Tape Delay is not a tape machine

Logic's Tape Delay is a delay whose design references tape echo units. It is a good delay and it is solving a different problem: repeats, feedback and the character of the repeats. It does not put your source signal on tape, and reaching for it to get a tape sound on a drum bus will not work. The distinction is in tape delay explained.

## Questions people ask

### Does Logic Pro have a tape emulation plugin?

It has ChromaGlow, a saturation plug-in with models of tube and analog gear, which covers the harmonic side of a tape sound. It has no device for speed instability, cassette noise or a tape transport.

### Can Logic use VST plugins?

No. Logic loads Audio Units only. A plug-in that ships VST3 but no AU build will not appear, however many times you rescan.

### Why can't I see ChromaGlow in Logic?

It is available only on Macs with an M1 or later Apple silicon processor. On an Intel Mac it is not installed.

### What is the best tape plugin for Logic?

An Audio Unit that supplies what Logic does not, rather than more saturation. Weight your choice toward wow and flutter, cassette-shaped noise and transport behavior.

## What TRIPLE OG does

TRIPLE OG is our cassette tape simulation, and on macOS it ships as an Audio Unit alongside VST3 and a standalone app, so Logic finds it. WOW FLUT is the speed instability, HISS a continuous broadband bed, and AGE runs from nought to sixty years, taking wear, noise and stability together. TONE and DRIVE handle brightness and thickness. The transport is on the face: SLAM stops the tape and returns it in sync, SCRUB runs the head backward and springs home, and CATCH makes it drag and then sprint to catch up.

Logic will color a sound beautifully. It will not put one on a machine.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
